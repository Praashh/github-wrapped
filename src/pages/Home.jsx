import React, { useState } from "react";
import logo from "../assets/logo.png";
import Typewriter from "typewriter-effect";
import "../App.css";
import { Typography, Button, TextField } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink } from "react-router-dom";


const Home = () => {
  const [wrappedInput, setWrappedInput] = useState(false);

  return (
    <>
      <NavLink to="https://github.com" target="_blank">
        <img src={logo} className="logo" alt="Vite logo" />
      </NavLink>
      <Typography variant="h2" margin={3}>
        Get Your
        <Typography variant="h4" className="typewrite">
          <Typewriter
            options={{
              strings: ["GitHub 2023 Wrapped."],
              autoStart: true,
              loop: true,
            }}
          />
        </Typography>
      </Typography>
      {!wrappedInput ? (
        <button onClick={() => setWrappedInput((prev) => !prev)}>
          <span className="btn">
            <span>Let's Wrapped</span> <GitHubIcon />
          </span>
        </button>
      ) : (
        <div className="text-field-wrapper">
          <TextField
            id="filled-basic"
            label="Username"
            variant="filled"
            className="input"
          />
          <NavLink to={'/wrapped'}>
            <Button variant="contained">
                Wrapped Now
            </Button>
          </NavLink>
        </div>
      )}
      <Typography variant="subtitle1" margin={5} className="read-the-docs">
        Click on the button to get your github wrapped
      </Typography>
    </>
  );
};

export default Home;
