(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[28],{1432:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(3),r=t(20),o=t.n(r),i=t(39),c=t(76);class l{getTouslesChaines(e,a,t,n){return Object(i.a)(o.a.mark((function n(){var r,i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,c.b.get("/chaines?itemsPerPage=".concat(a,"&page=").concat(e,"&id=").concat(null!==(r=t.chaine)&&void 0!==r?r:""," "));case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutChaine(e){return Object(i.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.b.post("/chaines",Object(n.a)(Object(n.a)({},e),{},{heuredebut:e.heuredebut,heurefin:e.heurefin}));case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}miseajourChaine(e){return Object(i.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("debut: ".concat(e.heuredebut)),console.log("fin: ".concat(e.heurefin)),a.next=4,c.b.put("/chaines/"+e.id,Object(n.a)(Object(n.a)({},e),{},{heuredebut:e.heuredebut,heurefin:e.heurefin}));case 4:return t=a.sent,a.abrupt("return",t.data);case 6:case"end":return a.stop()}}),a)})))()}suppressionChaine(e){return Object(i.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.b.delete("/chaines/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}togleactifChaine(e){return Object(i.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.b.put("/chaines/"+e.id,{actif:!e.actif});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}toglelienyoutubeChaine(e){return Object(i.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.b.put("/chaines/"+e.id,{lienyoutube:!e.lienyoutube});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}toglefilmeeChaine(e){return Object(i.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.b.put("/chaines/"+e.id,{emissionfilmee:!e.emissionfilmee});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionImage(e){return Object(i.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.b.post("/medias/delete/".concat(e.id,"/chaine"),{});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}}},1469:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(20),r=t.n(n),o=t(39),i=t(76);class c{getTouslesVilles(e,a,t,n){return Object(o.a)(r.a.mark((function n(){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,i.b.get("/villes?itemsPerPage=".concat(a,"&page=").concat(e,"&id=").concat(t," "));case 3:return o=n.sent,n.abrupt("return",o.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutVille(e){return Object(o.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.b.post("/villes",e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}miseajourVille(e){return Object(o.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.b.put("/villes/"+e.id,e);case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionVille(e){return Object(o.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.b.delete("/villes/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}suppressionImage(e){return Object(o.a)(r.a.mark((function a(){var t;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.b.post("/medias/delete/".concat(e.id,"/ville"),{});case 2:return t=a.sent,a.abrupt("return",t.data);case 4:case"end":return a.stop()}}),a)})))()}}},2152:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(17),o=t(0),i=t.n(o),c=t(1432),l=t(133),s=t(1418),u=t.n(s),m=t(1403),d=t(1330),p=t(2118),h=t(449),b=t(2117),g=t(2116),f=t(454),v=t(2119),j=t(1380),E=t(357),O=t(355),y=t(356),C=t(1391),x=t(1419),w=(t(1420),t(76)),S=t(1374),k=t(1400),P=t(354),M=t(2115),A=t(625),q=t(2114),N=t(2113),L=t(1377),T=t(1404),R=t(1405),F=(t(1406),t(1397)),I=t(1398),D=(t(1407),t(1408),t(2134));function V(e){var a,t,n,r,o,c,l,s,u,m;const d=e.state,p=e.fonctions,b=e.queries,g=e.useforms.chaine;return i.a.createElement("div",null,i.a.createElement(P.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(P.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(S.a,{theme:Object(w.a)()},i.a.createElement(j.a,null,i.a.createElement(M.a,{action:i.a.createElement(A.a,{"aria-label":"",onClick:p.AnnulerEnregistrement},"x"),title:"ajout"===d.pagestate.action?" Nouvelle chaine":"Mise \xe0 jour",subheader:""}),i.a.createElement(q.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",null,i.a.createElement(P.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(P.a,{item:!0},i.a.createElement(T.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(a=d.chaine)||void 0===a?void 0:a.nom,control:g.control,error:g.errors.nom})),i.a.createElement(P.a,{item:!0},i.a.createElement(I.a,{label:"Type de chaine",id:"typedechaine",nom:"typedechaine",liste:[{id:1,label:"radio",value:"radio"},{id:2,label:"tv",value:"tv"}],valeur:null===(t=d.chaine)||void 0===t?void 0:t.typedechaine,control:g.control})),i.a.createElement(P.a,{item:!0},i.a.createElement(T.a,{id:"frequence",nom:"frequence",label:"Fr\xe9quence",valeur:null===(n=d.chaine)||void 0===n?void 0:n.frequence,control:g.control,error:g.errors.frequence})),i.a.createElement(P.a,{item:!0},i.a.createElement(T.a,{id:"lienradio",nom:"lienradio",label:"Lien radio",valeur:null===(r=d.chaine)||void 0===r?void 0:r.lienradio,control:g.control,error:g.errors.lienradio})),i.a.createElement(P.a,{item:!0},i.a.createElement(T.a,{id:"lientv",nom:"lientv",label:"Lien TV",valeur:null===(o=d.chaine)||void 0===o?void 0:o.lientv,control:g.control,error:g.errors.lientv})),i.a.createElement(P.a,{item:!0},b.queryVilles.isLoading?i.a.createElement(C.a,{message:"chargement des Villes"}):i.a.createElement(R.a,{id:"ville",name:"ville",label:"ville",table:"ville",control:g.control,options:b.queryVilles.data.rows,error:g.errors.ville,defaultValue:null!==(c=null===(l=d.chaine)||void 0===l||null===(s=l.Ville)||void 0===s?void 0:s.id)&&void 0!==c?c:"1",valeur:null!==(u=null===(m=d.chaine)||void 0===m?void 0:m.ville)&&void 0!==u?u:""}))))),i.a.createElement(N.a,null,i.a.createElement(P.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(P.a,{item:!0},i.a.createElement(f.a,{variant:"outlined",color:"secondary",onClick:p.allerAPrecedent},"Pr\xe9c\xe9dent")),i.a.createElement(P.a,{item:!0},i.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit",onClick:g.handleSubmit(p.allerAPhotos)},b.mutationAjout.isLoading||b.mutationMiseajour.isLoading?i.a.createElement(L.a,{color:"inherit"}):i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"pl-2 capitalize"},i.a.createElement(h.a,null,"Suivant")),i.a.createElement(D.a,null)))))))))))}var B=t(2129),Q=t(2125),z=t(2126),W=t(1677),G=t(626),J=t(627),U=t(629),Y=t(1771),H=t(1325),K=t(2137),X=t(1678),Z=t(1679),$=t(1680);function _(e){const a=e.state,t=e.fonctions,n=e.queries;e.useform,e.onSubmit;return i.a.createElement("div",null,i.a.createElement(P.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(P.a,{item:!0,lg:5,md:5,sm:12,xs:12},i.a.createElement(S.a,{theme:Object(w.a)()},i.a.createElement(j.a,null,i.a.createElement(M.a,{action:i.a.createElement(A.a,{"aria-label":"",onClick:t.AnnulerEnregistrement},"x"),title:"Ajouter une photo au chaine",subheader:"".concat(a.chaine.nom)}),i.a.createElement(q.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",null,i.a.createElement(P.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(P.a,{item:!0},i.a.createElement(F.a,{progress:a.progressphoto,acceptedFiles:[".png",".jpg",".jpeg",".gif"],onUpload:e=>t.uploaderPhoto(e),onSupprimer:()=>t.supprimerphoto(),titre:"Fichier photo .png(faire glisser ou cliquez ici pour charger)"})),i.a.createElement(G.a,{fullWidth:!0},i.a.createElement(J.a,{htmlFor:"champ"},"Motif"),i.a.createElement(U.a,{id:"champ",variant:"outlined",value:a.champ,onChange:t.handleChangeChamps},[{id:"affiche",label:"Affiche",value:"Affiche"},{id:"logo",label:"Logo",value:"Logo"},{id:"logodesactive",label:"Logo inactif",value:"Logodesactive"}].map(e=>i.a.createElement(Y.a,{key:e.id,value:e.value},e.label))),i.a.createElement(H.a,null))))),i.a.createElement(N.a,null,i.a.createElement(P.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(P.a,{item:!0}),i.a.createElement(P.a,{item:!0},i.a.createElement(f.a,{variant:"outlined",color:"secondary",onClick:t.AnnulerEnregistrement},"Quiter"))))))),i.a.createElement(P.a,{item:!0,lg:7,md:7,sm:12,xs:12},i.a.createElement(j.a,null,i.a.createElement(M.a,{action:i.a.createElement(A.a,{"aria-label":"",onClick:t.AnnulerEnregistrement},"x"),title:"".concat(a.chaine.nom),subheader:""}),i.a.createElement(q.a,{className:" px-6 pt-6 pb-6"},i.a.createElement(X.a,{sx:{width:540,height:300},cols:2,gap:8},a.chaine.Media.map(e=>i.a.createElement(Z.a,{key:e.id,sx:{borderColor:"primary.main",border:.1}},i.a.createElement("img",{src:"".concat(w.c).concat(e.fichier),alt:e.titre}),i.a.createElement($.a,{title:e.nom,actionIcon:i.a.createElement(A.a,{"aria-label":"",onClick:()=>t.supprimerImage(e)},i.a.createElement(K.a,{color:"error"}))}))))),i.a.createElement(N.a,null,i.a.createElement(P.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(P.a,{item:!0},i.a.createElement(f.a,{variant:"outlined",color:"secondary",onClick:t.allerAPrecedent},"Pr\xe9c\xe9dent")),i.a.createElement(P.a,{item:!0},i.a.createElement(f.a,{color:"primary",variant:"contained",type:"submit",onClick:t.handleClickSurTerminer},n.mutationAjout.isLoading||n.mutationMiseajour.isLoading?i.a.createElement(L.a,{color:"inherit"}):i.a.createElement(i.a.Fragment,null,i.a.createElement(D.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},i.a.createElement(h.a,null,"Terminer")))))))))))}var ee=t(1411);function ae(e){const a=e.fonctions,t=e.queries,s=e.useforms,u=Object(n.a)(Object(n.a)({},e.state),{},{etape:0,progressphoto:0,etapes:[{index:0,label:"Edition de la chaine"},{index:1,label:"Visuels de la chaine"}],complet:!1,champ:"photo"}),m=Object(o.useState)(u),d=Object(r.a)(m,2),p=d[0],b=d[1];let g=new c.a;a.handleChangeChamps=e=>{b(Object(n.a)(Object(n.a)({},p),{},{champ:e.target.value}))},a.allerAPhotos=e=>{delete e.Media,0===p.chaine.id?t.mutationAjout.mutate(e):t.mutationMiseajour.mutate(Object(n.a)(Object(n.a)({},p.chaine),e))},a.uploaderPhoto=e=>{e&&j.mutate({fichier:e,modele:"chaine",objet:p.chaine,champ:p.champ,nom:"Photo chaine",handleprogress:v,obj:{cle:"chaine",valeur:p.chaine.id}})},a.supprimerImage=e=>{console.log("suppression de l'image"),console.log(e),t.mutationSuppressionImage.mutate(e)};const v=e=>{var a=Math.round(100*e.loaded/e.total);b(Object(n.a)(Object(n.a)({},p),{},{progressphoto:a}))};a.supprimerphoto=()=>{console.log("Suppression du fichier")},a.allerAPrecedent=()=>{b(Object(n.a)(Object(n.a)({},p),{},{etape:0}))},t.mutationAjout=Object(l.useMutation)(g.ajoutChaine,{onSuccess:e=>{b(Object(n.a)(Object(n.a)({},p),{},{chaine:e,etape:1,alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{b(Object(n.a)(Object(n.a)({},p),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),t.mutationMiseajour=Object(l.useMutation)(g.miseajourChaine,{onSuccess:e=>{b(Object(n.a)(Object(n.a)({},p),{},{chaine:e,etape:1,alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{b(Object(n.a)(Object(n.a)({},p),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}});const j=Object(l.useMutation)(ee.a,{onSuccess:e=>{b(Object(n.a)(Object(n.a)({},p),{},{chaine:Object(n.a)(Object(n.a)({},p.chaine),{},{Media:e}),alert:{message:"Upload du fichier r\xe9ussi",open:!0,severity:"success",automaticClose:!1},progressphoto:100}))},onError:()=>{b(Object(n.a)(Object(n.a)({},p),{},{alert:{automaticClose:!1,message:"Echec de chargement du fichier sur le serveur",open:!0,severity:"error"}}))}});return t.mutationSuppressionImage=Object(l.useMutation)(g.suppressionImage,{onSuccess:e=>{b(Object(n.a)(Object(n.a)({},p),{},{chaine:Object(n.a)(Object(n.a)({},p.chaine),{},{Media:e}),dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{b(Object(n.a)(Object(n.a)({},p),{},{alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}}))},onSettled:()=>{}}),i.a.createElement(W.a,{sx:{width:"100%"}},i.a.createElement(B.a,{nonLinear:!0,activeStep:p.etape},p.etapes.map(e=>i.a.createElement(Q.a,{key:e.label,completed:p.etape>e.index},i.a.createElement(z.a,{color:"inherit"},e.label)))),i.a.createElement("div",null,p.complet?i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{sx:{mt:2,mb:1}},"F\xe9licitation, toutes les \xe9tapes ont \xe9t\xe9 achev\xe9s."),i.a.createElement(W.a,{sx:{display:"flex",flexDirection:"row",pt:2}},i.a.createElement(W.a,{sx:{flex:"1 1 auto"}}),i.a.createElement(f.a,{onClick:a.fermerFormulaire},"Quitter"))):i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{sx:{mt:2,mb:1,py:1}},0===p.etape?i.a.createElement(V,{state:p,fonctions:a,queries:t,useforms:s}):1===p.etape?i.a.createElement(_,{state:p,fonctions:a,queries:t,useforms:s,allerAPhotos:a.allerAPhotos}):i.a.createElement("span",null,"Autre")))))}var te=e=>{var a,t;const r=e.state,o=e.fonctions,c=e.collonnes,l=e.queries,s=e.useforms;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(d.a,{open:r.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:r.dialoguephoto.objet,fonctions:o,state:r},i.a.createElement(p.a,{id:""},i.a.createElement(h.a,{variant:"h6",color:"initial"},r.dialoguephoto.titre)),i.a.createElement(b.a,null,i.a.createElement("img",{style:{width:500,height:400,"object-fit":"contain"},src:w.c+r.dialoguephoto.fichier,alt:r.dialoguephoto.objet,srcset:""})),i.a.createElement(g.a,null,i.a.createElement(f.a,{autoFocus:!0,onClick:()=>o.handleClickSurPhotoPrecedent()},"precedent"),i.a.createElement(f.a,{onClick:()=>o.handleClickSurPhotoSuivant(),autoFocus:!0},"suivant"))),i.a.createElement(E.a,{message:r.alert.message,severity:r.alert.severity,open:r.alert.open,handleAlertClose:!0===r.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(O.a,{routeSegments:[{name:r.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(h.a,{variant:"h4"},r.titre)),"affichage"===r.pagestate.mode?i.a.createElement(v.a,{in:r.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(f.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouvelle chaine"),l.queryChaines.isLoading?i.a.createElement(C.a,{message:"Chargement des donn\xe9es...",type:"info"}):l.queryChaines.isError?i.a.createElement(C.a,{message:"Erreur lors du chargement des donn\xe9es::"+l.queryChaines.error,type:"error"}):i.a.createElement(x.a,{tag:"div",blocking:!1},i.a.createElement(S.a,{theme:Object(w.a)()},i.a.createElement(u.a,{title:r.titre,data:l.queryChaines.data.rows.map(e=>({chaine:e})),columns:c,options:Object(n.a)(Object(n.a)({},m.a),{},{serverSide:!0,count:l.queryChaines.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:r.tableconfig.rowsPerPage,textLabels:Object(n.a)(Object(n.a)({},m.a.textLabels),{},{toolbar:Object(n.a)(Object(n.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(j.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(y.a,{open:r.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(a="Confirmez la suppression de "+(null===(t=r.chaine)||void 0===t?void 0:t.nom))&&void 0!==a?a:""})))):i.a.createElement(ae,{state:r,fonctions:o,queries:l,useforms:s}))},ne=t(13),re=t(88),oe=t(2135),ie=t(2136),ce=t(2102),le=t(2138),se=t(344),ue=t(1360),me=t(1672),de=t(1382),pe=t(1334),he=t(1378);Object(se.a)(e=>{e.palette,Object(ne.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function be(e){const a=Object(se.a)(e=>{e.palette,Object(ne.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),t=(a,t)=>{e.handleClickSurAction(a,t)};return[{name:"chaine",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var n,r;return null!==(n=null===(r=e.id)||void 0===r?void 0:r.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"chaine",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var n;return null!==(n=e.nom)&&void 0!==n?n:""}}},{name:"chaine",label:"Type de chaine",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var n,r;return null!==(n=null===(r=e.typedechaine)||void 0===r?void 0:r.toUpperCase())&&void 0!==n?n:""}}},{name:"chaine",label:"Description",options:{filter:!1,sort:!1,display:"false",customBodyRender:(e,a,t)=>{var n;return null!==(n=e.description)&&void 0!==n?n:""}}},{name:"chaine",label:"Fr\xe9quence",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var n;return null!==(n=e.frequence)&&void 0!==n?n:""}}},{name:"chaine",label:"Lien radio",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var n;return null!==(n=e.lienradio)&&void 0!==n?n:""}}},{name:"chaine",label:"Lien TV",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,a,t)=>{var n;return null!==(n=e.lientv)&&void 0!==n?n:""}}},{name:"chaine",label:"Lien Youtube?",options:{filter:!1,sort:!1,display:!0,customBodyRender:(a,t,n)=>"radio"===a.typedechaine?"":i.a.createElement(ue.a,{checked:a.lienyoutube,onChange:()=>e.handleToglelienyoutube(a)})}},{name:"chaine",label:"ville",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,a,t)=>{var n,r;return null!==(n=null===(r=e.Ville)||void 0===r?void 0:r.nom)&&void 0!==n?n:""}}},{name:"chaine",label:"Photos",options:{filter:!1,sort:!1,display:!0,customBodyRender:(a,t,n)=>{var r;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex items-center"},i.a.createElement(me.a,{onClick:()=>e.handleClickSurphoto(a)},i.a.createElement(f.a,null,i.a.createElement(de.a,{variant:"rounded",className:"w-48 h-48",src:w.c+(null===(r=a.Media[0])||void 0===r?void 0:r.fichier)}))),i.a.createElement(me.a,{onClick:()=>e.handleAjouterPhoto(a)},i.a.createElement(ce.a,null))),i.a.createElement("small",{className:"text-muted"},a.Media.length))}}},{name:"chaine",label:"Actif?",options:{filter:!1,sort:!1,display:!0,customBodyRender:(a,t,n)=>i.a.createElement(ue.a,{checked:a.actif,onChange:()=>e.handleTogleactif(a)})}},{name:"chaine",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,n,r)=>i.a.createElement("div",null,i.a.createElement(re.j,{menuButton:i.a.createElement("div",{className:a.userMenu},i.a.createElement(pe.a,{xsDown:!0},i.a.createElement(f.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(le.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:i.a.createElement(oe.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>t(e,"D\xe9tails"),icon:i.a.createElement(oe.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:i.a.createElement(ie.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>t(e,"Supprimer"),icon:i.a.createElement(K.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>t(e,"Modifier"),icon:i.a.createElement(ie.a,{color:"primary"})}]}})(e).map(a=>i.a.createElement(i.a.Fragment,null,i.a.createElement(Y.a,{onClick:()=>a.action(e),key:a.id,value:a.statut},a.icon,"   ",i.a.createElement("span",{className:"ml-5"},a.nom)),i.a.createElement(he.a,null)))))}}]}var ge=t(1387),fe=t(1399),ve=t(1469);a.default=()=>{const e={id:0,nom:"",description:"",typedechaine:"radio",lienyoutube:!1,frequence:"",lienradio:"",lientv:"",actif:"",ville:1,Media:[]},a={nouvellechaine:!0,chaine:e,chaine1:null,titre:"Gestion des chaines",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(o.useState)(a),s=Object(r.a)(t,2),u=s[0],m=s[1];let d=new c.a,p=new ve.a;const h=Object(l.useQueryClient)(),b=()=>{h.invalidateQueries("Chaines"),m(Object(n.a)(Object(n.a)({},u),{},{titre:"Gestion des chaines",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},g={handleFermetureAlerte:()=>{m(Object(n.a)(Object(n.a)({},u),{},{titre:"Gestion des chaines",alert:Object(n.a)(Object(n.a)({},u.alert),{},{open:!1}),pagestate:Object(n.a)(Object(n.a)({},u.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{m(Object(n.a)(Object(n.a)({},u),{},{chaine:e,titre:"Nouveau chaine",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{m(Object(n.a)(Object(n.a)({},u),{},{alert:Object(n.a)(Object(n.a)({},u.alert),{},{open:!1})}))},AnnulerEnregistrement:b,fermerDialogueSuppression:()=>{m(Object(n.a)(Object(n.a)({},u),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{O.mutate(u.chaine)},handleCloseDialoguephoto:()=>{m(Object(n.a)(Object(n.a)({},u),{},{dialoguephoto:Object(n.a)(Object(n.a)({},u.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{m(Object(n.a)(Object(n.a)({},u),{},{tableconfig:Object(n.a)(Object(n.a)({},u.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{m(Object(n.a)(Object(n.a)({},u),{},{tableconfig:Object(n.a)(Object(n.a)({},u.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{m(Object(n.a)(Object(n.a)({},u),{},{tableconfig:Object(n.a)(Object(n.a)({},u.tableconfig),{},{page:e})}))},handleClickSurAction:(e,a)=>{switch(console.log(a),a){case"D\xe9tails":console.log("action details");break;case"Modifier":m(Object(n.a)(Object(n.a)({},u),{},{titre:"Mise \xe0 jour ",chaine:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":m(Object(n.a)(Object(n.a)({},u),{},{chaine:e,dialogueSuppressionOuvert:!0}))}},handleClickSurphoto:e=>{var a,t;m(Object(n.a)(Object(n.a)({},u),{},{etape:1,chaine:e,dialoguephoto:Object(n.a)(Object(n.a)({},u.dialoguephoto),{},{photoEnCours:0,open:!0,titre:"1/".concat(e.Media.length," (").concat(null===(a=e.Media[0])||void 0===a?void 0:a.champ,")"),fichier:null===(t=e.Media[0])||void 0===t?void 0:t.fichier,objet:e.titre})}))},handleAjouterPhoto:e=>{console.log("chaine: ".concat(JSON.stringify(e))),m(Object(n.a)(Object(n.a)({},u),{},{etape:2,chaine:e,pagestate:Object(n.a)(Object(n.a)({},u.pagestate),{},{openImage:!0,mode:"edition"})}))},handleClickSurPhotoSuivant:()=>{if(u.dialoguephoto.photoEnCours<u.chaine.Media.length-1){var e;const a=u.dialoguephoto.photoEnCours+1;m(Object(n.a)(Object(n.a)({},u),{},{dialoguephoto:Object(n.a)(Object(n.a)({},u.dialoguephoto),{},{photoEnCours:a,open:!0,titre:" ".concat(a+1,"/").concat(u.chaine.Media.length," (").concat(null===(e=u.chaine.Media[a])||void 0===e?void 0:e.champ,")"),fichier:u.chaine.Media[a].fichier,objet:u.chaine.titre})}))}},handleClickSurPhotoPrecedent:()=>{if(u.dialoguephoto.photoEnCours>0){var e;const a=u.dialoguephoto.photoEnCours-1;console.log(u.dialoguephoto.photoEnCours),m(Object(n.a)(Object(n.a)({},u),{},{dialoguephoto:Object(n.a)(Object(n.a)({},u.dialoguephoto),{},{photoEnCours:a,open:!0,titre:"".concat(a+1,"/").concat(u.chaine.Media.length," (").concat(null===(e=u.chaine.Media[a])||void 0===e?void 0:e.champ,")"),fichier:u.chaine.Media[a].fichier,objet:u.chaine.titre})}))}},handleTogleactif:e=>{v.mutate(e)},handleToglelienyoutube:e=>{j.mutate(e)},handleClickSurTerminer:e=>{b()}},f=Object(l.useQuery)(["Chaines",u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre],()=>d.getTouslesChaines(u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre),{keepPreviousData:!0}),v=Object(l.useMutation)(d.togleactifChaine,{onSuccess:()=>{m(Object(n.a)(Object(n.a)({},u),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{m({alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}})},onSettled:()=>{h.invalidateQueries("Chaines")}}),j=Object(l.useMutation)(d.toglelienyoutubeChaine,{onSuccess:()=>{m(Object(n.a)(Object(n.a)({},u),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{m({alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}})},onSettled:()=>{h.invalidateQueries("Chaines")}}),E=Object(l.useQuery)(["Villes",u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre],()=>p.getTouslesVilles(0,1e3,u.tableconfig.recherche,u.tableconfig.filtre),{keepPreviousData:!0}),O=Object(l.useMutation)(d.suppressionChaine,{onSuccess:()=>{m(Object(n.a)(Object(n.a)({},u),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{m({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{h.invalidateQueries("Chaines")}}),y={queryChaines:f,mutationSuppression:O,queryVilles:E},C=be(g),x=k.b().shape({nom:k.c().required("Le champs Nom est requis")}),w={chaine:Object(ge.c)({resolver:Object(fe.yupResolver)(x),defaultValues:{chaine:u.chaine}})};return i.a.createElement(te,{state:u,fonctions:g,collonnes:C,queries:y,useforms:w,onSubmit:e=>{var a;let t=Object(n.a)(Object(n.a)({},u.chaine),e);void 0!==(null===(a=u.chaine)||void 0===a?void 0:a.id)?y.mutationMiseajour.mutate(Object(n.a)({},t)):y.mutationAjout.mutate(Object(n.a)({},t))}})}}}]);