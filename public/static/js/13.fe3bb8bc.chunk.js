(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[13],{1390:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(3),n=a(0),i=a.n(n),o=a(354),l=a(1377);function c(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},i.a.createElement(o.a,{item:!0}),i.a.createElement(l.a,{color:"error"===n?"secondary":"primary"})," ",i.a.createElement("span",null,a,".")))}},1394:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),i=a(1430),o=a(344),l=a(1761),c=(a(60),a(357)),s=a(354);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(o.a)(e=>Object(l.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(s.a,{className:"mt-3"},n.a.createElement(c.a,{value:u}),u,"%"))}},1396:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1387),o=a(1716),l=a(626),c=a(629),s=a(627),u=a(1325);const m=e=>{const t=e.label,a=e.nom,r=e.liste,i=(e.valeur,e.error);return n.a.createElement(l.a,{fullWidth:!0,error:i?"error":""},n.a.createElement(s.a,{htmlFor:a},t),n.a.createElement(c.a,Object.assign({id:a},e),r.map(e=>n.a.createElement(o.a,{key:e.id,value:e.value},e.label))),n.a.createElement(u.a,null,i?i.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,o=(e.liste,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:o,defaultValue:o,rules:{required:"Required"}},e)))}},1402:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1403:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(626),o=a(452),l=a(1387);t.a=e=>{const t=e.id,a=e.nom,r=e.label,c=e.valeur,s=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{fullWidth:!0},n.a.createElement(l.a,{name:a,as:n.a.createElement(o.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:s,defaultValue:c,rules:{required:"Required"}})))}},1404:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1387),o=a(1716),l=a(626),c=a(629),s=a(627),u=a(1325);const m=e=>{const t=e.label,a=e.nom,r=e.table,i=e.options,m=(e.valeur,e.error);return n.a.createElement(l.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(s.a,{htmlFor:a},t),n.a.createElement(c.a,Object.assign({id:a},e),i.map(e=>{var t,a;return n.a.createElement(o.a,{key:e.id,value:e.id},e.nom,"emission"===r&&" ["+(null!==(t=null===(a=e.Chaine)||void 0===a?void 0:a.nom)&&void 0!==t?t:"")+"]","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")")})),n.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,o=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:o,rules:{required:"Required"}},e)))}},1405:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(17),n=a(0),i=a.n(n),o=a(1387),l=a(1360),c=a(1359);function s(e){const t=e.nom,a=e.coche,s=e.control,u=e.changement,m=e.label,d=Object(n.useState)(a),p=Object(r.a)(d,2),g=p[0],v=p[1];return i.a.createElement(c.a,{control:i.a.createElement(o.a,{name:t,control:s,render:e=>i.a.createElement(l.a,Object.assign({},e,{checked:g,onChange:t=>{e.onChange(t.target.checked),v(!g),u(!g)}}))}),label:null==m?t:m})}},1406:function(e,t,a){"use strict";a(17),a(0),a(626),a(1459),a(2170),a(1399),a(1400),a(1387)},1407:function(e,t,a){"use strict";a(17),a(0),a(626),a(1459),a(2130),a(1399),a(1400),a(1387)},1409:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(20),n=a.n(r),i=a(39),o=a(76);function l(e){return c.apply(this,arguments)}function c(){return(c=Object(i.a)(n.a.mark((function e(t){var a,r,i,l,c,s,u,m,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.nom,i=t.modele,l=t.champ,c=t.objet,s=t.obj,u=t.handleprogress,(m=new FormData).append(s.cle,c.id),m.append("modele",i),m.append("champ",l),m.append("nom",r),m.append("cle",s.cle),m.append("valeur",s.valeur),m.append("file",a),e.next=11,o.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return d=e.sent,e.abrupt("return",d.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1485:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(20),n=a.n(r),i=a(39),o=a(76);class l{getTouslesRoles(e,t,a,r){return Object(i.a)(n.a.mark((function r(){var i;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/roles?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return i=r.sent,r.abrupt("return",i.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutRole(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.post("/roles",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourRole(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.put("/roles/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionRole(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.delete("/roles/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1608:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(20),n=a.n(r),i=a(39),o=a(76);class l{getTouslesActivites(e,t,a,r){return Object(i.a)(n.a.mark((function r(){var i;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/activites?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return i=r.sent,r.abrupt("return",i.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutActivite(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.post("/activites",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourActivite(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.put("/activites/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionActivite(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.delete("/activites/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2155:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),i=a(0),o=a.n(i),l=a(20),c=a.n(l),s=a(39),u=a(76);class m{getTouslesPrivileges(e,t,a,r){return Object(s.a)(c.a.mark((function n(){var i;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,u.b.get("/privileges?itemsPerPage="+t+"&page="+e+"&id="+a+"&role="+r.role.id+"&activite="+r.activite.id);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutPrivilege(e){return Object(s.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.post("/privileges",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourPrivilege(e){return Object(s.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.put("/privileges/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionPrivilege(e){return Object(s.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.delete("/privileges/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}togleactifPrivilege(e){return Object(s.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.put("/privileges/"+e.id,{actif:!e.actif});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}var d=a(133),p=a(1423),g=a.n(p),v=a(1402),b=a(1330),f=a(2115),h=a(2114),j=a(449),E=a(2116),O=a(1380),w=a(354),y=a(626),P=a(627),C=a(629),x=a(1716),A=a(1325),R=a(358),S=a(355),k=a(356),q=a(1390),D=a(1424),T=(a(1425),a(1398)),F=a(2112),M=a(625),L=a(2111),N=a(2110),I=a(454),Q=a(1377),W=a(1403),z=a(1404),B=a(1405),V=(a(1394),a(1396),a(1406),a(1407),a(1374)),G=a(2131);function J(e){var t,a,r,n,i,l,c,s,m,d,p,g,v;const b=e.state,f=e.fonctions,h=e.queries,E=e.useform,y=e.onSubmit;return o.a.createElement("div",null,o.a.createElement(w.a,{container:!0,spacing:1,justify:"center"},o.a.createElement(w.a,{item:!0,lg:6,md:6,sm:12,xs:12},o.a.createElement(V.a,{theme:Object(u.a)()},o.a.createElement(O.a,null,o.a.createElement(F.a,{action:o.a.createElement(M.a,{"aria-label":"",onClick:f.AnnulerEnregistrement},"x"),title:"ajout"===b.pagestate.action?"Nouveau privil\xe8ge":"Mise \xe0 jour ",subheader:""}),o.a.createElement(L.a,{className:" px-6 pt-6 pb-6"}," ",o.a.createElement("form",{onSubmit:E.handleSubmit(y)},o.a.createElement(w.a,{container:!0,spacing:4,direction:"column"},o.a.createElement(w.a,{item:!0},o.a.createElement(W.a,{id:"description",nom:"description",label:"Description",valeur:null===(t=b.privilege)||void 0===t?void 0:t.description,control:E.control,error:E.errors.description})),o.a.createElement(w.a,{item:!0},o.a.createElement(B.a,{id:"actif",nom:"actif",control:E.control,coche:Boolean(null!==(a=null===(r=b.privilege)||void 0===r?void 0:r.actif)&&void 0!==a?a:""),onChange:e=>f.handleChangementactif(e),changement:f.handleChangementactif})),o.a.createElement(w.a,{item:!0},h.queryActivites.isLoading?o.a.createElement(q.a,{message:"chargement des roles"}):o.a.createElement(z.a,{id:"activite",name:"activite",label:"Activit\xe9",table:"activite",control:E.control,options:h.queryActivites.data.rows,error:E.errors.activite,defaultValue:null!==(n=null===(i=b.privilege)||void 0===i||null===(l=i.activite)||void 0===l?void 0:l.id)&&void 0!==n?n:"1",valeur:null!==(c=null===(s=b.utilisateur)||void 0===s?void 0:s.activite)&&void 0!==c?c:""})),o.a.createElement(w.a,{item:!0},h.queryRoles.isLoading?o.a.createElement(q.a,{message:"chargement des roles"}):o.a.createElement(z.a,{id:"role",name:"role",label:"Role",table:"role",control:E.control,options:h.queryRoles.data.rows,error:E.errors.role,defaultValue:null!==(m=null===(d=b.privilege)||void 0===d||null===(p=d.role)||void 0===p?void 0:p.id)&&void 0!==m?m:"1",valeur:null!==(g=null===(v=b.utilisateur)||void 0===v?void 0:v.role)&&void 0!==g?g:""}))))),o.a.createElement(N.a,null,o.a.createElement(w.a,{container:!0,alignItems:"center",justify:"space-between"},o.a.createElement(w.a,{item:!0},o.a.createElement(I.a,{color:"primary",variant:"contained",type:"submit",onClick:E.handleSubmit(y)},h.mutationMiseajour.isLoading||h.mutationAjout.isLoading?o.a.createElement(Q.a,{color:"inherit"}):o.a.createElement(G.a,null),o.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===b.pagestate.action?o.a.createElement(j.a,null,"Enregistrer"):o.a.createElement(j.a,null,"Mettre \xe0 jour")))),o.a.createElement(w.a,{item:!0},o.a.createElement(I.a,{variant:"outlined",color:"secondary",onClick:f.AnnulerEnregistrement},"Annuler")))))))))}var U=e=>{var t,a;const n=e.state,i=e.fonctions,l=e.collonnes,c=e.queries,s=e.useform,m=e.onSubmit;return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement(b.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:i.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},o.a.createElement(f.a,{id:""},n.dialoguephoto.titre),o.a.createElement(h.a,null,o.a.createElement("img",{src:u.c+"/fichiers/"+n.dialoguephoto.objet+"/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),o.a.createElement(R.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>i.handleFermetureAlerte():()=>i.fermerAlerte()}),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(S.a,{routeSegments:[{name:n.titre}]})),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(j.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?o.a.createElement(E.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},o.a.createElement("div",null,o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(O.a,{className:"mb-sm-30"},o.a.createElement("form",null,o.a.createElement(w.a,{container:!0,spacing:2,direction:"column"},o.a.createElement(w.a,{item:!0},o.a.createElement(w.a,{container:!0,spacing:10,direction:"row"})),o.a.createElement(w.a,{item:!0},o.a.createElement(w.a,{container:!0,spacing:5,direction:"row"},o.a.createElement(w.a,{item:!0,sm:1}),o.a.createElement(w.a,{item:!0,sm:3,p:5},c.queryRoles.isLoading?o.a.createElement(q.a,{message:"chargement des roles"}):o.a.createElement(y.a,{fullWidth:!0},o.a.createElement(P.a,{htmlFor:"Role"},"Choisir un role"),o.a.createElement(C.a,{id:"Role",variant:"outlined",onChange:i.handleChangeRole},o.a.createElement(x.a,{key:"0",value:null},"Tous les roles"),c.queryRoles.data.rows.map(e=>o.a.createElement(x.a,{key:e.id,value:e.id},e.nom))),o.a.createElement(A.a,null))),o.a.createElement(w.a,{item:!0,sm:3},c.queryActivites.isLoading?o.a.createElement(q.a,{message:"chargement des activit\xe9s"}):o.a.createElement(y.a,{fullWidth:!0},o.a.createElement(P.a,{htmlFor:"Activite"},"Choisir une activit\xe9"),o.a.createElement(C.a,{id:"activite",variant:"outlined",onChange:i.handleChangeActivite},o.a.createElement(x.a,{key:"0",value:null},"Toutes les activit\xe9s"),c.queryActivites.data.rows.map(e=>o.a.createElement(x.a,{key:e.id,value:e.id},e.nom))),o.a.createElement(A.a,null))),o.a.createElement(w.a,{item:!0,sm:3}))))))),c.queryPrivileges.isLoading?o.a.createElement(q.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryPrivileges.isError?o.a.createElement(q.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryPrivileges.error,type:"error"}):o.a.createElement(D.a,{tag:"div",blocking:!1},o.a.createElement(g.a,{title:n.titre,data:c.queryPrivileges.data.rows,columns:l,options:Object(r.a)(Object(r.a)({},v.a),{},{serverSide:!0,count:c.queryPrivileges.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},v.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},v.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>i.handleChangePage(e),onChangeRowsPerPage:e=>i.handleChangeRowPerPage(e),onSearchChange:e=>i.handleSearchChange(e),onFilterChange:()=>i.handleFilterChange()})})),o.a.createElement(O.a,{className:"w-full overflow-auto",elevation:8},o.a.createElement(k.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:i.fermerDialogueSuppression,onYesClick:i.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.privilege)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):o.a.createElement(J,{state:n,fonctions:i,queries:c,useform:s,onSubmit:m}))},H=a(13),Y=a(88),K=a(2132),X=a(2133),Z=a(2134),$=a(2135),_=a(344),ee=a(1360),te=a(1334),ae=a(1378);Object(_.a)(e=>{e.palette,Object(H.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function re(e){const t=Object(_.a)(e=>{e.palette,Object(H.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"Role",label:"Role",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:" "}}},{name:"Activite",label:"Activit\xe9",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:" "}}},{name:"actif",label:"Actif?",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,r)=>o.a.createElement(ee.a,{checked:t,onChange:()=>e.handleTogleactif({id:a.rowData[0],actif:t})})}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>o.a.createElement("div",null,o.a.createElement(Y.j,{menuButton:o.a.createElement("div",{className:t.userMenu},o.a.createElement(te.a,{xsDown:!0},o.a.createElement(I.a,{size:"small",variant:"outlined",color:"primary",endIcon:o.a.createElement($.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(K.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(K.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(X.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:o.a.createElement(Z.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(X.a,{color:"primary"})}]}})({id:r.rowData[0],description:r.rowData[4],actif:r.rowData[3],activite:r.rowData[2],role:r.rowData[1]}).map(e=>o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a,{onClick:()=>e.action({id:r.rowData[0],description:r.rowData[4],actif:r.rowData[3],activite:r.rowData[2],role:r.rowData[1]}),key:e.id,value:e.statut},e.icon,"   ",o.a.createElement("span",{className:"ml-5"},e.nom)),o.a.createElement(ae.a,null)))))}}]}var ne=a(1387),ie=(a(1409),a(1397)),oe=a(1608),le=a(1485);t.default=()=>{const e={privilege:{description:"",actif:"",activite:"1",role:"1"},privilege1:null,titre:"Gestion des privil\xe8ges",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:{activite:{id:null},role:{id:null}}},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(i.useState)(e),a=Object(n.a)(t,2),l=a[0],c=a[1];let s=new m,u=new oe.a,p=new le.a;const g=Object(d.useQueryClient)(),v={handleFermetureAlerte:()=>{c(Object(r.a)(Object(r.a)({},l),{},{titre:"Gestion des privil\xe8ges",alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},l.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{c(Object(r.a)(Object(r.a)({},l),{},{privilege:null,titre:"Nouveau privil\xe8ge ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{c(Object(r.a)(Object(r.a)({},l),{},{alert:Object(r.a)(Object(r.a)({},l.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),c(Object(r.a)(Object(r.a)({},l),{},{titre:"Gestion des privil\xe8ges",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{c(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{w.mutate(l.privilege)},handleCloseDialoguephoto:()=>{c(Object(r.a)(Object(r.a)({},l),{},{dialoguephoto:Object(r.a)(Object(r.a)({},l.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{c(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{c(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{c(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":c(Object(r.a)(Object(r.a)({},l),{},{titre:"Mise \xe0 jour ",privilege:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":c(Object(r.a)(Object(r.a)({},l),{},{privilege:e,dialogueSuppressionOuvert:!0}))}},handleTogleactif:e=>{O.mutate(e)},handleChangeActivite:e=>{c(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{filtre:Object(r.a)(Object(r.a)({},l.tableconfig.filtre),{},{activite:{id:e.target.value}})})}))},handleChangeRole:e=>{c(Object(r.a)(Object(r.a)({},l),{},{tableconfig:Object(r.a)(Object(r.a)({},l.tableconfig),{},{filtre:Object(r.a)(Object(r.a)({},l.tableconfig.filtre),{},{role:{id:e.target.value}})})}))}},b=Object(d.useQuery)(["Privileges",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>s.getTouslesPrivileges(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),f=Object(d.useQuery)(["Activites",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>u.getTouslesActivites(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),h=Object(d.useQuery)(["Roles",l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre],()=>p.getTouslesRoles(l.tableconfig.page,l.tableconfig.rowsPerPage,l.tableconfig.recherche,l.tableconfig.filtre),{keepPreviousData:!0}),j=Object(d.useMutation)(s.ajoutPrivilege,{onSuccess:()=>{g.invalidateQueries("Privileges"),c(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{g.invalidateQueries("Privileges"),c(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),E=Object(d.useMutation)(s.miseajourPrivilege,{onSuccess:()=>{g.invalidateQueries("Privileges"),c(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{g.invalidateQueries("Privileges"),c(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),O=Object(d.useMutation)(s.togleactifPrivilege,{onSuccess:()=>{c(Object(r.a)(Object(r.a)({},l),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{c({alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}})},onSettled:()=>{g.invalidateQueries("Privileges")}}),w=Object(d.useMutation)(s.suppressionPrivilege,{onSuccess:()=>{c(Object(r.a)(Object(r.a)({},l),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{c({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{g.invalidateQueries("Privileges")}}),y={queryPrivileges:b,mutationMiseajour:E,mutationAjout:j,mutationSuppression:w,queryActivites:f,queryRoles:h},P=re(v),C=T.b().shape({description:T.c().required("Le champs Description est requis"),activite:T.c().required("Le champs Activite est requis"),role:T.c().required("Le champs Role est requis")}),x=Object(ne.c)({resolver:Object(ie.yupResolver)(C),defaultValues:{privilege:l.privilege}});return o.a.createElement(U,{state:l,fonctions:v,collonnes:P,queries:y,useform:x,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},l.privilege),e);void 0!==(null===(t=l.privilege)||void 0===t?void 0:t.id)?y.mutationMiseajour.mutate(Object(r.a)({},a)):y.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);