/* eslint-disable no-unused-vars */
import React from 'react'

function DataCard({darkMode}) {
  return (
    <div className="data-card">
      <div className="photo">
        <svg src='./assets/icon.svg'></svg>
      </div>
      <div>
        <h1>Nadya Jerochim</h1>
        <h2>Software Engineer</h2>
        <p>
          Im a professional Web Developer and UI/UX designer
        </p>
      </div>
      <div className='data-card-socials'>
        <a href='https://www.linkedin.com/in/nadyajerochim'></a>
        <a href='https://github.com/ny4ndya'>GitHub</a>
        <button href='https://cv.nadya.bio'>
          <p>Resume</p>
        </button>
        <a href='https://cv.nadya.bio'></a>
      </div>
    </div>
  )
}

export default DataCard