import {DataTypes} from 'sequelize';
import {sequelize } from '../db/db.js'

export const Publicacion  = sequelize.define('Publicacion',{
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
    titulo :{
        type : DataTypes.STRING(60),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    descripcion : {
        type : DataTypes.STRING(4000),
        allowNull: false,
        validate: { 
            notEmpty: true
        }
    },
    imagen :{
        type : DataTypes.STRING(255),
        allowNull: false,
        validate: { 
            notEmpty: true
        }
    },
    fecha :{
        type : DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
},{
    timestamps: false,
    tableName : 'Publicacion',
    alias : 'Publicacion'
  })
