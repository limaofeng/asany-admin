"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8001,267],{51253:function(U,f,a){a.d(f,{GP:function(){return m.Z},Hk:function(){return Y},xx:function(){return o.x}});var S=a(74958),m=a(5166),o=a(19260),E=a(68400),g=a.n(E),s=a(62435),r=a(93967),v=a.n(r),M=a(94589),y=a(97857),c=a.n(y),j=a(46027),D=a(35908),h=a(42687),C=a(2721),N=a(5574),T=a.n(N),O=a(96486),n=a(86074),b={aside:{minimize:!1,width:280}},I=s.createContext({state:b,dispatch:function(){}}),B=function(e){return e.AsideToggle="ASIDE_TOGGLE",e.AsideWidth="ASIDE_WIDTH",e}({});function w(e,t){switch(t.type){case"ASIDE_TOGGLE":return e.aside.minimize=!e.aside.minimize,c()({},e);case"ASIDE_WIDTH":return e.aside.width=t.payload,c()({},e);default:throw new Error}}var G=function(t){var i=(0,s.useReducer)(w,(0,O.cloneDeep)(b)),l=T()(i,2),d=l[0],u=l[1];return(0,n.jsx)(I.Provider,{value:{state:d,dispatch:u},children:t.children})},P=function(){return(0,s.useContext)(I)},$=a(65495);function z(e){var t=P(),i=t.dispatch,l=t.state.aside.minimize,d=(0,s.useCallback)(function(){i({type:B.AsideToggle})},[i]);return(0,n.jsx)(C.Button,{style:c()({marginBottom:"1.35rem",zIndex:105},e.style),onClick:d,activeColor:"primary",className:v()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",e.className,{active:l}),children:(0,n.jsx)(j.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}var H={"drawer drawer-start":{maxWidth:992}};function K(e){var t=e.className,i=e.header,l=e.children,d=e.collapsible,u=d===void 0?!0:d,x=e.width,p=x===void 0?280:x,A=(0,h.$Y)(),Q=P(),R=Q.dispatch;(0,s.useEffect)(function(){A.aside.width(p+100),R({type:B.AsideWidth,payload:p})},[A.aside,R,p]);var V=(0,D.CN)(H),X=(0,h.BK)(function(_){return _.aside.drawer});return(0,n.jsxs)("div",{className:v()("app-aside aside",t,V,{"drawer-on":X}),children:[(0,n.jsx)($.Z,{children:(0,n.jsx)(m.Z,{header:i,resizeable:!0,className:"app-sidebar",children:l})}),u&&(0,n.jsx)(z,{className:"start-100 end-0"})]})}K.Toggle=z;var Z=K,W,F=M.ZP.div(W||(W=g()([`
  --root-aside-width: `,`;
  --met-aside-width: `,`;
`])),function(e){return e.minimize?"100px":"".concat(e.width,"px")},function(e){return e.minimize?"100px":"".concat(e.width,"px")});function J(e){var t=e.children,i=e.className,l=P(),d=l.state.aside,u=d.minimize,x=d.width,p=(0,s.useCallback)(function(A){A.preventDefault()},[]);return(0,n.jsx)(F,{minimize:u,width:x,className:v()("micro-app-container page-full-content",i,{"aside-minimize":u}),onContextMenu:p,children:t})}function L(e){var t=e.children,i=e.className;return(0,n.jsx)(G,{children:(0,n.jsx)(J,{className:i,children:t})})}L.Sidebar=Z;var Y=L},92350:function(U,f,a){a.r(f);var S=a(5574),m=a.n(S),o=a(62435),E=a(1861),g=a(51253),s=a(2721),r=a(86074);function v(){var M=(0,o.useState)("draft"),y=m()(M,2),c=y[0],j=y[1],D=(0,o.useState)([]),h=m()(D,2),C=h[0],N=h[1],T=(0,o.useCallback)(function(n){j(n.key)},[]),O=(0,o.useCallback)(function(n){N(n)},[]);return(0,r.jsxs)(g.GP,{width:280,className:"app-sidebar app-contacts-sidebar",children:[(0,r.jsx)("div",{className:"mt-5 px-5 pt-5",children:(0,r.jsx)("h1",{className:"text-gray-800 fw-bold mb-6 mx-5",children:"\u7B26\u5408\u6027\u7533\u660E"})}),(0,r.jsx)(E.E,{className:"custom-scrollbar flex-column-fluid my-5 p-5",options:{scrollbars:{autoHide:"scroll"}},children:(0,r.jsxs)(s.Menu,{className:"menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0",onSelect:T,openKeys:C,selectedKeys:c?[c]:[],onOpenChange:O,accordion:!1,selectable:"AllMenu",fit:!0,children:[(0,r.jsx)(s.Menu.Item,{url:"/conformity",icon:"Duotune/abs051",children:"\u7B26\u5408\u6027\u7533\u660E\u7BA1\u7406"},"conformity"),(0,r.jsx)(s.Menu.Item,{url:"/drive/my-drive",icon:"Duotune/fil020",children:"\u6587\u4EF6\u7BA1\u7406"},"drive"),(0,r.jsx)(s.Menu.Section,{children:"\u5176\u4ED6"}),(0,r.jsx)(s.Menu.Item,{icon:"Duotune/abs008",children:"\u8BBE\u7F6E"},"settings")]})})]})}f.default=v}}]);