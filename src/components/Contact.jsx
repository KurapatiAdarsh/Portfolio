import React from 'react';
import { TextField, Button, Box, Typography, Grid, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CallMadeIcon from '@mui/icons-material/CallMade';

function ContactForm() {
  return (
    <section id="contact">
      <Box sx={{ px: { xs: 2, sm: 4 }, py: 10, backgroundColor: '#263238' }}>
        <Typography variant="h4" align="center" gutterBottom style={{ color: 'white', mt: 5,fontWeight:500 }}>
          Contact Me
        </Typography>

        <Paper
          elevation={3}
          sx={{
            maxWidth: 500,
            margin: 'auto',
            padding: 4,
            borderRadius: 3,
            backgroundColor: '#1c313a',
            mt: 7,
          }}
        >
          <Typography variant="h6" align="center" gutterBottom style={{ color: 'white' }}>
            Get In Touch
          </Typography>
          <Box
            component="form"
            action="https://formspree.io/f/xvgprwoq"  // Replace with your Formspree form ID
            method="POST"
            noValidate
            autoComplete="off"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  variant="outlined"
                  required
                  sx={{ borderRadius: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                  type="email"
                  required
                  sx={{ borderRadius: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                  sx={{ borderRadius: 2 }}
                />
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ borderRadius: 2 }}
                >
                  Send Message
                </Button>
              </Grid>
              {/* Adding Email and Contact Number Below Send Button */}
              <Grid item xs={12} textAlign="center" mt={2}>
                <Typography variant="body1" style={{ color: 'white' }}>
                  <a href="mailto:adharshkurapati22@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
                    <SendIcon style={{ fontSize: 10, marginRight: 3, color: 'black' }} />
                    adharshkurapati22@gmail.com
                  </a>
                </Typography>
              </Grid>
              <Grid item xs={12} textAlign="center">
                <Typography variant="body1" style={{ color: 'white' }}>
                  <a href="tel:+8801000186" style={{ color: 'white', textDecoration: 'none' }}>
                    <CallMadeIcon style={{ fontSize: 10, marginRight: 3, color: 'black' }} />
                    +8801000186
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </section>
  );
}

export default ContactForm;
