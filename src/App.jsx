
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
    const [skillSyncSlide, setSkillSyncSlide] = useState(0)
    const [edukasinSlide, setEdukasinSlide] = useState(0)
      // Projects Scroll Reveal Animation
  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('project-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    projectCards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <main className="portfolio">

      {/* Cosmic Background */}
      <div className="cosmic-bg">
        <div className="nebula nebula-one" />
        <div className="nebula nebula-two" />
        <div className="stars stars-one" />
        <div className="stars stars-two" />
      </div>

      {/* Navbar */}
      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            Arga<span>.</span>
          </a>

          <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a href="mailto:your.email@example.com" className="nav-contact">
            Let's Talk <span>↗</span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-badge">
              <span className="status-dot" />
              Information Systems Student
            </div>

            <p className="hero-greeting">HELLO, WORLD! I'M</p>

            <h1>
              Arga Dwi
              <span>Prastyo.</span>
            </h1>

            <h2>
              Exploring Technology,
              <span> Creating Digital Solutions.</span>
            </h2>

            <p className="hero-description">
              An Information Systems student passionate about technology,
              data analytics, and digital innovation. Turning ideas into
              meaningful digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                Explore My Work <span>↗</span>
              </a>

              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <h3>IT</h3>
                <p>Enthusiast</p>
              </div>

              <div>
                <h3>Web</h3>
                <p>Development</p>
              </div>

              <div>
                <h3>Data</h3>
                <p>Analytics</p>
              </div>
            </div>

          </div>

          {/* Cosmic Universe Visual */}
          <div className="universe">

            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />

            <div className="planet planet-main">
              <div className="planet-surface" />
            </div>

            <div className="planet planet-small" />
            <div className="planet planet-purple" />

            <div className="floating-star star-one">✦</div>
            <div className="floating-star star-two">✧</div>
            <div className="floating-star star-three">✦</div>

            <div className="space-label label-one">
              <span>✦</span> Innovation
            </div>

            <div className="space-label label-two">
              <span>✦</span> Technology
            </div>

            <div className="space-center">
              <div className="center-symbol">✧</div>
              <h3>EXPLORE</h3>
              <p>THE DIGITAL UNIVERSE</p>
            </div>

          </div>

        </div>

        <div className="scroll-indicator">
          <span />
          Scroll to explore
        </div>

      </section>

      {/* About Me Section */}
      <section className="about-section" id="about">

        <div className="about-container">

          {/* Section Heading */}
          <div className="about-heading">
            <p className="section-subtitle">GET TO KNOW ME</p>
            <h2>
              About <span>Me.</span>
            </h2>
            <p>
              A little introduction about my journey in the world of technology.
            </p>
          </div>

          {/* About Content */}
          <div className="about-content">

            {/* Profile Photo */}
            <div className="about-image-wrapper">
              <div className="about-image-glow" />

              <div className="about-image">
                <img
                  src="/images/arga-profile.png"
                  alt="Arga Dwi Prastyo"
                />
              </div>

              <div className="about-image-caption">
                <span className="status-dot" />
                Always Learning, Always Growing
              </div>
            </div>

            {/* About Description */}
            <div className="about-text">

              <p className="about-greeting">
                HELLO THERE! I'M ARGA 👋
              </p>

              <h3>
                Exploring the endless possibilities of
                <span> Technology.</span>
              </h3>

              <p>
                Saya Arga Dwi Prastyo, mahasiswa semester 5 Program Studi
                Sistem Informasi di Universitas Pembangunan Nasional
                "Veteran" Jawa Timur. Saya memiliki ketertarikan pada
                perkembangan teknologi informasi dan bagaimana teknologi
                dapat dimanfaatkan untuk menciptakan solusi yang bermanfaat.
              </p>

              <p>
                Perjalanan saya dimulai dari pendidikan SMK jurusan Teknik
                Komputer dan Jaringan (TKJ). Ketertarikan terhadap jaringan
                komputer dan konfigurasi MikroTik kemudian berkembang menjadi
                rasa ingin tahu terhadap bidang teknologi yang lebih luas.
                Melalui Sistem Informasi, saya mulai mengeksplorasi
                pemrograman, UI/UX Design, Cyber Security, Data Analytics,
                Web Development, hingga analisis sistem dan proses bisnis.
              </p>

              <p>
                Saat ini saya terus mengembangkan kemampuan di bidang
                Data Analytics, Database (SQL), Web Development, dan
                Full-Stack Development. Saya percaya bahwa proses belajar
                dan mencoba hal baru merupakan bagian penting untuk
                berkembang di dunia teknologi.
              </p>

              <div className="about-focus">
                <div>
                  <span>01</span>
                  <p>Technology Enthusiast</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Continuous Learner</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Future AI & ML Explorer</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>
      {/* Skills Section */}
      <section className="skills-section" id="skills">

        <div className="skills-container">

          {/* Heading */}
          <div className="skills-heading">
            <p className="section-subtitle">MY TECHNICAL UNIVERSE</p>

            <h2>
              My <span>Skills.</span>
            </h2>

            <p>
              Technologies I've explored and continue to learn.
            </p>
          </div>

          {/* Cosmic Orbit */}
          <div className="skills-universe">

            <div className="skills-orbit skills-orbit-one" />
            <div className="skills-orbit skills-orbit-two" />
            <div className="skills-orbit skills-orbit-three" />

            {/* Central Planet */}
            <div className="skills-core">
              <div className="skills-core-glow" />
              <span>✧</span>
              <h3>MY</h3>
              <h3>UNIVERSE</h3>
              <p>TECH & INNOVATION</p>
            </div>

            {/* Floating Technology */}
            <div className="tech-node tech-php">
              <strong>PHP</strong>
              <span>Programming</span>
            </div>

            <div className="tech-node tech-js">
              <strong>JS</strong>
              <span>JavaScript</span>
            </div>

            <div className="tech-node tech-python">
              <strong>Py</strong>
              <span>Python</span>
            </div>

            <div className="tech-node tech-laravel">
              <strong>LV</strong>
              <span>Laravel</span>
            </div>

            <div className="tech-node tech-react">
              <strong>⚛</strong>
              <span>React</span>
            </div>

            <div className="tech-node tech-flutter">
              <strong>FL</strong>
              <span>Flutter</span>
            </div>

            <div className="tech-node tech-mysql">
              <strong>SQL</strong>
              <span>MySQL</span>
            </div>

            <div className="tech-node tech-tableau">
              <strong>TB</strong>
              <span>Tableau</span>
            </div>

            <div className="tech-node tech-java">
              <strong>J</strong>
              <span>Java</span>
            </div>

          </div>

          {/* Technology Categories */}
          <div className="skills-categories">

            <div className="skill-category">
              <span className="skill-number">01</span>
              <div>
                <h3>Programming</h3>
                <p>PHP · JavaScript · Python · Java</p>
              </div>
            </div>

            <div className="skill-category">
              <span className="skill-number">02</span>
              <div>
                <h3>Framework & Development</h3>
                <p>Laravel · React · Flutter</p>
              </div>
            </div>

            <div className="skill-category">
              <span className="skill-number">03</span>
              <div>
                <h3>Database</h3>
                <p>MySQL · Firebase</p>
              </div>
            </div>

            <div className="skill-category">
              <span className="skill-number">04</span>
              <div>
                <h3>Data Analytics</h3>
                <p>Tableau · Excel · Google Colab</p>
              </div>
            </div>

            <div className="skill-category">
              <span className="skill-number">05</span>
              <div>
                <h3>Development Tools</h3>
                <p>VS Code · Git · GitHub · Figma</p>
              </div>
            </div>

          </div>

          {/* Learning Statement */}
          <div className="skills-note">
            <span>✦</span>
            Always learning, exploring, and improving my technical skills.
          </div>

        </div>

      </section>
            {/* PROJECTS SECTION */}
      <section className="projects-section" id="projects">
        <div className="projects-container">

          <div className="projects-heading">
            <p className="section-subtitle">SELECTED CREATIONS</p>
            <h2>
              My <span>Projects.</span>
            </h2>
            <p>
              A collection of projects where ideas turn into digital experiences.
            </p>
          </div>

          {/* SKILLSYNC */}
          <article className="project-card">
            <div className="project-info">
              <span className="project-label">01 / WEB PLATFORM</span>
              <h3>Skill<span>Sync.</span></h3>
              <p>
                SkillSync merupakan platform pengembangan karier yang dirancang
                untuk membantu pengguna mengenali potensi diri, mengeksplorasi
                minat dan bakat, serta menemukan arah pengembangan karier.
              </p>

              <div className="project-tech">
                <span>Laravel</span>
                <span>MySQL</span>
                <span>Tailwind CSS</span>
                <span>Figma</span>
              </div>

              <div className="project-description">
                <span>PROJECT TYPE</span>
                <p>Website Development & Mobile UI Prototype</p>
              </div>
            </div>

            <div className="project-gallery">
              <div className="gallery-top">
                <span>SKILLSYNC / PREVIEW</span>
                <span>{String(skillSyncSlide + 1).padStart(2, '0')} / 05</span>
              </div>

              <div className="gallery-image skillsync-gallery">
                <img
                  key={skillSyncSlide}
                  src={`/images/projects/skillsync-${skillSyncSlide + 1}.png`}
                  alt={`SkillSync preview ${skillSyncSlide + 1}`}
                />
              </div>

              <div className="gallery-controls">
                <button
                  onClick={() =>
                    setSkillSyncSlide((prev) => (prev - 1 + 5) % 5)
                  }
                  aria-label="Previous SkillSync image"
                >
                  ←
                </button>

                <div className="gallery-dots">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <button
                      key={index}
                      className={skillSyncSlide === index ? 'active' : ''}
                      onClick={() => setSkillSyncSlide(index)}
                      aria-label={`Show SkillSync image ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setSkillSyncSlide((prev) => (prev + 1) % 5)
                  }
                  aria-label="Next SkillSync image"
                >
                  →
                </button>
              </div>
            </div>
          </article>

          {/* EDUKASIN */}
          <article className="project-card project-card-reverse">
            <div className="project-info">
              <span className="project-label">02 / MOBILE APPLICATION</span>
              <h3>EDUKA<span>SIN.</span></h3>
              <p>
                EDUKASIN merupakan aplikasi edukasi yang berfokus pada
                pengenalan minat dan bakat. Aplikasi ini menyediakan fitur
                eksplorasi, kuis, forum diskusi, serta konsultasi dengan mentor
                untuk mendukung proses pengembangan diri pengguna.
              </p>

              <div className="project-tech">
                <span>Flutter</span>
                <span>Firebase</span>
                <span>Figma</span>
              </div>

              <div className="project-description">
                <span>PROJECT TYPE</span>
                <p>Mobile Application UI Design</p>
              </div>
            </div>

            <div className="project-gallery">
              <div className="gallery-top">
                <span>EDUKASIN / PREVIEW</span>
                <span>{String(edukasinSlide + 1).padStart(2, '0')} / 10</span>
              </div>

              <div className="gallery-image edukasin-gallery">
                <img
                  key={edukasinSlide}
                  src={`/images/projects/edukasin-${edukasinSlide + 1}.png`}
                  alt={`EDUKASIN preview ${edukasinSlide + 1}`}
                />
              </div>

              <div className="gallery-controls">
                <button
                  onClick={() =>
                    setEdukasinSlide((prev) => (prev - 1 + 10) % 10)
                  }
                  aria-label="Previous EDUKASIN image"
                >
                  ←
                </button>

                <div className="gallery-dots">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <button
                      key={index}
                      className={edukasinSlide === index ? 'active' : ''}
                      onClick={() => setEdukasinSlide(index)}
                      aria-label={`Show EDUKASIN image ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setEdukasinSlide((prev) => (prev + 1) % 10)
                  }
                  aria-label="Next EDUKASIN image"
                >
                  →
                </button>
              </div>
            </div>
          </article>

          <div className="projects-footer">
            <span>✦</span>
            More ideas, more experiences, more possibilities.
          </div>

        </div>
      </section>
      
      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <div className="contact-container">

          <div className="contact-content">
            <p className="section-subtitle">GET IN TOUCH</p>

            <h2>
              Let's <span>Connect.</span>
            </h2>

            <p className="contact-description">
              Have an idea, project, or opportunity?
              I'm always open to connecting, sharing ideas,
              and creating something meaningful together.
            </p>

            <div className="contact-links">

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/adpwell_/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-icon">
                  <span>◎</span>
                </div>

                <div className="contact-link-info">
                  <h3>Instagram</h3>
                  <p>@adpwell_</p>
                </div>

                <span className="contact-arrow">↗</span>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/24082010035-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-icon">
                  <span>⌘</span>
                </div>

                <div className="contact-link-info">
                  <h3>GitHub</h3>
                  <p>24082010035-dev</p>
                </div>

                <span className="contact-arrow">↗</span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:argadwiprast6@gmail.com"
                className="contact-link"
              >
                <div className="contact-icon">
                  <span>✉</span>
                </div>

                <div className="contact-link-info">
                  <h3>Email</h3>
                  <p>argadwiprast6@gmail.com</p>
                </div>

                <span className="contact-arrow">↗</span>
              </a>

            </div>

            <a
              href="mailto:argadwiprast6@gmail.com"
              className="contact-button"
            >
              Let's Work Together <span>↗</span>
            </a>
          </div>

          {/* COSMIC VISUAL */}
          <div className="contact-universe">
            <div className="contact-orbit contact-orbit-one" />
            <div className="contact-orbit contact-orbit-two" />

            <div className="contact-planet">
              <span>✧</span>
              <h3>CONNECT</h3>
              <p>BEYOND LIMITS</p>
            </div>

            <div className="contact-star contact-star-one">✦</div>
            <div className="contact-star contact-star-two">✧</div>
            <div className="contact-star contact-star-three">✦</div>
          </div>

        </div>

        <footer className="portfolio-footer">
          <p>© 2026 Arga Dwi Prastyo. All rights reserved.</p>
          <p>Designed & Built with curiosity ✦</p>
        </footer>

      </section>

    </main>
  )
}

export default App
