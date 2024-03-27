import { useState, useContext } from "react";
import { TaskContextNom } from "../context/TaskContext";

function TaskForm({ crearTarea }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContextNom); // en vez de nombrar la var como valor, desestructuro el obj que defini en el atributo del contexto y traigo lo que necesito
  // console.log(valor)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);

    createTask({
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
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mt-4">
        <h1 className="text-2xl font-bold mb-3 text-white">Crear tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title} // Cuando se envie, el title se establece "" por lo que este tambien lo va a estar
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus // Cuando se inicie la pagina el cursor va a estar en este input
        ></input>
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description} // Cuando se envie, el description se establece "" por lo que este tambien lo va a estar
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
