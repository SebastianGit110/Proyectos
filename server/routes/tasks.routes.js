// Rutas relacionadas con las tareas CRUD

import { Router } from "express";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTasks,
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/api/tasks", getTasks); // Obtiene todas las tareas

router.get("/api/tasks/:id", getTask); // Obtener tarea a partir de un id

router.post("/api/tasks", createTask); // Crear tareas

router.put("/api/tasks/:id", updateTask); // Actualizar completamente una tarea especifica :id es un parametro generico

router.delete("/api/tasks/:id", deleteTasks); // Eliminar tarea por id

export default router;
