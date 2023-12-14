'use strict';

const {
    Model
} = require('sequelize');

const socketService = require("../services/socket_service")
module.exports = (sequelize, DataTypes) => {
    class Chaine extends Model {

        static associate(models) {
            // ville 
            this.belongsTo(models.Ville, {
                foreignKey: {
                    name: 'ville',
                    field: "ville",
                    allowNull: true
                }
            })
            models.Ville.hasMany(this, {
                foreignKey: {
                    name: "ville",
                    field: "ville",
                    allowNull: true
                }
            })
                   // emission
                      this.belongsTo(models.Emission, {
                        as: 'Emission',
                            foreignKey: { name: 'emission', field:"emission", allowNull: true }
                        })
                        models.Emission.hasMany(this, {
                            as: 'meschaines',
                            foreignKey: { name: "emission", field: "emission", allowNull: true }
                        })


        }
    }
    Chaine.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "Nom"
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: 'Description'
        },
        frequence: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Fréquence"
        },
         
        lienradio: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Lien radio"
        },
        lientv: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "",
            comment: "Lien TV"
        },
        lienyoutube: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
            comment: "Lien TV Youtube?"
        },
        emissionfilmee: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
            comment: "Emission en live filmée?"
        },
        heuredebut: {
            type: DataTypes.TIME,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            comment: 'heure de début'
        },
        heurefin: {
            type: DataTypes.TIME,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            comment: "heure de fin"
        },

        actif: {
              type:DataTypes.BOOLEAN,
              allowNull:false,
              defaultValue: true,
              comment: "Actif?"
            },
            typedechaine: {
                  type:DataTypes.STRING,
                  allowNull:false,
                  defaultValue: "radio",
                  comment: "Type de chaine"
                },
    }, {
        sequelize,
        modelName: 'Chaine',
        tableName: "chaine",
        freezeTableName: true,
        timestamps: false
    });

    Chaine.afterBulkUpdate("hookAU", (chaine, options) => {

    console.log("Mise à jour de la table chaine")
        socketService.envoiMesage("chaine", "misajour")

      })
    return Chaine;
};