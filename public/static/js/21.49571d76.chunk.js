(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[21],{1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(3),n=a(0),o=a.n(n),i=a(354),c=a(1377);function l(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(i.a,{item:!0}),o.a.createElement(c.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1394:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),o=a(1430),i=a(344),c=a(1761),l=(a(60),a(357)),s=a(354);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(i.a)(e=>Object(c.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(s.a,{className:"mt-3"},n.a.createElement(l.a,{value:u}),u,"%"))}},1396:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1387),i=a(1716),c=a(626),l=a(629),s=a(627),u=a(1325);const m=e=>{const t=e.label,a=e.nom,r=e.liste,o=(e.valeur,e.error);return n.a.createElement(c.a,{fullWidth:!0,error:o?"error":""},n.a.createElement(s.a,{htmlFor:a},t),n.a.createElement(l.a,Object.assign({id:a},e),r.map(e=>n.a.createElement(i.a,{key:e.id,value:e.value},e.label))),n.a.createElement(u.a,null,o?o.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,i=(e.liste,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:i,defaultValue:i,rules:{required:"Required"}},e)))}},1402:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1403:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(626),i=a(452),c=a(1387);t.a=e=>{const t=e.id,a=e.nom,r=e.label,l=e.valeur,s=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(c.a,{name:a,as:n.a.createElement(i.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:s,defaultValue:l,rules:{required:"Required"}})))}},1404:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1387),i=a(1716),c=a(626),l=a(629),s=a(627),u=a(1325);const m=e=>{const t=e.label,a=e.nom,r=e.table,o=e.options,m=(e.valeur,e.error);return n.a.createElement(c.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(s.a,{htmlFor:a},t),n.a.createElement(l.a,Object.assign({id:a},e),o.map(e=>{var t,a;return n.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"emission"===r&&" ["+(null!==(t=null===(a=e.Chaine)||void 0===a?void 0:a.nom)&&void 0!==t?t:"")+"]","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")")})),n.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,i=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:i,rules:{required:"Required"}},e)))}},1405:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(17),n=a(0),o=a.n(n),i=a(1387),c=a(1360),l=a(1359);function s(e){const t=e.nom,a=e.coche,s=e.control,u=e.changement,m=e.label,p=Object(n.useState)(a),d=Object(r.a)(p,2),g=d[0],b=d[1];return o.a.createElement(l.a,{control:o.a.createElement(i.a,{name:t,control:s,render:e=>o.a.createElement(c.a,Object.assign({},e,{checked:g,onChange:t=>{e.onChange(t.target.checked),b(!g),u(!g)}}))}),label:null==m?t:m})}},1406:function(e,t,a){"use strict";a(17),a(0),a(626),a(1459),a(2170),a(1399),a(1400),a(1387)},1407:function(e,t,a){"use strict";a(17),a(0),a(626),a(1459),a(2130),a(1399),a(1400),a(1387)},1409:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),o=a(39),i=a(76);function c(e){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(n.a.mark((function e(t){var a,r,o,c,l,s,u,m,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.nom,o=t.modele,c=t.champ,l=t.objet,s=t.obj,u=t.handleprogress,(m=new FormData).append(s.cle,l.id),m.append("modele",o),m.append("champ",c),m.append("nom",r),m.append("cle",s.cle),m.append("valeur",s.valeur),m.append("file",a),e.next=11,i.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return p=e.sent,e.abrupt("return",p.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},2156:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),o=a(0),i=a.n(o),c=a(20),l=a.n(c),s=a(39),u=a(76);class m{getTouslesCategories(e,t,a,r){return Object(s.a)(l.a.mark((function r(){var n;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,u.b.get("/categories?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return n=r.sent,r.abrupt("return",n.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutCategorie(e){return Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.post("/categories",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourCategorie(e){return Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.put("/categories/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionCategorie(e){return Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.delete("/categories/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}var p=a(133),d=a(1423),g=a.n(d),b=a(1402),f=a(449),h=a(2116),v=a(454),j=a(1380),E=a(358),O=a(355),C=a(356),y=a(1390),w=a(1424),S=(a(1425),a(1374)),x=a(1398),P=a(354),k=a(2112),A=a(625),F=a(2111),R=a(2110),M=a(1377),q=a(1403),N=(a(1404),a(1405),a(1394),a(1396),a(1406),a(1407),a(2131));function T(e){var t,a;const r=e.state,n=e.fonctions,o=e.queries,c=e.useform,l=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(P.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(P.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(S.a,{theme:Object(u.a)()},i.a.createElement(j.a,null,i.a.createElement(k.a,{action:i.a.createElement(A.a,{"aria-label":"",onClick:n.AnnulerEnregistrement},"x"),title:"ajout"===r.pagestate.action?"Nouvelle cat\xe9gorie":"Mise \xe0 jour",subheader:""}),i.a.createElement(F.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:c.handleSubmit(l)},i.a.createElement(P.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(P.a,{item:!0},i.a.createElement(q.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=r.categorie)||void 0===t?void 0:t.nom,control:c.control,error:c.errors.nom})),i.a.createElement(P.a,{item:!0},i.a.createElement(q.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=r.categorie)||void 0===a?void 0:a.description,control:c.control,error:c.errors.description}))))),i.a.createElement(R.a,null,i.a.createElement(P.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(P.a,{item:!0},i.a.createElement(v.a,{color:"primary",variant:"contained",type:"submit",onClick:c.handleSubmit(l)},o.mutationMiseajour.isLoading||o.mutationAjout.isLoading?i.a.createElement(M.a,{color:"inherit"}):i.a.createElement(N.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===r.pagestate.action?i.a.createElement(f.a,null,"Enregistrer"):i.a.createElement(f.a,null,"Mettre \xe0 jour")))),i.a.createElement(P.a,{item:!0},i.a.createElement(v.a,{variant:"outlined",color:"secondary",onClick:n.AnnulerEnregistrement},"Annuler")))))))))}var D=e=>{var t,a;const n=e.state,o=e.fonctions,c=e.collonnes,l=e.queries,s=e.useform,m=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(E.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(O.a,{routeSegments:[{name:n.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(f.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?i.a.createElement(h.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(v.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouvelle cat\xe9gorie"),l.queryCategories.isLoading?i.a.createElement(y.a,{message:"Chargement des donn\xe9es...",type:"info"}):l.queryCategories.isError?i.a.createElement(y.a,{message:"Erreur lors du chargement des donn\xe9es::"+l.queryCategories.error,type:"error"}):i.a.createElement(w.a,{tag:"div",blocking:!1},i.a.createElement(S.a,{theme:Object(u.a)()},i.a.createElement(g.a,{title:n.titre,data:l.queryCategories.data.rows.map(e=>({categorie:e})),columns:c,options:Object(r.a)(Object(r.a)({},b.a),{},{serverSide:!0,count:l.queryCategories.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},b.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},b.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(j.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(C.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.categorie)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(T,{state:n,fonctions:o,queries:l,useform:s,onSubmit:m}))},I=a(13),L=a(88),z=a(2132),Q=a(2133),W=a(2134),B=a(2135),V=a(344),J=a(1334),U=a(1716),G=a(1378);Object(V.a)(e=>{e.palette,Object(I.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function H(e){const t=Object(V.a)(e=>{e.palette,Object(I.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"categorie",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"categorie",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.nom)&&void 0!==r?r:""}}},{name:"categorie",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.description)&&void 0!==r?r:""}}},{name:"categorie",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>i.a.createElement("div",null,i.a.createElement(L.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(J.a,{xsDown:!0},i.a.createElement(v.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(B.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(z.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(z.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(Q.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(W.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(Q.a,{color:"primary"})}]}})(e).map(t=>i.a.createElement(i.a.Fragment,null,i.a.createElement(U.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",i.a.createElement("span",{className:"ml-5"},t.nom)),i.a.createElement(G.a,null)))))}}]}var Y=a(1387),K=(a(1409),a(1397));t.default=()=>{const e={categorie:{nom:"",description:""},categorie1:null,titre:"Cat\xe9gories d\xe9missions",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1},t=Object(o.useState)(e),a=Object(n.a)(t,2),c=a[0],l=a[1];let s=new m;const u=Object(p.useQueryClient)(),d={handleFermetureAlerte:()=>{l(Object(r.a)(Object(r.a)({},c),{},{titre:"Cat\xe9gories d'\xe9missions",alert:Object(r.a)(Object(r.a)({},c.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},c.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{l(Object(r.a)(Object(r.a)({},c),{},{categorie:null,titre:"Nouvelle cat\xe9gorie",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{l(Object(r.a)(Object(r.a)({},c),{},{alert:Object(r.a)(Object(r.a)({},c.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),l(Object(r.a)(Object(r.a)({},c),{},{titre:"Cat\xe9gories d'\xe9missions",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{l(Object(r.a)(Object(r.a)({},c),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{h.mutate(c.categorie)},handleCloseDialoguephoto:()=>{l(Object(r.a)(Object(r.a)({},c),{},{dialoguephoto:Object(r.a)(Object(r.a)({},c.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{l(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":l(Object(r.a)(Object(r.a)({},c),{},{titre:"Mise \xe0 jour ",categorie:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":l(Object(r.a)(Object(r.a)({},c),{},{categorie:e,dialogueSuppressionOuvert:!0}))}}},g=Object(p.useQuery)(["Categories",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>s.getTouslesCategories(c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),b=Object(p.useMutation)(s.ajoutCategorie,{onSuccess:()=>{u.invalidateQueries("Categories"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{u.invalidateQueries("Categories"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),f=Object(p.useMutation)(s.miseajourCategorie,{onSuccess:()=>{u.invalidateQueries("Categories"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{u.invalidateQueries("Categories"),l(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(p.useMutation)(s.suppressionCategorie,{onSuccess:()=>{l(Object(r.a)(Object(r.a)({},c),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{u.invalidateQueries("Categories")}}),v={queryCategories:g,mutationMiseajour:f,mutationAjout:b,mutationSuppression:h},j=H(d),E=x.b().shape({nom:x.c().required("Le champs Nom est requis")}),O=Object(Y.c)({resolver:Object(K.yupResolver)(E),defaultValues:{categorie:c.categorie}});return i.a.createElement(D,{state:c,fonctions:d,collonnes:j,queries:v,useform:O,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},c.categorie),e);void 0!==(null===(t=c.categorie)||void 0===t?void 0:t.id)?v.mutationMiseajour.mutate(Object(r.a)({},a)):v.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);