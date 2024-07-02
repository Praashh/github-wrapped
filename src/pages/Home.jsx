import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { inputState } from "../atoms/Input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Hero from "../components/ui/Hero";
import WrapButton from "../components/ui/wrapped-button";

const Home = () => {
  const [wrappedInput, setWrappedInput] = useState(false);
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
      <div className='bg-slate-50 w-1/2 h-96 flex  items-center flex-col rounded-md p-4'>
        {!wrappedInput ? (
          <WrapButton setWrappedInput={setWrappedInput} />
        ) : (
          <Hero handleWrapNow={handleWrapNow} setInputText={setInputText} inputText={inputText} />
        )}
        <p className='team'>Made By -<NavLink to={'https://twitter.com/10Xpraash'}>Praash</NavLink></p>
      </div>
    </div>
  );
};

export default Home;
