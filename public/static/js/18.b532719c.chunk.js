(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[18],{1391:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(3),n=a(0),i=a.n(n),o=a(354),l=a(1377);function s(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},i.a.createElement(o.a,{item:!0}),i.a.createElement(l.a,{color:"error"===n?"secondary":"primary"})," ",i.a.createElement("span",null,a,".")))}},1397:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(0),n=a.n(r),i=a(1427),o=a(344),l=a(1815),s=(a(60),a(358)),u=a(354);function c(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,c=e.progress,m=Object(o.a)(e=>Object(l.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(u.a,{className:"mt-3"},n.a.createElement(s.a,{value:c}),c,"%"))}},1398:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1388),o=a(1770),l=a(626),s=a(629),u=a(627),c=a(1325);const m=e=>{const t=e.label,a=e.nom,r=e.liste,i=(e.valeur,e.error);return n.a.createElement(l.a,{fullWidth:!0,error:i?"error":""},n.a.createElement(u.a,{htmlFor:a},t),n.a.createElement(s.a,Object.assign({id:a},e),r.map(e=>n.a.createElement(o.a,{key:e.id,value:e.value},e.label))),n.a.createElement(c.a,null,i?i.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,o=(e.liste,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:o,defaultValue:o,rules:{required:"Required"}},e)))}},1403:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1404:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(626),o=a(452),l=a(1388);t.a=e=>{const t=e.id,a=e.nom,r=e.label,s=e.valeur,u=e.control,c=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{fullWidth:!0},n.a.createElement(l.a,{name:a,as:n.a.createElement(o.a,Object.assign({},e,{id:t,type:"text",helperText:c?c.message:null,label:r,error:!!c})),control:u,defaultValue:s,rules:{required:"Required"}})))}},1405:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1388),o=a(1770),l=a(626),s=a(629),u=a(627),c=a(1325);const m=e=>{const t=e.label,a=e.nom,r=e.table,i=e.options,m=(e.valeur,e.error);return n.a.createElement(l.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(u.a,{htmlFor:a},t),n.a.createElement(s.a,Object.assign({id:a},e),i.map(e=>{var t,a;return n.a.createElement(o.a,{key:e.id,value:e.id},e.nom,"emission"===r&&" ["+(null!==(t=null===(a=e.Chaine)||void 0===a?void 0:a.nom)&&void 0!==t?t:"")+"]","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")")})),n.a.createElement(c.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,o=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:o,rules:{required:"Required"}},e)))}},1406:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(17),n=a(0),i=a.n(n),o=a(1388),l=a(1360),s=a(1359);function u(e){const t=e.nom,a=e.coche,u=e.control,c=e.changement,m=e.label,d=Object(n.useState)(a),p=Object(r.a)(d,2),b=p[0],f=p[1];return i.a.createElement(s.a,{control:i.a.createElement(o.a,{name:t,control:u,render:e=>i.a.createElement(l.a,Object.assign({},e,{checked:b,onChange:t=>{e.onChange(t.target.checked),f(!b),c(!b)}}))}),label:null==m?t:m})}},1407:function(e,t,a){"use strict";a(17),a(0),a(626),a(1495),a(2176),a(1401),a(1402),a(1388)},1408:function(e,t,a){"use strict";a(17),a(0),a(626),a(1495),a(2132),a(1401),a(1402),a(1388)},1412:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(20),n=a.n(r),i=a(39),o=a(76);function l(e){return s.apply(this,arguments)}function s(){return(s=Object(i.a)(n.a.mark((function e(t){var a,r,i,l,s,u,c,m,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.nom,i=t.modele,l=t.champ,s=t.objet,u=t.obj,c=t.handleprogress,(m=new FormData).append(u.cle,s.id),m.append("modele",i),m.append("champ",l),m.append("nom",r),m.append("cle",u.cle),m.append("valeur",u.valeur),m.append("file",a),e.next=11,o.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:c});case 11:return d=e.sent,e.abrupt("return",d.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1432:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(3),n=a(20),i=a.n(n),o=a(39),l=a(76);class s{getTouslesChaines(e,t,a,r){return Object(o.a)(i.a.mark((function r(){var n,o;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,l.b.get("/chaines?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(null!==(n=a.chaine)&&void 0!==n?n:""," "));case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutChaine(e){return Object(o.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.post("/chaines",Object(r.a)(Object(r.a)({},e),{},{heuredebut:e.heuredebut,heurefin:e.heurefin}));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourChaine(e){return Object(o.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("debut: ".concat(e.heuredebut)),console.log("fin: ".concat(e.heurefin)),t.next=4,l.b.put("/chaines/"+e.id,Object(r.a)(Object(r.a)({},e),{},{heuredebut:e.heuredebut,heurefin:e.heurefin}));case 4:return a=t.sent,t.abrupt("return",a.data);case 6:case"end":return t.stop()}}),t)})))()}suppressionChaine(e){return Object(o.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.delete("/chaines/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}togleactifChaine(e){return Object(o.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.put("/chaines/"+e.id,{actif:!e.actif});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}toglelienyoutubeChaine(e){return Object(o.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.put("/chaines/"+e.id,{lienyoutube:!e.lienyoutube});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}toglefilmeeChaine(e){return Object(o.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.put("/chaines/"+e.id,{emissionfilmee:!e.emissionfilmee});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionImage(e){return Object(o.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.post("/medias/delete/".concat(e.id,"/chaine"),{});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1516:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(20),n=a.n(r),i=a(39),o=a(76);class l{getTouslesRoles(e,t,a,r){return Object(i.a)(n.a.mark((function r(){var i;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/roles?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return i=r.sent,r.abrupt("return",i.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutRole(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.post("/roles",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourRole(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.put("/roles/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionRole(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.delete("/roles/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2150:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),i=a(0),o=a.n(i),l=a(20),s=a.n(l),u=a(39),c=a(76);class m{getTouslesUtilisateurs(e,t,a,r){return Object(u.a)(s.a.mark((function r(){var n;return s.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,c.b.get("/utilisateurs?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return n=r.sent,r.abrupt("return",n.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutUtilisateur(e){return Object(u.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.post("/utilisateurs",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourUtilisateur(e){return Object(u.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.put("/utilisateurs/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionUtilisateur(e){return Object(u.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.delete("/utilisateurs/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}togleactifUtilisateur(e){return Object(u.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.put("/utilisateurs/"+e.id,{actif:!e.actif});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}var d=a(133),p=a(1418),b=a.n(p),f=a(1403),g=a(449),h=a(2118),v=a(454),j=a(1380),O=a(357),E=a(355),y=a(356),w=a(1391),C=a(1420),x=(a(1421),a(1374)),S=a(1400),R=a(354),T=a(2114),k=a(625),D=a(2113),P=a(2112),N=a(1377),A=a(1404),U=a(1405),F=(a(1406),a(1397),a(1398),a(1407),a(1408),a(2133));function q(e){var t,a,r,n,i,l,s,u,m,d,p,b,f,h,O;const E=e.state,y=e.fonctions,C=e.queries,S=e.useform,q=e.onSubmit;return o.a.createElement("div",null,o.a.createElement(R.a,{container:!0,spacing:1,justify:"center"},o.a.createElement(R.a,{item:!0,lg:6,md:6,sm:12,xs:12},o.a.createElement(x.a,{theme:Object(c.a)()},o.a.createElement(j.a,null,o.a.createElement(T.a,{action:o.a.createElement(k.a,{"aria-label":"",onClick:y.AnnulerEnregistrement},"x"),title:"ajout"===E.pagestate.action?"Nouvel utilisateur":"Mise \xe0 jour",subheader:""}),o.a.createElement(D.a,{className:" px-6 pt-6 pb-6"}," ",o.a.createElement("form",{onSubmit:S.handleSubmit(q)},o.a.createElement(R.a,{container:!0,spacing:4,direction:"column"},o.a.createElement(R.a,{item:!0},o.a.createElement(A.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=E.utilisateur)||void 0===t?void 0:t.nom,control:S.control,error:S.errors.nom})),o.a.createElement(R.a,{item:!0},o.a.createElement(A.a,{id:"prenom",nom:"prenom",label:"prenom",valeur:null===(a=E.utilisateur)||void 0===a?void 0:a.prenom,control:S.control,error:S.errors.prenom})),o.a.createElement(R.a,{item:!0},o.a.createElement(A.a,{id:"telephone",nom:"telephone",label:"T\xe9l\xe9phone",valeur:null===(r=E.utilisateur)||void 0===r?void 0:r.telephone,control:S.control,error:S.errors.telephone})),o.a.createElement(R.a,{item:!0},o.a.createElement(A.a,{id:"email",nom:"email",label:"email",valeur:null===(n=E.utilisateur)||void 0===n?void 0:n.email,control:S.control,error:S.errors.email})),o.a.createElement(R.a,{item:!0},o.a.createElement(A.a,{id:"motdepasse",nom:"motdepasse",label:"motdepasse",valeur:null===(i=E.utilisateur)||void 0===i?void 0:i.motdepasse,control:S.control,error:S.errors.motdepasse})),o.a.createElement(R.a,{item:!0},C.queryRoles.isLoading?o.a.createElement(w.a,{message:"chargement des Roles"}):o.a.createElement(U.a,{id:"role",name:"role",label:"role",table:"role",control:S.control,options:C.queryRoles.data.rows,error:S.errors.role,defaultValue:null!==(l=null===(s=E.utilisateur)||void 0===s||null===(u=s.Role)||void 0===u?void 0:u.id)&&void 0!==l?l:"1",valeur:null!==(m=null===(d=E.utilisateur)||void 0===d?void 0:d.role)&&void 0!==m?m:""})),o.a.createElement(R.a,{item:!0},C.queryChaines.isLoading?o.a.createElement(w.a,{message:"chargement des Chaines"}):o.a.createElement(U.a,{id:"chaine",name:"chaine",label:"chaine",table:"chaine",control:S.control,options:C.queryChaines.data.rows,error:S.errors.chaine,defaultValue:null!==(p=null===(b=E.utilisateur)||void 0===b||null===(f=b.Chaine)||void 0===f?void 0:f.id)&&void 0!==p?p:"1",valeur:null!==(h=null===(O=E.utilisateur)||void 0===O?void 0:O.chaine)&&void 0!==h?h:""}))))),o.a.createElement(P.a,null,o.a.createElement(R.a,{container:!0,alignItems:"center",justify:"space-between"},o.a.createElement(R.a,{item:!0},o.a.createElement(v.a,{color:"primary",variant:"contained",type:"submit",onClick:S.handleSubmit(q)},C.mutationMiseajour.isLoading||C.mutationAjout.isLoading?o.a.createElement(N.a,{color:"inherit"}):o.a.createElement(F.a,null),o.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===E.pagestate.action?o.a.createElement(g.a,null,"Enregistrer"):o.a.createElement(g.a,null,"Mettre \xe0 jour")))),o.a.createElement(R.a,{item:!0},o.a.createElement(v.a,{variant:"outlined",color:"secondary",onClick:y.AnnulerEnregistrement},"Annuler")))))))))}var M=e=>{var t,a;const n=e.state,i=e.fonctions,l=e.collonnes,s=e.queries,u=e.useform,m=e.onSubmit;return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement(O.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>i.handleFermetureAlerte():()=>i.fermerAlerte()}),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(E.a,{routeSegments:[{name:n.titre}]})),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(g.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?o.a.createElement(h.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},o.a.createElement("div",null,o.a.createElement(v.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>i.handleClicksurNouveau()},"Nouvel utilisateur"),s.queryUtilisateurs.isLoading?o.a.createElement(w.a,{message:"Chargement des donn\xe9es...",type:"info"}):s.queryUtilisateurs.isError?o.a.createElement(w.a,{message:"Erreur lors du chargement des donn\xe9es::"+s.queryUtilisateurs.error,type:"error"}):o.a.createElement(C.a,{tag:"div",blocking:!1},o.a.createElement(x.a,{theme:Object(c.a)()},o.a.createElement(b.a,{title:n.titre,data:s.queryUtilisateurs.data.rows.map(e=>({utilisateur:e})),columns:l,options:Object(r.a)(Object(r.a)({},f.a),{},{serverSide:!0,count:s.queryUtilisateurs.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},f.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},f.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>i.handleChangePage(e),onChangeRowsPerPage:e=>i.handleChangeRowPerPage(e),onSearchChange:e=>i.handleSearchChange(e),onFilterChange:()=>i.handleFilterChange()})}))),o.a.createElement(j.a,{className:"w-full overflow-auto",elevation:8},o.a.createElement(y.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:i.fermerDialogueSuppression,onYesClick:i.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.utilisateur)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):o.a.createElement(q,{state:n,fonctions:i,queries:s,useform:u,onSubmit:m}))},I=a(13),L=a(88),B=a(2134),z=a(2135),Q=a(2136),W=a(2137),H=a(344),V=a(1360),Y=a(1334),Z=a(1770),$=a(1378),G=a(2104),J=a(1417),K=a(132),X={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},_=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,ee=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,te=/^([+-])(\d{2})(?::?(\d{2}))?$/;function ae(e,t){Object(K.a)(1,arguments);var a=t||{},r=null==a.additionalDigits?2:Object(J.a)(a.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var n,i=re(e);if(i.date){var o=ne(i.date,r);n=ie(o.restDateString,o.year)}if(isNaN(n)||!n)return new Date(NaN);var l,s=n.getTime(),u=0;if(i.time&&(u=le(i.time),isNaN(u)||null===u))return new Date(NaN);if(!i.timezone){var c=new Date(s+u),m=new Date(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate(),c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds());return m.setFullYear(c.getUTCFullYear()),m}return l=ue(i.timezone),isNaN(l)?new Date(NaN):new Date(s+u+l)}function re(e){var t,a={},r=e.split(X.dateTimeDelimiter);if(r.length>2)return a;if(/:/.test(r[0])?(a.date=null,t=r[0]):(a.date=r[0],t=r[1],X.timeZoneDelimiter.test(a.date)&&(a.date=e.split(X.timeZoneDelimiter)[0],t=e.substr(a.date.length,e.length))),t){var n=X.timezone.exec(t);n?(a.time=t.replace(n[1],""),a.timezone=n[1]):a.time=t}return a}function ne(e,t){var a=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(a);if(!r)return{year:null};var n=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?n:100*i,restDateString:e.slice((r[1]||r[2]).length)}}function ie(e,t){if(null===t)return null;var a=e.match(_);if(!a)return null;var r=!!a[4],n=oe(a[1]),i=oe(a[2])-1,o=oe(a[3]),l=oe(a[4]),s=oe(a[5])-1;if(r)return function(e,t,a){return t>=1&&t<=53&&a>=0&&a<=6}(0,l,s)?function(e,t,a){var r=new Date(0);r.setUTCFullYear(e,0,4);var n=r.getUTCDay()||7,i=7*(t-1)+a+1-n;return r.setUTCDate(r.getUTCDate()+i),r}(t,l,s):new Date(NaN);var u=new Date(0);return function(e,t,a){return t>=0&&t<=11&&a>=1&&a<=(ce[t]||(me(e)?29:28))}(t,i,o)&&function(e,t){return t>=1&&t<=(me(e)?366:365)}(t,n)?(u.setUTCFullYear(t,i,Math.max(n,o)),u):new Date(NaN)}function oe(e){return e?parseInt(e):1}function le(e){var t=e.match(ee);if(!t)return null;var a=se(t[1]),r=se(t[2]),n=se(t[3]);return function(e,t,a){if(24===e)return 0===t&&0===a;return a>=0&&a<60&&t>=0&&t<60&&e>=0&&e<25}(a,r,n)?36e5*a+6e4*r+1e3*n:NaN}function se(e){return e&&parseFloat(e.replace(",","."))||0}function ue(e){if("Z"===e)return 0;var t=e.match(te);if(!t)return 0;var a="+"===t[1]?-1:1,r=parseInt(t[2]),n=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,n)?a*(36e5*r+6e4*n):NaN}var ce=[31,null,31,30,31,30,31,31,30,31,30,31];function me(e){return e%400===0||e%4===0&&e%100}Object(H.a)(e=>{e.palette,Object(I.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function de(e){const t=Object(H.a)(e=>{e.palette,Object(I.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"utilisateur",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"utilisateur",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.nom)&&void 0!==r?r:""}}},{name:"utilisateur",label:"prenom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.prenom)&&void 0!==r?r:""}}},{name:"utilisateur",label:"T\xe9l\xe9phone",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.telephone)&&void 0!==r?r:""}}},{name:"utilisateur",label:"email",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.email)&&void 0!==r?r:""}}},{name:"utilisateur",label:"motdepasse",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.motdepasse)&&void 0!==r?r:""}}},{name:"utilisateur",label:"actif",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,r)=>o.a.createElement(V.a,{checked:t.actif,onChange:()=>e.handleTogleactif(t)})}},{name:"utilisateur",label:"photo",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.photo)&&void 0!==r?r:""}}},{name:"utilisateur",label:"token",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.token)&&void 0!==r?r:""}}},{name:"utilisateur",label:"createdAt",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>null==e.createdAt?" ":Object(G.a)(ae(e.createdAt),"dd/MM/yyyy HH:mm")}},{name:"utilisateur",label:"updatedAt",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>null==e.updatedAt?" ":Object(G.a)(ae(e.updatedAt),"dd/MM/yyyy HH:mm")}},{name:"utilisateur",label:"role",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.Role)||void 0===n?void 0:n.nom)&&void 0!==r?r:""}}},{name:"utilisateur",label:"chaine",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.Chaine)||void 0===n?void 0:n.nom)&&void 0!==r?r:""}}},{name:"utilisateur",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>o.a.createElement("div",null,o.a.createElement(L.j,{menuButton:o.a.createElement("div",{className:t.userMenu},o.a.createElement(Y.a,{xsDown:!0},o.a.createElement(v.a,{size:"small",variant:"outlined",color:"primary",endIcon:o.a.createElement(W.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(B.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(B.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(z.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:o.a.createElement(Q.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(z.a,{color:"primary"})}]}})(e).map(t=>o.a.createElement(o.a.Fragment,null,o.a.createElement(Z.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",o.a.createElement("span",{className:"ml-5"},t.nom)),o.a.createElement($.a,null)))))}}]}var pe=a(1388),be=(a(1412),a(1399)),fe=a(1516),ge=a(1432);t.default=()=>{const e={utilisateur:{nom:"",prenom:"",telephone:"",email:"",motdepasse:"",actif:"",photo:"",token:"",createdAt:"",updatedAt:"",role:1,chaine:1},utilisateur1:null,titre:"Gestion des utilisateurs",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1},t=Object(i.useState)(e),a=Object(n.a)(t,2),l=a[0],s=a[1];let u=new m,c=new fe.a,p=new ge.a;const b=Object(d.useQueryClient)(),f={handleFermetureAlerte:()=>{s(Object(r.a)(Object(r.a)({},l),{},{titre:"Gestion des utilisateurs",alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},l.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{s(Object(r.a)(Object(r.a)({},l),{},{utilisateur:null,titre:"Nouvel utilisateur",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{s(Object(r.a)(Object(r.a)({},l),{},{alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),s(Object(r.a)(Object(r.a)({},l),{},{titre:"Gestion des utilisateurs",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{s(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{y.mutate(l.utilisateur)},handleCloseDialoguephoto:()=>{s(Object(r.a)(Object(r.a)({},l),{},{dialoguephoto:Object(r.a)(Object(r.a)({},l.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{s(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{s(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{s(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":s(Object(r.a)(Object(r.a)({},l),{},{titre:"Mise \xe0 jour ",utilisateur:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":s(Object(r.a)(Object(r.a)({},l),{},{utilisateur:e,dialogueSuppressionOuvert:!0}))}},handleTogleactif:e=>{E.mutate(e)},handledatecreatedAtchange:e=>{s(Object(r.a)(Object(r.a)({},l),{},{utilisateur:Object(r.a)(Object(r.a)({},l.utilisateur),{},{createdAt:e})}))},handledateupdatedAtchange:e=>{s(Object(r.a)(Object(r.a)({},l),{},{utilisateur:Object(r.a)(Object(r.a)({},l.utilisateur),{},{updatedAt:e})}))}},g=Object(d.useQuery)(["Utilisateurs",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>u.getTouslesUtilisateurs(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),h=Object(d.useQuery)(["Roles",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>c.getTouslesRoles(0,1e3,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),v=Object(d.useQuery)(["Chaines",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>p.getTouslesChaines(0,1e3,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),j=Object(d.useMutation)(u.ajoutUtilisateur,{onSuccess:()=>{b.invalidateQueries("Utilisateurs"),s(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{b.invalidateQueries("Utilisateurs"),s(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),O=Object(d.useMutation)(u.miseajourUtilisateur,{onSuccess:()=>{b.invalidateQueries("Utilisateurs"),s(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{b.invalidateQueries("Utilisateurs"),s(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),E=Object(d.useMutation)(u.togleactifUtilisateur,{onSuccess:()=>{s(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{s(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}}))},onSettled:()=>{b.invalidateQueries("Utilisateurs")}}),y=Object(d.useMutation)(u.suppressionUtilisateur,{onSuccess:()=>{s(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{s({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{b.invalidateQueries("Utilisateurs")}}),w={queryUtilisateurs:g,mutationMiseajour:O,mutationAjout:j,mutationSuppression:y,queryRoles:h,queryChaines:v},C=de(f),x=S.b().shape({nom:S.c().required("Le champs Nom est requis"),email:S.c().required("Le champs email est requis"),motdepasse:S.c().required("Le champs motdepasse est requis")}),R=Object(pe.c)({resolver:Object(be.yupResolver)(x),defaultValues:{utilisateur:l.utilisateur}});return o.a.createElement(M,{state:l,fonctions:f,collonnes:C,queries:w,useform:R,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},l.utilisateur),e);void 0!==(null===(t=l.utilisateur)||void 0===t?void 0:t.id)?w.mutationMiseajour.mutate(Object(r.a)({},a)):w.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);