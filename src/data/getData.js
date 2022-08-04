/* eslint-disable no-undef */
// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
import axios from 'axios';

export const getUser = async () => {
  const { data } = await axios.get(`http://localhost:8000/users/userHome`, {
    headers: {
      authorization: localStorage.getItem('authorization'),
    },
  });
  return data;
};

export const getAllUsers = async () => {
  const { data } = await axios.get(`http://localhost:8000/users/allUsers`, {
    headers: {
      authorization: localStorage.getItem('authorization'),
    },
  });
  return data;
};

export const addUser = async (user) => {
  const { data } = await axios.post('http://localhost:8000/users/newUser', user);
  return data;
};

// export const updateUser = async (user) => {
//   const { data } = await axios.put(`http://localhost:8000/users//home/updateUser`, user, {
//     headers: {
//       authorization: localStorage.getItem('authorization'),
//     },
//   });
//   return data;
// };

// export const removeUser = async (user) => {
//   const { data } = await axios.delete(`http://localhost:8080/users/${user.id}`);
//   return data;
// };

export const getTasks = async (projectId) => {
  // console.log(`project:`, project);
  const { data } = await axios.get(
    `http://localhost:8000/tasks/get_tasksByProject/${projectId}`,
    {
      headers: {
        authorization: localStorage.getItem('authorization'),
      },
    },
  );
  return data;
};

export const addTask = async (project) => {
  const { data } = await axios.post(
    `http://localhost:8000/tasks/new_task/${project.id}`,
    project,
    {
      headers: {
        authorization: localStorage.getItem('authorization'),
      },
    },
  );
  return data;
};

export const updateTask = async (task) => {
  const { data } = await axios.patch(
    `http://localhost:8000/tasks/patch_task/${task.id}`,
    task,
    {
      headers: {
        authorization: localStorage.getItem('authorization'),
      },
    },
  );
  return data;
};

export const removeTask = async (task) => {
  const { data } = await axios.delete(
    `http://localhost:8000/tasks/delete_task/${task.id}`,
    {
      headers: {
        authorization: localStorage.getItem('authorization'),
      },
    },
  );
  return data;
};

export const getAllTasksByUser = async () => {
  const { data } = await axios.get('http://localhost:8000/tasks/get_tasksByUser', {
    headers: {
      authorization: localStorage.getItem('authorization'),
    },
  });
  return data;
};

// GETPROJECTS HAVE A BUG IN BACK END DATA IS HERE BUT NOT GOOD
export const getProjects = async () => {
  const { data } = await axios.get(`http://localhost:8000/projects`, {
    headers: {
      authorization: localStorage.getItem('authorization'),
    },
  });
  return data;
};

export const addProject = async (projects) => {
  const { data } = await axios.post(
    `http://localhost:8000/projects/new_project`,
    projects,
    {
      headers: {
        authorization: localStorage.getItem('authorization'),
      },
    },
  );
  return data;
};

export const updateProject = async (project) => {
  const { data } = await axios.patch(
    `http://localhost:8000/projects/patch_project/${project.id}`,
    project,
    {
      headers: {
        authorization: localStorage.getItem('authorization'),
      },
    },
  );
  return data;
};

export const removeProject = async (project) => {
  const { data } = await axios.delete(
    `http://localhost:8000/projects/delete_project/${project.id}`,
    {
      headers: {
        authorization: localStorage.getItem('authorization'),
      },
    },
  );

  return data;
};

export const postLogin = async (login) => {
  const { data } = await axios
    .post('http://localhost:8000/users/login', login)
    .then(async (response) => {
      localStorage.setItem('authorization', `bearer: ${response.data.jwtToken}`);
      return response;
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
