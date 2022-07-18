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

export const update = async (user) => {
  const { data } = await axios.put(`http://localhost:8080/users/${user.id}`, user);
  return data;
};

export const remove = async (user) => {
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
export const getProjects = async () => {
  const { data } = await axios.get('http://localhost:8080/projects');
  return data;
};
