import React from 'react';
import html2canvas from 'html2canvas';
import { useRecoilState, useRecoilValue } from 'recoil';
import {imageState} from "../atoms/ImageURL"
import TwitterShare from './TwitterShare';

const ScreenCapture = () => {

  const [inputURL, setImageURL] = useRecoilState(imageState);
  const img = useRecoilValue(imageState);

  const captureFullScreen = () => {
    const wholeDocument = document.documentElement;

    html2canvas(wholeDocument).then((canvas) => {
      const screenshotImage = new Image();
      screenshotImage.src = canvas.toDataURL();
      setImageURL(screenshotImage.src);
      console.log("screenshotImage ", screenshotImage.src);
    });
  };

  return (
    <div>
      <div>
        <button style={{ marginBottom: '10px' }} onClick={captureFullScreen}>
          
          <TwitterShare url={'www.google.com'} text={'My GitHub Wrapped'} image={img} />
        </button>
      </div>
    </div>
  );
};

export default ScreenCapture;
