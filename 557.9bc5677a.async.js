"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[557],{10557:function(vn,g,i){i.d(g,{A6:function(){return G},Bo:function(){return q},CF:function(){return sn},HC:function(){return K},LV:function(){return en},WE:function(){return on},X4:function(){return Z},_5:function(){return _n},a$:function(){return H},bI:function(){return cn},bo:function(){return ln},dP:function(){return d},hT:function(){return X},mp:function(){return x},pM:function(){return c},qb:function(){return rn},r3:function(){return bn},rq:function(){return N},rz:function(){return an},u7:function(){return m},zR:function(){return F}});var T=i(97857),t=i.n(T),k=i(68400),u=i.n(k),a=i(75063),p=i(37887),r=i(50319),D,M,f,j,C,S,$,P,I,h,R,A,L,O,Q,E,U,z,B,W,o={},_=(0,a.Ps)(D||(D=u()([`
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
    `]))),s=(0,a.Ps)(M||(M=u()([`
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
    `]))),l=(0,a.Ps)(f||(f=u()([`
    query myApps {
  apps: applications {
    id
    name
    title
    description
  }
}
    `])));function K(n){var e=t()(t()({},o),n);return p.a(l,e)}function Dn(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(l,e)}function Mn(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useSuspenseQuery(l,e)}var y=(0,a.Ps)(j||(j=u()([`
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
    `])));function F(n){var e=t()(t()({},o),n);return p.a(y,e)}function fn(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(y,e)}function jn(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useSuspenseQuery(y,e)}var b=(0,a.Ps)(C||(C=u()([`
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
    `])));function q(n){var e=t()(t()({},o),n);return p.a(b,e)}function Cn(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(b,e)}function Sn(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useSuspenseQuery(b,e)}var d=(0,a.Ps)(S||(S=u()([`
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
    `,""])),s);function x(n){var e=t()(t()({},o),n);return p.a(d,e)}function $n(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(d,e)}function Pn(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useSuspenseQuery(d,e)}var c=(0,a.Ps)($||($=u()([`
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
    `,""])),_);function H(n){var e=t()(t()({},o),n);return p.a(c,e)}function In(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(c,e)}function hn(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useSuspenseQuery(c,e)}var V=(0,a.Ps)(P||(P=u()([`
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
    `,""])),_);function X(n){var e=t()(t()({},o),n);return r.D(V,e)}var w=(0,a.Ps)(I||(I=u()([`
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
    `,""])),_);function G(n){var e=t()(t()({},o),n);return r.D(w,e)}var J=(0,a.Ps)(h||(h=u()([`
    mutation deleteMenu($id: ID!) {
  deleteMenu(id: $id)
}
    `])));function N(n){var e=t()(t()({},o),n);return r.D(J,e)}var Y=(0,a.Ps)(R||(R=u()([`
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
    `,""])),s);function Z(n){var e=t()(t()({},o),n);return r.D(Y,e)}var nn=(0,a.Ps)(A||(A=u()([`
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
    `,""])),s);function en(n){var e=t()(t()({},o),n);return r.D(nn,e)}var tn=(0,a.Ps)(L||(L=u()([`
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
    `,""])),s);function on(n){var e=t()(t()({},o),n);return r.D(tn,e)}var un=(0,a.Ps)(O||(O=u()([`
    mutation deleteRoute($id: ID!) {
  deleteRoute(id: $id)
}
    `])));function an(n){var e=t()(t()({},o),n);return r.D(un,e)}var m=(0,a.Ps)(Q||(Q=u()([`
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
    `])));function rn(n){var e=t()(t()({},o),n);return p.a(m,e)}function Rn(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(m,e)}function An(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useSuspenseQuery(m,e)}var pn=(0,a.Ps)(E||(E=u()([`
    mutation createComponent($input: ComponentCreateInput!) {
  createComponent(input: $input) {
    id
    type
    name
    title
    template
  }
}
    `])));function sn(n){var e=t()(t()({},o),n);return r.D(pn,e)}var dn=(0,a.Ps)(U||(U=u()([`
    mutation updateComponent($id: ID!, $input: ComponentUpdateInput!) {
  updateComponent(id: $id, input: $input) {
    id
    type
    name
    title
    template
  }
}
    `])));function cn(n){var e=t()(t()({},o),n);return r.D(dn,e)}var mn=(0,a.Ps)(z||(z=u()([`
    mutation deleteComponent($id: ID!) {
  deleteComponent(id: $id)
}
    `])));function _n(n){var e=t()(t()({},o),n);return r.D(mn,e)}var v=(0,a.Ps)(B||(B=u()([`
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
    `])));function ln(n){var e=t()(t()({},o),n);return p.a(v,e)}function Ln(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(v,e)}function On(n){var e=_objectSpread(_objectSpread({},o),n);return Apollo.useSuspenseQuery(v,e)}var yn=(0,a.Ps)(W||(W=u()([`
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
    `])));function bn(n){var e=t()(t()({},o),n);return r.D(yn,e)}}}]);
