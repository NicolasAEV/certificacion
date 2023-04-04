import express from "express"
const router = express.Router();

router.get(['*'], (req, res) => {
    res.render('404', {
        title: 'error pagina no encontrada'
    })
})

export default router;