"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3136],{13136:function(O,v,i){i.r(v);var C=i(5574),a=i.n(C),g=i(62435),l=i(39711),o=i(46027),u=i(73588),s=i(13757),_=i(42755),t=i(86074);function A(j){var f=j.match.params.id,d=(0,g.useRef)({}),b=(0,g.useState)(!1),p=a()(b,2),h=p[0],x=p[1],m=(0,_.WP)({variables:{id:f}}),r=m.data,y=m.loading,D=r||{category:d.current},c=D.category;return y||(d.current=c),(0,t.jsx)(u.vs,{header:{title:"\u65B0\u95FB\u52A8\u6001"},children:(0,t.jsxs)(u.wp,{children:[(0,t.jsx)(u.wp.Title,{children:(0,t.jsx)("span",{className:"text-gray-800 text-hover-primary fs-2 fw-bolder me-3",children:c==null?void 0:c.name})}),(0,t.jsx)(u.wp.Description,{children:c==null?void 0:c.description}),(0,t.jsx)(u.wp.Cover,{children:(0,t.jsx)("img",{className:"mw-50px mw-lg-75px",src:"/assets/media/svg/brand-logos/volicity-9.svg",alt:"image"})}),(0,t.jsxs)(u.wp.Toolbar,{children:[(0,t.jsx)(s.Button,{as:l.rU,className:"me-3",size:"sm",background:"light",activeTextColor:"primary",to:"/cms/articles/new",children:"\u65B0\u5EFA\u4FE1\u606F"}),(0,t.jsx)(s.Button,{className:"me-3",size:"sm",children:"\u6DFB\u52A0\u5B50\u680F\u76EE"}),(0,t.jsx)("div",{className:"me-0",children:(0,t.jsx)(s.Dropdown,{overlay:(0,t.jsx)(s.Menu,{className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:(0,t.jsx)(s.Menu.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")}),placement:"bottomRight",onVisibleChange:x,visible:h,children:(0,t.jsx)(s.Button,{size:"sm",background:"light",activeTextColor:"primary",icon:(0,t.jsx)("i",{className:"bi bi-three-dots fs-3"})})})})]}),(0,t.jsxs)(u.wp.Body,{children:[(0,t.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,t.jsx)(s.Stat,{className:"min-w-125px py-3 px-4 me-6 mb-3",label:"Due Date",children:(0,t.jsx)("div",{className:"d-flex align-items-center",children:(0,t.jsx)("div",{className:"fs-4 fw-bolder",children:"29 Jan, 2021"})})}),(0,t.jsxs)(s.Stat,{className:"min-w-125px py-3 px-4 me-6 mb-3",label:"Open Tasks",children:[(0,t.jsx)(o.ZP,{name:"Duotune/arr065",className:"svg-icon-3 svg-icon-danger me-2"}),(0,t.jsx)(s.CountUp,{className:"fs-4 fw-bolder",value:75,children:"100"})]}),(0,t.jsxs)(s.Stat,{className:"min-w-125px py-3 px-4 me-6 mb-3",label:"Budget Spent",children:[(0,t.jsx)(o.ZP,{name:"Duotune/arr066",className:"svg-icon-3 svg-icon-success me-2"}),(0,t.jsx)(s.CountUp,{className:"fs-4 fw-bolder",value:15e3,prefix:"$",children:"0"})]})]}),(0,t.jsx)(s.User.Users,{size:8,users:[{avatar:"",name:"Alan Warden"},{avatar:"/assets/media/avatars/150-12.jpg",name:"Michael Eberon"},{avatar:"/assets/media/avatars/150-13.jpg",name:"Michelle Swanston"},{avatar:"/assets/media/avatars/150-5.jpg",name:"Francis Mitcham"},{avatar:"",name:"Susan Redwood"},{avatar:"/assets/media/avatars/150-3.jpg",name:"Melody Macy"},{avatar:"",name:"Perry Matthew"},{avatar:"/assets/media/avatars/150-7.jpg",name:"Barry Walter"},{avatar:"",name:"Peter"}]})]}),(0,t.jsx)(u.wp.Footer,{className:"h-45px",children:(0,t.jsxs)(s.Nav,{selectedKey:"settings",className:"fs-5 fw-bolder",children:[(0,t.jsx)(s.Nav.Item,{children:"\u6587\u7AE0"},"article"),(0,t.jsx)(s.Nav.Item,{children:"\u8BBE\u7F6E"},"settings")]})})]})})}v.default=A},42755:function(O,v,i){i.d(v,{Se:function(){return $},WP:function(){return Q},V7:function(){return R},St:function(){return D},gk:function(){return T},e7:function(){return F},uw:function(){return N},eU:function(){return w},nT:function(){return W},Qu:function(){return Z},Mq:function(){return L}});var C=i(97857),a=i.n(C),g=i(68400),l=i.n(g),o=i(75063),u=i(37887),s=i(50319),_,t,A,j,f,d,b,p,h,x,m,r={},y=(0,o.Ps)(_||(_=l()([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function D(e){var n=a()(a()({},r),e);return u.a(y,n)}function c(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(y,n)}function J(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(y,n)}var S=(0,o.Ps)(t||(t=l()([`
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
    `])));function T(e){var n=a()(a()({},r),e);return u.a(S,n)}function G(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(S,n)}function H(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(S,n)}var M=(0,o.Ps)(A||(A=l()([`
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
    `])));function $(e){var n=a()(a()({},r),e);return u.a(M,n)}function X(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(M,n)}function Y(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(M,n)}var P=(0,o.Ps)(j||(j=l()([`
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
    `])));function Q(e){var n=a()(a()({},r),e);return u.a(P,n)}function k(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(P,n)}function q(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(P,n)}var I=(0,o.Ps)(f||(f=l()([`
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
    `])));function N(e){var n=a()(a()({},r),e);return s.D(I,n)}var B=(0,o.Ps)(d||(d=l()([`
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
    `])));function L(e){var n=a()(a()({},r),e);return s.D(B,n)}var U=(0,o.Ps)(b||(b=l()([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function w(e){var n=a()(a()({},r),e);return s.D(U,n)}var z=(0,o.Ps)(p||(p=l()([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function W(e){var n=a()(a()({},r),e);return s.D(z,n)}var E=(0,o.Ps)(h||(h=l()([`
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
    `])));function R(e){var n=a()(a()({},r),e);return u.a(E,n)}function ee(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(E,n)}function ne(e){var n=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(E,n)}var K=(0,o.Ps)(x||(x=l()([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function F(e){var n=a()(a()({},r),e);return s.D(K,n)}var V=(0,o.Ps)(m||(m=l()([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function Z(e){var n=a()(a()({},r),e);return s.D(V,n)}}}]);
