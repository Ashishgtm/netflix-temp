import React from 'react'
import './Header.css';
import Button from '@mui/material/Button';

import logo  from './netflix1.png';

export const Header = () => {
  return (
    <header>
      <img className='logoheader' src={logo} alt='Logo' />
<div className='buttonclass'>
<Button
      variant="contained"
      href="#contained-buttons"
      sx={{
        backgroundColor: 'rgba(255, 0, 0, 0.781)',
        '&:hover': {
          backgroundColor: 'rgba(139, 0, 0, 0.781)',
        },
      }}
    >
      Sign In
    </Button> </div> </header> 
  )
}
