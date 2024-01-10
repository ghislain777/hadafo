'use strict';
const socketService = require("../services/socket_service")
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Endirect extends Model {

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
    Endirect.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            comment: "ID"
        },

        veroulle: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            comment: "Vérouillé?"
        },
       
    }, {
        sequelize,
        modelName: 'Endirect',
        tableName: "endirect",
        freezeTableName: true,
        timestamps: false
    });


    return Endirect;
};