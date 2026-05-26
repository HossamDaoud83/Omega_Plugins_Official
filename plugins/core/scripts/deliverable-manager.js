#!/usr/bin/env node
/**
 * Omega Consulting Template - Deliverable Manager
 *
 * Automates deliverable tracking and management
 *
 * Usage:
 *   node deliverable-manager.js list                    # List all deliverables
 *   node deliverable-manager.js add <ws> <title>        # Add new deliverable
 *   node deliverable-manager.js update <id> <status> <percent>  # Update deliverable
 *   node deliverable-manager.js priority               # Show priority queue
 *   node deliverable-manager.js blocked                 # Show blocked items
 */

const fs = require('fs');
const path = require('path');

const TRACKER_PATH = path.join(__dirname, '..', '00_Engagement_Management', 'deliverables_tracker.json');
const STATE_PATH = path.join(__dirname, '..', 'session_state.json');

const STATUSES = ['not_started', 'in_progress', 'blocked', 'in_review', 'completed'];
const PRIORITIES = ['critical', 'high', 'medium', 'low'];

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

function getNextId(tracker) {
    let maxId = 0;
    if (tracker.workstreams) {
        tracker.workstreams.forEach(ws => {
            if (ws.deliverables) {
                ws.deliverables.forEach(d => {
                    const num = parseInt(d.id.replace('D', ''));
                    if (num > maxId) maxId = num;
                });
            }
        });
    }
    return `D${String(maxId + 1).padStart(3, '0')}`;
}

function listDeliverables() {
    const tracker = readJSON(TRACKER_PATH);
    if (!tracker) return;

    console.log('\n' + '='.repeat(80));
    console.log('DELIVERABLES LIST');
    console.log('='.repeat(80));

    if (tracker.workstreams) {
        tracker.workstreams.forEach(ws => {
            console.log(`\n[${ws.id}] ${ws.name}`);
            console.log('-'.repeat(60));

            if (ws.deliverables && ws.deliverables.length > 0) {
                ws.deliverables.forEach(d => {
                    const statusIcon = {
                        'not_started': '[ ]',
                        'in_progress': '[~]',
                        'blocked': '[X]',
                        'in_review': '[?]',
                        'completed': '[OK]'
                    }[d.status] || '[ ]';

                    console.log(`  ${statusIcon} ${d.id}: ${d.title}`);
                    console.log(`       Priority: ${d.priority} | Status: ${d.status} | Progress: ${d.completion_percentage || 0}%`);
                });
            } else {
                console.log('  No deliverables defined');
            }
        });
    }

    console.log('\n' + '='.repeat(80) + '\n');
}

function addDeliverable(workstreamId, title, priority = 'medium', description = '') {
    const tracker = readJSON(TRACKER_PATH);
    if (!tracker) return;

    const ws = tracker.workstreams?.find(w => w.id === workstreamId.toUpperCase());
    if (!ws) {
        console.error(`Workstream ${workstreamId} not found.`);
        console.log('Available workstreams:', tracker.workstreams?.map(w => w.id).join(', '));
        return;
    }

    const newId = getNextId(tracker);
    const timestamp = new Date().toISOString();

    const newDeliverable = {
        id: newId,
        workstream: workstreamId.toUpperCase(),
        type: 'document',
        priority: priority,
        title: title,
        description: description || title,
        acceptance_criteria: [],
        required_inputs: [],
        output_format: 'Word document',
        output_location: `${ws.phase}/`,
        dependencies: [],
        assigned_to: null,
        due_date: null,
        status: 'not_started',
        completion_percentage: 0,
        quality_score: null,
        review: {
            status: 'not_submitted',
            reviewer: null,
            review_type: null,
            requested_date: null,
            completed_date: null,
            decision: null,
            revision_count: 0,
            comments: []
        },
        client_approved: false,
        review_notes: '',
        last_updated: timestamp
    };

    if (!ws.deliverables) ws.deliverables = [];
    ws.deliverables.push(newDeliverable);

    tracker.total_deliverables = (tracker.total_deliverables || 0) + 1;
    tracker.last_updated = timestamp;

    writeJSON(TRACKER_PATH, tracker);

    console.log(`\n[OK] Created deliverable: ${newId} - ${title}`);
    console.log(`     Workstream: ${workstreamId}`);
    console.log(`     Priority: ${priority}\n`);
}

function updateDeliverable(id, status, percentage, notes) {
    const tracker = readJSON(TRACKER_PATH);
    const state = readJSON(STATE_PATH);
    if (!tracker) return;

    let found = false;
    const timestamp = new Date().toISOString();

    if (tracker.workstreams) {
        tracker.workstreams.forEach(ws => {
            if (ws.deliverables) {
                ws.deliverables.forEach(d => {
                    if (d.id === id.toUpperCase()) {
                        found = true;

                        if (status && STATUSES.includes(status)) {
                            d.status = status;
                        }

                        if (percentage !== undefined) {
                            d.completion_percentage = parseInt(percentage);
                        }

                        if (notes) {
                            d.review_notes = notes;
                        }

                        d.last_updated = timestamp;

                        if (status === 'completed') {
                            tracker.completed_deliverables = (tracker.completed_deliverables || 0) + 1;
                        }

                        console.log(`\n[OK] Updated ${d.id}: ${d.title}`);
                        console.log(`     Status: ${d.status}`);
                        console.log(`     Progress: ${d.completion_percentage}%`);
                        if (notes) console.log(`     Notes: ${notes}`);
                    }
                });
            }
        });
    }

    if (!found) {
        console.error(`Deliverable ${id} not found.`);
        return;
    }

    tracker.last_updated = timestamp;
    writeJSON(TRACKER_PATH, tracker);

    // Update state
    if (state) {
        state.current_deliverable = id.toUpperCase();
        state.deliverable_status = status;
        state.last_updated = timestamp;
        writeJSON(STATE_PATH, state);
    }

    console.log('');
}

function showPriority() {
    const tracker = readJSON(TRACKER_PATH);
    if (!tracker) return;

    console.log('\n' + '='.repeat(60));
    console.log('PRIORITY QUEUE');
    console.log('='.repeat(60));

    const queue = [];

    if (tracker.workstreams) {
        tracker.workstreams.forEach(ws => {
            if (ws.deliverables) {
                ws.deliverables.forEach(d => {
                    if (d.status !== 'completed') {
                        // Check dependencies
                        let depsComplete = true;
                        if (d.dependencies && d.dependencies.length > 0) {
                            d.dependencies.forEach(depId => {
                                let depFound = false;
                                tracker.workstreams.forEach(ws2 => {
                                    if (ws2.deliverables) {
                                        const dep = ws2.deliverables.find(x => x.id === depId);
                                        if (dep && dep.status === 'completed') depFound = true;
                                    }
                                });
                                if (!depFound) depsComplete = false;
                            });
                        }

                        queue.push({
                            ...d,
                            workstream_name: ws.name,
                            deps_complete: depsComplete
                        });
                    }
                });
            }
        });
    }

    // Sort by priority and dependencies
    const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
    queue.sort((a, b) => {
        // Blocked items last
        if (a.status === 'blocked' && b.status !== 'blocked') return 1;
        if (b.status === 'blocked' && a.status !== 'blocked') return -1;

        // Items with deps complete first
        if (a.deps_complete && !b.deps_complete) return -1;
        if (b.deps_complete && !a.deps_complete) return 1;

        // Then by priority
        return (priorityOrder[a.priority] || 3) - (priorityOrder[b.priority] || 3);
    });

    queue.forEach((d, i) => {
        const depsIcon = d.deps_complete ? '[OK]' : '[--]';
        const statusIcon = d.status === 'blocked' ? '[BLOCKED]' : '';

        console.log(`\n${i + 1}. ${d.id}: ${d.title}`);
        console.log(`   Priority: ${d.priority.toUpperCase()} | Status: ${d.status} ${statusIcon}`);
        console.log(`   Dependencies: ${depsIcon} ${d.dependencies?.join(', ') || 'None'}`);
        console.log(`   Progress: ${d.completion_percentage || 0}%`);
    });

    console.log('\n' + '='.repeat(60) + '\n');
}

function showBlocked() {
    const tracker = readJSON(TRACKER_PATH);
    if (!tracker) return;

    console.log('\n' + '='.repeat(60));
    console.log('BLOCKED DELIVERABLES');
    console.log('='.repeat(60));

    let blockedCount = 0;

    if (tracker.workstreams) {
        tracker.workstreams.forEach(ws => {
            if (ws.deliverables) {
                ws.deliverables.forEach(d => {
                    if (d.status === 'blocked') {
                        blockedCount++;
                        console.log(`\n[BLOCKED] ${d.id}: ${d.title}`);
                        console.log(`   Workstream: ${ws.name}`);
                        console.log(`   Notes: ${d.review_notes || 'No notes'}`);
                        console.log(`   Last Updated: ${d.last_updated || 'Never'}`);
                    }
                });
            }
        });
    }

    if (blockedCount === 0) {
        console.log('\nNo blocked deliverables. All clear!');
    } else {
        console.log(`\nTotal blocked: ${blockedCount}`);
    }

    console.log('\n' + '='.repeat(60) + '\n');
}

// Parse command
const command = process.argv[2];
const args = process.argv.slice(3);

switch (command) {
    case 'list':
        listDeliverables();
        break;
    case 'add':
        if (args.length < 2) {
            console.log('Usage: node deliverable-manager.js add <workstream-id> <title> [priority]');
            console.log('Example: node deliverable-manager.js add WS01 "Gap Analysis Report" high');
        } else {
            addDeliverable(args[0], args[1], args[2] || 'medium', args[3]);
        }
        break;
    case 'update':
        if (args.length < 2) {
            console.log('Usage: node deliverable-manager.js update <id> <status> [percentage] [notes]');
            console.log('Statuses:', STATUSES.join(', '));
            console.log('Example: node deliverable-manager.js update D001 in_progress 50 "Halfway done"');
        } else {
            updateDeliverable(args[0], args[1], args[2], args[3]);
        }
        break;
    case 'priority':
        showPriority();
        break;
    case 'blocked':
        showBlocked();
        break;
    default:
        console.log('Usage:');
        console.log('  node deliverable-manager.js list                         # List all deliverables');
        console.log('  node deliverable-manager.js add <ws> <title> [priority]  # Add new deliverable');
        console.log('  node deliverable-manager.js update <id> <status> [%] [notes]  # Update deliverable');
        console.log('  node deliverable-manager.js priority                     # Show priority queue');
        console.log('  node deliverable-manager.js blocked                      # Show blocked items');
}
