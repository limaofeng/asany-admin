"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7073],{51333:function(V,A,t){t.d(A,{yk:function(){return c},A:function(){return o},LJ:function(){return F},Kn:function(){return H}});var $=t(97857),m=t.n($),E=t(68400),v=t.n(E),f=t(75063),h=t(37887),i,b,N,Q,R,P,z,D,u={},L=(0,f.Ps)(i||(i=v()([`
    fragment PhoneParts on Phone {
  status
  number
}
    `]))),y=(0,f.Ps)(b||(b=v()([`
    fragment EmailParts on Email {
  status
  address
}
    `]))),n=(0,f.Ps)(N||(N=v()([`
    fragment AddressParts on Address {
  country
  province
  city
  district
  street
  postalCode
}
    `]))),w=(0,f.Ps)(Q||(Q=v()([`
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
`,""])),L,y,n),S=(0,f.Ps)(R||(R=v()([`
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
    `])));function F(a){var e=m()(m()({},u),a);return h.a(S,e)}function U(a){var e=_objectSpread(_objectSpread({},u),a);return Apollo.useLazyQuery(S,e)}function M(a){var e=_objectSpread(_objectSpread({},u),a);return Apollo.useSuspenseQuery(S,e)}var C=(0,f.Ps)(P||(P=v()([`
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
    `])));function H(a){var e=m()(m()({},u),a);return h.a(C,e)}function W(a){var e=_objectSpread(_objectSpread({},u),a);return Apollo.useLazyQuery(C,e)}function r(a){var e=_objectSpread(_objectSpread({},u),a);return Apollo.useSuspenseQuery(C,e)}var l=(0,f.Ps)(z||(z=v()([`
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
    `])));function o(a){var e=m()(m()({},u),a);return h.a(l,e)}function p(a){var e=_objectSpread(_objectSpread({},u),a);return Apollo.useLazyQuery(l,e)}function x(a){var e=_objectSpread(_objectSpread({},u),a);return Apollo.useSuspenseQuery(l,e)}var s=(0,f.Ps)(D||(D=v()([`
    query contact($id: ID!) {
  contact(id: $id) {
    id
    ...ContactParts
  }
}
    `,""])),w);function c(a){var e=m()(m()({},u),a);return h.a(s,e)}function j(a){var e=_objectSpread(_objectSpread({},u),a);return Apollo.useLazyQuery(s,e)}function T(a){var e=_objectSpread(_objectSpread({},u),a);return Apollo.useSuspenseQuery(s,e)}},27073:function(V,A,t){t.r(A),t.d(A,{default:function(){return W}});var $=t(15009),m=t.n($),E=t(99289),v=t.n(E),f=t(5574),h=t.n(f),i=t(67294),b=t(96974),N=t(35090),Q=t(12845),R=t(93967),P=t.n(R),z=t(96486),D=t(1861),u=t(24561),L=t(46027),y=t(89717),n=t(85893);function w(r){var l=r.index,o=r.useContact,p=r.style,x=r.active,s=r.onClick,c=o(l),j=(0,i.useCallback)(function(){s(l)},[s,l]);return(0,n.jsx)("div",{onClick:j,style:p,className:P()("contact-item d-flex flex-stack py-4 mb-1",{active:x}),children:c?(0,n.jsxs)("div",{className:"d-flex align-items-center",children:[(0,n.jsx)(y.Symbol.Avatar,{alt:c.name,src:"assets/media/avatars/300-6.jpg",size:40}),(0,n.jsxs)("div",{className:"ms-4",children:[(0,n.jsx)("a",{className:"fs-6 fw-bolder text-gray-900 text-hover-primary mb-2",children:c.name}),(0,n.jsx)("div",{className:"fw-bold fs-7 text-muted",children:"smith@kpmg.com"})]})]}):(0,n.jsxs)(u.ZP,{speed:2,width:240,height:40,viewBox:"0 0 240 40",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,n.jsx)("rect",{x:"52",y:"8",rx:"3",ry:"3",width:"52",height:"8"}),(0,n.jsx)("rect",{x:"52",y:"26",rx:"3",ry:"3",width:"88",height:"8"}),(0,n.jsx)("circle",{cx:"20",cy:"20",r:"20"})]})})}function S(r){var l=r.group,o=r.data,p=r.useContact,x=r.loading,s=r.onItemClick,c=r.activeIndex,j=r.onScrollToIndex,T=(0,i.useCallback)(function(e){var g=e.key,B=e.style,Z=e.index,G=e.isActive;return(0,n.jsx)(w,{style:B,index:Z,onClick:s,useContact:p,active:!!G},g)},[s,p]),a=(0,i.useCallback)(function(){return(0,n.jsxs)("div",{className:"kt_contacts-is-empty infinite-scroll-no-rows",children:[(0,n.jsx)("img",{src:"/assets/media/illustrations/dozzy-1/4.png"}),(0,n.jsx)("span",{className:"empty-title",children:x?"\u52A0\u8F7D\u4E2D...":"\u6B64\u5206\u7EC4\u4E3A\u7A7A"}),(0,n.jsx)("span",{className:"empty-subtitle",children:x?"\u7A0D\u7B49\u4E00\u4F1A,\u6B63\u5728\u83B7\u53D6\u6570\u636E":"\u8BF7\u67E5\u770B\u5176\u4ED6\u5206\u7EC4"})]})},[x]);return(0,n.jsxs)(y.Card,{className:"kt_contacts-card w-100 border-left-0 border-top-0 border-bottom-0",flush:!0,children:[(0,n.jsx)(y.Card.Header,{className:"px-4",children:(0,n.jsxs)("form",{className:"d-flex align-items-center position-relative w-100",autoComplete:"off",children:[(0,n.jsx)(L.ZP,{name:"Duotune/gen021",className:"svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-2 translate-middle-y"}),(0,n.jsx)(y.Input,{solid:!0,className:"px-10",placeholder:"\u641C\u7D22\u8054\u7CFB\u4EBA\u2026"})]})}),(0,n.jsxs)(y.Card.Body,{children:[(0,n.jsxs)("div",{className:"kt_contacts-list-header",children:[(0,n.jsx)(L.ZP,{className:"svg-icon-5 svg-icon-primary",name:"Duotune/com010"}),(0,n.jsx)("span",{className:"box-name",children:l==null?void 0:l.name})]}),(0,n.jsxs)("div",{className:"infinite-scroll-container",children:[(0,n.jsx)(y.NProgress,{isAnimating:!!x,position:"top"}),(0,n.jsx)(y.InfiniteScroll,{rowCount:o.length,rowHeight:66,scrollToIndex:c,onScrollToIndex:j,rowRenderer:T,noRowsRenderer:a,className:"kt_contacts-list"})]})]})]})}var F=S,U=t(51333),M=320,C=500;function H(){var r,l,o=(0,i.useRef)({width:M,items:[],activeIndex:-1}),p=(0,b.s0)(),x=(0,Q.useModel)("contacts",function(d){return d.state}),s=x.data,c=x.group,j=(0,i.useReducer)(function(d){return d+1},0),T=h()(j,2),a=T[1],e=(0,U.A)({fetchPolicy:"cache-and-network",variables:{id:s==null?void 0:s.id,group:c},skip:!(s!=null&&s.id)||!c}),g=e.data,B=e.loading;o.current.items=(g==null||(r=g.result)===null||r===void 0?void 0:r.contacts)||[];var Z=(0,i.useCallback)(function(d){return o.current.items[d]},[]),G=o.current.activeIndex,J=(0,i.useMemo)(function(){return(0,z.debounce)(function(){a()},10)},[]),Y=(0,i.useCallback)(function(d){o.current.width+=d,J()},[J]),q=(0,i.useCallback)(function(){o.current.width=Math.min(C,Math.max(M,o.current.width))},[]),_=(0,i.useCallback)(function(d){o.current.activeIndex=d;var O=o.current.items[d];a(),p("/contacts/".concat(c,"/").concat(O.id))},[c]),nn=(0,i.useCallback)(function(){var d=v()(m()().mark(function O(k){var X;return m()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:if(console.log("scroll to index",k),o.current.activeIndex!==k.index){I.next=3;break}return I.abrupt("return");case 3:o.current.activeIndex=k.index,a(),X=o.current.items[k.index],p("/contacts/".concat(c,"/").concat(X.id));case 7:case"end":return I.stop()}},O)}));return function(O){return d.apply(this,arguments)}}(),[p,c]),en=Math.min(C,Math.max(M,o.current.width)),K=(0,i.useMemo)(function(){if(!(!s||!c))return s.groups.find(function(d){return d.id===c})},[s,c]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(N.w_,{className:P()("d-flex flex-column flex-lg-row"),style:{width:en},onResize:Y,onResizeEnd:q,children:(0,n.jsx)(F,{group:K,loading:B,data:(g==null||(l=g.result)===null||l===void 0?void 0:l.contacts)||[],activeIndex:G,onScrollToIndex:nn,onItemClick:_,useContact:Z})}),(0,n.jsx)(D.E,{className:"col-xl-9 content-view-details custom-scrollbar",options:{scrollbars:{autoHide:"scroll"}},children:(0,n.jsx)(b.j3,{context:{contacts:s,group:K,contact:{}}})})]})}var W=H}}]);
