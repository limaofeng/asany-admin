(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[6949],{8305:function(j,d,s){"use strict";s.d(d,{HC:function(){return g},zR:function(){return C},Bo:function(){return L},mp:function(){return Z},a$:function(){return N},rq:function(){return $}});var r=s(11849),u=s(20310),n=s(49704),e=s(64718),y=s(21919),p,l,c,m,_,i,v,f,M,h,o={},b=(0,n.Ps)(p||(p=(0,u.Z)([`
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
    `]))),O=(0,n.Ps)(l||(l=(0,u.Z)([`
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
    `]))),x=(0,n.Ps)(c||(c=(0,u.Z)([`
    query myApps {
  apps: applications {
    id
    name
    title
    description
  }
}
    `])));function g(t){var a=(0,r.Z)((0,r.Z)({},o),t);return e.a(x,a)}function z(t){var a=_objectSpread(_objectSpread({},o),t);return Apollo.useLazyQuery(x,a)}var D=(0,n.Ps)(m||(m=(0,u.Z)([`
    query app($id: ID!) {
  app: application(id: $id) {
    id
    name
    title
    description
  }
}
    `])));function C(t){var a=(0,r.Z)((0,r.Z)({},o),t);return e.a(D,a)}function Q(t){var a=_objectSpread(_objectSpread({},o),t);return Apollo.useLazyQuery(D,a)}var P=(0,n.Ps)(_||(_=(0,u.Z)([`
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
    `])));function L(t){var a=(0,r.Z)((0,r.Z)({},o),t);return e.a(P,a)}function B(t){var a=_objectSpread(_objectSpread({},o),t);return Apollo.useLazyQuery(P,a)}var A=(0,n.Ps)(i||(i=(0,u.Z)([`
    query loadRoutes($id: ID!) {
  app: application(id: $id) {
    id
    routes {
      ...RouteParts
    }
  }
}
    `,""])),O);function Z(t){var a=(0,r.Z)((0,r.Z)({},o),t);return e.a(A,a)}function T(t){var a=_objectSpread(_objectSpread({},o),t);return Apollo.useLazyQuery(A,a)}var E=(0,n.Ps)(v||(v=(0,u.Z)([`
    query loadMenus($id: ID!) {
  app: application(id: $id) {
    id
    menus {
      ...MenuParts
    }
  }
}
    `,""])),b);function N(t){var a=(0,r.Z)((0,r.Z)({},o),t);return e.a(E,a)}function U(t){var a=_objectSpread(_objectSpread({},o),t);return Apollo.useLazyQuery(E,a)}var S=(0,n.Ps)(f||(f=(0,u.Z)([`
    mutation createMenu($input: MenuCreateInput!) {
  createMenu(input: $input) {
    ...MenuParts
  }
}
    `,""])),b);function W(t){var a=_objectSpread(_objectSpread({},o),t);return Apollo.useMutation(S,a)}var R=(0,n.Ps)(M||(M=(0,u.Z)([`
    mutation updateMenu($id: ID!, $input: MenuUpdateInput!) {
  updateMenu(id: $id, input: $input) {
    ...MenuParts
  }
}
    `,""])),b);function K(t){var a=_objectSpread(_objectSpread({},o),t);return Apollo.useMutation(R,a)}var I=(0,n.Ps)(h||(h=(0,u.Z)([`
    mutation deleteMenu($id: ID!) {
  deleteMenu(id: $id)
}
    `])));function $(t){var a=(0,r.Z)((0,r.Z)({},o),t);return y.D(I,a)}},69736:function(j,d,s){"use strict";s.d(d,{zR:function(){return r.zR},rq:function(){return r.rq},a$:function(){return r.a$},mp:function(){return r.mp},HC:function(){return r.HC}});var r=s(8305)},6949:function(j,d,s){"use strict";s.r(d);var r=s(69736),u=s(75468),n=s(53704),e=s(85893);function y(){var p=(0,r.HC)(),l=p.data,c=l===void 0?{apps:[]}:l,m=p.loading,_=c.apps;return(0,e.jsx)(u.v,{header:{title:"\u5E94\u7528\u7BA1\u7406"},loading:m,children:(0,e.jsx)(n.X2,{gutter:{default:6,xl:9},children:_.map(function(i){return(0,e.jsx)(n.JX,{md:6,xl:4,children:(0,e.jsxs)(n.Zb,{as:"a",to:"/apps/".concat(i.id),className:"border-hover-primary",children:[(0,e.jsxs)(n.Zb.Header,{border:!1,className:"pt-9",children:[(0,e.jsx)(n.Zb.Title,{className:"m-0",children:(0,e.jsx)(n.mN.Avatar,{size:50,labelClassName:"fs-2",className:"bg-light",src:"/assets/media/svg/brand-logos/plurk.svg",gap:3})}),(0,e.jsx)(n.Zb.Toolbar,{children:(0,e.jsx)(n.Ct,{lightStyle:"primary",className:"fw-bolder me-auto px-4 py-3",children:"In Progress"})})]}),(0,e.jsxs)(n.Zb.Body,{className:"p-9",children:[(0,e.jsx)("div",{className:"fs-3 fw-bolder text-dark",children:i.title}),(0,e.jsx)("p",{className:"text-gray-400 fw-bold fs-5 mt-1 mb-7",children:i.description}),(0,e.jsxs)("div",{className:"d-flex flex-wrap mb-5",children:[(0,e.jsxs)("div",{className:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3",children:[(0,e.jsx)("div",{className:"fs-6 text-gray-800 fw-bolder",children:"Sep 22, 2021"}),(0,e.jsx)("div",{className:"fw-bold text-gray-400",children:"Due Date"})]}),(0,e.jsxs)("div",{className:"border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3",children:[(0,e.jsx)("div",{className:"fs-6 text-gray-800 fw-bolder",children:"$284,900.00"}),(0,e.jsx)("div",{className:"fw-bold text-gray-400",children:"Budget"})]})]}),(0,e.jsx)(n.u,{title:"This project 50% completed",children:(0,e.jsx)("div",{className:"h-4px w-100 bg-light mb-5",children:(0,e.jsx)(n.Ex,{percent:50})})}),(0,e.jsxs)(n.mN.Group,{maxCount:5,children:[(0,e.jsx)(n.mN.Avatar,{labelClassName:"fs-2",size:35,shape:"circle",src:"/assets/media/avatars/150-1.jpg"}),(0,e.jsx)(n.mN.Avatar,{labelClassName:"fs-2",size:35,shape:"circle",src:"/assets/media/avatars/150-2.jpg"}),(0,e.jsx)(n.mN.Avatar,{labelClassName:"fs-2",size:35,shape:"circle",alt:"Susan Redwood"})]})]})]})},i.id)})})})}d.default=y}}]);
