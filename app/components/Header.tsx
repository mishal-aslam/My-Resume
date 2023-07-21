"use client";
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
export const Header = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <section className="bg-teal-900 box-border h-20 w-86 p-100  divide-y">
      <div className="flex justify-between ">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="" width={100} height={100} className="w-25 h-30 p-90 rounded-full"></Image>
        </Link>
        <ul className=" m-7 md:flex hidden">
          <a className="cursor-pointer" href="#home">
            <li className="mx-5 text-2xl hover:scale-150 duration-500 font-semibold">
              Home
            </li>
          </a>


          <Link href="/Portfolio">
            <li className="mx-5 text-2xl hover:scale-150 duration-500 font-semibold">
              Portfolio
            </li>
          </Link>

          <Link href="/Skills">
            <li className="mx-5 text-2xl hover:scale-150 duration-500 font-semibold">
              Skills
            </li>
          </Link>

          <Link href="/Contact">
            <li className="mx-5 text-2xl hover:scale-150 duration-500 font-semibold">
              Contact
            </li>
          </Link>
        </ul>
        <div
          className="pr-5 md:hidden z-10"
          onClick={() => {
            setToggle(!toggle);
            console.log(toggle);
          }}
        >
          {toggle ? <GiHamburgerMenu size={30} /> : <RxCross2 size={30} />}
        </div>
        {/* overlay starts here */}
        {!toggle && (
          <div className="fixed top-0 left-0 bg-teal-900 h-screen text-red-500 w-full flex items-center justify-center">
            <ul className=" m-7  text-white   ">
              <li className="mx-5 my-2 text-8xl font-naveedkipasand ">Home</li>
              <li className="mx-5 my-2 text-8xl font-naveedkipasand ">About</li>
              <li className="mx-5 my-2 text-8xl">
                Portfolio
              </li>
              <li className="mx-5 my-2 text-8xl ">
                Skills
              </li>
              <li className="mx-5 my-2 text-8xl">
                Contact
              </li>
            </ul>
          </div>
        )}
        {/* overlay ends here */}
      </div>
    </section>
  );
};