'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Programmation extends Model {

        static associate(models) {
            // emission
            this.belongsTo(models.Emission, {
                foreignKey: {
                    name: 'emission',
                    field: "emission",
                    allowNull: true
                }
            })
            models.Emission.hasMany(this, {
                foreignKey: {
                    name: "emission",
                    field: "emission",
                    allowNull: true
                }
            })


        }
    }
    Programmation.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },
        dateemission: {
            type: DataTypes.DATE,
            allowNull: false,
            comment: "Date de lemission"
        },
        heuredebut: {
            type: DataTypes.TIME,
            allowNull: false,
            comment: 'heure de début'
        },
        heurefin: {
            type: DataTypes.TIME,
            allowNull: false,
            comment: "heure de fin"
        },
    }, {
        sequelize,
        modelName: 'Programmation',
        tableName: "programmation",
        freezeTableName: true,
        timestamps: false
    });
    return Programmation;
};