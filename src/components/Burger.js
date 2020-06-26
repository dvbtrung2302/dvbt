import React from 'react';

import '../css/Burger.css';

const Burger = (props) => {
  const { isClick, setClick, pathname } = props;

  return(
    <div 
      className={isClick ? "Burger toggle" : "Burger"} 
      onClick={() => setClick(!isClick)}
      style={
        pathname === '/' ? {
          visibility: "visible",
          top: "100%"          
        } : null
      }
    >
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
}

export default Burger;