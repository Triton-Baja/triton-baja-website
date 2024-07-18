import React, { useState, useEffect } from 'react';
import '../../../../App.css';
import './LandingSection.css';
import { CoolButton } from '../../../CoolButton/CoolButton';
import FallingLogo from '../../../../falling-logo.png';

function LandingSection() {

  return (
    <div className='hero-container' style={{
      backgroundImage: "url('Website/videos/club-pic.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      perspective: '1px',
      transformStyle: 'preserve-3d',
      backgroundPosition: 'center -300px',
      zIndex: '-1'
  }}>
      <img src={FallingLogo} alt="Logo" className='falling-logo' />
      <h1 class="hero-appear hero-shadow">Triton Baja SAE @ UC San Diego</h1>
      <h1 class="hero-appear2">Triton Baja SAE @ UC San Diego</h1>
      <p>In B58 we trust</p>
      <div className='hero-btns'>
        <CoolButton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          buttonLink="/trollpage"
        >
          About Us
        </CoolButton>
        <CoolButton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Button 2
        </CoolButton>
      </div>
    </div>
  );
}

export default LandingSection;