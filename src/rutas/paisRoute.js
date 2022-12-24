import { Router } from "express";
import { getPaises } from "../controladores/paisController";

const ruta = Router();

ruta.get("/paises", getPaises);

export default ruta;