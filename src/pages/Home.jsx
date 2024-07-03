import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { inputState } from "../atoms/Input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Hero from "../components/ui/Hero";
import homeImg from "../../public/home.png"
const Home = () => {
  const [inputText, setInputText] = useRecoilState(inputState);
  const notify = () => toast("Wow so easy!");
  const navigate = useNavigate();

  useEffect(() => {
    setInputText("");
  }, []);

  const handleWrapNow = useCallback(() => {
    if (!inputText) {
      navigate("/");
      toast.error("Invalid Username!");
      return;
    }
    notify();
    navigate("/wrapped");
    return;
  }, [inputText]);

  return (
    <div className="min-h-screen w-[100%]  flex justify-center items-center ">
      <div className='bg-slate-400/70 p-2 backdrop-blur-md text-white/90 z-1 border border-gray-400/30 md:w-1/2 h-96 flex flex-wrap justify-around items-center  rounded-md'>
      <div className="w-1/2 bg-transparent md:h-full bg-red-200">
          <img src={homeImg} alt="imgHome" className="h-full "/>
      </div>
          <Hero handleWrapNow={handleWrapNow} setInputText={setInputText} inputText={inputText} />
      </div>
    </div>
  );
};

export default Home;
