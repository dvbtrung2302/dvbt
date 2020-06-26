import React from 'react';

import '../css/Preloader.css';

const Preloader = (props) => {
  const { loading } = props;

  return(
    <div className={`Preloader ${!loading ? 'off' : ''}`}>
      <div className="black-wall"></div>
      <div className="loader"></div>
    </div>
  );
}

export default Preloader;