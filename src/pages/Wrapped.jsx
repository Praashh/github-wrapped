import React, { useState } from 'react'
import axios from "axios";
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"
import "../App.css"
import CircularProgress from '@mui/material/CircularProgress';


const Wrapped = () => {
    const [totalContributions, setTotalContributions] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            const res = await axios.get('https://api.github.com/users/9520prashant/repos');
            const reposCreatedIn2023 = res.data.filter(repo => {
                const creationDate = new Date(repo.created_at);
                return creationDate.getFullYear() === 2023;
            });

            const fetchContributions = async (repo) => {
                const c = await axios.get(`https://api.github.com/repos/9520prashant/${repo}/contributors`);
                return c.data[0].contributions;
            }

            const contributionPromises = reposCreatedIn2023.map(repo => fetchContributions(repo.name));

            const contributions = await Promise.all(contributionPromises);

            const total = contributions.reduce((acc, curr) => acc + curr, 0);

            setTotalContributions(total);
            console.log("totalContributions ", total);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            {loading && <CircularProgress />}
            <NavLink to="https://github.com" target="_blank">
                <img src={logo} className="logo" alt="Vite logo" />
            </NavLink>

            <button onClick={handleClick}>Get</button>
            {totalContributions !== 0 && <p>Total Contributions: {totalContributions}</p>}
        </>
    )
}

export default Wrapped;
