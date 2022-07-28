/* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
import axios from 'axios';
// export const getUsers = async () => {
//   const { data } = await axios.get('http://localhost:8080/users');
//   return data;
// };

// GETUSER is ok
export const getUser = async () => {
  const { data } = await axios.get(`http://localhost:8000/users/home`, {
    headers: {
      authorization: localStorage.getItem('authorization'),
    },
  });
  return data;
};

// ADDUSER ID OK
export const addUser = async (user) => {
  const { data } = await axios.post('http://localhost:8000/users/new_user', user);
  return data;
};

// export const updateUser = async (user) => {
//   const { data } = await axios.put(`http://localhost:8080/users/${user.id}`, user);
//   return data;
// };

// export const removeUser = async (user) => {
//   const { data } = await axios.delete(`http://localhost:8080/users/${user.id}`);
//   return data;
// };

export const getTasks = async () => {
  const { data } = await axios.get('http://localhost:8000/tasks/get_tasks', {
    headers: {
      authorization: localStorage.getItem('authorization'),
    },
  });
  return data;
};
export const addTask = async (tasks) => {
  const { data } = await axios.post('http://localhost:8000/tasks/new_tasks', {
    headers: {
      authorization: localStorage.getItem('authorization'),
    },
  });
  return data;
};
export const updateTask = async (task) => {
  const { data } = await axios.put(`http://localhost:8000/tasks/${task.id}/patch_tasks`, {
    headers: {
      authorization: localStorage.getItem('authorization'),
    },
  });
  return data;
};
export const removeTask = async (task) => {
  const { data } = await axios.delete(`http://localhost:8000/tasks/delete_tasks`, {
    headers: {
      authorization: localStorage.getItem('authorization'),
    },
  });
  return data;
};

// GETPROJECTS OK
export const getProjects = async () => {
  const { data } = await axios.get(`http://localhost:8000/projects`, {
    headers: {
      authorization: localStorage.getItem('authorization'),
    },
  });
  return data;
};

// ADDPROJECT IS OK /// 'Cannot destructure property 'data' of '(intermediate value)' as it is undefined.' => Enlever le await?
export const addProject = async (projects) => {
  const { data } = await axios
    .post(`http://localhost:8000/projects/new_projects`, projects, {
      headers: {
        authorization: localStorage.getItem('authorization'),
      },
    })
    .then(async (response) => {
      console.log('addProject /post is ok', response);
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

// à verfier quand il y aura la possibilité gné gné gnéééééééé /// 
export const updateProject = async (project) => {
  const { data } = await axios
    .patch(`http://localhost:8000/projects/patch_project`, project, {
      headers: {
        authorization: localStorage.getItem('authorization'),
      },
    })
    .then(async (response) => {
      console.log('updateProject /post is ok');
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

// à verfier quand il y aura la possibilité gné gné gnéééééééé
export const removeProject = async (project) => {
  const { data } = await axios
    .delete(`http://localhost:8080/projects/delete_projects`, {
      headers: {
        authorization: localStorage.getItem('authorization'),
      },
    })
    .then(async (response) => {
      console.log('removeProject /post is ok');
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

// POST LOGIN IS OK
export const postLogin = async (login) => {
  const { data } = await axios
    .post('http://localhost:8000/users/login', login)
    .then(async (response) => {
      localStorage.setItem('authorization', `bearer: ${response.data.jwtToken}`);
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};

// ----------------------------------jsonserver------------------------------------

// import axios from 'axios';

// export const getUsers = async () => {
//   const { data } = await axios.get('http://localhost:8080/users');
//   return data;
// };

// export const getUser = async (id) => {
//   const { data } = await axios.get(`http://localhost:8080/users/${id}`);
//   return data;
// };

// export const addUser = async (user) => {
//   const { data } = await axios.post('http://localhost:8080/users', user);
//   return data;
// };

// export const updateUser = async (user) => {
//   const { data } = await axios.put(`http://localhost:8080/users/${user.id}`, user);
//   return data;
// };

// export const removeUser = async (user) => {
//   const { data } = await axios.delete(`http://localhost:8080/users/${user.id}`);
//   return data;
// };

// export const getTasks = async () => {
//   const { data } = await axios.get('http://localhost:8080/tasks');
//   return data;
// };
// export const addTask = async (tasks) => {
//   const { data } = await axios.post('http://localhost:8080/tasks', tasks);
//   return data;
// };
// export const updateTask = async (task) => {
//   const { data } = await axios.put(`http://localhost:8080/tasks/${task.id}`, task);
//   return data;
// };
// export const removeTask = async (task) => {
//   const { data } = await axios.delete(`http://localhost:8080/tasks/${task.id}`);
//   return data;
// };

// export const getProjects = async () => {
//   const { data } = await axios.get('http://localhost:8080/projects');
//   return data;
// };
// export const getOneProject = async (id) => {
//   const { data } = await axios.get(`http://localhost:8080/projects/${project.id}`, id);
//   return data;
// };
// export const addProject = async (projects) => {
//   const { data } = await axios.post('http://localhost:8080/projects', projects);
//   console.log(data);
//   return data;
// };
// export const updateProject = async (project) => {
//   const { data } = await axios.put(
//     `http://localhost:8080/projects/${project.id}`,
//     project,
//   );
//   return data;
// };
// export const removeProject = async (project) => {
//   const { data } = await axios.delete(`http://localhost:8080/projects/${project.id}`);
//   return data;
// };

// export const postLogin = async (login) => {
//   const { data } = await axios.post('http://localhost:8080/users/login', login);
//   return data;
// };
