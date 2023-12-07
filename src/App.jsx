import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Wrapped from './pages/Wrapped';
import TwitterShare from './components/TwitterShare';
import LinkedInShare from './components/LinkedInShare';
import ScreenCapture from './components/ScreenCapture';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const getGitHubStats = async () => {
    // const username = 'piyushhhxyz';
    // const response = await axios.get(`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&theme=nightowl&hide_border=false&include_all_commits=true&count_private=false&layout=compact`);
    // const svgData = response.data;

    // const langRegExp = /<text data-testid="lang-name"\sx="\d+"\sy="\d+"\sclass='lang-name'>\s([^<]+)\s</text>\s</g>/g;
    // const matches = [...svgData.matchAll(langRegExp)];
    // const languages = matches.map(match => match[1].trim());

    // console.log('Languages:', svgData);
};

getGitHubStats();
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/wrapped' element= {<Wrapped/>}/>
      </Routes>
      {/* <ScreenCapture/> */}
      <ToastContainer />
     </BrowserRouter>
     
    </>
  )
}

export default App
