import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/3 flex w-1/3 justify-between dark:bg-[#f1faee] px-3 py-2 rounded-md shadow-md shadow-slate-300">
      <div>
        <Link to="/">
        <h1 className="text-[#2B2D42] text-2xl font-bold">Adarsh.</h1>
        </Link>
        
      </div>
      <div className="my-1">
        <Link to="/" className="mr-2">Home</Link>
        <Link to="/about" className="mr-2">About</Link>
        <Link to="/projects" className="mr-2">Projects</Link>
        <a
          className=""
          href="/AdarshResume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
      <ThemeToggle />
    </nav>
  );
}
