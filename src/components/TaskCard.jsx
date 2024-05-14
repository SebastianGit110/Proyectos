import { useTask } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

function TaskCard({ task }) {
  const { deleteTask, updateTaskDone } = useTask(); // Habia un error que pasaba en el video de que useTask no estaba dentro del contexto y la solucion era poner el createContext en otro archivo
  const navigate = useNavigate();
  return (
    <div className="bg-slate-400 rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done == 1 ? "✔️" : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      <span>{task.createAt}</span>
      <div className="flex gap-x-1">
        <button
          className="bg-slate-500 px-2 py-1 text-white"
          onClick={() => {
            navigate(`edit/${task.id}`);
          }}
        >
          Edit
        </button>
        <button
          className="bg-red-500 px-2 py-1 text-white"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Delete
        </button>
        <button
          className="bg-green-500 px-2 py-1 text-white"
          onClick={() => {
            updateTaskDone(task.id, task.done);
          }}
        >
          Toggle done
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
