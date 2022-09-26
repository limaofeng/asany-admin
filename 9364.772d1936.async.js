(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[9364,3190],{48775:function(B,F,a){"use strict";a.d(F,{GP:function(){return o.Z},Hk:function(){return y}});var o=a(48655),u=a(39981),l=a(67294),T=a(94184),D=a.n(T),_=a(12788),f=a(11849),$=a(28865),Z=a(37334),L=a(2824),N=a(96486),b=a(85893),U={aside:{minimize:!1,width:280}},P=l.createContext({state:U,dispatch:function(){}}),m;(function(i){i.AsideToggle="ASIDE_TOGGLE",i.AsideWidth="ASIDE_WIDTH"})(m||(m={}));function v(i,M){switch(M.type){case"ASIDE_TOGGLE":return i.aside.minimize=!i.aside.minimize,(0,f.Z)({},i);case"ASIDE_WIDTH":return i.aside.width=M.payload,(0,f.Z)({},i);default:throw new Error}}var d=function(M){var A=(0,l.useReducer)(v,(0,N.cloneDeep)(U)),I=(0,L.Z)(A,2),E=I[0],j=I[1];return(0,b.jsx)(P.Provider,{value:{state:E,dispatch:j},children:M.children})},p=function(){return(0,l.useContext)(P)},C=a(17818),x=a(8265);function n(i){var M=i.className,A=i.header,I=i.children,E=i.collapsible,j=E===void 0?!0:E,k=i.width,O=k===void 0?280:k,z=(0,x.$Y)(),K=p(),R=K.dispatch;return(0,l.useEffect)(function(){z.aside.width(O+100),R({type:m.AsideWidth,payload:O})},[z.aside,R,O]),(0,b.jsxs)("div",{className:D()("app-aside aside",M),children:[(0,b.jsx)(Z.Z,{children:(0,b.jsx)(o.Z,{header:A,resizeable:!0,className:"app-sidebar",children:I})}),j&&(0,b.jsx)(e,{className:"start-100 end-0"})]})}function e(i){var M=p(),A=M.dispatch,I=M.state.aside.minimize,E=(0,l.useCallback)(function(){A({type:m.AsideToggle})},[A]);return(0,b.jsx)(C.zx,{style:(0,f.Z)({marginBottom:"1.35rem",zIndex:105},i.style),onClick:E,activeColor:"primary",className:D()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",i.className,{active:I}),children:(0,b.jsx)($.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}n.Toggle=e;var r=n,t=_.ZP.div.withConfig({displayName:"MicroApp__MicroAppContainer",componentId:"sc-1dngjf6-0"})(["--root-aside-width:",";--met-aside-width:",";"],function(i){return i.minimize?"100px":"".concat(i.width,"px")},function(i){return i.minimize?"100px":"".concat(i.width,"px")});function h(i){var M=i.children,A=i.className,I=p(),E=I.state.aside,j=E.minimize,k=E.width,O=(0,l.useCallback)(function(z){z.preventDefault()},[]);return(0,b.jsx)(t,{minimize:j,width:k,className:D()("micro-app-container page-full-content",A,{"aside-minimize":j}),onContextMenu:O,children:M})}function g(i){var M=i.children,A=i.className;return(0,b.jsx)(d,{children:(0,b.jsx)(h,{className:A,children:M})})}g.Sidebar=r;var y=g,S=a(53851)},8265:function(B,F,a){"use strict";a.d(F,{$Y:function(){return L},BK:function(){return N},aM:function(){return P}});var o=a(2824),u=a(11849),l=a(67294),T=a(85893),D=l.createContext({getState:function(){return{routes:[]}},subscribe:function(){},dispatch:function(){}}),_=function(v,d){return d?d.type==="ASIDE_MINIMIZE"?(0,u.Z)((0,u.Z)({},v),{},{aside:(0,u.Z)((0,u.Z)({},v.aside),{},{minimize:!!d.payload})}):d.type==="ASIDE_WIDTH"?(0,u.Z)((0,u.Z)({},v),{},{aside:(0,u.Z)((0,u.Z)({},v.aside),{},{width:d.payload})}):d.type==="ASIDE_COLLAPSIBLE"?(0,u.Z)((0,u.Z)({},v),{},{aside:(0,u.Z)((0,u.Z)({},v.aside),{},{collapsible:d.payload})}):v:v},f=function(v){return(0,u.Z)({},v)};function $(m){var v=(0,l.useReducer)(_,m,f),d=(0,o.Z)(v,2),p=d[0],C=d[1],x=(0,l.useState)([]),n=(0,o.Z)(x,1),e=n[0],r=function(A){return function(){var I=e.indexOf(A);I>-1&&e.splice(I,1)}},t=(0,l.useCallback)(function(M){return e.unshift(M),r(M)},[e]),h=(0,l.useCallback)(function(){e.forEach(function(M){return M()})},[e]),g={getState:function(){return p},dispatch:C,subscribe:t},y=(0,l.useState)(g),S=(0,o.Z)(y,1),i=S[0];return(0,l.useEffect)(function(){i.getState=function(){return p},h()},[p]),i}var Z=function(v,d){return v===d};function L(){var m=(0,l.useContext)(D),v=(0,l.useRef)({aside:{get state(){return m.getState().aside},width:function(p){m.dispatch({type:"ASIDE_WIDTH",payload:p})},minimize:function(p){m.dispatch({type:"ASIDE_MINIMIZE",payload:p})},collapsible:function(p){m.dispatch({type:"ASIDE_COLLAPSIBLE",payload:p})}}});return v.current}function N(m){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Z;return b(m,v)}function b(m){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Z,d=(0,l.useContext)(D),p=(0,l.useReducer)(function(t){return t+1},0),C=(0,o.Z)(p,2),x=C[1],n=(0,l.useRef)(),e=m(d.getState());function r(){var t=m(d.getState());v(t,n.current)||(n.current=t,x())}return(0,l.useEffect)(function(){return d.subscribe(r)},[]),e}function U(){var m=useContext(D);return m.dispatch}function P(m){var v=m.children,d=m.state,p=$(d);return(0,l.useMemo)(function(){return(0,T.jsx)(D.Provider,{value:p,children:v})},[v,p])}},95901:function(B,F,a){"use strict";a.d(F,{dI:function(){return x},rB:function(){return C}});var o=a(2824),u=a(67294);function l(n){return n!=null&&n!==""}function T(n,e){var r=useState(n),t=_slicedToArray(r,2),h=t[0],g=t[1];return useEffect(function(){var y=setTimeout(function(){g(n)},e);return function(){clearTimeout(y)}},[n,e]),h}var D={USERS_LIST:"users-list"},_=a(54941),f=a(69610),$=a(36321),Z=(0,_.Z)(function n(){var e=this;(0,f.Z)(this,n),this.menu=null,this.element=null,this.getParamName=function(r){var t=document.body.hasAttribute("data-kt-name"),h=t?t+"_":"";return"kt_"+h+"theme_mode_"+r},this.getMode=function(){var r,t=e.getParamName("value"),h=e.getMenuMode(),g="light";if(!localStorage)return g;var y=localStorage.getItem(t);if(y)return y;var S=(r=e.element)===null||r===void 0?void 0:r.getAttribute("data-theme");return S||(h?h==="system"?e.getSystemMode():h:g)},this.setMode=function(r,t){var h,g,y,S=r,i=t;if(!(S!=="light"&&S!=="dark")){var M=e.getParamName("value"),A=e.getParamName("menu");i==="system"&&e.getSystemMode()!==S&&(S=e.getSystemMode()),i||(i=S);var I=((h=e.menu)===null||h===void 0?void 0:h.querySelector('[data-kt-element="mode"][data-kt-value="'+i+'"]'))||null;(g=e.element)===null||g===void 0||g.setAttribute("data-kt-theme-mode-switching","true"),(y=e.element)===null||y===void 0||y.setAttribute("data-theme",S);var E=e;setTimeout(function(){var j;(j=E.element)===null||j===void 0||j.removeAttribute("data-kt-theme-mode-switching")},300),localStorage&&localStorage.setItem(M,S),I&&localStorage&&(localStorage.setItem(A,i),e.setActiveMenuItem(I)),e.flipImages()}},this.getMenuMode=function(){var r,t=e.getParamName("menu"),h=(r=e.menu)===null||r===void 0?void 0:r.querySelector('.active[data-kt-element="mode"]'),g=h==null?void 0:h.getAttribute("data-kt-value");if(g)return g;if(!t)return"";var y=localStorage?localStorage.getItem(t):null;return y||""},this.getSystemMode=function(){return window.matchMedia("(prefers-color-scheme: dark)")?"dark":"light"},this.initMode=function(){e.setMode(e.getMode(),e.getMenuMode()),e.element&&$.EventHandlerUtil.trigger(e.element,"kt.thememode.init")},this.setActiveMenuItem=function(r){var t,h=e.getParamName("menu"),g=r.getAttribute("data-kt-value"),y=(t=e.menu)===null||t===void 0?void 0:t.querySelector('.active[data-kt-element="mode"]');y&&y.classList.remove("active"),r.classList.add("active"),localStorage&&g&&h&&localStorage.setItem(h,g)},this.handleMenu=function(){var r,t;(r=e.menu)===null||r===void 0||(t=r.querySelectorAll('[data-kt-element="mode"]'))===null||t===void 0||t.forEach(function(h){h.addEventListener("click",function(g){g.preventDefault();var y=h.getAttribute("data-kt-value"),S=y==="system"?e.getSystemMode():y;S&&e.setMode(S,y)})})},this.flipImages=function(){var r;(r=document.querySelectorAll("[data-kt-img-dark]"))===null||r===void 0||r.forEach(function(t){t.tagName==="IMG"?e.getMode()==="dark"&&t.hasAttribute("data-kt-img-dark")?(t.setAttribute("data-kt-img-light",t.getAttribute("src")||""),t.setAttribute("src",t.getAttribute("data-kt-img-dark")||"")):e.getMode()==="light"&&t.hasAttribute("data-kt-img-light")&&(t.setAttribute("data-kt-img-dark",t.getAttribute("src")||""),t.setAttribute("src",t.getAttribute("data-kt-img-light")||"")):e.getMode()==="dark"&&t.hasAttribute("data-kt-img-dark")?(t.setAttribute("data-kt-img-light",t.getAttribute("src")||""),t.style.backgroundImage="url('"+t.getAttribute("data-kt-img-dark")+"')"):e.getMode()==="light"&&t.hasAttribute("data-kt-img-light")&&(t.setAttribute("data-kt-img-dark",t.getAttribute("src")||""),t.style.backgroundImage="url('"+t.getAttribute("data-kt-img-light")+"')")})},this.on=function(r,t){if(e.element)return $.EventHandlerUtil.on(e.element,r,t)},this.off=function(r,t){if(e.element)return $.EventHandlerUtil.off(e.element,r,t)},this.init=function(){e.menu=document.querySelector('[data-kt-element="theme-mode-menu"]'),e.element=document.documentElement,e.initMode(),e.menu&&e.handleMenu()}}),L=new Z,N=a(85893),b=L.getSystemMode(),U=function(e){var r=e!=="system"?e:b,t="/media/patterns/header-bg"+(r==="light"?".jpg":"-dark.png");document.body.style.backgroundImage='url("'.concat(toAbsoluteUrl(t),'")')},P="kt_theme_mode_value",m="kt_theme_mode_menu",v=function(e){if(!localStorage)return"light";var r=localStorage.getItem(e);return!r||r==="light"?"light":r==="dark"?"dark":"system"},d={mode:v(P),menuMode:v(m),updateMode:function(e){},updateMenuMode:function(e){}},p=(0,u.createContext)({mode:d.mode,menuMode:d.menuMode,updateMode:function(e){},updateMenuMode:function(e){}}),C=function(){return(0,u.useContext)(p)},x=function(e){var r=e.children,t=(0,u.useState)(d.mode),h=(0,o.Z)(t,2),g=h[0],y=h[1],S=(0,u.useState)(d.menuMode),i=(0,o.Z)(S,2),M=i[0],A=i[1],I=function(k){var O=k==="system"?b:k;y(O),localStorage&&localStorage.setItem(P,O),document.documentElement.setAttribute("data-theme",O),L.init()},E=function(k){A(k),localStorage&&localStorage.setItem(m,k)};return(0,u.useEffect)(function(){I(g),E(M)},[]),(0,N.jsx)(p.Provider,{value:{mode:g,menuMode:M,updateMode:I,updateMenuMode:E},children:r})}},23798:function(B,F,a){"use strict";a.d(F,{k$:function(){return r},WF:function(){return t},au:function(){return g},ot:function(){return y},aA:function(){return i},AQ:function(){return A},G$:function(){return E},wp:function(){return z},ZO:function(){return R},c9:function(){return w},_c:function(){return H},Pw:function(){return V},KX:function(){return X},w4:function(){return q},Nq:function(){return te}});var o=a(11849),u=a(20310),l=a(49704),T=a(64718),D=a(38460),_=a(21919),f,$,Z,L,N,b,U,P,m,v,d,p,C,x,n={},e=(0,l.Ps)(f||(f=(0,u.Z)([`
    query module($id: ID!) {
  module(id: $id) {
    id
    code
    name
    picture
    description
  }
}
    `])));function r(s){var c=(0,o.Z)((0,o.Z)({},n),s);return T.a(e,c)}function t(s){var c=(0,o.Z)((0,o.Z)({},n),s);return D.t(e,c)}var h=(0,l.Ps)($||($=(0,u.Z)([`
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
    `])));function g(s){var c=(0,o.Z)((0,o.Z)({},n),s);return T.a(h,c)}function y(s){var c=(0,o.Z)((0,o.Z)({},n),s);return D.t(h,c)}var S=(0,l.Ps)(Z||(Z=(0,u.Z)([`
    mutation createModule($input: ModuleCreateInput!) {
  createModule(input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function i(s){var c=(0,o.Z)((0,o.Z)({},n),s);return _.D(S,c)}var M=(0,l.Ps)(L||(L=(0,u.Z)([`
    mutation updateModule($id: ID!, $input: ModuleUpdateInput!) {
  updateModule(id: $id, input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function A(s){var c=(0,o.Z)((0,o.Z)({},n),s);return _.D(M,c)}var I=(0,l.Ps)(N||(N=(0,u.Z)([`
    mutation deleteModule($id: ID!) {
  deleteModule(id: $id)
}
    `])));function E(s){var c=(0,o.Z)((0,o.Z)({},n),s);return _.D(I,c)}var j=(0,l.Ps)(b||(b=(0,u.Z)([`
    mutation deleteManyModules($ids: [ID!]!) {
  deleteManyModules(ids: $ids)
}
    `])));function k(s){var c=_objectSpread(_objectSpread({},n),s);return Apollo.useMutation(j,c)}var O=(0,l.Ps)(U||(U=(0,u.Z)([`
    query schema($module: ID!) {
  models(module: $module, filter: {type: ENTITY}) {
    id
    code
    name
    description
  }
}
    `])));function z(s){var c=(0,o.Z)((0,o.Z)({},n),s);return T.a(O,c)}function K(s){var c=_objectSpread(_objectSpread({},n),s);return Apollo.useLazyQuery(O,c)}var R=(0,l.Ps)(P||(P=(0,u.Z)([`
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
    `])));function w(s){var c=(0,o.Z)((0,o.Z)({},n),s);return T.a(R,c)}function ne(s){var c=_objectSpread(_objectSpread({},n),s);return Apollo.useLazyQuery(R,c)}var W=(0,l.Ps)(m||(m=(0,u.Z)([`
    query modelFiledTypes {
  filedTypes: modelFiledTypes {
    id
    name
    description
    family
  }
}
    `])));function H(s){var c=(0,o.Z)((0,o.Z)({},n),s);return T.a(W,c)}function ae(s){var c=_objectSpread(_objectSpread({},n),s);return Apollo.useLazyQuery(W,c)}var Q=(0,l.Ps)(v||(v=(0,u.Z)([`
    query modelFields($model: ID!, $filter: ModelFieldFilter, $limit: Int) {
  listFields: modelFields(model: $model, filter: $filter, limit: $limit) {
    id
    name
    description
  }
}
    `])));function re(s){var c=_objectSpread(_objectSpread({},n),s);return Apollo.useQuery(Q,c)}function ie(s){var c=_objectSpread(_objectSpread({},n),s);return Apollo.useLazyQuery(Q,c)}var G=(0,l.Ps)(d||(d=(0,u.Z)([`
    mutation createModel($input: ModelCreateInput!) {
  createModel(input: $input) {
    id
    name
  }
}
    `])));function V(s){var c=(0,o.Z)((0,o.Z)({},n),s);return _.D(G,c)}var Y=(0,l.Ps)(p||(p=(0,u.Z)([`
    mutation addModelField($modelId: ID!, $input: ModelFieldInput!) {
  addModelField(modelId: $modelId, input: $input) {
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
    `])));function X(s){var c=(0,o.Z)((0,o.Z)({},n),s);return _.D(Y,c)}var J=(0,l.Ps)(C||(C=(0,u.Z)([`
    mutation updateModelField($modelId: ID!, $fieldId: ID!, $input: ModelFieldInput!) {
  updateModelField(modelId: $modelId, fieldId: $fieldId, input: $input) {
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
    `])));function q(s){var c=(0,o.Z)((0,o.Z)({},n),s);return _.D(J,c)}var ee=(0,l.Ps)(x||(x=(0,u.Z)([`
    mutation removeModelField($modelId: ID!, $fieldId: ID!) {
  removeModelField(modelId: $modelId, fieldId: $fieldId)
}
    `])));function te(s){var c=(0,o.Z)((0,o.Z)({},n),s);return _.D(ee,c)}},61923:function(B,F,a){"use strict";a.r(F);var o=a(2824),u=a(67294),l=a(51615),T=a(23798),D=a(48775),_=a(17818),f=a(85893);function $(Z){var L=Z.children,N=Z.location,b=Z.match.params.id,U=(0,T.k$)({variables:{id:b},fetchPolicy:"cache-and-network"}),P=U.data,m=P===void 0?{}:P,v=U.loading,d=m.module,p=(0,u.useMemo)(function(){var t=(0,l.LX)(N.pathname,{path:"/modules/:id/:feat",exact:!1,strict:!0});return t?t.params.feat:""},[N.pathname]),C=(0,u.useState)(p),x=(0,o.Z)(C,2),n=x[0],e=x[1];(0,u.useEffect)(function(){!p||e(p)},[p]);var r=(0,u.useCallback)(function(t){console.log("selectedKey",t.key),e(t.key)},[]);return(0,f.jsx)(D.Hk,{className:"module-view-app",loading:v,children:d&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(D.Hk.Sidebar,{className:"module-view-app-sidebar",collapsible:!1,width:216,children:(0,f.jsxs)(_.bH,{zIndex:10,className:"mt-5 p-5",overlayClassName:"bg-white bg-opacity-25",loading:!1,children:[(0,f.jsx)("div",{className:"pb-5",children:(0,f.jsxs)("div",{className:"d-flex align-items-center",children:[(0,f.jsx)(_.mN.Avatar,{alt:"\u5565\u5730\u65B9",className:"me-5",size:40}),(0,f.jsxs)("div",{className:"flex-grow-1",children:[(0,f.jsx)("a",{className:"text-dark fw-bolder text-hover-primary fs-6",children:d.name}),(0,f.jsx)("span",{className:"text-muted d-block fw-bold fs-8",dangerouslySetInnerHTML:{__html:d.description||"&nbsp;"}})]})]})}),(0,f.jsxs)("div",{className:"module-view-app-sidebar__menu_container",children:[(0,f.jsxs)(_.v2,{fit:!0,accordion:!1,selectable:"AllMenu",className:"menu-title-gray-600 menu-icon-gray-400 menu-state-bg menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0",selectedKeys:n?[n]:[],onSelect:r,children:[(0,f.jsx)(_.v2.Item,{bullet:!0,icon:"Fonticon/layers",title:"\u67B6\u6784",url:"/modules/".concat(d.id,"/schema")},"schema"),(0,f.jsx)(_.v2.Item,{bullet:!0,icon:"Fonticon/alignment-right",title:"\u5185\u5BB9\u7BA1\u7406",url:"/modules/".concat(d.id,"/content")},"content"),(0,f.jsx)(_.v2.Item,{bullet:!0,icon:"Fonticon/attachments",title:"\u9759\u6001\u8D44\u6E90",url:"/modules/".concat(d.id,"/assets")},"assets")]}),(0,f.jsx)(_.v2,{fit:!0,accordion:!1,className:"menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-bg menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0",selectedKeys:p?[p]:[],children:(0,f.jsx)(_.v2.Item,{bullet:!0,icon:"Bootstrap/gear",title:"\u6A21\u5757\u8BBE\u7F6E",url:"/modules/".concat(d.id,"/settings")},"settings")})]})]})}),(0,f.jsxs)("div",{style:{zIndex:99},className:"position-relative d-flex flex-row flex-row-fluid",children:[(0,f.jsx)("div",{style:{position:"fixed",height:"100vh",width:"1px",zIndex:105},children:(0,f.jsx)(D.Hk.Sidebar.Toggle,{className:"start-0"})}),u.Children.map(L,function(t){return t.props.location.state={module:d,baseUrl:"/modules/"+b},t})]})]})})}F.default=$}}]);
