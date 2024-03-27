import TaskCard from "./TaskCard";

function TaskList({ tareas, eliminarTarea }) {
  // Ahora el arreglo lo contiene el componente App y se lo pasa al componente por props
  /* const [tasks, setTasks] = useState(data); // useState([]) -> const name = []

  console.log("hola");

  /* useEffect(() => {
    setTasks(data);
    console.log("effect");
  }, []); */
  // Cuando se haya inicializado el componente -> setTasks(data) porque si se hace en el useState sale error porque como todavia el componente no se ha inicializado no puede acceder a data */

  if (tareas.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    // Recorre las tareas y las muestra en un componente
    <div>
      {tareas.map((task) => (
        <TaskCard key={task.id} task={task} eliminarTarea={eliminarTarea} />
      ))}

      {/* {tasks.map((task) => {
        return <div>Tarea</div>;
      })} // En react cuando se utiliza una función flecha dentro de {} la funcion necesita return explicito pero si esta entre () considera ese valor como lo que debe retornar */}
    </div>
  );
}

export default TaskList;
