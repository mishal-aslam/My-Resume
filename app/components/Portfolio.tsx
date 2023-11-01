"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      title: "Pricing UI",
      link: "https://pricingapp-theta.vercel.app",
    },
    {
      title: "To-Do App",
      link: "https://todoapp-blue-beta.vercel.app/",
    },
    {
      title: "Panaverse Dao",
      link: "https://panaverse-dao-eight.vercel.app",
    },
    {
      title: "Panacloud",
      link: "https://panaverse-website-chi.vercel.app/",
    },
    {
      title: "UI in React",
      link: "https://my-project-nine-topaz.vercel.app/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.7, // Adjust the delay between children
      },
    },
  };

  const itemVariants = {
    hidden: { y: -1000, opacity: 0 },
    visible: { y: 0, opacity: 1 },
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
          Projects
        </h1>
        <hr className="w-6 h-1 mx-auto my-6 bg-teal-900 border-0 rounded" />
        <p className="flex justify-center decoration-2 text-2xl font-bold">
          Portfolio Websites{" "}
        </p>
        <br />

        <motion.div
          className="grid gap-x-32 gap-y-20 grid-cols-2"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              className="shadow-md shadow-teal-600 h-15 hover:scale-90 duration-75"
              key={index}
              variants={itemVariants}
            >
              <div>
                <h2 className="text-center font-semibold">{project.title}</h2>
                <a
                  className="flex justify-center text-teal-900 text-bold underline hover:text-teal-300"
                  href={project.link}
                  target="_blank"
                >
                  {project.title}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
