import React from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { AdarshHome } from '../assets/images';
import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';

// Define keyframes for fadeIn animation
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;


// Create styled component for the first letter with a gradient
const GradientLetter = styled('span')`
  background: linear-gradient(to left, ghostwhite, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

const GradientTypography = styled(Typography)`
  ${({ delay }) => css`
    animation: ${fadeIn} ${delay}s ease-in-out;
    font-size: 80px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  `}
`;

// Define keyframes for typewriter effect
const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 50%;
  }
`;

// Define keyframes for blink effect (cursor)
const blink = keyframes`
  0% { border-right: 2px solid transparent; }
  100% { border-right: 2px solid transparent; }
`;

// Create styled components for the typewriter effect
const TypewriterText = styled(Typography)`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid white; /* Cursor */
  animation: ${typewriter} 4s steps(40,end ), ${blink} 0.75s step-end  infinite;
`;

const Home = () => {
  return (
    <>
    <section id='home'>
    <Box sx={{ position: 'relative', height: '90vh', overflow: 'hidden'}}>
      <Grid container sx={{ fontFamily: 'monospace', fontWeight: 500, fontSize: 15, height: '100%', justifyContent: 'space-between' }}>

        {/* Sidebar: Always visible */}
        <Grid item xs={12} md={2} sm={12} style={{borderBottom:'3px solid #37474f'}} >
          <Box bgcolor="#263238" color="white" p={2} height="100%" />

        </Grid>

        {/* Content Area */}
        <Grid item xs={12} md={10} sm={12}>
          <Box bgcolor="#37474f" color="white" p={2} height="100%" sx={{ position: 'relative' }}>
            {/* Title with Gradient Letter */}
            <GradientTypography
              variant="h2"
              delay={1}
              sx={{
                position: 'absolute',
                top: { xs: '4%', md: '20%', sm: '4%' }, // Responsive top position
                left: { xs: '50%', md: '30%' }, // Center on small screens
                transform: { xs: 'translateX(-50%)', md: 'translateX(0%)' },
                fontSize: { xs: '40px', md: '80px', sm: '60px' }, // Responsive font size
              }}
            >
              <GradientLetter>W</GradientLetter>elcome,
            </GradientTypography>

            {/* Typewriter Effect Text */}
            <TypewriterText
              variant="h2"
              delay={3}
              sx={{
                position: 'absolute',
                color: 'white',
                right: { xs: '10%', md: '39%',sm:'26%' }, // Adjust for small screens
                top: { xs: '24%', md: '34%', sm: '20%' }, // Responsive top position
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                fontSize: { xs: '30px', md: '40px', sm: '40px' }, // Responsive font size
                fontWeight: 450,
                textAlign: { xs: 'center', md: 'right' }, // Center on small screens
                transform: { xs: 'translateX(0%)', md: 'translateX(0%)' },
              }}
            >
              I am Kurapati Adarsh
            </TypewriterText>
            <Box sx={{ position: 'relative', height: '100%' }}>

            {/* Animated Typography */}
            <Typography
              variant="h5"
              delay={5}
              sx={{
                position: 'absolute',
                color: {md:'white',xs:'ghostwhite'},
                right: { xs: '5%', md: '10%' }, // Adjust for small screens
                top: { xs: '37%', md: '47%', sm: '40%' }, // Responsive top position
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
                fontSize: { xs: '15px', md: '20px', sm: '25px' }, // Responsive font size
                lineHeight: {md:1.4,xs:1.1},
                maxWidth: { xs: '90%', md: '60%' }, // Responsive max width
                textAlign: { xs: 'center', md: 'left' }, // Center on small screens
              }}
            >
              "A dedicated civil engineering student at Kommuri Pratap Reddy Institute of Technology.
              As I navigate the transition from academia to the IT world, I invite you to explore my projects,
              skills, and experiences."
            </Typography>
            <Box
  sx={{
    position: 'relative',
    display: 'flex',
    justifyContent: { xs: 'space-between', md: 'flex-start' },
    alignItems: 'center',
    top: { xs: '66%', md: '65%' ,sm:'68%'},
    left:{md:'30%'},
    flexDirection: { xs: 'column', md: 'row' }, // Stack buttons on small screens
    gap: {md:2,xs:2},

  }}
>
  <Button
    variant="contained"
    color="secondary"
    href="/Adarsh_IT.pdf"
    download="Adarsh_IT.pdf"
    sx={{
      backgroundColor: '#263238',
      width: { xs: '180px' },
    }}
  >
    Download Resume
  </Button>

  <Button
    variant="contained"
    component="a"
    href="#contact"
    sx={{
      backgroundColor: '#263238',
      width: { xs: '85px' },
    }}
  >
    Contact
  </Button>
</Box>          </Box>
         </Box>
        </Grid>
      </Grid>

      {/* Image: Adjust visibility and position for small screens */}
      <Box
        component="img"
        src={AdarshHome}
        alt="Overlay Image"
        sx={{
          position: { xs: 'absolute', md: 'visible' }, // Adjust position based on screen size
          top: { xs: '27%', md: '50%', sm: '30%' }, // Responsive top position
          left: { xs: '50%', md: '16.67%' }, // Center on small screens
          transform: { xs: 'translate(-50%, -50%)', md: 'translate(-50%, -50%)', sm: 'translate(-50%, -50%)' },
          maxWidth: { md: '300px', xs: '230px', sm: '300px' }, // Adjust size for small screens
          height: {lg:'auto',md:'450px'},
          zIndex: 2,
          border: '3px solid white',
        }} />
    </Box></section></>
  );
};

export default Home;
