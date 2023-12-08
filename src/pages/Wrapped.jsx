import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import CircularProgress from "@mui/material/CircularProgress";
import { useRecoilState, useRecoilValue } from "recoil";
import { inputState } from "../atoms/Input";
import { mostUsedLang } from "../atoms/MostUsedLang";
import { toast } from "react-toastify";
import "./Wrapped.css";
import WrappedCard from "../components/WrappedCard";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useTimeout } from "react-use";

const Wrapped = () => {
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(false);
  const [Languages, setLanguages] = useRecoilState(mostUsedLang);
  const inputText = useRecoilValue(inputState);
  const { width, height } = useWindowSize();
  const [isComplete] = useTimeout(4000);

  console.log("inputText", inputText);

  const notify = () => {
    toast.success("Congratulations!", {
      autoClose: 3000,
      hideProgressBar: true,
      className: "celebration-toast",
      bodyClassName: "celebration-toast-body",
    });
  };

  const handleClick1 = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://github-wrapped-one.vercel.app/github-wrapped/api/v1/github-stats/${inputText}`
      );
      const lang = await axios.get(
        `https://github-wrapped-one.vercel.app/github-wrapped/api/v1/top-languages/${inputText}`
      );
      console.log("data1", res.data);
      console.log("data2", lang.data.data);
      setLanguages(lang.data.data);
      console.log("setted langs", Languages);
      if (res.data.contributions2023 === "") {
        toast.error("Invalid Username!");
        return;
      }
      setTotalContributions(res.data.contributions2023);
    } catch (err) {
      console.log("error aaya", err);
    } finally {
      setLoading(false);
    }
    notify();
  };

  return (
    <>
      {totalContributions === 0 && (
        <>
          <NavLink to="https://github.com" target="_blank">
            <img src={logo} className="logo" alt="Vite logo" />
          </NavLink>
          <br />
          <br />
        </>
      )}
      {loading && (
        <>
          <CircularProgress />
          <br />
          <br />
        </>
      )}
      {totalContributions === 0 && (
        <button onClick={handleClick1}>Get Your Wrapped</button>
      )}
      {totalContributions !== 0 && (
        <>
          <Confetti width={width} height={height} recycle={!isComplete()} />
          <WrappedCard />
        </>
      )}
    </>
  );
};

export default Wrapped;
