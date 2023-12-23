import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineLike, AiOutlinePhone } from "react-icons/ai";
import { MdOutlineArrowForward, MdOutlineVerified } from "react-icons/md";
import Logo from "../assets/logo.png";

const GetInvolved = () => {
  const currentProjects = [
    {
      id: 1,
      title: "Clothes Drive",
      phone: "07xxx xxxxx",
      photo:
        "https://images.pexels.com/photos/4210850/pexels-photo-4210850.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Hunger Fight",
      phone: "07xxx xxxxx",
      photo:
        "https://images.pexels.com/photos/6646847/pexels-photo-6646847.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Power Woman",
      phone: "07xxx xxxxx",
      photo:
        "https://images.pexels.com/photos/11679893/pexels-photo-11679893.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Construct Classroom",
      phone: "07xxx xxxxx",
      photo:
        "https://images.pexels.com/photos/16633215/pexels-photo-16633215/free-photo-of-construction-workers-working.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[50px] pb-[20px]">
      <div>
        <h2
          className="font-bold text-2xl text-center"
          style={{ lineHeight: "1.3em" }}
        >
          How You Can Support Us
        </h2>

        {/*  */}
        <div className="mt-[50px] flex justify-end">
          <Link className="text-inherit">
            <div className="flex items-center gap-[10px]">
              <p>See More</p>
              <p>
                <MdOutlineArrowForward />
              </p>
            </div>
          </Link>
        </div>

        <div className="flex justify-evenly gap-[30px] items-center mt-[20px]">
          {/* img side */}
          <div className="hidden md:block flex-[0.5]">
            <img
              src={Logo}
              alt=""
              className="rounded-md hidden md:block w-full max-h-[50vh] object-contain"
            />
          </div>
          <div className=" flex-1 md:flex-[0.5]">
            <div className="flex items-center gap-[10px] bg-zinc-200 p-2 mb-3">
              <p>
                <MdOutlineVerified className="text-red-500 text-2xl" />
              </p>
              <p>General Donations</p>
            </div>
            <div className="flex items-center gap-[10px] bg-zinc-200 p-2 mb-3">
              <p>
                <MdOutlineVerified className="text-red-500 text-2xl" />
              </p>
              <p>Fundraise For Us</p>
            </div>
            <div className="flex items-center gap-[10px] bg-zinc-200 p-2 mb-3">
              <p>
                <MdOutlineVerified className="text-red-500 text-2xl" />
              </p>
              <p>Volunteer With Us</p>
            </div>
            <div className="flex items-center gap-[10px] bg-zinc-200 p-2 mb-3">
              <p>
                <MdOutlineVerified className="text-red-500 text-2xl" />
              </p>
              <p>Feature Us</p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default GetInvolved;
