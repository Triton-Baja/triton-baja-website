import React from 'react';
import '../../App.css';
import './LandingSection.css';
import { CoolButton } from '../CoolButton/CoolButton';

function LandingSection() {
  return (
    <div className='hero-container' style={{
      backgroundImage: "url('/Website/videos/club-pic.jpg')",
      backgroundSize: 'cover'
      }}>
      <h1>Triton Baja SAE @ UC San Diego</h1>
      <p>something something offroad racing something</p>
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
          buttonStyle='btn--outline'
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