import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Dispatch, SetStateAction } from "react";

interface NavbarMobileProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }

export default function NavbarMobile({ isOpen, setIsOpen }: NavbarMobileProps) {
  return (
    <nav
      className={`w-11/12 px-2 fixed top-3 flex justify-between bg-[#E2FDFF] 
                  rounded-xl shadow-md shadow-[#B6EADA] mx-4`}
    >
      {/* Logo (conditionally shown) */}
      {!isOpen && (
        <h1 className="text-xl font-bold flex items-center">Adarsh.</h1>
      )}

      {isOpen && (
        <div className="flex justify-around my-1 text-[#03001C] font-medium">
          <Link
            to="/"
            className="flex items-center p-1 hover:bg-[#B6EADA]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="flex items-center p-1 hover:bg-[#B6EADA]"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="flex items-center p-1 hover:bg-[#B6EADA]"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <a
            className="flex items-center p-1 hover:bg-[#B6EADA]"
            href="/AdarshResume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </div>
      )}

      {/* Close Icon and Theme Toggle */}
      <div className="flex items-center">
        <ThemeToggle />
        {/* Hamburger/Close Icon */}
        <button
          className="my-2 ml-2 p-2 rounded-md focus:outline-none hover:bg-[#B6EADA]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ImCross /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Navigation Links (conditionally shown) */}
    </nav>
  );
}
