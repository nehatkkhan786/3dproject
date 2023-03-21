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
import GitHubIcon from '@mui/icons-material/GitHub';

import { Link } from 'react-scroll';



const Hero = () => {
  const [text] = useTypewriter({
    words: ['Developer', 'Cyber-Savvy',],
    loop: 0, 
    typeSpeed:70,
  })

  return (
   <Box sx={{height:'100svh', scrollSnapAlign:'center'}}>
          <Navbar  />
          <Container maxWidth='md' sx={{height:'100%'}}>
            <Box sx={{display:'flex', flexDirection:'column',  alignItems:'center',  justifyContent:'center', mt:4,  width:'100%',}}>
              {/* Main Image */}
              <Avatar  src={Profile} sx={{width:{xs:180, sm:180, md:250, lg:250}, height:'auto',boxShadow: 20,  border: "0.5px  solid gray", borderRadius:10 }} />
               {/* <Box component='img' src={Profile} sx={{width:300, height:'auto', borderRadius:20, boxShadow:50}}/> */}
              {/* Greetings Typography */}
              <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', mt:2}}>
                  <Typography sx={{fontSize:{xs:20, sm:18, md:20, lg:20}}}> Salam 👋 </Typography>
                  {/* What you are title */}
                  <Typography sx={{fontSize:{xs:18, sm:22, md:24, lg:24}}}>My name is Nehat</Typography>
                  <Typography sx={{fontSize:{xs:16, sm:20, md:26, lg:26}, mt:1, textTransform:'uppercase'}}>Developer | Tech Savy | Father</Typography>

                  {/* <Box sx={{display:'flex', gap:1}}>
                      <Typography sx={{fontSize:{xs:20, sm:20, md:26, lg:26}, textTransform:'uppercase'}}>I am a </Typography>
                      <Typography color='primary' sx={{fontSize:{xs:20, sm:20, md:30, lg:30}, textTransform:'uppercase'}}> {text}</Typography>
                  </Box> */}

              </Box>
              {/* socia Links */}
              <Box sx={{display:'flex', gap:3, mt:2}}>
                  <GitHubIcon onClick={()=>window.location = 'https://github.com/nehatkkhan786'}  sx={{fontSize:{xs:26, md:28},':hover':{color:'#E95420'}}}/>
                  <TwitterIcon onClick={()=>window.location = 'https://twitter.com/nehatkhan82'}  sx={{fontSize:{xs:26, md:28},':hover':{color:'#E95420'}}}/>
                  <InstagramIcon onClick={()=>window.location = 'https://www.instagram.com/nehat_khan/'} sx={{fontSize:{xs:26, md:28},':hover':{color:'#E95420'}}} />
                  <RedditIcon onClick={()=>window.location = 'https://www.reddit.com/user/Nehatkhan786'} sx={{fontSize:{xs:26, md:28},':hover':{color:'#E95420'}}} />
              </Box>
             
                <IconButton  className='animeIcon' sx={{mt:{xs:8, md:15, lg:15}}}>
                    <SouthIcon color='primary' sx={{ fontSize:{xs:40, md:50}}}/>
                </IconButton>
              
            </Box>
          </Container>
   </Box>
  )
}

export default Hero