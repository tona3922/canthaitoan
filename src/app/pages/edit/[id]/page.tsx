"use client";
import { useEffect, useState } from "react";
import { fetchProductById } from "./hooks/editProduct";
import { TProduct } from "../../products/product";
import { NavbarLayer, TSelectData } from "@/asset/NavbarLayer";
import { Modal, notification, Select } from "antd";
import { ImageKitProvider, IKUpload, IKImage } from "imagekitio-next";
import { authenticator } from "../../newproduct/hooks/useAuthentication";
import { TNote } from "../../newproduct/page";
import { useRouter } from "next/navigation";
import InfoChunk from "./InfoChunk";
const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT;
let token = "";

if (typeof window !== "undefined") {
  token = window.localStorage.getItem("accessToken") ?? "";
}
export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [product, setProduct] = useState<TProduct>();
  const [input, setInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setHide(true);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND}/product/${params.id}`
        );
        if (response.ok) {
          const data = await response.json();
          setProduct(data.product);
          setInput(data.product.name);
          setType(data.product.type);
          setNote(data.product.information);
          setDescription(data.product.description);
          if (data.product.type) {
            const findData = NavbarLayer.find(
              (item) => item.value === data.product.type
            );
            if (findData) {
              setSubData(findData.children);
              setType2(data.product.subtype);
            }
          }
        } else {
          console.log(response);
          throw new Error("Failed post data");
          // Handle error
        }
      } catch (error) {
        throw new Error("Failed post data");
      }
    };
    fetchProductById();
  }, [params.id]);
  const [api, contextHolder] = notification.useNotification();
  const data = NavbarLayer;
  const [note, setNote] = useState<TNote[]>([
    { noteName: "", noteDescription: "" },
  ]);
  const [type, setType] = useState<string>("");
  const [type2, setType2] = useState<string>("");
  const [subData, setSubData] = useState<TSelectData[] | undefined>([]);
  const [result, setResult] = useState<any>();
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
  const onError = (err: any) => {
    console.log("Error in upload image");
  };
  const onSuccess = (res: any) => {
    setResult(res);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      description: formData.get("description"),
      type: type,
      subtype: type2 ?? "",
      image: result !== undefined ? result.url : product?.image,
      information: note,
    };
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND}/product/${params.id}`,
        {
          method: "PATCH",
          body: JSON.stringify(data),
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        successNotification();
        setTimeout(() => {
          router.push(`/pages/detail/${params.id}`);
        }, 1500);

        // Handle success
      } else {
        errorNotification("Đã có lỗi xảy ra vui lòng thử lại");
      }
    } catch (error) {
      errorNotification("Error server");
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
        <div>
          <ImageKitProvider
            publicKey={publicKey}
            urlEndpoint={urlEndpoint}
            authenticator={authenticator}
          >
            <h2 className="text-lg">File upload</h2>
            <IKUpload
              fileName="test-upload.png"
              onError={onError}
              onSuccess={onSuccess}
            />
            {!hide && product?.image && (
              <IKImage
                src={product?.image}
                width="200"
                height="200"
                alt="Alt text"
              />
            )}
            {!hide && (
              <button onClick={showModal} type="button">
                Delete image
              </button>
            )}
            {result && (
              <IKImage
                path={result.filePath}
                width="200"
                height="200"
                alt="Alt text"
              />
            )}
          </ImageKitProvider>
        </div>
        <button
          className="bg-sky-600 text-white w-1/3 self-center text-lg rounded-md p-2 font-medium"
          type="submit"
        >
          Update sản phẩm
        </button>
      </form>
    </div>
  );
}
