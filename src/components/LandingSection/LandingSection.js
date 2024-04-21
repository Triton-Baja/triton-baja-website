import React from 'react';
import '../../App.css';
import './LandingSection.css';
import { CoolButton } from '../CoolButton/CoolButton';

function LandingSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Triton Baja SAE @ UC San Diego</h1>
      <p>Experience the thrill of offroad racing</p>
      <div className='hero-btns'>
        <CoolButton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Possible Button1
        </CoolButton>
        <CoolButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Possible Button2 <i className='far fa-play-circle' />
        </CoolButton>
      </div>
    </div>
  );
}

export default LandingSection;