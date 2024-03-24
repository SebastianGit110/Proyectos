import "./styles.css";

const taskStyle = { background: "#202020", color: "#fff", padding: "20px" };
const titleStyle = { fontWeight: "lighter", color: "blue" };

export function TaskCard() {
  // Estilos en linea
  return (
    <div style={taskStyle}>
      <h1 style={titleStyle}>Mi primer tarea</h1>
      <p>Tarea realizada</p>
    </div>
  );
}

export function CardCondicional({ ready }) {
  // class(funciona) y className es lo mismo solo que las etiquetas css no son lo mismo en react jsx
  return (
    <div className={ready ? "cardGreen" : "cardRed"}>
      <h1>Mi primer tarea</h1>
      <p style={ready ? { background: "green" } : { background: "red" }}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </p>
    </div>
  );
}
