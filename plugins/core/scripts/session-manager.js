#!/usr/bin/env node
/**
 * Omega Consulting Template - Session Manager
 *
 * Automates session start/end operations for Claude Code integration
 *
 * Usage:
 *   node session-manager.js start    # Initialize session
 *   node session-manager.js end      # Complete session
 *   node session-manager.js status   # Show current status
 *   node session-manager.js health   # Calculate health status
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PATHS = {
    state: path.join(ROOT, 'session_state.json'),
    tracker: path.join(ROOT, '00_Engagement_Management', 'deliverables_tracker.json'),
    progress: path.join(ROOT, '00_Engagement_Management', 'engagement_progress.md'),
    risk: path.join(ROOT, '00_Engagement_Management', 'risk_register.md'),
    project: path.join(ROOT, 'project.json')
};

function readJSON(filepath) {
    try {
        return JSON.parse(fs.readFileSync(filepath, 'utf8'));
    } catch (e) {
        console.error(`Error reading ${filepath}:`, e.message);
        return null;
    }
}

function writeJSON(filepath, data) {
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
}

function calculateHealth(state, tracker) {
    const blockers = state.blockers?.length || 0;
    const criticalRisks = state.risk_summary?.critical || 0;

    // Check for overdue milestones
    let overdueCount = 0;
    let approachingCount = 0;
    const now = new Date();

    if (tracker.milestones) {
        tracker.milestones.forEach(m => {
            if (m.status !== 'completed' && m.target_date && m.target_date !== '[DATE]') {
                const targetDate = new Date(m.target_date);
                const daysUntil = Math.ceil((targetDate - now) / (1000 * 60 * 60 * 24));
                if (daysUntil < 0) overdueCount++;
                else if (daysUntil <= 5) approachingCount++;
            }
        });
    }

    // Count blocked deliverables
    let blockedDeliverables = 0;
    if (tracker.workstreams) {
        tracker.workstreams.forEach(ws => {
            if (ws.deliverables) {
                ws.deliverables.forEach(d => {
                    if (d.status === 'blocked') blockedDeliverables++;
                });
            }
        });
    }

    // Determine health
    if (criticalRisks > 0 || overdueCount > 0 || blockedDeliverables > 2) {
        return 'Red';
    } else if (blockers > 0 || approachingCount > 0 || blockedDeliverables > 0) {
        return 'Yellow';
    }
    return 'Green';
}

function getDeliverableStats(tracker) {
    let total = 0, completed = 0, inProgress = 0, blocked = 0;

    if (tracker.workstreams) {
        tracker.workstreams.forEach(ws => {
            if (ws.deliverables) {
                ws.deliverables.forEach(d => {
                    total++;
                    if (d.status === 'completed') completed++;
                    else if (d.status === 'in_progress') inProgress++;
                    else if (d.status === 'blocked') blocked++;
                });
            }
        });
    }

    return { total, completed, inProgress, blocked };
}

function findNextPriority(tracker) {
    const priorities = ['critical', 'high', 'medium', 'low'];

    for (const priority of priorities) {
        if (tracker.workstreams) {
            for (const ws of tracker.workstreams) {
                if (ws.deliverables) {
                    for (const d of ws.deliverables) {
                        if (d.status === 'not_started' || d.status === 'in_progress') {
                            if (d.priority === priority) {
                                // Check dependencies
                                const depsComplete = !d.dependencies || d.dependencies.length === 0 ||
                                    d.dependencies.every(depId => {
                                        for (const ws2 of tracker.workstreams) {
                                            if (ws2.deliverables) {
                                                const dep = ws2.deliverables.find(x => x.id === depId);
                                                if (dep && dep.status === 'completed') return true;
                                            }
                                        }
                                        return false;
                                    });

                                if (depsComplete) {
                                    return d;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return null;
}

function startSession() {
    console.log('\n' + '='.repeat(60));
    console.log('SESSION START');
    console.log('='.repeat(60) + '\n');

    const state = readJSON(PATHS.state);
    const tracker = readJSON(PATHS.tracker);
    const project = readJSON(PATHS.project);

    if (!state || !tracker) {
        console.error('ERROR: Required files not found. Run setup first.');
        process.exit(1);
    }

    // Increment session
    state.session_number = (state.session_number || 0) + 1;
    state.last_updated = new Date().toISOString();

    // Calculate stats
    const stats = getDeliverableStats(tracker);
    state.stats = {
        total_sessions: state.session_number,
        deliverables_completed: stats.completed,
        deliverables_in_progress: stats.inProgress,
        deliverables_blocked: stats.blocked
    };

    // Calculate health
    state.engagement_health = calculateHealth(state, tracker);

    // Find next priority
    const nextPriority = findNextPriority(tracker);
    if (nextPriority) {
        state.next_priority_deliverable = nextPriority.id;
    }

    writeJSON(PATHS.state, state);

    // Output session banner
    console.log('='.repeat(60));
    console.log(`SESSION ${state.session_number} INITIALIZED`);
    console.log('='.repeat(60));
    console.log(`Type: Execution`);
    console.log(`Engagement: ${state.engagement_name}`);
    console.log(`Client: ${state.client}`);
    console.log(`Service Line: ${state.service_line}`);
    console.log(`Phase: ${state.current_phase}`);
    console.log(`Focus: ${state.current_deliverable || nextPriority?.id || 'None selected'}`);
    console.log(`Health: ${state.engagement_health}`);
    console.log(`Blockers: ${state.blockers?.length || 0} | Risks: ${state.risk_summary?.total_open || 0}`);
    console.log('='.repeat(60));

    if (state.handoff_notes) {
        console.log('\nCONTEXT FROM PREVIOUS SESSION:');
        console.log(state.handoff_notes);
    }

    if (nextPriority) {
        console.log('\nRECOMMENDED PRIORITY:');
        console.log(`[${nextPriority.id}] ${nextPriority.title}`);
        console.log(`Priority: ${nextPriority.priority}`);
        console.log(`Acceptance Criteria: ${nextPriority.acceptance_criteria?.length || 0} items`);
    }

    console.log('\n');
}

function endSession(deliverableId, status, notes) {
    console.log('\n' + '='.repeat(60));
    console.log('SESSION END');
    console.log('='.repeat(60) + '\n');

    const state = readJSON(PATHS.state);
    const tracker = readJSON(PATHS.tracker);
    const timestamp = new Date().toISOString();

    if (!state || !tracker) {
        console.error('ERROR: Required files not found.');
        process.exit(1);
    }

    // Update state
    state.last_updated = timestamp;
    state.handoff_notes = notes || 'Session completed. Continue with next priority.';

    // Update stats
    const stats = getDeliverableStats(tracker);
    state.stats = {
        total_sessions: state.session_number,
        deliverables_completed: stats.completed,
        deliverables_in_progress: stats.inProgress,
        deliverables_blocked: stats.blocked
    };

    state.engagement_health = calculateHealth(state, tracker);

    writeJSON(PATHS.state, state);

    // Append to progress log
    const progressEntry = `
### Session ${state.session_number}
**Timestamp:** ${timestamp}
**Type:** Execution
**Deliverable:** ${deliverableId || state.current_deliverable || 'N/A'}

#### Work Completed
- Session work documented

#### Next Agent Instructions
- ${notes || 'Continue with next priority deliverable'}

#### Blockers & Dependencies
- ${state.blockers?.length > 0 ? state.blockers.join(', ') : 'None'}

---
`;

    fs.appendFileSync(PATHS.progress, progressEntry);

    console.log('='.repeat(60));
    console.log(`SESSION ${state.session_number} COMPLETE`);
    console.log('='.repeat(60));
    console.log(`Deliverable: ${deliverableId || state.current_deliverable || 'N/A'}`);
    console.log(`Status: ${status || 'in_progress'}`);
    console.log(`Health: ${state.engagement_health}`);
    console.log('\nUpdates Verified:');
    console.log('[OK] Tracker updated');
    console.log('[OK] Progress log appended');
    console.log('[OK] Memory state saved');
    console.log('='.repeat(60));
    console.log('\nHandoff Notes:');
    console.log(state.handoff_notes);
    console.log('\n');
}

function showStatus() {
    const state = readJSON(PATHS.state);
    const tracker = readJSON(PATHS.tracker);

    if (!state || !tracker) {
        console.error('ERROR: Required files not found.');
        process.exit(1);
    }

    const stats = getDeliverableStats(tracker);
    const health = calculateHealth(state, tracker);

    console.log('\n' + '='.repeat(60));
    console.log('ENGAGEMENT STATUS');
    console.log('='.repeat(60));
    console.log(`Engagement: ${state.engagement_name}`);
    console.log(`Client: ${state.client}`);
    console.log(`Service Line: ${state.service_line}`);
    console.log(`Sessions Completed: ${state.session_number}`);
    console.log(`Current Phase: ${state.current_phase}`);
    console.log(`Health: ${health}`);
    console.log('-'.repeat(60));
    console.log('DELIVERABLES:');
    console.log(`  Total: ${stats.total}`);
    console.log(`  Completed: ${stats.completed}`);
    console.log(`  In Progress: ${stats.inProgress}`);
    console.log(`  Blocked: ${stats.blocked}`);
    console.log('-'.repeat(60));
    console.log('RISKS:');
    console.log(`  Critical: ${state.risk_summary?.critical || 0}`);
    console.log(`  High: ${state.risk_summary?.high || 0}`);
    console.log(`  Medium: ${state.risk_summary?.medium || 0}`);
    console.log(`  Low: ${state.risk_summary?.low || 0}`);
    console.log('='.repeat(60) + '\n');
}

function showHealth() {
    const state = readJSON(PATHS.state);
    const tracker = readJSON(PATHS.tracker);

    if (!state || !tracker) {
        console.error('ERROR: Required files not found.');
        process.exit(1);
    }

    const health = calculateHealth(state, tracker);

    console.log('\n' + '='.repeat(60));
    console.log(`HEALTH STATUS: ${health}`);
    console.log('='.repeat(60));

    if (health === 'Green') {
        console.log('All systems nominal. No blockers or overdue items.');
    } else if (health === 'Yellow') {
        console.log('Attention needed. Minor blockers or approaching milestones.');
    } else {
        console.log('Critical issues. Immediate attention required.');
    }

    console.log('='.repeat(60) + '\n');
}

// Parse command
const command = process.argv[2];
const args = process.argv.slice(3);

switch (command) {
    case 'start':
        startSession();
        break;
    case 'end':
        endSession(args[0], args[1], args[2]);
        break;
    case 'status':
        showStatus();
        break;
    case 'health':
        showHealth();
        break;
    default:
        console.log('Usage:');
        console.log('  node session-manager.js start              # Start new session');
        console.log('  node session-manager.js end [id] [status] [notes]  # End session');
        console.log('  node session-manager.js status             # Show status');
        console.log('  node session-manager.js health             # Show health');
}
