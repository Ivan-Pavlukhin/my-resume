import './App.css';
import foto from './my-photo.jpg';

function App() {
  return (
    <>
      <div class="wrapper">
        <aside class="sidebar">
          <img class="my-photo" src={foto} alt="my foto" />
          <div class="main-container">
            <div class="contacts-container">
              <h3 class="contacts-title">Contacts</h3>
              <div>
                <span class="contacts-link-type">C:</span>{' '}
                <a class="contacts-link" href="tell:38 066 331 33 89">
                  +38 066 331 33 89
                </a>
              </div>
              <div>
                <span class="contacts-link-type">E:</span>{' '}
                <a class="contacts-link" href="mailto:pavlukhinivan@gmail.com">
                  pavlukhinivan@gmail.com
                </a>
              </div>
              <div>
                <span class="contacts-link-type">Git hub:</span>{' '}
                <a class="contacts-link" href="https://github.com/Ivan-Pavlukhin">
                  https://github.com/Ivan-Pavlukhin
                </a>
              </div>
              <div>
                <span class="contacts-link-type">in:</span>{' '}
                <a class="contacts-link" href="https://github.com/Ivan-Pavlukhin">
                  https://www.linkedin.com/in/ivan-pavlukhin/
                </a>
              </div>
            </div>

            <div class="tech-skills-container">
              <h3 class="tech-skils-title">Tech Skills</h3>

              <ul>
                <li class="tech-still-item">
                  <spam class="tech-skill-text">HTML5</spam>
                </li>
                <li class="tech-still-item">
                  <spam class="tech-skill-text">CSS3</spam>
                </li>
                <li class="tech-still-item">
                  <spam class="tech-skill-text">GIT</spam>
                </li>
                <li class="tech-still-item">
                  <spam class="tech-skill-text">WebPack</spam>
                </li>
                <li class="tech-still-item">
                  <spam class="tech-skill-text">JavaScript</spam>
                </li>
                <li class="tech-still-item">
                  <spam class="tech-skill-text">React.js</spam>
                </li>
                <li class="tech-still-item">
                  <spam class="tech-skill-text">Node.js</spam>
                </li>
              </ul>
            </div>

            <div class=" soft-skills-container">
              <h3 class="soft-scills-title">Soft Skills</h3>
              <ul>
                <li class="soft-skills-item">
                  <span class="soft-skills-text"> Scrum</span>
                </li>
                <li class="soft-skills-item">
                  <span class="soft-skills-text"> Agile</span>
                </li>
                {/* <li class="soft-skills-item"><span class="soft-skills-text"> GTD</span></li> */}
                <li class="soft-skills-item">
                  <span class="soft-skills-text"> Teamwork</span>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <div class="about-me-container">
          <div class="info-container">
            <h2 class="profession">Front-End Developer</h2>
            <h1 class="name">Ivan Pavlukhin</h1>

            <p class="description">
              I'm a student of "Go It" Academy. I finished course of Frontend. On course I got an
              expirence in developing and team projects. My technical skills are HTML, CSS, JS,
              React.js, Git, WebPack and Create React App. During the next two month I plan to learn
              Node.js. I am very interested in increasing and improving knowledges in the field of
              Frontend because it is very important for me to see the result of my work.
            </p>
          </div>

          <div class="projects-container">
            <h3 class="about-me-title">Pojects</h3>
            <ol>
              <li class="projets-item">
                <a class="projects-link" href="https://github.com/Ivan-Pavlukhin/goit-markup-hw-08">
                  https://github.com/Ivan-Pavlukhin/goit-markup-hw-08
                </a>
                <span class="dots">.......................................</span>
                <span>
                  <b>[</b>
                  <span class="tech-name"> HTML5, CSS3 </span>
                  <b>]</b>
                </span>
              </li>
              <li class="projets-item">
                <a
                  class="projects-link"
                  href="https://github.com/Akunadjvili/command-project-markup"
                >
                  https://github.com/Akunadjvili/command-project-markup
                </a>
                <span class="dots">.......................................</span>
                <span>
                  <b>[</b>
                  <span class="tech-name"> HTML5, CSS3 </span>
                  <b>]</b>
                </span>
              </li>
              <li class="projets-item">
                <a class="projects-link" href="https://github.com/UriMovchan/EventBooster">
                  https://github.com/UriMovchan/EventBooster
                </a>
                <span class="dots">........................................................</span>
                <span>
                  <b>[</b>
                  <span class="tech-name"> JavaScript</span>
                  <b>]</b>
                </span>
              </li>
              {/* <li class="projets-item">
              <a class="projects-link" href="https://github.com/Ivan-Pavlukhin/goit-react-hw-09-phonebook">https://github.com/Ivan-Pavlukhin/goit-react-hw-09-phonebook (in process)</a>
              <span class="dots">..............</span>
              <span><b>[</b><span class="tech-name"> React.js, Node.js </span><b>]</b></span>
            </li> */}
            </ol>
          </div>
          <div class="container">
            <h3 class="about-me-title">Additional Education</h3>
            <h4 class="my-university">GoIT - start your career in IT</h4>
            <p class="my-education">Fullstack Frontend Developer</p>
            <p>
              <span class="profession-time">
                September 2020 - October 2021 <span class="profession-divider">|</span>
                Ukraine
              </span>
            </p>
          </div>

          <div class="container">
            <h3 class="about-me-title">Education</h3>
            <h4 class="my-university">Ternopil National Economic University</h4>
            <p class="my-education">Economics (economic cybernetics)</p>
            <p>
              <span class="profession-time">
                Septermber 2012 - June 2017 <span class="profession-divider">|</span>
                Ukraine
              </span>
            </p>
          </div>

          <div class="container">
            <h3 class="about-me-title">Work Experience</h3>

            <div>
              <h4 class="profession-title">
                Cook <span class="company-name">Pizzburg</span>
              </h4>
              <span class="profession-time">
                February 2021 - August 2021<span class="profession-divider">|</span>
                Ukraine
              </span>
            </div>

            <div>
              <h4 class="profession-title">
                Cook <span class="company-name">Varus</span>
              </h4>
              <span class="profession-time">
                May 2020 - February 2021<span class="profession-divider">|</span>
                Ukraine
              </span>
            </div>

            <div>
              <h4 class="profession-title">
                Cook <span class="company-name">Chernomorka</span>
              </h4>
              <span class="profession-time">
                February - March 2020 <span class="profession-divider">|</span>
                Ukraine
              </span>

              <ul class="profession-duties">
                <li class="profession-duties-item">Cooking seafood.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
