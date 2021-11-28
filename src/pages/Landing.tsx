import React, { useEffect, useRef } from 'react';
import './Landing.scss'; 
import '../styles/text-hover-split.scss'
import '../styles/scanline-overlay.scss'
import '../styles/snow.scss'
import { initializeHoverEffect } from '../styles/text-hover-split'

import { Paper, Typography } from '@mui/material';
import bg from '../../public/city.png';

export const Landing = () => {

  const menuList = useRef(null)
  const menuListItem = useRef(null)

  // Javascript for menu hover animation on load
  useEffect(() => {
    initializeHoverEffect(menuList, menuListItem)
  },[])

  const renderSnow = () => {
    const numberOfSnowflakes = 200
    let rows = [];
    for (let i = 0; i < numberOfSnowflakes; i++) {
        rows.push(<div className="snow"></div>);
    }
    return (
      <div className="snowflakes">
        {rows}
      </div>
    )
  }

  const renderMenu = () => {
    // Glitchy text - maybe use somewhere else?
    /*
    <div className="container">
      <div className="glitch" data-text="Welcome">Welcome</div>
      <p className="subtitle">Enjoy Your Stay</p>
    </div>
    */
    return (
      <div className="Menu">
        <ul ref={menuList} className="Menu-list" data-offset="10">
        <li ref={menuListItem} className="Menu-list-item" data-offset="20">
            Home
            <span className="Mask"><span>Enter</span></span>
            <span className="Mask"><span>Enter</span></span>
          </li>
          <li ref={menuListItem} className="Menu-list-item-small" data-offset="20">
            Home
            <span className="Mask"><span>Docs</span></span>
            <span className="Mask"><span>Docs</span></span>
          </li>
          <li ref={menuListItem} className="Menu-list-item-small" data-offset="20">
            Home
            <span className="Mask"><span>Discord</span></span>
            <span className="Mask"><span>Discord</span></span>
          </li>
          <li ref={menuListItem} className="Menu-list-item-small" data-offset="20">
            Home
            <span className="Mask"><span>Twitter</span></span>
            <span className="Mask"><span>Twitter</span></span>
          </li>
          <li ref={menuListItem} className="Menu-list-item-small" data-offset="20">
            Home
            <span className="Mask"><span>Github</span></span>
            <span className="Mask"><span>Github</span></span>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div className='landing'>
        <div className="scanlines"></div>
        {renderSnow()}
      <Paper className='landing paper'>
        {renderMenu()}
      </Paper>
      <img className='landing bg' src={bg}/>
      <div className='landing bg glow'/>
    </div>
  );
};
