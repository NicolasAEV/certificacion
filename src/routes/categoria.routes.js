import express from "express"
const router = express.Router();
import { verificarTokenUsuario } from "../middleware/jwt.js";
import { getApiCategoriaArticle } from "../controllers/categoria.controllers.js";

router.get('/api/categoria/:id',getApiCategoriaArticle,(req,res)=>{})


export default router;