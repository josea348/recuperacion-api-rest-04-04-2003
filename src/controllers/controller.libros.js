import { pool } from "../databases/conexion.js";

export const registrarLibros = async (req,res) => {
    try {
        const {nombre,clasificacion,autor} = req.body;
        let sql = `insert into libros(nombre,clasificacion,autor) values (?,?,?)`;
        const [rows] = await pool.query(sql,[nombre,clasificacion,autor]);
        if(rows.affectedRows>0) return res.status(200).json({"message": 'Se registro el libro'});
        else return res.status(404).json({'message': 'No se registro el libro'});
    } catch (error) {
        return res.status(500).json({'message': 'Error: '+error});
    }
}

export const listarLibros = async (req,res) => {
    try {
        let sql = `select * from libros`;
        const [rows] = await pool.query(sql);
        if(rows.length>0) return res.status(200).json(rows);
        else return res.status(404).json({'message': 'No hay libros registrados.'});
    } catch (error) {
        return res.status(500).json({'message': 'Error: '+error});
    }
}

export const actualizarLibros = async (req,res) => {
    try {
        const {id} = req.params;
        const {nombre,clasificacion,autor} = req.body;
        let sql = `update libros set nombre=?,clasificacion=?,autor=? where idlibros=?`;
        const [rows] = await pool.query(sql,[nombre,clasificacion,autor,id]);
        if(rows.affectedRows>0) return res.status(200).json({'status': 200, 'message': `Se actualizo el libro del ID ${id}`});
        else return res.status(404).json({'message': `No se actualizo el libro del ID ${id}`});
    } catch (error) {
        return res.status(500).json({'message': 'Error: '+error});
    }
}

export const buscarLibro = async (req,res) => {
    try {
        const {id} = req.params;
        let sql = `select * from libros where idlibros=?`;
        const [rows] = await pool.query(sql,[id]);
        if(rows.length>0) return res.status(200).json(rows);
        else return res.status(404).json({'message': 'No hay libros registrados.'});
    } catch (error) {
        return res.status(500).json({'message': 'Error: '+error});
    }
}

export const deleteLibros = async (req,res) => {
    try {
        const {id} = req.params;
        let sql = `delete from libros where idlibros=?`;
        const [rows] = await pool.query(sql,[id]);
        if(rows.affectedRows>0) return res.status(200).json({"message": `Se elimino el libro del ID ${id}`});
        else return res.status(404).json({'message': `No se elimino el libro del ID ${id}`});
    } catch (error) {
        return res.status(500).json({'message': 'Error: '+error});
    }
}