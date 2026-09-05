import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa"

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030b1c] px-6 py-8 text-white lg:px-12">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-indigo-600/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px]">

        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr]">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20">
                <span className="text-xl font-black text-white">
                  M
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-wide">
                  Mufeeda BA
                </h2>

                <p className="mt-0.5 text-xs text-indigo-400">
                  Aspiring MERN Stack Developer
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
              I build modern, responsive and user-friendly web applications
              with a passion for clean design, problem solving and continuous
              learning.
            </p>

            {/* Availability */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

              <span className="text-xs font-medium text-gray-300">
                Open to opportunities
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Navigation
            </h3>

            <div className="mt-5 space-y-3">
              <a
                href="#home"
                className="group flex items-center gap-2 text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-indigo-400"
              >
                <span className="text-indigo-500 opacity-0 transition group-hover:opacity-100">
                  →
                </span>
                Home
              </a>

              <a
                href="#about"
                className="group flex items-center gap-2 text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-indigo-400"
              >
                <span className="text-indigo-500 opacity-0 transition group-hover:opacity-100">
                  →
                </span>
                About
              </a>

              <a
                href="#skills"
                className="group flex items-center gap-2 text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-indigo-400"
              >
                <span className="text-indigo-500 opacity-0 transition group-hover:opacity-100">
                  →
                </span>
                Skills
              </a>

              <a
                href="#projects"
                className="group flex items-center gap-2 text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-indigo-400"
              >
                <span className="text-indigo-500 opacity-0 transition group-hover:opacity-100">
                  →
                </span>
                Projects
              </a>

              <a
                href="#contact"
                className="group flex items-center gap-2 text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-indigo-400"
              >
                <span className="text-indigo-500 opacity-0 transition group-hover:opacity-100">
                  →
                </span>
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Let's Connect
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-400">
              Have an idea, project or opportunity? Let's connect and
              create something meaningful.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/mufeedaba-tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-indigo-400"
              >
                <FaGithub className="text-lg transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mufeeda-ba-895760388"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-indigo-400"
              >
                <FaLinkedinIn className="text-lg transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/mufii.__?igsi=eTg3YzRlMXhhOWxx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-indigo-400"
              >
                <FaInstagram className="text-lg transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mufeedaba@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-indigo-400"
              >
                <FaEnvelope className="text-lg transition-transform duration-300 group-hover:scale-110" />
              </a>

            </div>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition duration-300 hover:text-purple-400"
            >
              Get in touch
              <span className="transition-transform duration-300 hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

          <p className="text-center text-xs text-gray-500 sm:text-left">
            © 2026 Mufeeda BA. All rights reserved.
          </p>

          <p className="text-xs text-gray-600">
            Designed & built with React + Tailwind CSS
          </p>

          <a
            href="#home"
            className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-gray-400 transition-all duration-300 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-400"
          >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>

        </div>

      </div>
    </footer>
  )
}

export default Footer