(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[19],{1390:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(3),n=t(0),o=t.n(n),i=t(354),l=t(1377);function c(e){const a=Object(r.a)({},e),t=a.message,n=a.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(i.a,{item:!0}),o.a.createElement(l.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,t,".")))}},1394:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var r=t(0),n=t.n(r),o=t(1430),i=t(344),l=t(1761),c=(t(60),t(357)),s=t(354);function u(e){const a=e.onUpload,t=e.onSupprimer,r=e.titre,u=e.progress,m=Object(i.a)(e=>Object(l.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,a,t)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return a.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>t&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var t;return a(null!==(t=e[0])&&void 0!==t?t:null)},onDelete:t})),n.a.createElement(s.a,{className:"mt-3"},n.a.createElement(c.a,{value:u}),u,"%"))}},1396:function(e,a,t){"use strict";var r=t(0),n=t.n(r),o=t(1387),i=t(1716),l=t(626),c=t(629),s=t(627),u=t(1325);const m=e=>{const a=e.label,t=e.nom,r=e.liste,o=(e.valeur,e.error);return n.a.createElement(l.a,{fullWidth:!0,error:o?"error":""},n.a.createElement(s.a,{htmlFor:t},a),n.a.createElement(c.a,Object.assign({id:t},e),r.map(e=>n.a.createElement(i.a,{key:e.id,value:e.value},e.label))),n.a.createElement(u.a,null,o?o.message:null))};a.a=function(e){const a=e.nom,t=e.label,r=e.control,i=(e.liste,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:a,as:m,control:r,nom:a,label:t,valeur:i,defaultValue:i,rules:{required:"Required"}},e)))}},1402:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1403:function(e,a,t){"use strict";var r=t(0),n=t.n(r),o=t(626),i=t(452),l=t(1387);a.a=e=>{const a=e.id,t=e.nom,r=e.label,c=e.valeur,s=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(l.a,{name:t,as:n.a.createElement(i.a,Object.assign({},e,{id:a,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:s,defaultValue:c,rules:{required:"Required"}})))}},1404:function(e,a,t){"use strict";var r=t(0),n=t.n(r),o=t(1387),i=t(1716),l=t(626),c=t(629),s=t(627),u=t(1325);const m=e=>{const a=e.label,t=e.nom,r=e.table,o=e.options,m=(e.valeur,e.error);return n.a.createElement(l.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(s.a,{htmlFor:t},a),n.a.createElement(c.a,Object.assign({id:t},e),o.map(e=>{var a,t;return n.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"emission"===r&&" ["+(null!==(a=null===(t=e.Chaine)||void 0===t?void 0:t.nom)&&void 0!==a?a:"")+"]","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")")})),n.a.createElement(u.a,null,m?m.message:null))};a.a=function(e){const a=e.nom,t=e.label,r=e.control,i=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:a,as:m,control:r,nom:a,label:t,valeur:i,rules:{required:"Required"}},e)))}},1405:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var r=t(17),n=t(0),o=t.n(n),i=t(1387),l=t(1360),c=t(1359);function s(e){const a=e.nom,t=e.coche,s=e.control,u=e.changement,m=e.label,p=Object(n.useState)(t),d=Object(r.a)(p,2),b=d[0],g=d[1];return o.a.createElement(c.a,{control:o.a.createElement(i.a,{name:a,control:s,render:e=>o.a.createElement(l.a,Object.assign({},e,{checked:b,onChange:a=>{e.onChange(a.target.checked),g(!b),u(!b)}}))}),label:null==m?a:m})}},1406:function(e,a,t){"use strict";t(17),t(0),t(626),t(1459),t(2170),t(1399),t(1400),t(1387)},1407:function(e,a,t){"use strict";t(17),t(0),t(626),t(1459),t(2130),t(1399),t(1400),t(1387)},1409:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t(20),n=t.n(r),o=t(39),i=t(76);function l(e){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(n.a.mark((function e(a){var t,r,o,l,c,s,u,m,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.fichier,r=a.nom,o=a.modele,l=a.champ,c=a.objet,s=a.obj,u=a.handleprogress,(m=new FormData).append(s.cle,c.id),m.append("modele",o),m.append("champ",l),m.append("nom",r),m.append("cle",s.cle),m.append("valeur",s.valeur),m.append("file",t),e.next=11,i.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return p=e.sent,e.abrupt("return",p.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1611:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t(20),n=t.n(r),o=t(39),i=t(76);class l{getTouslesPays(e,a,t,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,i.b.get("/pays?itemsPerPage=".concat(a,"&page=").concat(e,"&id=").concat(t," "));case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutPay(e){return Object(o.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.b.post("/pays",e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}miseajourPay(e){return Object(o.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.b.put("/pays/"+e.id,e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionPay(e){return Object(o.a)(n.a.mark((function a(){var t;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.b.delete("/pays/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}}},2164:function(e,a,t){"use strict";t.r(a);var r=t(3),n=t(17),o=t(0),i=t.n(o),l=t(1611),c=t(133),s=t(1423),u=t.n(s),m=t(1402),p=t(1330),d=t(2115),b=t(2114),g=t(449),f=t(2116),h=t(454),v=t(1380),j=t(358),E=t(355),y=t(356),O=t(1390),P=t(1424),w=(t(1425),t(76)),C=t(1374),S=t(1398),x=t(354),k=t(2112),A=t(625),F=t(2111),R=t(2110),q=t(1377),M=t(1403),N=(t(1404),t(1405),t(1394),t(1396),t(1406),t(1407),t(2131));function T(e){var a,t;const r=e.state,n=e.fonctions,o=e.queries,l=e.useform,c=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(x.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(x.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(C.a,{theme:Object(w.a)()},i.a.createElement(v.a,null,i.a.createElement(k.a,{action:i.a.createElement(A.a,{"aria-label":"",onClick:n.AnnulerEnregistrement},"x"),title:"ajout"===r.pagestate.action?"Nouveau pays":"Mise \xe0 jour",subheader:""}),i.a.createElement(F.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:l.handleSubmit(c)},i.a.createElement(x.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(x.a,{item:!0},i.a.createElement(M.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(a=r.pay)||void 0===a?void 0:a.nom,control:l.control,error:l.errors.nom})),i.a.createElement(x.a,{item:!0},i.a.createElement(M.a,{id:"description",nom:"description",label:"Description",valeur:null===(t=r.pay)||void 0===t?void 0:t.description,control:l.control,error:l.errors.description}))))),i.a.createElement(R.a,null,i.a.createElement(x.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(x.a,{item:!0},i.a.createElement(h.a,{color:"primary",variant:"contained",type:"submit",onClick:l.handleSubmit(c)},o.mutationMiseajour.isLoading||o.mutationAjout.isLoading?i.a.createElement(q.a,{color:"inherit"}):i.a.createElement(N.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===r.pagestate.action?i.a.createElement(g.a,null,"Enregistrer"):i.a.createElement(g.a,null,"Mettre \xe0 jour")))),i.a.createElement(x.a,{item:!0},i.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:n.AnnulerEnregistrement},"Annuler")))))))))}var D=e=>{var a,t;const n=e.state,o=e.fonctions,l=e.collonnes,c=e.queries,s=e.useform,S=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(p.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},i.a.createElement(d.a,{id:""},n.dialoguephoto.titre),i.a.createElement(b.a,null,i.a.createElement("img",{src:w.c+"/fichiers/"+n.dialoguephoto.fichier,alt:n.dialoguephoto.objet,srcset:""}))),i.a.createElement(j.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(E.a,{routeSegments:[{name:n.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(g.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?i.a.createElement(f.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(h.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouveau"),c.queryPays.isLoading?i.a.createElement(O.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryPays.isError?i.a.createElement(O.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryPays.error,type:"error"}):i.a.createElement(P.a,{tag:"div",blocking:!1},i.a.createElement(C.a,{theme:Object(w.a)()},i.a.createElement(u.a,{title:n.titre,data:c.queryPays.data.rows.map(e=>({pay:e})),columns:l,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:c.queryPays.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(v.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(y.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(a="Confirmez la suppression de "+(null===(t=n.pay)||void 0===t?void 0:t.nom))&&void 0!==a?a:""})))):i.a.createElement(T,{state:n,fonctions:o,queries:c,useform:s,onSubmit:S}))},L=t(13),I=t(88),z=t(2132),W=t(2133),Q=t(2134),B=t(2135),G=t(344),V=t(1334),J=t(1716),U=t(1378);Object(G.a)(e=>{e.palette,Object(L.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function H(e){const a=Object(G.a)(e=>{e.palette,Object(L.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),t=(a,t)=>{e.handleClickSurAction(a,t)};return[{name:"pay",label:"id",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r,n;return null!==(r=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"pay",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r;return null!==(r=e.nom)&&void 0!==r?r:""}}},{name:"pay",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var r;return null!==(r=e.description)&&void 0!==r?r:""}}},{name:"pay",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>i.a.createElement("div",null,i.a.createElement(I.j,{menuButton:i.a.createElement("div",{className:a.userMenu},i.a.createElement(V.a,{xsDown:!0},i.a.createElement(h.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(B.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:i.a.createElement(z.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:i.a.createElement(z.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:i.a.createElement(W.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>t(e,"Supprimer"),icon:i.a.createElement(Q.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:i.a.createElement(W.a,{color:"primary"})}]}})(e).map(a=>i.a.createElement(i.a.Fragment,null,i.a.createElement(J.a,{onClick:()=>a.action(e),key:a.id,value:a.statut},a.icon,"   ",i.a.createElement("span",{className:"ml-5"},a.nom)),i.a.createElement(U.a,null)))))}}]}var Y=t(1387),K=(t(1409),t(1397));a.default=()=>{const e={pay:{nom:"",description:""},pay1:null,titre:"Gestion des pays",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},a=Object(o.useState)(e),t=Object(n.a)(a,2),s=t[0],u=t[1];let m=new l.a;const p=Object(c.useQueryClient)(),d={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des pays",alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},s.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},s),{},{pay:null,titre:"Nouveau pays",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des pays",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{h.mutate(s.pay)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialoguephoto:Object(r.a)(Object(r.a)({},s.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{page:e})}))},handleClickSurAction:(e,a)=>{switch(console.log(a),a){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},s),{},{titre:"Mise \xe0 jour ",pay:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},s),{},{pay:e,dialogueSuppressionOuvert:!0}))}}},b=Object(c.useQuery)(["Pays",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>m.getTouslesPays(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),g=Object(c.useMutation)(m.ajoutPay,{onSuccess:()=>{p.invalidateQueries("Pays"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Pays"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),f=Object(c.useMutation)(m.miseajourPay,{onSuccess:()=>{p.invalidateQueries("Pays"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Pays"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(c.useMutation)(m.suppressionPay,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Pays")}}),v={queryPays:b,mutationMiseajour:f,mutationAjout:g,mutationSuppression:h},j=H(d),E=S.b().shape({nom:S.c().required("Le champs Nom est requis"),description:S.c().required("Le champs Description est requis")}),y=Object(Y.c)({resolver:Object(K.yupResolver)(E),defaultValues:{pay:s.pay}});return i.a.createElement(D,{state:s,fonctions:d,collonnes:j,queries:v,useform:y,onSubmit:e=>{var a;let t=Object(r.a)(Object(r.a)({},s.pay),e);void 0!==(null===(a=s.pay)||void 0===a?void 0:a.id)?v.mutationMiseajour.mutate(Object(r.a)({},t)):v.mutationAjout.mutate(Object(r.a)({},t))}})}}}]);