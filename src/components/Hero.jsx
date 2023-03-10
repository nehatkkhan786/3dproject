import React from 'react'
import {Avatar, Box, Container, IconButton, Typography} from '@mui/material'
import Navbar from './Navbar'
import Profile from '../assets/profile.png';
import { useTypewriter } from 'react-simple-typewriter'
import { SocialIcon } from 'react-social-icons';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import SouthIcon from '@mui/icons-material/South';
import { Link } from 'react-scroll';



const Hero = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Cyber-Savvy',],
    loop: 0, 
    typeSpeed:70,
  })

  return (
   <Box sx={{height:'100svh', scrollSnapAlign:'center'}}>
          <Navbar/>
          <Container maxWidth='md' sx={{height:'100%'}}>
            <Box sx={{display:'flex', flexDirection:'column',  alignItems:'center',  justifyContent:'center', mt:4,  width:'100%',}}>
              {/* Main Image */}
              <Avatar  src={Profile} sx={{width:{xs:180, sm:180, md:280, lg:280}, height:'auto',boxShadow: 20,  border: "0.5px  solid gray", }} />
               {/* <Box component='img' src={Profile} sx={{width:300, height:'auto', borderRadius:20, boxShadow:50}}/> */}
              {/* Greetings Typography */}
              <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', mt:2}}>
                  <Typography sx={{fontSize:{xs:20, sm:18, md:24, lg:24}}}> Salam 👋 </Typography>
                  {/* What you are title */}
                  <Typography sx={{fontSize:{xs:18, sm:22, md:24, lg:24}}}>My name is Nehat Khan</Typography>
                  <Box sx={{display:'flex', gap:1}}>
                      <Typography sx={{fontSize:{xs:20, sm:20, md:34, lg:40}, textTransform:'uppercase'}}>I am a </Typography>
                      <Typography color='primary' sx={{fontSize:{xs:20, sm:20, md:34, lg:40}, textTransform:'uppercase'}}> {text}</Typography>
                  </Box>
              </Box>
              {/* socia Links */}
              <Box sx={{display:'flex', gap:3, mt:2}}>
                  <TwitterIcon sx={{fontSize:{xs:26, md:36},':hover':{color:'#E95420'}}}/>
                  <InstagramIcon sx={{fontSize:{xs:26, md:36},':hover':{color:'#E95420'}}} />
                  <RedditIcon sx={{fontSize:{xs:26, md:36},':hover':{color:'#E95420'}}} />
              </Box>
             
                <IconButton  className='animeIcon' sx={{mt:{xs:8, md:20, lg:24}}}>
                    <SouthIcon color='primary' sx={{ fontSize:{xs:40, md:50}}}/>
                </IconButton>
              
            </Box>
          </Container>
   </Box>
  )
}

export default Hero