(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[15],{1391:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(3),r=t(0),i=t.n(r),s=t(354),o=t(1377);function c(e){const a=Object(n.a)({},e),t=a.message,r=a.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},i.a.createElement(s.a,{item:!0}),i.a.createElement(o.a,{color:"error"===r?"secondary":"primary"})," ",i.a.createElement("span",null,t,".")))}},1397:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(0),r=t.n(n),i=t(1425),s=t(344),o=t(1816),c=(t(60),t(358)),l=t(354);function u(e){const a=e.onUpload,t=e.onSupprimer,n=e.titre,u=e.progress,m=Object(s.a)(e=>Object(o.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==n&&void 0!==n?n:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,a,t)=>{let n="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return a.includes(e.type)||(n+="Type de fichier non support\xe9"),e.size>t&&(n+="Fichier trop volumineux."),n},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var t;return a(null!==(t=e[0])&&void 0!==t?t:null)},onDelete:t})),r.a.createElement(l.a,{className:"mt-3"},r.a.createElement(c.a,{value:u}),u,"%"))}},1398:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1387),s=t(1771),o=t(626),c=t(629),l=t(627),u=t(1325);const m=e=>{const a=e.label,t=e.nom,n=e.liste,i=(e.valeur,e.error);return r.a.createElement(o.a,{fullWidth:!0,error:i?"error":""},r.a.createElement(l.a,{htmlFor:t},a),r.a.createElement(c.a,Object.assign({id:t},e),n.map(e=>r.a.createElement(s.a,{key:e.id,value:e.value},e.label))),r.a.createElement(u.a,null,i?i.message:null))};a.a=function(e){const a=e.nom,t=e.label,n=e.control,s=(e.liste,e.valeur);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,Object.assign({name:a,as:m,control:n,nom:a,label:t,valeur:s,defaultValue:s,rules:{required:"Required"}},e)))}},1403:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));const n={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1404:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(626),s=t(452),o=t(1387);a.a=e=>{const a=e.id,t=e.nom,n=e.label,c=e.valeur,l=e.control,u=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{fullWidth:!0},r.a.createElement(o.a,{name:t,as:r.a.createElement(s.a,Object.assign({},e,{id:a,type:"text",helperText:u?u.message:null,label:n,error:!!u})),control:l,defaultValue:c,rules:{required:"Required"}})))}},1405:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1387),s=t(1771),o=t(626),c=t(629),l=t(627),u=t(1325);const m=e=>{const a=e.label,t=e.nom,n=e.table,i=e.options,m=(e.valeur,e.error);return r.a.createElement(o.a,{fullWidth:!0,error:m?"error":""},r.a.createElement(l.a,{htmlFor:t},a),r.a.createElement(c.a,Object.assign({id:t},e),i.map(e=>{var a,t;return r.a.createElement(s.a,{key:e.id,value:e.id},e.nom,"emission"===n&&" ["+(null!==(a=null===(t=e.Chaine)||void 0===t?void 0:t.nom)&&void 0!==a?a:"")+"]","categoriederequete"===n&&" ("+e.typederequete.nom+")","utilisateur"===n&&" "+e.prenom,"tarif"===n&&"("+e.montant+")","contrat"===n&&e.client.nom+"("+e.produit.nom+")","offre"===n&&e.prospect.nom+"("+e.prospect.quartier.nom+")")})),r.a.createElement(u.a,null,m?m.message:null))};a.a=function(e){const a=e.nom,t=e.label,n=e.control,s=(e.table,e.valeur);return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,Object.assign({name:a,as:m,control:n,nom:a,label:t,valeur:s,rules:{required:"Required"}},e)))}},1406:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(17),r=t(0),i=t.n(r),s=t(1387),o=t(1360),c=t(1359);function l(e){const a=e.nom,t=e.coche,l=e.control,u=e.changement,m=e.label,d=Object(r.useState)(t),p=Object(n.a)(d,2),b=p[0],g=p[1];return i.a.createElement(c.a,{control:i.a.createElement(s.a,{name:a,control:l,render:e=>i.a.createElement(o.a,Object.assign({},e,{checked:b,onChange:a=>{e.onChange(a.target.checked),g(!b),u(!b)}}))}),label:null==m?a:m})}},1407:function(e,a,t){"use strict";t(17),t(0),t(626),t(1495),t(2178),t(1401),t(1402),t(1387)},1408:function(e,a,t){"use strict";t(17),t(0),t(626),t(1495),t(2133),t(1401),t(1402),t(1387)},1411:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(20),r=t.n(n),i=t(39),s=t(76);function o(e){return c.apply(this,arguments)}function c(){return(c=Object(i.a)(r.a.mark((function e(a){var t,n,i,o,c,l,u,m,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.fichier,n=a.nom,i=a.modele,o=a.champ,c=a.objet,l=a.obj,u=a.handleprogress,(m=new FormData).append(l.cle,c.id),m.append("modele",i),m.append("champ",o),m.append("nom",n),m.append("cle",l.cle),m.append("valeur",l.valeur),m.append("file",t),e.next=11,s.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return d=e.sent,e.abrupt("return",d.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1441:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(20),r=t.n(n),i=t(39),s=t(76);class o{getTouslesEmissions(e,a,t,n){return Object(i.a)(r.a.mark((function n(){var i,o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t),e+=1,n.next=4,s.b.get("/emissions?itemsPerPage=".concat(a,"&page=").concat(e,"&chaine=").concat(null!==(i=t.chaine)&&void 0!==i?i:""," "));case 4:return o=n.sent,n.abrupt("return",o.data);case 6:case"end":return n.stop()}}),n)})))()}ajoutEmission(e){return Object(i.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.b.post("/emissions",e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}miseajourEmission(e){return Object(i.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.b.put("/emissions/"+e.id,e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionEmission(e){return Object(i.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.b.delete("/emissions/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}}},1512:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(20),r=t.n(n),i=t(39),s=t(76);class o{getTouslesAnimateurs(e,a,t,n){return Object(i.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e+=1,t.next=3,s.b.get("/animateurs?itemsPerPage=".concat(a,"&page=").concat(e," "));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))()}ajoutAnimateur(e){return Object(i.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.b.post("/animateurs",e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}miseajourAnimateur(e){return Object(i.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.b.put("/animateurs/"+e.id,e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionAnimateur(e){return Object(i.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.b.delete("/animateurs/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionImage(e){return Object(i.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.b.post("/medias/delete/".concat(e.id,"/animateur"),{});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}}},1665:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t(20),r=t.n(n),i=t(39),s=t(76);class o{getTouslesAnimateuremissions(e,a,t,n){return Object(i.a)(r.a.mark((function n(){var i,o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,s.b.get("/animateuremissions?itemsPerPage=".concat(a,"&page=").concat(e,"&animateur=").concat(t.animateur.id,"&emission=").concat(t.emission.id,"&chaine=").concat(null!==(i=t.chaine)&&void 0!==i?i:""));case 3:return o=n.sent,n.abrupt("return",o.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutAnimateuremission(e){return Object(i.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.b.post("/animateuremissions",e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}miseajourAnimateuremission(e){return Object(i.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.b.put("/animateuremissions/"+e.id,e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionAnimateuremission(e){return Object(i.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.b.delete("/animateuremissions/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}}},2171:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(17),i=t(0),s=t.n(i),o=t(1665),c=t(133),l=t(1418),u=t.n(l),m=t(1403),d=t(449),p=t(2119),b=t(1380),g=t(354),f=t(626),v=t(627),h=t(629),E=t(1771),j=t(1325),O=t(357),w=t(355),y=t(356),A=t(1391),x=t(1419),C=(t(1420),t(76)),P=t(1374),S=t(1400),k=t(2115),F=t(625),q=t(2114),T=t(2113),R=t(454),D=t(1377),M=t(1404),N=t(1405),L=(t(1406),t(1397),t(1398),t(1407),t(1408),t(2134));function I(e){var a,t,n,r,i,o,c,l,u,m,p;const f=e.state,v=e.fonctions,h=e.queries,E=e.useform,j=e.onSubmit;return s.a.createElement("div",null,s.a.createElement(g.a,{container:!0,spacing:1,justify:"center"},s.a.createElement(g.a,{item:!0,lg:6,md:6,sm:12,xs:12},s.a.createElement(P.a,{theme:Object(C.a)()},s.a.createElement(b.a,null,s.a.createElement(k.a,{action:s.a.createElement(F.a,{"aria-label":"",onClick:v.AnnulerEnregistrement},"x"),title:"ajout"===f.pagestate.action?"Nouvel enregistrement":"Mise \xe0 jour",subheader:""}),s.a.createElement(q.a,{className:" px-6 pt-6 pb-6"}," ",s.a.createElement("form",{onSubmit:E.handleSubmit(j)},s.a.createElement(g.a,{container:!0,spacing:4,direction:"column"},s.a.createElement(g.a,{item:!0},s.a.createElement(M.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=f.animateuremission)||void 0===a?void 0:a.description,control:E.control,error:E.errors.description})),s.a.createElement(g.a,{item:!0},h.queryAnimateurs.isLoading?s.a.createElement(A.a,{message:"chargement des Animateurs"}):s.a.createElement(N.a,{id:"animateur",name:"animateur",label:"animateur",table:"animateur",control:E.control,options:h.queryAnimateurs.data.rows,error:E.errors.animateur,defaultValue:null!==(t=null===(n=f.animateuremission)||void 0===n||null===(r=n.Animateur)||void 0===r?void 0:r.id)&&void 0!==t?t:"1",valeur:null!==(i=null===(o=f.animateuremission)||void 0===o?void 0:o.animateur)&&void 0!==i?i:""})),s.a.createElement(g.a,{item:!0},h.queryEmissions.isLoading?s.a.createElement(A.a,{message:"chargement des Emissions"}):s.a.createElement(N.a,{id:"emission",readOnly:!0,name:"emission",label:"emission",table:"emission",control:E.control,options:h.queryEmissions.data.rows,error:E.errors.emission,defaultValue:null!==(c=null===(l=f.animateuremission)||void 0===l||null===(u=l.Emission)||void 0===u?void 0:u.id)&&void 0!==c?c:"1",valeur:null!==(m=null===(p=f.animateuremission)||void 0===p?void 0:p.emission)&&void 0!==m?m:""}))))),s.a.createElement(T.a,null,s.a.createElement(g.a,{container:!0,alignItems:"center",justify:"space-between"},s.a.createElement(g.a,{item:!0},s.a.createElement(R.a,{color:"primary",variant:"contained",type:"submit",onClick:E.handleSubmit(j)},h.mutationMiseajour.isLoading||h.mutationAjout.isLoading?s.a.createElement(D.a,{color:"inherit"}):s.a.createElement(L.a,null),s.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===f.pagestate.action?s.a.createElement(d.a,null,"Enregistrer"):s.a.createElement(d.a,null,"Mettre \xe0 jour")))),s.a.createElement(g.a,{item:!0},s.a.createElement(R.a,{variant:"outlined",color:"secondary",onClick:v.AnnulerEnregistrement},"Annuler")))))))))}var Q=e=>{var a,t;const r=e.state,i=e.fonctions,o=e.collonnes,c=e.queries,l=e.useform,S=e.onSubmit;return s.a.createElement("div",{className:"m-sm-30"},s.a.createElement(O.a,{message:r.alert.message,severity:r.alert.severity,open:r.alert.open,handleAlertClose:!0===r.alert.automaticClose?()=>i.handleFermetureAlerte():()=>i.fermerAlerte()}),s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(w.a,{routeSegments:[{name:r.titre}]})),s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(d.a,{variant:"h4"},r.titre)),"affichage"===r.pagestate.mode?s.a.createElement(p.a,{in:r.pagestate.affichageTable,direction:"right",unmountOnExit:!0},s.a.createElement("div",null,s.a.createElement("div",{className:"mb-sm-30"},s.a.createElement(b.a,{className:"mb-sm-30"},s.a.createElement("form",null,s.a.createElement(g.a,{container:!0,spacing:2,direction:"column"},s.a.createElement(g.a,{item:!0},s.a.createElement(g.a,{container:!0,spacing:10,direction:"row"})),s.a.createElement(g.a,{item:!0},s.a.createElement(g.a,{container:!0,spacing:5,direction:"row"},s.a.createElement(g.a,{item:!0,sm:1}),s.a.createElement(g.a,{item:!0,sm:3,p:5},c.queryAnimateurs.isLoading?s.a.createElement(A.a,{message:"chargement des Animateurs"}):s.a.createElement(f.a,{fullWidth:!0},s.a.createElement(v.a,{htmlFor:"Animateur"},"Choisir un Animateur"),s.a.createElement(h.a,{id:"Animateur",variant:"outlined",onChange:i.handleChangeAnimateur},s.a.createElement(E.a,{key:"0",value:null},"Tous les animateurs"),c.queryAnimateurs.data.rows.map(e=>s.a.createElement(E.a,{key:e.id,value:e.id},e.nom))),s.a.createElement(j.a,null))),s.a.createElement(g.a,{item:!0,sm:3},c.queryEmissions.isLoading?s.a.createElement(A.a,{message:"chargement des Emissionx"}):s.a.createElement(f.a,{fullWidth:!0},s.a.createElement(v.a,{htmlFor:"Emission"},"Choisir une emission"),s.a.createElement(h.a,{id:"emission",variant:"outlined",onChange:i.handleChangeEmission},s.a.createElement(E.a,{key:"0",value:null},"Toutes les \xe9missions"),c.queryEmissions.data.rows.map(e=>s.a.createElement(E.a,{key:e.id,value:e.id},e.nom))),s.a.createElement(j.a,null))),s.a.createElement(g.a,{item:!0,sm:3}))))))),c.queryAnimateuremissions.isLoading?s.a.createElement(A.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryAnimateuremissions.isError?s.a.createElement(A.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryAnimateuremissions.error,type:"error"}):s.a.createElement(x.a,{tag:"div",blocking:!1},s.a.createElement(P.a,{theme:Object(C.a)()},s.a.createElement(u.a,{title:r.titre,data:c.queryAnimateuremissions.data.rows.map(e=>({animateuremission:e})),columns:o,options:Object(n.a)(Object(n.a)({},m.a),{},{serverSide:!0,count:c.queryAnimateuremissions.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:r.tableconfig.rowsPerPage,textLabels:Object(n.a)(Object(n.a)({},m.a.textLabels),{},{toolbar:Object(n.a)(Object(n.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>i.handleChangePage(e),onChangeRowsPerPage:e=>i.handleChangeRowPerPage(e),onSearchChange:e=>i.handleSearchChange(e),onFilterChange:()=>i.handleFilterChange()})}))),s.a.createElement(b.a,{className:"w-full overflow-auto",elevation:8},s.a.createElement(y.a,{open:r.dialogueSuppressionOuvert,onConfirmDialogClose:i.fermerDialogueSuppression,onYesClick:i.confirmerSuppression,text:null!==(a="Confirmez la suppression de "+(null===(t=r.animateuremission)||void 0===t?void 0:t.nom))&&void 0!==a?a:""})))):s.a.createElement(I,{state:r,fonctions:i,queries:c,useform:l,onSubmit:S}))},W=t(13),z=t(88),B=t(2135),V=t(2136),J=t(2137),U=t(2138),G=t(344),H=t(1672),Y=t(1382),K=t(1334),X=t(1378);Object(G.a)(e=>{e.palette,Object(W.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function Z(e){const a=Object(G.a)(e=>{e.palette,Object(W.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),t=(a,t)=>{e.handleClickSurAction(a,t)};return[{name:"animateuremission",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var n,r;return null!==(n=null===(r=e.id)||void 0===r?void 0:r.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"animateuremission",label:"Emission",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var n,r,i,o;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{whiteSpace:"nowrap"}},s.a.createElement("strong",null,null!==(n=null===e||void 0===e?void 0:e.Emission.nom)&&void 0!==n?n:"")),s.a.createElement("small",{style:{whiteSpace:"nowrap"}},null!==(r=null===e||void 0===e||null===(i=e.Emission)||void 0===i||null===(o=i.Chaine)||void 0===o?void 0:o.nom)&&void 0!==r?r:""))}}},{name:"animateuremission",label:"Animateur",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var n,r,i,o,c,l,u;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"flex items-center"},s.a.createElement(H.a,null,s.a.createElement(R.a,null,s.a.createElement(Y.a,{variant:"rounded",className:"w-48 h-48",src:"".concat(C.c).concat(null!==(n=null===(r=e.Animateur)||void 0===r||null===(i=r.Media[0])||void 0===i?void 0:i.fichier)&&void 0!==n?n:"")}))),s.a.createElement(H.a,null," ".concat(null!==(o=null===(c=e.Animateur)||void 0===c?void 0:c.nom)&&void 0!==o?o:""," ").concat(null!==(l=null===(u=e.Animateur)||void 0===u?void 0:u.prenom)&&void 0!==l?l:""))))}}},{name:"animateuremission",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var n;return null!==(n=e.description)&&void 0!==n?n:""}}},{name:"animateuremission",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,n,r)=>s.a.createElement("div",null,s.a.createElement(z.j,{menuButton:s.a.createElement("div",{className:a.userMenu},s.a.createElement(K.a,{xsDown:!0},s.a.createElement(R.a,{size:"small",variant:"outlined",color:"primary",endIcon:s.a.createElement(U.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:s.a.createElement(B.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:s.a.createElement(B.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:s.a.createElement(V.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>t(e,"Supprimer"),icon:s.a.createElement(J.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:s.a.createElement(V.a,{color:"primary"})}]}})(e).map(a=>s.a.createElement(s.a.Fragment,null,s.a.createElement(E.a,{onClick:()=>a.action(e),key:a.id,value:a.statut},a.icon,"   ",s.a.createElement("span",{className:"ml-5"},a.nom)),s.a.createElement(X.a,null)))))}}]}var $=t(1387),_=(t(1411),t(1399)),ee=t(1512),ae=t(1441);a.default=()=>{const e={animateuremission:{description:"",animateur:1,emission:1},animateuremission1:null,titre:"Animateurs d \xe9missions",tableconfig:{page:0,rowsPerPage:30,recherche:{emission:{id:""},animateur:{id:""}},filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1},a=Object(i.useState)(e),t=Object(r.a)(a,2),l=t[0],u=t[1];let m=new o.a,d=new ee.a,p=new ae.a;const b=Object(c.useQueryClient)(),g={handleFermetureAlerte:()=>{u(Object(n.a)(Object(n.a)({},l),{},{titre:"Animateurs d \xe9missions",alert:Object(n.a)(Object(n.a)({},l.alert),{},{open:!1}),pagestate:Object(n.a)(Object(n.a)({},l.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(n.a)(Object(n.a)({},l),{},{animateuremission:null,titre:"Nouvel enregistrement",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(n.a)(Object(n.a)({},l),{},{alert:Object(n.a)(Object(n.a)({},l.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(n.a)(Object(n.a)({},l),{},{titre:"Animateurs d \xe9missions",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(n.a)(Object(n.a)({},l),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{O.mutate(l.animateuremission)},handleCloseDialoguephoto:()=>{u(Object(n.a)(Object(n.a)({},l),{},{dialoguephoto:Object(n.a)(Object(n.a)({},l.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{page:e})}))},handleClickSurAction:(e,a)=>{switch(console.log(a),a){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(n.a)(Object(n.a)({},l),{},{titre:"Mise \xe0 jour ",animateuremission:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(n.a)(Object(n.a)({},l),{},{animateuremission:e,dialogueSuppressionOuvert:!0}))}},handleChangeAnimateur:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{recherche:Object(n.a)(Object(n.a)({},l.tableconfig.recherche),{},{animateur:{id:e.target.value}})})}))},handleChangeEmission:e=>{u(Object(n.a)(Object(n.a)({},l),{},{tableconfig:Object(n.a)(Object(n.a)({},l.tableconfig),{},{recherche:Object(n.a)(Object(n.a)({},l.tableconfig.recherche),{},{emission:{id:e.target.value}})})}))}},f=Object(c.useQuery)(["Animateuremissions",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>m.getTouslesAnimateuremissions(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),v=Object(c.useQuery)(["Animateurs",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>d.getTouslesAnimateurs(0,1e3,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),h=Object(c.useQuery)(["Emissions",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>p.getTouslesEmissions(0,1e3,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),E=Object(c.useMutation)(m.ajoutAnimateuremission,{onSuccess:()=>{b.invalidateQueries("Animateuremissions"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{b.invalidateQueries("Animateuremissions"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(c.useMutation)(m.miseajourAnimateuremission,{onSuccess:()=>{b.invalidateQueries("Animateuremissions"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{b.invalidateQueries("Animateuremissions"),u(Object(n.a)(Object(n.a)({},l),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),O=Object(c.useMutation)(m.suppressionAnimateuremission,{onSuccess:()=>{u(Object(n.a)(Object(n.a)({},l),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{b.invalidateQueries("Animateuremissions")}}),w={queryAnimateuremissions:f,mutationMiseajour:j,mutationAjout:E,mutationSuppression:O,queryAnimateurs:v,queryEmissions:h},y=Z(g),A=S.b().shape({}),x=Object($.c)({resolver:Object(_.yupResolver)(A),defaultValues:{animateuremission:l.animateuremission}});return s.a.createElement(Q,{state:l,fonctions:g,collonnes:y,queries:w,useform:x,onSubmit:e=>{var a;let t=Object(n.a)(Object(n.a)({},l.animateuremission),e);void 0!==(null===(a=l.animateuremission)||void 0===a?void 0:a.id)?w.mutationMiseajour.mutate(Object(n.a)({},t)):w.mutationAjout.mutate(Object(n.a)({},t))}})}}}]);