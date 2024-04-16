"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9211],{19211:function(M,d,u){u.r(d);var v=u(49817),n=u(42755),s=u(86074);function i(a){var o,c=a.isLast,m=a.route,y=a.url,A=a.params,p=(0,n.WP)({variables:{id:A.cid}}),l=p.data,g=p.loading;return(0,s.jsx)(v.Z,{className:a.className,href:c?void 0:y,children:g?(0,s.jsx)(s.Fragment,{children:"\u52A0\u8F7D\u4E2D..."}):(0,s.jsx)(s.Fragment,{children:l==null||(o=l.category)===null||o===void 0?void 0:o.name})},m.id)}d.default=i},42755:function(M,d,u){u.d(d,{Se:function(){return E},WP:function(){return U},vz:function(){return B},V7:function(){return w},St:function(){return T},gk:function(){return z},e7:function(){return G},uw:function(){return W},eU:function(){return R},nT:function(){return V},Qu:function(){return X},Mq:function(){return K}});var v=u(97857),n=u.n(v),s=u(68400),i=u.n(s),a=u(75063),o=u(37887),c=u(50319),m,y,A,p,l,g,Q,P,h,L,I,O,_,r={},f=(0,a.Ps)(m||(m=i()([`
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
    ... on TextContent {
      textType: type
      text
    }
    ... on DocumentContent {
      url
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
}
    `]))),S=(0,a.Ps)(y||(y=i()([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function T(e){var t=n()(n()({},r),e);return o.a(S,t)}function Y(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(S,t)}function k(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(S,t)}var b=(0,a.Ps)(A||(A=i()([`
    query articles($where: ArticleWhereInput, $page: Int, $pageSize: Int) {
  articles: articlesConnection(where: $where, page: $page, pageSize: $pageSize) {
    total: totalCount
    current: currentPage
    totalPage
    pageSize
    edges {
      node {
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
        createdAt
        publishedAt
        status
      }
    }
  }
}
    `])));function z(e){var t=n()(n()({},r),e);return o.a(b,t)}function q(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(b,t)}function ee(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(b,t)}var j=(0,a.Ps)(p||(p=i()([`
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
    `])));function B(e){var t=n()(n()({},r),e);return o.a(j,t)}function te(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(j,t)}function ne(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(j,t)}var C=(0,a.Ps)(l||(l=i()([`
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
    `])));function E(e){var t=n()(n()({},r),e);return o.a(C,t)}function re(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(C,t)}function ae(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(C,t)}var D=(0,a.Ps)(g||(g=i()([`
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
    `])));function U(e){var t=n()(n()({},r),e);return o.a(D,t)}function ie(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(D,t)}function ue(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(D,t)}var x=(0,a.Ps)(Q||(Q=i()([`
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
    `,""])),f);function W(e){var t=n()(n()({},r),e);return c.D(x,t)}var F=(0,a.Ps)(P||(P=i()([`
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
    `,""])),f);function K(e){var t=n()(n()({},r),e);return c.D(F,t)}var N=(0,a.Ps)(h||(h=i()([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function R(e){var t=n()(n()({},r),e);return c.D(N,t)}var H=(0,a.Ps)(L||(L=i()([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function V(e){var t=n()(n()({},r),e);return c.D(H,t)}var $=(0,a.Ps)(I||(I=i()([`
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
    `,""])),f);function w(e){var t=n()(n()({},r),e);return o.a($,t)}function oe(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery($,t)}function ce(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery($,t)}var Z=(0,a.Ps)(O||(O=i()([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function G(e){var t=n()(n()({},r),e);return c.D(Z,t)}var J=(0,a.Ps)(_||(_=i()([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function X(e){var t=n()(n()({},r),e);return c.D(J,t)}}}]);
