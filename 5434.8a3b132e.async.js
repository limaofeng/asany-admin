(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[5434,3190],{48775:function(R,N,n){"use strict";n.d(N,{GP:function(){return s.Z},Hk:function(){return y}});var s=n(48655),d=n(39981),u=n(67294),P=n(94184),D=n.n(P),z=n(12788),Z=n(11849),S=n(28865),L=n(37334),p=n(2824),$=n(96486),b=n(85893),_={aside:{minimize:!1,width:280}},j=u.createContext({state:_,dispatch:function(){}}),o;(function(i){i.AsideToggle="ASIDE_TOGGLE",i.AsideWidth="ASIDE_WIDTH"})(o||(o={}));function l(i,g){switch(g.type){case"ASIDE_TOGGLE":return i.aside.minimize=!i.aside.minimize,(0,Z.Z)({},i);case"ASIDE_WIDTH":return i.aside.width=g.payload,(0,Z.Z)({},i);default:throw new Error}}var a=function(g){var C=(0,u.useReducer)(l,(0,$.cloneDeep)(_)),E=(0,p.Z)(C,2),I=E[0],x=E[1];return(0,b.jsx)(j.Provider,{value:{state:I,dispatch:x},children:g.children})},A=function(){return(0,u.useContext)(j)},T=n(17818),B=n(8265);function c(i){var g=i.className,C=i.header,E=i.children,I=i.collapsible,x=I===void 0?!0:I,O=i.width,k=O===void 0?280:O,U=(0,B.$Y)(),K=A(),W=K.dispatch;return(0,u.useEffect)(function(){U.aside.width(k+100),W({type:o.AsideWidth,payload:k})},[U.aside,W,k]),(0,b.jsxs)("div",{className:D()("app-aside aside",g),children:[(0,b.jsx)(L.Z,{children:(0,b.jsx)(s.Z,{header:C,resizeable:!0,className:"app-sidebar",children:E})}),x&&(0,b.jsx)(e,{className:"start-100 end-0"})]})}function e(i){var g=A(),C=g.dispatch,E=g.state.aside.minimize,I=(0,u.useCallback)(function(){C({type:o.AsideToggle})},[C]);return(0,b.jsx)(T.zx,{style:(0,Z.Z)({marginBottom:"1.35rem",zIndex:105},i.style),onClick:I,activeColor:"primary",className:D()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",i.className,{active:E}),children:(0,b.jsx)(S.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}c.Toggle=e;var r=c,t=z.ZP.div.withConfig({displayName:"MicroApp__MicroAppContainer",componentId:"sc-1dngjf6-0"})(["--root-aside-width:",";--met-aside-width:",";"],function(i){return i.minimize?"100px":"".concat(i.width,"px")},function(i){return i.minimize?"100px":"".concat(i.width,"px")});function m(i){var g=i.children,C=i.className,E=A(),I=E.state.aside,x=I.minimize,O=I.width,k=(0,u.useCallback)(function(U){U.preventDefault()},[]);return(0,b.jsx)(t,{minimize:x,width:O,className:D()("micro-app-container page-full-content",C,{"aside-minimize":x}),onContextMenu:k,children:g})}function M(i){var g=i.children,C=i.className;return(0,b.jsx)(a,{children:(0,b.jsx)(m,{className:C,children:g})})}M.Sidebar=r;var y=M,v=n(53851)},8265:function(R,N,n){"use strict";n.d(N,{$Y:function(){return p},BK:function(){return $},aM:function(){return j}});var s=n(2824),d=n(11849),u=n(67294),P=n(85893),D=u.createContext({getState:function(){return{routes:[]}},subscribe:function(){},dispatch:function(){}}),z=function(l,a){return a?a.type==="ASIDE_MINIMIZE"?(0,d.Z)((0,d.Z)({},l),{},{aside:(0,d.Z)((0,d.Z)({},l.aside),{},{minimize:!!a.payload})}):a.type==="ASIDE_WIDTH"?(0,d.Z)((0,d.Z)({},l),{},{aside:(0,d.Z)((0,d.Z)({},l.aside),{},{width:a.payload})}):a.type==="ASIDE_COLLAPSIBLE"?(0,d.Z)((0,d.Z)({},l),{},{aside:(0,d.Z)((0,d.Z)({},l.aside),{},{collapsible:a.payload})}):l:l},Z=function(l){return(0,d.Z)({},l)};function S(o){var l=(0,u.useReducer)(z,o,Z),a=(0,s.Z)(l,2),A=a[0],T=a[1],B=(0,u.useState)([]),c=(0,s.Z)(B,1),e=c[0],r=function(C){return function(){var E=e.indexOf(C);E>-1&&e.splice(E,1)}},t=(0,u.useCallback)(function(g){return e.unshift(g),r(g)},[e]),m=(0,u.useCallback)(function(){e.forEach(function(g){return g()})},[e]),M={getState:function(){return A},dispatch:T,subscribe:t},y=(0,u.useState)(M),v=(0,s.Z)(y,1),i=v[0];return(0,u.useEffect)(function(){i.getState=function(){return A},m()},[A]),i}var L=function(l,a){return l===a};function p(){var o=(0,u.useContext)(D),l=(0,u.useRef)({aside:{get state(){return o.getState().aside},width:function(A){o.dispatch({type:"ASIDE_WIDTH",payload:A})},minimize:function(A){o.dispatch({type:"ASIDE_MINIMIZE",payload:A})},collapsible:function(A){o.dispatch({type:"ASIDE_COLLAPSIBLE",payload:A})}}});return l.current}function $(o){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L;return b(o,l)}function b(o){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L,a=(0,u.useContext)(D),A=(0,u.useReducer)(function(t){return t+1},0),T=(0,s.Z)(A,2),B=T[1],c=(0,u.useRef)(),e=o(a.getState());function r(){var t=o(a.getState());l(t,c.current)||(c.current=t,B())}return(0,u.useEffect)(function(){return a.subscribe(r)},[]),e}function _(){var o=useContext(D);return o.dispatch}function j(o){var l=o.children,a=o.state,A=S(a);return(0,u.useMemo)(function(){return(0,P.jsx)(D.Provider,{value:A,children:l})},[l,A])}},95901:function(R,N,n){"use strict";n.d(N,{dI:function(){return B},rB:function(){return T}});var s=n(2824),d=n(67294);function u(c){return c!=null&&c!==""}function P(c,e){var r=useState(c),t=_slicedToArray(r,2),m=t[0],M=t[1];return useEffect(function(){var y=setTimeout(function(){M(c)},e);return function(){clearTimeout(y)}},[c,e]),m}var D={USERS_LIST:"users-list"},z=n(54941),Z=n(69610),S=n(36321),L=(0,z.Z)(function c(){var e=this;(0,Z.Z)(this,c),this.menu=null,this.element=null,this.getParamName=function(r){var t=document.body.hasAttribute("data-kt-name"),m=t?t+"_":"";return"kt_"+m+"theme_mode_"+r},this.getMode=function(){var r,t=e.getParamName("value"),m=e.getMenuMode(),M="light";if(!localStorage)return M;var y=localStorage.getItem(t);if(y)return y;var v=(r=e.element)===null||r===void 0?void 0:r.getAttribute("data-theme");return v||(m?m==="system"?e.getSystemMode():m:M)},this.setMode=function(r,t){var m,M,y,v=r,i=t;if(!(v!=="light"&&v!=="dark")){var g=e.getParamName("value"),C=e.getParamName("menu");i==="system"&&e.getSystemMode()!==v&&(v=e.getSystemMode()),i||(i=v);var E=((m=e.menu)===null||m===void 0?void 0:m.querySelector('[data-kt-element="mode"][data-kt-value="'+i+'"]'))||null;(M=e.element)===null||M===void 0||M.setAttribute("data-kt-theme-mode-switching","true"),(y=e.element)===null||y===void 0||y.setAttribute("data-theme",v);var I=e;setTimeout(function(){var x;(x=I.element)===null||x===void 0||x.removeAttribute("data-kt-theme-mode-switching")},300),localStorage&&localStorage.setItem(g,v),E&&localStorage&&(localStorage.setItem(C,i),e.setActiveMenuItem(E)),e.flipImages()}},this.getMenuMode=function(){var r,t=e.getParamName("menu"),m=(r=e.menu)===null||r===void 0?void 0:r.querySelector('.active[data-kt-element="mode"]'),M=m==null?void 0:m.getAttribute("data-kt-value");if(M)return M;if(!t)return"";var y=localStorage?localStorage.getItem(t):null;return y||""},this.getSystemMode=function(){return window.matchMedia("(prefers-color-scheme: dark)")?"dark":"light"},this.initMode=function(){e.setMode(e.getMode(),e.getMenuMode()),e.element&&S.EventHandlerUtil.trigger(e.element,"kt.thememode.init")},this.setActiveMenuItem=function(r){var t,m=e.getParamName("menu"),M=r.getAttribute("data-kt-value"),y=(t=e.menu)===null||t===void 0?void 0:t.querySelector('.active[data-kt-element="mode"]');y&&y.classList.remove("active"),r.classList.add("active"),localStorage&&M&&m&&localStorage.setItem(m,M)},this.handleMenu=function(){var r,t;(r=e.menu)===null||r===void 0||(t=r.querySelectorAll('[data-kt-element="mode"]'))===null||t===void 0||t.forEach(function(m){m.addEventListener("click",function(M){M.preventDefault();var y=m.getAttribute("data-kt-value"),v=y==="system"?e.getSystemMode():y;v&&e.setMode(v,y)})})},this.flipImages=function(){var r;(r=document.querySelectorAll("[data-kt-img-dark]"))===null||r===void 0||r.forEach(function(t){t.tagName==="IMG"?e.getMode()==="dark"&&t.hasAttribute("data-kt-img-dark")?(t.setAttribute("data-kt-img-light",t.getAttribute("src")||""),t.setAttribute("src",t.getAttribute("data-kt-img-dark")||"")):e.getMode()==="light"&&t.hasAttribute("data-kt-img-light")&&(t.setAttribute("data-kt-img-dark",t.getAttribute("src")||""),t.setAttribute("src",t.getAttribute("data-kt-img-light")||"")):e.getMode()==="dark"&&t.hasAttribute("data-kt-img-dark")?(t.setAttribute("data-kt-img-light",t.getAttribute("src")||""),t.style.backgroundImage="url('"+t.getAttribute("data-kt-img-dark")+"')"):e.getMode()==="light"&&t.hasAttribute("data-kt-img-light")&&(t.setAttribute("data-kt-img-dark",t.getAttribute("src")||""),t.style.backgroundImage="url('"+t.getAttribute("data-kt-img-light")+"')")})},this.on=function(r,t){if(e.element)return S.EventHandlerUtil.on(e.element,r,t)},this.off=function(r,t){if(e.element)return S.EventHandlerUtil.off(e.element,r,t)},this.init=function(){e.menu=document.querySelector('[data-kt-element="theme-mode-menu"]'),e.element=document.documentElement,e.initMode(),e.menu&&e.handleMenu()}}),p=new L,$=n(85893),b=p.getSystemMode(),_=function(e){var r=e!=="system"?e:b,t="/media/patterns/header-bg"+(r==="light"?".jpg":"-dark.png");document.body.style.backgroundImage='url("'.concat(toAbsoluteUrl(t),'")')},j="kt_theme_mode_value",o="kt_theme_mode_menu",l=function(e){if(!localStorage)return"light";var r=localStorage.getItem(e);return!r||r==="light"?"light":r==="dark"?"dark":"system"},a={mode:l(j),menuMode:l(o),updateMode:function(e){},updateMenuMode:function(e){}},A=(0,d.createContext)({mode:a.mode,menuMode:a.menuMode,updateMode:function(e){},updateMenuMode:function(e){}}),T=function(){return(0,d.useContext)(A)},B=function(e){var r=e.children,t=(0,d.useState)(a.mode),m=(0,s.Z)(t,2),M=m[0],y=m[1],v=(0,d.useState)(a.menuMode),i=(0,s.Z)(v,2),g=i[0],C=i[1],E=function(O){var k=O==="system"?b:O;y(k),localStorage&&localStorage.setItem(j,k),document.documentElement.setAttribute("data-theme",k),p.init()},I=function(O){C(O),localStorage&&localStorage.setItem(o,O)};return(0,d.useEffect)(function(){E(M),I(g)},[]),(0,$.jsx)(A.Provider,{value:{mode:M,menuMode:g,updateMode:E,updateMenuMode:I},children:r})}},85918:function(R,N,n){"use strict";n.r(N);var s=n(11849),d=n(2824),u=n(67294),P=n(28865),D=n(1861),z=n(8845),Z=n(48775),S=n(17818),L=n(25496),p=n(85893);function $(_){return _.children&&_.children.length?(0,p.jsx)(S.v2.SubMenu,{url:"/cms/channels/".concat(_.id),bullet:!0,icon:_.icon,title:_.name,children:(_.children||[]).map($)},_.id):(0,p.jsx)(S.v2.Item,{url:"/cms/channels/".concat(_.id),bullet:!0,icon:_.icon,children:_.name},_.id)}function b(){var _=(0,z.Se)({fetchPolicy:"cache-and-network"}),j=_.data,o=j===void 0?{categories:[]}:j,l=_.loading,a=(0,u.useState)("draft"),A=(0,d.Z)(a,2),T=A[0],B=A[1],c=(0,u.useMemo)(function(){return!o.categories||!o.categories.length?[]:(0,L.G_)(o.categories.map(function(v){return(0,s.Z)({},v)}),{idKey:"id",childrenKey:"children",pidKey:"parent.id",sort:function(i,g){return i.index-g.index}})},[o.categories]),e=(0,u.useState)(c.map(function(v){return v.id})),r=(0,d.Z)(e,2),t=r[0],m=r[1],M=(0,u.useCallback)(function(v){B(v.key)},[]),y=(0,u.useCallback)(function(v){m(v)},[]);return(0,u.useEffect)(function(){m(c.map(function(v){return v.id}))},[c.map(function(v){return v.id}).join(",")]),(0,p.jsxs)(Z.GP,{children:[(0,p.jsx)("div",{className:"mt-5 px-5 pt-5",children:(0,p.jsx)("h1",{className:"text-gray-800 fw-bold mb-6 mx-5",children:"\u5185\u5BB9\u7BA1\u7406"})}),(0,p.jsx)(D.E,{className:"custom-scrollbar flex-column-fluid px-10 mb-5",options:{scrollbars:{autoHide:"scroll"}},children:(0,p.jsxs)(S.v2,{className:"cms-menu-sider menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0",onSelect:M,openKeys:t,selectedKeys:T?[T]:[],onOpenChange:y,accordion:!1,selectable:"AllMenu",fit:!0,children:[(0,p.jsx)(S.v2.Section,{children:"\u6211\u7684"}),(0,p.jsx)(S.v2.Item,{url:"/cms/my/drafts",icon:"Duotune/art008",children:"\u8349\u7A3F\u7BB1"},"draft"),(0,p.jsx)(S.v2.Item,{url:"/cms/my/published",icon:"Duotune/art006",children:"\u5DF2\u53D1\u5E03"},"published"),(0,p.jsxs)(S.v2.Section,{className:"d-flex align-items-center",children:[(0,p.jsxs)("span",{className:"menu-section text-muted text-uppercase fs-8 ls-1 flex-row-fluid",children:["\u4FE1\u606F\u680F\u76EE ",l&&" - loading..."]}),(0,p.jsx)(S.zx,{icon:(0,p.jsx)(P.ZP,{style:{marginRight:".2rem"},name:"Duotune/arr087",className:""}),size:"sm",variant:"white",className:"py-1 px-3 me-n4",children:"\u65B0\u589E"})]}),c.map($),(0,p.jsx)(S.v2.Section,{children:"\u5176\u4ED6"}),(0,p.jsx)(S.v2.Item,{icon:"Duotune/elc001",children:"\u5927\u56FE\u7BA1\u7406"},"banner"),(0,p.jsx)(S.v2.Item,{url:"/cms/authors",icon:"Duotune/cod002",children:"\u4F5C\u8005"},"authors"),(0,p.jsx)(S.v2.Item,{icon:"Duotune/art002",children:"\u6807\u7B7E"},"tags"),(0,p.jsx)(S.v2.Section,{children:"\u5168\u5C40\u8BBE\u7F6E"}),(0,p.jsx)(S.v2.Item,{icon:"Duotune/abs008",children:"\u8BBE\u7F6E"},"settings")]})})]})}N.default=b},8845:function(R,N,n){"use strict";n.d(N,{Se:function(){return m},WP:function(){return v},V7:function(){return W},St:function(){return T},gk:function(){return e},e7:function(){return F},uw:function(){return C},eU:function(){return O},nT:function(){return U},Qu:function(){return G},Mq:function(){return I}});var s=n(11849),d=n(20310),u=n(49704),P=n(64718),D=n(21919),z,Z,S,L,p,$,b,_,j,o,l,a={},A=(0,u.Ps)(z||(z=(0,d.Z)([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function T(f){var h=(0,s.Z)((0,s.Z)({},a),f);return P.a(A,h)}function B(f){var h=_objectSpread(_objectSpread({},a),f);return Apollo.useLazyQuery(A,h)}var c=(0,u.Ps)(Z||(Z=(0,d.Z)([`
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
    `])));function e(f){var h=(0,s.Z)((0,s.Z)({},a),f);return P.a(c,h)}function r(f){var h=_objectSpread(_objectSpread({},a),f);return Apollo.useLazyQuery(c,h)}var t=(0,u.Ps)(S||(S=(0,d.Z)([`
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
    `])));function m(f){var h=(0,s.Z)((0,s.Z)({},a),f);return P.a(t,h)}function M(f){var h=_objectSpread(_objectSpread({},a),f);return Apollo.useLazyQuery(t,h)}var y=(0,u.Ps)(L||(L=(0,d.Z)([`
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
    `])));function v(f){var h=(0,s.Z)((0,s.Z)({},a),f);return P.a(y,h)}function i(f){var h=_objectSpread(_objectSpread({},a),f);return Apollo.useLazyQuery(y,h)}var g=(0,u.Ps)(p||(p=(0,d.Z)([`
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
    `])));function C(f){var h=(0,s.Z)((0,s.Z)({},a),f);return D.D(g,h)}var E=(0,u.Ps)($||($=(0,d.Z)([`
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
    `])));function I(f){var h=(0,s.Z)((0,s.Z)({},a),f);return D.D(E,h)}var x=(0,u.Ps)(b||(b=(0,d.Z)([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function O(f){var h=(0,s.Z)((0,s.Z)({},a),f);return D.D(x,h)}var k=(0,u.Ps)(_||(_=(0,d.Z)([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function U(f){var h=(0,s.Z)((0,s.Z)({},a),f);return D.D(k,h)}var K=(0,u.Ps)(j||(j=(0,d.Z)([`
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
    `])));function W(f){var h=(0,s.Z)((0,s.Z)({},a),f);return P.a(K,h)}function w(f){var h=_objectSpread(_objectSpread({},a),f);return Apollo.useLazyQuery(K,h)}var Q=(0,u.Ps)(o||(o=(0,d.Z)([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function F(f){var h=(0,s.Z)((0,s.Z)({},a),f);return D.D(Q,h)}var H=(0,u.Ps)(l||(l=(0,d.Z)([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function G(f){var h=(0,s.Z)((0,s.Z)({},a),f);return D.D(H,h)}}}]);
