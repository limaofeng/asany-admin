(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[9364,3190],{48775:function(B,F,n){"use strict";n.d(F,{GP:function(){return u.Z},Hk:function(){return y}});var u=n(48655),i=n(39981),d=n(67294),C=n(94184),D=n.n(C),S=n(12788),v=n(11849),$=n(28865),x=n(37334),L=n(2824),N=n(96486),b=n(85893),z={aside:{minimize:!1,width:280}},P=d.createContext({state:z,dispatch:function(){}}),c;(function(r){r.AsideToggle="ASIDE_TOGGLE",r.AsideWidth="ASIDE_WIDTH"})(c||(c={}));function m(r,g){switch(g.type){case"ASIDE_TOGGLE":return r.aside.minimize=!r.aside.minimize,(0,v.Z)({},r);case"ASIDE_WIDTH":return r.aside.width=g.payload,(0,v.Z)({},r);default:throw new Error}}var o=function(g){var E=(0,d.useReducer)(m,(0,N.cloneDeep)(z)),I=(0,L.Z)(E,2),j=I[0],Z=I[1];return(0,b.jsx)(P.Provider,{value:{state:j,dispatch:Z},children:g.children})},f=function(){return(0,d.useContext)(P)},O=n(17818),h=n(8265);function p(r){var g=r.className,E=r.header,I=r.children,j=r.collapsible,Z=j===void 0?!0:j,T=r.width,k=T===void 0?280:T,R=(0,h.$Y)(),U=f(),K=U.dispatch;return(0,d.useEffect)(function(){R.aside.width(k+100),K({type:c.AsideWidth,payload:k})},[R.aside,K,k]),(0,b.jsxs)("div",{className:D()("app-aside aside",g),children:[(0,b.jsx)(x.Z,{children:(0,b.jsx)(u.Z,{header:E,resizeable:!0,className:"app-sidebar",children:I})}),Z&&(0,b.jsx)(t,{className:"start-100 end-0"})]})}function t(r){var g=f(),E=g.dispatch,I=g.state.aside.minimize,j=(0,d.useCallback)(function(){E({type:c.AsideToggle})},[E]);return(0,b.jsx)(O.zx,{style:(0,v.Z)({marginBottom:"1.35rem",zIndex:105},r.style),onClick:j,activeColor:"primary",className:D()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",r.className,{active:I}),children:(0,b.jsx)($.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}p.Toggle=t;var a=p,e=S.ZP.div.withConfig({displayName:"MicroApp__MicroAppContainer",componentId:"sc-1dngjf6-0"})(["--root-aside-width:",";--met-aside-width:",";"],function(r){return r.minimize?"100px":"".concat(r.width,"px")},function(r){return r.minimize?"100px":"".concat(r.width,"px")});function M(r){var g=r.children,E=r.className,I=f(),j=I.state.aside,Z=j.minimize,T=j.width,k=(0,d.useCallback)(function(R){R.preventDefault()},[]);return(0,b.jsx)(e,{minimize:Z,width:T,className:D()("micro-app-container page-full-content",E,{"aside-minimize":Z}),onContextMenu:k,children:g})}function _(r){var g=r.children,E=r.className;return(0,b.jsx)(o,{children:(0,b.jsx)(M,{className:E,children:g})})}_.Sidebar=a;var y=_,A=n(53851)},8265:function(B,F,n){"use strict";n.d(F,{$Y:function(){return L},BK:function(){return N},aM:function(){return P}});var u=n(2824),i=n(11849),d=n(67294),C=n(85893),D=d.createContext({getState:function(){return{routes:[]}},subscribe:function(){},dispatch:function(){}}),S=function(m,o){return o?o.type==="ASIDE_MINIMIZE"?(0,i.Z)((0,i.Z)({},m),{},{aside:(0,i.Z)((0,i.Z)({},m.aside),{},{minimize:!!o.payload})}):o.type==="ASIDE_WIDTH"?(0,i.Z)((0,i.Z)({},m),{},{aside:(0,i.Z)((0,i.Z)({},m.aside),{},{width:o.payload})}):o.type==="ASIDE_COLLAPSIBLE"?(0,i.Z)((0,i.Z)({},m),{},{aside:(0,i.Z)((0,i.Z)({},m.aside),{},{collapsible:o.payload})}):m:m},v=function(m){return(0,i.Z)({},m)};function $(c){var m=(0,d.useReducer)(S,c,v),o=(0,u.Z)(m,2),f=o[0],O=o[1],h=(0,d.useState)([]),p=(0,u.Z)(h,1),t=p[0],a=function(E){return function(){var I=t.indexOf(E);I>-1&&t.splice(I,1)}},e=(0,d.useCallback)(function(g){return t.unshift(g),a(g)},[t]),M=(0,d.useCallback)(function(){t.forEach(function(g){return g()})},[t]),_={getState:function(){return f},dispatch:O,subscribe:e},y=(0,d.useState)(_),A=(0,u.Z)(y,1),r=A[0];return(0,d.useEffect)(function(){r.getState=function(){return f},M()},[f]),r}var x=function(m,o){return m===o};function L(){var c=(0,d.useContext)(D),m=(0,d.useRef)({aside:{get state(){return c.getState().aside},width:function(f){c.dispatch({type:"ASIDE_WIDTH",payload:f})},minimize:function(f){c.dispatch({type:"ASIDE_MINIMIZE",payload:f})},collapsible:function(f){c.dispatch({type:"ASIDE_COLLAPSIBLE",payload:f})}}});return m.current}function N(c){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x;return b(c,m)}function b(c){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x,o=(0,d.useContext)(D),f=(0,d.useReducer)(function(e){return e+1},0),O=(0,u.Z)(f,2),h=O[1],p=(0,d.useRef)(),t=c(o.getState());function a(){var e=c(o.getState());m(e,p.current)||(p.current=e,h())}return(0,d.useEffect)(function(){return o.subscribe(a)},[]),t}function z(){var c=useContext(D);return c.dispatch}function P(c){var m=c.children,o=c.state,f=$(o);return(0,d.useMemo)(function(){return(0,C.jsx)(D.Provider,{value:f,children:m})},[m,f])}},95901:function(B,F,n){"use strict";n.d(F,{dI:function(){return h},rB:function(){return O}});var u=n(2824),i=n(67294);function d(p){return p!=null&&p!==""}function C(p,t){var a=useState(p),e=_slicedToArray(a,2),M=e[0],_=e[1];return useEffect(function(){var y=setTimeout(function(){_(p)},t);return function(){clearTimeout(y)}},[p,t]),M}var D={USERS_LIST:"users-list"},S=n(54941),v=n(69610),$=n(36321),x=(0,S.Z)(function p(){var t=this;(0,v.Z)(this,p),this.menu=null,this.element=null,this.getParamName=function(a){var e=document.body.hasAttribute("data-kt-name"),M=e?e+"_":"";return"kt_"+M+"theme_mode_"+a},this.getMode=function(){var a,e=t.getParamName("value"),M=t.getMenuMode(),_="light";if(!localStorage)return _;var y=localStorage.getItem(e);if(y)return y;var A=(a=t.element)===null||a===void 0?void 0:a.getAttribute("data-theme");return A||(M?M==="system"?t.getSystemMode():M:_)},this.setMode=function(a,e){var M,_,y,A=a,r=e;if(!(A!=="light"&&A!=="dark")){var g=t.getParamName("value"),E=t.getParamName("menu");r==="system"&&t.getSystemMode()!==A&&(A=t.getSystemMode()),r||(r=A);var I=((M=t.menu)===null||M===void 0?void 0:M.querySelector('[data-kt-element="mode"][data-kt-value="'+r+'"]'))||null;(_=t.element)===null||_===void 0||_.setAttribute("data-kt-theme-mode-switching","true"),(y=t.element)===null||y===void 0||y.setAttribute("data-theme",A);var j=t;setTimeout(function(){var Z;(Z=j.element)===null||Z===void 0||Z.removeAttribute("data-kt-theme-mode-switching")},300),localStorage&&localStorage.setItem(g,A),I&&localStorage&&(localStorage.setItem(E,r),t.setActiveMenuItem(I)),t.flipImages()}},this.getMenuMode=function(){var a,e=t.getParamName("menu"),M=(a=t.menu)===null||a===void 0?void 0:a.querySelector('.active[data-kt-element="mode"]'),_=M==null?void 0:M.getAttribute("data-kt-value");if(_)return _;if(!e)return"";var y=localStorage?localStorage.getItem(e):null;return y||""},this.getSystemMode=function(){return window.matchMedia("(prefers-color-scheme: dark)")?"dark":"light"},this.initMode=function(){t.setMode(t.getMode(),t.getMenuMode()),t.element&&$.EventHandlerUtil.trigger(t.element,"kt.thememode.init")},this.setActiveMenuItem=function(a){var e,M=t.getParamName("menu"),_=a.getAttribute("data-kt-value"),y=(e=t.menu)===null||e===void 0?void 0:e.querySelector('.active[data-kt-element="mode"]');y&&y.classList.remove("active"),a.classList.add("active"),localStorage&&_&&M&&localStorage.setItem(M,_)},this.handleMenu=function(){var a,e;(a=t.menu)===null||a===void 0||(e=a.querySelectorAll('[data-kt-element="mode"]'))===null||e===void 0||e.forEach(function(M){M.addEventListener("click",function(_){_.preventDefault();var y=M.getAttribute("data-kt-value"),A=y==="system"?t.getSystemMode():y;A&&t.setMode(A,y)})})},this.flipImages=function(){var a;(a=document.querySelectorAll("[data-kt-img-dark]"))===null||a===void 0||a.forEach(function(e){e.tagName==="IMG"?t.getMode()==="dark"&&e.hasAttribute("data-kt-img-dark")?(e.setAttribute("data-kt-img-light",e.getAttribute("src")||""),e.setAttribute("src",e.getAttribute("data-kt-img-dark")||"")):t.getMode()==="light"&&e.hasAttribute("data-kt-img-light")&&(e.setAttribute("data-kt-img-dark",e.getAttribute("src")||""),e.setAttribute("src",e.getAttribute("data-kt-img-light")||"")):t.getMode()==="dark"&&e.hasAttribute("data-kt-img-dark")?(e.setAttribute("data-kt-img-light",e.getAttribute("src")||""),e.style.backgroundImage="url('"+e.getAttribute("data-kt-img-dark")+"')"):t.getMode()==="light"&&e.hasAttribute("data-kt-img-light")&&(e.setAttribute("data-kt-img-dark",e.getAttribute("src")||""),e.style.backgroundImage="url('"+e.getAttribute("data-kt-img-light")+"')")})},this.on=function(a,e){if(t.element)return $.EventHandlerUtil.on(t.element,a,e)},this.off=function(a,e){if(t.element)return $.EventHandlerUtil.off(t.element,a,e)},this.init=function(){t.menu=document.querySelector('[data-kt-element="theme-mode-menu"]'),t.element=document.documentElement,t.initMode(),t.menu&&t.handleMenu()}}),L=new x,N=n(85893),b=L.getSystemMode(),z=function(t){var a=t!=="system"?t:b,e="/media/patterns/header-bg"+(a==="light"?".jpg":"-dark.png");document.body.style.backgroundImage='url("'.concat(toAbsoluteUrl(e),'")')},P="kt_theme_mode_value",c="kt_theme_mode_menu",m=function(t){if(!localStorage)return"light";var a=localStorage.getItem(t);return!a||a==="light"?"light":a==="dark"?"dark":"system"},o={mode:m(P),menuMode:m(c),updateMode:function(t){},updateMenuMode:function(t){}},f=(0,i.createContext)({mode:o.mode,menuMode:o.menuMode,updateMode:function(t){},updateMenuMode:function(t){}}),O=function(){return(0,i.useContext)(f)},h=function(t){var a=t.children,e=(0,i.useState)(o.mode),M=(0,u.Z)(e,2),_=M[0],y=M[1],A=(0,i.useState)(o.menuMode),r=(0,u.Z)(A,2),g=r[0],E=r[1],I=function(T){var k=T==="system"?b:T;y(k),localStorage&&localStorage.setItem(P,k),document.documentElement.setAttribute("data-theme",k),L.init()},j=function(T){E(T),localStorage&&localStorage.setItem(c,T)};return(0,i.useEffect)(function(){I(_),j(g)},[]),(0,N.jsx)(f.Provider,{value:{mode:_,menuMode:g,updateMode:I,updateMenuMode:j},children:a})}},23798:function(B,F,n){"use strict";n.d(F,{k$:function(){return t},WF:function(){return a},au:function(){return M},ot:function(){return _},aA:function(){return A},AQ:function(){return g},G$:function(){return I},wp:function(){return k},ZO:function(){return U},c9:function(){return K},_c:function(){return Q},Pw:function(){return G},KX:function(){return Y},Nq:function(){return J}});var u=n(11849),i=n(20310),d=n(49704),C=n(64718),D=n(38460),S=n(21919),v,$,x,L,N,b,z,P,c,m,o,f,O,h={},p=(0,d.Ps)(v||(v=(0,i.Z)([`
    query module($id: ID!) {
  module(id: $id) {
    id
    code
    name
    picture
    description
  }
}
    `])));function t(l){var s=(0,u.Z)((0,u.Z)({},h),l);return C.a(p,s)}function a(l){var s=(0,u.Z)((0,u.Z)({},h),l);return D.t(p,s)}var e=(0,d.Ps)($||($=(0,i.Z)([`
    query modules($filter: ModuleFilter, $limit: Int) {
  modules(filter: $filter, limit: $limit) {
    id
    name
    code
    picture
    pictureUrl: picture(format: url)
    description
  }
}
    `])));function M(l){var s=(0,u.Z)((0,u.Z)({},h),l);return C.a(e,s)}function _(l){var s=(0,u.Z)((0,u.Z)({},h),l);return D.t(e,s)}var y=(0,d.Ps)(x||(x=(0,i.Z)([`
    mutation createModule($input: ModuleCreateInput!) {
  createModule(input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function A(l){var s=(0,u.Z)((0,u.Z)({},h),l);return S.D(y,s)}var r=(0,d.Ps)(L||(L=(0,i.Z)([`
    mutation updateModule($id: ID!, $input: ModuleUpdateInput!) {
  updateModule(id: $id, input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function g(l){var s=(0,u.Z)((0,u.Z)({},h),l);return S.D(r,s)}var E=(0,d.Ps)(N||(N=(0,i.Z)([`
    mutation deleteModule($id: ID!) {
  deleteModule(id: $id)
}
    `])));function I(l){var s=(0,u.Z)((0,u.Z)({},h),l);return S.D(E,s)}var j=(0,d.Ps)(b||(b=(0,i.Z)([`
    mutation deleteManyModules($ids: [ID!]!) {
  deleteManyModules(ids: $ids)
}
    `])));function Z(l){var s=_objectSpread(_objectSpread({},h),l);return Apollo.useMutation(j,s)}var T=(0,d.Ps)(z||(z=(0,i.Z)([`
    query schema($module: ID!) {
  models(module: $module, filter: {type: ENTITY}) {
    id
    code
    name
    description
  }
}
    `])));function k(l){var s=(0,u.Z)((0,u.Z)({},h),l);return C.a(T,s)}function R(l){var s=_objectSpread(_objectSpread({},h),l);return Apollo.useLazyQuery(T,s)}var U=(0,d.Ps)(P||(P=(0,i.Z)([`
    query model($id: ID) {
  model(id: $id) {
    id
    code
    name
    description
    fields {
      id
      code
      system
      type {
        id
        name
        family
        description
        graphQLType
      }
      name
      description
      metadata {
        databaseColumnName
      }
    }
  }
}
    `])));function K(l){var s=(0,u.Z)((0,u.Z)({},h),l);return C.a(U,s)}function q(l){var s=_objectSpread(_objectSpread({},h),l);return Apollo.useLazyQuery(U,s)}var W=(0,d.Ps)(c||(c=(0,i.Z)([`
    query modelFiledTypes {
  filedTypes: modelFiledTypes {
    id
    name
    description
    family
  }
}
    `])));function Q(l){var s=(0,u.Z)((0,u.Z)({},h),l);return C.a(W,s)}function ee(l){var s=_objectSpread(_objectSpread({},h),l);return Apollo.useLazyQuery(W,s)}var w=(0,d.Ps)(m||(m=(0,i.Z)([`
    query modelFields($model: ID!, $filter: ModelFieldFilter, $limit: Int) {
  listFields: modelFields(model: $model, filter: $filter, limit: $limit) {
    id
    name
    description
  }
}
    `])));function te(l){var s=_objectSpread(_objectSpread({},h),l);return Apollo.useQuery(w,s)}function ne(l){var s=_objectSpread(_objectSpread({},h),l);return Apollo.useLazyQuery(w,s)}var H=(0,d.Ps)(o||(o=(0,i.Z)([`
    mutation createModel($input: ModelCreateInput!) {
  createModel(input: $input) {
    id
    name
  }
}
    `])));function G(l){var s=(0,u.Z)((0,u.Z)({},h),l);return S.D(H,s)}var V=(0,d.Ps)(f||(f=(0,i.Z)([`
    mutation addModelField($modelId: ID!, $input: ModelFieldInput!) {
  addModelField(modelId: $modelId, input: $input) {
    id
    name
  }
}
    `])));function Y(l){var s=(0,u.Z)((0,u.Z)({},h),l);return S.D(V,s)}var X=(0,d.Ps)(O||(O=(0,i.Z)([`
    mutation removeModelField($modelId: ID!, $fieldId: ID!) {
  removeModelField(modelId: $modelId, fieldId: $fieldId)
}
    `])));function J(l){var s=(0,u.Z)((0,u.Z)({},h),l);return S.D(X,s)}},61923:function(B,F,n){"use strict";n.r(F);var u=n(2824),i=n(67294),d=n(51615),C=n(23798),D=n(48775),S=n(17818),v=n(85893);function $(x){var L=x.children,N=x.location,b=x.match.params.id,z=(0,C.k$)({variables:{id:b},fetchPolicy:"cache-and-network"}),P=z.data,c=P===void 0?{}:P,m=z.loading,o=c.module,f=(0,i.useMemo)(function(){var e=(0,d.LX)(N.pathname,{path:"/modules/:id/:feat",exact:!1,strict:!0});return e?e.params.feat:""},[N.pathname]),O=(0,i.useState)(f),h=(0,u.Z)(O,2),p=h[0],t=h[1];(0,i.useEffect)(function(){!f||t(f)},[f]);var a=(0,i.useCallback)(function(e){console.log("selectedKey",e.key),t(e.key)},[]);return(0,v.jsx)(D.Hk,{className:"module-view-app",loading:m,children:o&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(D.Hk.Sidebar,{className:"module-view-app-sidebar",collapsible:!1,width:216,children:(0,v.jsxs)(S.bH,{zIndex:10,className:"mt-5 p-5",overlayClassName:"bg-white bg-opacity-25",loading:!1,children:[(0,v.jsx)("div",{className:"pb-5",children:(0,v.jsxs)("div",{className:"d-flex align-items-center",children:[(0,v.jsx)(S.mN.Avatar,{alt:"\u5565\u5730\u65B9",className:"me-5",size:40}),(0,v.jsxs)("div",{className:"flex-grow-1",children:[(0,v.jsx)("a",{className:"text-dark fw-bolder text-hover-primary fs-6",children:o.name}),(0,v.jsx)("span",{className:"text-muted d-block fw-bold fs-8",dangerouslySetInnerHTML:{__html:o.description||"&nbsp;"}})]})]})}),(0,v.jsxs)("div",{className:"module-view-app-sidebar__menu_container",children:[(0,v.jsxs)(S.v2,{fit:!0,accordion:!1,selectable:"AllMenu",className:"menu-title-gray-600 menu-icon-gray-400 menu-state-bg menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0",selectedKeys:p?[p]:[],onSelect:a,children:[(0,v.jsx)(S.v2.Item,{bullet:!0,icon:"Fonticon/layers",title:"\u67B6\u6784",url:"/modules/".concat(o.id,"/schema")},"schema"),(0,v.jsx)(S.v2.Item,{bullet:!0,icon:"Fonticon/alignment-right",title:"\u5185\u5BB9\u7BA1\u7406",url:"/modules/".concat(o.id,"/content")},"content"),(0,v.jsx)(S.v2.Item,{bullet:!0,icon:"Fonticon/attachments",title:"\u9759\u6001\u8D44\u6E90",url:"/modules/".concat(o.id,"/assets")},"assets")]}),(0,v.jsx)(S.v2,{fit:!0,accordion:!1,className:"menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-bg menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0",selectedKeys:f?[f]:[],children:(0,v.jsx)(S.v2.Item,{bullet:!0,icon:"Bootstrap/gear",title:"\u6A21\u5757\u8BBE\u7F6E",url:"/modules/".concat(o.id,"/settings")},"settings")})]})]})}),(0,v.jsxs)("div",{style:{zIndex:99},className:"position-relative d-flex flex-row flex-row-fluid",children:[(0,v.jsx)("div",{style:{position:"fixed",height:"100vh",width:"1px",zIndex:105},children:(0,v.jsx)(D.Hk.Sidebar.Toggle,{className:"start-0"})}),i.Children.map(L,function(e){return e.props.location.state={module:o,baseUrl:"/modules/"+b},e})]})]})})}F.default=$}}]);
