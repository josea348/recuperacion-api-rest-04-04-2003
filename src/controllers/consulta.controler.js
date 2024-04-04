import { pool } from "../databases/conexion.js"

export const listarLibrosDelAutor = async (req, res) => {
    try {
        const [rows] = await pool.query(`
            select nombreAutor, libros.* from autores
            inner join libros on idautor = autor
        `);
        if(rows.length>0) return res.status(200).json(rows);
        else return res.status(404).json({'mesage': 'No se encontro ningún libro'});
    } catch (error) {
        res.status(500).json({'mesage': 'Error: '+error});
    }
}