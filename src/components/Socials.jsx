/* eslint-disable no-unused-vars */
import React from 'react';
import './Socials.scss';

function Socials({darkMode}) {
  return (
    <div className={`socials dark-mode-${!darkMode}`}>Socials</div>
  )
}

export default Socials