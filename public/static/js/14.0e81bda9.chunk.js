(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[14,4],{1391:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(3),n=a(0),o=a.n(n),i=a(354),l=a(1377);function c(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(i.a,{item:!0}),o.a.createElement(l.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1397:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),o=a(1427),i=a(344),l=a(1815),c=(a(60),a(358)),s=a(354);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(i.a)(e=>Object(l.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(s.a,{className:"mt-3"},n.a.createElement(c.a,{value:u}),u,"%"))}},1398:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1388),i=a(1770),l=a(626),c=a(629),s=a(627),u=a(1325);const m=e=>{const t=e.label,a=e.nom,r=e.liste,o=(e.valeur,e.error);return n.a.createElement(l.a,{fullWidth:!0,error:o?"error":""},n.a.createElement(s.a,{htmlFor:a},t),n.a.createElement(c.a,Object.assign({id:a},e),r.map(e=>n.a.createElement(i.a,{key:e.id,value:e.value},e.label))),n.a.createElement(u.a,null,o?o.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,i=(e.liste,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:i,defaultValue:i,rules:{required:"Required"}},e)))}},1403:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1404:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(626),i=a(452),l=a(1388);t.a=e=>{const t=e.id,a=e.nom,r=e.label,c=e.valeur,s=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(l.a,{name:a,as:n.a.createElement(i.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:s,defaultValue:c,rules:{required:"Required"}})))}},1405:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1388),i=a(1770),l=a(626),c=a(629),s=a(627),u=a(1325);const m=e=>{const t=e.label,a=e.nom,r=e.table,o=e.options,m=(e.valeur,e.error);return n.a.createElement(l.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(s.a,{htmlFor:a},t),n.a.createElement(c.a,Object.assign({id:a},e),o.map(e=>{var t,a;return n.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"emission"===r&&" ["+(null!==(t=null===(a=e.Chaine)||void 0===a?void 0:a.nom)&&void 0!==t?t:"")+"]","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")")})),n.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,i=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:i,rules:{required:"Required"}},e)))}},1406:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(17),n=a(0),o=a.n(n),i=a(1388),l=a(1360),c=a(1359);function s(e){const t=e.nom,a=e.coche,s=e.control,u=e.changement,m=e.label,p=Object(n.useState)(a),d=Object(r.a)(p,2),b=d[0],g=d[1];return o.a.createElement(c.a,{control:o.a.createElement(i.a,{name:t,control:s,render:e=>o.a.createElement(l.a,Object.assign({},e,{checked:b,onChange:t=>{e.onChange(t.target.checked),g(!b),u(!b)}}))}),label:null==m?t:m})}},1407:function(e,t,a){"use strict";a(17),a(0),a(626),a(1495),a(2176),a(1401),a(1402),a(1388)},1408:function(e,t,a){"use strict";a(17),a(0),a(626),a(1495),a(2132),a(1401),a(1402),a(1388)},1412:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(20),n=a.n(r),o=a(39),i=a(76);function l(e){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(n.a.mark((function e(t){var a,r,o,l,c,s,u,m,p;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.nom,o=t.modele,l=t.champ,c=t.objet,s=t.obj,u=t.handleprogress,(m=new FormData).append(s.cle,c.id),m.append("modele",o),m.append("champ",l),m.append("nom",r),m.append("cle",s.cle),m.append("valeur",s.valeur),m.append("file",a),e.next=11,i.b.post("/medias/upload",m,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:u});case 11:return p=e.sent,e.abrupt("return",p.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1451:function(e,t,a){"use strict";var r=a(0);const n=r.createContext({});t.a=n},1469:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(20),n=a.n(r),o=a(39),i=a(76);class l{getTouslesVilles(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,i.b.get("/villes?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutVille(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/villes",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourVille(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/villes/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionVille(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/villes/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionImage(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/medias/delete/".concat(e.id,"/ville"),{});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1663:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(20),n=a.n(r),o=a(39),i=a(76);class l{getTouslesPays(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,i.b.get("/pays?itemsPerPage=".concat(t,"&page=").concat(e,"&id=").concat(a," "));case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutPay(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/pays",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourPay(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/pays/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionPay(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/pays/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1676:function(e,t,a){"use strict";var r=a(1),n=a(41),o=a(0),i=a(4),l=a(1539),c=a(2143),s=a(2145),u=a(1537),m=a(1384);const p=["className","component"];const d=function(e={}){const t=e.defaultTheme,a=Object(l.a)("div")(c.a);return o.forwardRef((function(e,o){const l=Object(u.a)(t),c=Object(s.a)(e),d=c.className,b=c.component,g=void 0===b?"div":b,v=Object(n.a)(c,p);return Object(m.jsx)(a,Object(r.a)({as:g,ref:o,className:Object(i.default)(d,"MuiBox-root"),theme:l},v))}))}();t.a=d},1677:function(e,t,a){"use strict";var r=a(41),n=a(1),o=a(2138),i=a(4),l=a(0),c=a(1387),s=a(1389),u=a(2139),m=a(2140);function p(e){return Object(u.a)("MuiImageList",e)}Object(m.a)("MuiImageList",["root","masonry","quilted","standard","woven"]);var d=a(1451),b=a(1384);const g=["children","className","cols","component","rowHeight","gap","style","variant"],v=Object(c.a)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(e,t)=>{const a=e.ownerState;return[t.root,t[a.variant]]}})(({ownerState:e})=>Object(n.a)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===e.variant&&{display:"block"})),h=l.forwardRef((function(e,t){const a=Object(s.a)({props:e,name:"MuiImageList"}),c=a.children,u=a.className,m=a.cols,h=void 0===m?2:m,f=a.component,j=void 0===f?"ul":f,O=a.rowHeight,E=void 0===O?"auto":O,y=a.gap,w=void 0===y?4:y,P=a.style,x=a.variant,C=void 0===x?"standard":x,S=Object(r.a)(a,g),I=l.useMemo(()=>({rowHeight:E,gap:w,variant:C}),[E,w,C]);l.useEffect(()=>{0},[]);const M="masonry"===C?Object(n.a)({columnCount:h,columnGap:w},P):Object(n.a)({gridTemplateColumns:"repeat(".concat(h,", 1fr)"),gap:w},P),k=Object(n.a)({},a,{component:j,gap:w,rowHeight:E,variant:C}),A=(e=>{const t=e.classes,a={root:["root",e.variant]};return Object(o.a)(a,p,t)})(k);return Object(b.jsx)(v,Object(n.a)({as:j,className:Object(i.default)(A.root,A[C],u),ref:t,style:M,ownerState:k},S,{children:Object(b.jsx)(d.a.Provider,{value:I,children:c})}))}));t.a=h},1678:function(e,t,a){"use strict";var r=a(41),n=a(1),o=a(2138),i=a(4),l=a(0),c=(a(1434),a(1451)),s=a(1387),u=a(1389),m=a(1443),p=a(2139),d=a(2140);function b(e){return Object(p.a)("MuiImageListItem",e)}var g=Object(d.a)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),v=a(1384);const h=["children","className","cols","component","rows","style"],f=Object(s.a)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(e,t)=>{const a=e.ownerState;return[{["& .".concat(g.img)]:t.img},t.root,t[a.variant]]}})(({ownerState:e})=>Object(n.a)({display:"inline-block",position:"relative",lineHeight:0},"standard"===e.variant&&{display:"flex",flexDirection:"column"},"woven"===e.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{["& .".concat(g.img)]:Object(n.a)({objectFit:"cover",width:"100%",height:"100%"},"standard"===e.variant&&{height:"auto",flexGrow:1})})),j=l.forwardRef((function(e,t){const a=Object(u.a)({props:e,name:"MuiImageListItem"}),s=a.children,p=a.className,d=a.cols,g=void 0===d?1:d,j=a.component,O=void 0===j?"li":j,E=a.rows,y=void 0===E?1:E,w=a.style,P=Object(r.a)(a,h),x=l.useContext(c.a),C=x.rowHeight,S=void 0===C?"auto":C,I=x.gap,M=x.variant;let k="auto";"woven"===M?k=void 0:"auto"!==S&&(k=S*y+I*(y-1));const A=Object(n.a)({},a,{cols:g,component:O,gap:I,rowHeight:S,rows:y,variant:M}),N=(e=>{const t=e.classes,a={root:["root",e.variant],img:["img"]};return Object(o.a)(a,b,t)})(A);return Object(v.jsx)(f,Object(n.a)({as:O,className:Object(i.default)(N.root,N[M],p),ref:t,style:Object(n.a)({height:k,gridColumnEnd:"masonry"!==M?"span ".concat(g):void 0,gridRowEnd:"masonry"!==M?"span ".concat(y):void 0,marginBottom:"masonry"===M?I:void 0},w),ownerState:A},P,{children:l.Children.map(s,e=>l.isValidElement(e)?"img"===e.type||Object(m.a)(e,["Image"])?l.cloneElement(e,{className:Object(i.default)(N.img,e.props.className)}):e:null)}))}));t.a=j},1679:function(e,t,a){"use strict";var r=a(41),n=a(1),o=a(2138),i=a(4),l=a(0),c=a(1387),s=a(1389),u=a(1393),m=a(2139),p=a(2140);function d(e){return Object(m.a)("MuiImageListItemBar",e)}Object(p.a)("MuiImageListItemBar",["root","positionBottom","positionTop","positionBelow","titleWrap","titleWrapBottom","titleWrapTop","titleWrapBelow","titleWrapActionPosLeft","titleWrapActionPosRight","title","subtitle","actionIcon","actionIconActionPosLeft","actionIconActionPosRight"]);var b=a(1384);const g=["actionIcon","actionPosition","className","subtitle","title","position"],v=Object(c.a)("div",{name:"MuiImageListItemBar",slot:"Root",overridesResolver:(e,t)=>{const a=e.ownerState;return[t.root,t["position".concat(Object(u.a)(a.position))]]}})(({theme:e,ownerState:t})=>Object(n.a)({position:"absolute",left:0,right:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},"bottom"===t.position&&{bottom:0},"top"===t.position&&{top:0},"below"===t.position&&{position:"relative",background:"transparent",alignItems:"normal"})),h=Object(c.a)("div",{name:"MuiImageListItemBar",slot:"TitleWrap",overridesResolver:(e,t)=>{const a=e.ownerState;return[t.titleWrap,t["titleWrap".concat(Object(u.a)(a.position))],a.actionIcon&&t["titleWrapActionPos".concat(Object(u.a)(a.actionPosition))]]}})(({theme:e,ownerState:t})=>Object(n.a)({flexGrow:1,padding:"12px 16px",color:e.palette.common.white,overflow:"hidden"},"below"===t.position&&{padding:"6px 0 12px",color:"inherit"},t.actionIcon&&"left"===t.actionPosition&&{paddingLeft:0},t.actionIcon&&"right"===t.actionPosition&&{paddingRight:0})),f=Object(c.a)("div",{name:"MuiImageListItemBar",slot:"Title",overridesResolver:(e,t)=>t.title})(({theme:e})=>({fontSize:e.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"})),j=Object(c.a)("div",{name:"MuiImageListItemBar",slot:"Subtitle",overridesResolver:(e,t)=>t.subtitle})(({theme:e})=>({fontSize:e.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"})),O=Object(c.a)("div",{name:"MuiImageListItemBar",slot:"ActionIcon",overridesResolver:(e,t)=>{const a=e.ownerState;return[t.actionIcon,t["actionIconActionPos".concat(Object(u.a)(a.actionPosition))]]}})(({ownerState:e})=>Object(n.a)({},"left"===e.actionPosition&&{order:-1})),E=l.forwardRef((function(e,t){const a=Object(s.a)({props:e,name:"MuiImageListItemBar"}),l=a.actionIcon,c=a.actionPosition,m=void 0===c?"right":c,p=a.className,E=a.subtitle,y=a.title,w=a.position,P=void 0===w?"bottom":w,x=Object(r.a)(a,g),C=Object(n.a)({},a,{position:P,actionPosition:m}),S=(e=>{const t=e.classes,a=e.position,r=e.actionIcon,n=e.actionPosition,i={root:["root","position".concat(Object(u.a)(a))],titleWrap:["titleWrap","titleWrap".concat(Object(u.a)(a)),r&&"titleWrapActionPos".concat(Object(u.a)(n))],title:["title"],subtitle:["subtitle"],actionIcon:["actionIcon","actionIconActionPos".concat(Object(u.a)(n))]};return Object(o.a)(i,d,t)})(C);return Object(b.jsxs)(v,Object(n.a)({ownerState:C,className:Object(i.default)(S.root,p),ref:t},x,{children:[Object(b.jsxs)(h,{ownerState:C,className:S.titleWrap,children:[Object(b.jsx)(f,{className:S.title,children:y}),E?Object(b.jsx)(j,{className:S.subtitle,children:E}):null]}),l?Object(b.jsx)(O,{ownerState:C,className:S.actionIcon,children:l}):null]}))}));t.a=E},2101:function(e,t,a){"use strict";var r=a(0),n=a(61);t.a=Object(n.a)(r.createElement("path",{d:"M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2z"}),"AddAPhotoOutlined")},2153:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),o=a(0),i=a.n(o),l=a(1469),c=a(133),s=a(1418),u=a.n(s),m=a(1403),p=a(1330),d=a(2117),b=a(449),g=a(2116),v=a(2115),h=a(454),f=a(2118),j=a(1380),O=a(357),E=a(355),y=a(356),w=a(1391),P=a(1420),x=(a(1421),a(76)),C=a(1374),S=a(1400),I=a(354),M=a(2114),k=a(625),A=a(2113),N=a(2112),R=a(1377),F=a(1404),L=a(1405),T=(a(1406),a(1397)),q=(a(1398),a(1407),a(1408),a(2133));function V(e){var t,a,r,n,o,l,c;const s=e.state,u=e.fonctions,m=e.queries,p=e.useforms.ville;return i.a.createElement("div",null,i.a.createElement(I.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(I.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(C.a,{theme:Object(x.a)()},i.a.createElement(j.a,null,i.a.createElement(M.a,{action:i.a.createElement(k.a,{"aria-label":"",onClick:u.AnnulerEnregistrement},"x"),title:"ajout"===s.pagestate.action?"Nouveau ville":"Mise \xe0 jour",subheader:""}),i.a.createElement(A.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",null,i.a.createElement(I.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(I.a,{item:!0},i.a.createElement(F.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=s.ville)||void 0===t?void 0:t.nom,control:p.control,error:p.errors.nom})),i.a.createElement(I.a,{item:!0},i.a.createElement(F.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=s.ville)||void 0===a?void 0:a.description,control:p.control,error:p.errors.description})),i.a.createElement(I.a,{item:!0},m.queryPays.isLoading?i.a.createElement(w.a,{message:"chargement des Pays"}):i.a.createElement(L.a,{id:"pay",name:"pay",label:"pay",table:"pay",control:p.control,options:m.queryPays.data.rows,error:p.errors.pay,defaultValue:null!==(r=null===(n=s.ville)||void 0===n||null===(o=n.Pay)||void 0===o?void 0:o.id)&&void 0!==r?r:"1",valeur:null!==(l=null===(c=s.ville)||void 0===c?void 0:c.pay)&&void 0!==l?l:""}))))),i.a.createElement(N.a,null,i.a.createElement(I.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(I.a,{item:!0},i.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:u.allerAPrecedent},"Pr\xe9c\xe9dent")),i.a.createElement(I.a,{item:!0},i.a.createElement(h.a,{color:"primary",variant:"contained",type:"submit",onClick:p.handleSubmit(u.allerAPhotos)},m.mutationAjout.isLoading||m.mutationMiseajour.isLoading?i.a.createElement(R.a,{color:"inherit"}):i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"pl-2 capitalize"},i.a.createElement(b.a,null,"Suivant")),i.a.createElement(q.a,null)))))))))))}var W=a(2128),D=a(2124),B=a(2125),z=a(1676),H=a(2136),G=a(1677),Q=a(1678),U=a(1679);function J(e){const t=e.state,a=e.fonctions,r=e.queries;e.useform,e.onSubmit;return i.a.createElement("div",null,i.a.createElement(I.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(I.a,{item:!0,lg:5,md:5,sm:12,xs:12},i.a.createElement(C.a,{theme:Object(x.a)()},i.a.createElement(j.a,null,i.a.createElement(M.a,{action:i.a.createElement(k.a,{"aria-label":"",onClick:a.AnnulerEnregistrement},"x"),title:"Ajouter une photo au ville",subheader:"".concat(t.ville.nom)}),i.a.createElement(A.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",null,i.a.createElement(I.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(I.a,{item:!0},i.a.createElement(T.a,{progress:t.progressphoto,acceptedFiles:[".png",".jpg",".jpeg",".gif"],onUpload:e=>a.uploaderPhoto(e),onSupprimer:()=>a.supprimerphoto(),titre:"Fichier photo .png(faire glisser ou cliquez ici pour charger)"}))))),i.a.createElement(N.a,null,i.a.createElement(I.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(I.a,{item:!0}),i.a.createElement(I.a,{item:!0},i.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:a.AnnulerEnregistrement},"Quiter"))))))),i.a.createElement(I.a,{item:!0,lg:7,md:7,sm:12,xs:12},i.a.createElement(j.a,null,i.a.createElement(M.a,{action:i.a.createElement(k.a,{"aria-label":"",onClick:a.AnnulerEnregistrement},"x"),title:"".concat(t.ville.nom),subheader:""}),i.a.createElement(A.a,{className:" px-6 pt-6 pb-6"},i.a.createElement(G.a,{sx:{width:540,height:600},cols:2,gap:8},t.ville.Media.map(e=>i.a.createElement(Q.a,{key:e.id,sx:{borderColor:"primary.main",border:.1}},i.a.createElement("img",{src:"".concat(x.c).concat(e.fichier),alt:e.titre}),i.a.createElement(U.a,{title:e.nom,actionIcon:i.a.createElement(k.a,{"aria-label":"",onClick:()=>a.supprimerImage(e)},i.a.createElement(H.a,{color:"error"}))}))))),i.a.createElement(N.a,null,i.a.createElement(I.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(I.a,{item:!0},i.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:a.allerAPrecedent},"Pr\xe9c\xe9dent")),i.a.createElement(I.a,{item:!0},i.a.createElement(h.a,{color:"primary",variant:"contained",type:"submit",onClick:a.handleClickSurTerminer},r.mutationAjout.isLoading||r.mutationMiseajour.isLoading?i.a.createElement(R.a,{color:"inherit"}):i.a.createElement(i.a.Fragment,null,i.a.createElement(q.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},i.a.createElement(b.a,null,"Terminer")))))))))))}var Y=a(1412);function K(e){const t=e.fonctions,a=e.queries,s=e.useforms,u=Object(r.a)(Object(r.a)({},e.state),{},{etape:0,progressphoto:0,etapes:[{index:0,label:"Edition du ville"},{index:1,label:"Photos du ville"}],complet:!1}),m=Object(o.useState)(u),p=Object(n.a)(m,2),d=p[0],g=p[1];let v=new l.a;t.allerAPhotos=e=>{delete e.Media,0===d.ville.id?a.mutationAjout.mutate(e):a.mutationMiseajour.mutate(Object(r.a)(Object(r.a)({},d.ville),e))},t.uploaderPhoto=e=>{e&&j.mutate({fichier:e,modele:"ville",objet:d.ville,champ:"photo",nom:"Photo ville",handleprogress:f,obj:{cle:"ville",valeur:d.ville.id}})},t.supprimerImage=e=>{console.log("suppression de l'image"),console.log(e),a.mutationSuppressionImage.mutate(e)};const f=e=>{var t=Math.round(100*e.loaded/e.total);g(Object(r.a)(Object(r.a)({},d),{},{progressphoto:t}))};t.supprimerphoto=()=>{console.log("Suppression du fichier")},t.allerAPrecedent=()=>{g(Object(r.a)(Object(r.a)({},d),{},{etape:0}))},a.mutationAjout=Object(c.useMutation)(v.ajoutVille,{onSuccess:e=>{g(Object(r.a)(Object(r.a)({},d),{},{ville:e,etape:1,alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{g(Object(r.a)(Object(r.a)({},d),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),a.mutationMiseajour=Object(c.useMutation)(v.miseajourVille,{onSuccess:e=>{g(Object(r.a)(Object(r.a)({},d),{},{ville:e,etape:1,alert:{message:"Mise \xe0 jour R\xe9ussie.",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{g(Object(r.a)(Object(r.a)({},d),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}});const j=Object(c.useMutation)(Y.a,{onSuccess:e=>{g(Object(r.a)(Object(r.a)({},d),{},{ville:Object(r.a)(Object(r.a)({},d.ville),{},{Media:e}),alert:{message:"Upload du fichier r\xe9ussi",open:!0,severity:"success",automaticClose:!1},progressphoto:100}))},onError:()=>{g(Object(r.a)(Object(r.a)({},d),{},{alert:{automaticClose:!1,message:"Echec de chargement du fichier sur le serveur",open:!0,severity:"error"}}))}});return a.mutationSuppressionImage=Object(c.useMutation)(v.suppressionImage,{onSuccess:e=>{g(Object(r.a)(Object(r.a)({},d),{},{ville:Object(r.a)(Object(r.a)({},d.ville),{},{Media:e}),dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{g(Object(r.a)(Object(r.a)({},d),{},{alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}}))},onSettled:()=>{}}),i.a.createElement(z.a,{sx:{width:"100%"}},i.a.createElement(W.a,{nonLinear:!0,activeStep:d.etape},d.etapes.map(e=>i.a.createElement(D.a,{key:e.label,completed:d.etape>e.index},i.a.createElement(B.a,{color:"inherit"},e.label)))),i.a.createElement("div",null,d.complet?i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{sx:{mt:2,mb:1}},"F\xe9licitation, toutes les \xe9tapes ont \xe9t\xe9 achev\xe9s."),i.a.createElement(z.a,{sx:{display:"flex",flexDirection:"row",pt:2}},i.a.createElement(z.a,{sx:{flex:"1 1 auto"}}),i.a.createElement(h.a,{onClick:t.fermerFormulaire},"Quitter"))):i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,{sx:{mt:2,mb:1,py:1}},0===d.etape?i.a.createElement(V,{state:d,fonctions:t,queries:a,useforms:s}):1===d.etape?i.a.createElement(J,{state:d,fonctions:t,queries:a,useforms:s,allerAPhotos:t.allerAPhotos}):i.a.createElement("span",null,"Autre")))))}var X=a(2175);var Z=e=>{var t,a;const n=e.state,o=e.fonctions,l=e.collonnes,c=e.queries,s=e.useforms;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(p.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:n.dialoguephoto.objet,fonctions:o,state:n},i.a.createElement(d.a,{id:""},i.a.createElement(b.a,{variant:"h6",color:"initial"},n.dialoguephoto.titre),i.a.createElement(X.a,{"aria-label":"",onClick:()=>{}},"supprimer")),i.a.createElement(g.a,null,i.a.createElement("img",{style:{width:500,height:400,"object-fit":"contain"},src:x.c+n.dialoguephoto.fichier,alt:n.dialoguephoto.objet,srcset:""})),i.a.createElement(v.a,null,i.a.createElement(h.a,{autoFocus:!0,onClick:()=>o.handleClickSurPhotoPrecedent()},"precedent"),i.a.createElement(h.a,{onClick:()=>o.handleClickSurPhotoSuivant(),autoFocus:!0},"suivant"))),i.a.createElement(O.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(E.a,{routeSegments:[{name:n.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(b.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?i.a.createElement(f.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(h.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouveau ville"),c.queryVilles.isLoading?i.a.createElement(w.a,{message:"Chargement des donn\xe9es...",type:"info"}):c.queryVilles.isError?i.a.createElement(w.a,{message:"Erreur lors du chargement des donn\xe9es::"+c.queryVilles.error,type:"error"}):i.a.createElement(P.a,{tag:"div",blocking:!1},i.a.createElement(C.a,{theme:Object(x.a)()},i.a.createElement(u.a,{title:n.titre,data:c.queryVilles.data.rows.map(e=>({ville:e})),columns:l,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:c.queryVilles.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(j.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(y.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.ville)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(K,{state:n,fonctions:o,queries:c,useforms:s}))},$=a(13),_=a(88),ee=a(2134),te=a(2135),ae=a(2101),re=a(2137),ne=a(344),oe=a(1671),ie=a(1382),le=a(1334),ce=a(1770),se=a(1378);Object(ne.a)(e=>{e.palette,Object($.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function ue(e){const t=Object(ne.a)(e=>{e.palette,Object($.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"ville",label:"id",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.id)||void 0===n?void 0:n.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"ville",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.nom)&&void 0!==r?r:""}}},{name:"ville",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=e.description)&&void 0!==r?r:""}}},{name:"ville",label:"pay",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n;return null!==(r=null===(n=e.Pay)||void 0===n?void 0:n.nom)&&void 0!==r?r:""}}},{name:"ville",label:"Photos",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,r)=>{var n;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex items-center"},i.a.createElement(oe.a,{onClick:()=>e.handleClickSurphoto(t)},i.a.createElement(h.a,null,i.a.createElement(ie.a,{variant:"rounded",className:"w-48 h-48",src:x.c+(null===(n=t.Media[0])||void 0===n?void 0:n.fichier)}))),i.a.createElement(oe.a,{onClick:()=>e.handleAjouterPhoto(t)},i.a.createElement(ae.a,null))),i.a.createElement("small",{className:"text-muted"},t.Media.length))}}},{name:"ville",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>i.a.createElement("div",null,i.a.createElement(_.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(le.a,{xsDown:!0},i.a.createElement(h.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(re.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(ee.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(ee.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(te.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(H.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(te.a,{color:"primary"})}]}})(e).map(t=>i.a.createElement(i.a.Fragment,null,i.a.createElement(ce.a,{onClick:()=>t.action(e),key:t.id,value:t.statut},t.icon,"   ",i.a.createElement("span",{className:"ml-5"},t.nom)),i.a.createElement(se.a,null)))))}}]}var me=a(1388),pe=a(1399),de=a(1663);t.default=()=>{const e={nom:"",description:"",pay:1,Media:[]},t={nouvelleville:!0,ville:e,ville1:null,titre:"Gestion des villes",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},a=Object(o.useState)(t),s=Object(n.a)(a,2),u=s[0],m=s[1];let p=new l.a,d=new de.a;const b=Object(c.useQueryClient)(),g=()=>{b.invalidateQueries("Villes"),m(Object(r.a)(Object(r.a)({},u),{},{titre:"Gestion des villes",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},v={handleFermetureAlerte:()=>{m(Object(r.a)(Object(r.a)({},u),{},{titre:"Gestion des villes",alert:Object(r.a)(Object(r.a)({},u.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},u.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{m(Object(r.a)(Object(r.a)({},u),{},{ville:e,titre:"Nouveau ville",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{m(Object(r.a)(Object(r.a)({},u),{},{alert:Object(r.a)(Object(r.a)({},u.alert),{},{open:!1})}))},AnnulerEnregistrement:g,fermerDialogueSuppression:()=>{m(Object(r.a)(Object(r.a)({},u),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{j.mutate(u.ville)},handleCloseDialoguephoto:()=>{m(Object(r.a)(Object(r.a)({},u),{},{dialoguephoto:Object(r.a)(Object(r.a)({},u.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{m(Object(r.a)(Object(r.a)({},u),{},{tableconfig:Object(r.a)(Object(r.a)({},u.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{m(Object(r.a)(Object(r.a)({},u),{},{tableconfig:Object(r.a)(Object(r.a)({},u.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{m(Object(r.a)(Object(r.a)({},u),{},{tableconfig:Object(r.a)(Object(r.a)({},u.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":m(Object(r.a)(Object(r.a)({},u),{},{titre:"Mise \xe0 jour ",ville:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":m(Object(r.a)(Object(r.a)({},u),{},{ville:e,dialogueSuppressionOuvert:!0}))}},handleClickSurphoto:e=>{var t;m(Object(r.a)(Object(r.a)({},u),{},{etape:1,ville:e,dialoguephoto:Object(r.a)(Object(r.a)({},u.dialoguephoto),{},{photoEnCours:0,open:!0,titre:"Photos 1/".concat(e.Media.length),fichier:null===(t=e.Media[0])||void 0===t?void 0:t.fichier,objet:e.titre})}))},handleAjouterPhoto:e=>{console.log("ville: ".concat(JSON.stringify(e))),m(Object(r.a)(Object(r.a)({},u),{},{etape:2,ville:e,pagestate:Object(r.a)(Object(r.a)({},u.pagestate),{},{openImage:!0,mode:"edition"})}))},handleClickSurPhotoSuivant:()=>{if(u.dialoguephoto.photoEnCours<u.ville.Media.length-1){const e=u.dialoguephoto.photoEnCours+1;m(Object(r.a)(Object(r.a)({},u),{},{dialoguephoto:Object(r.a)(Object(r.a)({},u.dialoguephoto),{},{photoEnCours:e,open:!0,titre:"Photos ".concat(e+1,"/").concat(u.ville.Media.length),fichier:u.ville.Media[e].fichier,objet:u.ville.titre})}))}},handleClickSurPhotoPrecedent:()=>{if(u.dialoguephoto.photoEnCours>0){const e=u.dialoguephoto.photoEnCours-1;console.log(u.dialoguephoto.photoEnCours),m(Object(r.a)(Object(r.a)({},u),{},{dialoguephoto:Object(r.a)(Object(r.a)({},u.dialoguephoto),{},{photoEnCours:e,open:!0,titre:"Photos ".concat(e+1,"/").concat(u.ville.Media.length),fichier:u.ville.Media[e].fichier,objet:u.ville.titre})}))}},handleClickSurTerminer:e=>{g()}},h=Object(c.useQuery)(["Villes",u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre],()=>p.getTouslesVilles(u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre),{keepPreviousData:!0}),f=Object(c.useQuery)(["Pays",u.tableconfig.page,u.tableconfig.rowsPerPage,u.tableconfig.recherche,u.tableconfig.filtre],()=>d.getTouslesPays(0,1e3,u.tableconfig.recherche,u.tableconfig.filtre),{keepPreviousData:!0}),j=Object(c.useMutation)(p.suppressionVille,{onSuccess:()=>{m(Object(r.a)(Object(r.a)({},u),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{m({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{b.invalidateQueries("Villes")}}),O={queryVilles:h,mutationSuppression:j,queryPays:f},E=ue(v),y=S.b().shape({nom:S.c().required("Le champs Nom est requis")}),w={ville:Object(me.c)({resolver:Object(pe.yupResolver)(y),defaultValues:{ville:u.ville}})};return i.a.createElement(Z,{state:u,fonctions:v,collonnes:E,queries:O,useforms:w,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},u.ville),e);void 0!==(null===(t=u.ville)||void 0===t?void 0:t.id)?O.mutationMiseajour.mutate(Object(r.a)({},a)):O.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);