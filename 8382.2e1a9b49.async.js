(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[8382],{15459:function(ne,E,c){"use strict";c.d(E,{N2:function(){return re},jV:function(){return te},yk:function(){return se},gW:function(){return oe},KK:function(){return G}});var f=c(11849),h=c(20310),p=c(49704),k=c(64718),u=c(38460),e,D,P,C,N,A,R,S,d={},x=(0,p.Ps)(e||(e=(0,h.Z)([`
    fragment PhoneParts on Phone {
  status
  number
}
    `]))),L=(0,p.Ps)(D||(D=(0,h.Z)([`
    fragment EmailParts on Email {
  status
  address
}
    `]))),M=(0,p.Ps)(P||(P=(0,h.Z)([`
    fragment AddressParts on Address {
  country
  province
  city
  district
  street
  postalCode
}
    `]))),ae=(0,p.Ps)(C||(C=(0,h.Z)([`
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
`,""])),x,L,M),U=(0,p.Ps)(N||(N=(0,h.Z)([`
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
    `])));function te(t){var l=(0,f.Z)((0,f.Z)({},d),t);return k.a(U,l)}function pe(t){var l=_objectSpread(_objectSpread({},d),t);return Apollo.useLazyQuery(U,l)}var K=(0,p.Ps)(A||(A=(0,h.Z)([`
    query book($id: ID!, $namespace: String) {
  book: contactBook(id: $id) {
    id
    name
    type
    namespaces {
      id
      name
    }
    groups(namespace: $namespace) {
      id
      name
      namespace
      path
      index
      parentId
    }
  }
}
    `])));function re(t){var l=(0,f.Z)((0,f.Z)({},d),t);return k.a(K,l)}function ge(t){var l=_objectSpread(_objectSpread({},d),t);return Apollo.useLazyQuery(K,l)}var W=(0,p.Ps)(R||(R=(0,h.Z)([`
    query contacts($filter: ContactFilter, $page: Int = 1) {
  contacts(filter: $filter, page: $page) {
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
`,""])),L,x);function xe(t){var l=_objectSpread(_objectSpread({},d),t);return Apollo.useQuery(W,l)}function G(t){var l=(0,f.Z)((0,f.Z)({},d),t);return u.t(W,l)}var V=(0,p.Ps)(S||(S=(0,h.Z)([`
    query contact($id: ID!) {
  contact(id: $id) {
    id
    ...ContactParts
  }
}
    `,""])),ae);function se(t){var l=(0,f.Z)((0,f.Z)({},d),t);return k.a(V,l)}function be(t){var l=_objectSpread(_objectSpread({},d),t);return Apollo.useLazyQuery(V,l)}var g=c(39428),w=c(3182),T=c(2824),i=c(67294),ce=c(17187),le=c.n(ce),z=c(25496),H={totalCount:0,pageSize:0,totalPage:0,currentPage:0};function oe(t){var l=(0,i.useRef)(new(le())),n=(0,i.useRef)({page:1,token:t,loading:!1,contacts:[],pagination:(0,f.Z)({},H)}),ie=(0,i.useReducer)(function(v){return v+1},0),ue=(0,T.Z)(ie,2),Y=ue[1],de=G({fetchPolicy:"cache-and-network"}),J=(0,T.Z)(de,2),O=J[0],$=J[1],b=$.data,Q=$.loading,X=$.refetch;n.current.loading=Q;var _=(0,i.useCallback)(function(v){v.edges.map(function(r){return r.node}).forEach(function(r,o){var m=v.pageSize*(v.currentPage-1)+o;n.current.contacts[m]=r}),l.current.emit("updates")},[]),F=(0,i.useCallback)(function(){var v=(0,w.Z)((0,g.Z)().mark(function r(o){return(0,g.Z)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!(n.current.loading&&n.current.page==o)){a.next=2;break}return a.abrupt("return");case 2:if(!n.current.loading){a.next=7;break}return a.next=5,(0,z._v)(120);case 5:a.next=2;break;case 7:n.current.page=o;debugger;X({filter:{token:n.current.token},page:n.current.page});case 10:case"end":return a.stop()}},r)}));return function(r){return v.apply(this,arguments)}}(),[X]),me=(0,i.useCallback)(function(){var v=(0,w.Z)((0,g.Z)().mark(function r(o){var m,a;return(0,g.Z)().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:m=n.current.pagination.pageSize,n.current.pagination.totalCount%n.current.pagination.pageSize==1&&n.current.pagination.totalPage--,n.current.pagination.totalCount--,n.current.contacts.splice(o,1),a=Math.ceil((o+1)/m),F(a);case 6:case"end":return j.stop()}},r)}));return function(r){return v.apply(this,arguments)}}(),[F]),I=(0,i.useCallback)(function(){var v=(0,w.Z)((0,g.Z)().mark(function r(o){return(0,g.Z)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!n.current.loading){a.next=5;break}return a.next=3,(0,z._v)(120);case 3:a.next=0;break;case 5:if(!(n.current.page==o||o>n.current.pagination.totalPage)){a.next=7;break}return a.abrupt("return");case 7:n.current.page=o,O({variables:{filter:{token:n.current.token},page:n.current.page}});case 9:case"end":return a.stop()}},r)}));return function(r){return v.apply(this,arguments)}}(),[O]),fe=(0,i.useCallback)(function(){var v=(0,w.Z)((0,g.Z)().mark(function r(o){var m;return(0,g.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(m=n.current.contacts[o],m){s.next=12;break}case 2:if(m=n.current.contacts[o],m){s.next=8;break}return s.next=6,I(Math.ceil((o+1)/n.current.pagination.pageSize));case 6:return s.next=8,(0,z._v)(30);case 8:if(!(o>=n.current.contacts.length)){s.next=11;break}return console.log("\u7D22\u5F15\u8D85\u51FA\u6700\u5927\u957F\u5EA6 [".concat(o,"/").concat(n.current.contacts.length,"]")),s.abrupt("return",n.current.contacts[o-1]);case 11:if(!m){s.next=2;break}case 12:return s.abrupt("return",m);case 13:case"end":return s.stop()}},r)}));return function(r){return v.apply(this,arguments)}}(),[I]);(0,i.useEffect)(function(){l.current.setMaxListeners(1e3)},[]),(0,i.useEffect)(function(){if(n.current.token!=t&&(n.current.token=t,n.current.pagination=(0,f.Z)({},H),n.current.contacts.length=0,n.current.page=1),!t)return Y();O({variables:{filter:{token:t},page:n.current.page}})},[O,t]),(0,i.useEffect)(function(){Q||!(b!=null&&b.contacts)||(n.current.pagination=(0,f.Z)({},b.contacts)||n.current.pagination,_(b.contacts),Y())},[_,b==null?void 0:b.contacts,Q]);var he=function(r){var o=(0,i.useReducer)(function(Z){return Z+1},0),m=(0,T.Z)(o,2),a=m[1],s=(0,i.useRef)({index:r});s.current.index=r,s.current.contact=n.current.contacts[r],(0,i.useEffect)(function(){if(r!=-1){var Z=r+1,B,q=function(){var ve=(0,w.Z)((0,g.Z)().mark(function ee(){return(0,g.Z)().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(!n.current.loading){y.next=5;break}return y.next=3,(0,z._v)(300);case 3:y.next=0;break;case 5:if(!s.current.contact){y.next=8;break}return s.current.timer&&clearTimeout(s.current.timer),y.abrupt("return");case 8:I(Math.ceil(Z/n.current.pagination.pageSize)),B=setTimeout(q,300);case 10:case"end":return y.stop()}},ee)}));return function(){return ve.apply(this,arguments)}}();return B=setTimeout(q,300),function(){B&&clearTimeout(B)}}},[r]);var j=(0,i.useCallback)(function(){var Z=n.current.contacts[s.current.index];Z!=s.current.contact&&(s.current.contact=Z,a())},[]);return(0,i.useEffect)(function(){return l.current.addListener("updates",j),function(){l.current.removeListener("updates",j)}},[j]),s.current.contact};return[n.current.pagination,Q,he,{loadContact:fe,refetch:F,refetchWithRemove:me}]}},68382:function(ne,E,c){"use strict";c.r(E);var f=c(67294),h=c(28865),p=c(24561),k=c(15459),u=c(38671),e=c(85893);function D(P){var C,N,A=P.match,R=A.params.id,S=(0,k.yk)({fetchPolicy:"cache-and-network",variables:{id:R}}),d=S.data,x=(0,f.useMemo)(function(){return(d==null?void 0:d.contact)||P.contact},[d==null?void 0:d.contact,P.contact]),L=(0,f.useCallback)(function(M){console.log("xxx",M)},[]);return(0,e.jsxs)(u.Zb,{flush:!0,children:[(0,e.jsxs)(u.Zb.Header,{className:"pt-7",children:[(0,e.jsxs)(u.Zb.Title,{children:[(0,e.jsx)(h.ZP,{name:"Duotune/com005",className:"svg-icon-1 me-2"}),(0,e.jsx)("h2",{children:"\u8054\u7CFB\u4EBA\u8BE6\u60C5"})]}),(0,e.jsx)(u.Zb.Toolbar,{className:"gap-3",children:(0,e.jsx)(u.Lt,{overlay:(0,e.jsxs)(u.v2,{onClick:L,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,e.jsx)(u.v2.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,e.jsx)(u.v2.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",children:(0,e.jsx)(u.zx,{icon:(0,e.jsx)(h.ZP,{name:"Duotune/gen052",className:"svg-icon-2"}),size:"sm",variant:"light",activeColor:"light-primary"})})})]}),(0,e.jsx)(u.Zb.Body,{className:" pt-5",children:x?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"d-flex gap-7 align-items-center",children:[(0,e.jsx)(u.mN.Avatar,{size:100,alt:x.name,shape:"circle",labelClassName:"fs-4x",src:"assets/media/avatars/300-6.jpg"}),(0,e.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,e.jsx)("h3",{className:"mb-0",children:x.name}),(0,e.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,e.jsx)(h.ZP,{name:"Duotune/com011",className:"svg-icon-2"}),(0,e.jsx)("a",{href:"#",className:"text-muted text-hover-primary",children:((C=x.email)===null||C===void 0?void 0:C.address)||"xx@kpmg.com"})]}),(0,e.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,e.jsx)(h.ZP,{name:"Duotune/elc003",className:"svg-icon-2"}),(0,e.jsx)("a",{href:"#",className:"text-muted text-hover-primary",children:(N=x.phone)===null||N===void 0?void 0:N.number})]})]})]}),(0,e.jsx)(u.mQ,{className:"nav-line-tabs nav-line-tabs-2x fs-6 fw-bold mt-6 mb-8",children:(0,e.jsxs)(u.mQ.TabPane,{tab:(0,e.jsxs)("a",{className:"nav-link text-active-primary pb-4",children:[(0,e.jsx)(h.ZP,{name:"Duotune/gen001",className:"svg-icon-4 me-1"}),"\u901A\u7528"]}),children:[(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Full Name"}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("span",{className:"fw-bolder fs-6 text-gray-800",children:"Max Smith"})})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Company"}),(0,e.jsx)("div",{className:"col-lg-8 fv-row",children:(0,e.jsx)("span",{className:"fw-bold text-gray-800 fs-6",children:"Keenthemes"})})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsxs)("label",{className:"col-lg-4 fw-bold text-muted",children:["Contact Phone",(0,e.jsx)("i",{className:"fas fa-exclamation-circle ms-1 fs-7","data-bs-toggle":"tooltip",title:"Phone number must be active"})]}),(0,e.jsxs)("div",{className:"col-lg-8 d-flex align-items-center",children:[(0,e.jsx)("span",{className:"fw-bolder fs-6 text-gray-800 me-2",children:"044 3276 454 935"}),(0,e.jsx)("span",{className:"badge badge-success",children:"Verified"})]})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Company Site"}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("a",{href:"#",className:"fw-bold fs-6 text-gray-800 text-hover-primary",children:"keenthemes.com"})})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsxs)("label",{className:"col-lg-4 fw-bold text-muted",children:["Country",(0,e.jsx)("i",{className:"fas fa-exclamation-circle ms-1 fs-7",title:"Country of origination"})]}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("span",{className:"fw-bolder fs-6 text-gray-800",children:"Germany"})})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Communication"}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("span",{className:"fw-bolder fs-6 text-gray-800",children:"Email, Phone"})})]}),(0,e.jsxs)("div",{className:"row mb-10",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Allow Changes"}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("span",{className:"fw-bold fs-6 text-gray-800",children:"Yes"})})]})]},"General")})]}):(0,e.jsxs)(p.ZP,{speed:2,width:"100%",height:500,viewBox:"0 0 870 500",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,e.jsx)("circle",{cx:"50",cy:"50",r:"50"}),(0,e.jsx)("rect",{x:"120",y:"30",rx:"6",ry:"6",width:"120",height:"12"}),(0,e.jsx)("rect",{x:"120",y:"60",rx:"2",ry:"2",width:"150",height:"6"}),(0,e.jsx)("rect",{x:"120",y:"76",rx:"2",ry:"2",width:"100",height:"6"}),(0,e.jsx)("rect",{x:"0",y:"136",rx:"3",ry:"3",width:"410",height:"6"}),(0,e.jsx)("rect",{x:"0",y:"152",rx:"3",ry:"3",width:"380",height:"6"}),(0,e.jsx)("rect",{x:"0",y:"168",rx:"3",ry:"3",width:"178",height:"6"})]})})]})}E.default=D}}]);
