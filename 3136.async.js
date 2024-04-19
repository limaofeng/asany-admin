"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3136],{13136:function(T,v,i){i.r(v);var D=i(5574),a=i.n(D),A=i(62435),o=i(96974),u=i(39711),d=i(46027),l=i(73588),s=i(79817),g=i(42755),n=i(86074);function _(){var j=(0,o.UO)(),p=(0,A.useRef)({}),f=(0,A.useState)(!1),m=a()(f,2),b=m[0],h=m[1],y=(0,g.WP)({variables:{id:j.id}}),S=y.data,x=y.loading,r=S||{category:p.current},c=r.category;return x||(p.current=c),(0,n.jsxs)(l.vs,{header:{title:"\u65B0\u95FB\u52A8\u6001"},children:[(0,n.jsxs)(l.wp,{children:[(0,n.jsx)(l.wp.Title,{children:(0,n.jsx)("span",{className:"text-gray-800 text-hover-primary fs-2 fw-bolder me-3",children:c==null?void 0:c.name})}),(0,n.jsx)(l.wp.Description,{children:c==null?void 0:c.description}),(0,n.jsx)(l.wp.Cover,{children:(0,n.jsx)("img",{className:"mw-50px mw-lg-75px",src:"/assets/media/svg/brand-logos/volicity-9.svg",alt:"image"})}),(0,n.jsxs)(l.wp.Toolbar,{children:[(0,n.jsx)(s.Button,{as:u.rU,className:"me-3",size:"sm",background:"light",activeTextColor:"primary",to:"/cms/articles/new",children:"\u65B0\u5EFA\u4FE1\u606F"}),(0,n.jsx)(s.Button,{className:"me-3",size:"sm",children:"\u6DFB\u52A0\u5B50\u680F\u76EE"}),(0,n.jsx)("div",{className:"me-0",children:(0,n.jsx)(s.Dropdown,{overlay:(0,n.jsx)(s.Menu,{className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:(0,n.jsx)(s.Menu.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")}),placement:"bottomRight",onVisibleChange:h,visible:b,children:(0,n.jsx)(s.Button,{size:"sm",background:"light",activeTextColor:"primary",icon:(0,n.jsx)("i",{className:"bi bi-three-dots fs-3"})})})})]}),(0,n.jsxs)(l.wp.Body,{children:[(0,n.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,n.jsx)(s.Stat,{className:"min-w-125px py-3 px-4 me-6 mb-3",label:"Due Date",children:(0,n.jsx)("div",{className:"d-flex align-items-center",children:(0,n.jsx)("div",{className:"fs-4 fw-bolder",children:"29 Jan, 2021"})})}),(0,n.jsxs)(s.Stat,{className:"min-w-125px py-3 px-4 me-6 mb-3",label:"Open Tasks",children:[(0,n.jsx)(d.ZP,{name:"Duotune/arr065",className:"svg-icon-3 svg-icon-danger me-2"}),(0,n.jsx)(s.CountUp,{className:"fs-4 fw-bolder",value:75,children:"100"})]}),(0,n.jsxs)(s.Stat,{className:"min-w-125px py-3 px-4 me-6 mb-3",label:"Budget Spent",children:[(0,n.jsx)(d.ZP,{name:"Duotune/arr066",className:"svg-icon-3 svg-icon-success me-2"}),(0,n.jsx)(s.CountUp,{className:"fs-4 fw-bolder",value:15e3,prefix:"$",children:"0"})]})]}),(0,n.jsx)(s.User.Users,{size:8,users:[{avatar:"",name:"Alan Warden"},{avatar:"/assets/media/avatars/150-12.jpg",name:"Michael Eberon"},{avatar:"/assets/media/avatars/150-13.jpg",name:"Michelle Swanston"},{avatar:"/assets/media/avatars/150-5.jpg",name:"Francis Mitcham"},{avatar:"",name:"Susan Redwood"},{avatar:"/assets/media/avatars/150-3.jpg",name:"Melody Macy"},{avatar:"",name:"Perry Matthew"},{avatar:"/assets/media/avatars/150-7.jpg",name:"Barry Walter"},{avatar:"",name:"Peter"}]})]}),(0,n.jsx)(l.wp.Footer,{className:"h-45px",children:(0,n.jsxs)(s.Nav,{selectedKey:"settings",className:"fs-5 fw-bolder",children:[(0,n.jsx)(s.Nav.Item,{children:"\u6587\u7AE0"},"article"),(0,n.jsx)(s.Nav.Item,{children:"\u8BBE\u7F6E"},"settings")]})})]}),(0,n.jsx)(o.j3,{context:{rootCategoryId:c==null?void 0:c.id,categories:[],baseUrl:location.pathname}})]})}v.default=_},42755:function(T,v,i){i.d(v,{Se:function(){return B},WP:function(){return N},vz:function(){return L},V7:function(){return H},St:function(){return Q},gk:function(){return I},e7:function(){return J},uw:function(){return w},eU:function(){return K},nT:function(){return V},Qu:function(){return X},Mq:function(){return W}});var D=i(97857),a=i.n(D),A=i(68400),o=i.n(A),u=i(75063),d=i(37887),l=i(50319),s,g,n,_,j,p,f,m,b,h,y,S,x,r={},c=(0,u.Ps)(s||(s=o()([`
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
    `]))),C=(0,u.Ps)(g||(g=o()([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function Q(e){var t=a()(a()({},r),e);return d.a(C,t)}function Y(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(C,t)}function k(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(C,t)}var P=(0,u.Ps)(n||(n=o()([`
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
    `])));function I(e){var t=a()(a()({},r),e);return d.a(P,t)}function q(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(P,t)}function ee(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(P,t)}var M=(0,u.Ps)(_||(_=o()([`
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
    `])));function L(e){var t=a()(a()({},r),e);return d.a(M,t)}function te(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(M,t)}function ne(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(M,t)}var E=(0,u.Ps)(j||(j=o()([`
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
    `])));function B(e){var t=a()(a()({},r),e);return d.a(E,t)}function ae(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(E,t)}function re(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(E,t)}var O=(0,u.Ps)(p||(p=o()([`
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
    `])));function N(e){var t=a()(a()({},r),e);return d.a(O,t)}function ie(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery(O,t)}function se(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery(O,t)}var U=(0,u.Ps)(f||(f=o()([`
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
    `,""])),c);function w(e){var t=a()(a()({},r),e);return l.D(U,t)}var z=(0,u.Ps)(m||(m=o()([`
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
    `,""])),c);function W(e){var t=a()(a()({},r),e);return l.D(z,t)}var R=(0,u.Ps)(b||(b=o()([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function K(e){var t=a()(a()({},r),e);return l.D(R,t)}var F=(0,u.Ps)(h||(h=o()([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function V(e){var t=a()(a()({},r),e);return l.D(F,t)}var $=(0,u.Ps)(y||(y=o()([`
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
    `,""])),c);function H(e){var t=a()(a()({},r),e);return d.a($,t)}function oe(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useLazyQuery($,t)}function ue(e){var t=_objectSpread(_objectSpread({},r),e);return Apollo.useSuspenseQuery($,t)}var Z=(0,u.Ps)(S||(S=o()([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function J(e){var t=a()(a()({},r),e);return l.D(Z,t)}var G=(0,u.Ps)(x||(x=o()([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function X(e){var t=a()(a()({},r),e);return l.D(G,t)}}}]);
