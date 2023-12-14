/* eslint-disable no-unused-vars */
import React from 'react';
import './Projects.scss';

function Projects({darkMode}) {
  return (
    <div className={`projects dark-mode-${!darkMode}`}><p>Projects</p></div>
  )
}

export default Projects