(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[336],{87791:function(Z,M,r){"use strict";r.d(M,{HC:function(){return p},zR:function(){return L},mp:function(){return A},a$:function(){return R},hT:function(){return I},A6:function(){return z},rq:function(){return g}});var a=r(11849),i=r(20310),d=r(49704),_=r(93633),u=r(21919),f,t,D,h,c,P,j,m,y,o={},v=(0,d.Ps)(f||(f=(0,i.Z)([`
    fragment MenuParts on Menu {
  id
  icon
  name
  path
  type
  index
  component {
    id
    template
  }
  parent {
    id
    path
  }
}
    `]))),l=(0,d.Ps)(t||(t=(0,i.Z)([`
    fragment RouteParts on Route {
  id
  name
  path
  type
  access
  authorized
  hideInBreadcrumb
  redirect
  component {
    id
    template
  }
  icon
  index
  layout {
    pure
  }
  enabled
  parent {
    id
    path
  }
}
    `]))),s=(0,d.Ps)(D||(D=(0,i.Z)([`
    query myApps {
  apps: applications {
    id
    name
    description
  }
}
    `])));function p(n){var e=(0,a.Z)((0,a.Z)({},o),n);return _.a(s,e)}function E(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(s,e)}var b=(0,d.Ps)(h||(h=(0,i.Z)([`
    query app($id: ID!) {
  app: application(id: $id) {
    id
    name
    description
  }
}
    `])));function L(n){var e=(0,a.Z)((0,a.Z)({},o),n);return _.a(b,e)}function B(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(b,e)}var x=(0,d.Ps)(c||(c=(0,i.Z)([`
    query loadRoutes($id: ID!) {
  app: application(id: $id) {
    id
    routes {
      ...RouteParts
    }
  }
}
    `,""])),l);function A(n){var e=(0,a.Z)((0,a.Z)({},o),n);return _.a(x,e)}function N(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(x,e)}var O=(0,d.Ps)(P||(P=(0,i.Z)([`
    query loadMenus($id: ID!) {
  app: application(id: $id) {
    id
    menus {
      ...MenuParts
    }
  }
}
    `,""])),v);function R(n){var e=(0,a.Z)((0,a.Z)({},o),n);return _.a(O,e)}function U(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(O,e)}var C=(0,d.Ps)(j||(j=(0,i.Z)([`
    mutation createMenu($input: MenuCreateInput!) {
  createMenu(input: $input) {
    ...MenuParts
  }
}
    `,""])),v);function I(n){var e=(0,a.Z)((0,a.Z)({},o),n);return u.D(C,e)}var T=(0,d.Ps)(m||(m=(0,i.Z)([`
    mutation updateMenu($id: ID!, $input: MenuUpdateInput!) {
  updateMenu(id: $id, input: $input) {
    ...MenuParts
  }
}
    `,""])),v);function z(n){var e=(0,a.Z)((0,a.Z)({},o),n);return u.D(T,e)}var $=(0,d.Ps)(y||(y=(0,i.Z)([`
    mutation deleteMenu($id: ID!) {
  deleteMenu(id: $id)
}
    `])));function g(n){var e=(0,a.Z)((0,a.Z)({},o),n);return u.D($,e)}},30336:function(Z,M,r){"use strict";r.r(M);var a=r(11849),i=r(67294),d=r(28865),_=r(87791),u=r(11974),f=r(25496),t=r(85893);function D(h){var c,P=h.match.params.id,j=(0,_.mp)({variables:{id:P},fetchPolicy:"cache-and-network"}),m=j.data,y=m==null||(c=m.app)===null||c===void 0?void 0:c.routes,o=(0,i.useMemo)(function(){return(0,f.G_)((y||[]).map(function(l){return(0,a.Z)({},l)}),{pidKey:"parent.id",sort:function(s,p){return s.index-p.index},converter:function(s){return(0,a.Z)((0,a.Z)({},s),{},{key:s.id,title:s.name,routeType:s.type,type:"directory"})}})},[y]),v=function(s){return function(){window.open("https://hotsoon.app.asany.cn/designer?id="+s,"_blank")}};return(0,t.jsxs)(u.Zb,{flush:!0,className:"mt-6 mt-xl-9",headerClassName:"mt-5",children:[(0,t.jsxs)(u.Zb.Header,{className:"pt-8",children:[(0,t.jsx)(u.Zb.Title,{}),(0,t.jsx)(u.Zb.Toolbar,{children:(0,t.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,t.jsx)(u.zx,{size:"sm",variant:"danger",className:"me-3",children:"\u5220\u9664"}),(0,t.jsx)(u.zx,{size:"sm",variant:"primary",children:"\u65B0\u5EFA\u8DEF\u7531"})]})})]}),(0,t.jsx)(u.Zb.Body,{className:"pt-0",children:(0,t.jsx)(u.N4,{className:"app-treelist",rowKey:"id",draggable:!0,columns:[{key:"title",title:"\u540D\u79F0",render:function(s,p){return(0,t.jsxs)("div",{className:"d-flex flex-column py-5",children:[(0,t.jsx)("span",{className:"title text-gray-800 text-hover-primary mb-1 fs-6",children:p.title}),(0,t.jsxs)("div",{className:"d-flex flex-row col-stacked",children:[(0,t.jsx)("span",{className:"me-2",children:p.path}),p.authorized&&(0,t.jsx)(u.Ct,{color:"primary",children:"\u9700\u8981\u767B\u5F55"})]})]})}},{key:"actions",title:"\u64CD\u4F5C",className:"min-w-125px",render:function(s,p){var E;return(0,t.jsx)("div",{className:"d-flex items-center h-100",children:(0,t.jsx)(u.zx,{as:"button",size:"sm",variant:"light",onClick:(E=p.component)!==null&&E!==void 0&&E.id?v(p.component.id):void 0,activeColor:"light-primary",icon:(0,t.jsx)(d.ZP,{className:"svg-icon-5 m-0",name:"Duotune/art006"})})})}}],dataSource:o})})]})}M.default=D}}]);
