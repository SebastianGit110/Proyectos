import axios from "axios";

// Tener en cuenta las {} y () en las funciones ya que en funciones flecha con {} toca especificar el return

export const getTasksRequest = async () =>
  await axios.get("http://localhost:4000/api/tasks"); // Si es funcion con {} especificar return

export const getTaskRequest = async (id) =>
  await axios.get(`http://localhost:4000/api/tasks/${id}`);

export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:4000/api/tasks", task);

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:4000/api/tasks/${id}`); // Uso del template string

export const updateTaskRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/api/tasks/${id}`, newFields);
