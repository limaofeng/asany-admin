"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7953,267],{51253:function($,j,n){n.d(j,{GP:function(){return l.Z},Hk:function(){return F},xx:function(){return C.x}});var b=n(74958),l=n(5166),C=n(19260),f=n(68400),h=n.n(f),d=n(62435),D=n(93967),g=n.n(D),s=n(94589),E=n(97857),y=n.n(E),z=n(46027),a=n(35908),u=n(42687),m=n(79817),M=n(5574),S=n.n(M),I=n(96486),t=n(86074),A={aside:{minimize:!1,width:280}},O=d.createContext({state:A,dispatch:function(){}}),r=function(e){return e.AsideToggle="ASIDE_TOGGLE",e.AsideWidth="ASIDE_WIDTH",e}({});function v(e,c){switch(c.type){case"ASIDE_TOGGLE":return e.aside.minimize=!e.aside.minimize,y()({},e);case"ASIDE_WIDTH":return e.aside.width=c.payload,y()({},e);default:throw new Error}}var B=function(c){var p=(0,d.useReducer)(v,(0,I.cloneDeep)(A)),P=S()(p,2),_=P[0],x=P[1];return(0,t.jsx)(O.Provider,{value:{state:_,dispatch:x},children:c.children})},L=function(){return(0,d.useContext)(O)},W=n(65495);function i(e){var c=L(),p=c.dispatch,P=c.state.aside.minimize,_=(0,d.useCallback)(function(){p({type:r.AsideToggle})},[p]);return(0,t.jsx)(m.Button,{style:y()({marginBottom:"1.35rem",zIndex:105},e.style),onClick:_,activeColor:"primary",className:g()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",e.className,{active:P}),children:(0,t.jsx)(z.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}var o={"drawer drawer-start":{maxWidth:992}};function U(e){var c=e.className,p=e.header,P=e.children,_=e.collapsible,x=_===void 0?!0:_,N=e.width,T=N===void 0?280:N,R=(0,u.$Y)(),J=L(),G=J.dispatch;(0,d.useEffect)(function(){R.aside.width(T+100),G({type:r.AsideWidth,payload:T})},[R.aside,G,T]);var Y=(0,a.CN)(o),V=(0,u.BK)(function(X){return X.aside.drawer});return(0,t.jsxs)("div",{className:g()("app-aside aside",c,Y,{"drawer-on":V}),children:[(0,t.jsx)(W.Z,{children:(0,t.jsx)(l.Z,{header:p,resizeable:!0,className:"app-sidebar",children:P})}),x&&(0,t.jsx)(i,{className:"start-100 end-0"})]})}U.Toggle=i;var w=U,K,H=s.ZP.div(K||(K=h()([`
  --root-aside-width: `,`;
  --met-aside-width: `,`;
`])),function(e){return e.minimize?"100px":"".concat(e.width,"px")},function(e){return e.minimize?"100px":"".concat(e.width,"px")});function Z(e){var c=e.children,p=e.className,P=L(),_=P.state.aside,x=_.minimize,N=_.width,T=(0,d.useCallback)(function(R){R.preventDefault()},[]);return(0,t.jsx)(H,{minimize:x,width:N,className:g()("micro-app-container page-full-content",p,{"aside-minimize":x}),onContextMenu:T,children:c})}function Q(e){var c=e.children,p=e.className;return(0,t.jsx)(B,{children:(0,t.jsx)(Z,{className:p,children:c})})}Q.Sidebar=w;var F=Q},22337:function($,j,n){n.r(j);var b=n(62435),l=n(96974),C=n(12845),f=n(46810),h=n(51253),d=n(79817),D=n(12708),g=n(58795),s=n(86074);function E(a,u){if(a.type==="SECTION")return(0,s.jsx)(d.Menu.Section,{children:a.name},a.id);if(a.type==="URL")return(0,s.jsx)(d.Menu.Item,{as:C.Link,bullet:!0,icon:a.icon,title:a.name,url:(0,l.Gn)(a.path,u)},a.id);if(a.type==="SEPARATOR")return(0,s.jsx)(d.Menu.Separator,{className:"my-1"},a.id);if(a.type==="MENU")return(0,s.jsx)(d.Menu.SubMenu,{bullet:!0,icon:a.icon,title:a.name,children:(a.children||[]).map(function(m){return E(m,u)})},a.id);throw new Error("\u4E0D\u652F\u6301\u7684 MenuType"+a.type)}var y=[];function z(a){var u,m=a.menu,M=(m==null?void 0:m.children)||y,S=(0,l.TH)(),I=(0,b.useMemo)(function(){return(0,f.nG)(S.pathname,M,!0)},[M,S.pathname]),t=(0,l.bS)("/organizations/:id/settings"),A=(0,g.Tk)({variables:{id:t==null?void 0:t.params.id},fetchPolicy:"cache-and-network"}),O=A.data,r=O==null?void 0:O.organization;return(0,s.jsxs)(h.GP,{children:[(0,s.jsxs)("div",{className:"mt-5 px-10 pt-5 mb-6 d-flex align-items-center",children:[(0,s.jsx)(d.Symbol.Avatar,{size:50,className:"me-5",src:(0,D.Fz)(r==null||(u=r.logo)===null||u===void 0?void 0:u.id,{size:"300x300"}),alt:r==null?void 0:r.name}),(0,s.jsxs)("div",{className:"d-flex flex-column",children:[(0,s.jsx)("div",{className:"fw-bolder d-flex align-items-center fs-5",children:r==null?void 0:r.name}),(0,s.jsx)("a",{href:"#",className:"fw-bold text-muted text-hover-primary fs-7",children:r==null?void 0:r.code})]})]}),(0,s.jsx)(d.Menu,{className:"menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 pb-6 my-5 my-lg-0",selectedKeys:I.map(function(v){return v.key}),children:M.filter(function(v){return!v.hideInMenu}).map(function(v){return E(v,(t==null?void 0:t.params)||{id:"id"})})})]})}j.default=z},58795:function($,j,n){n.d(j,{RE:function(){return A},Tk:function(){return M},ry:function(){return m},x:function(){return r}});var b=n(97857),l=n.n(b),C=n(68400),f=n.n(C),h=n(75063),d=n(37887),D=n(50319),g,s,E,y,z,a={},u=(0,h.Ps)(g||(g=f()([`
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
    `]))),m=(0,h.Ps)(s||(s=f()([`
    query organization($id: ID!) {
  organization(id: $id) {
    ...OrganizationProfile
  }
}
    `,""])),u);function M(i){var o=l()(l()({},a),i);return d.a(m,o)}function S(i){var o=_objectSpread(_objectSpread({},a),i);return Apollo.useLazyQuery(m,o)}function I(i){var o=_objectSpread(_objectSpread({},a),i);return Apollo.useSuspenseQuery(m,o)}var t=(0,h.Ps)(E||(E=f()([`
    mutation updateOrganizationProfile($id: ID!, $input: UpdateOrganizationProfileUpdateInput!) {
  updateOrganizationProfile(id: $id, input: $input) {
    ...OrganizationProfile
  }
}
    `,""])),u);function A(i){var o=l()(l()({},a),i);return D.D(t,o)}var O=(0,h.Ps)(y||(y=f()([`
    mutation renameOrganizationCode($id: ID!, $code: String!) {
  renameOrganizationCode(id: $id, code: $code) {
    ...OrganizationProfile
  }
}
    `,""])),u);function r(i){var o=l()(l()({},a),i);return D.D(O,o)}var v=(0,h.Ps)(z||(z=f()([`
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
    `])));function B(i){var o=_objectSpread(_objectSpread({},a),i);return Apollo.useQuery(v,o)}function L(i){var o=_objectSpread(_objectSpread({},a),i);return Apollo.useLazyQuery(v,o)}function W(i){var o=_objectSpread(_objectSpread({},a),i);return Apollo.useSuspenseQuery(v,o)}}}]);
