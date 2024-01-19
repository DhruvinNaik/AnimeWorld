// Navbar.js
import React from 'react';
import './Navbar.css'; // Create a separate CSS file for styling
import Emoji from '../Emoji/Emoji'
function Navbar(){
return (
<>
<nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
    <p><Emoji /></p>
  </nav>
</>
  );
}

export default Navbar;