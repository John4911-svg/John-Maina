const homeBtn = document.getElementById("homeBtn");
const myProfileBtn = document.getElementById("myProfileBtn");
const myexperienceBtn = document.getElementById("myexperienceBtn");
const mySkillsBtn = document.getElementById("mySkillsBtn");
const myProjectBtn = document.getElementById("myProjectBtn");
const myContactBtn = document.getElementById("myContactBtn");
const mainsection = document.getElementById("mainsection");

homeBtn.addEventListener('click', ()=>{
  homePage();
  pointerEvents(navigation,homeBtn)
});
myProfileBtn.addEventListener('click',  ()=>{
  myProfile();
  pointerEvents(navigation,myProfileBtn)
});
myexperienceBtn.addEventListener('click', ()=>{
  myExperience();
  pointerEvents(navigation,myexperienceBtn)
});
mySkillsBtn.addEventListener('click',  ()=>{
  mySkills();
  pointerEvents(navigation,mySkillsBtn)
});
myProjectBtn.addEventListener('click', ()=>{
  myproject();
  pointerEvents(navigation,myProjectBtn)
});
myContactBtn.addEventListener('click',  ()=>{
  myContact();
  pointerEvents(navigation,myContactBtn)
});

const navigation = [homeBtn,myProfileBtn,myexperienceBtn,mySkillsBtn,myProjectBtn,myContactBtn]
function pointerEvents(array,button){
  for(let i=0;i<navigation.length ;i++){
    navigation[i].style.pointerEvents = 'all';
        navigation[i].style.backgroundColor = 'hsl(180, 10%, 59%)';
  }
  button.style.pointerEvents = 'none';
  button.style.backgroundColor = 'hsl(197, 100%, 40%)';
}
const contentDisplayArea = document.getElementById("contentDisplayArea");
const savedPage = localStorage.getItem('active');
document.addEventListener("DOMContentLoaded",function(){
if (savedPage === 'contact'){
    myContact();
}else if (savedPage === 'profile'){
    myProfile();
}else if (savedPage === 'experience'){
    myExperience();
}else if (savedPage === 'project'){
    myproject();
}else if (savedPage === 'skills'){
    mySkills();
}else {
    homePage();
}
  updateButtonColors();
    
});
function homePage(){
    localStorage.setItem('active', 'home'); 
    contentDisplayArea.innerHTML = (`
       <div class="hero-section">
      <h1>John Maina Githiomi</h1>
      <p class="tagline">Software Engineer | Systems & Web Developer</p>

      <div class="hero-intro">
        <p>
          I bridge the gap between low-level system performance and modern web
          interactivity. Currently pursuing a B.Sc. in Software Engineering, I
          focus on building robust, scalable solutions through clean code and
          algorithmic efficiency.
        </p>
      </div>

      <div class="home-grid">
        <div class="grid-item">
          <h3>Systems Engineering</h3>
          <p>
            Proficient in C/C++ with a focus on memory management and
            high-performance logic.
          </p>
        </div>
        <div class="grid-item">
          <h3>Web Architecture</h3>
          <p>
            Crafting responsive interfaces using JavaScript (ES6+), HTML5, and
            CSS3.
          </p>
        </div>
        <div class="grid-item">
          <h3>Problem Solving</h3>
          <p>
            Applying discrete mathematics and data structures to solve complex
            technical challenges.
          </p>
        </div>
      </div>

      <div class="cta-area">
        <p>Want to see my work?</p>
        <button onclick="myproject()">View Projects</button>
        <button
          onclick="myContact()"
          style="
            background: transparent;
            border: 1px solid var(--primary-color);
          "
        >
          Get In Touch
        </button>
      </div>
            <button
        class="back-to-top"
        onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
      >
        ↑ Back To The Top
      </button>
    </div>

      `);
}

function myProfile(){
    localStorage.setItem('active', 'profile');
    contentDisplayArea.innerHTML = (`
          <div class="profile-container">
      <header class="profile-header">
        <h1>Professional Profile</h1>
        <p class="subtitle">
          Software Engineer in Training | Academic & Self-Taught Developer
        </p>
      </header>

      <section class="profile-intro">
        <p>
          Supplementing my formal Software Engineering degree with self-taught
          expertise in modern web technologies like HTML, CSS, and JavaScript.
          Focused on bridging the gap between hardware-level logic and
          high-level user interfaces.
        </p>
      </section>

      <div class="profile-grid">
        <!-- Academic Module -->
        <div class="profile-card academic">
          <div class="card-header">
            <span class="icon">🎓</span>
            <h2>Academic Background</h2>
          </div>
          <div class="institution">
            <strong>Bachelor of Science in Software Engineering</strong>
            <p>Zetech University | Sept 2025 &hyphen; Present</p>
          </div>
          <div class="curriculum-focus">
            <h3>Academic Focus & Core Competencies:</h3>
            <ul class="styled-list">
              <li>
                <strong>Systems Programming:</strong> Advanced study of C/C++
                focusing on memory management and pointers.
              </li>
              <li>
                <strong>Engineering Core:</strong> Fundamentals of SE,
                Structured Programming, and Algorithmic Design.
              </li>
              <li>
                <strong>Mathematical Logic:</strong> Discrete Structures and
                Basic Mathematics (MAT 111).
              </li>
              <li>
                <strong>Professional Integration:</strong> Technical
                Communication and Digital Literacy.
              </li>
            </ul>
          </div>
        </div>

        <!-- Technical Systems Module -->
        <div class="profile-card technical">
          <div class="card-header">
            <span class="icon">💻</span>
            <h2>Technical Background</h2>
          </div>
          <ul class="styled-list">
            <li>
              <strong>Low-Level Programming:</strong> Proficient in C/C++ for
              high-performance code and system-level logic.
            </li>
            <li>
              <strong>Structured Programming:</strong> Expert in modular design,
              debugging, and complex algorithm implementation.
            </li>
            <li>
              <strong>Software Methodology:</strong> Deep understanding of the
              SDLC and software design planning.
            </li>
          </ul>

          <h3 class="web-header">Frontend Web Development (Self-Taught)</h3>
          <ul class="styled-list">
            <li>
              <strong>Web Core:</strong> Building responsive, semantic
              structures with HTML5 and CSS3.
            </li>
            <li>
              <strong>Dynamic Scripting:</strong> Interactive user experiences
              using JavaScript (ES6+).
            </li>
            <li>
              <strong>Modern Standards:</strong> Committed to responsive design
              and browser technology evolution.
            </li>
          </ul>
        </div>

        <!-- Tools & Analytics Module -->
        <div class="profile-card analytical full-width">
          <div class="card-header">
            <span class="icon">📊</span>
            <h2>Analytical & Professional Tools</h2>
          </div>
          <div class="tools-flex">
            <div class="tool-item">
              <strong>Logic & Analytics:</strong>
              <p>Applying mathematical frameworks to algorithm efficiency.</p>
            </div>
            <div class="tool-item">
              <strong>Collaboration:</strong>
              <p>
                Expert in technical writing and digital collaboration tools.
              </p>
            </div>
            <div class="tool-item">
              <strong>Interface Design:</strong>
              <p>
                Crafting structured foundations for high-performance web
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        class="back-to-top"
        onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
      >
        ↑ Back To The Top
      </button>
    </div>
      `);
}

function myExperience() {
    localStorage.setItem('active', 'experience');
    contentDisplayArea.innerHTML = (`
          <div class="experience-container">
      <h1>Work Experience</h1>
      <p class="subtitle">
        A record of professional responsibility and operational efficiency.
      </p>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="experience-card">
            <div class="exp-header">
              <div class="title-group">
                <h2>Store Assistant</h2>
                <p class="company">Rukuini Wholesale Store — Nakuru, Kenya</p>
              </div>
              <span class="exp-date">May 2025</span>
            </div>

            <div class="exp-content">
              <h3>Key Responsibilities:</h3>
              <ol class="styled-ol">
                <li>Measured and prepared goods accurately for customers.</li>
                <li>
                  Assisted in unloading delivery trucks and organizing stock.
                </li>
                <li>
                  Helped customers by collecting items based on provided lists.
                </li>
                <li>
                  Maintained cleanliness and organization within the store.
                </li>
                <li>Worked efficiently in a fast-paced retail environment.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div class="skills-transfer">
        <p>
          <strong>Professional Note:</strong> These roles have helped me develop
          strong attention to detail, teamwork, and the ability to perform under
          pressure—qualities I apply directly to my Software Engineering
          projects.
        </p>
      </div>
            <button
        class="back-to-top"
        onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
      >
        ↑ Back To The Top
      </button>
    </div>
      `);
}

function myproject(){
    localStorage.setItem('active', 'project'); 
    contentDisplayArea.innerHTML = (`
    <div class="projects-container">
      <h1>Featured Projects</h1>
      <p>
        A selection of technical projects demonstrating my ability to build
        functional, interactive, and responsive applications.
      </p>

      <!-- PROJECT 1: AFRICAN COUNTRIES QUIZ -->
      <div class="project-card">
        <div class="project-header">
          <div class="project-title-group">
            <h2>1. African Countries Quiz Engine</h2>
            <div class="tech-badges">
              <span>JavaScript (OOP)</span>
              <span>CSS3</span>
              <span>Data Management</span>
            </div>
          </div>
          <a href="https://john4911-svg.github.io/Quiz/" target="_blank" class="live-link-btn">Live Demo <span>↗</span></a>
        </div>
        <div class="project-content">
          <div class="project-description">
            <h3>Key Technical Achievements:</h3>
            <ul class="project-list">
              <li>Implemented <strong>Object-Oriented Programming (OOP)</strong> principles using Classes to architect structured quiz data.</li>
              <li>Engineered a high-capacity data handler to manage and render 50+ complex question objects dynamically.</li>
              <li>Developed a <strong>custom marking algorithm</strong> that provides real-time performance analytics and percentage-based scoring.</li>
              <li>Integrated exhaustive <strong>error handling</strong> for unattempted questions to ensure data integrity during marking.</li>
              <li>Designed a clean, scrollable user interface using <strong>custom CSS</strong> for optimized readability of large datasets.</li>
            </ul>
          </div>
        </div>
        <div class="project-footer">
          <p>Interested in the source code? <a href="https://github.com/John4911-svg/Quiz" target="_blank">View on GitHub</a></p>
        </div>
      </div>

      <!-- PROJECT 2: DICE SIMULATOR -->
      <div class="project-card">
        <div class="project-header">
          <div class="project-title-group">
            <h2>2. Dynamic Dice Simulator</h2>
            <div class="tech-badges">
              <span>HTML5</span><span>CSS3</span><span>JavaScript (ES6)</span>
            </div>
          </div>
          <a href="https://john4911-svg.github.io/Dice-/" target="_blank" class="live-link-btn">Live Demo <span>↗</span></a>
        </div>
        <div class="project-content">
          <div class="project-description">
            <h3>Key Technical Achievements:</h3>
            <ul class="project-list">
              <li>Engineered a <strong>randomization algorithm</strong> using Math logic to simulate real-time dice rolls.</li>
              <li>Implemented efficient <strong>state management</strong> using Arrays to store and process multiple dice values.</li>
              <li>Utilized <strong>Array.reduce()</strong> for high-performance arithmetic summation of dynamic datasets.</li>
              <li>Applied <strong>custom CSS styling</strong> to ensure a modern, consistent visual presentation.</li>
            </ul>
          </div>
        </div>
        <div class="project-footer">
          <p>Interested in the source code? <a href="https://github.com/John4911-svg/Dice-" target="_blank">View on GitHub</a></p>
        </div>
      </div>

      <!-- PROJECT 3: ROCK PAPER SCISSORS -->
      <div class="project-card">
        <div class="project-header">
          <div class="project-title-group">
            <h2>3. Interactive Rock Paper Scissors</h2>
            <div class="tech-badges">
              <span>JavaScript (ES6)</span><span>CSS3</span><span>Local Storage</span>
            </div>
          </div>
          <a href="https://john4911-svg.github.io/Rock-Paper-scissors/" target="_blank" class="live-link-btn">Live Demo <span>↗</span></a>
        </div>
        <div class="project-content">
          <div class="project-description">
            <h3>Key Technical Achievements:</h3>
            <ul class="project-list">
              <li>Built a <strong>stat-tracking engine</strong> that calculates win/loss percentages in real-time.</li>
              <li>Integrated <strong>LocalStorage API</strong> to persist user game data across sessions.</li>
              <li>Developed complex <strong>conditional game logic</strong> to handle multiple outcomes and win-rate comparisons.</li>
              <li>Utilized <strong>CSS3</strong> to design an intuitive game interface with interactive navigation controls.</li>
            </ul>
          </div>
        </div>
        <div class="project-footer">
          <p>Interested in the source code? <a href="https://github.com/John4911-svg/Rock-Paper-scissors" target="_blank">View on GitHub</a></p>
        </div>
      </div>

      <!-- PROJECT 4: CALCULATOR -->
      <div class="project-card">
        <div class="project-header">
          <div class="project-title-group">
            <h2>4. Simple Calculator Web Application</h2>
            <div class="tech-badges">
              <span>HTML5</span><span>CSS3</span><span>JavaScript (ES6)</span>
            </div>
          </div>
          <a href="https://john4911-svg.github.io/Simple_Calculator/" target="_blank" class="live-link-btn">Live Demo <span>↗</span></a>
        </div>
        <div class="project-content">
          <div class="project-description">
            <h3>Key Technical Achievements:</h3>
            <ul class="project-list">
              <li>Developed an interactive calculator with a focus on clean logic and user experience.</li>
              <li>Implemented complex input handling using <strong>arrays</strong> and <strong>dynamic DOM updates</strong>.</li>
              <li>Built calculation logic by securely evaluating user-generated arithmetic expressions.</li>
              <li>Designed a modern, fully responsive user interface using advanced CSS grid and flexbox.</li>
            </ul>
          </div>
        </div>
        <div class="project-footer">
          <p>Interested in the source code? <a href="https://github.com/John4911-svg/Simple_Calculator" target="_blank">View on GitHub</a></p>
        </div>
      </div>

      <!-- PROJECT 5: PORTFOLIO  -->
      <div class="project-card" style="margin-top: 3rem">
        <div class="project-header">
          <div class="project-title-group">
            <h2>5. Personal Portfolio</h2>
            <div class="tech-badges">
              <span>Vanilla JS</span><span>CSS Architecture</span><span>UI/UX Design</span>
            </div>
          </div>
          <a href="https://john4911-svg.github.io/John-Maina/" target="_blank" class="live-link-btn">Viewing Now <span>↗</span></a>
        </div>
        <div class="project-content">
          <div class="project-description">
            <h3>Key Technical Achievements:</h3>
            <ul class="project-list">
              <li>Architected a <strong>Single Page Application (SPA)</strong> using custom JavaScript routing logic.</li>
              <li>Implemented <strong>Local Storage</strong> integration to maintain user state and navigation history.</li>
              <li>Designed a professional, responsive <strong>CSS framework</strong> featuring modern grid layouts.</li>
              <li>Optimized for technical interviews by focusing on <strong>clean code principles</strong>.</li>
            </ul>
          </div>
        </div>
        <div class="project-footer">
          <p>Project Structure: Fully custom HTML/CSS/JS without external frameworks.</p>
          <p>Interested in the source code? <a href="https://github.com/John4911-svg/John-Maina" target="_blank">View on GitHub</a></p>
        </div>
      </div>

      <p class="status-note">
        <strong>Note:</strong> This portfolio is an evolving platform. It is being developed gradually to reflect my growing technical expertise...
      </p>
    </div>

    <p style="margin-top: 3rem; text-align: center; color: var(--text-muted); font-style: italic;">
      More projects currently in development...
    </p>

    <button class="back-to-top" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">
      ↑ Back To The Top
    </button>
    `);
}

function myContact(){
    localStorage.setItem('active', 'contact'); 
    contentDisplayArea.innerHTML = (`
          <div class="contact-container">
      <h1>Get In Touch</h1>
      <p>
        I am currently looking for new opportunities and collaborations. Whether
        you have a question or just want to say hi, my inbox is always open!
      </p>

      <div class="contact-grid">
        <div class="contact-card">
          <div class="icon">📧</div>
          <h3>Email</h3>
          <p>johngithiomi4911@gmail.com</p>
        </div>

        <div class="contact-card">
          <div class="icon">📱</div>
          <h3>Phone</h3>
          <p>+254 796 503 656</p>
        </div>

        <div class="contact-card">
          <div class="icon">📄</div>
          <h3>Curriculum Vitae</h3>
          <p>
            View my detailed professional history and academic achievements.
          </p>
          <a href="JOHN MAINA GITHOMI.docx" download class="download-btn-modern"
            >Download CV</a
          >
        </div>
      </div>

      <div class="availability-badge">
        <span class="dot"></span> Available for Freelance & Internships
      </div>
      <br>
            <button
        class="back-to-top"
        onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
      >
        ↑ Back To The Top
      </button>
    </div>
      `);
}

function mySkills(){
    localStorage.setItem('active', 'skills'); 
    contentDisplayArea.innerHTML = (`
    <div class="skills-container">
      <h1>Technical Skills & Competencies</h1>
      <p>
        A comprehensive overview of my technical stack, engineering foundations,
        and professional toolset, updated with recent project implementations.
      </p>

      <div class="skills-grid">
        <!-- Category 1: Languages -->
        <div class="skills-card">
          <div class="card-header">
            <span class="icon">💻</span>
            <h3>Languages Known</h3>
          </div>
          <div class="skill-tags">
            <div class="tag">
              <strong>JavaScript (ES6+):</strong> Advanced DOM manipulation, 
              Object-Oriented Programming (Classes), and dynamic data rendering.
            </div>
            <div class="tag">
              <strong>C Programming:</strong> Problem solving, memory logic, 
              and foundational engineering.
            </div>
            <div class="tag">
              <strong>C++:</strong> OOP principles including inheritance and class-based architecture.
            </div>
            <div class="tag">
              <strong>HTML5 & CSS3:</strong> Semantic structures and advanced layouts (Grid/Flexbox).
            </div>
          </div>
        </div>

        <!-- Category 2: Core Technologies -->
        <div class="skills-card">
          <div class="card-header">
            <span class="icon">⚙️</span>
            <h3>Applied Technologies</h3>
          </div>
          <ul class="clean-list">
            <li><strong>State Management:</strong> Handling complex datasets using Arrays (Map, Reduce, Splice).</li>
            <li><strong>Persistent Storage:</strong> Data retention using Browser LocalStorage API.</li>
            <li><strong>SPA Architecture:</strong> Custom routing and dynamic content modules.</li>
            <li><strong>Math Logic:</strong> Implementation of randomization and statistical algorithms.</li>
            <li><strong>UI/UX Design:</strong> Creating responsive, interactive interfaces with modern CSS.</li>
          </ul>
        </div>

        <!-- Category 3: Computer Science -->
        <div class="skills-card">
          <div class="card-header">
            <span class="icon">🧠</span>
            <h3>Core Engineering</h3>
          </div>
          <ul class="clean-list">
            <li><strong>Data Structures:</strong> Object-Oriented data modeling and Array-based storage.</li>
            <li><strong>Algorithms:</strong> Real-time scoring systems and win/loss ratio calculations.</li>
            <li><strong>Software lifecycle:</strong> Clean code principles and iterative documentation.</li>
          </ul>
        </div>

        <!-- Category 4: Tools -->
        <div class="skills-card">
          <div class="card-header">
            <span class="icon">🛠️</span>
            <h3>Tools & Environment</h3>
          </div>
          <div class="skill-tags small-tags">
            <span>VS Code</span>
            <span>Git & GitHub</span>
            <span>Browser DevTools</span>
            <span>Node.js</span>
          </div>
        </div>

        <!-- Category 5: Soft Skills -->
        <div class="skills-card full-width">
          <div class="card-header">
            <span class="icon">🤝</span>
            <h3>Soft Skills</h3>
          </div>
          <div class="skill-tags">
            <span class="tag">Technical Problem Solving & Logical Thinking</span>
            <span class="tag">Documentation and Technical Communication</span>
            <span class="tag">Project Management and Adaptability</span>
          </div>
        </div>
      </div>

      <button
        class="back-to-top"
        onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
      >
        ↑ Back To The Top
      </button>
    </div>
    `);
}

