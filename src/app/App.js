import React, { Component } from 'react';
import './App.css';
import Welcome from '../components/Welcome/Welcome';
import Projects from '../components/Projects/Projects';
import Navbar from '../components/NavBar/Navbar';
import connection from '../firebase/connection';
import projects from '../firebase/projects';

class App extends Component {
  state =
  {
    projects: [],
  }

  componentDidMount ()
  {
    connection();
    projects.getProjects()
      .then((projects) =>
      {
        this.setState({projects});
      })
      .catch((err) => { console.error(err); });
  }

  render () {
    return (
      <div className="App">
        <Navbar />
        <Welcome />
        <Projects projects = {this.state.projects}/>
      </div>
    );
  }
}

export default App;
