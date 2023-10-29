import { Card, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NewProducts = () => {
  return (
    <div>
        <Typography variant='h4'>New Products</Typography>
        
        <Card variant='outlined' sx={{ width: 275 }}>
            <Typography variant='h5'>Product 4</Typography>
            <Link to='/products/4'>View</Link>
        </Card>
        <Card variant='outlined' sx={{ width: 275 }}>
            <Typography variant='h5'>Product 5</Typography>
            <Link to='/products/5'>View</Link>
        </Card>
        <Card variant='outlined' sx={{ width: 275 }}>
            <Typography variant='h5'>Product 6</Typography>
            <Link to='/products/6'>View</Link>
        </Card>
    </div>
  )
}

export default NewProducts