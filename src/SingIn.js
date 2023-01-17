import React, {useState} from 'react'
import {TextField, Button, Stack} from '@mui/material'
import { Link } from 'react-router-dom'

function SingIn() {

    const[value,setvalue]=useState("")
    
  return (
    <div>
         <Stack>
        <Stack spacing={3}>
                <TextField label="Username" size='small' />
                <TextField label="Email" size='small' />
                <TextField
                onChange={(e)=>{setvalue(e.target.value)}}
                label="password" 
                type="password" 
                helperText={!value ? "required":"8 char log"} />
                <TextField
                onChange={(e)=>{setvalue(e.target.value)}}
                label="Conform password" 
                type="password" 
                helperText={!value ? "required":"8 char log"} />
               <Link to="/login"><Button variant='text' color='primary'>SingIn</Button></Link>
            </Stack>
        </Stack>
    </div>
  )
}

export default SingIn