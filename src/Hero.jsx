import React from "react";
import profile from "./assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div id="home" className="flex items-center flex-col gap-8">
      <img
        className="w-36 h-36 rounded-full  border-purple-500 border-4 mt-36 "
        src={profile}
        alt=""
      />
      <h1 className="text-center w-full text-6xl font-semibold ">
        <span className="bg-clip-text  bg-gradient-to-r from-orange-600 to-purple-800 -webkit-background-clip: text text-transparent ">
          {" "}
          I'm Md Masum,
        </span>
        frontend devoloper based in India{" "}
      </h1>
      <p className="w-1/2 text-center text-base leading-10">
        I bring a comprehensive skill set and a passion for creating seamless,
        efficient, and innovative web solutions. With a strong foundation in
        both front-end and back-end technologies, I excel in building
        responsive, user-friendly interfaces and robust, scalable server-side
        applications.
      </p>
      <div className="flex items-center text-base gap-6 mb-12 font-medium  ">
        <div
          className="p-6 rounded-3xl  bg-gradient-to-r from-orange-400 to-purple-600 cursor-pointer
        hover:border-solid hover:border-black hover:border-2
        "
        >
          <AnchorLink className="anchorlink" offset={50} href="#contact">
            Connect With Me{" "}
          </AnchorLink>
        </div>
        <div className=" p-6 rounded-3xl border-solid border-2 border-black cursor-pointer hover:border-purple-700 ">
          My resume
        </div>
      </div>
    </div>
  );
}

export default Hero;
