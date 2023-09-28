'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Animateuremission extends Model {

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
    Animateuremission.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },
       
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: 'Description'
        },
    }, {
        sequelize,
        modelName: 'Animateuremission',
        tableName: "animateuremission",
        freezeTableName: true,
        timestamps: false
    });
    return Animateuremission;
};