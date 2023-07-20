import Brick from './Brick'
import Godmode from './Godmode'
import Test from './test';

function Projects() {
  return (
    <div className="Projects">
      <h2 className='projects'>My Projects</h2>
      <Brick />
      <br />
      <Godmode />
      <br />
      <Test />
    </div>
  );
}

export default Projects;