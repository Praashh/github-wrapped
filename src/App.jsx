import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wrapped from "./pages/Wrapped";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MotionSlider from "./components/MotionSlider";

function App() {
  return (
    <>
      <BrowserRouter>
        <MotionSlider />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wrapped" element={<Wrapped />} />
        </Routes>
        {/* <ScreenCapture/> */}
        <ToastContainer />
        {/* <BackgroundVideo/> */}
      </BrowserRouter>
      {/* <PieChart/> */}
    </>
  );
}

export default App;
