import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wrapped from "./pages/Wrapped";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Team from "./pages/Team";
import { useState, useEffect } from "react";
import Loader from "./components/ui/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const refreshId = setInterval(() => {
      setLoading(false);
      clearInterval(refreshId);
    }, 1000);

    return () => clearInterval(refreshId); 
  }, []);

  return (
    <>
      {loading ? (
       <Loader/>  
      ) : (
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
      )}
    </>
  );
}

export default App;
