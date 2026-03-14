import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Reveal on scroll animation for .reveal elements
    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach(el => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => el.classList.add('active'),
      })
    })

    // Section divider glow animation
    gsap.utils.toArray('.section').forEach((section) => {
      gsap.fromTo(
        section,
        { '--section-progress': 0 },
        {
          '--section-progress': 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 0.5,
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="app">
      <div className="app__noise" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
