"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2051,1201],{51253:function(ce,F,e){e.d(F,{GP:function(){return _.Z},Hk:function(){return N},xx:function(){return X.x}});var te=e(74958),_=e(5166),X=e(19260),d=e(68400),l=e.n(d),D=e(62435),z=e(93967),W=e.n(z),T=e(94589),G=e(97857),k=e.n(G),Z=e(46027),H=e(42687),K=e(10811),q=e(5574),E=e.n(q),t=e(96486),a=e(86074),i={aside:{minimize:!1,width:280}},h=D.createContext({state:i,dispatch:function(){}}),x=function(r){return r.AsideToggle="ASIDE_TOGGLE",r.AsideWidth="ASIDE_WIDTH",r}({});function Q(r,C){switch(C.type){case"ASIDE_TOGGLE":return r.aside.minimize=!r.aside.minimize,k()({},r);case"ASIDE_WIDTH":return r.aside.width=C.payload,k()({},r);default:throw new Error}}var $=function(C){var I=(0,D.useReducer)(Q,(0,t.cloneDeep)(i)),B=E()(I,2),m=B[0],w=B[1];return(0,a.jsx)(h.Provider,{value:{state:m,dispatch:w},children:C.children})},M=function(){return(0,D.useContext)(h)},y=e(65495);function n(r){var C=M(),I=C.dispatch,B=C.state.aside.minimize,m=(0,D.useCallback)(function(){I({type:x.AsideToggle})},[I]);return(0,a.jsx)(K.Button,{style:k()({marginBottom:"1.35rem",zIndex:105},r.style),onClick:m,activeColor:"primary",className:W()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",r.className,{active:B}),children:(0,a.jsx)(Z.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}function P(r){var C=r.className,I=r.header,B=r.children,m=r.collapsible,w=m===void 0?!0:m,U=r.width,ee=U===void 0?280:U,V=(0,H.$Y)(),j=M(),re=j.dispatch;return(0,D.useEffect)(function(){V.aside.width(ee+100),re({type:x.AsideWidth,payload:ee})},[V.aside,re,ee]),(0,a.jsxs)("div",{className:W()("app-aside aside",C),children:[(0,a.jsx)(y.Z,{children:(0,a.jsx)(_.Z,{header:I,resizeable:!0,className:"app-sidebar",children:B})}),w&&(0,a.jsx)(n,{className:"start-100 end-0"})]})}P.Toggle=n;var R=P,S,s=T.ZP.div(S||(S=l()([`
  --root-aside-width: `,`;
  --met-aside-width: `,`;
`])),function(r){return r.minimize?"100px":"".concat(r.width,"px")},function(r){return r.minimize?"100px":"".concat(r.width,"px")});function A(r){var C=r.children,I=r.className,B=M(),m=B.state.aside,w=m.minimize,U=m.width,ee=(0,D.useCallback)(function(V){V.preventDefault()},[]);return(0,a.jsx)(s,{minimize:w,width:U,className:W()("micro-app-container page-full-content",I,{"aside-minimize":w}),onContextMenu:ee,children:C})}function b(r){var C=r.children,I=r.className;return(0,a.jsx)($,{children:(0,a.jsx)(A,{className:I,children:C})})}b.Sidebar=R;var N=b},42687:function(ce,F,e){e.d(F,{$Y:function(){return Z},BK:function(){return K},aM:function(){return E}});var te=e(5574),_=e.n(te),X=e(97857),d=e.n(X),l=e(62435),D=e(86074),z=l.createContext({getState:function(){return{routes:[]}},subscribe:function(){},dispatch:function(){}}),W=function(a,i){return i?i.type==="ASIDE_MINIMIZE"?d()(d()({},a),{},{aside:d()(d()({},a.aside),{},{minimize:!!i.payload})}):i.type==="ASIDE_WIDTH"?d()(d()({},a),{},{aside:d()(d()({},a.aside),{},{width:i.payload})}):i.type==="ASIDE_COLLAPSIBLE"?d()(d()({},a),{},{aside:d()(d()({},a.aside),{},{collapsible:i.payload})}):a:a},T=function(a){return d()({},a)};function G(t){var a=(0,l.useReducer)(W,t,T),i=_()(a,2),h=i[0],x=i[1],Q=(0,l.useState)([]),$=_()(Q,1),M=$[0],y=function(N){return function(){var r=M.indexOf(N);r>-1&&M.splice(r,1)}},n=(0,l.useCallback)(function(b){return M.unshift(b),y(b)},[M]),P=(0,l.useCallback)(function(){M.forEach(function(b){return b()})},[M]),R={getState:function(){return h},dispatch:x,subscribe:n},S=(0,l.useState)(R),s=_()(S,1),A=s[0];return(0,l.useEffect)(function(){A.getState=function(){return h},P()},[h]),A}var k=function(a,i){return a===i};function Z(){var t=(0,l.useContext)(z),a=(0,l.useRef)({aside:{get state(){return t.getState().aside},width:function(h){t.dispatch({type:"ASIDE_WIDTH",payload:h})},minimize:function(h){t.dispatch({type:"ASIDE_MINIMIZE",payload:h})},collapsible:function(h){t.dispatch({type:"ASIDE_COLLAPSIBLE",payload:h})}}});return a.current}function H(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k,i=(0,l.useContext)(z),h=(0,l.useReducer)(function(n){return n+1},0),x=_()(h,2),Q=x[1],$=(0,l.useRef)(),M=t(i.getState());function y(){var n=t(i.getState());a(n,$.current)||($.current=n,Q())}return(0,l.useEffect)(function(){return i.subscribe(y)},[]),M}function K(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:k;return H(t,a)}function q(){var t=useContext(z);return t.dispatch}function E(t){var a=t.children,i=t.state,h=G(i);return(0,l.useMemo)(function(){return(0,D.jsx)(z.Provider,{value:h,children:a})},[a,h])}},71366:function(ce,F,e){e.r(F);var te=e(5574),_=e.n(te),X=e(13769),d=e.n(X),l=e(97857),D=e.n(l),z=e(19632),W=e.n(z),T=e(62435),G=e(34912),k=e(12845),Z=e(1861),H=e(51253),K=e(10811),q=e(12708),E=e(75466),t=e(86074),a=["id"],i=K.Tabs.TabPane;function h(y){var n=y.books,P=(0,k.useModel)("contacts",function(s){var A=s.state;return A.book}),R=(0,T.useCallback)(function(s){if(s.startsWith("contacts-"))console.log(s);else return!1;return!0},[]),S=(0,T.useMemo)(function(){return[].concat(W()(n.map(function(s){return{value:"contacts-".concat(s.id),label:s.name}})),[{type:"separator"},{value:"manage-contacts",label:"\u504F\u597D\u8BBE\u7F6E"}])},[n]);return(0,t.jsx)("div",{className:"app-sidebar-footer",children:(0,t.jsx)(K.Select,{onChange:R,placement:"topCenter",value:P?"contacts-".concat(P):void 0,options:S})})}function x(y){var n,P=y.book,R=y.namespace,S=(0,E.N2)({fetchPolicy:"cache-and-network",variables:{id:P.id,namespace:R}}),s=S.data,A=(0,T.useMemo)(function(){var b,N=s==null||(b=s.book)===null||b===void 0?void 0:b.groups;if(!N)return[];var r=q.G_(N.map(function(C){return D()({},C)}),{idKey:"id",pidKey:"parentId",converter:function(I){var B=I.id,m=d()(I,a);return D()(D()({},m),{},{key:B,title:m.name})}});return r},[s==null||(n=s.book)===null||n===void 0?void 0:n.groups]);return(0,t.jsx)(G.Z,{treeData:A})}function Q(y){var n=y.book,P=(0,T.useState)(n.namespaces[0].id),R=_()(P,2),S=R[0],s=R[1],A=(0,T.useCallback)(function(b){console.log("activeKey",b),s(b)},[]);return(0,t.jsx)(K.Tabs,{activeKey:S,onChange:A,className:"nav-line-tabs-2x mx-5 mb-5 fs-6",children:n.namespaces.map(function(b){return(0,t.jsx)(i,{tab:b.name,children:(0,t.jsx)(Z.E,{className:"custom-scrollbar",options:{scrollbars:{autoHide:"scroll"}},children:(0,t.jsx)(x,{book:n,namespace:b.id})})},b.id)})})}function $(y){var n=y.book;return console.log(n.namespaces),n.type==="ENTERPRISE"?(0,t.jsx)(Q,{book:n}):(0,t.jsx)("div",{children:"xxx"})}function M(){var y=(0,E.jV)({fetchPolicy:"cache-and-network"}),n=y.data,P=(0,k.useModel)("contacts",function(s){var A=s.state;return A.book}),R=(0,k.useModel)("contacts",function(s){return s.setBook});(0,T.useEffect)(function(){if(n!=null&&n.books){var s=n==null?void 0:n.books;s.some(function(A){return A.id===P})||R(s[0].id)}},[n==null?void 0:n.books,P,R]);var S=(0,T.useMemo)(function(){if(!(!(n!=null&&n.books)||!P))return n.books.find(function(s){return s.id===P})},[n==null?void 0:n.books,P]);return console.log("books",n==null?void 0:n.books,S,P),(0,t.jsxs)(H.GP,{width:280,className:"app-sidebar app-contacts-sidebar",children:[(0,t.jsx)("div",{className:"mt-5 px-5 pt-5",children:(0,t.jsx)("h1",{className:"text-gray-800 fw-bold mb-6 mx-5",children:"\u901A\u8BAF\u5F55"})}),(0,t.jsx)("div",{className:"app-sidebar-body flex-column-fluid d-flex flex-column",children:S&&(0,t.jsx)($,{book:S})}),(0,t.jsx)(h,{books:(n==null?void 0:n.books)||[],onAction:function(){}})]})}F.default=M},75466:function(ce,F,e){e.d(F,{N2:function(){return n},jV:function(){return Q},yk:function(){return r},gW:function(){return Ee},KK:function(){return A}});var te=e(97857),_=e.n(te),X=e(68400),d=e.n(X),l=e(75063),D=e(37887),z=e(73359),W,T,G,k,Z,H,K,q,E={},t=(0,l.Ps)(W||(W=d()([`
    fragment PhoneParts on Phone {
  status
  number
}
    `]))),a=(0,l.Ps)(T||(T=d()([`
    fragment EmailParts on Email {
  status
  address
}
    `]))),i=(0,l.Ps)(G||(G=d()([`
    fragment AddressParts on Address {
  country
  province
  city
  district
  street
  postalCode
}
    `]))),h=(0,l.Ps)(k||(k=d()([`
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
`,""])),t,a,i),x=(0,l.Ps)(Z||(Z=d()([`
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
    `])));function Q(u){var c=_()(_()({},E),u);return D.a(x,c)}function $(u){var c=_objectSpread(_objectSpread({},E),u);return Apollo.useLazyQuery(x,c)}function M(u){var c=_objectSpread(_objectSpread({},E),u);return Apollo.useSuspenseQuery(x,c)}var y=(0,l.Ps)(H||(H=d()([`
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
    `])));function n(u){var c=_()(_()({},E),u);return D.a(y,c)}function P(u){var c=_objectSpread(_objectSpread({},E),u);return Apollo.useLazyQuery(y,c)}function R(u){var c=_objectSpread(_objectSpread({},E),u);return Apollo.useSuspenseQuery(y,c)}var S=(0,l.Ps)(K||(K=d()([`
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
`,""])),a,t);function s(u){var c=_objectSpread(_objectSpread({},E),u);return Apollo.useQuery(S,c)}function A(u){var c=_()(_()({},E),u);return z.t(S,c)}function b(u){var c=_objectSpread(_objectSpread({},E),u);return Apollo.useSuspenseQuery(S,c)}var N=(0,l.Ps)(q||(q=d()([`
    query contact($id: ID!) {
  contact(id: $id) {
    id
    ...ContactParts
  }
}
    `,""])),h);function r(u){var c=_()(_()({},E),u);return D.a(N,c)}function C(u){var c=_objectSpread(_objectSpread({},E),u);return Apollo.useLazyQuery(N,c)}function I(u){var c=_objectSpread(_objectSpread({},E),u);return Apollo.useSuspenseQuery(N,c)}var B=e(15009),m=e.n(B),w=e(99289),U=e.n(w),ee=e(5574),V=e.n(ee),j=e(62435),re=e(17187),ge=e.n(re),oe=e(12708),ve={totalCount:0,pageSize:0,totalPage:0,currentPage:0};function Ee(u){var c=(0,j.useRef)(new(ge())),o=(0,j.useRef)({page:1,token:u,loading:!1,contacts:[],pagination:_()({},ve)}),Pe=(0,j.useReducer)(function(L){return L+1},0),Se=V()(Pe,2),fe=Se[1],je=A({fetchPolicy:"cache-and-network"}),pe=V()(je,2),se=pe[0],le=pe[1],Y=le.data,ue=le.loading,_e=le.refetch;o.current.loading=ue;var he=(0,j.useCallback)(function(L){L.edges.map(function(f){return f.node}).forEach(function(f,g){var O=L.pageSize*(L.currentPage-1)+g;o.current.contacts[O]=f}),c.current.emit("updates")},[]),de=(0,j.useCallback)(function(){var L=U()(m()().mark(function f(g){return m()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(!(o.current.loading&&o.current.page===g)){v.next=2;break}return v.abrupt("return");case 2:if(!o.current.loading){v.next=7;break}return v.next=5,(0,oe._v)(120);case 5:v.next=2;break;case 7:o.current.page=g,_e({filter:{token:o.current.token},page:o.current.page});case 9:case"end":return v.stop()}},f)}));return function(f){return L.apply(this,arguments)}}(),[_e]),Ae=(0,j.useCallback)(function(){var L=U()(m()().mark(function f(g){var O,v;return m()().wrap(function(ne){for(;;)switch(ne.prev=ne.next){case 0:O=o.current.pagination.pageSize,o.current.pagination.totalCount%o.current.pagination.pageSize===1&&o.current.pagination.totalPage--,o.current.pagination.totalCount--,o.current.contacts.splice(g,1),v=Math.ceil((g+1)/O),de(v);case 6:case"end":return ne.stop()}},f)}));return function(f){return L.apply(this,arguments)}}(),[de]),me=(0,j.useCallback)(function(){var L=U()(m()().mark(function f(g){return m()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(!o.current.loading){v.next=5;break}return v.next=3,(0,oe._v)(120);case 3:v.next=0;break;case 5:if(!(o.current.page===g||g>o.current.pagination.totalPage)){v.next=7;break}return v.abrupt("return");case 7:o.current.page=g,se({variables:{filter:{token:o.current.token},page:o.current.page}});case 9:case"end":return v.stop()}},f)}));return function(f){return L.apply(this,arguments)}}(),[se]),Ce=(0,j.useCallback)(function(){var L=U()(m()().mark(function f(g){var O;return m()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(O=o.current.contacts[g],O){p.next=12;break}case 2:if(O=o.current.contacts[g],O){p.next=8;break}return p.next=6,me(Math.ceil((g+1)/o.current.pagination.pageSize));case 6:return p.next=8,(0,oe._v)(30);case 8:if(!(g>=o.current.contacts.length)){p.next=11;break}return console.log("\u7D22\u5F15\u8D85\u51FA\u6700\u5927\u957F\u5EA6 [".concat(g,"/").concat(o.current.contacts.length,"]")),p.abrupt("return",o.current.contacts[g-1]);case 11:if(!O){p.next=2;break}case 12:return p.abrupt("return",O);case 13:case"end":return p.stop()}},f)}));return function(f){return L.apply(this,arguments)}}(),[me]);(0,j.useEffect)(function(){c.current.setMaxListeners(1e3)},[]),(0,j.useEffect)(function(){if(o.current.token!==u&&(o.current.token=u,o.current.pagination=_()({},ve),o.current.contacts.length=0,o.current.page=1),!u)return fe();se({variables:{filter:{token:u},page:o.current.page}})},[se,u]),(0,j.useEffect)(function(){ue||!(Y!=null&&Y.contacts)||(o.current.pagination=_()({},Y.contacts)||o.current.pagination,he(Y.contacts),fe())},[he,Y==null?void 0:Y.contacts,ue]);var De=function(f){var g=(0,j.useReducer)(function(ae){return ae+1},0),O=V()(g,2),v=O[1],p=(0,j.useRef)({index:f});p.current.index=f,p.current.contact=o.current.contacts[f],(0,j.useEffect)(function(){if(f!==-1){var ae=f+1,ie,be=function(){var Me=U()(m()().mark(function ye(){return m()().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:if(!o.current.loading){J.next=5;break}return J.next=3,(0,oe._v)(300);case 3:J.next=0;break;case 5:if(!p.current.contact){J.next=8;break}return p.current.timer&&clearTimeout(p.current.timer),J.abrupt("return");case 8:me(Math.ceil(ae/o.current.pagination.pageSize)),ie=setTimeout(be,300);case 10:case"end":return J.stop()}},ye)}));return function(){return Me.apply(this,arguments)}}();return ie=setTimeout(be,300),function(){ie&&clearTimeout(ie)}}},[f]);var ne=(0,j.useCallback)(function(){var ae=o.current.contacts[p.current.index];ae!==p.current.contact&&(p.current.contact=ae,v())},[]);return(0,j.useEffect)(function(){return c.current.addListener("updates",ne),function(){c.current.removeListener("updates",ne)}},[ne]),p.current.contact};return[o.current.pagination,ue,De,{loadContact:Ce,refetch:de,refetchWithRemove:Ae}]}}}]);
