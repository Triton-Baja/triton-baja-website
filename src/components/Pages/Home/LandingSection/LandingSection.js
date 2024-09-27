import React, { useState, useEffect } from 'react';
import '../../../../App.css';
import './LandingSection.css';
import { CoolButton } from '../../../CoolButton/CoolButton';
import FallingLogo from '../../../../falling-logo.png';
import ClubPic from '../../../../board-pictures/club-pic.jpg'
import carImageTwo from '../../../../car-image-two.png';
import carImageThree from '../../../../car-image-three.png';

function LandingSection() {

  return (
    <div>
      <div className='hero-container'>
        <img src={ClubPic} alt="something" className="board-photo" />
        <img src={FallingLogo} alt="Logo" className='falling-logo' />
        <h1 class="hero-appear hero-shadow">Triton Baja SAE @ UC San Diego</h1>
        <h1 class="hero-appear2">Triton Baja SAE @ UC San Diego</h1>
        <p>In B58 we trust</p>
        <div className='hero-btns'>
          <CoolButton
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={console.log('button clicked foo')}
          >
            Button1
          </CoolButton>
          <a href="#about-baja">

            <CoolButton
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              Button 2
            </CoolButton>
          </a>
        </div>
      </div>

    </div>
  );
}

export default LandingSection;