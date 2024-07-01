import React from 'react'
import GitHubIcon from "@mui/icons-material/GitHub";

const WrapButton = ({setWrappedInput, prev}) => {
  return (
    <div>
      <button onClick={() => setWrappedInput((prev) => !prev)}>
          <span className="btn">
            <span>Let's Wrapped</span> <GitHubIcon />
          </span>
        </button>
    </div>
  )
}

export default WrapButton
