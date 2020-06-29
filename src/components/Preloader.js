import React from 'react';
import PropTypes from 'prop-types';

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

Preloader.propTypes = {
  loading: PropTypes.bool
};

export default Preloader;