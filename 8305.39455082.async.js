(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[8305],{8305:function(yn,g,p){"use strict";p.d(g,{HC:function(){return W},zR:function(){return k},Bo:function(){return T},dP:function(){return s},mp:function(){return K},pM:function(){return m},a$:function(){return q},hT:function(){return x},A6:function(){return V},rq:function(){return w},X4:function(){return J},LV:function(){return Y},WE:function(){return en},rz:function(){return on},u7:function(){return l},qb:function(){return un},CF:function(){return rn},bI:function(){return dn},_5:function(){return sn},bo:function(){return mn},r3:function(){return _n}});var t=p(11849),u=p(20310),a=p(49704),r=p(64718),i=p(21919),_,y,D,v,b,M,Z,f,C,$,I,P,j,R,h,L,O,A,S,Q,o={},c=(0,a.Ps)(_||(_=(0,u.Z)([`
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
    `]))),d=(0,a.Ps)(y||(y=(0,u.Z)([`
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
    hideMenu
  }
  enabled
  parent {
    id
    path
  }
}
    `]))),z=(0,a.Ps)(D||(D=(0,u.Z)([`
    query myApps {
  apps: applications {
    id
    name
    title
    description
  }
}
    `])));function W(n){var e=(0,t.Z)((0,t.Z)({},o),n);return r.a(z,e)}function Dn(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(z,e)}var E=(0,a.Ps)(v||(v=(0,u.Z)([`
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
    `])));function k(n){var e=(0,t.Z)((0,t.Z)({},o),n);return r.a(E,e)}function vn(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(E,e)}var U=(0,a.Ps)(b||(b=(0,u.Z)([`
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
    `])));function T(n){var e=(0,t.Z)((0,t.Z)({},o),n);return r.a(U,e)}function bn(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(U,e)}var s=(0,a.Ps)(M||(M=(0,u.Z)([`
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
    `,""])),d);function K(n){var e=(0,t.Z)((0,t.Z)({},o),n);return r.a(s,e)}function Mn(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(s,e)}var m=(0,a.Ps)(Z||(Z=(0,u.Z)([`
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
    `,""])),c);function q(n){var e=(0,t.Z)((0,t.Z)({},o),n);return r.a(m,e)}function Zn(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(m,e)}var F=(0,a.Ps)(f||(f=(0,u.Z)([`
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
    `,""])),c);function x(n){var e=(0,t.Z)((0,t.Z)({},o),n);return i.D(F,e)}var H=(0,a.Ps)(C||(C=(0,u.Z)([`
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
    `,""])),c);function V(n){var e=(0,t.Z)((0,t.Z)({},o),n);return i.D(H,e)}var X=(0,a.Ps)($||($=(0,u.Z)([`
    mutation deleteMenu($id: ID!) {
  deleteMenu(id: $id)
}
    `])));function w(n){var e=(0,t.Z)((0,t.Z)({},o),n);return i.D(X,e)}var G=(0,a.Ps)(I||(I=(0,u.Z)([`
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
    `,""])),d);function J(n){var e=(0,t.Z)((0,t.Z)({},o),n);return i.D(G,e)}var N=(0,a.Ps)(P||(P=(0,u.Z)([`
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
    `,""])),d);function Y(n){var e=(0,t.Z)((0,t.Z)({},o),n);return i.D(N,e)}var nn=(0,a.Ps)(j||(j=(0,u.Z)([`
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
    `,""])),d);function en(n){var e=(0,t.Z)((0,t.Z)({},o),n);return i.D(nn,e)}var tn=(0,a.Ps)(R||(R=(0,u.Z)([`
    mutation deleteRoute($id: ID!) {
  deleteRoute(id: $id)
}
    `])));function on(n){var e=(0,t.Z)((0,t.Z)({},o),n);return i.D(tn,e)}var l=(0,a.Ps)(h||(h=(0,u.Z)([`
    query loadComponents($id: ID!) {
  library: componentLibrary(id: $id) {
    id
    name
    components {
      id
      name
      title
      description
      image
      template
      tags
      createdAt
      blocks {
        key
        props
      }
    }
  }
}
    `])));function un(n){var e=(0,t.Z)((0,t.Z)({},o),n);return r.a(l,e)}function fn(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(l,e)}var an=(0,a.Ps)(L||(L=(0,u.Z)([`
    mutation createComponent($input: ComponentCreateInput!) {
  createComponent(input: $input) {
    id
    type
    name
    title
    template
  }
}
    `])));function rn(n){var e=(0,t.Z)((0,t.Z)({},o),n);return i.D(an,e)}var pn=(0,a.Ps)(O||(O=(0,u.Z)([`
    mutation updateComponent($id: ID!, $input: ComponentUpdateInput!) {
  updateComponent(id: $id, input: $input) {
    id
    type
    name
    title
    template
  }
}
    `])));function dn(n){var e=(0,t.Z)((0,t.Z)({},o),n);return i.D(pn,e)}var cn=(0,a.Ps)(A||(A=(0,u.Z)([`
    mutation deleteComponent($id: ID!) {
  deleteComponent(id: $id)
}
    `])));function sn(n){var e=(0,t.Z)((0,t.Z)({},o),n);return i.D(cn,e)}var B=(0,a.Ps)(S||(S=(0,u.Z)([`
    query Component($id: ID!) {
  component(id: $id) {
    id
    name
    title
    description
    image
    template
    tags
    createdAt
    blocks {
      key
      props
    }
  }
}
    `])));function mn(n){var e=(0,t.Z)((0,t.Z)({},o),n);return r.a(B,e)}function Cn(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(B,e)}var ln=(0,a.Ps)(Q||(Q=(0,u.Z)([`
    mutation saveComponent($id: ID!, $input: ComponentUpdateInput!) {
  updateComponent(id: $id, input: $input) {
    id
    name
    template
    blocks {
      key
      props
    }
  }
}
    `])));function _n(n){var e=(0,t.Z)((0,t.Z)({},o),n);return i.D(ln,e)}}}]);
