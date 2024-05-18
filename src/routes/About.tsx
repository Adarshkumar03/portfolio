import Skills from "../components/Skills";
export default function About() {
  return (
    <div>
      <div className="flex flex-col px-96">
        <div className="pb-5 mb-7 border-b border-slate-300">
          <h1 className="text-[#2b2d42] dark:text-[#A8DADC] font-bold text-5xl mt-10 text-center">
            About Me
          </h1>
        </div>
        <div className="w-full text-xl text-[#2b2d42ee] dark:text-[#F1FAEE] mb-10">
          <p className="text-2xl mb-5 text-slate-500 dark:text-[#457B9D] font-medium">
            Hey, I&apos;m Adarsh Kumar.
          </p>
          <p className="mb-5">
            I&apos;m a{" "}
            <span className="font-bold">
              full-stack web developer from New Delhi, India
            </span>
            . It was back in late 2019 when I came across{" "}
            <a
              href="https://www.freecodecamp.org"
              target="_blank"
              rel="noreferrer"
              className="text-[#457B9D] font-bold hover:text-[#457B9Dbb]"
            >
              freeCodeCamp
            </a>
            . I got really intrigued by the idea that I can learn to code on my
            own. As someone, who was always interested in computers, I realized{" "}
            This is what I want to do for my career and embarked upon the long
            journey to learn programming.
          </p>

          <p className="mb-5">
            Web Development calls to my passion, it incorporates creativity and
            problem solving and I'm allowed to break it to improve the code. I
            love to explore and learn new things. Currently, most of my
            endeavors revolve around{" "}
            <span className="font-bold">Node.js, React.js and JavaScript</span>.
          </p>

          <p className="mb-5">
            Beyond my work, you'll find me hanging out with family, friends,
            going to the gym and indulging in a love for{" "}
            <span className="font-bold">cinema and music.</span>
          </p>
          <p>
            Feel free to write me at:{" "}
            <a
              href="mailto:adarshkumar245@gmail.com"
              className="text-[#457B9D] font-bold hover:text-[#457B9Dbb]"
            >
              adarshkumar245@gmail.com
            </a>
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
}
