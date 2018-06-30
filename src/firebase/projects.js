import axios from 'axios';
import constants from '../constants';

const getProjects = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/projects/projects.json`)
      .then((res) =>
      {
        const projectsArr = [];
        if (res.data !== null)
        {
          Object.keys(res.data).forEach(key =>
          {
            res.data[key].id = key;
            projectsArr.push(res.data[key]);
          });
        }
        resolve(projectsArr);
      })
      .catch((err) => { reject(err); });
  });
};

export default {getProjects};
