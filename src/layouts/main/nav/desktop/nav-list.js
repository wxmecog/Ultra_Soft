import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import ListSubheader from '@mui/material/ListSubheader';

import { usePathname } from 'src/routes/hooks';
import { useActiveLink } from 'src/routes/hooks/use-active-link';

import { NavItem } from './nav-item';

// ----------------------------------------------------------------------

export default function NavList({ data }) {
  const pathname = usePathname();

  const active = useActiveLink(data.path, !!data.children);

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = useCallback(() => {
    if (data.children) {
      setOpenMenu(true);
    }
  }, [data.children]);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  return (
    <NavItem
      open={openMenu}
      onMouseEnter={handleOpenMenu}
      onMouseLeave={handleCloseMenu}
      //
      title={data.title}
      path={data.path}
      //
      hasChild={!!data.children}
      externalLink={data.path.includes('http')}
      //
      active={active}
    />
  );
}

NavList.propTypes = {
  data: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.array,
  }),
};

// ----------------------------------------------------------------------

function NavSubList({ data, subheader, sx, ...other }) {
  const pathname = usePathname();

  const dashboard = subheader === 'Dashboard';

  return (
    <Stack
      spacing={2}
      flexGrow={1}
      alignItems="flex-start"
      sx={{
        pb: 2,
        ...(dashboard && {
          pb: 0,
          maxWidth: { md: 1 / 3, lg: 540 },
        }),
        ...sx,
      }}
      {...other}
    >
      <ListSubheader
        disableSticky
        sx={{
          p: 0,
          typography: 'overline',
          fontSize: 11,
          color: 'text.primary',
        }}
      >
        {subheader}
      </ListSubheader>
      
      {data.map((item) =>
        <NavItem
          key={item.title}
          title={item.title}
          path={item.path}
          active={pathname === item.path || pathname === `${item.path}/`}
          subItem
        />
      )}
    </Stack>
  );
}

NavSubList.propTypes = {
  data: PropTypes.array,
  subheader: PropTypes.string,
  sx: PropTypes.object,
};
