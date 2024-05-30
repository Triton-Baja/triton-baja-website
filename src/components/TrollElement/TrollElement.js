import React from 'react';
import '../../App.css';
import { CoolButton } from '../CoolButton/CoolButton';

function TrollElement() {
    return (
        <div className='troll-container'>
            <video src='/videos/video-1.mp4' autoPlay loop />
        </div>
    );
}

export default TrollElement;