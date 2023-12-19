import React from 'react';
import './styles.css'; // Your CSS file

function AboutPage() {
  return (
    <div className="container">
      <h1>About Us</h1>

      {/* Member 1 */}
      <div className="member">
        <img src="path_to_image_1.jpg" alt="Member 1" />
        <h2>Member 1</h2>
        <p>Description for Member 1.</p>
        <div className="links">
          <a href="github_link_1" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="linkedin_link_1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      {/* Member 2 */}
      <div className="member">
        <img src="path_to_image_2.jpg" alt="Member 2" />
        <h2>Member 2</h2>
        <p>Description for Member 2.</p>
        <div className="links">
          <a href="github_link_2" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="linkedin_link_2" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      {/* Member 3 */}
      <div className="member">
        <img src="path_to_image_3.jpg" alt="Member 3" />
        <h2>Member 3</h2>
        <p>Description for Member 3.</p>
        <div className="links">
          <a href="github_link_3" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="linkedin_link_3" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      {/* Member 4 */}
      <div className="member">
        <img src="path_to_image_4.jpg" alt="Member 4" />
        <h2>Member 4</h2>
        <p>Description for Member 4.</p>
        <div className="links">
          <a href="github_link_4" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="linkedin_link_4" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      {/* Member 5 */}
      <div className="member">
        <img src="path_to_image_5.jpg" alt="Member 5" />
        <h2>Member 5</h2>
        <p>Description for Member 5.</p>
        <div className="links">
          <a href="github_link_5" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="linkedin_link_5" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

    </div>
  );
}

export default AboutPage;
