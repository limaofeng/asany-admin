"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8321],{14336:function(Y,B,n){var P=n(15009),i=n.n(P),x=n(99289),h=n.n(x),E=n(97857),U=n.n(E),w=n(5574),T=n.n(w),p=n(62435),r=n(79817),f=n(12708);function u(o,e){return o.replace(/{(\w+)}/g,function(a,m){return e[m]!==void 0?e[m]:a})}function c(o,e){var a=o(U()({fetchPolicy:"network-only"},(e==null?void 0:e.mutation)||{})),m=T()(a,1),y=m[0],L=(0,p.useRef)(!1),I=(0,p.useCallback)(function(){var g=h()(i()().mark(function A(s,v){var b,C,W,K,D,j,R,N,Q;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return b=(v==null?void 0:v.dialog)||(e==null?void 0:e.dialog)||{},C=(v==null?void 0:v.mutation)||(e==null?void 0:e.mutation)||{},W=(v==null?void 0:v.onDeleted)||(e==null?void 0:e.onDeleted),K=b.width,D=b.title,j=b.content,R=!1,Array.isArray(s)?(R=!0,typeof D=="function"&&(D=D(s,{batch:!0})),typeof j=="function"&&(j=j(s,{batch:!0}))):s&&(typeof D=="string"&&(D=u(D,s)),typeof j=="string"&&(j=u(j,s)),typeof D=="function"&&(D=D(s,{batch:!1})),typeof j=="function"&&(j=j(s,{batch:!1}))),N=function(){var z=h()(i()().mark(function V(){return i()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,y(U()(U()({fetchPolicy:"network-only"},C),{},{variables:{where:{id_in:R?s:[s==null?void 0:s.id]}}}));case 2:case"end":return S.stop()}},V)}));return function(){return z.apply(this,arguments)}}(),t.next=10,r.Modal.confirm(U()(U()({},b),{},{title:D,content:j,width:K,okText:"\u5220 \u9664",okClassName:"btn-danger",allowOutsideClick:function(){return!L.current},preConfirm:function(){var z=h()(i()().mark(function G(){var S,d,_;return i()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return L.current=!0,O.prev=1,S=document.querySelector(".swal2-confirm"),S.textContent="\u5220\u9664\u4E2D...",d=document.createElement("span"),d.classList.add("spinner-border-sm","ms-2","spinner-border","align-middle"),S.appendChild(d),O.next=9,(0,f.gw)(N(),350);case 9:_=O.sent,W&&W(_);case 11:return O.prev=11,L.current=!1,O.finish(11);case 14:case"end":return O.stop()}},G,null,[[1,,11,14]])}));function V(){return z.apply(this,arguments)}return V}()}));case 10:if(Q=t.sent,Q.isConfirmed){t.next=13;break}return t.abrupt("return",!1);case 13:return r.Toast.success("\u5220\u9664\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),t.abrupt("return",!0);case 15:case"end":return t.stop()}},A)}));return function(A,s){return g.apply(this,arguments)}}(),[]),F=(0,p.useCallback)(function(){var g=h()(i()().mark(function A(s,v){return i()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.abrupt("return",I(s,v));case 1:case"end":return C.stop()}},A)}));return function(A,s){return g.apply(this,arguments)}}(),[e,y]),k=(0,p.useCallback)(function(g,A){return I(g,A)},[]);return{delete:F,deleteMany:k}}B.Z=c},58301:function(Y,B,n){n.d(B,{Oh:function(){return w},bp:function(){return T}});var P=n(97857),i=n.n(P),x=n(62435);function h(p,r){var f,u,c=p(i()({fetchPolicy:"network-only"},r)),o=c.data,e=c.loading,a=c.previousData,m=c.refetch,y=c.error;console.log("=====>",o,r);var L=(0,x.useMemo)(function(){return e?a==null?void 0:a.result.pageInfo:o==null?void 0:o.result.pageInfo},[o==null||(f=o.result)===null||f===void 0?void 0:f.pageInfo.total,e,a==null||(u=a.result)===null||u===void 0?void 0:u.pageInfo.total]),I=(o==null?void 0:o.result.edges.map(function(F){return F.node}))||[];return[I,{loading:e,pageInfo:L,error:y,variables:{},refetch:m}]}function E(p,r){return r.split(".").reduce(function(f,u){return f&&f[u]!==void 0?f[u]:void 0},p)}function U(p,r,f){for(var u=r.split("."),c=p;u.length>1;){var o=u.shift();c[o]||(c[o]={}),c=c[o]}c[u[0]]=f}function w(p,r){var f=r.map(function(u){var c=u.source,o=u.target,e=u.transform,a=u.skip,m=E(p,c);if(m==null||a&&a(m))return"";var y=e?e(m):String(m);return"".concat(encodeURIComponent(o||c),"=").concat(encodeURIComponent(y))});return f.filter(function(u){return u}).join("&")}function T(p,r){var f={};return r.forEach(function(u){var c=u.source,o=u.target,e=u.transform,a=u.skip,m=p.get(c);if(!(!m||m.trim()==="")){var y=e?e(m):m;a&&a(y)||(o?U(f,o,y):f[c]=y)}}),f}B.ZP=h},74167:function(Y,B,n){n.d(B,{TS:function(){return Q},bT:function(){return g},kD:function(){return W},ny:function(){return b},s6:function(){return j},xY:function(){return L}});var P=n(97857),i=n.n(P),x=n(68400),h=n.n(x),E=n(75063),U=n(37887),w=n(50319),T=n(73359),p,r,f,u,c,o,e,a={},m=(0,E.Ps)(p||(p=h()([`
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
    `]))),y=(0,E.Ps)(r||(r=h()([`
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
      pageSize
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
    `,""])),m);function L(l){var t=i()(i()({},a),l);return U.a(y,t)}function I(l){var t=_objectSpread(_objectSpread({},a),l);return Apollo.useLazyQuery(y,t)}function F(l){var t=_objectSpread(_objectSpread({},a),l);return Apollo.useSuspenseQuery(y,t)}var k=(0,E.Ps)(f||(f=h()([`
    query user($id: ID!) {
  result: user(id: $id) {
    ...UserFragment
  }
}
    `,""])),m);function g(l){var t=i()(i()({},a),l);return U.a(k,t)}function A(l){var t=_objectSpread(_objectSpread({},a),l);return Apollo.useLazyQuery(k,t)}function s(l){var t=_objectSpread(_objectSpread({},a),l);return Apollo.useSuspenseQuery(k,t)}var v=(0,E.Ps)(u||(u=h()([`
    mutation createUser($input: UserCreateInput!) {
  result: createUser(input: $input) {
    ...UserFragment
  }
}
    `,""])),m);function b(l){var t=i()(i()({},a),l);return w.D(v,t)}var C=(0,E.Ps)(c||(c=h()([`
    mutation updateUser($id: ID!, $input: UserUpdateInput!) {
  result: updateUser(id: $id, input: $input, merge: true) {
    ...UserFragment
  }
}
    `,""])),m);function W(l){var t=i()(i()({},a),l);return w.D(C,t)}var K=(0,E.Ps)(o||(o=h()([`
    query findUserByUsername($username: String) {
  result: users(where: {username: $username}, first: 1) {
    id
    name
  }
}
    `])));function D(l){var t=_objectSpread(_objectSpread({},a),l);return Apollo.useQuery(K,t)}function j(l){var t=i()(i()({},a),l);return T.t(K,t)}function R(l){var t=_objectSpread(_objectSpread({},a),l);return Apollo.useSuspenseQuery(K,t)}var N=(0,E.Ps)(e||(e=h()([`
    mutation deleteManyUsers($where: UserWhereInput!) {
  result: deleteManyUsers(where: $where) {
    count
  }
}
    `])));function Q(l){var t=i()(i()({},a),l);return w.D(N,t)}},82144:function(Y,B,n){n.d(B,{bT:function(){return P.bT},kD:function(){return P.kD},ny:function(){return P.ny},s6:function(){return P.s6},xY:function(){return P.xY}});var P=n(74167)},58321:function(Y,B,n){n.r(B),n.d(B,{default:function(){return L}});var P=n(5574),i=n.n(P),x=n(62435),h=n(96974),E=n(39711),U=n(46027),w=n(35908),T=n(58301),p=n(73588),r=n(79817),f=n(12708),u=n(82144),c=n(14336),o=n(74167),e=n(86074);function a(I){var F=(0,c.Z)(o.TS,{onDeleted:function(){I&&I()},dialog:{title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",content:function(s,v){var b;if(v.batch){var C=s;b="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(C.length," \u4E2A\u7528\u6237\u5417\uFF1F")}else b=(0,e.jsxs)(e.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,e.jsx)("strong",{children:s.name})]});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"tip-confirm",children:b}),(0,e.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]})}}}),k=F.delete,g=F.deleteMany;return{delete:k,deleteMany:g}}var m=a;function y(){var I=(0,h.s0)(),F=(0,E.lr)(),k=i()(F,1),g=k[0],A=(0,w.ot)(),s=A.data,v=(0,x.useMemo)(function(){return(0,T.bp)(g,[{source:"q",target:"keywords"}])},[g.get("q")]),b=(0,x.useMemo)(function(){var d=(0,T.bp)(g,[{source:"q",target:"where.name_contains"},{source:"sex",target:"where.sex"},{source:"page",transform:function(M){return parseInt(M)}},{source:"per_page",transform:function(M){return parseInt(M)}},{source:"sort",target:"orderBy",transform:function(M){var O=M.split(":"),Z=i()(O,2),$=Z[0],H=Z[1];return"".concat($,"_").concat(H)}}]);return d.where=d.where||{},d.where.tenantId=s==null?void 0:s.tenantId,d},[g.toString(),s==null?void 0:s.tenantId]),C=(0,T.ZP)(u.xY,{variables:b,skip:!(s!=null&&s.tenantId)}),W=i()(C,2),K=W[0],D=W[1],j=D.loading,R=D.pageInfo,N=D.refetch,Q=(0,x.useCallback)(function(d,_,M){var O=(0,T.Oh)({searchForm:v,pagination:d,filters:_,sorter:M},[{source:"searchForm.keywords",target:"q",skip:function($){return!$}},{source:"pagination.current",target:"page",skip:function($){return $===1}},{source:"pagination.pageSize",target:"per_page",skip:function($){return $===15}},{source:"sorter.field",target:"sort",transform:function($){return"".concat($,":").concat(M.order==="ascend"?"asc":"desc")}}]);I(location.pathname+"?"+O,{replace:!0})},[v]),l=m(N),t=l.delete,z=l.deleteMany,V=(0,x.useCallback)(function(d){I(location.pathname+(d?"?q="+d:""),{replace:!0})},[]),G=(0,x.useCallback)(function(d){return function(){z(d)}},[]),S=(0,x.useCallback)(function(d){return function(_){_.key==="edit"?I("/system/users/".concat(d.id)):_.key==="delete"&&t(d)}},[t]);return(0,e.jsx)(p.vs,{header:{title:"\u7528\u6237\u5217\u8868"},children:(0,e.jsxs)(r.Card,{className:"mb-5 mb-xl-10",children:[(0,e.jsxs)(r.Card.Header,{className:"pt-8",children:[(0,e.jsx)(r.Card.Title,{className:"flex-column",children:(0,e.jsx)(r.Input.Search,{solid:!0,className:"w-250px",placeholder:"\u641C\u7D22\u7528\u6237",onSearch:V})}),(0,e.jsx)(r.Card.Toolbar,{children:(0,e.jsx)("div",{className:"d-flex justify-content-end",children:(0,e.jsx)(r.Button,{as:E.rU,variant:"primary",className:"me-3",icon:(0,e.jsx)(U.ZP,{className:"svg-icon-2",name:"Duotune/arr075"}),to:"/system/users/new",children:"\u65B0\u5EFA\u7528\u6237"})})})]}),(0,e.jsx)(r.Card.Body,{children:!(R!=null&&R.total)&&!j?(0,e.jsx)(r.Card,{className:"mb-5 mb-xl-10",children:(0,e.jsx)(r.Empty,{title:"\u8FD8\u6CA1\u6709\u7528\u6237",description:"\u9A6C\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u7528\u6237\u5427\uFF01",image:"/assets/media/illustrations/sigma-1/4.png",children:(0,e.jsx)(r.Button,{variant:"primary",children:"\u6DFB\u52A0\u7528\u6237"})})}):(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(r.BlockUI,{overlayClassName:"bg-white bg-opacity-25",loading:j,children:(0,e.jsx)(r.Table,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(_){return(0,e.jsxs)(e.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,e.jsx)("span",{className:"mx-2",children:_}),"\u4E2A\u7528\u6237"]})},toolbar:function(_){return(0,e.jsx)("div",{children:(0,e.jsx)(r.Button,{color:"danger",onClick:G(_),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},noRowsRenderer:function(){return(0,e.jsx)(r.Empty,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:[{key:"name",title:"\u540D\u79F0",sortOrder:(0,f.PE)(g,"name"),render:function(_,M){return(0,e.jsxs)("div",{className:"d-flex py-2 align-items-center",children:[(0,e.jsx)(r.Symbol.Avatar,{src:M.avatar}),(0,e.jsx)("span",{className:"ms-2 text-muted",children:_})]})}},{key:"username",title:"\u8D26\u6237",sorter:!0,width:120,sortOrder:(0,f.PE)(g,"username")},{key:"email",title:"\u90AE\u7BB1",width:180,render:function(_){return(0,e.jsx)("span",{className:"text-muted",children:_==null?void 0:_.address})}},{key:"phone",title:"\u7535\u8BDD",width:180,render:function(_){return(0,e.jsx)("span",{className:"text-muted",children:_==null?void 0:_.number})}},{key:"createdAt",title:"\u521B\u5EFA\u65F6\u95F4",width:120},{title:"\u64CD\u4F5C",key:"action",width:140,render:function(_,M){return(0,e.jsx)("div",{children:(0,e.jsx)(r.Dropdown,{overlay:(0,e.jsxs)(r.Menu,{onClick:S(M),className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-2",children:[(0,e.jsx)(r.Menu.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,e.jsx)(r.Menu.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",children:(0,e.jsxs)(r.Button,{variant:"clean",activeColor:"light-primary",children:["\u64CD \u4F5C",(0,e.jsx)(U.ZP,{className:"ms-2 svg-icon-5 m-0",name:"Duotune/arr072"})]})})})}}],pagination:R,onChange:Q,dataSource:K})})})})]})})}var L=y}}]);
