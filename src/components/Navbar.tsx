import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="z-10 fixed top-4 left-1/3 flex w-1/3 justify-between bg-[#E2FDFF] px-5 py-2 rounded-xl shadow-md shadow-[#B6EADA]">
      <div>
        <Link to="/" className="text-[#03001C] text-2xl font-bold">
          Adarsh.
        </Link>
      </div>
      <div className="my-1 text-[#03001C] font-medium">
        <Link to="/" className="p-3 rounded-md hover:bg-[#B6EADA]">
          Home
        </Link>
        <Link to="/about" className="p-3 rounded-md hover:bg-[#B6EADA]">
          About
        </Link>
        <Link to="/projects" className="p-3 rounded-md hover:bg-[#B6EADA]">
          Projects
        </Link>
        <a
          className="p-3 rounded-md hover:bg-[#B6EADA]"
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
