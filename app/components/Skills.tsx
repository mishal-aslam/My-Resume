"use client"
import Image from "next/image";
import React from "react";
import { FaGithub, FaHtml5 } from "react-icons/fa";
import { motion } from "framer-motion";

export const Skills = () => {
  const skills = [
    {
      name: "Html",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Css",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "React",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Javascript",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Typescript",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Node js",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Next js",
      icon:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 5,
      },
    },
  };

  const itemVariants = {
    hidden: (i: number) => {
      const direction = i % 2 === 0 ? -1 : 1;
      return {
        x: direction * (Math.random() * 100 + 100),
        y: -100,
        opacity: 0,
      };
    },
    visible: (i: number) => {
      return {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: i * 2,
        },
      };
    },
  };

  return (
    <motion.section
      className="flex items-center max-w-7xl mx-auto leading-8 mb-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-teal-900 px-10 mt-32 mx-auto">
        <h1 className="flex justify-center text-black mainHeading text-4xl font-extrabold">
          Skills
        </h1>
        <hr className="w-6 h-1 mx-auto my-6 bg-teal-900 border-0 rounded" />
        <div className="grid gap-4 grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              className="p-5"
              key={index}
              variants={itemVariants}
              custom={index}
            >
              <motion.img
                src={skill.icon}
                className="w-20 h-20 object-contain hover:translate-y-2 hover:scale-110 duration-700"
                alt={skill.name}
              />
              <motion.p
                className="text-teal-900 font-semibold text-center mt-4"
              >
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
