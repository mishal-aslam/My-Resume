import Image from "next/image";
import React from "react";
import { FaGithub, FaHtml5 } from "react-icons/fa";

export const Skills = () => {
  return (
    <section className="  flex items-center max-w-7xl mx-auto leading-8 mb-10 ">
      <div className="text-teal-900 px-10 mt-32 mx-auto">
        <h1 className=" flex justify-center text-black  mainHeading text-4xl font-extrabold">
          Skills
        </h1>
        <hr className="w-6 h-1 mx-auto my-6 bg-teal-900 border-0 rounded" />
        <div className="grid gap-4 grid-cols-4"> 

        {/* skill 1 */}
      <div className=" p-5 ">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          className="w-20 h-20  object-contain  hover:translate-y-2 hover:scale-110 duration-700 "
        />
        <p className="text-teal-900 font-semibold text-center mt-4">Html</p>
      </div>

  {/* skill 2 */}
      <div className=" p-5 ">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
          className="w-20 h-20  object-contain  hover:translate-y-2 hover:scale-110 duration-700 "
        />
        <p className="text-teal-900 font-semibold text-center mt-4">Css</p>
      </div>

  {/* skill 3 */}
      <div className=" p-5 ">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
          className="w-20 h-20  object-contain  hover:translate-y-2 hover:scale-110 duration-700 "
        />
        <p className="text-teal-900 font-semibold text-center mt-4">Tailwind</p>
      </div>

  {/* skill 4*/}
      <div className=" p-5 ">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          className="w-20 h-20  object-contain  hover:translate-y-2 hover:scale-110 duration-700 "
        />
        <p className="text-teal-900 font-semibold text-center mt-4">React</p>
      </div>

  {/* skill 5 */}
      <div className=" p-5 ">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
          className="w-20 h-20  object-contain  hover:translate-y-2 hover:scale-110 duration-700 "
        />
        <p className="text-teal-900 font-semibold text-center mt-4">Javascript</p>
      </div>

  {/* skill 6 */}
      <div className=" p-5 ">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          className="w-20 h-20  object-contain  hover:translate-y-2 hover:scale-110 duration-700 "
        />
        <p className="text-teal-900 font-semibold text-center mt-4">Typescript</p>
      </div>

  {/* skill 7*/}
      <div className=" p-5 ">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          className="w-20 h-20  object-contain  hover:translate-y-2 hover:scale-110 duration-700 "
        />
        <p className="text-teal-900 font-semibold text-center mt-4">Node js</p>
      </div>


  {/* skill 8 */}
      <div className=" p-5 ">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" 
          className="w-20 h-20  object-contain  hover:translate-y-2 hover:scale-110 duration-700 "
        />
        <p className="text-teal-900 font-semibold text-center mt-4">Next js</p>
      </div>



      </div>
      </div>
    </section>
  );
};
