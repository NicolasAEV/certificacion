import { Router } from 'express';
const router = Router()
import { emisionTokenUsuario } from '../middleware/jwt';
import { registrarUsuario } from '../controllers/usuario.controllers';
router.post('/api/v1/login',emisionTokenUsuario,(req,res)=>{})
router.post('/api/v1/regitro',registrarUsuario ,(req,res)=>{})


export default router;