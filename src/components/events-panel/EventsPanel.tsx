import React from 'react';
import './EventsPanel.scss';

import { Box, } from '@mui/system';

import { EventsPanelItem, } from './children/EventsPanelItem';



export const EventsPanel = () => {

  return (
    <Box className='events-panel'>
      <EventsPanelItem />
      <EventsPanelItem />
      <EventsPanelItem />
    </Box>
  );
};
