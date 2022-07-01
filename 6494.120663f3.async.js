(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[6494],{8305:function(S,E,a){"use strict";a.d(E,{HC:function(){return D},zR:function(){return O},Bo:function(){return o},mp:function(){return j},a$:function(){return g},rq:function(){return W}});var r=a(11849),_=a(20310),i=a(49704),b=a(64718),A=a(21919),p,L,P,I,s,Z,e,T,R,y,u={},f=(0,i.Ps)(p||(p=(0,_.Z)([`
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
    `]))),h=(0,i.Ps)(L||(L=(0,_.Z)([`
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
    `]))),v=(0,i.Ps)(P||(P=(0,_.Z)([`
    query myApps {
  apps: applications {
    id
    name
    title
    description
  }
}
    `])));function D(n){var t=(0,r.Z)((0,r.Z)({},u),n);return b.a(v,t)}function x(n){var t=_objectSpread(_objectSpread({},u),n);return Apollo.useLazyQuery(v,t)}var M=(0,i.Ps)(I||(I=(0,_.Z)([`
    query app($id: ID!) {
  app: application(id: $id) {
    id
    name
    title
    description
  }
}
    `])));function O(n){var t=(0,r.Z)((0,r.Z)({},u),n);return b.a(M,t)}function B(n){var t=_objectSpread(_objectSpread({},u),n);return Apollo.useLazyQuery(M,t)}var c=(0,i.Ps)(s||(s=(0,_.Z)([`
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
    `])));function o(n){var t=(0,r.Z)((0,r.Z)({},u),n);return b.a(c,t)}function l(n){var t=_objectSpread(_objectSpread({},u),n);return Apollo.useLazyQuery(c,t)}var m=(0,i.Ps)(Z||(Z=(0,_.Z)([`
    query loadRoutes($id: ID!) {
  app: application(id: $id) {
    id
    routes {
      ...RouteParts
    }
  }
}
    `,""])),h);function j(n){var t=(0,r.Z)((0,r.Z)({},u),n);return b.a(m,t)}function N(n){var t=_objectSpread(_objectSpread({},u),n);return Apollo.useLazyQuery(m,t)}var C=(0,i.Ps)(e||(e=(0,_.Z)([`
    query loadMenus($id: ID!) {
  app: application(id: $id) {
    id
    menus {
      ...MenuParts
    }
  }
}
    `,""])),f);function g(n){var t=(0,r.Z)((0,r.Z)({},u),n);return b.a(C,t)}function U(n){var t=_objectSpread(_objectSpread({},u),n);return Apollo.useLazyQuery(C,t)}var d=(0,i.Ps)(T||(T=(0,_.Z)([`
    mutation createMenu($input: MenuCreateInput!) {
  createMenu(input: $input) {
    ...MenuParts
  }
}
    `,""])),f);function K(n){var t=_objectSpread(_objectSpread({},u),n);return Apollo.useMutation(d,t)}var $=(0,i.Ps)(R||(R=(0,_.Z)([`
    mutation updateMenu($id: ID!, $input: MenuUpdateInput!) {
  updateMenu(id: $id, input: $input) {
    ...MenuParts
  }
}
    `,""])),f);function k(n){var t=_objectSpread(_objectSpread({},u),n);return Apollo.useMutation($,t)}var F=(0,i.Ps)(y||(y=(0,_.Z)([`
    mutation deleteMenu($id: ID!) {
  deleteMenu(id: $id)
}
    `])));function W(n){var t=(0,r.Z)((0,r.Z)({},u),n);return A.D(F,t)}},69736:function(S,E,a){"use strict";a.d(E,{zR:function(){return r.zR},rq:function(){return r.rq},a$:function(){return r.a$},mp:function(){return r.mp},HC:function(){return r.HC}});var r=a(8305)},26494:function(S,E,a){"use strict";a.r(E);var r=a(11849),_=a(3182),i=a(2824),b=a(94043),A=a.n(b),p=a(67294),L=a(28865),P=a(69736),I=a(75468),s=a(53704),Z=a(25496),e=a(85893);function T(y){var u=y.data,f=y.refetch,h=y.onEdit,v=(0,p.useState)(!1),D=(0,i.Z)(v,2),x=D[0],M=D[1],O=(0,P.rq)({variables:{id:u.id}}),B=(0,i.Z)(O,1),c=B[0],o=(0,p.useCallback)(function(){var l=(0,_.Z)(A().mark(function m(j){var N,C,g;return A().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(N=j.key,C=j.domEvent,C.preventDefault(),C.stopPropagation(),M(!1),N!=="update"){d.next=8;break}h(u),d.next=17;break;case 8:if(N!=="delete"){d.next=17;break}return d.next=11,s.u_.confirm({title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u83DC\u5355\u5417\uFF1F",content:"\u60A8\u5373\u5C06\u5220\u9664\u201C<strong>".concat(u.name,"</strong>\u201D\u3002\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u9006\u8F6C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u60A8\u786E\u5B9A\u5220\u9664\u5417\uFF1F"),okText:"\u5220 \u9664",cancelClassName:"btn btn-secondary btn-sm",okClassName:"btn btn-danger btn-sm"});case 11:if(g=d.sent,!g.isConfirmed){d.next=17;break}return d.next=15,c();case 15:return d.next=17,f();case 17:case"end":return d.stop()}},m)}));return function(m){return l.apply(this,arguments)}}(),[u]);return(0,e.jsx)("div",{className:"d-flex justify-content-end",children:(0,e.jsx)("div",{className:"ms-2",children:(0,e.jsx)(s.Lt,{overlay:(0,e.jsxs)(s.v2,{onClick:o,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,e.jsx)(s.v2.Item,{className:"px-3",children:"\u7F16\u8F91"},"update"),(0,e.jsx)(s.v2.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",onVisibleChange:M,visible:x,children:(0,e.jsx)(s.zx,{as:"button",size:"sm",variant:"light",activeColor:"light-primary",className:"me-2",icon:(0,e.jsx)(L.ZP,{className:"svg-icon-5 m-0",name:"Duotune/gen052"})})})})})}function R(y){var u,f=y.match.params.id,h=(0,P.a$)({variables:{id:f}}),v=h.data,D=h.refetch,x=v==null||(u=v.app)===null||u===void 0?void 0:u.menus,M=(0,p.useMemo)(function(){return(0,Z.G_)((x||[]).map(function(c){return(0,r.Z)({},c)}),{pidKey:"parent.id",sort:function(o,l){return o.index-l.index},converter:function(o){return(0,r.Z)((0,r.Z)({},o),{},{key:o.id,title:o.name,menuType:o.type,type:"directory"})}})},[x]),O=(0,p.useCallback)(function(){},[]),B=(0,p.useCallback)(function(){},[]);return(0,e.jsx)(I.v,{header:{title:"\u5BFC\u822A\u83DC\u5355"},breadcrumb:(0,e.jsxs)(s.aG,{className:"fw-bold fs-base text-muted my-1",children:[(0,e.jsx)(s.aG.Item,{children:"\u8BBE\u7F6E"}),(0,e.jsx)(s.aG.Item,{children:"\u5BFC\u822A\u83DC\u5355"})]}),loading:!1,footer:!1,children:(0,e.jsxs)(s.Zb,{flush:!0,className:"mt-6 mt-xl-9",headerClassName:"mt-5",children:[(0,e.jsxs)(s.Zb.Header,{className:"pt-8",children:[(0,e.jsx)(s.Zb.Title,{}),(0,e.jsx)(s.Zb.Toolbar,{children:(0,e.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,e.jsx)(s.zx,{variant:"danger",className:"me-3",children:"\u5220\u9664"}),(0,e.jsx)(s.zx,{onClick:O,variant:"primary",children:"\u65B0\u5EFA\u83DC\u5355"})]})})]}),(0,e.jsx)(s.Zb.Body,{className:"pt-0",children:(0,e.jsx)(s.N4,{className:"app-treelist",rowKey:"id",draggable:!0,columns:[{key:"title",title:"\u540D\u79F0",render:function(o,l){var m,j={SECTION:{color:"info"},URL:{color:"primary"},MENU:{color:"success"},SCRIPT:{color:"dark"}};return(0,e.jsxs)("div",{className:"d-flex flex-column py-5",children:[(0,e.jsx)("span",{className:"title text-gray-800 text-hover-primary mb-1 fs-6",children:l.title}),(0,e.jsxs)("div",{className:"d-flex flex-row col-stacked",children:[(0,e.jsx)(s.Ct,{color:(m=j[l.menuType])===null||m===void 0?void 0:m.color,children:l.menuType}),(0,e.jsx)("span",{className:"tw-pl-2",children:l.path})]})]})}},{key:"index",title:"\u6392\u5E8F",className:"w-100px"},{key:"enabled",title:"\u542F\u7528\u72B6\u6001",className:"w-100px",render:function(o){return o?"\u542F\u7528":"\u7981\u7528"}},{key:"component",title:"\u5B50\u9762\u677F\u6E32\u67D3\u7EC4\u4EF6",className:"w-150px",render:function(o,l){return l.component?"\u6709\u7EC4\u4EF6":"\u65E0\u7EC4\u4EF6"}},{key:"actions",title:"\u64CD\u4F5C",className:"min-w-125px",render:function(o,l){return(0,e.jsx)(T,{onEdit:B,data:l,refetch:D})}}],dataSource:M})})]})})}E.default=R}}]);
