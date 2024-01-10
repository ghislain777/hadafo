const {
    Planning,
    Emission,
    Chaine,
    Endirect
} = require("../models")

const {
    Op,
    where
} = require("sequelize")
const dayjs = require('dayjs')
const chaine = require("../models/chaine")
const directService = {}

directService.getEmissionsEnDirect = async () => {
    // on recupere du planning toutes les émissions qui vont passer aujourd'hui
    const aujourdhui = dayjs()
    const weekday = aujourdhui.day()
    console.log(weekday)
    // heure en cours...




    // on recupere toutes les emissions d'aujourd'hui

    const plannings = await Planning.findAll({
        where: {
            jourdelasemaine: weekday
        },
        include: [{
            model: Emission,
            include: [Chaine]
        }],
       
    })

    console.log("Heures des emissions")

    plannings.forEach(async (planning) => {
        const hDebut = dayjs(new Date('1970-01-01T' + planning.heuredebut + 'Z'))
        const hFin = dayjs(new Date('1970-01-01T' + planning.heurefin + 'Z'))
        //console.log(planning.)


        const maintenant = dayjs()
        console.log("****** est ce que le temps en cours est entre le debut et la fin de l'emission?")

        const dateDebut = dayjs(dayjs().set('hour', hDebut.hour()).set('minute', hDebut.minute()).set('second', hDebut.second()))
        const dateFin = dayjs(dayjs().set('hour', hFin.hour()).set('minute', hFin.minute()).set('second', hFin.second()))

        console.log("maintenant")
        console.log(maintenant.toString())
        console.log("debut")
        console.log(dateDebut.toString())
        console.log("fin")
        console.log(dateFin.toString())

        console.log("Affichage des differences")
        const debutDans = dateDebut.diff(maintenant, 'minute')
        const finDans = dateFin.diff(maintenant, 'minute')

        console.log(finDans + " minutes")
        console.log(debutDans + " minutes")


        //conditions pour prendre action:::::
        if (debutDans < -5) {
            // l'here de debut est passée depuis plus de 5 minutes, on ignore
            console.log(`${planning.Emission.nom} sur ${planning.Emission.Chaine.nom} L'heure de debut de l'emission est passée depuis plus de 5 minutes, rien à faire`)
        } else if ( -2 <= debutDans && debutDans <= 0) {
            // Début de l'emission
            console.log(`c'est l'heure...`)
            const chaineEncours = await Chaine.findOne({
                where: {
                    id: planning.Emission.chaine,
                   
                },
                include: {
                    model: Emission
                }
            })


           // console.log(`Emission actuellement en cours ${chaineEncours.Emission.nom}, on est sur la chaine ${chaineEncours.nom}`)
            console.log(`On change l'emission en direct sur cette chaine`)
            await Chaine.update({
                emission: planning.emission,
                heuredebut:planning.heuredebut,
                heurefin:planning.heurefin,
                emissionfilmee: planning.emissionfilmee
            }, {
                where: {
                    id: chaineEncours.id
                }
            })

        } else if (0 < debutDans && debutDans < 5) {
            // l'emission est passé  mais il y a moins de 5 minutes
            console.log(`${planning.Emission.nom} sur ${planning.Emission.Chaine.nom} l'heure de debut est passé mais il y a moins de 5 minutes...`)

        } else if (debutDans >= 5) {
            console.log(`${planning.Emission.nom} sur ${planning.Emission.Chaine.nom} ce n'est pas encore l'heure RDV dans... ${debutDans} minutes`)        }

    });

   // process.exit()

}

module.exports = directService