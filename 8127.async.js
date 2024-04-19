"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8127,3269,1201],{51253:function(G,_,e){e.d(_,{GP:function(){return s.Z},Hk:function(){return H},xx:function(){return T.x}});var Q=e(74958),s=e(5166),T=e(19260),a=e(68400),i=e.n(a),v=e(62435),A=e(93967),D=e.n(A),p=e(94589),$=e(97857),c=e.n($),I=e(46027),E=e(10582),x=e(42687),y=e(79817),S=e(5574),l=e.n(S),o=e(96486),r=e(86074),m={aside:{minimize:!1,width:280}},u=v.createContext({state:m,dispatch:function(){}}),b=function(d){return d.AsideToggle="ASIDE_TOGGLE",d.AsideWidth="ASIDE_WIDTH",d}({});function h(d,j){switch(j.type){case"ASIDE_TOGGLE":return d.aside.minimize=!d.aside.minimize,c()({},d);case"ASIDE_WIDTH":return d.aside.width=j.payload,c()({},d);default:throw new Error}}var f=function(j){var O=(0,v.useReducer)(h,(0,o.cloneDeep)(m)),M=l()(O,2),L=M[0],N=M[1];return(0,r.jsx)(u.Provider,{value:{state:L,dispatch:N},children:j.children})},C=function(){return(0,v.useContext)(u)},g=e(65495);function P(d){var j=C(),O=j.dispatch,M=j.state.aside.minimize,L=(0,v.useCallback)(function(){O({type:b.AsideToggle})},[O]);return(0,r.jsx)(y.Button,{style:c()({marginBottom:"1.35rem",zIndex:105},d.style),onClick:L,activeColor:"primary",className:D()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",d.className,{active:M}),children:(0,r.jsx)(I.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}var R={"drawer drawer-start":{maxWidth:992}};function F(d){var j=d.className,O=d.header,M=d.children,L=d.collapsible,N=L===void 0?!0:L,w=d.width,K=w===void 0?280:w,U=(0,x.$Y)(),Y=C(),V=Y.dispatch;(0,v.useEffect)(function(){U.aside.width(K+100),V({type:b.AsideWidth,payload:K})},[U.aside,V,K]);var J=(0,E.CN)(R),k=(0,x.BK)(function(q){return q.aside.drawer});return(0,r.jsxs)("div",{className:D()("app-aside aside",j,J,{"drawer-on":k}),children:[(0,r.jsx)(g.Z,{children:(0,r.jsx)(s.Z,{header:O,resizeable:!0,className:"app-sidebar",children:M})}),N&&(0,r.jsx)(P,{className:"start-100 end-0"})]})}F.Toggle=P;var Z=F,z,B=p.ZP.div(z||(z=i()([`
  --root-aside-width: `,`;
  --met-aside-width: `,`;
`])),function(d){return d.minimize?"100px":"".concat(d.width,"px")},function(d){return d.minimize?"100px":"".concat(d.width,"px")});function X(d){var j=d.children,O=d.className,M=C(),L=M.state.aside,N=L.minimize,w=L.width,K=(0,v.useCallback)(function(U){U.preventDefault()},[]);return(0,r.jsx)(B,{minimize:N,width:w,className:D()("micro-app-container page-full-content",O,{"aside-minimize":N}),onContextMenu:K,children:j})}function W(d){var j=d.children,O=d.className;return(0,r.jsx)(f,{children:(0,r.jsx)(X,{className:O,children:j})})}W.Sidebar=Z;var H=W},42687:function(G,_,e){e.d(_,{$Y:function(){return I},BK:function(){return x},aM:function(){return S}});var Q=e(5574),s=e.n(Q),T=e(97857),a=e.n(T),i=e(62435),v=e(86074),A=i.createContext({getState:function(){return{routes:[]}},subscribe:function(){},dispatch:function(){}}),D=function(o,r){return r?r.type==="ASIDE_MINIMIZE"?a()(a()({},o),{},{aside:a()(a()({},o.aside),{},{minimize:!!r.payload})}):r.type==="ASIDE_WIDTH"?a()(a()({},o),{},{aside:a()(a()({},o.aside),{},{width:r.payload})}):r.type==="ASIDE_COLLAPSIBLE"?a()(a()({},o),{},{aside:a()(a()({},o.aside),{},{collapsible:r.payload})}):r.type==="ASIDE_DRAWER"?a()(a()({},o),{},{aside:a()(a()({},o.aside),{},{drawer:r.payload})}):o:o},p=function(o){return a()({},o)};function $(l){var o=(0,i.useReducer)(D,l,p),r=s()(o,2),m=r[0],u=r[1],b=(0,i.useState)([]),h=s()(b,1),f=h[0],C=function(X){return function(){var W=f.indexOf(X);W>-1&&f.splice(W,1)}},g=(0,i.useCallback)(function(B){return f.unshift(B),C(B)},[f]),P=(0,i.useCallback)(function(){f.forEach(function(B){return B()})},[f]),R={getState:function(){return m},dispatch:u,subscribe:g},F=(0,i.useState)(R),Z=s()(F,1),z=Z[0];return(0,i.useEffect)(function(){z.getState=function(){return m},P()},[m]),z}var c=function(o,r){return o===r};function I(){var l=(0,i.useContext)(A),o=(0,i.useRef)({aside:{get state(){return l.getState().aside},width:function(m){l.dispatch({type:"ASIDE_WIDTH",payload:m})},minimize:function(m){l.dispatch({type:"ASIDE_MINIMIZE",payload:m})},collapsible:function(m){l.dispatch({type:"ASIDE_COLLAPSIBLE",payload:m})},drawer:function(m){l.dispatch({type:"ASIDE_DRAWER",payload:m})}}});return o.current}function E(l){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c,r=(0,i.useContext)(A),m=(0,i.useReducer)(function(g){return g+1},0),u=s()(m,2),b=u[1],h=(0,i.useRef)(),f=l(r.getState());function C(){var g=l(r.getState());o(g,h.current)||(h.current=g,b())}return(0,i.useEffect)(function(){return r.subscribe(C)},[]),f}function x(l){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:c;return E(l,o)}function y(){var l=useContext(A);return l.dispatch}function S(l){var o=l.children,r=l.state,m=$(r);return(0,i.useMemo)(function(){return(0,v.jsx)(A.Provider,{value:m,children:o})},[o,m])}},42141:function(G,_,e){e.r(_),e.d(_,{default:function(){return x}});var Q=e(5574),s=e.n(Q),T=e(97857),a=e.n(T),i=e(62435),v=e(46027),A=e(1861),D=e(51253),p=e(79817),$=e(12708),c=e(86074);function I(y){return y.children&&y.children.length?(0,c.jsx)(p.Menu.SubMenu,{url:"/cms/categories/".concat(y.id,"/articles"),bullet:!0,icon:y.icon,title:y.name,children:(y.children||[]).map(I)},y.id):(0,c.jsx)(p.Menu.Item,{url:"/cms/categories/".concat(y.id,"/articles"),bullet:!0,icon:y.icon,children:y.name},y.id)}function E(y){var S=y.menuKey,l=(0,i.useMemo)(function(){return!y.categories||!y.categories.length?[]:(0,$.G_)(y.categories.map(function(f){return a()({},f)}),{idKey:"id",childrenKey:"children",pidKey:"parent.id",sort:function(C,g){return C.index-g.index}})},[y.categories]),o=(0,i.useState)(l.map(function(f){return f.id})),r=s()(o,2),m=r[0],u=r[1],b=(0,i.useCallback)(function(f){u(f)},[]);(0,i.useEffect)(function(){u(l.map(function(f){return f.id}))},[l.map(function(f){return f.id}).join(",")]);var h=(0,i.useMemo)(function(){switch(S.key){case"category":return S.params.cid;default:return S.key}},[S]);return console.log("selectedKey",h,S),(0,c.jsxs)(D.GP,{children:[(0,c.jsx)("div",{className:"mt-5 px-5 pt-5",children:(0,c.jsx)("h1",{className:"text-gray-800 fw-bold mb-6 mx-5",children:"\u5185\u5BB9\u7BA1\u7406"})}),(0,c.jsx)(A.E,{className:"custom-scrollbar flex-column-fluid px-10 mb-5",options:{scrollbars:{autoHide:"scroll"}},children:(0,c.jsxs)(p.Menu,{className:"cms-menu-sider menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0",openKeys:m,selectedKeys:h?[h]:[],onOpenChange:b,accordion:!1,selectable:"AllMenu",fit:!0,children:[(0,c.jsx)(p.Menu.Section,{children:"\u6211\u7684"}),(0,c.jsx)(p.Menu.Item,{url:"/cms/my/drafts",icon:"Duotune/art008",children:"\u8349\u7A3F\u7BB1"},"draft"),(0,c.jsx)(p.Menu.Item,{url:"/cms/my/published",icon:"Duotune/art006",children:"\u5DF2\u53D1\u5E03"},"published"),(0,c.jsxs)(p.Menu.Section,{className:"d-flex align-items-center",contentClassName:"w-100",sectionClassName:"w-100 d-flex align-items-center justify-content-between",children:[(0,c.jsxs)("span",{className:"menu-section text-muted text-uppercase fs-8 ls-1 flex-row-fluid",children:["\u4FE1\u606F\u680F\u76EE ",y.loading&&" - loading..."]}),(0,c.jsx)(p.Button,{icon:(0,c.jsx)(v.ZP,{style:{marginRight:".2rem"},name:"Duotune/arr087",className:""}),size:"sm",variant:"white",className:"py-1 px-3 me-n4",children:"\u65B0\u589E"})]}),l.map(I),(0,c.jsx)(p.Menu.Section,{children:"\u5176\u4ED6"}),(0,c.jsx)(p.Menu.Item,{icon:"Duotune/elc001",children:"\u5927\u56FE\u7BA1\u7406"},"banner"),(0,c.jsx)(p.Menu.Item,{url:"/cms/authors",icon:"Duotune/cod002",children:"\u4F5C\u8005"},"authors"),(0,c.jsx)(p.Menu.Item,{icon:"Duotune/art002",children:"\u6807\u7B7E"},"tags"),(0,c.jsx)(p.Menu.Section,{children:"\u5168\u5C40\u8BBE\u7F6E"}),(0,c.jsx)(p.Menu.Item,{icon:"Duotune/abs008",children:"\u8BBE\u7F6E"},"settings")]})})]})}var x=E},42755:function(G,_,e){e.d(_,{Se:function(){return d},WP:function(){return L},vz:function(){return B},V7:function(){return ne},St:function(){return f},gk:function(){return R},e7:function(){return ae},uw:function(){return U},eU:function(){return k},nT:function(){return te},Qu:function(){return ue},Mq:function(){return V}});var Q=e(97857),s=e.n(Q),T=e(68400),a=e.n(T),i=e(75063),v=e(37887),A=e(50319),D,p,$,c,I,E,x,y,S,l,o,r,m,u={},b=(0,i.Ps)(D||(D=a()([`
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
    `]))),h=(0,i.Ps)(p||(p=a()([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function f(t){var n=s()(s()({},u),t);return v.a(h,n)}function C(t){var n=_objectSpread(_objectSpread({},u),t);return Apollo.useLazyQuery(h,n)}function g(t){var n=_objectSpread(_objectSpread({},u),t);return Apollo.useSuspenseQuery(h,n)}var P=(0,i.Ps)($||($=a()([`
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
    `])));function R(t){var n=s()(s()({},u),t);return v.a(P,n)}function F(t){var n=_objectSpread(_objectSpread({},u),t);return Apollo.useLazyQuery(P,n)}function Z(t){var n=_objectSpread(_objectSpread({},u),t);return Apollo.useSuspenseQuery(P,n)}var z=(0,i.Ps)(c||(c=a()([`
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
    `])));function B(t){var n=s()(s()({},u),t);return v.a(z,n)}function X(t){var n=_objectSpread(_objectSpread({},u),t);return Apollo.useLazyQuery(z,n)}function W(t){var n=_objectSpread(_objectSpread({},u),t);return Apollo.useSuspenseQuery(z,n)}var H=(0,i.Ps)(I||(I=a()([`
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
    `])));function d(t){var n=s()(s()({},u),t);return v.a(H,n)}function j(t){var n=_objectSpread(_objectSpread({},u),t);return Apollo.useLazyQuery(H,n)}function O(t){var n=_objectSpread(_objectSpread({},u),t);return Apollo.useSuspenseQuery(H,n)}var M=(0,i.Ps)(E||(E=a()([`
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
    `])));function L(t){var n=s()(s()({},u),t);return v.a(M,n)}function N(t){var n=_objectSpread(_objectSpread({},u),t);return Apollo.useLazyQuery(M,n)}function w(t){var n=_objectSpread(_objectSpread({},u),t);return Apollo.useSuspenseQuery(M,n)}var K=(0,i.Ps)(x||(x=a()([`
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
    `,""])),b);function U(t){var n=s()(s()({},u),t);return A.D(K,n)}var Y=(0,i.Ps)(y||(y=a()([`
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
    `,""])),b);function V(t){var n=s()(s()({},u),t);return A.D(Y,n)}var J=(0,i.Ps)(S||(S=a()([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function k(t){var n=s()(s()({},u),t);return A.D(J,n)}var q=(0,i.Ps)(l||(l=a()([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function te(t){var n=s()(s()({},u),t);return A.D(q,n)}var ee=(0,i.Ps)(o||(o=a()([`
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
    `,""])),b);function ne(t){var n=s()(s()({},u),t);return v.a(ee,n)}function se(t){var n=_objectSpread(_objectSpread({},u),t);return Apollo.useLazyQuery(ee,n)}function oe(t){var n=_objectSpread(_objectSpread({},u),t);return Apollo.useSuspenseQuery(ee,n)}var re=(0,i.Ps)(r||(r=a()([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function ae(t){var n=s()(s()({},u),t);return A.D(re,n)}var ie=(0,i.Ps)(m||(m=a()([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function ue(t){var n=s()(s()({},u),t);return A.D(ie,n)}},66172:function(G,_,e){e.r(_);var Q=e(19632),s=e.n(Q),T=e(62435),a=e(96974),i=e(12845),v=e(51253),A=e(42141),D=e(42755),p=e(86074);function $(){var c=(0,a.TH)(),I=(0,i.useApp)(),E=I.modules.find(function(g){return g.key==="cms"}),x=E==null?void 0:E.configuration.rootCategory,y=(0,D.WP)({fetchPolicy:"cache-and-network",variables:{id:x}}),S=y.data,l=S===void 0?{}:S,o=l.category,r=(0,D.Se)({fetchPolicy:"cache-and-network",variables:{id:x}}),m=r.data,u=m===void 0?{categories:[]}:m,b=r.loading,h=(0,T.useMemo)(function(){var g=(0,a.LX)({path:"/cms/my/drafts",end:!1},c.pathname);if(g)return{key:"draft",params:g.params};var P=(0,a.LX)({path:"/cms/my/published",end:!1},c.pathname);if(P)return{key:"published",params:P.params};var R=(0,a.LX)({path:"/cms/categories/:cid/articles",end:!1},c.pathname);return R?{key:"category",params:R.params}:{key:"unknown",params:{}}},[c.pathname]),f=(0,T.useMemo)(function(){switch(h.key){case"draft":return[{title:"\u6211\u7684\u8349\u7A3F",url:"/cms/my/drafts"}];case"published":return[{title:"\u6211\u7684\u6587\u7AE0",url:"/cms/my/published"}];case"category":return[{title:"\u680F\u76EE"}];default:return[]}},[h]),C=(u==null?void 0:u.categories)||[];return(0,p.jsxs)(v.Hk,{className:"micro-app-website",children:[(0,p.jsx)(v.Hk.Sidebar,{children:(0,p.jsx)(A.default,{menuKey:h,loading:b,categories:C})}),(0,p.jsx)(a.j3,{context:{rootCategoryId:o==null?void 0:o.id,categories:C,baseUrl:"/cms",breadcrumbs:[{title:"\u5185\u5BB9\u7BA1\u7406",url:"/cms"}].concat(s()(f))}})]})}_.default=$}}]);
