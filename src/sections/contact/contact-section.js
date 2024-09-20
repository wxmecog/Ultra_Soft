import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/system/Unstable_Grid/Grid';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function ContactSection() {
  return (
    <Container 
      component={MotionViewport} 
      sx={{ 
        textAlign: 'left', 
        pt: { xs: 10, md: 15 },
        px: `0px !important`,
      }}
    > 
      <Grid 
        container
        sx={{ 
          mx: {xl: -4, md:4,  xs: 2 },
          alignItems: 'center'
        }}
      > 
        <Grid 
          xs={12} 
          md={8}
        >
          <Stack
            sx={{
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <m.div variants={varFade().in}>
              <Typography 
                sx={{ 
                  textTransform: "uppercase", 
                  fontSize: { md: 62, xs: 50 }, 
                  lineHeight: 1.1, 
                  fontWeight: 400, 
                  fontFamily: 'Whyte Inktrap, sans-serif !important',
                }}
              >
                Get In Touch With <span style={{ color: '#e84142'}}>Us</span>  
              </Typography>
            </m.div>

            <m.div variants={varFade().in}>
              <Typography
                sx={{
                  maxWidth: 640,
                  color: 'text.primary',
                  mt: 3,
                  fontSize: 18,
                }}
              >
                We’d love to chat with you to see if we are good fit to run your social media, to bring you customers and to help build your brand.
              </Typography>
            </m.div>

            <m.div variants={varFade().in}>
              <Typography
                sx={{
                  maxWidth: 640,
                  color: 'text.primary',
                  mt: 1,
                  fontSize: 18,
                }}
              >
                Please call us or complete this short form and we promise a response by email within one business day. Feel free to leave your phone number if you’d like to us to call rather than reply by email. And of course your information is for our eyes only. We will never give away or sell your information to any third parties for any reason. Never ever.
              </Typography>
            </m.div>
          </Stack>
        </Grid>
        <Grid 
          xs={12} 
          md={4}
        >
          <m.div variants={varFade().in}>
            <Box
              component='img'
              src="/assets/services/email.svg"
              sx={{
                width: 400, 
                height: 400,
              }}
            />
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );
}
