import { HiArrowUp, HiHeart } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        <div className="footer__content">
          <div className="footer__left">
            <a href="#home" className="footer__logo" onClick={(e) => { e.preventDefault(); scrollToTop() }}>
              <span className="footer__logo-bracket">&lt;</span>
              <span className="footer__logo-text">Ndra</span>
              <span className="footer__logo-slash">/</span>
              <span className="footer__logo-bracket">&gt;</span>
            </a>
            <p className="footer__tagline">
              Building the web, one pixel at a time.
            </p>
          </div>

          <div className="footer__links">
            <a href="https://github.com/DyandraWI" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/dyandra-wahyu-islamy/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn size={18} />
            </a>
          </div>

          <button className="footer__back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <HiArrowUp size={18} />
          </button>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} — Designed & Built with <HiHeart className="footer__heart" /> by <span className="gradient-text">dyndraisla</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
