(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[14],{1382:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(3),n=a(0),i=a.n(n),o=a(353),s=a(1374);function l(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},i.a.createElement(o.a,{item:!0}),i.a.createElement(s.a,{color:"error"===n?"secondary":"primary"})," ",i.a.createElement("span",null,a,".")))}},1385:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),i=a(1414),o=a(343),s=a(1715),l=(a(60),a(356)),c=a(353);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(o.a)(e=>Object(s.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(c.a,{className:"mt-3"},n.a.createElement(l.a,{value:u}),u,"%"))}},1390:function(e,t,a){"use strict";a(0),a(1381),a(1663),a(624),a(627),a(625),a(1322)},1393:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1394:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(624),o=a(449),s=a(1381);t.a=e=>{const t=e.id,a=e.nom,r=e.label,l=e.valeur,c=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{fullWidth:!0},n.a.createElement(s.a,{name:a,as:n.a.createElement(o.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:c,defaultValue:l,rules:{required:"Required"}})))}},1395:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1381),o=a(1663),s=a(624),l=a(627),c=a(625),u=a(1322);const m=e=>{const t=e.label,a=e.nom,r=e.table,i=e.options,m=(e.valeur,e.error);return n.a.createElement(s.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(c.a,{htmlFor:a},t),n.a.createElement(l.a,Object.assign({id:a},e),i.map(e=>{var t,a;return n.a.createElement(o.a,{key:e.id,value:e.id},e.nom,"emission"===r&&" ["+(null!==(t=null===(a=e.Chaine)||void 0===a?void 0:a.nom)&&void 0!==t?t:"")+"]","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")")})),n.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,o=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:o,rules:{required:"Required"}},e)))}},1396:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(17),n=a(0),i=a.n(n),o=a(1381),s=a(1357),l=a(1356);function c(e){const t=e.nom,a=e.coche,c=e.control,u=e.changement,m=e.label,d=Object(n.useState)(a),p=Object(r.a)(d,2),b=p[0],f=p[1];return i.a.createElement(l.a,{control:i.a.createElement(o.a,{name:t,control:c,render:e=>i.a.createElement(s.a,Object.assign({},e,{checked:b,onChange:t=>{e.onChange(t.target.checked),f(!b),u(!b)}}))}),label:null==m?t:m})}},1397:function(e,t,a){"use strict";a(17),a(0),a(624),a(1435),a(2034),a(1386),a(1387),a(1381)},1398:function(e,t,a){"use strict";a(17),a(0),a(624),a(1435),a(2035),a(1386),a(1387),a(1381)},1399:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(20),n=a.n(r),i=a(39),o=a(75);function s(e){return l.apply(this,arguments)}function l(){return(l=Object(i.a)(n.a.mark((function e(t){var a,r,i,s,l,c,u,m,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.nom,i=t.modele,s=t.champ,l=t.objet,c=t.obj,u=t.handleprogress,(m=new FormData).append(c.cle,l.id),m.append("modele",i),m.append("champ",s),m.append("nom",r),m.append("cle",c.cle),m.append("valeur",c.valeur),m.append("file",a),e.next=11,o.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return d=e.sent,e.abrupt("return",d.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1436:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(3),n=a(20),i=a.n(n),o=a(39),s=a(75),l=a(2003);class c{getTouslesChaines(e,t,a,r){return Object(o.a)(i.a.mark((function r(){var n;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,s.b.get("/chaines?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return n=r.sent,r.abrupt("return",n.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutChaine(e){return Object(o.a)(i.a.mark((function t(){var a,n,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(l.a)(e.heuredebut,"HH:mm"),n=Object(l.a)(e.heurefin,"HH:mm"),t.next=4,s.b.post("/chaines",Object(r.a)(Object(r.a)({},e),{},{heuredebut:a,heurefin:n}));case 4:return o=t.sent,t.abrupt("return",o.data);case 6:case"end":return t.stop()}}),t)})))()}miseajourChaine(e){return Object(o.a)(i.a.mark((function t(){var a,n,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(l.a)(e.heuredebut,"HH:mm"),n=Object(l.a)(e.heurefin,"HH:mm"),t.next=4,s.b.put("/chaines/"+e.id,Object(r.a)(Object(r.a)({},e),{},{heuredebut:a,heurefin:n}));case 4:return o=t.sent,t.abrupt("return",o.data);case 6:case"end":return t.stop()}}),t)})))()}suppressionChaine(e){return Object(o.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.delete("/chaines/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}togleactifChaine(e){return Object(o.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.put("/chaines/"+e.id,{actif:!e.actif});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}toglefilmeeChaine(e){return Object(o.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.put("/chaines/"+e.id,{emissionfilmee:!e.emissionfilmee});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionImage(e){return Object(o.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.post("/medias/delete/".concat(e.id,"/chaine"),{});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1464:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(20),n=a.n(r),i=a(39),o=a(75);class s{getTouslesRoles(e,t,a,r){return Object(i.a)(n.a.mark((function r(){var i;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/roles?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return i=r.sent,r.abrupt("return",i.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutRole(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.post("/roles",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourRole(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.put("/roles/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionRole(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.delete("/roles/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2048:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),i=a(0),o=a.n(i),s=a(20),l=a.n(s),c=a(39),u=a(75);class m{getTouslesUtilisateurs(e,t,a,r){return Object(c.a)(l.a.mark((function r(){var n;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,u.b.get("/utilisateurs?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return n=r.sent,r.abrupt("return",n.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutUtilisateur(e){return Object(c.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.post("/utilisateurs",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourUtilisateur(e){return Object(c.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.put("/utilisateurs/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionUtilisateur(e){return Object(c.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.delete("/utilisateurs/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}togleactifUtilisateur(e){return Object(c.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.put("/utilisateurs/"+e.id,{actif:!e.actif});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}var d=a(133),p=a(1411),b=a.n(p),f=a(1393),h=a(447),g=a(2020),v=a(451),j=a(1377),O=a(357),E=a(354),y=a(355),w=a(1382),C=a(1412),x=(a(1413),a(1371)),k=a(1392),S=a(353),T=a(2016),R=a(623),D=a(2015),P=a(2014),N=a(1374),A=a(1394),U=a(1395),q=(a(1396),a(1385),a(1390),a(1397),a(1398),a(2036));function M(e){var t,a,r,n,i,s,l,c,m,d,p,b,f,g,O,E,y;const C=e.state,k=e.fonctions,M=e.queries,F=e.useform,L=e.onSubmit;return o.a.createElement("div",null,o.a.createElement(S.a,{container:!0,spacing:1,justify:"center"},o.a.createElement(S.a,{item:!0,lg:6,md:6,sm:12,xs:12},o.a.createElement(x.a,{theme:Object(u.a)()},o.a.createElement(j.a,null,o.a.createElement(T.a,{action:o.a.createElement(R.a,{"aria-label":"",onClick:k.AnnulerEnregistrement},"x"),title:"ajout"===C.pagestate.action?"Nouvel utilisateur":"Mise \xe0 jour",subheader:""}),o.a.createElement(D.a,{className:" px-6 pt-6 pb-6"}," ",o.a.createElement("form",{onSubmit:F.handleSubmit(L)},o.a.createElement(S.a,{container:!0,spacing:4,direction:"column"},o.a.createElement(S.a,{item:!0},o.a.createElement(A.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=C.utilisateur)||void 0===t?void 0:t.nom,control:F.control,error:F.errors.nom})),o.a.createElement(S.a,{item:!0},o.a.createElement(A.a,{id:"prenom",nom:"prenom",label:"prenom",valeur:null===(a=C.utilisateur)||void 0===a?void 0:a.prenom,control:F.control,error:F.errors.prenom})),o.a.createElement(S.a,{item:!0},o.a.createElement(A.a,{id:"telephone",nom:"telephone",label:"T\xe9l\xe9phone",valeur:null===(r=C.utilisateur)||void 0===r?void 0:r.telephone,control:F.control,error:F.errors.telephone})),o.a.createElement(S.a,{item:!0},o.a.createElement(A.a,{id:"email",nom:"email",label:"email",valeur:null===(n=C.utilisateur)||void 0===n?void 0:n.email,control:F.control,error:F.errors.email})),o.a.createElement(S.a,{item:!0},o.a.createElement(A.a,{id:"motdepasse",nom:"motdepasse",label:"motdepasse",valeur:null===(i=C.utilisateur)||void 0===i?void 0:i.motdepasse,control:F.control,error:F.errors.motdepasse})),o.a.createElement(S.a,{item:!0},o.a.createElement(A.a,{id:"photo",nom:"photo",label:"photo",valeur:null===(s=C.utilisateur)||void 0===s?void 0:s.photo,control:F.control,error:F.errors.photo})),o.a.createElement(S.a,{item:!0},o.a.createElement(A.a,{id:"token",nom:"token",label:"token",valeur:null===(l=C.utilisateur)||void 0===l?void 0:l.token,control:F.control,error:F.errors.token})),o.a.createElement(S.a,{item:!0},M.queryRoles.isLoading?o.a.createElement(w.a,{message:"chargement des Roles"}):o.a.createElement(U.a,{id:"role",name:"role",label:"role",table:"role",control:F.control,options:M.queryRoles.data.rows,error:F.errors.role,defaultValue:null!==(c=null===(m=C.utilisateur)||void 0===m||null===(d=m.Role)||void 0===d?void 0:d.id)&&void 0!==c?c:"1",valeur:null!==(p=null===(b=C.utilisateur)||void 0===b?void 0:b.role)&&void 0!==p?p:""})),o.a.createElement(S.a,{item:!0},M.queryChaines.isLoading?o.a.createElement(w.a,{message:"chargement des Chaines"}):o.a.createElement(U.a,{id:"chaine",name:"chaine",label:"chaine",table:"chaine",control:F.control,options:M.queryChaines.data.rows,error:F.errors.chaine,defaultValue:null!==(f=null===(g=C.utilisateur)||void 0===g||null===(O=g.Chaine)||void 0===O?void 0:O.id)&&void 0!==f?f:"1",valeur:null!==(E=null===(y=C.utilisateur)||void 0===y?void 0:y.chaine)&&void 0!==E?E:""}))))),o.a.createElement(P.a,null,o.a.createElement(S.a,{container:!0,alignItems:"center",justify:"space-between"},o.a.createElement(S.a,{item:!0},o.a.createElement(v.a,{color:"primary",variant:"contained",type:"submit",onClick:F.handleSubmit(L)},M.mutationMiseajour.isLoading||M.mutationAjout.isLoading?o.a.createElement(N.a,{color:"inherit"}):o.a.createElement(q.a,null),o.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===C.pagestate.action?o.a.createElement(h.a,null,"Enregistrer"):o.a.createElement(h.a,null,"Mettre \xe0 jour")))),o.a.createElement(S.a,{item:!0},o.a.createElement(v.a,{variant:"outlined",color:"secondary",onClick:k.AnnulerEnregistrement},"Annuler")))))))))}var F=e=>{var t,a;const n=e.state,i=e.fonctions,s=e.collonnes,l=e.queries,c=e.useform,m=e.onSubmit;return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement(O.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>i.handleFermetureAlerte():()=>i.fermerAlerte()}),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(E.a,{routeSegments:[{name:n.titre}]})),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(h.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?o.a.createElement(g.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},o.a.createElement("div",null,o.a.createElement(v.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>i.handleClicksurNouveau()},"Nouvel utilisateur"),l.queryUtilisateurs.isLoading?o.a.createElement(w.a,{message:"Chargement des donn\xe9es...",type:"info"}):l.queryUtilisateurs.isError?o.a.createElement(w.a,{message:"Erreur lors du chargement des donn\xe9es::"+l.queryUtilisateurs.error,type:"error"}):o.a.createElement(C.a,{tag:"div",blocking:!1},o.a.createElement(x.a,{theme:Object(u.a)()},o.a.createElement(b.a,{title:n.titre,data:l.queryUtilisateurs.data.rows.map(e=>({utilisateur:e})),columns:s,options:Object(r.a)(Object(r.a)({},f.a),{},{serverSide:!0,count:l.queryUtilisateurs.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},f.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},f.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>i.handleChangePage(e),onChangeRowsPerPage:e=>i.handleChangeRowPerPage(e),onSearchChange:e=>i.handleSearchChange(e),onFilterChange:()=>i.handleFilterChange()})}))),o.a.createElement(j.a,{className:"w-full overflow-auto",elevation:8},o.a.createElement(y.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:i.fermerDialogueSuppression,onYesClick:i.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.utilisateur)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):o.a.createElement(M,{state:n,fonctions:i,queries:l,useform:c,onSubmit:m}))},L=a(13),I=a(87),B=a(2037),H=a(2038),z=a(2039),Q=a(2040),W=a(343),Y=a(1357),Z=a(1331),V=a(1663),$=a(1375),G=a(2003),J=a(1401),K=a(132),X={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},_=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,ee=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,te=/^([+-])(\d{2})(?::?(\d{2}))?$/;function ae(e,t){Object(K.a)(1,arguments);var a=t||{},r=null==a.additionalDigits?2:Object(J.a)(a.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var n,i=re(e);if(i.date){var o=ne(i.date,r);n=ie(o.restDateString,o.year)}if(isNaN(n)||!n)return new Date(NaN);var s,l=n.getTime(),c=0;if(i.time&&(c=se(i.time),isNaN(c)||null===c))return new Date(NaN);if(!i.timezone){var u=new Date(l+c),m=new Date(u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate(),u.getUTCHours(),u.getUTCMinutes(),u.getUTCSeconds(),u.getUTCMilliseconds());return m.setFullYear(u.getUTCFullYear()),m}return s=ce(i.timezone),isNaN(s)?new Date(NaN):new Date(l+c+s)}function re(e){var t,a={},r=e.split(X.dateTimeDelimiter);if(r.length>2)return a;if(/:/.test(r[0])?(a.date=null,t=r[0]):(a.date=r[0],t=r[1],X.timeZoneDelimiter.test(a.date)&&(a.date=e.split(X.timeZoneDelimiter)[0],t=e.substr(a.date.length,e.length))),t){var n=X.timezone.exec(t);n?(a.time=t.replace(n[1],""),a.timezone=n[1]):a.time=t}return a}function ne(e,t){var a=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(a);if(!r)return{year:null};var n=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?n:100*i,restDateString:e.slice((r[1]||r[2]).length)}}function ie(e,t){if(null===t)return null;var a=e.match(_);if(!a)return null;var r=!!a[4],n=oe(a[1]),i=oe(a[2])-1,o=oe(a[3]),s=oe(a[4]),l=oe(a[5])-1;if(r)return function(e,t,a){return t>=1&&t<=53&&a>=0&&a<=6}(0,s,l)?function(e,t,a){var r=new Date(0);r.setUTCFullYear(e,0,4);var n=r.getUTCDay()||7,i=7*(t-1)+a+1-n;return r.setUTCDate(r.getUTCDate()+i),r}(t,s,l):new Date(NaN);var c=new Date(0);return function(e,t,a){return t>=0&&t<=11&&a>=1&&a<=(ue[t]||(me(e)?29:28))}(t,i,o)&&function(e,t){return t>=1&&t<=(me(e)?366:365)}(t,n)?(c.setUTCFullYear(t,i,Math.max(n,o)),c):new Date(NaN)}function oe(e){return e?parseInt(e):1}function se(e){var t=e.match(ee);if(!t)return null;var a=le(t[1]),r=le(t[2]),n=le(t[3]);return function(e,t,a){if(24===e)return 0===t&&0===a;return a>=0&&a<60&&t>=0&&t<60&&e>=0&&e<25}(a,r,n)?36e5*a+6e4*r+1e3*n:NaN}function le(e){return e&&parseFloat(e.replace(",","."))||0}function ce(e){if("Z"===e)return 0;var t=e.match(te);if(!t)return 0;var a="+"===t[1]?-1:1,r=parseInt(t[2]),n=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,n)?a*(36e5*r+6e4*n):NaN}var ue=[31,null,31,30,31,30,31,31,30,31,30,31];function me(e){return e%400===0||e%4===0&&e%100}Object(W.a)(e=>{e.palette,Object(L.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function de(e){const t=Object(W.a)(e=>{e.palette,Object(L.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"utilisateur",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"utilisateur",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.nom)&&void 0!==r?r:""}}},{name:"utilisateur",label:"prenom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.prenom)&&void 0!==r?r:""}}},{name:"utilisateur",label:"T\xe9l\xe9phone",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.telephone)&&void 0!==r?r:""}}},{name:"utilisateur",label:"email",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.email)&&void 0!==r?r:""}}},{name:"utilisateur",label:"motdepasse",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.motdepasse)&&void 0!==r?r:""}}},{name:"utilisateur",label:"actif",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,r)=>o.a.createElement(Y.a,{checked:t.actif,onChange:()=>e.handleTogleactif(t)})}},{name:"utilisateur",label:"photo",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.photo)&&void 0!==r?r:""}}},{name:"utilisateur",label:"token",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.token)&&void 0!==r?r:""}}},{name:"utilisateur",label:"createdAt",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>null==e.createdAt?" ":Object(G.a)(ae(e.createdAt),"dd/MM/yyyy HH:mm")}},{name:"utilisateur",label:"updatedAt",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>null==e.updatedAt?" ":Object(G.a)(ae(e.updatedAt),"dd/MM/yyyy HH:mm")}},{name:"utilisateur",label:"role",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.Role)||void 0===n?void 0:n.nom)&&void 0!==r?r:""}}},{name:"utilisateur",label:"chaine",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.Chaine)||void 0===n?void 0:n.nom)&&void 0!==r?r:""}}},{name:"utilisateur",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>o.a.createElement("div",null,o.a.createElement(I.j,{menuButton:o.a.createElement("div",{className:t.userMenu},o.a.createElement(Z.a,{xsDown:!0},o.a.createElement(v.a,{size:"small",variant:"outlined",color:"primary",endIcon:o.a.createElement(Q.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(B.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(B.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(H.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:o.a.createElement(z.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(H.a,{color:"primary"})}]}})(e).map(t=>o.a.createElement(o.a.Fragment,null,o.a.createElement(V.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",o.a.createElement("span",{className:"ml-5"},t.nom)),o.a.createElement($.a,null)))))}}]}var pe=a(1381),be=(a(1399),a(1391)),fe=a(1464),he=a(1436);t.default=()=>{const e={utilisateur:{nom:"",prenom:"",telephone:"",email:"",motdepasse:"",actif:"",photo:"",token:"",createdAt:"",updatedAt:"",role:1,chaine:1},utilisateur1:null,titre:"Gestion des utilisateurs",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1},t=Object(i.useState)(e),a=Object(n.a)(t,2),s=a[0],l=a[1];let c=new m,u=new fe.a,p=new he.a;const b=Object(d.useQueryClient)(),f={handleFermetureAlerte:()=>{l(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des utilisateurs",alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},s.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{l(Object(r.a)(Object(r.a)({},s),{},{utilisateur:null,titre:"Nouvel utilisateur",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{l(Object(r.a)(Object(r.a)({},s),{},{alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),l(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des utilisateurs",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{l(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{y.mutate(s.utilisateur)},handleCloseDialoguephoto:()=>{l(Object(r.a)(Object(r.a)({},s),{},{dialoguephoto:Object(r.a)(Object(r.a)({},s.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{l(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{l(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{l(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":l(Object(r.a)(Object(r.a)({},s),{},{titre:"Mise \xe0 jour ",utilisateur:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":l(Object(r.a)(Object(r.a)({},s),{},{utilisateur:e,dialogueSuppressionOuvert:!0}))}},handleTogleactif:e=>{E.mutate(e)},handledatecreatedAtchange:e=>{l(Object(r.a)(Object(r.a)({},s),{},{utilisateur:Object(r.a)(Object(r.a)({},s.utilisateur),{},{createdAt:e})}))},handledateupdatedAtchange:e=>{l(Object(r.a)(Object(r.a)({},s),{},{utilisateur:Object(r.a)(Object(r.a)({},s.utilisateur),{},{updatedAt:e})}))}},h=Object(d.useQuery)(["Utilisateurs",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>c.getTouslesUtilisateurs(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),g=Object(d.useQuery)(["Roles",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>u.getTouslesRoles(0,1e3,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),v=Object(d.useQuery)(["Chaines",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>p.getTouslesChaines(0,1e3,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),j=Object(d.useMutation)(c.ajoutUtilisateur,{onSuccess:()=>{b.invalidateQueries("Utilisateurs"),l(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{b.invalidateQueries("Utilisateurs"),l(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),O=Object(d.useMutation)(c.miseajourUtilisateur,{onSuccess:()=>{b.invalidateQueries("Utilisateurs"),l(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{b.invalidateQueries("Utilisateurs"),l(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),E=Object(d.useMutation)(c.togleactifUtilisateur,{onSuccess:()=>{l(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}}))},onSettled:()=>{b.invalidateQueries("Utilisateurs")}}),y=Object(d.useMutation)(c.suppressionUtilisateur,{onSuccess:()=>{l(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{b.invalidateQueries("Utilisateurs")}}),w={queryUtilisateurs:h,mutationMiseajour:O,mutationAjout:j,mutationSuppression:y,queryRoles:g,queryChaines:v},C=de(f),x=k.b().shape({nom:k.c().required("Le champs Nom est requis"),prenom:k.c().required("Le champs prenom est requis"),telephone:k.c().required("Le champs T\xe9l\xe9phone est requis"),email:k.c().required("Le champs email est requis"),motdepasse:k.c().required("Le champs motdepasse est requis"),photo:k.c().required("Le champs photo est requis"),token:k.c().required("Le champs token est requis")}),S=Object(pe.c)({resolver:Object(be.yupResolver)(x),defaultValues:{utilisateur:s.utilisateur}});return o.a.createElement(F,{state:s,fonctions:f,collonnes:C,queries:w,useform:S,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},s.utilisateur),e);void 0!==(null===(t=s.utilisateur)||void 0===t?void 0:t.id)?w.mutationMiseajour.mutate(Object(r.a)({},a)):w.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);