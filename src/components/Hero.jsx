import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
  SiInstagram,
} from "react-icons/si"

import { MdEmail } from "react-icons/md"

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#030b1c]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[8%] top-[10%] h-[500px] w-[500px] animate-pulse rounded-full bg-indigo-600/20 blur-[140px]" />

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-[1400px] items-center px-6 py-8 lg:px-12 lg:py-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}
          <div className="z-10">

            <p className=" text-lg text-indigo-400">
              Hello, I'm
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Mufeeda BA
            </h1>

            <h2 className="mt-2 text-2xl font-medium text-white sm:text-1xl">
              Aspiring{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                MERN Stack Developer
              </span>
            </h2>

            <p className="mt-3 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
              I build modern, responsive and user-friendly web applications
              using the MERN stack. Passionate about clean code, problem
              solving and creating impactful digital experiences.
            </p>

            {/* BUTTONS */}
            <div className="mt-5 flex flex-wrap gap-5">

              {/* View My Work */}
              <a
                href="#projects"
                className="flex items-center gap-3 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-7 py-2 font-medium text-white shadow-lg shadow-indigo-500/25 transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/40"
              >
                View My Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Download CV */}
              <a
                href="/Resume_Mufeedaba.pdf"
                download="Resume_Mufeedaba.pdf"
                className="flex items-center gap-3 rounded-md border border-gray-600 px-7 py-2 font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:bg-white/5"
              >
                Download CV
                <span>↓</span>
              </a>

            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-5">

              <p className="mb-4 text-sm text-gray-300">
                Let's connect
              </p>

              <div className="flex gap-4">

                {/* GitHub */}
                <a
                  href="https://github.com/mufeedaba-tech"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-400"
                >
                  <SiGithub className="text-lg" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/mufeeda-ba-895760388"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-400"
                >
                  <span className="text-sm font-bold">
                    in
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/mufii.__?igsi=eTg3YzRlMXhhOWxx"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-400"
                >
                  <SiInstagram className="text-lg" />
                </a>

                {/* Email */}
                <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=mufeedaba@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Email"
  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:text-indigo-400"
>
  <MdEmail className="text-lg" />
</a>

              </div>
            </div>

          </div>

          {/* ================= RIGHT PROFILE ================= */}
          <div className="relative mx-auto flex h-[380px] w-full max-w-[490px] items-center justify-center sm:h-[450px]">

            {/* Main Glow */}
            <div className="pointer-events-none absolute h-[330px] w-[280px] animate-pulse rounded-full bg-indigo-600/30 blur-[80px] sm:h-[400px] sm:w-[350px]" />

            {/* Outer Orbit */}
            <div className="absolute h-[350px] w-[300px] rounded-full border border-indigo-400/30 sm:h-[460px] sm:w-[410px]" />

            {/* Inner Orbit */}
            <div className="absolute h-[300px] w-[280px] rounded-full border border-purple-500/20 sm:h-[390px] sm:w-[350px]" />

            {/* Elliptical Orbit */}
            <div className="absolute h-[250px] w-[380px] rotate-[-22deg] rounded-[50%] border border-indigo-400/30 sm:h-[300px] sm:w-[450px]" />

            {/* Second Elliptical Orbit */}
            <div className="absolute h-[210px] w-[400px] rotate-[28deg] rounded-[50%] border border-purple-500/20 sm:h-[250px] sm:w-[450px]" />

            {/* Profile Glow */}
            <div className="absolute h-[340px] w-[220px] rounded-[45%] bg-gradient-to-b from-indigo-500/40 to-purple-600/20 blur-2xl sm:h-[410px] sm:w-[300px]" />

            {/* PROFILE IMAGE */}
            <div className="relative z-10 h-[330px] w-[270px] overflow-hidden rounded-[45%] border border-indigo-400/50 bg-[#071126] shadow-2xl shadow-indigo-900/60 transition duration-500 hover:scale-[1.02] sm:h-[400px] sm:w-[320px]">

              <img
                src="/profile.png"
                alt="Mufeeda BA"
                className="h-full w-full object-cover"
              />

            </div>

            {/* ================= TECHNOLOGY ICONS ================= */}

            {/* React */}
            <div className="absolute left-[8%] top-[16%] z-20 flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-cyan-400/50 bg-[#071126]/95 shadow-lg shadow-cyan-500/20 [animation-duration:3s] sm:h-12 sm:w-12">
              <SiReact className="text-2xl text-cyan-400 sm:text-3xl" />
            </div>

            {/* JavaScript */}
            <div className="absolute right-[8%] top-[28%] z-20 flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-yellow-400/50 bg-[#071126]/95 shadow-lg shadow-yellow-500/20 [animation-delay:500ms] [animation-duration:3s] sm:h-12 sm:w-12">
              <SiJavascript className="text-2xl text-yellow-400 sm:text-3xl" />
            </div>

            {/* Node.js */}
            <div className="absolute bottom-[26%] left-[6%] z-20 flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-green-400/50 bg-[#071126]/95 shadow-lg shadow-green-500/20 [animation-delay:1000ms] [animation-duration:3s] sm:h-12 sm:w-12">
              <SiNodedotjs className="text-2xl text-green-400 sm:text-3xl" />
            </div>

            {/* MongoDB */}
            <div className="absolute bottom-[11%] right-[12%] z-20 flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-green-400/50 bg-[#071126]/95 shadow-lg shadow-green-500/20 [animation-delay:1500ms] [animation-duration:3s] sm:h-12 sm:w-12">
              <SiMongodb className="text-2xl text-green-400 sm:text-3xl" />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero