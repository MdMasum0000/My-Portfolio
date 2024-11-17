import React from "react";

import mywork_data from "../assets/mywork_data.js";

const MyWork = () => {
  return (
    <div
      id="work"
      className="Mywork flex  flex-col items-center justify-center gap-10 mx-36 "
    >
      <div className="mywork-title flex px-0 py-4 ">
        <h1 className="px-0 py-2  font-medium text-4xl">My Latest work</h1>
        <img
          className="w-12 h-12 "
          src="https://cdn-icons-png.flaticon.com/128/4727/4727424.png"
          alt=""
        />
      </div>
      <div className="grid grid-cols-3 gap-10 ">
        {mywork_data.map((work, index) => {
          return (
            <img
              className="h-60 w-96 box-border  cursor-pointer rounded-2xl
              hover:transform hover:scale-110  hover:transition hover:duration-150 hover:border-red-800  hover:border-2 "
              key={index}
              src={work.w_img}
              alt=""
            />
          );
        })}
      </div>
      <div
        className="mywork-showmore py-2 px-5 flex gap-0 rounded-3xl border-solid border-2 mb-20 text-xl  cursor-pointer
      hover:transform hover:scale-110 hover:transition hover:duration-150 hover:border-red-800  hover:border-2"
      >
        <p className="py-1   "> Show More</p>
        <img
          className="w-12 h-10  "
          src="https://cdn-icons-png.flaticon.com/128/15713/15713650.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default MyWork;
