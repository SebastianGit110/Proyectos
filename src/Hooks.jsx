import { useState, useEffect } from "react";

const HookuseState = () => {
  // const state = useState();
  // console.log(state); // Se ejecuta siempre que se llame setCounter, ya que va a tener que volver a renderizar el componente

  const [counter, setCounter] = useState(5); // Es lo mismo que escribir counter = 5, solo que la funcion setCounter permite ir modificando el valor de counter
  // console.log(counter, setCounter);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          //counter = counter + 10; // Para actualizar el estado, yo no puedo alterar el estado de esta forma sino usar el hook de react, importar el useState de React
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>
      <button
        onClick={function () {
          setCounter(1);
        }}
      >
        Reiniciar
      </button>
    </>
  );
};

export function InputUseState() {
  const [mensaje, setMensaje] = useState(""); // useState() es lo mismo que let mensaje; Uso useState para input para guardar valores y hacer algo con ese valor

  const [counter, setCounter] = useState(0);
  
   /* useEffect(() => {
    // Se ejecuta cada que hay cambios en el componente
    console.log("soy useEffect");
  }); */

  /* useEffect(() => {
    // Con esta sintaxis, se ejecuta solo cuando se crea el componente y ya, los [] vacios le dicen que no se base en nada
    console.log("Comp creado");
  }, []); */

  useEffect(() => { // Este useEffect se ejecuta cada vez que cambia counter, ya que se especifica en las dependecias del arreglo, ya que la funcion depende de esa variable
    console.log("Cambio counter");
  }, [counter]);

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)}></input>
      <button
        onClick={() => {
          alert("El mensaje es " + mensaje);
        }}
      >
        Save
      </button>

      <hr></hr>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Sumar</button>
    </div>
  );
}

export default HookuseState;
