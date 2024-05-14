import { createContext, useContext, useState } from "react";
import {
  getTasksRequest,
  getTaskRequest,
  createTaskRequest,
  deleteTaskRequest,
  updateTaskRequest,
} from "../api/tasks.api.js";

export const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask must be used whitin a TaskContextProvider");
  }
  return context;
}; // Otra forma de usar el contexto sin estar importando el useContext y el TaskContext donde se vaya a usar

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await getTasksRequest();
    setTasks(response.data);
    console.log(response.data);
  };

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id != id));
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (values) => {
    try {
      const response = await createTaskRequest(values);
      console.log(response);
      // setTasks([...tasks, response.data]); // No es necesario ya que en TaskPage el useState se llena con el useEffect
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, newFields) => {
    try {
      const response = await updateTaskRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const updateTaskDone = async (id, done) => {
    try {
      done === 0 ? (done = 1) : (done = 0);
      await updateTaskRequest(id, { done });
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, done: !task.done } : task
        )
      ); // No es necesario pero hace que la interfaz se recargue ya que esta cambiando el useState, se cambia asi {} y no asi []
      // porque lo que esta cambiando es el elemeneto en cada posicion mas no todo el useState
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        updateTaskDone,
      }}
    >
      {/* tasks = tasks: tasks */}
      {children}
    </TaskContext.Provider>
  );
}
