const {
    response,
    request
} = require('express');
const {
    where
} = require('sequelize');
const {
    Sequelize,
    Op
} = require('sequelize');
const fonctions = require('../fonctions');
const {
    Animateuremission,
    Animateur,
    Emission, Chaine, Media
} = require('../models');
const animateuremissionController = {}

animateuremissionController.includeAnimateuremission = [
    {model:Animateur, include:[Media]}, {model:Emission, include:[Chaine]},
]
animateuremissionController.add = async (req, res) => {
    try {
        const response = await Animateuremission.create(req.body)

        const retour = await Animateuremission.findOne({
            where: {
                id: response.id
            },
            include: animateuremissionController.includeAnimateuremission
        })

        res.status(201).send(retour)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

animateuremissionController.getAll = async (req, res) => {
    let itemsPerPage = 30;
    let page = 1;
    itemsPerPage = req.query.itemsPerPage == undefined ? 30 : req.query.itemsPerPage
    page = req.query.page == undefined ? 1 : req.query.page
    const chaine = req.query.chaine 
    console.log(chaine)
    console.log( chaine == "")
    const parametres1 = fonctions.removeNullValues(req.query)
    const parametres = delete parametres1[chaine]
    const parametresRequete = fonctions.removePaginationkeys(parametres)
    
    
const linclude = chaine == "" ? animateuremissionController.includeAnimateuremission :  
[
    {model:Animateur, include:[Media]}, {model:Emission, where:{chaine:chaine}, include:[Chaine]},
]
    try {

        const resultat = await Animateuremission.findAndCountAll({
            offset: (page - 1) * itemsPerPage,
            limit: itemsPerPage * 1,
            order: [
                ['id', 'desc']
            ],
            where: {
                ...parametresRequete

            },
            include: linclude,
        })
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

animateuremissionController.update = async (req, res) => {
    try {
        const response = await Animateuremission.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const animateuremission = await Animateuremission.findOne({
            where: {
                id: req.params.id
            },
            include: animateuremissionController.includeAnimateuremission
        })
        res.status(200).send(animateuremission)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

animateuremissionController.delete = async (req, res) => {
    try {
        const response = await Animateuremission.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send('Animateuremission supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

animateuremissionController.getById = async (req, res) => {
    try {
        const response = await Animateuremission.findOne({
            where: {
                id: req.params.id
            },
            include: animateuremissionController.includeAnimateuremission
        })
        if (response == null) {
            res.status(404).send('Animateuremission non trouvé')
        } else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


animateuremissionController.getBy = async (req, res) => {
    try {
        const response = await Animateuremission.findAndCountAll({
            where: req.body,
            include: animateuremissionController.includeAnimateuremission
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}


module.exports = animateuremissionController