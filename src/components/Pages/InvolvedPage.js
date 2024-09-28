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
          We welcome people of all levels and disciplines. See our calendar for upcoming events and join the Discord for updates!
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
