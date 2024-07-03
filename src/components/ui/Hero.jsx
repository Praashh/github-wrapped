import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
const Hero = ({ setInputText, handleWrapNow, inputText }) => {
    return (
        <div className="flex flex-col items-center justify-center duration-150">
            <div className='flex justify-center items-center gap-3'>
            <TextField
                id="filled-basic"
                label="GitHub Username"
                variant="filled"
                className="bg-white rounded-md"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                required={true}
            />
            <Button onClick={handleWrapNow} variant='contained'>Wrapped Now</Button>
            </div>
            <p className='team'>Made By -<NavLink to={'https://twitter.com/10Xpraash'}>Praash</NavLink></p>
        </div>
    )
}

export default Hero
