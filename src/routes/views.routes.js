import express from "express"
const router = express.Router();
import { getPublicaciones ,getAllPublicaciones, getMyPublications, getDetailsByID, searchArticle,getCategoriaArticle } from "../controllers/views.controllers.js";
import { verificarTokenUsuario } from "../middleware/jwt.js";

router.get(['/','/inicio'],getPublicaciones,(req,res)=>{})

router.get('/publicaciones',getAllPublicaciones,(req,res)=>{})

router.get('/detalle/:id',getDetailsByID,(req,res)=>{})

router.get('/perfil',verificarTokenUsuario,getMyPublications,(req,res)=>{})

router.post('/buscar',searchArticle,(req,res)=>{})

router.get('/categoria/:id',getCategoriaArticle,(req,res)=>{})


export default router;