import { m } from 'framer-motion';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function ContactForm() {
  return (
    <Stack component={MotionViewport} spacing={5}>
      <m.div variants={varFade().inUp}>
        <Typography
          sx={{
            fontSize: 28,
            fontWeight: 500,
            lineHeight: 1.2,
            fontFamily: 'Inter, sans-serif'
          }}
        >
          Contact Us
        </Typography>
      </m.div>

      <Stack spacing={3}>
        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Name" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Email" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Subject" />
        </m.div>

        <m.div variants={varFade().inUp}>
          <TextField fullWidth label="Enter your message here." multiline rows={4} />
        </m.div>
      </Stack>

      <m.div variants={varFade().inUp}>
        <Button size="large" variant="contained" color="ultra" sx={{ borderRadius: 5 }}>
          Submit Now
        </Button>
      </m.div>
    </Stack>
  );
}
