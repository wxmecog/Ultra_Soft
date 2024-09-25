import { useScroll } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    position: 'fixed',
  },
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
  },
}));

// ----------------------------------------------------------------------

export default function AboutHero() {
  const heroRef = useRef(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  const opacity = 1 - percent / 100;

  const hide = percent > 120;

  return (
    <Stack sx={{ position: 'relative', overflow:'hidden', width: { sm : '98vw', xs: '100vw' }, height: '100vh' }}> 
      <StyledRoot
        ref={heroRef}
        sx={{
          ...(hide && {
            opacity: 0,
          }),
        }}
      >
        <StyledWrapper>
          <Container sx={{ height: 1, px: `0px !important`, zIndex: 5000}}>
            <>
              <Box
                component='img'
                src="https://cdn.prod.website-files.com/632993e1d1acbfa5635afd0b/63f90867efa3cc78033066fb_Group%20427320290.svg"
                sx={{
                  width: '33rem',
                  maxWidth: 'none',
                  height: '33rem',
                  position:'absolute',
                  top: '20%',
                  right: { md: '18%', xs: '35%'},
                  display: { lg: 'block', xs: 'none'}
                }}
              />
              <Box
                component='img'
                src="https://cdn.prod.website-files.com/632993e1d1acbfa5635afd0b/63f8b253f0f51cc5ea3649ef_Frame%20427321323.svg"
                sx={{
                  width: 1,
                  height: 1,
                  position:'absolute',
                  display: { sm: 'block', xs: 'none'}
                }}
              />
              <Box
                component='img'
                src="https://cdn.prod.website-files.com/632993e1d1acbfa5635afd0b/63f8b2e00843821f249201ab_Gradient%20BG.svg"
                sx={{
                  width: '150rem',
                  maxWidth: 'none',
                  height: '90rem',
                  position:'absolute',
                  top: '46%',
                  left: '50%',
                  transform: `translate(-50%, -50%)`,
                }}
              />
            </>
            <Stack
              direction="column"
              alignItems="start"
              justifyContent="center"
              sx={{
                height: 1,
                maxWidth: 480,
                opacity: opacity > 0 ? opacity : 0,
                mt: {
                  sm: 2, xs: 4
                },
                mx: {xl: -4, sm:4,  xs: 2},
                position: 'absolute',
                zIndex: 500,
              }}
              gap={8}
            >
              <Stack sx={{gap: {sm: 4, xs: 2}}}>
                <Stack>
                  <Typography sx={{ textTransform: "uppercase", fontSize: { sm: 88, xs: 50 }, lineHeight: 1.1, fontWeight: 400, fontFamily: 'Whyte Inktrap, sans-serif !important', color: "ultra.main" }}>
                    The Best
                  </Typography>
                  <Stack sx={{ flexDirection: { md: 'column', xs: 'column', spacing: { sm: 4, xs: 0 }}, pl: { md:5, xs: 0 }}}>
                    <Typography sx={{ textTransform: "uppercase", fontSize: { sm: 88, xs: 50 }, lineHeight: 1.1, fontWeight: 400, fontFamily: 'Whyte Inktrap, sans-serif !important'}}>
                      Development
                    </Typography>
                    <Typography sx={{ textTransform: "uppercase", fontSize: { sm: 88, xs: 50 }, lineHeight: 1.1, fontWeight: 400, fontFamily: 'Whyte Inktrap, sans-serif !important',
                    pl: { sm: 2, xs: 0 } }}>
                      Experience
                    </Typography>
                  </Stack>
                </Stack>

                <Typography sx={{ fontSize: 20, fontFamily: 'Inter, sans-serif !important' }}>
                  <span style={{ color: '#e84142', fontSize: '24px' }}>Ultra Software Labs</span> provides a seamless and collaborative development experience, leveraging expertise in web, mobile, and e-commerce solutions to turn your vision into reality.
                </Typography>
              </Stack>
            </Stack>
          </Container>
        </StyledWrapper>
      </StyledRoot>
    </Stack>
  );
}
