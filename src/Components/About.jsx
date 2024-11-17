import React from "react";
import profile1 from "../assets/profile1.jpg";

function About() {
  return (
    <div
      id="about"
      className="flex-col items-center content-center gap-20 mx-20 my-20  "
    >
      <div className="flex gap-2 justify-center mb-16  items-center">
        <h1 className="text-6xl font-bold  ">About Me</h1>
        <img
          className="w-20 h-20  "
          src="https://cdn-icons-png.flaticon.com/128/9195/9195785.png"
          alt=""
        />
      </div>

      <div className=" about_secton   flex gap-32">
        <div className="about_left ">
          <img
            className="w-96  h-72 rounded-sm border-solid border-4 border-fuchsia-600 "
            src={profile1}
            alt=""
          />
        </div>
        <div className="  flex-col gap-20 r">
          <div className=" flex-col  mb-8  text-2xl font-medium">
            <p>**Technical Proficiencies and Expertise**</p>
            <br />
            <p>
              <li>
                HTML & CSS: Expertise in crafting structured, semantic HTML and
                styling with modern CSS techniques.
              </li>{" "}
              <br />
              <li>
                Tailwind CSS: Proficient in utilizing Tailwind CSS for creating
                highly customizable and responsive designs efficiently.
              </li>
              <br />
              <li>
                {" "}
                JavaScript: Skilled in JavaScript for developing dynamic,
                interactive web experiences.
              </li>{" "}
              <br />
              <li>
                {" "}
                React: Experienced in building complex, state-managed
                applications using React, ensuring optimal performance and
                maintainability.
              </li>
            </p>
          </div>
          <div className="  flex-col gap-8 ">
            <div className="flex gap-12 items-center hover:scale-105 hover:duration-100">
              <p className="min-w-36 text-2xl font-medium">HTML & CSS</p>{" "}
              <hr className="border-none w-96 border-r-8 bg-gradient-to-r from-orange-500 rounded-md to-purple-700 h-2" />
            </div>
            <div className="flex gap-12 items-center hover:scale-105 hover:duration-100">
              <p className="min-w-36 text-2xl font-medium">React JS</p>{" "}
              <hr className="border-none w-80 border-r-8 bg-gradient-to-r from-orange-500 rounded-md to-purple-700 h-2" />
            </div>
            <div className="flex gap-12 items-center hover:scale-105 hover:duration-100">
              <p className="min-w-36 text-2xl font-medium">JavaScript</p>{" "}
              <hr className="border-none w-64 border-r-8 bg-gradient-to-r from-orange-500 rounded-md to-purple-700 h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className=" flex mb-20 mt-14">
        <div className="flex-col items-center gap-2 duration-500 hover:scale-110 hover:duration-100 ">
          <h1 className="size-24  text-5xl font-semibold  bg-gradient-to-r from-yellow-400 to-purple-800 bg-clip-text -webkit-background-clip: text text-transparent ">
            2+
          </h1>
          <p className="size-5 font-medium flex">YEARS OF EXPERIENCE</p>
        </div>
        <hr className="border-none  w-2/3 bg-white h-1 border-r-8" />
        <div className="flex-col items-center gap-2 duration-500 hover:scale-110 hover:duration-100 ">
          <h1 className="size-24  text-5xl font-semibold bg-gradient-to-r from-yellow-400 to-purple-800 bg-clip-text -webkit-background-clip: text text-transparent ">
            10+
          </h1>
          <p className="size-5 font-medium">PROJECT COMPLETED</p>
        </div>
        <hr className=" flex-grow w-2/3 bg-white  h-1" />
        <div className="flex-col items-center gap-2 duration-500 hover:scale-110 hover:duration-100 ">
          <h1 className="size-24  text-5xl font-semibold bg-gradient-to-r from-yellow-400 to-purple-800 bg-clip-text -webkit-background-clip: text text-transparent ">
            5+
          </h1>
          <p className="size-5 font-medium">HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
