import React from "react";
import Navbar from "../components/Navbar";
import Values from "../components/Values";

const About = () => {
  // className="px-[10px] md:px-[2em] xl:px-[5em] mt-[50px] pb-[20px]"

  const dummyTeam = [
    {
      id: 1,
      fullName: "Peter Pan",
      role: "Project Manager",
      profile:
        "https://images.pexels.com/photos/2024901/pexels-photo-2024901.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      fullName: "Mercy Doe",
      role: "Marketing Manager",
      profile:
        "https://images.pexels.com/photos/1367270/pexels-photo-1367270.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      fullName: "Antonia Doe",
      role: "Partner Relations",
      profile:
        "https://images.pexels.com/photos/1764564/pexels-photo-1764564.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      fullName: "Chris Rock",
      role: "Graphics Designer",
      profile:
        "https://images.pexels.com/photos/1322481/pexels-photo-1322481.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* overlay work */}
      <div>
        <div className="w-full h-[48vh]">
          <img
            src="https://images.pexels.com/photos/7293100/pexels-photo-7293100.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Background Placeholder"
            className="w-full h-[48vh] object-cover"
          />

          {/* overlay div */}
          <div className="absolute top-0 left-0 w-full h-[48vh] bg-[rgba(0,0,0,.7)]" />
          <div className="absolute w-full h-[48vh] top-0 flex flex-col justify-end sm:justify-center  text-white">
            <div className="p-[10px] sm:pl-[10%]">
              <p className="text-4xl font-bold">About Us</p>
              {/* divider */}
              <div className="w-[20%] h-[5px] bg-red-500 mb-[20px] rounded-md" />
              <p>
                Lukenya Compassion Center is a registered CBO in Kenya. It was
                formed in 2023. The goal is to support the local community{" "}
              </p>
              <p>
                We are driven by compassion with a keen interest in empowering
                marginalized communities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* mission value */}

      <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[50px] pb-[20px] flex flex-col lg:flex-row gap-[20px]">
        {/* img side */}
        <div className="flex-1 lg:flex-[0.4] ">
          <img
            src="https://images.pexels.com/photos/8948347/pexels-photo-8948347.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="rounded-md w-full sm:w-fit"
          />
        </div>
        {/* text side */}
        <div className="flex-[0.6]">
          <p className="text-red-500 font-bold  sm:mb-[40px] mb-[20px] text-xl sm:text-3xl  md:text-4xl">
            We are Laser Focused on Impact
          </p>
          <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[10px]">
            <div className="bg-zinc-300 p-2 rounded-lg">
              <h2>Mission</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                esse ad at. Sequi dicta alias possimus consequatur quos libero
                qui.
              </p>
            </div>
            <div className="bg-zinc-300 p-2 rounded-lg">
              <h2>Vision</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                esse ad at. Sequi dicta alias possimus consequatur quos libero
                qui.
              </p>
            </div>
          </div>
          <div className="mt-[30px]">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni,
              veritatis. Incidunt nisi laborum laudantium aut non nulla atque
              hic veritatis, quibusdam quos, odio fuga excepturi. Ipsam facere
              excepturi tempora odio?
            </p>
          </div>
        </div>
      </div>

      <Values />

      {/* team */}

      <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[50px] pb-[20px] ">
        <h2 className="text-center mb-[30px]">Meet the executive Team</h2>
        {/*  */}
        <div className="flex gap-[10px] overflow-x-scroll w-full prompt pb-2">
          <div className="flex flex-nowrap">
            {dummyTeam?.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 mr-[15px] cursor-pointer"
              >
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
                            <p className="text-white">{item.fullName}</p>
                          </div>
                        </div>
                        <div className="absolute top-[80px] left-3"></div>
                      </div>
                    </div>
                  </div>
                  <img
                    src={item.profile}
                    alt=""
                    className="w-72 h-80 rounded-md object-cover"
                  />
                </div>

                {/* options */}
                <p className="text-zinc-500 mt-[6px] ">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default About;
