import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import useMediaQuery from "./hooks/useMediaQuery";
import { useLocation } from "react-router-dom";

function Layout() {
  const isBreakout = useMediaQuery(768);
  const location = useLocation();
  
  return (
    <div className="bg-[#FAFAFF] dark:bg-[#03001C] min-h-screen pt-16 xl:pt-20">
      {isBreakout ? <NavbarMobile /> : <Navbar />}
      <Outlet />
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
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
