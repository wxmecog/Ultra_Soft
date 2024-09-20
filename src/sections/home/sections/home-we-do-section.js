import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const CardList = [
  {
    icon: 'icon-park-outline:computer',
    title: 'Website Development',
    description: 'Our experienced team of web developers, designers work together to create stunning, functional, and user-friendly websites that captivate your audience.',
  },
  {
    icon: 'ri:android-line',
    title: 'App Development',
    description:
      'We are passionate about crafting exceptional mobile applications that elevate your business to new heights.',
  },
  {
    icon: 'mdi:cart-outline',
    title: 'e-Commerce',
    description: `We specialize in creating powerful and seamless e-commerce solutions that empower businesses to thrive in the online marketplace.`,
  },
  {
    icon: 'lucide:database',
    title: 'Database',
    description: `Our team of skilled database developers designs and builds robust and scalable database solutions tailored to your specific requirements.`,
  },
  {
    icon: 'tabler:world-search',
    title: 'SEO & CONTENT WRITING',
    description: `We offer comprehensive SEO and content writing services to help your business establish a strong online presence, increase visibility, and drive organic traffic.`,
  },
  {
    icon: 'ion:diamond-outline',
    title: 'DIGITAL MARKETING',
    description: `We specialize in driving digital success for businesses through strategic and result-oriented digital marketing solutions.`,
  },
];


// ----------------------------------------------------------------------

export default function HomeWeDoSection() {
  const theme = useTheme();

  return (
    <Container
      sx={{
        pt: { xs: 14, md: 18 },
        pb: { xs: 8, md: 16 },
        px: `0px !important`,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'left',
          mx: {xl: -4, md:4,  xs: 2},
        }}
      >
        <Typography 
          sx={{ 
            textTransform: "uppercase", 
            fontSize: { md: 62, xs: 50 }, 
            lineHeight: 1.1, 
            fontWeight: 400, 
            fontFamily: 'Whyte Inktrap, sans-serif !important' }}>
          What we <span style={{ color: '#e84142'}}>do</span> 
        </Typography>
        <Box
          gap={{ xs: 3, lg: 3 }}
          columnGap={{ xs: 3, lg: 3 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
        >
          {CardList.map((card) => (
            <Card
              key={card.title}
              sx={{
                boxShadow: { md: 12 },
                minHeight: 355,
                border: 1.5,
                borderColor: 'background.card',
                '&:hover': {
                  borderColor: 'ultra.main',
                  '& .effect': {
                    width: 345,
                    height: 345,
                    borderTopLeftRadius: 500,
                  },
                },
                bgcolor: alpha(theme.palette.grey[500], 0.04),
                transition: 'all 0.15s ease',
                position: 'relative',
              }}
            >
              <Stack 
                sx={{
                  py: 4,
                  px: 3,
                  position: 'absolute',
                  zIndex: 500,
                }}
              >
                <Typography
                  sx={{ 
                    fontSize: { md: 24, xs: 23 },
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    textAlign: 'start',
                    mb: 2,
                  }}
                >
                  {card.title}
                </Typography>

                <Typography
                  sx={{ 
                    fontSize: 18,
                    lineHeight: 1.8,
                    fontWeight: 500,
                    textAlign: 'left',
                    mb: 4,
                  }}
                >
                  {card?.description}
                </Typography>

                <Typography
                  sx={{ 
                    fontSize: 18,
                    lineHeight: 1.8,
                    fontWeight: 500,
                    textAlign: 'left',
                    color: 'ultra.main',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    '&:hover': {
                      color: 'ultra.dark',
                    },
                    transition: 'all 0.1s ease',
                  }}
                >
                  Contact Us
                </Typography>
              </Stack>

              <Box
                className='effect'
                sx={{
                  position: 'absolute',
                  width: 100,
                  height: 100,
                  bgcolor: alpha(theme.palette.grey[500], 0.04),
                  bottom: 0,
                  right: 0,
                  borderTopLeftRadius: 40,
                  overflow: 'hidden',
                  transition: 'all 0.15s ease',
                }}
              />
            
              <Box
                sx={{ 
                  position: 'absolute',
                  bottom: 16,
                  right: 20,
                }}
              >
                <Iconify icon={card?.icon} width={48} color="ultra.main" />
              </Box>
            </Card>
          ))}
        </Box>
      </Stack>
    </Container>
  );
}
