"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1726],{91726:function(ae,L,i){i.d(L,{aT:function(){return c},LF:function(){return q},ac:function(){return w},qX:function(){return G},xL:function(){return Z},BC:function(){return _},U1:function(){return oe},xq:function(){return E},Vh:function(){return C},Ew:function(){return O},Fm:function(){return U},FA:function(){return x},kN:function(){return B},hb:function(){return K},wE:function(){return V},bR:function(){return ne}});var W=i(97857),t=i.n(W),z=i(68400),o=i.n(z),a=i(75063),d=i(37887),u=i(50319),m,v,P,f,S,$,g,D,b,I,M,j,h,A,Q,k,r={},c=(0,a.Ps)(m||(m=o()([`
    query deviceQrCodes {
  deviceQrCodes: shortLinksConnection {
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
    `])));function C(e){var n=t()(t()({},r),e);return d.a(c,n)}function ue(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(c,n)}function ie(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(c,n)}var s=(0,a.Ps)(v||(v=o()([`
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
    `])));function O(e){var n=t()(t()({},r),e);return d.a(s,n)}function de(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(s,n)}function ce(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(s,n)}var p=(0,a.Ps)(P||(P=o()([`
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
      }
    }
  }
}
    `])));function w(e){var n=t()(t()({},r),e);return d.a(p,n)}function se(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(p,n)}function pe(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(p,n)}var l=(0,a.Ps)(f||(f=o()([`
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
    `])));function B(e){var n=t()(t()({},r),e);return d.a(l,n)}function le(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(l,n)}function ye(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(l,n)}var T=(0,a.Ps)(S||(S=o()([`
    mutation deleteManyShortLinks($where: ShortLinkWhereInput) {
  result: deleteManyShortLinks(where: $where) {
    count
  }
}
    `])));function _(e){var n=t()(t()({},r),e);return u.D(T,n)}var F=(0,a.Ps)($||($=o()([`
    mutation generateShortLinks($links: [ShortLinkCreateInput!]!) {
  result: generateShortLinks(links: $links) {
    id
    code
    url
    accessCount
    metadata
  }
}
    `])));function U(e){var n=t()(t()({},r),e);return u.D(F,n)}var y=(0,a.Ps)(g||(g=o()([`
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
    `])));function x(e){var n=t()(t()({},r),e);return d.a(y,n)}function me(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(y,n)}function ve(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(y,n)}var H=(0,a.Ps)(D||(D=o()([`
    mutation deleteProduct($id: ID!) {
  result: deleteProduct(id: $id) {
    id
  }
}
    `])));function E(e){var n=t()(t()({},r),e);return u.D(H,n)}var R=(0,a.Ps)(b||(b=o()([`
    mutation createProduct($input: ProductCreateInput!) {
  result: createProduct(input: $input) {
    id
  }
}
    `])));function G(e){var n=t()(t()({},r),e);return u.D(R,n)}var N=(0,a.Ps)(I||(I=o()([`
    mutation updateProduct($id: ID!, $input: ProductUpdateInput!) {
  result: updateProduct(id: $id, input: $input) {
    id
  }
}
    `])));function V(e){var n=t()(t()({},r),e);return u.D(N,n)}var X=(0,a.Ps)(M||(M=o()([`
    mutation addArticleToProduct($productId: ID!, $linkageType: String!, $articleIds: [ID!]!) {
  result: addArticlesToProduct(
    productId: $productId
    linkageType: $linkageType
    articleIds: $articleIds
  ) {
    id
  }
}
    `])));function q(e){var n=t()(t()({},r),e);return u.D(X,n)}var J=(0,a.Ps)(j||(j=o()([`
    mutation removeArticleFromProduct($productId: ID!, $linkageType: String!, $articleIds: [ID!]!) {
  result: removeArticlesFromProduct(
    productId: $productId
    linkageType: $linkageType
    articleIds: $articleIds
  ) {
    id
  }
}
    `])));function K(e){var n=t()(t()({},r),e);return u.D(J,n)}var Y=(0,a.Ps)(h||(h=o()([`
    mutation createWarrantyPolicy($input: WarrantyPolicyCreateInput!) {
  result: createWarrantyPolicy(input: $input) {
    id
  }
}
    `])));function Z(e){var n=t()(t()({},r),e);return u.D(Y,n)}var ee=(0,a.Ps)(A||(A=o()([`
    mutation updateWarrantyPolicy($id: ID!, $input: WarrantyPolicyUpdateInput!) {
  result: updateWarrantyPolicy(id: $id, input: $input) {
    id
  }
}
    `])));function ne(e){var n=t()(t()({},r),e);return u.D(ee,n)}var te=(0,a.Ps)(Q||(Q=o()([`
    mutation deleteWarrantyPolicy($id: ID!) {
  result: deleteWarrantyPolicy(id: $id) {
    id
  }
}
    `])));function Pe(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useMutation(te,n)}var re=(0,a.Ps)(k||(k=o()([`
    mutation deleteManyWarrantyPolicies($where: WarrantyPolicyWhereInput) {
  result: deleteManyWarrantyPolicies(where: $where) {
    count
  }
}
    `])));function oe(e){var n=t()(t()({},r),e);return u.D(re,n)}}}]);
