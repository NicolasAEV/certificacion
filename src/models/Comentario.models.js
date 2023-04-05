import {DataTypes} from 'sequelize';
import {sequelize } from '../db/db.js'

export const Comentario  = sequelize.define('Comentario',{
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
        type : DataTypes.STRING(30),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    descripcion : {
        type : DataTypes.STRING(200),
        allowNull: false,
        validate: { 
            notEmpty: true
        }
    }
},{
    timestamps: false,
    tableName : 'Comentario',
    alias : 'Comentario'

  })