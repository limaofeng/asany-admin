var L=Object.prototype.hasOwnProperty;var B=Object.getOwnPropertySymbols,R=Object.prototype.propertyIsEnumerable;var I=Object.assign;var T=(s,_)=>{var n={};for(var e in s)L.call(s,e)&&_.indexOf(e)<0&&(n[e]=s[e]);if(s!=null&&B)for(var e of B(s))_.indexOf(e)<0&&R.call(s,e)&&(n[e]=s[e]);return n};(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[4663,3975],{33201:function(){},34106:function(s,_,n){"use strict";n.d(_,{GP:function(){return e.Z},Hk:function(){return i.ZP}});var e=n(48655),m=n(39981),i=n(21428),f=n(53851)},2893:function(s,_,n){"use strict";n.r(_);var e=n(67294),m=n(51128),i=n(51615),f=n(73727),C=n(92957),z=n(34106),u=n(51186),P=n(25496),o=n(85893);function p(t,v){if(t.type==="SECTION")return(0,o.jsx)(u.v2.Section,{children:t.name},t.id);if(t.type==="URL")return(0,o.jsx)(u.v2.Item,{as:f.Link,bullet:!0,icon:t.icon,title:t.name,url:(0,i.Gn)(t.path,v)},t.id);if(t.type==="SEPARATOR")return(0,o.jsx)(u.v2.Separator,{className:"my-1"},t.id);if(t.type==="MENU")return(0,o.jsx)(u.v2.SubMenu,{bullet:!0,icon:t.icon,title:t.name,children:(t.routes||[]).map(function(l){return p(l,v)})},t.id);throw new Error("\u4E0D\u652F\u6301\u7684 MenuType"+t.type)}var d=[];function O(t){var v,l=t.menu,D=(l==null?void 0:l.routes)||d,M=(0,i.TH)(),g=(0,e.useMemo)(function(){return(0,m.nG)(M.pathname,D,!0)},[D,M.pathname]),E=(0,i.$B)({path:"/organizations/:id/settings",strict:!0,sensitive:!0}),A=(0,C.Tk)({variables:{id:E==null?void 0:E.params.id},fetchPolicy:"cache-and-network"}),y=A.data,r=y==null?void 0:y.organization;return(0,o.jsxs)(z.GP,{children:[(0,o.jsxs)("div",{className:"mt-5 px-10 pt-5 mb-6 d-flex align-items-center",children:[(0,o.jsx)(u.mN.Avatar,{size:50,className:"me-5",src:(0,P.Fz)(r==null||(v=r.logo)===null||v===void 0?void 0:v.id,{size:"300x300"}),alt:r==null?void 0:r.name}),(0,o.jsxs)("div",{className:"d-flex flex-column",children:[(0,o.jsx)("div",{className:"fw-bolder d-flex align-items-center fs-5",children:r==null?void 0:r.name}),(0,o.jsx)("a",{href:"#",className:"fw-bold text-muted text-hover-primary fs-7",children:r==null?void 0:r.code})]})]}),(0,o.jsx)(u.v2,{className:"menu-fit menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 pb-6 my-5 my-lg-0",selectedKeys:g.map(function(a){return a.key}),children:D.filter(function(a){return!a.hideInMenu}).map(function(a){return p(a,(E==null?void 0:E.params)||{id:"id"})})})]})}_.default=O},92957:function(s,_,n){"use strict";n.d(_,{ry:function(){return t},Tk:function(){return v},RE:function(){return M},x:function(){return E},Bg:function(){return y}});var e=n(11849),m=n(20310),i=n(49704),f=n(64718),C=n(21919),z,u,P,o,p,d={},O=(0,i.Ps)(z||(z=(0,m.Z)([`
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
    `]))),t=(0,i.Ps)(u||(u=(0,m.Z)([`
    query organization($id: ID!) {
  organization(id: $id) {
    ...OrganizationProfile
  }
}
    `,""])),O);function v(a){var c=(0,e.Z)((0,e.Z)({},d),a);return f.a(t,c)}function l(a){var c=_objectSpread(_objectSpread({},d),a);return Apollo.useLazyQuery(t,c)}var D=(0,i.Ps)(P||(P=(0,m.Z)([`
    mutation updateOrganizationProfile($id: ID!, $input: UpdateOrganizationProfileUpdateInput!) {
  updateOrganizationProfile(id: $id, input: $input) {
    ...OrganizationProfile
  }
}
    `,""])),O);function M(a){var c=(0,e.Z)((0,e.Z)({},d),a);return C.D(D,c)}var g=(0,i.Ps)(o||(o=(0,m.Z)([`
    mutation renameOrganizationCode($id: ID!, $code: String!) {
  renameOrganizationCode(id: $id, code: $code) {
    ...OrganizationProfile
  }
}
    `,""])),O);function E(a){var c=(0,e.Z)((0,e.Z)({},d),a);return C.D(g,c)}var A=(0,i.Ps)(p||(p=(0,m.Z)([`
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
    `])));function y(a){var c=(0,e.Z)((0,e.Z)({},d),a);return f.a(A,c)}function r(a){var c=_objectSpread(_objectSpread({},d),a);return Apollo.useLazyQuery(A,c)}},77104:function(s,_,n){"use strict";var e=n(94184),m=n.n(e),i=n(67294),f=n(70861),C=n(76792),z=n(85893);const u={variant:"primary",active:!1,disabled:!1},P=i.forwardRef((M,D)=>{var{as:o,bsPrefix:p,variant:d,size:O,active:t,className:v}=M,l=T(M,["as","bsPrefix","variant","size","active","className"]);const g=(0,C.vE)(p,"btn"),[E,{tagName:A}]=(0,f.FT)(I({tagName:o},l)),y=A;return(0,z.jsx)(y,I(I(I({},E),l),{ref:D,className:m()(v,g,t&&"active",d&&`${g}-${d}`,O&&`${g}-${O}`,l.href&&l.disabled&&"disabled")}))});P.displayName="Button",P.defaultProps=u,_.Z=P}}]);
