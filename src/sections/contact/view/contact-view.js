'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ContactMap from '../contact-map';
import ContactForm from '../contact-form';
import ContactSection from '../contact-section';

// ----------------------------------------------------------------------

export default function ContactView() {
  return (
    <>
      <ContactSection />

      <Container 
        sx={{ 
          py: 10,
          px: `0px !important`
        }}
      >
        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          sx={{
            mx: {xl: -4, md:4,  xs: 2 },
            pb: { xs: 10, md: 15 },
            pt: { xs: 4, md: 6 },
          }}
        >
          <ContactForm />

          <ContactMap />
        </Box>
      </Container>
    </>
  );
}
