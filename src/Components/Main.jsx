import React from "react";

const Main = () => {
  return (
    <div className="w-full bg-neutral-200 h-screen py-20 md:py-40 ">
      <span className="absolute left-40 top-20">
        <img className="h-32" src="/python-svgrepo-com.svg" alt="logo1" />
      </span>
      <span className="absolute left-96 top-48">
        <img className="h-16" src="./js-svgrepo-com.svg" alt="logo2" />
      </span>
      <span className="absolute right-96 top-28">
        <img className="h-16" src="./java-svgrepo-com.svg" alt="logo3" />
      </span>
      <span className="absolute left-10 top-64">
        <img className="h-16" src="./c.svg" alt="logo-left" />
      </span>
      <span className="absolute right-10 top-80">
        <img className="h-16" src="./react-svgrepo-com.svg" alt="logo-right" />
      </span>
      <span className=" absolute left-40 bottom-32">
        <img className="h-16" src="./css-svgrepo-com.svg" alt="logo4" />
      </span>
      <span className="absolute right-96 bottom-40">
        <img className="h-16" src="./git-svgrepo-com.svg" alt="logo5" />
      </span>
      <span className="absolute right-64 bottom-20">
        <img className="h-16" src="./html-svgrepo-com.svg" alt="logo6" />
      </span>
      <h1 className="z-20 relative py-2 text-center font-extrabold text-4xl md:text-6xl">
        "Learn The Art Of Programming"
      </h1>
      <p className="relative text-center text-sm py-2 px-14  md:px-24 md:text-lg md:py-5 lg:px-56 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at
        similique quis commodi odio reprehen kjsdfljldjf ljjfljsdljf
        jldjfjdlfjsdjf
      </p>
      <span className="flex w-full justify-center">
        <button className="relative rounded-full top-10 px-4 py-2 bg-slate-200 md:top-14">
          This is button
        </button>
      </span>
    </div>
  );
};

export default Main;
