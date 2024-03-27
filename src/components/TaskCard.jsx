import { useContext } from "react";
import { TaskContextNom } from "../context/TaskContext";

function TaskCard({ task }) {
  /* const valor = useContext(TaskContextNom); // Estamos usando la var x del contexto
  console.log(valor)  
 */

  const { deleteTask } = useContext(TaskContextNom);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;

/* 
  --
  onClick={eliminarTarea} // React automáticamente pasa el objeto de evento como argumento a la función deleteTask cuando se dispara el evento; (eliminarTarea(e)) aunque asi no estaria correcto porque ese parametro no es valido porque e no estaria definido, lo correcto seria escribir una funcion flecha

  function deleteTask(taskId, hola) { // En ese caso, taskId va a ser el evento (e)
      console.log(tasks)
      console.log(taskId)
      console.log(hola) // se imprime como undefined
    }
  --

  --
  onClick={eliminarTarea(num)} // Se ejecutaria esa funcion cada que se renderize un componente y despues no funcionaria cuando se dispare el evento, pero si imprime el dato que se le pase, mas no el objeto

  function deleteTask(taskId) {
    console.log(tasks)
    console.log(taskId)
  }
  --

  --
  onClick={()=>()} //Con la funcion anonima es la mejor forma de pasar el manejador de eventos ya que asi si nos da el comportamiento esperado

  function deleteTask(taskId, hola) {
    console.log(tasks)
    console.log(taskId)
  }
  --
   */
