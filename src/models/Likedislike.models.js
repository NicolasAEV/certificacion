import {DataTypes} from 'sequelize';
import {sequelize } from '../db/db.js'


export const Likedislike  = sequelize.define('Likedislike',{
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

    estado :{
        type : DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
},{
    timestamps: false,
    tableName : 'Likedislike',
    alias : 'Likedislike'

  })