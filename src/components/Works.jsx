import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Manxho from '../assets/manxho.png'

const Works = () => {
  return (
    <Box sx={{height:'100svh', scrollSnapAlign:'center'}}>
      <Container maxWidth='lg' sx={{height:'100%'}}>
          <Typography sx={{textAlign:'center', fontSize:{xs:20, md:24}, paddingTop:2, textTransform:'uppercase', textDecoration:'underline', pt:2}}>Some of My Projects</Typography>
         <Box
          sx={{
            display: "flex",
            justifyContent: {xs: 'center', md: "space-around", lg:'space-around'  },
            height: "100%",
            gap: {xs:5},
            flexDirection: { xs: "column", md: "row" },
            alignItems: 'center',
          }}
        >

              {/* Projects Image */}
                
                  <Box component='img' src={Manxho} sx={{width:{xs:200, md:'100%', lg:'100%'}}} />
               
            


              {/* Project Content */}
              <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', gap:2,  }}>
                  <Typography sx={{fontSize:{xs:26, md:34}, textAlign:'center'}}>Manxho</Typography>
                  <Typography sx={{ textAlign: "justify", fontSize: { xs: 16, md: 18 } }}>
                  Manxho is a rural startup. A small business. Born during the difficult phase of Covid 19 in 2020. bring a unique perspective to the world of
                        web development.Manxho is based in Khowang, our village-town, and the prime focus is in growing with the community in Assam.
                </Typography>
                <Button onClick={()=>window.location='https://shop.manxho.co.in'} variant='outlined' size='small'  >View Now</Button>
               
              </Box>
          </Box>
      </Container>
    </Box>
  )
}

export default Works