import React from 'react';

import '../css/Experience.css';

const Experience = (props) => {
  const { icon, time, text, place, des } = props

  return(
    <div className="Experience">
      <div className="icon">{icon}</div>
      <div className="content">
        <div className="time">{time}</div>
        <div className="text">
          {text}
          <span>{place}</span>
        </div>
        <p className="des">{des}</p>
      </div>
    </div>
  );
}

export default Experience;