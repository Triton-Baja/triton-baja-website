import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../../logo.png';
import './NavBar.css';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { text: 'Home', link: '/' },
        { text: 'Our Design', link: '/design' },
        { text: 'Meet The Team', link: '/team' },
        { text: 'Getting Involved', link: '/involved' },
        { text: 'Sponsorship', link: '/sponsorship' },
    ];


    return (
        <AppBar position="fixed" className={ isScrolled ? "navbar scrolled" : "navbar"}>
            <Toolbar className = { 'navbar' }>
                <img src={Logo} alt="Logo" className='navbar-logo'/> 

                <Typography 
                variant="h6"
                component="div" 
                className = 'navbar-title'
                >
                    Triton Baja
                </Typography>

                {navItems.map((item, index) => (
                    <Button 
                    key={index}
                    component={Link} 
                    to={item.link} 
                    className = 'navbar-link'
                    >
                        {item.text}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;