import React, { useState } from "react";
import gift from "../assets/gift.gif"
import axios from "axios";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useRecoilState, useRecoilValue } from "recoil";
import { inputState } from "../atoms/Input";
import { mostUsedLang } from "../atoms/MostUsedLang";
import { toast } from "react-toastify";
import "./Wrapped.css";
import WrappedCard from "../components/ui/WrappedCard";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useTimeout } from "react-use";
import { Button } from "@mui/material";

const Wrapped = () => {
  const [totalContributions, setTotalContributions] = useState(0);
  const [totalCommits, setTotalCommits] = useState(0);
  const [totalPRs, setTotalPRs] = useState(0);
  const [totalIssues, setTotalIssues] = useState(0);
  const [totalStars, setTotalStars] = useState(0);
  const [topRepo, setTopRepo] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [Languages, setLanguages] = useRecoilState(mostUsedLang);
  const inputText = useRecoilValue(inputState);
  const { width, height } = useWindowSize();
  const [isComplete] = useTimeout(4000);

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
      const response = await axios.get(`https://api.github.com/users/${inputText}/repos`);
      const repos = response.data;
      if (!response || !response.data || response.status !== 200) {
        toast.error("Something is Wrong!");
        return;
      }
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
      const top3Repos = repos.slice(0, 3);
      setLanguages(lang.data.data);

      if (res.data.contributions2023 === "" && lang.data.data == []) {
        toast.error("Invalid Username!");
        return;
      }
      if (res.data.contributions2023 === '') {
        toast.error("Contributions Not Found!");
        return;
      }
      setTotalContributions(res.data.contributions2023);
      setTotalCommits(res.data.totalCommits);
      setTotalIssues(res.data.totalIssues)
      setTotalPRs(res.data.totalPRs);
      setTotalStars(res.data.totalStars);
      setTopRepo((prev) => [...prev, top3Repos]);
    } catch (err) {
      console.log("error", err);
    } finally {
      setLoading(false);
    }
    notify();
    toast("Take Screen-Shot & Share!")
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white w-1/2 h-96 rounded-lg flex flex-col justify-center items-center">
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
            <img src={gift} width={300} height={250} />
            <br />
            <br />
          </>
        )}
        {totalContributions === 0 && (
          <>
            <Button variant='contained' onClick={handleClick1} className='click-me'>Click Me to get your GitHub Wrapped</Button><br /><br />
          </>
        )}
        {totalContributions !== 0 && (
          <>
            <Confetti width={width} height={height} recycle={!isComplete()} />
            <WrappedCard contributions={totalContributions} commits={totalCommits} issues={totalIssues} PRs={totalPRs} stars={totalStars} />
          </>
        )}
      </div></div>
  );
};

export default Wrapped;
