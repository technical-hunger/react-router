import { Card, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  return (
    <div>
        <Typography variant='h4'>
            Featured Producsts
        </Typography>

        <Card variant='outlined' sx={{ width: 275 }}>
            <Typography variant='h5'>Product 1</Typography>
            <Link to='/products/1'>View</Link>
        </Card>
        <Card variant='outlined' sx={{ width: 275 }}>
            <Typography variant='h5'>Product 2</Typography>
            <Link to='/products/2'>View</Link>
        </Card>
        <Card variant='outlined' sx={{ width: 275 }}>
            <Typography variant='h5'>Product 3</Typography>
            <Link to='/products/3'>View</Link>
        </Card>

    </div>
  )
}

export default FeaturedProducts