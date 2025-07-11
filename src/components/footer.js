import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
        
      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/company/medcs-lab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} MedCS Lab. All rights reserved.</p>

      

      {/* <p>
        Contact us at <a href="mailto:your-email@university.edu">your-email@university.edu</a>
      </p> */}
    </footer>
  );
}

export default Footer;
