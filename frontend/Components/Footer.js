import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A2342] mt-2 relative text-white rounded w-full shadow-sm dark:bg-gray-900 p-2">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              height={300}
              width={300}
              src="/weblogo.png"
              className="h-20 rounded-full w-20"
              alt="bookmydoclogo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              BookMyDoc
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            <li>
              <Link
                href="'/about"
                className="hover:underline hover:scale-110 text-lg me-4 md:me-6"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/doctors"
                className="hover:underline hover:scale-110 text-lg me-4 md:me-6"
              >
                All Doctors
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline hover:scale-110 text-lg me-4 md:me-6"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:underline hover:scale-110 text-lg"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-md text-white sm:text-center dark:text-gray-400">
          © 2025{" "}
          <Link href="/" className="hover:underline">
            BookMyDoc™.{" "}
          </Link>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
