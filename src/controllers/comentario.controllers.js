import { Comentario } from "../models/Comentario.models.js"

// funcion crear comentario
export const createComentario = async (req,res) =>{
    try {
        //rescatamos los datos del body
    let {tituloComentario, comentario,id} = req.body
    // creamos el comentario y mandamos un code 200
     await Comentario.create({titulo:tituloComentario,descripcion:comentario,id_usuario : req.usuario.id,id_publicacion : id})
    res.status(200).json({code : 200 , message : 'comentario creado con exito'})

    } catch (error) {
        console.log(error.stack)
        res.status(500).json({code : 500 , message : 'error al crear el comentario'})
    }
}