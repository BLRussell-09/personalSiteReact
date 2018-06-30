import React from 'react';
import './Welcome.css';

class Welcome extends React.Component
{
  render ()
  {
    return (
      <div className="Welcome row">
        <div className="col-md-4"></div>
        <div className="col-sm-12 col-md-7">
          <h2 className="welcomeHeader">Hi, I'm Barry</h2>
          <div className="jumbotron welcomeCard">
            <div className="row">
              <div className="col-md-4">
                <img className="faceImage" src={require('../../styles/br-cartoon.jpg')} alt="Welcome Card"/>
              </div>
              <div className="col-md-8">
                <h2>About Me</h2>
                <p>I have always loved technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
