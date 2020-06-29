import React, { useEffect } from 'react';
import { FaUserAlt } from 'react-icons/fa';

import '../css/Home.css';
import Button from '../components/Button';
import MobileAvatar from '../components/MobileAvatar';

const Home = () => {
  useEffect(() => {
    document.title = 'Bao Trung - Personal Portfolio';
  });

  return(
    <div className="Home container-fluid p-xl-5">
      <div className="color-block d-xl-block d-none"></div>
      <div className="row h-100 ">
        <div className="avatar col-xl-4 p-0 d-xl-block d-none"></div>
        <div className="intro col-xl-8">
          <MobileAvatar />
          <h6>HI THERE !</h6>
          <h1>
            I'M 
            <span> BAO TRUNG</span>
          </h1>
          <p>I am 20 years old, i am a second year student at the University of Information Technology. I have the desire to become a web designer & front‑end developer, I am passionate about building excellent website that improves the lives of those around me. </p>
          <div>
            <Button title="more about me" icon={<FaUserAlt />} url="/about" />  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;