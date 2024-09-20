import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/system/Unstable_Grid/Grid';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function ServiceSection() {
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
                  color: 'ultra.main' 
                }}>
                Empowering Innovation 
              </Typography>
            </m.div>

            <m.div variants={varFade().in}>
              <Typography 
                sx={{ 
                  textTransform: "uppercase", 
                  fontSize: { md: 62, xs: 50 }, 
                  lineHeight: 1.1, 
                  fontWeight: 400, 
                  fontFamily: 'Whyte Inktrap, sans-serif !important',
                  // color: 'ultra.main' 
                }}>
                Through Code 
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
                {`With our team of talented developers, designers, and tech enthusiasts, we craft cutting-edge software that fuels innovation and drives business success. Whether you're a startup seeking to disrupt the industry or an established enterprise aiming to stay ahead of the curve, we're here to unleash the power of code and deliver unparalleled solutions tailored to your unique needs. Join us on this transformative journey as we build the future together, one line of code at a time.`}
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
              src="/assets/services/services.svg"
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
