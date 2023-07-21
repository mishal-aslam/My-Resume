import Image from "next/image";
import React from "react";

const Portolio = () => {
  return (
    <section className=" flex items-center max-w-7xl mx-auto leading-8 mb-10 ">
      <div className="text-teal-900 px-10 mt-32 mx-auto">
        <h1 className=" flex justify-center text-black  mainHeading text-4xl font-extrabold">
          Projects
        </h1>
        <hr className="w-6 h-1 mx-auto my-6 bg-teal-900 border-0 rounded" />
        <p className=" flex justify-center decoration-2 text-2xl font-bold ">
          Portfolio Websites{" "}
        </p>
        <br />

        <div className="grid gap-x-32 gap-y-20 grid-cols-2">
        {/* card 1 start here*/}
        <div className="shadow-md shadow-teal-600 h-42 w-52 hover:scale-90 duration-75 ">
            <div>
              <h2 className=" text-center font-semibold">Pricing ui</h2>
              <a
                  className=" flex justify-center text-teal-900 text-bold underline hover:text-teal-300"
                  href="https://pricingapp-theta.vercel.app"
                  target="_blank"
                >
                  Pricing UI App
                </a>
            </div>
            </div>
            {/* card 1 ends here */}

             {/* card 2 start here*/}
        <div className="shadow-md shadow-teal-600 h-15 hover:scale-90 duration-75 ">
            <div>
              <h2 className=" text-center font-semibold">To-Do App</h2>
              <a
                  className=" flex justify-center text-teal-900 text-bold underline hover:text-teal-300"
                  href="https://todoapp-blue-beta.vercel.app/"
                  target="_blank"
                >
                  To-Do-App
                </a>
            </div>
            </div>
             {/* card 2 ends here */}

             {/* card 3 start here*/}
        <div className="shadow-md shadow-teal-600 h-15 hover:scale-90 duration-75 ">
            <div>
              <h2 className=" text-center font-semibold">Panaverse Dao</h2>
              <a
                  className=" flex justify-center text-teal-900 text-bold underline hover:text-teal-300"
                  href=" https://panaverse-dao-eight.vercel.app"
                  target="_blank"
                >
                Panaverse Dao Website
                </a>
            </div>
            </div>
             {/* card 3 ends here */}


             {/* card 4 start here*/}
        <div className="shadow-md shadow-teal-600 h-15 hover:scale-90 duration-75 ">
            <div>
              <h2 className=" text-center font-semibold">Panacloud </h2>
              <a
                  className=" flex justify-center text-teal-900 text-bold underline hover:text-teal-300"
                  href="https://panaverse-website-chi.vercel.app/"
                  target="_blank"
                >
                 Panacloud Website
                </a>
            </div>
            </div>
             {/* card 4 ends here */}


             {/* card 5 start here*/}
        <div className="shadow-md shadow-teal-600 h-15 hover:scale-90 duration-75 ">
            <div>
              <h2 className=" text-center font-semibold">UI in React</h2>
              <a
                  className=" flex justify-center text-teal-900 text-bold underline hover:text-teal-300"
                  href=" https://my-project-nine-topaz.vercel.app/"
                  target="_blank"
                >
                  Ui in React
                </a>
            </div>
            </div>
             {/* card 5 ends here */}
      </div>
      </div>
    </section>
  );
};
export default Portolio;
