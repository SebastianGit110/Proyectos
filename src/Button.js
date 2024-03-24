import PropTypes, { func } from "prop-types"; // Primero instalar PropTypes desde la consola npm i prop-types

export function Button({ text, name = "Us" }) {
  // Es diferente <Button/>(Componente-funcion) de <button/>(html)
  console.log(text);
  return (
    <button
      onClick={function () {
        console.log("Hola mundo");
      }}
    >
      {text} - {name}
    </button>
  );
}

Button.propTypes = {
  // Es una herramienta para que el desarrollador sepa el tipo de dato que debe asignar
  text: PropTypes.string.isRequired, // text debe ser string y es requerido
};

Button.defaultProps = {
  // Tiene prioridad sobre la asignacion en los parametros
  name: "User",
};
