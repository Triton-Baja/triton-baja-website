import React from 'react';
import '../../App.css';
import './TeamPage.css';

import Aaron from '../../board-pictures/aaron.jpeg';
import Wills from '../../board-pictures/wills.jpeg';
import Daniel from '../../board-pictures/danny.jpeg';
import Lukas from '../../board-pictures/lukas.jpg';
import Luka from '../../board-pictures/luka.jpg';
import Giovanni from '../../board-pictures/giovanni.jpeg';
import Chris from '../../board-pictures/chris.jpeg';
import Allison from '../../board-pictures/allison.jpeg';
import Trevor from '../../board-pictures/Trevor.jpeg';
import Jayden from '../../board-pictures/jayden.jpeg';
import Brian from '../../board-pictures/Brian.jpeg';
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
                    <img class="head-icon" src={Wills} />
                  </div>
                  <h3>Wills Moore</h3>
                  <h6>President/Suspension Lead</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    I’m a mechanical engineering student with enthusiasm for the outdoors, especially the alpine and a fascination with mechanical designs in motorsports.
                  </p>
                  <div class="container social-icons">
                    <br></br>
                    <br></br>

                  </div>
                  <div class="container social-icons">
                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://www.linkedin.com/in/wills-moore', '_blank')}>
                      <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </button>

                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=whmoore@ucsd.edu&su=Subject&body=BodyText', '_blank')}>
                      <i className="fa-solid fa-envelope"></i> Email
                    </button>

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
                  <h6>Technical Lead</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    I’m studying mechanical engineering and like Facebook reels.
                  </p>
                  <div class="container social-icons">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                  </div>
                  <div class="container social-icons">
                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://www.linkedin.com/in/aaron-schueler/', '_blank')}>
                      <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </button>

                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=aschueler@ucsd.edu&su=Subject&body=BodyText', '_blank')}>
                      <i className="fa-solid fa-envelope"></i> Email
                    </button>

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
                    <img class="head-icon" src={Daniel} />
                  </div>
                  <h3>Danny Salter</h3>
                  <h6>Driver Interface/Safety Lead</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    Hey I'm Danny. I'm studying mechanical engineering and love motorsports, FB marketplace, ChatGPT, surfing, and my dog.
                  </p>
                  <div class="container social-icons">
                    <br></br>
                    <br></br>
                    <br></br>

                  </div>
                  <div class="container social-icons">
                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://www.linkedin.com/in/aaron-schueler/', '_blank')}>
                      <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </button>

                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=aschueler@ucsd.edu&su=Subject&body=BodyText', '_blank')}>
                      <i className="fa-solid fa-envelope"></i> Email
                    </button>

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
                    Hi, I’m Lukas! I am a bioengineering: biotechnology major and enjoy music, skiing, and am interested in all things engineering related.
                  </p>
                  <div class="container social-icons">
                    <br></br>
                    <br></br>

                  </div>
                  <div class="container social-icons">
                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://www.linkedin.com/in/aaron-schueler/', '_blank')}>
                      <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </button>

                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=aschueler@ucsd.edu&su=Subject&body=BodyText', '_blank')}>
                      <i className="fa-solid fa-envelope"></i> Email
                    </button>

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
                    <img class="head-icon" src={Giovanni} />
                  </div>
                  <h3>Giovanni Ramirez</h3>
                  <h6>Lead of Electronics and Data Acquisition</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    I’m a mechanical engineering student passionate about robotics and all the fields that encompass it. I do a lot of biking, photography, and 3D Printing in my free time.
                  </p>
                  <div class="container social-icons">
                    <br></br>

                  </div>
                  <div class="container social-icons">
                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://www.linkedin.com/in/giovannibr/', '_blank')}>
                      <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </button>

                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=gbernalramirez@ucsd.edu&su=Subject&body=BodyText', '_blank')}>
                      <i className="fa-solid fa-envelope"></i> Email
                    </button>

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
                  <h6>Manufacturing Co-Lead</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    I’m a mechanical engineering student and I like welding, milling, and fishing.
                  </p>
                  <div class="container social-icons">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                  </div>
                  <div class="container social-icons">
                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://www.linkedin.com/in/luka-zhkenti-40a0502b9/', '_blank')}>
                      <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </button>

                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=lzhkenti@ucsd.edu&su=Subject&body=BodyText', '_blank')}>
                      <i className="fa-solid fa-envelope"></i> Email
                    </button>

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
                    <img class="head-icon" src={Chris} />
                  </div>
                  <h3>Chris Cordano</h3>
                  <h6>Manufacturing Co-Lead</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    Senior mechanical engineering major with a knack for tinkering, specializing in renewable energy and environmental flows. Passionate about innovative design, intentional improvement and engineering a more sustainable future.
                  </p>
                  <div class="container social-icons">
                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://www.linkedin.com/in/chriscordano/', '_blank')}>
                      <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </button>

                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=ccordano@ucsd.edu&su=Subject&body=BodyText', '_blank')}>
                      <i className="fa-solid fa-envelope"></i> Email
                    </button>

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
                    <img class="head-icon" src={Brian} />
                  </div>
                  <h3>Brian Diaz</h3>
                  <h6>Chassis Co-Lead</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    I’m an Aerospace Engineering student with a passion for innovative automotive, aerospace, and tech design. As such, some of my favorite movies are related to these interests in some way, like Ford v Ferrari, Interstellar, and Dune.
                  </p>
                  <div class="container social-icons">
                  </div>
                  <div class="container social-icons">
                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://www.linkedin.com/in/drianbiaz/', '_blank')}>
                      <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </button>

                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=b5diaz@ucsd.edu&su=Subject&body=BodyText', '_blank')}>
                      <i className="fa-solid fa-envelope"></i> Email
                    </button>

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
                    <img class="head-icon" src={Trevor} />
                  </div>
                  <h3>Trevor Marshall</h3>
                  <h6>Chassis Co-Lead</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    I’m a mechanical engineering student with a passion for aerospace design, an avid rock climber, and hold a great appreciation for the great outdoors.
                  </p>
                  <div class="container social-icons">
                    <br></br>


                  </div>
                  <div class="container social-icons">
                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://www.linkedin.com/in/trevor-marshall1/', '_blank')}>
                      <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </button>

                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=tsmarshall@ucsd.edu&su=Subject&body=BodyText', '_blank')}>
                      <i className="fa-solid fa-envelope"></i> Email
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div class="row">
          <div class="pricing-column col-lg-6 col-md-6">
            <div class="flip-container">
              <div class="flip-inner-container">
                <div class="flip-front">
                  <div class="profile-image1">
                    <img class="head-icon" src={Jayden} />
                  </div>
                  <h3>Jayden Yang</h3>
                  <h6>Business Lead</h6>
                </div>
                <div class="flip-back">
                  <h2>About Me</h2>
                  <p>
                    I’m studying business economics and I love Taylor Swift and Fortnight.
                  </p>
                  <div class="container social-icons">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                  </div>
                  <div class="container social-icons">
                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://www.linkedin.com/in/jaydenxyang/', '_blank')}>
                      <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </button>

                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=wey017@ucsd.edu&su=Subject&body=BodyText', '_blank')}>
                      <i className="fa-solid fa-envelope"></i> Email
                    </button>

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
                    I’m a Chemical Engineering student who loves going to concerts and playing Hay Day.
                  </p>
                  <div class="container social-icons">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                  </div>
                  <div class="container social-icons">
                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://www.linkedin.com/in/allisonbchiang/', '_blank')}>
                      <i className="fa-brands fa-linkedin"></i> LinkedIn
                    </button>

                    <button type="button" className="btn btn-outline-dark media-button" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=a4chiang@ucsd.edu&su=Subject&body=BodyText', '_blank')}>
                      <i className="fa-solid fa-envelope"></i> Email
                    </button>

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