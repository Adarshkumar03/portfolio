import { projects } from "../assets/data.json";

export default function Projects() {
  const list = projects.map((pr) => (
    <div className="flex flex-col w-11/12 ml-auto mr-auto xl:grid xl:w-full bg-[#F0f4ef] xl:gap-y-5 border border-[#03001C33] dark:border:[#fff] rounded-md shadow-md shadow-[#03001C]">
      <div className="p-3 xl:w-full">
        <img
          src={pr.img}
          className="border border-[#03001C22] rounded-md transition ease-in-out delay-150 hover:translate-y-1 duration-300"
        />
      </div>
      <div className="px-3 py-5 xl:px-5">
        <h2 className="font-bold text-3xl mb-2 text-[#03001C] dark:text-[#5B8FB9]">
          {pr.name}
        </h2>
        <p className="xl:w-full mb-4 text-[#2B2D42ef] dark:text-[##03001Caa] text-lg">
          {pr.description}
        </p>
        <h2 className="text-2xl font-semibold mb-3 text-[#03001C]">
          Tech Stack
        </h2>
        <div className="flex items-center xl:items-start xl:justify-start mb-4 flex-wrap">
          {pr["tech-stack"].map((tech) => (
            <button className="bg-slate-300 p-2 mb-2 xl:mb-0 mr-2 rounded-md">{tech}</button>
          ))}
        </div>
        <div className="flex">
          {pr.github != "" && (
            <a
              className="bg-[#301E67] hover:bg-[#5B8FB9] p-2 text-lg text-white font-bold rounded-md mr-5"
              target="_blank"
              href={pr.github}
            >
              View Code
            </a>
          )}
          {pr.live !== "" && (
            <a
              className="bg-[#301E67] hover:bg-[#5B8FB9] p-2 text-lg text-white font-bold rounded-md"
              target="_blank"
              href={pr.live}
            >
              See it Live
            </a>
          )}
        </div>
      </div>
    </div>
  ));
  return (
    <div className="w-screen xl:px-24 xl:pb-10 flex flex-col xl:items-center xl:justify-center ">
      <h1 className="text-[#03001C] dark:text-[#fff] font-bold text-5xl mt-10 mb-10 text-center">
        Projects
      </h1>
      <div className="grid xl:grid-cols-2 xl:mx-0 gap-5 xl:gap-10 pb-5 xl:pb-0">{list}</div>
    </div>
  );
}
