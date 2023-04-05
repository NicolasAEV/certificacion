import express from "express"
const router = express.Router();
import { getPublicaciones ,getAllPublicaciones, getMyPublications, getDetailsByID } from "../controllers/views.controllers.js";
import { verificarTokenUsuario } from "../middleware/jwt.js";

router.get(['/','/inicio'],getPublicaciones,(req,res)=>{})

router.get('/publicaciones',getAllPublicaciones,(req,res)=>{})

router.get('/detalle/:id',getDetailsByID,(req,res)=>{})

router.get('/perfil',verificarTokenUsuario,getMyPublications,(req,res)=>{})





export default router;