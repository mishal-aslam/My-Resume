"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { motion, useAnimation } from "framer-motion";

export const Header = () => {
  const [toggle, setToggle] = useState(true);
  const controls = useAnimation();

  const toggleMenu = async () => {
    setToggle(!toggle);
    await controls.start(toggle ? "hidden" : "visible");
  };

  const menuItems = ["Home", "Portfolio", "Skills", "Contact"];

  return (
    <motion.section
      className="bg-teal-900 box-border h-20 w-86 p-100 divide-y"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-between">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt=""
            width={100}
            height={100}
            className="w-25 h-30 p-90 rounded-full"
          />
        </Link>
        <ul className="m-7 md:flex hidden">
          {menuItems.map((item, index) => (
            <Link key={index} href={`/${item}`}>
              <motion.li
                className="mx-5 text-2xl hover:scale-150 duration-500 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 1 }}
              >
                {item}
              </motion.li>
            </Link>
          ))}
        </ul>
        <div className="pr-5 md:hidden z-10" onClick={toggleMenu}>
          {toggle ? <GiHamburgerMenu size={30} /> : <RxCross2 size={30} />}
        </div>
        {/* overlay starts here */}
        {!toggle && (
          <motion.div
            className="fixed top-0 left-0 bg-teal-900 h-screen text-red-500 w-full flex items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <ul className="m-7 text-white">
              {menuItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="mx-5 my-2 text-8xl font-naveedkipasand"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
        {/* overlay ends here */}
      </div>
    </motion.section>
  );
};
