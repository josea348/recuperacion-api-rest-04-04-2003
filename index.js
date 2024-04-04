import express from 'express';
import bodyParser from 'body-parser';

import routerLibros from './src/routers/router.libros.js';
import routerAutor from './src/routers/router.autor.js';
import routerConsulta from './src/routers/consulta.router.js';

const servidor = express()

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended: false}));

servidor.use('/libros', routerLibros)
servidor.use('/autor', routerAutor)
servidor.use(routerConsulta)

servidor.listen(4000, () => {
    console.log('Servidor corriendo en el puerto 4000');
})