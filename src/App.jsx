import { useState, useEffect } from 'react'
import { 
  Menu, X, MapPin, GraduationCap, Mail, Phone, Trophy, 
  TrendingUp, Code2, Coffee, Terminal, Cpu, Database, Binary, PieChart, 
  BarChart2, FileSpreadsheet, Table, FileCode, Palette, Globe, Flame, Leaf, 
  GitBranch, Zap, Wrench, Sparkles, ExternalLink, Compass, Search, Eye, 
  Download, Star, Award, Sprout, Play, Bot, Users, FileText, CheckCircle2, 
  CloudRain, ShoppingBag, Laptop, Calendar
} from 'lucide-react'
import profileImg from './assets/profile.png'
import agroiqHome from './assets/agroiq-home.jpg'
import agroiqCrop from './assets/agroiq-crop-monitoring.jpg'
import agroiqRec from './assets/agroiq-crop-recommendation.jpg'
import agroiqWeather from './assets/agroiq-weather.png'
import agroiqDisease from './assets/agroiq-disease.jpg'
import attendanceImg from './assets/attendance-dashboard.png'
import ecommerceImg from './assets/ecommerce-dashboard.png'
import novitechCertificate from './assets/novitech_certificate.jpg'
import netflix1 from './assets/netflix1.png'
import netflix2 from './assets/netflix2.jpeg'
import netflix3 from './assets/netflix3.jpeg'
import tHome from './assets/t_home.jpeg'
import tAnalysisHome from './assets/T_analsyishomepage.jpeg'
import tUpload from './assets/t_uploadpage.jpeg'
import tResult from './assets/t_result.jpeg'
import tFinalResult from './assets/T_finalresult.jpeg'
import tWeather from './assets/T_weather.jpeg'
import tWeather2 from './assets/T_weather2.jpeg'
import tCalenderHome from './assets/t_calenderhomepage.jpeg'
import tCalender from './assets/caledner.jpeg'
import tMarket from './assets/terrcemarkert.jpeg'
import tMarket2 from './assets/tercemarket2.jpeg'
import tShopping from './assets/shopingpage.jpeg'
import resumePdf from './assets/ABINAYA-RESUME.pdf'
import './App.css'

const Linkedin = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const Github = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [agroLightbox, setAgroLightbox] = useState(false)
  const [attendanceLightbox, setAttendanceLightbox] = useState(false)
  const [ecommerceLightbox, setEcommerceLightbox] = useState(false)
  const [novitechLightbox, setNovitechLightbox] = useState(false)
  const [netflixLightbox, setNetflixLightbox] = useState(false)
  const [terraceiqLightbox, setTerraceiqLightbox] = useState(false)
  const [activeFeatureTab, setActiveFeatureTab] = useState('analyzer')
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const agroImages = [
    { src: agroiqHome, alt: 'AGRO IQ — Home Page', desc: 'AI-powered agriculture dashboard with smart farming insights and drone monitoring' },
    { src: agroiqCrop, alt: 'Crop Monitoring & Yield Analytics', desc: 'Interactive crop monitoring with yield analytics, recommendations, and health tracking' },
    { src: agroiqRec, alt: 'Smart Crop Recommendation', desc: 'ML-based crop recommendation engine using soil, weather, and seasonal data' },
    { src: agroiqDisease, alt: 'Detect Plant Disease', desc: 'Computer vision-powered leaf disease detection with organic cure suggestions' },
    { src: agroiqWeather, alt: 'Agro AI Weather Dashboard', desc: 'Real-time weather forecasting with temperature, humidity, and 3-day predictions' },
  ]
  const netflixImages = [
    { src: netflix1, alt: 'Netflix-Inspired Landing Page — Home Section', desc: 'Full-screen landing page layout with branded Netflix styling and a clean, responsive header.' },
    { src: netflix2, alt: 'Email Subscription & Promo Section', desc: 'Email subscription form and customized responsive language selector, optimized for user interaction.' },
    { src: netflix3, alt: 'Promotional Features & Mobile View', desc: 'Fully responsive promo blocks showcasing features, styled entirely with HTML and CSS.' },
  ]

  const terraceiqTabs = {
    analyzer: {
      title: 'Terrace Analyzer',
      icon: Cpu,
      desc: 'Allows users to upload an image of their terrace and input size/location details. The system analyzes factors like sunlight availability, land conditions, and seasonal climate to generate layout designs.',
      bullets: [
        'Advanced computer vision layout analysis',
        'Crop recommendation based on sunlight & location',
        'Automatic layout suggestions with optimal plant counts and spacing'
      ],
      tech: ['Python', 'Flask', 'OpenCV', 'NumPy', 'Pillow'],
      images: [
        { src: tHome, caption: 'TerraceIQ landing page' },
        { src: tAnalysisHome, caption: 'Terrace upload & analysis dashboard' },
        { src: tUpload, caption: 'Image upload interface' },
        { src: tResult, caption: 'Layout generation output' },
        { src: tFinalResult, caption: 'Final layout with optimized spacing' }
      ]
    },
    weather: {
      title: 'Weather-Based Farming',
      icon: CloudRain,
      desc: 'Retrieves live weather data to trigger smart watering alerts. It guides users on when and how much to water, preventing overwatering or underwatering, and promoting water conservation.',
      bullets: [
        'Real-time weather fetching & analysis',
        'Automated watering recommendation alerts',
        'Prevents water wastage and root rot'
      ],
      tech: ['Python Requests', 'Flask API', 'jQuery', 'Bootstrap'],
      images: [
        { src: tWeather, caption: 'Smart watering alert dashboard' },
        { src: tWeather2, caption: 'Watering calendar & historical logs' }
      ]
    },
    calendar: {
      title: 'Plant Care Calendar',
      icon: Calendar,
      desc: 'Generates a personalized, interactive monthly plant care calendar based on crop species and current season. Guides users on scheduling essential tasks.',
      bullets: [
        'Dynamic monthly activity planner',
        'Tracks tasks: sowing, watering, fertilizing, pruning, and harvesting',
        'Interactive checklist to monitor plant health and actions'
      ],
      tech: ['SQLite', 'Flask Router', 'jQuery Calendar', 'CSS Grid'],
      images: [
        { src: tCalenderHome, caption: 'Activity calendar home' },
        { src: tCalender, caption: 'Task checklist and calendar view' }
      ]
    },
    market: {
      title: 'Terrace Market',
      icon: ShoppingBag,
      desc: 'A P2P local marketplace. Integrates a shop to purchase gardening equipment & materials, and a community marketplace for neighbors to sell home-grown organic produce.',
      bullets: [
        'Secure user registration and item listing',
        'Gardening supplier product catalog',
        'Peer-to-peer neighborhood organic marketplace'
      ],
      tech: ['Flask-Login', 'SQLite Relational Schema', 'Bootstrap Cards'],
      images: [
        { src: tMarket, caption: 'Local organic produce marketplace' },
        { src: tMarket2, caption: 'Product items & details' },
        { src: tShopping, caption: 'Gardening product store catalog' }
      ]
    }
  }

  const handleTabChange = (tabKey) => {
    setActiveFeatureTab(tabKey)
    setActiveImageIndex(0)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['home','about','skills','projects','internship','education','certifications','achievements','contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 200) { setActiveSection(id); break }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when any lightbox is open
  useEffect(() => {
    const anyOpen = agroLightbox || attendanceLightbox || ecommerceLightbox || novitechLightbox || netflixLightbox || terraceiqLightbox
    document.body.style.overflow = anyOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [agroLightbox, attendanceLightbox, ecommerceLightbox, novitechLightbox, netflixLightbox, terraceiqLightbox])

  const navClick = () => setMenuOpen(false)

  return (
    <>
      {/* ========== NAVBAR ========== */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <a href="#home" className="nav-logo">Abinaya</a>
          <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {['Home','About','Skills','Projects','Internship','Education','Contact'].map(item => (
              <li key={item}><a href={`#${item.toLowerCase()}`} className={activeSection === item.toLowerCase() ? 'active' : ''} onClick={navClick}>{item}</a></li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section id="home" className="hero-section">
        <div className="hero-bg-effects">
          <div className="orb"></div><div className="orb"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge"><span className="dot"></span> Open to Work</div>
            <h1>Hello, I'm<br /><span className="gradient-text">Abinaya B</span></h1>
            <p className="hero-subtitle">And I'm an <span className="typed">Aspiring Data Analyst</span></p>
            <div className="hero-tags">
              <span className="tag">BCA Student</span>
              <span className="tag">Tableau</span>
              <span className="tag">Power BI</span>
              <span className="tag">Python</span>
              <span className="tag">Excel</span>
            </div>
            <p style={{marginBottom: '28px', lineHeight: 1.8}}>
              BCA Graduate passionate about Data Analytics, Software Development, and Web Development. 
              I enjoy turning data into insights and building innovative digital solutions.
            </p>
            <div className="hero-buttons">
              <a href="https://linkedin.com/in/abinaya3110" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com/abinayabaskar31" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Github size={18} /> GitHub
              </a>
              <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <FileText size={18} /> Resume
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-photo-wrapper">
              <img src={profileImg} alt="Abinaya B" className="hero-photo" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="hero-stats">
        {[
          { num: '5+', label: 'Projects Completed' },
          { num: '5+', label: 'Technologies Mastered' },
          { num: '8.5', label: 'CGPA' },
          { num: '6', label: 'Certifications' },
        ].map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-number">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ========== ABOUT ========== */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
            <p>Getting to know the person behind the data</p>
          </div>
          <div className="about-grid">
            <div className="about-image-card">
              <img src={profileImg} alt="Abinaya B" />
              <div className="about-info-grid">
                <div className="about-info-item"><MapPin size={18} /> Kumbakonam, Tamil Nadu, India</div>
                <div className="about-info-item"><GraduationCap size={18} /> BCA Student</div>
                <div className="about-info-item"><Mail size={18} /> abinayabaskar3110@gmail.com</div>
                <div className="about-info-item"><Phone size={18} /> +91 81489 89036</div>
              </div>
            </div>
            <div className="about-text">
              <h3>A Technology Enthusiast & Aspiring Professional <Zap size={24} /></h3>
              <p>
                I am <strong>Abinaya B</strong>, a BCA graduate from <strong>SASTRA University</strong> with a strong interest in <strong>Data Analytics, Software Development, and Web Development</strong>.
              </p>
              <p>
                I enjoy analyzing data, creating interactive dashboards, and developing user-friendly websites and applications that solve real-world problems. My technical skills include <strong>Python, Java, C#, SQL, Tableau, Power BI, HTML, CSS, MySQL, and GitHub</strong>.
              </p>
              <p>
                Through academic projects and internship experience, I have worked on data visualization, reporting, database management, and software development. I contributed to projects such as an E-commerce Sales Dashboard, Attendance Analytics Dashboard, and TerraceIQ, a smart gardening analytics platform.
              </p>
              <p>
                I was also part of the team that won <strong>1st Prize in the AGRO IQ AI Technical Competition</strong>. I am eager to begin my professional career, apply my technical knowledge, and continue learning while contributing to innovative projects and organizational growth.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon"><Trophy size={20} /></div>
                  <div className="highlight-text"><div className="h-number">1st Prize</div><div className="h-label">AGRO IQ AI</div></div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon"><TrendingUp size={20} /></div>
                  <div className="highlight-text"><div className="h-number">3+</div><div className="h-label">Dashboards Built</div></div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon"><Code2 size={20} /></div>
                  <div className="highlight-text"><div className="h-number">5+</div><div className="h-label">Tech Stack</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SKILLS ========== */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-title">
            <h2>Skills & Technologies</h2>
            <p>Tools and technologies I work with</p>
          </div>
          <div className="skills-grid">
            {[
              { icon: Code2, title: 'Languages', items: [
                { icon: Code2, name: 'C' },
                { icon: Code2, name: 'C++' },
                { icon: Coffee, name: 'Java' },
                { icon: Terminal, name: 'Python' },
                { icon: Cpu, name: 'C#.NET' },
                { icon: Database, name: 'SQL' },
                { icon: Binary, name: 'DSA' },
              ]},
              { icon: TrendingUp, title: 'Data Tools', items: [
                { icon: PieChart, name: 'Tableau' },
                { icon: BarChart2, name: 'Power BI' },
                { icon: FileSpreadsheet, name: 'Excel' },
                { icon: Table, name: 'Pandas' },
                { icon: Binary, name: 'NumPy' },
              ]},
              { icon: Laptop, title: 'Frontend', items: [
                { icon: FileCode, name: 'HTML' },
                { icon: Palette, name: 'CSS' },
                { icon: Globe, name: 'JavaScript' },
              ]},
              { icon: Database, title: 'Databases', items: [
                { icon: Database, name: 'MySQL' },
                { icon: Flame, name: 'Firebase' },
                { icon: Leaf, name: 'MongoDB' },
              ]},
              { icon: Wrench, title: 'Dev Tools', items: [
                { icon: GitBranch, name: 'Git' },
                { icon: Github, name: 'GitHub' },
                { icon: Terminal, name: 'VS Code' },
                { icon: Zap, name: 'Vite' },
              ]},
            ].map((cat, i) => (
              <div className="skill-category" key={i}>
                <div className="skill-cat-header">
                  <div className="skill-cat-icon"><cat.icon size={24} /></div>
                  <h3 className="skill-cat-title">{cat.title}</h3>
                </div>
                <div className="skill-items">
                  {cat.items.map((s, j) => (
                    <span className="skill-badge" key={j}><s.icon size={16} /> {s.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROJECTS ========== */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-title">
            <h2>Featured Projects</h2>
            <p>Real-world applications and data visualizations</p>
          </div>
          <div className="projects-grid">
            {/* AGRO IQ */}
            <div className="project-card project-card--featured">
              <div className="project-image project-clickable" onClick={() => setAgroLightbox(true)}>
                <img src={agroiqHome} alt="AGRO IQ — Home Page" />
                <div className="project-award"><Trophy size={16} /> 1st Prize — ₹2,000</div>
                <div className="image-click-hint">
                  <Sparkles size={16} /> Click to view all screenshots
                </div>
              </div>
              <div className="project-body">
                <h3><Sprout size={24} /> AGRO IQ — AI-Powered Smart Agriculture</h3>
                <p>
                  An AI-powered agriculture platform empowering farmers with data-driven crop intelligence.
                  Features crop recommendation via trained ML models, yield analytics with interactive
                  visualizations, crop health monitoring using image processing, and real-time weather insights.
                  Built with Abinaya B (Data Analytics) & my team member (Frontend & Backend).
                </p>
                <div className="project-tech">
                  {['Python', 'Machine Learning', 'OpenCV', 'NumPy', 'SQLite', 'Data Analytics'].map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href="https://github.com/KRISH-FSD/zyra-ecom" target="_blank" rel="noopener noreferrer" className="project-link primary">
                    <Github size={16} /> GitHub
                  </a>
                  <a href="https://krish31jerry-agro-iq-ai.hf.space/cropandyeilds" target="_blank" rel="noopener noreferrer" className="project-link secondary">
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </div>

            {/* TerraceIQ */}
            <div className="project-card project-card--featured">
              <div className="project-image project-clickable" onClick={() => setTerraceiqLightbox(true)}>
                <img src={tHome} alt="TerraceIQ — AI-Based Smart Gardening" />
                <div className="project-award"><GraduationCap size={16} /> Final Year Project (Team)</div>
                <div className="image-click-hint">
                  <Compass size={16} /> Click to explore 4 main features &amp; screenshots
                </div>
              </div>
              <div className="project-body">
                <h3><Sprout size={24} /> TerraceIQ — AI-Based Smart Gardening System</h3>
                <p>
                  A smart gardening platform designed to make terrace farming simple, efficient, and sustainable. 
                  Allows users to upload an image of their terrace for layout and spacing analysis, features live 
                  weather-based watering alerts, provides monthly plant care calendars, and hosts an integrated P2P 
                  local produce market and shopping interface.
                </p>
                <div className="project-tech">
                  {['Python', 'Flask', 'OpenCV', 'NumPy', 'SQLite', 'Bootstrap', 'jQuery', 'Data Analytics'].map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  <button className="project-link primary" onClick={() => setTerraceiqLightbox(true)}>
                    <Compass size={16} /> Explore Features
                  </button>
                  <a href="https://github.com/abinayab" target="_blank" rel="noopener noreferrer" className="project-link secondary">
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Attendance Dashboard */}
            <div className="project-card">
              <div className="project-image project-clickable" onClick={() => setAttendanceLightbox(true)}>
                <img src={attendanceImg} alt="Attendance Overview Dashboard" />
                <div className="image-click-hint">
                  <Search size={16} /> Click to view full dashboard
                </div>
              </div>
              <div className="project-body">
                <h3><BarChart2 size={24} /> Attendance Overview Dashboard</h3>
                <p>
                  Interactive Power BI dashboard to analyze and monitor employee attendance.
                  Shows total/present/absent employees, attendance by team &amp; manager,
                  gender distribution, and job level breakdown with smart filters for
                  training model, senior manager, team, and job level.
                </p>
                <div className="project-tech">
                  {['Power BI', 'Data Modeling', 'DAX', 'Dashboard Design'].map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href="https://www.linkedin.com/posts/abinaya3110_powerbi-dataanalytics-hranalytics-activity-7406936867222257665-TlMb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwkZ48B1VEhs3KU20xH82PFLFFZ4JaNlKY" target="_blank" rel="noopener noreferrer" className="project-link primary">
                    <Linkedin size={16} /> View on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* E-commerce Sales Dashboard */}
            <div className="project-card">
              <div className="project-image project-clickable" onClick={() => setEcommerceLightbox(true)}>
                <img src={ecommerceImg} alt="E-commerce Sales Dashboard" />
                <div className="image-click-hint">
                  <Search size={16} /> Click to view full dashboard
                </div>
              </div>
              <div className="project-body">
                <h3><TrendingUp size={24} /> E-commerce Sales Dashboard</h3>
                <p>
                  Tableau dashboard providing insights into profit &amp; sales trends,
                  market share by region, order quantities, and category-wise performance.
                  Key findings: Sales up 5% YoY, LATAM &amp; Europe lead in revenue,
                  with strategic review opportunities in underperforming categories.
                </p>
                <div className="project-tech">
                  {['Tableau', 'Data Analytics', 'Data Visualization', 'Dashboard Design'].map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href="https://www.linkedin.com/posts/abinaya3110_dataanalytics-tableaudashboard-womenintech-activity-7349008687299969024-MVRZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFwkZ48B1VEhs3KU20xH82PFLFFZ4JaNlKY" target="_blank" rel="noopener noreferrer" className="project-link primary">
                    <Linkedin size={16} /> View on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Netflix-Inspired Landing Page */}
            <div className="project-card">
              <div className="project-image project-clickable" onClick={() => setNetflixLightbox(true)}>
                <img src={netflix1} alt="Netflix-Inspired Landing Page" />
                <div className="image-click-hint">
                  <Sparkles size={16} /> Click to view all screenshots
                </div>
              </div>
              <div className="project-body">
                <h3><Play size={24} /> Netflix-Inspired Landing Page</h3>
                <p>
                  A responsive Netflix-style landing page built with custom HTML and CSS. Features a 
                  full-screen header layout with a branded background, a responsive language selector 
                  with a sign-in button, an interactive email subscription form, and clean promotional sections.
                </p>
                <div className="project-tech">
                  {['HTML5', 'CSS3', 'Responsive Design', 'Layout & Positioning'].map(t => <span key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href="https://lnkd.in/dFVCSVqD" target="_blank" rel="noopener noreferrer" className="project-link primary">
                    <Github size={16} /> View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INTERNSHIP ========== */}
      <section id="internship" className="internship-section">
        <div className="container">
          <div className="section-title">
            <h2>Internship Experience</h2>
            <p>Professional experience and contributions</p>
          </div>
          <div className="internship-card">
            <div className="intern-header">
              <div>
                <h3>NoviTech Solutions</h3>
                <div className="intern-role">Data Analytics Intern</div>
              </div>
              <div className="intern-date"><Calendar size={16} /></div>
            </div>
            <ul className="intern-points">
              <li>Analyzed large datasets using Python (Pandas, NumPy) and SQL to extract actionable business insights</li>
              <li>Built interactive dashboards and reports using Tableau and Power BI for stakeholder presentations</li>
              <li>Collaborated with cross-functional teams to identify data-driven improvement opportunities</li>
            </ul>
            <div className="intern-tools">
              {['Python', 'Pandas', 'SQL', 'Tableau', 'Power BI', 'Excel'].map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="intern-actions">
              <button className="btn-certificate primary" onClick={() => setNovitechLightbox(true)}>
                <Eye size={16} /> View Certificate
              </button>
              <a href={novitechCertificate} download="Abinaya_NoviTech_Certificate.jpg" className="btn-certificate secondary">
                <Download size={16} /> Download Certificate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== EDUCATION ========== */}
      <section id="education" className="education-section">
        <div className="container">
          <div className="section-title">
            <h2>Education</h2>
            <p>Academic journey and qualifications</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <h3>Bachelor of Computer Applications (BCA)</h3>
                <div className="institution">SASTRA University, Kumbakonam</div>
                <div className="year"><Calendar size={14} /> 2023 — Present</div>
                <div className="cgpa-badge"><Star size={16} style={{color: '#fbbf24', fill: '#fbbf24'}} /> CGPA: 8.5 / 10</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <h3>HSC Class XII (Biology & Mathematics)</h3>
                <div className="institution">St. Joseph's Girls Hr. Sec. School, Kumbakonam</div>
                <div className="year"><Calendar size={14} /> 2022 — 2023</div>
                <div className="cgpa-badge"><Award size={16} style={{color: '#fbbf24'}} /> Percentage: 82%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CERTIFICATIONS ========== */}
      <section id="certifications" className="cert-section">
        <div className="container">
          <div className="section-title">
            <h2>Certifications</h2>
            <p>Professional certifications and courses completed</p>
          </div>
          <div className="cert-grid">
            {[
              { icon: Database, title: 'AI - Data Engineering Analyst', org: '(NASSCOM) – Skill India Digital Hub' },
              { icon: FileText, title: 'Diploma in MS Office', org: 'CSC' },
              { icon: Terminal, title: 'Zero to Python Hero: Code Smart with AI', org: "Let's Upgrade" },
              { icon: FileSpreadsheet, title: 'Microsoft Excel Bootcamp', org: "Let's Upgrade" },
              { icon: Bot, title: 'AI Tools Workshop', org: 'be10X' },
              { icon: Database, title: 'SQL Bootcamp', org: "Let's Upgrade" },
            ].map((c, i) => (
              <div className="cert-card" key={i}>
                <div className="cert-icon"><c.icon size={22} /></div>
                <div className="cert-info">
                  <h4>{c.title}</h4>
                  <p>{c.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ACHIEVEMENTS ========== */}
      <section id="achievements" className="achievements-section">
        <div className="container">
          <div className="section-title">
            <h2>Achievements</h2>
            <p>Recognition and accomplishments</p>
          </div>
          <div className="achievement-highlight">
            <div className="trophy-icon"><Trophy size={48} /></div>
            <h3>1st Prize — <Sprout size={24} /> AGRO IQ — AI-Powered Smart Agriculture</h3>
            <div className="event">TECH FEST 2025, SASTRA University</div>
            <p>
              Won first place for building an AI-powered agriculture platform empowering farmers with data-driven crop intelligence. 
              Features crop recommendation via trained ML models, yield analytics with interactive visualizations, 
              crop health monitoring using image processing, and real-time weather insights.
            </p>
          </div>
        </div>
      </section>

      {/* ========== CONTACT ========== */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>Let's connect and create something amazing together</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon"><Mail size={24} /></div>
              <h4>Email</h4>
              <p><a href="mailto:abinayabaskar3110@gmail.com">abinayabaskar3110@gmail.com</a></p>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><Phone size={24} /></div>
              <h4>Phone</h4>
              <p>+91 81489 89036</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon"><Linkedin size={24} /></div>
              <h4>LinkedIn</h4>
              <p><a href="https://linkedin.com/in/abinaya3110" target="_blank" rel="noopener noreferrer">linkedin.com/in/abinaya3110</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ATTENDANCE DASHBOARD LIGHTBOX ========== */}
      {attendanceLightbox && (
        <div className="lightbox-overlay" onClick={(e) => { if (e.target === e.currentTarget) setAttendanceLightbox(false) }}>
          <div className="lightbox-container lightbox-container--small">
            <div className="lightbox-header">
              <h3><TrendingUp size={22} style={{color: '#22c55e'}} /> Attendance Overview Dashboard</h3>
              <button className="lightbox-close" onClick={() => setAttendanceLightbox(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <div className="lightbox-scroll">
              <div className="lightbox-item">
                <div className="lightbox-img-wrapper">
                  <img src={attendanceImg} alt="Attendance Overview Dashboard" />
                </div>
                <div className="lightbox-caption">
                  <h4><BarChart2 size={20} /> Attendance Overview Dashboard | Power BI</h4>
                  <p>Interactive dashboard analyzing employee attendance — total/present/absent counts, team &amp; manager comparisons, gender distribution, and job level breakdown with smart filters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========== E-COMMERCE DASHBOARD LIGHTBOX ========== */}
      {ecommerceLightbox && (
        <div className="lightbox-overlay" onClick={(e) => { if (e.target === e.currentTarget) setEcommerceLightbox(false) }}>
          <div className="lightbox-container lightbox-container--small">
            <div className="lightbox-header">
              <h3><TrendingUp size={22} style={{color: '#22c55e'}} /> E-commerce Sales Dashboard</h3>
              <button className="lightbox-close" onClick={() => setEcommerceLightbox(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <div className="lightbox-scroll">
              <div className="lightbox-item">
                <div className="lightbox-img-wrapper">
                  <img src={ecommerceImg} alt="E-commerce Sales Dashboard" />
                </div>
                <div className="lightbox-caption">
                  <h4><TrendingUp size={20} /> E-commerce Sales Dashboard | Tableau</h4>
                  <p>Comprehensive dashboard with profit &amp; sales trends, market share by region, order quantities, and category-wise performance. Sales up 5% YoY with LATAM &amp; Europe leading revenue.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========== AGRO IQ LIGHTBOX ========== */}
      {agroLightbox && (
        <div className="lightbox-overlay" onClick={(e) => { if (e.target === e.currentTarget) setAgroLightbox(false) }}>
          <div className="lightbox-container">
            <div className="lightbox-header">
              <h3><Sprout size={22} style={{color: '#22c55e'}} /> AGRO IQ — Project Screenshots</h3>
              <button className="lightbox-close" onClick={() => setAgroLightbox(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <div className="lightbox-scroll">
              {agroImages.map((img, i) => (
                <div className="lightbox-item" key={i}>
                  <div className="lightbox-img-wrapper">
                    <img src={img.src} alt={img.alt} />
                    <span className="lightbox-index">{i + 1} / {agroImages.length}</span>
                  </div>
                  <div className="lightbox-caption">
                    <h4>{img.alt}</h4>
                    <p>{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========== TERRACEIQ LIGHTBOX (CUSTOM TABBED SHOWCASE) ========== */}
      {terraceiqLightbox && (
        <div className="lightbox-overlay" onClick={(e) => { if (e.target === e.currentTarget) setTerraceiqLightbox(false) }}>
          <div className="lightbox-container lightbox-container--large tiq-lightbox">
            <div className="lightbox-header">
              <h3>
                <Sprout size={22} style={{color: '#22c55e'}} /> 
                TerraceIQ — Final Year Project (Team)
              </h3>
              <button className="lightbox-close" onClick={() => setTerraceiqLightbox(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>
            
            {/* Project Quick Overview */}
            <div className="tiq-overview">
              <p>
                <strong>TerraceIQ</strong> is an AI-powered smart gardening system designed to make sustainable urban farming accessible for everyone. 
                Below are the 4 main features of this team project. Click a tab to thoroughly explore details and outputs.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="tiq-tabs">
              {Object.keys(terraceiqTabs).map((key) => {
                const tab = terraceiqTabs[key];
                return (
                  <button 
                    key={key} 
                    className={`tiq-tab-btn ${activeFeatureTab === key ? 'active' : ''}`}
                    onClick={() => handleTabChange(key)}
                  >
                    <tab.icon size={22} />
                    <span>{tab.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content Area */}
            <div className="tiq-tab-content animation-fade-in" key={activeFeatureTab}>
              {/* Left Column: Explanations */}
              <div className="tiq-details-col">
                {(() => {
                  const ActiveIcon = terraceiqTabs[activeFeatureTab].icon;
                  return (
                    <h3>
                      <ActiveIcon size={22} /> 
                      {terraceiqTabs[activeFeatureTab].title}
                    </h3>
                  );
                })()}
                <p className="tiq-desc">{terraceiqTabs[activeFeatureTab].desc}</p>
                
                <h4 className="tiq-sub-title">Key Capabilities:</h4>
                <ul className="tiq-bullets">
                  {terraceiqTabs[activeFeatureTab].bullets.map((bullet, idx) => (
                    <li key={idx}><CheckCircle2 size={16} /> {bullet}</li>
                  ))}
                </ul>

                <h4 className="tiq-sub-title">Built Using:</h4>
                <div className="tiq-tech-badges">
                  {terraceiqTabs[activeFeatureTab].tech.map((t, idx) => (
                    <span key={idx} className="tiq-tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              {/* Right Column: Dynamic Slider / Gallery */}
              <div className="tiq-gallery-col">
                <div className="tiq-main-image-wrapper">
                  <img 
                    src={terraceiqTabs[activeFeatureTab].images[activeImageIndex].src} 
                    alt={terraceiqTabs[activeFeatureTab].images[activeImageIndex].caption} 
                    className="tiq-main-img"
                  />
                  <div className="tiq-img-caption">
                    {terraceiqTabs[activeFeatureTab].images[activeImageIndex].caption}
                  </div>
                </div>
                {terraceiqTabs[activeFeatureTab].images.length > 1 && (
                  <div className="tiq-thumbnails">
                    {terraceiqTabs[activeFeatureTab].images.map((img, idx) => (
                      <button 
                        key={idx} 
                        className={`tiq-thumb-btn ${activeImageIndex === idx ? 'active' : ''}`}
                        onClick={() => setActiveImageIndex(idx)}
                        aria-label={`View image ${idx + 1}`}
                      >
                        <img src={img.src} alt="thumbnail" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Requirements & Info Banner */}
            <div className="tiq-footer-banner">
              <div className="tiq-banner-item">
                <strong><Cpu size={16} /> System Core:</strong> Python / Flask / SQLite
              </div>
              <div className="tiq-banner-item">
                <strong><Users size={16} /> Team Project:</strong> Abinaya B (Data Analytics)
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========== NETFLIX LANDING PAGE LIGHTBOX ========== */}
      {netflixLightbox && (
        <div className="lightbox-overlay" onClick={(e) => { if (e.target === e.currentTarget) setNetflixLightbox(false) }}>
          <div className="lightbox-container">
            <div className="lightbox-header">
              <h3><Play size={22} style={{color: '#e50914', fill: '#e50914'}} /> Netflix Landing Page Screenshots</h3>
              <button className="lightbox-close" onClick={() => setNetflixLightbox(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <div className="lightbox-scroll">
              {netflixImages.map((img, i) => (
                <div className="lightbox-item" key={i}>
                  <div className="lightbox-img-wrapper">
                    <img src={img.src} alt={img.alt} />
                    <span className="lightbox-index">{i + 1} / {netflixImages.length}</span>
                  </div>
                  <div className="lightbox-caption">
                    <h4>{img.alt}</h4>
                    <p>{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========== NOVITECH CERTIFICATE LIGHTBOX ========== */}
      {novitechLightbox && (
        <div className="lightbox-overlay" onClick={(e) => { if (e.target === e.currentTarget) setNovitechLightbox(false) }}>
          <div className="lightbox-container lightbox-container--small">
            <div className="lightbox-header">
              <h3><Award size={22} style={{color: '#00d4ff'}} /> NoviTech Solutions Internship Certificate</h3>
              <button className="lightbox-close" onClick={() => setNovitechLightbox(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>
            <div className="lightbox-scroll">
              <div className="lightbox-item">
                <div className="lightbox-img-wrapper">
                  <img src={novitechCertificate} alt="NoviTech Solutions Internship Certificate" />
                </div>
                <div className="lightbox-caption">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                    <div>
                      <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><GraduationCap size={20} /> Data Analytics Internship Certificate</h4>
                      <p>Issued by NoviTech Solutions for completion of the Data Analytics Internship (2024 — 2025).</p>
                    </div>
                    <a href={novitechCertificate} download="Abinaya_NoviTech_Certificate.jpg" className="btn-certificate primary">
                      <Download size={16} /> Download Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <div className="footer-links">
          <a href="https://github.com/abinayabaskar31" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
          <a href="https://linkedin.com/in/abinaya3110" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
          <a href="mailto:abinayabaskar3110@gmail.com"><Mail size={20} /></a>
        </div>
      </footer>
    </>
  )
}

export default App
