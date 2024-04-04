import { pool } from "../databases/conexion.js";

export const registrarAutor = async (req,res) => {
    try {
        const {nombre,fecha_nac,direccion,telefono} = req.body;
        let sql = `insert into autores(nombreAutor,fecha_nac,direccion,telefono) values (?,?,?,?)`;
        const [rows] = await pool.query(sql,[nombre,fecha_nac,direccion,telefono]);
        if(rows.affectedRows>0) return res.status(200).json({'status': 200, 'message': 'Se registro el autor'});
        else return res.status(404).json({'message': 'No se registro el autor'});
    } catch (error) {
        return res.status(500).json({'message': 'Error: '+error});
    }
}

export const listarAutores = async (req,res) => {
    try {
        let sql = `select * from autores`;
        const [rows] = await pool.query(sql);
        if(rows.length>0) return res.status(200).json(rows);
        else return res.status(404).json({'message': 'No hay libros registrados.'});
    } catch (error) {
        return res.status(500).json({'message': 'Error: '+error});
    }
}

export const actualizarAutor = async (req,res) => {
    try {
        const {id} = req.params;
        const {nombre,fecha_nac,direccion,telefono} = req.body;
        let sql = `update autores set nombreAutor=?,fecha_nac=?,direccion=?,telefono=? where idautor=?`;
        const [rows] = await pool.query(sql,[nombre,fecha_nac,direccion,telefono,id]);
        if(rows.affectedRows>0) return res.status(200).json({'status': 200, 'message': `Se actualizo el autor del ID ${id}`});
        else return res.status(404).json({'message': `No se actualizo el autor del ID ${id}`});
    } catch (error) {
        return res.status(500).json({'message': 'Error: '+error});
    }
}

export const buscarAutor = async (req,res) => {
    try {
        const {id} = req.params;
        let sql = `select * from autores where idautor=?`;
        const [rows] = await pool.query(sql,[id]);
        if(rows.length>0) return res.status(200).json(rows);
        else return res.status(404).json({'message': 'No hay libros registrados.'});
    } catch (error) {
        return res.status(500).json({'message': 'Error: '+error});
    }
}

export const deleteAutor = async (req,res) => {
    try {
        const {id} = req.params;
        let sql = `delete from autores where idautor=?`;
        const [rows] = await pool.query(sql,[id]);
        if(rows.affectedRows>0) return res.status(200).json({"message": `Se elimino el autor del ID ${id}`});
        else return res.status(404).json({'message': `No se elimino el autor del ID ${id}`});
    } catch (error) {
        return res.status(500).json({'message': 'Error: '+error});
    }
}