"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9891],{14336:function($,P,n){var x=n(15009),_=n.n(x),L=n(97857),h=n.n(L),y=n(99289),b=n.n(y),D=n(62435),I=n(79817),f=n(12708);function p(a,o){return a.replace(/{(\w+)}/g,function(u,r){return o[r]!==void 0?o[r]:u})}function d(a,o){var u=(0,D.useRef)(!1),r=(0,D.useCallback)(function(){var s=b()(_()().mark(function e(m){var U,E,g,A;return _()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return U=a.width,E=a.title,g=a.content,m&&(typeof E=="string"&&(E=p(E,m)),typeof g=="string"&&(g=p(g,m)),typeof E=="function"&&(E=E(m)),typeof g=="function"&&(g=g(m))),v.next=5,I.Modal.confirm(h()(h()({},a),{},{title:E,content:g,width:U,okText:"\u5220 \u9664",okClassName:"btn-danger",allowOutsideClick:function(){return!u.current},preConfirm:function(){var F=b()(_()().mark(function W(){var C,B,M;return _()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return u.current=!0,j.prev=1,C=document.querySelector(".swal2-confirm"),C.textContent="\u5220\u9664\u4E2D...",B=document.createElement("span"),B.classList.add("spinner-border-sm","ms-2","spinner-border","align-middle"),C.appendChild(B),j.next=9,(0,f.gw)(o(m),350);case 9:M=j.sent,console.log(M);case 11:return j.prev=11,u.current=!1,j.finish(11);case 14:case"end":return j.stop()}},W,null,[[1,,11,14]])}));function R(){return F.apply(this,arguments)}return R}()}));case 5:if(A=v.sent,A.isConfirmed){v.next=8;break}return v.abrupt("return",!1);case 8:return I.Toast.success("\u5220\u9664\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),v.abrupt("return",!0);case 10:case"end":return v.stop()}},e)}));return function(e){return s.apply(this,arguments)}}(),[o,a]);return[r]}P.Z=d},58301:function($,P,n){n.d(P,{Oh:function(){return D},bp:function(){return I}});var x=n(97857),_=n.n(x),L=n(62435);function h(f,p){var d,a,o=f(_()({fetchPolicy:"network-only"},p)),u=o.data,r=o.loading,s=o.previousData,e=o.refetch,m=o.error,U=(0,L.useMemo)(function(){return r?s==null?void 0:s.result.pageInfo:u==null?void 0:u.result.pageInfo},[u==null||(d=u.result)===null||d===void 0?void 0:d.pageInfo.total,r,s==null||(a=s.result)===null||a===void 0?void 0:a.pageInfo.total]),E=(u==null?void 0:u.result.edges.map(function(g){return g.node}))||[];return[E,{loading:r,pageInfo:U,error:m,variables:{},refetch:e}]}function y(f,p){return p.split(".").reduce(function(d,a){return d&&d[a]!==void 0?d[a]:void 0},f)}function b(f,p,d){for(var a=p.split("."),o=f;a.length>1;){var u=a.shift();o[u]||(o[u]={}),o=o[u]}o[a[0]]=d}function D(f,p){var d=p.map(function(a){var o=a.source,u=a.target,r=a.transform,s=a.skip,e=y(f,o);if(e==null||s&&s(e))return"";var m=r?r(e):String(e);return"".concat(encodeURIComponent(u||o),"=").concat(encodeURIComponent(m))});return d.filter(function(a){return a}).join("&")}function I(f,p){var d={};return p.forEach(function(a){var o=a.source,u=a.target,r=a.transform,s=a.skip,e=f.get(o);if(!(!e||e.trim()==="")){var m=r?r(e):e;s&&s(m)||(u?b(d,u,m):d[o]=m)}}),d}P.ZP=h},58163:function($,P,n){n.d(P,{ny:function(){return W},TS:function(){return k},s6:function(){return j},kD:function(){return B},bT:function(){return K},xY:function(){return U}});var x=n(97857),_=n.n(x),L=n(68400),h=n.n(L),y=n(75063),b=n(37887),D=n(50319),I=n(73359),f,p,d,a,o,u,r,s={},e=(0,y.Ps)(f||(f=h()([`
    fragment UserFragment on User {
  id
  name
  nickname
  userType {
    id
    name
  }
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
    `]))),m=(0,y.Ps)(p||(p=h()([`
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
    `,""])),e);function U(l){var i=_()(_()({},s),l);return b.a(m,i)}function E(l){var i=_objectSpread(_objectSpread({},s),l);return Apollo.useLazyQuery(m,i)}function g(l){var i=_objectSpread(_objectSpread({},s),l);return Apollo.useSuspenseQuery(m,i)}var A=(0,y.Ps)(d||(d=h()([`
    query user($id: ID!) {
  result: user(id: $id) {
    ...UserFragment
  }
}
    `,""])),e);function K(l){var i=_()(_()({},s),l);return b.a(A,i)}function v(l){var i=_objectSpread(_objectSpread({},s),l);return Apollo.useLazyQuery(A,i)}function F(l){var i=_objectSpread(_objectSpread({},s),l);return Apollo.useSuspenseQuery(A,i)}var R=(0,y.Ps)(a||(a=h()([`
    mutation createUser($input: UserCreateInput!) {
  result: createUser(input: $input) {
    ...UserFragment
  }
}
    `,""])),e);function W(l){var i=_()(_()({},s),l);return D.D(R,i)}var C=(0,y.Ps)(o||(o=h()([`
    mutation updateUser($id: ID!, $input: UserUpdateInput!) {
  result: updateUser(id: $id, input: $input, merge: true) {
    ...UserFragment
  }
}
    `,""])),e);function B(l){var i=_()(_()({},s),l);return D.D(C,i)}var M=(0,y.Ps)(u||(u=h()([`
    query findUserByUsername($username: String) {
  result: users(where: {username: $username}, first: 1) {
    id
    name
  }
}
    `])));function S(l){var i=_objectSpread(_objectSpread({},s),l);return Apollo.useQuery(M,i)}function j(l){var i=_()(_()({},s),l);return I.t(M,i)}function V(l){var i=_objectSpread(_objectSpread({},s),l);return Apollo.useSuspenseQuery(M,i)}var N=(0,y.Ps)(r||(r=h()([`
    mutation deleteManyUsers($where: UserWhereInput!) {
  result: deleteManyUsers(where: $where) {
    count
  }
}
    `])));function k(l){var i=_()(_()({},s),l);return D.D(N,i)}},29891:function($,P,n){n.r(P);var x=n(15009),_=n.n(x),L=n(99289),h=n.n(L),y=n(5574),b=n.n(y),D=n(62435),I=n(96974),f=n(39711),p=n(46027),d=n(77786),a=n(14336),o=n(58301),u=n(73588),r=n(79817),s=n(58163),e=n(86074);function m(){var U=(0,I.s0)(),E=(0,s.TS)(),g=b()(E,1),A=g[0],K=(0,d.ot)(),v=K.data,F=(0,o.ZP)(s.xY,{toQuery:function(t,O,Y,T){var Q,w={};if((Q=t.filter)!==null&&Q!==void 0&&Q.nickname_contains){var z;w.q=(z=t.filter)===null||z===void 0?void 0:z.nickname_contains}return T&&(w.orderBy=T.field+"_"+(T.order==="ascend"?"asc":"desc")),w.page=O.current,w},toVariables:function(t){return t.where={},t.q&&(t.where={nickname_contains:t.q},delete t.q),t.page&&(t.page=parseInt(t.page)),t.where.tenantId=v==null?void 0:v.tenantId,t}},!(v!=null&&v.tenantId)),R=b()(F,2),W=R[0],C=R[1],B=C.loading,M=C.pageInfo,S=C.sorter,j=C.onChange,V=C.refetch,N=(0,D.useCallback)(function(c){U("/system/users?q=".concat(c),{replace:!0})},[]),k=(0,a.Z)({title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",content:function(t){return(0,e.jsxs)(e.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,e.jsx)("strong",{children:t.name}),"\u201D\u3002\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u9006\u8F6C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u60A8\u786E\u5B9A\u5220\u9664\u5417\uFF1F"]})}},function(){var c=h()(_()().mark(function t(O){return _()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,A({variables:{where:{id_in:O==null?void 0:O.ids}}});case 2:V();case 3:case"end":return T.stop()}},t)}));return function(t){return c.apply(this,arguments)}}()),l=b()(k,1),i=l[0],Z=(0,D.useCallback)(function(c){return function(){i({name:"\u9009\u4E2D\u7684\u7528\u6237",ids:c})}},[]),G=(0,D.useCallback)(function(c){return function(t){t.key==="edit"?U("/system/users/".concat(c.id)):t.key==="delete"&&i({name:c.name,ids:[c.id]})}},[i]);return(0,e.jsx)(u.vs,{header:{title:"\u7528\u6237\u5217\u8868"},children:(0,e.jsxs)(r.Card,{className:"mb-5 mb-xl-10",children:[(0,e.jsxs)(r.Card.Header,{className:"pt-8",children:[(0,e.jsx)(r.Card.Title,{className:"flex-column",children:(0,e.jsx)(r.Input.Search,{solid:!0,className:"w-250px",placeholder:"\u641C\u7D22\u7528\u6237",onSearch:N})}),(0,e.jsx)(r.Card.Toolbar,{children:(0,e.jsx)("div",{className:"d-flex justify-content-end",children:(0,e.jsx)(r.Button,{as:f.rU,variant:"primary",className:"me-3",icon:(0,e.jsx)(p.ZP,{className:"svg-icon-2",name:"Duotune/arr075"}),to:"/system/users/new",children:"\u65B0\u5EFA\u7528\u6237"})})})]}),(0,e.jsx)(r.Card.Body,{children:!M.total&&!B?(0,e.jsx)(r.Card,{className:"mb-5 mb-xl-10",children:(0,e.jsx)(r.Empty,{title:"\u8FD8\u6CA1\u6709\u7528\u6237",description:"\u9A6C\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u7528\u6237\u5427\uFF01",image:"/assets/media/illustrations/sigma-1/4.png",children:(0,e.jsx)(r.Button,{variant:"primary",children:"\u6DFB\u52A0\u7528\u6237"})})}):(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.BlockUI,{overlayClassName:"bg-white bg-opacity-25",loading:B,children:(0,e.jsx)(r.Table,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(t){return(0,e.jsxs)(e.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,e.jsx)("span",{className:"mx-2",children:t}),"\u4E2A\u7528\u6237"]})},toolbar:function(t){return(0,e.jsx)("div",{children:(0,e.jsx)(r.Button,{color:"success",onClick:Z(t),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},noRowsRenderer:function(){return(0,e.jsx)(r.Empty,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:[{key:"name",title:"\u540D\u79F0",sortOrder:S.field==="name"?S.order:void 0,render:function(t,O){return(0,e.jsxs)("div",{className:"d-flex py-2 align-items-center",children:[(0,e.jsx)(r.Symbol.Avatar,{src:O.avatar}),(0,e.jsx)("span",{className:"ms-2 text-muted",children:t})]})}},{key:"username",title:"\u8D26\u6237",sorter:!0,width:120,sortOrder:S.field==="username"?S.order:void 0},{key:"email",title:"\u90AE\u7BB1",width:180,render:function(t){return(0,e.jsx)("span",{className:"text-muted",children:t==null?void 0:t.address})}},{key:"phone",title:"\u7535\u8BDD",width:180,render:function(t){return(0,e.jsx)("span",{className:"text-muted",children:t==null?void 0:t.number})}},{key:"createdAt",title:"\u521B\u5EFA\u65F6\u95F4",width:120},{title:"\u64CD\u4F5C",key:"action",width:140,render:function(t,O){return(0,e.jsx)("div",{children:(0,e.jsx)(r.Dropdown,{overlay:(0,e.jsxs)(r.Menu,{onClick:G(O),className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,e.jsx)(r.Menu.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,e.jsx)(r.Menu.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",children:(0,e.jsxs)(r.Button,{variant:"light",activeColor:"light-primary",children:["\u64CD \u4F5C",(0,e.jsx)(p.ZP,{className:"ms-2 svg-icon-5 m-0",name:"Duotune/arr072"})]})})})}}],pagination:M,onChange:j,dataSource:W})})})})]})})}P.default=m}}]);
