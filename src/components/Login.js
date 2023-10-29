import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

const Login = () => {

  const [user, setUser] = useState('')
  const auth = useAuth();

  useEffect(() => {
    if(auth.isLogedin()){
      navigate('/');
    }
  })

  const navigate = useNavigate();
  const location = useLocation()
  const redirectPath = location.state?.path || '/';
    
  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, {replace: true});
  }

  return (
    <>
    <br />
    <Typography variant="h3" >Login</Typography>
    
    <TextField variant='outlined' value={user} onChange={(e) => setUser(e.target.value)} label='User Name'></TextField><br /><br />
    <Button variant='contained' onClick={handleLogin}>Login</Button>
    </>
  )
}

export default Login