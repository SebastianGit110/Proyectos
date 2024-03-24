/*
format document -> (prettier) shift + alt + f
toogle block comment -> shift + alt + a

open workspace settings (JSON): Herramienta vscode para que no tenga que usar el scroll horizontal
{
    "editor.wordWrap" : "on"
}
 */

import React from "react"; // El modulo o biblioteca esta en las dependencias de package.json y aqui se requiere
import ReactDOM from "react-dom/client"; // React no solo sirve para app web sino para interfaces entonces se especifica que se va a trabajar para el navegador

import ExportDefaultNom, { Saludar, UserCard } from "./Componentes"; // Importo la funcion por defecto y la funcion Saludar, UserCard del archivo componentes, no es necesario poner .js porque create-react-app ya importa las extensiones; la funcion por exportada defecto por legibilidad se escribe primero
import { Button } from "./Button";
import { TaskCard, CardCondicional } from "./Task";
import { Clase } from "./CompClase";
import { Post, Desestructurar, arregloUsuarios } from "./Posts";
import HookuseState, { InputUseState } from "./Hooks";

//const rootElement = document.getElementById('root'); // Se crea la variable que hace referencia a la etiqueta div root de la carpeta public
const root = ReactDOM.createRoot(document.getElementById("root")); // Se almacena en una var root a la aplicacion inicial lo que react llama elemento root

// .render espera elementos hijos para ponerlos en la aplicacion inicial root
const handleChange = (e) => {
  console.log(e.target.value + "...");
};

root.render(
  <>
    {/*Soy un comentario */}
    {/* <UserCard title="Hello" name="Sebas" />
    <UserCard title="Hello" />
    <ExportDefaultNom
      name="Sebas Ravelo"
      amount={3000}
      married={true}
      points={[10, 2.3, 3]}
      address={{ street: "Ensueño", city: "Bogotá" }}
      greet={function () {
        alert("Hello world");
      }}
    />
    <ExportDefaultNom
      name="Isa Ravelo"
      amount={2000}
      married={false}
      points={[10, 2]}
      address={{ street: "Ensueño", city: "Bogotá" }}
      greet={function () {
        alert("Hello world");
      }}
    /> */}
    {/* <Button text="Click me" />
    <Button text="Pay" />
    <Button name="Sebas" />
    {/* <Button text={{ value: "hola" }} /> // React no permite objetos como hijos por lo que bota error ya que en el componente text es hijo de button, no confundir con text.value ya que eso es un string a diferencia de text */}
    <TaskCard />
    <CardCondicional ready={true} />
    <Clase />
    <Button text="Sebas" />
    <input
      id="myId"
      onClick={function (e) {
        alert("Input seleccionado " + e.target.id);
        {
          /*e.target.id lo saco del navegador ya que e es un objeto que se muestra en el navegador*/
        }
      }}
    />
    <input id="soyId" onChange={handleChange} />
    <input onDoubleClick={() => console.log("Doble click")} />{" "}
    {/*Quite los {} porque esta solo el console.log*/}
    <form
      onSubmit={(e) => {
        // Trata de enviar datos a un servidor
        e.preventDefault(); // Quita el comportamiento por defecto, se sobreescribe
        console.log("Enviado");
      }}
    >
      <h1>Registro de usuario</h1>
      <button>Send</button>
    </form>
    <Post />
    <Desestructurar />
    {arregloUsuarios.map((user, index) => {
      // El array esta en Post
      // El navegador nos muestra una advertencia y es porque cada elemento debe tener un key(id de los elementos interno en react) unico (el key lo debe tener el primer elemento que contiene al resto)
      // El segundo parametro que retorna map es el indice del obj que esta recorriendo y es el que le vamos a asignar a key para que no salga la advertencia (no es necesario especificar el key)
      // return <h1 key={index}>{user.nombre}</h1>;

      return (
        <div key={index}>
          <h1>{user.nombre}</h1>
          <img src={user.image} width={"70px"} />
        </div>
      );
    })}
    <HookuseState />
    <InputUseState />
  </>
);

// APUNTES

// Componentes: Porciones de una interfaz grande, en react se utilizan mediante funciones o clases que se pueden reutilizar

// Siempre debe haber un elemento que contenga al resto, si yo no quiero poner una etiqueta html para contener otras etiquetas, lo que puedo hacer es utilizar fragment <></> (contenedor vacio) cumple con la regla de react

// Extension JSX: En react no se esta utilizando la sintaxis de javascript sino jsx que es una combinacion entre js y html
// jsx tiene la ventaja de permitir retornar html a diferencia de js y despues se convierte el jsx a js
// Para ejecutar codigo dentro de una etiqueta html, react dice que se pone en llaves {}

// Se esta creando un componente y react dice que lo puedo utilizar como funcion o como etiquetas html
// La inicial del nombre del componente en jsx debe ser en mayuscula para diferenciarlo de etiquetas html, si es en minuscula react no lo reconoce como componente

// I/Es modules: Dividir multiples componentes en multiples archivos utilizando la sintaxis de js import, export

// props: poder cambiar datos en un componente internamente, son argumentos en la funcion o componente, nombre = valor cuando el valor es un numero, bool, lista se utiliza la interpretacion jsx -> {10}
// Al pasar las props que es un obj al argumento de la funcion, se usa la sintaxis de jsx -> {{ }} las primeras llaves indican que es codigo y las segundas indican que es el obj y esas props las puedo pasar sin el mismo orden que las puse a la etiqueta solo tienen que tener el mismo nombre que los atributos o props

// PropTypes(modulo de terceros): Añadir tipos de datos a los prop para especificar el tipo de dato que quiero que me manden
// DefaultProps: Valor por defecto a alguna propiedad sino se especifica; lo puedo hacer en los parametros del componente o usando Component.defaultProps(tiene prioridad)

// Estilos: Estilos en linea: React espera codigo de js y esos estilos se escriben en objetos. Estilos en archivo se importa el archivo css en donde se valla a utilizar import "./styles.css";

// Event handlers: cuando pase algo se ejcuta cierta logica, a los eventos se les pasa una funcion en linea que es la que dice que hacer

// Fetch API: jsonplaceholder => obtener datos de ejemplo. El navegador me ofrece algunas APIs como localStorage, SesionStorage, canvas, fetch y mas, por lo que yo puedo usarlas para interactuar en el navegador. Fetch me permite hacer solicitudes HTTP a un servidor y traer datos

// Modulos de terceros: Me permite usar codigo jsx existente para reutilizarlo en mi web app npm install react-icons para intalar modulo de iconos de react

// Arrays: En react los arreglos se recorren por metodos de arreglos, react usa un enfoque declarativo -> forma de evitar escribir en cod como recorrer un arreglo, usar (map -> recorrer, filter -> quitar elem, reduce, forEach, find, sort)

/* // Ejemplo en JavaScript
const names = ["sebas", "isa", "joe"];

const holaNames = names.map(function (name) {
  // Devuelve otro array mas no modifica el original
  // Es una de las formas que utiliza React para recorrer elementos
  return "hola" + name;
}); */

// Hooks de React: Funciones provenientes de React para añadir funcionalidad extra a la app, como para guardar datos para hacer cierta cosa

// useState:Contenedor de valores que nos da una funcion para actualizar un valor Usar el hook de react para actualizar o alterar el estado, importar el useState de React. El metodo useState() deevuelve un arreglo de dos elementos (variable, funcion que permite actualizar la variable) y se usa sintaxis de desestructuracion comunmente.
// Usar useState cuando quiero que un dato cambie en vez de actualizar variables, se usa en inputs
// Podemos hacer debugging para saber que cosas estan cambiando en react con la extension

// useEffect: Cuando vamos teniendo cambios en la interfaz, es decir, cuando hago algo ir mostrando 

/* function Saludar(){ 
    return <div>
        <h1>Soy un componente</h1>
        <p>Soy el parrafo</p>
    </div>
}; */

/* function Saludar(){
    const name = 'Sebas'
    
    return <h1>{name}</h1>
} */

/* function Saludar(){ // Para mostrar el valor booleano
    const boolean = true

    return <h1>{boolean.toString()}</h1>
} */

/* function Saludar(){
    const boolean = true

    if(boolean){
        return <h1>Es true</h1>
    } else {
        return <h1>Es false</h1>
    }
} */

/* function Saludar(){ // Tambien puedo poner emojis unicode que se interpretan como strings
    const boolean = true
    return <h1>{boolean ? 'es true 😀' : 'es false 🙃' }</h1>
} */

/* function Saludar(){ // Se crea una const user que contiene un objeto y para mostrar los valores, se convierte a string ya que jsx no permite elementos hijos objetos
    const user = {
        firstName : 'Sebas',
        lastName : 'Ravelo'
    }

    return <h1>{JSON.stringify(user)}</h1>
} */

/* function Saludar(){ // Muestra las propiedades del objeto
    const user = { 
        firstName : 'Sebas',
        lastName : 'Ravelo'
    }

    return <div>
        <h1>{user.firstName}</h1>
        <h2>{user.lastName}</h2>
    </div>
} */

/* function Saludar(){ // Funcion dentro de otra funcion
    function Sumar(x,y){
        return x+y
    }

    return <h1>{Sumar(10,20)}</h1>
} */

//root.render(saludar());

/*{Saludar()}
<Saludar></Saludar>
<Saludar/> // self closing tag*/
