import React from 'react'
import { NavLink } from 'react-router-dom'
import { Avatar } from '@mui/material'

const Team = () => {
  return (
    <>
    <span style={{color:"greenyellow", fontWeight:'900', fontSize:'4rem'}}>Made By</span>
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
    </div>
    </>
  )
}

export default Team
