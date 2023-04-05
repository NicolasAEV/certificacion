import { Usuario } from "../models/Usuario.models.js";

// funcion crear validar
export const getUsuarioForValidation = async (email,password) =>{
    //buscamos algun usuario donde el email y password sean iguales al solicitado
    let usuario = await Usuario.findOne({
        raw:true,
        attributes :['id' ,'email'],
        where : {
            email : email , contraseña : password
     } })
     return usuario;
}
// funcion crear usuario
export const registrarUsuario = async (req,res) =>{
    try {
        //rescatamos los datos del body
    let {nombre,password,email} = req.body
    // buscamos si el email del usuario existe en la bd
    let usuarioEmail = await Usuario.findOne({
        raw : true,
        where : {
            email : email
        }})
    //si existe enviamos un un code 500 con el mensaje de que el usuario ya se encuentra registrado
    if(usuarioEmail > 0){
        res.status(500).json({code : 500 , message : 'el email ya se encuetra registrado'})

    }else{
    //en caso contrario creamos el usuario y mandamos un code 200
     await Usuario.create({contraseña:password,email:email,nombre:nombre})
    res.status(200).json({code : 200 , message : 'usuario creado'})
    }
    } catch (error) {
        console.log(error.stack)
        res.status(500).json({code : 500 , message : 'ha ocurrido un error al iniciar sesion'})
    }
}