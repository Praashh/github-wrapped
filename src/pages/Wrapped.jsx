import React, { useState } from 'react'
import axios from "axios";
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
import CircularProgress from '@mui/material/CircularProgress';
import { useRecoilValue } from 'recoil';
import { inputState } from '../atoms/Input';
import { toast } from 'react-toastify';
import './Wrapped.css'
import WrappedCard from '../components/WrappedCard';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useTimeout } from 'react-use';


const Wrapped = () => {
    const [totalContributions, setTotalContributions] = useState(0);
    const [loading, setLoading] = useState(false);
    const inputText =  useRecoilValue(inputState);
    const { width, height } = useWindowSize()
    const [isComplete] = useTimeout(4000);
    
    console.log("inputText", inputText);
    

    const notify = () => {
        toast.success('Congratulations!', {
          autoClose: 3000,
          hideProgressBar: true,
          className: 'celebration-toast',
          bodyClassName: 'celebration-toast-body',
        });
    }
    
    const handleClick1 = async() =>{
        try{
            setLoading(true);
            const res = await axios.get(`https://github-wrapped-one.vercel.app/github-wrapped/api/v1/github-stats/${inputText}`)
            console.log(res.data);
            setTotalContributions(res.data.contributions2023)
        }catch(err){
            console.log("error aaya", err);
        } finally {
            setLoading(false);
        }
       notify();
    }

    return (
        <>
            <NavLink to="https://github.com" target="_blank">
                <img src={logo} className="logo" alt="Vite logo" />
            </NavLink><br />
            {loading && <CircularProgress />}<br/>
            {totalContributions === 0 && <button onClick={handleClick1}>Get</button>}
            {
              totalContributions !== 0 &&
                <>
                <button onClick={handleClick1}>Get Wrapped 2</button><br /><br />
                <Confetti
                    width={width}
                    height={height}
                    recycle={!isComplete()}
                />
                <WrappedCard/>
                </>
            }
            
        </>
    )
}

export default Wrapped;
