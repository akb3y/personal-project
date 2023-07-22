import { BsLinkedin } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { FaGithub } from 'react-icons/fa'

function Contact() {
  var contact = window.innerWidth < 1200 ? "c" : "C"
  return (
    <div>
      <h2 className='contact'>Contact Me</h2>
      <div className={contact}>
      <a href="https://www.linkedin.com/in/alisha-barraw/"><BsLinkedin />  Alisha Barraw</a> <br />
      <a href="mailto:alisha.barraw@gmail.com"><TfiEmail />  Click to Send an Email to me</a>
      <br />
      <a href="https://github.com/akb3y"><FaGithub /> Check Out My Github</a>
      </div>
      </div>
  );
}

export default Contact;