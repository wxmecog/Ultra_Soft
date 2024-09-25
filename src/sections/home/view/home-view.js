'use client';

import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import MainLayout from 'src/layouts/main';

import ScrollProgress from 'src/components/scroll-progress';

import Particle from '../sections/particle';
import HomeHeroSection from '../sections/home-hero-section';
import HomeWeDoSection from '../sections/home-we-do-section';
import HomeFeedbackSection from '../sections/home-feedback-section';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Stack sx={{ position: 'relative' }}>
        <Particle />
      </Stack>
      <MainLayout>
        <ScrollProgress scrollYProgress={scrollYProgress} />
        <Stack>
          <HomeHeroSection />

          <Box
            sx={{
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: 'background.default',
            }}
          > 
            <HomeWeDoSection />

            {/* <HomeShowSection /> */}

            <HomeFeedbackSection />
          </Box>
        </Stack>
      </MainLayout>
    </>
  );
}
