import {DataTypes} from 'sequelize';
import {sequelize } from '../db/db.js'


export const Categoria  = sequelize.define('Categoria',{
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
        type : DataTypes.STRING(50),
        allowNull: false,
        validate: { 
            notEmpty: true
        }
    }
},{
    timestamps: false,
    tableName : 'Categoria',
    alias : 'Categoria'

  })