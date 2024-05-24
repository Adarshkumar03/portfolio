import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import useMediaQuery from "./hooks/useMediaQuery";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Layout() {
  const isBreakout = useMediaQuery(768);
  const location = useLocation();

  // Close the mobile menu when navigating to a new route
  useEffect(() => {
    setIsOpen(false); // Assuming your NavbarMobile has isOpen state
  }, [location]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#FAFAFF] dark:bg-[#03001C] min-h-screen pt-16 xl:pt-20">
      {isBreakout ? (
        <NavbarMobile isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <Navbar />
      )}
      <div className="max-w-screen-sm">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
