"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2457],{51333:function(E,p,t){t.d(p,{yk:function(){return A},A:function(){return w},LJ:function(){return _},Kn:function(){return O}});var x=t(97857),c=t.n(x),j=t(68400),l=t.n(j),o=t(75063),r=t(37887),v,e,g,d,m,u,h,y,s={},i=(0,o.Ps)(v||(v=l()([`
    fragment PhoneParts on Phone {
  status
  number
}
    `]))),f=(0,o.Ps)(e||(e=l()([`
    fragment EmailParts on Email {
  status
  address
}
    `]))),b=(0,o.Ps)(g||(g=l()([`
    fragment AddressParts on Address {
  country
  province
  city
  district
  street
  postalCode
}
    `]))),S=(0,o.Ps)(d||(d=l()([`
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
`,""])),i,f,b),C=(0,o.Ps)(m||(m=l()([`
    query myContacts {
  result: myContacts {
    id
    name
    groups {
      id
      name
      namespace
    }
  }
}
    `])));function _(n){var a=c()(c()({},s),n);return r.a(C,a)}function M(n){var a=_objectSpread(_objectSpread({},s),n);return Apollo.useLazyQuery(C,a)}function Q(n){var a=_objectSpread(_objectSpread({},s),n);return Apollo.useSuspenseQuery(C,a)}var P=(0,o.Ps)(u||(u=l()([`
    query orgContacts {
  result: orgContacts {
    id
    name
    namespaces {
      id
      name
    }
    groups {
      id
      name
      namespace
    }
  }
}
    `])));function O(n){var a=c()(c()({},s),n);return r.a(P,a)}function L(n){var a=_objectSpread(_objectSpread({},s),n);return Apollo.useLazyQuery(P,a)}function I(n){var a=_objectSpread(_objectSpread({},s),n);return Apollo.useSuspenseQuery(P,a)}var N=(0,o.Ps)(h||(h=l()([`
    query contacts($id: ID!, $group: ID!) {
  result: contacts(id: $id) {
    id
    name
    group(groupId: $group) {
      id
      name
      namespace
    }
    contacts(groupId: $group) {
      id
      name
      title
      sex
      avatar
    }
  }
}
    `])));function w(n){var a=c()(c()({},s),n);return r.a(N,a)}function T(n){var a=_objectSpread(_objectSpread({},s),n);return Apollo.useLazyQuery(N,a)}function B(n){var a=_objectSpread(_objectSpread({},s),n);return Apollo.useSuspenseQuery(N,a)}var D=(0,o.Ps)(y||(y=l()([`
    query contact($id: ID!) {
  contact(id: $id) {
    id
    ...ContactParts
  }
}
    `,""])),S);function A(n){var a=c()(c()({},s),n);return r.a(D,a)}function z(n){var a=_objectSpread(_objectSpread({},s),n);return Apollo.useLazyQuery(D,a)}function K(n){var a=_objectSpread(_objectSpread({},s),n);return Apollo.useSuspenseQuery(D,a)}},12457:function(E,p,t){t.r(p);var x=t(67294),c=t(24561),j=t(96974),l=t(46027),o=t(73588),r=t(89717),v=t(51333),e=t(85893);function g(){var d,m,u=(0,j.bS)({path:"/contacts/:group/:cid",end:!1}),h=(0,j.bx)(),y=(0,v.yk)({fetchPolicy:"cache-and-network",variables:{id:u==null?void 0:u.params.cid}}),s=y.data,i=(0,x.useMemo)(function(){return(s==null?void 0:s.contact)||h.contact},[s==null?void 0:s.contact,h.contact]),f=(0,x.useCallback)(function(b){console.log("xxx",b)},[]);return(0,e.jsx)(o.vs,{style:{paddingLeft:0},footer:!1,breadcrumb:(0,e.jsx)(x.Fragment,{}),header:{title:"\u8054\u7CFB\u4EBA\u8BE6\u60C5"},children:(0,e.jsxs)(r.Card,{flush:!0,className:"w-100",children:[(0,e.jsx)(r.Card.Header,{className:"pt-7",children:(0,e.jsx)(r.Card.Toolbar,{className:"gap-3",children:(0,e.jsx)(r.Dropdown,{overlay:(0,e.jsxs)(r.Menu,{onClick:f,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,e.jsx)(r.Menu.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,e.jsx)(r.Menu.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",children:(0,e.jsx)(r.Button,{icon:(0,e.jsx)(l.ZP,{name:"Duotune/gen052",className:"svg-icon-2"}),size:"sm",variant:"light",activeColor:"light-primary"})})})}),(0,e.jsx)(r.Card.Body,{className:" pt-5",children:i?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"d-flex gap-7 align-items-center",children:[(0,e.jsx)(r.Symbol.Avatar,{size:100,alt:i.name,shape:"circle",labelClassName:"fs-4x",src:"assets/media/avatars/300-6.jpg"}),(0,e.jsxs)("div",{className:"d-flex flex-column gap-2",children:[(0,e.jsx)("h3",{className:"mb-0",children:i.name}),(0,e.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,e.jsx)(l.ZP,{name:"Duotune/com011",className:"svg-icon-2"}),(0,e.jsx)("a",{href:"#",className:"text-muted text-hover-primary",children:((d=i.email)===null||d===void 0?void 0:d.address)||"xx@kpmg.com"})]}),(0,e.jsxs)("div",{className:"d-flex align-items-center gap-2",children:[(0,e.jsx)(l.ZP,{name:"Duotune/elc003",className:"svg-icon-2"}),(0,e.jsx)("a",{href:"#",className:"text-muted text-hover-primary",children:(m=i.phone)===null||m===void 0?void 0:m.number})]})]})]}),(0,e.jsx)(r.Tabs,{className:"nav-line-tabs nav-line-tabs-2x fs-6 fw-bold mt-6 mb-8",children:(0,e.jsxs)(r.Tabs.TabPane,{tab:(0,e.jsxs)("a",{className:"nav-link text-active-primary pb-4",children:[(0,e.jsx)(l.ZP,{name:"Duotune/gen001",className:"svg-icon-4 me-1"}),"\u901A\u7528"]}),children:[(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Full Name"}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("span",{className:"fw-bolder fs-6 text-gray-800",children:"Max Smith"})})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Company"}),(0,e.jsx)("div",{className:"col-lg-8 fv-row",children:(0,e.jsx)("span",{className:"fw-bold text-gray-800 fs-6",children:"Keenthemes"})})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsxs)("label",{className:"col-lg-4 fw-bold text-muted",children:["Contact Phone",(0,e.jsx)("i",{className:"fas fa-exclamation-circle ms-1 fs-7","data-bs-toggle":"tooltip",title:"Phone number must be active"})]}),(0,e.jsxs)("div",{className:"col-lg-8 d-flex align-items-center",children:[(0,e.jsx)("span",{className:"fw-bolder fs-6 text-gray-800 me-2",children:"044 3276 454 935"}),(0,e.jsx)("span",{className:"badge badge-success",children:"Verified"})]})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Company Site"}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("a",{href:"#",className:"fw-bold fs-6 text-gray-800 text-hover-primary",children:"keenthemes.com"})})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsxs)("label",{className:"col-lg-4 fw-bold text-muted",children:["Country",(0,e.jsx)("i",{className:"fas fa-exclamation-circle ms-1 fs-7",title:"Country of origination"})]}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("span",{className:"fw-bolder fs-6 text-gray-800",children:"Germany"})})]}),(0,e.jsxs)("div",{className:"row mb-7",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Communication"}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("span",{className:"fw-bolder fs-6 text-gray-800",children:"Email, Phone"})})]}),(0,e.jsxs)("div",{className:"row mb-10",children:[(0,e.jsx)("label",{className:"col-lg-4 fw-bold text-muted",children:"Allow Changes"}),(0,e.jsx)("div",{className:"col-lg-8",children:(0,e.jsx)("span",{className:"fw-bold fs-6 text-gray-800",children:"Yes"})})]})]},"General")})]}):(0,e.jsxs)(c.ZP,{speed:2,width:"100%",height:500,viewBox:"0 0 870 500",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,e.jsx)("circle",{cx:"50",cy:"50",r:"50"}),(0,e.jsx)("rect",{x:"120",y:"30",rx:"6",ry:"6",width:"120",height:"12"}),(0,e.jsx)("rect",{x:"120",y:"60",rx:"2",ry:"2",width:"150",height:"6"}),(0,e.jsx)("rect",{x:"120",y:"76",rx:"2",ry:"2",width:"100",height:"6"}),(0,e.jsx)("rect",{x:"0",y:"136",rx:"3",ry:"3",width:"410",height:"6"}),(0,e.jsx)("rect",{x:"0",y:"152",rx:"3",ry:"3",width:"380",height:"6"}),(0,e.jsx)("rect",{x:"0",y:"168",rx:"3",ry:"3",width:"178",height:"6"})]})})]})})}p.default=g}}]);
