"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Modal } from "antd";
import { usePathname } from "next/navigation";
import { useProductDetail } from "@/hooks/useProductDetail";

export default function Page() {
  const pathname = usePathname();
  const id = pathname.substring(pathname.lastIndexOf("/") + 1);
  const router = useRouter();
  const {
    detail,
    isModalOpen,
    cookie,
    showModal,
    handleOk,
    handleCancel,
    showTypeLabel,
  } = useProductDetail(id);

  return (
    <main className="min-h-screen pt-24 pb-10 flex justify-center items-center">
      <div className="phone:w-4/5 lg:w-2/3 flex phone:flex-col lg:flex-row gap-6">
        <div className="flex-1 flex justify-center items-center">
          <Image
            src={
              detail?.image ??
              "https://www.mt.com/images/WebShop/MainImage/30524635.jpg"
            }
            alt="item"
            className="lg:w-2/3 phone:w-full"
            width={100}
            height={100}
            unoptimized={true}
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl text-sky-600 font-bold font-customCardTitle">
            {detail?.name}
          </h1>
          <hr />
          <div className="flex flex-col gap-0.5 mt-2">
            <h2 className="text-lg font-semibold text-slate-500">Loại cân</h2>
            <p className="text-md">{showTypeLabel(detail?.type)}</p>
          </div>
          <div className="flex flex-col gap-0.5 mt-2">
            <h2 className="text-lg font-semibold text-slate-500">Mô tả</h2>
            <div
              className="text-md prose max-w-none"
              dangerouslySetInnerHTML={{ __html: detail?.description ?? "" }}
            />
          </div>
          {detail?.information && (
            <div className="flex flex-col gap-0.5 mt-2">
              <h2 className="text-lg font-semibold text-slate-500">
                Thông số kỹ thuật
              </h2>
              {detail.information.map((criteria, index) => (
                <div
                  className="flex flex-row gap-2 items-center mt-2"
                  key={index}
                >
                  <h2 className="text-md">{criteria.noteName} :</h2>
                  <p className="text-md font-semibold">
                    {criteria.noteDescription}
                  </p>
                </div>
              ))}
            </div>
          )}
          <div className="mt-6 flex gap-3">
            <button
              className="p-2 bg-gray-700 rounded-lg text-white font-semibold"
              onClick={() => router.push("/about")}
            >
              Liên hệ báo giá
            </button>
            {cookie && cookie.length > 0 && (
              <>
                <button
                  className="bg-sky-700 text-white p-2 font-semibold rounded-lg"
                  onClick={() => router.push(`/edit/${id}`)}
                >
                  Chỉnh sửa sản phẩm
                </button>
                <button
                  className="bg-red-500 p-2 rounded-lg text-white font-semibold"
                  onClick={showModal}
                >
                  Xóa sản phẩm
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <Modal
        title="Xóa sản phẩm"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <p>Bạn có chắc chắn muốn xóa sản phẩm</p>
      </Modal>
    </main>
  );
}
