"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[551],{86235:function(H,p,d){d.d(p,{BC:function(){return cn},Eg:function(){return V},Ew:function(){return Y},FA:function(){return yn},Fm:function(){return ln},G6:function(){return tn},LF:function(){return Sn},Mg:function(){return J},U1:function(){return wn},Ux:function(){return on},Vh:function(){return N},X9:function(){return Qn},YG:function(){return kn},aT:function(){return c},ac:function(){return rn},an:function(){return nn},bR:function(){return gn},f0:function(){return On},hb:function(){return $n},kN:function(){return un},qX:function(){return fn},rD:function(){return Wn},rq:function(){return En},tY:function(){return dn},wE:function(){return Dn},xL:function(){return hn}});var o=d(97857),t=d.n(o),q=d(68400),u=d.n(q),a=d(75063),s=d(37887),X=d(73359),i=d(50319),S,b,$,M,h,j,g,I,A,w,B,Q,C,O,L,W,E,k,z,T,U,R,F,x,K,G,r={},c=(0,a.Ps)(S||(S=u()([`
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
    `])));function N(n){var e=t()(t()({},r),n);return s.a(c,e)}function zn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(c,e)}function Tn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(c,e)}var l=(0,a.Ps)(b||(b=u()([`
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
      hasNextPage
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
        product {
          id
          name
        }
        store: owner {
          id
          ... on CustomerStore {
            no
            name
            address {
              province
              city
              district
              street
              detailedAddress
              fullAddress(excludeDetailed: false)
            }
            phone
            customer {
              id
              name
            }
          }
        }
        warrantyStatus
        warrantyStartDate(format: "yyyy-MM-dd")
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
    `])));function Y(n){var e=t()(t()({},r),n);return s.a(l,e)}function V(n){var e=t()(t()({},r),n);return X.t(l,e)}function Un(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(l,e)}var y=(0,a.Ps)($||($=u()([`
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
    `])));function J(n){var e=t()(t()({},r),n);return s.a(y,e)}function Rn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(y,e)}function Fn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(y,e)}var Z=(0,a.Ps)(M||(M=u()([`
    mutation deleteManyDevices($where: DeviceWhereInput) {
  result: deleteManyDevices(where: $where) {
    count
  }
}
    `])));function nn(n){var e=t()(t()({},r),n);return i.D(Z,e)}var en=(0,a.Ps)(h||(h=u()([`
    mutation updateDevice($id: ID!, $input: DeviceUpdateInput!) {
  result: updateDevice(id: $id, input: $input) {
    id
  }
}
    `])));function tn(n){var e=t()(t()({},r),n);return i.D(en,e)}var m=(0,a.Ps)(j||(j=u()([`
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
    `])));function rn(n){var e=t()(t()({},r),n);return s.a(m,e)}function xn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(m,e)}function Kn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(m,e)}var _=(0,a.Ps)(g||(g=u()([`
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
    `])));function on(n){var e=t()(t()({},r),n);return s.a(_,e)}function Gn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(_,e)}function Hn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(_,e)}var f=(0,a.Ps)(I||(I=u()([`
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
    `])));function un(n){var e=t()(t()({},r),n);return s.a(f,e)}function qn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(f,e)}function Xn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(f,e)}var an=(0,a.Ps)(A||(A=u()([`
    mutation deleteManyProducts($where: ProductWhereInput) {
  result: deleteManyProducts(where: $where) {
    count
  }
}
    `])));function dn(n){var e=t()(t()({},r),n);return i.D(an,e)}var sn=(0,a.Ps)(w||(w=u()([`
    mutation deleteManyShortLinks($where: ShortLinkWhereInput) {
  result: deleteManyShortLinks(where: $where) {
    count
  }
}
    `])));function cn(n){var e=t()(t()({},r),n);return i.D(sn,e)}var pn=(0,a.Ps)(B||(B=u()([`
    mutation generateShortLinks($links: [ShortLinkCreateInput!]!) {
  result: generateShortLinks(links: $links) {
    id
    code
    url
    accessCount
    metadata
  }
}
    `])));function ln(n){var e=t()(t()({},r),n);return i.D(pn,e)}var v=(0,a.Ps)(Q||(Q=u()([`
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
    `])));function yn(n){var e=t()(t()({},r),n);return s.a(v,e)}function Nn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(v,e)}function Yn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(v,e)}var mn=(0,a.Ps)(C||(C=u()([`
    mutation deleteProduct($id: ID!) {
  result: deleteProduct(id: $id) {
    id
  }
}
    `])));function Vn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useMutation(mn,e)}var _n=(0,a.Ps)(O||(O=u()([`
    mutation createProduct($input: ProductCreateInput!) {
  result: createProduct(input: $input) {
    id
  }
}
    `])));function fn(n){var e=t()(t()({},r),n);return i.D(_n,e)}var vn=(0,a.Ps)(L||(L=u()([`
    mutation updateProduct($id: ID!, $input: ProductUpdateInput!) {
  result: updateProduct(id: $id, input: $input) {
    id
  }
}
    `])));function Dn(n){var e=t()(t()({},r),n);return i.D(vn,e)}var Pn=(0,a.Ps)(W||(W=u()([`
    mutation addArticleToProduct($productId: ID!, $linkageType: String!, $articleIds: [ID!]!) {
  result: addArticlesToProduct(
    productId: $productId
    linkageType: $linkageType
    articleIds: $articleIds
  ) {
    id
  }
}
    `])));function Sn(n){var e=t()(t()({},r),n);return i.D(Pn,e)}var bn=(0,a.Ps)(E||(E=u()([`
    mutation removeArticleFromProduct($productId: ID!, $linkageType: String!, $articleIds: [ID!]!) {
  result: removeArticlesFromProduct(
    productId: $productId
    linkageType: $linkageType
    articleIds: $articleIds
  ) {
    id
  }
}
    `])));function $n(n){var e=t()(t()({},r),n);return i.D(bn,e)}var Mn=(0,a.Ps)(k||(k=u()([`
    mutation createWarrantyPolicy($input: WarrantyPolicyCreateInput!) {
  result: createWarrantyPolicy(input: $input) {
    id
  }
}
    `])));function hn(n){var e=t()(t()({},r),n);return i.D(Mn,e)}var jn=(0,a.Ps)(z||(z=u()([`
    mutation updateWarrantyPolicy($id: ID!, $input: WarrantyPolicyUpdateInput!) {
  result: updateWarrantyPolicy(id: $id, input: $input) {
    id
  }
}
    `])));function gn(n){var e=t()(t()({},r),n);return i.D(jn,e)}var In=(0,a.Ps)(T||(T=u()([`
    mutation deleteWarrantyPolicy($id: ID!) {
  result: deleteWarrantyPolicy(id: $id) {
    id
  }
}
    `])));function Jn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useMutation(In,e)}var An=(0,a.Ps)(U||(U=u()([`
    mutation deleteManyWarrantyPolicies($where: WarrantyPolicyWhereInput) {
  result: deleteManyWarrantyPolicies(where: $where) {
    count
  }
}
    `])));function wn(n){var e=t()(t()({},r),n);return i.D(An,e)}var Bn=(0,a.Ps)(R||(R=u()([`
    mutation createBrand($input: BrandCreateInput!) {
  result: createBrand(input: $input) {
    id
    name
    description
  }
}
    `])));function Qn(n){var e=t()(t()({},r),n);return i.D(Bn,e)}var Cn=(0,a.Ps)(F||(F=u()([`
    mutation updateBrand($id: ID!, $input: BrandUpdateInput!) {
  result: updateBrand(id: $id, input: $input) {
    id
    name
    description
  }
}
    `])));function On(n){var e=t()(t()({},r),n);return i.D(Cn,e)}var Ln=(0,a.Ps)(x||(x=u()([`
    mutation deleteManyBrands($where: BrandWhereInput) {
  result: deleteManyBrands(where: $where) {
    count
  }
}
    `])));function Wn(n){var e=t()(t()({},r),n);return i.D(Ln,e)}var D=(0,a.Ps)(K||(K=u()([`
    query customers($where: CustomerWhereInput, $limit: Int = 1000) {
  result: customers(where: $where, limit: $limit) {
    id
    name
  }
}
    `])));function En(n){var e=t()(t()({},r),n);return s.a(D,e)}function Zn(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(D,e)}function ne(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(D,e)}var P=(0,a.Ps)(G||(G=u()([`
    query customerStores($where: CustomerStoreWhereInput, $limit: Int = 2000) {
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
    `])));function kn(n){var e=t()(t()({},r),n);return s.a(P,e)}function ee(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(P,e)}function te(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(P,e)}},60551:function(H,p,d){d.d(p,{BC:function(){return o.BC},Eg:function(){return o.Eg},Ew:function(){return o.Ew},FA:function(){return o.FA},Fm:function(){return o.Fm},G6:function(){return o.G6},LF:function(){return o.LF},Mg:function(){return o.Mg},U1:function(){return o.U1},Ux:function(){return o.Ux},Vh:function(){return o.Vh},X9:function(){return o.X9},YG:function(){return o.YG},aT:function(){return o.aT},ac:function(){return o.ac},an:function(){return o.an},bR:function(){return o.bR},f0:function(){return o.f0},hb:function(){return o.hb},kN:function(){return o.kN},qX:function(){return o.qX},rq:function(){return o.rq},wE:function(){return o.wE},xL:function(){return o.xL}});var o=d(86235)}}]);
