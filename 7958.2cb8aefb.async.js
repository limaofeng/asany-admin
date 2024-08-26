"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7958],{14336:function(X,x,r){var k=r(15009),_=r.n(k),N=r(97857),D=r.n(N),M=r(99289),B=r.n(M),S=r(62435),j=r(79817),c=r(12708);function b(s,d){return s.replace(/{(\w+)}/g,function(u,E){return d[E]!==void 0?d[E]:u})}function f(s,d){var u=(0,S.useRef)(!1),E=(0,S.useCallback)(function(){var o=B()(_()().mark(function a(h){var O,n,U,W;return _()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return O=s.width,n=s.title,U=s.content,h&&(typeof n=="string"&&(n=b(n,h)),typeof U=="string"&&(U=b(U,h)),typeof n=="function"&&(n=n(h)),typeof U=="function"&&(U=U(h))),y.next=5,j.Modal.confirm(D()(D()({},s),{},{title:n,content:U,width:O,okText:"\u5220 \u9664",okClassName:"btn-danger",allowOutsideClick:function(){return!u.current},preConfirm:function(){var w=B()(_()().mark(function g(){var L,I,i;return _()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return u.current=!0,P.prev=1,L=document.querySelector(".swal2-confirm"),L.textContent="\u5220\u9664\u4E2D...",I=document.createElement("span"),I.classList.add("spinner-border-sm","ms-2","spinner-border","align-middle"),L.appendChild(I),P.next=9,(0,c.gw)(d(h),350);case 9:i=P.sent,console.log(i);case 11:return P.prev=11,u.current=!1,P.finish(11);case 14:case"end":return P.stop()}},g,null,[[1,,11,14]])}));function Q(){return w.apply(this,arguments)}return Q}()}));case 5:if(W=y.sent,W.isConfirmed){y.next=8;break}return y.abrupt("return",!1);case 8:return j.Toast.success("\u5220\u9664\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),y.abrupt("return",!0);case 10:case"end":return y.stop()}},a)}));return function(a){return o.apply(this,arguments)}}(),[d,s]);return[E]}x.Z=f},58301:function(X,x,r){r.d(x,{Oh:function(){return S},bp:function(){return j}});var k=r(97857),_=r.n(k),N=r(62435);function D(c,b){var f,s,d=c(_()({fetchPolicy:"network-only"},b)),u=d.data,E=d.loading,o=d.previousData,a=d.refetch,h=d.error,O=(0,N.useMemo)(function(){return E?o==null?void 0:o.result.pageInfo:u==null?void 0:u.result.pageInfo},[u==null||(f=u.result)===null||f===void 0?void 0:f.pageInfo.total,E,o==null||(s=o.result)===null||s===void 0?void 0:s.pageInfo.total]),n=(u==null?void 0:u.result.edges.map(function(U){return U.node}))||[];return[n,{loading:E,pageInfo:O,error:h,variables:{},refetch:a}]}function M(c,b){return b.split(".").reduce(function(f,s){return f&&f[s]!==void 0?f[s]:void 0},c)}function B(c,b,f){for(var s=b.split("."),d=c;s.length>1;){var u=s.shift();d[u]||(d[u]={}),d=d[u]}d[s[0]]=f}function S(c,b){var f=b.map(function(s){var d=s.source,u=s.target,E=s.transform,o=s.skip,a=M(c,d);if(a==null||o&&o(a))return"";var h=E?E(a):String(a);return"".concat(encodeURIComponent(u||d),"=").concat(encodeURIComponent(h))});return f.filter(function(s){return s}).join("&")}function j(c,b){var f={};return b.forEach(function(s){var d=s.source,u=s.target,E=s.transform,o=s.skip,a=c.get(d);if(!(!a||a.trim()==="")){var h=E?E(a):a;o&&o(h)||(u?B(f,u,h):f[d]=h)}}),f}x.ZP=D},17958:function(X,x,r){r.r(x);var k=r(97857),_=r.n(k),N=r(15009),D=r.n(N),M=r(99289),B=r.n(M),S=r(5574),j=r.n(S),c=r(62435),b=r(96974),f=r(39711),s=r(46027),d=r(84562),u=r(14336),E=r(58301),o=r(73588),a=r(79817),h=r(58163),O=r(91726),n=r(86074);function U($){var y=$.data,w=$.refetch,Q=(0,c.useState)(!1),g=j()(Q,2),L=g[0],I=g[1],i=(0,b.s0)(),R=(0,O.an)(),P=j()(R,1),Y=P[0],V=(0,u.Z)({title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",content:function(F){return(0,n.jsxs)(n.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,n.jsx)("strong",{children:F.name}),"\u201D\u3002\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u9006\u8F6C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u60A8\u786E\u5B9A\u5220\u9664\u5417\uFF1F"]})}},function(){var K=B()(D()().mark(function F(z){return D()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,Y({variables:{where:{id_in:[z==null?void 0:z.id]}}});case 2:w();case 3:case"end":return A.stop()}},F)}));return function(F){return K.apply(this,arguments)}}()),G=j()(V,1),l=G[0],m=(0,c.useCallback)(function(K){var F=K.key;F==="edit"?i("/pim/devices/".concat(y.id)):F==="delete"&&l({name:y.name,id:y.id})},[]);return(0,n.jsx)(a.Dropdown,{overlay:(0,n.jsxs)(a.Menu,{onClick:m,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,n.jsx)(a.Menu.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,n.jsx)(a.Menu.Item,{className:"px-3",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",onVisibleChange:I,visible:L,children:(0,n.jsxs)(a.Button,{variant:"light",activeColor:"light-primary",children:["\u64CD \u4F5C",(0,n.jsx)(s.ZP,{className:"ms-2 svg-icon-5 m-0",name:"Duotune/arr072"})]})})}function W(){var $=(0,d.ot)(),y=$.data,w=(0,f.lr)(),Q=j()(w,1),g=Q[0],L=(0,c.useState)({}),I=j()(L,2),i=I[0],R=I[1];(0,c.useEffect)(function(){R(function(t){return g.get("name_contains")&&(t.name_contains=g.get("name_contains")),g.get("customer")&&(t.customer=g.get("customer")),g.get("customerStore")&&(t.customerStore=g.get("customerStore")),g.get("createdBy")&&(t.createdBy=g.get("createdBy")),t})},[g]);var P=(0,O.an)(),Y=j()(P,1),V=Y[0],G=(0,h.xY)({variables:{where:{tenantId:y==null?void 0:y.tenantId},pageSize:100},fetchPolicy:"network-only",skip:!(y!=null&&y.tenantId)}),l=G.data,m=(0,O.rq)({fetchPolicy:"network-only"}),K=m.data,F=(0,E.ZP)(O.Ew,{toQuery:function(e,p,v,H){var C={};return v!=null&&v.name_contains&&(C.q=v==null?void 0:v.name_contains),v!=null&&v.customer&&(C.customer=v.customer),v!=null&&v.customerStore&&(C.customerStore=v.customerStore),v!=null&&v.createdBy&&(C.createdBy=v.createdBy),H&&(C.orderBy=H.field+"_"+(H.order==="ascend"?"asc":"desc")),C.page=p.current,C},toVariables:function(e){return e.where={},e.q&&(e.where.name_contains=e.q,delete e.q),e.customer&&(e.where.customer=e.customer,delete e.customer),e.customerStore&&(e.where.customerStore=e.customerStore,delete e.customerStore),e.createdBy&&(e.where.createdBy=e.createdBy,delete e.createdBy),e}}),z=j()(F,2),q=z[0],A=z[1],ee=A.loading,ne=A.pageInfo,T=A.sorter,re=A.refetch,Z=A.onChange,te=(0,c.useCallback)(function(t){R(function(e){return _()(_()({},e),{},{customerStore:void 0,customer:t})})},[Z,T]),ae=(0,c.useCallback)(function(t){R(function(e){return _()(_()({},e),{},{createdBy:t||void 0})})},[]),se=(0,c.useCallback)(function(t){R(function(e){return _()(_()({},e),{},{customerStore:t})})},[]),ue=(0,c.useCallback)(function(t){R(function(e){return _()(_()({},e),{},{name_contains:t})})},[Z,T]);(0,c.useEffect)(function(){Z({current:g.get("page")||1,pageSize:10},i,T)},[i,Z,T,g.get("page")]);var oe=(0,O.YG)({fetchPolicy:"network-only",skip:!(i!=null&&i.customer),variables:{where:{customer:i==null?void 0:i.customer}}}),J=oe.data,ie=(K==null?void 0:K.result)||[],le=(J==null?void 0:J.result)||[],_e=(l==null?void 0:l.result.edges.map(function(t){return t.node}))||[],de=(0,c.useCallback)(function(t){return B()(D()().mark(function e(){var p,v;return D()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return p="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(t.length," \u4E2A\u8BBE\u5907\u5417\uFF1F"),C.next=3,a.Modal.confirm({title:"\u786E\u5B9A\u5220\u9664",content:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:"tip-confirm",children:p}),(0,n.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]}),okClassName:"btn-danger",okText:"\u5220\u9664"});case 3:if(v=C.sent,v.isConfirmed){C.next=6;break}return C.abrupt("return");case 6:return C.next=8,V({variables:{where:{id_in:t}}});case 8:a.Toast.success("\u8BBE\u5907\u6279\u91CF\u5220\u9664\u6210\u529F",2e3,{placement:"bottom-left",progressBar:!0});case 9:case"end":return C.stop()}},e)}))},[]);return(0,n.jsx)(o.vs,{header:{title:"\u8BBE\u5907\u5217\u8868"},children:(0,n.jsxs)(a.Card,{className:"mb-5 mb-xl-10",children:[(0,n.jsxs)(a.Card.Header,{className:"pt-8",children:[(0,n.jsx)(a.Card.Title,{className:"flex-column",children:(0,n.jsx)(a.Input.Search,{solid:!0,value:i==null?void 0:i.name_contains,className:"w-250px",placeholder:"\u641C\u7D22\u8BBE\u5907",onSearch:ue})}),(0,n.jsxs)(a.Card.Toolbar,{children:[(0,n.jsx)("div",{className:"me-4 my-1",children:(0,n.jsx)(a.Select2,{solid:!0,size:"sm",className:"w-150px",onChange:function(e){return ae(e)},matcher:function(e,p){return!e.term||e.term===""||p.text.includes(e.term)?p:null},placeholder:"\u521B\u5EFA\u4EBA",value:i==null?void 0:i.createdBy,options:_e.map(function(t){return{label:t.name,value:t.id}})})}),(0,n.jsx)("div",{className:"me-4 my-1",children:(0,n.jsx)(a.Select2,{solid:!0,size:"sm",className:"w-150px",onChange:function(e){return te(e)},matcher:function(e,p){return!e.term||e.term===""||p.text.includes(e.term)?p:null},placeholder:"\u5168\u90E8\u5BA2\u6237",value:i==null?void 0:i.customer,options:ie.map(function(t){return{label:t.name,value:t.id}})})}),(0,n.jsx)("div",{className:"me-4 my-1",children:(0,n.jsx)(a.Select2,{solid:!0,size:"sm",className:"w-250px",placeholder:"\u5168\u90E8\u95E8\u5E97",value:i==null?void 0:i.customerStore,onChange:function(e){return se(e)},options:le.map(function(t){return{label:t.name,value:t.id}})})})]})]}),(0,n.jsx)(a.Card.Body,{children:(0,n.jsx)(a.BlockUI,{overlayClassName:"bg-white bg-opacity-25",loading:ee,children:(0,n.jsx)(a.Table,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(e){return(0,n.jsxs)(n.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,n.jsx)("span",{className:"mx-2",children:e}),"\u4E2A\u8BBE\u5907"]})},toolbar:function(e){return(0,n.jsx)("div",{children:(0,n.jsx)(a.Button,{color:"success",onClick:de(e),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},noRowsRenderer:function(){return(0,n.jsx)(a.Empty,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:[{key:"no",title:"\u8D44\u4EA7\u7F16\u53F7",sorter:!0,sortOrder:T.field==="no"?T.order:void 0,width:260,render:function(e,p){return(0,n.jsx)(f.rU,{to:"/pim/devices/".concat(p.id),className:"text-gray-700",children:e})}},{key:"name",title:"\u8BBE\u5907\u540D\u79F0",sorter:!0,sortOrder:T.field==="name"?T.order:void 0,render:function(e,p){var v;return(0,n.jsxs)("div",{className:"text-gray-700",children:[p==null||(v=p.brand)===null||v===void 0?void 0:v.name," | ",e]})}},{key:"warrantyStatus",title:"\u4FDD\u4FEE\u72B6\u6001",width:80,render:function(e){var p={INACTIVE:"\u672A\u6FC0\u6D3B",ACTIVE:"\u6FC0\u6D3B",EXPIRED:"\u5DF2\u8FC7\u671F",CANCELED:"\u5DF2\u4F5C\u5E9F"};return(0,n.jsx)("div",{className:"text-gray-700",children:p[e]})}},{key:"owner.customer.name",title:"\u6240\u5C5E\u5BA2\u6237",width:120,render:function(e){return(0,n.jsx)("div",{className:"text-gray-700",children:e})}},{key:"owner.name",title:"\u6240\u5C5E\u95E8\u5E97",width:120,render:function(e){return(0,n.jsx)("div",{className:"text-gray-700",children:e})}},{key:"createdAt",title:"\u521B\u5EFA\u65F6\u95F4",width:120,sorter:!0,sortOrder:T.field==="createdAt"?T.order:void 0},{title:"\u64CD\u4F5C",key:"action",width:140,render:function(e,p){return(0,n.jsx)(U,{data:p,refetch:re})}}],pagination:ne,onChange:Z,dataSource:q})})})]})})}x.default=W},58163:function(X,x,r){r.d(x,{ny:function(){return g},TS:function(){return G},s6:function(){return P},kD:function(){return I},bT:function(){return $},xY:function(){return O}});var k=r(97857),_=r.n(k),N=r(68400),D=r.n(N),M=r(75063),B=r(37887),S=r(50319),j=r(73359),c,b,f,s,d,u,E,o={},a=(0,M.Ps)(c||(c=D()([`
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
    `]))),h=(0,M.Ps)(b||(b=D()([`
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
    `,""])),a);function O(l){var m=_()(_()({},o),l);return B.a(h,m)}function n(l){var m=_objectSpread(_objectSpread({},o),l);return Apollo.useLazyQuery(h,m)}function U(l){var m=_objectSpread(_objectSpread({},o),l);return Apollo.useSuspenseQuery(h,m)}var W=(0,M.Ps)(f||(f=D()([`
    query user($id: ID!) {
  result: user(id: $id) {
    ...UserFragment
  }
}
    `,""])),a);function $(l){var m=_()(_()({},o),l);return B.a(W,m)}function y(l){var m=_objectSpread(_objectSpread({},o),l);return Apollo.useLazyQuery(W,m)}function w(l){var m=_objectSpread(_objectSpread({},o),l);return Apollo.useSuspenseQuery(W,m)}var Q=(0,M.Ps)(s||(s=D()([`
    mutation createUser($input: UserCreateInput!) {
  result: createUser(input: $input) {
    ...UserFragment
  }
}
    `,""])),a);function g(l){var m=_()(_()({},o),l);return S.D(Q,m)}var L=(0,M.Ps)(d||(d=D()([`
    mutation updateUser($id: ID!, $input: UserUpdateInput!) {
  result: updateUser(id: $id, input: $input, merge: true) {
    ...UserFragment
  }
}
    `,""])),a);function I(l){var m=_()(_()({},o),l);return S.D(L,m)}var i=(0,M.Ps)(u||(u=D()([`
    query findUserByUsername($username: String) {
  result: users(where: {username: $username}, first: 1) {
    id
    name
  }
}
    `])));function R(l){var m=_objectSpread(_objectSpread({},o),l);return Apollo.useQuery(i,m)}function P(l){var m=_()(_()({},o),l);return j.t(i,m)}function Y(l){var m=_objectSpread(_objectSpread({},o),l);return Apollo.useSuspenseQuery(i,m)}var V=(0,M.Ps)(E||(E=D()([`
    mutation deleteManyUsers($where: UserWhereInput!) {
  result: deleteManyUsers(where: $where) {
    count
  }
}
    `])));function G(l){var m=_()(_()({},o),l);return S.D(V,m)}}}]);
