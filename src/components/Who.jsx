import { Box, Container, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import Me from "./Me";

const Who = () => {
  return (
    <Box sx={{ height: "100svh", scrollSnapAlign: "center" }}>
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: { sx: "space-around", md: "space-between" },
            alignItems: "center",
            height: "100%",
            gap: 2,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* For About Me Image */}
          <Box
            sx={{
              width: { xs: "100%", md: "100%", lg: "100%" },
              height: { xs: 250, md: "100%", lg: "100%" },
            }}
          >
            <Me />
          </Box>
          {/* For About Me Content */}
          <Box sx={{ width: { xs: "100%" } }}>
            <Typography
              sx={{ textAlign: "justify", fontSize: { xs: 16, md: 18 } }}
            >
              I am a technology enthusiast with a passion for building beautiful
              and functional websites. With a background in network engineering
              and ethical hacking, I bring a unique perspective to the world of
              web development. My expertise in HTML, CSS, Django, Python, React,
              and JavaScript allows me to create visually stunning and secure
              websites that perform seamlessly. I have a strong desire to learn
              and stay on top of the latest technologies and industry trends. My
              goal is to use my skills to help others achieve their online
              objectives and bring their vision to life.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default forwardRef(Who);
