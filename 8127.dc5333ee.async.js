"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8127,3269,267],{51253:function(G,E,e){e.d(E,{GP:function(){return s.Z},Hk:function(){return R},xx:function(){return L.x}});var N=e(74958),s=e(5166),L=e(19260),c=e(68400),l=e.n(c),m=e(62435),h=e(93967),g=e.n(h),u=e(94589),Q=e(97857),i=e.n(Q),I=e(46027),D=e(10582),x=e(42687),o=e(79817),v=e(5574),j=e.n(v),b=e(96486),d=e(86074),M={aside:{minimize:!1,width:280}},r=m.createContext({state:M,dispatch:function(){}}),P=function(a){return a.AsideToggle="ASIDE_TOGGLE",a.AsideWidth="ASIDE_WIDTH",a}({});function f(a,y){switch(y.type){case"ASIDE_TOGGLE":return a.aside.minimize=!a.aside.minimize,i()({},a);case"ASIDE_WIDTH":return a.aside.width=y.payload,i()({},a);default:throw new Error}}var p=function(y){var C=(0,m.useReducer)(f,(0,b.cloneDeep)(M)),A=j()(C,2),S=A[0],z=A[1];return(0,d.jsx)(r.Provider,{value:{state:S,dispatch:z},children:y.children})},T=function(){return(0,m.useContext)(r)},$=e(65495);function O(a){var y=T(),C=y.dispatch,A=y.state.aside.minimize,S=(0,m.useCallback)(function(){C({type:P.AsideToggle})},[C]);return(0,d.jsx)(o.Button,{style:i()({marginBottom:"1.35rem",zIndex:105},a.style),onClick:S,activeColor:"primary",className:g()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",a.className,{active:A}),children:(0,d.jsx)(I.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}var K={"drawer drawer-start":{maxWidth:992}};function Z(a){var y=a.className,C=a.header,A=a.children,S=a.collapsible,z=S===void 0?!0:S,F=a.width,B=F===void 0?280:F,U=(0,x.$Y)(),V=T(),H=V.dispatch;(0,m.useEffect)(function(){U.aside.width(B+100),H({type:P.AsideWidth,payload:B})},[U.aside,H,B]);var J=(0,D.CN)(K),Y=(0,x.BK)(function(k){return k.aside.drawer});return(0,d.jsxs)("div",{className:g()("app-aside aside",y,J,{"drawer-on":Y}),children:[(0,d.jsx)($.Z,{children:(0,d.jsx)(s.Z,{header:C,resizeable:!0,className:"app-sidebar",children:A})}),z&&(0,d.jsx)(O,{className:"start-100 end-0"})]})}Z.Toggle=O;var _=Z,W,w=u.ZP.div(W||(W=l()([`
  --root-aside-width: `,`;
  --met-aside-width: `,`;
`])),function(a){return a.minimize?"100px":"".concat(a.width,"px")},function(a){return a.minimize?"100px":"".concat(a.width,"px")});function ee(a){var y=a.children,C=a.className,A=T(),S=A.state.aside,z=S.minimize,F=S.width,B=(0,m.useCallback)(function(U){U.preventDefault()},[]);return(0,d.jsx)(w,{minimize:z,width:F,className:g()("micro-app-container page-full-content",C,{"aside-minimize":z}),onContextMenu:B,children:y})}function X(a){var y=a.children,C=a.className;return(0,d.jsx)(p,{children:(0,d.jsx)(ee,{className:C,children:y})})}X.Sidebar=_;var R=X},42141:function(G,E,e){e.r(E),e.d(E,{default:function(){return x}});var N=e(5574),s=e.n(N),L=e(97857),c=e.n(L),l=e(62435),m=e(46027),h=e(1861),g=e(51253),u=e(79817),Q=e(12708),i=e(86074);function I(o){return o.children&&o.children.length?(0,i.jsx)(u.Menu.SubMenu,{url:"/cms/categories/".concat(o.id,"/articles"),bullet:!0,icon:o.icon,title:o.name,children:(o.children||[]).map(I)},o.id):(0,i.jsx)(u.Menu.Item,{url:"/cms/categories/".concat(o.id,"/articles"),bullet:!0,icon:o.icon,children:o.name},o.id)}function D(o){var v=o.menuKey,j=(0,l.useMemo)(function(){return!o.categories||!o.categories.length?[]:(0,Q.G_)(o.categories.map(function(p){return c()({},p)}),{idKey:"id",childrenKey:"children",pidKey:"parent.id",sort:function(T,$){return T.index-$.index}})},[o.categories]),b=(0,l.useState)(j.map(function(p){return p.id})),d=s()(b,2),M=d[0],r=d[1],P=(0,l.useCallback)(function(p){r(p)},[]);(0,l.useEffect)(function(){r(j.map(function(p){return p.id}))},[j.map(function(p){return p.id}).join(",")]);var f=(0,l.useMemo)(function(){switch(v.key){case"category":return v.params.cid;default:return v.key}},[v]);return console.log("selectedKey",f,v),(0,i.jsxs)(g.GP,{children:[(0,i.jsx)("div",{className:"mt-5 px-5 pt-5",children:(0,i.jsx)("h1",{className:"text-gray-800 fw-bold mb-6 mx-5",children:"\u5185\u5BB9\u7BA1\u7406"})}),(0,i.jsx)(h.E,{className:"custom-scrollbar flex-column-fluid px-10 mb-5",options:{scrollbars:{autoHide:"scroll"}},children:(0,i.jsxs)(u.Menu,{className:"cms-menu-sider menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0",openKeys:M,selectedKeys:f?[f]:[],onOpenChange:P,accordion:!1,selectable:"AllMenu",fit:!0,children:[(0,i.jsx)(u.Menu.Section,{children:"\u6211\u7684"}),(0,i.jsx)(u.Menu.Item,{url:"/cms/my/drafts",icon:"Duotune/art008",children:"\u8349\u7A3F\u7BB1"},"draft"),(0,i.jsx)(u.Menu.Item,{url:"/cms/my/published",icon:"Duotune/art006",children:"\u5DF2\u53D1\u5E03"},"published"),(0,i.jsxs)(u.Menu.Section,{className:"d-flex align-items-center",contentClassName:"w-100",sectionClassName:"w-100 d-flex align-items-center justify-content-between",children:[(0,i.jsxs)("span",{className:"menu-section text-muted text-uppercase fs-8 ls-1 flex-row-fluid",children:["\u4FE1\u606F\u680F\u76EE ",o.loading&&" - loading..."]}),(0,i.jsx)(u.Button,{icon:(0,i.jsx)(m.ZP,{style:{marginRight:".2rem"},name:"Duotune/arr087",className:""}),size:"sm",variant:"white",className:"py-1 px-3 me-n4",children:"\u65B0\u589E"})]}),j.map(I),(0,i.jsx)(u.Menu.Section,{children:"\u5176\u4ED6"}),(0,i.jsx)(u.Menu.Item,{icon:"Duotune/elc001",children:"\u5927\u56FE\u7BA1\u7406"},"banner"),(0,i.jsx)(u.Menu.Item,{url:"/cms/authors",icon:"Duotune/cod002",children:"\u4F5C\u8005"},"authors"),(0,i.jsx)(u.Menu.Item,{icon:"Duotune/art002",children:"\u6807\u7B7E"},"tags"),(0,i.jsx)(u.Menu.Section,{children:"\u5168\u5C40\u8BBE\u7F6E"}),(0,i.jsx)(u.Menu.Item,{icon:"Duotune/abs008",children:"\u8BBE\u7F6E"},"settings")]})})]})}var x=D},42755:function(G,E,e){e.d(E,{Se:function(){return a},WP:function(){return S},vz:function(){return w},V7:function(){return ne},St:function(){return p},gk:function(){return K},e7:function(){return ae},uw:function(){return U},eU:function(){return Y},nT:function(){return te},Qu:function(){return se},Mq:function(){return H}});var N=e(97857),s=e.n(N),L=e(68400),c=e.n(L),l=e(75063),m=e(37887),h=e(50319),g,u,Q,i,I,D,x,o,v,j,b,d,M,r={},P=(0,l.Ps)(g||(g=c()([`
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
    `]))),f=(0,l.Ps)(u||(u=c()([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function p(t){var n=s()(s()({},r),t);return m.a(f,n)}function T(t){var n=_objectSpread(_objectSpread({},r),t);return Apollo.useLazyQuery(f,n)}function $(t){var n=_objectSpread(_objectSpread({},r),t);return Apollo.useSuspenseQuery(f,n)}var O=(0,l.Ps)(Q||(Q=c()([`
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
    `])));function K(t){var n=s()(s()({},r),t);return m.a(O,n)}function Z(t){var n=_objectSpread(_objectSpread({},r),t);return Apollo.useLazyQuery(O,n)}function _(t){var n=_objectSpread(_objectSpread({},r),t);return Apollo.useSuspenseQuery(O,n)}var W=(0,l.Ps)(i||(i=c()([`
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
    `])));function w(t){var n=s()(s()({},r),t);return m.a(W,n)}function ee(t){var n=_objectSpread(_objectSpread({},r),t);return Apollo.useLazyQuery(W,n)}function X(t){var n=_objectSpread(_objectSpread({},r),t);return Apollo.useSuspenseQuery(W,n)}var R=(0,l.Ps)(I||(I=c()([`
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
    `])));function a(t){var n=s()(s()({},r),t);return m.a(R,n)}function y(t){var n=_objectSpread(_objectSpread({},r),t);return Apollo.useLazyQuery(R,n)}function C(t){var n=_objectSpread(_objectSpread({},r),t);return Apollo.useSuspenseQuery(R,n)}var A=(0,l.Ps)(D||(D=c()([`
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
    `])));function S(t){var n=s()(s()({},r),t);return m.a(A,n)}function z(t){var n=_objectSpread(_objectSpread({},r),t);return Apollo.useLazyQuery(A,n)}function F(t){var n=_objectSpread(_objectSpread({},r),t);return Apollo.useSuspenseQuery(A,n)}var B=(0,l.Ps)(x||(x=c()([`
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
    `,""])),P);function U(t){var n=s()(s()({},r),t);return h.D(B,n)}var V=(0,l.Ps)(o||(o=c()([`
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
    `,""])),P);function H(t){var n=s()(s()({},r),t);return h.D(V,n)}var J=(0,l.Ps)(v||(v=c()([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function Y(t){var n=s()(s()({},r),t);return h.D(J,n)}var k=(0,l.Ps)(j||(j=c()([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function te(t){var n=s()(s()({},r),t);return h.D(k,n)}var q=(0,l.Ps)(b||(b=c()([`
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
    `,""])),P);function ne(t){var n=s()(s()({},r),t);return m.a(q,n)}function oe(t){var n=_objectSpread(_objectSpread({},r),t);return Apollo.useLazyQuery(q,n)}function ue(t){var n=_objectSpread(_objectSpread({},r),t);return Apollo.useSuspenseQuery(q,n)}var re=(0,l.Ps)(d||(d=c()([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function ae(t){var n=s()(s()({},r),t);return h.D(re,n)}var ie=(0,l.Ps)(M||(M=c()([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function se(t){var n=s()(s()({},r),t);return h.D(ie,n)}},66172:function(G,E,e){e.r(E);var N=e(19632),s=e.n(N),L=e(62435),c=e(96974),l=e(12845),m=e(51253),h=e(42141),g=e(42755),u=e(86074);function Q(){var i=(0,c.TH)(),I=(0,l.useApp)(),D=I.modules.find(function($){return $.key==="cms"}),x=D==null?void 0:D.configuration.rootCategory,o=(0,g.WP)({fetchPolicy:"cache-and-network",variables:{id:x}}),v=o.data,j=v===void 0?{}:v,b=j.category,d=(0,g.Se)({fetchPolicy:"cache-and-network",variables:{id:x}}),M=d.data,r=M===void 0?{categories:[]}:M,P=d.loading,f=(0,L.useMemo)(function(){var $=(0,c.LX)({path:"/cms/my/drafts",end:!1},i.pathname);if($)return{key:"draft",params:$.params};var O=(0,c.LX)({path:"/cms/my/published",end:!1},i.pathname);if(O)return{key:"published",params:O.params};var K=(0,c.LX)({path:"/cms/categories/:cid/articles",end:!1},i.pathname);return K?{key:"category",params:K.params}:{key:"unknown",params:{}}},[i.pathname]),p=(0,L.useMemo)(function(){switch(f.key){case"draft":return[{title:"\u6211\u7684\u8349\u7A3F",url:"/cms/my/drafts"}];case"published":return[{title:"\u6211\u7684\u6587\u7AE0",url:"/cms/my/published"}];case"category":return[{title:"\u680F\u76EE"}];default:return[]}},[f]),T=(r==null?void 0:r.categories)||[];return(0,u.jsxs)(m.Hk,{className:"micro-app-website",children:[(0,u.jsx)(m.Hk.Sidebar,{children:(0,u.jsx)(h.default,{menuKey:f,loading:P,categories:T})}),(0,u.jsx)(c.j3,{context:{rootCategoryId:b==null?void 0:b.id,categories:T,baseUrl:"/cms",breadcrumbs:[{title:"\u5185\u5BB9\u7BA1\u7406",url:"/cms"}].concat(s()(p))}})]})}E.default=Q}}]);
