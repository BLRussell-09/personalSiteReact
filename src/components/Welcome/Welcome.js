import React from 'react';
import './Welcome.css';
import Projects from '../Projects/Projects';
import projects from '../../firebase/projects';

class Welcome extends React.Component
{
  state =
  {
    projects: [],
  }

  componentDidMount ()
  {
    projects.getProjects()
      .then((projects) =>
      {
        this.setState({projects});
      })
      .catch((err) => { console.error(err); });
  }

  render ()
  {
    return (
      <div className="Welcome container-fluid">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-sm-12 col-md-7">
            <h2 className="welcomeHeader">Hi, I'm Barry</h2>
            <div className="jumbotron welcomeCard">
              <div className="row">
                <div className="col-md-6">
                  <img className="faceImage" src={require('../../styles/br-cartoon.jpg')} alt="Welcome Card"/>
                </div>
                <div className="col-md-6">
                  <h2>About Me</h2>
                  <p>I have always loved technology, and figuring out how things work!</p>
                  <div class="card-action">
                    <a href="https://github.com/BLRussell-09"> <img src={require('../../images/gitHub.svg')} alt="GitHub" class="githubIcon"/></a>
                    <a href="mailto:blrussell09@gmail.com?"> <img src={require('../../images/email.svg')} alt="Email" class="emailIcon"/></a>
                    <a href="https://soundcloud.com"> <img src={require('../../images/soundcloud.svg')} alt="SoundCloud" class="soundcloudIcon"/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <Projects projects={this.state.projects}/>
        </div>
      </div>
    );
  }
}

export default Welcome;
