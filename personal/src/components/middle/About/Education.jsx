import { useState } from 'react';

function Education() {

  const [isActive, setIsActive] = useState(false)

  return (
<div className="accordion">
  <div className="accordion-item">
    <div
      className="accordion-title"
      onClick={() => setIsActive(!isActive)}
    >
      <h5>Education {isActive ? '-' : '+'}</h5>
    </div>
    {isActive && <div className="accordion-content">
      <div className="hr ed ab">
        Hack Reactor <br />
        Immersive Software Engineer <br />
        February 2022 - May 2022
      </div>
      <div className="apsu ed ab">
        Austin Peay State University <br />
        MS Computer Science and Quantitative Methods <br />
        January 2018 - August 2020
      </div>
      <div className="mtsu ed ab">
        Middle Tennessee State University <br />
        BS Sociology <br />
        August 2012 - December 2014
      </div>
      </div>}
  </div>
</div>
  );
}

export default Education;