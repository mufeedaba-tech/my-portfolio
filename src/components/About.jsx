function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-20 text-[#0b1735] lg:px-12"
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2">

        {/* LEFT — Image */}
        <div className="relative">

          <div className="overflow-hidden rounded-2xl shadow-sm">
            <img
              src="/about.jpg"
              alt="Coding workspace"
              className="h-[380px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* MCA Student Card */}
          <div className="absolute bottom-5 left-5 flex items-center gap-4 rounded-xl bg-white px-4 py-3 shadow-xl transition duration-300 hover:-translate-y-1 sm:left-8">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-2xl">
              🎓
            </div>

            <div>
              <p className="font-semibold">
                MCA Student
              </p>

              <p className=" text-sm text-gray-500">
                IGNOU
              </p>

              <div className=" h-[1px] w-6 bg-indigo-500" />
            </div>

          </div>
        </div>


        {/* RIGHT — Content */}
        <div>

          <p className="text-sm font-semibold tracking-[0.2em] text-indigo-500">
            ABOUT ME
          </p>

          <h2 className="mt-1 text-3xl font-bold sm:text-4xl">
            About Me
          </h2>

          <div className=" h-[2px] w-7 bg-indigo-500" />

          <p className="mt-3 max-w-xl text-base leading-7 text-gray-600">
            I’m an aspiring MERN Stack Developer passionate about building modern, responsive web applications. I enjoy turning ideas into practical solutions and continuously improving my development skills through hands-on projects.
          </p>


          {/* Information */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2">

            {/* Education */}
            <div className="flex items-center gap-3">
              <span className="text-xl text-indigo-500">
                🎓
              </span>

              <div>
                <p className="text-sm text-gray-500">
                  Education
                </p>

                <p className="font-medium">
                  MCA 
                </p>
              </div>
            </div>


            {/* Location */}
            <div className="flex items-center gap-3">
              <span className="text-xl text-indigo-500">
                ⌖
              </span>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="font-medium">
                  Kerala, India
                </p>
              </div>
            </div>


            {/* Email */}
            <div className="flex items-center gap-3">
              <span className="text-xl text-indigo-500">
                ✉
              </span>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mufeedaba@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition-colors hover:text-indigo-500"
                >
                  mufeedaba@gmail.com
                </a>
              </div>
            </div>


            {/* Role */}
            <div className="flex items-center gap-3">
              <span className="text-xl text-indigo-500">
                💻
              </span>

              <div>
                <p className="text-sm text-gray-500">
                  Role
                </p>

                <p className="font-medium">
                  MERN Stack Developer
                </p>
              </div>
            </div>

          </div>


          {/* Button */}
          <a
            href="#projects"
            className="mt-5 inline-flex items-center gap-3 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-indigo-500/30"
          >
            More About Me
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  )
}

export default About