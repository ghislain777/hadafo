(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[22],{1490:function(e,t,a){"use strict";var n=a(17),l=a(13),r=a(0),o=a.n(r),c=a(623),i=a(2013),s=a(605),m=a(1660),d=a(451),u=a(1371),p=a(196),b=a(96),h=a(343),g=a(4),f=a(45),E=a(76),v=a(111);const x=Object(h.a)(e=>{e.palette,Object(l.a)(e,["palette"]);return{miniCart:{width:"var(--sidenav-width)","& .cart__topbar":{height:"var(--topbar-height)"},"& .mini-cart__item":{transition:"background 300ms ease","&:hover":{background:"rgba(0,0,0,0.01)"}}}}});let y=!1;t.a=function({container:e}){const t=Object(r.useState)(0),a=Object(n.a)(t,2),l=a[0],h=a[1],O=Object(r.useState)(!1),j=Object(n.a)(O,2),w=j[0],S=j[1],N=x(),k=Object(p.b)(),C=Object(f.g)(),z=Object(v.a)().utilisateur,I=Object(p.c)(e=>e.ecommerce).cartList,_=Object(E.a)().settings;y||(k(Object(b.j)(z.id)),y=!0);const D=()=>{S(!w)};return Object(r.useEffect)(()=>{let e=0;I.forEach(t=>{e+=t.price*t.amount}),h(e)},[I]),o.a.createElement(r.Fragment,null,o.a.createElement(c.a,{onClick:D},o.a.createElement(i.a,{color:"secondary",badgeContent:I.length},o.a.createElement(s.a,null,"shopping_cart"))),o.a.createElement(u.a,{theme:_.themes[_.activeTheme]},o.a.createElement(m.a,{container:e,variant:"temporary",anchor:"right",open:w,onClose:D,ModalProps:{keepMounted:!0}},o.a.createElement("div",{className:Object(g.default)("flex-column h-full",N.miniCart)},o.a.createElement("div",{className:"cart__topbar elevation-z6 flex items-center p-1 mb-2 pl-4"},o.a.createElement(s.a,{color:"primary"},"shopping_cart"),o.a.createElement("h5",{className:"ml-2 my-0 font-medium"},"Cart")),o.a.createElement("div",{className:"flex-grow overflow-auto"},I.map(e=>o.a.createElement("div",{key:e.id,className:"mini-cart__item flex items-center py-2 px-2"},o.a.createElement("div",{className:"flex flex-column mr-1"},o.a.createElement(c.a,{size:"small",onClick:()=>k(Object(b.k)(z.id,e.id,e.amount+1))},o.a.createElement(s.a,{className:"cursor-pointer"},"keyboard_arrow_up")),o.a.createElement(c.a,{disabled:!(e.amount-1),size:"small",onClick:()=>k(Object(b.k)(z.id,e.id,e.amount-1))},o.a.createElement(s.a,{className:"cursor-pointer"},"keyboard_arrow_down"))),o.a.createElement("div",{className:"mr-2"},o.a.createElement("img",{className:"w-48",src:e.imgUrl,alt:e.title})),o.a.createElement("div",{className:"mr-2 text-center flex-grow flex-column"},o.a.createElement("h6",{className:"m-0 mb-1 ellipsis w-120"},e.title),o.a.createElement("small",{className:"text-muted"},"$",e.price," x ",e.amount)),o.a.createElement(c.a,{size:"small",onClick:()=>k(Object(b.i)(z.id,e.id))},o.a.createElement(s.a,{fontSize:"small"},"clear"))))),o.a.createElement(d.a,{className:"w-full border-radius-0",variant:"contained",color:"primary",onClick:()=>{l>0&&(C.push("/ecommerce/checkout"),S(!1))}},"Checkout ($",l.toFixed(2),")")))))}},1565:function(e,t,a){"use strict";var n=a(13),l=a(0),r=a.n(l),o=a(343),c=a(51),i=a(1371),s=a(2012),m=a(1671),d=a(4),u=a(76);const p=Object(o.a)(e=>{e.palette,Object(n.a)(e,["palette"]);return{footer:{minHeight:"var(--topbar-height)","@media (max-width: 499px)":{display:"table",width:"100%",minHeight:"auto",padding:"1rem 0","& .container":{flexDirection:"column !important","& a":{margin:"0 0 16px !important"}}}},appbar:{zIndex:96}}});t.a=()=>{const e=p(),t=Object(c.a)(),a=Object(u.a)().settings,n=a.themes[a.footer.theme]||t;return r.a.createElement(i.a,{theme:n},r.a.createElement(s.a,{color:"primary",position:"static",className:e.appbar},r.a.createElement(m.a,{className:Object(d.default)("flex items-center",e.footer)},r.a.createElement("div",{className:"flex items-center container w-full"},r.a.createElement("span",{className:"m-auto"}),r.a.createElement("p",{className:"m-0"},"Design and Developement:",r.a.createElement("a",{href:"http://www.zentechnologies.net"}," Zen Techinologies"))))))}},1566:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(1371),o=a(51),c=a(76);t.a=({children:e})=>{const t=Object(o.a)(),a=Object(c.a)().settings,n=a.themes[a.layout1Settings.leftSidebar.theme]||t;return l.a.createElement(r.a,{theme:n},e)}},1567:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(45),l=a(1),r=a(0),o=a.n(r);function c(e,t,a){return void 0===t&&(t={}),void 0===a&&(a={}),e?o.a.createElement(n.d,a,e.map((function(e,a){return o.a.createElement(n.b,{key:e.key||a,path:e.path,exact:e.exact,strict:e.strict,render:function(a){return e.render?e.render(Object(l.a)({},a,{},t,{route:e})):o.a.createElement(e.component,Object(l.a)({},a,t,{route:e}))}})}))):null}},1569:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(13),o=a(623),c=a(605),i=a(2021),s=a(343),m=a(4),d=a(76);const u=Object(s.a)(e=>{e.palette,Object(r.a)(e,["palette"]);return{toggle:{position:"fixed",right:"30px",bottom:"50px",zIndex:99,transition:"all 0.15s ease","&.open":{right:"10px"}}}});var p=()=>{const e=u(),t=Object(d.a)(),a=t.settings,n=t.updateSettings,r=()=>{n({secondarySidebar:{open:!a.secondarySidebar.open}})};return l.a.createElement("div",{className:Object(m.default)({[e.toggle]:!0,open:a.secondarySidebar.open})},a.secondarySidebar.open&&l.a.createElement(o.a,{onClick:r,size:"small","aria-label":"toggle"},l.a.createElement(c.a,null,"close")),!a.secondarySidebar.open&&l.a.createElement(i.a,{color:"primary","aria-label":"expand",className:"",onClick:r},l.a.createElement(c.a,null,"settings")))},b=a(3),h=a(17),g=a(1673),f=a(1660),E=a(451),v=a(1377),x=a(2023),y=a(361),O=a.n(y),j=a(2013),w=a(8);var S=Object(w.a)(e=>({badge:{top:"0",right:"0",height:"32px",width:"32px",borderRadius:"50%"}}))(j.a),N=a(1371);const k=Object(s.a)(e=>{let t=e.palette;Object(r.a)(e,["palette"]);return{label:{color:t.secondary.main,backgroundColor:t.primary.dark,fontWeight:700,transform:"rotate(90deg)",marginBottom:"2.5rem",padding:".25rem .5rem",borderRadius:"4px",cursor:"pointer",letterSpacing:"1.5px",fontSize:"1rem","&:hover, &.open":{backgroundColor:t.secondary.main,color:t.secondary.contrastText}},helpText:{margin:"0px .5rem 1rem"},maxCustomizer:{position:"fixed",top:0,right:0,zIndex:50},customizerCloseButton:{position:"absolute",right:8,top:8},layoutBox:{"&:hover":{"& .layout-name":{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",background:"rgba(0,0,0,0.3)",zIndex:12}}}}}),C=[{name:"Light Sidebar",thumbnail:"/assets/images/screenshots/layout1-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"full",theme:"whiteBlue",bgOpacity:.98},topbar:{theme:"blueDark",fixed:!0}},footer:{theme:"slateDark1"}}},{name:"Compact Sidebar",thumbnail:"/assets/images/screenshots/layout5-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"compact",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"whiteBlue",fixed:!0}}}},{name:"Dark Sidebar",thumbnail:"/assets/images/screenshots/layout1-blue-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"blue",layout1Settings:{leftSidebar:{mode:"full",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"blueDark",fixed:!0}}}},{name:"Dark Theme",thumbnail:"/assets/images/screenshots/layout3-customizer.png",isPro:!1,options:{activeLayout:"layout1",activeTheme:"purpleDark1",layout1Settings:{leftSidebar:{mode:"full",theme:"slateDark1",bgOpacity:.92},topbar:{theme:"purpleDark1",fixed:!0}},footer:{theme:"slateDark1"}}},{name:"Horizontal Navigation",thumbnail:"/assets/images/screenshots/layout4-customizer.png",isPro:!0,options:{activeLayout:"layout2",activeTheme:"purple1",layout2Settings:{mode:"full"},footer:{theme:"slateDark1"}}}];var z=e=>{const t=Object(n.useState)(!1),a=Object(h.a)(t,2),r=a[0],i=a[1],s=Object(n.useState)(0),u=Object(h.a)(s,2),p=u[0],y=u[1],j=k(),w=Object(d.a)(),z=w.settings,I=w.updateSettings,_=()=>{i(!r)},D=e=>{y(e)};let R=Object(b.a)({},z.themes[z.activeTheme]);return l.a.createElement(n.Fragment,null,l.a.createElement(g.a,{title:"Theme Settings",placement:"left"},l.a.createElement("span",{className:Object(m.default)({[j.label]:!0,open:r}),onClick:_},"DEMOS")),l.a.createElement(N.a,{theme:R},l.a.createElement(f.a,{anchor:"right",open:r,variant:"temporary",onClose:_,ModalProps:{keepMounted:!0}},l.a.createElement("div",{className:Object(m.default)("flex-column w-320 pb-8 elevation-z12 h-full-screen bg-default",j.maxCustomizer)},l.a.createElement("div",{className:"flex items-center px-5 py-4 mb-4 min-h-64 elevation-z6"},l.a.createElement(c.a,{color:"primary"},"settings"),l.a.createElement("h5",{className:"mb-0 ml-2"},"Theme Settings"),l.a.createElement(o.a,{onClick:_,className:j.customizerCloseButton},l.a.createElement(c.a,null,"close"))),l.a.createElement("div",{className:"px-6 mb-4 flex"},l.a.createElement(E.a,{variant:"outlined",color:0===p?"secondary":"primary",onClick:()=>D(0),className:"mr-4"},"Demos"),l.a.createElement(E.a,{variant:"outlined",color:1===p?"secondary":"primary",onClick:()=>D(1)},"Settings")),l.a.createElement(O.a,{options:{suppressScrollX:!0},className:"px-4"},0===p&&l.a.createElement("div",{className:"mb-8 mx-2"},l.a.createElement("div",{className:"text-muted"},"Layouts"),l.a.createElement("div",{className:"flex-column"},C.map(e=>l.a.createElement(S,{color:"secondary",className:Object(m.default)("w-full my-3 max-h-152 cursor-pointer",j.layoutBox),badgeContent:"Pro",invisible:!e.isPro,key:e.name},l.a.createElement(v.a,{className:"relative",onClick:()=>I(e.options),elevation:4},l.a.createElement("div",{className:"layout-name hidden"},l.a.createElement(E.a,{variant:"contained",color:"secondary"},e.name)),l.a.createElement("img",{className:"w-full",src:e.thumbnail,alt:e.name})))))),1===p&&l.a.createElement("div",null,l.a.createElement("div",{className:j.helpText},"We used React context API to control layout. Check out the"," ",l.a.createElement(x.a,{href:"http://demos.ui-lib.com/matx-react-doc/layout.html",target:"_blank"},"Documentation"))))))))},I=a(1490),_=a(87);const D=Object(s.a)(e=>{let t=e.palette;return{root:{position:"fixed",height:"100vh",width:e=>e.width,right:0,bottom:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:Object(r.a)(e,["palette"]).shadows[8],backgroundColor:t.primary.main,zIndex:98,transition:"all 0.15s ease"},"@global":{"@media screen and (min-width: 767px)":{".content-wrap, .layout2.layout-contained, .layout2.layout-full":{marginRight:e=>e.width},".matx-customizer":{right:e=>e.width}},"@media screen and (max-width: 959px)":{".toolbar-menu-wrap .menu-area":{width:e=>"calc(100% - ".concat(e.width,")")}}}}});var R=()=>{const e=D({width:"50px"});return l.a.createElement("div",{className:Object(m.default)("secondary-sidebar",e.root)},l.a.createElement("span",{className:"m-auto"}),l.a.createElement(z,null),l.a.createElement(I.a,null),l.a.createElement(_.b,{icon:l.a.createElement(o.a,{className:"my-3",size:"small"},l.a.createElement(c.a,null,"comments"))},l.a.createElement(_.c,null)),l.a.createElement("span",{className:"m-auto"}))};var T=({theme:e,classes:t,children:a,open:n})=>l.a.createElement(N.a,{theme:e},a);t.a=()=>{const e=Object(d.a)().settings,t=e.themes[e.secondarySidebar.theme];return l.a.createElement(T,{theme:t},e.secondarySidebar.open&&l.a.createElement(R,null),l.a.createElement(p,null))}},1570:function(e,t,a){"use strict";var n=a(3),l=a(13),r=a(0),o=a.n(r),c=a(343),i=a(51),s=a(361),m=a.n(s),d=(a(367),a(87)),u=a(4),p=a(76);a(111),a(371);const b=Object(c.a)(e=>{e.palette;return{scrollable:{paddingLeft:20,paddingRight:20},sidenavMobileOverlay:{position:"fixed",top:0,left:0,bottom:0,right:0,width:"100vw",background:"rgba(0, 0, 0, 0.54)",zIndex:-1,[Object(l.a)(e,["palette"]).breakpoints.up("lg")]:{display:"none"}}}});var h=({children:e})=>{const t=b(),a=Object(p.a)(),l=a.settings,c=a.updateSettings,i=JSON.parse(sessionStorage.getItem("session")).navigation;return o.a.createElement(r.Fragment,null,o.a.createElement(m.a,{options:{suppressScrollX:!0},className:Object(u.default)("relative px-4",t.scrollable)},e,o.a.createElement(d.o,{items:i})),o.a.createElement("div",{onClick:()=>(e=>{let t=l.activeLayout+"Settings",a=l[t];c(Object(n.a)(Object(n.a)({},l),{},{[t]:Object(n.a)(Object(n.a)({},a),{},{leftSidebar:Object(n.a)(Object(n.a)({},a.leftSidebar),e)})}))})({mode:"close"}),className:t.sidenavMobileOverlay}))},g=a(620);const f=Object(c.a)(e=>{e.palette;let t=Object(l.a)(e,["palette"]);return{brand:{padding:"20px 18px 20px 24px"},hideOnCompact:{display:"none"},large:{width:t.spacing(15),height:t.spacing(7)},logo:{margin:t.spacing(0),width:200,height:100,display:"flex",alignItems:"left","& span":{fontSize:26,lineHeight:1.3,fontWeight:100}}}});var E=({children:e})=>{const t=f(),a=Object(p.a)().settings.layout1Settings.leftSidebar.mode;return o.a.createElement("div",{className:Object(u.default)("flex items-center justify-between",t.brand)},o.a.createElement("div",{className:"flex items-center"},o.a.createElement("div",{className:t.logo},o.a.createElement(g.a,null)),o.a.createElement("span",{className:Object(u.default)({"text-18 ml-2 font-medium sidenavHoverShow":!0,[t.hideOnCompact]:"compact"===a})})),o.a.createElement("div",{className:Object(u.default)({sidenavHoverShow:!0,[t.hideOnCompact]:"compact"===a})},e||null))},v=a(1331),x=a(2031),y=a(126);const O=Object(c.a)(e=>{let t=e.palette,a=Object(l.a)(e,["palette"]);return{sidenav:({width:e,primaryRGB:n,bgImgURL:l})=>({position:"fixed",top:0,left:0,height:"100vh",width:e,boxShadow:a.shadows[8],backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"cover",zIndex:111,overflow:"hidden",color:t.text.primary,transition:"all 250ms ease-in-out",backgroundImage:"linear-gradient(to bottom, rgba(".concat(n,", 0.96), rgba(").concat(n,", 0.96)), url(").concat(l,")"),"&:hover":{width:"var(--sidenav-width)","& .sidenavHoverShow":{display:"block"},"& .compactNavItem":{width:"100%",maxWidth:"100%","& .nav-bullet":{display:"block"},"& .nav-bullet-text":{display:"none"}}}}),hideOnCompact:{display:"none"},userInfo:{}}});t.a=o.a.memo(()=>{const e=Object(i.a)(),t=Object(p.a)(),a=t.settings,l=t.updateSettings,r=a.layout1Settings.leftSidebar,c=r.mode,s=Object(y.b)(e.palette.primary.main),m=O(Object(n.a)(Object(n.a)({},r),{},{width:(()=>{switch(c){case"compact":return"var(--sidenav-compact-width)";default:return"var(--sidenav-width)"}})(),primaryRGB:s}));return o.a.createElement("div",{className:m.sidenav},o.a.createElement("div",{className:"flex-column relative h-full"},o.a.createElement(E,null,o.a.createElement(v.a,{smDown:!0},o.a.createElement(x.a,{onChange:()=>{var e;e={mode:"compact"===c?"full":"compact"},l({layout1Settings:{leftSidebar:Object(n.a)({},e)}})},checked:"full"!==r.mode,color:"secondary",size:"small"}))),o.a.createElement(h,null)))})},2059:function(e,t,a){"use strict";a.r(t);var n=a(13),l=a(0),r=a.n(l),o=a(1371),c=a(1315),i=a(361),s=a.n(i),m=a(1567),d=a(3),u=a(623),p=a(605),b=a(1331),h=a(1379),g=a(1663),f=a(87),E=(a(17),a(2013),a(1660),a(1377),a(451),a(46)),v=(a(126),a(343)),x=a(4),y=a(76);a(20),a(39),a(23);Object(l.createContext)({notifications:[],deleteNotification:()=>{},clearNotifications:()=>{},getNotifications:()=>{},createNotification:()=>{}});Object(v.a)(e=>{e.palette,Object(n.a)(e,["palette"]);return{notification:{width:"var(--sidenav-width)","& .notification__topbar":{height:"var(--topbar-height)"}},notificationCard:{"&:hover":{"& .delete-button":{cursor:"pointer",display:"unset",right:0,marginTop:6,top:0,zIndex:2},"& .card__topbar__time":{display:"none"}},"& .delete-button":{display:"none",position:"absolute",right:0,marginTop:9},"& .card__topbar__button":{borderRadius:15,opacity:.9}}}});a(1490);var O=a(51),j=a(111),w=a(626);const S=Object(v.a)(e=>{let t=e.palette,a=Object(n.a)(e,["palette"]);return{logo:{margin:a.spacing(3),width:a.spacing(20),height:a.spacing(15),display:"flex",alignItems:"center","& span":{fontSize:26,lineHeight:1.3,fontWeight:800}},topbar:{top:0,zIndex:96,transition:"all 0.3s ease",background:"linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))","& .topbar-hold":{backgroundColor:t.primary.main,height:80,paddingLeft:18,paddingRight:20,[a.breakpoints.down("sm")]:{paddingLeft:16,paddingRight:16},[a.breakpoints.down("xs")]:{paddingLeft:14,paddingRight:16}},"& .fixed":{boxShadow:a.shadows[8],height:64}},userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});var N=r.a.memo(()=>{var e,t,a,n;const l=Object(O.a)(),o=S(),i=Object(y.a)(),s=i.settings,m=i.updateSettings,v=Object(j.a)().logout,N=JSON.parse(sessionStorage.getItem("session")).utilisateur,k=Object(c.a)(l.breakpoints.down("md")),C=null===s||void 0===s||null===(e=s.layout1Settings)||void 0===e||null===(t=e.topbar)||void 0===t?void 0:t.fixed;return r.a.createElement("div",{className:o.topbar},r.a.createElement("div",{className:Object(x.default)({"topbar-hold":!0,fixed:C})},r.a.createElement("div",{className:"flex justify-between items-center h-full"},r.a.createElement("div",{className:"flex"},r.a.createElement(u.a,{onClick:()=>{let e,t=s.layout1Settings;var a;e=k?"close"===t.leftSidebar.mode?"mobile":"close":"full"===t.leftSidebar.mode?"close":"full",a={mode:e},m({layout1Settings:{leftSidebar:Object(d.a)({},a)}})},className:"hide-on-pc"},r.a.createElement(p.a,null,"menu")),r.a.createElement("div",{className:o.logo},r.a.createElement(w.a,null))),r.a.createElement("div",{className:"flex items-center"},r.a.createElement(f.j,{menuButton:r.a.createElement("div",{className:o.userMenu},r.a.createElement(b.a,{xsDown:!0},r.a.createElement("span",null,"Bonjour ",r.a.createElement("strong",null,N.nom," ",N.prenom)," (",null!==(a=null===(n=N.Role)||void 0===n?void 0:n.nom)&&void 0!==a?a:"",")")),r.a.createElement(h.a,{className:"cursor-pointer",src:N.avatar}))},r.a.createElement(g.a,null,r.a.createElement(E.a,{className:o.menuItem,to:"/"},r.a.createElement(p.a,null," dashboard "),r.a.createElement("span",{className:"pl-4"}," Dashboard "))),r.a.createElement(g.a,null,r.a.createElement(E.a,{className:o.menuItem,to:"/page-layouts/user-profile"},r.a.createElement(p.a,null," person "),r.a.createElement("span",{className:"pl-4"}," Profile "))),r.a.createElement(g.a,{onClick:()=>{console.log("changement du mot de passe")},className:o.menuItem},r.a.createElement(E.a,{to:"/session/passwordchange"},r.a.createElement(p.a,null," lock "),r.a.createElement("span",{className:"pl-4"}," Changer le mot de passe "))),r.a.createElement(g.a,null,r.a.createElement(E.a,{to:"/",onClick:v,className:o.menuItem},r.a.createElement(p.a,null," power_settings_new "),r.a.createElement("span",{className:"pl-4"}," D\xe9connexion "))))))))}),k=a(1570),C=a(1565),z=a(1569),I=a(369),_=a(1566);const D=Object(v.a)(e=>{e.palette,Object(n.a)(e,["palette"]);return{contentWrap:({width:e,secondarySidebar:t})=>({verticalAlign:"top",marginLeft:e,transition:"all 0.3s ease",marginRight:t.open?50:0}),topbar:{top:0,zIndex:96,background:"linear-gradient(180deg, rgba(255, 255, 255, 0.95) 44%, rgba(247, 247, 247, 0.4) 50%, rgba(255, 255, 255, 0))",transition:"all 0.3s ease"}}});t.default=r.a.memo(()=>{const e=Object(y.a)(),t=e.settings,a=e.updateSettings,n=t.layout1Settings,i=t.secondarySidebar,d=n.leftSidebar,u=d.mode,p=d.show,b=Object(l.useContext)(I.a).routes,h=(()=>{switch(u){case"full":return"var(--sidenav-width)";case"compact":return"var(--sidenav-compact-width)";default:return"0px"}})();let g=D({width:h,secondarySidebar:i});const E=Object(O.a)(),v=Object(c.a)(E.breakpoints.down("md")),j=Object(l.useRef)({isMdScreen:v,settings:t}),w=t.themes[n.topbar.theme],S="theme-".concat(E.palette.type," flex");return Object(l.useEffect)(()=>{let e=j.current.settings,t=e.layout1Settings.leftSidebar.mode;if(e.layout1Settings.leftSidebar.show){a({layout1Settings:{leftSidebar:{mode:v?"close":t}}})}},[v]),r.a.createElement("div",{className:Object(x.default)("bg-default",S)},p&&"close"!==u&&r.a.createElement(_.a,null,r.a.createElement(k.a,null)),r.a.createElement("div",{className:Object(x.default)("flex-grow flex-column relative overflow-hidden h-full-screen",g.contentWrap)},n.topbar.show&&n.topbar.fixed&&r.a.createElement(o.a,{theme:w},r.a.createElement(N,{fixed:!0,className:"elevation-z8"})),t.perfectScrollbar&&r.a.createElement(s.a,{className:"flex-grow flex-column relative h-full"},n.topbar.show&&!n.topbar.fixed&&r.a.createElement(o.a,{theme:w},r.a.createElement(N,null)),r.a.createElement("div",{className:"relative flex-grow"},r.a.createElement(f.l,null,Object(m.a)(b))),t.footer.show&&!t.footer.fixed&&r.a.createElement(C.a,null)),!t.perfectScrollbar&&r.a.createElement("div",{className:"flex-grow flex-column relative h-full scroll-y"},n.topbar.show&&!n.topbar.fixed&&r.a.createElement(o.a,{theme:w},r.a.createElement(N,null)),r.a.createElement("div",{className:"relative flex-grow"},r.a.createElement(f.l,null,Object(m.a)(b))),t.footer.show&&!t.footer.fixed&&r.a.createElement(C.a,null)),t.footer.show&&t.footer.fixed&&r.a.createElement(C.a,null)),t.secondarySidebar.show&&r.a.createElement(z.a,null))})}}]);