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
    <div className="pb-10 xl:px-52">
      <h1 className="font-bold text-3xl text-[#03001C] dark:text-[#FFFFFF] mb-10 text-center">
        Technical Knowledge
      </h1>
      <div className="flex flex-col xl:flex-row">
        <div className="mb-5 xl:mb-0">
          <h1 className="font-bold text-xl ml-36 xl:ml-36 xl:mb-2 dark:text-[#B6EADA]">Frontend</h1>
          <div className="mt-2 mb-5 ml-5 mr-5 xl:m-5 p-3 xl:p-5 grid grid-cols-3 gap-3 xl:gap-5 bg-[#301E67] xl:mr-8 rounded-lg shadow-lg shadow-[#301E67]">
            {frontend}
          </div>
        </div>
        <div className="mb-5 xl:mb-0">
          <h1 className="font-bold text-xl ml-36 xl:ml-36 xl:mb-2 dark:text-[#B6EADA]">Backend</h1>
          <div className="mt-2 mb-5 ml-5 mr-5 xl:m-5 p-3 xl:p-5 grid grid-cols-3 gap-3 xl:gap-5 bg-[#301E67] xl:mr-8 rounded-lg shadow-lg shadow-[#301E67]">
            {backend}
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl ml-28 xl:ml-24 xl:mb-2 dark:text-[#B6EADA]">Miscellaneous</h1>
          <div className="mt-2 mb-5 ml-5 mr-5 xl:m-5 p-3 xl:p-5 grid grid-cols-3 gap-3 xl:gap-5 bg-[#301E67] rounded-lg shadow-lg shadow-[#301E67]">
            {Miscellaneous}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
