import { Router } from "express";
import { guardarImagen } from "../controladores/imagenController";

const ruta = Router();

ruta.post("/imagen/nueva", guardarImagen);

export default ruta;