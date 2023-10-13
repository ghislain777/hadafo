

    const { response, request } = require('express');
    const { where } = require('sequelize');
    const { Sequelize, Op } = require('sequelize');
    const fonctions = require('../fonctions');
    const {  Planning, Emission, Chaine  } = require('../models');
const { log } = require('winston');
const chaine = require('../models/chaine');
    const planningController = {}
    
 planningController.includePlanning = [
    {model:Emission, include:Chaine},]
 planningController.add = async (req, res) => {
        try {
           
            const response = await Planning.create(req.body)
    
    const retour = await Planning.findOne({
        where:{
            id:response.id
        },
        include: planningController.includePlanning
    })
    
            res.status(201).send(retour)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 planningController.getAll = async (req, res) => {
    console.log(req.query)
        let  itemsPerPage = 30;
        let page =1;
        itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
        page = req.query.page == undefined ? 1 : req.query.page
        const chaine = req.query.chaine?? ""

    const parametres1 = fonctions.removeNullValues(req.query)
    const parametres = delete parametres1[chaine]
    const parametresRequete = fonctions.removePaginationkeys(parametres)

   //console.log(chaine == "")
const linclude = chaine == "undefined"? planningController.includePlanning : [{model:Emission, where:{chaine:chaine}, include: [Chaine]}]


        try {
           
  
            const resultat = await Planning.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage*1,
                    order:[['id', 'desc']],
                    where: {
                        ...parametresRequete
                    },
                   // include: chaine === undefined? planningController.includePlanning : linclude,
                    include: linclude
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 planningController.update = async (req, res) => {
        try {
            const response = await Planning.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
    
            const planning = await Planning.findOne({
                where: { id: req.params.id },
                include: planningController.includePlanning
            })
            res.status(200).send(planning)
        } catch (err) {
            console.log(err)
            res.status(500).send(err.message)
        }
    }
    
 planningController.delete = async (req, res) => {
        try {
            const response = await Planning.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send('Planning supprimé avec succès')
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
 planningController.getById = async (req, res) => {
        try {
            const response = await Planning.findOne({
                where: { id: req.params.id },
                include: planningController.includePlanning
            })
            if (response == null) {
                res.status(404).send('Planning non trouvé')
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)
    
        }
    }
    
    
 planningController.getBy = async (req, res) => {
        try {
          const  response = await Planning.findAndCountAll({
                where: req.body,
                include: planningController.includePlanning
            })
            res.send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }

    
    module.exports = planningController
