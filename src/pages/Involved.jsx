import React from "react";
import Navbar from "../components/Navbar";
import GetInvolved from "../components/GetInvolved";
import { MdOutlineVerified } from "react-icons/md";
import Projects from "../components/Projects";

const Involved = () => {
  return (
    <div>
      <Navbar />

      {/* overlay work */}
      <div>
        <div className="w-full h-[48vh]">
          <img
            src="https://images.pexels.com/photos/8948347/pexels-photo-8948347.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Background Placeholder"
            className="w-full h-[48vh] object-cover"
          />

          {/* overlay div */}
          <div className="absolute top-0 left-0 w-full h-[48vh] bg-[rgba(0,0,0,.7)]" />
          <div className="absolute w-full h-[48vh] top-0 flex flex-col justify-end sm:justify-center  text-white">
            <div className="p-[10px] sm:pl-[10%]">
              <p className="text-4xl font-bold">Karibu Lukenya Connect</p>
              {/* divider */}
              <div className="w-[20%] h-[5px] bg-red-500 mb-[20px] rounded-md" />
              <p>Partnership And Positive Collaboration is in our DNA</p>
              <p>
                We are driven by compassion with a keen interest in empowering
                marginalized communities
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[90px] pb-[20px]">
        <h2></h2>
        <p></p>
      </div>

      {/* Support Us */}
      <div>
        <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[10px] pb-[20px]">
          <div>
            <h2
              className="font-bold text-2xl text-center"
              style={{ lineHeight: "1.3em" }}
            >
              How You Can Support Us
            </h2>

            {/*  */}
            <div className="mt-[50px] flex justify-end"></div>

            <div className="flex flex-col-reverse md:flex-row justify-evenly gap-[30px] items-center mt-[20px]">
              {/* img side */}
              <div className="flex-[0.5]">
                <h2 className="mb-[20px]">Lukenya Compassion Connect</h2>
                <p>
                  Our doors are always open to like-minded individuals,
                  organizations, and businesses that share our passion for
                  making a difference. We believe in the power of partnership to
                  amplify our efforts and create a larger, more lasting impact
                  on the lives of those we serve. At Lukenya Compassion Connect,
                  we focus on building connections that matter, fostering
                  positive collaborations, and working together to address
                  pressing issues in our communities. Through our dedicated team
                  and the support of our partners, we aim to uplift, inspire,
                  and empower those in need.
                </p>

                <p className="text-center mt-[40px]">
                  <a
                    href="mailto:"
                    className="text-inherit text-center p-2"
                    style={{ border: "1px solid red", borderRadius: "10px" }}
                  >
                    Get In Touch Now
                  </a>
                </p>
              </div>
              <div className=" flex-1 md:flex-[0.5] w-full">
                <div className="flex gap-[20px]">
                  <div className="hidden sm:block">
                    <div className="h-[80%] mt-[2em] bg-red-500 w-[5px] rounded-md" />
                  </div>
                  {/* content */}
                  <div className=" flex-1 sm:flex-[0.9]">
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
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* projects */}
      <Projects />
      {/*  */}
    </div>
  );
};

export default Involved;
