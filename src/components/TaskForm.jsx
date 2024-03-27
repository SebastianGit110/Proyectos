import { useState, useContext } from "react";
import { TaskContextNom } from "../context/TaskContext";

function TaskForm({ crearTarea }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const valor = useContext(TaskContextNom)
  console.log(valor)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);

    crearTarea({
      // Se pasa un obj con title y description
      title,
      description,
    });

    // Establecemos los hooks title y description vacio
    setTitle("");
    setDescription("");

    /* const newTarea = {
      title : title,
      id : "2"
    }
    crearTarea(newTarea) */
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title} // Cuando se envie, el title se establece "" por lo que este tambien lo va a estar
        autoFocus // Cuando se inicie la pagina el cursor va a estar en este input
      ></input>
      <textarea
        placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description} // Cuando se envie, el description se establece "" por lo que este tambien lo va a estar
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
