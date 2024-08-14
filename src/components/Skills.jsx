import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, IconButton, Container } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// Sample skill data for each category
const skillsData = {
  frontend: [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'BootStrap', level: 80 },
    { name: 'React', level: 75 },
  ],
  backend: [
    { name: 'Java', level: 80 },
    { name: 'Node.js', level: 70 },
    { name: 'Express.js', level: 65 },
  ],
  database: [
    { name: 'MySQL', level: 60 },
    { name: 'MongoDB', level: 70 },
  ],
};

// Reveal Card Component
const SkillCard = ({ title, skills, color }) => {
  const [expanded, setExpanded] = useState(false);

  // Animation for card height
  const cardAnimationProps = useSpring({
    height: expanded ? '300px' : '150px',
    opacity: expanded ? 1 : 0.8,
    config: { tension: 280, friction: 60 },
  });

  // Animation for sliding content from the left
  const contentAnimationProps = useSpring({
    transform: expanded ? 'translateX(0)' : 'translateX(-100%)',
    opacity: expanded ? 1 : 0,
    config: { tension: 280, friction: 60 },
  });

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <animated.div style={cardAnimationProps}>
        <Card
          sx={{
            background: `linear-gradient(135deg, ${color} 50%, rgba(0, 0, 0, 0.5) 100%)`,
            color: 'white',
            overflow: 'hidden',
            position: 'relative',
            transition: 'transform 0.3s, box-shadow 0.3s',
            boxShadow: 3,
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
            },
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ mb: 2 }}>
              {title}
            </Typography>
            {!expanded && <Typography variant="body2">Click to see details</Typography>}
          </CardContent>
          <IconButton
            onClick={() => setExpanded(!expanded)}
            sx={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              backgroundColor: 'white',
              color: color,
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Card>
      </animated.div>

      {/* Sliding content */}
      <animated.div
        style={{
          ...contentAnimationProps,
          position: 'absolute',
          top: 'calc(20% + 3px)', // Position just below the card with a 3px padding
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: '16px',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <Box sx={{ color: 'white' }}>
          {skills.map((skill) => (
            <Box key={skill.name} sx={{ mb: 2}}>
              <Typography variant="body1">{skill.name}</Typography>
              <Box
                sx={{
                  width: '100%',
                  backgroundColor: '#ccc',
                  borderRadius: 1,
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    height: '10px',
                    width: `${skill.level}%`,
                    backgroundColor: color,
                    transition: 'width 0.6s ease',
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </animated.div>
    </Box>
  );
};

// Main Skills Component
export default function Skills() {
  return (
    <section id='skills'>
      <Box sx={{ px: { xs: 2, sm: 4 }, py: 10, backgroundColor: '#1c313a', color: 'white' }}>
        <Container>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              mb: 7,
              fontWeight: 500,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            Technical Skills
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard title="Frontend Development" skills={skillsData.frontend} color="#29b6f6" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard title="Backend Development" skills={skillsData.backend} color="#4caf50" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <SkillCard title="Databases" skills={skillsData.database} color="#ff9800" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
}
