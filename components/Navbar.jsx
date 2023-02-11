import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineMail,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-8">
        <div onClick={handleNav} className="md:hidden">
          <AiOutlineMenu size={25} />
        </div>
        <ul className="hidden md:flex">
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b hover:text-red-500">
              Home
            </li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b hover:text-red-500">
              About
            </li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b hover:text-red-500">
              Skill
            </li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b hover:text-red-500">
              Project
            </li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b hover:text-red-500">
              Contact
            </li>
          </Link>
        </ul>
        <div className="sm:content-right">
          <Image
            src="/../public/assest/logo.png"
            width="150"
            height="80"
            className=""></Image>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed right-0 top-0 w-full h-screen bg-black/70" : ""
        }>
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-300"
              : "fixed right-[-100%] top-0 ease-in duration-300"
          }>
          <div>
            <div class="flex w-full items-center justify-between ">
              <Image
                src="/../public/assest/logo.png"
                width="120"
                height="60"></Image>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer ">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-500 py-2">
              <p className="w-[85%] md:w-[90%] py-2  text-purple-800">
                Let's Work Together....!
              </p>
            </div>
            <div className="py-4 flex flex-col">
              <ul>
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">About</li>
                </Link>{" "}
                <Link href="/">
                  <li className="py-4 text-sm">Skill</li>
                </Link>{" "}
                <Link href="/">
                  <li className="py-4 text-sm">Project</li>
                </Link>{" "}
                <Link href="/">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="pt-24">
                <p className="uppercase tracking-widest text-purple-800">
                  {" "}
                  Let's Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full  sm:w-[80%]">
                  <div className="rounded-full shadow-md shadow-purple-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href='https://www.linkedin.com/in/manisha-manandhar-894754161/' > <FaLinkedinIn/></a>
                  </div>
                  <div className="rounded-full shadow-md shadow-purple-400 p-3 cursor-pointer  hover:scale-105 ease-in duration-300">
                  <a href='https://github.com/manisha-mdr' ><FaGithub/></a>
                  </div>
                  <div className="rounded-full shadow-md shadow-purple-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href='mailto:manishamanandhar0@gmail.com' > <AiOutlineMail/></a>
                  </div>
                  <div className="rounded-full shadow-md shadow-purple-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <a href='https://www.facebook.com/mane.saa.7' ><AiOutlineFacebook/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
