import React from 'react';
import '../../App.css';
import './LandingWelcome.css';
import { CoolButton } from '../CoolButton/CoolButton';
import carImage from '../../car-image.webp';

function LandingWelcome() {
    return (
        <div className='landing-container'>
            <section className='landing-subscription-heading'>
                <h1>What is Triton Baja?</h1>
                <p>
                    Triton Baja is an engineering club at the University of California, San Diego focused on building 
                    a robust offroad vehicle to withstand the various challenges presented by offroad racing. 
                    We are a team of passionate students who are driven by our love for engineering and the thrill of racing. 
                    Our goal is to compete and proudly represent UCSD at Baja 
SAE racing competitions across the country. 

                </p>
            </section>
            <section className='landing-group'>
                <div className="landing-box">
                    <a href="team" className="redirect">
                        <img src={carImage} alt="baja car" />
                        Learn more about Triton Baja
                    </a>
                </div>
                <div className="landing-box">
                    <a href="design" className="redirect">
                        <img src={carImage} alt="baja car" />
                        Check out our designs
                    </a>
                </div>
                <div className="landing-box">
                    <a href="involved" className="redirect">
                        <img src={carImage} alt="baja car" />
                        Become a team member!
                    </a>
                </div>
            </section>
        </div>

    );
}

export default LandingWelcome;