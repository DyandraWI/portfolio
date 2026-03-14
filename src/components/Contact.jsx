import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'
import './Contact.css'

const contactInfo = [
  { icon: HiMail, label: 'Email', value: 'dyandra.islamy96@gmail.com', href: 'mailto:dyandra.islamy96@gmail.com' },
  { icon: HiLocationMarker, label: 'Location', value: 'Bekasi, Indonesia', href: null },
  { icon: HiPhone, label: 'Phone', value: '+62 821 3456 1960', href: 'tel:+6281234567890' },
]

const socials = [
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/DyandraWI', color: '#ffffff' },
  { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://www.linkedin.com/in/dyandra-wahyu-islamy/', color: '#0A66C2' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/dyndraisla/', color: '#E4405F' },
]

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [focused, setFocused] = useState(null)

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = formState
    const body = `Hi Dyandra,\n\nName: ${name}\nEmail: ${email}\n\n${message}`
    const mailtoLink = `mailto:dyandra.islamy96@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink, '_blank')
    setFormState({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="contact__subtitle">
            Have a project in mind or just want to say hi? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact__info-cards">
              {contactInfo.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    className="contact__info-card glass-card"
                    whileHover={{ scale: 1.03, y: -2 }}
                  >
                    <div className="contact__info-icon">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="contact__info-label">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="contact__info-value">{item.value}</a>
                      ) : (
                        <p className="contact__info-value">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="contact__socials">
              <p className="contact__socials-label">Find me on</p>
              <div className="contact__socials-links">
                {socials.map(s => {
                  const Icon = s.icon
                  return (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact__social-link"
                      aria-label={s.label}
                      whileHover={{ scale: 1.15, y: -3 }}
                      style={{ '--social-color': s.color }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact__form glass-card"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="contact__form-row">
              <div className={`contact__input-group ${focused === 'name' || formState.name ? 'contact__input-group--focused' : ''}`}>
                <label htmlFor="name" className="contact__label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  className="contact__input"
                  required
                />
              </div>
              <div className={`contact__input-group ${focused === 'email' || formState.email ? 'contact__input-group--focused' : ''}`}>
                <label htmlFor="email" className="contact__label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className="contact__input"
                  required
                />
              </div>
            </div>

            <div className={`contact__input-group ${focused === 'subject' || formState.subject ? 'contact__input-group--focused' : ''}`}>
              <label htmlFor="subject" className="contact__label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                onFocus={() => setFocused('subject')}
                onBlur={() => setFocused(null)}
                className="contact__input"
                required
              />
            </div>

            <div className={`contact__input-group ${focused === 'message' || formState.message ? 'contact__input-group--focused' : ''}`}>
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                className="contact__input contact__textarea"
                rows="5"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary contact__submit-btn">
              Send Message
              <HiMail size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
