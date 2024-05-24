import { projects } from "../assets/data.json";

export default function Projects() {
  const list = projects.map((pr) => (
    <div className="bg-[#F0f4ef] grid gap-y-5 border border-[#03001C33] dark:border:[#fff] px-5 rounded-md shadow-md shadow-[#03001C]">
      <div>
        <img
          src={pr.img}
          className="border border-[#03001C22] rounded-md transition ease-in-out delay-150 hover:translate-y-1 hover:scale-105 duration-300"
        />
      </div>
      <div className="p-2">
        <h2 className="font-bold text-3xl mb-2 text-[#03001C] dark:text-[#5B8FB9]">
          {pr.name}
        </h2>
        <p className="mb-4 text-[#2B2D42ef] dark:text-[##03001Caa] text-lg">
          {pr.description}
        </p>
        <h2 className="text-2xl font-semibold mb-3 text-[#03001C]">
          Tech Stack
        </h2>
        <div className="flex justify-start mb-4">
          {pr["tech-stack"].map((tech) => (
            <button className="bg-slate-300 p-2 mr-2 rounded-md">{tech}</button>
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
    <div className="flex flex-col items-center justify-center px-24 pb-10">
      <h1 className="text-[#03001C] dark:text-[#fff] font-bold text-5xl mt-10 mb-10 text-center">
        Projects
      </h1>
      <div className="grid grid-cols-2 gap-10">{list}</div>
    </div>
  );
}
