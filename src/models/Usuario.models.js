import {DataTypes} from 'sequelize';
import {sequelize } from '../db/db.js'



export const Usuario  = sequelize.define('Usuario',{
    id :{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    nombre : {
        type : DataTypes.STRING(40),
        allowNull: false,
        validate: { 
            notEmpty: true
        }
    },
    email : {
        type : DataTypes.STRING(100),
        allowNull: false,
        validate: { 
            notEmpty: true
        }
    },
    
    contraseña :{
        type : DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
},{
    timestamps: false,
    tableName : 'Usuario',
    alias : 'Usuario'

  })


