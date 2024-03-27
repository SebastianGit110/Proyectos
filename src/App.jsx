import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/task";

function App() {
  const [tasks, setTasks] = useState(data); // useState([]) -> const name = [], no importa que le asigne algo porque en el useEffect ese valor va a cambiar

  /* useEffect(() => {
    setTasks(data);
    console.log("effect");
  }, []); */

  function createTask(objeto) {
    // Funcion que recibe un obj para añadirlo al array task (cuando le paso un obj) (1 forma)
    // Funcion que recibe un valor y añade directamente el objeto creandolo despues de la coma con title con el valor que le pasa TaskList (2 forma)
    setTasks([
      ...tasks,
      {
        title: objeto.title,
        id: tasks.length,
        description: objeto.description,
      },
    ]); // Copia todos los elementos de tasks y esa sintaxis agrega el obj y se cambia el valor del useState
  }

  function deleteTask(taskId) {
    console.log(tasks);
    console.log(taskId);
    setTasks(tasks.filter((num) => num.id !== taskId)); // Recorro el array tasks y si el num (representa al obj en el array) es igual (false) lo elimina, esto devuelve otro array por lo que se le asigna a tasks
  }

  return (
    <>
      <TaskList tareas={tasks} eliminarTarea={deleteTask} />
      <TaskForm crearTarea={createTask} />
      {/* El orden de los componentes no influye en la creacion de nuevo obj al array */}
    </>
  );
}

export default App;
