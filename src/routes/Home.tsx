import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import profilePic from "/profilePic.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="flex md:flex-row xsm:flex-col-reverse items-center justify-center xl:py-5 xl:px-48 xsm:px-12 dark:text-[#F1FAEE]">
      <div className="xl:w-1/2 md:w-1/2 xsm:w-full flex flex-col gap-4">
        <div>
          <h1 className="font-bold text-3xl">
            Hello👋, I'm{" "}
            <span className="text-[#2B2D42] dark:text-[#A8DADC]">
              Adarsh Kumar
            </span>{" "}
            and
          </h1>
          <h1 className="font-extrabold text-[#2B2D42] dark:text-[#A8DADC] my-2 xl:text-6xl xsm:text-3xl">
            I'm a Full Stack <br className="xsm:hidden" /> Web Developer
          </h1>
        </div>
        <div>
          <p className="font-semibold text-lg">
            I build things for the web to provide the best User Experience
            Possible.
          </p>
          <p className="font-semibold text-lg">
            I am a fast learner, always looking to improve and learn new
            technologies.
          </p>
        </div>
        <div className="flex xl:gap-8 xsm:justify-between xl:justify-normal">
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
        <div className="flex">
          <button className="bg-[#E63946] hover:bg-[#E63946dd] text-[#F1FAEE] p-2 w-1/3 rounded-md font-semibold shadow-sm shadow-inherit mr-5">
            <Link to="/about">More about me -&gt;</Link>
          </button>
          <a
            href="/AdarshResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-[#E63946] hover:bg-[#E63946dd] text-[#F1FAEE] text-center p-2 w-1/3 rounded-md font-semibold shadow-sm shadow-inherit"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="xl:w-1/2 md:w-1/2 xsm:w-full flex md:justify-end xsm:mb-4 md:mb-0">
        <img
          src={profilePic}
          alt=""
          className="w-3/4 rounded-xl shadow-md shadow-slate-500"
        />
      </div>
    </div>
  );
}
