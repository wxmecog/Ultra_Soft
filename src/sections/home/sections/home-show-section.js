import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function HomeShowSection() {
  const renderDescription = (
    <Stack
      spacing={3}
      sx={{
        maxWidth: 520,
        mx: { xl: -4, md:4,  xs: 2 },
        zIndex: { md: 99 },
        position: { md: 'absolute' },
        textAlign: { xs: 'left', md: 'left' },
      }}
    >
      <Typography sx={{ textTransform: "uppercase", fontSize: { md: 62, xs: 50 }, lineHeight: 1.1, fontWeight: 400, fontFamily: 'Whyte Inktrap, sans-serif !important' }}>
        Our <span style={{ color: '#e84142'}}>Showcase</span> 
      </Typography>
    </Stack>
  );

  const renderContent = (
    <m.div variants={varFade().inUp}>
      <Box sx={{ position: 'relative' }}>
        {[...Array(10)].map((_, index) => (
          <Box
            key={index}
            component={m.div}
            variants={varFade().inUp}
            sx={{
              top: 0,
              left: 0,
              position: 'absolute',
              ...(index === 0 && { zIndex: 8 }),
              ...(index === 9 && { position: 'relative', zIndex: 9 }),
            }}
          >
            <Image
              disabledEffect
              alt={`clean-${index + 1}`}
              src={`/assets/images/home/clean/page_${index + 1}.webp`}
            />
          </Box>
        ))}
      </Box>
    </m.div>
  );

  return (
    <Box
      sx={{
        pt: { xs: 10, md: 20 },
        pb: { xs: 10, md: 15 },
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <Container
        sx={{ 
          px: `0px !important`,
        }}
        component={MotionViewport}
      >
        {renderDescription}

        {renderContent}
      </Container>
      <Box
        component='img'
        src="https://cdn.prod.website-files.com/632993e1d1acbfa5635afd0b/63f8b2e00843821f249201ab_Gradient%20BG.svg"
        sx={{
          width: '120rem',
          maxWidth: 'none',
          height: '90rem',
          position:'absolute',
          top: '55%',
          left: '55%',
          transform: `translate(-50%, -50%)`,
        }}
      />
    </Box>
  );
}
