import React from 'react'
import { Button, Typography, Card, CardContent, CardMedia } from '@mui/material'
import fishImg from './../assets/fish.png'

const FishCard = ({ fish }) => {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                    {fish.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {fish.taxonomy}
                </Typography>
                <Button color="primary">
                    View More
                </Button>
            </CardContent>
            <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                image={fish.imageURL ? fish.imageURL : fishImg}
                alt={fish.imageLabel}
            />
        </Card>
    )
}

export default FishCard