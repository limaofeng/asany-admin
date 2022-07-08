(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[4843],{8305:function(K,Q,o){"use strict";o.d(Q,{HC:function(){return f},zR:function(){return g},Bo:function(){return B},dP:function(){return P},mp:function(){return h},pM:function(){return M},a$:function(){return z},hT:function(){return k},A6:function(){return N},rq:function(){return X},X4:function(){return G},LV:function(){return Y},WE:function(){return x},rz:function(){return en}});var n=o(11849),s=o(20310),i=o(49704),b=o(64718),d=o(21919),C,D,p,F,A,_,I,E,L,u,m,c,y,R,a={},Z=(0,i.Ps)(C||(C=(0,s.Z)([`
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
    `]))),v=(0,i.Ps)(D||(D=(0,s.Z)([`
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
  breadcrumb {
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
    `]))),$=(0,i.Ps)(p||(p=(0,s.Z)([`
    query myApps {
  apps: applications {
    id
    name
    title
    description
  }
}
    `])));function f(e){var t=(0,n.Z)((0,n.Z)({},a),e);return b.a($,t)}function l(e){var t=_objectSpread(_objectSpread({},a),e);return Apollo.useLazyQuery($,t)}var O=(0,i.Ps)(F||(F=(0,s.Z)([`
    query app($id: ID!) {
  app: application(id: $id) {
    id
    name
    title
    description
    dependencies {
      id
      name
      value
    }
  }
}
    `])));function g(e){var t=(0,n.Z)((0,n.Z)({},a),e);return b.a(O,t)}function U(e){var t=_objectSpread(_objectSpread({},a),e);return Apollo.useLazyQuery(O,t)}var S=(0,i.Ps)(A||(A=(0,s.Z)([`
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
    `])));function B(e){var t=(0,n.Z)((0,n.Z)({},a),e);return b.a(S,t)}function W(e){var t=_objectSpread(_objectSpread({},a),e);return Apollo.useLazyQuery(S,t)}var P=(0,i.Ps)(_||(_=(0,s.Z)([`
    query loadRoutes($id: ID!) {
  app: application(id: $id) {
    id
    routes {
      ...RouteParts
      application {
        id
      }
    }
  }
}
    `,""])),v);function h(e){var t=(0,n.Z)((0,n.Z)({},a),e);return b.a(P,t)}function j(e){var t=_objectSpread(_objectSpread({},a),e);return Apollo.useLazyQuery(P,t)}var M=(0,i.Ps)(I||(I=(0,s.Z)([`
    query loadMenus($id: ID!) {
  app: application(id: $id) {
    id
    menus {
      ...MenuParts
      hideInBreadcrumb
      hideChildrenInMenu
      hideInMenu
      authority
    }
  }
}
    `,""])),Z);function z(e){var t=(0,n.Z)((0,n.Z)({},a),e);return b.a(M,t)}function r(e){var t=_objectSpread(_objectSpread({},a),e);return Apollo.useLazyQuery(M,t)}var T=(0,i.Ps)(E||(E=(0,s.Z)([`
    mutation createMenu($input: MenuCreateInput!) {
  createMenu(input: $input) {
    ...MenuParts
    hideInBreadcrumb
    hideChildrenInMenu
    hideInMenu
    authority
    application {
      id
    }
    component {
      id
    }
  }
}
    `,""])),Z);function k(e){var t=(0,n.Z)((0,n.Z)({},a),e);return d.D(T,t)}var H=(0,i.Ps)(L||(L=(0,s.Z)([`
    mutation updateMenu($id: ID!, $input: MenuUpdateInput!) {
  updateMenu(id: $id, input: $input) {
    ...MenuParts
    hideInBreadcrumb
    hideChildrenInMenu
    hideInMenu
    authority
    application {
      id
    }
    component {
      id
    }
  }
}
    `,""])),Z);function N(e){var t=(0,n.Z)((0,n.Z)({},a),e);return d.D(H,t)}var V=(0,i.Ps)(u||(u=(0,s.Z)([`
    mutation deleteMenu($id: ID!) {
  deleteMenu(id: $id)
}
    `])));function X(e){var t=(0,n.Z)((0,n.Z)({},a),e);return d.D(V,t)}var w=(0,i.Ps)(m||(m=(0,s.Z)([`
    mutation createRoute($input: RouteCreateInput!) {
  createRoute(input: $input) {
    ...RouteParts
    hideInBreadcrumb
    access
    application {
      id
    }
    component {
      id
    }
  }
}
    `,""])),v);function G(e){var t=(0,n.Z)((0,n.Z)({},a),e);return d.D(w,t)}var J=(0,i.Ps)(c||(c=(0,s.Z)([`
    mutation updateRoute($id: ID!, $input: RouteUpdateInput!) {
  updateRoute(id: $id, input: $input) {
    ...RouteParts
    hideInBreadcrumb
    access
    application {
      id
    }
    component {
      id
    }
  }
}
    `,""])),v);function Y(e){var t=(0,n.Z)((0,n.Z)({},a),e);return d.D(J,t)}var q=(0,i.Ps)(y||(y=(0,s.Z)([`
    mutation moveRoute($id: ID!, $parentRoute: ID, $location: Int!) {
  moveRoute(id: $id, parentRoute: $parentRoute, location: $location) {
    ...RouteParts
    hideInBreadcrumb
    access
    application {
      id
    }
    component {
      id
    }
  }
}
    `,""])),v);function x(e){var t=(0,n.Z)((0,n.Z)({},a),e);return d.D(q,t)}var nn=(0,i.Ps)(R||(R=(0,s.Z)([`
    mutation deleteRoute($id: ID!) {
  deleteRoute(id: $id)
}
    `])));function en(e){var t=(0,n.Z)((0,n.Z)({},a),e);return d.D(nn,t)}},14843:function(K,Q,o){"use strict";o.d(Q,{pM:function(){return n.pM},dP:function(){return n.dP},zR:function(){return n.zR},hT:function(){return n.hT},X4:function(){return n.X4},rq:function(){return n.rq},a$:function(){return n.a$},mp:function(){return n.mp},WE:function(){return n.WE},HC:function(){return n.HC},cT:function(){return A},Hr:function(){return L},A6:function(){return n.A6},LV:function(){return n.LV}});var n=o(8305),s=o(3182),i=o(2824),b=o(94043),d=o.n(b),C=o(67294),D=o(53704),p=o(85893);function F(u,m){var c,y=(0,n.rz)({variables:{id:u==null?void 0:u.id},refetchQueries:[{query:n.dP,variables:{id:u==null||(c=u.application)===null||c===void 0?void 0:c.id}}]}),R=(0,i.Z)(y,1),a=R[0],Z=(0,C.useCallback)((0,s.Z)(d().mark(function v(){var $;return d().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,D.u_.confirm({title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u8DEF\u7531\u5417\uFF1F",content:(0,p.jsxs)(p.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,p.jsx)("strong",{children:u.name}),"\u201D\u3002\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u9006\u8F6C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u60A8\u786E\u5B9A\u5220\u9664\u5417\uFF1F"]}),okText:"\u5220 \u9664",okClassName:"btn-danger"});case 2:if($=l.sent,!$.isConfirmed){l.next=8;break}return l.next=6,a();case 6:D.FN.success("\u5220\u9664\u6210\u529F"),m(u);case 8:case"end":return l.stop()}},v)})),[a,u,m]);return[Z]}var A=F,_=o(11849),I=o(25496);function E(u,m){var c,y,R,a=D.l0.useForm(),Z=(0,C.useState)(!1),v=(0,i.Z)(Z,2),$=v[0],f=v[1],l=(0,n.X4)({fetchPolicy:"no-cache",refetchQueries:[{query:n.dP,variables:{id:u==null||(c=u.application)===null||c===void 0?void 0:c.id}}]}),O=(0,i.Z)(l,1),g=O[0],U=(0,n.LV)({fetchPolicy:"no-cache",refetchQueries:[{query:n.dP,variables:{id:u==null||(y=u.application)===null||y===void 0?void 0:y.id}}]}),S=(0,i.Z)(U,1),B=S[0],W=(0,C.useMemo)(function(){return u!=null&&u.id?(0,s.Z)(d().mark(function P(){var h,j,M;return d().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return f(!0),r.prev=1,r.next=4,a.validateFields();case 4:return h=r.sent,r.next=7,D.FN.promise((0,I.gw)(B({variables:{id:u.id,input:(0,_.Z)({},h)}}),350),{pending:"\u63D0\u4EA4\u4E2D...",success:{render:function(){return(0,p.jsxs)(p.Fragment,{children:["\u8DEF\u7531 ",(0,p.jsx)("strong",{children:h.name})," \u4FDD\u5B58\u6210\u529F"]})}},error:"\u63D0\u4EA4\u51FA\u9519"},{duration:2e3,placement:"top-center"});case 7:j=r.sent,M=j.data,m(M.updateRoute),f(!1),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(1),f(!1);case 16:case"end":return r.stop()}},P,null,[[1,13]])})):(0,s.Z)(d().mark(function P(){var h,j,M;return d().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return f(!0),r.prev=1,r.next=4,a.validateFields();case 4:return h=r.sent,r.next=7,D.FN.promise((0,I.gw)(g({variables:{input:(0,_.Z)((0,_.Z)({},h),{},{application:u.application.id})}}),350),{pending:"\u63D0\u4EA4\u4E2D...",success:{render:function(){return(0,p.jsxs)(p.Fragment,{children:["\u8DEF\u7531 ",(0,p.jsx)("strong",{children:h.name})," \u65B0\u589E\u6210\u529F"]})}},error:"\u63D0\u4EA4\u51FA\u9519"},{duration:2e3,placement:"top-center"});case 7:j=r.sent,M=j.data,m(M.createRoute),f(!1),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(1),f(!1);case 16:case"end":return r.stop()}},P,null,[[1,13]])}))},[g,u==null||(R=u.application)===null||R===void 0?void 0:R.id,u==null?void 0:u.id,a,m,B]);return[W,{form:a,submitting:$}]}var L=E}}]);
