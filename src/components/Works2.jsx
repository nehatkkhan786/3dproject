import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Manxho from '../assets/manxho.png'
import Vecreation from '../assets/vecreation.png'

const Works2 = () => {
  return (
    <Box sx={{height:'100svh', scrollSnapAlign:'center'}}>
      <Container maxWidth='lg' sx={{height:'100%'}}>
         
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
           {/* Project Content */}
           <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', gap:2,  }}>
                  <Typography sx={{fontSize:{xs:26, md:34}, textAlign:'center'}}>Vecreation</Typography>
                  <Typography sx={{ textAlign: "justify", fontSize: { xs: 16, md: 18 } }}>
                  Vecrestion specialize in providing high-quality leather goods for music lovers, fashion enthusiasts, and anyone who appreciates the timeless beauty and durability of leather.
                </Typography>
                <Button onClick={()=>window.location='https://vecreation.in'} variant='outlined' size='small'  >View Now</Button>
               
              </Box>

              {/* Projects Image */}
             
                <Box component='img' src={Vecreation} sx={{width:{xs:300, md:'100%', lg:'100%'}}} />
             


             
          </Box>
      </Container>
    </Box>
  )
}

export default Works2