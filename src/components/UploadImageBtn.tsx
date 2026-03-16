"use client";
import React, { useEffect, useState } from "react";
import { useS3Upload } from "@/hooks/useS3Upload";
import { Spin, notification } from "antd";
import Image from "next/image";
import { LoadingOutlined } from "@ant-design/icons";

const UploadImageBtn: React.FC<{
  onUploadComplete: (url: string) => void;
  defaultImageLink?: string;
}> = ({ onUploadComplete, defaultImageLink }) => {
  const [preview, setPreview] = useState<string>("");
  useEffect(() => {
    if (defaultImageLink) setPreview(defaultImageLink);
  }, [defaultImageLink]);
  const { upload, isUploading } = useS3Upload();
  const [api, contextHolder] = notification.useNotification();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show local preview immediately
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    try {
      const { publicUrl } = await upload(file);
      onUploadComplete(publicUrl);
      URL.revokeObjectURL(objectUrl);
      setPreview(publicUrl);
    } catch (err) {
      URL.revokeObjectURL(objectUrl);
      setPreview(defaultImageLink ?? "");
      const message = err instanceof Error ? err.message : "Upload thất bại";
      api.error({ message: "Lỗi tải ảnh", description: message });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {contextHolder}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={isUploading}
      />
      {isUploading && (
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Spin indicator={<LoadingOutlined spin />} size="small" />
          <span>Đang tải ảnh lên...</span>
        </div>
      )}
      {preview && (
        <Image
          src={preview}
          alt="preview"
          width={200}
          height={200}
          className="object-contain"
          unoptimized={preview.startsWith("blob:")}
        />
      )}
    </div>
  );
};

export default UploadImageBtn;
