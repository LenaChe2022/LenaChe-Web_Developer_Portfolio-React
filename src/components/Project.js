import React from 'react';


function ProjectList({props}) {
  return (
      <div className="text-center parent">
       {props.map((prop) => (
       <div key={prop.id} className="view-card">
       <h1> {prop.title}</h1>
       <h3>Description: {prop.description}</h3>
      <img
        alt={prop.title}
        className="img-fluid"
        src={prop.src}
        style={{ margin: '0 auto' }}
      />
      <h3>Link: <a href={prop.link}>{prop.link}</a></h3>
      <h3>GitHub repository: <a href={prop.gitHub}>{prop.gitHub}</a></h3>
      </div>
      ))}
    </div>
  );
}


export default ProjectList;