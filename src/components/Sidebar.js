import React from 'react';
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

import '../css/Sidebar.css';

const Sidebar = (props) => {
  const nav = [
    { name: 'HOME', url: '/dvbt/', icon: <FaHome />},
    { name: 'ABOUT', url: '/dvbt/about', icon: <FaUserAlt />},
    { name: 'PORTFOLIO', url: '/dvbt/portfolio', icon: <FaBriefcase />},
    { name: 'CONTACT', url: '/dvbt/contact', icon: <FaEnvelopeOpen />},
    { name: 'BLOG', url: '/dvbt/blog', icon: <FaComments />}
  ]
  return(
    <div className="Sidebar d-none d-sm-flex">
      <ul className="nav">
        {
          nav.map(item => 
            <li key={item.name} className="nav-item">
              <Link 
                to={item.url}
                className={props.location.pathname === item.url ? "nav-active" : null}
              >
                {item.icon}
                <p className="nav-name">{item.name}</p>
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  );
}

export default withRouter(Sidebar);