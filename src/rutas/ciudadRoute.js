import { Router } from "express";
import { getCiudades } from "../controladores/ciudadController";

const ruta = Router();

ruta.get("/ciudades", getCiudades);

export default ruta;