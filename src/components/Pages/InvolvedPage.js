import React from 'react';
import '../../App.css';
import Tabling from '../../board-pictures/tabling.jpg';

function InvolvedPage() {
  return (
    <section>
      <img class='board-photo' src={Tabling} />
      <div class='spacer'>
        <h1 class="hero-appear hero-shadow">Getting Involved</h1>
        <h1 class="hero-appear2">Getting Involved</h1>
      </div>

      <div class='spacer2'>
        <h1>
          Come Join Us!
        </h1>
        <h2 class="officer-subtext">
          We welcome people of all levels and disciplines. For Fall 2024, we will be meeting Tuesdays @ 6-8 PM & Sunday @ 10-3 PM. See our calendar for upcoming events and tune into the Discord for updates! Our available teams include Powertrain, Driver Interface, Manufacturing, Chassis, Business, Media, and Electronics. If you're interested, please fill out the Triton Baja Membership Form!
        </h2>

        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSXb2SXF58CGnjg9oxezp2oyVMlmq4OrjVBv8DGo_BIRBsCv009H9IrHY4fYtBXQLUusDOX00gBb-Zr/pubhtml?widget=true&amp;headers=false"
          width="100%"
          height="600"
          frameborder="0"
        ></iframe>
      </div>


      
    </section>

  );
}

export default InvolvedPage;
