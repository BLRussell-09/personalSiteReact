import axios from 'axios';
import constants from '../constants';

const getBlogs = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/blogs/blogs.json`)
      .then((res) =>
      {
        const blogs = [];
        if (res.data !== null)
        {
          Object.keys(res.data).forEach(key =>
          {
            res.data[key].id = key;
            blogs.unshift(res.data[key]);
          });
        }
        resolve(blogs);
      })
      .catch((err) => { reject(err); });
  });
};

export default {getBlogs};
