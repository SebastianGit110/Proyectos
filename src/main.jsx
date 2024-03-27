import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TaskContextProvider } from "./context/TaskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvider> {/* Componente que contiene todo */}
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);

/* 

- En vite es necesario trabajar con extension jsx para componentes
- En assets se van a poner svg, imgs o logotipos
- El main.jsx es lo mismo que el index.js de create-react-app
- La etiqueta <React.StrictMode> dice que hay un codigo que se ejecuta en desarrollo para saber si se esta escribiendo codigo correcto en react (recomendaciones que da el IDE)
- La etiqueta <React.StrictMode> hace que el componente se renderize dos veces en modo desarrollo para ayudar ver si existen errores. En produccion no se ejecuta esa etiqueta 
- Plugging emmet ul>li*3>a.clase{hola} en html para escribir cod mas rapido ir a user settings buscar emmet y si no esta, se agrega el item: value
- Extension ES7 + React/Redux/React-Native snippets: Permite crear codigo jsx mas rapido rfce -> funcion, imp -> import
- El componente App contiene a TaskForm y TaskList en donde taskList tiene el arreglo de tareas y solo esta disponible ahi, por lo que ni TaskForm ni App pueden acceder a el array. Para que todos puedan acceder al arreglo, debemos subirlo un nivel, es decir, que ahora App es el que tiene el arreglo y desde ahi se lo pasa a los dos componentes
- Teniendo el array en App, se lo podemos pasar a TaskForm y que el lo modifique pero react no utiliza ese enfoque, lo que react dice es que para alterar el arreglo tenemos que crear una funcion en App (createTask) y esa funcion se la pasamos a Taskform, ese componente le da un dato y se lo devuelve a App y App altera el array
- Separar componentes en subcomponentes: Separamos TaskCard y lo llamamos en TaskList
- Metodo filter(n => n !== num) (n representa un dato en el array) si es true, el valor se queda, de lo contrario lo filtra y crea otro nuevo array si modificar el original
- Se crea una funcion deleteTask que tambien va a estar en App y pasarlo al que lo va a usar (TaskCard) pero primero tiene que pasar por TaskList ya que este es el que se llama en App y App llama a TaskCard 
- Hasta el momento App es el dueño del useState y de las funciones para modificar ese estado, y si quiero acceder a sus metodos desde otros componentes, toca pasarlos por props, pero ahora con useContext o con un contexto, que es como un componentes que contiene a todo, estas variables van a poder ser accedidas desde cualquier componente que este dentro del contexto sin necesidad de pasarlo como props ya que react nos da esta forma de context (API context) para traer datos
- Crear un componente especial que nos da react, la funcion createContext() devuelve un objeto y este sera el nombre de la etiqueta contenedora, en el componente creado en codigo estara esta esta etiqueta pero con .Provider se crea el componente
- createContext -> Crea el contexto, useContext -> usa el contexto
- Como yo puedo crear varios contextos, en ell componente en el que quiera usar uno de ellos, tengo que decir cual contexto

*/
