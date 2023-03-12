import { Box, Typography } from '@mui/material'
import React, { forwardRef } from 'react'

const Who = () => {
  return (
    <Box  sx={{height:'100svh', scrollSnapAlign:'center'}}>
        <Typography>Who</Typography>
    </Box>
  )
}

export default forwardRef(Who);