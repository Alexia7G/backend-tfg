import { Router } from "express";
import { getCategorias } from "../controladores/categoriaController";

const ruta = Router();

ruta.get("/categorias", getCategorias);

export default ruta;