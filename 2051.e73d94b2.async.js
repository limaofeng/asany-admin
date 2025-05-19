"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2051,267],{51253:function(G,O,e){e.d(O,{GP:function(){return r.Z},Hk:function(){return _},xx:function(){return S.x}});var W=e(74958),r=e(5166),S=e(19260),l=e(68400),c=e.n(l),d=e(67294),N=e(93967),y=e.n(N),L=e(94589),u=e(97857),f=e.n(u),t=e(46027),I=e(35908),E=e(42687),s=e(89717),h=e(5574),C=e.n(h),D=e(96486),i=e(85893),p={aside:{minimize:!1,width:280}},j=d.createContext({state:p,dispatch:function(){}}),g=function(n){return n.AsideToggle="ASIDE_TOGGLE",n.AsideWidth="ASIDE_WIDTH",n}({});function A(n,a){switch(a.type){case"ASIDE_TOGGLE":return n.aside.minimize=!n.aside.minimize,f()({},n);case"ASIDE_WIDTH":return n.aside.width=a.payload,f()({},n);default:throw new Error}}var m=function(a){var v=(0,d.useReducer)(A,(0,D.cloneDeep)(p)),x=C()(v,2),P=x[0],T=x[1];return(0,i.jsx)(j.Provider,{value:{state:P,dispatch:T},children:a.children})},M=function(){return(0,d.useContext)(j)},o=e(65495);function b(n){var a=M(),v=a.dispatch,x=a.state.aside.minimize,P=(0,d.useCallback)(function(){v({type:g.AsideToggle})},[v]);return(0,i.jsx)(s.Button,{style:f()({marginBottom:"1.35rem",zIndex:105},n.style),onClick:P,activeColor:"primary",className:y()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",n.className,{active:x}),children:(0,i.jsx)(t.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}var Q={"drawer drawer-start":{maxWidth:992}};function K(n){var a=n.className,v=n.header,x=n.children,P=n.collapsible,T=P===void 0?!0:P,R=n.width,B=R===void 0?280:R,U=(0,E.$Y)(),J=M(),H=J.dispatch;(0,d.useEffect)(function(){U.aside.width(B+100),H({type:g.AsideWidth,payload:B})},[U.aside,H,B]);var Y=(0,I.CN)(Q),V=(0,E.BK)(function(X){return X.aside.drawer});return(0,i.jsxs)("div",{className:y()("app-aside aside",a,Y,{"drawer-on":V}),children:[(0,i.jsx)(o.Z,{children:(0,i.jsx)(r.Z,{header:v,resizeable:!0,className:"app-sidebar",children:x})}),T&&(0,i.jsx)(b,{className:"start-100 end-0"})]})}K.Toggle=b;var Z=K,$,z=L.ZP.div($||($=c()([`
  --root-aside-width: `,`;
  --met-aside-width: `,`;
`])),function(n){return n.minimize?"100px":"".concat(n.width,"px")},function(n){return n.minimize?"100px":"".concat(n.width,"px")});function F(n){var a=n.children,v=n.className,x=M(),P=x.state.aside,T=P.minimize,R=P.width,B=(0,d.useCallback)(function(U){U.preventDefault()},[]);return(0,i.jsx)(z,{minimize:T,width:R,className:y()("micro-app-container page-full-content",v,{"aside-minimize":T}),onContextMenu:B,children:a})}function w(n){var a=n.children,v=n.className;return(0,i.jsx)(m,{children:(0,i.jsx)(F,{className:v,children:a})})}w.Sidebar=Z;var _=w},71366:function(G,O,e){e.r(O);var W=e(9783),r=e.n(W),S=e(67294),l=e(96974),c=e(46027),d=e(12845),N=e(93967),y=e.n(N),L=e(51253),u=e(89717),f=e(51333),t=e(85893),I={myContacts:function(h){var C=r()(r()(r()({},"my-friends",{color:"primary",icon:"Bootstrap/person-fill",bgColor:"light-primary"}),"new-friends",{color:"warning",icon:"Bootstrap/person-fill-add",bgColor:"light-warning"}),"my-groups",{color:"primary",icon:"Bootstrap/people-fill",bgColor:"light-primary"});return C.hasOwnProperty(h)?C[h]:C["my-friends"]}};function E(){var s=(0,l.s0)(),h=(0,d.useModel)("contacts",function(o){return o.setContacts}),C=(0,f.LJ)({fetchPolicy:"cache-and-network"}),D=C.data,i=(0,f.Kn)({fetchPolicy:"cache-and-network"}),p=i.data,j=(0,l.bS)({path:"/contacts/:group",end:!1}),g=(j==null?void 0:j.params.group)||"my-friends",A=D==null?void 0:D.result,m=p==null?void 0:p.result;(0,S.useEffect)(function(){g.startsWith("org-")?h(m,g):h(A,g)},[A,m,g]);var M=(0,S.useCallback)(function(o){console.log("handleSelect",o.key,o),s("/contacts/".concat(o.key))},[]);return(0,t.jsxs)(L.GP,{width:280,className:"app-sidebar app-contacts-sidebar",children:[(0,t.jsx)("div",{className:"mt-5 px-5 pt-5",children:(0,t.jsx)("h1",{className:"text-gray-800 fw-bold mb-6 mx-5",children:"\u901A\u8BAF\u5F55"})}),(0,t.jsx)("div",{className:"app-sidebar-body flex-column-fluid d-flex flex-column px-4",children:(0,t.jsxs)(u.Menu,{className:"menu-title-gray-800 menu-state-bg menu-state-primary menu-state-icon-primary menu-state-bullet-primary",accordion:!1,rounded:!0,selectable:"AllMenu",onSelect:M,selectedKeys:[g],children:[A==null?void 0:A.groups.map(function(o){var b=I.myContacts(o.namespace);return(0,t.jsx)(u.Menu.Item,{titleClassName:"fw-medium",iconClassName:y()("rounded-1 p-1 w-auto","bg-"+b.bgColor),linkClassName:"py-2",icon:(0,t.jsx)(c.ZP,{className:y()("svg-icon-2x","text-"+b.color),name:b.icon}),children:o.name},o.id)}),m&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.Menu.Section,{contentClassName:"pb-0",children:"\u4F01\u4E1A\u5185"}),(0,t.jsx)(u.Menu.Item,{titleClassName:"fw-medium",iconClassName:"w-auto",linkClassName:"py-2",icon:(0,t.jsx)(u.Symbol.Image,{size:35,className:"cursor-pointer",alt:"\u7FA4"}),title:m.name},"org-info"),m.groups.map(function(o){return(0,t.jsx)(u.Menu.Item,{titleClassName:"fw-medium",iconClassName:"p-1 w-auto",linkClassName:"py-2",icon:(0,t.jsx)(c.ZP,{className:"text-muted",name:"Bootstrap/arrow-return-right"}),title:o.name},o.id)})]})]})})]})}O.default=E},51333:function(G,O,e){e.d(O,{yk:function(){return F},A:function(){return K},LJ:function(){return j},Kn:function(){return M}});var W=e(97857),r=e.n(W),S=e(68400),l=e.n(S),c=e(75063),d=e(37887),N,y,L,u,f,t,I,E,s={},h=(0,c.Ps)(N||(N=l()([`
    fragment PhoneParts on Phone {
  status
  number
}
    `]))),C=(0,c.Ps)(y||(y=l()([`
    fragment EmailParts on Email {
  status
  address
}
    `]))),D=(0,c.Ps)(L||(L=l()([`
    fragment AddressParts on Address {
  country
  province
  city
  district
  street
  postalCode
}
    `]))),i=(0,c.Ps)(u||(u=l()([`
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
`,""])),h,C,D),p=(0,c.Ps)(f||(f=l()([`
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
    `])));function j(n){var a=r()(r()({},s),n);return d.a(p,a)}function g(n){var a=_objectSpread(_objectSpread({},s),n);return Apollo.useLazyQuery(p,a)}function A(n){var a=_objectSpread(_objectSpread({},s),n);return Apollo.useSuspenseQuery(p,a)}var m=(0,c.Ps)(t||(t=l()([`
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
    `])));function M(n){var a=r()(r()({},s),n);return d.a(m,a)}function o(n){var a=_objectSpread(_objectSpread({},s),n);return Apollo.useLazyQuery(m,a)}function b(n){var a=_objectSpread(_objectSpread({},s),n);return Apollo.useSuspenseQuery(m,a)}var Q=(0,c.Ps)(I||(I=l()([`
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
    `])));function K(n){var a=r()(r()({},s),n);return d.a(Q,a)}function Z(n){var a=_objectSpread(_objectSpread({},s),n);return Apollo.useLazyQuery(Q,a)}function $(n){var a=_objectSpread(_objectSpread({},s),n);return Apollo.useSuspenseQuery(Q,a)}var z=(0,c.Ps)(E||(E=l()([`
    query contact($id: ID!) {
  contact(id: $id) {
    id
    ...ContactParts
  }
}
    `,""])),i);function F(n){var a=r()(r()({},s),n);return d.a(z,a)}function w(n){var a=_objectSpread(_objectSpread({},s),n);return Apollo.useLazyQuery(z,a)}function _(n){var a=_objectSpread(_objectSpread({},s),n);return Apollo.useSuspenseQuery(z,a)}}}]);
