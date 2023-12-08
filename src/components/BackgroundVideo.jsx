import React from 'react';
import '../App.css';
import gifImage from '../assets/Wrapped-Video-unscreen.gif';

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <img src={gifImage} alt="Background GIF" className="video" />
    </div>
  );
};

export default BackgroundVideo;
