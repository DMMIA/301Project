import image1 from '../assets/img1andrea.jpg';
import image2 from '../assets/img2dom.jpeg';
import image3 from '../assets/img4shin.jpg';
import image4 from '../assets/img3mike.jpg';
import image5 from '../assets/img5myyela.jpeg';
import logo from '../assets/logo.png';
import './About.css'; // Make sure to import the CSS file

function About() {
  return (
    <div className="about-container">
      <div className="container top-container">
        <div className="mission-container">
        <img src={logo} alt="ADMIM Logo" className="team-logo"/>
          <h1 className="team-mission">Our Mission</h1>
          <p>Suite Spotter at its focus consolidates all relevant portions of trip planning into one convenient application. It eases the difficulty in handling the multitude of parts when planning a trip. Suite Spotter also aims to go beyond simple trip planning by also guiding your trip. Food, entertainment, and weather will all be recommended in order to maximize the potential of your journey.</p>
          <p>Developed and designed by <a className="team-link" href="https://github.com/Team-ADMIM" target="_blank"rel="noopener noreferrer">Team ADMIM</a></p>
        </div>
      </div>
      <div className="container">
        {/* Member 1 */}
        <div className="members-container">
          <div className="member">
            <img src={image1} alt="Andrea Thiel" />
            <h2>Andrea Thiel</h2>
            <div className="links">
              <a href="https://github.com/ariley215" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/andrea-thiel-ab0603296/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          {/* Member 2 */}
          <div className="member">
            <img src={image2} alt="Dominique McClaney" />
            <h2>Dominique McClaney</h2>
            <div className="links">
              <a href="https://github.com/MccDom1" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/dominique-mcclaney/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="members-container">
          {/* Member 3 */}
          <div className="member">
            <img src={image3} alt="Immanuel Shin" />
            <h2>Immanuel Shin</h2>
            <div className="links">
              <a href="https://github.com/ImmanuelShin" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/immanuel-shin/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="members-container">
          {/* Member 4 */}
          <div className="member">
            <img src={image4} alt="Michelangelo Ascalon" />
            <h2>Michelangelo Ascalon</h2>
            <div className="links">
              <a href="https://github.com/mikeascalon" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/michelangelo-ascalon-708851114/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          {/* Member 5 */}
          <div className="member">
            <img src={image5} alt="Myyela Isaac" />
            <h2>Myyela Isaac</h2>
            <div className="links">
              <a href="https://github.com/JaquizeIsaac" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/myyela-isaac/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
