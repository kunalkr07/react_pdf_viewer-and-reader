
import React from 'react';
import './index.css'; 

const Footer = () => {
  return (
    <>
    {/* Subscribe Section */}
    <section className="subscribe-section">
     
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officiis debitis dolores! Adipisci obcaecati, <br /> reprehenderit, odit quis ipsum quaerat excepturi voluptatem <br /> blanditiis nostrum amet assumenda unde alias consequuntur corporis expedita?
      </p>
      <div className="subscribe-box">
        <input type="email" placeholder="Enter your email Address" />
        <button>Subscribe</button>
      </div>
    </section>


    {/* Footer Section */}
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <h3>
            <span className="logo-dot" /> <span className="logo-name">my</span>
            <b>Logo</b>
          </h3>
        </div>

        <div className="footer-bottom-links">
        <ul >
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Site Map</li>
        </ul>
          
        </div>
      </div>
    </footer>
  </>
  
  
  );
};

export default Footer;
