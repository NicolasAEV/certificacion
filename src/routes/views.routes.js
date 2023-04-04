import express from "express"
const router = express.Router();
import { getPublicaciones } from "../controllers/views.controllers.js";

router.get(['/','/inicio'],getPublicaciones,(req,res)=>{})

router.get('/publicaciones',getPublicaciones,(req,res)=>{})


router.get('/perfil',(req,res)=>{})

router.get('/detalle/:id',(req,res)=>{})





export default router;