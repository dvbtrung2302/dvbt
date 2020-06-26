import React from 'react';

import '../css/Skill.css';

const Skill = (props) => {
  const { skill } = props;
  return(
    <div className="Skill">
      <div className="percent">
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle 
            cx="70" 
            cy="70" 
            r="70"  
            style={{
              strokeDashoffset: `calc(440 - (440 * ${skill.percent}) / 100)`
            }}></circle>
        </svg>
        <div className="number">
          <h2>{skill.percent}%</h2>
        </div>
      </div>
      <div className="text">{skill.name}</div>
    </div>
  );
}

export default Skill;