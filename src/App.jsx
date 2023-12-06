import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Wrapped from './pages/Wrapped';


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/wrapped' element= {<Wrapped/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
