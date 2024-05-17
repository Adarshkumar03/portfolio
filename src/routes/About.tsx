export default function About() {
  return (
    <div>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 border-b-zinc-200 dark:border-b-zinc-700 border-b w-full">
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-font-dark dark:text-font-light sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          About Me
        </h1>
      </div>
      <div className="w-full max-w-none pt-8 prose dark:prose-invert">
        <p className="lead">Hey, I&apos;m Adarsh Kumar.</p>

        <p>
          I&apos;m a full-stack web developer from India. It was back in late
          2019 when I came across{" "}
          <a
            href="https://www.freecodecamp.org"
            target="_blank"
            rel="noreferrer"
          >
            freeCodeCamp
          </a>
          . I got really intrigued by the idea that I can learn to code on my
          own. As someone, who was always interested in computers, I realized{" "}
          <strong>This is what I want to do for my career</strong> and embarked
          upon the long journey to learn programming.
        </p>

        <p>
          I believe that programming is a never-ending pursuit and that&apos;s
          why I&apos;m in love with web development and programming in general.
          I love to explore and learn new things. Currently, most of my
          endeavors revolve around Node.js, React.js and TypeScript.
        </p>

        <p>
          Aside from that, I&apos;m also a movie buff. My favorite genres are Thriller and Drama
          . When I&apos;m not coding, you&apos;ll probably
          find me reading something on my Kindle or tinkering with my computer.
        </p>

        <p>
          Feel free to write me at:{" "}
          <a href="mailto:adarshkumar245@gmail.com">adarshkumar245@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
