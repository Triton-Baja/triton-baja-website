import React from 'react';
import '../../App.css';
import './SponsorshipPage.css';
import Fortin from '../../sponsor-logos/fortin-logo.png';
import Ansys from '../../sponsor-logos/ansys-logo.png';
import Idea from '../../sponsor-logos/idea-logo.png';
import Jsoe from '../../sponsor-logos/ucsd-jsoe-logo.png';
import UCSDMechE from '../../sponsor-logos/ucsd-meche-logo.png';
import Haas from '../../sponsor-logos/haas.png';
import GroupPic from '../../board-pictures/group-pic.jpg';
import Packet from '../../sponsor-logos/triton-baja-uc-san-diego-sponsorship-packet.pdf';



function SponsorshipPage() {
  return (
    <section>
      <img class='board-photo' src={GroupPic} />
      <div class='spacer'>
        <h1 class="hero-appear hero-shadow">Sponsors & Partners</h1>
        <h1 class="hero-appear2">Sponsors & Partners</h1>
      </div>

      <div class='spacer2'>
        <h1>
          Sponsors & Partners
        </h1>
        <h2 class="officer-subtext">
          Thank you to our current sponsors!
        </h2>

        <div class="container">
          <div class="row sponsor-row">
            <div class="col-lg-4 sponsor-row">
              <img class='sponsor-logo' src={Fortin} />
            </div>
            <div class="col-lg-4">
              <img class='sponsor-logo' src={Ansys} />
            </div>
            <div class="col-lg-4">
              <img class='sponsor-logo' src={Idea} />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <img class='sponsor-logo' src={Jsoe} />
            </div>
            <div class="col-lg-4">
              <img class='sponsor-logo' src={UCSDMechE} />
            </div>
            <div class="col-lg-4">
              <img class='sponsor-logo-narrow' src={Haas} />
            </div>
          </div>

        </div>


      </div>


      <div className='landing-subscription-heading landing-subscription-heading-2 landing-container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className="row">
              <div class="col-lg-12">
                <h1 class="navy-text title-text" style={{ marginTop: "2rem" }}>Interested in supporting our work?</h1>
              </div>
            </div>

          </div>
          <div class="col-lg-6">
            <embed src={Packet} width="550" height="735" />

          </div>
          <div className='col-lg-6'>
            <div className="row">
              <div class="col-lg-12">
                <h1 class="navy-text title-text subtext">We need your help!</h1>
              </div>
            </div>
            <div class="row">
              <div className='col-lg-12 navy-text landing-padding'>
              We are looking for sponsors to join us in our quest to design and build a vehicle that can withstand the toughest conditions and compete in annual Baja SAE competitions.
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className='col-lg-12 navy-text landing-padding'>
              We are looking for sponsors to join us in our quest to design and build a vehicle that can withstand the toughest conditions and compete in annual Baja SAE competitions.
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className='col-lg-12 navy-text landing-padding'>
              We are looking for sponsors to join us in our quest to design and build a vehicle that can withstand the toughest conditions and compete in annual Baja SAE competitions.

              Please contact us TURNTHISTEXTINTOHYPERLINKTHATSCROLLSDOWNTOBOTTOM at baja@ucsd.edu for any inquiries or at any other platforms below!
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default SponsorshipPage;