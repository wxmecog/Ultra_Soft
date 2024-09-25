import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

import { useActiveLink } from 'src/routes/hooks/use-active-link';

import { useOffSetTop } from 'src/hooks/use-off-set-top';

import { bgBlur } from 'src/theme/css';

import Logo from 'src/components/logo';

import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import HeaderShadow from '../common/header-shadow';

// ----------------------------------------------------------------------

const NavItems = ({list}) => {
  const active = useActiveLink(list.path, false);
  return (
    <Stack key={list?.title}>
      <Typography 
        variant='subtitle2' 
        sx={{ 
          textTransform: 'uppercase', 
          color: active ? 'ultra.main': 'inherit',
          '&:hover': {
            opacity: 0.8,
            cursor: 'pointer',
          }
        }}
      >
        {list?.title}
      </Typography>
    </Stack>
  )
}

NavItems.propTypes = {
  list: PropTypes.object,
};

export default function Header() {
  const theme = useTheme();

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          backdropFilter: `blur(6px)`,
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
          backgroundColor: 'transparent'
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center', px: `0px !important` }} maxWidth="lg" >
          <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'space-between', width: 1, mx: {xl: -4, md:4,  xs: 2}}}>
            <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: '4px'}}>
              <Logo />
              <Typography sx={{ whiteSpace: 'nowrap', fontSize: { md: 22, xs: 22 }}} >Ultra Software Labs</Typography>
            </Stack>

            <Box sx={{ flexGrow: 1 }} />

            <NavDesktop data={navConfig} />
            <NavMobile data={navConfig} />
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
