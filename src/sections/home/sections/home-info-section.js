
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

export default function HomeInfoSection() {
  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
        height: { sm: '90vh', xs: '100vh' },
        px: `0px !important`,
      }}
    > 
      <Stack 
        sx={{ 
          position: 'relative', 
          height: '90vh',
          mx: {xl: -4, md:4,  xs: 2},
        }}>
        <Box
          sx={{
            transformStyle: 'preserve-3d',
            backgroundImage: 'radial-gradient(circle closest-side, #b328584d, #b3285800)',
            width: 460,
            height: 460,
            overflow: 'hidden',
            transform: 'rotate(12deg) scale3d(3, 1.5, 1)',
            position: 'absolute',
            top: { md: '12%', xs: '5%' },
            left: { md: '29%', xs: '10%' },
          }}
        />
        <Box
          component='img'
          src='https://cdn.prod.website-files.com/632993e1d1acbfa5635afd0b/635bc3aae4f407fa13c31514_subnets-bg.svg'
          sx={{
            top: '35%',
            left: '28%',
            width: '450px',
            maxWidth: 'none',
            height: '450px',
            position:'absolute',
            transform: `translate(-50%, -50%)`,
            display: { md: 'block', xs: 'none'}       
          }}
        />

        <Stack sx={{ position: 'absolute', flexDirection: 'column', gap: 2, px: { md: 16, xs: 0 }, pt: { md: 12, xs: 0 } }}>
          <Stack>
            <Typography sx={{ textTransform: "uppercase", fontSize: { md: 88, xs: 50 }, lineHeight: 1.1, fontWeight: 400, fontFamily: 'Whyte Inktrap, sans-serif !important' }}>
              Build <span style={{ color: '#e84142'}}>IT</span> 
            </Typography>
            <Typography sx={{ textTransform: "uppercase", fontSize: { md: 88, xs: 50 }, lineHeight: 1.1, fontWeight: 400, fontFamily: 'Whyte Inktrap, sans-serif !important', pl: { md: 4, xs:0 }}}>
              <span style={{ color: '#e84142'}}>Your</span> way
            </Typography>
          </Stack>
          <Grid container sx={{ml: { md: -16, xs: 0}}}>
            <Grid xs={12} md={6} />
            <Grid xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: 2}}>
              <Typography
                sx={{
                  fontSize: '28px',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                <span style={{ color: '#e84142'}}>We</span> have the advanced tooling you need to accelerate from idea to launch.
              </Typography>
              <Typography
                sx={{ fontSize: 20, fontFamily: 'Inter, sans-serif !important' }}
              >
                Our flexible approach combines cutting-edge technology with tailored strategies, ensuring that you have the freedom to build and innovate on your terms.
              </Typography>
            </Grid>
        </Grid>
        </Stack>
      </Stack>
    </Container>
  );
}
