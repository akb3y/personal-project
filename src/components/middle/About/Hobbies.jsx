import { useState } from 'react'

function Hobbies() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='Hobbies'>
      <div className='accordion-item'>
        <div className='accordion-title' onClick={() => setIsActive(!isActive)}>
          <p className='hobbies'>Hobbies {isActive ? '-' : '+'}</p>
        </div>
        {isActive && (
          <div className='hobbies-list'>
            <iframe
              style={{ borderRadius: '12px' }}
              title='Eurovision playlist'
              src='https://open.spotify.com/embed/playlist/6yUp9EJsf0IeerrfUmHWTS?utm_source=generator'
              width='100%'
              height='380'
              frameBorder='0'
              allowFullScreen=''
              allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            ></iframe>

            <ul>
              <li>Listening to music</li>
              <ul>
                <li>80s</li>
                <li>Punk</li>
                <li>00s Pop</li>
                <li>Eurovision</li>
              </ul>
              <li>Playing with my dogs, Max & Ari</li>
              <img
                src={require('../../../images/Max-on-doggy-bed.jpg')}
                alt='Maximus'
              />
              <img
                src={require('../../../images/Ari-with-tongue-out.jpg')}
                alt='Maximus'
              />
              <li>Playing video games</li>
              <ul>
                <li>Skyrim</li>
                <li>anything Super Mario or Donkey Kong</li>
                <li>Horizon</li>
                <li>The Last of Us</li>
              </ul>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Hobbies
