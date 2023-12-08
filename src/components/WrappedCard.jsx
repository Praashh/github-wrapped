import * as React from 'react';
import { inputState } from '../atoms/Input';
import { useRecoilValue } from 'recoil';
import '../pages/Wrapped.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import TwitterShare from './TwitterShare';
import LinkedInShare from './LinkedInShare';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedIcon from '@mui/icons-material/LinkedIn';
import PieChart from './PieChart';

export default function WrappedCard() {
 
  const inputText =  useRecoilValue(inputState);


  return (
    <>
      <div className='share-wrapper'>
        <button><TwitterShare/><TwitterIcon/></button>
        <button><LinkedInShare/><LinkedIcon/></button>
        
      </div>
      <div className='wrapper'>
      <div className='card-wrapped'>
      <AwesomeSlider>
      <div className='div1'>
          <h2>Hy {inputText}, Here is Your <span style={{fontWeight:'900', color:'rgb(35 177 62)'}}>GitHub 2023 Wrapped</span></h2>
          <span style={{color:'rgb(75, 207, 167)', fontWeight:'900', fontSize:'1.5rem'}}>Your Contributions Stats</span>
      </div>
      <div className='div1'>
          <h2>Hy {inputText}, Here is Your <span style={{fontWeight:'900', color:'rgb(35 177 62)'}}>GitHub 2023 Wrapped</span></h2>
          <span style={{color:'rgb(75, 207, 167)', fontWeight:'900', fontSize:'1.5rem'}}>Your Most Used Language in 2023</span>
          <PieChart/>
      </div>

      <div>I am fine</div>
      <div>OK</div>
    </AwesomeSlider>
    </div>
    </div>
  </>
  );
}