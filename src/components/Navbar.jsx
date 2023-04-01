import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import Logo1 from "../assets/white_transparent.webp";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from 'react-scroll'


const Navbar = () => {
  const [anchorElm, setAnchorElm] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setAnchorElm(null);
    setOpen(false);
  };

  const handleClick = (e) => {
    setAnchorElm(e.currentTarget);
    setOpen(true);
  };
  const scrollToAbout = ()=>{

  }

  return (
    <Container maxWidth="xl">
      <Box sx={{display: "flex",justifyContent: "space-between",paddingTop: 2,alignItems: "center",}}>
        {/* Logo */}
        <Box component="img"src={Logo1}sx={{width: { xs: 150, sm: 150, md: 200, lg: 200 },height: { xs: 60, sm: 60, md: 80, lg: 80 },cursor: "pointer",}}/>

        {/* Links */}
        <Box sx={{display: { xs: "none", sm: "none", md: "flex", lg: "flex" }, gap: 3,alignItems: "center",}}>
          
          {/* <ul style={{listStyle:'none', display:'flex', gap:10}}>

            <li style={{cursor:'pointer',}} >
              <a style={{color:'inherit', textDecoration:'none', fontSize:14, textTransform:'uppercase'}} className='nav-link' href="#about">About</a>
            </li>

            <li style={{cursor:'pointer'}} >
              <a style={{color:'inherit', textDecoration:'none', fontSize:14,  textTransform:'uppercase'}} className='nav-link'   href="#skills">Skills</a>
            </li>

            <li style={{cursor:'pointer'}} >
              <a style={{color:'inherit', textDecoration:'none', fontSize:14,  textTransform:'uppercase'}} className='nav-link'  href="#projects">Projects</a>
            </li>
          </ul> */}

          <a href="#about" style={{textDecoration:'none', color:'inherit'}}>
            <Typography sx={{fontSize: 12,cursor: "pointer",textTransform: "uppercase",transition: "color 0.2s ease-in-out",":hover": {color: "#E95420",transition: "color 0.2s ease-in-out",},}}>
              About
            </Typography>
          </a>

          <a href="#skills" style={{textDecoration:'none', color:'inherit'}}>
            <Typography sx={{fontSize: 12,cursor: "pointer",textTransform: "uppercase",transition: "color 0.2s ease-in-out",":hover": {color: "#E95420",transition: "color 0.2s ease-in-out",},}}>
              Skills
            </Typography>
          </a>

          <a href="#projects" style={{textDecoration:'none', color:'inherit'}}>
            <Typography sx={{fontSize: 12,cursor: "pointer",textTransform: "uppercase",transition: "color 0.2s ease-in-out",":hover": {color: "#E95420",transition: "color 0.2s ease-in-out",},}}>
              Projects
            </Typography>
          </a>
      
              {/* <Typography  sx={{fontSize: 12,cursor: "pointer",textTransform: "uppercase",transition: "color 0.2s ease-in-out",":hover": {color: "#E95420",transition: "color 0.2s ease-in-out",},}}>
                <a href="#about">About</a>
              </Typography> */}
           

          {/* <li style={{listStyle:'none', cursor:'pointer'}}>
            <a href="#about" style={{textDecoration:'none'}}>About</a>
          </li> */}
          

          {/* 
          <Typography sx={{fontSize: 12,cursor: "pointer",textTransform: "uppercase",transition: "color 0.2s ease-in-out",":hover": {color: "#E95420",transition: "color 0.2s ease-in-out",},}}>
            Services
          </Typography>

          <Typography sx={{fontSize: 12,cursor: "pointer",textTransform: "uppercase",transition: "color 0.2s ease-in-out",":hover": {color: "#E95420",transition: "color 0.2s ease-in-out",},}}>
            Projects
          </Typography>

          <Typography
            sx={{fontSize: 12,cursor: "pointer",textTransform: "uppercase",transition: "color 0.2s ease-in-out",":hover": {color: "#E95420",transition: "color 0.2s ease-in-out",},}}>
            Blog
          </Typography>

          <Button size="medium"variant="contained"endIcon={<EmojiPeopleIcon />}sx={{ml: 4,display: { xs: "none", sm: "none", md: "flex", lg: "flex" },}}>
            Say Hello
          </Button>
          
          */}
           <Button size="medium"variant="contained"endIcon={<EmojiPeopleIcon />}sx={{ml: 4,display: { xs: "none", sm: "none", md: "flex", lg: "flex" },}}>
              <a href="#contact" style={{color:'inherit', textDecoration:'none'}}> Say Hello</a>
            </Button>
        </Box>

        {/* Hamburger Menu For Mobile Screen */}
        <IconButton id="basic-menu"onClick={handleClick}sx={{ display: { xs: "flex", sm: "flex", md: "none", lg: "none" } }}>
          {open ? (<CloseIcon sx={{ color: "#A9A9A9", fontSize: 34 }} />) : (<MenuOpenIcon sx={{ color: "#A9A9A9", fontSize: 34 }} />)}
        </IconButton>

        <Menu
          anchorEl={anchorElm}
          open={open}
          onClose={handleClose}
          PaperProps={{style: {backgroundColor: "#202020", color: "#A9A9A9",},}}>

          
          <a href="#about" style={{textDecoration:'none', color:'inherit'}}>
            <MenuItem onClick={()=>handleClose()}>
              ABOUT
            </MenuItem>
          
          </a>
          <a href="#skills" style={{textDecoration:'none', color:'inherit'}}>
            <MenuItem onClick={()=>handleClose()}>
              SKILLS
            </MenuItem>
          
          </a>
          <a href="#skills" style={{textDecoration:'none', color:'inherit'}}>
            <MenuItem onClick={()=>handleClose()}>
              PROJECTS
            </MenuItem>
          
          </a>
          <MenuItem>BLOG</MenuItem>

          <a href="#contact" style={{textDecoration:'none', color:'inherit'}}>
          <MenuItem  onClick={()=>handleClose()}>
            <Button variant="contained" endIcon={<EmojiPeopleIcon />}>
              SAY HELLO
            </Button>
          </MenuItem>
          </a>
        </Menu>
      </Box>
    </Container>
  );
};

export default Navbar;
