"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9211],{19211:function(h,d,i){i.r(d);var v=i(49817),n=i(42755),l=i(86074);function u(a){var o,c=a.isLast,m=a.route,y=a.url,A=a.params,p=(0,n.WP)({variables:{id:A.cid}}),s=p.data,g=p.loading;return(0,l.jsx)(v.Z,{className:a.className,href:c?void 0:y,children:g?(0,l.jsx)(l.Fragment,{children:"\u52A0\u8F7D\u4E2D..."}):(0,l.jsx)(l.Fragment,{children:s==null||(o=s.category)===null||o===void 0?void 0:o.name})},m.id)}d.default=u},42755:function(h,d,i){i.d(d,{Se:function(){return O},WP:function(){return L},V7:function(){return K},St:function(){return I},gk:function(){return M},e7:function(){return R},uw:function(){return z},eU:function(){return B},nT:function(){return F},Qu:function(){return Z},Mq:function(){return E}});var v=i(97857),n=i.n(v),l=i(68400),u=i.n(l),a=i(75063),o=i(37887),c=i(50319),m,y,A,p,s,g,D,$,Q,_,P,r={},f=(0,a.Ps)(m||(m=u()([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function I(e){var t=n()(n()({},r),e);return o.a(f,t)}function G(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(f,t)}function H(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(f,t)}var S=(0,a.Ps)(y||(y=u()([`
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
    `])));function M(e){var t=n()(n()({},r),e);return o.a(S,t)}function J(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(S,t)}function X(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(S,t)}var C=(0,a.Ps)(A||(A=u()([`
    query articleCategories($id: ID!) {
  categories: articleCategories(where: {parent: {id: $id, subColumns: true}}) {
    id
    icon
    name
    fullName
    path
    index
    level
    image
    parent {
      id
    }
  }
}
    `])));function O(e){var t=n()(n()({},r),e);return o.a(C,t)}function Y(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(C,t)}function k(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(C,t)}var j=(0,a.Ps)(p||(p=u()([`
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
    `])));function L(e){var t=n()(n()({},r),e);return o.a(j,t)}function w(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(j,t)}function q(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(j,t)}var T=(0,a.Ps)(s||(s=u()([`
    mutation createArticle($input: ArticleCreateInput!) {
  article: createArticle(input: $input) {
    id
    title
    status
    category {
      id
      name
      __typename
    }
    categories {
      id
      name
    }
    content {
      id
      __typename
      ... on TextContent {
        text
      }
    }
  }
}
    `])));function z(e){var t=n()(n()({},r),e);return c.D(T,t)}var x=(0,a.Ps)(g||(g=u()([`
    mutation updateArticle($id: ID!, $input: ArticleUpdateInput!) {
  article: updateArticle(id: $id, input: $input) {
    id
    title
    status
    image
    summary
    publishedAt
    category {
      id
      name
      __typename
    }
    categories {
      id
      name
    }
    content {
      id
      __typename
      ... on TextContent {
        type
        text
      }
    }
  }
}
    `])));function E(e){var t=n()(n()({},r),e);return c.D(x,t)}var U=(0,a.Ps)(D||(D=u()([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function B(e){var t=n()(n()({},r),e);return c.D(U,t)}var W=(0,a.Ps)($||($=u()([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function F(e){var t=n()(n()({},r),e);return c.D(W,t)}var b=(0,a.Ps)(Q||(Q=u()([`
    query article($id: ID!) {
  article(id: $id) {
    id
    title
    status
    image
    summary
    publishedAt
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
    content {
      id
      __typename
      ... on TextContent {
        type
        text
      }
    }
  }
}
    `])));function K(e){var t=n()(n()({},r),e);return o.a(b,t)}function ee(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(b,t)}function te(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(b,t)}var N=(0,a.Ps)(_||(_=u()([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function R(e){var t=n()(n()({},r),e);return c.D(N,t)}var V=(0,a.Ps)(P||(P=u()([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function Z(e){var t=n()(n()({},r),e);return c.D(V,t)}}}]);
