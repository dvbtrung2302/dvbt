import React from 'react';

import '../css/Achievement.css';

const Achievement = (props) => {
  const { item } = props;

  return(
    <div className="Achievement">
      <h3 className="amount">{item.amount}</h3>
      <div className="text">
        {item.text}
        <p>{item.subText}</p>
      </div>
    </div>
  );
}

export default Achievement;