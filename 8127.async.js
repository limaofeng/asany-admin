"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8127,3269,1201],{51253:function(H,x,e){e.d(x,{GP:function(){return s.Z},Hk:function(){return Z},xx:function(){return L.x}});var Q=e(74958),s=e(5166),L=e(19260),u=e(68400),a=e.n(u),v=e(62435),A=e(93967),j=e.n(A),p=e(94589),T=e(97857),c=e.n(T),M=e(46027),D=e(42687),_=e(10811),y=e(5574),b=e.n(y),l=e(96486),r=e(86074),d={aside:{minimize:!1,width:280}},f=v.createContext({state:d,dispatch:function(){}}),i=function(o){return o.AsideToggle="ASIDE_TOGGLE",o.AsideWidth="ASIDE_WIDTH",o}({});function C(o,S){switch(S.type){case"ASIDE_TOGGLE":return o.aside.minimize=!o.aside.minimize,c()({},o);case"ASIDE_WIDTH":return o.aside.width=S.payload,c()({},o);default:throw new Error}}var h=function(S){var E=(0,v.useReducer)(C,(0,l.cloneDeep)(d)),z=b()(E,2),$=z[0],B=z[1];return(0,r.jsx)(f.Provider,{value:{state:$,dispatch:B},children:S.children})},m=function(){return(0,v.useContext)(f)},P=e(65495);function g(o){var S=m(),E=S.dispatch,z=S.state.aside.minimize,$=(0,v.useCallback)(function(){E({type:i.AsideToggle})},[E]);return(0,r.jsx)(_.Button,{style:c()({marginBottom:"1.35rem",zIndex:105},o.style),onClick:$,activeColor:"primary",className:j()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",o.className,{active:z}),children:(0,r.jsx)(M.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}function I(o){var S=o.className,E=o.header,z=o.children,$=o.collapsible,B=$===void 0?!0:$,R=o.width,U=R===void 0?280:R,F=(0,D.$Y)(),w=m(),X=w.dispatch;return(0,v.useEffect)(function(){F.aside.width(U+100),X({type:i.AsideWidth,payload:U})},[F.aside,X,U]),(0,r.jsxs)("div",{className:j()("app-aside aside",S),children:[(0,r.jsx)(P.Z,{children:(0,r.jsx)(s.Z,{header:E,resizeable:!0,className:"app-sidebar",children:z})}),B&&(0,r.jsx)(g,{className:"start-100 end-0"})]})}I.Toggle=g;var N=I,W,G=p.ZP.div(W||(W=a()([`
  --root-aside-width: `,`;
  --met-aside-width: `,`;
`])),function(o){return o.minimize?"100px":"".concat(o.width,"px")},function(o){return o.minimize?"100px":"".concat(o.width,"px")});function K(o){var S=o.children,E=o.className,z=m(),$=z.state.aside,B=$.minimize,R=$.width,U=(0,v.useCallback)(function(F){F.preventDefault()},[]);return(0,r.jsx)(G,{minimize:B,width:R,className:j()("micro-app-container page-full-content",E,{"aside-minimize":B}),onContextMenu:U,children:S})}function O(o){var S=o.children,E=o.className;return(0,r.jsx)(h,{children:(0,r.jsx)(K,{className:E,children:S})})}O.Sidebar=N;var Z=O},42687:function(H,x,e){e.d(x,{$Y:function(){return M},BK:function(){return _},aM:function(){return b}});var Q=e(5574),s=e.n(Q),L=e(97857),u=e.n(L),a=e(62435),v=e(86074),A=a.createContext({getState:function(){return{routes:[]}},subscribe:function(){},dispatch:function(){}}),j=function(r,d){return d?d.type==="ASIDE_MINIMIZE"?u()(u()({},r),{},{aside:u()(u()({},r.aside),{},{minimize:!!d.payload})}):d.type==="ASIDE_WIDTH"?u()(u()({},r),{},{aside:u()(u()({},r.aside),{},{width:d.payload})}):d.type==="ASIDE_COLLAPSIBLE"?u()(u()({},r),{},{aside:u()(u()({},r.aside),{},{collapsible:d.payload})}):r:r},p=function(r){return u()({},r)};function T(l){var r=(0,a.useReducer)(j,l,p),d=s()(r,2),f=d[0],i=d[1],C=(0,a.useState)([]),h=s()(C,1),m=h[0],P=function(Z){return function(){var o=m.indexOf(Z);o>-1&&m.splice(o,1)}},g=(0,a.useCallback)(function(O){return m.unshift(O),P(O)},[m]),I=(0,a.useCallback)(function(){m.forEach(function(O){return O()})},[m]),N={getState:function(){return f},dispatch:i,subscribe:g},W=(0,a.useState)(N),G=s()(W,1),K=G[0];return(0,a.useEffect)(function(){K.getState=function(){return f},I()},[f]),K}var c=function(r,d){return r===d};function M(){var l=(0,a.useContext)(A),r=(0,a.useRef)({aside:{get state(){return l.getState().aside},width:function(f){l.dispatch({type:"ASIDE_WIDTH",payload:f})},minimize:function(f){l.dispatch({type:"ASIDE_MINIMIZE",payload:f})},collapsible:function(f){l.dispatch({type:"ASIDE_COLLAPSIBLE",payload:f})}}});return r.current}function D(l){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c,d=(0,a.useContext)(A),f=(0,a.useReducer)(function(g){return g+1},0),i=s()(f,2),C=i[1],h=(0,a.useRef)(),m=l(d.getState());function P(){var g=l(d.getState());r(g,h.current)||(h.current=g,C())}return(0,a.useEffect)(function(){return d.subscribe(P)},[]),m}function _(l){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c;return D(l,r)}function y(){var l=useContext(A);return l.dispatch}function b(l){var r=l.children,d=l.state,f=T(d);return(0,a.useMemo)(function(){return(0,v.jsx)(A.Provider,{value:f,children:r})},[r,f])}},42141:function(H,x,e){e.r(x),e.d(x,{default:function(){return _}});var Q=e(5574),s=e.n(Q),L=e(97857),u=e.n(L),a=e(62435),v=e(46027),A=e(1861),j=e(51253),p=e(10811),T=e(12708),c=e(86074);function M(y){return y.children&&y.children.length?(0,c.jsx)(p.Menu.SubMenu,{url:"/cms/categories/".concat(y.id,"/articles"),bullet:!0,icon:y.icon,title:y.name,children:(y.children||[]).map(M)},y.id):(0,c.jsx)(p.Menu.Item,{url:"/cms/categories/".concat(y.id,"/articles"),bullet:!0,icon:y.icon,children:y.name},y.id)}function D(y){var b=y.menuKey,l=(0,a.useMemo)(function(){return!y.categories||!y.categories.length?[]:(0,T.G_)(y.categories.map(function(m){return u()({},m)}),{idKey:"id",childrenKey:"children",pidKey:"parent.id",sort:function(P,g){return P.index-g.index}})},[y.categories]),r=(0,a.useState)(l.map(function(m){return m.id})),d=s()(r,2),f=d[0],i=d[1],C=(0,a.useCallback)(function(m){i(m)},[]);(0,a.useEffect)(function(){i(l.map(function(m){return m.id}))},[l.map(function(m){return m.id}).join(",")]);var h=(0,a.useMemo)(function(){switch(b.key){case"category":return b.params.cid;default:return b.key}},[b]);return console.log("selectedKey",h,b),(0,c.jsxs)(j.GP,{children:[(0,c.jsx)("div",{className:"mt-5 px-5 pt-5",children:(0,c.jsx)("h1",{className:"text-gray-800 fw-bold mb-6 mx-5",children:"\u5185\u5BB9\u7BA1\u7406"})}),(0,c.jsx)(A.E,{className:"custom-scrollbar flex-column-fluid px-10 mb-5",options:{scrollbars:{autoHide:"scroll"}},children:(0,c.jsxs)(p.Menu,{className:"cms-menu-sider menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0",openKeys:f,selectedKeys:h?[h]:[],onOpenChange:C,accordion:!1,selectable:"AllMenu",fit:!0,children:[(0,c.jsx)(p.Menu.Section,{children:"\u6211\u7684"}),(0,c.jsx)(p.Menu.Item,{url:"/cms/my/drafts",icon:"Duotune/art008",children:"\u8349\u7A3F\u7BB1"},"draft"),(0,c.jsx)(p.Menu.Item,{url:"/cms/my/published",icon:"Duotune/art006",children:"\u5DF2\u53D1\u5E03"},"published"),(0,c.jsxs)(p.Menu.Section,{className:"d-flex align-items-center",contentClassName:"w-100",sectionClassName:"w-100 d-flex align-items-center justify-content-between",children:[(0,c.jsxs)("span",{className:"menu-section text-muted text-uppercase fs-8 ls-1 flex-row-fluid",children:["\u4FE1\u606F\u680F\u76EE ",y.loading&&" - loading..."]}),(0,c.jsx)(p.Button,{icon:(0,c.jsx)(v.ZP,{style:{marginRight:".2rem"},name:"Duotune/arr087",className:""}),size:"sm",variant:"white",className:"py-1 px-3 me-n4",children:"\u65B0\u589E"})]}),l.map(M),(0,c.jsx)(p.Menu.Section,{children:"\u5176\u4ED6"}),(0,c.jsx)(p.Menu.Item,{icon:"Duotune/elc001",children:"\u5927\u56FE\u7BA1\u7406"},"banner"),(0,c.jsx)(p.Menu.Item,{url:"/cms/authors",icon:"Duotune/cod002",children:"\u4F5C\u8005"},"authors"),(0,c.jsx)(p.Menu.Item,{icon:"Duotune/art002",children:"\u6807\u7B7E"},"tags"),(0,c.jsx)(p.Menu.Section,{children:"\u5168\u5C40\u8BBE\u7F6E"}),(0,c.jsx)(p.Menu.Item,{icon:"Duotune/abs008",children:"\u8BBE\u7F6E"},"settings")]})})]})}var _=D},42755:function(H,x,e){e.d(x,{Se:function(){return E},WP:function(){return R},vz:function(){return O},V7:function(){return ne},St:function(){return m},gk:function(){return N},e7:function(){return ae},uw:function(){return X},eU:function(){return q},nT:function(){return te},Qu:function(){return ue},Mq:function(){return J}});var Q=e(97857),s=e.n(Q),L=e(68400),u=e.n(L),a=e(75063),v=e(37887),A=e(50319),j,p,T,c,M,D,_,y,b,l,r,d,f,i={},C=(0,a.Ps)(j||(j=u()([`
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
    `]))),h=(0,a.Ps)(p||(p=u()([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function m(t){var n=s()(s()({},i),t);return v.a(h,n)}function P(t){var n=_objectSpread(_objectSpread({},i),t);return Apollo.useLazyQuery(h,n)}function g(t){var n=_objectSpread(_objectSpread({},i),t);return Apollo.useSuspenseQuery(h,n)}var I=(0,a.Ps)(T||(T=u()([`
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
    `])));function N(t){var n=s()(s()({},i),t);return v.a(I,n)}function W(t){var n=_objectSpread(_objectSpread({},i),t);return Apollo.useLazyQuery(I,n)}function G(t){var n=_objectSpread(_objectSpread({},i),t);return Apollo.useSuspenseQuery(I,n)}var K=(0,a.Ps)(c||(c=u()([`
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
    `])));function O(t){var n=s()(s()({},i),t);return v.a(K,n)}function Z(t){var n=_objectSpread(_objectSpread({},i),t);return Apollo.useLazyQuery(K,n)}function o(t){var n=_objectSpread(_objectSpread({},i),t);return Apollo.useSuspenseQuery(K,n)}var S=(0,a.Ps)(M||(M=u()([`
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
    `])));function E(t){var n=s()(s()({},i),t);return v.a(S,n)}function z(t){var n=_objectSpread(_objectSpread({},i),t);return Apollo.useLazyQuery(S,n)}function $(t){var n=_objectSpread(_objectSpread({},i),t);return Apollo.useSuspenseQuery(S,n)}var B=(0,a.Ps)(D||(D=u()([`
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
    `])));function R(t){var n=s()(s()({},i),t);return v.a(B,n)}function U(t){var n=_objectSpread(_objectSpread({},i),t);return Apollo.useLazyQuery(B,n)}function F(t){var n=_objectSpread(_objectSpread({},i),t);return Apollo.useSuspenseQuery(B,n)}var w=(0,a.Ps)(_||(_=u()([`
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
    `,""])),C);function X(t){var n=s()(s()({},i),t);return A.D(w,n)}var Y=(0,a.Ps)(y||(y=u()([`
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
    `,""])),C);function J(t){var n=s()(s()({},i),t);return A.D(Y,n)}var k=(0,a.Ps)(b||(b=u()([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function q(t){var n=s()(s()({},i),t);return A.D(k,n)}var ee=(0,a.Ps)(l||(l=u()([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function te(t){var n=s()(s()({},i),t);return A.D(ee,n)}var V=(0,a.Ps)(r||(r=u()([`
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
    `,""])),C);function ne(t){var n=s()(s()({},i),t);return v.a(V,n)}function se(t){var n=_objectSpread(_objectSpread({},i),t);return Apollo.useLazyQuery(V,n)}function oe(t){var n=_objectSpread(_objectSpread({},i),t);return Apollo.useSuspenseQuery(V,n)}var re=(0,a.Ps)(d||(d=u()([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function ae(t){var n=s()(s()({},i),t);return A.D(re,n)}var ie=(0,a.Ps)(f||(f=u()([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function ue(t){var n=s()(s()({},i),t);return A.D(ie,n)}},66172:function(H,x,e){e.r(x);var Q=e(19632),s=e.n(Q),L=e(62435),u=e(96974),a=e(12845),v=e(51253),A=e(42141),j=e(42755),p=e(86074);function T(){var c=(0,u.TH)(),M=(0,a.useApp)(),D=M.modules.find(function(g){return g.key==="cms"}),_=D==null?void 0:D.configuration.rootCategory,y=(0,j.WP)({fetchPolicy:"cache-and-network",variables:{id:_}}),b=y.data,l=b===void 0?{}:b,r=l.category,d=(0,j.Se)({fetchPolicy:"cache-and-network",variables:{id:_}}),f=d.data,i=f===void 0?{categories:[]}:f,C=d.loading,h=(0,L.useMemo)(function(){var g=(0,u.LX)({path:"/cms/my/drafts",end:!1},c.pathname);if(g)return{key:"draft",params:g.params};var I=(0,u.LX)({path:"/cms/my/published",end:!1},c.pathname);if(I)return{key:"published",params:I.params};var N=(0,u.LX)({path:"/cms/categories/:cid/articles",end:!1},c.pathname);return N?{key:"category",params:N.params}:{key:"unknown",params:{}}},[c.pathname]),m=(0,L.useMemo)(function(){switch(h.key){case"draft":return[{title:"\u6211\u7684\u8349\u7A3F",url:"/cms/my/drafts"}];case"published":return[{title:"\u6211\u7684\u6587\u7AE0",url:"/cms/my/published"}];case"category":return[{title:"\u680F\u76EE"}];default:return[]}},[h]),P=(i==null?void 0:i.categories)||[];return(0,p.jsxs)(v.Hk,{className:"micro-app-website",children:[(0,p.jsx)(v.Hk.Sidebar,{children:(0,p.jsx)(A.default,{menuKey:h,loading:C,categories:P})}),(0,p.jsx)(u.j3,{context:{rootCategoryId:r==null?void 0:r.id,categories:P,baseUrl:"/cms",breadcrumbs:[{title:"\u5185\u5BB9\u7BA1\u7406",url:"/cms"}].concat(s()(m))}})]})}x.default=T}}]);
