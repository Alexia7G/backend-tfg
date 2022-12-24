import { Router } from "express";
import { getProvincias } from "../controladores/provinciaController";

const ruta = Router();

ruta.get("/provincias", getProvincias);

export default ruta;