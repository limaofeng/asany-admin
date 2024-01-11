(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[250],{250:function(pn,q,d){"use strict";d.d(q,{MZ:function(){return P},my:function(){return l},b_:function(){return m},mp:function(){return G},Yh:function(){return Y},j6:function(){return un},hD:function(){return x},a7:function(){return X},OE:function(){return on},Sj:function(){return cn},V_:function(){return E},gr:function(){return N},sc:function(){return nn},Nd:function(){return en},eU:function(){return sn},ZL:function(){return gn},qV:function(){return V},M0:function(){return K},mt:function(){return an}});var t=d(11849),r=d(20310),o=d(76058),i=d(21919),u=d(38460),c=d(64718),y,L,S,$,f,Z,v,D,b,j,z,C,I,O,M,Q,h,A,_,a={},s=(0,o.Ps)(y||(y=(0,r.Z)([`
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
    `]))),g=(0,o.Ps)(L||(L=(0,r.Z)([`
    fragment LandingPosterParts on LandingPoster {
  id
  name
  background
  music
  description
  createdAt(format: "yyyy-MM-dd HH:mm")
}
    `]))),p=(0,o.Ps)(S||(S=(0,r.Z)([`
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
    `]))),F=(0,o.Ps)($||($=(0,r.Z)([`
    mutation createPage($input: LandingPageCreateInput!) {
  page: createLandingPage(input: $input) {
    ...LandingPageParts
  }
}
    `,""])),s);function G(n){var e=(0,t.Z)((0,t.Z)({},a),n);return i.D(F,e)}var W=(0,o.Ps)(f||(f=(0,r.Z)([`
    mutation updatePage($id: ID!, $input: LandingPageUpdateInput!) {
  page: updateLandingPage(id: $id, input: $input) {
    ...LandingPageParts
  }
}
    `,""])),s);function V(n){var e=(0,t.Z)((0,t.Z)({},a),n);return i.D(W,e)}var k=(0,o.Ps)(Z||(Z=(0,r.Z)([`
    mutation deletePage($ids: [ID!]!) {
  deleteLandingPage(ids: $ids)
}
    `])));function x(n){var e=(0,t.Z)((0,t.Z)({},a),n);return i.D(k,e)}var B=(0,o.Ps)(v||(v=(0,r.Z)([`
    query landingPage($id: ID!) {
  page: landingPage(id: $id) {
    ...LandingPageParts
  }
}
    `,""])),s);function Pn(n){var e=_objectSpread(_objectSpread({},a),n);return Apollo.useQuery(B,e)}function E(n){var e=(0,t.Z)((0,t.Z)({},a),n);return u.t(B,e)}var P=(0,o.Ps)(D||(D=(0,r.Z)([`
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
    `,""])),s);function N(n){var e=(0,t.Z)((0,t.Z)({},a),n);return c.a(P,e)}function ln(n){var e=_objectSpread(_objectSpread({},a),n);return Apollo.useLazyQuery(P,e)}var T=(0,o.Ps)(b||(b=(0,r.Z)([`
    mutation createPoster($input: LandingPosterCreateInput!) {
  poster: createLandingPoster(input: $input) {
    ...LandingPosterParts
  }
}
    `,""])),g);function Y(n){var e=(0,t.Z)((0,t.Z)({},a),n);return i.D(T,e)}var J=(0,o.Ps)(j||(j=(0,r.Z)([`
    mutation updatePoster($id: ID!, $input: LandingPosterUpdateInput!) {
  poster: updateLandingPoster(id: $id, input: $input) {
    ...LandingPosterParts
  }
}
    `,""])),g);function K(n){var e=(0,t.Z)((0,t.Z)({},a),n);return i.D(J,e)}var R=(0,o.Ps)(z||(z=(0,r.Z)([`
    mutation deletePoster($ids: [ID!]!) {
  deleteLandingPoster(ids: $ids)
}
    `])));function X(n){var e=(0,t.Z)((0,t.Z)({},a),n);return i.D(R,e)}var H=(0,o.Ps)(C||(C=(0,r.Z)([`
    query landingPoster($id: ID!) {
  poster: landingPoster(id: $id) {
    ...LandingPosterParts
  }
}
    `,""])),g);function mn(n){var e=_objectSpread(_objectSpread({},a),n);return Apollo.useQuery(H,e)}function nn(n){var e=(0,t.Z)((0,t.Z)({},a),n);return u.t(H,e)}var l=(0,o.Ps)(I||(I=(0,r.Z)([`
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
    `,""])),g);function en(n){var e=(0,t.Z)((0,t.Z)({},a),n);return c.a(l,e)}function yn(n){var e=_objectSpread(_objectSpread({},a),n);return Apollo.useLazyQuery(l,e)}var tn=(0,o.Ps)(O||(O=(0,r.Z)([`
    mutation updateStore($id: ID!, $input: LandingStoreUpdateInput!) {
  store: updateLandingStore(id: $id, input: $input) {
    ...LandingStoreParts
  }
}
    `,""])),p);function an(n){var e=(0,t.Z)((0,t.Z)({},a),n);return i.D(tn,e)}var rn=(0,o.Ps)(M||(M=(0,r.Z)([`
    mutation deleteStore($ids: [ID!]!) {
  deleteLandingStore(ids: $ids)
}
    `])));function on(n){var e=(0,t.Z)((0,t.Z)({},a),n);return i.D(rn,e)}var dn=(0,o.Ps)(Q||(Q=(0,r.Z)([`
    mutation createStore($input: LandingStoreCreateInput!) {
  store: createLandingStore(input: $input) {
    ...LandingStoreParts
  }
}
    `,""])),p);function un(n){var e=(0,t.Z)((0,t.Z)({},a),n);return i.D(dn,e)}var U=(0,o.Ps)(h||(h=(0,r.Z)([`
    query landingStore($id: ID!) {
  store: landingStore(id: $id) {
    ...LandingStoreParts
  }
}
    `,""])),p);function Ln(n){var e=_objectSpread(_objectSpread({},a),n);return Apollo.useQuery(U,e)}function sn(n){var e=(0,t.Z)((0,t.Z)({},a),n);return u.t(U,e)}var m=(0,o.Ps)(A||(A=(0,r.Z)([`
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
    `])));function gn(n){var e=(0,t.Z)((0,t.Z)({},a),n);return c.a(m,e)}function Sn(n){var e=_objectSpread(_objectSpread({},a),n);return Apollo.useLazyQuery(m,e)}var w=(0,o.Ps)(_||(_=(0,r.Z)([`
    query geocode($address: String, $city: String) {
  amapOpenAPI {
    geocodes: geocode_geo(city: $city, address: $address) {
      adcode
      district
      location
    }
  }
}
    `])));function $n(n){var e=_objectSpread(_objectSpread({},a),n);return Apollo.useQuery(w,e)}function cn(n){var e=(0,t.Z)((0,t.Z)({},a),n);return u.t(w,e)}}}]);
