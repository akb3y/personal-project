import Experience from './Experience'
import Education from './Education'

function About() {
  return (
    <div className="About">
      <h2 className='about'>About Me</h2>
      <h4>Welcome to my page. I am Alisha and a frontend engineer in the Boulder, CO area.</h4>
      <Experience />
      <Education />
    </div>
  );
}

export default About;