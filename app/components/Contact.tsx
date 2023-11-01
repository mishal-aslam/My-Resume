"use client"
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Contact() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ y: 0, opacity: 1 });
  }, [controls]);

  const inputVariants = {
    hidden: { y: -20, opacity: 0 },
  };

  return (
    <section className="flex items-center max-w-7xl mx-auto leading-8 mb-10">
      <div className="text-teal-900 px-10 mt-32 mx-auto">
        <h1 className="flex justify-center text-black mainHeading text-4xl font-extrabold">
          contact
        </h1>
        <hr className="w-6 h-1 mx-auto my-6 bg-teal-900 border-0 rounded" />
        <p className="text-center text-black font-bold my-5">Get in touch with me</p>
        <form action="https://formspree.io/f/mbjeaqpn" method="POST">
          <div>
            <motion.input
              variants={inputVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 1 }}
              placeholder="Your name"
              type="text"
              required
              name="name"
              className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-black"
            />
          </div>
          <div className="my-5">
            <motion.input
              variants={inputVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 1.5 }}
              required
              className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-black"
              placeholder="Your email"
              type="email"
              name="email"
            />
          </div>
          <div>
            <motion.textarea
              variants={inputVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 1.8 }}
              rows={8}
              name="Message"
              required
              className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-black"
              placeholder="Your message here..."
            />
          </div>
          <motion.button
            type="submit"
            variants={inputVariants}
            initial="hidden"
            animate={controls}
            transition={{ duration: 2 }}
            className="mx-auto block px-5 rounded-md bg-gradient-to-b from-teal-900 text-black to-orange-500"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </section>
  );
}
