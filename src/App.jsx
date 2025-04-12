import React, { useState } from "react";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();
function App() {
  
  const [portfolioDB, setPortfolioDB] = useState([
    {
      id: 1,
      img: "/weather.jpg",
      type: "featured",
      title: "Weather Web Application",
      technology: "JavaScript",
      link: "https://weather-app-mkm.netlify.app/",
      github: "https://github.com/Kamoliddinmirzaboyev05/Weather-App",
      functions: ["Fetch API", "Search City", "Local Storage"],
    },
    {
      id: 2,
      img: "/ecommerse.jpg",
      type: "featured",
      title: "eCommerse Multipage Market Site",
      technology: "JavaScript",
      link: "https://ecommerse-mkm.netlify.app/",
      github:
        "https://github.com/Kamoliddinmirzaboyev05/eCommerse-Big-JS-Project",
      functions: ["Fetch API", "Multi Page", "Local Storage"],
    },
    {
      id: 3,
      img: "/taqvim.jpg",
      type: "featured",
      title: "Taqvim Web Application",
      technology: "JavaScript",
      link: "https://taqvim-mkm.netlify.app/",
      github: "https://github.com/Kamoliddinmirzaboyev05/Namoz-Vaqtlari-APP",
      functions: ["Fetch API", "Daily Times", "Local Storage"],
    },
    {
      id: 4,
      img: "/contact.jpg",
      type: "featured",
      title: "Contact Web Application",
      technology: "JavaScript",
      link: "https://contacts-mkm.netlify.app/",
      github: "https://github.com/Kamoliddinmirzaboyev05/Weather-App",
      functions: ["Fetch API", "Search City", "Local Storage"],
    },
    {
      id: 5,
      img: "/todolist.jpg",
      type: "featured",
      title: "To Do List",
      technology: "JavaScript",
      link: "https://todolist-mkm.netlify.app/",
      github: "https://github.com/Kamoliddinmirzaboyev05",
      functions: ["Add new task", "Complate task", "Local Storage"],
    },
    {
      id: 6,
      img: "/countries.jpg",
      type: "featured",
      title: "Countries Data",
      technology: "JavaScript",
      link: "https://weather-app-mkm.netlify.app/",
      github: "https://github.com/Kamoliddinmirzaboyev05/Weather-App",
      functions: ["Fetch API", "Search City", "Local Storage"],
    },
  ]);

  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <header id="navbar">
        {/* <div className="mobileLinksBack">
          
          <div className="mobileLinks">
            <div className="mobileModalLogo">
              <img src="/logo.png" alt="" />
            </div>
            <ul className="mobileLinksList">
              <li>
                <a className="active link" href="#navbar">
                  Home
                </a>
              </li>
              <li>
                <a className="link" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="link" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="link" href="#about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        <nav>
          <div className="container">
            <div onClick={()=>{
              setOpenModal(true)
            }} className="bar">
              <i className="fas fa-bars"></i>
            </div>
            <a
              href="#navbar"
              className="logo"
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <img src="/logo.png" alt="" />
            </a>
            <ul className="links" data-aos="fade-down" data-aos-duration="3000">
              <li>
                <a className="active" href="#navbar">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
            </ul>
            <a
              data-aos="fade-left"
              data-aos-duration="3000"
              target="_blank"
              href="https://t.me/Kamoliddin_Mirzaboyev"
            >
              <button className="contactBtn">Contact</button>
            </a>
          </div>
          <a href="#navbar" className="up">
            <i className="fa-solid fa-up-long"></i>
          </a>
        </nav>
        <div className="hero">
          <div className="container">
            <div className="heroText">
              <h2 data-aos="fade-right" data-aos-duration="3000">
                Hi, I am <br />
                <span className="name"> Kamoliddin Mirzaboyev </span> <br />
                <span className="job">Frontend Developer</span>
              </h2>
              <div className="heroSocials">
                <a
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  target="_blank"
                  href="https://www.instagram.com/mirzaboyevk/"
                  className="iconBox"
                >
                  <p className="socialName instagram">Instagram</p>

                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  target="_blank"
                  href="https://t.me/Kamoliddin_Mirzaboyev"
                  className="iconBox"
                >
                  <p className="socialName telegram">Telegram</p>
                  <i className="fa-brands fa-telegram"></i>
                </a>
                <a
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  target="_blank"
                  href="https://github.com/Kamoliddinmirzaboyev05"
                  className="iconBox"
                >
                  <p className="socialName github">GitHub</p>

                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  target="_blank"
                  href="https://t.me/MKPortfolio_Codial"
                  className="iconBox"
                >
                  <p className="socialName linkedin">Portfolio</p>

                  <i className="fa-solid fa-briefcase"></i>
                </a>
              </div>
              <div className="heroBtns" data-aos="fade-up" data-aos-duration="3000">
                <button className="hireMeBtn">Hire Me</button>
                <a href="/resume.txt" download="Resume">
                  <button className="download">
                    <i className="fas fa-download"></i> Download CV
                  </button>
                </a>
              </div>
              <div
                className="experienceBoxes"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <div className="experience">
                  <h2>1+</h2>
                  <p>Experience</p>
                </div>
                <div className="experience">
                  <h2>1+</h2>
                  <p>Real Projects</p>
                </div>
                <div className="experience">
                  <h2>50+</h2>
                  <p>Projects</p>
                </div>
              </div>
            </div>
            <div className="heroImg" data-aos="fade-left" data-aos-duration="3000">
              <img src="/logg.jpg" alt="" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section
          id="skills"
          className="skills"
          data-aos="fade-top"
          data-aos-duration="3000"
        >
          <div className="container">
            <div className="sectionTitle">
              <h2>My Skills</h2>
            </div>
            <div className="skillsBlock">
              <div
                className="skillBox"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <h2 className="skillHover">90% learned</h2>
                <h2 className="skillName">HTML5</h2>
                <img src="/html5.svg" alt="" />
              </div>
              <div
                className="skillBox"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <h2 className="skillHover">87% learned</h2>
                <h2 className="skillName">CSS3</h2>
                <img src="/css3.svg" alt="" />
              </div>
              <div
                className="skillBox"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <h2 className="skillHover">75% learned</h2>
                <h2 className="skillName">SASS</h2>
                <img src="/sass-original.svg" alt="" />
              </div>
              <div
                className="skillBox"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <h2 className="skillHover">68% learned</h2>
                <h2 className="skillName">Bootstrap</h2>
                <img src="/bootstrapwhite.svg" alt="" />
              </div>
              <div
                className="skillBox"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <h2 className="skillHover">72% learned</h2>
                <h2 className="skillName">Tailwind</h2>
                <img src="/tailwind-css.svg" alt="" />
              </div>
              <div
                className="skillBox"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <h2 className="skillHover">82% learned</h2>
                <h2 className="skillName">JavaScript</h2>
                <img src="/javascript-js.svg" alt="" />
              </div>
              <div
                className="skillBox"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <h2 className="skillHover">15% learned</h2>
                <h2 className="skillName">ReactJS</h2>
                <img src="/file-type-reactjs.svg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="services"
          data-aos="fade-top"
          data-aos-duration="3000"
        >
          <div className="container">
            <div className="sectionTitle">
              <h2>Services</h2>
            </div>
            <div className="servicesBlock">
              <div
                className="serviceBox"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <div className="boxImg">
                  <img src="/globe.svg" alt="" />
                </div>
                <h2>Web Development</h2>
                <ul>
                  <li>
                    <p>Static and dynamic website development.</p>
                  </li>
                  <li>
                    <p>
                      Responsive (mobile, tablet and desktop) design Building
                      websites.
                    </p>
                  </li>
                  <li>
                    <p>
                      Landing page and multipage websites with HTML, CSS and
                      JavaScript.
                    </p>
                  </li>
                </ul>
                <p></p>
              </div>
              <div
                className="serviceBox"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="boxImg">
                  <img src="/uxui.svg" alt="" />
                </div>
                <h2>Web Platforms</h2>
                <ul>
                  <li>
                    <p>
                      Custom Web Platforms – Business-specific, scalable, and
                      secure web solutions.
                    </p>
                  </li>
                  <li>
                    <p>
                      E-commerce & Marketplaces – Online stores and job
                      platforms with smooth transactions.
                    </p>
                  </li>
                  <li>
                    <p>
                      Admin Dashboards – Intuitive panels for data management
                      and analytics.
                    </p>
                  </li>
                </ul>
              </div>
              <div
                className="serviceBox"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <div className="boxImg">
                  <img src="/spa.svg" alt="" />
                </div>
                <h2>Single Page Applications</h2>
                <ul>
                  <li>
                    <p>
                      Fast & Interactive – Seamless, dynamic user experience
                      without page reloads.
                    </p>
                  </li>
                  <li>
                    <p>
                      API-Powered – Fetch and display real-time data using REST
                      APIs.
                    </p>
                  </li>
                  <li>
                    <p>
                      Optimized Performance – Smooth, efficient, and
                      mobile-friendly web apps.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="portfolio"
          className="projects"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="container">
            <div className="sectionTitle">
              <h2>Portfolio</h2>
            </div>
            <div className="sectionTitle">
              <div className="portfolioFilter">
                <button className="featuredBtn activeBtn">Featured</button>
                <button className="staticBtn">Static</button>
                <button className="interactiveBtn">Interactive</button>
                <button className="apiBtn">API Integrated</button>
                <button className="reactBtn">React-Based</button>
                <a target="_blank" href="https://t.me/MKPortfolio_Codial">
                  <button className="all">All</button>
                </a>
              </div>
              <h4 className="portfolioInfo">
                HTML, CSS, SASS, Bootstrap, Tailwind-CSS, JavaScript and ReactJS
                Projects
              </h4>
              <div className="portfolioBlock featured">
                {portfolioDB.map(item=>{
                  return  <div
                  className="portfolioBox"
                 >
                  <div className="portfolioImg">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="portfolioText">
                    <h3>${item.title}</h3>
                    <h4>Technology</h4>
                    <ul>
                      <li>${item.technology}</li>
                    </ul>
                    <h4>Functions</h4>
                    <ul>
                      <li>${item.functions[0]}</li>
                      <li>${item.functions[1]}</li>
                      <li>${item.functions[2]}</li>
                    </ul>
                    <div className="portfolioBtns">
                      <a
                        target="_blank"
                        href={item.link}
                        ><button className="gotoSite">
                          Go To Site
                          <div className="toright">
                            <i className="fas fa-arrow-right"></i>
                          </div>
                        </button>
                      </a>
                      <a
                        target="_blank"
                        href={item.github}>
                        <button className="gotoCode">
                          Go To Code
                          <div className="toright">
                            <i className="fas fa-arrow-right"></i>
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="sectionTitle">
              <h2>About Me</h2>
            </div>
            <div className="aboutBlock">
              <div
                className="aboutImg"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <img src="/web-developer.png" alt="" />
              </div>
              <div
                className="aboutText"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  eveniet quod vel facere nemo natus culpa sequi neque? Alias
                  tempora hic ex repudiandae? Sequi possimus, nesciunt animi
                  ducimus vero eius libero doloribus architecto fugit dicta
                  eveniet earum quibusdam! Necessitatibus minima illo sequi
                  nesciunt ipsam mollitia illum, cum natus? Illo, minima
                  voluptates! Ullam dolores non adipisci voluptatum praesentium,
                  esse ipsa. Fuga assumenda, voluptates ipsam laboriosam ex
                  obcaecati culpa nobis?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae modi est itaque corporis minus suscipit eveniet,
                  corrupti sapiente possimus, deserunt velit non veritatis? Ipsa
                  iure deleniti vitae et laborum optio nesciunt quisquam
                  officiis mollitia ipsum placeat laudantium eius porro error
                  quod, quo sapiente sint libero reprehenderit molestiae odio
                  vel asperiores!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, quidem. Saepe aliquid dolorem, tempore velit iste
                  reprehenderit incidunt iure esse aliquam, excepturi
                  consectetur ex corrupti. Repellat numquam accusamus animi
                  nulla maiores. Nihil dicta magnam exercitationem! Ad sunt
                  sequi ex earum provident fugiat accusamus exercitationem ipsa
                  nihil optio cum ut nulla amet, est iusto illum ipsam quaerat
                  officiis? Cumque, fugit sed.
                </p>
                <button className="downloadBtn">
                  <i className="fas fa-download"></i> Download CV
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <div className="sectionTitle">
              <h2>Contact me</h2>
              <p className="contactInfo">
                Have a question or a project in mind? Let’s connect
              </p>
            </div>
            <form action="#">
              <div className="col">
                <input type="text" placeholder="Name" />
                <input type="number" placeholder="Phone Number" />
                <input type="text" placeholder="Timeline" />
              </div>
              <div className="col">
                <input type="text" placeholder="Email" />
                <select name="select" id="select">
                  <option disabled selected>
                    Service of Interest
                  </option>
                  <option value="development">Web Development</option>
                  <option value="platforms">Web Platform</option>
                  <option value="spa">Single Page Application</option>
                  <option value="teaching">Teaching</option>
                </select>
                <textarea
                  name="info"
                  id="info"
                  placeholder="Project Details..."
                ></textarea>
                <button type="submit" className="sendBtn">
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
