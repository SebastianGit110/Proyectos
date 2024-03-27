import { createContext } from "react";

export const TaskContextNom = createContext(); // La funcion retorna un objeto, el nombre del contexto. El que almacena los datos

export function TaskContextProvider(props) {
  let x = 20; // Variable que va a poder ser accedida por los componentes hijos pero hay que guardarla en su propiedad value dentro del componente que contiene a todos

  // Componente que contiene el resto de componentes
  return <TaskContextNom.Provider value={x}>{props.children}</TaskContextNom.Provider>;
}

/*

Hay una propiedad de react children y lo que dice es que donde se va a usar esta etiqueta va a haber algo adentro (children)

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
