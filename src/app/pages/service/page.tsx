"use client";
import { useEffect } from "react";
import * as tocbot from "tocbot";
export default function Page() {
  useEffect(() => {
    tocbot.init({
      // Where to render the table of contents.
      tocSelector: ".js-toc",
      // Where to grab the headings to build the table of contents.
      contentSelector: "main",
      // Which headings to grab inside of the contentSelector element.
      headingSelector: "h1, h2, h3",
      // For headings inside relative or absolute positioned containers within content.
      hasInnerContainers: true,
      headingsOffset: 60,
      activeLinkClass: "is-active-link",
      scrollSmooth: true,
      // Smooth scroll duration.
      scrollSmoothDuration: 420,
      // Smooth scroll offset.
      scrollSmoothOffset: -60,
    });
  });
  return (
    <main className="mt-16 my-10">
      <div className="flex gap-2 px-4">
        <div className="basis-1/5 min-h-screen">
          <div className="sticky top-40">
            <nav className="js-toc"></nav>
          </div>
        </div>
        <div className="basis-4/5 flex flex-col gap-4">
          <h1 id="1">Phân Phối Nhập Khẩu Và Bán Lẻ</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, rerum
            error aut iste perspiciatis officiis eos eaque reiciendis aliquam
            doloremque, itaque assumenda, vitae voluptate inventore cum eligendi
            necessitatibus! Iure, quia!
          </p>
          <h1 id="2">Vận Chuyển Lắp Đặt</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, rerum
            error aut iste perspiciatis officiis eos eaque reiciendis aliquam
            doloremque, itaque assumenda, vitae voluptate inventore cum eligendi
            necessitatibus! Iure, quia!
          </p>
          <h1 id="3">Bảo Trì</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, rerum
            error aut iste perspiciatis officiis eos eaque reiciendis aliquam
            doloremque, itaque assumenda, vitae voluptate inventore cum eligendi
            necessitatibus! Iure, quia!
          </p>
          <h1 id="4">Hiệu Chuẩn - Kiểm Định</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, rerum
            error aut iste perspiciatis officiis eos eaque reiciendis aliquam
            doloremque, itaque assumenda, vitae voluptate inventore cum eligendi
            necessitatibus! Iure, quia!
          </p>
        </div>
      </div>
      <button>nice</button>
    </main>
  );
}
