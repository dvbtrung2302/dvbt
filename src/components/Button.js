import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../css/Button.css';

const Button = (props) => {
  const { type, title, icon, url} = props;
  return(
    <div className="Button">
      {
        type === 'button' ?
        <button type="submit">
          <p>
            {title}
          </p>
          {icon}
        </button> :
        <Link to={url || ''}>
          <p>
            {title}
          </p>
          {icon}
        </Link>
      }
    </div>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.object,
  url: PropTypes.string
};

export default Button;