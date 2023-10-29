import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Producsts = () => {
  return (
    <>
        <br />
        <Typography variant="h3" >Products</Typography>
        <TextField variant='outlined' label='Search product'></TextField><br /><br />
        <Link to='featured' >
            <Button variant='outlined'>Featured</Button>
        </Link>&nbsp;
        <Link to='new' >
            <Button variant='outlined'>New</Button>
        </Link>
        <Outlet />
    </>
  )
}

export default Producsts