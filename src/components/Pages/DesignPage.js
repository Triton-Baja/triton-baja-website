import React from 'react';
import '../../App.css';
import Video from '../../board-pictures/jumpscare.mp4';

function DesignPage() {
  return (
    <>
    <video width="100%" height="100%" loop autoplay="">
    <source src={Video} type="video/mp4" />
</video>
    </>
  );
}

export default DesignPage;