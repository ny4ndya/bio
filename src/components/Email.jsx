/* eslint-disable no-unused-vars */
import React from 'react';
import './Email.scss';

function Email({darkMode}) {
  return (
    <div className={`email dark-mode-${!darkMode}`}>Email</div>
  )
}

export default Email