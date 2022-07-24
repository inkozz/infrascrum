import axios from 'axios';

export const getUsers = async () => {
  const { data } = await axios.get('http://localhost:8080/users');
  return data;
};

export const getUser = async (id) => {
  const { data } = await axios.get(`http://localhost:8080/users/${id}`);
  return data;
};

export const addUser = async (user) => {
  const { data } = await axios.post('http://localhost:8080/users', user);
  return data;
};

export const updateUser = async (user) => {
  const { data } = await axios.put(`http://localhost:8080/users/${user.id}`, user);
  return data;
};

export const removeUser = async (user) => {
  const { data } = await axios.delete(`http://localhost:8080/users/${user.id}`);
  return data;
};

export const getTasks = async () => {
  const { data } = await axios.get('http://localhost:8080/tasks');
  return data;
};
export const addTask = async (tasks) => {
  const { data } = await axios.post('http://localhost:8080/tasks', tasks);
  return data;
};
export const updateTask = async (task) => {
  const { data } = await axios.put(`http://localhost:8080/tasks/${task.id}`, task);
  return data;
};
export const removeTask = async (task) => {
  const { data } = await axios.delete(`http://localhost:8080/tasks/${task.id}`);
  return data;
};

export const getProjects = async () => {
  const { data } = await axios.get('http://localhost:8080/projects');
  return data;
};
export const addProject = async (projects) => {
  const { data } = await axios.post('http://localhost:8080/projects', projects);
  console.log(data);
  return data;
};
export const updateProject = async (project) => {
  const { data } = await axios.put(`http://localhost:8080/projects/${project.id}`, project);
  return data;
};
export const removeProject = async (project) => {
  const { data } = await axios.delete(`http://localhost:8080/projects/${project.id}`);
  return data;
};

export const postLogin = async (login) => {
  const { data } = await axios.post('http://localhost:8080/login', login);
  return data;
};
