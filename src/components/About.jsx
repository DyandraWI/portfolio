import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaDatabase,
} from 'react-icons/fa'
import {
  SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss,
  SiMongodb, SiPostgresql, SiPhp, SiFigma,
} from 'react-icons/si'
import './About.css'

const skills = [
  { name: 'React', icon: FaReact, color: '#61DAFB', category: 'frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', category: 'frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'frontend' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'frontend' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', category: 'backend' },
  { name: 'Python', icon: FaPython, color: '#3776AB', category: 'backend' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4', category: 'backend' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'backend' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'backend' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED', category: 'devops' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032', category: 'devops' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', category: 'design' },
  { name: 'Databases', icon: FaDatabase, color: '#00f0ff', category: 'backend' },
]

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '25+', label: 'Projects Completed' },
  { number: '10+', label: 'Technologies' },
  { number: '∞', label: 'Cups of Coffee' },
]

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Passionate about creating <span className="gradient-text">digital excellence</span>
          </h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__bio"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about__bio-card glass-card">
              <div className="about__bio-header">
                <div className="about__bio-dots">
                  <span className="about__bio-dot about__bio-dot--red" />
                  <span className="about__bio-dot about__bio-dot--yellow" />
                  <span className="about__bio-dot about__bio-dot--green" />
                </div>
                <span className="about__bio-filename">about_me.tsx</span>
              </div>
              <div className="about__bio-content">
                <p className="about__bio-line">
                  <span className="about__bio-keyword">const</span>{' '}
                  <span className="about__bio-var">developer</span>{' '}
                  <span className="about__bio-operator">=</span>{' '}
                  <span className="about__bio-brace">{'{'}</span>
                </p>
                <p className="about__bio-line about__bio-line--indent">
                  <span className="about__bio-key">passion</span>:{' '}
                  <span className="about__bio-string">"Building scalable web applications"</span>,
                </p>
                <p className="about__bio-line about__bio-line--indent">
                  <span className="about__bio-key">focus</span>:{' '}
                  <span className="about__bio-string">"Clean code & great user experience"</span>,
                </p>
                <p className="about__bio-line about__bio-line--indent">
                  <span className="about__bio-key">approach</span>:{' '}
                  <span className="about__bio-string">"Full-stack from frontend to deployment"</span>,
                </p>
                <p className="about__bio-line about__bio-line--indent">
                  <span className="about__bio-key">loves</span>:{' '}
                  <span className="about__bio-string">"Turning complex problems into simple solutions"</span>,
                </p>
                <p className="about__bio-line">
                  <span className="about__bio-brace">{'}'}</span>;
                </p>
              </div>
            </div>

            <p className="about__description">
              I'm a Full Stack Developer who thrives on building end-to-end web applications.
              With a strong foundation in both frontend and backend technologies, I create
              seamless digital experiences that are not only visually stunning but also
              performant and scalable.
            </p>
          </motion.div>

          <motion.div
            className="about__skills"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="about__skills-title">Tech Stack</h3>
            <div className="about__skills-grid">
              {skills.map((skill, i) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    className="about__skill-item glass-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    whileHover={{ scale: 1.08, y: -4 }}
                  >
                    <Icon size={24} style={{ color: skill.color }} />
                    <span className="about__skill-name">{skill.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about__stats"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="about__stat glass-card"
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <span className="about__stat-number gradient-text">{stat.number}</span>
              <span className="about__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
