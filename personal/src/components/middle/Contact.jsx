import { BsLinkedin } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';

function Contact() {
  return (
    <div className="Contact">
      <h2 className='contact'>Contact Me</h2>
      <a href="https://www.linkedin.com/in/alisha-barraw/"><BsLinkedin />  Alisha Barraw</a> <br />
      <a href="mailto:alisha.barraw@gmail.com"><TfiEmail />  Click to Send an Email to Alisha</a>
    </div>
  );
}

export default Contact;