//contiene configuración de express
import express from "express";
import morgan from "morgan";
import establecimientosRoute from "./rutas/establecimientoRoute";
import usuarioRoute from "./rutas/usuarioRoute";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(establecimientosRoute, usuarioRoute);

export default app;
