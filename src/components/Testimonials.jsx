import React, { useState } from "react";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const DummyTest = [
    {
      id: 1,
      fullName: "Justin Davis",
      comment:
        " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
      profile:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      fullName: "Lucy",
      comment:
        " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has ",
      profile:
        "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      fullName: "Chris Mwangi",
      comment:
        " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
      profile:
        "https://images.pexels.com/photos/936119/pexels-photo-936119.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const handleNextClick = () => {
    if (currentIndex < DummyTest.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[50px] pb-[20px]">
      <h2
        className="font-bold text-2xl text-center"
        style={{ lineHeight: "1.3em" }}
      >
        What People Have To Say About Us
      </h2>
      {/* wrapper */}
      <div className="mt-[40px] flex flex-col lg:flex-row gap-[20px] items-center">
        {/* text side */}
        <div className="flex-[0.5] ">
          <div>
            <div className="w-full flex justify-center">
              <img
                src={DummyTest[currentIndex].profile}
                alt="Profile"
                className="w-[50px] h-[50px] object-cover rounded-full"
              />
            </div>
            <h2 className="text-center my-[10px]">
              {DummyTest[currentIndex].fullName}
            </h2>
            <p className="text-center">{DummyTest[currentIndex].comment}</p>
          </div>
          <div className="flex gap-[20px] justify-center">
            <button
              onClick={handlePreviousClick}
              className="bg-red-500 text-white rounded-full p-2"
            >
              <HiOutlineArrowSmallLeft />
            </button>
            <button
              onClick={handleNextClick}
              className="bg-red-500 text-white rounded-full p-2"
            >
              <HiOutlineArrowSmallRight />
            </button>
          </div>
        </div>

        {/* video side */}
        <div className=" w-full lg:flex-[0.5] ">
          <iframe
            // width="1250"
            // height="703"
            className="w-full h-[500px]"
            src="https://www.youtube.com/embed/T01fih7y5g0"
            title="What is a Community Based Organization?"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
