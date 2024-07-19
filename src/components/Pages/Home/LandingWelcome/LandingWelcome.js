import React from 'react';
import '../../../../App.css';
import './LandingWelcome.css';
import carImage from '../../../../car-image.webp';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bootContainer from 'react-bootstrap/Container';

function LandingWelcome() {
    return (

        <section>
            <div className='landing-subscription-heading landing-subscription-heading-2 landing-container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className="row">
                            <div class="col-lg-12 image-container">
                                <img class="img" src={carImage} />
                            </div>
                        </div>

                    </div>

                    <div className='col-lg-6'>
                        <div className="row">
                            <div class="col-lg-12">
                                <h1 class="navy-text title-text">What is Baja SAE?</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div className='col-lg-12 navy-text landing-padding'>
                                Baja SAE challenges engineering students to design and build an off-road vehicle that will survive the severe punishment of rough terrain and in some competitions, water. As in real work situations, these future engineers work together as a team to discover and resolve technical challenges in design, test, and manufacturing, as well as business issues. The most rugged of all the competitions, Baja SAE also gives students the first-hand challenge of pursuing their passion while managing real-life demands and priorities. Each team's goal is to design and build a prototype of an all-weather, rugged, single-seat, off-road recreational vehicle intended for sale to the nonprofessional weekend off-road enthusiast.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='landing-subscription-heading landing-container'>

                <div className='row'>
                    <div className='col-lg-6'>
                        <div className="row">
                            <div class="col-lg-12">
                                <h1 class="beige-text title-text">We are Triton Baja.</h1>
                            </div>
                        </div>
                        <div class="row">
                            <div className='col-lg-12 landing-padding'>
                                Triton Baja is an engineering club at the University of California, San Diego focused on building
                                a robust offroad vehicle to withstand the various challenges presented by offroad racing.
                                We are a team of passionate students who are driven by our love for engineering and the thrill of racing.
                                Our goal is to compete and proudly represent UCSD at Baja
                                SAE racing competitions across the country.
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className="row">
                            <div class="col-lg-12 image-container">
                                <img class="img" src={carImage} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>




        </section>



    );
}

export default LandingWelcome;