import React from 'react';
import './Projects.css';

class Projects extends React.Component
{
  render ()
  {
    const {projects} = this.props;

    const projectsComponents = projects.map((project) =>
    {
      return (
        <div className="col-sm-6 col-md-4" key={project.id}>
          <div className="thumbnail">
            <a href={project.url}><img src={project.imageUrl} alt="project"/></a>
            <div className="caption">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>{project.technologiesUsed}</strong></p>
              <p>You can find source code for the project <a href={project.githubUrl}>Here</a></p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="Projects">
        <div className="row projectsBar">
          <h3 className="projectsTitle">Projects</h3>
        </div>
        <div className="row projectsBay">{projectsComponents}</div>
      </div>
    );
  }
};

export default Projects;
