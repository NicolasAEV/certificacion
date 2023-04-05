import { Router } from 'express';
const router = Router()
import { emisionTokenUsuario, verificarTokenUsuario } from '../middleware/jwt.js';
import { registrarUsuario } from '../controllers/usuario.controllers.js';
import { upload } from '../middleware/upload.js';
import { createPublication, getAllPublicationApi, getPublicacionByIdApi } from '../controllers/publicacion.controllers.js';

router.post('/api/v1/articulo',verificarTokenUsuario,upload,createPublication,(req,res)=>{})
// router.post('/api/v1/regitro',registrarUsuario ,upload,(req,res)=>{})

router.get('/api/v1/articulo',getAllPublicationApi,(req,res)=>{})

router.get('/api/v1/articulo/:id',getPublicacionByIdApi,(req,res)=>{})


export default router;