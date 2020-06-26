import React, { useState } from 'react';
import { 
  Link,
  withRouter 
} from 'react-router-dom';
import { 
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaEnvelopeOpen,
  FaComments
 } from 'react-icons/fa';

import '../css/Topbar.css';
import Burger from './Burger';
import Header from './Header';

const Topbar = (props) => {
  const [ isClick, setClick ] = useState(false);

  const nav = [
    { name: 'HOME', url: '/dvbt', icon: <FaHome />},
    { name: 'ABOUT', url: '/dvbt/about', icon: <FaUserAlt />},
    { name: 'PORTFOLIO', url: '/dvbt/portfolio', icon: <FaBriefcase />},
    { name: 'CONTACT', url: '/dvbt/contact', icon: <FaEnvelopeOpen />},
    { name: 'BLOG', url: '/dvbt/blog', icon: <FaComments />}
  ];

  const renderHeader = () => {
    switch(props.location.pathname) {
      case '/dvbt/about': 
        return { bg: 'resume', main: 'about', sub: 'me' };
      case '/dvbt/portfolio':
        return { bg: 'works', main: 'my', sub: 'portfolio' };
      case '/dvbt/contact':
        return { bg: 'contact', main: 'get in', sub: 'touch' };
      case '/dvbt/blog':
        return { bg: 'posts', main: 'my', sub: 'blogs'};
      default:
        return { bg: '', main: '', sub: '' };
    }
  }

  const header = renderHeader();

  return(
    <div 
      className="Topbar d-block d-sm-none"
      style={
        props.location.pathname === '/dvbt/' ? {
          visibility: "hidden"
        } : null
      }
    >
      <Header type="topmenu" header={header} />
      <Burger isClick={isClick} setClick={setClick} pathname={props.location.pathname} />
      <ul 
        className={isClick ? "nav nav-active" : "nav"}
        style={
          props.location.pathname === '/dvbt/' ? {
            visibility: "visible"
          } : null
        }
      >
        {
          nav.map(item => 
            <li className="nav-item" key={item.name}>
              <Link 
                to={item.url}
                onClick={() => setClick(!isClick)}
                className={ props.location.pathname === item.url ? "nav-item-active" : null}
              >
                {item.icon}
                <p>{item.name}</p>
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default withRouter(Topbar);