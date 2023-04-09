import React from 'react';

function ProjectDetail(props) {
  return (
    <div className="text-center">
      <img
        alt={props.title}
        className="img-fluid"
        src={props.src}
        style={{ margin: '0 auto' }}
      />
      <h3>Link: {props.link}</h3>
      <h3>GitHub repository: <a href={props.gitHubLink}>{props.gitHubLink}</a></h3>
    </div>
  );
}

export default ProjectDetail;