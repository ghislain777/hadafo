(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[6],{1391:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(3),r=a(0),o=a.n(r),i=a(354),l=a(1377);function c(e){const t=Object(n.a)({},e),a=t.message,r=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(i.a,{item:!0}),o.a.createElement(l.a,{color:"error"===r?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1397:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),o=a(1425),i=a(344),l=a(1816),c=(a(60),a(358)),s=a(354);function u(e){const t=e.onUpload,a=e.onSupprimer,n=e.titre,u=e.progress,m=Object(i.a)(e=>Object(l.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==n&&void 0!==n?n:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let n="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(n+="Type de fichier non support\xe9"),e.size>a&&(n+="Fichier trop volumineux."),n},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),r.a.createElement(s.a,{className:"mt-3"},r.a.createElement(c.a,{value:u}),u,"%"))}},1398:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1387),i=a(1771),l=a(626),c=a(629),s=a(627),u=a(1325);const m=e=>{const t=e.label,a=e.nom,n=e.liste,o=(e.valeur,e.error);return r.a.createElement(l.a,{fullWidth:!0,error:o?"error":""},r.a.createElement(s.a,{htmlFor:a},t),r.a.createElement(c.a,Object.assign({id:a},e),n.map(e=>r.a.createElement(i.a,{key:e.id,value:e.value},e.label))),r.a.createElement(u.a,null,o?o.message:null))};t.a=function(e){const t=e.nom,a=e.label,n=e.control,i=(e.liste,e.valeur);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,Object.assign({name:t,as:m,control:n,nom:t,label:a,valeur:i,defaultValue:i,rules:{required:"Required"}},e)))}},1403:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1404:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(626),i=a(452),l=a(1387);t.a=e=>{const t=e.id,a=e.nom,n=e.label,c=e.valeur,s=e.control,u=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{fullWidth:!0},r.a.createElement(l.a,{name:a,as:r.a.createElement(i.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:n,error:!!u})),control:s,defaultValue:c,rules:{required:"Required"}})))}},1405:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1387),i=a(1771),l=a(626),c=a(629),s=a(627),u=a(1325);const m=e=>{const t=e.label,a=e.nom,n=e.table,o=e.options,m=(e.valeur,e.error);return r.a.createElement(l.a,{fullWidth:!0,error:m?"error":""},r.a.createElement(s.a,{htmlFor:a},t),r.a.createElement(c.a,Object.assign({id:a},e),o.map(e=>{var t,a;return r.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"emission"===n&&" ["+(null!==(t=null===(a=e.Chaine)||void 0===a?void 0:a.nom)&&void 0!==t?t:"")+"]","categoriederequete"===n&&" ("+e.typederequete.nom+")","utilisateur"===n&&" "+e.prenom,"tarif"===n&&"("+e.montant+")","contrat"===n&&e.client.nom+"("+e.produit.nom+")","offre"===n&&e.prospect.nom+"("+e.prospect.quartier.nom+")")})),r.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,n=e.control,i=(e.table,e.valeur);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,Object.assign({name:t,as:m,control:n,nom:t,label:a,valeur:i,rules:{required:"Required"}},e)))}},1406:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(17),r=a(0),o=a.n(r),i=a(1387),l=a(1360),c=a(1359);function s(e){const t=e.nom,a=e.coche,s=e.control,u=e.changement,m=e.label,p=Object(r.useState)(a),d=Object(n.a)(p,2),b=d[0],g=d[1];return o.a.createElement(c.a,{control:o.a.createElement(i.a,{name:t,control:s,render:e=>o.a.createElement(l.a,Object.assign({},e,{checked:b,onChange:t=>{e.onChange(t.target.checked),g(!b),u(!b)}}))}),label:null==m?t:m})}},1407:function(e,t,a){"use strict";a(17),a(0),a(626),a(1495),a(2178),a(1401),a(1402),a(1387)},1408:function(e,t,a){"use strict";a(17),a(0),a(626),a(1495),a(2133),a(1401),a(1402),a(1387)},1411:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(20),r=a.n(n),o=a(39),i=a(76);function l(e){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(r.a.mark((function e(t){var a,n,o,l,c,s,u,m,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,n=t.nom,o=t.modele,l=t.champ,c=t.objet,s=t.obj,u=t.handleprogress,(m=new FormData).append(s.cle,c.id),m.append("modele",o),m.append("champ",l),m.append("nom",n),m.append("cle",s.cle),m.append("valeur",s.valeur),m.append("file",a),e.next=11,i.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return p=e.sent,e.abrupt("return",p.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1659:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(20),r=a.n(n),o=a(39),i=a(76);class l{getTouslesMenus(e,t,a,n){return Object(o.a)(r.a.mark((function n(){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,i.b.get("/menus?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return o=n.sent,n.abrupt("return",o.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutMenu(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/menus",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourMenu(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/menus/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionMenu(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/menus/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2166:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(17),o=a(0),i=a.n(o),l=a(1659),c=a(133),s=a(1418),u=a.n(s),m=a(1403),p=a(1330),d=a(2118),b=a(2117),g=a(449),f=a(2119),h=a(454),v=a(1380),j=a(357),E=a(355),O=a(356),y=a(1391),w=a(1419),C=(a(1420),a(76)),S=a(1400),M=a(354),x=a(2115),P=a(625),D=a(2114),k=a(2113),q=a(1377),F=a(1404),R=(a(1405),a(1406),a(1397),a(1398),a(1407),a(1408),a(1374)),A=a(2134);function N(e){var t,a,n,r;const o=e.state,l=e.fonctions,c=e.queries,s=e.useform,u=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(M.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(M.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(R.a,{theme:Object(C.a)()},i.a.createElement(v.a,null,i.a.createElement(x.a,{action:i.a.createElement(P.a,{"aria-label":"",onClick:l.AnnulerEnregistrement},"x"),title:"ajout"===o.pagestate.action?"Nouveau menu":"Mise \xe0 jour ",subheader:""}),i.a.createElement(D.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:s.handleSubmit(u)},i.a.createElement(M.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(M.a,{item:!0},i.a.createElement(F.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=o.menu)||void 0===t?void 0:t.nom,control:s.control,error:s.errors.nom})),i.a.createElement(M.a,{item:!0},i.a.createElement(F.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=o.menu)||void 0===a?void 0:a.description,control:s.control,error:s.errors.description})),i.a.createElement(M.a,{item:!0},i.a.createElement(F.a,{id:"icone",nom:"icone",label:"Icone",valeur:null===(n=o.menu)||void 0===n?void 0:n.icone,control:s.control,error:s.errors.icone})),i.a.createElement(M.a,{item:!0},i.a.createElement(F.a,{id:"position",nom:"position",label:"Position",valeur:null===(r=o.menu)||void 0===r?void 0:r.position,control:s.control,error:s.errors.position}))))),i.a.createElement(k.a,null,i.a.createElement(M.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(M.a,{item:!0},i.a.createElement(h.a,{color:"primary",variant:"contained",type:"submit",onClick:s.handleSubmit(u)},c.mutationMiseajour.isLoading||c.mutationAjout.isLoading?i.a.createElement(q.a,{color:"inherit"}):i.a.createElement(A.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===o.pagestate.action?i.a.createElement(g.a,null,"Enregistrer"):i.a.createElement(g.a,null,"Mettre \xe0 jour")))),i.a.createElement(M.a,{item:!0},i.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:l.AnnulerEnregistrement},"Annuler")))))))))}var T=e=>{var t,a;const r=e.state,o=e.fonctions,l=e.collonnes,c=e.queries,s=e.useform,S=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(p.a,{open:r.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:r.dialoguephoto.objet},i.a.createElement(d.a,{id:""},r.dialoguephoto.titre),i.a.createElement(b.a,null,i.a.createElement("img",{src:C.c+"/fichiers/"+r.dialoguephoto.objet+"/"+r.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),i.a.createElement(j.a,{message:r.alert.message,severity:r.alert.severity,open:r.alert.open,handleAlertClose:!0===r.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(E.a,{routeSegments:[{name:r.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(g.a,{variant:"h4"},r.titre)),"affichage"===r.pagestate.mode?i.a.createElement(f.a,{in:r.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(h.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouveau menu"),c.queryMenus.isLoading?i.a.createElement(y.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryMenus.isError?i.a.createElement(y.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryMenus.error,type:"error"}):i.a.createElement(w.a,{tag:"div",blocking:!1},i.a.createElement(u.a,{title:r.titre,data:c.queryMenus.data.rows,columns:l,options:Object(n.a)(Object(n.a)({},m.a),{},{serverSide:!0,count:c.queryMenus.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:r.tableconfig.rowsPerPage,textLabels:Object(n.a)(Object(n.a)({},m.a.textLabels),{},{toolbar:Object(n.a)(Object(n.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})})),i.a.createElement(v.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(O.a,{open:r.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=r.menu)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(N,{state:r,fonctions:o,queries:c,useform:s,onSubmit:S}))},L=a(13),I=a(88),z=a(2135),W=a(2136),B=a(2137),Q=a(2138),G=a(344),V=a(1334),J=a(1771),U=a(1378);Object(G.a)(e=>{e.palette,Object(L.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function H(e){const t=Object(G.a)(e=>{e.palette,Object(L.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return null!==(n=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"icone",label:"Icone",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"position",label:"Position",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return null!==(n=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,n,r)=>i.a.createElement("div",null,i.a.createElement(I.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(V.a,{xsDown:!0},i.a.createElement(h.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(Q.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(z.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(z.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(W.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(B.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(W.a,{color:"primary"})}]}})({id:n.rowData[0],nom:n.rowData[1],description:n.rowData[2],icone:n.rowData[3],position:n.rowData[4]}).map(e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(J.a,{onClick:()=>e.action({id:n.rowData[0],nom:n.rowData[1],description:n.rowData[2],icone:n.rowData[3],position:n.rowData[4]}),key:e.id,value:e.statut},e.icon,"   ",i.a.createElement("span",{className:"ml-5"},e.nom)),i.a.createElement(U.a,null)))))}}]}var Y=a(1387),K=(a(1411),a(1399));t.default=()=>{const e={menu:{nom:"",description:"",icone:"",position:0},menu1:null,titre:"Gestion des menus",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(o.useState)(e),a=Object(r.a)(t,2),s=a[0],u=a[1];let m=new l.a;const p=Object(c.useQueryClient)(),d={handleFermetureAlerte:()=>{u(Object(n.a)(Object(n.a)({},s),{},{titre:"Gestion des menus",alert:Object(n.a)(Object(n.a)({},s.alert),{},{open:!1}),pagestate:Object(n.a)(Object(n.a)({},s.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(n.a)(Object(n.a)({},s),{},{menu:null,titre:"Nouveau menu ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(n.a)(Object(n.a)({},s),{},{alert:Object(n.a)(Object(n.a)({},s.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(n.a)(Object(n.a)({},s),{},{titre:"Gestion des menus",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(n.a)(Object(n.a)({},s),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{h.mutate(s.menu)},handleCloseDialoguephoto:()=>{u(Object(n.a)(Object(n.a)({},s),{},{dialoguephoto:Object(n.a)(Object(n.a)({},s.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(n.a)(Object(n.a)({},s),{},{tableconfig:Object(n.a)(Object(n.a)({},s.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(n.a)(Object(n.a)({},s),{},{tableconfig:Object(n.a)(Object(n.a)({},s.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(n.a)(Object(n.a)({},s),{},{tableconfig:Object(n.a)(Object(n.a)({},s.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(n.a)(Object(n.a)({},s),{},{titre:"Mise \xe0 jour ",menu:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(n.a)(Object(n.a)({},s),{},{menu:e,dialogueSuppressionOuvert:!0}))}}},b=Object(c.useQuery)(["Menus",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>m.getTouslesMenus(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),g=Object(c.useMutation)(m.ajoutMenu,{onSuccess:()=>{p.invalidateQueries("Menus"),u(Object(n.a)(Object(n.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Menus"),u(Object(n.a)(Object(n.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),f=Object(c.useMutation)(m.miseajourMenu,{onSuccess:()=>{p.invalidateQueries("Menus"),u(Object(n.a)(Object(n.a)({},s),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Menus"),u(Object(n.a)(Object(n.a)({},s),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(c.useMutation)(m.suppressionMenu,{onSuccess:()=>{u(Object(n.a)(Object(n.a)({},s),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Menus")}}),v={queryMenus:b,mutationMiseajour:f,mutationAjout:g,mutationSuppression:h},j=H(d),E=S.b().shape({nom:S.c().required("Le champs Nom est requis"),description:S.c().required("Le champs Description est requis"),icone:S.c().required("Le champs Icone est requis"),position:S.a().required("position requis").positive("Le position doit \xeatre positif").integer("Le position doit \xeatre un nombre entier")}),O=Object(Y.c)({resolver:Object(K.yupResolver)(E),defaultValues:{menu:s.menu}});return i.a.createElement(T,{state:s,fonctions:d,collonnes:j,queries:v,useform:O,onSubmit:e=>{var t;let a=Object(n.a)(Object(n.a)({},s.menu),e);void 0!==(null===(t=s.menu)||void 0===t?void 0:t.id)?v.mutationMiseajour.mutate(Object(n.a)({},a)):v.mutationAjout.mutate(Object(n.a)({},a))}})}}}]);