import React from 'react'
import "../App.css"
import { NavLink } from 'react-router-dom'
import { Avatar } from '@mui/material'

const Team = () => {
  return (
    <div className='Team-Wrapper'>
       <NavLink to="https://twitter.com/PrashantSony6" target='_blank'>
        <div>
        <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/1728888349644210176/FSXsXMRv_400x400.jpg" style={{marginBottom:'1rem', width:'100px', height:'100px'}}/>
        </div>
          <span>Praash</span>
       </NavLink>
       <NavLink to="https://twitter.com/codeDev_Piyush" target='_blank'>
        <div>
        <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/1703653723988451328/IglCfMbZ_400x400.jpg" style={{marginBottom:'1rem', width:'100px', height:'100px'}}/>
        </div>
          <span>Zeta</span>
       </NavLink>
       <NavLink to="https://twitter.com/vavishalarya" target='_blank'>
        <div>
        <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/1704966368557461504/hRU7VIfO_400x400.png" style={{marginBottom:'1rem', width:'100px', height:'100px'}}/>
        </div>
          <span>WarLock</span>
       </NavLink>
    </div>
  )
}

export default Team
