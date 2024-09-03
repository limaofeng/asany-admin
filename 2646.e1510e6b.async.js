"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2646],{96944:function(E,l,o){o.d(l,{Mq:function(){return Y},Qu:function(){return Z},Se:function(){return K},St:function(){return z},V7:function(){return q},WP:function(){return R},Y9:function(){return W},e7:function(){return J},gk:function(){return U},nT:function(){return N},uw:function(){return k},vz:function(){return w}});var a=o(97857),t=o.n(a),L=o(68400),i=o.n(L),u=o(75063),s=o(37887),B=o(73359),c=o(50319),g,b,v,S,C,j,D,P,$,h,O,M,Q,I,r={},T=(0,u.Ps)(g||(g=i()([`
    fragment ArticleContentParts on ArticleContent {
  ... on TextContent {
    textType: type
    text
  }
  ... on DocumentContent {
    url
    rawUrl: url(raw: true)
    document
    documentType: type
    size
    title
    description
  }
  ... on ImageContent {
    images {
      id
      url
      title
      image
      description
    }
  }
  ... on VideoContent {
    id
    url
    title
    video
    description
  }
}
    `]))),p=(0,u.Ps)(b||(b=i()([`
    fragment ArticleParts on Article {
  category {
    id
    name
  }
  categories {
    id
    name
  }
  metafields {
    id
    key
    namespace
    value
  }
  contentType
  content {
    id
    ...ArticleContentParts
  }
}
    `,""])),T),d=(0,u.Ps)(v||(v=i()([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function z(e){var n=t()(t()({},r),e);return s.a(d,n)}function ee(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(d,n)}function ne(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(d,n)}var _=(0,u.Ps)(S||(S=i()([`
    query articles($where: ArticleWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy) {
  result: articlesConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      totalPages
      pageSize
      total
      current
    }
    edges {
      cursor
      node {
        id
        slug
        title
        image
        summary
        tags {
          id
          slug
          name
        }
        authors {
          id
          name
        }
        categories {
          id
          name
        }
        content {
          id
          ...ArticleContentParts
        }
        createdBy
        createdAt
        updatedBy
        updatedAt
        publishedAt
        scheduledAt
        expirationAt
        status
      }
    }
  }
}
    `,""])),T);function U(e){var n=t()(t()({},r),e);return s.a(_,n)}function W(e){var n=t()(t()({},r),e);return B.t(_,n)}function te(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(_,n)}var m=(0,u.Ps)(C||(C=i()([`
    query articleList($where: ArticleWhereInput, $offset: Int, $limit: Int, $orderBy: OrderBy) {
  articles: articles(
    where: $where
    offset: $offset
    limit: $limit
    orderBy: $orderBy
  ) {
    id
    title
    image
    summary
    authors {
      id
      name
    }
    categories {
      id
      name
    }
    createdBy
    createdAt(format: "yyyy-MM-dd HH:mm")
    publishedAt
    status
  }
}
    `])));function w(e){var n=t()(t()({},r),e);return s.a(m,n)}function re(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(m,n)}function ae(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(m,n)}var y=(0,u.Ps)(j||(j=i()([`
    query articleCategories($id: ID!) {
  categories: articleCategories(where: {parent: {id: $id, subColumns: true}}) {
    id
    icon
    name
    fullName
    slug
    path
    index
    level
    image
    parent {
      id
    }
    storeTemplate {
      id
      name
      contentType
    }
  }
}
    `])));function K(e){var n=t()(t()({},r),e);return s.a(y,n)}function ie(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(y,n)}function ue(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(y,n)}var A=(0,u.Ps)(D||(D=i()([`
    query articleCategory($id: ID!) {
  category: articleCategory(id: $id) {
    id
    icon
    name
    description
    image
    path
    index
    level
    parent {
      id
    }
    storeTemplate {
      id
      name
      contentType
    }
    page {
      enabled
      route {
        path
      }
      component {
        id
        template
      }
    }
  }
}
    `])));function R(e){var n=t()(t()({},r),e);return s.a(A,n)}function oe(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(A,n)}function se(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(A,n)}var x=(0,u.Ps)(P||(P=i()([`
    mutation createArticle($input: ArticleCreateInput!) {
  article: createArticle(input: $input) {
    id
    title
    status
    image
    summary
    publishedAt
    ...ArticleParts
  }
}
    `,""])),p);function k(e){var n=t()(t()({},r),e);return c.D(x,n)}var V=(0,u.Ps)($||($=i()([`
    mutation updateArticle($id: ID!, $input: ArticleUpdateInput!) {
  article: updateArticle(id: $id, input: $input) {
    id
    title
    status
    image
    summary
    publishedAt
    ...ArticleParts
  }
}
    `,""])),p);function Y(e){var n=t()(t()({},r),e);return c.D(V,n)}var F=(0,u.Ps)(h||(h=i()([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function ce(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useMutation(F,n)}var H=(0,u.Ps)(O||(O=i()([`
    mutation deleteManyArticles($where: ArticleWhereInput!) {
  result: deleteManyArticles(where: $where) {
    count
  }
}
    `])));function N(e){var n=t()(t()({},r),e);return c.D(H,n)}var f=(0,u.Ps)(M||(M=i()([`
    query article($id: ID!) {
  article(id: $id) {
    id
    title
    status
    image
    summary
    publishedAt
    ...ArticleParts
  }
}
    `,""])),p);function q(e){var n=t()(t()({},r),e);return s.a(f,n)}function le(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(f,n)}function pe(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(f,n)}var G=(0,u.Ps)(Q||(Q=i()([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function J(e){var n=t()(t()({},r),e);return c.D(G,n)}var X=(0,u.Ps)(I||(I=i()([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function Z(e){var n=t()(t()({},r),e);return c.D(X,n)}},42646:function(E,l,o){o.d(l,{Mq:function(){return a.Mq},Qu:function(){return a.Qu},Se:function(){return a.Se},St:function(){return a.St},V7:function(){return a.V7},WP:function(){return a.WP},Y9:function(){return a.Y9},e7:function(){return a.e7},gk:function(){return a.gk},nT:function(){return a.nT},uw:function(){return a.uw},vz:function(){return a.vz}});var a=o(96944)}}]);
