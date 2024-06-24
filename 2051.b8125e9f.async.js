"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2051,267],{51253:function(fe,$,e){e.d($,{GP:function(){return y.Z},Hk:function(){return ae},xx:function(){return ee.x}});var te=e(74958),y=e(5166),ee=e(19260),S=e(68400),M=e.n(S),E=e(62435),ne=e(93967),L=e.n(ne),k=e(94589),G=e(97857),O=e.n(G),F=e(46027),w=e(10582),R=e(42687),Z=e(79817),f=e(5574),m=e.n(f),H=e(96486),C=e(86074),V={aside:{minimize:!1,width:280}},B=E.createContext({state:V,dispatch:function(){}}),J=function(t){return t.AsideToggle="ASIDE_TOGGLE",t.AsideWidth="ASIDE_WIDTH",t}({});function re(t,b){switch(b.type){case"ASIDE_TOGGLE":return t.aside.minimize=!t.aside.minimize,O()({},t);case"ASIDE_WIDTH":return t.aside.width=b.payload,O()({},t);default:throw new Error}}var oe=function(b){var u=(0,E.useReducer)(re,(0,H.cloneDeep)(V)),x=m()(u,2),P=x[0],z=x[1];return(0,C.jsx)(B.Provider,{value:{state:P,dispatch:z},children:b.children})},p=function(){return(0,E.useContext)(B)},n=e(65495);function h(t){var b=p(),u=b.dispatch,x=b.state.aside.minimize,P=(0,E.useCallback)(function(){u({type:J.AsideToggle})},[u]);return(0,C.jsx)(Z.Button,{style:O()({marginBottom:"1.35rem",zIndex:105},t.style),onClick:P,activeColor:"primary",className:L()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",t.className,{active:x}),children:(0,C.jsx)(F.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}var T={"drawer drawer-start":{maxWidth:992}};function g(t){var b=t.className,u=t.header,x=t.children,P=t.collapsible,z=P===void 0?!0:P,N=t.width,i=N===void 0?280:N,X=(0,R.$Y)(),le=p(),K=le.dispatch;(0,E.useEffect)(function(){X.aside.width(i+100),K({type:J.AsideWidth,payload:i})},[X.aside,K,i]);var se=(0,w.CN)(T),de=(0,R.BK)(function(r){return r.aside.drawer});return(0,C.jsxs)("div",{className:L()("app-aside aside",b,se,{"drawer-on":de}),children:[(0,C.jsx)(n.Z,{children:(0,C.jsx)(y.Z,{header:u,resizeable:!0,className:"app-sidebar",children:x})}),z&&(0,C.jsx)(h,{className:"start-100 end-0"})]})}g.Toggle=h;var o=g,_,D=k.ZP.div(_||(_=M()([`
  --root-aside-width: `,`;
  --met-aside-width: `,`;
`])),function(t){return t.minimize?"100px":"".concat(t.width,"px")},function(t){return t.minimize?"100px":"".concat(t.width,"px")});function I(t){var b=t.children,u=t.className,x=p(),P=x.state.aside,z=P.minimize,N=P.width,i=(0,E.useCallback)(function(X){X.preventDefault()},[]);return(0,C.jsx)(D,{minimize:z,width:N,className:L()("micro-app-container page-full-content",u,{"aside-minimize":z}),onContextMenu:i,children:b})}function Y(t){var b=t.children,u=t.className;return(0,C.jsx)(oe,{children:(0,C.jsx)(I,{className:u,children:b})})}Y.Sidebar=o;var ae=Y},71366:function(fe,$,e){e.r($);var te=e(5574),y=e.n(te),ee=e(13769),S=e.n(ee),M=e(97857),E=e.n(M),ne=e(19632),L=e.n(ne),k=e(62435),G=e(34912),O=e(12845),F=e(1861),w=e(51253),R=e(79817),Z=e(12708),f=e(75466),m=e(86074),H=["id"],C=R.Tabs.TabPane;function V(p){var n=p.books,h=(0,O.useModel)("contacts",function(o){var _=o.state;return _.book}),T=(0,k.useCallback)(function(o){if(o.startsWith("contacts-"))console.log(o);else return!1;return!0},[]),g=(0,k.useMemo)(function(){return[].concat(L()(n.map(function(o){return{value:"contacts-".concat(o.id),label:o.name}})),[{type:"separator"},{value:"manage-contacts",label:"\u504F\u597D\u8BBE\u7F6E"}])},[n]);return(0,m.jsx)("div",{className:"app-sidebar-footer",children:(0,m.jsx)(R.Select,{onChange:T,placement:"topCenter",value:h?"contacts-".concat(h):void 0,options:g})})}function B(p){var n,h=p.book,T=p.namespace,g=(0,f.N2)({fetchPolicy:"cache-and-network",variables:{id:h.id,namespace:T}}),o=g.data,_=(0,k.useMemo)(function(){var D,I=o==null||(D=o.book)===null||D===void 0?void 0:D.groups;if(!I)return[];var Y=Z.G_(I.map(function(ae){return E()({},ae)}),{idKey:"id",pidKey:"parentId",converter:function(t){var b=t.id,u=S()(t,H);return E()(E()({},u),{},{key:b,title:u.name})}});return Y},[o==null||(n=o.book)===null||n===void 0?void 0:n.groups]);return(0,m.jsx)(G.Z,{treeData:_})}function J(p){var n=p.book,h=(0,k.useState)(n.namespaces[0].id),T=y()(h,2),g=T[0],o=T[1],_=(0,k.useCallback)(function(D){console.log("activeKey",D),o(D)},[]);return(0,m.jsx)(R.Tabs,{activeKey:g,onChange:_,className:"nav-line-tabs-2x mx-5 mb-5 fs-6",children:n.namespaces.map(function(D){return(0,m.jsx)(C,{tab:D.name,children:(0,m.jsx)(F.E,{className:"custom-scrollbar",options:{scrollbars:{autoHide:"scroll"}},children:(0,m.jsx)(B,{book:n,namespace:D.id})})},D.id)})})}function re(p){var n=p.book;return console.log(n.namespaces),n.type==="ENTERPRISE"?(0,m.jsx)(J,{book:n}):(0,m.jsx)("div",{children:"xxx"})}function oe(){var p=(0,f.jV)({fetchPolicy:"cache-and-network"}),n=p.data,h=(0,O.useModel)("contacts",function(o){var _=o.state;return _.book}),T=(0,O.useModel)("contacts",function(o){return o.setBook});(0,k.useEffect)(function(){if(n!=null&&n.books){var o=n==null?void 0:n.books;o.some(function(_){return _.id===h})||T(o[0].id)}},[n==null?void 0:n.books,h,T]);var g=(0,k.useMemo)(function(){if(!(!(n!=null&&n.books)||!h))return n.books.find(function(o){return o.id===h})},[n==null?void 0:n.books,h]);return console.log("books",n==null?void 0:n.books,g,h),(0,m.jsxs)(w.GP,{width:280,className:"app-sidebar app-contacts-sidebar",children:[(0,m.jsx)("div",{className:"mt-5 px-5 pt-5",children:(0,m.jsx)("h1",{className:"text-gray-800 fw-bold mb-6 mx-5",children:"\u901A\u8BAF\u5F55"})}),(0,m.jsx)("div",{className:"app-sidebar-body flex-column-fluid d-flex flex-column",children:g&&(0,m.jsx)(re,{book:g})}),(0,m.jsx)(V,{books:(n==null?void 0:n.books)||[],onAction:function(){}})]})}$.default=oe},75466:function(fe,$,e){e.d($,{N2:function(){return n},jV:function(){return J},yk:function(){return Y},gW:function(){return de},KK:function(){return _}});var te=e(97857),y=e.n(te),ee=e(68400),S=e.n(ee),M=e(75063),E=e(37887),ne=e(73359),L,k,G,O,F,w,R,Z,f={},m=(0,M.Ps)(L||(L=S()([`
    fragment PhoneParts on Phone {
  status
  number
}
    `]))),H=(0,M.Ps)(k||(k=S()([`
    fragment EmailParts on Email {
  status
  address
}
    `]))),C=(0,M.Ps)(G||(G=S()([`
    fragment AddressParts on Address {
  country
  province
  city
  district
  street
  postalCode
}
    `]))),V=(0,M.Ps)(O||(O=S()([`
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
`,""])),m,H,C),B=(0,M.Ps)(F||(F=S()([`
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
    `])));function J(r){var s=y()(y()({},f),r);return E.a(B,s)}function re(r){var s=_objectSpread(_objectSpread({},f),r);return Apollo.useLazyQuery(B,s)}function oe(r){var s=_objectSpread(_objectSpread({},f),r);return Apollo.useSuspenseQuery(B,s)}var p=(0,M.Ps)(w||(w=S()([`
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
    `])));function n(r){var s=y()(y()({},f),r);return E.a(p,s)}function h(r){var s=_objectSpread(_objectSpread({},f),r);return Apollo.useLazyQuery(p,s)}function T(r){var s=_objectSpread(_objectSpread({},f),r);return Apollo.useSuspenseQuery(p,s)}var g=(0,M.Ps)(R||(R=S()([`
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
`,""])),H,m);function o(r){var s=_objectSpread(_objectSpread({},f),r);return Apollo.useQuery(g,s)}function _(r){var s=y()(y()({},f),r);return ne.t(g,s)}function D(r){var s=_objectSpread(_objectSpread({},f),r);return Apollo.useSuspenseQuery(g,s)}var I=(0,M.Ps)(Z||(Z=S()([`
    query contact($id: ID!) {
  contact(id: $id) {
    id
    ...ContactParts
  }
}
    `,""])),V);function Y(r){var s=y()(y()({},f),r);return E.a(I,s)}function ae(r){var s=_objectSpread(_objectSpread({},f),r);return Apollo.useLazyQuery(I,s)}function t(r){var s=_objectSpread(_objectSpread({},f),r);return Apollo.useSuspenseQuery(I,s)}var b=e(15009),u=e.n(b),x=e(99289),P=e.n(x),z=e(5574),N=e.n(z),i=e(62435),X=e(17187),le=e.n(X),K=e(12708),se={totalCount:0,pageSize:0,totalPage:0,currentPage:0};function de(r){var s=(0,i.useRef)(new(le())),a=(0,i.useRef)({page:1,token:r,loading:!1,contacts:[],pagination:y()({},se)}),je=(0,i.useReducer)(function(A){return A+1},0),Ee=N()(je,2),he=Ee[1],Ce=_({fetchPolicy:"cache-and-network"}),be=N()(Ce,2),ue=be[0],me=be[1],W=me.data,ce=me.loading,ye=me.refetch;a.current.loading=ce;var ge=(0,i.useCallback)(function(A){A.edges.map(function(l){return l.node}).forEach(function(l,v){var j=A.pageSize*(A.currentPage-1)+v;a.current.contacts[j]=l}),s.current.emit("updates")},[]),ve=(0,i.useCallback)(function(){var A=P()(u()().mark(function l(v){return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!(a.current.loading&&a.current.page===v)){c.next=2;break}return c.abrupt("return");case 2:if(!a.current.loading){c.next=7;break}return c.next=5,(0,K._v)(120);case 5:c.next=2;break;case 7:a.current.page=v,ye({filter:{token:a.current.token},page:a.current.page});case 9:case"end":return c.stop()}},l)}));return function(l){return A.apply(this,arguments)}}(),[ye]),Ae=(0,i.useCallback)(function(){var A=P()(u()().mark(function l(v){var j,c;return u()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:j=a.current.pagination.pageSize,a.current.pagination.totalCount%a.current.pagination.pageSize===1&&a.current.pagination.totalPage--,a.current.pagination.totalCount--,a.current.contacts.splice(v,1),c=Math.ceil((v+1)/j),ve(c);case 6:case"end":return U.stop()}},l)}));return function(l){return A.apply(this,arguments)}}(),[ve]),pe=(0,i.useCallback)(function(){var A=P()(u()().mark(function l(v){return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!a.current.loading){c.next=5;break}return c.next=3,(0,K._v)(120);case 3:c.next=0;break;case 5:if(!(a.current.page===v||v>a.current.pagination.totalPage)){c.next=7;break}return c.abrupt("return");case 7:a.current.page=v,ue({variables:{filter:{token:a.current.token},page:a.current.page}});case 9:case"end":return c.stop()}},l)}));return function(l){return A.apply(this,arguments)}}(),[ue]),De=(0,i.useCallback)(function(){var A=P()(u()().mark(function l(v){var j;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(j=a.current.contacts[v],j){d.next=12;break}case 2:if(j=a.current.contacts[v],j){d.next=8;break}return d.next=6,pe(Math.ceil((v+1)/a.current.pagination.pageSize));case 6:return d.next=8,(0,K._v)(30);case 8:if(!(v>=a.current.contacts.length)){d.next=11;break}return console.log("\u7D22\u5F15\u8D85\u51FA\u6700\u5927\u957F\u5EA6 [".concat(v,"/").concat(a.current.contacts.length,"]")),d.abrupt("return",a.current.contacts[v-1]);case 11:if(!j){d.next=2;break}case 12:return d.abrupt("return",j);case 13:case"end":return d.stop()}},l)}));return function(l){return A.apply(this,arguments)}}(),[pe]);(0,i.useEffect)(function(){s.current.setMaxListeners(1e3)},[]),(0,i.useEffect)(function(){if(a.current.token!==r&&(a.current.token=r,a.current.pagination=y()({},se),a.current.contacts.length=0,a.current.page=1),!r)return he();ue({variables:{filter:{token:r},page:a.current.page}})},[ue,r]),(0,i.useEffect)(function(){ce||!(W!=null&&W.contacts)||(a.current.pagination=y()({},W.contacts)||a.current.pagination,ge(W.contacts),he())},[ge,W==null?void 0:W.contacts,ce]);var Se=function(l){var v=(0,i.useReducer)(function(q){return q+1},0),j=N()(v,2),c=j[1],d=(0,i.useRef)({index:l});d.current.index=l,d.current.contact=a.current.contacts[l],(0,i.useEffect)(function(){if(l!==-1){var q=l+1,ie,_e=function(){var Me=P()(u()().mark(function Pe(){return u()().wrap(function(Q){for(;;)switch(Q.prev=Q.next){case 0:if(!a.current.loading){Q.next=5;break}return Q.next=3,(0,K._v)(300);case 3:Q.next=0;break;case 5:if(!d.current.contact){Q.next=8;break}return d.current.timer&&clearTimeout(d.current.timer),Q.abrupt("return");case 8:pe(Math.ceil(q/a.current.pagination.pageSize)),ie=setTimeout(_e,300);case 10:case"end":return Q.stop()}},Pe)}));return function(){return Me.apply(this,arguments)}}();return ie=setTimeout(_e,300),function(){ie&&clearTimeout(ie)}}},[l]);var U=(0,i.useCallback)(function(){var q=a.current.contacts[d.current.index];q!==d.current.contact&&(d.current.contact=q,c())},[]);return(0,i.useEffect)(function(){return s.current.addListener("updates",U),function(){s.current.removeListener("updates",U)}},[U]),d.current.contact};return[a.current.pagination,ce,Se,{loadContact:De,refetch:ve,refetchWithRemove:Ae}]}}}]);
