(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[3279],{3279:function(P,v,s){"use strict";s.r(v);var a=s(2824),o=s(67294),l=s(28865),m=s(73727),d=s(8845),c=s(18071),i=s(38671),e=s(85893);function g(A){var j=A.match.params.id,p=(0,o.useRef)({}),_=(0,o.useState)(!1),y=(0,a.Z)(_,2),f=y[0],x=y[1],r=(0,d.WP)({variables:{id:j}}),h=r.data,b=r.loading,D=h||{category:p.current},u=D.category;return b||(p.current=u),(0,e.jsx)(c.vs,{header:{title:"\u65B0\u95FB\u52A8\u6001"},children:(0,e.jsxs)(c.wp,{children:[(0,e.jsx)(c.wp.Title,{children:(0,e.jsx)("span",{className:"text-gray-800 text-hover-primary fs-2 fw-bolder me-3",children:u==null?void 0:u.name})}),(0,e.jsx)(c.wp.Description,{children:u==null?void 0:u.description}),(0,e.jsx)(c.wp.Cover,{children:(0,e.jsx)("img",{className:"mw-50px mw-lg-75px",src:"/assets/media/svg/brand-logos/volicity-9.svg",alt:"image"})}),(0,e.jsxs)(c.wp.Toolbar,{children:[(0,e.jsx)(i.zx,{as:m.Link,className:"me-3",size:"sm",background:"light",activeTextColor:"primary",to:"/cms/articles/new",children:"\u65B0\u5EFA\u4FE1\u606F"}),(0,e.jsx)(i.zx,{className:"me-3",size:"sm",children:"\u6DFB\u52A0\u5B50\u680F\u76EE"}),(0,e.jsx)("div",{className:"me-0",children:(0,e.jsx)(i.Lt,{overlay:(0,e.jsx)(i.v2,{className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:(0,e.jsx)(i.v2.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")}),placement:"bottomRight",onVisibleChange:x,visible:f,children:(0,e.jsx)(i.zx,{size:"sm",background:"light",activeTextColor:"primary",icon:(0,e.jsx)("i",{className:"bi bi-three-dots fs-3"})})})})]}),(0,e.jsxs)(c.wp.Body,{children:[(0,e.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,e.jsx)(i.kN,{className:"min-w-125px py-3 px-4 me-6 mb-3",label:"Due Date",children:(0,e.jsx)("div",{className:"d-flex align-items-center",children:(0,e.jsx)("div",{className:"fs-4 fw-bolder",children:"29 Jan, 2021"})})}),(0,e.jsxs)(i.kN,{className:"min-w-125px py-3 px-4 me-6 mb-3",label:"Open Tasks",children:[(0,e.jsx)(l.ZP,{name:"Duotune/arr065",className:"svg-icon-3 svg-icon-danger me-2"}),(0,e.jsx)(i.I0,{className:"fs-4 fw-bolder",value:75,children:"100"})]}),(0,e.jsxs)(i.kN,{className:"min-w-125px py-3 px-4 me-6 mb-3",label:"Budget Spent",children:[(0,e.jsx)(l.ZP,{name:"Duotune/arr066",className:"svg-icon-3 svg-icon-success me-2"}),(0,e.jsx)(i.I0,{className:"fs-4 fw-bolder",value:15e3,prefix:"$",children:"0"})]})]}),(0,e.jsx)(i.n5.Users,{size:8,users:[{avatar:"",name:"Alan Warden"},{avatar:"/assets/media/avatars/150-12.jpg",name:"Michael Eberon"},{avatar:"/assets/media/avatars/150-13.jpg",name:"Michelle Swanston"},{avatar:"/assets/media/avatars/150-5.jpg",name:"Francis Mitcham"},{avatar:"",name:"Susan Redwood"},{avatar:"/assets/media/avatars/150-3.jpg",name:"Melody Macy"},{avatar:"",name:"Perry Matthew"},{avatar:"/assets/media/avatars/150-7.jpg",name:"Barry Walter"},{avatar:"",name:"Peter"}]})]}),(0,e.jsx)(c.wp.Footer,{className:"h-45px",children:(0,e.jsxs)(i.JL,{selectedKey:"settings",className:"fs-5 fw-bolder",children:[(0,e.jsx)(i.JL.Item,{children:"\u6587\u7AE0"},"article"),(0,e.jsx)(i.JL.Item,{children:"\u8BBE\u7F6E"},"settings")]})})]})})}v.default=g},8845:function(P,v,s){"use strict";s.d(v,{Se:function(){return O},WP:function(){return $},V7:function(){return B},St:function(){return b},gk:function(){return E},e7:function(){return W},uw:function(){return I},eU:function(){return z},nT:function(){return w},Qu:function(){return F},Mq:function(){return N}});var a=s(11849),o=s(20310),l=s(49704),m=s(64718),d=s(21919),c,i,e,g,A,j,p,_,y,f,x,r={},h=(0,l.Ps)(c||(c=(0,o.Z)([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function b(n){var t=(0,a.Z)((0,a.Z)({},r),n);return m.a(h,t)}function D(n){var t=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(h,t)}var u=(0,l.Ps)(i||(i=(0,o.Z)([`
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
    `])));function E(n){var t=(0,a.Z)((0,a.Z)({},r),n);return m.a(u,t)}function K(n){var t=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(u,t)}var C=(0,l.Ps)(e||(e=(0,o.Z)([`
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
    `])));function O(n){var t=(0,a.Z)((0,a.Z)({},r),n);return m.a(C,t)}function J(n){var t=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(C,t)}var M=(0,l.Ps)(g||(g=(0,o.Z)([`
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
    `])));function $(n){var t=(0,a.Z)((0,a.Z)({},r),n);return m.a(M,t)}function k(n){var t=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(M,t)}var S=(0,l.Ps)(A||(A=(0,o.Z)([`
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
    `])));function I(n){var t=(0,a.Z)((0,a.Z)({},r),n);return d.D(S,t)}var L=(0,l.Ps)(j||(j=(0,o.Z)([`
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
    `])));function N(n){var t=(0,a.Z)((0,a.Z)({},r),n);return d.D(L,t)}var T=(0,l.Ps)(p||(p=(0,o.Z)([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function z(n){var t=(0,a.Z)((0,a.Z)({},r),n);return d.D(T,t)}var Q=(0,l.Ps)(_||(_=(0,o.Z)([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function w(n){var t=(0,a.Z)((0,a.Z)({},r),n);return d.D(Q,t)}var Z=(0,l.Ps)(y||(y=(0,o.Z)([`
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
    `])));function B(n){var t=(0,a.Z)((0,a.Z)({},r),n);return m.a(Z,t)}function V(n){var t=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(Z,t)}var U=(0,l.Ps)(f||(f=(0,o.Z)([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function W(n){var t=(0,a.Z)((0,a.Z)({},r),n);return d.D(U,t)}var R=(0,l.Ps)(x||(x=(0,o.Z)([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function F(n){var t=(0,a.Z)((0,a.Z)({},r),n);return d.D(R,t)}}}]);
