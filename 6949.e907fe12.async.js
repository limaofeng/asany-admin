(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[6949],{87791:function(P,l,r){"use strict";r.d(l,{HC:function(){return E},zR:function(){return O},mp:function(){return Z},a$:function(){return g},hT:function(){return N},A6:function(){return R},rq:function(){return $}});var s=r(11849),o=r(20310),n=r(49704),e=r(93633),d=r(21919),c,p,m,_,i,b,v,j,M,u={},y=(0,n.Ps)(c||(c=(0,o.Z)([`
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
    `]))),A=(0,n.Ps)(p||(p=(0,o.Z)([`
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
    `]))),h=(0,n.Ps)(m||(m=(0,o.Z)([`
    query myApps {
  apps: applications {
    id
    name
    description
  }
}
    `])));function E(a){var t=(0,s.Z)((0,s.Z)({},u),a);return e.a(h,t)}function z(a){var t=_objectSpread(_objectSpread({},u),a);return Apollo.useLazyQuery(h,t)}var f=(0,n.Ps)(_||(_=(0,o.Z)([`
    query app($id: ID!) {
  app: application(id: $id) {
    id
    name
    description
  }
}
    `])));function O(a){var t=(0,s.Z)((0,s.Z)({},u),a);return e.a(f,t)}function Q(a){var t=_objectSpread(_objectSpread({},u),a);return Apollo.useLazyQuery(f,t)}var x=(0,n.Ps)(i||(i=(0,o.Z)([`
    query loadRoutes($id: ID!) {
  app: application(id: $id) {
    id
    routes {
      ...RouteParts
    }
  }
}
    `,""])),A);function Z(a){var t=(0,s.Z)((0,s.Z)({},u),a);return e.a(x,t)}function T(a){var t=_objectSpread(_objectSpread({},u),a);return Apollo.useLazyQuery(x,t)}var D=(0,n.Ps)(b||(b=(0,o.Z)([`
    query loadMenus($id: ID!) {
  app: application(id: $id) {
    id
    menus {
      ...MenuParts
    }
  }
}
    `,""])),y);function g(a){var t=(0,s.Z)((0,s.Z)({},u),a);return e.a(D,t)}function B(a){var t=_objectSpread(_objectSpread({},u),a);return Apollo.useLazyQuery(D,t)}var L=(0,n.Ps)(v||(v=(0,o.Z)([`
    mutation createMenu($input: MenuCreateInput!) {
  createMenu(input: $input) {
    ...MenuParts
  }
}
    `,""])),y);function N(a){var t=(0,s.Z)((0,s.Z)({},u),a);return d.D(L,t)}var C=(0,n.Ps)(j||(j=(0,o.Z)([`
    mutation updateMenu($id: ID!, $input: MenuUpdateInput!) {
  updateMenu(id: $id, input: $input) {
    ...MenuParts
  }
}
    `,""])),y);function R(a){var t=(0,s.Z)((0,s.Z)({},u),a);return d.D(C,t)}var I=(0,n.Ps)(M||(M=(0,o.Z)([`
    mutation deleteMenu($id: ID!) {
  deleteMenu(id: $id)
}
    `])));function $(a){var t=(0,s.Z)((0,s.Z)({},u),a);return d.D(I,t)}},6949:function(P,l,r){"use strict";r.r(l);var s=r(87791),o=r(75468),n=r(69851),e=r(85893);function d(){var c=(0,s.HC)(),p=c.data,m=p===void 0?{apps:[]}:p,_=m.apps;return(0,e.jsx)(o.v,{header:{title:"\u5E94\u7528\u7BA1\u7406"},children:(0,e.jsx)(n.X2,{gutter:6,xl:9,children:_.map(function(i){return(0,e.jsx)(n.JX,{md:6,xl:4,children:(0,e.jsxs)(n.Zb,{as:"a",to:"/apps/".concat(i.id),className:"border-hover-primary",children:[(0,e.jsxs)(n.Zb.Header,{border:!1,className:"pt-9",children:[(0,e.jsx)(n.Zb.Title,{className:"m-0",children:(0,e.jsx)(n.mN.Avatar,{size:50,labelClassName:"fs-2",className:"bg-light",src:"/assets/media/svg/brand-logos/plurk.svg",gap:3})}),(0,e.jsx)(n.Zb.Toolbar,{children:(0,e.jsx)(n.Ct,{lightStyle:"primary",className:"fw-bolder me-auto px-4 py-3",children:"In Progress"})})]}),(0,e.jsxs)(n.Zb.Body,{className:"p-9",children:[(0,e.jsx)("div",{className:"fs-3 fw-bolder text-dark",children:i.name}),(0,e.jsx)("p",{className:"text-gray-400 fw-bold fs-5 mt-1 mb-7",children:i.description}),(0,e.jsxs)("div",{className:"d-flex flex-wrap mb-5",children:[(0,e.jsxs)("div",{className:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3",children:[(0,e.jsx)("div",{className:"fs-6 text-gray-800 fw-bolder",children:"Sep 22, 2021"}),(0,e.jsx)("div",{className:"fw-bold text-gray-400",children:"Due Date"})]}),(0,e.jsxs)("div",{className:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3",children:[(0,e.jsx)("div",{className:"fs-6 text-gray-800 fw-bolder",children:"$284,900.00"}),(0,e.jsx)("div",{className:"fw-bold text-gray-400",children:"Budget"})]})]}),(0,e.jsx)(n.u,{title:"This project 50% completed",children:(0,e.jsx)("div",{className:"h-4px w-100 bg-light mb-5",children:(0,e.jsx)(n.Ex,{percent:50})})}),(0,e.jsxs)(n.mN.Group,{maxCount:5,children:[(0,e.jsx)(n.mN.Avatar,{labelClassName:"fs-2",size:35,shape:"circle",src:"/assets/media/avatars/150-1.jpg"}),(0,e.jsx)(n.mN.Avatar,{labelClassName:"fs-2",size:35,shape:"circle",src:"/assets/media/avatars/150-2.jpg"}),(0,e.jsx)(n.mN.Avatar,{labelClassName:"fs-2",size:35,shape:"circle",alt:"Susan Redwood"})]})]})]})},i.id)})})})}l.default=d}}]);
