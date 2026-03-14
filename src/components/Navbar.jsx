import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './Navbar.css'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, '#home')}>
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-text">Dev</span>
          <span className="navbar__logo-slash">/</span>
          <span className="navbar__logo-bracket">&gt;</span>
        </a>

        <ul className={`navbar__links ${isMobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`navbar__link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
                <span className="navbar__link-indicator"></span>
              </a>
            </li>
          ))}
          <li className="navbar__links-cta-mobile">
            <a href="#contact" className="btn btn-primary" onClick={(e) => handleNavClick(e, '#contact')}>
              Let's Talk
            </a>
          </li>
        </ul>

        <a href="#contact" className="btn btn-primary navbar__cta" onClick={(e) => handleNavClick(e, '#contact')}>
          Let's Talk
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>
    </nav>
  )
}
