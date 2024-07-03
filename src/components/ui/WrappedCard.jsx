import * as React from 'react';
import githubContribution from "../../assets/logo.png"
import { inputState } from '../../atoms/Input';
import { useRecoilValue } from 'recoil';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import TwitterShare from './TwitterShare';
import LinkedInShare from './LinkedInShare';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedIcon from '@mui/icons-material/LinkedIn';
import PieChart from '../landing/PieChart';

export default function WrappedCard({contributions, commits, issues, PRs, stars}) {
 
  const inputText =  useRecoilValue(inputState);


  return (
    <>
      <div className=''>
        totalContributions: {contributions} <br/>
        commits: {commits} <br/>
        Issue: {issues} <br/>
        PR:{PRs} <br/>
        Star: {stars} 
    </div>
  </>
  );
}