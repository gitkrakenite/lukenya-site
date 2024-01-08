import React from "react";
import Navbar from "../components/Navbar";

const Blog = () => {
  return (
    <div>
      {/* navbar */}
      <div>
        <Navbar />
      </div>

      {/* hero section */}
      <div>
        <div className="w-full h-[70vh]">
          <img
            src="https://images.pexels.com/photos/13458334/pexels-photo-13458334.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="Background Placeholder"
            className="w-full h-[70vh] object-cover"
          />

          {/* overlay div */}
          <div className="absolute top-0 left-0 w-full h-[70vh] bg-[rgba(0,0,0,.5)]" />
          <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white">
            <p>Welcome to my site</p>
            <p>I like this</p>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default Blog;
