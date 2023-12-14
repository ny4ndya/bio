/* eslint-disable no-unused-vars */
import React from 'react'
import './DataCard.scss';
import icon from '../assets/icon.svg';
import githubIconLight from '../assets/github-icon-light.svg';
import githubIconDark from '../assets/github-icon-dark.svg';
import linkedinIcon from '../assets/linkedin.svg';
import cvIcon from '../assets/cv.svg';

function DataCard({darkMode, isEnglish}) {
  return (
    <div className={`data-card dark-mode-${!darkMode}`}>
      <div className="photo">
      <img src={icon} alt="moon icon" height='180px'/>
      </div>
      <div className='data-card-section'>
        <h1>Nadya Jerochim</h1>
        {
          isEnglish?
            <p>
              Im a professional fullstack developer and Im looking for projects to work on!
            </p>:
            <p>
            Soy fullstack developer y estoy buscando nuevos proyectos para trabajar!
            </p>  
        }
      <div className='data-card-socials'>
        <a href='https://cv.nadya.bio'>
          <img src={cvIcon} height='50px'/>
        </a>
        <a href='https://www.linkedin.com/in/nadyajerochim'>
          <img src={linkedinIcon} height='50px'/>
        </a>
        <a href='https://github.com/ny4ndya'>
          {
            darkMode?
              <img src={githubIconDark} height='40px'/>:
              <img src={githubIconLight} height='40px'/>
          }
        </a>
      </div>
      </div>
    </div>
  )
}

export default DataCard