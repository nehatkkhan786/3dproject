import React, { useRef, useEffect } from "react";
import { Element } from "react-scroll";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Who from "../components/Who";
import Works from "../components/Works";
import Works2 from "../components/Works2";

const Homepage = () => {
  return (
    <div className="HomeWrapper">
      <Hero />
      <Who  />
      <Works/>
      <Works2 />
      <Contact />
    </div>
  );
};

export default Homepage;
