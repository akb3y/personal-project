import { useState } from 'react';

function Experience() {

  const [isActive, setIsActive] = useState(false)

  return (
<div className="accordion">
  <div className="accordion-item">
    <div
      className="accordion-title"
      onClick={() => setIsActive(!isActive)}
    >
      <h5>Experience {isActive ? '-' : '+'}</h5>
    </div>
    {isActive && <div className="accordion-content">
      <p>
        West Coast Code Consultant <br />
        Software Engineer <br />
        April 2023 - June 2023
      </p>
      <p>
        Kratos <br />
        Software Engineer II <br />
        November 2022 - April 2023
      </p>
      </div>}
  </div>
</div>
  );
}

export default Experience;