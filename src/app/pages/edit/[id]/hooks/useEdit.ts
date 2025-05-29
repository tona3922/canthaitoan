import { deleteImage } from "@/app/hooks/deleteImage";
import { TNote } from "@/app/pages/newproduct/page";
import { TProduct } from "@/app/pages/products/product";
import { NavbarLayer, TSelectData } from "@/asset/NavbarLayer";
import { db, storage } from "@/firebase/firebase";
import { notification } from "antd";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import router, { useRouter } from "next/router";
import { useState } from "react";
import { v4 } from "uuid";
export const useEdit = (id: string) => {
  const router = useRouter();
  const [product, setProduct] = useState<TProduct>();
  const [isLoading, setIsLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const successNotification = () => {
    api["success"]({
      message: "Success",
      description: "Cập nhật sản phẩm thành công",
    });
  };
  const errorNotification = (msg: string) => {
    api["error"]({
      message: "Error",
      description: msg,
    });
  };
  const data = NavbarLayer;
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [note, setNote] = useState<TNote[]>([
    { noteName: "", noteDescription: "" },
  ]);
  const [type, setType] = useState<string>("");
  const [type2, setType2] = useState<string>("");
  const [subData, setSubData] = useState<TSelectData[] | undefined>([]);
  const [description, setDescription] = useState("");
  const [input, setInput] = useState("");
  const handleChange = (value: string) => {
    setType(value);
    const findData = NavbarLayer.find((item) => item.value === value);
    if (findData) {
      setSubData(findData.children);
    }
  };
  const handleChangeSub = (value: string) => {
    setType2(value);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setIsLoading(true);
    try {
      let url = "";
      if (imageUpload && product) {
        deleteImage(product.image);
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        const snapshot = await uploadBytes(imageRef, imageUpload);
        url = await getDownloadURL(snapshot.ref);
      }
      const data = {
        name: formData.get("name"),
        description: formData.get("description"),
        type: type,
        subtype: type2 ?? "",
        image: url !== "" ? url : product?.image,
        information: note,
      };
      // Upload image

      await setDoc(doc(db, "users", id), data);
      successNotification();
      setIsLoading(false);
      setTimeout(() => {
        router.push(`/pages/detail/${id}`);
      }, 1500);
    } catch (error) {
      errorNotification("Đã có lỗi xảy ra vui lòng thử lại");
      // throw new Error("Failed post data");
      // Handle error
    }
  };

  const handleClick = () => {
    setNote([...note, { noteName: "", noteDescription: "" }]);
  };
  const fetchProductById = async () => {
    try {
      const docRef = doc(db, "users", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = {
          _id: docSnap.id,
          ...docSnap.data(),
        } as TProduct;
        // console.log(docSnap.data());
        setProduct(data);
        setInput(data.name);
        setType(data.type);
        setNote(data.information);
        setDescription(data.description);
        if (data.type) {
          const findData = NavbarLayer.find((item) => item.value === data.type);
          if (findData) {
            setSubData(findData.children);
            setType2(data.subtype);
          }
        }
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      throw new Error("Failed post data");
    }
  };
  return {
    isLoading,
    fetchProductById,
    handleClick,
    handleSubmit,
    handleChange,
    handleChangeSub,
    contextHolder,
    data,
    product,
    type,
    type2,
    input,
    subData,
    description,
    setImageUpload,
    note,
    setNote,
    setDescription,
    setInput,
  };
};
