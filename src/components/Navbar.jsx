import { useEffect, useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  // Detect which section is currently visible
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean)

      const scrollPosition = window.scrollY + 150

      let currentSection = "Home"

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          const matchingLink = navLinks.find(
            (link) => link.href === `#${section.id}`
          )

          if (matchingLink) {
            currentSection = matchingLink.name
          }
        }
      })

      setActiveLink(currentSection)
    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleNavClick = (name) => {
    setActiveLink(name)
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#030b1c]/95 shadow-lg backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 lg:px-12">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick("Home")}
          className="flex items-center gap-3"
        >
          <div className="flex h-5 w-5 items-center justify-center">
            <span className="bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-4xl font-black leading-none text-transparent">
              M
            </span>
          </div>

          <span className="text-lg font-semibold text-white">
            Mufeeda BA
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.name)}
              className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                activeLink === link.name
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}

              {/* Active underline */}
              {activeLink === link.name && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-purple-500 to-blue-500" />
              )}
            </a>
          ))}
        </div>

        {/* Hire Me */}
        <a
          href="#contact"
          onClick={() => handleNavClick("Contact")}
          className="hidden items-center gap-3 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-1 text-sm font-medium text-white shadow-lg shadow-indigo-500/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-indigo-500/40 md:flex"
        >
          Hire Me
          <span className="text-lg">→</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-700 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-800 bg-[#030b1c] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-1">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.name)}
                className={`rounded-md px-4 py-3 text-sm transition ${
                  activeLink === link.name
                    ? "bg-white/5 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => handleNavClick("Contact")}
              className="mt-3 flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-600 px-5 py-3 text-sm font-medium text-white"
            >
              Hire Me
              <span>→</span>
            </a>

          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar