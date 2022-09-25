(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[5169],{55169:function(S,p,o){"use strict";o.r(p);var t=o(8845),i=o(52620),r=o(85893);function c(u){var l,m=u.isLast,y=u.route,A=u.url,g=u.params,d=(0,t.WP)({variables:{id:g.cid}}),s=d.data,v=d.loading;return(0,r.jsx)(i.Z,{className:u.className,href:m?void 0:A,children:v?(0,r.jsx)(r.Fragment,{children:"\u52A0\u8F7D\u4E2D..."}):(0,r.jsx)(r.Fragment,{children:s==null||(l=s.category)===null||l===void 0?void 0:l.name})},y.id)}p.default=c},8845:function(S,p,o){"use strict";o.d(p,{Se:function(){return M},WP:function(){return O},V7:function(){return B},St:function(){return P},gk:function(){return I},e7:function(){return F},uw:function(){return L},eU:function(){return E},nT:function(){return x},Qu:function(){return N},Mq:function(){return z}});var t=o(11849),i=o(20310),r=o(49704),c=o(64718),u=o(21919),l,m,y,A,g,d,s,v,f,C,D,a={},Z=(0,r.Ps)(l||(l=(0,i.Z)([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function P(e){var n=(0,t.Z)((0,t.Z)({},a),e);return c.a(Z,n)}function R(e){var n=_objectSpread(_objectSpread({},a),e);return Apollo.useLazyQuery(Z,n)}var b=(0,r.Ps)(m||(m=(0,i.Z)([`
    query articles($filter: ArticleFilter, $page: Int, $pageSize: Int) {
  articles(filter: $filter, page: $page, pageSize: $pageSize) {
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
    `])));function I(e){var n=(0,t.Z)((0,t.Z)({},a),e);return c.a(b,n)}function V(e){var n=_objectSpread(_objectSpread({},a),e);return Apollo.useLazyQuery(b,n)}var $=(0,r.Ps)(y||(y=(0,i.Z)([`
    query articleCategories($id: ID!) {
  categories: articleCategories(filter: {parent: {id: $id, subColumns: true}}) {
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
    `])));function M(e){var n=(0,t.Z)((0,t.Z)({},a),e);return c.a($,n)}function k(e){var n=_objectSpread(_objectSpread({},a),e);return Apollo.useLazyQuery($,n)}var j=(0,r.Ps)(A||(A=(0,i.Z)([`
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
    `])));function O(e){var n=(0,t.Z)((0,t.Z)({},a),e);return c.a(j,n)}function G(e){var n=_objectSpread(_objectSpread({},a),e);return Apollo.useLazyQuery(j,n)}var Q=(0,r.Ps)(g||(g=(0,i.Z)([`
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
    body {
      id
      __typename
      ... on ArticleContent {
        text
      }
    }
  }
}
    `])));function L(e){var n=(0,t.Z)((0,t.Z)({},a),e);return u.D(Q,n)}var h=(0,r.Ps)(d||(d=(0,i.Z)([`
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
    body {
      id
      __typename
      ... on ArticleContent {
        type
        text
      }
    }
  }
}
    `])));function z(e){var n=(0,t.Z)((0,t.Z)({},a),e);return u.D(h,n)}var T=(0,r.Ps)(s||(s=(0,i.Z)([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function E(e){var n=(0,t.Z)((0,t.Z)({},a),e);return u.D(T,n)}var U=(0,r.Ps)(v||(v=(0,i.Z)([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function x(e){var n=(0,t.Z)((0,t.Z)({},a),e);return u.D(U,n)}var _=(0,r.Ps)(f||(f=(0,i.Z)([`
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
    body {
      id
      __typename
      ... on ArticleContent {
        type
        text
      }
    }
  }
}
    `])));function B(e){var n=(0,t.Z)((0,t.Z)({},a),e);return c.a(_,n)}function H(e){var n=_objectSpread(_objectSpread({},a),e);return Apollo.useLazyQuery(_,n)}var W=(0,r.Ps)(C||(C=(0,i.Z)([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function F(e){var n=(0,t.Z)((0,t.Z)({},a),e);return u.D(W,n)}var K=(0,r.Ps)(D||(D=(0,i.Z)([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function N(e){var n=(0,t.Z)((0,t.Z)({},a),e);return u.D(K,n)}}}]);
