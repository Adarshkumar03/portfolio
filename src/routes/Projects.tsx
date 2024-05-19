import { projects } from "../assets/data.json";

export default function Projects() {
  const list = projects.map((pr) => (
    <div className="grid grid-cols-2 gap-5 mb-5">
      <div>
        <img src={pr.img} />
      </div>
      <div className="p-10">
        <h2 className="font-bold text-3xl mb-3">{pr.name}</h2>
        <p className="mb-3">{pr.description}</p>
        <div className="flex justify-start mb-2">
          {pr["tech-stack"].map((tech) => (
            <button className="bg-slate-300 p-2 mr-4">{tech}</button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-x-5">
            {pr.github != "" && <a className="bg-red-400 p-2 font-semibold" target="_blank" href={pr.github}>Github Link</a>}
            {pr.live !== "" && <a className="bg-red-400 p-2 font-semibold" target="_blank" href={pr.live}>See it Live</a>}         
        </div>
      </div>
    </div>
  ));
  return (
    <div className="flex flex-col items-center justify-center px-40">
      <h1 className="text-[#2b2d42] dark:text-[#A8DADC] font-bold text-5xl mt-10 mb-10 text-center">
        Projects
      </h1>
      <div className="flex flex-col">{list}</div>
    </div>
  );
}
