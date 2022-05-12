var L=Object.prototype.hasOwnProperty;var B=Object.getOwnPropertySymbols,R=Object.prototype.propertyIsEnumerable;var A=Object.assign;var T=(r,s)=>{var n={};for(var t in r)L.call(r,t)&&s.indexOf(t)<0&&(n[t]=r[t]);if(r!=null&&B)for(var t of B(r))s.indexOf(t)<0&&R.call(r,t)&&(n[t]=r[t]);return n};(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[4663,3975],{33201:function(){},30098:function(r,s,n){"use strict";n.d(s,{G:function(){return u.Z}});var t=n(80064),u=n(48655),m=n(39981)},2893:function(r,s,n){"use strict";n.r(s);var t=n(67294),u=n(27754),m=n(73727),O=n(51615),C=n(92957),z=n(30098),_=n(11974),P=n(25496),o=n(85893);function p(e,v){if(e.type==="SECTION")return(0,o.jsx)(_.v2.Section,{title:e.name},e.id);if(e.type==="URL")return(0,o.jsx)(_.v2.Item,{as:m.Link,bullet:!0,icon:e.icon,title:e.name,url:(0,O.Gn)(e.path,v)},e.id);if(e.type==="SEPARATOR")return(0,o.jsx)(_.v2.Separator,{},e.id);if(e.type==="MENU")return(0,o.jsx)(_.v2.SubMenu,{bullet:!0,icon:e.icon,title:e.name,children:(e.routes||[]).map(function(l){return p(l,v)})},e.id);throw new Error("\u4E0D\u652F\u6301\u7684 MenuType"+e.type)}var d=[];function f(e){var v,l=e.menu,D=(l==null?void 0:l.routes)||d,g=(0,O.TH)(),M=(0,t.useMemo)(function(){return(0,u.nG)(g.pathname,D,!0)},[D,g.pathname]),E=(0,O.$B)({path:"/organizations/:id/settings",strict:!0,sensitive:!0}),I=(0,C.Tk)({variables:{id:E==null?void 0:E.params.id},fetchPolicy:"cache-and-network"}),y=I.data,i=y==null?void 0:y.organization;return(0,o.jsxs)(z.G,{children:[(0,o.jsxs)("div",{className:"mt-5 px-10 pt-5 mb-6 d-flex align-items-center",children:[(0,o.jsx)(_.mN.Avatar,{size:50,className:"me-5",src:(0,P.Fz)(i==null||(v=i.logo)===null||v===void 0?void 0:v.id,{size:"300x300"}),alt:i==null?void 0:i.name}),(0,o.jsxs)("div",{className:"d-flex flex-column",children:[(0,o.jsx)("div",{className:"fw-bolder d-flex align-items-center fs-5",children:i==null?void 0:i.name}),(0,o.jsx)("a",{href:"#",className:"fw-bold text-muted text-hover-primary fs-7",children:i==null?void 0:i.code})]})]}),(0,o.jsx)(_.v2,{className:"menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 pb-6 my-5 my-lg-0",selectedKeys:M.map(function(a){return a.key}),children:D.filter(function(a){return!a.hideInMenu}).map(function(a){return p(a,(E==null?void 0:E.params)||{id:"id"})})})]})}s.default=f},92957:function(r,s,n){"use strict";n.d(s,{ry:function(){return e},Tk:function(){return v},RE:function(){return g},x:function(){return E},Bg:function(){return y}});var t=n(11849),u=n(20310),m=n(49704),O=n(93633),C=n(21919),z,_,P,o,p,d={},f=(0,m.Ps)(z||(z=(0,u.Z)([`
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
    `]))),e=(0,m.Ps)(_||(_=(0,u.Z)([`
    query organization($id: ID!) {
  organization(id: $id) {
    ...OrganizationProfile
  }
}
    `,""])),f);function v(a){var c=(0,t.Z)((0,t.Z)({},d),a);return O.a(e,c)}function l(a){var c=_objectSpread(_objectSpread({},d),a);return Apollo.useLazyQuery(e,c)}var D=(0,m.Ps)(P||(P=(0,u.Z)([`
    mutation updateOrganizationProfile($id: ID!, $input: UpdateOrganizationProfileUpdateInput!) {
  updateOrganizationProfile(id: $id, input: $input) {
    ...OrganizationProfile
  }
}
    `,""])),f);function g(a){var c=(0,t.Z)((0,t.Z)({},d),a);return C.D(D,c)}var M=(0,m.Ps)(o||(o=(0,u.Z)([`
    mutation renameOrganizationCode($id: ID!, $code: String!) {
  renameOrganizationCode(id: $id, code: $code) {
    ...OrganizationProfile
  }
}
    `,""])),f);function E(a){var c=(0,t.Z)((0,t.Z)({},d),a);return C.D(M,c)}var I=(0,m.Ps)(p||(p=(0,u.Z)([`
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
    `])));function y(a){var c=(0,t.Z)((0,t.Z)({},d),a);return O.a(I,c)}function i(a){var c=_objectSpread(_objectSpread({},d),a);return Apollo.useLazyQuery(I,c)}},77104:function(r,s,n){"use strict";var t=n(94184),u=n.n(t),m=n(67294),O=n(70861),C=n(76792),z=n(85893);const _={variant:"primary",active:!1,disabled:!1},P=m.forwardRef((g,D)=>{var{as:o,bsPrefix:p,variant:d,size:f,active:e,className:v}=g,l=T(g,["as","bsPrefix","variant","size","active","className"]);const M=(0,C.vE)(p,"btn"),[E,{tagName:I}]=(0,O.FT)(A({tagName:o},l)),y=I;return(0,z.jsx)(y,A(A(A({},E),l),{ref:D,className:u()(v,M,e&&"active",d&&`${M}-${d}`,f&&`${M}-${f}`,l.href&&l.disabled&&"disabled")}))});P.displayName="Button",P.defaultProps=_,s.Z=P}}]);
