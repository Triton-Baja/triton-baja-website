import React from 'react';
import '../../App.css';
import Fortin from '../../sponsor-logos/fortin-logo.png';
import Ansys from '../../sponsor-logos/ansys-logo.png';
import Idea from '../../sponsor-logos/idea-logo.png';
import Jsoe from '../../sponsor-logos/ucsd-jsoe-logo.png';
import UCSDMechE from '../../sponsor-logos/ucsd-meche-logo.png';
import GroupPic from '../../board-pictures/group-pic.jpg';



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
          Thank you for your support!
        </h2>

        <div class="container">
          <div class="row sponsor-row">
            <div class="col-lg-4 sponsor-row">
              <img class='sponsor-logo' src={Fortin} />
            </div>
            <div class="col-lg-4">
              <img class='sponsor-logo' src={Fortin} />
            </div>
            <div class="col-lg-4">
              <img class='sponsor-logo' src={Fortin} />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <img class='sponsor-logo' src={Fortin} />
            </div>
            <div class="col-lg-4">
              <img class='sponsor-logo' src={Fortin} />
            </div>
            <div class="col-lg-4">
              <img class='sponsor-logo' src={Fortin} />
            </div>
          </div>

        </div>

      
      </div>

      <div class="spacer3">

        
      </div>
    </section>
  );
}

export default SponsorshipPage;