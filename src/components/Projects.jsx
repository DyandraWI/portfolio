import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import './Projects.css'

const categories = ['All', 'Full Stack', 'Frontend', 'Backend']

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with payment integration, real-time inventory tracking, and an admin dashboard.',
    image: null,
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'Full Stack',
    github: '#',
    live: '#',
    color: '#00f0ff',
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'Real-time chat application powered by AI with natural language processing and smart reply suggestions.',
    image: null,
    tags: ['Next.js', 'Python', 'WebSocket', 'OpenAI'],
    category: 'Full Stack',
    github: '#',
    live: '#',
    color: '#a855f7',
  },
  {
    id: 3,
    title: 'Dashboard Analytics',
    description: 'Interactive data visualization dashboard with real-time charts, customizable widgets, and export capabilities.',
    image: null,
    tags: ['React', 'D3.js', 'TypeScript', 'TailwindCSS'],
    category: 'Frontend',
    github: '#',
    live: '#',
    color: '#f472b6',
  },
  {
    id: 4,
    title: 'REST API Gateway',
    description: 'Scalable microservices API gateway with rate limiting, caching, authentication, and comprehensive logging.',
    image: null,
    tags: ['Node.js', 'Express', 'Redis', 'Docker'],
    category: 'Backend',
    github: '#',
    live: '#',
    color: '#22c55e',
  },
  {
    id: 5,
    title: 'Social Media App',
    description: 'Feature-rich social media platform with real-time feeds, stories, direct messaging, and content moderation.',
    image: null,
    tags: ['React', 'GraphQL', 'PostgreSQL', 'AWS'],
    category: 'Full Stack',
    github: '#',
    live: '#',
    color: '#f59e0b',
  },
  {
    id: 6,
    title: 'Task Management Tool',
    description: 'Kanban-style project management tool with drag-and-drop, team collaboration, and automated workflows.',
    image: null,
    tags: ['Vue.js', 'Firebase', 'TypeScript'],
    category: 'Frontend',
    github: '#',
    live: '#',
    color: '#06b6d4',
  },
]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="project-card glass-card"
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="project-card__image" style={{ '--card-accent': project.color }}>
        <div className="project-card__image-placeholder">
          <HiCode size={40} />
          <span>{project.title.charAt(0)}</span>
        </div>
        <div className="project-card__overlay">
          <a href={project.github} className="project-card__icon-btn" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href={project.live} className="project-card__icon-btn" aria-label="Live Demo">
            <HiExternalLink size={20} />
          </a>
        </div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

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
        </motion.div>

        <motion.div
          className="projects__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`projects__filter-btn ${activeCategory === cat ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div className="projects__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
