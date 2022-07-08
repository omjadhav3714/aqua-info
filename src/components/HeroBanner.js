import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import HeroImg from './../assets/banner.jpg'

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: '150px', xs: '70px' },
                ml: { sm: '50px' }
            }}
            position="relative"
            p="20px"
        >
            <Typography
                color="#64b5f6"
                fontWeight={600}
                fontSize="26px"
            >
                Aqua Info
            </Typography>
            <Typography
                fontSize="22px"
                lineHeight="35px"
                mb={4}
            >
                Check out information about fishes
            </Typography>
            <Button
                variant="contained"
                color="error"
                sx={{
                    backgroundColor: '#64b5f6'
                }}
                padding="10px"
            >Explore Fishes</Button>
            <Typography
                fontWeight={600}
                color="#64b5f6"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', sm: 'none' }
                }}
                fontSize='200px'
            >
                Fishes
            </Typography>
            <img src={HeroImg} alt="bannerImg"
                className='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner