
    'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commune extends Model {
  
    static associate(models) {

   
    }
  }
  Commune.init({
    id: {
        type:DataTypes.INTEGER,
        autoIncrement:true, 
        primaryKey: true,
        comment: "ID"
      },  
    
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Nom"
          },       
        
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Description"
          },       
        
  }, {
    sequelize,
    modelName: 'Commune',
    tableName:'commune',
    timestamps:false
  });
  return Commune;
};
    