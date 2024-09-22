"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9978,267],{51253:function(w,j,e){e.d(j,{GP:function(){return r.Z},Hk:function(){return J},xx:function(){return T.x}});var l=e(74958),r=e(5166),T=e(19260),d=e(68400),i=e.n(d),v=e(62435),u=e(93967),y=e.n(u),E=e(94589),I=e(97857),M=e.n(I),x=e(46027),m=e(35908),b=e(42687),f=e(79817),$=e(5574),D=e.n($),p=e(96486),s=e(86074),_={aside:{minimize:!1,width:280}},o=v.createContext({state:_,dispatch:function(){}}),P=function(a){return a.AsideToggle="ASIDE_TOGGLE",a.AsideWidth="ASIDE_WIDTH",a}({});function Q(a,c){switch(c.type){case"ASIDE_TOGGLE":return a.aside.minimize=!a.aside.minimize,M()({},a);case"ASIDE_WIDTH":return a.aside.width=c.payload,M()({},a);default:throw new Error}}var K=function(c){var h=(0,v.useReducer)(Q,(0,p.cloneDeep)(_)),S=D()(h,2),C=S[0],g=S[1];return(0,s.jsx)(o.Provider,{value:{state:C,dispatch:g},children:c.children})},z=function(){return(0,v.useContext)(o)},G=e(65495);function L(a){var c=z(),h=c.dispatch,S=c.state.aside.minimize,C=(0,v.useCallback)(function(){h({type:P.AsideToggle})},[h]);return(0,s.jsx)(f.Button,{style:M()({marginBottom:"1.35rem",zIndex:105},a.style),onClick:C,activeColor:"primary",className:y()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",a.className,{active:S}),children:(0,s.jsx)(x.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}var F={"drawer drawer-start":{maxWidth:992}};function W(a){var c=a.className,h=a.header,S=a.children,C=a.collapsible,g=C===void 0?!0:C,A=a.width,O=A===void 0?280:A,N=(0,b.$Y)(),X=z(),R=X.dispatch;(0,v.useEffect)(function(){N.aside.width(O+100),R({type:P.AsideWidth,payload:O})},[N.aside,R,O]);var q=(0,m.CN)(F),Y=(0,b.BK)(function(ee){return ee.aside.drawer});return(0,s.jsxs)("div",{className:y()("app-aside aside",c,q,{"drawer-on":Y}),children:[(0,s.jsx)(G.Z,{children:(0,s.jsx)(r.Z,{header:h,resizeable:!0,className:"app-sidebar",children:S})}),g&&(0,s.jsx)(L,{className:"start-100 end-0"})]})}W.Toggle=L;var Z=W,U,B=E.ZP.div(U||(U=i()([`
  --root-aside-width: `,`;
  --met-aside-width: `,`;
`])),function(a){return a.minimize?"100px":"".concat(a.width,"px")},function(a){return a.minimize?"100px":"".concat(a.width,"px")});function H(a){var c=a.children,h=a.className,S=z(),C=S.state.aside,g=C.minimize,A=C.width,O=(0,v.useCallback)(function(N){N.preventDefault()},[]);return(0,s.jsx)(B,{minimize:g,width:A,className:y()("micro-app-container page-full-content",h,{"aside-minimize":g}),onContextMenu:O,children:c})}function k(a){var c=a.children,h=a.className;return(0,s.jsx)(K,{children:(0,s.jsx)(H,{className:h,children:c})})}k.Sidebar=Z;var J=k},24127:function(w,j,e){e.d(j,{Ao:function(){return g},Nv:function(){return L},Qn:function(){return k},RG:function(){return S},YG:function(){return H},k1:function(){return te},oZ:function(){return W},ow:function(){return U},ps:function(){return K},rq:function(){return Q},tu:function(){return c}});var l=e(97857),r=e.n(l),T=e(68400),d=e.n(T),i=e(75063),v=e(37887),u=e(73359),y=e(50319),E,I,M,x,m,b,f,$,D,p,s,_,o={},P=(0,i.Ps)(E||(E=d()([`
    query customers($where: CustomerWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy) {
  result: customersConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    pageInfo {
      total
      totalPages
      current
      pageSize
    }
    edges {
      node {
        id
        name
        ticketStrategy
        contactInfo {
          name
        }
      }
      cursor
    }
  }
}
    `])));function Q(t){var n=r()(r()({},o),t);return v.a(P,n)}function K(t){var n=r()(r()({},o),t);return u.t(P,n)}function z(t){var n=_objectSpread(_objectSpread({},o),t);return Apollo.useSuspenseQuery(P,n)}var G=(0,i.Ps)(I||(I=d()([`
    mutation createCustomer($input: CustomerCreateInput!) {
  result: createCustomer(input: $input) {
    id
    name
  }
}
    `])));function L(t){var n=r()(r()({},o),t);return y.D(G,n)}var F=(0,i.Ps)(M||(M=d()([`
    mutation updateCustomer($id: ID!, $input: CustomerUpdateInput!) {
  result: updateCustomer(id: $id, input: $input) {
    id
    name
  }
}
    `])));function W(t){var n=r()(r()({},o),t);return y.D(F,n)}var Z=(0,i.Ps)(x||(x=d()([`
    mutation deleteManyCustomers($where: CustomerWhereInput!) {
  result: deleteManyCustomers(where: $where) {
    count
  }
}
    `])));function U(t){var n=r()(r()({},o),t);return y.D(Z,n)}var B=(0,i.Ps)(m||(m=d()([`
    query customerStores($where: CustomerStoreWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy) {
  result: customerStoresConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    pageInfo {
      total
      totalPages
      current
      pageSize
    }
    edges {
      node {
        id
        no
        name
        openingDate(format: "yyyy-MM-dd")
        deviceCount
        phone
        contactInfo {
          name
          phone
        }
        address {
          province
          provinceName
          city
          cityName
          district
          districtName
          street
          streetName
          detailedAddress
          fullAddress(excludeDetailed: true)
        }
      }
      cursor
    }
  }
}
    `])));function H(t){var n=r()(r()({},o),t);return v.a(B,n)}function k(t){var n=r()(r()({},o),t);return u.t(B,n)}function J(t){var n=_objectSpread(_objectSpread({},o),t);return Apollo.useSuspenseQuery(B,n)}var a=(0,i.Ps)(b||(b=d()([`
    mutation createCustomerStore($input: CustomerStoreCreateInput!) {
  result: createCustomerStore(input: $input) {
    id
    name
  }
}
    `])));function c(t){var n=r()(r()({},o),t);return y.D(a,n)}var h=(0,i.Ps)(f||(f=d()([`
    mutation updateCustomerStore($id: ID!, $input: CustomerStoreUpdateInput!) {
  result: updateCustomerStore(id: $id, input: $input) {
    id
    name
  }
}
    `])));function S(t){var n=r()(r()({},o),t);return y.D(h,n)}var C=(0,i.Ps)($||($=d()([`
    mutation deleteManyCustomerStores($where: CustomerStoreWhereInput!) {
  result: deleteManyCustomerStores(where: $where) {
    count
  }
}
    `])));function g(t){var n=r()(r()({},o),t);return y.D(C,n)}var A=(0,i.Ps)(D||(D=d()([`
    query tickets($where: TicketWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy) {
  result: ticketsConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    pageInfo {
      total
      totalPages
      current
      pageSize
    }
    edges {
      node {
        id
      }
      cursor
    }
  }
}
    `])));function O(t){var n=_objectSpread(_objectSpread({},o),t);return Apollo.useQuery(A,n)}function N(t){var n=_objectSpread(_objectSpread({},o),t);return Apollo.useLazyQuery(A,n)}function X(t){var n=_objectSpread(_objectSpread({},o),t);return Apollo.useSuspenseQuery(A,n)}var R=(0,i.Ps)(p||(p=d()([`
    mutation createTicket($input: TicketCreateInput!) {
  result: createTicket(input: $input) {
    id
  }
}
    `])));function q(t){var n=_objectSpread(_objectSpread({},o),t);return Apollo.useMutation(R,n)}var Y=(0,i.Ps)(s||(s=d()([`
    mutation updateTicket($id: ID!, $input: TicketUpdateInput!) {
  result: updateTicket(id: $id, input: $input) {
    id
  }
}
    `])));function ee(t){var n=_objectSpread(_objectSpread({},o),t);return Apollo.useMutation(Y,n)}var V=(0,i.Ps)(_||(_=d()([`
    query customer($id: ID!) {
  result: customer(id: $id) {
    id
    name
    ticketStrategy
    contactInfo {
      name
    }
  }
}
    `])));function te(t){var n=r()(r()({},o),t);return v.a(V,n)}function ne(t){var n=_objectSpread(_objectSpread({},o),t);return Apollo.useLazyQuery(V,n)}function re(t){var n=_objectSpread(_objectSpread({},o),t);return Apollo.useSuspenseQuery(V,n)}},77521:function(w,j,e){e.d(j,{Nv:function(){return l.Nv},Qn:function(){return l.Qn},RG:function(){return l.RG},YG:function(){return l.YG},k1:function(){return l.k1},oZ:function(){return l.oZ},ps:function(){return l.ps},rq:function(){return l.rq},tu:function(){return l.tu}});var l=e(24127)},20370:function(w,j,e){e.r(j);var l=e(51253),r=e(79817),T=e(12845),d=e(62435),i=e(96974),v=e(77521),u=e(86074),y=[{key:"dashboard",path:"/dashboard"},{key:"information",path:"/information"},{key:"stores",path:"/stores"},{key:"users",path:"/users"},{key:"devices",path:"/devices"},{key:"tickets",path:"/tickets"}];function E(){var I=!1,M=(0,i.TH)(),x=(0,T.useSelectedRoutes)(),m=x.find(function(s){var _,o=s.route;return(_=o.component)===null||_===void 0?void 0:_.template.endsWith("CustomerManagementView")}),b=(0,d.useMemo)(function(){var s,_=((s=y.find(function(o){if(M.pathname.endsWith(o.path))return!0}))===null||s===void 0?void 0:s.key)||"unknown";return{key:_,params:{}}},[M.pathname]),f=m==null?void 0:m.pathname,$=(0,v.k1)({variables:{id:m==null?void 0:m.params.id},fetchPolicy:"network-only",skip:!(m!=null&&m.params.id)}),D=$.data,p=D==null?void 0:D.result;return(0,u.jsxs)(l.Hk,{loading:I,children:[(0,u.jsx)(l.Hk.Sidebar,{children:(0,u.jsxs)(r.BlockUI,{zIndex:10,className:"my-5 p-5",overlayClassName:"bg-white bg-opacity-25",loading:!1,children:[(0,u.jsx)("div",{className:"mx-5",children:(0,u.jsxs)("div",{className:"d-flex align-items-center",children:[(0,u.jsx)(r.Symbol.Avatar,{alt:p==null?void 0:p.name,autoColor:!0,className:"me-5"}),(0,u.jsxs)("div",{className:"flex-grow-1",children:[(0,u.jsx)("a",{className:"text-dark fw-bolder text-hover-primary fs-6",children:p==null?void 0:p.name}),(0,u.jsxs)("span",{className:"text-muted d-block fw-bold",children:["ID: ",p==null?void 0:p.id]})]})]})}),(0,u.jsxs)(r.Menu,{fit:!0,accordion:!1,selectable:"AllMenu",className:"pt-6 menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0",selectedKeys:[b.key],children:[(0,u.jsx)(r.Menu.Item,{bullet:!0,icon:"Bootstrap/speedometer2",title:"\u6982\u89C8",url:"".concat(f,"/dashboard")}),(0,u.jsx)(r.Menu.Section,{contentClassName:"pt-6 pb-0",children:"\u57FA\u7840\u529F\u80FD"}),(0,u.jsx)(r.Menu.Item,{bullet:!0,title:"\u57FA\u7840\u4FE1\u606F",url:"".concat(f,"/information")},"information"),(0,u.jsx)(r.Menu.Item,{bullet:!0,title:"\u95E8\u5E97\u7BA1\u7406",url:"".concat(f,"/stores")},"stores"),(0,u.jsx)(r.Menu.Item,{bullet:!0,title:"\u4EBA\u5458\u7BA1\u7406",url:"".concat(f,"/users")},"users"),(0,u.jsx)(r.Menu.Section,{contentClassName:"pt-6 pb-0",children:"\u670D\u52A1\u5355\u529F\u80FD"}),(0,u.jsx)(r.Menu.Item,{bullet:!0,title:"\u8BBE\u5907\u7BA1\u7406",url:"".concat(f,"/devices")},"devices"),(0,u.jsx)(r.Menu.Item,{bullet:!0,title:"\u670D\u52A1\u5355\u7BA1\u7406",url:"".concat(f,"/tickets")},"tickets")]})]})}),(0,u.jsx)(i.j3,{context:{baseUrl:f}})]})}j.default=E}}]);
