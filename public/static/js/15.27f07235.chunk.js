(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[15],{1390:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(3),r=t(0),i=t.n(r),o=t(354),s=t(1377);function c(e){const a=Object(n.a)({},e),t=a.message,r=a.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},i.a.createElement(o.a,{item:!0}),i.a.createElement(s.a,{color:"error"===r?"secondary":"primary"})," ",i.a.createElement("span",null,t,".")))}},1394:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(0),r=t.n(n),i=t(1430),o=t(344),s=t(1761),c=(t(60),t(357)),l=t(354);function u(e){const a=e.onUpload,t=e.onSupprimer,n=e.titre,u=e.progress,m=Object(o.a)(e=>Object(s.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==n&&void 0!==n?n:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,a,t)=>{let n="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return a.includes(e.type)||(n+="Type de fichier non support\xe9"),e.size>t&&(n+="Fichier trop volumineux."),n},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var t;return a(null!==(t=e[0])&&void 0!==t?t:null)},onDelete:t})),r.a.createElement(l.a,{className:"mt-3"},r.a.createElement(c.a,{value:u}),u,"%"))}},1396:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1387),o=t(1716),s=t(626),c=t(629),l=t(627),u=t(1325);const m=e=>{const a=e.label,t=e.nom,n=e.liste,i=(e.valeur,e.error);return r.a.createElement(s.a,{fullWidth:!0,error:i?"error":""},r.a.createElement(l.a,{htmlFor:t},a),r.a.createElement(c.a,Object.assign({id:t},e),n.map(e=>r.a.createElement(o.a,{key:e.id,value:e.value},e.label))),r.a.createElement(u.a,null,i?i.message:null))};a.a=function(e){const a=e.nom,t=e.label,n=e.control,o=(e.liste,e.valeur);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,Object.assign({name:a,as:m,control:n,nom:a,label:t,valeur:o,defaultValue:o,rules:{required:"Required"}},e)))}},1402:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));const n={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1403:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(626),o=t(452),s=t(1387);a.a=e=>{const a=e.id,t=e.nom,n=e.label,c=e.valeur,l=e.control,u=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{fullWidth:!0},r.a.createElement(s.a,{name:t,as:r.a.createElement(o.a,Object.assign({},e,{id:a,type:"text",helperText:u?u.message:null,label:n,error:!!u})),control:l,defaultValue:c,rules:{required:"Required"}})))}},1404:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1387),o=t(1716),s=t(626),c=t(629),l=t(627),u=t(1325);const m=e=>{const a=e.label,t=e.nom,n=e.table,i=e.options,m=(e.valeur,e.error);return r.a.createElement(s.a,{fullWidth:!0,error:m?"error":""},r.a.createElement(l.a,{htmlFor:t},a),r.a.createElement(c.a,Object.assign({id:t},e),i.map(e=>{var a,t;return r.a.createElement(o.a,{key:e.id,value:e.id},e.nom,"emission"===n&&" ["+(null!==(a=null===(t=e.Chaine)||void 0===t?void 0:t.nom)&&void 0!==a?a:"")+"]","categoriederequete"===n&&" ("+e.typederequete.nom+")","utilisateur"===n&&" "+e.prenom,"tarif"===n&&"("+e.montant+")","contrat"===n&&e.client.nom+"("+e.produit.nom+")","offre"===n&&e.prospect.nom+"("+e.prospect.quartier.nom+")")})),r.a.createElement(u.a,null,m?m.message:null))};a.a=function(e){const a=e.nom,t=e.label,n=e.control,o=(e.table,e.valeur);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,Object.assign({name:a,as:m,control:n,nom:a,label:t,valeur:o,rules:{required:"Required"}},e)))}},1405:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(17),r=t(0),i=t.n(r),o=t(1387),s=t(1360),c=t(1359);function l(e){const a=e.nom,t=e.coche,l=e.control,u=e.changement,m=e.label,d=Object(r.useState)(t),p=Object(n.a)(d,2),b=p[0],h=p[1];return i.a.createElement(c.a,{control:i.a.createElement(o.a,{name:a,control:l,render:e=>i.a.createElement(s.a,Object.assign({},e,{checked:b,onChange:a=>{e.onChange(a.target.checked),h(!b),u(!b)}}))}),label:null==m?a:m})}},1406:function(e,a,t){"use strict";t(17),t(0),t(626),t(1459),t(2170),t(1399),t(1400),t(1387)},1407:function(e,a,t){"use strict";t(17),t(0),t(626),t(1459),t(2130),t(1399),t(1400),t(1387)},1409:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(20),r=t.n(n),i=t(39),o=t(76);function s(e){return c.apply(this,arguments)}function c(){return(c=Object(i.a)(r.a.mark((function e(a){var t,n,i,s,c,l,u,m,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.fichier,n=a.nom,i=a.modele,s=a.champ,c=a.objet,l=a.obj,u=a.handleprogress,(m=new FormData).append(l.cle,c.id),m.append("modele",i),m.append("champ",s),m.append("nom",n),m.append("cle",l.cle),m.append("valeur",l.valeur),m.append("file",t),e.next=11,o.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return d=e.sent,e.abrupt("return",d.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1445:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(3),r=t(20),i=t.n(r),o=t(39),s=t(76);class c{getTouslesChaines(e,a,t,n){return Object(o.a)(i.a.mark((function n(){var r;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,s.b.get("/chaines?itemsPerPage=".concat(a,"&page=").concat(e,"&id=").concat(t," "));case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutChaine(e){return Object(o.a)(i.a.mark((function a(){var t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.b.post("/chaines",Object(n.a)(Object(n.a)({},e),{},{heuredebut:e.heuredebut,heurefin:e.heurefin}));case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}miseajourChaine(e){return Object(o.a)(i.a.mark((function a(){var t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("debut: ".concat(e.heuredebut)),console.log("fin: ".concat(e.heurefin)),a.next=4,s.b.put("/chaines/"+e.id,Object(n.a)(Object(n.a)({},e),{},{heuredebut:e.heuredebut,heurefin:e.heurefin}));case 4:return t=a.sent,a.abrupt("return",t.data);case 6:case"end":return a.stop()}}),a)})))()}suppressionChaine(e){return Object(o.a)(i.a.mark((function a(){var t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.b.delete("/chaines/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}togleactifChaine(e){return Object(o.a)(i.a.mark((function a(){var t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.b.put("/chaines/"+e.id,{actif:!e.actif});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}toglelienyoutubeChaine(e){return Object(o.a)(i.a.mark((function a(){var t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.b.put("/chaines/"+e.id,{lienyoutube:!e.lienyoutube});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}toglefilmeeChaine(e){return Object(o.a)(i.a.mark((function a(){var t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.b.put("/chaines/"+e.id,{emissionfilmee:!e.emissionfilmee});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionImage(e){return Object(o.a)(i.a.mark((function a(){var t;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.b.post("/medias/delete/".concat(e.id,"/chaine"),{});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}}},1461:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(20),r=t.n(n),i=t(39),o=t(76);class s{getTouslesEmissions(e,a,t,n){return Object(i.a)(r.a.mark((function n(){var i,s,c;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,o.b.get("/emissions?itemsPerPage=".concat(a,"&page=").concat(e,"&chaine=").concat(null!==(i=null===(s=t.chaine)||void 0===s?void 0:s.id)&&void 0!==i?i:""," "));case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutEmission(e){return Object(i.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.post("/emissions",e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}miseajourEmission(e){return Object(i.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.put("/emissions/"+e.id,e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionEmission(e){return Object(i.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.b.delete("/emissions/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}}},2166:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(17),i=t(0),o=t.n(i),s=t(1461),c=t(133),l=t(1423),u=t.n(l),m=t(1402),d=t(449),p=t(2116),b=t(454),h=t(1380),g=t(354),f=t(626),v=t(627),E=t(629),j=t(1716),O=t(1325),C=t(358),w=t(355),y=t(356),x=t(1390),S=t(1424),P=(t(1425),t(76)),k=t(1374),A=t(1398),F=t(2112),q=t(625),R=t(2111),T=t(2110),N=t(1377),M=t(1403),D=t(1404),L=(t(1405),t(1394),t(1396),t(1406),t(1407),t(2131));function I(e){var a,t,n,r,i,s,c;const l=e.state,u=e.fonctions,m=e.queries,p=e.useform,f=e.onSubmit;return o.a.createElement("div",null,o.a.createElement(g.a,{container:!0,spacing:1,justify:"center"},o.a.createElement(g.a,{item:!0,lg:6,md:6,sm:12,xs:12},o.a.createElement(k.a,{theme:Object(P.a)()},o.a.createElement(h.a,null,o.a.createElement(F.a,{action:o.a.createElement(q.a,{"aria-label":"",onClick:u.AnnulerEnregistrement},"x"),title:"ajout"===l.pagestate.action?"Nouvelle \xe9mission":"Mise \xe0 jour",subheader:""}),o.a.createElement(R.a,{className:" px-6 pt-6 pb-6"}," ",o.a.createElement("form",{onSubmit:p.handleSubmit(f)},o.a.createElement(g.a,{container:!0,spacing:4,direction:"column"},o.a.createElement(g.a,{item:!0},o.a.createElement(M.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(a=l.emission)||void 0===a?void 0:a.nom,control:p.control,error:p.errors.nom})),o.a.createElement(g.a,{item:!0},o.a.createElement(M.a,{id:"description",nom:"description",label:"Description",valeur:null===(t=l.emission)||void 0===t?void 0:t.description,control:p.control,error:p.errors.description})),o.a.createElement(g.a,{item:!0},m.queryChaines.isLoading?o.a.createElement(x.a,{message:"chargement des Chaines"}):o.a.createElement(D.a,{id:"chaine",name:"chaine",label:"chaine",table:"chaine",control:p.control,options:m.queryChaines.data.rows,error:p.errors.chaine,defaultValue:null!==(n=null===(r=l.emission)||void 0===r||null===(i=r.Chaine)||void 0===i?void 0:i.id)&&void 0!==n?n:"1",valeur:null!==(s=null===(c=l.emission)||void 0===c?void 0:c.chaine)&&void 0!==s?s:""}))))),o.a.createElement(T.a,null,o.a.createElement(g.a,{container:!0,alignItems:"center",justify:"space-between"},o.a.createElement(g.a,{item:!0},o.a.createElement(b.a,{color:"primary",variant:"contained",type:"submit",onClick:p.handleSubmit(f)},m.mutationMiseajour.isLoading||m.mutationAjout.isLoading?o.a.createElement(N.a,{color:"inherit"}):o.a.createElement(L.a,null),o.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===l.pagestate.action?o.a.createElement(d.a,null,"Enregistrer"):o.a.createElement(d.a,null,"Mettre \xe0 jour")))),o.a.createElement(g.a,{item:!0},o.a.createElement(b.a,{variant:"outlined",color:"secondary",onClick:u.AnnulerEnregistrement},"Annuler")))))))))}var z=e=>{var a,t;const r=e.state,i=e.fonctions,s=e.collonnes,c=e.queries,l=e.useform,A=e.onSubmit;return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement(C.a,{message:r.alert.message,severity:r.alert.severity,open:r.alert.open,handleAlertClose:!0===r.alert.automaticClose?()=>i.handleFermetureAlerte():()=>i.fermerAlerte()}),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(w.a,{routeSegments:[{name:r.titre}]})),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(d.a,{variant:"h4"},r.titre)),"affichage"===r.pagestate.mode?o.a.createElement(p.a,{in:r.pagestate.affichageTable,direction:"right",unmountOnExit:!0},o.a.createElement("div",null,o.a.createElement(b.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>i.handleClicksurNouveau()},"Nouvelle \xe9mission"),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(h.a,{className:"mb-sm-30"},o.a.createElement("form",null,o.a.createElement(g.a,{container:!0,spacing:2,direction:"column"},o.a.createElement(g.a,{item:!0},o.a.createElement(g.a,{container:!0,spacing:10,direction:"row"})),o.a.createElement(g.a,{item:!0},o.a.createElement(g.a,{container:!0,spacing:5,direction:"row"},o.a.createElement(g.a,{item:!0,sm:1}),o.a.createElement(g.a,{item:!0,sm:3,p:5},c.queryChaines.isLoading?o.a.createElement(x.a,{message:"chargement des Chaines"}):o.a.createElement(f.a,{fullWidth:!0},o.a.createElement(v.a,{htmlFor:"Chaine"},"Choisir une Chaine"),o.a.createElement(E.a,{id:"Chaine",variant:"outlined",onChange:i.handleChangeChaine},o.a.createElement(j.a,{key:"0",value:null},"Tous les prouits"),c.queryChaines.data.rows.map(e=>o.a.createElement(j.a,{key:e.id,value:e.id},e.nom))),o.a.createElement(O.a,null))),o.a.createElement(g.a,{item:!0,sm:3}))))))),c.queryEmissions.isLoading?o.a.createElement(x.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryEmissions.isError?o.a.createElement(x.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryEmissions.error,type:"error"}):o.a.createElement(S.a,{tag:"div",blocking:!1},o.a.createElement(k.a,{theme:Object(P.a)()},o.a.createElement(u.a,{title:r.titre,data:c.queryEmissions.data.rows.map(e=>({emission:e})),columns:s,options:Object(n.a)(Object(n.a)({},m.a),{},{serverSide:!0,count:c.queryEmissions.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:r.tableconfig.rowsPerPage,textLabels:Object(n.a)(Object(n.a)({},m.a.textLabels),{},{toolbar:Object(n.a)(Object(n.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>i.handleChangePage(e),onChangeRowsPerPage:e=>i.handleChangeRowPerPage(e),onSearchChange:e=>i.handleSearchChange(e),onFilterChange:()=>i.handleFilterChange()})}))),o.a.createElement(h.a,{className:"w-full overflow-auto",elevation:8},o.a.createElement(y.a,{open:r.dialogueSuppressionOuvert,onConfirmDialogClose:i.fermerDialogueSuppression,onYesClick:i.confirmerSuppression,text:null!==(a="Confirmez la suppression de "+(null===(t=r.emission)||void 0===t?void 0:t.nom))&&void 0!==a?a:""})))):o.a.createElement(I,{state:r,fonctions:i,queries:c,useform:l,onSubmit:A}))},Q=t(13),W=t(88),B=t(2132),V=t(2133),G=t(2134),J=t(2135),U=t(344),H=t(1334),Y=t(1378);Object(U.a)(e=>{e.palette,Object(Q.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function K(e){const a=Object(U.a)(e=>{e.palette,Object(Q.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),t=(a,t)=>{e.handleClickSurAction(a,t)};return[{name:"emission",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var n,r;return null!==(n=null===(r=e.id)||void 0===r?void 0:r.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"emission",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var n;return null!==(n=e.nom)&&void 0!==n?n:""}}},{name:"emission",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var n;return null!==(n=e.description)&&void 0!==n?n:""}}},{name:"emission",label:"chaine",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var n,r;return null!==(n=null===(r=e.Chaine)||void 0===r?void 0:r.nom)&&void 0!==n?n:""}}},{name:"emission",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,n,r)=>o.a.createElement("div",null,o.a.createElement(W.j,{menuButton:o.a.createElement("div",{className:a.userMenu},o.a.createElement(H.a,{xsDown:!0},o.a.createElement(b.a,{size:"small",variant:"outlined",color:"primary",endIcon:o.a.createElement(J.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:o.a.createElement(B.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:o.a.createElement(B.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:o.a.createElement(V.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>t(e,"Supprimer"),icon:o.a.createElement(G.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:o.a.createElement(V.a,{color:"primary"})}]}})(e).map(a=>o.a.createElement(o.a.Fragment,null,o.a.createElement(j.a,{onClick:()=>a.action(e),key:a.id,value:a.statut},a.icon,"   ",o.a.createElement("span",{className:"ml-5"},a.nom)),o.a.createElement(Y.a,null)))))}}]}var X=t(1387),Z=(t(1409),t(1397)),$=t(1445);a.default=()=>{const e={emission:{nom:"",description:"",chaine:1},emission1:null,titre:"Gestion des \xe9missions",tableconfig:{page:0,rowsPerPage:30,recherche:{chaine:{id:""}},filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1},a=Object(i.useState)(e),t=Object(r.a)(a,2),l=t[0],u=t[1];let m=new s.a,d=new $.a;const p=Object(c.useQueryClient)(),b={handleFermetureAlerte:()=>{u(Object(n.a)(Object(n.a)({},l),{},{titre:"Gestion des \xe9missions",alert:Object(n.a)(Object(n.a)({},l.alert),{},{open:!1}),pagestate:Object(n.a)(Object(n.a)({},l.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(n.a)(Object(n.a)({},l),{},{emission:null,titre:"Nouvelle \xe9mission",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(n.a)(Object(n.a)({},l),{},{alert:Object(n.a)(Object(n.a)({},l.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(n.a)(Object(n.a)({},l),{},{titre:"Gestion des \xe9missions",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(n.a)(Object(n.a)({},l),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{E.mutate(l.emission)},handleCloseDialoguephoto:()=>{u(Object(n.a)(Object(n.a)({},l),{},{dialoguephoto:Object(n.a)(Object(n.a)({},l.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{page:e})}))},handleClickSurAction:(e,a)=>{switch(console.log(a),a){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(n.a)(Object(n.a)({},l),{},{titre:"Mise \xe0 jour ",emission:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(n.a)(Object(n.a)({},l),{},{emission:e,dialogueSuppressionOuvert:!0}))}},handleChangeChaine:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{recherche:Object(n.a)(Object(n.a)({},l.tableconfig.recherche),{},{chaine:{id:e.target.value}})})}))}},h=Object(c.useQuery)(["Emissions",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>m.getTouslesEmissions(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),g=Object(c.useQuery)(["Chaines",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>d.getTouslesChaines(0,1e3,"",""),{keepPreviousData:!0}),f=Object(c.useMutation)(m.ajoutEmission,{onSuccess:()=>{p.invalidateQueries("Emissions"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Emissions"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),v=Object(c.useMutation)(m.miseajourEmission,{onSuccess:()=>{p.invalidateQueries("Emissions"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Emissions"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),E=Object(c.useMutation)(m.suppressionEmission,{onSuccess:()=>{u(Object(n.a)(Object(n.a)({},l),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Emissions")}}),j={queryEmissions:h,mutationMiseajour:v,mutationAjout:f,mutationSuppression:E,queryChaines:g},O=K(b),C=A.b().shape({nom:A.c().required("Le champs Nom est requis")}),w=Object(X.c)({resolver:Object(Z.yupResolver)(C),defaultValues:{emission:l.emission}});return o.a.createElement(z,{state:l,fonctions:b,collonnes:O,queries:j,useform:w,onSubmit:e=>{var a;let t=Object(n.a)(Object(n.a)({},l.emission),e);void 0!==(null===(a=l.emission)||void 0===a?void 0:a.id)?j.mutationMiseajour.mutate(Object(n.a)({},t)):j.mutationAjout.mutate(Object(n.a)({},t))}})}}}]);