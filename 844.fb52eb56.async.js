(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[844],{8305:function(S,h,a){"use strict";a.d(h,{HC:function(){return y},zR:function(){return x},Bo:function(){return c},mp:function(){return D},a$:function(){return N},rq:function(){return $}});var r=a(11849),_=a(20310),l=a(49704),b=a(64718),O=a(21919),m,A,L,s,C,I,e,Z,R,p,u={},f=(0,l.Ps)(m||(m=(0,_.Z)([`
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
    `]))),P=(0,l.Ps)(A||(A=(0,_.Z)([`
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
    `]))),M=(0,l.Ps)(L||(L=(0,_.Z)([`
    query myApps {
  apps: applications {
    id
    name
    title
    description
  }
}
    `])));function y(n){var t=(0,r.Z)((0,r.Z)({},u),n);return b.a(M,t)}function T(n){var t=_objectSpread(_objectSpread({},u),n);return Apollo.useLazyQuery(M,t)}var v=(0,l.Ps)(s||(s=(0,_.Z)([`
    query app($id: ID!) {
  app: application(id: $id) {
    id
    name
    title
    description
  }
}
    `])));function x(n){var t=(0,r.Z)((0,r.Z)({},u),n);return b.a(v,t)}function g(n){var t=_objectSpread(_objectSpread({},u),n);return Apollo.useLazyQuery(v,t)}var E=(0,l.Ps)(C||(C=(0,_.Z)([`
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
    `])));function c(n){var t=(0,r.Z)((0,r.Z)({},u),n);return b.a(E,t)}function i(n){var t=_objectSpread(_objectSpread({},u),n);return Apollo.useLazyQuery(E,t)}var o=(0,l.Ps)(I||(I=(0,_.Z)([`
    query loadRoutes($id: ID!) {
  app: application(id: $id) {
    id
    routes {
      ...RouteParts
    }
  }
}
    `,""])),P);function D(n){var t=(0,r.Z)((0,r.Z)({},u),n);return b.a(o,t)}function B(n){var t=_objectSpread(_objectSpread({},u),n);return Apollo.useLazyQuery(o,t)}var j=(0,l.Ps)(e||(e=(0,_.Z)([`
    query loadMenus($id: ID!) {
  app: application(id: $id) {
    id
    menus {
      ...MenuParts
    }
  }
}
    `,""])),f);function N(n){var t=(0,r.Z)((0,r.Z)({},u),n);return b.a(j,t)}function U(n){var t=_objectSpread(_objectSpread({},u),n);return Apollo.useLazyQuery(j,t)}var d=(0,l.Ps)(Z||(Z=(0,_.Z)([`
    mutation createMenu($input: MenuCreateInput!) {
  createMenu(input: $input) {
    ...MenuParts
  }
}
    `,""])),f);function K(n){var t=_objectSpread(_objectSpread({},u),n);return Apollo.useMutation(d,t)}var F=(0,l.Ps)(R||(R=(0,_.Z)([`
    mutation updateMenu($id: ID!, $input: MenuUpdateInput!) {
  updateMenu(id: $id, input: $input) {
    ...MenuParts
  }
}
    `,""])),f);function k(n){var t=_objectSpread(_objectSpread({},u),n);return Apollo.useMutation(F,t)}var W=(0,l.Ps)(p||(p=(0,_.Z)([`
    mutation deleteMenu($id: ID!) {
  deleteMenu(id: $id)
}
    `])));function $(n){var t=(0,r.Z)((0,r.Z)({},u),n);return O.D(W,t)}},69736:function(S,h,a){"use strict";a.d(h,{zR:function(){return r.zR},rq:function(){return r.rq},a$:function(){return r.a$},mp:function(){return r.mp},HC:function(){return r.HC}});var r=a(8305)},70844:function(S,h,a){"use strict";a.r(h);var r=a(11849),_=a(3182),l=a(2824),b=a(94043),O=a.n(b),m=a(67294),A=a(28865),L=a(75468),s=a(53704),C=a(69736),I=a(25496),e=a(85893);function Z(p){var u=p.data,f=p.refetch,P=p.onEdit,M=(0,m.useState)(!1),y=(0,l.Z)(M,2),T=y[0],v=y[1],x=(0,C.rq)({variables:{id:u.id}}),g=(0,l.Z)(x,1),E=g[0],c=(0,m.useCallback)(function(){var i=(0,_.Z)(O().mark(function o(D){var B,j,N;return O().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(B=D.key,j=D.domEvent,j.preventDefault(),j.stopPropagation(),v(!1),B!=="update"){d.next=8;break}P(u),d.next=17;break;case 8:if(B!=="delete"){d.next=17;break}return d.next=11,s.u_.confirm({title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u83DC\u5355\u5417\uFF1F",content:"\u60A8\u5373\u5C06\u5220\u9664\u201C<strong>".concat(u.name,"</strong>\u201D\u3002\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u9006\u8F6C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u60A8\u786E\u5B9A\u5220\u9664\u5417\uFF1F"),okText:"\u5220 \u9664",cancelClassName:"btn btn-secondary btn-sm",okClassName:"btn btn-danger btn-sm"});case 11:if(N=d.sent,!N.isConfirmed){d.next=17;break}return d.next=15,E();case 15:return d.next=17,f();case 17:case"end":return d.stop()}},o)}));return function(o){return i.apply(this,arguments)}}(),[u]);return(0,e.jsx)("div",{className:"d-flex justify-content-end",children:(0,e.jsx)("div",{className:"ms-2",children:(0,e.jsx)(s.Lt,{overlay:(0,e.jsxs)(s.v2,{onClick:c,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,e.jsx)(s.v2.Item,{className:"px-3",children:"\u7F16\u8F91"},"update"),(0,e.jsx)(s.v2.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",onVisibleChange:v,visible:T,children:(0,e.jsx)(s.zx,{as:"button",size:"sm",variant:"light",activeColor:"light-primary",className:"me-2",icon:(0,e.jsx)(A.JO,{className:"svg-icon-5 m-0",name:"Duotune/gen052"})})})})})}function R(p){var u,f=p.match;console.log("match",f.params);var P=352,M=(0,C.a$)({variables:{id:P}}),y=M.data,T=M.refetch,v=y==null||(u=y.app)===null||u===void 0?void 0:u.menus,x=(0,m.useMemo)(function(){return(0,I.G_)((v||[]).map(function(c){return(0,r.Z)({},c)}),{pidKey:"parent.id",sort:function(i,o){return i.index-o.index},converter:function(i){return(0,r.Z)((0,r.Z)({},i),{},{key:i.id,title:i.name,menuType:i.type,type:"directory"})}})},[v]),g=(0,m.useCallback)(function(){},[]),E=(0,m.useCallback)(function(){},[]);return(0,e.jsx)(L.v,{header:{title:"\u5BFC\u822A\u83DC\u5355"},breadcrumb:(0,e.jsxs)(s.aG,{className:"fw-bold fs-base text-muted my-1",children:[(0,e.jsx)(s.aG.Item,{children:"\u8BBE\u7F6E"}),(0,e.jsx)(s.aG.Item,{children:"\u5BFC\u822A\u83DC\u5355"})]}),loading:!1,footer:!1,children:(0,e.jsxs)(s.Zb,{flush:!0,className:"mt-6 mt-xl-9",headerClassName:"mt-5",children:[(0,e.jsxs)(s.Zb.Header,{className:"pt-8",children:[(0,e.jsx)(s.Zb.Title,{}),(0,e.jsx)(s.Zb.Toolbar,{children:(0,e.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,e.jsx)(s.zx,{variant:"danger",className:"me-3",children:"\u5220\u9664"}),(0,e.jsx)(s.zx,{onClick:g,variant:"primary",children:"\u65B0\u5EFA\u83DC\u5355"})]})})]}),(0,e.jsx)(s.Zb.Body,{className:"pt-0",children:(0,e.jsx)(s.N4,{className:"app-treelist",rowKey:"id",draggable:!0,columns:[{key:"title",title:"\u540D\u79F0",render:function(i,o){var D={SECTION:{color:"info"},URL:{color:"primary"},MENU:{color:"success"},SCRIPT:{color:"dark"}};return(0,e.jsxs)("div",{className:"d-flex flex-column py-5",children:[(0,e.jsx)("span",{className:"title text-gray-800 text-hover-primary mb-1 fs-6",children:o.title}),(0,e.jsxs)("div",{className:"d-flex flex-row col-stacked",children:[(0,e.jsx)(s.Ct,{color:D[o.menuType].color,children:o.menuType}),(0,e.jsx)("span",{className:"tw-pl-2",children:o.path})]})]})}},{key:"index",title:"\u6392\u5E8F",className:"w-100px"},{key:"enabled",title:"\u542F\u7528\u72B6\u6001",className:"w-100px",render:function(i){return i?"\u542F\u7528":"\u7981\u7528"}},{key:"component",title:"\u5B50\u9762\u677F\u6E32\u67D3\u7EC4\u4EF6",className:"w-150px",render:function(i,o){return o.component?"\u6709\u7EC4\u4EF6":"\u65E0\u7EC4\u4EF6"}},{key:"actions",title:"\u64CD\u4F5C",className:"min-w-125px",render:function(i,o){return(0,e.jsx)(Z,{onEdit:E,data:o,refetch:T})}}],dataSource:x})})]})})}h.default=R}}]);
