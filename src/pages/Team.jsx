import React from 'react'
import "../App.css"
import { NavLink } from 'react-router-dom'
import { Avatar } from '@mui/material'

const Team = () => {
  return (
    <>
    <span style={{color:"greenyellow", fontWeight:'900', fontSize:'4rem'}}>Our Contributor</span>
    <div className='Team-Wrapper'>
       <NavLink to="https://twitter.com/PrashantSony6" target='_blank'>
        <div>
        <Avatar alt="praash" src="https://pbs.twimg.com/profile_images/1728888349644210176/FSXsXMRv_400x400.jpg" style={{marginBottom:'1rem', width:'150px', height:'150px'}} className='team-image'/>
        </div>
          <div style={{display:'flex', flexDirection:'column', gap:'9px', marginBottom:'43px',  fontWeight:'900'}}>
            <h2>Praash</h2>
            <span style={{color:'white'}}>TA at 100xDevs</span>
            <div style={{display:'flex', gap:'10px'}}></div>
          </div>
       </NavLink>
       <NavLink to="https://twitter.com/codeDev_Piyush" target='_blank'>
        <div>
        <Avatar alt="zeta" src="https://pbs.twimg.com/profile_images/1703653723988451328/IglCfMbZ_400x400.jpg" style={{marginBottom:'1rem', width:'150px', height:'150px'}} className='team-image'/>
        </div>
        <div style={{display:'flex', flexDirection:'column', gap:'9px', marginBottom:'43px',  fontWeight:'900'}}>
            <h2>Zeta</h2>
            <span style={{color:'white'}}>Intern at openAI</span>
          </div>
       </NavLink>
       <NavLink to="https://twitter.com/vavishalarya" target='_blank'>
        <div>
        <Avatar alt="warlock" src="https://pbs.twimg.com/profile_images/1704966368557461504/hRU7VIfO_400x400.png" style={{marginBottom:'1rem', width:'150px', height:'150px'}} className='team-image'/>
        </div>
        <div style={{display:'flex', flexDirection:'column', gap:'9px', marginBottom:'43px', fontWeight:'900'}}>
            <h2>WarLock</h2>
            <span style={{color:'white'}}>M.Tech @IIITA</span>
          </div>
       </NavLink>
       <NavLink to="https://twitter.com/syndgofficial" target='_blank'>
        <div>
        <Avatar alt="Sinchan" src="https://pbs.twimg.com/profile_images/1724815873838596096/CFDtsXcX_400x400.jpg" style={{marginBottom:'1rem', width:'150px', height:'150px'}} className='team-image'/>
        </div>
        <div style={{display:'flex', flexDirection:'column', gap:'9px', marginBottom:'43px', fontWeight:'900'}}>
            <h2>Sinchan</h2>
            <span style={{color:'white'}}>Full Stack Developer</span>
          </div>
       </NavLink>
    </div>
    </>
  )
}

export default Team
