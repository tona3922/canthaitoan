"use client";
import Image from "next/image";
export default function Page({ params }: { params: { id: string } }) {
  console.log(params);
  return (
    <main className="min-h-screen pt-20 pb-10">
      <div className="flex justify-center">
        <div className="w-2/3 flex flex-row gap-6">
          <div className="flex-1 flex justify-center items-center">
            <Image
              src="https://www.mt.com/images/WebShop/MainImage/30524635.jpg"
              alt="item"
              className="w-64 h-64"
              width={100}
              height={100}
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl text-sky-600 font-bold font-customCardTitle">
              Title here {params.id}
            </h1>
            <hr />
            <div className="flex flex-col gap-0.5 mt-2">
              <h2 className="text-lg font-semibold text-slate-500">
                Smart Features.
              </h2>
              <p className="text-md">
                Accurate and reliable for trusted jewelry weighing. 505 ct/101 g
                capacity, 0.001 ct/0.1 mg readability, color touchscreen, FACT
                fully automatic internal adjustment, 3 interfaces, 8 built-in
                applications, overload protection, metal base
              </p>
            </div>
            <div className="flex flex-col gap-0.5 mt-2">
              <h2 className="text-lg font-semibold text-slate-500">
                Designed to Perform
              </h2>
              <p className="text-md">
                Advanced weighing technologies, solid construction, and special
                design features deliver the accuracy you need for weighing
                jewelry and precious metals.
              </p>
            </div>
            <div className="flex flex-col gap-0.5 mt-2">
              <h2 className="text-lg font-semibold text-slate-500">
                Intuitive Touch Screen Operation
              </h2>
              <p className="text-md">
                The large color touchscreen is easy to read, even under the
                dazzling glare of shop lights, while the user interface is
                simple for anyone to use.
              </p>
            </div>
            <div className="flex flex-col gap-0.5 mt-2">
              <h2 className="text-lg font-semibold text-slate-500">
                Automatic Performance Testing JET
              </h2>
              <p className="text-md">
                balances use internal weights to automatically test and adjust
                the balance, helping to ensure that weighing performance remains
                true.
              </p>
            </div>
            <button className="mt-6 py-2 px-4 bg-gray-700 rounded-lg text-white text-lg font-semibold">
              Liên hệ báo giá
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
