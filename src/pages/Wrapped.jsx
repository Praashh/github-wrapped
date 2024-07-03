import React, { useState } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { inputState } from "../atoms/Input";
import { mostUsedLang } from "../atoms/MostUsedLang";
import { toast } from "react-toastify";
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
      <div className="bg-slate-400/70 p-2 backdrop-blur-md text-white/90 z-1 border border-gray-400/30 w-1/2 h-96 rounded-lg flex flex-col justify-center items-center">
        {loading && (
          <span className="loader"></span>
        )}
        {totalContributions === 0 && (
          <>
            <Button variant='contained' onClick={handleClick1} className='click-me'>Click Me to get your GitHub Wrapped</Button><br /><br />
          </>
        )}
        {totalContributions !== 0 && (
          <>
            <WrappedCard contributions={totalContributions} commits={totalCommits} issues={totalIssues} PRs={totalPRs} stars={totalStars} />
          </>
        )}
      </div></div>
  );
};

export default Wrapped;
