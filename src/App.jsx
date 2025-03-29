import React from 'react';
import Navbar from './components/navbar';
import { 
  // Contact section icons
  Facebook, 
  Instagram, 
  Github, 
  Mail,
  // Service section icons
  Palette, // For UI/UX
  Code2, // For Java Programming
  Globe2, // For Fullstack Website
} from 'lucide-react';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="scroll-progress" style={{"--scroll": "0%"}} />

      <section id="home" className="hero">
        <div className="section-content">
          <div className="intro-text">
            <div className="typing-effect">
              <h2 className="highlight">Hi! I'm</h2>
            </div>
            <h1>John Rhe<br />M<br />Poblacion<span className="dot">.</span></h1>
            <div className="social-links">
              <a href="https://www.facebook.com/john.rhe.monteclaro.poblacion" className="social-icon" target="_blank" rel="noopener noreferrer">
                <img src="/FB.png" alt="Facebook" />
              </a>
              <a href="mailto:johnrhepoblacion@gmail.com" className="social-icon" target="_blank" rel="noopener noreferrer">
                <img src="/Google.png" alt="Google" />
              </a>
              <a href="https://www.instagram.com/j.rhe18/" className="social-icon" target="_blank" rel="noopener noreferrer">
                <img src="/IG.png" alt="Instagram" />
              </a>
              <a href="https://github.com/Xeph19" className="social-icon github-icon" target="_blank" rel="noopener noreferrer">
                <img src="/Github.png" alt="Github" />
              </a>
            </div>
          </div>

          <div className="profile-container">
            <div className="profile-image">
              <img src="/Rhe.png" alt="John Rhe Profile" />
            </div>
          </div>

          <div className="about-me">
            <h2>About Me:</h2>
            <h1>Aspiring Data Scientist,<br />Cybersecurity Expert</h1>
            <div className="skills-container">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">MERN</span>
              <span className="skill-tag">Data Science</span>
              <span className="skill-tag">AI</span>
            </div>
            <p>I'm currently a second-year BSIT student at <span className="highlight-text">Western Institute of Technology</span> with foundational knowledge in <span className="highlight-text">Java</span> and <span className="highlight-text">MERN</span> stack. I'm now exploring the vast and exciting fields of <span className="highlight-text">Data Science</span> and <span className="highlight-text">AI</span> development to expand my technical expertise.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="section-content">
          <div className="section-title">
            <h3 className="highlight">Projects</h3>
            <h2>My Works</h2>
            <p className="pyramid-text">
              I have here some of my own and ongoing projects.<br />
              Take a look at them and<br />
              let me know!
            </p>
          </div>
          
          <div className="project-grid">
            <a href="https://awesometodos-ihha.onrender.com" className="project-box" target="_blank" rel="noopener noreferrer">
              <div className="project-image-container">
                <img src="/Awesometodo.png" alt="Awesome Todo" />
                <div className="project-overlay">
                  <h3>Awesome Todo</h3>
                </div>
              </div>
            </a>

            <a href="https://github.com/Xeph19" className="project-box" target="_blank" rel="noopener noreferrer">
              <div className="project-image-container">
                <img src="/Slide 16_9 - 19.png" alt="UpTalk" />
                <div className="project-overlay">
                  <h3>UpTalk</h3>
                </div>
              </div>
            </a>

            <a href="https://github.com/Xeph19" className="project-box" target="_blank" rel="noopener noreferrer">
              <div className="project-image-container">
                <img src="/download.jpg" alt="Gengar Login" />
                <div className="project-overlay">
                  <h3>Gengar Login</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="section-content">
          <div className="section-title">
            <h3 className="highlight">Services</h3>
            <h2>What I Can Offer</h2>
            <p>Are you looking to elevate your online presence or streamline your business operations? Look no further! I offer a comprehensive range of services tailored to meet your unique needs, including:</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-card-front">
                  <div className="service-icon">
                    <Palette size={40} color="#000033" />
                  </div>
                  <h3>UI/UX Design</h3>
                </div>
                <div className="service-card-back">
                  <ul className="service-details">
                    <li>User Interface Design</li>
                    <li>User Experience Design</li>
                    <li>Responsive Design</li>
                    <li>Prototyping</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-card-front">
                  <div className="service-icon">
                    <Code2 size={40} color="#000033" />
                  </div>
                  <h3>Basic Java Programming</h3>
                </div>
                <div className="service-card-back">
                  <ul className="service-details">
                    <li>Core Java Concepts</li>
                    <li>Object-Oriented Programming</li>
                    <li>Data Structures</li>
                    <li>Algorithm Development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-inner">
                <div className="service-card-front">
                  <div className="service-icon">
                    <Globe2 size={40} color="#000033" />
                  </div>
                  <h3>Fullstack Website</h3>
                </div>
                <div className="service-card-back">
                  <ul className="service-details">
                    <li>Frontend Development</li>
                    <li>Backend Integration</li>
                    <li>Database Management</li>
                    <li>API Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="section-content">
          <div className="section-title">
            <h3 className="highlight">Contact Us</h3>
            <h2>How to Contact</h2>
            <p className="contact-description">
              Let's Connect!<br />
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            <div className="availability-status">
              <span className="status-dot"></span>
              <span>Available for Freelance Projects</span>
            </div>
          </div>
          
          <div className="contact-links">
            <a href="https://www.facebook.com/john.rhe.monteclaro.poblacion" className="contact-link" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon">
                <Facebook size={24} color="#000033" />
              </div>
              <span className="link-text">https://www.facebook.com/john.rhe.monteclaro.poblacion</span>
            </a>

            <a href="mailto:johnrhepoblacion@gmail.com" className="contact-link" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon">
                <Mail size={24} color="#000033" />
              </div>
              <span className="link-text">johnrhepoblacion@gmail.com</span>
            </a>

            <a href="https://github.com/Xeph19" className="contact-link" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon">
                <Github size={24} color="#000033" />
              </div>
              <span className="link-text">https://github.com/Xeph19</span>
            </a>

            <a href="https://www.instagram.com/j.rhe18/" className="contact-link" target="_blank" rel="noopener noreferrer">
              <div className="contact-icon">
                <Instagram size={24} color="#000033" />
              </div>
              <span className="link-text">https://www.instagram.com/j.rhe18/</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
