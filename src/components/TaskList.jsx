import { useContext } from "react";
import { TaskContextNom } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {
  const { tasks } = useContext(TaskContextNom); // El deleteTask se lo pasamos directamente a TaskCars, pero el array task si toca pasarlo a TaskCard ya que se va recorriendo y se le pasa es cada valor por cada posicion

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas</h1>;
  }

  return (
    // Recorre las tareas y las muestra en un componente
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}

      {/* {tasks.map((task) => {
        return <div>Tarea</div>;
      })} // En react cuando se utiliza una función flecha dentro de {} la funcion necesita return explicito pero si esta entre () considera ese valor como lo que debe retornar */}
    </div>
  );
}

export default TaskList;
