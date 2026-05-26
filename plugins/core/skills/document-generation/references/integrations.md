# Integration Examples

## SharePoint / Cloud Storage Upload

```javascript
const axios = require("axios");
const fs = require("fs");
const path = require("path");

// ============================================
// SHAREPOINT INTEGRATION
// ============================================

/**
 * Upload file to SharePoint Online
 * Requires: Microsoft Graph API credentials
 */
async function uploadToSharePoint(config) {
    const { 
        filePath, 
        siteId, 
        driveId, 
        folderPath,
        accessToken 
    } = config;
    
    const fileName = path.basename(filePath);
    const fileContent = fs.readFileSync(filePath);
    
    const uploadUrl = `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/root:/${folderPath}/${fileName}:/content`;
    
    try {
        const response = await axios.put(uploadUrl, fileContent, {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/octet-stream"
            }
        });
        
        console.log(`✓ Uploaded: ${fileName}`);
        return {
            success: true,
            webUrl: response.data.webUrl,
            id: response.data.id
        };
    } catch (error) {
        console.error(`✗ Upload failed: ${error.message}`);
        return {
            success: false,
            error: error.message
        };
    }
}

/**
 * Create folder in SharePoint
 */
async function createSharePointFolder(config) {
    const { siteId, driveId, folderPath, accessToken } = config;
    
    const url = `https://graph.microsoft.com/v1.0/sites/${siteId}/drives/${driveId}/root/children`;
    
    const response = await axios.post(url, {
        name: folderPath,
        folder: {},
        "@microsoft.graph.conflictBehavior": "rename"
    }, {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    });
    
    return response.data;
}

// ============================================
// GOOGLE DRIVE INTEGRATION
// ============================================

const { google } = require("googleapis");

/**
 * Upload file to Google Drive
 */
async function uploadToGoogleDrive(config) {
    const { filePath, folderId, credentials } = config;
    
    const auth = new google.auth.GoogleAuth({
        keyFile: credentials,
        scopes: ["https://www.googleapis.com/auth/drive.file"]
    });
    
    const drive = google.drive({ version: "v3", auth });
    const fileName = path.basename(filePath);
    
    const response = await drive.files.create({
        requestBody: {
            name: fileName,
            parents: folderId ? [folderId] : []
        },
        media: {
            body: fs.createReadStream(filePath)
        }
    });
    
    console.log(`✓ Uploaded to Google Drive: ${fileName}`);
    return response.data;
}

// ============================================
// EMAIL INTEGRATION
// ============================================

const nodemailer = require("nodemailer");

/**
 * Send email with document attachments
 */
async function sendDocumentEmail(config) {
    const {
        to,
        cc,
        subject,
        body,
        attachments,
        smtpConfig
    } = config;
    
    const transporter = nodemailer.createTransport(smtpConfig);
    
    const mailOptions = {
        from: smtpConfig.auth.user,
        to: to.join(", "),
        cc: cc?.join(", "),
        subject: subject,
        html: `
            <div style="font-family: Arial, sans-serif;">
                <div style="background: #1B4F72; color: white; padding: 20px;">
                    <h2>Omega Consulting</h2>
                </div>
                <div style="padding: 20px;">
                    ${body}
                </div>
                <div style="color: #666; font-size: 12px; padding: 20px;">
                    <p><em>This message and attachments are confidential.</em></p>
                </div>
            </div>
        `,
        attachments: attachments.map(a => ({
            filename: path.basename(a),
            path: a
        }))
    };
    
    const result = await transporter.sendMail(mailOptions);
    console.log(`✓ Email sent to: ${to.join(", ")}`);
    return result;
}

/**
 * Send deliverable notification
 */
async function notifyDeliverable(config) {
    const { client, deliverable, filePath, recipients } = config;
    
    return sendDocumentEmail({
        to: recipients,
        subject: `[Omega] ${deliverable} - Ready for Review`,
        body: `
            <p>Dear ${client} Team,</p>
            <p>Please find attached the <strong>${deliverable}</strong> for your review.</p>
            <p>We welcome your feedback and are available to discuss at your convenience.</p>
            <p>Best regards,<br>Omega Consulting</p>
        `,
        attachments: [filePath],
        smtpConfig: {
            host: process.env.SMTP_HOST,
            port: 587,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        }
    });
}

// ============================================
// DELIVERY WORKFLOW
// ============================================

/**
 * Complete delivery workflow
 */
async function deliverDocument(config) {
    const {
        filePath,
        deliveryMethod, // "sharepoint" | "gdrive" | "email" | "all"
        sharePointConfig,
        gDriveConfig,
        emailConfig
    } = config;
    
    const results = {
        file: filePath,
        deliveries: []
    };
    
    if (deliveryMethod === "sharepoint" || deliveryMethod === "all") {
        if (sharePointConfig) {
            const spResult = await uploadToSharePoint({
                ...sharePointConfig,
                filePath
            });
            results.deliveries.push({ method: "SharePoint", ...spResult });
        }
    }
    
    if (deliveryMethod === "gdrive" || deliveryMethod === "all") {
        if (gDriveConfig) {
            const gdResult = await uploadToGoogleDrive({
                ...gDriveConfig,
                filePath
            });
            results.deliveries.push({ method: "Google Drive", ...gdResult });
        }
    }
    
    if (deliveryMethod === "email" || deliveryMethod === "all") {
        if (emailConfig) {
            const emailResult = await sendDocumentEmail({
                ...emailConfig,
                attachments: [filePath]
            });
            results.deliveries.push({ method: "Email", success: true });
        }
    }
    
    // Report
    console.log("\n═══════════════════════════════════════");
    console.log("DELIVERY COMPLETE");
    console.log("═══════════════════════════════════════");
    results.deliveries.forEach(d => {
        console.log(`${d.success ? "✓" : "✗"} ${d.method}`);
    });
    
    return results;
}

// ============================================
// USAGE EXAMPLES
// ============================================

// Upload to SharePoint
await uploadToSharePoint({
    filePath: "05_Deliverables_Final/Report.docx",
    siteId: "contoso.sharepoint.com,abc123",
    driveId: "drive-id",
    folderPath: "Omega Engagements/Acme Corp",
    accessToken: process.env.SHAREPOINT_TOKEN
});

// Send via email
await notifyDeliverable({
    client: "Acme Corp",
    deliverable: "Digital Strategy Assessment",
    filePath: "05_Deliverables_Final/Acme_Assessment_v1.0.docx",
    recipients: ["client@acme.com", "sponsor@acme.com"]
});
```

---

## Required Packages

```bash
npm install axios googleapis nodemailer
```

## Environment Variables

```env
# SharePoint
SHAREPOINT_TOKEN=your_access_token

# Google Drive
GOOGLE_APPLICATION_CREDENTIALS=path/to/credentials.json

# Email (SMTP)
SMTP_HOST=smtp.office365.com
SMTP_USER=your@email.com
SMTP_PASS=your_password
```
