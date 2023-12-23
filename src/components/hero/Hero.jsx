import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import "./hero.css";
import { toast } from "react-toastify";

const Hero = () => {
  const textRef = useRef(null);

  const handleCopy = () => {
    if (textRef.current) {
      textRef.current.select();
      document.execCommand("copy");
      // You can also display a success message or perform any other action after copying.
      toast.success("Copied To Clipboard");
    }
  };

  // mobile stuff

  return (
    <div className="mb-[30px]">
      {/* desktop Caraousel hidden md:block*/}
      <div className=" px-[20px] pt-[80px]">
        <Carousel indicators={false} prevIcon={false} nextIcon={false}>
          <Carousel.Item interval={7000} className=" h-[45vh] md:h-[60vh]">
            <img
              className="d-block w-100 h-[45vh] md:h-[60vh] object-cover rounded-xl"
              src="https://images.pexels.com/photos/7181493/pexels-photo-7181493.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="First slide"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.8)] rounded-xl" />
            <Carousel.Caption className=" h-full flex justify-center items-center">
              <Link to="/" className="text-inherit">
                <div>
                  <h3
                    className=" text-lg sm:text-2xl lg:text-4xl xl:text-6xl mb-[30px]"
                    style={{ fontWeight: 700 }}
                  >
                    Communities Thrive, Together We Rise
                  </h3>
                  <p className=" text-zinc-300 tracking-wider  mb-[45px]">
                    Fostering Empowering Community Transformation, where
                    collective efforts lead to shared success, uplifting
                    individuals and neighborhoods alike.
                  </p>
                  <p className=" hidden md:block text-zinc-300 tracking-wider  pb-2">
                    Our strategy revolves around fostering a sense of unity and
                    collaboration within the community. By implementing projects
                    that encourage teamwork, mutual support, and shared goals,
                    we believe in the principle that when communities thrive,
                    everyone rises together.
                  </p>
                </div>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>

          {/* second */}
          <Carousel.Item interval={7000} className=" h-[45vh] md:h-[60vh]">
            <div className="d-block w-100 h-[45vh] md:h-[60vh] object-cover rounded-xl bg-red-500" />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.8)] rounded-xl" />

            <Carousel.Caption className=" h-full flex  items-center">
              <Link to="/" className="text-inherit">
                <div>
                  <h2
                    className=" text-lg sm:text-2xl lg:text-4xl xl:text-6xl mb-[30px]"
                    style={{ fontWeight: 700 }}
                  >
                    Empower, Engage, Transform
                  </h2>
                  <p className=" text-zinc-300 tracking-wider  mb-[45px]">
                    Driving Empowering Community Transformation by empowering
                    individuals, fostering community engagement, and catalyzing
                    a transformative journey for a brighter future.
                  </p>
                  <p className=" hidden md:block text-zinc-300 tracking-wider  pb-2">
                    Empowerment begins at the individual level, with a focus on
                    education, skill-building, and personal development.
                    Engaging the community involves creating platforms for open
                    communication, active participation, and collaboration.{" "}
                  </p>
                </div>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>

          {/* third */}
          <Carousel.Item interval={7000} className=" h-[45vh] md:h-[60vh]">
            <img
              className="d-block w-100 h-[45vh] md:h-[60vh] object-cover rounded-xl"
              src="https://images.pexels.com/photos/14456845/pexels-photo-14456845.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="First slide"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.8)] rounded-xl" />
            <Carousel.Caption className=" h-full flex justify-center items-center">
              <Link to="/" className="text-inherit">
                <div>
                  <h3
                    className=" text-lg sm:text-2xl lg:text-4xl xl:text-6xl mb-[30px]"
                    style={{ fontWeight: 700 }}
                  >
                    Elevate Lives, Transform Communities
                  </h3>
                  <p className=" text-zinc-300 tracking-wider  mb-[45px]">
                    Through strategic initiatives, we aim to achieve Empowering
                    Community Transformation, creating a ripple effect that
                    elevates lives and transforms entire communities.
                  </p>
                  <p className=" hidden md:block text-zinc-300 tracking-wider  pb-2">
                    Our strategic initiatives encompass a range of areas,
                    including healthcare, infrastructure, and economic
                    empowerment. By addressing the diverse needs of the
                    community, we create a comprehensive approach to
                    transformation. Improving healthcare access, enhancing
                    infrastructure, and promoting economic opportunities are
                    integral components of our strategy.
                  </p>
                </div>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* mobile carousel */}
    </div>
  );
};

export default Hero;
