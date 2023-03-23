import { Box, Button, Container, FormControl, Input, InputBase, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Box sx={{height:'100svh', scrollSnapAlign:'center'}}>
      <Container maxWidth='sm' sx={{height:'100%',}}>
        <Box sx={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:3 }}>
          <Typography sx={{textAlign:'center', fontSize:24, fontWeight:'bold'}}>LETS CONNECT</Typography>
             <TextField
             label='Name'
             fullWidth
             variant='filled'
              InputLabelProps={{sx: {color:'#A9A9A9'} }}
              inputProps={{sx:{color:'#A9A9A9'}}}
             />

            <TextField
             label='Email'
             type='email'
             fullWidth
             variant='filled'
             InputLabelProps={{sx: {color:'#A9A9A9'} }}
             inputProps={{sx:{color:'#A9A9A9'}}}
             />
             <TextField
             multiline
             fullWidth
             label='Message'
             variant='filled'
             rows={5}
             InputLabelProps={{sx: {color:'#A9A9A9'} }}
             inputProps={{sx:{color:'#A9A9A9'}}}
             />
             <Button fullWidth variant='outlined'>Send</Button>
             <Box sx={{display:'flex', alignItems:'center', gap:2}}>
                <EmailIcon/> 
                <Typography sx={{fontSize:{xs:16, md:18}}}><a style={{textDecoration:'none', color:'#A9A9A9'}} href='mailto:connect@nehat.dev'>connect@nehat.dev</a></Typography>
             </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact
