import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around w-full items-center px-24 py-4 top-0 fixed">
      <button>
        <Link
          href="/"
          className="font-bold text-lg hover:text-zinc-500 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
        >
          Home
        </Link>
      </button>
      <button>
        <Link
          href="/pages/products"
          className="font-bold text-lg hover:text-zinc-500 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
        >
          Products
        </Link>
      </button>
      <button>
        <Link
          href="/pages/about"
          className="font-bold text-lg hover:text-zinc-500 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
        >
          About
        </Link>
      </button>
      <Link
        href="/pages/support"
        className="font-bold text-lg hover:text-zinc-500 relative after:w-0 after:absolute after:h-0.5 after:left-0 after:right-0 after:-bottom-0.5 after:hover:w-full after:bg-sky-600 after:duration-500"
      >
        Support
      </Link>
    </div>
  );
};

export default Navbar;
