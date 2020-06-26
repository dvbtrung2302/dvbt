import React from 'react';
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

export default Button;