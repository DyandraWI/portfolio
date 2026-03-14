import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiOutlineDocumentDownload } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import ParticleField from './ParticleField'
import profilePhoto from '../assets/photo.jpg'
import './Hero.css'

const roles = [
  'Frontend Developer',
  'UI/UX Enthusiast',
  'Problem Solver',
  'Full Stack Developer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const currentRole = roles[roleIndex]

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }, 80)
      } else {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 40)
      } else {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeoutRef.current)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section className="hero" id="home">
      <ParticleField />

      <div className="hero__bg-gradient" />

      <div className="hero__content container">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="hero__greeting"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="hero__greeting-line" />
            <span className="hero__greeting-text">
              <span className="hero__wave">👋</span> Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="hero__name-first">Dyandra</span>
            <span className="hero__name-last gradient-text">Islamy</span>
          </motion.h1>

          <motion.div
            className="hero__role-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <span className="hero__role-prefix">&gt;_</span>
            <span className="hero__role">{displayText}</span>
            <span className="hero__cursor">|</span>
          </motion.div>

          <motion.p
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            I craft elegant, scalable digital experiences from frontend to backend.
            Passionate about building products that make a real impact.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary hero__btn">
              View My Work
              <HiArrowDown />
            </a>
            <a href="/cv.pdf" download="Dyandra_Islamy_CV.pdf" className="btn btn-outline hero__btn">
              <HiOutlineDocumentDownload />
              Download CV
            </a>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <a href="https://github.com/DyandraWI" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/dyandra-wahyu-islamy/" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <FaLinkedinIn size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__avatar-ring">
            <div className="hero__avatar-ring-inner">
              <div className="hero__avatar-placeholder">
                <img src={profilePhoto} alt="Dyandra Islamy" className="hero__avatar-img" />
              </div>
            </div>
          </div>
          <div className="hero__floating-badge hero__floating-badge--1">
            <span>⚛️</span> React
          </div>
          <div className="hero__floating-badge hero__floating-badge--2">
            <span>🟢</span> Node.js
          </div>
          <div className="hero__floating-badge hero__floating-badge--3">
            <span>🐍</span> Python
          </div>
        </motion.div>
      </div>

      <div className="hero__scroll-indicator">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <HiArrowDown size={20} />
        </motion.div>
        <span>Scroll Down</span>
      </div>
    </section>
  )
}
