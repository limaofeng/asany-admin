"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7294],{75466:function(ae,E,r){r.d(E,{N2:function(){return ce},jV:function(){return se},yk:function(){return oe},gW:function(){return fe},KK:function(){return H}});var D=r(97857),h=r.n(D),j=r(68400),c=r.n(j),p=r(75063),e=r(37887),M=r(73359),P,N,S,A,Q,R,g,x,m={},L=(0,p.Ps)(P||(P=c()([`
    fragment PhoneParts on Phone {
  status
  number
}
    `]))),V=(0,p.Ps)(N||(N=c()([`
    fragment EmailParts on Email {
  status
  address
}
    `]))),te=(0,p.Ps)(S||(S=c()([`
    fragment AddressParts on Address {
  country
  province
  city
  district
  street
  postalCode
}
    `]))),re=(0,p.Ps)(A||(A=c()([`
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
`,""])),L,V,te),$=(0,p.Ps)(Q||(Q=c()([`
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
    `])));function se(a){var t=h()(h()({},m),a);return e.a($,t)}function je(a){var t=_objectSpread(_objectSpread({},m),a);return Apollo.useLazyQuery($,t)}function Ce(a){var t=_objectSpread(_objectSpread({},m),a);return Apollo.useSuspenseQuery($,t)}var F=(0,p.Ps)(R||(R=c()([`
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
    `])));function ce(a){var t=h()(h()({},m),a);return e.a(F,t)}function Pe(a){var t=_objectSpread(_objectSpread({},m),a);return Apollo.useLazyQuery(F,t)}function Ne(a){var t=_objectSpread(_objectSpread({},m),a);return Apollo.useSuspenseQuery(F,t)}var I=(0,p.Ps)(g||(g=c()([`
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
`,""])),V,L);function Se(a){var t=_objectSpread(_objectSpread({},m),a);return Apollo.useQuery(I,t)}function H(a){var t=h()(h()({},m),a);return M.t(I,t)}function we(a){var t=_objectSpread(_objectSpread({},m),a);return Apollo.useSuspenseQuery(I,t)}var U=(0,p.Ps)(x||(x=c()([`
    query contact($id: ID!) {
  contact(id: $id) {
    id
    ...ContactParts
  }
}
    `,""])),re);function oe(a){var t=h()(h()({},m),a);return e.a(U,t)}function ke(a){var t=_objectSpread(_objectSpread({},m),a);return Apollo.useLazyQuery(U,t)}function Ee(a){var t=_objectSpread(_objectSpread({},m),a);return Apollo.useSuspenseQuery(U,t)}var le=r(15009),v=r.n(le),ue=r(99289),k=r.n(ue),ie=r(5574),W=r.n(ie),i=r(62435),de=r(17187),me=r.n(de),T=r(12708),Y={totalCount:0,pageSize:0,totalPage:0,currentPage:0};function fe(a){var t=(0,i.useRef)(new(me())),n=(0,i.useRef)({page:1,token:a,loading:!1,contacts:[],pagination:h()({},Y)}),he=(0,i.useReducer)(function(f){return f+1},0),pe=W()(he,2),J=pe[1],ve=H({fetchPolicy:"cache-and-network"}),X=W()(ve,2),B=X[0],K=X[1],b=K.data,O=K.loading,q=K.refetch;n.current.loading=O;var _=(0,i.useCallback)(function(f){f.edges.map(function(o){return o.node}).forEach(function(o,u){var d=f.pageSize*(f.currentPage-1)+u;n.current.contacts[d]=o}),t.current.emit("updates")},[]),Z=(0,i.useCallback)(function(){var f=k()(v()().mark(function o(u){return v()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!(n.current.loading&&n.current.page===u)){s.next=2;break}return s.abrupt("return");case 2:if(!n.current.loading){s.next=7;break}return s.next=5,(0,T._v)(120);case 5:s.next=2;break;case 7:n.current.page=u,q({filter:{token:n.current.token},page:n.current.page});case 9:case"end":return s.stop()}},o)}));return function(o){return f.apply(this,arguments)}}(),[q]),ge=(0,i.useCallback)(function(){var f=k()(v()().mark(function o(u){var d,s;return v()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:d=n.current.pagination.pageSize,n.current.pagination.totalCount%n.current.pagination.pageSize===1&&n.current.pagination.totalPage--,n.current.pagination.totalCount--,n.current.contacts.splice(u,1),s=Math.ceil((u+1)/d),Z(s);case 6:case"end":return C.stop()}},o)}));return function(o){return f.apply(this,arguments)}}(),[Z]),G=(0,i.useCallback)(function(){var f=k()(v()().mark(function o(u){return v()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!n.current.loading){s.next=5;break}return s.next=3,(0,T._v)(120);case 3:s.next=0;break;case 5:if(!(n.current.page===u||u>n.current.pagination.totalPage)){s.next=7;break}return s.abrupt("return");case 7:n.current.page=u,B({variables:{filter:{token:n.current.token},page:n.current.page}});case 9:case"end":return s.stop()}},o)}));return function(o){return f.apply(this,arguments)}}(),[B]),xe=(0,i.useCallback)(function(){var f=k()(v()().mark(function o(u){var d;return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(d=n.current.contacts[u],d){l.next=12;break}case 2:if(d=n.current.contacts[u],d){l.next=8;break}return l.next=6,G(Math.ceil((u+1)/n.current.pagination.pageSize));case 6:return l.next=8,(0,T._v)(30);case 8:if(!(u>=n.current.contacts.length)){l.next=11;break}return console.log("\u7D22\u5F15\u8D85\u51FA\u6700\u5927\u957F\u5EA6 [".concat(u,"/").concat(n.current.contacts.length,"]")),l.abrupt("return",n.current.contacts[u-1]);case 11:if(!d){l.next=2;break}case 12:return l.abrupt("return",d);case 13:case"end":return l.stop()}},o)}));return function(o){return f.apply(this,arguments)}}(),[G]);(0,i.useEffect)(function(){t.current.setMaxListeners(1e3)},[]),(0,i.useEffect)(function(){if(n.current.token!==a&&(n.current.token=a,n.current.pagination=h()({},Y),n.current.contacts.length=0,n.current.page=1),!a)return J();B({variables:{filter:{token:a},page:n.current.page}})},[B,a]),(0,i.useEffect)(function(){O||!(b!=null&&b.contacts)||(n.current.pagination=h()({},b.contacts)||n.current.pagination,_(b.contacts),J())},[_,b==null?void 0:b.contacts,O]);var be=function(o){var u=(0,i.useReducer)(function(w){return w+1},0),d=W()(u,2),s=d[1],l=(0,i.useRef)({index:o});l.current.index=o,l.current.contact=n.current.contacts[o],(0,i.useEffect)(function(){if(o!==-1){var w=o+1,z,ee=function(){var ye=k()(v()().mark(function ne(){return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(!n.current.loading){y.next=5;break}return y.next=3,(0,T._v)(300);case 3:y.next=0;break;case 5:if(!l.current.contact){y.next=8;break}return l.current.timer&&clearTimeout(l.current.timer),y.abrupt("return");case 8:G(Math.ceil(w/n.current.pagination.pageSize)),z=setTimeout(ee,300);case 10:case"end":return y.stop()}},ne)}));return function(){return ye.apply(this,arguments)}}();return z=setTimeout(ee,300),function(){z&&clearTimeout(z)}}},[o]);var C=(0,i.useCallback)(function(){var w=n.current.contacts[l.current.index];w!==l.current.contact&&(l.current.contact=w,s())},[]);return(0,i.useEffect)(function(){return t.current.addListener("updates",C),function(){t.current.removeListener("updates",C)}},[C]),l.current.contact};return[n.current.pagination,O,be,{loadContact:xe,refetch:Z,refetchWithRemove:ge}]}},47294:function(ae,E,r){r.r(E);var D=r(62435),h=r(24561),j=r(46027),c=r(10811),p=r(75466),e=r(86074);function M(P){var N,S,A=P.match,Q=A.params.id,R=(0,p.yk)({fetchPolicy:"cache-and-network",variables:{id:Q}}),g=R.data,x=(0,D.useMemo)(function(){return(g==null?void 0:g.contact)||P.contact},[g==null?void 0:g.contact,P.contact]),m=(0,D.useCallback)(function(L){console.log("xxx",L)},[]);return(0,e.jsxs)(c.Card,{flush:!0,children:[(0,e.jsxs)(c.Card.Header,{className:"pt-7",children:[(0,e.jsxs)(c.Card.Title,{children:[(0,e.jsx)(j.ZP,{name:"Duotune/com005",className:"svg-icon-1 me-2"}),(0,e.jsx)("h2",{children:"\u8054\u7CFB\u4EBA\u8BE6\u60C5"})]}),(0,e.jsx)(c.Card.Toolbar,{className:"gap-3",children:(0,e.jsx)(c.Dropdown,{overlay:(0,e.jsxs)(c.Menu,{onClick:m,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,e.jsx)(c.Menu.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,e.jsx)(c.Menu.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",children:(0,e.jsx)(c.Button,{icon:(0,e.jsx)(j.ZP,{name:"Duotune/gen052",className:"svg-icon-2"}),size:"sm",variant:"light",activeColor:"light-primary"})})})]}),(0,e.jsx)(c.Card.Body,{className:" pt-5",children:x?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"d-flex gap-7 align-items-center",children:[(0,e.jsx)(c.Symbol.Avatar,{size:100,alt:x.name,shape:"circle",labelClassName:"fs-4x",src:"assets/media/avatars/300-6.jpg"}),(0,e.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,e.jsx)("h3",{className:"mb-0",children:x.name}),(0,e.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,e.jsx)(j.ZP,{name:"Duotune/com011",className:"svg-icon-2"}),(0,e.jsx)("a",{href:"#",className:"text-muted text-hover-primary",children:((N=x.email)===null||N===void 0?void 0:N.address)||"xx@kpmg.com"})]}),(0,e.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,e.jsx)(j.ZP,{name:"Duotune/elc003",className:"svg-icon-2"}),(0,e.jsx)("a",{href:"#",className:"text-muted text-hover-primary",children:(S=x.phone)===null||S===void 0?void 0:S.number})]})]})]}),(0,e.jsx)(c.Tabs,{className:"nav-line-tabs nav-line-tabs-2x fs-6 fw-bold mt-6 mb-8",children:(0,e.jsxs)(c.Tabs.TabPane,{tab:(0,e.jsxs)("a",{className:"nav-link text-active-primary pb-4",children:[(0,e.jsx)(j.ZP,{name:"Duotune/gen001",className:"svg-icon-4 me-1"}),"\u901A\u7528"]}),children:[(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Full Name"}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("span",{className:"fw-bolder fs-6 text-gray-800",children:"Max Smith"})})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Company"}),(0,e.jsx)("div",{className:"col-lg-8 fv-row",children:(0,e.jsx)("span",{className:"fw-bold text-gray-800 fs-6",children:"Keenthemes"})})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsxs)("label",{className:"col-lg-4 fw-bold text-muted",children:["Contact Phone",(0,e.jsx)("i",{className:"fas fa-exclamation-circle ms-1 fs-7","data-bs-toggle":"tooltip",title:"Phone number must be active"})]}),(0,e.jsxs)("div",{className:"col-lg-8 d-flex align-items-center",children:[(0,e.jsx)("span",{className:"fw-bolder fs-6 text-gray-800 me-2",children:"044 3276 454 935"}),(0,e.jsx)("span",{className:"badge badge-success",children:"Verified"})]})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Company Site"}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("a",{href:"#",className:"fw-bold fs-6 text-gray-800 text-hover-primary",children:"keenthemes.com"})})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsxs)("label",{className:"col-lg-4 fw-bold text-muted",children:["Country",(0,e.jsx)("i",{className:"fas fa-exclamation-circle ms-1 fs-7",title:"Country of origination"})]}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("span",{className:"fw-bolder fs-6 text-gray-800",children:"Germany"})})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Communication"}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("span",{className:"fw-bolder fs-6 text-gray-800",children:"Email, Phone"})})]}),(0,e.jsxs)("div",{className:"row mb-10",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Allow Changes"}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("span",{className:"fw-bold fs-6 text-gray-800",children:"Yes"})})]})]},"General")})]}):(0,e.jsxs)(h.ZP,{speed:2,width:"100%",height:500,viewBox:"0 0 870 500",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,e.jsx)("circle",{cx:"50",cy:"50",r:"50"}),(0,e.jsx)("rect",{x:"120",y:"30",rx:"6",ry:"6",width:"120",height:"12"}),(0,e.jsx)("rect",{x:"120",y:"60",rx:"2",ry:"2",width:"150",height:"6"}),(0,e.jsx)("rect",{x:"120",y:"76",rx:"2",ry:"2",width:"100",height:"6"}),(0,e.jsx)("rect",{x:"0",y:"136",rx:"3",ry:"3",width:"410",height:"6"}),(0,e.jsx)("rect",{x:"0",y:"152",rx:"3",ry:"3",width:"380",height:"6"}),(0,e.jsx)("rect",{x:"0",y:"168",rx:"3",ry:"3",width:"178",height:"6"})]})})]})}E.default=M}}]);
