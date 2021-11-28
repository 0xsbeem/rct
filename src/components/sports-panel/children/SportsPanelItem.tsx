import React from 'react';
import './SportsPanelItem.scss';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';



export const SportsPanelItem = () => {

  return (
    <div className='sports-panel-item'>
      <Accordion>
        <AccordionSummary
          expandIcon={<Icon>expand_more_icon</Icon>}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
