"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9544],{42755:function(I,S,a){a.d(S,{Se:function(){return U},WP:function(){return z},V7:function(){return V},St:function(){return M},gk:function(){return j},e7:function(){return x},uw:function(){return B},eU:function(){return k},nT:function(){return N},Qu:function(){return H},Mq:function(){return W}});var h=a(97857),r=a.n(h),O=a(68400),u=a.n(O),i=a(75063),l=a(37887),o=a(50319),m,v,b,d,y,p,g,C,A,f,P,t={},_=(0,i.Ps)(m||(m=u()([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function M(e){var n=r()(r()({},t),e);return l.a(_,n)}function T(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(_,n)}function D(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useSuspenseQuery(_,n)}var c=(0,i.Ps)(v||(v=u()([`
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
    `])));function j(e){var n=r()(r()({},t),e);return l.a(c,n)}function L(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(c,n)}function s(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useSuspenseQuery(c,n)}var $=(0,i.Ps)(b||(b=u()([`
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
    `])));function U(e){var n=r()(r()({},t),e);return l.a($,n)}function J(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery($,n)}function X(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useSuspenseQuery($,n)}var E=(0,i.Ps)(d||(d=u()([`
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
    `])));function z(e){var n=r()(r()({},t),e);return l.a(E,n)}function Y(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(E,n)}function q(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useSuspenseQuery(E,n)}var w=(0,i.Ps)(y||(y=u()([`
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
    `])));function B(e){var n=r()(r()({},t),e);return o.D(w,n)}var R=(0,i.Ps)(p||(p=u()([`
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
    `])));function W(e){var n=r()(r()({},t),e);return o.D(R,n)}var K=(0,i.Ps)(g||(g=u()([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function k(e){var n=r()(r()({},t),e);return o.D(K,n)}var G=(0,i.Ps)(C||(C=u()([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function N(e){var n=r()(r()({},t),e);return o.D(G,n)}var Q=(0,i.Ps)(A||(A=u()([`
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
    `])));function V(e){var n=r()(r()({},t),e);return l.a(Q,n)}function ee(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(Q,n)}function ne(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useSuspenseQuery(Q,n)}var Z=(0,i.Ps)(f||(f=u()([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function x(e){var n=r()(r()({},t),e);return o.D(Z,n)}var F=(0,i.Ps)(P||(P=u()([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function H(e){var n=r()(r()({},t),e);return o.D(F,n)}},81620:function(I,S,a){var h=a(15009),r=a.n(h),O=a(97857),u=a.n(O),i=a(99289),l=a.n(i),o=a(62435),m=a(13757),v=a(12708);function b(d,y){var p=(0,o.useRef)(!1),g=(0,o.useCallback)(l()(r()().mark(function C(){var A,f;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return A=d.width,t.next=3,m.Modal.confirm(u()(u()({},d),{},{width:A,okText:"\u5220 \u9664",okClassName:"btn-danger",allowOutsideClick:function(){return!p.current},preConfirm:function(){var _=l()(r()().mark(function T(){var D,c,j;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p.current=!0,s.prev=1,D=document.querySelector(".swal2-confirm"),D.textContent="\u5220\u9664\u4E2D...",c=document.createElement("span"),c.classList.add("spinner-border-sm","ms-2","spinner-border","align-middle"),D.appendChild(c),s.next=9,(0,v.gw)(y(),350);case 9:j=s.sent,console.log(j);case 11:return s.prev=11,p.current=!1,s.finish(11);case 14:case"end":return s.stop()}},T,null,[[1,,11,14]])}));function M(){return _.apply(this,arguments)}return M}()}));case 3:if(f=t.sent,f.isConfirmed){t.next=6;break}return t.abrupt("return",!1);case 6:return m.Toast.success("\u5220\u9664\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),t.abrupt("return",!0);case 8:case"end":return t.stop()}},C)})),[y,d]);return[g]}S.Z=b}}]);
