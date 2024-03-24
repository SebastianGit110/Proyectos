// Utilizar I/Es modules, que es la forma de importar y exportar archivos; se utiliza para separar la logica de los componentes

// La extension .jsx la puedo utilizar si quiero especificar que el archivo contiene componentes, pero create-react-app reconoce codigo js y jsx entonces no es necesario pero, si utilizo vite si es necesario

export function Saludar(props) {
  console.log(props); // El objeto espera un valor
  return <h1>{props.title}</h1>;
}

export function UserCard({ title, name = "User" }) {
  // Los componentes que no tengan la prop name, se le asigna por defecto user
  console.log(title, name);
  return (
    <h1>
      {title} {name}
    </h1>
  );
}

function ExportDefault({ name, amount, married, address, greet }) {
  console.log(name, amount, married, address, greet);
  return (
    <div>
      <h1>{name}</h1>
      <p>${amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>{address.street}</li>
        <li>{address.city}</li>
      </ul>
    </div>
  );
}
export default ExportDefault; // export default solo deja exportar una funcion default por archivo y cuando la inportemos, le podremos colocar cualquier nombre con initCap
