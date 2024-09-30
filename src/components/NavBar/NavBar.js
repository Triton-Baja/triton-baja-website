import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../logo.png';
import './NavBar.css';
import { Spin as Hamburger } from 'hamburger-react'


const NavBar = () => {
    const [color, setColor] = useState(false);
    const [isToggled, setIsToggled] = useState(false);

    const changeColor = () => {
        const header = document.querySelector('.header');
        if (window.scrollY >= 26) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    return (
        <div className={`header ${color ? 'scrolled' : ''}`}>
            <nav className={`navbar ${color ? 'scrolled' : ''}`}>
                <img src={Logo} alt="Logo" className='logo' />

                <Typography
                    variant="h6"
                    component="div"
                    className={`navbar-title ${color ? 'scrolled' : ''}`}
                >

                </Typography>

                <Button
                    component={Link}
                    to="/triton-baja-website"
                    className={`navbar-link ${color ? 'scrolled' : ''}`}
                >
                    Home
                </Button>
                {/*<Button
                    component={Link}
                    to="/triton-baja-website/design"
                    className={`navbar-link ${color ? 'scrolled' : ''}`}
                >
                    Our Design
                </Button>*/}
                <Button
                    component={Link}
                    to="/triton-baja-website/team"
                    className={`navbar-link ${color ? 'scrolled' : ''}`}
                >
                    Meet The Team
                </Button>
                <Button
                    component={Link}
                    to="/triton-baja-website/get-involved"
                    className={`navbar-link ${color ? 'scrolled' : ''}`}
                >
                    Getting Involved
                </Button>
                <Button
                    component={Link}
                    to="/triton-baja-website/sponsorship"
                    className={`navbar-link ${color ? 'scrolled' : ''}`}
                >
                    Sponsorship

                </Button>
                <div className="hamburger">
                    <Hamburger
                        rounded
                        direction="left"
                        toggled={isToggled}
                        toggle={setIsToggled}
                    />
                </div>
                <div className={`nav-slide ${isToggled ? 'show' : ''}`}>
                    <ul>
                        <li><Link to="/triton-baja-website">Home</Link></li>
                        <li><Link to="/triton-baja-website/team">Meet the Team</Link></li>
                        <li><Link to="/triton-baja-website/get-involved">Get Involved</Link></li>
                        <li><Link to="/triton-baja-website/sponsorship">Sponsorship</Link></li>
                    </ul>
                </div>


            </nav>
        </div>
    );
};

export default NavBar;
