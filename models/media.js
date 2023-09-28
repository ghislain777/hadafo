'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Media extends Model {
        static associate(models) {

            // animateur
            this.belongsTo(models.Animateur, {
                foreignKey: {
                    name: 'animateur',
                    field: "animateur",
                    allowNull: true
                }
            })
            models.Animateur.hasMany(this, {
                foreignKey: {
                    name: "animateur",
                    field: "animateur",
                    allowNull: true
                }
            })
 // chaine
        this.belongsTo(models.Chaine, {
            foreignKey: {
                name: 'chaine',
                field: "chaine",
                allowNull: true
            }
        })
        models.Chaine.hasMany(this, {
            foreignKey: {
                name: "chaine",
                field: "chaine",
                allowNull: true
            }
        })
        }

       

    }
    Media.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "Nom",
            defaultValue: ""
        },
        modele: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "",
            comment: 'Modele'
        },
        champ: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "photo",
            comment: 'Collone'
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "image",
            comment: 'type de media'
        },
        fichier: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "fichier"
        },
    }, {
        sequelize,
        modelName: 'Media',
        tableName: "media",
        freezeTableName: true,
        timestamps: false
    });
    return Media;
};