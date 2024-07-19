import React from 'react';
import '../../App.css';
import './TeamPage.css';

import Aaron from '../../board-pictures/aaron.jpeg';
import Wills from '../../board-pictures/wills.jpeg';
import Daniel from '../../board-pictures/danny.jpeg';
import Lukas from '../../board-pictures/lukas.jpg';
import Luka from '../../board-pictures/luka.jpg';
import Allison from '../../board-pictures/allison.jpg';
import Board from '../../board-pictures/group.jpg';

function TeamPage() {
  return (
    <section>
      <img class='board-photo' src={Board} />

      <div class='spacer'>
        <h1 class="hero-appear hero-shadow">Meet the Team</h1>
        <h1 class="hero-appear2">Meet the Team</h1>
      </div>
      <div class='spacer2'>
        <h1>
          Officers
        </h1>
        <h2 class="officer-subtext">
          Our Proud Representatives of Triton Baja
        </h2>


        <div class="row">
        <div class="pricing-column col-lg-4 col-md-6">
            <div class="flip-container">
              <div class="flip-inner-container">
                <div class="flip-front">
                  <div class="profile-image1">
                    <img class="head-icon" src={Daniel} />
                  </div>
                  <h3>Daniel Salter</h3>
                  <h6>Driver Interface/Safety Lead</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    Hi I'm this person and I am a something year something engineering major. In my free time I like to this this and that.
                  </p>
                  <div class="container social-icons">

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-linkedin"></i> LinkedIn</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-instagram"></i> Instagram</button>

                  </div>
                  <div class="container social-icons">
                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-solid fa-envelope"></i> Email</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-discord"></i> Discord</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pricing-column col-lg-4 col-md-6">
            <div class="flip-container">
              <div class="flip-inner-container">
                <div class="flip-front">
                  <div class="profile-image1">
                    <img class="head-icon" src={Wills} />
                  </div>
                  <h3>Wills Moore</h3>
                  <h6>President, Suspension Lead</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    Hi I'm this person and I am a something year something engineering major. In my free time I like to this this and that.
                  </p>
                  <div class="container social-icons">

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-linkedin"></i> LinkedIn</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-instagram"></i> Instagram</button>

                  </div>
                  <div class="container social-icons">
                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-solid fa-envelope"></i> Email</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-discord"></i> Discord</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pricing-column col-lg-4 col-md-6">
            <div class="flip-container">
              <div class="flip-inner-container">
                <div class="flip-front">
                  <div class="profile-image1">
                    <img class="head-icon" src={Aaron} />
                  </div>
                  <h3>Aaron Schueler</h3>
                  <h6>Technical Director</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    Hi I'm this person and I am a something year something engineering major. In my free time I like to this this and that.
                  </p>
                  <div class="container social-icons">

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-linkedin"></i> LinkedIn</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-instagram"></i> Instagram</button>

                  </div>
                  <div class="container social-icons">
                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-solid fa-envelope"></i> Email</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-discord"></i> Discord</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">

          <div class="pricing-column col-lg-4 col-md-6">
            <div class="flip-container">
              <div class="flip-inner-container">
                <div class="flip-front">
                  <div class="profile-image1">
                    <img class="head-icon" src={Lukas} />
                  </div>
                  <h3>Lukas Graner</h3>
                  <h6>Powertrain Lead</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    Hi I'm this person and I am a something year something engineering major. In my free time I like to this this and that.
                  </p>
                  <div class="container social-icons">

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-linkedin"></i> LinkedIn</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-instagram"></i> Instagram</button>

                  </div>
                  <div class="container social-icons">
                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-solid fa-envelope"></i> Email</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-discord"></i> Discord</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pricing-column col-lg-4 col-md-6">
            <div class="flip-container">
              <div class="flip-inner-container">
                <div class="flip-front">
                  <div class="profile-image1">
                    <img class="head-icon" src={Board} />
                  </div>
                  <h3>Someone</h3>
                  <h6>Something</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    Hi I'm this person and I am a something year something engineering major. In my free time I like to this this and that.
                  </p>
                  <div class="container social-icons">

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-linkedin"></i> LinkedIn</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-instagram"></i> Instagram</button>

                  </div>
                  <div class="container social-icons">
                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-solid fa-envelope"></i> Email</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-discord"></i> Discord</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pricing-column col-lg-4 col-md-6">
            <div class="flip-container">
              <div class="flip-inner-container">
                <div class="flip-front">
                  <div class="profile-image1">
                    <img class="head-icon" src={Luka} />
                  </div>
                  <h3>Luka Zhkenti</h3>
                  <h6>Manufacturing Lead</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    Hi I'm this person and I am a something year something engineering major. In my free time I like to this this and that.
                  </p>
                  <div class="container social-icons">

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-linkedin"></i> LinkedIn</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-instagram"></i> Instagram</button>

                  </div>
                  <div class="container social-icons">
                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-solid fa-envelope"></i> Email</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-discord"></i> Discord</button>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>





        <div class="row">
          <div class="pricing-column col-lg-4 col-md-6">
            <div class="flip-container">
              <div class="flip-inner-container">
                <div class="flip-front">
                  <div class="profile-image1">
                    <img class="head-icon" src={Board} />
                  </div>
                  <h3>Jayden Yang</h3>
                  <h6>Business Lead</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    Hi I'm this person and I am a something year something engineering major. In my free time I like to this this and that.
                  </p>
                  <div class="container social-icons">

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-linkedin"></i> LinkedIn</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-instagram"></i> Instagram</button>

                  </div>
                  <div class="container social-icons">
                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-solid fa-envelope"></i> Email</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-discord"></i> Discord</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pricing-column col-lg-4 col-md-6">
            <div class="flip-container">
              <div class="flip-inner-container">
                <div class="flip-front">
                  <div class="profile-image1">
                    <img class="head-icon" src={Allison} />
                  </div>
                  <h3>Allison Chiang</h3>
                  <h6>Logistics Director</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    Hi I'm this person and I am a something year something engineering major. In my free time I like to this this and that.
                  </p>
                  <div class="container social-icons">

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-linkedin"></i> LinkedIn</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-instagram"></i> Instagram</button>

                  </div>
                  <div class="container social-icons">
                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-solid fa-envelope"></i> Email</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-discord"></i> Discord</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pricing-column col-lg-4 col-md-6">
            <div class="flip-container">
              <div class="flip-inner-container">
                <div class="flip-front">
                  <div class="profile-image1">
                    <img class="head-icon" src={Board} />
                  </div>
                  <h3>Someone</h3>
                  <h6>Something</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    Hi I'm this person and I am a something year something engineering major. In my free time I like to this this and that.
                  </p>
                  <div class="container social-icons">

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-linkedin"></i> LinkedIn</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-instagram"></i> Instagram</button>

                  </div>
                  <div class="container social-icons">
                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-solid fa-envelope"></i> Email</button>

                    <button type="button" name="button" class="btn btn-outline-dark media-button">
                      <i class="fa-brands fa-discord"></i> Discord</button>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

    </section>
  );
}

export default TeamPage;