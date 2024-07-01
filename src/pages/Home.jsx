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
    <div  className='min-h-screen bg-cover bg-no-repeat bg-hero-img'>
      <Hero/>
      {!wrappedInput ? (
          <WrapButton setWrappedInput={setWrappedInput} />
      ) : (
        <Hero handleWrapNow={handleWrapNow} setInputText={setInputText} inputText={inputText}/>
      )}
      <p className='team'>Made By -<NavLink to={'https://twitter.com/10Xpraash'}>Praash</NavLink></p>
    </div>
  );
};

export default Home;
