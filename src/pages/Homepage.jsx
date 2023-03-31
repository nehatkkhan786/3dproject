import { IconButton } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import { Element } from "react-scroll";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Who from "../components/Who";
import Works from "../components/Works";
import Works2 from "../components/Works2";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Homepage = () => {
  const wrapperRef = useRef(null);
  const [showMoveUpIcon, setShowMoveIcon] = useState(false);
  const main = document.querySelector(".HomeWrapper");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = wrapperRef.current.scrollTop;
      const wrapperHeight = wrapperRef.current.clientHeight;
      const shouldShowButton = scrollPosition >= wrapperHeight;

      setShowMoveIcon(shouldShowButton);
    };

    wrapperRef.current.addEventListener("scroll", handleScroll);

    return () => {
      wrapperRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [wrapperRef]);

  const ScrollToTop = () => {
    wrapperRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToWho = () => {
    console.log("who");
    main.scrollTo(document.querySelector("#who"), {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <div className="HomeWrapper" ref={wrapperRef}>
      <Hero />
      <div id='about'>
        <Who />
      </div>

      <div id='skills'>
        <Skills />
      </div>

      <div id='projects'>
        <Works />
      </div>
      
      <Works2 />

      <div id='contact'>
       <Contact />
      </div>

      <div
        className="move-up-icon-wrapper"
        style={{
          opacity: showMoveUpIcon ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
          zIndex: "999",
        }}
        onClick={() => ScrollToTop()}
      >
        <IconButton sx={{ position: "absolute", bottom: 20, right: 20 }}>
          <KeyboardArrowUpIcon sx={{ fontSize: { xs: 40 } }} color="primary" />
        </IconButton>
      </div>
    </div>
  );
};

export default Homepage;
