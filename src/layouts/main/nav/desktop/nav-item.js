import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';

import { RouterLink } from 'src/routes/components';


// ----------------------------------------------------------------------

export const NavItem = forwardRef(
  ({ title, path, open, active, hasChild, externalLink, subItem, ...other }, ref) => {
    const renderContent = (
      <StyledNavItem
        disableRipple
        disableTouchRipple
        ref={ref}
        open={open}
        active={active}
        subItem={subItem}
        {...other}
      >
        {title}
      </StyledNavItem>
    );

    // if (hasChild) {
    //   return renderContent;
    // }

    // if (externalLink) {
    //   return (
    //     <Link href={path} target="_blank" rel="noopener" color="inherit" underline="none">
    //       {renderContent}
    //     </Link>
    //   );
    // }

    return (
      <Link component={RouterLink} href={path} color="inherit" underline="none">
        {renderContent}
      </Link>
    );
  }
);

NavItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  open: PropTypes.bool,
  active: PropTypes.bool,
  subItem: PropTypes.bool,
  hasChild: PropTypes.bool,
  externalLink: PropTypes.bool,
};

// ----------------------------------------------------------------------

const StyledNavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'subItem',
})(({ open, active, subItem, theme }) => {
  const opened = open && !active;

  const dotStyles = {
    width: 6,
    height: 6,
    left: -12,
    opacity: 0.64,
    content: '""',
    borderRadius: '50%',
    position: 'absolute',
    backgroundColor: 'currentColor',
    ...(active && {
      color: theme.palette.ultra.main,
    }),
  };

  return {
    // Root item
    ...(!subItem && {
      ...theme.typography.body2,
      padding: 0,
      textTransform: 'uppercase',
      height: '100%',
      fontSize: 14,
      fontWeight: theme.typography.fontWeightMedium,
      transition: theme.transitions.create(['all'], {
        duration: theme.transitions.duration.shorter,
      }),
      '&:hover': {
        opacity: 0.64,
        backgroundColor: 'transparent',
        '&:before': {
          ...dotStyles,
        },
      },
      ...(active && {
        color: theme.palette.ultra.main,
        fontWeight: theme.typography.fontWeightSemiBold,
        '&:before': {
          ...dotStyles,
        },
      }),
      ...(opened && {
        opacity: 0.64,
        '&:before': {
          ...dotStyles,
        },
      }),
    }),

    // Sub item
    ...(subItem && {
      ...theme.typography.body2,
      padding: 0,
      fontSize: 13,
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightMedium,
      transition: theme.transitions.create(['all'], {
        duration: theme.transitions.duration.shorter,
      }),
      '&:hover': {
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
        '&:before': {
          ...dotStyles,
        },
      },
      ...(active && {
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightSemiBold,
        '&:before': {
          ...dotStyles,
        },
      }),
    }),
  };
});
