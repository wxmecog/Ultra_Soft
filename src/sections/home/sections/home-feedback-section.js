import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { fDate } from 'src/utils/format-time';

import { _mock } from 'src/_mock';
import { bgBlur, bgGradient, hideScroll } from 'src/theme/css';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export const _testimonials = [
  {
    name: _mock.fullName(1),
    postedDate: _mock.time(1),
    ratingNumber: 5,
    avatarUrl: _mock.image.avatar(1),
    content: `We partnered for our website redesign, and the results were outstanding! The team delivered a visually stunning and highly functional site that has significantly improved our user engagement. Highly recommend their services!`,
  },
  {
    name: _mock.fullName(2),
    postedDate: _mock.time(2),
    ratingNumber: 5,
    content: `The mobile app developed has exceeded our expectations. The user interface is intuitive, and the performance is top-notch. Our users love it, and the feedback has been overwhelmingly positive!`,
  },
  {
    name: _mock.fullName(3),
    postedDate: _mock.time(3),
    ratingNumber: 5,
    content: `Thanks to the robust e-commerce platform provided, our operations have streamlined and sales have boosted. The support throughout the process was exceptional!`,
  },
  {
    name: _mock.fullName(4),
    postedDate: _mock.time(4),
    ratingNumber: 5,
    content: `Our search engine rankings have dramatically improved since we started using their SEO strategies. We've seen a noticeable increase in organic traffic!`,
  },
  {
    name: _mock.fullName(5),
    postedDate: _mock.time(5),
    ratingNumber: 5,
    content: `The comprehensive IT services have transformed our operations. Their expertise in various technologies has helped us implement solutions that enhance efficiency and productivity.`,
  },
  {
    name: _mock.fullName(6),
    postedDate: _mock.time(6),
    ratingNumber: 5,
    content: `Working together has been a game changer for our business. The dedication, expertise, and innovative solutions provided have made a significant impact on our growth. We look forward to continuing this partnership!`,
  },
];


export default function HomeFeedbackSection() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const renderDescription = (
    <Stack
      sx={{
        maxWidth: { md: 360 },
        textAlign: { xs: 'center', md: 'unset' },
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <m.div variants={varFade().inUp}>
        <Typography sx={{ textTransform: "uppercase", fontSize: { md: 62, xs: 50 }, lineHeight: 1.1, fontWeight: 400, fontFamily: 'Whyte Inktrap, sans-serif !important' }}>
          <span style={{ color: '#e84142'}}>Who</span> love <br />
          our <span style={{ color: '#e84142'}}>work</span>
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography
          sx={{ 
            fontSize: 18,
            lineHeight: 1.8,
            fontWeight: 500,
            textAlign: 'left',
            mb: 4,
            fontFamily: 'Whyte Inktrap, sans-serif !important',
            maxWidth: 345,
          }}
        >
          When working together, we attach great importance to a personal touch and close communication with our customers. 
          <br/>Our shared vision for <span style={{ color: '#e84142' }}>Ultra Software Labs</span> is based on trust, expertise and passion
        </Typography>
      </m.div>
    </Stack>
  );

  const renderContent = (
    <Box
      sx={{
        py: { md: 10 },
        height: { md: 1 },
        ...(mdUp && {
          ...hideScroll.y,
        }),
      }}
    >
      <Masonry spacing={3} columns={{ xs: 1, md: 2 }} sx={{ ml: 0 }}>
        {_testimonials.map((testimonial, index) => (
          <m.div key={testimonial.name} variants={varFade().inUp}>
            <TestimonialCard testimonial={testimonial} index={index} />
          </m.div>
        ))}
      </Masonry>
    </Box>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.grey[900], 0.9),
          imgUrl: '/assets/images/about/testimonials.jpg',
        }),
        overflow: 'hidden',
        height: { md: 840 },
        py: { xs: 10, md: 0 },
      }}
    >
      <Container
        component={MotionViewport} 
        sx={{ 
          position: 'relative', 
          height: 1,
          px: `0px !important`
        }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ 
            height: 1,
            mx: { xl: -4, md:4,  xs: 2 }
          }}
        >
          <Grid xs={10} md={4}>
            {renderDescription}
          </Grid>

          <Grid
            xs={12}
            md={7}
            lg={6}
            alignItems="center"
            sx={{
              height: 1,
            }}
          >
            {renderContent}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// ----------------------------------------------------------------------

function TestimonialCard({ testimonial, index, sx, ...other }) {
  const theme = useTheme();

  const { name, ratingNumber, postedDate, content } = testimonial;

  return (
    <Stack
      spacing={3}
      sx={{
        ...bgBlur({
          color: theme.palette.common.white,
          opacity: 0.08,
        }),
        p: 3,
        borderRadius: 2,
        color: 'common.white',
        ...sx,
      }}
      {...other}
    >
      <Iconify icon="mingcute:quote-left-fill" width={40} sx={{ opacity: 0.48 }} />

      <Typography variant="body2">{content}</Typography>

      <Rating value={ratingNumber} readOnly size="small" />

      <Stack direction="row">
        <Avatar alt={name} src={`/clients/${index + 1}.jpg`} sx={{ mr: 2 }} />
        <ListItemText
          primary={name}
          secondary={fDate(postedDate)}
          primaryTypographyProps={{
            typography: 'subtitle2',
            mb: 0.5,
            fontFamily: 'Whyte Inktrap, sans-serif !important',
          }}
          secondaryTypographyProps={{
            typography: 'caption',
            color: 'inherit',
            sx: { opacity: 0.64 },
            fontFamily: 'Whyte Inktrap, sans-serif !important',
          }}
        />
      </Stack>
    </Stack>
  );
}

TestimonialCard.propTypes = {
  sx: PropTypes.object,
  testimonial: PropTypes.object,
  index: PropTypes.number,
};
