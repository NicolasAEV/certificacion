import { Router } from 'express';
const router = Router()
import { emisionTokenUsuario, verificarTokenUsuario } from '../middleware/jwt.js';
import { createComentario } from '../controllers/comentario.controllers.js';

router.post('/api/v1/comentario',verificarTokenUsuario,createComentario,(req,res)=>{})
// router.post('/api/v1/regitro',registrarUsuario ,upload,(req,res)=>{})


export default router;