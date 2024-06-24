"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9891],{58163:function(z,g,t){t.d(g,{ny:function(){return O},TS:function(){return R},s6:function(){return L},kD:function(){return T},bT:function(){return P},xY:function(){return S}});var B=t(97857),u=t.n(B),F=t(68400),o=t.n(F),i=t(75063),c=t(37887),m=t(50319),I=t(73359),E,v,C,x,b,a,f,e={},_=(0,i.Ps)(E||(E=o()([`
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
    `]))),p=(0,i.Ps)(v||(v=o()([`
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
    `,""])),_);function S(s){var n=u()(u()({},e),s);return c.a(p,n)}function Q(s){var n=_objectSpread(_objectSpread({},e),s);return Apollo.useLazyQuery(p,n)}function W(s){var n=_objectSpread(_objectSpread({},e),s);return Apollo.useSuspenseQuery(p,n)}var j=(0,i.Ps)(C||(C=o()([`
    query user($id: ID!) {
  result: user(id: $id) {
    ...UserFragment
  }
}
    `,""])),_);function P(s){var n=u()(u()({},e),s);return c.a(j,n)}function K(s){var n=_objectSpread(_objectSpread({},e),s);return Apollo.useLazyQuery(j,n)}function h(s){var n=_objectSpread(_objectSpread({},e),s);return Apollo.useSuspenseQuery(j,n)}var M=(0,i.Ps)(x||(x=o()([`
    mutation createUser($input: UserCreateInput!) {
  result: createUser(input: $input) {
    ...UserFragment
  }
}
    `,""])),_);function O(s){var n=u()(u()({},e),s);return m.D(M,n)}var y=(0,i.Ps)(b||(b=o()([`
    mutation updateUser($id: ID!, $input: UserUpdateInput!) {
  result: updateUser(id: $id, input: $input, merge: true) {
    ...UserFragment
  }
}
    `,""])),_);function T(s){var n=u()(u()({},e),s);return m.D(y,n)}var D=(0,i.Ps)(a||(a=o()([`
    query findUserByUsername($username: String) {
  result: users(where: {username: $username}, first: 1) {
    id
    name
  }
}
    `])));function w(s){var n=_objectSpread(_objectSpread({},e),s);return Apollo.useQuery(D,n)}function L(s){var n=u()(u()({},e),s);return I.t(D,n)}function k(s){var n=_objectSpread(_objectSpread({},e),s);return Apollo.useSuspenseQuery(D,n)}var U=(0,i.Ps)(f||(f=o()([`
    mutation deleteManyUsers($where: UserWhereInput!) {
  result: deleteManyUsers(where: $where) {
    count
  }
}
    `])));function R(s){var n=u()(u()({},e),s);return m.D(U,n)}},29891:function(z,g,t){t.r(g);var B=t(15009),u=t.n(B),F=t(99289),o=t.n(F),i=t(5574),c=t.n(i),m=t(62435),I=t(96974),E=t(39711),v=t(46027),C=t(14336),x=t(58301),b=t(73588),a=t(79817),f=t(58163),e=t(86074);function _(){var p=(0,I.s0)(),S=(0,f.TS)(),Q=c()(S,1),W=Q[0],j=(0,x.Z)(f.xY,{toQuery:function(r,l,Z,d){var $,A={};if(($=r.filter)!==null&&$!==void 0&&$.nickname_contains){var N;A.q=(N=r.filter)===null||N===void 0?void 0:N.nickname_contains}return d&&(A.orderBy=d.field+"_"+(d.order==="ascend"?"asc":"desc")),A.page=l.current,A},toVariables:function(r){return r.where={},r.q&&(r.where={nickname_contains:r.q},delete r.q),r.where.tenantId="1691832353955123200",r}}),P=c()(j,2),K=P[0],h=P[1],M=h.loading,O=h.pageInfo,y=h.sorter,T=h.onChange,D=h.refetch,w=(0,m.useCallback)(function(n){p("/system/users?q=".concat(n),{replace:!0})},[]),L=(0,C.Z)({title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",content:function(r){return(0,e.jsxs)(e.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,e.jsx)("strong",{children:r.name}),"\u201D\u3002\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u9006\u8F6C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u60A8\u786E\u5B9A\u5220\u9664\u5417\uFF1F"]})}},function(){var n=o()(u()().mark(function r(l){return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,W({variables:{where:{id_in:l==null?void 0:l.ids}}});case 2:D();case 3:case"end":return d.stop()}},r)}));return function(r){return n.apply(this,arguments)}}()),k=c()(L,1),U=k[0],R=(0,m.useCallback)(function(n){return function(){U({name:"\u9009\u4E2D\u7684\u7528\u6237",ids:n})}},[]),s=(0,m.useCallback)(function(n){return function(r){r.key==="edit"?p("/system/users/".concat(n.id)):r.key==="delete"&&U({name:n.name,ids:[n.id]})}},[U]);return(0,e.jsx)(b.vs,{header:{title:"\u7528\u6237\u5217\u8868"},children:(0,e.jsxs)(a.Card,{className:"mb-5 mb-xl-10",children:[(0,e.jsxs)(a.Card.Header,{className:"pt-8",children:[(0,e.jsx)(a.Card.Title,{className:"flex-column",children:(0,e.jsx)(a.Input.Search,{solid:!0,className:"w-250px",placeholder:"\u641C\u7D22\u7528\u6237",onSearch:w})}),(0,e.jsx)(a.Card.Toolbar,{children:(0,e.jsx)("div",{className:"d-flex justify-content-end",children:(0,e.jsx)(a.Button,{as:E.rU,variant:"primary",className:"me-3",icon:(0,e.jsx)(v.ZP,{className:"svg-icon-2",name:"Duotune/arr075"}),to:"/system/users/new",children:"\u65B0\u5EFA\u7528\u6237"})})})]}),(0,e.jsx)(a.Card.Body,{children:!O.total&&!M?(0,e.jsx)(a.Card,{className:"mb-5 mb-xl-10",children:(0,e.jsx)(a.Empty,{title:"\u8FD8\u6CA1\u6709\u7528\u6237",description:"\u9A6C\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u7528\u6237\u5427\uFF01",image:"/assets/media/illustrations/sigma-1/4.png",children:(0,e.jsx)(a.Button,{variant:"primary",children:"\u6DFB\u52A0\u7528\u6237"})})}):(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(a.BlockUI,{overlayClassName:"bg-white bg-opacity-25",loading:M,children:(0,e.jsx)(a.Table,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(r){return(0,e.jsxs)(e.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,e.jsx)("span",{className:"mx-2",children:r}),"\u4E2A\u7528\u6237"]})},toolbar:function(r){return(0,e.jsx)("div",{children:(0,e.jsx)(a.Button,{color:"success",onClick:R(r),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},noRowsRenderer:function(){return(0,e.jsx)(a.Empty,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:[{key:"name",title:"\u540D\u79F0",sortOrder:y.field==="name"?y.order:void 0,render:function(r,l){return(0,e.jsxs)("div",{className:"d-flex py-2 align-items-center",children:[(0,e.jsx)(a.Symbol.Avatar,{src:l.avatar}),(0,e.jsx)("span",{className:"ms-2 text-muted",children:r})]})}},{key:"username",title:"\u8D26\u6237",sorter:!0,width:120,sortOrder:y.field==="username"?y.order:void 0},{key:"email",title:"\u90AE\u7BB1",width:180,render:function(r){return(0,e.jsx)("span",{className:"text-muted",children:r==null?void 0:r.address})}},{key:"phone",title:"\u7535\u8BDD",width:180,render:function(r){return(0,e.jsx)("span",{className:"text-muted",children:r==null?void 0:r.number})}},{key:"createdAt",title:"\u521B\u5EFA\u65F6\u95F4",width:120},{title:"\u64CD\u4F5C",key:"action",width:140,render:function(r,l){return(0,e.jsx)("div",{children:(0,e.jsx)(a.Dropdown,{overlay:(0,e.jsxs)(a.Menu,{onClick:s(l),className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,e.jsx)(a.Menu.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,e.jsx)(a.Menu.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",children:(0,e.jsxs)(a.Button,{variant:"light",activeColor:"light-primary",children:["\u64CD \u4F5C",(0,e.jsx)(v.ZP,{className:"ms-2 svg-icon-5 m-0",name:"Duotune/arr072"})]})})})}}],pagination:O,onChange:T,dataSource:K})})})})]})})}g.default=_}}]);
