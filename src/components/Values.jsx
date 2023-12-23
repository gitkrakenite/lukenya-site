import React from "react";
import { HiOutlineCubeTransparent } from "react-icons/hi2";
import { MdOutlineAllInclusive } from "react-icons/md";
import { FaSuperpowers } from "react-icons/fa";
import { SiFuturelearn } from "react-icons/si";

const Values = () => {
  return (
    <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[100px] ">
      <div className="font-bold text-xl mb-[20px]">
        <h2
          className="font-bold text-2xl text-center"
          style={{ lineHeight: "1.3em" }}
        >
          We Believe In The Following
        </h2>
        {/* <h2
          className="font-bold text-2xl text-center"
          style={{ lineHeight: "1.3em" }}
        >
          Our Guiding Virtues
        </h2> */}
      </div>

      <div className=" mt-[50px] md:mt-[80px] flex flex-col lg:flex-row gap-[20px]">
        <div className="text-center bg-zinc-200 p-1 rounded-md">
          <div className="w-full flex justify-center mt-2">
            <HiOutlineCubeTransparent className="text-3xl text-red-500" />
          </div>
          <h2 className="my-[10px]">Transparency</h2>
          <p>
            By openly sharing information about the organization's goals,
            activities, and financial transactions, the CBO demonstrates a
            commitment to accountability. Transparent communication fosters
            trust
          </p>
        </div>
        <div className="text-center bg-zinc-200 p-1 rounded-md">
          <div className="w-full flex justify-center mt-2">
            <MdOutlineAllInclusive className="text-3xl text-red-500" />
          </div>
          <h2 className="my-[10px]">Inclusivity</h2>
          <p>
            By actively involving community members in decision-making
            processes, considering various perspectives, and addressing the
            unique challenges faced by different groups, the organization
            promotes a sense of belonging and equal representation
          </p>
        </div>
        <div className="text-center bg-zinc-200 p-1 rounded-md">
          <div className="w-full flex justify-center mt-2">
            <FaSuperpowers className="text-3xl text-red-500" />
          </div>
          <h2 className="my-[10px]">Empowerment</h2>
          <p>
            It involves providing community members with the resources, skills,
            and opportunities they need to take control of their lives and shape
            their future. Whether through education, training, or economic
            development programs
          </p>
        </div>
        <div className="text-center bg-zinc-200 p-1 rounded-md">
          <div className="w-full flex justify-center mt-2">
            <SiFuturelearn className="text-3xl text-red-500" />
          </div>
          <h2 className="my-[10px]">Sustainability</h2>
          <p>
            By implementing projects that not only address immediate needs but
            also contribute to the environmental, social, and economic
            sustainability of the community, the organization aims to create
            lasting positive change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
