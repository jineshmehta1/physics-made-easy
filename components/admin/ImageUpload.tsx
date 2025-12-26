"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Upload, Image as IconImage } from "lucide-react";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
}

export default function ImageUpload({ value, onChange }: ImageUploadProps) {
  return (
    <div className="space-y-4">
      <CldUploadWidget
        uploadPreset="physics" // Ensure this matches your Cloudinary settings
        onSuccess={(result: any) => onChange(result.info.secure_url)}
      >
        {({ open }) => (
          <div 
            onClick={() => open()}
            className="relative cursor-pointer hover:opacity-70 transition border-2 border-dashed border-slate-300 flex flex-col justify-center items-center h-40 rounded-xl bg-slate-50"
          >
            {value ? (
              <img src={value} alt="Upload" className="w-full h-full object-cover rounded-xl" />
            ) : (
              <div className="flex flex-col items-center gap-2 text-slate-500">
                <Upload size={24} />
                <span className="font-semibold text-sm">Click to Upload Image</span>
              </div>
            )}
          </div>
        )}
      </CldUploadWidget>
      {value && (
        <div className="flex items-center gap-2 text-xs text-green-600 bg-green-50 px-3 py-1 rounded-md w-fit">
          <IconImage size={12} /> Image Ready
        </div>
      )}
    </div>
  );
}