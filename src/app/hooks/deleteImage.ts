import { storage } from "@/firebase/firebase";
import { ref, deleteObject } from "firebase/storage";

export const deleteImage = (imageUrl: string) => {
  const pathStart = imageUrl.indexOf("/o/") + 3;
  const pathEnd = imageUrl.indexOf("?", pathStart);
  const encodedPath = imageUrl.substring(pathStart, pathEnd); // e.g. images%2Ffile.jpg
  const decodedPath = decodeURIComponent(encodedPath);
  // Delete the file
  const imageRef = ref(storage, decodedPath);
  deleteObject(imageRef)
    .then(() => {
      return;
    })
    .catch((error) => {
      console.error("Error deleting image:", error);
    });
};
