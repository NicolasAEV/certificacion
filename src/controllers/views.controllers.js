import { raw } from 'express';
import { Categoria } from '../models/Categoria.models.js';
import { Publicacion } from '../models/Publicacion.models.js';
import { Comentario } from '../models/Comentario.models.js';
import { Usuario } from '../models/Usuario.models.js';
import { Op } from "sequelize"
export const getPublicaciones = async (req, res) => {
    //obtenemos todas las publicaciones y ordenamos de manera descendente por fecha
    let publication = await Publicacion.findAll({
        raw: true,
        attributes: ['id', 'titulo', 'imagen', 'fecha'],
        order: [['fecha', 'DESC']],
        limit: 10,
        offset: 0
    })
    //obtenemos todas las categorias y ordenamos de manera dec por id
    let categoria = await Categoria.findAll({ raw: true, attributes: ['id', 'nombre'], order: [['nombre', 'DESC']] })
    res.render('inicio', {
        publication,
        title: 'inicio',
        categoria: categoria
    })
}

export const getAllPublicaciones = async (req, res) => {
    let limit = req.params.limit || 10;
    let offset = req.params.limit || 0;

    //obtenemos todas las publicaciones y ordenamos de manera descendente por fecha
    let publicaciones = await Publicacion.findAll({ raw: true, order: [['fecha', 'DESC']], limit: 10, offset: 0 });
    //obtenemos todas las categorias y ordenamos de manera dec por id
    let categoria = await Categoria.findAll({ raw: true, attributes: ['id', 'nombre'], order: [['nombre', 'DESC']] })
    res.render('publicaciones', {
        title: 'todas las noticias',
        publication: publicaciones,
        categoria: categoria
    })
}

export const getMyPublications = async (req, res) => {
    let idUsuario = req.usuario.id
    let publicaciones = await Publicacion.findAll({ raw: true, order: [['fecha', 'DESC']], where: { id_usuario: idUsuario } });
    //obtenemos todas las categorias y ordenamos de manera dec por id
    let categoria = await Categoria.findAll({ raw: true, attributes: ['id', 'nombre'], order: [['nombre', 'DESC']] })
    res.render('perfil', {
        title: 'perfil',
        publicacion: publicaciones,
        categoria: categoria
    })
}

export const getDetailsByID = async (req, res) => {
    let { id } = req.params
    let publicacion = await Publicacion.findByPk(id, { raw: true })
    let categoria = await Categoria.findAll({ raw: true, attributes: ['id', 'nombre'], order: [['nombre', 'DESC']] })
    let comentario = await Comentario.findAll({
        raw: false,
        where: { id_publicacion: id },
        include: {
            model: Usuario,
            attributes: ['nombre']
        }
    })
    let newObjeto = comentario.map(comentario => {
        let allComentarios = {
            id: comentario.dataValues.id,
            titulo: comentario.dataValues.titulo,
            descripcion: comentario.dataValues.descripcion,
            nombre: comentario.dataValues.Usuario.dataValues.nombre,

        }
        return allComentarios;
    })
    console.log(comentario)
    res.render('detalle', {
        title: 'detalle producto',
        publicacion,
        categoria,
        comentario: newObjeto
    })
}

export const searchArticle = async (req,res)=>{
    let {buscar} = req.body;
    let publicaciones = await Publicacion.findAll({raw : true,where :{descripcion :{[Op.substring]:buscar} } })
    let categoria = await Categoria.findAll({ raw: true, attributes: ['id', 'nombre'], order: [['nombre', 'DESC']] })
    console.log('aca' , publicaciones)
    res.render('publicaciones', {
        title: 'buscar',
        publication: publicaciones,
        categoria: categoria
    })
}

export const searchCategoria = async (id)=>{
    console.log(id,"paso")
    let publication = await Publicacion.findAll({
        raw: true,
        include: {
            model: Categoria,
            where :{id : id}
        }
    })
    console.log(publication , 'oye')
    return publication
}

export const getCategoriaArticle = async (req,res) =>{

    let {id} = req.params
    let categoria = await Categoria.findAll({ raw: true, attributes: ['id', 'nombre'], order: [['nombre', 'DESC']] })
    console.log(id)
    searchCategoria(id)
    .then(publicaciones => { 
        res.render("publicaciones",{
            title : 'busqueda por categoria',
            publication: publicaciones ,
            categoria
        })
    })
        .catch(error => {
            res.render("publicaciones",{
                error: "No se pudieron cargar las categorias",
                categoria
            })
        })
}