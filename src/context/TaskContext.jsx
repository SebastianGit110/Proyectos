import { createContext, useState } from "react";
import { tasks as data } from "../data/task";

export const TaskContextNom = createContext(); // La funcion retorna un objeto, el nombre del contexto. El que almacena los datos

export function TaskContextProvider(props) {
  // let x = 20; // Variable que va a poder ser accedida por los componentes hijos pero hay que guardarla en su propiedad value dentro del componente que contiene a todos

  // Componente que contiene el resto de componentes

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
    <TaskContextNom.Provider
      value={{
        tasks,
        createTask,
        deleteTask: deleteTask,
      }}
    >
      {props.children}
    </TaskContextNom.Provider>
  );
}

/*

Hay una propiedad de react -> children y lo que dice es que donde se va a usar esta etiqueta va a haber algo adentro (children)

function TaskContext(props) {
  return <>{props.children}</>;
}

function TaskCard({ task, eliminarTarea }) {
  return (
    <TaskContext>
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button onClick={() => eliminarTarea(task.id)}>Eliminar</button>
      </div>
    </TaskContext>
  );
}

*/
