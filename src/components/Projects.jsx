import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineLike, AiOutlinePhone } from "react-icons/ai";
import { MdOutlineArrowForward } from "react-icons/md";

const Projects = () => {
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
          Current Projects You Can Dive In
        </h2>

        {/*  */}
        <div className="mt-[50px] flex justify-end">
          {/* <Link className="text-inherit">
            <div className="flex items-center gap-[10px]">
              <p>All Projects</p>
              <p>
                <MdOutlineArrowForward />
              </p>
            </div>
          </Link> */}
        </div>

        <div className="flex gap-[10px] overflow-x-scroll w-full prompt pb-2 ">
          <div className="flex flex-nowrap">
            {currentProjects?.map((item) => (
              <div key={item.id} className="flex-shrink-0 mr-[15px]">
                <Link to={`/business/${item.id}`}>
                  <div className="relative rounded-lg group ">
                    <div className="overlay absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-100">
                      <div
                        className="bg-gradient-to-t
                                  from-transparent to-black opacity-80 w-full h-full rounded-md"
                      >
                        {/* top stats */}
                        <div>
                          <div className="absolute top-[20px] flex gap-[10%]  w-full justify-between px-2 ">
                            <div>
                              <a href={`tel:+${item.phone}`}>
                                {" "}
                                <AiOutlinePhone className="text-2xl text-white hover:text-orange-200" />
                              </a>
                            </div>
                            <div className="flex gap-[20px]">
                              <p className="text-white text-md flex items-center gap-[5px]">
                                <AiOutlineEye className="text-lg" />
                                {/* <span>{item.views.length}</span> */}
                                <span>2k views</span>
                              </p>
                            </div>
                          </div>
                          <div className="absolute top-[80px] left-3">
                            <p className="text-white">{item.title}</p>
                          </div>
                        </div>
                        {/*  */}
                        <div className="absolute bottom-[20px] left-[20px]  flex gap-[10%] w-full ">
                          <div>
                            <div className="flex gap-[10px] text-zinc-300">
                              {/* <p>{item.location}</p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src={item.photo}
                      alt=""
                      className="w-72 h-80 rounded-md object-cover"
                    />
                  </div>
                </Link>
                {/* options */}
                {/* <div>dd</div> */}
              </div>
            ))}
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Projects;
