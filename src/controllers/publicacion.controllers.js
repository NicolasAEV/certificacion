

import fs from 'fs'
import path from 'path'
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { Publicacion } from '../models/Publicacion.models.js';


export const getAllPublicationApi = async (req, res) => {


    try {
        //obtenemos todas las publicaciones y ordenamos de manera descendente por fecha
        let publicaciones = await Publicacion.findAll({ raw: true, order: [['fecha', 'DESC']]});
        if(publicaciones){
            res.status(200).json({code:200 , data : publicaciones})
        }else{
            res.status(500).json({code:200 , message : 'no se encontraron articulos'})
        }
        //obtenemos todas las categorias y ordenamos de manera dec por id
      
    } catch (error) {
        console.log(error.stack)
        res.status(500).json({code:500 , message : error})
        
    }
}

export const getPublicacionByIdApi = async (req, res) => {
    try {
        let { id } = req.params
        if(id){
            let publicacion = await Publicacion.findByPk(id, { raw: true })
            res.status(200).json({code:200 , data : publicacion})
        }else{
            res.status(500).json({code:500 , message : 'debes proporcionar el id'})
        }
        
    } catch (error) {
        console.log(error.stack)
        res.status(500).json({code:500 , message : error})
    }
}

export const addPublication = async (titulo, descripcion, imagen, id_usuario, fecha,categoria) => {
    let creacion = await Publicacion.create({ titulo: titulo, descripcion: descripcion, imagen: imagen, fecha: fecha, id_usuario: id_usuario, id_categoria: categoria })
    return creacion;
}
export const createPublication = async (req, res) => {
    let { titulo, descripcion, categoria } = req.body
    let fecha = new Date();
    let id_usuario = req.usuario.id
    try {
        //verificamos que los datos vengan 
        if (titulo == undefined || descripcion == undefined || categoria == undefined) {
            fs.unlinkSync(path.resolve(__dirname, "../public/img/" + req.imagen));
            return res.status(400).json({ code: 400, message: "no ha proporcionado todo el contenido requerido." })
        }
        //enviamos los datos a la funcion addProducts
        addPublication(titulo, descripcion, req.imagen, id_usuario, fecha, categoria)
            .then(respuesta => {
                res.status(201).json({ code: 201, message: "Publicación realizada con éxito." })
            }).catch(error => {
                console.log(error)
                fs.unlinkSync(path.resolve(__dirname, "../public/img/" + req.imagen));
                res.status(500).json({ code: 500, message: "Error con la base de datos." })
            })
        //    res.status(200).json({code : 200 , data : vehiculos.rows})

    } catch (error) {
        fs.unlinkSync(path.resolve(__dirname, "../public/img/" + req.imagen));
        res.status(500).json({ code: 500, message: "error al cargar los vehiculos" })

    }
}