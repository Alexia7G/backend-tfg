import { Router } from "express";
import { getImagenesXId, prueba } from "../controladores/imagenController";

const ruta = Router();

ruta.get("/imagen/:idEstablecimiento", getImagenesXId);

export default ruta;