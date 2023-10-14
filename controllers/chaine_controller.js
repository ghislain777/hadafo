

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Chaine, Ville, Media, Emission  } = require('../models');
const appService = require('../services/bootstrap');
    const chaineController = {}
    
 chaineController.includeChaine = [
    Ville,Media, "Emission", {model:Emission}
        ]


chaineController.bootstrap = async (req, res) => {
    try {
        retour = await appService.getBootstrap()

        res.status(200).send({chaines:chaines})
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}


 chaineController.add = async (req, res) => {
        try {
            const response = await Chaine.create(req.body)
    
    const retour = await Chaine.findOne({
        where:{
            id:response.id
        },
        include: chaineController.includeChaine
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 chaineController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Chaine.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: chaineController.includeChaine,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 chaineController.update = async (req, res) => {
        try {
            const response = await Chaine.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const chaine = await Chaine.findOne({
                where: { id: req.params.id },
                include: chaineController.includeChaine
            })
            res.status(200).send(chaine)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 chaineController.delete = async (req, res) => {
        try {
            const response = await Chaine.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Chaine supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 chaineController.getById = async (req, res) => {
        try {
            const response = await Chaine.findOne({
                where: { id: req.params.id },
                include: chaineController.includeChaine
            })
            if (response == null) {
                res.status(404).send('Chaine non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 chaineController.getBy = async (req, res) => {
        try {
          const  response = await Chaine.findAndCountAll({
                where: req.body,
                include: chaineController.includeChaine
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = chaineController
