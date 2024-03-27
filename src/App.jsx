import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskList />
        <TaskForm />
      </div>
      {/* El orden de los componentes no influye en la creacion de nuevo obj al array */}
    </main>
  );
}

export default App;
