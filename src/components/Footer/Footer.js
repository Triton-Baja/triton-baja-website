import React from 'react';
import './Footer.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import UCSD from '../../ucsd-logo.png';
import { CoolButton } from '../CoolButton/CoolButton';
import LinktreeLogo from '../../linktree-logo.svg';
import LinkedInLogo from '../../linkedin-logo.svg';
import InstagramLogo from '../../instagram-logo.svg';
import DiscordLogo from '../../discord-logo.svg';
import EmailLogo from '../../email-logo.svg';


function Footer() {
  return (
    <div className='footer-container'>
      <h1 className='contact-us'>Contact Us</h1>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Want to be involved?
        </p>
        <p className='footer-subscription-text'>
          Sign up for our mailing list!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <CoolButton buttonStyle='btn--outline'>Subscribe</CoolButton>
          </form>
        </div>
      </section>

      <div class='footer-links'>
        <div>
          <Link to='https://www.youtube.com/' target="_blank">
            <img src={EmailLogo} alt="Logo" className='footer-logo' />
          </Link>
          <span>YouTube</span>
        </div>

        <div>
          <Link to='https://www.linkedin.com/company/triton-baja-uc-san-diego/people/' target="_blank">
            <img src={LinkedInLogo} alt="Logo" className='footer-logo' />
          </Link>
          <span>LinkedIn</span>
        </div>

        <div>
          <Link to='https://linktr.ee/tritonbaja' target="_blank">
            <img src={LinktreeLogo} alt="Logo" className='footer-logo' />
          </Link>
          <span>Linktree</span>
        </div>

        <div>
          <Link to='https://www.instagram.com/tritonbaja/' target="_blank">
            <img src={InstagramLogo} alt="Logo" className='footer-logo' />
          </Link>
          <span>Instagram</span>
        </div>

        <div>
          <Link to='https://discord.gg/EJrFZpHCYT' target="_blank">
            <img src={DiscordLogo} alt="Logo" className='footer-logo' />
          </Link>
          <span>Discord</span>
        </div>

      </div>


      <div class='social-media-wrap'>

      </div>

      <small class='website-rights'>
         © <b>Triton Baja</b> at University of California, San Diego 2024 
      </small>
      <div class='footer-logo'>
        <Link to='/'>
          <img src={UCSD} alt="UCSD Logo" className="ucsd-logo" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;