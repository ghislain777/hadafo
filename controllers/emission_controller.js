

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Emission, Chaine  } = require('../models');
    const emissionController = {}
    
 emissionController.includeEmission = [
    Chaine,]
 emissionController.add = async (req, res) => {
        try {
            const response = await Emission.create(req.body)
    
    const retour = await Emission.findOne({
        where:{
            id:response.id
        },
        include: emissionController.includeEmission
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 emissionController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Emission.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: emissionController.includeEmission,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 emissionController.update = async (req, res) => {
        try {
            const response = await Emission.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const emission = await Emission.findOne({
                where: { id: req.params.id },
                include: emissionController.includeEmission
            })
            res.status(200).send(emission)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 emissionController.delete = async (req, res) => {
        try {
            const response = await Emission.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Emission supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 emissionController.getById = async (req, res) => {
        try {
            const response = await Emission.findOne({
                where: { id: req.params.id },
                include: emissionController.includeEmission
            })
            if (response == null) {
                res.status(404).send('Emission non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 emissionController.getBy = async (req, res) => {
        try {
          const  response = await Emission.findAndCountAll({
                where: req.body,
                include: emissionController.includeEmission
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = emissionController
