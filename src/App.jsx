import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wrapped from "./pages/Wrapped";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Team from "./pages/Team";

function App() {
  return (
    <div className="min-h-screen bg-cover bg-no-repeat bg-hero-img">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wrapped" element={<Wrapped />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
