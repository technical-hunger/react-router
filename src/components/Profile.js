import { Typography } from '@mui/material'
import React from 'react'
import { useAuth } from './auth'

const Profile = () => {

  const auth = useAuth();

  return (
    <>
    <br />
        <Typography variant='h3'>User Profile</Typography>
        <Typography variant='h4'>Welcome {auth.user}</Typography>
    </>
  )
}

export default Profile