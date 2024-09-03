"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[551],{86235:function(K,p,d){d.d(p,{BC:function(){return ie},Ew:function(){return Y},FA:function(){return ce},Fm:function(){return se},G6:function(){return ee},LF:function(){return ve},Mg:function(){return N},U1:function(){return ge},Ux:function(){return te},Vh:function(){return X},X9:function(){return Ae},YG:function(){return Le},aT:function(){return c},ac:function(){return ne},an:function(){return J},bR:function(){return Me},f0:function(){return Qe},hb:function(){return Pe},kN:function(){return re},qX:function(){return ye},rD:function(){return Ce},rq:function(){return Oe},tY:function(){return ue},wE:function(){return _e},xL:function(){return be}});var a=d(97857),t=d.n(a),q=d(68400),o=d.n(q),u=d(75063),s=d(37887),i=d(50319),S,b,$,M,j,h,g,I,A,w,Q,B,C,O,L,W,k,z,E,T,U,F,R,x,G,H,r={},c=(0,u.Ps)(S||(S=o()([`
    query deviceQrCodes($page: Int, $pageSize: Int, $orderBy: OrderBy = "createdAt_desc") {
  deviceQrCodes: shortLinksConnection(
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    pageInfo {
      totalPages
      pageSize
      total
      current
    }
    edges {
      node {
        id
        code
        url
        category
        accessCount
        expiresAt(format: "yyyy-MM-dd HH:mm:ss")
        createdAt(format: "yyyy-MM-dd HH:mm:ss")
        metadata
      }
    }
  }
}
    `])));function X(e){var n=t()(t()({},r),e);return s.a(c,n)}function We(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(c,n)}function ke(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(c,n)}var l=(0,u.Ps)(b||(b=o()([`
    query devices($where: DeviceWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy = "createdAt_desc") {
  result: devicesConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    pageInfo {
      totalPages
      pageSize
      total
      current
    }
    edges {
      node {
        id
        no
        sn
        name
        status {
          id
          name
        }
        brand {
          id
          name
        }
        owner {
          id
          name
          ... on CustomerStore {
            customer {
              id
              name
            }
          }
        }
        warrantyStatus
        warrantyEndDate(format: "yyyy-MM-dd")
        address {
          province
          city
          district
          street
          detailedAddress
          fullAddress(excludeDetailed: true)
        }
        createdAt(format: "yyyy-MM-dd")
      }
    }
  }
}
    `])));function Y(e){var n=t()(t()({},r),e);return s.a(l,n)}function ze(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(l,n)}function Ee(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(l,n)}var y=(0,u.Ps)($||($=o()([`
    query device($id: ID!) {
  result: device(id: $id) {
    id
    no
    sn
    name
    brand {
      id
      name
    }
    warrantyStatus
    purchaseDate(format: "yyyy-MM-dd")
    warrantyStartDate(format: "yyyy-MM-dd")
    warrantyEndDate(format: "yyyy-MM-dd")
    warrantyCards {
      id
      status
      endDate
      policy {
        id
      }
    }
    address {
      country
      province
      city
      district
      street
      detailedAddress
    }
    contactInfo {
      name
      phone
      email
    }
    product {
      id
      name
    }
    owner {
      id
      ... on CustomerStore {
        name
        customer {
          id
          name
          ticketStrategy
        }
      }
    }
    createdAt(format: "yyyy-MM-dd HH:mm")
    createdBy {
      id
      name
    }
    updatedAt(format: "yyyy-MM-dd HH:mm")
    updatedBy {
      id
      name
    }
  }
}
    `])));function N(e){var n=t()(t()({},r),e);return s.a(y,n)}function Te(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(y,n)}function Ue(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(y,n)}var V=(0,u.Ps)(M||(M=o()([`
    mutation deleteManyDevices($where: DeviceWhereInput) {
  result: deleteManyDevices(where: $where) {
    count
  }
}
    `])));function J(e){var n=t()(t()({},r),e);return i.D(V,n)}var Z=(0,u.Ps)(j||(j=o()([`
    mutation updateDevice($id: ID!, $input: DeviceUpdateInput!) {
  result: updateDevice(id: $id, input: $input) {
    id
  }
}
    `])));function ee(e){var n=t()(t()({},r),e);return i.D(Z,n)}var m=(0,u.Ps)(h||(h=o()([`
    query brands($where: BrandWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy = "createdAt_desc") {
  result: brandsConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    pageInfo {
      totalPages
      pageSize
      total
      current
    }
    edges {
      node {
        id
        name
        createdAt(format: "yyyy-MM-dd")
        description
      }
    }
  }
}
    `])));function ne(e){var n=t()(t()({},r),e);return s.a(m,n)}function Fe(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(m,n)}function Re(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(m,n)}var _=(0,u.Ps)(g||(g=o()([`
    query productAll($where: ProductWhereInput) {
  products(where: $where, limit: 100) {
    id
    name
    brand {
      id
      name
    }
    warrantyPolicies {
      id
      name
      duration
    }
    images {
      id
      url
      alt
      title
      description
    }
  }
}
    `])));function te(e){var n=t()(t()({},r),e);return s.a(_,n)}function xe(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(_,n)}function Ge(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(_,n)}var f=(0,u.Ps)(I||(I=o()([`
    query products($where: ProductWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy = "createdAt_desc") {
  result: productsConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    pageInfo {
      totalPages
      pageSize
      total
      current
    }
    edges {
      node {
        id
        name
        brand {
          id
          name
        }
        createdAt(format: "yyyy-MM-dd")
      }
    }
  }
}
    `])));function re(e){var n=t()(t()({},r),e);return s.a(f,n)}function He(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(f,n)}function Ke(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(f,n)}var oe=(0,u.Ps)(A||(A=o()([`
    mutation deleteManyProducts($where: ProductWhereInput) {
  result: deleteManyProducts(where: $where) {
    count
  }
}
    `])));function ue(e){var n=t()(t()({},r),e);return i.D(oe,n)}var ae=(0,u.Ps)(w||(w=o()([`
    mutation deleteManyShortLinks($where: ShortLinkWhereInput) {
  result: deleteManyShortLinks(where: $where) {
    count
  }
}
    `])));function ie(e){var n=t()(t()({},r),e);return i.D(ae,n)}var de=(0,u.Ps)(Q||(Q=o()([`
    mutation generateShortLinks($links: [ShortLinkCreateInput!]!) {
  result: generateShortLinks(links: $links) {
    id
    code
    url
    accessCount
    metadata
  }
}
    `])));function se(e){var n=t()(t()({},r),e);return i.D(de,n)}var v=(0,u.Ps)(B||(B=o()([`
    query product($id: ID!) {
  result: product(id: $id) {
    id
    name
    brand {
      id
      name
    }
    warrantyPolicies {
      id
      name
      duration
      createdAt(format: "yyyy-MM-dd")
    }
    images {
      id
      url
      alt
      title
      description
      image
    }
    videos: articles(linkageType: "videos") {
      id
      title
      createdAt(format: "yyyy-MM-dd")
    }
    knowledgebase: articles(linkageType: "knowledgebase") {
      id
      title
      createdAt(format: "yyyy-MM-dd")
    }
    notebook: articles(linkageType: "notebook") {
      id
      title
    }
    tutorials: articles(linkageType: "tutorials") {
      id
      title
    }
    createdAt(format: "yyyy-MM-dd")
  }
}
    `])));function ce(e){var n=t()(t()({},r),e);return s.a(v,n)}function qe(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(v,n)}function Xe(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(v,n)}var pe=(0,u.Ps)(C||(C=o()([`
    mutation deleteProduct($id: ID!) {
  result: deleteProduct(id: $id) {
    id
  }
}
    `])));function Ye(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useMutation(pe,n)}var le=(0,u.Ps)(O||(O=o()([`
    mutation createProduct($input: ProductCreateInput!) {
  result: createProduct(input: $input) {
    id
  }
}
    `])));function ye(e){var n=t()(t()({},r),e);return i.D(le,n)}var me=(0,u.Ps)(L||(L=o()([`
    mutation updateProduct($id: ID!, $input: ProductUpdateInput!) {
  result: updateProduct(id: $id, input: $input) {
    id
  }
}
    `])));function _e(e){var n=t()(t()({},r),e);return i.D(me,n)}var fe=(0,u.Ps)(W||(W=o()([`
    mutation addArticleToProduct($productId: ID!, $linkageType: String!, $articleIds: [ID!]!) {
  result: addArticlesToProduct(
    productId: $productId
    linkageType: $linkageType
    articleIds: $articleIds
  ) {
    id
  }
}
    `])));function ve(e){var n=t()(t()({},r),e);return i.D(fe,n)}var De=(0,u.Ps)(k||(k=o()([`
    mutation removeArticleFromProduct($productId: ID!, $linkageType: String!, $articleIds: [ID!]!) {
  result: removeArticlesFromProduct(
    productId: $productId
    linkageType: $linkageType
    articleIds: $articleIds
  ) {
    id
  }
}
    `])));function Pe(e){var n=t()(t()({},r),e);return i.D(De,n)}var Se=(0,u.Ps)(z||(z=o()([`
    mutation createWarrantyPolicy($input: WarrantyPolicyCreateInput!) {
  result: createWarrantyPolicy(input: $input) {
    id
  }
}
    `])));function be(e){var n=t()(t()({},r),e);return i.D(Se,n)}var $e=(0,u.Ps)(E||(E=o()([`
    mutation updateWarrantyPolicy($id: ID!, $input: WarrantyPolicyUpdateInput!) {
  result: updateWarrantyPolicy(id: $id, input: $input) {
    id
  }
}
    `])));function Me(e){var n=t()(t()({},r),e);return i.D($e,n)}var je=(0,u.Ps)(T||(T=o()([`
    mutation deleteWarrantyPolicy($id: ID!) {
  result: deleteWarrantyPolicy(id: $id) {
    id
  }
}
    `])));function Ne(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useMutation(je,n)}var he=(0,u.Ps)(U||(U=o()([`
    mutation deleteManyWarrantyPolicies($where: WarrantyPolicyWhereInput) {
  result: deleteManyWarrantyPolicies(where: $where) {
    count
  }
}
    `])));function ge(e){var n=t()(t()({},r),e);return i.D(he,n)}var Ie=(0,u.Ps)(F||(F=o()([`
    mutation createBrand($input: BrandCreateInput!) {
  result: createBrand(input: $input) {
    id
    name
    description
  }
}
    `])));function Ae(e){var n=t()(t()({},r),e);return i.D(Ie,n)}var we=(0,u.Ps)(R||(R=o()([`
    mutation updateBrand($id: ID!, $input: BrandUpdateInput!) {
  result: updateBrand(id: $id, input: $input) {
    id
    name
    description
  }
}
    `])));function Qe(e){var n=t()(t()({},r),e);return i.D(we,n)}var Be=(0,u.Ps)(x||(x=o()([`
    mutation deleteManyBrands($where: BrandWhereInput) {
  result: deleteManyBrands(where: $where) {
    count
  }
}
    `])));function Ce(e){var n=t()(t()({},r),e);return i.D(Be,n)}var D=(0,u.Ps)(G||(G=o()([`
    query customers($where: CustomerWhereInput, $limit: Int = 1000) {
  result: customers(where: $where, limit: $limit) {
    id
    name
  }
}
    `])));function Oe(e){var n=t()(t()({},r),e);return s.a(D,n)}function Ve(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(D,n)}function Je(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(D,n)}var P=(0,u.Ps)(H||(H=o()([`
    query customerStores($where: CustomerStoreWhereInput, $limit: Int = 1000) {
  result: customerStores(where: $where, limit: $limit) {
    id
    name
    address {
      province
      city
      district
      street
      detailedAddress
    }
    contactInfo {
      name
      phone
      email
    }
  }
}
    `])));function Le(e){var n=t()(t()({},r),e);return s.a(P,n)}function Ze(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(P,n)}function en(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(P,n)}},60551:function(K,p,d){d.d(p,{BC:function(){return a.BC},Ew:function(){return a.Ew},FA:function(){return a.FA},Fm:function(){return a.Fm},G6:function(){return a.G6},LF:function(){return a.LF},Mg:function(){return a.Mg},U1:function(){return a.U1},Ux:function(){return a.Ux},Vh:function(){return a.Vh},X9:function(){return a.X9},YG:function(){return a.YG},aT:function(){return a.aT},ac:function(){return a.ac},an:function(){return a.an},bR:function(){return a.bR},f0:function(){return a.f0},hb:function(){return a.hb},kN:function(){return a.kN},qX:function(){return a.qX},rq:function(){return a.rq},wE:function(){return a.wE},xL:function(){return a.xL}});var a=d(86235)}}]);
