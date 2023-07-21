import React from "react";

export default function Contact() {
  return (
    <section className=" flex items-center max-w-7xl mx-auto leading-8 mb-10 ">
    <div className="text-teal-900 px-10 mt-32 mx-auto">
    <h1 className=" flex justify-center text-black  mainHeading text-4xl font-extrabold">
      contact
    </h1>
    <hr className="w-6 h-1 mx-auto my-6 bg-teal-900 border-0 rounded" />
    <p className="text-center text-black font-bold my-5">Get in touch with me</p>
    <form action="https://formspree.io/f/mbjeaqpn" method="POST">
    <div>
              <input
                placeholder="Your name"
                type="text"
                required
                name="name"
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-black"
              />
            </div>
            <div className="my-5">
              <input
                required
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-black"
                placeholder="Your email"
                type="email"
                name="email"
              />
            </div>
            <div>
              <textarea
                rows={8}
                name="Message"
                required
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-none text-black"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              className="mx-auto block px-5  rounded-md  bg-gradient-to-b from-teal-900 text-black to-orange-500"
            >
              Submit
            </button>
           </form>
    </div>
    </section>
  );
 }