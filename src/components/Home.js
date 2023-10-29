import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate();

  const login = () => {
    navigate('/login')
  }
  return (
    <div>
      <br />
      <Typography variant="h3" >Home</Typography>
    </div>
  )
}

export default Home