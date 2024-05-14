// Funciones para metodos http en tasks.controllers.
// Los errores tambien se pueden manejar con hhtp errors o express promise routers

import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  try {
    // throw new Error("Error propio");
    const [result] = await pool.query("SELECT * FROM tasks ORDER BY createAt");
    // console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    console.log(result);

    // result es un array de objs donde el objeto es el dato con el id especificado si no se encuentra (result => []) status es 200 pero tiene que ser 404
    if (result.length === 0)
      return res.status(404).json({ message: "Task not found" });

    res.json(result[0]); // result[0] porque solo quiero el obj
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; // req.params.id es la forma de obtener el :id de la url de la peticion

export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tasks(title, description) VALUES (?, ?)",
      [title, description]
    ); // Devuelve un array pero solo quiero el obj result
    console.log(result);
    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const result = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body, // Puedo enviar solo una propiedad o varias
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [
      req.params.id,
    ]); // Result es un array con info de la eliminacion pero no muestra los datos, uno de los campos es las filas afectadas (1 -> eliminado, 0 -> no existe o error)

    if (result.affectedRows === 0)
      // 404 si la tarea no se encuentra
      return res.status(404).json({ message: "Task not found" });

    // res.json(result); // no se puede poner el return res.sendStatus y el res.send/json al mismo tiempo
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
