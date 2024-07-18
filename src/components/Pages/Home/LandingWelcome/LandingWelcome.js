import React from 'react';
import '../../../../App.css';
import './LandingWelcome.css';
import carImage from '../../../../car-image.webp';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bootContainer from 'react-bootstrap/Container';

function LandingWelcome() {
    return (
        
        <section className='landing-container'>
            <div className='landing-subscription-heading'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h1 class="beige-text title-text">What is Triton Baja?</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 landing-padding'>
                    Triton Baja is an engineering club at the University of California, San Diego focused on building 
                    a robust offroad vehicle to withstand the various challenges presented by offroad racing. 
                    We are a team of passionate students who are driven by our love for engineering and the thrill of racing. 
                    Our goal is to compete and proudly represent UCSD at Baja 
                    SAE racing competitions across the country. 
                    </div>

                    <div className='col-lg-6 landing-padding'>
                        <a href="team" className="redirect">
                            <img class="landing-box" src={carImage} alt="baja car"/>
                        </a>
                    </div>

                </div>
            </div>
        </section>

        

    );
}

export default LandingWelcome;