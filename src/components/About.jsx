import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { paperflying, personimage } from '../assets/images'; // Import necessary images

export default function About() {
  const [activeSection, setActiveSection] = useState('');

  const handleButtonClick = (section) => {
    setActiveSection(section === activeSection ? '' : section);
  };

  const getImageForSection = (section) => {
    switch (section) {
      case 'education':
        return personimage;
      case 'interests':
        return personimage; // Replace with the correct image for interests
      default:
        return null;
    }
  };

  return (
    <>
    <section id='about' >
    <Box
      sx={{
        backgroundColor: '#1c313a',
        minHeight: {lg:'75vh',md:'44vh'},
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        color: 'white',
        textAlign: 'center',
        p: { xs: 2, sm: 3, md: 4 }, // Responsive padding for different screen sizes
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 500,
          mt: { xs: 2, sm: 3, md: 3 },
          fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
        }}
      >
        About Me
      </Typography>

      <Box
        sx={{
          width: '100%',
          minHeight: '20vh',
          backgroundSize: 'cover',
          backgroundColor: '#1c313a',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          px: { xs: 2, sm: 3, md: 4 },
          mt: { xs: 2, sm: 3, md: 5 }, // Margin at the top to separate from the header
        }}
      >
        <Box
          sx={{
            position: 'relative',
            backgroundColor: 'black',
            padding: { xs: 2, sm: 3, md: 4 },
            borderRadius: 2,
            width: '100%',
            maxWidth: { xs: '95%', md: '80%' },
            borderTopLeftRadius: 60,
            borderBottomRightRadius: 60,
            overflow: 'visible', // Ensure content doesn't overflow
          }}
        >
          {/* Conditional rendering of the video as background */}
          {activeSection === 'certificates' && (
            <Box
              component="video"
              src={paperflying}
              autoPlay
              loop
              muted
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.2, // Adjust opacity to your preference
                zIndex: 1,
                borderTopLeftRadius: 60,
                borderBottomRightRadius: 60,
              }}
            />
          )}

          {/* Conditional rendering of the image */}
          {activeSection && activeSection !== 'certificates' && (
            <Box
              component="img"
              src={personimage}
              alt="Decorative"
              sx={{
                position: 'absolute',
                left: {md:'92%',xs:'96%'},
                transform: 'translateX(-50%)',
                width: { xs: 100, sm: 150, md: 250 }, // Responsive width
                height: { xs: 100, sm: 150, md: 250 }, // Responsive height
                transition: 'bottom 0.6s ease, opacity 0.6s ease',
                bottom:'-20px',
                overflow:'visible',
                opacity: 1,
                zIndex: 1,
              }}
            />
          )}

          {/* Content of the black box (will appear above the video or image) */}
          <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography variant="h6" paragraph>
              I am a dedicated civil engineering student at Kommuri Pratap Reddy Institute of Technology, passionate about the transition from academia to the IT industry. With hands-on projects and a solid academic foundation, I am keen to explore opportunities in web development,Java developer,Full stack java ,Mern stack, data analysis, and beyond.
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleButtonClick('education')}
                sx={{ mr: 2, mb: { xs: 1, sm: 2 } }} // Responsive margin
              >
                Education
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleButtonClick('certificates')}
                sx={{ mr: 2, mb: { xs: 1, sm: 2 } }} // Responsive margin
              >
                Certificates
              </Button>
              <Button
                variant="contained"
                color="info"
                onClick={() => handleButtonClick('interests')}
                sx={{ mr: 2, mb: { xs: 1, sm: 2 } }} // Responsive margin

              >
                Interests
              </Button>
            </Box>

            {activeSection === 'education' && (
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h6"
                  style={{
                    borderBottom: '3px solid #2196f3',
                    display: 'inline-block',
                  }}
                >
                  Education
                </Typography>
                <Typography pt={2}>
                  - Bachelor of Civil Engineering, Kommuri Pratap Reddy Institute of Technology, 2023
                </Typography>
                <Typography>
                  - Diploma in Civil Engineering, SRRS Government Polytechnic College, 2020
                </Typography>
                <Typography>
                  - Schooling in Z.P.H.S Gangaram, 2017
                </Typography>
              </Box>
            )}

            {activeSection === 'certificates' && (
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h6"
                  style={{
                    borderBottom: '3px solid #9c27b0',
                    display: 'inline-block',
                  }}
                >
                  Certificates
                </Typography>
                <Typography
                  pt={2}
                 
                >
                  - Completed Full Stack Java Certification Course in Inspanner Academy
                </Typography>
                <Typography>
                  - Certified as an intern from skillDzire in full stack java
                </Typography>
                <Typography>
                  - Certified as an intern from CipherByte Technologies in Java Programming
                </Typography>
                <Typography>
                  - Secured a Letter Of Recommendation from CipherByte Technologies
                </Typography>
                <Typography>
                  - Secured a Participated certificate from Internship Studio in Common Internship Test
                </Typography>
                <Typography>
                  - Secured a Certificate to successfully completion of test as a Full Stack Developer from Synergy Works
                </Typography>
              </Box>
            )}

            {activeSection === 'interests' && (
              <Box sx={{ mt: 2 }}>
                <Typography
                  variant="h6"
                  style={{
                    borderBottom: '3px solid #2196f3',
                    display: 'inline-block',
                  }}
                >
                  Interests
                </Typography>
                <Typography pt={2}>- Playing Chess</Typography>
                <Typography>- Reading Books</Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box></section></>
  );
}
