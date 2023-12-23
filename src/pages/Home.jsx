import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/hero/Hero";
import Upper from "../components/Upper";
import Values from "../components/Values";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Upper />
      <Values />
      <Hero />
    </div>
  );
};

export default Home;
