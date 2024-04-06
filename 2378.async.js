"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2378,1836],{51253:function(re,w,e){e.d(w,{GP:function(){return _.Z},Hk:function(){return M},xx:function(){return $.x}});var X=e(74958),_=e(5166),$=e(19260),g=e(68400),f=e.n(g),O=e(62435),Q=e(93967),F=e.n(Q),x=e(94589),Y=e(97857),B=e.n(Y),y=e(46027),G=e(42687),H=e(13757),J=e(5574),k=e.n(J),s=e(96486),i=e(86074),m={aside:{minimize:!1,width:280}},b=O.createContext({state:m,dispatch:function(){}}),N=function(u){return u.AsideToggle="ASIDE_TOGGLE",u.AsideWidth="ASIDE_WIDTH",u}({});function U(u,A){switch(A.type){case"ASIDE_TOGGLE":return u.aside.minimize=!u.aside.minimize,B()({},u);case"ASIDE_WIDTH":return u.aside.width=A.payload,B()({},u);default:throw new Error}}var Z=function(A){var D=(0,O.useReducer)(U,(0,s.cloneDeep)(m)),T=k()(D,2),h=T[0],W=T[1];return(0,i.jsx)(b.Provider,{value:{state:h,dispatch:W},children:A.children})},L=function(){return(0,O.useContext)(b)},E=e(65495);function a(u){var A=L(),D=A.dispatch,T=A.state.aside.minimize,h=(0,O.useCallback)(function(){D({type:N.AsideToggle})},[D]);return(0,i.jsx)(H.Button,{style:B()({marginBottom:"1.35rem",zIndex:105},u.style),onClick:h,activeColor:"primary",className:F()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",u.className,{active:T}),children:(0,i.jsx)(y.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}function t(u){var A=u.className,D=u.header,T=u.children,h=u.collapsible,W=h===void 0?!0:h,R=u.width,V=R===void 0?280:R,q=(0,G.$Y)(),I=L(),oe=I.dispatch;return(0,O.useEffect)(function(){q.aside.width(V+100),oe({type:N.AsideWidth,payload:V})},[q.aside,oe,V]),(0,i.jsxs)("div",{className:F()("app-aside aside",A),children:[(0,i.jsx)(E.Z,{children:(0,i.jsx)(_.Z,{header:D,resizeable:!0,className:"app-sidebar",children:T})}),W&&(0,i.jsx)(a,{className:"start-100 end-0"})]})}t.Toggle=a;var o=t,n,r=x.ZP.div(n||(n=f()([`
  --root-aside-width: `,`;
  --met-aside-width: `,`;
`])),function(u){return u.minimize?"100px":"".concat(u.width,"px")},function(u){return u.minimize?"100px":"".concat(u.width,"px")});function c(u){var A=u.children,D=u.className,T=L(),h=T.state.aside,W=h.minimize,R=h.width,V=(0,O.useCallback)(function(q){q.preventDefault()},[]);return(0,i.jsx)(r,{minimize:W,width:R,className:F()("micro-app-container page-full-content",D,{"aside-minimize":W}),onContextMenu:V,children:A})}function d(u){var A=u.children,D=u.className;return(0,i.jsx)(Z,{children:(0,i.jsx)(c,{className:D,children:A})})}d.Sidebar=o;var M=d},42687:function(re,w,e){e.d(w,{$Y:function(){return y},BK:function(){return H},aM:function(){return k}});var X=e(5574),_=e.n(X),$=e(97857),g=e.n($),f=e(62435),O=e(86074),Q=f.createContext({getState:function(){return{routes:[]}},subscribe:function(){},dispatch:function(){}}),F=function(i,m){return m?m.type==="ASIDE_MINIMIZE"?g()(g()({},i),{},{aside:g()(g()({},i.aside),{},{minimize:!!m.payload})}):m.type==="ASIDE_WIDTH"?g()(g()({},i),{},{aside:g()(g()({},i.aside),{},{width:m.payload})}):m.type==="ASIDE_COLLAPSIBLE"?g()(g()({},i),{},{aside:g()(g()({},i.aside),{},{collapsible:m.payload})}):i:i},x=function(i){return g()({},i)};function Y(s){var i=(0,f.useReducer)(F,s,x),m=_()(i,2),b=m[0],N=m[1],U=(0,f.useState)([]),Z=_()(U,1),L=Z[0],E=function(M){return function(){var u=L.indexOf(M);u>-1&&L.splice(u,1)}},a=(0,f.useCallback)(function(d){return L.unshift(d),E(d)},[L]),t=(0,f.useCallback)(function(){L.forEach(function(d){return d()})},[L]),o={getState:function(){return b},dispatch:N,subscribe:a},n=(0,f.useState)(o),r=_()(n,1),c=r[0];return(0,f.useEffect)(function(){c.getState=function(){return b},t()},[b]),c}var B=function(i,m){return i===m};function y(){var s=(0,f.useContext)(Q),i=(0,f.useRef)({aside:{get state(){return s.getState().aside},width:function(b){s.dispatch({type:"ASIDE_WIDTH",payload:b})},minimize:function(b){s.dispatch({type:"ASIDE_MINIMIZE",payload:b})},collapsible:function(b){s.dispatch({type:"ASIDE_COLLAPSIBLE",payload:b})}}});return i.current}function G(s){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B,m=(0,f.useContext)(Q),b=(0,f.useReducer)(function(a){return a+1},0),N=_()(b,2),U=N[1],Z=(0,f.useRef)(),L=s(m.getState());function E(){var a=s(m.getState());i(a,Z.current)||(Z.current=a,U())}return(0,f.useEffect)(function(){return m.subscribe(E)},[]),L}function H(s){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B;return G(s,i)}function J(){var s=useContext(Q);return s.dispatch}function k(s){var i=s.children,m=s.state,b=Y(m);return(0,f.useMemo)(function(){return(0,O.jsx)(Q.Provider,{value:b,children:i})},[i,b])}},96414:function(re,w,e){e.d(w,{dI:function(){return E},rB:function(){return L}});var X=e(5574),_=e.n(X),$=e(62435),g={USERS_LIST:"users-list"};function f(a){return a!=null&&a!==""}function O(a,t){var o=useState(a),n=_slicedToArray(o,2),r=n[0],c=n[1];return useEffect(function(){var d=setTimeout(function(){c(a)},t);return function(){clearTimeout(d)}},[a,t]),r}var Q=e(72004),F=e.n(Q),x=e(12444),Y=e.n(x),B=e(9783),y=e.n(B),G=e(8606),H=F()(function a(){var t=this;Y()(this,a),y()(this,"menu",null),y()(this,"element",null),y()(this,"getParamName",function(o){var n=document.body.hasAttribute("data-kt-name"),r=n?n+"_":"";return"kt_"+r+"theme_mode_"+o}),y()(this,"getMode",function(){var o,n=t.getParamName("value"),r=t.getMenuMode(),c="light";if(!localStorage)return c;var d=localStorage.getItem(n);if(d)return d;var M=(o=t.element)===null||o===void 0?void 0:o.getAttribute("data-theme");return M||(r?r==="system"?t.getSystemMode():r:c)}),y()(this,"setMode",function(o,n){var r,c,d,M=o,u=n;if(!(M!=="light"&&M!=="dark")){var A=t.getParamName("value"),D=t.getParamName("menu");u==="system"&&t.getSystemMode()!==M&&(M=t.getSystemMode()),u||(u=M);var T=((r=t.menu)===null||r===void 0?void 0:r.querySelector('[data-kt-element="mode"][data-kt-value="'+u+'"]'))||null;(c=t.element)===null||c===void 0||c.setAttribute("data-kt-theme-mode-switching","true"),(d=t.element)===null||d===void 0||d.setAttribute("data-theme",M);var h=t;setTimeout(function(){var W;(W=h.element)===null||W===void 0||W.removeAttribute("data-kt-theme-mode-switching")},300),localStorage&&localStorage.setItem(A,M),T&&localStorage&&(localStorage.setItem(D,u),t.setActiveMenuItem(T)),t.flipImages()}}),y()(this,"getMenuMode",function(){var o,n=t.getParamName("menu"),r=(o=t.menu)===null||o===void 0?void 0:o.querySelector('.active[data-kt-element="mode"]'),c=r==null?void 0:r.getAttribute("data-kt-value");if(c)return c;if(!n)return"";var d=localStorage?localStorage.getItem(n):null;return d||""}),y()(this,"getSystemMode",function(){return window.matchMedia("(prefers-color-scheme: dark)")?"dark":"light"}),y()(this,"initMode",function(){t.setMode(t.getMode(),t.getMenuMode()),t.element&&G.EventHandlerUtil.trigger(t.element,"kt.thememode.init")}),y()(this,"setActiveMenuItem",function(o){var n,r=t.getParamName("menu"),c=o.getAttribute("data-kt-value"),d=(n=t.menu)===null||n===void 0?void 0:n.querySelector('.active[data-kt-element="mode"]');d&&d.classList.remove("active"),o.classList.add("active"),localStorage&&c&&r&&localStorage.setItem(r,c)}),y()(this,"handleMenu",function(){var o;(o=t.menu)===null||o===void 0||(o=o.querySelectorAll('[data-kt-element="mode"]'))===null||o===void 0||o.forEach(function(n){n.addEventListener("click",function(r){r.preventDefault();var c=n.getAttribute("data-kt-value"),d=c==="system"?t.getSystemMode():c;d&&t.setMode(d,c)})})}),y()(this,"flipImages",function(){var o;(o=document.querySelectorAll("[data-kt-img-dark]"))===null||o===void 0||o.forEach(function(n){n.tagName==="IMG"?t.getMode()==="dark"&&n.hasAttribute("data-kt-img-dark")?(n.setAttribute("data-kt-img-light",n.getAttribute("src")||""),n.setAttribute("src",n.getAttribute("data-kt-img-dark")||"")):t.getMode()==="light"&&n.hasAttribute("data-kt-img-light")&&(n.setAttribute("data-kt-img-dark",n.getAttribute("src")||""),n.setAttribute("src",n.getAttribute("data-kt-img-light")||"")):t.getMode()==="dark"&&n.hasAttribute("data-kt-img-dark")?(n.setAttribute("data-kt-img-light",n.getAttribute("src")||""),n.style.backgroundImage="url('"+n.getAttribute("data-kt-img-dark")+"')"):t.getMode()==="light"&&n.hasAttribute("data-kt-img-light")&&(n.setAttribute("data-kt-img-dark",n.getAttribute("src")||""),n.style.backgroundImage="url('"+n.getAttribute("data-kt-img-light")+"')")})}),y()(this,"on",function(o,n){if(t.element)return G.EventHandlerUtil.on(t.element,o,n)}),y()(this,"off",function(o,n){if(t.element)return G.EventHandlerUtil.off(t.element,o,n)}),y()(this,"init",function(){t.menu=document.querySelector('[data-kt-element="theme-mode-menu"]'),t.element=document.documentElement,t.initMode(),t.menu&&t.handleMenu()})}),J=new H,k=e(86074),s=J.getSystemMode(),i=function(t){var o=t!=="system"?t:s,n="/media/patterns/header-bg"+(o==="light"?".jpg":"-dark.png");document.body.style.backgroundImage='url("'.concat(toAbsoluteUrl(n),'")')},m="kt_theme_mode_value",b="kt_theme_mode_menu",N=function(t){if(!localStorage)return"light";var o=localStorage.getItem(t);return!o||o==="light"?"light":o==="dark"?"dark":"system"},U={mode:N(m),menuMode:N(b),updateMode:function(t){},updateMenuMode:function(t){}},Z=(0,$.createContext)({mode:U.mode,menuMode:U.menuMode,updateMode:function(t){},updateMenuMode:function(t){}}),L=function(){return(0,$.useContext)(Z)},E=function(t){var o=t.children,n=(0,$.useState)(U.mode),r=_()(n,2),c=r[0],d=r[1],M=(0,$.useState)(U.menuMode),u=_()(M,2),A=u[0],D=u[1],T=function(R){var V=R==="system"?s:R;d(V),localStorage&&localStorage.setItem(m,V),document.documentElement.setAttribute("data-theme",V),J.init()},h=function(R){D(R),localStorage&&localStorage.setItem(b,R)};return(0,$.useEffect)(function(){T(c),h(A)},[]),(0,k.jsx)(Z.Provider,{value:{mode:c,menuMode:A,updateMode:T,updateMenuMode:h},children:o})}},71366:function(re,w,e){e.r(w);var X=e(5574),_=e.n(X),$=e(13769),g=e.n($),f=e(97857),O=e.n(f),Q=e(19632),F=e.n(Q),x=e(62435),Y=e(34912),B=e(12845),y=e(1861),G=e(51253),H=e(13757),J=e(12708),k=e(75466),s=e(86074),i=["id"],m=H.Tabs.TabPane;function b(E){var a=E.books,t=(0,B.useModel)("contacts",function(r){var c=r.state;return c.book}),o=(0,x.useCallback)(function(r){if(r.startsWith("contacts-"))console.log(r);else return!1;return!0},[]),n=(0,x.useMemo)(function(){return[].concat(F()(a.map(function(r){return{value:"contacts-".concat(r.id),label:r.name}})),[{type:"separator"},{value:"manage-contacts",label:"\u504F\u597D\u8BBE\u7F6E"}])},[a]);return(0,s.jsx)("div",{className:"app-sidebar-footer",children:(0,s.jsx)(H.Select,{onChange:o,placement:"topCenter",value:t?"contacts-".concat(t):void 0,options:n})})}function N(E){var a,t=E.book,o=E.namespace,n=(0,k.N2)({fetchPolicy:"cache-and-network",variables:{id:t.id,namespace:o}}),r=n.data,c=(0,x.useMemo)(function(){var d,M=r==null||(d=r.book)===null||d===void 0?void 0:d.groups;if(!M)return[];var u=J.G_(M.map(function(A){return O()({},A)}),{idKey:"id",pidKey:"parentId",converter:function(D){var T=D.id,h=g()(D,i);return O()(O()({},h),{},{key:T,title:h.name})}});return u},[r==null||(a=r.book)===null||a===void 0?void 0:a.groups]);return(0,s.jsx)(Y.Z,{treeData:c})}function U(E){var a=E.book,t=(0,x.useState)(a.namespaces[0].id),o=_()(t,2),n=o[0],r=o[1],c=(0,x.useCallback)(function(d){console.log("activeKey",d),r(d)},[]);return(0,s.jsx)(H.Tabs,{activeKey:n,onChange:c,className:"nav-line-tabs-2x mx-5 mb-5 fs-6",children:a.namespaces.map(function(d){return(0,s.jsx)(m,{tab:d.name,children:(0,s.jsx)(y.E,{className:"custom-scrollbar",options:{scrollbars:{autoHide:"scroll"}},children:(0,s.jsx)(N,{book:a,namespace:d.id})})},d.id)})})}function Z(E){var a=E.book;return console.log(a.namespaces),a.type==="ENTERPRISE"?(0,s.jsx)(U,{book:a}):(0,s.jsx)("div",{children:"xxx"})}function L(){var E=(0,k.jV)({fetchPolicy:"cache-and-network"}),a=E.data,t=(0,B.useModel)("contacts",function(r){var c=r.state;return c.book}),o=(0,B.useModel)("contacts",function(r){return r.setBook});(0,x.useEffect)(function(){if(a!=null&&a.books){var r=a==null?void 0:a.books;r.some(function(c){return c.id===t})||o(r[0].id)}},[a==null?void 0:a.books,t,o]);var n=(0,x.useMemo)(function(){if(!(!(a!=null&&a.books)||!t))return a.books.find(function(r){return r.id===t})},[a==null?void 0:a.books,t]);return console.log("books",a==null?void 0:a.books,n,t),(0,s.jsxs)(G.GP,{width:280,className:"app-sidebar app-contacts-sidebar",children:[(0,s.jsx)("div",{className:"mt-5 px-5 pt-5",children:(0,s.jsx)("h1",{className:"text-gray-800 fw-bold mb-6 mx-5",children:"\u901A\u8BAF\u5F55"})}),(0,s.jsx)("div",{className:"app-sidebar-body flex-column-fluid d-flex flex-column",children:n&&(0,s.jsx)(Z,{book:n})}),(0,s.jsx)(b,{books:(a==null?void 0:a.books)||[],onAction:function(){}})]})}w.default=L},75466:function(re,w,e){e.d(w,{N2:function(){return a},jV:function(){return U},yk:function(){return u},gW:function(){return Me},KK:function(){return c}});var X=e(97857),_=e.n(X),$=e(68400),g=e.n($),f=e(75063),O=e(37887),Q=e(73359),F,x,Y,B,y,G,H,J,k={},s=(0,f.Ps)(F||(F=g()([`
    fragment PhoneParts on Phone {
  status
  number
}
    `]))),i=(0,f.Ps)(x||(x=g()([`
    fragment EmailParts on Email {
  status
  address
}
    `]))),m=(0,f.Ps)(Y||(Y=g()([`
    fragment AddressParts on Address {
  country
  province
  city
  district
  street
  postalCode
}
    `]))),b=(0,f.Ps)(B||(B=g()([`
    fragment ContactParts on Contact {
  name
  title
  sex
  avatar
  phone {
    ...PhoneParts
  }
  email {
    ...EmailParts
  }
  address {
    ...AddressParts
  }
  phones {
    id
    primary
    label
    phone {
      ...PhoneParts
    }
  }
  emails {
    id
    primary
    label
    email {
      ...EmailParts
    }
  }
  addresses {
    id
    primary
    label
    address {
      ...AddressParts
    }
  }
}
    `,`
`,`
`,""])),s,i,m),N=(0,f.Ps)(y||(y=g()([`
    query books {
  books: contactBooks {
    id
    name
    type
    namespaces {
      id
      name
    }
  }
}
    `])));function U(v){var p=_()(_()({},k),v);return O.a(N,p)}function Z(v){var p=_objectSpread(_objectSpread({},k),v);return Apollo.useLazyQuery(N,p)}function L(v){var p=_objectSpread(_objectSpread({},k),v);return Apollo.useSuspenseQuery(N,p)}var E=(0,f.Ps)(G||(G=g()([`
    query book($id: ID!) {
  book: contactBook(id: $id) {
    id
    name
    type
    namespaces {
      id
      name
    }
  }
}
    `])));function a(v){var p=_()(_()({},k),v);return O.a(E,p)}function t(v){var p=_objectSpread(_objectSpread({},k),v);return Apollo.useLazyQuery(E,p)}function o(v){var p=_objectSpread(_objectSpread({},k),v);return Apollo.useSuspenseQuery(E,p)}var n=(0,f.Ps)(H||(H=g()([`
    query contacts($where: ContactWhereInput, $page: Int = 1) {
  contacts(where: $where, page: $page) {
    currentPage
    pageSize
    totalPage
    totalCount
    edges {
      cursor
      node {
        id
        name
        title
        sex
        avatar
        email {
          ...EmailParts
        }
        phone {
          ...PhoneParts
        }
      }
    }
  }
}
    `,`
`,""])),i,s);function r(v){var p=_objectSpread(_objectSpread({},k),v);return Apollo.useQuery(n,p)}function c(v){var p=_()(_()({},k),v);return Q.t(n,p)}function d(v){var p=_objectSpread(_objectSpread({},k),v);return Apollo.useSuspenseQuery(n,p)}var M=(0,f.Ps)(J||(J=g()([`
    query contact($id: ID!) {
  contact(id: $id) {
    id
    ...ContactParts
  }
}
    `,""])),b);function u(v){var p=_()(_()({},k),v);return O.a(M,p)}function A(v){var p=_objectSpread(_objectSpread({},k),v);return Apollo.useLazyQuery(M,p)}function D(v){var p=_objectSpread(_objectSpread({},k),v);return Apollo.useSuspenseQuery(M,p)}var T=e(15009),h=e.n(T),W=e(99289),R=e.n(W),V=e(5574),q=e.n(V),I=e(62435),oe=e(17187),ye=e.n(oe),ue=e(12708),ve={totalCount:0,pageSize:0,totalPage:0,currentPage:0};function Me(v){var p=(0,I.useRef)(new(ye())),l=(0,I.useRef)({page:1,token:v,loading:!1,contacts:[],pagination:_()({},ve)}),Se=(0,I.useReducer)(function(K){return K+1},0),Ee=q()(Se,2),fe=Ee[1],Ae=c({fetchPolicy:"cache-and-network"}),he=q()(Ae,2),se=he[0],ce=he[1],ee=ce.data,ie=ce.loading,pe=ce.refetch;l.current.loading=ie;var ge=(0,I.useCallback)(function(K){K.edges.map(function(P){return P.node}).forEach(function(P,j){var z=K.pageSize*(K.currentPage-1)+j;l.current.contacts[z]=P}),p.current.emit("updates")},[]),le=(0,I.useCallback)(function(){var K=R()(h()().mark(function P(j){return h()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(!(l.current.loading&&l.current.page===j)){S.next=2;break}return S.abrupt("return");case 2:if(!l.current.loading){S.next=7;break}return S.next=5,(0,ue._v)(120);case 5:S.next=2;break;case 7:l.current.page=j,pe({filter:{token:l.current.token},page:l.current.page});case 9:case"end":return S.stop()}},P)}));return function(P){return K.apply(this,arguments)}}(),[pe]),Pe=(0,I.useCallback)(function(){var K=R()(h()().mark(function P(j){var z,S;return h()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:z=l.current.pagination.pageSize,l.current.pagination.totalCount%l.current.pagination.pageSize===1&&l.current.pagination.totalPage--,l.current.pagination.totalCount--,l.current.contacts.splice(j,1),S=Math.ceil((j+1)/z),le(S);case 6:case"end":return ne.stop()}},P)}));return function(P){return K.apply(this,arguments)}}(),[le]),me=(0,I.useCallback)(function(){var K=R()(h()().mark(function P(j){return h()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:if(!l.current.loading){S.next=5;break}return S.next=3,(0,ue._v)(120);case 3:S.next=0;break;case 5:if(!(l.current.page===j||j>l.current.pagination.totalPage)){S.next=7;break}return S.abrupt("return");case 7:l.current.page=j,se({variables:{filter:{token:l.current.token},page:l.current.page}});case 9:case"end":return S.stop()}},P)}));return function(P){return K.apply(this,arguments)}}(),[se]),Ce=(0,I.useCallback)(function(){var K=R()(h()().mark(function P(j){var z;return h()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(z=l.current.contacts[j],z){C.next=12;break}case 2:if(z=l.current.contacts[j],z){C.next=8;break}return C.next=6,me(Math.ceil((j+1)/l.current.pagination.pageSize));case 6:return C.next=8,(0,ue._v)(30);case 8:if(!(j>=l.current.contacts.length)){C.next=11;break}return console.log("\u7D22\u5F15\u8D85\u51FA\u6700\u5927\u957F\u5EA6 [".concat(j,"/").concat(l.current.contacts.length,"]")),C.abrupt("return",l.current.contacts[j-1]);case 11:if(!z){C.next=2;break}case 12:return C.abrupt("return",z);case 13:case"end":return C.stop()}},P)}));return function(P){return K.apply(this,arguments)}}(),[me]);(0,I.useEffect)(function(){p.current.setMaxListeners(1e3)},[]),(0,I.useEffect)(function(){if(l.current.token!==v&&(l.current.token=v,l.current.pagination=_()({},ve),l.current.contacts.length=0,l.current.page=1),!v)return fe();se({variables:{filter:{token:v},page:l.current.page}})},[se,v]),(0,I.useEffect)(function(){ie||!(ee!=null&&ee.contacts)||(l.current.pagination=_()({},ee.contacts)||l.current.pagination,ge(ee.contacts),fe())},[ge,ee==null?void 0:ee.contacts,ie]);var ke=function(P){var j=(0,I.useReducer)(function(ae){return ae+1},0),z=q()(j,2),S=z[1],C=(0,I.useRef)({index:P});C.current.index=P,C.current.contact=l.current.contacts[P],(0,I.useEffect)(function(){if(P!==-1){var ae=P+1,de,_e=function(){var je=R()(h()().mark(function be(){return h()().wrap(function(te){for(;;)switch(te.prev=te.next){case 0:if(!l.current.loading){te.next=5;break}return te.next=3,(0,ue._v)(300);case 3:te.next=0;break;case 5:if(!C.current.contact){te.next=8;break}return C.current.timer&&clearTimeout(C.current.timer),te.abrupt("return");case 8:me(Math.ceil(ae/l.current.pagination.pageSize)),de=setTimeout(_e,300);case 10:case"end":return te.stop()}},be)}));return function(){return je.apply(this,arguments)}}();return de=setTimeout(_e,300),function(){de&&clearTimeout(de)}}},[P]);var ne=(0,I.useCallback)(function(){var ae=l.current.contacts[C.current.index];ae!==C.current.contact&&(C.current.contact=ae,S())},[]);return(0,I.useEffect)(function(){return p.current.addListener("updates",ne),function(){p.current.removeListener("updates",ne)}},[ne]),C.current.contact};return[l.current.pagination,ie,ke,{loadContact:Ce,refetch:le,refetchWithRemove:Pe}]}}}]);
