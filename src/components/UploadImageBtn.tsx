"use client";
import React, { Dispatch, SetStateAction } from "react";
import { useState, useEffect } from "react";

import Image from "next/image";

const UploadImageBtn: React.FC<{
  setImageUpload: Dispatch<SetStateAction<File | null>>;
  defaultImageLink?: string;
}> = ({ setImageUpload, defaultImageLink }) => {
  const [preview, setPreview] = useState<string>(defaultImageLink ?? "");

  const [selectedFile, setSelectedFile] = useState();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      // setPreview(undefined)
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };
  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(
            event.target.files && event.target.files[0]
              ? event.target.files[0]
              : null
          );
          onSelectFile(event);
        }}
      />
      {selectedFile ? (
        <Image src={preview} alt="preview" width={200} height={200} />
      ) : defaultImageLink ? (
        <Image src={defaultImageLink} alt="default" width={200} height={200} />
      ) : null}
    </div>
  );
};

export default UploadImageBtn;
