import React from "react";
import Logo from "../assets/logo.png";

const Upper = () => {
  return (
    <div className=" px-[10px] md:px-[2em]  xl:px-[5em] mt-[100px] ">
      <div className="flex flex-col lg:flex-row gap-[30px] md:gap-[50px]">
        {/* txtside */}
        <div className="flex-[0.5]">
          <div className="mb-[20px] flex justify-between">
            <div>
              <h2 className="text-2xl font-bold">LUKENYA COMPASSION</h2>
              <h2 className="text-2xl font-bold">CONNECT</h2>
            </div>
            <div>
              <img src={Logo} alt="" className=" sm:hidden w-12 h-12" />
            </div>
          </div>

          <div className="mb-[20px]">
            <h6>Community Empowerment</h6>
            <h6>Transforming Lives</h6>
          </div>

          {/* divider */}
          <div className="w-[20%] h-[10px] bg-red-500 mb-[20px] rounded-md" />

          <p className="mb-[40px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            iste maiores consequatur similique saepe, voluptatem ipsam incidunt
            veniam, eligendi reiciendis recusandae nemo ex enim quidem maxime
            voluptate! Dolores dicta, enim facilis iste rem totam ullam,
            dignissimos architecto obcaecati soluta impedit ipsum, quaerat
            corporis id perferendis? Veritatis pariatur porro a natus adipisci
            ullam harum exercitationem quis, consequatur earum, similique magnam
            dolores.
          </p>

          <span className="special-bg">More About Us</span>
        </div>

        {/* imgside */}
        <div className=" flex-[0.5] lg:flex-[0.4] relative">
          <img
            src="https://images.pexels.com/photos/8948347/pexels-photo-8948347.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="md:w-[90%] object-contain rounded-lg"
          />

          <img
            src="https://images.pexels.com/photos/220365/pexels-photo-220365.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-[120px] object-contain rounded-lg hidden md:block absolute top-0 z-[1] right-[10px] "
          />

          <img
            src="https://images.pexels.com/photos/14456845/pexels-photo-14456845.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-[120px] object-contain rounded-lg hidden md:block absolute top-[80px] z-[1] right-[-30px] "
          />

          <img
            src="https://images.pexels.com/photos/962317/pexels-photo-962317.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-[280px] object-contain rounded-lg hidden md:block absolute top-[140px]  right-[-80px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Upper;
