import React from 'react';
import {
  FaFileAlt,
  FaUser,
  FaCode,
  FaExternalLinkAlt
} from 'react-icons/fa';

import '../css/ProjectDetail.css';

const ProjectDetail = (props) => {
  const { project, active } = props;
  const content = [
    { icon: <FaFileAlt />, key: 'project', value: project.detail ? project.detail.type : ''},
    { icon: <FaUser />, key: 'client', value: project.detail ? project.detail.client : ''},
    { icon: <FaCode />, key: 'languages', value: project.detail ? project.detail.language : ''},
    { icon: <FaExternalLinkAlt />, key: 'preview', value: project.detail ? project.detail.preview : ''},
  ];
  return(
    <div className={`ProjectDetail ${active ? 'active' : ''}`}>
      <div className="overlay"></div>
      <h1>{project.title || 'asdsa'}</h1>
      <div className="row m-0 detail">
        {
          content.map(item => 
            <div className="col-6 mb-3" key={item.key}>
              {item.icon}
              <span className="key">{item.key}</span>
              <span> : </span>
              {
                item.key === 'preview' ? 
                <a target="blank" href={item.value}>{item.value || 'asds'}</a> :
                <span>{item.value || 'asdsa'}</span>
              }
            </div>
          )
        }
      </div>
      <div className="img-wrapper">
        <img src={project.image} alt="" />
      </div>
    </div>
  );
}

export default ProjectDetail;