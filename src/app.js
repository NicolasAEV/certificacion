import express, { json, urlencoded } from 'express';
const app = express();
//llamamos a la biblioteca path de mandera de poder unir archivos
import { join ,dirname} from 'path';
import { fileURLToPath } from 'url';
import fileUpload from 'express-fileupload';
// obtenemos una funcion de exhbs
import { create } from 'express-handlebars';
import cors from 'cors';
import morgan from 'morgan'
//importamos los helpers
import * as helpers from './helpers/helpers.js'


//importamos las rutas
//rutas iniciales de la pagina

// //rutas front end
import routerViews from './routes/views.routes.js';
//RUTA API REGISTRO Y LOGIN
import apiLogin from './routes/login.routes.js'
//prueba api-rest
import apiArticulo from './routes/articulo.routes.js'
import apiComentario from './routes/comentario.routes.js'
import apiCategoria from './routes/categoria.routes.js'
//pagina no encontrada
import err404 from './routes/404.routes.js'

//en caso de utilizar envio entre servidores
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors())
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//middleware file upload 
app.use(fileUpload({
  limits: { fileSize: 2 * 1024 * 1024 },
  abortOnLimit : true ,
}));
app.use(morgan('tiny'))


//union de archivos estaticos y rutas dinamicas
app.use(express.static(join(__dirname, 'public')));
//inicio de rutas
///prueba

app.use(routerViews)
//login y registro cliente
app.use(apiLogin)
app.use(apiArticulo)
app.use(apiComentario)
app.use(apiCategoria)


// 
app.use(err404)

//asignamos la union de los archivo views
app.set("views", join(__dirname, "views/"));
//configuracion de motor hbs
const hbs = create({
  //se define la pagina principal la cual contendra todo
  defaultLayout: "main",
  //definimos y unimos los layouts y partials
  layoutsDir: join(app.get("views"), "layouts"),
  partialsDir: join(app.get("views"), "partials"),
  //definimos la extencion a utilizar
  helpers,

  extname: ".handlebars",
});
app.engine(".handlebars", hbs.engine);
app.set("view engine", ".handlebars");


export default app;