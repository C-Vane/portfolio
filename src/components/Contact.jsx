import React from "react";
import { ContactContainer } from "./StyledComponents/componenets";
function Contact() {
  return (
    <ContactContainer className='container' id='contact'>
      <h1>Contact Me</h1>
      <div className='socials'>
        <ul>
          <li>Linkedin</li>
          <li>Git Hub</li>
          <li>Stack-Overflow</li>
          <li>Email</li>
        </ul>
      </div>
      <div className='message'></div>
    </ContactContainer>
  );
}

export default Contact;
