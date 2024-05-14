import express from "express"; // node por defecto no reconoce modulos; en el package.json poner "type": "module"
import cors from "cors";
import { PORT } from "./config.js"; // Ponerle extension .js para modulos propios

import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();

// Midlewares
app.use(express.json()); // Permite procesar los datos json del cliente
app.use(
  cors()
); // El backend permite la conexion solo al puerto 5173

app.use(indexRoutes);
app.use(taskRoutes);

app.listen(PORT);
console.log(`server is running on port ${PORT}`); // Template string
