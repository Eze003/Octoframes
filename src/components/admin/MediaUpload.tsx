"use client";

import { useRef, useState } from "react";
import * as tus from "tus-js-client";

interface MediaUploadProps {
  onUpload: (url: string) => void;
  label?: string;
  accept?: string;
  type?: "image" | "video" | "gif";
}

export default function MediaUpload({ 
  onUpload, 
  label = "Upload Media",
  accept = "image/*,video/*",
  type = "image"
}: MediaUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    try {
      if (type === "video" || file.type.startsWith("video/")) {
        await handleVimeoUpload(file);
      } else {
        await handleCloudinaryUpload(file);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please check your console and .env configuration.");
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleCloudinaryUpload = async (file: File) => {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const folder = process.env.NEXT_PUBLIC_CLOUDINARY_FOLDER || "octoframes";
    
    const signRes = await fetch("/api/cloudinary/sign", {
      method: "POST",
      body: JSON.stringify({
        paramsToSign: { timestamp, folder },
      }),
    });
    
    const { signature } = await signRes.json();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("signature", signature);
    formData.append("timestamp", timestamp.toString());
    formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || "");
    formData.append("folder", folder);

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
      { method: "POST", body: formData }
    );

    const data = await res.json();
    if (data.secure_url) {
      onUpload(data.secure_url);
    } else {
      throw new Error(data.error?.message || "Cloudinary upload failed");
    }
  };

  const handleVimeoUpload = async (file: File) => {
    // 1. Get upload ticket
    const ticketRes = await fetch("/api/vimeo/upload", {
      method: "POST",
      body: JSON.stringify({
        fileName: file.name,
        fileSize: file.size,
      }),
    });

    const { uploadLink, videoId } = await ticketRes.json();

    if (!uploadLink) throw new Error("Could not get Vimeo upload link");

    // 2. Perform TUS upload
    return new Promise<void>((resolve, reject) => {
      const upload = new tus.Upload(file, {
        uploadUrl: uploadLink,
        endpoint: uploadLink, // Vimeo uses the uploadLink as the endpoint for TUS
        retryDelays: [0, 3000, 5000, 10000, 20000],
        metadata: {
          filename: file.name,
          filetype: file.type,
        },
        onError: (error) => {
          console.error("TUS Error:", error);
          reject(error);
        },
        onProgress: (bytesSent, bytesTotal) => {
          const percentage = Math.round((bytesSent / bytesTotal) * 100);
          setUploadProgress(percentage);
        },
        onSuccess: () => {
          // Vimeo URL format: https://vimeo.com/VIDEO_ID
          onUpload(`https://vimeo.com/${videoId}`);
          resolve();
        },
      });

      upload.start();
    });
  };

  return (
    <div className="w-full">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleUpload}
        className="hidden"
        accept={type === "video" ? "video/*" : accept}
      />
      
      <button
        type="button"
        disabled={isUploading}
        onClick={() => fileInputRef.current?.click()}
        className="w-full flex flex-col items-center justify-center py-8 border-2 border-dashed border-white/[0.08] rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary-500/40 transition-all group relative overflow-hidden"
      >
        {isUploading && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                  {type === "video" ? "Transmitting to Vimeo" : "Uploading to Cloudinary"}
                </span>
                <span className="text-[14px] font-black text-primary-400 mt-1">{uploadProgress}%</span>
              </div>
            </div>
          </div>
        )}

        <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
          {type === "video" ? (
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-400">
               <polygon points="23 7 16 12 23 17 23 7" />
               <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
             </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-400">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          )}
        </div>
        <span className="text-white font-bold text-[11px] uppercase tracking-widest">{label}</span>
        <span className="text-white/20 text-[10px] mt-1 italic">
          {type === "video" ? "Vimeo Video Manager" : "Cloudinary Asset Manager"}
        </span>
      </button>
    </div>
  );
}

