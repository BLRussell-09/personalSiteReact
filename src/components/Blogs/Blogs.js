import React from 'react';
import './Blogs.css';
import blogs from '../../firebase/blogs';

class Blogs extends React.Component
{

  state =
  {
    blogs: [],
  }

  componentDidMount ()
  {
    blogs.getBlogs()
      .then((blogs) =>
      {
        this.setState({blogs});
      })
      .catch((err) => { console.error(err); });
  }

  render ()
  {
    const blogComponents = this.state.blogs.map((blog) =>
    {
      return (
        <div className="col-sm-6 col-md-3 blogCont" key={blog.id}>
          <div className="jumbotron" id="blogTron">
            <h3>{blog.title}:{blog.date}</h3>
            <p className="blogPost">{blog.post}}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="Blogs">
        <div className="row">
          <h3 className="blogsHeader">Blogs</h3>
        </div>
        <div className="row blogsBay">{blogComponents}</div>
      </div>
    );
  }
}

export default Blogs;
