'use client';

import Box from '@mui/material/Box';

import AboutTeam from '../about-team';
import AboutHero from '../about-hero';

// ----------------------------------------------------------------------

export default function AboutView() {
  return (
    <>
      <AboutHero />

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
