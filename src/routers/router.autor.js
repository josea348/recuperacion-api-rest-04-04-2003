import { Router } from "express";
import { actualizarAutor, buscarAutor, deleteAutor, listarAutores, registrarAutor } from "../controllers/controller.autor.js";
const routerAutor = Router();

routerAutor.post('/registrar', registrarAutor);
routerAutor.get('/listar',listarAutores);
routerAutor.put('/actualizar/:id',actualizarAutor);
routerAutor.get('/buscar/:id',buscarAutor);
routerAutor.delete('/eliminar/:id',deleteAutor);

export default routerAutor;