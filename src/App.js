import { useEffect } from 'react';

import aboutImage from './images/about-page.jfif';
import kisanMitraBot from './images/kisan-mitra-bot.png';
import agroWorld from './images/agro-world.png'
import whatsappClone from './images/whatsapp-clone.jpg'
import './App.css';

function App() {

  useEffect(() => {
    let menu = document.querySelector('#menu-bars');
    let header = document.querySelector('header');
  
    menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        header.classList.toggle('active');
    }
  
    window.onscroll = () =>{
        menu.classList.remove('fa-times');
        header.classList.remove('active');
    }
  
    let cursor1 = document.querySelector('.cursor-1');
    let cursor2 = document.querySelector('.cursor-2');
  
    window.onmousemove = (e) =>{
        cursor1.style.top = e.pageY + 'px';
        cursor1.style.left = e.pageX + 'px';
        cursor2.style.top = e.pageY + 'px';
        cursor2.style.left = e.pageX + 'px';
    }
  
    document.querySelectorAll('a').forEach(links =>{
  
        links.onmouseenter = () =>{
            cursor1.classList.add('active');
            cursor2.classList.add('active');
        } 
  
        links.onmouseleave = () =>{
            cursor1.classList.remove('active');
            cursor2.classList.remove('active');
        }
  
    });
  }, [])

  return (
    <div>
      {/* custom cursors */}
      <div className="cursor-1"></div>
      <div className="cursor-2"></div>


      <div id="menu-bars" className="fas fa-bars"></div>
          
      {/* header section starts */}

      <header>

          <h2 className="logo"> <span>Mihir</span> Rane </h2>

          <nav className="navbar">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#education">Education</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
          </nav>

          <div className="follow">
              <a href="https://www.linkedin.com/in/mihir-rane-55a4811b3/"  target="_blank" className="fab fa-linkedin"></a>
              <a href="https://github.com/Mihir-rane" target="_blank" className="fab fa-github"></a>
              <a href="mailto:ranemihir3@gmail.com"  target="_blank" className="fas fa-envelope"></a>
          </div>

      </header>

      {/* header section ends */}

      {/* home section starts */}

      <section className="home" id="home">

          <div className="content">
              <h3 className="hi"> Hi There... </h3>
              <h1> i am <span> Mihir Rane </span> </h1>
              <p className="text"> I am a third year engineering student currently pursuing B.E in Computer Engineering from Vivekanand Education Society's Institute of Technology. I am passionate about learning new things in the field of computer science. I am skilled in Web development and programming languages such as C++ and Java. </p>
              <a href="#about" className="btn">About Me</a>
          </div>

      </section>

      {/* home section ends --> */}

      {/* about section starts */}

      <section className="about" id="about">

      <h1 className="heading"> about <span> me </span> </h1>

      <div className="row-1">

          <div className="image">
              <img src={aboutImage} alt="Mihir's pic" />
          </div>

          <div className="content">
              <h3> My Name is Mihir Rane & I am a Full-stack Web Developer </h3>
              <div className="box-container">
                  <div className="box">
                      <p> <span> Age : </span> 20 </p>
                      <p> <span> Gender : </span> Male </p>
                      <p> <span> Language : </span> English, Hindi, Konkani </p>
                      <p> <span> Work : </span> Full-stack web developer </p>
                  </div>
                  <div className="box">
                      <p> <span> Phone : </span> 9082246856 </p>
                      <p> <span> Email : </span> ranemihir3@gmail.com </p>
                      <p> <span> Country : </span>India </p>
                  </div>
              </div>
              <a href="https://drive.google.com/file/d/1J2Hy23exQli7nw151cfbY1BbijoMndKY/view?usp=sharing" target="_blank" className="btn">Resume</a>
          </div>

      </div>

      </section>

      {/* about section ends */}

      <section className="education" id="education">

          <h1 className="heading"> <span> my </span> education </h1>

          <div className="box-container">

              <div className="box">
                  <div className="content">
                      <span> Aug 2019 - Present  </span>
                      <h3>B.E. Computer Engineering</h3>
                      <h4>Vivekanand Education Society's Institute of Technology (VESIT), Chembur</h4>
                      <p>CGPA ( Till SEM IV ) : 9.88</p>
                  </div>
              </div>

              <div className="box">
                  <div className="content">
                      <span> June 2017 - May 2019 </span>
                      <h3>Higher Secondary Science</h3>
                      <h4>P.E.Society English Medium High School and Junior College (PES), Thane</h4>
                      <p>Percentage: 79.69%</p>
                  </div>
              </div>

              <div className="box">
                  <div className="content">
                      <span> March 2005 - March 2017  </span>
                      <h3>Secondary</h3>
                      <h4>New Horizon Public School</h4>
                      <p>CGPA: 10 Percentage: 94.4%</p>
                  </div>
              </div>

          </div>

      </section>

      {/* skills section starts */}

      <section id="skills" className="skills">
     
        <h1 className="heading"> <span> my </span> skills </h1>

        <div className="box-container">

            <div className="box">
                <h3>React</h3>
            </div>

            <div className="box">
                <h3>MongoDB</h3>
            </div>

            <div className="box">
                <h3>Express.js</h3>
            </div>

            <div className="box">
                <h3>Node.js</h3>
            </div>

            <div className="box">
                <h3>Firebase</h3>
            </div>

            <div className="box">
                <h3>GraphQL</h3>
            </div>
            
            <div className="box">
                <h3>Django</h3>
            </div>

            <div className="box">
                <h3>Next.js</h3>
            </div>

            <div className="box">
                <h3>Bootstrap</h3>
            </div>

            <div className="box">
                <h3>Javascript</h3>
            </div>

            <div className="box">
                <h3>SASS</h3>
            </div>

            <div className="box">
                <h3>CSS</h3>
            </div>

            <div className="box">
                <h3>HTML</h3>
            </div>

            <div className="box">
                <h3>C++</h3>
            </div>

            <div className="box">
                <h3>Java</h3>
            </div>

        </div>
          
      </section>

      {/* skills ends */}

      {/* experience section starts */}

      <section className="experience" id="experience">

          <h1 className="heading"> <span> my </span> experience </h1>

          <div className="box-container">

              <div className="box">
                  <div className="content">
                      <span> Nov 2021 - Present </span>
                      <h3>Senior Technical Officer</h3>
                      <h4>CSI VESIT</h4>
                      <p>Conduct some workshops based on different web technologies for members of CSI</p>
                  </div>
              </div>

              <div className="box">
                  <div className="content">
                      <span> Jan 2021 - Nov 2021 </span>
                      <h3>Junior Web Editor</h3>
                      <h4>CSI VESIT</h4>
                      <ul>
                          <li>Contributed to the official website of CSI VESIT.</li>
                          <li>Conducted hands-on workshops on Bootstrap and Java for the members of CSI VESIT.</li>
                          <li>Assisted in conducting other workshops and events.</li>
                      </ul>
                  </div>
              </div>

              <div className="box">
                  <div className="content">
                      <span> Jun 2021 - Aug 2021 </span>
                      <h3>Web Developer</h3>
                      <h4>Curomates</h4>
                      <ul>
                          <li>Designed and worked on 15 responsive and dynamic web pages.</li>
                          <li>Implemented two chat components.</li>
                          <li>Tech Stack used: HTML, CSS, Bootstrap, React.js, Redux.js and Firebase.</li>
                      </ul>
                  </div>
              </div>

          </div>

      </section>

      {/* experience section ends */}

      {/* projects section starts */}

      <section className="projects" id="projects">

          <h1 className="heading"> <span> my </span> projects </h1>

          <div className="box-container">

              <div className="box">
                    <img src={kisanMitraBot} alt="project-pic" />
                    <div className="contents">
                        <h3>Kisan Mitra Bot</h3>
                        <p>
                        Kisan Mitra Bot is a multilingual chatbot that resolves agricultural-related farmer's queries supporting the majority of Indian languages. Used Rasa OpenSource to train the chatbot, React.js for frontend, Node.js and Express.js for backend server and Firestore for database. Used Azure translation API and Docker for containerising the application.
                        </p>
                        <br />
                        <div>
                            <strong>Express.js</strong>
                            <strong>React.js</strong>
                            <strong>Node.js</strong>
                            <strong>Firebase</strong>
                            <strong>Rasa</strong>
                            <strong>Docker</strong>
                            <strong>Azure</strong>
                        </div>
                        <div className="container">
                            <a href="https://github.com/Mihir-rane/Kisan-Mitra-Bot" target="_blank" >Code</a>
                        </div>
                    </div>
              </div>

              <div className="box">
                    <img src={agroWorld} alt="project-pic" />
                    <div className="contents">
                        <h3>Agro World</h3>
                        <p>
                            Agro World is a smart contract based website that helps farmers to sell agricultural products and customers to buy these products directly from farmers using ethereum blockchain based wallet. Used React.js for front-end and Web3.js for converting the front-end application to a Blockchain application. Used Ganache and Metamask for testing transactions on the private Blockchain.
                        </p>
                        <br />
                        <div>
                            <strong>React.js</strong>
                            <strong>Firebase</strong>
                            <strong>Web3.js</strong>
                            <strong>Ganache</strong>
                            <strong>Solidity</strong>
                        </div>
                        <div className="container">
                            <a href="https://github.com/Mihir-rane/eth_wallet" target="_blank">Code</a>
                        </div>
                    </div>
              </div>

              <div className="box">
                      <img src={whatsappClone} alt="project-pic" />
                      <div className="contents">
                        <h3>WhatApp clone</h3>
                        <p>
                            This web application is chat bot application which has a user interface similar to WhatsApp. The user first have to sign in and then they can send messages, images, and emojis. They can create public rooms/channels and also search them in the
    search bar present inside the side panel. The website is user friendly
                        </p>
                        <br />
                        <div>
                            <strong>React.js</strong>
                            <strong>Firebase</strong>
                        </div>
                        <div className="container">
                            <a href="https://github.com/Mihir-rane/whatsapp-clone" target="_blank">Code</a>
                        </div>
                      </div>
              </div>

          </div>

      </section>

      {/* projects section ends */}

      {/* contact section starts */}

      <section className="contact" id="contact">

          <h1 className="heading"> contact <span> me </span> </h1>

          <div className="icons-container">

              <div className="icons">
                  <i className="fas fa-envelope"></i>
                  <h3>My Email</h3>
                  <p>ranemihir@gmail.com</p>
              </div>

              <div className="icons">
                  <i className="fas fa-phone"></i>
                  <h3>My Number</h3>
                  <p>+91 9082246856</p>
              </div>

              <div className="icons">
                  <i className="fas fa-map-marker-alt"></i>
                  <h3>My Address</h3>
                  <p>Thane, Maharashtra, India</p>
              </div>

          </div>

      </section>

       {/* contact section ends  */}

       {/* footer section */}
      <footer className="footer"> Created by <span> Mr. Mihir Rane </span> | All rights reserved! </footer>
    </div>
  );
}

export default App;
