import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Welcome from '../components/Welcome/Welcome';
import Blogs from '../components/Blogs/Blogs';
import Navbar from '../components/NavBar/Navbar';
import connection from '../firebase/connection';
import projects from '../firebase/projects';
import blogs from '../firebase/blogs';

class App extends Component {
  state =
  {
    projects: [],
    blogs: [],
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

    blogs.getBlogs()
      .then((blogs) =>
      {
        this.setState({blogs});
      })
      .catch((err) => { console.error(err); });
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="container-fluid">
              <div className="row">
                <Switch>
                  <Route
                    component={Blogs}
                    path='/blogs'
                  />
                  <Route path="/" exact component={Welcome}/>
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
