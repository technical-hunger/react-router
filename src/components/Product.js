import { Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate()

    const params = useParams();
    const productId = params.productId;
    const back = () => {
        navigate(-1);
    }
  return (
    <>
        <br />
        <Typography variant='h3'>Product details</Typography>
        <Typography variant='h4'>Product ID: {productId}</Typography>
        <Button variant='outlined' onClick={back}>Go back</Button>
    </>
  )
}

export default Product