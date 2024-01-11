(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[2320,3190],{48775:function(X,Q,n){"use strict";n.d(Q,{GP:function(){return S.Z},Hk:function(){return c}});var S=n(48655),p=n(39981),d=n(67294),F=n(94184),j=n.n(F),w=n(12788),R=n(11849),L=n(28865),N=n(37334),U=n(2824),z=n(96486),C=n(85893),_={aside:{minimize:!1,width:280}},T=d.createContext({state:_,dispatch:function(){}}),l;(function(o){o.AsideToggle="ASIDE_TOGGLE",o.AsideWidth="ASIDE_WIDTH"})(l||(l={}));function m(o,b){switch(b.type){case"ASIDE_TOGGLE":return o.aside.minimize=!o.aside.minimize,(0,R.Z)({},o);case"ASIDE_WIDTH":return o.aside.width=b.payload,(0,R.Z)({},o);default:throw new Error}}var v=function(b){var g=(0,d.useReducer)(m,(0,z.cloneDeep)(_)),y=(0,U.Z)(g,2),D=y[0],h=y[1];return(0,C.jsx)(T.Provider,{value:{state:D,dispatch:h},children:b.children})},M=function(){return(0,d.useContext)(T)},B=n(74200),W=n(8265);function s(o){var b=o.className,g=o.header,y=o.children,D=o.collapsible,h=D===void 0?!0:D,$=o.width,K=$===void 0?280:$,G=(0,W.$Y)(),q=M(),ee=q.dispatch;return(0,d.useEffect)(function(){G.aside.width(K+100),ee({type:l.AsideWidth,payload:K})},[G.aside,ee,K]),(0,C.jsxs)("div",{className:j()("app-aside aside",b),children:[(0,C.jsx)(N.Z,{children:(0,C.jsx)(S.Z,{header:g,resizeable:!0,className:"app-sidebar",children:y})}),h&&(0,C.jsx)(e,{className:"start-100 end-0"})]})}function e(o){var b=M(),g=b.dispatch,y=b.state.aside.minimize,D=(0,d.useCallback)(function(){g({type:l.AsideToggle})},[g]);return(0,C.jsx)(B.zx,{style:(0,R.Z)({marginBottom:"1.35rem",zIndex:105},o.style),onClick:D,activeColor:"primary",className:j()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",o.className,{active:y}),children:(0,C.jsx)(L.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}s.Toggle=e;var a=s,t=w.ZP.div.withConfig({displayName:"MicroApp__MicroAppContainer",componentId:"sc-1dngjf6-0"})(["--root-aside-width:",";--met-aside-width:",";"],function(o){return o.minimize?"100px":"".concat(o.width,"px")},function(o){return o.minimize?"100px":"".concat(o.width,"px")});function u(o){var b=o.children,g=o.className,y=M(),D=y.state.aside,h=D.minimize,$=D.width,K=(0,d.useCallback)(function(G){G.preventDefault()},[]);return(0,C.jsx)(t,{minimize:h,width:$,className:j()("micro-app-container page-full-content",g,{"aside-minimize":h}),onContextMenu:K,children:b})}function r(o){var b=o.children,g=o.className;return(0,C.jsx)(v,{children:(0,C.jsx)(u,{className:g,children:b})})}r.Sidebar=a;var c=r,f=n(53851)},8265:function(X,Q,n){"use strict";n.d(Q,{$Y:function(){return U},BK:function(){return z},aM:function(){return T}});var S=n(2824),p=n(11849),d=n(67294),F=n(85893),j=d.createContext({getState:function(){return{routes:[]}},subscribe:function(){},dispatch:function(){}}),w=function(m,v){return v?v.type==="ASIDE_MINIMIZE"?(0,p.Z)((0,p.Z)({},m),{},{aside:(0,p.Z)((0,p.Z)({},m.aside),{},{minimize:!!v.payload})}):v.type==="ASIDE_WIDTH"?(0,p.Z)((0,p.Z)({},m),{},{aside:(0,p.Z)((0,p.Z)({},m.aside),{},{width:v.payload})}):v.type==="ASIDE_COLLAPSIBLE"?(0,p.Z)((0,p.Z)({},m),{},{aside:(0,p.Z)((0,p.Z)({},m.aside),{},{collapsible:v.payload})}):m:m},R=function(m){return(0,p.Z)({},m)};function L(l){var m=(0,d.useReducer)(w,l,R),v=(0,S.Z)(m,2),M=v[0],B=v[1],W=(0,d.useState)([]),s=(0,S.Z)(W,1),e=s[0],a=function(g){return function(){var y=e.indexOf(g);y>-1&&e.splice(y,1)}},t=(0,d.useCallback)(function(b){return e.unshift(b),a(b)},[e]),u=(0,d.useCallback)(function(){e.forEach(function(b){return b()})},[e]),r={getState:function(){return M},dispatch:B,subscribe:t},c=(0,d.useState)(r),f=(0,S.Z)(c,1),o=f[0];return(0,d.useEffect)(function(){o.getState=function(){return M},u()},[M]),o}var N=function(m,v){return m===v};function U(){var l=(0,d.useContext)(j),m=(0,d.useRef)({aside:{get state(){return l.getState().aside},width:function(M){l.dispatch({type:"ASIDE_WIDTH",payload:M})},minimize:function(M){l.dispatch({type:"ASIDE_MINIMIZE",payload:M})},collapsible:function(M){l.dispatch({type:"ASIDE_COLLAPSIBLE",payload:M})}}});return m.current}function z(l){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N;return C(l,m)}function C(l){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:N,v=(0,d.useContext)(j),M=(0,d.useReducer)(function(t){return t+1},0),B=(0,S.Z)(M,2),W=B[1],s=(0,d.useRef)(),e=l(v.getState());function a(){var t=l(v.getState());m(t,s.current)||(s.current=t,W())}return(0,d.useEffect)(function(){return v.subscribe(a)},[]),e}function _(){var l=useContext(j);return l.dispatch}function T(l){var m=l.children,v=l.state,M=L(v);return(0,d.useMemo)(function(){return(0,F.jsx)(j.Provider,{value:M,children:m})},[m,M])}},95901:function(X,Q,n){"use strict";n.d(Q,{dI:function(){return W},rB:function(){return B}});var S=n(2824),p=n(67294);function d(s){return s!=null&&s!==""}function F(s,e){var a=useState(s),t=_slicedToArray(a,2),u=t[0],r=t[1];return useEffect(function(){var c=setTimeout(function(){r(s)},e);return function(){clearTimeout(c)}},[s,e]),u}var j={USERS_LIST:"users-list"},w=n(54941),R=n(69610),L=n(36321),N=(0,w.Z)(function s(){var e=this;(0,R.Z)(this,s),this.menu=null,this.element=null,this.getParamName=function(a){var t=document.body.hasAttribute("data-kt-name"),u=t?t+"_":"";return"kt_"+u+"theme_mode_"+a},this.getMode=function(){var a,t=e.getParamName("value"),u=e.getMenuMode(),r="light";if(!localStorage)return r;var c=localStorage.getItem(t);if(c)return c;var f=(a=e.element)===null||a===void 0?void 0:a.getAttribute("data-theme");return f||(u?u==="system"?e.getSystemMode():u:r)},this.setMode=function(a,t){var u,r,c,f=a,o=t;if(!(f!=="light"&&f!=="dark")){var b=e.getParamName("value"),g=e.getParamName("menu");o==="system"&&e.getSystemMode()!==f&&(f=e.getSystemMode()),o||(o=f);var y=((u=e.menu)===null||u===void 0?void 0:u.querySelector('[data-kt-element="mode"][data-kt-value="'+o+'"]'))||null;(r=e.element)===null||r===void 0||r.setAttribute("data-kt-theme-mode-switching","true"),(c=e.element)===null||c===void 0||c.setAttribute("data-theme",f);var D=e;setTimeout(function(){var h;(h=D.element)===null||h===void 0||h.removeAttribute("data-kt-theme-mode-switching")},300),localStorage&&localStorage.setItem(b,f),y&&localStorage&&(localStorage.setItem(g,o),e.setActiveMenuItem(y)),e.flipImages()}},this.getMenuMode=function(){var a,t=e.getParamName("menu"),u=(a=e.menu)===null||a===void 0?void 0:a.querySelector('.active[data-kt-element="mode"]'),r=u==null?void 0:u.getAttribute("data-kt-value");if(r)return r;if(!t)return"";var c=localStorage?localStorage.getItem(t):null;return c||""},this.getSystemMode=function(){return window.matchMedia("(prefers-color-scheme: dark)")?"dark":"light"},this.initMode=function(){e.setMode(e.getMode(),e.getMenuMode()),e.element&&L.EventHandlerUtil.trigger(e.element,"kt.thememode.init")},this.setActiveMenuItem=function(a){var t,u=e.getParamName("menu"),r=a.getAttribute("data-kt-value"),c=(t=e.menu)===null||t===void 0?void 0:t.querySelector('.active[data-kt-element="mode"]');c&&c.classList.remove("active"),a.classList.add("active"),localStorage&&r&&u&&localStorage.setItem(u,r)},this.handleMenu=function(){var a,t;(a=e.menu)===null||a===void 0||(t=a.querySelectorAll('[data-kt-element="mode"]'))===null||t===void 0||t.forEach(function(u){u.addEventListener("click",function(r){r.preventDefault();var c=u.getAttribute("data-kt-value"),f=c==="system"?e.getSystemMode():c;f&&e.setMode(f,c)})})},this.flipImages=function(){var a;(a=document.querySelectorAll("[data-kt-img-dark]"))===null||a===void 0||a.forEach(function(t){t.tagName==="IMG"?e.getMode()==="dark"&&t.hasAttribute("data-kt-img-dark")?(t.setAttribute("data-kt-img-light",t.getAttribute("src")||""),t.setAttribute("src",t.getAttribute("data-kt-img-dark")||"")):e.getMode()==="light"&&t.hasAttribute("data-kt-img-light")&&(t.setAttribute("data-kt-img-dark",t.getAttribute("src")||""),t.setAttribute("src",t.getAttribute("data-kt-img-light")||"")):e.getMode()==="dark"&&t.hasAttribute("data-kt-img-dark")?(t.setAttribute("data-kt-img-light",t.getAttribute("src")||""),t.style.backgroundImage="url('"+t.getAttribute("data-kt-img-dark")+"')"):e.getMode()==="light"&&t.hasAttribute("data-kt-img-light")&&(t.setAttribute("data-kt-img-dark",t.getAttribute("src")||""),t.style.backgroundImage="url('"+t.getAttribute("data-kt-img-light")+"')")})},this.on=function(a,t){if(e.element)return L.EventHandlerUtil.on(e.element,a,t)},this.off=function(a,t){if(e.element)return L.EventHandlerUtil.off(e.element,a,t)},this.init=function(){e.menu=document.querySelector('[data-kt-element="theme-mode-menu"]'),e.element=document.documentElement,e.initMode(),e.menu&&e.handleMenu()}}),U=new N,z=n(85893),C=U.getSystemMode(),_=function(e){var a=e!=="system"?e:C,t="/media/patterns/header-bg"+(a==="light"?".jpg":"-dark.png");document.body.style.backgroundImage='url("'.concat(toAbsoluteUrl(t),'")')},T="kt_theme_mode_value",l="kt_theme_mode_menu",m=function(e){if(!localStorage)return"light";var a=localStorage.getItem(e);return!a||a==="light"?"light":a==="dark"?"dark":"system"},v={mode:m(T),menuMode:m(l),updateMode:function(e){},updateMenuMode:function(e){}},M=(0,p.createContext)({mode:v.mode,menuMode:v.menuMode,updateMode:function(e){},updateMenuMode:function(e){}}),B=function(){return(0,p.useContext)(M)},W=function(e){var a=e.children,t=(0,p.useState)(v.mode),u=(0,S.Z)(t,2),r=u[0],c=u[1],f=(0,p.useState)(v.menuMode),o=(0,S.Z)(f,2),b=o[0],g=o[1],y=function($){var K=$==="system"?C:$;c(K),localStorage&&localStorage.setItem(T,K),document.documentElement.setAttribute("data-theme",K),U.init()},D=function($){g($),localStorage&&localStorage.setItem(l,$)};return(0,p.useEffect)(function(){y(r),D(b)},[]),(0,z.jsx)(M.Provider,{value:{mode:r,menuMode:b,updateMode:y,updateMenuMode:D},children:a})}},11014:function(X,Q,n){"use strict";n.r(Q);var S=n(2824),p=n(93224),d=n(11849),F=n(86582),j=n(67294),w=n(34912),R=n(1861),L=n(7020),N=n(15459),U=n(48775),z=n(74200),C=n(25496),_=n(85893),T=["id"],l=z.mQ.TabPane;function m(s){var e=s.books,a=(0,L.tT)("contacts",function(r){var c=r.state;return c.book}),t=(0,j.useCallback)(function(r){if(r.startsWith("contacts-"))console.log(r);else return!1;return!0},[]),u=(0,j.useMemo)(function(){return[].concat((0,F.Z)(e.map(function(r){return{value:"contacts-".concat(r.id),label:r.name}})),[{type:"separator"},{value:"manage-contacts",label:"\u504F\u597D\u8BBE\u7F6E"}])},[e]);return(0,_.jsx)("div",{className:"app-sidebar-footer",children:(0,_.jsx)(z.Ph,{onChange:t,placement:"topCenter",value:a?"contacts-".concat(a):void 0,options:u})})}function v(s){var e,a=s.book,t=s.namespace,u=(0,N.N2)({fetchPolicy:"cache-and-network",variables:{id:a.id,namespace:t}}),r=u.data,c=(0,j.useMemo)(function(){var f,o=r==null||(f=r.book)===null||f===void 0?void 0:f.groups;if(!o)return[];var b=C.G_(o.map(function(g){return(0,d.Z)({},g)}),{idKey:"id",pidKey:"parentId",converter:function(y){var D=y.id,h=(0,p.Z)(y,T);return(0,d.Z)((0,d.Z)({},h),{},{key:D,title:h.name})}});return b},[r==null||(e=r.book)===null||e===void 0?void 0:e.groups]);return(0,_.jsx)(w.Z,{treeData:c})}function M(s){var e=s.book,a=(0,j.useState)(e.namespaces[0].id),t=(0,S.Z)(a,2),u=t[0],r=t[1],c=(0,j.useCallback)(function(f){console.log("activeKey",f),r(f)},[]);return(0,_.jsx)(z.mQ,{activeKey:u,onChange:c,className:"nav-line-tabs-2x mx-5 mb-5 fs-6",children:e.namespaces.map(function(f){return(0,_.jsx)(l,{tab:f.name,children:(0,_.jsx)(R.E,{className:"custom-scrollbar",options:{scrollbars:{autoHide:"scroll"}},children:(0,_.jsx)(v,{book:e,namespace:f.id})})},f.id)})})}function B(s){var e=s.book;return console.log(e.namespaces),e.type=="ENTERPRISE"?(0,_.jsx)(M,{book:e}):(0,_.jsx)("div",{children:"xxx"})}function W(){var s=(0,N.jV)({fetchPolicy:"cache-and-network"}),e=s.data,a=(0,L.tT)("contacts",function(r){var c=r.state;return c.book}),t=(0,L.tT)("contacts",function(r){return r.setBook});(0,j.useEffect)(function(){if(!!(e!=null&&e.books)){var r=e==null?void 0:e.books;r.some(function(c){return c.id==a})||t(r[0].id)}},[e==null?void 0:e.books,a,t]);var u=(0,j.useMemo)(function(){if(!(!(e!=null&&e.books)||!a))return e.books.find(function(r){return r.id==a})},[e==null?void 0:e.books,a]);return console.log("books",e==null?void 0:e.books,u,a),(0,_.jsxs)(U.GP,{width:280,className:"app-sidebar app-contacts-sidebar",children:[(0,_.jsx)("div",{className:"mt-5 px-5 pt-5",children:(0,_.jsx)("h1",{className:"text-gray-800 fw-bold mb-6 mx-5",children:"\u901A\u8BAF\u5F55"})}),(0,_.jsx)("div",{className:"app-sidebar-body flex-column-fluid d-flex flex-column",children:u&&(0,_.jsx)(B,{book:u})}),(0,_.jsx)(m,{books:(e==null?void 0:e.books)||[],onAction:function(){}})]})}Q.default=W},15459:function(X,Q,n){"use strict";n.d(Q,{N2:function(){return a},jV:function(){return W},yk:function(){return o},gW:function(){return ee},KK:function(){return c}});var S=n(11849),p=n(20310),d=n(76058),F=n(64718),j=n(38460),w,R,L,N,U,z,C,_,T={},l=(0,d.Ps)(w||(w=(0,p.Z)([`
    fragment PhoneParts on Phone {
  status
  number
}
    `]))),m=(0,d.Ps)(R||(R=(0,p.Z)([`
    fragment EmailParts on Email {
  status
  address
}
    `]))),v=(0,d.Ps)(L||(L=(0,p.Z)([`
    fragment AddressParts on Address {
  country
  province
  city
  district
  street
  postalCode
}
    `]))),M=(0,d.Ps)(N||(N=(0,p.Z)([`
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
`,""])),l,m,v),B=(0,d.Ps)(U||(U=(0,p.Z)([`
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
    `])));function W(E){var Z=(0,S.Z)((0,S.Z)({},T),E);return F.a(B,Z)}function s(E){var Z=_objectSpread(_objectSpread({},T),E);return Apollo.useLazyQuery(B,Z)}var e=(0,d.Ps)(z||(z=(0,p.Z)([`
    query book($id: ID!, $namespace: String) {
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
    `])));function a(E){var Z=(0,S.Z)((0,S.Z)({},T),E);return F.a(e,Z)}function t(E){var Z=_objectSpread(_objectSpread({},T),E);return Apollo.useLazyQuery(e,Z)}var u=(0,d.Ps)(C||(C=(0,p.Z)([`
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
`,""])),m,l);function r(E){var Z=_objectSpread(_objectSpread({},T),E);return Apollo.useQuery(u,Z)}function c(E){var Z=(0,S.Z)((0,S.Z)({},T),E);return j.t(u,Z)}var f=(0,d.Ps)(_||(_=(0,p.Z)([`
    query contact($id: ID!) {
  contact(id: $id) {
    id
    ...ContactParts
  }
}
    `,""])),M);function o(E){var Z=(0,S.Z)((0,S.Z)({},T),E);return F.a(f,Z)}function b(E){var Z=_objectSpread(_objectSpread({},T),E);return Apollo.useLazyQuery(f,Z)}var g=n(39428),y=n(3182),D=n(2824),h=n(67294),$=n(17187),K=n.n($),G=n(25496),q={totalCount:0,pageSize:0,totalPage:0,currentPage:0};function ee(E){var Z=(0,h.useRef)(new(K())),i=(0,h.useRef)({page:1,token:E,loading:!1,contacts:[],pagination:(0,S.Z)({},q)}),ve=(0,h.useReducer)(function(O){return O+1},0),fe=(0,D.Z)(ve,2),ie=fe[1],he=c({fetchPolicy:"cache-and-network"}),se=(0,D.Z)(he,2),te=se[0],re=se[1],H=re.data,ne=re.loading,ce=re.refetch;i.current.loading=ne;var de=(0,h.useCallback)(function(O){O.edges.map(function(k){return k.node}).forEach(function(k,I){var x=O.pageSize*(O.currentPage-1)+I;i.current.contacts[x]=k}),Z.current.emit("updates")},[]),oe=(0,h.useCallback)(function(){var O=(0,y.Z)((0,g.Z)().mark(function k(I){return(0,g.Z)().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(!(i.current.loading&&i.current.page==I)){A.next=2;break}return A.abrupt("return");case 2:if(!i.current.loading){A.next=7;break}return A.next=5,(0,G._v)(120);case 5:A.next=2;break;case 7:i.current.page=I;debugger;ce({filter:{token:i.current.token},page:i.current.page});case 10:case"end":return A.stop()}},k)}));return function(k){return O.apply(this,arguments)}}(),[ce]),pe=(0,h.useCallback)(function(){var O=(0,y.Z)((0,g.Z)().mark(function k(I){var x,A;return(0,g.Z)().wrap(function(Y){for(;;)switch(Y.prev=Y.next){case 0:x=i.current.pagination.pageSize,i.current.pagination.totalCount%i.current.pagination.pageSize==1&&i.current.pagination.totalPage--,i.current.pagination.totalCount--,i.current.contacts.splice(I,1),A=Math.ceil((I+1)/x),oe(A);case 6:case"end":return Y.stop()}},k)}));return function(k){return O.apply(this,arguments)}}(),[oe]),ue=(0,h.useCallback)(function(){var O=(0,y.Z)((0,g.Z)().mark(function k(I){return(0,g.Z)().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(!i.current.loading){A.next=5;break}return A.next=3,(0,G._v)(120);case 3:A.next=0;break;case 5:if(!(i.current.page==I||I>i.current.pagination.totalPage)){A.next=7;break}return A.abrupt("return");case 7:i.current.page=I,te({variables:{filter:{token:i.current.token},page:i.current.page}});case 9:case"end":return A.stop()}},k)}));return function(k){return O.apply(this,arguments)}}(),[te]),ge=(0,h.useCallback)(function(){var O=(0,y.Z)((0,g.Z)().mark(function k(I){var x;return(0,g.Z)().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(x=i.current.contacts[I],x){P.next=12;break}case 2:if(x=i.current.contacts[I],x){P.next=8;break}return P.next=6,ue(Math.ceil((I+1)/i.current.pagination.pageSize));case 6:return P.next=8,(0,G._v)(30);case 8:if(!(I>=i.current.contacts.length)){P.next=11;break}return console.log("\u7D22\u5F15\u8D85\u51FA\u6700\u5927\u957F\u5EA6 [".concat(I,"/").concat(i.current.contacts.length,"]")),P.abrupt("return",i.current.contacts[I-1]);case 11:if(!x){P.next=2;break}case 12:return P.abrupt("return",x);case 13:case"end":return P.stop()}},k)}));return function(k){return O.apply(this,arguments)}}(),[ue]);(0,h.useEffect)(function(){Z.current.setMaxListeners(1e3)},[]),(0,h.useEffect)(function(){if(i.current.token!=E&&(i.current.token=E,i.current.pagination=(0,S.Z)({},q),i.current.contacts.length=0,i.current.page=1),!E)return ie();te({variables:{filter:{token:E},page:i.current.page}})},[te,E]),(0,h.useEffect)(function(){ne||!(H!=null&&H.contacts)||(i.current.pagination=(0,S.Z)({},H.contacts)||i.current.pagination,de(H.contacts),ie())},[de,H==null?void 0:H.contacts,ne]);var be=function(k){var I=(0,h.useReducer)(function(J){return J+1},0),x=(0,D.Z)(I,2),A=x[1],P=(0,h.useRef)({index:k});P.current.index=k,P.current.contact=i.current.contacts[k],(0,h.useEffect)(function(){if(k!=-1){var J=k+1,ae,le=function(){var ye=(0,y.Z)((0,g.Z)().mark(function me(){return(0,g.Z)().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:if(!i.current.loading){V.next=5;break}return V.next=3,(0,G._v)(300);case 3:V.next=0;break;case 5:if(!P.current.contact){V.next=8;break}return P.current.timer&&clearTimeout(P.current.timer),V.abrupt("return");case 8:ue(Math.ceil(J/i.current.pagination.pageSize)),ae=setTimeout(le,300);case 10:case"end":return V.stop()}},me)}));return function(){return ye.apply(this,arguments)}}();return ae=setTimeout(le,300),function(){ae&&clearTimeout(ae)}}},[k]);var Y=(0,h.useCallback)(function(){var J=i.current.contacts[P.current.index];J!=P.current.contact&&(P.current.contact=J,A())},[]);return(0,h.useEffect)(function(){return Z.current.addListener("updates",Y),function(){Z.current.removeListener("updates",Y)}},[Y]),P.current.contact};return[i.current.pagination,ne,be,{loadContact:ge,refetch:oe,refetchWithRemove:pe}]}}}]);
