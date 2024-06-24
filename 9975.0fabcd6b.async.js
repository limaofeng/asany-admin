"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9975],{19975:function(Pn,F,u){u.d(F,{MZ:function(){return c},my:function(){return g},b_:function(){return l},mp:function(){return V},Yh:function(){return R},j6:function(){return pn},hD:function(){return N},a7:function(){return en},OE:function(){return dn},Sj:function(){return ln},V_:function(){return Y},gr:function(){return J},sc:function(){return tn},Nd:function(){return rn},eU:function(){return cn},ZL:function(){return gn},qV:function(){return x},M0:function(){return k},mt:function(){return on}});var W=u(97857),t=u.n(W),q=u(68400),a=u.n(q),o=u(75063),i=u(50319),d=u(73359),P=u(37887),v,$,j,b,D,Q,z,A,C,I,O,M,_,h,B,H,U,w,G,r={},s=(0,o.Ps)(v||(v=a()([`
    fragment LandingPageParts on LandingPage {
  id
  name
  status
  description
  start(format: "yyyy-MM-dd HH:mm")
  end(format: "yyyy-MM-dd HH:mm")
  poster {
    id
    name
    background
  }
  stores {
    id
    name
  }
  createdAt(format: "yyyy-MM-dd HH:mm")
  metadata {
    thumb
    title
    description
  }
}
    `]))),p=(0,o.Ps)($||($=a()([`
    fragment LandingPosterParts on LandingPoster {
  id
  name
  background
  music
  description
  createdAt(format: "yyyy-MM-dd HH:mm")
}
    `]))),y=(0,o.Ps)(j||(j=a()([`
    fragment LandingStoreParts on LandingStore {
  id
  code
  name
  address {
    province
    city
    district
    street
    detailedAddress
  }
  location {
    longitude
    latitude
  }
  qrCode
  leader
  description
  createdAt(format: "yyyy-MM-dd HH:mm")
}
    `]))),T=(0,o.Ps)(b||(b=a()([`
    mutation createPage($input: LandingPageCreateInput!) {
  page: createLandingPage(input: $input) {
    ...LandingPageParts
  }
}
    `,""])),s);function V(n){var e=t()(t()({},r),n);return i.D(T,e)}var Z=(0,o.Ps)(D||(D=a()([`
    mutation updatePage($id: ID!, $input: LandingPageUpdateInput!) {
  page: updateLandingPage(id: $id, input: $input) {
    ...LandingPageParts
  }
}
    `,""])),s);function x(n){var e=t()(t()({},r),n);return i.D(Z,e)}var E=(0,o.Ps)(Q||(Q=a()([`
    mutation deletePage($ids: [ID!]!) {
  deleteLandingPage(ids: $ids)
}
    `])));function N(n){var e=t()(t()({},r),n);return i.D(E,e)}var S=(0,o.Ps)(z||(z=a()([`
    query landingPage($id: ID!) {
  page: landingPage(id: $id) {
    ...LandingPageParts
  }
}
    `,""])),s);function yn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useQuery(S,e)}function Y(n){var e=t()(t()({},r),n);return d.t(S,e)}function Sn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(S,e)}var c=(0,o.Ps)(A||(A=a()([`
    query landingPages($where: LandingPageWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy = "createdAt_desc") {
  total: landingPagesConnection(pageSize: 1) {
    totalCount
  }
  landingPages: landingPagesConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    totalPage
    pageSize
    current: currentPage
    total: totalCount
    edges {
      node {
        ...LandingPageParts
      }
    }
  }
}
    `,""])),s);function J(n){var e=t()(t()({},r),n);return P.a(c,e)}function mn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(c,e)}function Ln(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(c,e)}var K=(0,o.Ps)(C||(C=a()([`
    mutation createPoster($input: LandingPosterCreateInput!) {
  poster: createLandingPoster(input: $input) {
    ...LandingPosterParts
  }
}
    `,""])),p);function R(n){var e=t()(t()({},r),n);return i.D(K,e)}var X=(0,o.Ps)(I||(I=a()([`
    mutation updatePoster($id: ID!, $input: LandingPosterUpdateInput!) {
  poster: updateLandingPoster(id: $id, input: $input) {
    ...LandingPosterParts
  }
}
    `,""])),p);function k(n){var e=t()(t()({},r),n);return i.D(X,e)}var nn=(0,o.Ps)(O||(O=a()([`
    mutation deletePoster($ids: [ID!]!) {
  deleteLandingPoster(ids: $ids)
}
    `])));function en(n){var e=t()(t()({},r),n);return i.D(nn,e)}var m=(0,o.Ps)(M||(M=a()([`
    query landingPoster($id: ID!) {
  poster: landingPoster(id: $id) {
    ...LandingPosterParts
  }
}
    `,""])),p);function fn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useQuery(m,e)}function tn(n){var e=t()(t()({},r),n);return d.t(m,e)}function vn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(m,e)}var g=(0,o.Ps)(_||(_=a()([`
    query landingPosters($where: LandingPosterWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy = "createdAt_desc") {
  total: landingPostersConnection(pageSize: 1) {
    totalCount
  }
  landingPosters: landingPostersConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    totalPage
    pageSize
    current: currentPage
    total: totalCount
    edges {
      node {
        ...LandingPosterParts
      }
    }
  }
}
    `,""])),p);function rn(n){var e=t()(t()({},r),n);return P.a(g,e)}function $n(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(g,e)}function jn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(g,e)}var an=(0,o.Ps)(h||(h=a()([`
    mutation updateStore($id: ID!, $input: LandingStoreUpdateInput!) {
  store: updateLandingStore(id: $id, input: $input) {
    ...LandingStoreParts
  }
}
    `,""])),y);function on(n){var e=t()(t()({},r),n);return i.D(an,e)}var un=(0,o.Ps)(B||(B=a()([`
    mutation deleteStore($ids: [ID!]!) {
  deleteLandingStore(ids: $ids)
}
    `])));function dn(n){var e=t()(t()({},r),n);return i.D(un,e)}var sn=(0,o.Ps)(H||(H=a()([`
    mutation createStore($input: LandingStoreCreateInput!) {
  store: createLandingStore(input: $input) {
    ...LandingStoreParts
  }
}
    `,""])),y);function pn(n){var e=t()(t()({},r),n);return i.D(sn,e)}var L=(0,o.Ps)(U||(U=a()([`
    query landingStore($id: ID!) {
  store: landingStore(id: $id) {
    ...LandingStoreParts
  }
}
    `,""])),y);function bn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useQuery(L,e)}function cn(n){var e=t()(t()({},r),n);return d.t(L,e)}function Dn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(L,e)}var l=(0,o.Ps)(w||(w=a()([`
    query landingStores($where: LandingStoreWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy = "createdAt_desc") {
  total: landingStoresConnection(pageSize: 1) {
    totalCount
  }
  landingStores: landingStoresConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    totalPage
    pageSize
    current: currentPage
    total: totalCount
    edges {
      node {
        id
        code
        name
        address {
          province
          city
          district
          street
          detailedAddress
          fullAddress(excludeDetailed: true)
        }
        qrCode
        leader
        description
        createdAt(format: "yyyy-MM-dd HH:mm")
      }
    }
  }
}
    `])));function gn(n){var e=t()(t()({},r),n);return P.a(l,e)}function Qn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(l,e)}function zn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(l,e)}var f=(0,o.Ps)(G||(G=a()([`
    query geocode($address: String, $city: String) {
  amapOpenAPI {
    geocodes: geocode_geo(city: $city, address: $address) {
      adcode
      district
      location
    }
  }
}
    `])));function An(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useQuery(f,e)}function ln(n){var e=t()(t()({},r),n);return d.t(f,e)}function Cn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(f,e)}}}]);
