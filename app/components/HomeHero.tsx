/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

export const HomeHero = () => {
  const containerVariants = {
    hidden: {
      x: -100, 
      opacity: 0,
    },
    visible: {
      x: 0, 
      opacity: 1,
      transition: {
        duration: 2
      },
    },
  };

  return (
    <motion.section
      className="max-w-4xl mx-auto flex md:flex-row flex-col mt-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* left start here */}
      <div className="p-5 max-w-lg">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight">
          I am a Full Stack developer
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
          sapiente. Vero sit qui doloremque ex ratione consequatur cumque quidem,
          tempore autem quos totam veniam dicta quaerat nesciunt voluptatibus
          pariatur exercitationem, ipsam hic? Obcaecati cumque provident facilis
          aliquid rem ducimus, molestiae repudiandae reiciendis ullam harum
          dolores magni? Et unde ratione quam.
        </p>
        <button className="group flex items-center bg-gradient-to-r from-teal-900 to-orange-400 py-2 px-4 rounded-lg gap-1">
          Profile
          <IoMdArrowRoundForward
            size={20}
            className="group-hover:rotate-90 duration-200"
          />
        </button>
      </div>
      {/* left ends here */}
      {/* right */}
      <div>
        <img src={"/pic.jpg"} className="md:w-full w-1/2 mx-auto h-full" />
      </div>
      {/* right ends */}
    </motion.section>
  );
};
