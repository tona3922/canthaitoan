import { useState } from "react";

type UploadResult = {
  publicUrl: string;
};

export function useS3Upload() {
  const [isUploading, setIsUploading] = useState(false);

  const upload = async (file: File): Promise<UploadResult> => {
    setIsUploading(true);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName: file.name, fileType: file.type }),
      });
      if (!res.ok) throw new Error("Failed to get upload URL");

      const { presignedUrl, publicUrl } = await res.json();

      const uploadRes = await fetch(presignedUrl, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "Content-Disposition": "inline",
        },
        body: file,
      });
      if (!uploadRes.ok) {
        const errorText = await uploadRes.text();
        console.error("S3 upload failed:", uploadRes.status, errorText);
        throw new Error(`S3 upload failed (${uploadRes.status}): ${errorText}`);
      }

      return { publicUrl };
    } finally {
      setIsUploading(false);
    }
  };

  return { upload, isUploading };
}
