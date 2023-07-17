import Experience from './Experience'
import Education from './Education'
import Hobbies from './Hobbies'

function About() {
  return (
    <div className="About">
      <h2 className='about'>About Me</h2>
      <h3>Welcome to my page. I am Alisha and I am a frontend engineer in the Boulder, CO area.</h3>
      <Experience />
      <Education />
      <Hobbies />
    </div>
  );
}

export default About;