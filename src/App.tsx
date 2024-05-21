import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import Navbar from "./components/Navbar";

function Layout() {
  return (
    <div className="bg-[#FAFAFF] dark:bg-[#03001C] min-h-screen pt-20">
      <Navbar />
      <Outlet /> {/* Renders the child route's content */}
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
