import app from "./app.js"
import * as dotenv from 'dotenv'
dotenv.config()
import {sequelize} from "./db/db.js";

import './models/Usuario.models.js'
import './models/Comentario.models.js'
import './models/Publicacion.models.js'
import './models/Likedislike.models.js'
import './models/Categoria.models.js'
import './models/Relaciones.js'

const main = async () =>{
    try {
        await sequelize.authenticate();
        console.log('contectado con exito')
        await sequelize.sync({force:false , alter:false ,create:false});
        //rescatamos el valor del puerto y en caso de error dejamos por defecto el puerto 3000
        let PORT =process.env.PORT || 3000;
        app.listen(PORT , ()=>console.log('servidor en el puerto' + PORT))
    } catch (error) {
        console.log(error.stack)
        console.log('a ocurrido un error')
    }
}

main();