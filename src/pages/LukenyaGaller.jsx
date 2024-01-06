import React from "react";
import Navbar from "../components/Navbar";
import AllGallery from "../components/AllGallery";

const LukenyaGaller = () => {
  return (
    <div>
      <Navbar />
      <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[100px] pb-[20px]">
        <h2>Our Gallery</h2>
        <p className="w-[30%]">
          In every picture, there is a story to be told, a memory to be
          cherished, and a moment to be remembered. Our gallery is a testament
          to the beautiful tapestry of shared experiences and the power of
          memories captured in each frame{" "}
        </p>
        <p className="text-sm text-red-500">
          All images are subject to copyright
        </p>
      </div>

      {/* all images */}
      <AllGallery />
    </div>
  );
};

export default LukenyaGaller;
