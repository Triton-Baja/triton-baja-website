import React from 'react';
import '../../App.css';
import Footer from '../Footer/Footer';
import LandingSection from '../LandingSection/LandingSection';
import LandingWelcome from '../LandingWelcome/LandingWelcome';

function Home() {
  return (
    <>
        <LandingSection />
        <LandingWelcome />
    </>
  );
}

export default Home;