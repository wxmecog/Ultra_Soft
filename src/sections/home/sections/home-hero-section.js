import { useScroll } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useRouter } from 'src/routes/hooks';

import { bgBlur } from 'src/theme/css';

import Iconify from 'src/components/iconify';


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

const StyledPolygon = styled('div')(({ opacity = 1, anchor = 'left', theme }) => ({
  ...bgBlur({
    opacity,
    color: theme.palette.background.default,
  }),
  zIndex: 9,
  bottom: 0,
  height: 80,
  width: '50%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  ...(anchor === 'left' && {
    left: 0,
    ...(theme.direction === 'rtl' && {
      transform: 'scale(-1, 1)',
    }),
  }),
  ...(anchor === 'right' && {
    right: 0,
    transform: 'scaleX(-1)',
    ...(theme.direction === 'rtl' && {
      transform: 'scaleX(1)',
    }),
  }),
}));

// ----------------------------------------------------------------------

export default function HomeHeroSection() {
  const router = useRouter();

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

  const handleNavigate = () => {
    router.push('contact-us')
  };

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  const opacity = 1 - percent / 100;

  const hide = percent > 120;

  const renderPolygons = (
    <Stack sx={{ display: { md: 'block', xs: 'none' }}}>
      <StyledPolygon />
      <StyledPolygon anchor="right" opacity={0.48} />
      <StyledPolygon anchor="right" opacity={0.48} sx={{ height: 48, zIndex: 10 }} />
      <StyledPolygon anchor="right" sx={{ zIndex: 11, height: 24 }} />
    </Stack>
  );

  return (
    <Stack 
      sx={{ 
        position: 'relative', 
        overflow:'hidden', 
        width: { sm : '98vw', xs: '100vw' }, 
        height: '100vh',
      }}
      >
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
                src="https://cdn.prod.website-files.com/632993e1d1acbfa5635afd0b/63f8b6198ce2f670225d0b91_Group%20427320220%20(1).svg"
                sx={{
                  width: '67.125rem',
                  maxWidth: 'none',
                  height: '68.8125rem',
                  position:'absolute',
                  inset: { sm: `-56% auto auto -13%`, xs: '-10% auto auto -125%'}
                }}
              />
              <Box
                component='img'
                src="https://cdn.prod.website-files.com/632993e1d1acbfa5635afd0b/63f8ba3bb3a8107232586a58_Group%20427320221.svg"
                sx={{
                  width: '57.9375rem',
                  maxWidth: 'none',
                  height: '59.375rem',
                  position:'absolute',
                  top: '28rem',
                  left: '78rem',
                  display: { sm: 'block', xs: 'none'}
                }}
              />
              <Box
                component='img'
                src="https://cdn.prod.website-files.com/632993e1d1acbfa5635afd0b/635bc3a90bd72c2dc597a367_build-bg.svg"
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
                  <Typography sx={{ textTransform: "uppercase", fontSize: { sm: 88, xs: 50 }, lineHeight: 1.1, fontWeight: 400, fontFamily: 'Whyte Inktrap, sans-serif !important' }}>
                    Create
                  </Typography>
                  <Stack sx={{ flexDirection: { md: 'row', xs: 'column', spacing: { sm: 4, xs: 0 }}}} pl={5}>
                    <Typography sx={{ textTransform: "uppercase", fontSize: { sm: 88, xs: 50 }, lineHeight: 1.1, fontWeight: 400, fontFamily: 'Whyte Inktrap, sans-serif !important'}}>
                      Without
                    </Typography>
                    <Typography sx={{ textTransform: "uppercase", color: "ultra.main", fontSize: { sm: 88, xs: 50 }, lineHeight: 1.1, fontWeight: 400, fontFamily: 'Whyte Inktrap, sans-serif !important',
                    pl: { sm: 2, xs: 0 } }}>
                      limits
                    </Typography>
                  </Stack>
                </Stack>

                <Typography sx={{ fontSize: 20, fontFamily: 'Inter, sans-serif !important' }}>
                  <span style={{ color: '#e84142', fontSize: '24px' }}>Ultra Software Labs</span> is a leading software, website, mobile, e-commerce, and database development company. With a passion for innovation and a commitment to delivering top-notch solutions, we empower organizations to thrive in the digital landscape.
                </Typography>
              </Stack>

              <Button
                color="ultra"
                size="large"
                variant="contained"
                endIcon={<Iconify icon="mingcute:arrow-right-line" width={24} />}
                target="_blank"
                rel="noopener"
                href=""
                sx={{ borderRadius:5, height: 58, px:2.5, fontSize: '18px', width: { sm: 'auto', xs: 1} }}
                onClick={() => handleNavigate()}
              >
                Get Started
              </Button>
            </Stack>
          </Container>
        </StyledWrapper>
      </StyledRoot>
      {renderPolygons}
    </Stack>
  );
}
