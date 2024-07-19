import React from 'react';
import './Footer.css';
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

      <div class="row">
        <div class="col-lg-6">
          <div class="row social-container">
            <div class="col-lg-2">
              <Link to='https://www.youtube.com/' target="_blank">
                <i class="fa-solid fa-square-envelope fa-4x" style={{ color: "red" }}></i>
              </Link>
              <span class="social-text">Email</span>
            </div>





            <div class="col-lg-2">
              <Link to='https://www.linkedin.com/company/triton-baja-uc-san-diego/people/' target="_blank">
                <i class="fa-brands fa-linkedin linkedin-blue fa-4x"></i>
              </Link>
              <span class="social-text">LinkedIn</span>
            </div>




            <div class="col-lg-2">
              <Link to='https://www.instagram.com/tritonbaja/' target="_blank">
                <i class="fa-brands fa-instagram insta fa-4x"></i>
              </Link>
              <span class="social-text">Instagram</span>
            </div>




            <div class="col-lg-2">
              <Link to='https://discord.gg/EJrFZpHCYT' target="_blank">
                <i class="fa-brands fa-discord fa-4x"></i>
              </Link>
              <span class="social-text">Discord</span>
            </div>
          </div>
        </div>

        <div class="col-lg-4 social-text">
          Please feel free to contact us! Whether you are an interested student, an organization who would like to support us, or just have anything in general, we'd love to be in touch with you!
        </div>
        


        
      </div>




      <small class='website-rights'>
        © <b>Triton Baja</b> at University of California, San Diego 2024
      </small>

    </div>
  );
}

export default Footer;