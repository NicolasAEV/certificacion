import { Categoria } from '../models/Categoria.models.js';
import { Publicacion } from '../models/Publicacion.models.js'; 

export const getPublicaciones = async (req,res)=>{
    //obtenemos todas las publicaciones y ordenamos de manera descendente por fecha
    const publicaciones = await Publicacion.findAll({raw:true,order:[['fecha','DESC']],limit:10 ,offset:0});
    //obtenemos todas las categorias y ordenamos de manera dec por id
    const categoria = await Categoria.findAll({raw:true,attributes:['id','nombre'],order:[['nombre','DESC']]})
        res.render('inicio',{
            title:'inicio',
            publicacion : publicaciones,
            categoria : categoria
        })
}