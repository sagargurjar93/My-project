import React from 'react'
import {Paper, Stack, Box, Button} from '@mui/material'
import {Link} from 'react-router-dom'
// import Long from './Long'
// import SingIn from './SingIn'

function First() {
  return (
    <div>
        <Box>
        <h1>Hello...</h1>
        <Link to="/signin"><Button variant='text' color='primary'>SingIn</Button></Link>
        <Link to="/login"><Button variant='text' color='primary'>LogIn</Button></Link>

    
        </Box>
    </div>
  )
}

export default First