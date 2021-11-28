import React from 'react';
import './SportsPanel.scss';

import { Box, } from '@mui/system';

import { SportsPanelItem, } from './children/SportsPanelItem';



export const SportsPanel = () => {

  return (
    <Box className='sports-panel'>
      <SportsPanelItem />
      <SportsPanelItem />
      <SportsPanelItem />
    </Box>
  );
};
