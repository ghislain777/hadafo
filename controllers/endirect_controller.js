

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Endirect, Emission, Chaine  } = require('../models');
    const endirectController = {}
    
 endirectController.includeEndirect = [
    {model:Emission, include:Chaine},]
 endirectController.add = async (req, res) => {
        try {
            const response = await Endirect.create(req.body)
    
    const retour = await Endirect.findOne({
        where:{
            id:response.id
        },
        include: endirectController.includeEndirect
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 endirectController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Endirect.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: endirectController.includeEndirect,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 endirectController.update = async (req, res) => {
        try {
            const response = await Endirect.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const endirect = await Endirect.findOne({
                where: { id: req.params.id },
                include: endirectController.includeEndirect
            })
            res.status(200).send(endirect)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 endirectController.delete = async (req, res) => {
        try {
            const response = await Endirect.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Endirect supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 endirectController.getById = async (req, res) => {
        try {
            const response = await Endirect.findOne({
                where: { id: req.params.id },
                include: endirectController.includeEndirect
            })
            if (response == null) {
                res.status(404).send('Endirect non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 endirectController.getBy = async (req, res) => {
        try {
          const  response = await Endirect.findAndCountAll({
                where: req.body,
                include: endirectController.includeEndirect
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = endirectController
