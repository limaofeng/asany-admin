var S=Object.prototype.hasOwnProperty;var L=Object.getOwnPropertySymbols,N=Object.prototype.propertyIsEnumerable;var B=Object.assign;var U=(p,f)=>{var n={};for(var a in p)S.call(p,a)&&f.indexOf(a)<0&&(n[a]=p[a]);if(p!=null&&L)for(var a of L(p))f.indexOf(a)<0&&N.call(p,a)&&(n[a]=p[a]);return n};(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[4663,3975],{33201:function(){},48775:function(p,f,n){"use strict";n.d(f,{GP:function(){return a.Z},Hk:function(){return i}});var a=n(48655),O=n(39981),o=n(67294),z=n(94184),P=n.n(z),C=n(28865),u=n(37334),E=n(2824),r=n(11849),M=n(96486),t=n(85893),_={aside:{minimize:!1}},e=o.createContext({state:_,dispatch:function(){}}),l;(function(d){d.AsideToggle="ASIDE_TOGGLE"})(l||(l={}));function c(d,A){switch(A.type){case"ASIDE_TOGGLE":return d.aside.minimize=!d.aside.minimize,(0,r.Z)({},d);default:throw new Error}}var D=function(A){var j=(0,o.useReducer)(c,(0,M.cloneDeep)(_)),T=(0,E.Z)(j,2),I=T[0],R=T[1];return(0,t.jsx)(e.Provider,{value:{state:I,dispatch:R},children:A.children})},g=function(){return(0,o.useContext)(e)},h=n(53704);function m(d){var A=d.children,j=g(),T=j.dispatch,I=j.state.aside.minimize,R=(0,o.useCallback)(function(){T({type:l.AsideToggle})},[T]);return(0,t.jsxs)("div",{className:P()("app-aside aside"),children:[(0,t.jsx)(u.Z,{children:(0,t.jsx)(a.Z,{resizeable:!0,className:"app-sidebar",children:A})}),(0,t.jsx)(h.zx,{style:{marginBottom:"1.35rem",zIndex:10},onClick:R,activeColor:"primary",className:P()("btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex",{active:I}),children:(0,t.jsx)(C.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})]})}var x=m;function y(d){var A=d.children,j=d.className,T=g(),I=T.state.aside.minimize;return(0,t.jsx)("div",{className:P()("micro-app-container page-full-content",j,{"aside-minimize":I}),children:A})}function s(d){var A=d.children,j=d.className;return(0,t.jsx)(D,{children:(0,t.jsx)(y,{className:j,children:A})})}s.Sidebar=x;var i=s,v=n(61997)},2893:function(p,f,n){"use strict";n.r(f);var a=n(67294),O=n(27754),o=n(51615),z=n(73727),P=n(92957),C=n(48775),u=n(53704),E=n(25496),r=n(85893);function M(e,l){if(e.type==="SECTION")return(0,r.jsx)(u.v2.Section,{title:e.name},e.id);if(e.type==="URL")return(0,r.jsx)(u.v2.Item,{as:z.Link,bullet:!0,icon:e.icon,title:e.name,url:(0,o.Gn)(e.path,l)},e.id);if(e.type==="SEPARATOR")return(0,r.jsx)(u.v2.Separator,{},e.id);if(e.type==="MENU")return(0,r.jsx)(u.v2.SubMenu,{bullet:!0,icon:e.icon,title:e.name,children:(e.routes||[]).map(function(c){return M(c,l)})},e.id);throw new Error("\u4E0D\u652F\u6301\u7684 MenuType"+e.type)}var t=[];function _(e){var l,c=e.menu,D=(c==null?void 0:c.routes)||t,g=(0,o.TH)(),h=(0,a.useMemo)(function(){return(0,O.nG)(g.pathname,D,!0)},[D,g.pathname]),m=(0,o.$B)({path:"/organizations/:id/settings",strict:!0,sensitive:!0}),x=(0,P.Tk)({variables:{id:m==null?void 0:m.params.id},fetchPolicy:"cache-and-network"}),y=x.data,s=y==null?void 0:y.organization;return(0,r.jsxs)(C.GP,{children:[(0,r.jsxs)("div",{className:"mt-5 px-10 pt-5 mb-6 d-flex align-items-center",children:[(0,r.jsx)(u.mN.Avatar,{size:50,className:"me-5",src:(0,E.Fz)(s==null||(l=s.logo)===null||l===void 0?void 0:l.id,{size:"300x300"}),alt:s==null?void 0:s.name}),(0,r.jsxs)("div",{className:"d-flex flex-column",children:[(0,r.jsx)("div",{className:"fw-bolder d-flex align-items-center fs-5",children:s==null?void 0:s.name}),(0,r.jsx)("a",{href:"#",className:"fw-bold text-muted text-hover-primary fs-7",children:s==null?void 0:s.code})]})]}),(0,r.jsx)(u.v2,{className:"menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 pb-6 my-5 my-lg-0",selectedKeys:h.map(function(i){return i.key}),children:D.filter(function(i){return!i.hideInMenu}).map(function(i){return M(i,(m==null?void 0:m.params)||{id:"id"})})})]})}f.default=_},92957:function(p,f,n){"use strict";n.d(f,{ry:function(){return e},Tk:function(){return l},RE:function(){return g},x:function(){return m},Bg:function(){return y}});var a=n(11849),O=n(20310),o=n(49704),z=n(64718),P=n(21919),C,u,E,r,M,t={},_=(0,o.Ps)(C||(C=(0,O.Z)([`
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
    `]))),e=(0,o.Ps)(u||(u=(0,O.Z)([`
    query organization($id: ID!) {
  organization(id: $id) {
    ...OrganizationProfile
  }
}
    `,""])),_);function l(i){var v=(0,a.Z)((0,a.Z)({},t),i);return z.a(e,v)}function c(i){var v=_objectSpread(_objectSpread({},t),i);return Apollo.useLazyQuery(e,v)}var D=(0,o.Ps)(E||(E=(0,O.Z)([`
    mutation updateOrganizationProfile($id: ID!, $input: UpdateOrganizationProfileUpdateInput!) {
  updateOrganizationProfile(id: $id, input: $input) {
    ...OrganizationProfile
  }
}
    `,""])),_);function g(i){var v=(0,a.Z)((0,a.Z)({},t),i);return P.D(D,v)}var h=(0,o.Ps)(r||(r=(0,O.Z)([`
    mutation renameOrganizationCode($id: ID!, $code: String!) {
  renameOrganizationCode(id: $id, code: $code) {
    ...OrganizationProfile
  }
}
    `,""])),_);function m(i){var v=(0,a.Z)((0,a.Z)({},t),i);return P.D(h,v)}var x=(0,o.Ps)(M||(M=(0,O.Z)([`
    query permissionsConnection($filter: PermissionFilter, $page: Int, $pageSize: Int, $orderBy: OrderBy = "createdAt_desc") {
  total: permissionsConnection(pageSize: 1) {
    totalCount
  }
  connection: permissionsConnection(
    filter: $filter
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
        name
        description
      }
    }
  }
}
    `])));function y(i){var v=(0,a.Z)((0,a.Z)({},t),i);return z.a(x,v)}function s(i){var v=_objectSpread(_objectSpread({},t),i);return Apollo.useLazyQuery(x,v)}},77104:function(p,f,n){"use strict";var a=n(94184),O=n.n(a),o=n(67294),z=n(70861),P=n(76792),C=n(85893);const u={variant:"primary",active:!1,disabled:!1},E=o.forwardRef((g,D)=>{var{as:r,bsPrefix:M,variant:t,size:_,active:e,className:l}=g,c=U(g,["as","bsPrefix","variant","size","active","className"]);const h=(0,P.vE)(M,"btn"),[m,{tagName:x}]=(0,z.FT)(B({tagName:r},c)),y=x;return(0,C.jsx)(y,B(B(B({},m),c),{ref:D,className:O()(l,h,e&&"active",t&&`${h}-${t}`,_&&`${h}-${_}`,c.href&&c.disabled&&"disabled")}))});E.displayName="Button",E.defaultProps=u,f.Z=E}}]);
