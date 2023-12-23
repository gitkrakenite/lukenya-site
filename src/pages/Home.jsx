import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero/Hero";
import Upper from "../components/Upper";
import Values from "../components/Values";
import Approach from "../components/Approach";
import Projects from "../components/Projects";
import GetInvolved from "../components/GetInvolved";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Upper />
      <Values />
      <Hero />
      <Approach />
      <Projects />
      <GetInvolved />
      <Partners />
      <Testimonials />
      <Gallery />
    </div>
  );
};

export default Home;
