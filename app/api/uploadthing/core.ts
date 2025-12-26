import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  // Define a "pdfUploader" endpoint
  pdfUploader: f({ pdf: { maxFileSize: "8MB", maxFileCount: 1 } })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for file:", file.url);
      return { uploadedBy: "admin" };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;