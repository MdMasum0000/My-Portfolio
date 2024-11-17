import React, { useState } from "react";
import login from "../assets/login.png";
import underline from "../assets/underline.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
  const [menu, setMenu] = useState("home");
  return (
    <>
      <div className="bg-slate-400 flex inset-x-0 top-0 h-28  ">
        <div className=" flex  items-center content-between m-5 md:mx-5 md:my-12 ">
          <img className="w-20 h-20 " src={login} />
          {/* <img
            className="open-icon md:w-10 mdh-10   "
            src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png"
            alt=""
          /> */}
          <ul className="flex items-center list-none gap-16 text-lg  px-80 duration-200  ">
            {/* <img
              className=" close-icon w-10 h-10"
              src="https://cdn-icons-png.flaticon.com/128/3416/3416079.png"
              alt=""
            /> */}
            <li className="flex flex-col gap-0 cursor-pointer   ">
              {" "}
              <AnchorLink className="anchorlink" offset={50} href="#home">
                {" "}
                <p className="pt-12 " onClick={() => setMenu("home")}>
                  Home
                </p>{" "}
              </AnchorLink>
              {menu === "home" ? (
                <img className="w-12 pt-0  " src={underline} alt="" />
              ) : (
                <></>
              )}
            </li>
            <li className="flex flex-col gap-0 cursor-pointer ">
              {" "}
              <AnchorLink className="anchorlink" offset={50} href="#about">
                {" "}
                <p className="pt-12" onClick={() => setMenu("About Me")}>
                  About Me
                </p>
              </AnchorLink>{" "}
              {menu === "About Me" ? (
                <img
                  className="w-16 pt-0 flex m-auto  "
                  src={underline}
                  alt=""
                />
              ) : (
                <></>
              )}
            </li>
            <li className="flex flex-col gap-0 cursor-pointer ">
              {" "}
              <AnchorLink className="anchorlink" offset={50} href="#services">
                {" "}
                <p className="pt-12" onClick={() => setMenu("Services")}>
                  Services
                </p>{" "}
              </AnchorLink>{" "}
              {menu === "Services" ? (
                <img className="w-16 pt=0 " src={underline} />
              ) : (
                <></>
              )}
            </li>
            <li className="flex flex-col gap-0 cursor-pointer ">
              {" "}
              <AnchorLink className="anchorlink" offset={50} href="#work">
                {" "}
                <p className="pt-12" onClick={() => setMenu("portfolio")}>
                  portfolio
                </p>{" "}
              </AnchorLink>{" "}
              {menu === "portfolio" ? (
                <img className="w-16 pt-0  " src={underline} alt="" />
              ) : (
                <></>
              )}
            </li>
            <li className="flex flex-col gap-0 cursor-pointer ">
              {" "}
              <AnchorLink className="anchorlink" offset={50} href="#contact">
                {" "}
                <p className="pt-12" onClick={() => setMenu("Contact")}>
                  Contact
                </p>{" "}
              </AnchorLink>{" "}
              {menu === "Contact" ? (
                <img className="w-14 pt-0  " src={underline} alt="" />
              ) : (
                <></>
              )}
            </li>
          </ul>
          <div
            className="p-5 rounded-3xl  bg-gradient-to-r from-purple-500 to-pink-500 text-sm cursor-pointer items-end absolute top-5 right-3
         hover:scale-[1.05]
        "
          >
            <AnchorLink className="anchorlink" offset={50} href="#contact">
              Connect with Me
            </AnchorLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
