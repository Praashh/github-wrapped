import React, { useState } from "react";
import gift from "../assets/gift.gif"
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
  const [totalCommits, setTotalCommits] = useState(0);
  const [totalPRs, setTotalPRs] = useState(0);
  const [totalIssues, setTotalIssues] = useState(0);
  const [totalStars, setTotalStars] = useState(0);
  const [topRepo, setTopRepo] =useState([{}]);
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
      const response = await axios.get(`https://api.github.com/users/${inputText}/repos`);
      const repos = response.data;
      if (!response || !response.data || response.status !== 200) {
        toast.error("Something is Wrong!");
        return;
      }
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
      const top3Repos = repos.slice(0, 3);
      console.log(`Top 3 repositories of ${inputText}:`);
      
      console.log("data1", res.data);
      console.log("data2", lang.data.data);
      setLanguages(lang.data.data);
      console.log("setted langs", Languages);
      // top3Repos.forEach((repo, index) => {
      //   console.log(`${index + 1}. ${repo.name} - Stars: ${repo.stargazers_count}`);
      // });
    
      if (res.data.contributions2023 === "" && lang.data.data == []) {
        toast.error("Invalid Username!");
        return;
      }
      if(res.data.contributions2023 === ''){
        toast.error("Contributions Not Found!");
        return;
      }
      setTotalContributions(res.data.contributions2023);
      setTotalCommits(res.data.totalCommits);
      setTotalIssues(res.data.totalIssues)
      setTotalPRs(res.data.totalPRs);
      setTotalStars(res.data.totalStars);
      setTopRepo((prev)=>[...prev, top3Repos]);
      console.log(top3Repos)
      console.log('top3 repo ', topRepo)
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
        <>
        <button onClick={handleClick1}>Get Your Wrapped</button><br /><br/>
        <img src={gift} width={300} height={250}/>
        </>
      )}
      {totalContributions !== 0 && (
        <>
          <Confetti width={width} height={height} recycle={!isComplete()} />
          <WrappedCard contributions = {totalContributions} commits = {totalCommits} issues={totalIssues} PRs={totalPRs} stars={totalStars}/>
        </>
      )}
    </>
  );
};

export default Wrapped;
