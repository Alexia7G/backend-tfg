import { Router } from "express";
import { getEstablecimientos, guardarEstablecimiento } from "../controladores/establecimientoController";

const ruta = Router();

ruta.get("/lugar", getEstablecimientos);
ruta.get("/lugar/:id");
ruta.post("/lugar/nuevo", guardarEstablecimiento);
ruta.put("/lugar/:id");
ruta.delete("/lugar/:id");

export default ruta;