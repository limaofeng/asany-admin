"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7953,1201],{51253:function(Q,x,e){e.d(x,{GP:function(){return m.Z},Hk:function(){return F},xx:function(){return T.x}});var L=e(74958),m=e(5166),T=e(19260),s=e(68400),o=e.n(s),p=e(62435),O=e(93967),M=e.n(O),_=e(94589),b=e(97857),P=e.n(b),z=e(46027),r=e(42687),f=e(10811),h=e(5574),A=e.n(h),i=e(96486),n=e(86074),a={aside:{minimize:!1,width:280}},u=p.createContext({state:a,dispatch:function(){}}),E=function(t){return t.AsideToggle="ASIDE_TOGGLE",t.AsideWidth="ASIDE_WIDTH",t}({});function d(t,g){switch(g.type){case"ASIDE_TOGGLE":return t.aside.minimize=!t.aside.minimize,P()({},t);case"ASIDE_WIDTH":return t.aside.width=g.payload,P()({},t);default:throw new Error}}var v=function(g){var D=(0,p.useReducer)(d,(0,i.cloneDeep)(a)),I=A()(D,2),C=I[0],B=I[1];return(0,n.jsx)(u.Provider,{value:{state:C,dispatch:B},children:g.children})},y=function(){return(0,p.useContext)(u)},R=e(65495);function S(t){var g=y(),D=g.dispatch,I=g.state.aside.minimize,C=(0,p.useCallback)(function(){D({type:E.AsideToggle})},[D]);return(0,n.jsx)(f.Button,{style:P()({marginBottom:"1.35rem",zIndex:105},t.style),onClick:C,activeColor:"primary",className:M()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",t.className,{active:I}),children:(0,n.jsx)(z.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}function l(t){var g=t.className,D=t.header,I=t.children,C=t.collapsible,B=C===void 0?!0:C,$=t.width,U=$===void 0?280:$,K=(0,r.$Y)(),Z=y(),H=Z.dispatch;return(0,p.useEffect)(function(){K.aside.width(U+100),H({type:E.AsideWidth,payload:U})},[K.aside,H,U]),(0,n.jsxs)("div",{className:M()("app-aside aside",g),children:[(0,n.jsx)(R.Z,{children:(0,n.jsx)(m.Z,{header:D,resizeable:!0,className:"app-sidebar",children:I})}),B&&(0,n.jsx)(S,{className:"start-100 end-0"})]})}l.Toggle=S;var c=l,W,G=_.ZP.div(W||(W=o()([`
  --root-aside-width: `,`;
  --met-aside-width: `,`;
`])),function(t){return t.minimize?"100px":"".concat(t.width,"px")},function(t){return t.minimize?"100px":"".concat(t.width,"px")});function N(t){var g=t.children,D=t.className,I=y(),C=I.state.aside,B=C.minimize,$=C.width,U=(0,p.useCallback)(function(K){K.preventDefault()},[]);return(0,n.jsx)(G,{minimize:B,width:$,className:M()("micro-app-container page-full-content",D,{"aside-minimize":B}),onContextMenu:U,children:g})}function j(t){var g=t.children,D=t.className;return(0,n.jsx)(v,{children:(0,n.jsx)(N,{className:D,children:g})})}j.Sidebar=c;var F=j},42687:function(Q,x,e){e.d(x,{$Y:function(){return z},BK:function(){return f},aM:function(){return A}});var L=e(5574),m=e.n(L),T=e(97857),s=e.n(T),o=e(62435),p=e(86074),O=o.createContext({getState:function(){return{routes:[]}},subscribe:function(){},dispatch:function(){}}),M=function(n,a){return a?a.type==="ASIDE_MINIMIZE"?s()(s()({},n),{},{aside:s()(s()({},n.aside),{},{minimize:!!a.payload})}):a.type==="ASIDE_WIDTH"?s()(s()({},n),{},{aside:s()(s()({},n.aside),{},{width:a.payload})}):a.type==="ASIDE_COLLAPSIBLE"?s()(s()({},n),{},{aside:s()(s()({},n.aside),{},{collapsible:a.payload})}):n:n},_=function(n){return s()({},n)};function b(i){var n=(0,o.useReducer)(M,i,_),a=m()(n,2),u=a[0],E=a[1],d=(0,o.useState)([]),v=m()(d,1),y=v[0],R=function(F){return function(){var t=y.indexOf(F);t>-1&&y.splice(t,1)}},S=(0,o.useCallback)(function(j){return y.unshift(j),R(j)},[y]),l=(0,o.useCallback)(function(){y.forEach(function(j){return j()})},[y]),c={getState:function(){return u},dispatch:E,subscribe:S},W=(0,o.useState)(c),G=m()(W,1),N=G[0];return(0,o.useEffect)(function(){N.getState=function(){return u},l()},[u]),N}var P=function(n,a){return n===a};function z(){var i=(0,o.useContext)(O),n=(0,o.useRef)({aside:{get state(){return i.getState().aside},width:function(u){i.dispatch({type:"ASIDE_WIDTH",payload:u})},minimize:function(u){i.dispatch({type:"ASIDE_MINIMIZE",payload:u})},collapsible:function(u){i.dispatch({type:"ASIDE_COLLAPSIBLE",payload:u})}}});return n.current}function r(i){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P,a=(0,o.useContext)(O),u=(0,o.useReducer)(function(S){return S+1},0),E=m()(u,2),d=E[1],v=(0,o.useRef)(),y=i(a.getState());function R(){var S=i(a.getState());n(S,v.current)||(v.current=S,d())}return(0,o.useEffect)(function(){return a.subscribe(R)},[]),y}function f(i){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:P;return r(i,n)}function h(){var i=useContext(O);return i.dispatch}function A(i){var n=i.children,a=i.state,u=b(a);return(0,o.useMemo)(function(){return(0,p.jsx)(O.Provider,{value:u,children:n})},[n,u])}},22337:function(Q,x,e){e.r(x);var L=e(62435),m=e(96974),T=e(12845),s=e(46810),o=e(51253),p=e(10811),O=e(12708),M=e(58795),_=e(86074);function b(r,f){if(r.type==="SECTION")return(0,_.jsx)(p.Menu.Section,{children:r.name},r.id);if(r.type==="URL")return(0,_.jsx)(p.Menu.Item,{as:T.Link,bullet:!0,icon:r.icon,title:r.name,url:(0,m.Gn)(r.path,f)},r.id);if(r.type==="SEPARATOR")return(0,_.jsx)(p.Menu.Separator,{className:"my-1"},r.id);if(r.type==="MENU")return(0,_.jsx)(p.Menu.SubMenu,{bullet:!0,icon:r.icon,title:r.name,children:(r.children||[]).map(function(h){return b(h,f)})},r.id);throw new Error("\u4E0D\u652F\u6301\u7684 MenuType"+r.type)}var P=[];function z(r){var f,h=r.menu,A=(h==null?void 0:h.children)||P,i=(0,m.TH)(),n=(0,L.useMemo)(function(){return(0,s.nG)(i.pathname,A,!0)},[A,i.pathname]),a=(0,m.bS)("/organizations/:id/settings"),u=(0,M.Tk)({variables:{id:a==null?void 0:a.params.id},fetchPolicy:"cache-and-network"}),E=u.data,d=E==null?void 0:E.organization;return(0,_.jsxs)(o.GP,{children:[(0,_.jsxs)("div",{className:"mt-5 px-10 pt-5 mb-6 d-flex align-items-center",children:[(0,_.jsx)(p.Symbol.Avatar,{size:50,className:"me-5",src:(0,O.Fz)(d==null||(f=d.logo)===null||f===void 0?void 0:f.id,{size:"300x300"}),alt:d==null?void 0:d.name}),(0,_.jsxs)("div",{className:"d-flex flex-column",children:[(0,_.jsx)("div",{className:"fw-bolder d-flex align-items-center fs-5",children:d==null?void 0:d.name}),(0,_.jsx)("a",{href:"#",className:"fw-bold text-muted text-hover-primary fs-7",children:d==null?void 0:d.code})]})]}),(0,_.jsx)(p.Menu,{className:"menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 pb-6 my-5 my-lg-0",selectedKeys:n.map(function(v){return v.key}),children:A.filter(function(v){return!v.hideInMenu}).map(function(v){return b(v,(a==null?void 0:a.params)||{id:"id"})})})]})}x.default=z},58795:function(Q,x,e){e.d(x,{RE:function(){return u},Tk:function(){return A},ry:function(){return h},x:function(){return d}});var L=e(97857),m=e.n(L),T=e(68400),s=e.n(T),o=e(75063),p=e(37887),O=e(50319),M,_,b,P,z,r={},f=(0,o.Ps)(M||(M=s()([`
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
    `]))),h=(0,o.Ps)(_||(_=s()([`
    query organization($id: ID!) {
  organization(id: $id) {
    ...OrganizationProfile
  }
}
    `,""])),f);function A(l){var c=m()(m()({},r),l);return p.a(h,c)}function i(l){var c=_objectSpread(_objectSpread({},r),l);return Apollo.useLazyQuery(h,c)}function n(l){var c=_objectSpread(_objectSpread({},r),l);return Apollo.useSuspenseQuery(h,c)}var a=(0,o.Ps)(b||(b=s()([`
    mutation updateOrganizationProfile($id: ID!, $input: UpdateOrganizationProfileUpdateInput!) {
  updateOrganizationProfile(id: $id, input: $input) {
    ...OrganizationProfile
  }
}
    `,""])),f);function u(l){var c=m()(m()({},r),l);return O.D(a,c)}var E=(0,o.Ps)(P||(P=s()([`
    mutation renameOrganizationCode($id: ID!, $code: String!) {
  renameOrganizationCode(id: $id, code: $code) {
    ...OrganizationProfile
  }
}
    `,""])),f);function d(l){var c=m()(m()({},r),l);return O.D(E,c)}var v=(0,o.Ps)(z||(z=s()([`
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
    `])));function y(l){var c=_objectSpread(_objectSpread({},r),l);return Apollo.useQuery(v,c)}function R(l){var c=_objectSpread(_objectSpread({},r),l);return Apollo.useLazyQuery(v,c)}function S(l){var c=_objectSpread(_objectSpread({},r),l);return Apollo.useSuspenseQuery(v,c)}}}]);
