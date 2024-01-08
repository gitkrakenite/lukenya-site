import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  const Navlinks = [
    { id: 1, title: "Home", goTo: "/" },
    { id: 2, title: "About Us", goTo: "/about-us" },
    { id: 3, title: "Get Involved", goTo: "/get-involved" },
    { id: 4, title: "Gallery", goTo: "/gallery" },
    { id: 5, title: "Blog", goTo: "/blog" },
    // { id: 6, title: "Contact Us", goTo: "/contact-us" },
  ];

  return (
    <div>
      {/* desktop navbar */}
      <div
        className=" hidden xl:block py-[20px] top-0 left-0 fixed w-full px-[2em]  xl:px-[5em] "
        style={{
          background: "rgba(247, 240, 240, 0.9)",
          backdropFilter: "blur(4px)",
          zIndex: 2,
        }}
      >
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={Logo} alt="" className="h-10 w-10" />
            </Link>
          </div>
          <div>
            <ul className="flex gap-[40px]">
              {Navlinks.map((item) => (
                <li
                  key={item.id}
                  className={`hover:text-red-500 text-inherit no-underline cursor-pointer`}
                >
                  <Link
                    to={item.goTo}
                    onClick={() => setActive(item.title)}
                    className="text-inherit"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* mobile navbar */}
      {!toggle && (
        <div
          className="xl:hidden h-[8vh] top-0 left-0 flex justify-between items-center w-full fixed px-[1em] py-[1em]"
          style={{
            background: "rgba(247, 240, 240, 0.9)",
            backdropFilter: "blur(4px)",
            zIndex: 2,
          }}
        >
          <div>
            <Link to="/">
              <img src={Logo} alt="" className="h-10 w-10" />
            </Link>
          </div>
          <div>
            <AiOutlineMenu
              className="text-3xl cursor-pointer"
              onClick={() => setToggle(true)}
            />
          </div>
        </div>
      )}

      {toggle && (
        <div
          className="xl:hidden h-[100vh] top-0 left-0  w-full fixed px-[1em] "
          style={{
            background: "rgba(247, 240, 240, 0.9)",
            backdropFilter: "blur(3px)",
            zIndex: 2,
          }}
        >
          <div className="flex justify-between items-center pt-[10px]">
            <div>
              <Link to="/">
                <img src={Logo} alt="" className="h-10 w-10" />
              </Link>
            </div>
            <div>
              <AiOutlineClose
                className="text-3xl cursor-pointer"
                onClick={() => setToggle(false)}
              />
            </div>
          </div>
          {/* links */}
          <div className="pt-[1em]">
            <ul className="flex flex-col my-[1em] gap-[20px] text-end">
              {Navlinks.map((item) => (
                <li
                  key={item.id}
                  className="hover:text-red-500 text-inherit no-underline cursor-pointer pb-[5px] text-lg pr-[10px]"
                  style={{ borderBottom: "1px solid #535353" }}
                  onClick={() => setToggle(false)}
                >
                  <Link to={item.goTo} className="text-inherit">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/*  */}
        </div>
      )}
      {/*  */}
    </div>
  );
};

export default Navbar;
