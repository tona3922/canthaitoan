"use client";
import Item from "@/components/Item";
import SwiperAd from "@/components/SwiperAd";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-8 flex flex-col min-h-screen py-12">
      <div className="flex justify-center px-10 h-[630px]">
        <SwiperAd />
      </div>
      <div className="text-3xl font-bold font-customTitle">News</div>
      <div className="grid grid-cols-4 place-items-center px-10 gap-3">
        <div className="px-4 py-3 border-gray-300 border-[1px] rounded-lg cursor-pointer hover:border-sky-600">
          <Image
            src="https://www.mt.com/dam/homepage-redesign-2016-r01/thumbnails/esbu_industrial_ver2.jpg/_jcr_content/renditions/original.webp"
            alt="item"
            className="w-full rounded-md"
            width={300}
            height={200}
          />
          <h2 className="font-semibold font-customCardTitle text-xl">Title</h2>
          <p>
            Content: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi at quibusdam expedita provident quae atque facilis, eum
            incidunt ea, suscipit vero quaerat eaque sit possimus nostrum
            doloribus laudantium iusto. Omnis.
          </p>
        </div>
        <div>
          <Item />
        </div>
        <div>clastake1</div>
        <div>clastake1</div>
      </div>
      <div className="text-3xl text-sky-600 font-bold font-customTitle">
        Products
      </div>

      <div className="text-3xl text-sky-600 font-bold font-customTitle">
        Services and Support
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </div>
  );
}
