(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[8748],{87791:function(b,_,u){"use strict";u.d(_,{HC:function(){return O},zR:function(){return L},mp:function(){return A},a$:function(){return g},hT:function(){return I},A6:function(){return w},rq:function(){return N}});var s=u(11849),i=u(20310),t=u(49704),r=u(93633),e=u(21919),v,c,M,h,d,y,m,j,p,o={},l=(0,t.Ps)(v||(v=(0,i.Z)([`
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
    `]))),E=(0,t.Ps)(c||(c=(0,i.Z)([`
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
    `]))),f=(0,t.Ps)(M||(M=(0,i.Z)([`
    query myApps {
  apps: applications {
    id
    name
    description
  }
}
    `])));function O(n){var a=(0,s.Z)((0,s.Z)({},o),n);return r.a(f,a)}function $(n){var a=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(f,a)}var D=(0,t.Ps)(h||(h=(0,i.Z)([`
    query app($id: ID!) {
  app: application(id: $id) {
    id
    name
    description
  }
}
    `])));function L(n){var a=(0,s.Z)((0,s.Z)({},o),n);return r.a(D,a)}function B(n){var a=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(D,a)}var x=(0,t.Ps)(d||(d=(0,i.Z)([`
    query loadRoutes($id: ID!) {
  app: application(id: $id) {
    id
    routes {
      ...RouteParts
    }
  }
}
    `,""])),E);function A(n){var a=(0,s.Z)((0,s.Z)({},o),n);return r.a(x,a)}function T(n){var a=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(x,a)}var P=(0,t.Ps)(y||(y=(0,i.Z)([`
    query loadMenus($id: ID!) {
  app: application(id: $id) {
    id
    menus {
      ...MenuParts
    }
  }
}
    `,""])),l);function g(n){var a=(0,s.Z)((0,s.Z)({},o),n);return r.a(P,a)}function Q(n){var a=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(P,a)}var Z=(0,t.Ps)(m||(m=(0,i.Z)([`
    mutation createMenu($input: MenuCreateInput!) {
  createMenu(input: $input) {
    ...MenuParts
  }
}
    `,""])),l);function I(n){var a=(0,s.Z)((0,s.Z)({},o),n);return e.D(Z,a)}var R=(0,t.Ps)(j||(j=(0,i.Z)([`
    mutation updateMenu($id: ID!, $input: MenuUpdateInput!) {
  updateMenu(id: $id, input: $input) {
    ...MenuParts
  }
}
    `,""])),l);function w(n){var a=(0,s.Z)((0,s.Z)({},o),n);return e.D(R,a)}var C=(0,t.Ps)(p||(p=(0,i.Z)([`
    mutation deleteMenu($id: ID!) {
  deleteMenu(id: $id)
}
    `])));function N(n){var a=(0,s.Z)((0,s.Z)({},o),n);return e.D(C,a)}},28748:function(b,_,u){"use strict";u.r(_);var s=u(28865),i=u(87791),t=u(75468),r=u(69851),e=u(85893);function v(c){var M=c.children,h=c.location.pathname,d=c.match.params.id,y=(0,i.zR)({variables:{id:d}}),m=y.data,j=m===void 0?{}:m,p=j.app,o=h.split("/")[3];return(0,e.jsxs)(t.v,{header:{title:"\u5E94\u7528\u8BE6\u60C5"},children:[(0,e.jsxs)(t.w,{children:[(0,e.jsx)(t.w.Title,{children:(0,e.jsx)("span",{className:"text-gray-800 text-hover-primary fs-2 fw-bolder me-3",children:p==null?void 0:p.name})}),(0,e.jsx)(t.w.Description,{children:p==null?void 0:p.description}),(0,e.jsx)(t.w.Cover,{children:(0,e.jsx)("img",{className:"mw-50px mw-lg-75px",src:"/assets/media/svg/brand-logos/volicity-9.svg",alt:"image"})}),(0,e.jsx)(t.w.Toolbar,{}),(0,e.jsxs)(t.w.Body,{children:[(0,e.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,e.jsx)(r.kN,{className:"min-w-125px py-3 px-4 me-6 mb-3",label:"Due Date",children:(0,e.jsx)("div",{className:"d-flex align-items-center",children:(0,e.jsx)("div",{className:"fs-4 fw-bolder",children:"29 Jan, 2021"})})}),(0,e.jsxs)(r.kN,{className:"min-w-125px py-3 px-4 me-6 mb-3",label:"Open Tasks",children:[(0,e.jsx)(s.ZP,{name:"Duotune/arr065",className:"svg-icon-3 svg-icon-danger me-2"}),(0,e.jsx)(r.I0,{className:"fs-4 fw-bolder",value:75,children:"100"})]}),(0,e.jsxs)(r.kN,{className:"min-w-125px py-3 px-4 me-6 mb-3",label:"Budget Spent",children:[(0,e.jsx)(s.ZP,{name:"Duotune/arr066",className:"svg-icon-3 svg-icon-success me-2"}),(0,e.jsx)(r.I0,{className:"fs-4 fw-bolder",value:15e3,prefix:"$",children:"0"})]})]}),(0,e.jsx)(r.mN.Group,{children:[{avatar:"",name:"Alan Warden"},{avatar:"/assets/media/avatars/150-12.jpg",name:"Michael Eberon"},{avatar:"/assets/media/avatars/150-13.jpg",name:"Michelle Swanston"},{avatar:"/assets/media/avatars/150-5.jpg",name:"Francis Mitcham"},{avatar:"",name:"Susan Redwood"},{avatar:"/assets/media/avatars/150-3.jpg",name:"Melody Macy"},{avatar:"",name:"Perry Matthew"},{avatar:"/assets/media/avatars/150-7.jpg",name:"Barry Walter"},{avatar:"",name:"Peter"}].map(function(l){return(0,e.jsx)(r.mN.Avatar,{size:35,shape:"circle",src:l.avatar,alt:l.name},l.name)})})]}),(0,e.jsx)(t.w.Footer,{className:"h-45px",children:(0,e.jsxs)(r.JL,{selectedKey:o,className:"fs-5 fw-bolder",children:[(0,e.jsx)(r.JL.Item,{href:"/apps/".concat(d,"/overview"),children:"\u6982\u89C8"},"overview"),(0,e.jsx)(r.JL.Item,{href:"/apps/".concat(d,"/menus"),children:"\u83DC\u5355"},"menus"),(0,e.jsx)(r.JL.Item,{href:"/apps/".concat(d,"/routes"),children:"\u9875\u9762"},"routes"),(0,e.jsx)(r.JL.Item,{href:"/apps/".concat(d,"/settings"),children:"\u8BBE\u7F6E"},"settings")]})})]}),M]})}_.default=v}}]);
