"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2051,1201],{51253:function(de,F,e){e.d(F,{GP:function(){return y.Z},Hk:function(){return oe},xx:function(){return X.x}});var te=e(74958),y=e(5166),X=e(19260),c=e(68400),l=e.n(c),D=e(62435),W=e(93967),z=e.n(W),R=e(94589),w=e(97857),L=e.n(w),G=e(46027),Z=e(10582),B=e(42687),q=e(79817),P=e(5574),t=e.n(P),s=e(96486),a=e(86074),v={aside:{minimize:!1,width:280}},k=D.createContext({state:v,dispatch:function(){}}),N=function(o){return o.AsideToggle="ASIDE_TOGGLE",o.AsideWidth="ASIDE_WIDTH",o}({});function Q(o,j){switch(j.type){case"ASIDE_TOGGLE":return o.aside.minimize=!o.aside.minimize,L()({},o);case"ASIDE_WIDTH":return o.aside.width=j.payload,L()({},o);default:throw new Error}}var x=function(j){var m=(0,D.useReducer)(Q,(0,s.cloneDeep)(v)),U=t()(m,2),M=U[0],H=U[1];return(0,a.jsx)(k.Provider,{value:{state:M,dispatch:H},children:j.children})},p=function(){return(0,D.useContext)(k)},n=e(65495);function S(o){var j=p(),m=j.dispatch,U=j.state.aside.minimize,M=(0,D.useCallback)(function(){m({type:N.AsideToggle})},[m]);return(0,a.jsx)(q.Button,{style:L()({marginBottom:"1.35rem",zIndex:105},o.style),onClick:M,activeColor:"primary",className:z()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",o.className,{active:U}),children:(0,a.jsx)(G.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}var T={"drawer drawer-start":{maxWidth:992}};function A(o){var j=o.className,m=o.header,U=o.children,M=o.collapsible,H=M===void 0?!0:M,V=o.width,_=V===void 0?280:V,ae=(0,B.$Y)(),le=p(),ee=le.dispatch;(0,D.useEffect)(function(){ae.aside.width(_+100),ee({type:N.AsideWidth,payload:_})},[ae.aside,ee,_]);var se=(0,Z.CN)(T),me=(0,B.BK)(function(u){return u.aside.drawer});return(0,a.jsxs)("div",{className:z()("app-aside aside",j,se,{"drawer-on":me}),children:[(0,a.jsx)(n.Z,{children:(0,a.jsx)(y.Z,{header:m,resizeable:!0,className:"app-sidebar",children:U})}),H&&(0,a.jsx)(S,{className:"start-100 end-0"})]})}A.Toggle=S;var i=A,C,g=R.ZP.div(C||(C=l()([`
  --root-aside-width: `,`;
  --met-aside-width: `,`;
`])),function(o){return o.minimize?"100px":"".concat(o.width,"px")},function(o){return o.minimize?"100px":"".concat(o.width,"px")});function K(o){var j=o.children,m=o.className,U=p(),M=U.state.aside,H=M.minimize,V=M.width,_=(0,D.useCallback)(function(ae){ae.preventDefault()},[]);return(0,a.jsx)(g,{minimize:H,width:V,className:z()("micro-app-container page-full-content",m,{"aside-minimize":H}),onContextMenu:_,children:j})}function $(o){var j=o.children,m=o.className;return(0,a.jsx)(x,{children:(0,a.jsx)(K,{className:m,children:j})})}$.Sidebar=i;var oe=$},42687:function(de,F,e){e.d(F,{$Y:function(){return G},BK:function(){return B},aM:function(){return P}});var te=e(5574),y=e.n(te),X=e(97857),c=e.n(X),l=e(62435),D=e(86074),W=l.createContext({getState:function(){return{routes:[]}},subscribe:function(){},dispatch:function(){}}),z=function(s,a){return a?a.type==="ASIDE_MINIMIZE"?c()(c()({},s),{},{aside:c()(c()({},s.aside),{},{minimize:!!a.payload})}):a.type==="ASIDE_WIDTH"?c()(c()({},s),{},{aside:c()(c()({},s.aside),{},{width:a.payload})}):a.type==="ASIDE_COLLAPSIBLE"?c()(c()({},s),{},{aside:c()(c()({},s.aside),{},{collapsible:a.payload})}):a.type==="ASIDE_DRAWER"?c()(c()({},s),{},{aside:c()(c()({},s.aside),{},{drawer:a.payload})}):s:s},R=function(s){return c()({},s)};function w(t){var s=(0,l.useReducer)(z,t,R),a=y()(s,2),v=a[0],k=a[1],N=(0,l.useState)([]),Q=y()(N,1),x=Q[0],p=function(K){return function(){var $=x.indexOf(K);$>-1&&x.splice($,1)}},n=(0,l.useCallback)(function(g){return x.unshift(g),p(g)},[x]),S=(0,l.useCallback)(function(){x.forEach(function(g){return g()})},[x]),T={getState:function(){return v},dispatch:k,subscribe:n},A=(0,l.useState)(T),i=y()(A,1),C=i[0];return(0,l.useEffect)(function(){C.getState=function(){return v},S()},[v]),C}var L=function(s,a){return s===a};function G(){var t=(0,l.useContext)(W),s=(0,l.useRef)({aside:{get state(){return t.getState().aside},width:function(v){t.dispatch({type:"ASIDE_WIDTH",payload:v})},minimize:function(v){t.dispatch({type:"ASIDE_MINIMIZE",payload:v})},collapsible:function(v){t.dispatch({type:"ASIDE_COLLAPSIBLE",payload:v})},drawer:function(v){t.dispatch({type:"ASIDE_DRAWER",payload:v})}}});return s.current}function Z(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L,a=(0,l.useContext)(W),v=(0,l.useReducer)(function(n){return n+1},0),k=y()(v,2),N=k[1],Q=(0,l.useRef)(),x=t(a.getState());function p(){var n=t(a.getState());s(n,Q.current)||(Q.current=n,N())}return(0,l.useEffect)(function(){return a.subscribe(p)},[]),x}function B(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L;return Z(t,s)}function q(){var t=useContext(W);return t.dispatch}function P(t){var s=t.children,a=t.state,v=w(a);return(0,l.useMemo)(function(){return(0,D.jsx)(W.Provider,{value:v,children:s})},[s,v])}},71366:function(de,F,e){e.r(F);var te=e(5574),y=e.n(te),X=e(13769),c=e.n(X),l=e(97857),D=e.n(l),W=e(19632),z=e.n(W),R=e(62435),w=e(34912),L=e(12845),G=e(1861),Z=e(51253),B=e(79817),q=e(12708),P=e(75466),t=e(86074),s=["id"],a=B.Tabs.TabPane;function v(p){var n=p.books,S=(0,L.useModel)("contacts",function(i){var C=i.state;return C.book}),T=(0,R.useCallback)(function(i){if(i.startsWith("contacts-"))console.log(i);else return!1;return!0},[]),A=(0,R.useMemo)(function(){return[].concat(z()(n.map(function(i){return{value:"contacts-".concat(i.id),label:i.name}})),[{type:"separator"},{value:"manage-contacts",label:"\u504F\u597D\u8BBE\u7F6E"}])},[n]);return(0,t.jsx)("div",{className:"app-sidebar-footer",children:(0,t.jsx)(B.Select,{onChange:T,placement:"topCenter",value:S?"contacts-".concat(S):void 0,options:A})})}function k(p){var n,S=p.book,T=p.namespace,A=(0,P.N2)({fetchPolicy:"cache-and-network",variables:{id:S.id,namespace:T}}),i=A.data,C=(0,R.useMemo)(function(){var g,K=i==null||(g=i.book)===null||g===void 0?void 0:g.groups;if(!K)return[];var $=q.G_(K.map(function(oe){return D()({},oe)}),{idKey:"id",pidKey:"parentId",converter:function(o){var j=o.id,m=c()(o,s);return D()(D()({},m),{},{key:j,title:m.name})}});return $},[i==null||(n=i.book)===null||n===void 0?void 0:n.groups]);return(0,t.jsx)(w.Z,{treeData:C})}function N(p){var n=p.book,S=(0,R.useState)(n.namespaces[0].id),T=y()(S,2),A=T[0],i=T[1],C=(0,R.useCallback)(function(g){console.log("activeKey",g),i(g)},[]);return(0,t.jsx)(B.Tabs,{activeKey:A,onChange:C,className:"nav-line-tabs-2x mx-5 mb-5 fs-6",children:n.namespaces.map(function(g){return(0,t.jsx)(a,{tab:g.name,children:(0,t.jsx)(G.E,{className:"custom-scrollbar",options:{scrollbars:{autoHide:"scroll"}},children:(0,t.jsx)(k,{book:n,namespace:g.id})})},g.id)})})}function Q(p){var n=p.book;return console.log(n.namespaces),n.type==="ENTERPRISE"?(0,t.jsx)(N,{book:n}):(0,t.jsx)("div",{children:"xxx"})}function x(){var p=(0,P.jV)({fetchPolicy:"cache-and-network"}),n=p.data,S=(0,L.useModel)("contacts",function(i){var C=i.state;return C.book}),T=(0,L.useModel)("contacts",function(i){return i.setBook});(0,R.useEffect)(function(){if(n!=null&&n.books){var i=n==null?void 0:n.books;i.some(function(C){return C.id===S})||T(i[0].id)}},[n==null?void 0:n.books,S,T]);var A=(0,R.useMemo)(function(){if(!(!(n!=null&&n.books)||!S))return n.books.find(function(i){return i.id===S})},[n==null?void 0:n.books,S]);return console.log("books",n==null?void 0:n.books,A,S),(0,t.jsxs)(Z.GP,{width:280,className:"app-sidebar app-contacts-sidebar",children:[(0,t.jsx)("div",{className:"mt-5 px-5 pt-5",children:(0,t.jsx)("h1",{className:"text-gray-800 fw-bold mb-6 mx-5",children:"\u901A\u8BAF\u5F55"})}),(0,t.jsx)("div",{className:"app-sidebar-body flex-column-fluid d-flex flex-column",children:A&&(0,t.jsx)(Q,{book:A})}),(0,t.jsx)(v,{books:(n==null?void 0:n.books)||[],onAction:function(){}})]})}F.default=x},75466:function(de,F,e){e.d(F,{N2:function(){return n},jV:function(){return N},yk:function(){return $},gW:function(){return me},KK:function(){return C}});var te=e(97857),y=e.n(te),X=e(68400),c=e.n(X),l=e(75063),D=e(37887),W=e(73359),z,R,w,L,G,Z,B,q,P={},t=(0,l.Ps)(z||(z=c()([`
    fragment PhoneParts on Phone {
  status
  number
}
    `]))),s=(0,l.Ps)(R||(R=c()([`
    fragment EmailParts on Email {
  status
  address
}
    `]))),a=(0,l.Ps)(w||(w=c()([`
    fragment AddressParts on Address {
  country
  province
  city
  district
  street
  postalCode
}
    `]))),v=(0,l.Ps)(L||(L=c()([`
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
`,""])),t,s,a),k=(0,l.Ps)(G||(G=c()([`
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
    `])));function N(u){var d=y()(y()({},P),u);return D.a(k,d)}function Q(u){var d=_objectSpread(_objectSpread({},P),u);return Apollo.useLazyQuery(k,d)}function x(u){var d=_objectSpread(_objectSpread({},P),u);return Apollo.useSuspenseQuery(k,d)}var p=(0,l.Ps)(Z||(Z=c()([`
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
    `])));function n(u){var d=y()(y()({},P),u);return D.a(p,d)}function S(u){var d=_objectSpread(_objectSpread({},P),u);return Apollo.useLazyQuery(p,d)}function T(u){var d=_objectSpread(_objectSpread({},P),u);return Apollo.useSuspenseQuery(p,d)}var A=(0,l.Ps)(B||(B=c()([`
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
`,""])),s,t);function i(u){var d=_objectSpread(_objectSpread({},P),u);return Apollo.useQuery(A,d)}function C(u){var d=y()(y()({},P),u);return W.t(A,d)}function g(u){var d=_objectSpread(_objectSpread({},P),u);return Apollo.useSuspenseQuery(A,d)}var K=(0,l.Ps)(q||(q=c()([`
    query contact($id: ID!) {
  contact(id: $id) {
    id
    ...ContactParts
  }
}
    `,""])),v);function $(u){var d=y()(y()({},P),u);return D.a(K,d)}function oe(u){var d=_objectSpread(_objectSpread({},P),u);return Apollo.useLazyQuery(K,d)}function o(u){var d=_objectSpread(_objectSpread({},P),u);return Apollo.useSuspenseQuery(K,d)}var j=e(15009),m=e.n(j),U=e(99289),M=e.n(U),H=e(5574),V=e.n(H),_=e(62435),ae=e(17187),le=e.n(ae),ee=e(12708),se={totalCount:0,pageSize:0,totalPage:0,currentPage:0};function me(u){var d=(0,_.useRef)(new(le())),r=(0,_.useRef)({page:1,token:u,loading:!1,contacts:[],pagination:y()({},se)}),Pe=(0,_.useReducer)(function(I){return I+1},0),Se=V()(Pe,2),_e=Se[1],Ae=C({fetchPolicy:"cache-and-network"}),he=V()(Ae,2),ue=he[0],ve=he[1],Y=ve.data,ie=ve.loading,be=ve.refetch;r.current.loading=ie;var ye=(0,_.useCallback)(function(I){I.edges.map(function(h){return h.node}).forEach(function(h,E){var O=I.pageSize*(I.currentPage-1)+E;r.current.contacts[O]=h}),d.current.emit("updates")},[]),fe=(0,_.useCallback)(function(){var I=M()(m()().mark(function h(E){return m()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(!(r.current.loading&&r.current.page===E)){f.next=2;break}return f.abrupt("return");case 2:if(!r.current.loading){f.next=7;break}return f.next=5,(0,ee._v)(120);case 5:f.next=2;break;case 7:r.current.page=E,be({filter:{token:r.current.token},page:r.current.page});case 9:case"end":return f.stop()}},h)}));return function(h){return I.apply(this,arguments)}}(),[be]),Ce=(0,_.useCallback)(function(){var I=M()(m()().mark(function h(E){var O,f;return m()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:O=r.current.pagination.pageSize,r.current.pagination.totalCount%r.current.pagination.pageSize===1&&r.current.pagination.totalPage--,r.current.pagination.totalCount--,r.current.contacts.splice(E,1),f=Math.ceil((E+1)/O),fe(f);case 6:case"end":return ne.stop()}},h)}));return function(h){return I.apply(this,arguments)}}(),[fe]),pe=(0,_.useCallback)(function(){var I=M()(m()().mark(function h(E){return m()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(!r.current.loading){f.next=5;break}return f.next=3,(0,ee._v)(120);case 3:f.next=0;break;case 5:if(!(r.current.page===E||E>r.current.pagination.totalPage)){f.next=7;break}return f.abrupt("return");case 7:r.current.page=E,ue({variables:{filter:{token:r.current.token},page:r.current.page}});case 9:case"end":return f.stop()}},h)}));return function(h){return I.apply(this,arguments)}}(),[ue]),je=(0,_.useCallback)(function(){var I=M()(m()().mark(function h(E){var O;return m()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(O=r.current.contacts[E],O){b.next=12;break}case 2:if(O=r.current.contacts[E],O){b.next=8;break}return b.next=6,pe(Math.ceil((E+1)/r.current.pagination.pageSize));case 6:return b.next=8,(0,ee._v)(30);case 8:if(!(E>=r.current.contacts.length)){b.next=11;break}return console.log("\u7D22\u5F15\u8D85\u51FA\u6700\u5927\u957F\u5EA6 [".concat(E,"/").concat(r.current.contacts.length,"]")),b.abrupt("return",r.current.contacts[E-1]);case 11:if(!O){b.next=2;break}case 12:return b.abrupt("return",O);case 13:case"end":return b.stop()}},h)}));return function(h){return I.apply(this,arguments)}}(),[pe]);(0,_.useEffect)(function(){d.current.setMaxListeners(1e3)},[]),(0,_.useEffect)(function(){if(r.current.token!==u&&(r.current.token=u,r.current.pagination=y()({},se),r.current.contacts.length=0,r.current.page=1),!u)return _e();ue({variables:{filter:{token:u},page:r.current.page}})},[ue,u]),(0,_.useEffect)(function(){ie||!(Y!=null&&Y.contacts)||(r.current.pagination=y()({},Y.contacts)||r.current.pagination,ye(Y.contacts),_e())},[ye,Y==null?void 0:Y.contacts,ie]);var De=function(h){var E=(0,_.useReducer)(function(re){return re+1},0),O=V()(E,2),f=O[1],b=(0,_.useRef)({index:h});b.current.index=h,b.current.contact=r.current.contacts[h],(0,_.useEffect)(function(){if(h!==-1){var re=h+1,ce,ge=function(){var Me=M()(m()().mark(function Ee(){return m()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:if(!r.current.loading){J.next=5;break}return J.next=3,(0,ee._v)(300);case 3:J.next=0;break;case 5:if(!b.current.contact){J.next=8;break}return b.current.timer&&clearTimeout(b.current.timer),J.abrupt("return");case 8:pe(Math.ceil(re/r.current.pagination.pageSize)),ce=setTimeout(ge,300);case 10:case"end":return J.stop()}},Ee)}));return function(){return Me.apply(this,arguments)}}();return ce=setTimeout(ge,300),function(){ce&&clearTimeout(ce)}}},[h]);var ne=(0,_.useCallback)(function(){var re=r.current.contacts[b.current.index];re!==b.current.contact&&(b.current.contact=re,f())},[]);return(0,_.useEffect)(function(){return d.current.addListener("updates",ne),function(){d.current.removeListener("updates",ne)}},[ne]),b.current.contact};return[r.current.pagination,ie,De,{loadContact:je,refetch:fe,refetchWithRemove:Ce}]}}}]);
