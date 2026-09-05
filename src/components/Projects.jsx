import { useEffect, useState } from "react"

const projects = [
  {
    title: "Doctor Appointment Booking System",
    description:
      "A full-stack MERN application that allows patients to book appointments with doctors, manage profiles and view appointments.",
    image: "/doctor-project.jpg",
    technologies: ["MERN", "Tailwind CSS", "JWT"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Admin Dashboard",
    description:
      "Admin panel to manage doctors, appointments and view analytics with charts and reports.",
    image: "/admin-dashboard.jpg",
    technologies: ["React", "Chart.js", "Node.js"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio website showcasing skills, projects and professional experience.",
    image: "/portfolio-project.jpg",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveLink: "#",
    githubLink: "#",
  },
]

function Projects() {
  const [current, setCurrent] = useState(0)

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const visibleProjects = [
    projects[current % projects.length],
    projects[(current + 1) % projects.length],
  ]

  return (
    <section
      id="projects"
      className="bg-white px-6 py-16 text-[#0b1735] lg:px-12"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-sm font-semibold tracking-[0.2em] text-indigo-500">
            MY PROJECTS
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#0b1735] sm:text-4xl">
            Projects
          </h2>

          <div className="mt-3 h-[2px] w-8 bg-indigo-500" />
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 lg:grid-cols-2">

          {visibleProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-100"
            >
              <div className="grid gap-5 sm:grid-cols-[190px_1fr]">

                {/* Image */}
                <div className="h-[180px] overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center px-2 py-2">

                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold leading-6 text-[#0b1735]">
                      {project.title}
                    </h3>

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-indigo-300 text-indigo-600 transition duration-300 hover:bg-indigo-500 hover:text-white"
                      aria-label={`Open ${project.title}`}
                    >
                      ↗
                    </a>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md bg-indigo-500 px-4 py-2 text-xs font-medium text-white transition hover:bg-purple-600"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-md border border-gray-300 px-4 py-2 text-xs font-medium text-gray-700 transition hover:border-indigo-400 hover:text-indigo-600"
                    >
                      GitHub
                    </a>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Slider Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Show project slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-6 bg-indigo-500"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects