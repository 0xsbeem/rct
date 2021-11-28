import React from 'react';
import './TopBar.scss';

import { Box, } from '@mui/system';



export const TopBar = () => {

  return (
    <Box className='top-bar'>
      <span className='top-bar logo'>Logo</span>
      <span className='top-bar nav-items'>Navigation Items</span>
    </Box>
  );
};
