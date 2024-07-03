import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
const Hero = ({ setInputText, handleWrapNow, inputText }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 duration-150">
            <Typography variant='h4' className='font-bold hidden md:block'>Check your GitHub Wrapped</Typography>
            <div className='flex flex-wrap justify-center items-center gap-3'>
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
            <p className='absolute bottom-4 duration-150 hover:font-semibold'><NavLink to={'https://twitter.com/10Xpraash'}>Made By Praash</NavLink></p>
        </div>
    )
}

export default Hero
