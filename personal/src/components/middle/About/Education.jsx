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
      <p className='education'>Education {isActive ? '-' : '+'}</p>
    </div>
    {isActive && <div className="accordion-content">
      <div className="hr ed ab">
        <div className='hrimg'><img src={require('../../../images/HR.jpeg')} alt='HR' /></div>
        <div className="hrinfo">
         Hack Reactor  <br />
          Immersive Software Engineer <br />
          February 2022 - May 2022
        </div>
      </div>
      <div className="apsu ed ab">
        <div className='apsuinfo'>
        Austin Peay State University <br />
        MS Computer Science and Quantitative Methods <br />
        January 2018 - August 2020
        </div>
        <div className='apsuimg'><img src={require('../../../images/apsu_logo.jpeg')} alt='MTSU' /></div>
      </div>
      <div className="mtsu ed ab">
      <div className='mtsuimg'><img src={require('../../../images/mtsu_logo.jpg')} alt='MTSU' /></div>
      <div className='mtsuinfo'>
        Middle Tennessee State University <br />
        BS Sociology <br />
        August 2012 - December 2014
      </div>
      </div>
      </div>}
  </div>
</div>
  );
}

export default Education;