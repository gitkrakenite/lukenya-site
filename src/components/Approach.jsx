import React from "react";
import Clothes from "../assets/clothes.png";
import Disabled from "../assets/disabled.png";
import Food from "../assets/food.png";
import Learn from "../assets/learn.png";
import Partner from "../assets/partner.png";

const Approach = () => {
  return (
    <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[50px] pb-[40px]">
      <div className="font-bold text-xl mb-[20px]">
        <h2
          className="font-bold text-2xl text-center"
          style={{ lineHeight: "1.3em" }}
        >
          Our Journey to Sustainable Change
        </h2>
        {/* <h2
          className="font-bold text-2xl text-center"
          style={{ lineHeight: "1.3em" }}
        >
          Our Guiding Virtues
        </h2> */}
      </div>

      {/* first layer */}
      <div className=" mt-[30px] md:mt-[80px] flex justify-evenly flex-col lg:flex-row gap-[20px]">
        <div className="text-center bg-zinc-200 p-2 rounded-md">
          <div className="w-full flex justify-center mt-2">
            <img src={Food} alt="" className="w-14 h-14" />
          </div>
          <p className="my-[10px]">Access To Healthy Food</p>
        </div>
        <div className="text-center bg-zinc-200 p-2 rounded-md">
          <div className="w-full flex justify-center mt-2">
            <img src={Learn} alt="" className="w-14 h-14" />
          </div>
          <p className="my-[10px]">Provide Awereness and Education</p>
        </div>
        <div className="text-center bg-zinc-200 p-2 rounded-md">
          <div className="w-full flex justify-center mt-2">
            <img src={Clothes} alt="" className="w-14 h-14" />
          </div>
          <p className="my-[10px]">Provide Access To Clothes</p>
        </div>
        <div className="text-center bg-zinc-200 p-2 rounded-md">
          <div className="w-full flex justify-center mt-2">
            <img src={Disabled} alt="" className="w-14 h-14" />
          </div>
          <p className="my-[10px]">Advocate For The Disabled</p>
        </div>
        <div className="text-center bg-zinc-200 p-2 rounded-md">
          <div className="w-full flex justify-center mt-2">
            <img src={Partner} alt="" className="w-14 h-14" />
          </div>
          <p className="my-[10px]">Strategic Beneficial Partnership</p>
        </div>
      </div>
    </div>
  );
};

export default Approach;
