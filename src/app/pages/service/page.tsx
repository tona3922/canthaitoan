"use client";
import { useEffect } from "react";
import * as tocbot from "tocbot";
export default function Page() {
  useEffect(() => {
    tocbot.init({
      // Where to render the table of contents.
      tocSelector: ".js-toc",
      contentSelector: "main",
      headingSelector: "h1, h2, h3",
      hasInnerContainers: true,
      headingsOffset: 60,
      activeLinkClass: "is-active-link",
      listClass: "toc-list",
      isCollapsedClass: "is-collapsed",
      collapsibleClass: "is-collapsible",
      // Class to add to list items.
      listItemClass: "toc-list-item",
      // Class to add to active list items.
      activeListItemClass: "is-active-li",
      collapseDepth: 1,
      scrollSmooth: true,
      // Smooth scroll duration.
      scrollSmoothDuration: 420,
      // Smooth scroll offset.
      scrollSmoothOffset: -60,
    });
  });
  return (
    <main className="mt-16 my-10">
      <div className="flex gap-16 px-40 py-10">
        <div className="basis-1/4 min-h-screen">
          <div className="sticky top-40 border p-2 rounded-md">
            <nav className="js-toc"></nav>
          </div>
        </div>
        <div className="basis-3/4 flex flex-col gap-4">
          <h1 id="1" className="text-2xl font-semibold">
            Phân Phối Nhập Khẩu Và Bán Lẻ
          </h1>
          <hr />
          <h2 id="service" className="text-lg font-semibold">
            Dịch vụ của chúng tôi
          </h2>
          <p>
            Chúng tôi là đối tác đáng tin cậy trong lĩnh vực phân phối và nhập
            khẩu sản phẩm chính hãng. Dưới đây là những dịch vụ chúng tôi cung
            cấp:
          </p>
          <ul className="pl-8">
            <li>
              <b>1. Phân phối sản phẩm chính hãng:</b> Chúng tôi cam kết cung
              cấp một loạt các sản phẩm chính hãng từ các thương hiệu uy tín
              trên thị trường. Từ điện tử, công nghệ, công nghiệp,.. chúng tôi
              đều có đủ sản phẩm đa dạng để đáp ứng nhu cầu của khách hàng
            </li>
            <li>
              <b>2. Nhập khẩu sản phẩm chính hãng:</b> Chúng tôi có mối quan hệ
              mạng lưới với các nhà sản xuất và nhà cung cấp trên khắp thế giới,
              giúp chúng tôi nhập khẩu các sản phẩm chính hãng với giá cả cạnh
              tranh và chất lượng đảm bảo.
            </li>
            <li>
              <b>3. Dịch vụ tư vấn và hỗ trợ:</b> Đội ngũ nhân viên giàu kinh
              nghiệm của chúng tôi sẽ hỗ trợ bạn trong việc chọn lựa sản phẩm
              phù hợp nhất với nhu cầu của bạn. Chúng tôi cam kết mang đến cho
              bạn dịch vụ tư vấn chuyên nghiệp và thân thiện.
            </li>
          </ul>
          <h2 id="why" className="text-lg font-semibold">
            Tại sao chọn chúng tôi?
          </h2>
          <ul className="pl-8">
            <li>
              <b>Sản phẩm chính hãng:</b> Chúng tôi cam kết cung cấp các sản
              phẩm chính hãng với chất lượng đảm bảo, giúp khách hàng yên tâm
              khi sử dụng.
            </li>
            <li>
              <b>Dịch vụ chuyên nghiệp:</b> Với nhiều năm kinh nghiệm trong
              ngành, chúng tôi tự tin mang đến cho khách hàng những dịch vụ phân
              phối và nhập khẩu tốt nhất.
            </li>
            <li>
              <b>Giá cả cạnh tranh:</b> Chúng tôi cam kết cung cấp sản phẩm với
              giá cả cạnh tranh nhất trên thị trường.
            </li>
          </ul>
          <h2 id="contact" className="text-lg font-semibold">
            Liên hệ với chúng tôi
          </h2>
          <p>
            Nếu bạn đang tìm kiếm một đối tác đáng tin cậy trong lĩnh vực phân
            phối và nhập khẩu sản phẩm chính hãng, hãy liên hệ với chúng tôi
            ngay hôm nay để biết thêm thông tin chi tiết và nhận được sự tư vấn
            tốt nhất từ đội ngũ của chúng tôi.
          </p>
          <h1 id="3" className="text-2xl font-semibold">
            Bảo Trì
          </h1>
          <hr />
          <h2 id="Support" className="text-lg font-semibold">
            Bảo hành
          </h2>
          <i>Quy định bảo hành:</i>
          <ol className="pl-8">
            <li>
              1. Thiết bị cân điện tử cung cấp được bảo hành theo đúng qui
              trình,và thời gian bảo hành sẽ được áp dụng kể từ ngày ký biên bản
              bàn giao, nghiệm thu.Ngoài ra chúng tôi còn có thể tăng thời hạn
              bảo hành tùy thuộc vào nhu cầu của và hợp đồng của quý khách hàng
              với công ty.
            </li>
            <li>
              2. Trong thời gian bảo hành, nếu xảy ra hư hỏng do lỗi thiết kế
              hoặc lỗi kỹ thuật của thiết bị thì Cân điện tử Thái Toàn có trách
              nhiệm bảo hành sửa chữa, thay thế miễn phí cho Khách hàng.
            </li>
          </ol>
          <i>Không bảo hành trong các trường hợp sau:</i>
          <ol className="pl-8">
            <li>
              1. Không bảo hành các thiết bị của khách hàng có sẵn, chỉ bảo hành
              thiết bị do chúng tôi cung cấp.
            </li>
            <li>
              2. Không bảo hành trong trường hợp các thiết bị nhà máy tự trang
              bị có sự cố gây ra hư hỏng ảnh hưởng lên các thiết bị của hệ thống
              sản phẩm do chúng tôi cung cấp
            </li>
            <li>
              3. Không bảo hành trường hợp khách hàng tự ý tháo ráp, sửa chữa
              trong thời gian còn qui định bảo hành.
            </li>
            <li>
              4. Sự cố về điện áp của các đường dây điện: cắm sai nguồn điện,
              chập điện, v.v hoặc sự cố về thiên tai, trường hợp bất khả kháng :
              sét đánh, ngập lụt lâu ngày…
            </li>
            <li>
              5. Không bảo hành phần mềm trong trường hợp do lỗi của người thao
              tác hoặc do ảnh hưởng từ các thiết bị mà Khách hàng tự trang bị
              gây ra lỗi cho chương trình phần mềm hoặc các sự cố do virus máy
              tính.
            </li>
          </ol>
          <h2 id="Repair" className="text-lg font-semibold">
            Sữa chữa
          </h2>
          <p>
            Trường hợp sản phẩm hết hạn thời gian bảo hành, hoặc các sản phẩm
            không nằm trong quy định bảo hành ; chúng tôi sẽ đảm bảo việc sửa
            chữa cho khách hàng ,thông báo các chi tiết cần sữa chữa, chi phí
            sữa chữa cho khách hàng.Thời gian sửa chữa tùy thuộc vào mức độ hư
            hỏng của thiết bị và linh kiện phù hợp với sản phẩm sẵn có tại công
            ty.
          </p>
          <h2 id="NoIdea" className="text-lg font-semibold">
            Hậu mãi
          </h2>
          <ul className="pl-8">
            <li>
              - Trong các tường hợp đặc biệt,đã có sự khảo sát ,nhằm đảm bảo sự
              liên tục của quá trình sản xuất cho quý khách hàng;chúng tôi có
              thể cung cấp cấp thiết bị hổ trợ tạm,đồng thời với việc sữa chữa
              bảo hành sớm nhất có thể nhằm đưa hệ thống vận hành của khách hàng
              sớm đi vào ổn định.
            </li>
            <li>
              - Nhân viên kỹ thuật giàu kinh nghiệm hỗ trợ trong ngày, xứ lý các
              trường hợp khách hàng đang vận hành gặp sự cố, giúp khách hàng vận
              hành hoạt động trở lại bình thường
            </li>
          </ul>
          <h1 id="2" className="text-2xl font-semibold">
            Vận Chuyển Lắp Đặt
          </h1>
          <hr />
          <p>Công Ty sẽ giao hàng tùy theo nhu cầu khách hàng :</p>
          <ul>
            <li> - Giao hàng tận nơi</li>
            <li> - Giao ngay trong ngày</li>
            <li> - Giao tại nhà máy</li>
            <li>
              - Nhận hàng tại Công Ty : 183/14 A Hoàng Hoa Thám,Phường 6, Quận
              Bình Thạnh, TP.HCM.
            </li>
          </ul>
          <h1 id="4" className="text-2xl font-semibold">
            Hiệu Chuẩn - Kiểm Định
          </h1>
          <hr />
          <ul className="pl-8">
            <li>
              - Cân điện tử Thái Toàn có thể phối hợp cùng các Trung tâm kỹ
              thuật tiêu chuẩn đo lường, giúp khách hàng kiểm định.hiệu chuẩn
              thiết bị nhanh chóng, kịp thời.
            </li>
            <li>
              - Ngay sau khi bàn giao, sản phẩm thiết bị sẽ được dán tem kiểm
              định để khách hàng đưa vào sử dụng.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
