import data from "../assets/data.json";
function Skills() {
  const frontend = data.skills.frontend.map((tech) => (
    <div className="text-white flex flex-col justify-center items-center">
      <img src={tech.img} className="w-12  h-12" />
      <p className="text-lg font-semibold">{tech.name}</p>
    </div>
  ));

  const backend = data.skills.backend.map((tech) => (
    <div className="text-white flex flex-col justify-center items-center">
      <img src={tech.img} className="w-10 h-10" />
      <p className="text-lg font-semibold">{tech.name}</p>
    </div>
  ));

  const Miscellaneous = data.skills.Miscellanous.map((tech) => (
    <div className="text-white flex flex-col justify-center items-center">
      <img src={tech.img} className="w-15 h-10" />
      <p className="text-lg font-semibold">{tech.name}</p>
    </div>
  ));

  return (
    <div className="pb-10 px-48">
      <h1 className="font-bold text-3xl text-[#2b2d42] dark:text-[#A8DADC] mb-10 text-center">
        Technical Knowledge
      </h1>
      <div className="flex">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl ml-32 mb-2 dark:text-[#A8DADC]">Frontend</h1>
          <div className="p-5 grid grid-cols-3 gap-5 bg-[#457B9D] mr-8 rounded-lg shadow-lg shadow-slate-500">
            {frontend}
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl ml-32 mb-2 dark:text-[#A8DADC]">Backend</h1>
          <div className="p-5 grid grid-cols-3 gap-5 bg-[#457B9D] mr-8 rounded-lg shadow-lg shadow-slate-500">
            {backend}
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl ml-20 mb-2 dark:text-[#A8DADC]">Miscellaneous</h1>
          <div className="p-5 grid grid-cols-3 gap-5 bg-[#457B9D] rounded-lg shadow-lg shadow-slate-500">
            {Miscellaneous}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
