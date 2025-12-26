'use server'

import { google } from 'googleapis';
import { Readable } from 'stream';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    // Fix newlines in private key securely
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  // Use full drive scope to ensure no permission issues with shared folders
  scopes: ['https://www.googleapis.com/auth/drive'], 
});

const drive = google.drive({ version: 'v3', auth });

export async function uploadPDFToDrive(formData: FormData) {
  try {
    const file = formData.get('file') as File;
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    // --- DEBUGGING LOGS (Check your terminal when you upload) ---
    console.log("Attempting Upload...");
    console.log("File Name:", file?.name);
    console.log("File Type:", file?.type);
    console.log("Target Folder ID:", folderId ? "Exists" : "MISSING (Undefined)");
    console.log("Service Account Email:", process.env.GOOGLE_CLIENT_EMAIL);
    // ------------------------------------------------------------

    if (!file) throw new Error('No file provided');
    if (!folderId) throw new Error('GOOGLE_DRIVE_FOLDER_ID is missing in .env');

    // Convert File to Stream
    const buffer = Buffer.from(await file.arrayBuffer());
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);

    // 1. Upload File
    const response = await drive.files.create({
      requestBody: {
        name: file.name,
        parents: [folderId], // <--- This MUST be present
      },
      media: {
        mimeType: file.type,
        body: stream,
      },
      fields: 'id, webViewLink',
    });

    const fileId = response.data.id!;
    console.log("Upload Success! File ID:", fileId);

    // 2. Make Public (Anyone with link can view)
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone',
      },
    });

    return { success: true, link: response.data.webViewLink };

  } catch (error: any) {
    console.error("Google Drive Upload Error Details:");
    console.error(error.message); // Will show the specific API error
    return { success: false, error: error.message || "Failed to upload to Drive" };
  }
}