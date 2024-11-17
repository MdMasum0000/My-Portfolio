import React from "react";
import services_Data from "../assets/services_Data.js";
function Services() {
  return (
    <div
      id="services"
      className="services flex-col items-center justify-center gap-20  mx-24  "
    >
      <div className="services_Title flex mx-44 px-64 py-8 gap-3  ">
        <h1
          className="font-extrabold text-6xl font-serif bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text
        -webkit-background-clip:  text-transparent
        "
        >
          {" "}
          My Services
        </h1>
        <img
          className="w-12 h-14"
          src="https://cdn-icons-png.flaticon.com/128/2706/2706950.png"
          alt=""
        />
      </div>
      <div className="services-container grid grid-cols-3 gap-10  mb-20    ">
        {services_Data.map((service, index) => {
          return (
            <div
              key={index}
              className="flex-col justify-center gap-5 border-r-5 border-2 px-6 py-5 border-solid duration-150  cursor-pointer
              hover:border-solid hover:border-2 hover:border-pink-500 hover:bg-gradient-to-t from-red-950 to-red-800 hover:transform hover:scale-105 hover:transition  "
            >
              <h3 className="text-3xl font-semibold">{service.s_no}</h3>
              <h2
                className="text-3xl  font-bold bg-gradient-to-r from-yellow-600 to-purple-600 bg-clip-text
              -webkit-background-clip text-transparent "
              >
                {service.s_name}
              </h2>
              <p className="text-white text-xl leading- 9  ">
                {service.s_desc}
              </p>
              <div className="flex gap-5 items-center mt-5">
                <p>Read More</p>
                <img
                  className="w-9 h-7"
                  src="https://cdn-icons-png.flaticon.com/128/3248/3248150.png"
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
