import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from "react-icons/si"

import { VscVscode } from "react-icons/vsc"

const skills = [
  {
    name: "HTML",
    icon: SiHtml5,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    icon: SiCss,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    name: "React",
    icon: SiReact,
    color: "text-cyan-400",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-500",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-700",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-600",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-500",
  },
  {
    name: "Git",
    icon: SiGit,
    color: "text-orange-600",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "text-gray-900",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    color: "text-blue-500",
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="bg-white px-6 py-10 text-[#0b1735] lg:px-12"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="mb-12 text-center">

          <p className="text-sm font-semibold tracking-[0.2em] text-indigo-500">
            MY SKILLS
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Skills & Technologies
          </h2>

          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />

        </div>

        {/* Skills Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">

          {skills.map((skill) => {
            const Icon = skill.icon

            return (
              <div
                key={skill.name}
                className="group flex h-[135px] cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-200 bg-white px-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-100"
              >

                {/* Icon */}
                <Icon
                  className={`text-4xl ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                />

                {/* Skill Name */}
                <p className="mt-4 text-center text-sm font-semibold text-[#030b1c]">
                  {skill.name}
                </p>

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default Skills