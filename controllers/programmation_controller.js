

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Programmation, Emission  } = require('../models');
    const programmationController = {}
    
 programmationController.includeProgrammation = [
    Emission,]
 programmationController.add = async (req, res) => {
        try {
            const response = await Programmation.create(req.body)
    
    const retour = await Programmation.findOne({
        where:{
            id:response.id
        },
        include: programmationController.includeProgrammation
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 programmationController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Programmation.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: programmationController.includeProgrammation,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 programmationController.update = async (req, res) => {
        try {
            const response = await Programmation.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const programmation = await Programmation.findOne({
                where: { id: req.params.id },
                include: programmationController.includeProgrammation
            })
            res.status(200).send(programmation)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 programmationController.delete = async (req, res) => {
        try {
            const response = await Programmation.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Programmation supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 programmationController.getById = async (req, res) => {
        try {
            const response = await Programmation.findOne({
                where: { id: req.params.id },
                include: programmationController.includeProgrammation
            })
            if (response == null) {
                res.status(404).send('Programmation non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 programmationController.getBy = async (req, res) => {
        try {
          const  response = await Programmation.findAndCountAll({
                where: req.body,
                include: programmationController.includeProgrammation
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = programmationController
