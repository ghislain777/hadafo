

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Animateur, Media  } = require('../models');
    const animateurController = {}
    
 animateurController.includeAnimateur = [
    Media
        ]
 animateurController.add = async (req, res) => {
        try {
            const response = await Animateur.create(req.body)
    
    const retour = await Animateur.findOne({
        where:{
            id:response.id
        },
        include: animateurController.includeAnimateur
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 animateurController.getAll = async (req, res) => {
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
           
    
            const resultat = await Animateur.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                     
                    },
                    include: animateurController.includeAnimateur,
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 animateurController.update = async (req, res) => {
        try {
            const response = await Animateur.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const animateur = await Animateur.findOne({
                where: { id: req.params.id },
                include: animateurController.includeAnimateur
            })
            res.status(200).send(animateur)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 animateurController.delete = async (req, res) => {
        try {
            const response = await Animateur.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Animateur supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 animateurController.getById = async (req, res) => {
        try {
            const response = await Animateur.findOne({
                where: { id: req.params.id },
                include: animateurController.includeAnimateur
            })
            if (response == null) {
                res.status(404).send('Animateur non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 animateurController.getBy = async (req, res) => {
        try {
          const  response = await Animateur.findAndCountAll({
                where: req.body,
                include: animateurController.includeAnimateur
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = animateurController
