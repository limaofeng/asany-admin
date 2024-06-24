"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9706],{14336:function(w,S,a){var P=a(15009),r=a.n(P),b=a(97857),i=a.n(b),o=a(99289),s=a.n(o),l=a(62435),D=a(79817),v=a(12708);function j(c,y){return c.replace(/{(\w+)}/g,function(d,u){return y[u]!==void 0?y[u]:d})}function g(c,y){var d=(0,l.useRef)(!1),u=(0,l.useCallback)(function(){var C=s()(r()().mark(function p(m){var O,_,t,h;return r()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return O=c.width,_=c.title,t=c.content,m&&(typeof _=="string"&&(_=j(_,m)),typeof t=="string"&&(t=j(t,m)),typeof _=="function"&&(_=_(m)),typeof t=="function"&&(t=t(m))),f.next=5,D.Modal.confirm(i()(i()({},c),{},{title:_,content:t,width:O,okText:"\u5220 \u9664",okClassName:"btn-danger",allowOutsideClick:function(){return!d.current},preConfirm:function(){var L=s()(r()().mark(function M(){var E,I,Q;return r()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return d.current=!0,A.prev=1,E=document.querySelector(".swal2-confirm"),E.textContent="\u5220\u9664\u4E2D...",I=document.createElement("span"),I.classList.add("spinner-border-sm","ms-2","spinner-border","align-middle"),E.appendChild(I),A.next=9,(0,v.gw)(y(m),350);case 9:Q=A.sent,console.log(Q);case 11:return A.prev=11,d.current=!1,A.finish(11);case 14:case"end":return A.stop()}},M,null,[[1,,11,14]])}));function R(){return L.apply(this,arguments)}return R}()}));case 5:if(h=f.sent,h.isConfirmed){f.next=8;break}return f.abrupt("return",!1);case 8:return D.Toast.success("\u5220\u9664\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),f.abrupt("return",!0);case 10:case"end":return f.stop()}},p)}));return function(p){return C.apply(this,arguments)}}(),[y,c]);return[u]}S.Z=g},70005:function(w,S,a){var P=a(62435),r=a(96974),b=a(79817),i=a(86074);function o(s){var l=s.categoryId,D=s.append,v=(0,r.bx)(),j=v.rootCategoryId,g=v.categories,c=v.baseUrl,y=v.breadcrumbs,d=(0,P.useMemo)(function(){var u,C=g.find(function(p){return p.id===l});return((C==null||(u=C.path)===null||u===void 0?void 0:u.split("/"))||[]).map(function(p){return g.find(function(m){return m.id===p})}).filter(function(p){return p})},[g,l]);return(0,i.jsxs)(b.Breadcrumb,{className:"fw-bold fs-base text-muted my-1",children:[y.map(function(u){return(0,i.jsx)(b.Breadcrumb.Item,{href:u.url,children:u.title},u.title)}),d?(0,i.jsx)(i.Fragment,{children:d.filter(function(u){return u.id!==j}).map(function(u){return(0,i.jsx)(b.Breadcrumb.Item,{href:"".concat(c,"/categories/").concat(u.id,"/articles"),children:u.name},u.id)})}):(0,i.jsx)(b.Breadcrumb.Item,{children:"\u52A0\u8F7D\u4E2D..."}),D]})}S.Z=o},42755:function(w,S,a){a.d(S,{Se:function(){return W},WP:function(){return K},vz:function(){return A},V7:function(){return J},St:function(){return f},gk:function(){return E},e7:function(){return Y},uw:function(){return k},eU:function(){return H},nT:function(){return Z},Qu:function(){return ee},Mq:function(){return N}});var P=a(97857),r=a.n(P),b=a(68400),i=a.n(b),o=a(75063),s=a(37887),l=a(50319),D,v,j,g,c,y,d,u,C,p,m,O,_,t={},h=(0,o.Ps)(D||(D=i()([`
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
    `]))),$=(0,o.Ps)(v||(v=i()([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function f(e){var n=r()(r()({},t),e);return s.a($,n)}function L(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery($,n)}function R(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useSuspenseQuery($,n)}var M=(0,o.Ps)(j||(j=i()([`
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
    `])));function E(e){var n=r()(r()({},t),e);return s.a(M,n)}function I(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(M,n)}function Q(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useSuspenseQuery(M,n)}var T=(0,o.Ps)(g||(g=i()([`
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
    `])));function A(e){var n=r()(r()({},t),e);return s.a(T,n)}function ne(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(T,n)}function te(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useSuspenseQuery(T,n)}var B=(0,o.Ps)(c||(c=i()([`
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
    `])));function W(e){var n=r()(r()({},t),e);return s.a(B,n)}function re(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(B,n)}function ae(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useSuspenseQuery(B,n)}var U=(0,o.Ps)(y||(y=i()([`
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
    `])));function K(e){var n=r()(r()({},t),e);return s.a(U,n)}function ie(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(U,n)}function ue(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useSuspenseQuery(U,n)}var x=(0,o.Ps)(d||(d=i()([`
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
    `,""])),h);function k(e){var n=r()(r()({},t),e);return l.D(x,n)}var F=(0,o.Ps)(u||(u=i()([`
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
    `,""])),h);function N(e){var n=r()(r()({},t),e);return l.D(F,n)}var G=(0,o.Ps)(C||(C=i()([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function H(e){var n=r()(r()({},t),e);return l.D(G,n)}var V=(0,o.Ps)(p||(p=i()([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function Z(e){var n=r()(r()({},t),e);return l.D(V,n)}var z=(0,o.Ps)(m||(m=i()([`
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
    `,""])),h);function J(e){var n=r()(r()({},t),e);return s.a(z,n)}function oe(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useLazyQuery(z,n)}function se(e){var n=_objectSpread(_objectSpread({},t),e);return Apollo.useSuspenseQuery(z,n)}var X=(0,o.Ps)(O||(O=i()([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function Y(e){var n=r()(r()({},t),e);return l.D(X,n)}var q=(0,o.Ps)(_||(_=i()([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function ee(e){var n=r()(r()({},t),e);return l.D(q,n)}}}]);
