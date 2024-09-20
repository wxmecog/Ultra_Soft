import Map from 'react-map-gl';
import { useState } from 'react';

import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';

import { MAPBOX_API } from 'src/config-global';

import Iconify from 'src/components/iconify';
import { MapPopup, MapMarker, MapControl } from 'src/components/map';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  zIndex: 0,
  height: 560,
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  '& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right': {
    display: 'none',
  },
}));

// ----------------------------------------------------------------------

export default function ContactMap() {
  const theme = useTheme();

  const contact = {
    latlng: [52.3731, 5.1975],
    address: 'Almere, NL / 1325',
    phoneNumber: '+31 6 2553 5544',
  };

  const lightMode = theme.palette.mode === 'light';

  const [popupInfo, setPopupInfo] = useState(null);

  return (
    <StyledRoot>
      <Map
        initialViewState={{
          latitude: 52.3731,
          longitude: 5.1975,
          zoom: 12,
        }}
        mapStyle={`mapbox://styles/mapbox/${lightMode ? 'light' : 'dark'}-v10`}
        mapboxAccessToken={MAPBOX_API}
      >
        <MapControl hideGeolocateControl />

          <MapMarker
            latitude={52.3731}
            longitude={5.1975}
            onClick={(event) => {
              event.originalEvent.stopPropagation();
              setPopupInfo(contact);
            }}
          />
        {popupInfo && (
          <MapPopup
            longitude={popupInfo.latlng[1]}
            latitude={popupInfo.latlng[0]}
            onClose={() => setPopupInfo(null)}
            sx={{
              '& .mapboxgl-popup-content': { bgcolor: theme.palette.background.paper },
              '&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip': {
                borderTopColor: theme.palette.background.paper,
              },
              '&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip': {
                borderBottomColor: theme.palette.background.paper,
              },
            }}
          >
            <Typography variant="subtitle2" sx={{ mb: 0.5, pl: 0.5, pb: 0.5 }}>
              Address
            </Typography>

            <Typography component="div" variant="caption">
              <Iconify icon="mdi:location" width={14} sx={{ mr: 0.5 }} />
              {popupInfo.address}
            </Typography>

            <Typography
              component="div"
              variant="caption"
              sx={{ mt: 1, display: 'flex', alignItems: 'center' }}
            >
              <Iconify icon="solar:phone-bold" width={14} sx={{ mr: 0.5 }} />
              {popupInfo.phoneNumber}
            </Typography>
          </MapPopup>
        )}
      </Map>
    </StyledRoot>
  );
}
