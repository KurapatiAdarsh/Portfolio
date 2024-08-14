import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          py: 6,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'black' ? theme.palette.grey[200] : theme.palette.grey[800],
        }}
      >
        {/* Social Media Icons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2, // space between icons
           
          }}
        >
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/kurapati-adarsh-56b087220/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'black',backgroundColor:'white'}}
        
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com/alwaysadarrrsh"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'black',backgroundColor:'white' }}
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.facebook.com/adarsh.kurapati.5"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'black',backgroundColor:'white' }}
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/KurapatiAdarsh"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: 'black',backgroundColor:'white' }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Box>

{/* Navigation Links */}
<Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 3, // space between links
            mt: 2, // margin-top
          }}
        >
          <Typography
            component="a"
            href="#home"
            sx={{ color: 'white', textDecoration: 'none', fontSize: 16 }}
          >
            Home
          </Typography>
          <Typography
            component="a"
            href="#about"
            sx={{ color: 'white', textDecoration: 'none', fontSize: 16 }}
          >
            About
          </Typography>
          <Typography
            component="a"
            href="#projects"
            sx={{ color: 'white', textDecoration: 'none', fontSize: 16 }}
          >
            Projects
          </Typography>
          <Typography
            component="a"
            href="#skills"
            sx={{ color: 'white', textDecoration: 'none', fontSize: 16 }}
          >
            Skills
          </Typography>
          <Typography
            component="a"
            href="#contact"
            sx={{ color: 'white', textDecoration: 'none', fontSize: 16 }}
          >
            Contact
          </Typography>
        </Box>



      </Box>

      <Box
        component="footer"
        style={{
          width: '100%',
          height: '5vh',
          backgroundColor: 'black',
          textAlign: 'center',
          alignContent: 'center',
          fontSize: 13,
          
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body2" align="center"  color="white">
            © {new Date().getFullYear()} Kurapati Adarsh. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
