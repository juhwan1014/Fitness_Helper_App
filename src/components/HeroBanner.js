import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'

import HeroBannerImage from '../assets/images/muscle.jpg'

const HeroBanner = () => {
  return (
   <Box sx={{
    mt: {lg: '212px', xs: '70px'},
    ml: {sm: '50px'}
   }} position="relative" p="20px">
    <Typography color="#046ED8" fontWeight="600" fontSize="26x">
        Fitness Club
    </Typography>
    <Typography fontWeight={700}
    sx={{fontSize:{lg: '44px', xs:'40px'}}}>
        Sweat, Smile <br /> and Repeat 
    </Typography>
    <Typography fontSize="22px" LineHeight="35px" mb={4}>
        Check out the most effective exercises
    </Typography>
    <Button variant="contained" color="primary" href="#exercises"
     sx={{ backgroundColor: '#046ED8' , padding: '15px'}}
    >
        Explore Exercises
    </Button>
    <Typography
     fontWeight={600}
     color="#046ED8"
     sx={{
        opacity: 0.1,
        display: {lg: 'block', xs: 'none'}
     }}
     fontSize = "200px"
    >
        Exercise
    </Typography>
    <img src={HeroBannerImage} alt="Banner" className="hero-banner-img" />
   </Box>
  )
}

export default HeroBanner