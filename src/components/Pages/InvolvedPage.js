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
          We welcome people of all levels and disciplines. WORK IN PROG
        </h2>

      </div>
    </section>


  );
}

export default InvolvedPage;