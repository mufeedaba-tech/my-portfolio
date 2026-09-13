import { useEffect, useState } from "react"

const projects = [
  {
    title: "Medisure - Doctor Appointment Booking System",
    description:
      "A full-stack MERN healthcare platform where patients can find doctors, book appointments, manage profiles and view appointments.",
    image: "/doctor-project.jpg",
    technologies: ["MERN", "Tailwind CSS", "JWT", "Razorpay"],
    liveLink:
      "https://medisure-doctor-appointmnet-booking.vercel.app",
    githubLink:
      "https://github.com/mufeedaba-tech/Medisure-Doctor-Appointmnet-Booking-System",
  },

  {
    title: "Medisure - Admin Dashboard",
    description:
      "An admin dashboard for managing doctors, appointments and platform activities with analytics and interactive charts.",
    image: "/admin-dashboard.jpg",
    technologies: ["React", "Chart.js", "Node.js"],
    liveLink: "https://medisure-doctor-appointmnet-booking-two.vercel.app",
    githubLink:
      "https://github.com/mufeedaba-tech/Medisure-Doctor-Appointmnet-Booking-System",
  },

  {
    title: "Portfolio Website",
    description:
      "A modern responsive portfolio website designed to showcase my skills, projects, education and professional experience.",
    image: "/portfolio-project.jpg",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveLink: "https://my-portfolio-khaki-iota-80.vercel.app",
    githubLink: "https://github.com/mufeedaba-tech/my-portfolio",
  },
  {
    title: "Kanban Board System",
    description:
      "A task management system with drag-and-drop Kanban boards, role-based access control, real-time task tracking, and a responsive user interface.",
    image: "/kanban.png",
    technologies: ["ASP.NET", "C#", "SQL Server","CSS","HTML"],
    githubLink:
      "https://github.com/mufeedaba-tech/kanban-board-system",
  },
]

function Projects() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto slide every 4 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused])

  const visibleProjects = [
    projects[current % projects.length],
    projects[(current + 1) % projects.length],
  ]

  return (
    <section
      id="projects"
      className="bg-white px-6 py-20 text-[#0b1735] lg:px-12"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-indigo-500">
            MY PROJECTS
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#0b1735] sm:text-4xl">
            Projects
          </h2>

          <div className="mt-3 h-[2px] w-10 bg-indigo-500" />
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 lg:grid-cols-2">

          {visibleProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="group overflow-hidden rounded-2xl border border-[#dbe2f0] bg-[#07152c] p-4 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-100"
            >
              <div className="grid gap-5 sm:grid-cols-[210px_1fr]">

                {/* Project Image */}
                <div className="h-[190px] overflow-hidden rounded-xl bg-[#0b1b34]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Project Content */}
                <div className="flex flex-col justify-center">

                  {/* Title + Arrow */}
                  <div className="flex items-start justify-between gap-3">

                    <h3 className="text-lg font-semibold leading-6 text-white">
                      {project.title}
                    </h3>

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-indigo-400/40 text-indigo-400 transition duration-300 hover:bg-indigo-500 hover:text-white"
                      aria-label={`Open ${project.title}`}
                    >
                      ↗
                    </a>

                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">

                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300"
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
                      className="rounded-lg bg-indigo-500 px-4 py-2 text-xs font-medium text-white transition hover:bg-purple-600"
                    >
                      Live Demo
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/20 px-4 py-2 text-xs font-medium text-gray-200 transition hover:border-indigo-400 hover:text-indigo-400"
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