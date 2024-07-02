import React from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button } from '@mui/material';

const WrapButton = ({ setWrappedInput }) => {
  return (
    <div>
      <Button variant="contained" onClick={() => setWrappedInput((prev) => !prev)}>
        <span className="btn">
          <span>Let's Wrap</span> <GitHubIcon />
        </span>
      </Button>
    </div>
  )
}

export default WrapButton
