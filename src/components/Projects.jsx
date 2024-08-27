import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Container } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { Adarshcompany, Banky, Event, Guess, Mern, portfolio } from '../assets/images';


// Sample project data
const projects = [
  {
    title: 'Banky Simulation',
    description: 'A Real World Bank platform developed using Java.',
    image: Banky, // Replace with actual image URLs
    link:'https://github.com/KurapatiAdarsh/BankySimulation.git',
  },
  {
    title: 'Guess the Number ',
    description: 'A Guessing game developed using Java .',
    image:Guess,
    link:'https://github.com/KurapatiAdarsh/Guess-the-number.git',
  },
  {
    title: 'EventManagement',
    description: 'A Eventmanagement webpage using HTML,CSS,JAVASCRIPT.',
    image:Event,
    link:'https://github.com/KurapatiAdarsh/Kurapati-Adarsh-/blob/main/eventmanagement.html',
  },
  {
    title: 'Adarsh Company',
    description: 'A Adarsh company webpage using HTML,CSS,JAVASCRIPT.',
    image:Adarshcompany,
    link:'https://github.com/KurapatiAdarsh/kurapati-Adarsh/blob/main/Adarshcompany.html',
  },
  {
    title: 'Registration Form',
    description: 'A registration form developed using React.js for the frontend, Node.js and Express.js for the server, and MongoDB for the database.',
    image: Mern,
    link:'https://github.com/KurapatiAdarsh/MernStack',
  },
  {
    title: 'PORTFOLIO',
    description: 'A Portfolio developed using Rect.js.',
    image:portfolio,
    link:'#home',
  },
];

export default function Projects() {
  // Spring animation for cards
 

  // Spring animation for cards
  const [props, set] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(20px)',
    config: { duration: 1500 }, // 1000ms = 1 second

  }));


   // Intersection Observer to trigger the animation
   const { ref, inView } = useInView({
    triggerOnce: true, // Animation only triggers once
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

  // Trigger the animation when in view
  React.useEffect(() => {
    if (inView) {
      set({ opacity: 1, transform: 'translateY(0px)' });
    }
  }, [inView, set]);


  return (
    <>
    <section id='projects'>
    <Box
      ref={ref}
      sx={{
        backgroundColor: '#263238',
        color: 'white',
        py: 5,
        px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 500,
          textAlign: 'center',
          mb: 8,
          mt:3,
          
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
        }}
      >
        My Projects
      </Typography>
<Container>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <animated.div style={props}>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Card
                sx={{
                  backgroundColor: '#37474f',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
         
              >
           

                <CardMedia
                  component="img"
                  image={project.image}
                  
                  alt={project.title}
                  sx={{ height: { xs: 120, sm: 150, md: 120 } }} // Responsive image height
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
              </a>
            </animated.div>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box></section></>
  );
}