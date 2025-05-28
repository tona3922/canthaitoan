"use client";
import { useEffect, useState } from "react";
import { TProduct } from "../../products/product";
import { NavbarLayer, TSelectData } from "@/asset/NavbarLayer";
import { Modal, notification, Select, Spin } from "antd";
import { useRouter } from "next/navigation";
import InfoChunk from "@/components/InfoChunk";
import { db, storage } from "@/firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import UploadImageBtn from "@/components/UploadImageBtn";
import { v4 } from "uuid";
import { TNote } from "../../newproduct/page";
import { LoadingOutlined } from "@ant-design/icons";
import { deleteImage } from "@/app/hooks/deleteImage";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [product, setProduct] = useState<TProduct>();
  const [input, setInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    if (product) {
      deleteImage(product.image);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const docRef = doc(db, "users", params.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = {
            _id: docSnap.id,
            ...docSnap.data(),
          } as TProduct;
          console.log(docSnap.data());
          setProduct(data);
          setInput(data.name);
          setType(data.type);
          setNote(data.information);
          setDescription(data.description);
          if (data.type) {
            const findData = NavbarLayer.find(
              (item) => item.value === data.type
            );
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
    fetchProductById();
  }, [params.id]);
  const [api, contextHolder] = notification.useNotification();
  const data = NavbarLayer;
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [note, setNote] = useState<TNote[]>([
    { noteName: "", noteDescription: "" },
  ]);
  const [type, setType] = useState<string>("");
  const [type2, setType2] = useState<string>("");
  const [subData, setSubData] = useState<TSelectData[] | undefined>([]);
  const [description, setDescription] = useState("");
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

      await setDoc(doc(db, "users", params.id), data);
      successNotification();
      setIsLoading(false);
      setTimeout(() => {
        router.push(`/pages/detail/${params.id}`);
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
  return (
    <div className="py-20 min-h-screen flex justify-center">
      {contextHolder}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Delete"
        cancelText="Cancel"
        centered
      >
        <p>Bạn chắc chắn muốn xóa hình ảnh này</p>
      </Modal>
      <form
        action=""
        onSubmit={handleSubmit}
        className="w-1/2 flex flex-col gap-3"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-lg">
            Tên cân
          </label>
          <input
            type="text"
            placeholder="Nhập tên cân"
            className="border outline-none p-2 text-md rounded-lg"
            name="name"
            required
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-lg">Phân loại</h3>
          <Select
            showSearch
            allowClear={true}
            className="w-full h-10"
            placeholder="Các loại cân"
            optionFilterProp="label"
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={data}
            value={type}
            onChange={handleChange}
          />
        </div>
        {subData !== undefined && subData.length > 0 && (
          <div className="flex flex-col gap-1">
            <h3 className="text-lg">Chi tiết</h3>
            <Select
              showSearch
              allowClear={true}
              className="w-full h-10"
              placeholder="Các loại cân"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={subData}
              onChange={handleChangeSub}
              value={type2}
            />
          </div>
        )}
        <div>
          <label htmlFor="description" className="text-lg">
            Mô tả
          </label>
          <textarea
            name="description"
            id=""
            required
            placeholder="Mô tả"
            className="border p-2 w-full h-52 rounded-md"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <div className="flex flex-row gap-2">
          <button
            type="button"
            className="bg-sky-700 p-2 rounded-lg text-white font-semibold"
            onClick={handleClick}
          >
            Thêm thông số kỹ thuật
          </button>
        </div>
        {note.map((item, index) => {
          return (
            <InfoChunk
              index={index}
              item={item}
              setNote={setNote}
              key={index}
            />
          );
        })}
        <UploadImageBtn
          setImageUpload={setImageUpload}
          defaultImageLink={product?.image}
        />
        <button onClick={showModal} type="button">
          Xóa hình ảnh
        </button>
        <button
          className="bg-sky-600 text-white self-center text-lg rounded-md p-2 font-medium"
          type="submit"
        >
          <div className="flex items-center gap-2">
            <p>Update sản phẩm</p>
            {isLoading && <Spin indicator={<LoadingOutlined spin />} />}
          </div>
        </button>
      </form>
    </div>
  );
}
