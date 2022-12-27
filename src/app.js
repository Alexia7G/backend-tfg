//contiene configuración de express
import express from "express";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import path from 'path';

import establecimientosRoute from "./rutas/establecimientoRoute";
import usuarioRoute from "./rutas/usuarioRoute";
import categoriaRoute from "./rutas/categoriaRoute";
import paisRoute from "./rutas/paisRoute";
import ciudadRoute from "./rutas/ciudadRoute";
import provinciasRoute from "./rutas/provinciaRoute";

const app = express();

app.use(morgan("dev"));
app.use(fileUpload());
app.use(express.json());

//ruta donde lo expone - carpeta que expongo
app.use('/uploads', express.static('uploads'));

app.get('/uploads/:img', (req, res) => {
  let img = req.params.img;
  res.sendFile(path.join(__dirname, `./uploads/${img}.jpeg`));
});

app.use(
  establecimientosRoute,
  usuarioRoute,
  categoriaRoute,
  paisRoute,
  ciudadRoute,
  provinciasRoute
);

export default app;
