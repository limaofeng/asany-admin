(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[5859],{8305:function(b,_,r){"use strict";r.d(_,{HC:function(){return M},zR:function(){return Z},Bo:function(){return C},mp:function(){return R},a$:function(){return I},rq:function(){return B}});var t=r(11849),o=r(20310),i=r(49704),l=r(64718),s=r(21919),f,a,h,j,m,D,P,y,v,E,u={},c=(0,i.Ps)(f||(f=(0,o.Z)([`
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
    `]))),d=(0,i.Ps)(a||(a=(0,o.Z)([`
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
    `]))),p=(0,i.Ps)(h||(h=(0,o.Z)([`
    query myApps {
  apps: applications {
    id
    name
    title
    description
  }
}
    `])));function M(n){var e=(0,t.Z)((0,t.Z)({},u),n);return l.a(p,e)}function T(n){var e=_objectSpread(_objectSpread({},u),n);return Apollo.useLazyQuery(p,e)}var O=(0,i.Ps)(j||(j=(0,o.Z)([`
    query app($id: ID!) {
  app: application(id: $id) {
    id
    name
    title
    description
  }
}
    `])));function Z(n){var e=(0,t.Z)((0,t.Z)({},u),n);return l.a(O,e)}function U(n){var e=_objectSpread(_objectSpread({},u),n);return Apollo.useLazyQuery(O,e)}var x=(0,i.Ps)(m||(m=(0,o.Z)([`
    query appWithClientSecret($id: ID!) {
  app: application(id: $id) {
    id
    name
    title
    description
    clientId
    clientSecrets {
      id
      secret
      createdAt
      createdBy
      lastUseTime
    }
  }
}
    `])));function C(n){var e=(0,t.Z)((0,t.Z)({},u),n);return l.a(x,e)}function W(n){var e=_objectSpread(_objectSpread({},u),n);return Apollo.useLazyQuery(x,e)}var A=(0,i.Ps)(D||(D=(0,o.Z)([`
    query loadRoutes($id: ID!) {
  app: application(id: $id) {
    id
    routes {
      ...RouteParts
    }
  }
}
    `,""])),d);function R(n){var e=(0,t.Z)((0,t.Z)({},u),n);return l.a(A,e)}function g(n){var e=_objectSpread(_objectSpread({},u),n);return Apollo.useLazyQuery(A,e)}var L=(0,i.Ps)(P||(P=(0,o.Z)([`
    query loadMenus($id: ID!) {
  app: application(id: $id) {
    id
    menus {
      ...MenuParts
    }
  }
}
    `,""])),c);function I(n){var e=(0,t.Z)((0,t.Z)({},u),n);return l.a(L,e)}function Q(n){var e=_objectSpread(_objectSpread({},u),n);return Apollo.useLazyQuery(L,e)}var S=(0,i.Ps)(y||(y=(0,o.Z)([`
    mutation createMenu($input: MenuCreateInput!) {
  createMenu(input: $input) {
    ...MenuParts
  }
}
    `,""])),c);function K(n){var e=_objectSpread(_objectSpread({},u),n);return Apollo.useMutation(S,e)}var z=(0,i.Ps)(v||(v=(0,o.Z)([`
    mutation updateMenu($id: ID!, $input: MenuUpdateInput!) {
  updateMenu(id: $id, input: $input) {
    ...MenuParts
  }
}
    `,""])),c);function N(n){var e=_objectSpread(_objectSpread({},u),n);return Apollo.useMutation(z,e)}var $=(0,i.Ps)(E||(E=(0,o.Z)([`
    mutation deleteMenu($id: ID!) {
  deleteMenu(id: $id)
}
    `])));function B(n){var e=(0,t.Z)((0,t.Z)({},u),n);return s.D($,e)}},69736:function(b,_,r){"use strict";r.d(_,{zR:function(){return t.zR},rq:function(){return t.rq},a$:function(){return t.a$},mp:function(){return t.mp},HC:function(){return t.HC}});var t=r(8305)},5859:function(b,_,r){"use strict";r.r(_);var t=r(11849),o=r(67294),i=r(28865),l=r(69736),s=r(53704),f=r(25496),a=r(85893);function h(j){var m,D=j.match.params.id,P=(0,l.mp)({variables:{id:D},fetchPolicy:"cache-and-network"}),y=P.data,v=y==null||(m=y.app)===null||m===void 0?void 0:m.routes,E=(0,o.useMemo)(function(){return(0,f.G_)((v||[]).map(function(c){return(0,t.Z)({},c)}),{pidKey:"parent.id",sort:function(d,p){return d.index-p.index},converter:function(d){return(0,t.Z)((0,t.Z)({},d),{},{key:d.id,title:d.name,routeType:d.type,type:"directory"})}})},[v]),u=function(d){return function(){window.open("https://hotsoon.app.asany.cn/designer?id="+d,"_blank")}};return(0,a.jsxs)(s.Zb,{flush:!0,className:"mt-6 mt-xl-9",headerClassName:"mt-5",children:[(0,a.jsxs)(s.Zb.Header,{className:"pt-8",children:[(0,a.jsx)(s.Zb.Title,{}),(0,a.jsx)(s.Zb.Toolbar,{children:(0,a.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,a.jsx)(s.zx,{size:"sm",variant:"danger",className:"me-3",children:"\u5220\u9664"}),(0,a.jsx)(s.zx,{size:"sm",variant:"primary",children:"\u65B0\u5EFA\u8DEF\u7531"})]})})]}),(0,a.jsx)(s.Zb.Body,{className:"pt-0",children:(0,a.jsx)(s.N4,{className:"app-treelist",rowKey:"id",draggable:!0,columns:[{key:"title",title:"\u540D\u79F0",render:function(d,p){return(0,a.jsxs)("div",{className:"d-flex flex-column py-5",children:[(0,a.jsx)("span",{className:"title text-gray-800 text-hover-primary mb-1 fs-6",children:p.title}),(0,a.jsxs)("div",{className:"d-flex flex-row col-stacked",children:[(0,a.jsx)("span",{className:"me-2",children:p.path}),p.authorized&&(0,a.jsx)(s.Ct,{color:"primary",children:"\u9700\u8981\u767B\u5F55"})]})]})}},{key:"actions",title:"\u64CD\u4F5C",className:"min-w-125px",render:function(d,p){var M;return(0,a.jsx)("div",{className:"d-flex items-center h-100",children:(0,a.jsx)(s.zx,{as:"button",size:"sm",variant:"light",onClick:(M=p.component)!==null&&M!==void 0&&M.id?u(p.component.id):void 0,activeColor:"light-primary",icon:(0,a.jsx)(i.ZP,{className:"svg-icon-5 m-0",name:"Duotune/art006"})})})}}],dataSource:E})})]})}_.default=h}}]);
