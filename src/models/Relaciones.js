import { Usuario } from "./Usuario.models.js"; 
import { Publicacion } from "./Publicacion.models.js"; 
import { Likedislike } from "./Likedislike.models.js"; 
import { Comentario } from "./Comentario.models.js"; 
import { Categoria } from "./Categoria.models.js"; 

//relacion uno a muchos entre usuario y publicacion
Usuario.hasMany(Publicacion , {foreignKey : 'id_usuario'});
Publicacion.belongsTo(Usuario, {foreignKey : 'id_usuario'})

//relacion uno a muchos entre usuario y Comentario
Usuario.hasMany(Comentario , {foreignKey : 'id_usuario'});
Comentario.belongsTo(Usuario, {foreignKey : 'id_usuario'})

//relacion uno a muchos entre Publicacion y Comentario
Publicacion.hasMany(Comentario , {foreignKey : 'id_publicacion'});
Comentario.belongsTo(Publicacion, {foreignKey : 'id_publicacion'});

//relacion uno a muchos entre comentarios y likedislike
Publicacion.hasMany(Likedislike , {foreignKey : 'id_publicacion'});
Likedislike.belongsTo(Publicacion, {foreignKey : 'id_publicacion'});

//relacion uno a muchos entre Publicacion y Comentario
Usuario.hasMany(Likedislike , {foreignKey : 'id_usuario'});
Likedislike.belongsTo(Usuario, {foreignKey : 'id_usuario'});

//relacion uno a muchos entre Publicacion y Categoria
Categoria.hasMany(Publicacion , {foreignKey : "id_categoria"});
Publicacion.belongsTo(Categoria , {foreignKey : "id_categoria"})

