import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import Typewriter from "typewriter-effect"
const Hero = ({ setInputText, handleWrapNow, inputText }) => {
    return (
        <div className="flex items-center justify-center duration-150">
            <TextField
                id="filled-basic"
                label="GitHub Username"
                variant="filled"
                className="input"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                required={true}
            />
            <Button onClick={handleWrapNow} variant='contained'>Wrapped Now</Button>
        </div>
    )
}

export default Hero
