"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7958],{17958:function(J,N,s){s.r(N);var V=s(97857),d=s.n(V),G=s(15009),v=s.n(G),p=s(99289),M=s.n(p),O=s(5574),h=s.n(O),_=s(62435),R=s(96974),A=s(39711),$=s(46027),W=s(14336),Q=s(58301),k=s(73588),t=s(79817),S=s(58163),y=s(91726),r=s(86074);function Z(C){var j=C.data,m=C.refetch,K=(0,_.useState)(!1),b=h()(K,2),i=b[0],g=b[1],I=(0,R.s0)(),U=(0,y.an)(),z=h()(U,1),F=z[0],P=(0,W.Z)({title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",content:function(E){return(0,r.jsxs)(r.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,r.jsx)("strong",{children:E.name}),"\u201D\u3002\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u9006\u8F6C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u60A8\u786E\u5B9A\u5220\u9664\u5417\uFF1F"]})}},function(){var a=M()(v()().mark(function E(D){return v()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,F({variables:{where:{id_in:[D==null?void 0:D.id]}}});case 2:m();case 3:case"end":return x.stop()}},E)}));return function(E){return a.apply(this,arguments)}}()),T=h()(P,1),B=T[0],u=(0,_.useCallback)(function(a){var E=a.key;E==="edit"?I("/pim/devices/".concat(j.id)):E==="delete"&&B({name:j.name,id:j.id})},[]);return(0,r.jsx)(t.Dropdown,{overlay:(0,r.jsxs)(t.Menu,{onClick:u,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,r.jsx)(t.Menu.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,r.jsx)(t.Menu.Item,{className:"px-3",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",onVisibleChange:g,visible:i,children:(0,r.jsxs)(t.Button,{variant:"light",activeColor:"light-primary",children:["\u64CD \u4F5C",(0,r.jsx)($.ZP,{className:"ms-2 svg-icon-5 m-0",name:"Duotune/arr072"})]})})}function H(){var C=(0,A.lr)(),j=h()(C,1),m=j[0],K=(0,_.useState)({}),b=h()(K,2),i=b[0],g=b[1];(0,_.useEffect)(function(){g(function(n){return m.get("name_contains")&&(n.name_contains=m.get("name_contains")),m.get("customer")&&(n.customer=m.get("customer")),m.get("customerStore")&&(n.customerStore=m.get("customerStore")),m.get("createdBy")&&(n.createdBy=m.get("createdBy")),n})},[m]);var I=(0,y.an)(),U=h()(I,1),z=U[0],F=(0,S.xY)({variables:{where:{tenantId:"1691832353955123200"},pageSize:100},fetchPolicy:"network-only"}),P=F.data,T=(0,y.rq)({fetchPolicy:"network-only"}),B=T.data,u=(0,Q.Z)(y.Ew,{toQuery:function(e,l,o,w){var c={};return o!=null&&o.name_contains&&(c.q=o==null?void 0:o.name_contains),o!=null&&o.customer&&(c.customer=o.customer),o!=null&&o.customerStore&&(c.customerStore=o.customerStore),o!=null&&o.createdBy&&(c.createdBy=o.createdBy),w&&(c.orderBy=w.field+"_"+(w.order==="ascend"?"asc":"desc")),c.page=l.current,c},toVariables:function(e){return e.where={},e.q&&(e.where.name_contains=e.q,delete e.q),e.customer&&(e.where.customer=e.customer,delete e.customer),e.customerStore&&(e.where.customerStore=e.customerStore,delete e.customerStore),e.createdBy&&(e.where.createdBy=e.createdBy,delete e.createdBy),e}}),a=h()(u,2),E=a[0],D=a[1],X=D.loading,x=D.pageInfo,f=D.sorter,q=D.refetch,L=D.onChange,ee=(0,_.useCallback)(function(n){g(function(e){return d()(d()({},e),{},{customerStore:void 0,customer:n})})},[L,f]),ne=(0,_.useCallback)(function(n){g(function(e){return d()(d()({},e),{},{createdBy:n||void 0})})},[]),re=(0,_.useCallback)(function(n){g(function(e){return d()(d()({},e),{},{customerStore:n})})},[]),te=(0,_.useCallback)(function(n){g(function(e){return d()(d()({},e),{},{name_contains:n})})},[L,f]);(0,_.useEffect)(function(){L({current:m.get("page")||1,pageSize:10},i,f)},[i,L,f,m.get("page")]);var ae=(0,y.YG)({fetchPolicy:"network-only",skip:!(i!=null&&i.customer),variables:{where:{customer:i==null?void 0:i.customer}}}),Y=ae.data,se=(B==null?void 0:B.result)||[],ue=(Y==null?void 0:Y.result)||[],oe=(P==null?void 0:P.result.edges.map(function(n){return n.node}))||[],ie=(0,_.useCallback)(function(n){return M()(v()().mark(function e(){var l,o;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(n.length," \u4E2A\u8BBE\u5907\u5417\uFF1F"),c.next=3,t.Modal.confirm({title:"\u786E\u5B9A\u5220\u9664",content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"tip-confirm",children:l}),(0,r.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]}),okClassName:"btn-danger",okText:"\u5220\u9664"});case 3:if(o=c.sent,o.isConfirmed){c.next=6;break}return c.abrupt("return");case 6:return c.next=8,z({variables:{where:{id_in:n}}});case 8:t.Toast.success("\u8BBE\u5907\u6279\u91CF\u5220\u9664\u6210\u529F",2e3,{placement:"bottom-left",progressBar:!0});case 9:case"end":return c.stop()}},e)}))},[]);return(0,r.jsx)(k.vs,{header:{title:"\u8BBE\u5907\u5217\u8868"},children:(0,r.jsxs)(t.Card,{className:"mb-5 mb-xl-10",children:[(0,r.jsxs)(t.Card.Header,{className:"pt-8",children:[(0,r.jsx)(t.Card.Title,{className:"flex-column",children:(0,r.jsx)(t.Input.Search,{solid:!0,value:i==null?void 0:i.name_contains,className:"w-250px",placeholder:"\u641C\u7D22\u8BBE\u5907",onSearch:te})}),(0,r.jsxs)(t.Card.Toolbar,{children:[(0,r.jsx)("div",{className:"me-4 my-1",children:(0,r.jsx)(t.Select2,{solid:!0,size:"sm",className:"w-150px",onChange:function(e){return ne(e)},matcher:function(e,l){return!e.term||e.term===""||l.text.includes(e.term)?l:null},placeholder:"\u521B\u5EFA\u4EBA",value:i==null?void 0:i.createdBy,options:oe.map(function(n){return{label:n.name,value:n.id}})})}),(0,r.jsx)("div",{className:"me-4 my-1",children:(0,r.jsx)(t.Select2,{solid:!0,size:"sm",className:"w-150px",onChange:function(e){return ee(e)},matcher:function(e,l){return!e.term||e.term===""||l.text.includes(e.term)?l:null},placeholder:"\u5168\u90E8\u5BA2\u6237",value:i==null?void 0:i.customer,options:se.map(function(n){return{label:n.name,value:n.id}})})}),(0,r.jsx)("div",{className:"me-4 my-1",children:(0,r.jsx)(t.Select2,{solid:!0,size:"sm",className:"w-250px",placeholder:"\u5168\u90E8\u95E8\u5E97",value:i==null?void 0:i.customerStore,onChange:function(e){return re(e)},options:ue.map(function(n){return{label:n.name,value:n.id}})})})]})]}),(0,r.jsx)(t.Card.Body,{children:(0,r.jsx)(t.BlockUI,{overlayClassName:"bg-white bg-opacity-25",loading:X,children:(0,r.jsx)(t.Table,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(e){return(0,r.jsxs)(r.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,r.jsx)("span",{className:"mx-2",children:e}),"\u4E2A\u8BBE\u5907"]})},toolbar:function(e){return(0,r.jsx)("div",{children:(0,r.jsx)(t.Button,{color:"success",onClick:ie(e),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},noRowsRenderer:function(){return(0,r.jsx)(t.Empty,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:[{key:"no",title:"\u8D44\u4EA7\u7F16\u53F7",sorter:!0,sortOrder:f.field==="no"?f.order:void 0,width:260,render:function(e,l){return(0,r.jsx)(A.rU,{to:"/pim/devices/".concat(l.id),className:"text-gray-700",children:e})}},{key:"name",title:"\u8BBE\u5907\u540D\u79F0",sorter:!0,sortOrder:f.field==="name"?f.order:void 0,render:function(e,l){var o;return(0,r.jsxs)("div",{className:"text-gray-700",children:[l==null||(o=l.brand)===null||o===void 0?void 0:o.name," | ",e]})}},{key:"warrantyStatus",title:"\u4FDD\u4FEE\u72B6\u6001",width:80,render:function(e){var l={INACTIVE:"\u672A\u6FC0\u6D3B",ACTIVE:"\u6FC0\u6D3B",EXPIRED:"\u5DF2\u8FC7\u671F",CANCELED:"\u5DF2\u4F5C\u5E9F"};return(0,r.jsx)("div",{className:"text-gray-700",children:l[e]})}},{key:"owner.customer.name",title:"\u6240\u5C5E\u5BA2\u6237",width:120,render:function(e){return(0,r.jsx)("div",{className:"text-gray-700",children:e})}},{key:"owner.name",title:"\u6240\u5C5E\u95E8\u5E97",width:120,render:function(e){return(0,r.jsx)("div",{className:"text-gray-700",children:e})}},{key:"createdAt",title:"\u521B\u5EFA\u65F6\u95F4",width:120,sorter:!0,sortOrder:f.field==="createdAt"?f.order:void 0},{title:"\u64CD\u4F5C",key:"action",width:140,render:function(e,l){return(0,r.jsx)(Z,{data:l,refetch:q})}}],pagination:x,onChange:L,dataSource:E})})})]})})}N.default=H},58163:function(J,N,s){s.d(N,{ny:function(){return i},TS:function(){return B},s6:function(){return F},kD:function(){return I},bT:function(){return j},xY:function(){return r}});var V=s(97857),d=s.n(V),G=s(68400),v=s.n(G),p=s(75063),M=s(37887),O=s(50319),h=s(73359),_,R,A,$,W,Q,k,t={},S=(0,p.Ps)(_||(_=v()([`
    fragment UserFragment on User {
  id
  name
  nickname
  userType
  username
  phone {
    number
    status
  }
  email {
    address
    status
  }
  avatar
}
    `]))),y=(0,p.Ps)(R||(R=v()([`
    query users($where: UserWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy) {
  result: usersConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      totalPages
      total
      current
    }
    edges {
      cursor
      node {
        ...UserFragment
      }
    }
  }
}
    `,""])),S);function r(u){var a=d()(d()({},t),u);return M.a(y,a)}function Z(u){var a=_objectSpread(_objectSpread({},t),u);return Apollo.useLazyQuery(y,a)}function H(u){var a=_objectSpread(_objectSpread({},t),u);return Apollo.useSuspenseQuery(y,a)}var C=(0,p.Ps)(A||(A=v()([`
    query user($id: ID!) {
  result: user(id: $id) {
    ...UserFragment
  }
}
    `,""])),S);function j(u){var a=d()(d()({},t),u);return M.a(C,a)}function m(u){var a=_objectSpread(_objectSpread({},t),u);return Apollo.useLazyQuery(C,a)}function K(u){var a=_objectSpread(_objectSpread({},t),u);return Apollo.useSuspenseQuery(C,a)}var b=(0,p.Ps)($||($=v()([`
    mutation createUser($input: UserCreateInput!) {
  result: createUser(input: $input) {
    ...UserFragment
  }
}
    `,""])),S);function i(u){var a=d()(d()({},t),u);return O.D(b,a)}var g=(0,p.Ps)(W||(W=v()([`
    mutation updateUser($id: ID!, $input: UserUpdateInput!) {
  result: updateUser(id: $id, input: $input, merge: true) {
    ...UserFragment
  }
}
    `,""])),S);function I(u){var a=d()(d()({},t),u);return O.D(g,a)}var U=(0,p.Ps)(Q||(Q=v()([`
    query findUserByUsername($username: String) {
  result: users(where: {username: $username}, first: 1) {
    id
    name
  }
}
    `])));function z(u){var a=_objectSpread(_objectSpread({},t),u);return Apollo.useQuery(U,a)}function F(u){var a=d()(d()({},t),u);return h.t(U,a)}function P(u){var a=_objectSpread(_objectSpread({},t),u);return Apollo.useSuspenseQuery(U,a)}var T=(0,p.Ps)(k||(k=v()([`
    mutation deleteManyUsers($where: UserWhereInput!) {
  result: deleteManyUsers(where: $where) {
    count
  }
}
    `])));function B(u){var a=d()(d()({},t),u);return O.D(T,a)}}}]);
