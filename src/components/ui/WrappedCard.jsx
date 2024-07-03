import { inputState } from '../../atoms/Input';
import { useRecoilValue } from 'recoil';
import 'react-awesome-slider/dist/styles.css';

export default function WrappedCard({contributions, commits, issues, PRs, stars, username}) {
 
  const inputText =  useRecoilValue(inputState);
  return (
    <>
      <div className=''>
        Hello<span className='ml-2'>{username}</span><br />
        totalContributions: {contributions} <br/>
        commits: {commits} <br/>
        Issue: {issues} <br/>
        PR:{PRs} <br/>
        Star: {stars} 
    </div>
  </>
  );
}