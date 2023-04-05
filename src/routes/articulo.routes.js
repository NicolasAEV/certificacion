import { Router } from 'express';
const router = Router()
import { emisionTokenUsuario, verificarTokenUsuario } from '../middleware/jwt.js';
import { registrarUsuario } from '../controllers/usuario.controllers.js';
import { upload } from '../middleware/upload.js';
import { createPublication } from '../controllers/publicacion.controllers.js';

router.post('/api/v1/articulo',verificarTokenUsuario,upload,createPublication,(req,res)=>{})
// router.post('/api/v1/regitro',registrarUsuario ,upload,(req,res)=>{})


export default router;