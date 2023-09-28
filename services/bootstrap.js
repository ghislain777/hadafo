const {
    Emission,
    Chaine,
    Media,
    Animateur,
    Animateuremission
} = require('../models')


const appService = {}
appService.getBootstrap = () => {

    return new Promise((resolve, reject) => {

        const retour = {}

        const promiseChaines = Chaine.findAll({
            where:{
                actif:true
            },
            include: [{
                model: Emission,
               
                include: [{
                    model: Animateuremission,
                    include: [Animateur, Emission]
                }]
            }, Media]
        })

        Promise.all([promiseChaines]).then((data) => {
            retour.chaines = data[0]
            resolve(retour)
        })
    })
}

module.exports = appService