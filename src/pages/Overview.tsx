import React from 'react';
import './Overview.scss';

import { Paper } from '@mui/material';

import { TopBar, } from '../components/TopBar';
import { BetBar, } from '../components/BetBar';
import { SportsPanel, } from '../components/sports-panel/SportsPanel';
import { EventsPanel, } from '../components/events-panel/EventsPanel';
import { BetSlipPanel, } from '../components/bet-slip-panel/BetSlipPanel';



export const Overview = () => {

  return (
    <Paper className='overview'>
      <TopBar />
      <BetBar />
      <Paper elevation={10} className='overview main-display-panel'>
        <SportsPanel />
        <EventsPanel />
        <BetSlipPanel />
      </Paper>
    </Paper>
  );
};
