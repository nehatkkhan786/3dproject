import { Box, Button, CircularProgress, Container, FormControl, Input, InputBase, InputLabel, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios'

const Contact = () => {
  const [name, setName]= useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)

  const sendMail = async()=>{
    setLoading(true)
    try {
     const response = await axios.post('https://api.nehat.dev/api/sendmessage/', {'name':name,"email":email, "message":message}, {
      headers:{
        'content-type':'application/json'
      }
     })
     console.log(response)
     setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <Box sx={{height:'100svh', scrollSnapAlign:'center'}}>
      <Container maxWidth='sm' sx={{height:'100%',}}>
        <Box sx={{height:'100%', width:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:3 }}>
          <Typography sx={{textAlign:'center', fontSize:24, fontWeight:'bold'}}>LETS CONNECT</Typography>
             <TextField
             label='Name'
             fullWidth
             variant='filled'
             required
            InputLabelProps={{sx: {color:'#A9A9A9'} }}
            inputProps={{sx:{color:'#A9A9A9'}}}
            value={name}
            onChange={(e)=>setName(e.target.value)}

             />

            <TextField
             label='Email'
             type='email'
             fullWidth
             variant='filled'
             required
             InputLabelProps={{sx: {color:'#A9A9A9'} }}
             inputProps={{sx:{color:'#A9A9A9'}}}
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             />
             <TextField
             multiline
             fullWidth
             label='Message'
             variant='filled'
             required
             rows={5}
             InputLabelProps={{sx: {color:'#A9A9A9'} }}
             inputProps={{sx:{color:'#A9A9A9'}}}
             value={message}
             onChange={(e)=>setMessage(e.target.value)}
             />
             
             {loading ?  <CircularProgress/> : <Button fullWidth variant='outlined' onClick={()=>sendMail()}  >Send</Button> }
             
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
