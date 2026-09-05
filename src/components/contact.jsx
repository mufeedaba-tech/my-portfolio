import { useState } from "react"
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = `Portfolio Contact from ${formData.name}`

    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=YOUR_EMAIL@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    window.open(gmailUrl, "_blank")
  }

  return (
    <section
      id="contact"
      className="bg-white px-6 py-14 text-[#0b1735] lg:px-12"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-indigo-500">
            GET IN TOUCH
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Let's Work Together
          </h2>

          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" />

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Have a project idea or an opportunity? Feel free to reach out.
            I'd love to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT — Contact Information */}
          <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-50 p-7 sm:p-9">

            <h3 className="text-2xl font-bold text-[#0b1735]">
              Contact Information
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your team.
            </p>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=YOUR_EMAIL@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="mt-1 text-sm font-medium text-[#0b1735]">
                  YOUR_EMAIL@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+910000000000"
              className="mt-4 flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <FaPhone />
              </div>

              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="mt-1 text-sm font-medium text-[#0b1735]">
                  +91 XXXXX XXXXX
                </p>
              </div>
            </a>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-[#0b1735]">
                Connect with me
              </p>

              <div className="mt-4 flex gap-3">

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/mufeeda-ba-895760388"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-indigo-600 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:text-white"
                >
                  <FaLinkedinIn />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/mufeedaba-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-800 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:text-white"
                >
                  <FaGithub />
                </a>

                {/* Email */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mufeedaba@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-indigo-600 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:text-white"
                >
                  <FaEnvelope />
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT — Contact Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm sm:p-9">

            <h3 className="text-2xl font-bold text-[#0b1735]">
              Send Me a Message
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Fill out the form and I'll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-7">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-[#0b1735]"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Email */}
              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#0b1735]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Message */}
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-[#0b1735]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                  className="mt-2 w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3.5 font-medium text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/30"
              >
                Send Message
                <span>→</span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact