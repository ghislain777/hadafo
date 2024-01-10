'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Planning extends Model {

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
    Planning.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },
        jourdelasemaine: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "Jour de la semaine"
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
        emissionfilmee: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            comment: "Emission  filmée?"
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: 'Description'
        },
    }, {
        sequelize,
        modelName: 'Planning',
        tableName: "planning",
        freezeTableName: true,
        timestamps: false
    });
    return Planning;
    
};