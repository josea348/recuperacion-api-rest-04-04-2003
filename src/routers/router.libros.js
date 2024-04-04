import { Router } from "express";
import { actualizarLibros, buscarLibro, deleteLibros, listarLibros, registrarLibros } from "../controllers/controller.libros.js";
const routerLibros = Router();

routerLibros.post('/registrar', registrarLibros);
routerLibros.get('/listar',listarLibros);
routerLibros.put('/actualizar/:id',actualizarLibros);
routerLibros.get('/buscar/:id',buscarLibro);
routerLibros.delete('/eliminar/:id',deleteLibros);

export default routerLibros;