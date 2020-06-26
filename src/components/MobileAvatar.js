import React from 'react';

import '../css/MobileAvatar.css';

const MobileAvatar = (props) => {
  const { type } = props;
  return(
    <div 
      className={
        type === 'about' ?
        "MobileAvatar d-block d-sm-none" :
        "MobileAvatar d-none d-xl-none d-md-block"
      }
    ></div>
  );
}

export default MobileAvatar;