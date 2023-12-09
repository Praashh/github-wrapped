import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Typewriter from "typewriter-effect";
import "../App.css";
import { Typography, Button, TextField } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { inputState } from "../atoms/Input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import BackgroundVideo from "../components/BackgroundVideo";

const Home = () => {
  const [wrappedInput, setWrappedInput] = useState(false);
  const [inputText, setInputText] = useRecoilState(inputState);
  const notify = () => toast("Wow so easy!");
  const navigate = useNavigate();

  useEffect(() => {
    setInputText("");
  }, []);

  const handleWrapNow = () => {
    if (!inputText) {
      navigate("/");
      toast.error("Invalid Username!");
      return;
    }
    notify();
    navigate("/wrapped");
    return;
  };

  return (
    <>
      <NavLink to="https://github.com" target="_blank">
        <img src={logo} className="logo" alt="Vite logo" />
      </NavLink>
      <Typography variant="h3" margin={3} style={{ fontWeight: "900" }}>
        Get Your{" "}
        <span style={{ fontWeight: "900", color: "rgb(35 177 62)" }}>
          GitHub 2023 Wrapped.
        </span>
        <Typography
          variant="h5"
          className="typewrite"
          style={{ fontWeight: "900" }}
        >
          <Typewriter
            options={{
              strings: ["#flexYourGithubWrapped", "#githubWrapped2023"],
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
            label="GitHub Username"
            variant="filled"
            className="input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            required={true}
          />
          <button onClick={handleWrapNow}>Wrapped Now</button>
        </div>
      )}
      <BackgroundVideo />
      <p className='team'>Made By -<NavLink to={'/team'} target="_blank">Team Praash</NavLink></p>
    </>
  );
};

export default Home;
