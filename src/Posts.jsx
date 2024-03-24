import { VscBug } from "react-icons/vsc"; // Importo el componente de react-icons/vsc

export const arregloUsuarios = [
  // Formato comun de datos traidos desde el backend
  {
    id: 1,
    nombre: "Sebastian",
    image: "https://robohash.org/user1", // img aleatoria
  },
  {
    id: 2,
    nombre: "Isabella",
    image: "https://robohash.org/user2", // img aleatoria
  },
];

export const Post = () => {
  // Componente de funcion con otra sintaxis
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts") // Se hace la peticion a un servidor
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error)); // Mostrar el error si llega a aparecer
      }}
    >
      <VscBug />
      Traer datos
    </button>
  );
};

export function Desestructurar() {

  //const { id, nombre } = arregloUsuarios[0]; // Se desestructura el objeto en la posicion 0 del array
  //return <h1>{id + nombre}</h1>;

  const [obj1, obj2] = arregloUsuarios; // Se desestructura el array y cada objnum son los objetos
  return <h1>{obj2.id + obj1.nombre}</h1>;
}
