"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7953,1201],{51253:function(Q,C,e){e.d(C,{GP:function(){return m.Z},Hk:function(){return Z},xx:function(){return L.x}});var R=e(74958),m=e(5166),L=e(19260),o=e(68400),s=e.n(o),p=e(62435),g=e(93967),P=e.n(g),_=e(94589),M=e(97857),O=e.n(M),x=e(46027),a=e(10582),f=e(42687),h=e(79817),A=e(5574),i=e.n(A),r=e(96486),n=e(86074),u={aside:{minimize:!1,width:280}},E=p.createContext({state:u,dispatch:function(){}}),d=function(t){return t.AsideToggle="ASIDE_TOGGLE",t.AsideWidth="ASIDE_WIDTH",t}({});function v(t,y){switch(y.type){case"ASIDE_TOGGLE":return t.aside.minimize=!t.aside.minimize,O()({},t);case"ASIDE_WIDTH":return t.aside.width=y.payload,O()({},t);default:throw new Error}}var D=function(y){var S=(0,p.useReducer)(v,(0,r.cloneDeep)(u)),T=i()(S,2),j=T[0],W=T[1];return(0,n.jsx)(E.Provider,{value:{state:j,dispatch:W},children:y.children})},I=function(){return(0,p.useContext)(E)},b=e(65495);function l(t){var y=I(),S=y.dispatch,T=y.state.aside.minimize,j=(0,p.useCallback)(function(){S({type:d.AsideToggle})},[S]);return(0,n.jsx)(h.Button,{style:O()({marginBottom:"1.35rem",zIndex:105},t.style),onClick:j,activeColor:"primary",className:P()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",t.className,{active:T}),children:(0,n.jsx)(x.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}var c={"drawer drawer-start":{maxWidth:992}};function $(t){var y=t.className,S=t.header,T=t.children,j=t.collapsible,W=j===void 0?!0:j,K=t.width,N=K===void 0?280:K,w=(0,f.$Y)(),Y=I(),H=Y.dispatch;(0,p.useEffect)(function(){w.aside.width(N+100),H({type:d.AsideWidth,payload:N})},[w.aside,H,N]);var J=(0,a.CN)(c),V=(0,f.BK)(function(X){return X.aside.drawer});return(0,n.jsxs)("div",{className:P()("app-aside aside",y,J,{"drawer-on":V}),children:[(0,n.jsx)(b.Z,{children:(0,n.jsx)(m.Z,{header:S,resizeable:!0,className:"app-sidebar",children:T})}),W&&(0,n.jsx)(l,{className:"start-100 end-0"})]})}$.Toggle=l;var G=$,B,z=_.ZP.div(B||(B=s()([`
  --root-aside-width: `,`;
  --met-aside-width: `,`;
`])),function(t){return t.minimize?"100px":"".concat(t.width,"px")},function(t){return t.minimize?"100px":"".concat(t.width,"px")});function F(t){var y=t.children,S=t.className,T=I(),j=T.state.aside,W=j.minimize,K=j.width,N=(0,p.useCallback)(function(w){w.preventDefault()},[]);return(0,n.jsx)(z,{minimize:W,width:K,className:P()("micro-app-container page-full-content",S,{"aside-minimize":W}),onContextMenu:N,children:y})}function U(t){var y=t.children,S=t.className;return(0,n.jsx)(D,{children:(0,n.jsx)(F,{className:S,children:y})})}U.Sidebar=G;var Z=U},42687:function(Q,C,e){e.d(C,{$Y:function(){return x},BK:function(){return f},aM:function(){return A}});var R=e(5574),m=e.n(R),L=e(97857),o=e.n(L),s=e(62435),p=e(86074),g=s.createContext({getState:function(){return{routes:[]}},subscribe:function(){},dispatch:function(){}}),P=function(r,n){return n?n.type==="ASIDE_MINIMIZE"?o()(o()({},r),{},{aside:o()(o()({},r.aside),{},{minimize:!!n.payload})}):n.type==="ASIDE_WIDTH"?o()(o()({},r),{},{aside:o()(o()({},r.aside),{},{width:n.payload})}):n.type==="ASIDE_COLLAPSIBLE"?o()(o()({},r),{},{aside:o()(o()({},r.aside),{},{collapsible:n.payload})}):n.type==="ASIDE_DRAWER"?o()(o()({},r),{},{aside:o()(o()({},r.aside),{},{drawer:n.payload})}):r:r},_=function(r){return o()({},r)};function M(i){var r=(0,s.useReducer)(P,i,_),n=m()(r,2),u=n[0],E=n[1],d=(0,s.useState)([]),v=m()(d,1),D=v[0],I=function(F){return function(){var U=D.indexOf(F);U>-1&&D.splice(U,1)}},b=(0,s.useCallback)(function(z){return D.unshift(z),I(z)},[D]),l=(0,s.useCallback)(function(){D.forEach(function(z){return z()})},[D]),c={getState:function(){return u},dispatch:E,subscribe:b},$=(0,s.useState)(c),G=m()($,1),B=G[0];return(0,s.useEffect)(function(){B.getState=function(){return u},l()},[u]),B}var O=function(r,n){return r===n};function x(){var i=(0,s.useContext)(g),r=(0,s.useRef)({aside:{get state(){return i.getState().aside},width:function(u){i.dispatch({type:"ASIDE_WIDTH",payload:u})},minimize:function(u){i.dispatch({type:"ASIDE_MINIMIZE",payload:u})},collapsible:function(u){i.dispatch({type:"ASIDE_COLLAPSIBLE",payload:u})},drawer:function(u){i.dispatch({type:"ASIDE_DRAWER",payload:u})}}});return r.current}function a(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O,n=(0,s.useContext)(g),u=(0,s.useReducer)(function(b){return b+1},0),E=m()(u,2),d=E[1],v=(0,s.useRef)(),D=i(n.getState());function I(){var b=i(n.getState());r(b,v.current)||(v.current=b,d())}return(0,s.useEffect)(function(){return n.subscribe(I)},[]),D}function f(i){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:O;return a(i,r)}function h(){var i=useContext(g);return i.dispatch}function A(i){var r=i.children,n=i.state,u=M(n);return(0,s.useMemo)(function(){return(0,p.jsx)(g.Provider,{value:u,children:r})},[r,u])}},22337:function(Q,C,e){e.r(C);var R=e(62435),m=e(96974),L=e(12845),o=e(46810),s=e(51253),p=e(79817),g=e(12708),P=e(58795),_=e(86074);function M(a,f){if(a.type==="SECTION")return(0,_.jsx)(p.Menu.Section,{children:a.name},a.id);if(a.type==="URL")return(0,_.jsx)(p.Menu.Item,{as:L.Link,bullet:!0,icon:a.icon,title:a.name,url:(0,m.Gn)(a.path,f)},a.id);if(a.type==="SEPARATOR")return(0,_.jsx)(p.Menu.Separator,{className:"my-1"},a.id);if(a.type==="MENU")return(0,_.jsx)(p.Menu.SubMenu,{bullet:!0,icon:a.icon,title:a.name,children:(a.children||[]).map(function(h){return M(h,f)})},a.id);throw new Error("\u4E0D\u652F\u6301\u7684 MenuType"+a.type)}var O=[];function x(a){var f,h=a.menu,A=(h==null?void 0:h.children)||O,i=(0,m.TH)(),r=(0,R.useMemo)(function(){return(0,o.nG)(i.pathname,A,!0)},[A,i.pathname]),n=(0,m.bS)("/organizations/:id/settings"),u=(0,P.Tk)({variables:{id:n==null?void 0:n.params.id},fetchPolicy:"cache-and-network"}),E=u.data,d=E==null?void 0:E.organization;return(0,_.jsxs)(s.GP,{children:[(0,_.jsxs)("div",{className:"mt-5 px-10 pt-5 mb-6 d-flex align-items-center",children:[(0,_.jsx)(p.Symbol.Avatar,{size:50,className:"me-5",src:(0,g.Fz)(d==null||(f=d.logo)===null||f===void 0?void 0:f.id,{size:"300x300"}),alt:d==null?void 0:d.name}),(0,_.jsxs)("div",{className:"d-flex flex-column",children:[(0,_.jsx)("div",{className:"fw-bolder d-flex align-items-center fs-5",children:d==null?void 0:d.name}),(0,_.jsx)("a",{href:"#",className:"fw-bold text-muted text-hover-primary fs-7",children:d==null?void 0:d.code})]})]}),(0,_.jsx)(p.Menu,{className:"menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 pb-6 my-5 my-lg-0",selectedKeys:r.map(function(v){return v.key}),children:A.filter(function(v){return!v.hideInMenu}).map(function(v){return M(v,(n==null?void 0:n.params)||{id:"id"})})})]})}C.default=x},58795:function(Q,C,e){e.d(C,{RE:function(){return u},Tk:function(){return A},ry:function(){return h},x:function(){return d}});var R=e(97857),m=e.n(R),L=e(68400),o=e.n(L),s=e(75063),p=e(37887),g=e(50319),P,_,M,O,x,a={},f=(0,s.Ps)(P||(P=o()([`
    fragment OrganizationProfile on Organization {
  id
  code
  name
  logo
  description
  email
  url
  location {
    province
    city
    district
    street
  }
}
    `]))),h=(0,s.Ps)(_||(_=o()([`
    query organization($id: ID!) {
  organization(id: $id) {
    ...OrganizationProfile
  }
}
    `,""])),f);function A(l){var c=m()(m()({},a),l);return p.a(h,c)}function i(l){var c=_objectSpread(_objectSpread({},a),l);return Apollo.useLazyQuery(h,c)}function r(l){var c=_objectSpread(_objectSpread({},a),l);return Apollo.useSuspenseQuery(h,c)}var n=(0,s.Ps)(M||(M=o()([`
    mutation updateOrganizationProfile($id: ID!, $input: UpdateOrganizationProfileUpdateInput!) {
  updateOrganizationProfile(id: $id, input: $input) {
    ...OrganizationProfile
  }
}
    `,""])),f);function u(l){var c=m()(m()({},a),l);return g.D(n,c)}var E=(0,s.Ps)(O||(O=o()([`
    mutation renameOrganizationCode($id: ID!, $code: String!) {
  renameOrganizationCode(id: $id, code: $code) {
    ...OrganizationProfile
  }
}
    `,""])),f);function d(l){var c=m()(m()({},a),l);return g.D(E,c)}var v=(0,s.Ps)(x||(x=o()([`
    query permissionsConnection($where: PermissionWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy = "createdAt_desc") {
  total: permissionsConnection(pageSize: 1) {
    totalCount
  }
  connection: permissionsConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    totalPage
    pageSize
    current: currentPage
    total: totalCount
    edges {
      node {
        id
      }
    }
  }
}
    `])));function D(l){var c=_objectSpread(_objectSpread({},a),l);return Apollo.useQuery(v,c)}function I(l){var c=_objectSpread(_objectSpread({},a),l);return Apollo.useLazyQuery(v,c)}function b(l){var c=_objectSpread(_objectSpread({},a),l);return Apollo.useSuspenseQuery(v,c)}}}]);
