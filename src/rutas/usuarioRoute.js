import { Router } from "express";
import { getUsuario, guardarUsuario } from "../controladores/usuarioController";

const ruta = Router();

ruta.post("/usuario/nvoUsuario", guardarUsuario);

ruta.post("/usuario/:email/:password", getUsuario);

export default ruta;