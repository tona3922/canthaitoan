import {
  CustomerServiceOutlined,
  DollarOutlined,
  FileProtectOutlined,
  TruckOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <div className="lg:px-32 phone:px-6 bg-gradient-to-br from-sky-900 to-sky-600 py-10">
      <h1 className="text-3xl text-white mb-4 font-bold font-customTitle">
        Vì sao nên chọn Cân Thái Toàn
      </h1>
      <div className="lg:grid lg:grid-cols-3 phone:flex phone:flex-col gap-6">
        <div className="bg-white row-span-2 rounded-lg p-4 flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <FileProtectOutlined style={{ fontSize: "36px" }} />
            <h2 className="text-lg font-customDetail font-extrabold">
              Hàng chính hãng
            </h2>
          </div>
          <ul className="text-neutral-600">
            <li>
              &bull; Các sản phẩm Cân Điện Tử như : cân kỹ thuật, cân thủy sản,
              cân phân tích - ngành vàng, cân tính tiền, cân đếm, cân bàn, cân
              ghế, cân sàn, cân treo, cân sức khỏe, cân nhà bếp, cân mini bỏ túi
              ...
            </li>
            <li>
              &bull; Các phụ kiện đi kèm, tất cả các linh kiện trong ngành cân:
              quả chuẩn, đầu hiển thị, pin sạc, thiết bị cảm biến tải, hộp kết
              nối ...
            </li>
            <li>
              &bull; Chúng tôi luôn cung cấp những sản phẩm chất lượng cao được
              sản xuất bởi những thương hiệu uy tín trên thế giới như Nhật, Mỹ,
              Thụy Sỹ, Hàn Quốc, Đài Loan,..: Shimadzu (Nhật), Digi (Nhật),
              Vibra Shinko (Nhật), Ohaus (Mỹ), Mettler-Toledo (Thụy Sỹ), AND
              (Nhật),CAS (KOREA) ,EXCELL. Do đó chúng tôi tự tin cam kết với
              khách hàng về chất lượng và nguồn gốc sản phẩm.
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <TruckOutlined style={{ fontSize: "36px" }} />
            <h2 className="text-lg font-customDetail font-extrabold">
              Giao hàng tận nơi
            </h2>
          </div>
          <ul className="text-neutral-600">
            <li>
              &bull; Đề cao tiêu chí: Nhanh Chóng - Thân Thiện - Nhiệt Tình.
            </li>
            <li>
              &bull; Hỗ trợ khách hàng vận chuyển thiết bị trong quá trình bàn
              giao.
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <CustomerServiceOutlined style={{ fontSize: "36px" }} />
            <h2 className="text-lg font-customDetail font-extrabold">
              Hỗ trợ online 24/7
            </h2>
          </div>
          <ul className="text-neutral-600">
            <li>
              &bull; Tiêu chí chăm sóc khách hàng : Nhiệt Tình - Thân Thiện -
              Trung Thực.
            </li>
            <li>&bull; Tư vấn hoàn toàn miễn phí về sản phẩm.</li>
            <li>
              &bull; Trong quá trình sử dụng sản phẩm, mọi thắc mắc hoặc yêu cầu
              hỗ trợ về sử dụng sản phẩm đều được giải đáp thỏa đáng
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <DollarOutlined style={{ fontSize: "36px" }} />
            <h2 className="text-lg font-customDetail font-extrabold">
              Giá cạnh tranh
            </h2>
          </div>
          <p className="text-neutral-600">
            &bull; Liên tục cập nhật những sản phẩm mới nhất, hiện đại nhất để
            phục vụ khách hàng và luôn thực hiện phương châm{" "}
            <b>Bảo Đảm Uy Tín – Phát Triển Bền Vững</b>, sản phẩm của chúng tôi
            cung cấp luôn đạt: độ chính xác cao - độ bền cao - mẫu mã phong phú
            - chức năng hiện đại - giá cả phải chăng.
          </p>
        </div>
        <div className="rounded-lg p-4 flex justify-end items-center">
          <Link
            href="/products"
            className="text-2xl text-white font-semibold hover:underline"
          >
            &#x2192; Tìm kiếm sản phẩm tại đây
          </Link>
        </div>
      </div>
    </div>
  );
}
