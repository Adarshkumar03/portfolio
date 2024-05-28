import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import profilePic from "/profilePic.jpg";
import { Link } from "react-router-dom";
import { FaFilePdf } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Home() {
  const [profilePicLoaded, setProfilePicLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = profilePic;
    img.onload = () => setProfilePicLoaded(true);
  }, []);
  return (
    <div className="flex flex-col items-center px-12 py-5 dark:text-[#fff] md:flex-row-reverse  xl:py-5 xl:px-48 ">
      <div className="xl:w-1/2 flex xl:justify-end">
        {profilePicLoaded ? (
          <img
            src={profilePic}
            alt=""
            className="rounded-xl shadow-md shadow-slate-500 xl:w-3/4 "
          />
        ) : (
          <div>Loading image...</div> // or a placeholder image
        )}
      </div>
      <div className="text-center mt-5 xl:text-left xl:w-1/2 md:w-1/2 xsm:w-full flex flex-col gap-4">
        <div>
          <h1 className="t font-bold text-3xl">
            Hello👋, I'm{" "}
            <span className="text-[#03001C] dark:text-[#fff]">
              Adarsh Kumar
            </span>{" "}
            and
          </h1>
          <h1 className="font-extrabold text-[#301E67] dark:text-[#B6EADA] my-2 text-4xl xl:text-6xl xsm:text-3xl">
            I'm a Full Stack <br className="xsm:hidden" /> Web Developer
          </h1>
        </div>
        <div>
          <p className="font-semibold text-lg">
            I build things for the web to provide the best User Experience
            possible.
          </p>
          <p className="font-semibold text-lg">
            I am a fast learner, always looking to improve and learn new
            technologies.
          </p>
        </div>
        <div className="flex xl:gap-8 justify-around xl:justify-normal">
          <a href="https://github.com/Adarshkumar03" target="_blank">
            <button className="btn btn-circle ">
              <BsGithub size={25} className="hover:text-[#457B9D]" />
            </button>
          </a>
          <a
            href="https://linkedin.com/in/adarsh-kumar-7b550a1aa"
            target="_blank"
          >
            <button className="btn btn-circle">
              <BsLinkedin size={25} className="hover:text-[#457B9D]" />
            </button>
          </a>
          <a href="mailto:adarshkumar245@gmail.com">
            <button className="btn btn-circle">
              <BiLogoGmail size={25} className="hover:text-[#457B9D]" />
            </button>
          </a>
        </div>
        <div className="flex xl:justify-normal -mx-6 xl:mx-0">
          <button className="bg-[#301E67] hover:bg-[#5B8FB9] text-[#Fff] p-2 xl:w-1/3 rounded-md font-semibold shadow-sm shadow-inherit mr-3 w-1/2 xl:mr-5">
            <Link to="/about" className="flex justify-center items-center">
              <span className="mr-1 xl:mr-2">More about me</span>{" "}
              <FaArrowRight size={20} />
            </Link>
          </button>
          <a
            href="/AdarshResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center bg-[#301E67] hover:bg-[#5B8FB9] text-[#F1FAEE] text-center p-2 w-1/2 xl:w-1/3 rounded-md font-semibold shadow-sm shadow-inherit"
          >
            <span className="mr-1 xl:mr-2">My Resume</span>{" "}
            <FaFilePdf size={20}/>
          </a>
        </div>
      </div>
    </div>
  );
}
