import { Router } from "express";
import { listarLibrosDelAutor } from "../controllers/consulta.controler.js";
const routerConsulta = Router();

routerConsulta.get('/listarLibrosDelAutor/:id',listarLibrosDelAutor);

export default routerConsulta;