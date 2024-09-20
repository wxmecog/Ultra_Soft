'use client';

import Box from '@mui/material/Box';

import AboutTeam from '../about-team';
import AboutHeroSection from '../sections/about-hero-section';

// ----------------------------------------------------------------------

export default function AboutView() {
  return (
    <>
      <AboutHeroSection />

      <Box
          sx={{
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: 'background.default',
          }}
        > 
        <AboutTeam />
      </Box>
    </>
  );
}
