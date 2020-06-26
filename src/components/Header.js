import React from 'react';

import '../css/Header.css';

const Header = (props) => {
  const { type, header } = props;

  return(
    <div className={type === 'topmenu' ? "Header header-mobile" : "Header d-none d-sm-block" }>
      <h1>
        {header.main}
        <span> {header.sub}</span>
      </h1>
      {
        type !== 'topmenu' && <span className="header-bg">{header.bg}</span>
      }
    </div>
  );
}

export default Header;