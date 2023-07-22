import { useState } from 'react'

function Experience() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='Experience'>
      <div className='accordion-item'>
        <div className='accordion-title' onClick={() => setIsActive(!isActive)}>
          <p className='experience'>Experience {isActive ? '-' : '+'}</p>
        </div>
        {isActive && (
          <div className='experience-list'>
            <div className='w3 exp'>
              West Coast Code Consultant <br />
              Software Engineer <br />
              April 2023 - June 2023
            </div>
            <div className='kr exp'>
              Kratos <br />
              Software Engineer II <br />
              November 2022 - April 2023
            </div>
            <div className='7e exp'>
              7Eagle <br />
              Cybersecurity Apprentice
              <br />
              April 2021 - October 2021
            </div>
            <div className='kr exp'>
              Dollar General <br />
              Data Analyst <br />
              July 2020- April 2021
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Experience
