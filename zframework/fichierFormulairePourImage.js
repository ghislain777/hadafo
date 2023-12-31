

const getContenuFichierFormulairePourImage = (table, page) => {
let contenuFichier = `

    
import React, { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
    Button,
    Grid,
    CircularProgress,
    FormControl,
    TextField,
    Typography,
    Checkbox,
    Card,
    CardHeader,
    Avatar,
    IconButton,
    CardContent,
    CardActions,
} from '@material-ui/core'
import FormInput from '../../../components/zen/formInput'
import FormSelect from '../../../components/zen/formSelect'
import FormCheckBox from '../../../components/zen/formCheckBox'
import FormFile from '../../../components/zen/formFile'
//import uploaderFichier from 'app/services/fichier/fichierService'
import Chargement from '../../../components/zen/chargement'
import FormSimpleSelect from '../../../components/zen/formSimpleSelect'
import FormDateTime from '../../../components/zen/formDateTime';
import FormDate from '../../../components/zen/formDate';
import { getMuiTheme } from '../../../../model/config'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { Send } from '@material-ui/icons'


export default function Formulaire${table.model}(props) {

    const { state, fonctions, queries, useforms } = props

    const useform = useforms.${table.nom}


    return (

        <div>
           
            <Grid container spacing={1} justify='center'>
                <Grid item lg={6} md={6} sm={12} xs={12} >
                    <MuiThemeProvider theme={getMuiTheme()}>
                        <Card>
                            <CardHeader
                                action={
                                    <IconButton
                                        aria-label=''
                                        onClick={fonctions.AnnulerEnregistrement}
                                    >
                                        x
                                    </IconButton>
                                }
                                title={
                                    state.pagestate.action === 'ajout'
                                        ? ' ${page.boutonNouveau}'
                                        : 'Mise à jour'
                                }
                                subheader=''
                            />

                            <CardContent className=' px-6 pt-6 pb-6'>
                                {' '}
                                <form >
                                    <Grid
                                        container
                                        spacing={4}
                                        direction='column'
                                    >
    

                                    `
                                    

table.champs.forEach(champ => {

    if (champ.type == "DATE") {
        contenuFormulaire += `
    <Grid item>
<FormDate
id='{${champ.nom}}'
nom='{${champ.nom}}'
label="{${champ.titre}}"
valeur={state.${table.nom}? state.${table.nom}.${champ.nom} : new Date()}
error={useform.errors.${champ.nom} }
control={useform.control}
handledatechange={fonctions.handledate${champ.nom}change}
/>
</Grid>   
    `
    }


    if ((champ.type == "DATEHEURE") && champ.nom != "createdAt" && champ.nom != "updatedAt") {
        contenuFormulaire += `
    <Grid item>
<FormDateTime
id='{${champ.nom}}'
nom='{${champ.nom}}'
label="${champ.titre}"
valeur={state.${table.nom}? state.${table.nom}.${champ.nom} : new Date()}
error={useform.errors.${champ.nom} }
control={useform.control}
handledatechange={fonctions.handledate${champ.nom}change}
/>
</Grid>   
    `
    }

    if ((["ENTIER", "TEXTE", "STATUT"].includes(champ.type)) && champ.nom != "id") {

        if (champ.estCle) {

            contenuFichier += `
<Grid item>
{queries.query${champ.nom.ucfirst()}s.isLoading ? (
<Chargement message='chargement des ${champ.nom.ucfirst()}s' />
) : (
<FormSelect
    id='${champ.nom}'
    name='${champ.nom}'
    label="${champ.titre}"
    table='${champ.nom}'
    control={useform.control}
    options={
        queries.query${champ.nom.ucfirst()}s.data['rows']
    }
    error={useform.errors.${champ.nom} }
    defaultValue = {state.${table.nom}?.${champ.nom.ucfirst()}?.id?? '1'}
    valeur={
        state.${table.nom}?.${champ.nom}?? ''
    }
></FormSelect>
 )}
  </Grid>
`
        } else {

            contenuFichier += `
<Grid item>
<FormInput
id='${champ.nom}'
nom='${champ.nom}'
label="${champ.titre}"
valeur={state.${table.nom}?.${champ.nom} }
control={useform.control}
error={useform.errors.${champ.nom} }
/>
</Grid>
`
        }
    }


    if (champ.type == "IMAGE") {

        contenuFormulaire += `

<Grid item>
<FormFile
   progress={state.progress${champ.nom}}
   acceptedFiles={['.png']}
   onUpload={(file) => fonctions.uploader${champ.nom}(file)}
   onSupprimer={() => fonctions.supprimer${champ.nom}()}
   titre={
       'Fichier ${champ.nom}.png(faire glisser ou cliquez ici pour charger)'
   }
/>
</Grid>
`
    }

    if (champ.type == "TEXTELONG") {
        contenuFormulaire = `
<Grid item>
<FormInput
id='${champ.nom}'
nom='${champ.nom}'
label="${champ.titre}"
valeur={state.${table.nom}?.${champ.nom} }
control={useform.control}
error={useform.errors.${champ.nom} }
multiline
rows={4}
/>
</Grid>

`
    }

//     if (champ.type == "BOOLEEN") {
//         contenuFormulaire += `
// <Grid item>
//             <FormCheckBox
//                 id=' ${champ.nom} '
//                 nom=' ${champ.nom} '
//                 control={useform.control}
//                 coche={state.${table.nom}?.${champ.nom}  ?? ''}
//                 //coche={false}
//                 onChange={(valeur) => fonctions.handleChangement${champ.nom}(valeur)}
//                 changement={fonctions.handleChangement${champ.nom}}
//             />
//         </Grid>

// `

//     }

    
});

contenuFichier+= `
    
    </Grid>
    </form>
</CardContent>
<CardActions>
    <Grid
        container
        alignItems='center'
        justify='space-between'
    >
         <Grid item>
            <Button
                variant='outlined'
                color='secondary'
                onClick={fonctions.allerAPrecedent}
            >
                {"Précédent"}
            </Button>
        </Grid>

        <Grid item>
            <Button
                color='primary'
                variant='contained'
                type='submit'
                onClick={ useform.handleSubmit(fonctions.allerAPhotos) }
            >
               { (queries.mutationAjout.isLoading || queries.mutationMiseajour.isLoading)? (
                    <CircularProgress color='inherit' />
                )
                :
                <>
                <span className='pl-2 capitalize'>
                    
                        <Typography>
                           Suivant
                        </Typography>
                    
                </span>
                 <Send/>
                </>}
            </Button>
        </Grid>
    </Grid>
</CardActions>
</Card>
</MuiThemeProvider>
</Grid>
</Grid>
</div>

)
}


`

return contenuFichier

}

module.exports = getContenuFichierFormulairePourImage