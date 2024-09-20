import { Marker } from 'react-map-gl';
import { keyframes } from '@emotion/react';

import Iconify from 'src/components/iconify';
// ----------------------------------------------------------------------

const SIZE = 32;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-2.5px);
  }
`;

// ----------------------------------------------------------------------

export default function MapMarker({ ...other }) {
  return (
    <Marker {...other}>
      <Iconify 
        icon="carbon:location-filled"
        sx={{
          cursor: 'pointer',
          animation: `${bounce} 2s infinite`,
          transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
          height: SIZE,
          width: SIZE,
          color: 'ultra.main'
        }}
      />
    </Marker>
  );
}
