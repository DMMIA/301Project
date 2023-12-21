import image1 from '../assets/img1andrea.jpg';
import image2 from '../assets/img2dom.jpeg';
import image3 from '../assets/img4shin.jpg';
import image4 from '../assets/img3mike.jpg';
import image5 from '../assets/img5myyela.jpeg';
import './About.css'

function About() {
  return (
    <div className="container">
      <h1>About Us</h1>
<div className= "members2">
      {/* Member 1 */}
      <div className="member">
        <img src={image1} alt="Andrea Thiel" />
        <h2>Andrea Thiel</h2>
        <p>Description for Member 1.</p>
        <div className="links">
          <a href="https://github.com/ariley215" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/andrea-thiel-ab0603296/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      {/* Member 2 */}
      <div className="member">
        <img src={image2} alt="Dominique McClaney" />
        <h2>Dominique McClaney</h2>
        <p>Description for Member 2.</p>
        <div className="links">
          <a href="https://github.com/MccDom1" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/dominique-mcclaney/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      </div>

      <div className="member1">
      {/* Member 3 */}
      <div className="member">
        <img src={image3} alt="Immanuel Shin" />
        <h2>Immanuel Shin</h2>
        <p>Description for Member 3.</p>
        <div className="links">
          <a href="https://github.com/ImmanuelShin" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/immanuel-shin/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      </div>

      <div className= "members2">
      {/* Member 4 */}
      <div className="member">
        <img src={image4} alt="Michelangelo Ascalon" />
        <h2>Michelangelo Ascalon</h2>
        <p>Description for Member 4.</p>
        <div className="links">
          <a href="https://github.com/mikeascalon" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/michelangelo-ascalon-708851114/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      {/* Member 5 */}
      <div className="member">
        <img src={image5} alt="Myyela Isaac" />
        <h2>Myyela Isaac</h2>
        <p>Description for Member 5.</p>
        <div className="links">
          <a href="https://github.com/JaquizeIsaac" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/myyela-isaac/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
</div>
    </div>
  );
}

export default About;
