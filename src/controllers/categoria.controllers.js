
import { Categoria } from '../models/Categoria.models.js';
import { Publicacion } from '../models/Publicacion.models.js';

export const searchCategoria = async (id)=>{
    console.log(id,"paso")
    let publication = await Publicacion.findAll({
        raw: true,
        include: {
            model: Categoria,
            where :{id : id}
        }
    })
    return publication
}

export const getApiCategoriaArticle = async (req,res) =>{

    let {id} = req.params
    let categoria = await Categoria.findAll({ raw: true, attributes: ['id', 'nombre'], order: [['nombre', 'DESC']] })
    console.log(id)
    searchCategoria(id)
    .then(publication => { 
        console.log(publication)
      res.status(200).json({code : 200 , data : publication })
    })
        .catch(error => {
            res.status(500).json({code : 200 , error :error })

        })
}