import React from "react";
import mr from "../assets/mr.jpg";
import login from "../assets/login.png";
function Footer() {
  return (
    <div className="footer mx-12 my-4 flex flex-col gap-7">
      <div className="footer-top flex justify-between ">
        <div className="footer-top-left ">
          {/* <img className="w-10 h-10  " src={login} alt="" /> */}
          <p className=" py-0">I look forward to connecting with you! </p>
        </div>
        <div className="footer-top-right flex items-end  gap-3">
          <div
            className="footer-email-input flex gap-2 p-3  bg-slate-300 rounded-3xl 
          hover:border-2 hover:border-white"
          >
            <img
              className="w-8 h-8"
              src="https://cdn-icons-png.flaticon.com/128/560/560277.png"
              alt=""
            />
            <input
              className="rounded-lg px-2 bg-slate-300 text-black "
              type="email"
              placeholder="Enter You Email"
            />
          </div>
          <div
            className="footer-subscribe bg-gradient-to-r  from-orange-600 to-purple-700 text-xl font-semibold rounded-3xl px-4 py-4 cursor-pointer 
          hover:scale-105 hover:duration-150 hover:text-black "
          >
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom flex justify-between text-lg">
        <p className="footer-bottom-left">2024 Md Masum.All right reserved</p>
        <div className="footer bottom-right flex gap-12 mb-12 ">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Contact with Me</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
