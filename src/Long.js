import React, {useState} from 'react'
import {Stack, TextField, Button} from '@mui/material'
import { Link } from 'react-router-dom'


function Login() {

    const[value,setvalue] = useState("")

  return (
    <div>
        <Stack>
        <Stack spacing={5}>
                <TextField label="Username" size='small' />
                <TextField
                onChange={(e)=>{setvalue(e.target.value)}}
                label="password" 
                type="password" 
                helperText={!value ? "required":"8 char log"} />
               <Link to="/main"><Button variant='text' color='primary'>LogIn</Button></Link>
            </Stack>
        </Stack>
    </div>
  )
}

export default Login