"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8127,3269,267],{78277:function(G,p,e){e.d(p,{Z:function(){return f}});var S=e(62435),g=e(12845),E=e(75981),D=e(90875);function d(){var t=(0,g.useModel)("tenant"),m=t.state,a=t.reload,u=(0,g.useApp)(),c=(0,D.Z)(),x=c.data;return(0,S.useEffect)(function(){m||(u&&u.type===E.vQ.Native?(console.log("useCurrentTenant By Native"),a(u.clientId)):x&&u.type===E.vQ.SaaS&&(console.log("useCurrentTenant By SaaS"),a(u.clientId)))},[u,x]),{tenant:m,loading:!1,error:""}}var s=d;function T(t){var m=s(),a=m.tenant,u=a==null?void 0:a.modules.find(function(c){return c.key===t});return[u]}var f=T},51253:function(G,p,e){e.d(p,{GP:function(){return g.Z},Hk:function(){return J},xx:function(){return E.x}});var S=e(74958),g=e(5166),E=e(19260),D=e(68400),d=e.n(D),s=e(62435),T=e(93967),f=e.n(T),t=e(94589),m=e(97857),a=e.n(m),u=e(46027),c=e(35908),x=e(42687),r=e(2721),v=e(5574),h=e.n(v),I=e(96486),i=e(86074),B={aside:{minimize:!1,width:280}},A=s.createContext({state:B,dispatch:function(){}}),P=function(n){return n.AsideToggle="ASIDE_TOGGLE",n.AsideWidth="ASIDE_WIDTH",n}({});function C(n,l){switch(l.type){case"ASIDE_TOGGLE":return n.aside.minimize=!n.aside.minimize,a()({},n);case"ASIDE_WIDTH":return n.aside.width=l.payload,a()({},n);default:throw new Error}}var o=function(l){var y=(0,s.useReducer)(C,(0,I.cloneDeep)(B)),j=h()(y,2),M=j[0],O=j[1];return(0,i.jsx)(A.Provider,{value:{state:M,dispatch:O},children:l.children})},b=function(){return(0,s.useContext)(A)},N=e(65495);function R(n){var l=b(),y=l.dispatch,j=l.state.aside.minimize,M=(0,s.useCallback)(function(){y({type:P.AsideToggle})},[y]);return(0,i.jsx)(r.Button,{style:a()({marginBottom:"1.35rem",zIndex:105},n.style),onClick:M,activeColor:"primary",className:f()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",n.className,{active:j}),children:(0,i.jsx)(u.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}var z={"drawer drawer-start":{maxWidth:992}};function K(n){var l=n.className,y=n.header,j=n.children,M=n.collapsible,O=M===void 0?!0:M,F=n.width,W=F===void 0?280:F,Z=(0,x.$Y)(),Y=b(),Q=Y.dispatch;(0,s.useEffect)(function(){Z.aside.width(W+100),Q({type:P.AsideWidth,payload:W})},[Z.aside,Q,W]);var V=(0,c.CN)(z),w=(0,x.BK)(function(_){return _.aside.drawer});return(0,i.jsxs)("div",{className:f()("app-aside aside",l,V,{"drawer-on":w}),children:[(0,i.jsx)(N.Z,{children:(0,i.jsx)(g.Z,{header:y,resizeable:!0,className:"app-sidebar",children:j})}),O&&(0,i.jsx)(R,{className:"start-100 end-0"})]})}K.Toggle=R;var U=K,L,$=t.ZP.div(L||(L=d()([`
  --root-aside-width: `,`;
  --met-aside-width: `,`;
`])),function(n){return n.minimize?"100px":"".concat(n.width,"px")},function(n){return n.minimize?"100px":"".concat(n.width,"px")});function X(n){var l=n.children,y=n.className,j=b(),M=j.state.aside,O=M.minimize,F=M.width,W=(0,s.useCallback)(function(Z){Z.preventDefault()},[]);return(0,i.jsx)($,{minimize:O,width:F,className:f()("micro-app-container page-full-content",y,{"aside-minimize":O}),onContextMenu:W,children:l})}function H(n){var l=n.children,y=n.className;return(0,i.jsx)(o,{children:(0,i.jsx)(X,{className:y,children:l})})}H.Sidebar=U;var J=H},42141:function(G,p,e){e.r(p),e.d(p,{default:function(){return x}});var S=e(5574),g=e.n(S),E=e(97857),D=e.n(E),d=e(62435),s=e(46027),T=e(1861),f=e(51253),t=e(2721),m=e(12708),a=e(86074);function u(r){return r.children&&r.children.length?(0,a.jsx)(t.Menu.SubMenu,{url:"/cms/categories/".concat(r.id,"/articles"),bullet:!0,icon:r.icon,title:r.name,children:(r.children||[]).map(u)},r.id):(0,a.jsx)(t.Menu.Item,{url:"/cms/categories/".concat(r.id,"/articles"),bullet:!0,icon:r.icon,children:r.name},r.id)}function c(r){var v=r.menuKey,h=(0,d.useMemo)(function(){return!r.categories||!r.categories.length?[]:(0,m.G_)(r.categories.map(function(o){return D()({},o)}),{idKey:"id",childrenKey:"children",pidKey:"parent.id",sort:function(b,N){return b.index-N.index}})},[r.categories]),I=(0,d.useState)(h.map(function(o){return o.id})),i=g()(I,2),B=i[0],A=i[1],P=(0,d.useCallback)(function(o){A(o)},[]);(0,d.useEffect)(function(){A(h.map(function(o){return o.id}))},[h.map(function(o){return o.id}).join(",")]);var C=(0,d.useMemo)(function(){switch(v.key){case"category":return v.params.cid;default:return v.key}},[v]);return console.log("selectedKey",C,v),(0,a.jsxs)(f.GP,{children:[(0,a.jsx)("div",{className:"mt-5 px-5 pt-5",children:(0,a.jsx)("h1",{className:"text-gray-800 fw-bold mb-6 mx-5",children:"\u5185\u5BB9\u7BA1\u7406"})}),(0,a.jsx)(T.E,{className:"custom-scrollbar flex-column-fluid px-10 mb-5",options:{scrollbars:{autoHide:"scroll"}},children:(0,a.jsxs)(t.Menu,{className:"cms-menu-sider menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0",openKeys:B,selectedKeys:C?[C]:[],onOpenChange:P,accordion:!1,selectable:"AllMenu",fit:!0,children:[(0,a.jsx)(t.Menu.Section,{children:"\u6211\u7684"}),(0,a.jsx)(t.Menu.Item,{url:"/cms/my/drafts",icon:"Duotune/art008",children:"\u8349\u7A3F\u7BB1"},"draft"),(0,a.jsx)(t.Menu.Item,{url:"/cms/my/published",icon:"Duotune/art006",children:"\u5DF2\u53D1\u5E03"},"published"),(0,a.jsxs)(t.Menu.Section,{className:"d-flex align-items-center",contentClassName:"w-100",sectionClassName:"w-100 d-flex align-items-center justify-content-between",children:[(0,a.jsxs)("span",{className:"menu-section text-muted text-uppercase fs-8 ls-1 flex-row-fluid",children:["\u4FE1\u606F\u680F\u76EE ",r.loading&&" - loading..."]}),(0,a.jsx)(t.Button,{icon:(0,a.jsx)(s.ZP,{style:{marginRight:".2rem"},name:"Duotune/arr087",className:""}),size:"sm",variant:"white",className:"py-1 px-3 me-n4",children:"\u65B0\u589E"})]}),h.map(u),(0,a.jsx)(t.Menu.Section,{children:"\u5176\u4ED6"}),(0,a.jsx)(t.Menu.Item,{icon:"Duotune/elc001",children:"\u5927\u56FE\u7BA1\u7406"},"banner"),(0,a.jsx)(t.Menu.Item,{url:"/cms/authors",icon:"Duotune/cod002",children:"\u4F5C\u8005"},"authors"),(0,a.jsx)(t.Menu.Item,{icon:"Duotune/art002",children:"\u6807\u7B7E"},"tags"),(0,a.jsx)(t.Menu.Section,{children:"\u5168\u5C40\u8BBE\u7F6E"}),(0,a.jsx)(t.Menu.Item,{icon:"Duotune/abs008",children:"\u8BBE\u7F6E"},"settings")]})})]})}var x=c},66172:function(G,p,e){e.r(p);var S=e(19632),g=e.n(S),E=e(5574),D=e.n(E),d=e(62435),s=e(96974),T=e(78277),f=e(51253),t=e(42141),m=e(42646),a=e(86074);function u(){var c=(0,s.TH)(),x=(0,T.Z)("cms"),r=D()(x,1),v=r[0],h=v==null?void 0:v.values.rootCategory,I=(0,m.WP)({fetchPolicy:"cache-and-network",variables:{id:h},skip:!h}),i=I.data,B=i===void 0?{}:i,A=B.category,P=(0,m.Se)({fetchPolicy:"cache-and-network",variables:{id:h},skip:!h}),C=P.data,o=C===void 0?{categories:[]}:C,b=P.loading,N=(0,d.useMemo)(function(){var K=(0,s.LX)({path:"/cms/my/drafts",end:!1},c.pathname);if(K)return{key:"draft",params:K.params};var U=(0,s.LX)({path:"/cms/my/published",end:!1},c.pathname);if(U)return{key:"published",params:U.params};var L=(0,s.LX)({path:"/cms/categories/:cid/articles",end:!1},c.pathname);return L?{key:"category",params:L.params}:{key:"unknown",params:{}}},[c.pathname]),R=(0,d.useMemo)(function(){switch(N.key){case"draft":return[{title:"\u6211\u7684\u8349\u7A3F",url:"/cms/my/drafts"}];case"published":return[{title:"\u6211\u7684\u6587\u7AE0",url:"/cms/my/published"}];case"category":return[{title:"\u680F\u76EE"}];default:return[]}},[N]),z=(o==null?void 0:o.categories)||[];return(0,a.jsxs)(f.Hk,{className:"micro-app-website",children:[(0,a.jsx)(f.Hk.Sidebar,{children:(0,a.jsx)(t.default,{menuKey:N,loading:b,categories:z})}),(0,a.jsx)(s.j3,{context:{rootCategoryId:A==null?void 0:A.id,categories:z,baseUrl:"/cms",breadcrumbs:[{title:"\u5185\u5BB9\u7BA1\u7406",url:"/cms"}].concat(g()(R))}})]})}p.default=u}}]);