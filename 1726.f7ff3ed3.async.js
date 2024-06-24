"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1726],{91726:function(_e,x,d){d.d(x,{aT:function(){return s},LF:function(){return me},ac:function(){return Z},X9:function(){return he},qX:function(){return ce},xL:function(){return De},YG:function(){return Ce},rq:function(){return Be},rD:function(){return we},an:function(){return Y},BC:function(){return re},U1:function(){return je},xq:function(){return de},Vh:function(){return R},Mg:function(){return N},Ew:function(){return X},Fm:function(){return oe},Ux:function(){return ee},FA:function(){return ue},kN:function(){return ne},hb:function(){return Se},f0:function(){return Ae},G6:function(){return K},wE:function(){return ye},bR:function(){return Pe}});var E=d(97857),t=d.n(E),G=d(68400),a=d.n(G),o=d(75063),i=d(37887),u=d(50319),D,$,P,b,g,j,M,h,I,A,Q,w,B,C,_,z,L,O,W,k,T,U,H,F,q,r={},s=(0,o.Ps)(D||(D=a()([`
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
    `])));function R(e){var n=t()(t()({},r),e);return i.a(s,n)}function ze(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(s,n)}function Le(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(s,n)}var c=(0,o.Ps)($||($=a()([`
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
    `])));function X(e){var n=t()(t()({},r),e);return i.a(c,n)}function Oe(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(c,n)}function We(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(c,n)}var p=(0,o.Ps)(P||(P=a()([`
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
    `])));function N(e){var n=t()(t()({},r),e);return i.a(p,n)}function ke(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(p,n)}function Te(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(p,n)}var V=(0,o.Ps)(b||(b=a()([`
    mutation deleteManyDevices($where: DeviceWhereInput) {
  result: deleteManyDevices(where: $where) {
    count
  }
}
    `])));function Y(e){var n=t()(t()({},r),e);return u.D(V,n)}var J=(0,o.Ps)(g||(g=a()([`
    mutation updateDevice($id: ID!, $input: DeviceUpdateInput!) {
  result: updateDevice(id: $id, input: $input) {
    id
  }
}
    `])));function K(e){var n=t()(t()({},r),e);return u.D(J,n)}var y=(0,o.Ps)(j||(j=a()([`
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
    `])));function Z(e){var n=t()(t()({},r),e);return i.a(y,n)}function Ue(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(y,n)}function He(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(y,n)}var l=(0,o.Ps)(M||(M=a()([`
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
    `])));function ee(e){var n=t()(t()({},r),e);return i.a(l,n)}function Fe(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(l,n)}function qe(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(l,n)}var m=(0,o.Ps)(h||(h=a()([`
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
    `])));function ne(e){var n=t()(t()({},r),e);return i.a(m,n)}function xe(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(m,n)}function Ee(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(m,n)}var te=(0,o.Ps)(I||(I=a()([`
    mutation deleteManyShortLinks($where: ShortLinkWhereInput) {
  result: deleteManyShortLinks(where: $where) {
    count
  }
}
    `])));function re(e){var n=t()(t()({},r),e);return u.D(te,n)}var ae=(0,o.Ps)(A||(A=a()([`
    mutation generateShortLinks($links: [ShortLinkCreateInput!]!) {
  result: generateShortLinks(links: $links) {
    id
    code
    url
    accessCount
    metadata
  }
}
    `])));function oe(e){var n=t()(t()({},r),e);return u.D(ae,n)}var v=(0,o.Ps)(Q||(Q=a()([`
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
    `])));function ue(e){var n=t()(t()({},r),e);return i.a(v,n)}function Ge(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(v,n)}function Re(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(v,n)}var ie=(0,o.Ps)(w||(w=a()([`
    mutation deleteProduct($id: ID!) {
  result: deleteProduct(id: $id) {
    id
  }
}
    `])));function de(e){var n=t()(t()({},r),e);return u.D(ie,n)}var se=(0,o.Ps)(B||(B=a()([`
    mutation createProduct($input: ProductCreateInput!) {
  result: createProduct(input: $input) {
    id
  }
}
    `])));function ce(e){var n=t()(t()({},r),e);return u.D(se,n)}var pe=(0,o.Ps)(C||(C=a()([`
    mutation updateProduct($id: ID!, $input: ProductUpdateInput!) {
  result: updateProduct(id: $id, input: $input) {
    id
  }
}
    `])));function ye(e){var n=t()(t()({},r),e);return u.D(pe,n)}var le=(0,o.Ps)(_||(_=a()([`
    mutation addArticleToProduct($productId: ID!, $linkageType: String!, $articleIds: [ID!]!) {
  result: addArticlesToProduct(
    productId: $productId
    linkageType: $linkageType
    articleIds: $articleIds
  ) {
    id
  }
}
    `])));function me(e){var n=t()(t()({},r),e);return u.D(le,n)}var ve=(0,o.Ps)(z||(z=a()([`
    mutation removeArticleFromProduct($productId: ID!, $linkageType: String!, $articleIds: [ID!]!) {
  result: removeArticlesFromProduct(
    productId: $productId
    linkageType: $linkageType
    articleIds: $articleIds
  ) {
    id
  }
}
    `])));function Se(e){var n=t()(t()({},r),e);return u.D(ve,n)}var fe=(0,o.Ps)(L||(L=a()([`
    mutation createWarrantyPolicy($input: WarrantyPolicyCreateInput!) {
  result: createWarrantyPolicy(input: $input) {
    id
  }
}
    `])));function De(e){var n=t()(t()({},r),e);return u.D(fe,n)}var $e=(0,o.Ps)(O||(O=a()([`
    mutation updateWarrantyPolicy($id: ID!, $input: WarrantyPolicyUpdateInput!) {
  result: updateWarrantyPolicy(id: $id, input: $input) {
    id
  }
}
    `])));function Pe(e){var n=t()(t()({},r),e);return u.D($e,n)}var be=(0,o.Ps)(W||(W=a()([`
    mutation deleteWarrantyPolicy($id: ID!) {
  result: deleteWarrantyPolicy(id: $id) {
    id
  }
}
    `])));function Xe(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useMutation(be,n)}var ge=(0,o.Ps)(k||(k=a()([`
    mutation deleteManyWarrantyPolicies($where: WarrantyPolicyWhereInput) {
  result: deleteManyWarrantyPolicies(where: $where) {
    count
  }
}
    `])));function je(e){var n=t()(t()({},r),e);return u.D(ge,n)}var Me=(0,o.Ps)(T||(T=a()([`
    mutation createBrand($input: BrandCreateInput!) {
  result: createBrand(input: $input) {
    id
    name
    description
  }
}
    `])));function he(e){var n=t()(t()({},r),e);return u.D(Me,n)}var Ie=(0,o.Ps)(U||(U=a()([`
    mutation updateBrand($id: ID!, $input: BrandUpdateInput!) {
  result: updateBrand(id: $id, input: $input) {
    id
    name
    description
  }
}
    `])));function Ae(e){var n=t()(t()({},r),e);return u.D(Ie,n)}var Qe=(0,o.Ps)(H||(H=a()([`
    mutation deleteManyBrands($where: BrandWhereInput) {
  result: deleteManyBrands(where: $where) {
    count
  }
}
    `])));function we(e){var n=t()(t()({},r),e);return u.D(Qe,n)}var S=(0,o.Ps)(F||(F=a()([`
    query customers($where: CustomerWhereInput, $limit: Int = 1000) {
  result: customers(where: $where, limit: $limit) {
    id
    name
  }
}
    `])));function Be(e){var n=t()(t()({},r),e);return i.a(S,n)}function Ne(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(S,n)}function Ve(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(S,n)}var f=(0,o.Ps)(q||(q=a()([`
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
    `])));function Ce(e){var n=t()(t()({},r),e);return i.a(f,n)}function Ye(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(f,n)}function Je(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(f,n)}}}]);
