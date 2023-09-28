'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Emission extends Model {

        static associate(models) {
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
    Emission.init({
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
        emissionfilmee: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
            comment: "Emission  filmée?"
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: 'Description'
        },
    }, {
        sequelize,
        modelName: 'Emission',
        tableName: "emission",
        freezeTableName: true,
        timestamps: false
    });

    // creation denimateur emission a chaque création d'emission
    Emission.afterCreate("hookAC", async (emission, options) => {

        await sequelize.models.Animateuremission.create({
          emission:emission.id
        })
      })
    return Emission;
};