(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[3851],{53851:function(V,Z,e){"use strict";e.r(Z),e.d(Z,{default:function(){return xe}});var g=e(2824),j=e(11849),A=e(93224),a=e(67294),f=e(14803),R=e(51128),T=e(22994),K=e(33201),i=e(12788),y=e(7020),h=e(8265),p=e(95901),N=e(28865),L=e(94184),z=e.n(L),r=e(42769),B=e(77104),C=e(54406),P=e(37334),t=e(85893);function $(n,o){var l=n.url,u=l===void 0?"/":l,m=n.logo,c=m===void 0?"/assets/media/logos/demo7.svg":m;return(0,t.jsx)("div",{ref:o,className:"aside-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-10",children:(0,t.jsx)("a",{href:u,children:(0,t.jsx)("img",{alt:"Logo",src:c,className:"h-30px"})})})}var b=a.forwardRef($),Q=b,O=e(48655),Y=e(17818),_=e(74479),ee=e(36321),w=e(25496),ne=e(23761),te=a.forwardRef(function(n,o){var l,u=n.menus,m=n.activeKey,c=n.onSelect,S=(0,a.useState)(!1),M=(0,g.Z)(S,2),W=M[0],F=M[1],I=(0,ne.o)(),v=I.data,D=(0,C.ZC)("cn.asany.ui.admin.user.UserAccountMenu"),E=(0,a.useCallback)(function(){F(!1)},[]),G=function(H){return function(){c(H.id)}};return(0,t.jsxs)("div",{ref:o,className:"aside-footer d-flex flex-column align-items-center flex-column-auto",children:[u.map(function(x){return(0,t.jsx)("div",{className:"d-flex align-items-center mb-2",children:(0,t.jsx)(Y.u,{title:x.name,placement:"right",children:(0,t.jsx)("div",{onClick:G(x),className:z()("btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light",{active:m==x.id}),title:x.name,children:(0,t.jsx)(N.ZP,{name:x.icon,className:"svg-icon-2 svg-icon-lg-1"})})})},x.id)}),(0,t.jsx)("div",{className:"d-flex align-items-center mb-2",children:(0,t.jsx)("div",{className:"btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light",title:"Notifications",children:(0,t.jsx)(N.ZP,{name:"Duotune/gen025",className:"svg-icon-2 svg-icon-lg-1"})})}),(0,t.jsx)("div",{className:"d-flex align-items-center mb-10",children:(0,t.jsx)(_.Z,{placement:"top-start",zIndex:100,visible:W,onVisibleChange:F,arrowProps:{style:{display:"none"}},overlayClassName:"overlay-zero-gap overlay-no-arrow",content:(0,t.jsx)(D,{close:E}),children:(0,t.jsx)(Y.u,{title:"\u7528\u6237\u8D44\u6599",placement:"right",children:(0,t.jsx)(Y.mN.Avatar,{size:40,src:(0,w.Fz)(v==null||(l=v.avatar)===null||l===void 0?void 0:l.id,{size:"300x300"}),className:"cursor-pointer",alt:v==null?void 0:v.name})})})})]})}),J=["/drive","/calendar","/contacts","/mail"];function k(n){var o=n.logo,l=n.menuRender,u=n.activeKey,m=n.onSelect,c=(0,a.useRef)(null),S=(0,a.useRef)(null),M=(0,a.useRef)(null),W=(0,a.useRef)(null);(0,ee.vO)(W,c,[S,M]);var F=(0,h.BK)(function(s){return s.aside.collapsible}),I=(0,h.BK)(function(s){return s.aside.minimize}),v=(0,h.BK)(function(s){return s.aside.menus||[]}),D=(0,h.$Y)(),E=(0,a.useCallback)(function(){D.aside.minimize(!I)},[D,I]),G=(0,a.useCallback)(function(s){m(s)},[m]),x=(0,a.useMemo)(function(){return v.filter(function(s){return J.includes(s.path)}).filter(function(s){return!s.hideInMenu}).sort(function(s,U){return J.findIndex(function(X){return X==s.path})-J.findIndex(function(X){return X==U.path})})},[v]),H=(0,a.useMemo)(function(){return v.filter(function(s){return!J.includes(s.path)}).filter(function(s){return!s.hideInMenu})},[v]),d=l==!1;return(0,t.jsxs)("div",{className:z()("aside",{"aside-extended":!I}),children:[(0,t.jsxs)("div",{className:"aside-primary d-flex flex-column align-items-lg-center flex-row-auto",children:[(0,t.jsx)(Q,{ref:S,url:"/",logo:o}),(0,t.jsx)("div",{ref:c,className:"aside-nav d-flex flex-column align-items-center flex-column-fluid w-100 pt-5 pt-lg-0",children:(0,t.jsx)("div",{ref:W,className:"hover-scroll-y mb-10",children:(0,t.jsx)(r.Z,{onSelect:G,activeKey:u,className:"flex-column",as:"ul",children:H.map(function(s){return(0,t.jsx)(r.Z.Item,{className:"mb-2",as:"li",children:(0,t.jsx)(Y.u,{title:s.name,placement:"right",children:(0,t.jsx)(r.Z.Link,{eventKey:s.id,className:"btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light",children:s.icon&&(0,t.jsx)(N.ZP,{name:s.icon,className:"svg-icon-2x"})})})},s.id)})})})}),(0,t.jsx)(te,{ref:M,menus:x,onSelect:G,activeKey:u})]}),!d&&(0,t.jsx)(P.Z,{children:l}),!d&&F&&(0,t.jsx)(B.Z,{style:{marginBottom:"1.35rem",zIndex:10},onClick:E,className:z()("btn-icon bg-body btn-color-gray-700 rounded-2 btn-active-primary position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex",{active:I}),children:(0,t.jsx)(N.ZP,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})]})}k.Workspace=O.Z;var ae=k,re=e(39981);function oe(n){var o=n.menu,l=n.component,u=(0,C.ZC)(l.template,l.blocks);return(0,t.jsx)(u,{menu:o})}var ie=oe;function se(n){return n.component?(0,t.jsx)(ie,{menu:n,component:n.component}):(0,t.jsx)(O.Z,{children:(0,t.jsx)(re.Z,{title:n.name,menus:n.routes})})}var le=se,ue=function(o){var l,u,m,c={};return o!=null&&o.hideFooter&&(c.footerRender=!1),(o==null?void 0:o.layout)==!1?(c.pure=!0,c):(o!=null&&(l=o.layout)!==null&&l!==void 0&&l.hideMenu&&(c.menuRender=!1),o!=null&&(u=o.layout)!==null&&u!==void 0&&u.hideFooter&&(c.footerRender=!1),o!=null&&(m=o.layout)!==null&&m!==void 0&&m.hideNav&&(c.headerRender=!1),c)},de=ue,ce=["children","pure","activeKey","onSelect","menuRender"],q=!1;function me(n){var o=n.children,l=n.pure,u=n.activeKey,m=n.onSelect,c=n.menuRender,S=(0,A.Z)(n,ce);return l?o:(0,t.jsx)(fe,(0,j.Z)((0,j.Z)({},S),{},{activeKey:u,onSelect:m,menuRender:c,children:o}))}var ve=i.ZP.div.withConfig({displayName:"Demo7__RootLayout",componentId:"sc-1mt24zd-0"})(["--root-aside-width:",";--met-aside-width:",";"],function(n){return n.minimize?"100px":"".concat(n.width,"px")},function(n){return n.minimize?"100px":"".concat(n.width,"px")});function fe(n){var o=n.children,l=n.menuRender,u=n.activeKey,m=n.onSelect,c=(0,h.BK)(function(M){return M.aside.width}),S=(0,h.BK)(function(M){return M.aside.minimize});return(0,t.jsx)(ve,{width:c,minimize:S||l==!1,"data-kt-aside-minimize":S||l==!1?"on":"off",className:"theme-metronic header-fixed header-tablet-and-mobile-fixed aside-fixed aside-secondary-enabled",children:(0,t.jsxs)("div",{className:"d-flex flex-column flex-root",children:[(0,t.jsx)(T.Ix,{}),(0,t.jsxs)("div",{className:"page d-flex flex-row flex-column-fluid",children:[(0,t.jsx)(ae,{menuRender:l,onSelect:m,activeKey:u}),o]})]})})}function he(n){var o,l=n.children,u=n.location,m=n.history,c=(0,y.qD)(),S=c.menus,M=(0,a.useRef)({}),W=(0,a.useReducer)(function(d){return d+1},0),F=(0,g.Z)(W,2),I=F[1],v=(0,a.useMemo)(function(){return w.G_(S.map(function(d){return(0,j.Z)((0,j.Z)({},d),{},{key:d.id,routes:[]})}),{idKey:"id",childrenKey:"routes",pidKey:"parent.id",sort:function(s,U){return s.index-U.index}})},[S]),D=(0,a.useMemo)(function(){var d,s=(0,R.Un)((n==null||(d=n.route)===null||d===void 0?void 0:d.routes)||[],void 0,void 0,!0),U=s.menuData;return(0,R.nG)(u.pathname,U).pop()},[u==null?void 0:u.pathname,n==null||(o=n.route)===null||o===void 0?void 0:o.routes]),E=(0,a.useMemo)(function(){return D?de(D):{}},[D]),G=(0,a.useCallback)(function(d){M.current.activeMenuKey=d;var s=v.find(function(U){return U.id==d});s.path?m.push(s.path):I()},[m,v]),x=(0,a.useMemo)(function(){var d=(0,R.nG)(u.pathname,v,!0);return d[0]},[u.pathname,v]);(0,a.useEffect)(function(){!x||M.current.activeMenuKey==x.id||(M.current.activeMenuKey=x.id,I())},[x]);var H=(0,a.useMemo)(function(){if(E.menuRender==!1)return!1;if(E.menuRender)return E.menuRender;var d=x;return!d||!d.component&&!(d.routes||[]).length?!1:le(d)},[E.menuRender,x]);return(0,t.jsx)(p.dI,{children:(0,t.jsxs)(h.aM,{state:{menus:v,routes:n.route.routes||[],aside:{menus:v,minimize:!1,pure:E.pure,width:200}},children:[(0,t.jsx)(me,(0,j.Z)((0,j.Z)({},n),{},{activeKey:M.current.activeMenuKey,onSelect:G,menuRender:H,pure:E.pure,children:l})),q,q&&(0,t.jsx)(f.l,{keys:["control","shift","command","c"]})]})})}var xe=he},37334:function(V,Z,e){"use strict";var g=e(67294),j=e(85893);function A(f){var R=f.children;return(0,j.jsx)("div",{className:"aside-secondary d-flex flex-row-fluid",children:R})}var a=g.memo(A);Z.Z=a},48655:function(V,Z,e){"use strict";e.d(Z,{Z:function(){return z}});var g=e(67294),j=e(94184),A=e.n(j),a=e(1861),f=e(8265),R=e(51128),T=e(51615),K=e(81010),i=e(85893);function y(r){if(r.type==="SECTION")return(0,i.jsx)(K.Z.Section,{title:r.name},r.id);if(r.type==="URL")return(0,i.jsx)(K.Z.Item,{bullet:!0,icon:r.icon,title:r.name,url:r.path},r.id);if(r.type==="SEPARATOR")return(0,i.jsx)(K.Z.Separator,{},r.id);if(r.type==="MENU")return(0,i.jsx)(K.Z.SubMenu,{bullet:!0,icon:r.icon,title:r.name,children:(r.routes||[]).map(y)},r.id);throw new Error("\u4E0D\u652F\u6301\u7684 MenuType"+r.type)}var h=[];function p(r){var B=r.menus,C=B===void 0?h:B,P=(0,T.TH)(),t=(0,g.useMemo)(function(){return(0,R.nG)(P.pathname,C,!0)},[C,P.pathname]),$=t.map(function(b){return b.key});return(0,i.jsx)(K.Z,{className:"menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0",selectedKeys:$,children:C.filter(function(b){return!b.hideInMenu}).map(y)})}var N=p;function L(r){var B=r.className,C=r.width,P=C===void 0?280:C,t=r.children,$=r.collapsible,b=$===void 0?!0:$,Q=r.header,O=(0,f.$Y)();return(0,g.useEffect)(function(){O.aside.width(P+100)},[O.aside,P]),(0,g.useEffect)(function(){O.aside.collapsible(b)},[O.aside,b]),(0,i.jsxs)("div",{className:A()("aside-workspace",B),children:[Q,(0,i.jsx)(a.E,{className:"d-flex h-100 flex-column custom-scrollbar",options:{scrollbars:{autoHide:"scroll"}},children:t})]})}L.MenuBar=N;var z=L},39981:function(V,Z,e){"use strict";var g=e(67294),j=e(51128),A=e(51615),a=e(81010),f=e(85893);function R(i){if(i.type==="SECTION")return(0,f.jsx)(a.Z.Section,{title:i.name},i.id);if(i.type==="URL")return(0,f.jsx)(a.Z.Item,{bullet:!0,icon:i.icon,title:i.name,url:i.path},i.id);if(i.type==="SEPARATOR")return(0,f.jsx)(a.Z.Separator,{});if(i.type==="MENU")return(0,f.jsx)(a.Z.SubMenu,{bullet:!0,icon:i.icon,title:i.name,children:(i.routes||[]).map(R)},i.id);throw new Error("\u4E0D\u652F\u6301\u7684 MenuType"+i.type)}function T(i){var y=i.menus,h=i.title,p=(0,A.TH)(),N=(0,g.useMemo)(function(){return(0,j.nG)(p.pathname,y,!0)},[y,p.pathname]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"m-0",children:(0,f.jsx)("h1",{className:"text-gray-800 fw-bold mb-6 mx-5",children:h})}),(0,f.jsx)(a.Z,{className:"menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0",selectedKeys:N.map(function(L){return L.key}),children:y.map(R)})]})}var K=g.memo(T);Z.Z=K},23761:function(V,Z,e){"use strict";e.d(Z,{o:function(){return A},a:function(){return i}});var g=e(7020);function j(){var y=(0,g.tT)("@@initialState"),h=y.initialState,p=y.loading,N=y.error;return{data:h==null?void 0:h.currentUser,loading:p,error:N}}var A=j,a=e(39428),f=e(3182),R=e(67294),T=e(69082);function K(){var y=(0,g.tT)("@@initialState"),h=y.loading,p=y.refresh,N=(0,R.useCallback)((0,f.Z)((0,a.Z)().mark(function L(){return(0,a.Z)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,T.kS)();case 2:p();case 3:case"end":return r.stop()}},L)})),[p]);return[N,{loading:h}]}var i=K}}]);