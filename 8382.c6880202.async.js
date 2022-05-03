(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[8382],{15459:function(re,Z,r){"use strict";r.d(Z,{N2:function(){return oe},jV:function(){return le},yk:function(){return ie},gW:function(){return O},KK:function(){return J}});var p=r(3182),g=r(2824),m=r(11849),L=r(94043),a=r.n(L),e=r(67294),z=r(17187),w=r.n(z),x=r(19228),N={totalCount:0,pageSize:0,totalPage:0,currentPage:0};function O(s){var o=(0,e.useRef)(new(w())),n=(0,e.useRef)({page:1,token:s,loading:!1,contacts:[],pagination:(0,m.Z)({},N)}),ue=(0,e.useReducer)(function(d){return d+1},0),de=(0,g.Z)(ue,2),q=de[1],me=J({fetchPolicy:"cache-and-network"}),_=(0,g.Z)(me,2),A=_[0],Q=_[1],y=Q.data,R=Q.loading,ee=Q.refetch;n.current.loading=R;var ne=(0,e.useCallback)(function(d){d.edges.map(function(c){return c.node}).forEach(function(c,i){var u=d.pageSize*(d.currentPage-1)+i;n.current.contacts[u]=c}),o.current.emit("updates")},[]),B=(0,e.useCallback)(function(){var d=(0,p.Z)(a().mark(function c(i){return a().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n.current.loading&&n.current.page==i)){t.next=2;break}return t.abrupt("return");case 2:if(!n.current.loading){t.next=7;break}return t.next=5,(0,x._v)(120);case 5:t.next=2;break;case 7:n.current.page=i;debugger;ee({filter:{token:n.current.token},page:n.current.page});case 10:case"end":return t.stop()}},c)}));return function(c){return d.apply(this,arguments)}}(),[ee]),fe=(0,e.useCallback)(function(){var d=(0,p.Z)(a().mark(function c(i){var u,t;return a().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:u=n.current.pagination.pageSize,n.current.pagination.totalCount%n.current.pagination.pageSize==1&&n.current.pagination.totalPage--,n.current.pagination.totalCount--,n.current.contacts.splice(i,1),t=Math.ceil((i+1)/u),B(t);case 6:case"end":return C.stop()}},c)}));return function(c){return d.apply(this,arguments)}}(),[B]),M=(0,e.useCallback)(function(){var d=(0,p.Z)(a().mark(function c(i){return a().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.current.loading){t.next=5;break}return t.next=3,(0,x._v)(120);case 3:t.next=0;break;case 5:if(!(n.current.page==i||i>n.current.pagination.totalPage)){t.next=7;break}return t.abrupt("return");case 7:n.current.page=i,A({variables:{filter:{token:n.current.token},page:n.current.page}});case 9:case"end":return t.stop()}},c)}));return function(c){return d.apply(this,arguments)}}(),[A]),he=(0,e.useCallback)(function(){var d=(0,p.Z)(a().mark(function c(i){var u;return a().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(u=n.current.contacts[i],u){l.next=12;break}case 2:if(u=n.current.contacts[i],u){l.next=8;break}return l.next=6,M(Math.ceil((i+1)/n.current.pagination.pageSize));case 6:return l.next=8,(0,x._v)(30);case 8:if(!(i>=n.current.contacts.length)){l.next=11;break}return console.log("\u7D22\u5F15\u8D85\u51FA\u6700\u5927\u957F\u5EA6 [".concat(i,"/").concat(n.current.contacts.length,"]")),l.abrupt("return",n.current.contacts[i-1]);case 11:if(!u){l.next=2;break}case 12:return l.abrupt("return",u);case 13:case"end":return l.stop()}},c)}));return function(c){return d.apply(this,arguments)}}(),[M]);(0,e.useEffect)(function(){o.current.setMaxListeners(1e3)},[]),(0,e.useEffect)(function(){if(n.current.token!=s&&(n.current.token=s,n.current.pagination=(0,m.Z)({},N),n.current.contacts.length=0,n.current.page=1),!s)return q();A({variables:{filter:{token:s},page:n.current.page}})},[A,s]),(0,e.useEffect)(function(){R||!(y!=null&&y.contacts)||(n.current.pagination=(0,m.Z)({},y.contacts)||n.current.pagination,ne(y.contacts),q())},[ne,y==null?void 0:y.contacts,R]);var ve=function(c){var i=(0,e.useReducer)(function(k){return k+1},0),u=(0,g.Z)(i,2),t=u[1],l=(0,e.useRef)({index:c});l.current.index=c,l.current.contact=n.current.contacts[c],(0,e.useEffect)(function(){if(c!=-1){var k=c+1,S,ae=function(){var ge=(0,p.Z)(a().mark(function te(){return a().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:if(!n.current.loading){j.next=5;break}return j.next=3,(0,x._v)(300);case 3:j.next=0;break;case 5:if(!l.current.contact){j.next=8;break}return l.current.timer&&clearTimeout(l.current.timer),j.abrupt("return");case 8:M(Math.ceil(k/n.current.pagination.pageSize)),S=setTimeout(ae,300);case 10:case"end":return j.stop()}},te)}));return function(){return ge.apply(this,arguments)}}();return S=setTimeout(ae,300),function(){S&&clearTimeout(S)}}},[c]);var C=(0,e.useCallback)(function(){var k=n.current.contacts[l.current.index];k!=l.current.contact&&(l.current.contact=k,t())},[]);return(0,e.useEffect)(function(){return o.current.addListener("updates",C),function(){o.current.removeListener("updates",C)}},[C]),l.current.contact};return[n.current.pagination,R,ve,{loadContact:he,refetch:B,refetchWithRemove:fe}]}var f=r(20310),h=r(49704),v=r(93633),P=r(38460),E,D,T,$,F,I,U,K,b={},W=(0,h.Ps)(E||(E=(0,f.Z)([`
    fragment PhoneParts on Phone {
  status
  number
}
    `]))),G=(0,h.Ps)(D||(D=(0,f.Z)([`
    fragment EmailParts on Email {
  status
  address
}
    `]))),se=(0,h.Ps)(T||(T=(0,f.Z)([`
    fragment AddressParts on Address {
  country
  province
  city
  district
  street
  postalCode
}
    `]))),ce=(0,h.Ps)($||($=(0,f.Z)([`
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
`,""])),W,G,se),V=(0,h.Ps)(F||(F=(0,f.Z)([`
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
    `])));function le(s){var o=(0,m.Z)((0,m.Z)({},b),s);return v.a(V,o)}function pe(s){var o=_objectSpread(_objectSpread({},b),s);return Apollo.useLazyQuery(V,o)}var H=(0,h.Ps)(I||(I=(0,f.Z)([`
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
    `])));function oe(s){var o=(0,m.Z)((0,m.Z)({},b),s);return v.a(H,o)}function xe(s){var o=_objectSpread(_objectSpread({},b),s);return Apollo.useLazyQuery(H,o)}var Y=(0,h.Ps)(U||(U=(0,f.Z)([`
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
`,""])),G,W);function be(s){var o=_objectSpread(_objectSpread({},b),s);return Apollo.useQuery(Y,o)}function J(s){var o=(0,m.Z)((0,m.Z)({},b),s);return P.t(Y,o)}var X=(0,h.Ps)(K||(K=(0,f.Z)([`
    query contact($id: ID!) {
  contact(id: $id) {
    id
    ...ContactParts
  }
}
    `,""])),ce);function ie(s){var o=(0,m.Z)((0,m.Z)({},b),s);return v.a(X,o)}function ye(s){var o=_objectSpread(_objectSpread({},b),s);return Apollo.useLazyQuery(X,o)}},68382:function(re,Z,r){"use strict";r.r(Z);var p=r(67294),g=r(28865),m=r(24561),L=r(15459),a=r(69851),e=r(85893);function z(w){var x,N,O=w.match,f=O.params.id,h=(0,L.yk)({fetchPolicy:"cache-and-network",variables:{id:f}}),v=h.data,P=(0,p.useMemo)(function(){return(v==null?void 0:v.contact)||w.contact},[v==null?void 0:v.contact,w.contact]),E=(0,p.useCallback)(function(D){console.log("xxx",D)},[]);return(0,e.jsxs)(a.Zb,{flush:!0,children:[(0,e.jsxs)(a.Zb.Header,{className:"pt-7",children:[(0,e.jsxs)(a.Zb.Title,{children:[(0,e.jsx)(g.ZP,{name:"Duotune/com005",className:"svg-icon-1 me-2"}),(0,e.jsx)("h2",{children:"\u8054\u7CFB\u4EBA\u8BE6\u60C5"})]}),(0,e.jsx)(a.Zb.Toolbar,{className:"gap-3",children:(0,e.jsx)(a.Lt,{overlay:(0,e.jsxs)(a.v2,{onClick:E,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,e.jsx)(a.v2.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,e.jsx)(a.v2.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",children:(0,e.jsx)(a.zx,{icon:(0,e.jsx)(g.ZP,{name:"Duotune/gen052",className:"svg-icon-2"}),size:"sm",variant:"light",activeColor:"light-primary"})})})]}),(0,e.jsx)(a.Zb.Body,{className:" pt-5",children:P?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"d-flex gap-7 align-items-center",children:[(0,e.jsx)(a.mN.Avatar,{size:100,alt:P.name,shape:"circle",labelClassName:"fs-4x",src:"assets/media/avatars/300-6.jpg"}),(0,e.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,e.jsx)("h3",{className:"mb-0",children:P.name}),(0,e.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,e.jsx)(g.ZP,{name:"Duotune/com011",className:"svg-icon-2"}),(0,e.jsx)("a",{href:"#",className:"text-muted text-hover-primary",children:((x=P.email)===null||x===void 0?void 0:x.address)||"xx@kpmg.com"})]}),(0,e.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,e.jsx)(g.ZP,{name:"Duotune/elc003",className:"svg-icon-2"}),(0,e.jsx)("a",{href:"#",className:"text-muted text-hover-primary",children:(N=P.phone)===null||N===void 0?void 0:N.number})]})]})]}),(0,e.jsx)(a.mQ,{className:"nav-line-tabs nav-line-tabs-2x fs-6 fw-bold mt-6 mb-8",children:(0,e.jsxs)(a.mQ.TabPane,{tab:(0,e.jsxs)("a",{className:"nav-link text-active-primary pb-4",children:[(0,e.jsx)(g.ZP,{name:"Duotune/gen001",className:"svg-icon-4 me-1"}),"\u901A\u7528"]}),children:[(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Full Name"}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("span",{className:"fw-bolder fs-6 text-gray-800",children:"Max Smith"})})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Company"}),(0,e.jsx)("div",{className:"col-lg-8 fv-row",children:(0,e.jsx)("span",{className:"fw-bold text-gray-800 fs-6",children:"Keenthemes"})})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsxs)("label",{className:"col-lg-4 fw-bold text-muted",children:["Contact Phone",(0,e.jsx)("i",{className:"fas fa-exclamation-circle ms-1 fs-7","data-bs-toggle":"tooltip",title:"Phone number must be active"})]}),(0,e.jsxs)("div",{className:"col-lg-8 d-flex align-items-center",children:[(0,e.jsx)("span",{className:"fw-bolder fs-6 text-gray-800 me-2",children:"044 3276 454 935"}),(0,e.jsx)("span",{className:"badge badge-success",children:"Verified"})]})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Company Site"}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("a",{href:"#",className:"fw-bold fs-6 text-gray-800 text-hover-primary",children:"keenthemes.com"})})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsxs)("label",{className:"col-lg-4 fw-bold text-muted",children:["Country",(0,e.jsx)("i",{className:"fas fa-exclamation-circle ms-1 fs-7",title:"Country of origination"})]}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("span",{className:"fw-bolder fs-6 text-gray-800",children:"Germany"})})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Communication"}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("span",{className:"fw-bolder fs-6 text-gray-800",children:"Email, Phone"})})]}),(0,e.jsxs)("div",{className:"row mb-10",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Allow Changes"}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("span",{className:"fw-bold fs-6 text-gray-800",children:"Yes"})})]})]},"General")})]}):(0,e.jsxs)(m.ZP,{speed:2,width:"100%",height:500,viewBox:"0 0 870 500",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,e.jsx)("circle",{cx:"50",cy:"50",r:"50"}),(0,e.jsx)("rect",{x:"120",y:"30",rx:"6",ry:"6",width:"120",height:"12"}),(0,e.jsx)("rect",{x:"120",y:"60",rx:"2",ry:"2",width:"150",height:"6"}),(0,e.jsx)("rect",{x:"120",y:"76",rx:"2",ry:"2",width:"100",height:"6"}),(0,e.jsx)("rect",{x:"0",y:"136",rx:"3",ry:"3",width:"410",height:"6"}),(0,e.jsx)("rect",{x:"0",y:"152",rx:"3",ry:"3",width:"380",height:"6"}),(0,e.jsx)("rect",{x:"0",y:"168",rx:"3",ry:"3",width:"178",height:"6"})]})})]})}Z.default=z}}]);
