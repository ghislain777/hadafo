'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animateur extends Model {
    
    static associate(models) {
     
     
    }
  }
  Animateur.init({
    id: {
          type:DataTypes.INTEGER,
          autoIncrement:true, 
          primaryKey: true,
          comment:"ID"
        },
    nom: {
      type:DataTypes.STRING,
      allowNull:false,
      comment:"Nom"
    },
    description: {
      type:DataTypes.STRING,
      allowNull:false,
      comment:'Description'
    },
  }, {
    sequelize,
    modelName: 'Animateur',
    tableName:"animateur",
    freezeTableName:true,
    timestamps:false
  });
  return Animateur;
};