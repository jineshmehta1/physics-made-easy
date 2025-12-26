"use client";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";

export function ImageUpload({
  onUploadComplete,
}: {
  onUploadComplete: (url: string) => void;
}) {
  return (
    <UploadButton<OurFileRouter, "imageUploader">
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        if (res?.[0]?.url) {
          onUploadComplete(res[0].url);
        }
      }}
      onUploadError={(error) => {
        alert(error.message);
      }}
    />
  );
}
