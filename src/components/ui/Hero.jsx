import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import Typewriter from "typewriter-effect"
const Hero = ({setInputText, handleWrapNow, inputText}) => {
    return (
        <div className="text-field-wrapper">
            <TextField
                id="filled-basic"
                label="GitHub Username"
                variant="filled"
                className="input"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                required={true}
            />
            <button onClick={handleWrapNow}>Wrapped Now</button>
        </div>
    )
}

export default Hero
