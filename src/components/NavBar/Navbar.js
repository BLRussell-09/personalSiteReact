import React from 'react';
import './Navbar.css';

class Navbar extends React.Component
{
  render ()
  {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">Barry Russell</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a a href="https://personalsite-b8a15.firebaseapp.com/images/Barry%20Russell%20Resume.pdf">Portfolio <span className="sr-only">(current)</span></a></li>
              <li><a href="#blogs">Blogs</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
