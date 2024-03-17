import React from 'react';
import '../assets/css/Footer.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  const phoneNumber = '123-456-7890';
  return (
    <footer className="app-footer">
    <a href="mailto:harikrishnanaruchsamy@gmail.com" className="email-link">
    <MailOutlineIcon style={{ fontSize: '30px' }}/>
  </a>
    <a href="tel:+123456789" className="ph-no">
   <PhoneIcon style={{ fontSize: '30px' }}/>
     </a>
      <p>&copy; 2024 EduAdmit Connect . All rights reserved.</p>
    </footer>
  );
};

export default Footer;
