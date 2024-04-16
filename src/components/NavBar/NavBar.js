import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navItems = [
        { text: 'Home', link: '/' },
        { text: 'Our Design', link: '/design' },
        { text: 'Meet The Team', link: '/team' },
        { text: 'Getting Involved', link: '/involved' },
        { text: 'Sponsorship', link: '/sponsorship' },
    ];

    return (
        <AppBar position="static">
            <Toolbar sx={{backgroundColor: '#04142D'}}>
                <Typography 
                variant="h6"
                component="div" 
                sx={{color: '#FEBA01', fontFamily: 'Poppins,Arial,Helvetica,sans-serif', fontWeight: 400, flexGrow: 1}}>
                    Triton Baja
                </Typography>
                {navItems.map((item, index) => (
                    <Button 
                    key={index}
                    component={Link} 
                    to={item.link} 
                    sx={{ color: '#FEBA01', fontFamily: 'Poppins, sans-serif', fontWeight: 400 }}>
                        {item.text}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;