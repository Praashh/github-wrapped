import * as React from 'react';
import githubContribution from "../assets/github-contribution.png"
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

export default function WrappedCard({contributions, commits, issues, PRs, stars}) {
 
  const inputText =  useRecoilValue(inputState);


  return (
    <>
      <div className='share-wrapper'>
        <button><TwitterShare url={'https://github-wrapped.tech/'} text={"GitHub Wrapped 2023"}/><TwitterIcon/></button>
        <button><LinkedInShare url={'https://github-wrapped.tech/'} text={"GitHub Wrapped 2023"}/><LinkedIcon/></button>
        
      </div>
      <div className='wrapper'>
      <div className='card-wrapped'>
      <AwesomeSlider>
      <div className='div1'>
          <h2>Hy {inputText}, Here is Your <span style={{fontWeight:'900', color:'rgb(35 177 62)'}}>GitHub 2023 Wrapped</span></h2>
          <span style={{color:'rgb(75, 207, 167)', fontWeight:'900', fontSize:'1.5rem'}}>Your Contributions Stats</span>
          <div className='contribution-icon-wrapper'><img src={githubContribution} width={260} height={200}/></div>
          <div className='content-wrapper'>
              <div>
                <span style={{color:'rgb(35 177 62)', fontWeight:'900', fontSize:'1.5rem'}}>{contributions}</span>
                <p style={{fontWeight:'800'}}>Total Contributions</p>
              </div>
              <div>
                <span style={{color:'#FF9800', fontWeight:'900', fontSize:'1.5rem'}}>{commits}</span>
                <p style={{fontWeight:'800'}}>Total Commits</p>
              </div>
              <div>
                <span style={{color:'#00BCD4', fontWeight:'900', fontSize:'1.5rem'}}>{PRs}</span>
                <p style={{fontWeight:'800'}}>Total PRs</p>
              </div>
              <div>
                <span style={{color:'#FF9800', fontWeight:'1000', fontSize:'1.5rem'}}>{issues}</span>
                <p style={{fontWeight:'800'}}>Total Issues</p>
              </div>
              <div>
                <span style={{color:'yellow', fontWeight:'900', fontSize:'1.5rem'}}>{stars}</span>
                <p style={{fontWeight:'800'}}>Total Stars</p>
              </div>
          </div>
      </div>
      <div className='div1'>
          <h2>Hy {inputText}, Here is Your <span style={{fontWeight:'900', color:'rgb(35 177 62)'}}>GitHub 2023 Wrapped</span></h2>
          <span style={{color:'rgb(75, 207, 167)', fontWeight:'900', fontSize:'1.5rem'}}>Your Most Used Language in 2023</span>
          <PieChart/>
      </div>
      <div className='div1'>
      <h2>Hy {inputText}, Here is Your <span style={{fontWeight:'900', color:'rgb(35 177 62)'}}>GitHub 2023 Wrapped</span></h2>
          <span style={{color:'rgb(75, 207, 167)', fontWeight:'900', fontSize:'1.5rem'}}>Your Top 3 Repositories in 2023</span>
          <p style={{color:'rgba(255,161,22)', fontWeight:'900', fontSize:'1.5rem', marginTop:'4rem'}}> Coming Soon...</p>
      </div>
    </AwesomeSlider>
    </div>
    </div>
  </>
  );
}