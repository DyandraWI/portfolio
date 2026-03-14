import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiBriefcase, HiAcademicCap } from 'react-icons/hi'
import './Experience.css'

const experiences = [
  {
    type: 'education',
    title: 'Undergraduate IT Student',
    company: 'President University',
    period: '2025 - Now',
    description: 'Studying computer science with focus on software engineering, algorithms, and web technologies.',
    highlights: ['GPA: 3.7/4.0', 'PUFA Compsci 2026', 'COMPSPHERE 2026'],
  },
  {
    type: 'work',
    title: 'Internship IT Support',
    company: 'PT Pindo Deli Pulp and Paper Mills',
    period: '1 Juli - 1 Agustus 2024',
    description: 'Responsible for providing technical assistance and support to end-users, troubleshooting hardware and software issues, and maintaining IT systems.',
    highlights: ['Troubleshooting hardware and software issues', 'Provided technical support to end-users', 'Maintained IT systems Industrial'],
  },
  {
    type: 'education',
    title: 'High School Diploma',
    company: 'SMK Negeri 1 Karawang',
    period: '2022 - 2025',
    description: 'Major in Software Engineering with focus on programming, algorithms, and web technologies.',
    highlights: ['Excellent Academic Achievement', 'DBS Coding Camp Cohort 2025', 'LivWell: Habit Tracker'],
  },
]

export default function Experience() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section className="experience section" id="experience" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="experience__timeline">
          <div className="experience__timeline-line" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`experience__item ${i % 2 === 0 ? 'experience__item--left' : 'experience__item--right'}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
            >
              <div className="experience__node">
                {exp.type === 'work' ? <HiBriefcase size={16} /> : <HiAcademicCap size={16} />}
              </div>

              <div className="experience__card glass-card">
                <div className="experience__card-header">
                  <span className="experience__period">{exp.period}</span>
                  <span className={`experience__type-badge ${exp.type === 'education' ? 'experience__type-badge--edu' : ''}`}>
                    {exp.type === 'work' ? 'Work' : 'Education'}
                  </span>
                </div>
                <h3 className="experience__title">{exp.title}</h3>
                <p className="experience__company">{exp.company}</p>
                <p className="experience__desc">{exp.description}</p>
                <div className="experience__highlights">
                  {exp.highlights.map(h => (
                    <span key={h} className="experience__highlight">{h}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
