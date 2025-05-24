"use client";
import React, { Dispatch, SetStateAction } from "react";
import { useState, useEffect } from "react";

import Image from "next/image";

const UploadImageBtn: React.FC<{
  setImageUpload: Dispatch<SetStateAction<File | null>>;
}> = ({ setImageUpload }) => {
  // const [imageUpload, setImageUpload] = useState<File | null>(null);
  // const [imageUrl, setImageUrl] = useState("");
  const [preview, setPreview] = useState<string>("");

  // const uploadFile = () => {
  //   if (imageUpload == null) return;
  //   const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
  //   uploadBytes(imageRef, imageUpload).then((snapshot) => {
  //     getDownloadURL(snapshot.ref).then((url) => {
  //       setImageUrl(url);
  //       console.log(url);
  //     });
  //   });
  // };

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
      {selectedFile && <Image alt="" src={preview} width={100} height={100} />}
    </div>
  );
};

export default UploadImageBtn;
