import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import './Projects.css'
import project1Img from '../assets/project1.png'
import project2Img from '../assets/project2.png'
import project3Img from '../assets/project3.png'

/*
  CARA MENAMBAHKAN PROJECT:
  1. Taruh screenshot project di src/assets/projects/ (contoh: project1.png)
  2. Import image-nya di bawah ini
  3. Tambahkan object baru di array `projects`
  4. Isi github dengan link repo kamu, live dengan link demo (opsional)
*/

// Import gambar project kamu di sini:
// import project1Img from '../assets/projects/project1.png'
// import project2Img from '../assets/projects/project2.png'

const projects = [
  {
    id: 1,
    title: 'FinFlux: Money Manager',
    description: 'FinFlux is a money manager application that helps users track their income and expenses, set budgets, and visualize their financial data.',
    image: project1Img,
    tags: ['React', 'Next.js', 'PostgreSQL', 'Prisma', 'TailwindCSS', 'OpenAI API'],
    github: 'https://github.com/DyandraWI/FinFlux-Money_Manager.git',
    live: '',
  },
  {
    id: 2,
    title: 'RailFlow: Modern Train Ticket Booking System',
    description: 'KAI Remake Project Website, created based on a case study from the COMPSPHERE 2025 Hackathon',
    image: project2Img, // Ganti null dengan: project2Img
    tags: ['React', 'Javascript', 'TailwindCSS', 'Node.js'],
    github: 'https://github.com/DyandraWI/Catalna_Hackaton-KAI-Remake.git',
    live: '',
  },
  {
    id: 3,
    title: 'LivWell: Habit Tracker',
    description: 'LivWell, a React-based habit tracker. Led feature planning and UI/UX decisions, built interactive dashboards, implemented real-time habit management with modals and animations, and ensured a smooth, user-centered experience',
    image: project3Img,
    tags: ['React', 'Javascript', 'TailwindCSS', 'Express.js'],
    github: 'https://github.com/DyandraWI/LivWell-ClientSide.git',
    live: '',
  },
]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="project-card glass-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <div className="project-card__image">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-card__img"
          />
        ) : (
          <div className="project-card__image-placeholder">
            <HiCode size={40} />
            <span>{project.title.charAt(0)}</span>
          </div>
        )}
        <div className="project-card__overlay">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__icon-btn" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-card__icon-btn" aria-label="Live Demo">
              <HiExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__footer">
          <div className="project-card__tags">
            {project.tags.map(tag => (
              <span key={tag} className="project-card__tag">{tag}</span>
            ))}
          </div>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__github-link">
              <FaGithub size={16} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section className="projects section" id="projects" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Works</span>
          </h2>
          <p className="projects__subtitle">
            Here are some of the projects I've worked on recently.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
