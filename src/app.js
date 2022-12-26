//contiene configuración de express
import express from "express";
import morgan from "morgan";
import establecimientosRoute from "./rutas/establecimientoRoute";
import usuarioRoute from "./rutas/usuarioRoute";
import categoriaRoute from "./rutas/categoriaRoute";
import paisRoute from "./rutas/paisRoute";
import ciudadRoute from "./rutas/ciudadRoute";
import provinciasRoute from "./rutas/provinciaRoute";
import imagenesRoute from './rutas/imagenRoute'

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(
  establecimientosRoute,
  usuarioRoute,
  categoriaRoute,
  paisRoute,
  ciudadRoute,
  provinciasRoute,
  imagenesRoute
);

export default app;
