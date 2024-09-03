"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7958],{14336:function(H,S,e){var O=e(15009),v=e.n(O),Q=e(99289),P=e.n(Q),U=e(97857),g=e.n(U),K=e(5574),x=e.n(K),_=e(62435),E=e(79817),h=e(12708);function i(d,u){return d.replace(/{(\w+)}/g,function(o,a){return u[a]!==void 0?u[a]:o})}function p(d,u){var o=d(g()({fetchPolicy:"network-only"},(u==null?void 0:u.mutation)||{})),a=x()(o,1),C=a[0],L=(0,_.useRef)(!1),R=(0,_.useCallback)(function(){var F=P()(v()().mark(function B(m,b){var I,l,w,A,j,D,y,T,G;return v()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return I=(b==null?void 0:b.dialog)||(u==null?void 0:u.dialog)||{},l=(b==null?void 0:b.mutation)||(u==null?void 0:u.mutation)||{},w=(b==null?void 0:b.onDeleted)||(u==null?void 0:u.onDeleted),A=I.width,j=I.title,D=I.content,y=!1,Array.isArray(m)?(y=!0,typeof j=="function"&&(j=j(m,{batch:!0})),typeof D=="function"&&(D=D(m,{batch:!0}))):m&&(typeof j=="string"&&(j=i(j,m)),typeof D=="string"&&(D=i(D,m)),typeof j=="function"&&(j=j(m,{batch:!1})),typeof D=="function"&&(D=D(m,{batch:!1}))),T=function(){var N=P()(v()().mark(function Y(){return v()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,C(g()(g()({fetchPolicy:"network-only"},l),{},{variables:{where:{id_in:y?m:[m==null?void 0:m.id]}}}));case 2:case"end":return k.stop()}},Y)}));return function(){return N.apply(this,arguments)}}(),s.next=10,E.Modal.confirm(g()(g()({},I),{},{title:j,content:D,width:A,okText:"\u5220 \u9664",okClassName:"btn-danger",allowOutsideClick:function(){return!L.current},preConfirm:function(){var N=P()(v()().mark(function X(){var k,Z,J;return v()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return L.current=!0,W.prev=1,k=document.querySelector(".swal2-confirm"),k.textContent="\u5220\u9664\u4E2D...",Z=document.createElement("span"),Z.classList.add("spinner-border-sm","ms-2","spinner-border","align-middle"),k.appendChild(Z),W.next=9,(0,h.gw)(T(),350);case 9:J=W.sent,w&&w(J);case 11:return W.prev=11,L.current=!1,W.finish(11);case 14:case"end":return W.stop()}},X,null,[[1,,11,14]])}));function Y(){return N.apply(this,arguments)}return Y}()}));case 10:if(G=s.sent,G.isConfirmed){s.next=13;break}return s.abrupt("return",!1);case 13:return E.Toast.success("\u5220\u9664\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),s.abrupt("return",!0);case 15:case"end":return s.stop()}},B)}));return function(B,m){return F.apply(this,arguments)}}(),[]),t=(0,_.useCallback)(function(){var F=P()(v()().mark(function B(m,b){return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",R(m,b));case 1:case"end":return l.stop()}},B)}));return function(B,m){return F.apply(this,arguments)}}(),[u,C]),z=(0,_.useCallback)(function(F,B){return R(F,B)},[]);return{delete:t,deleteMany:z}}S.Z=p},58301:function(H,S,e){e.d(S,{Oh:function(){return K},bp:function(){return x}});var O=e(97857),v=e.n(O),Q=e(62435);function P(_,E){var h,i,p=_(v()({fetchPolicy:"network-only"},E)),d=p.data,u=p.loading,o=p.previousData,a=p.refetch,C=p.error;console.log("=====>",d,E);var L=(0,Q.useMemo)(function(){return u?o==null?void 0:o.result.pageInfo:d==null?void 0:d.result.pageInfo},[d==null||(h=d.result)===null||h===void 0?void 0:h.pageInfo.total,u,o==null||(i=o.result)===null||i===void 0?void 0:i.pageInfo.total]),R=(d==null?void 0:d.result.edges.map(function(t){return t.node}))||[];return[R,{loading:u,pageInfo:L,error:C,variables:{},refetch:a}]}function U(_,E){return E.split(".").reduce(function(h,i){return h&&h[i]!==void 0?h[i]:void 0},_)}function g(_,E,h){for(var i=E.split("."),p=_;i.length>1;){var d=i.shift();p[d]||(p[d]={}),p=p[d]}p[i[0]]=h}function K(_,E){var h=E.map(function(i){var p=i.source,d=i.target,u=i.transform,o=i.skip,a=U(_,p);if(a==null||o&&o(a))return"";var C=u?u(a):String(a);return"".concat(encodeURIComponent(d||p),"=").concat(encodeURIComponent(C))});return h.filter(function(i){return i}).join("&")}function x(_,E){var h={};return E.forEach(function(i){var p=i.source,d=i.target,u=i.transform,o=i.skip,a=_.get(p);if(!(!a||a.trim()==="")){var C=u?u(a):a;o&&o(C)||(d?g(h,d,C):h[p]=C)}}),h}S.ZP=P},17958:function(H,S,e){e.r(S);var O=e(15009),v=e.n(O),Q=e(99289),P=e.n(Q),U=e(97857),g=e.n(U),K=e(5574),x=e.n(K),_=e(62435),E=e(96974),h=e(39711),i=e(46027),p=e(35908),d=e(14336),u=e(58301),o=e(73588),a=e(79817),C=e(82144),L=e(12708),R=e(60551),t=e(86074);function z(B){var m=B.data,b=B.delete,I=(0,_.useState)(!1),l=x()(I,2),w=l[0],A=l[1],j=(0,E.s0)(),D=(0,_.useCallback)(function(y){var T=y.key;T==="edit"?j("/pim/devices/".concat(m.id)):T==="delete"&&b({name:m.name,id:m.id})},[]);return(0,t.jsx)(a.Dropdown,{overlay:(0,t.jsxs)(a.Menu,{onClick:D,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,t.jsx)(a.Menu.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,t.jsx)(a.Menu.Item,{className:"px-3",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",onVisibleChange:A,visible:w,children:(0,t.jsxs)(a.Button,{variant:"light",activeColor:"light-primary",children:["\u64CD \u4F5C",(0,t.jsx)(i.ZP,{className:"ms-2 svg-icon-5 m-0",name:"Duotune/arr072"})]})})}function F(){var B=(0,p.ot)(),m=B.data,b=(0,h.lr)(),I=x()(b,1),l=I[0],w=(0,E.s0)(),A=(0,_.useMemo)(function(){return(0,u.bp)(l,[{source:"q",target:"keywords"}])},[l.get("q")]),j=(0,_.useState)({}),D=x()(j,2),y=D[0],T=D[1];(0,_.useEffect)(function(){T(function(n){return l.get("name_contains")&&(n.name_contains=l.get("name_contains")),l.get("customer")&&(n.customer=l.get("customer")),l.get("customerStore")&&(n.customerStore=l.get("customerStore")),l.get("createdBy")&&(n.createdBy=l.get("createdBy")),n})},[l]);var G=(0,C.xY)({variables:{where:{tenantId:m==null?void 0:m.tenantId},pageSize:100},fetchPolicy:"network-only",skip:!(m!=null&&m.tenantId)}),c=G.data,s=(0,R.rq)({fetchPolicy:"network-only"}),N=s.data,Y=(0,_.useCallback)(function(n,r,f){var M=(0,u.Oh)({searchForm:A,pagination:n,filters:r,sorter:f},[{source:"searchForm.keywords",target:"q",skip:function($){return!$}},{source:"pagination.current",target:"page",skip:function($){return $===1}},{source:"pagination.pageSize",target:"per_page",skip:function($){return $===15}},{source:"sorter.field",target:"sort",transform:function($){return"".concat($,":").concat(f.order==="ascend"?"asc":"desc")}}]);w(location.pathname+"?"+M,{replace:!0})},[A]),X=(0,_.useMemo)(function(){return(0,u.bp)(l,[{source:"q",target:"where.name_contains"},{source:"sex",target:"where.sex"},{source:"page",transform:function(r){return parseInt(r)}},{source:"per_page",transform:function(r){return parseInt(r)}},{source:"sort",target:"orderBy",transform:function(r){var f=r.split(":"),M=x()(f,2),V=M[0],$=M[1];return"".concat(V,"_").concat($)}}])},[l.toString()]),k=(0,u.ZP)(R.Ew,{variables:X,fetchPolicy:"network-only"}),Z=x()(k,2),J=Z[0],q=Z[1],W=q.loading,re=q.pageInfo,te=q.refetch,ae=(0,_.useCallback)(function(n){T(function(r){return g()(g()({},r),{},{customerStore:void 0,customer:n})})},[]),ue=(0,_.useCallback)(function(n){T(function(r){return g()(g()({},r),{},{createdBy:n||void 0})})},[]),se=(0,_.useCallback)(function(n){T(function(r){return g()(g()({},r),{},{customerStore:n})})},[]),oe=(0,_.useCallback)(function(n){w(location.pathname+(n?"?q="+n:""),{replace:!0})},[]),_e=(0,R.YG)({fetchPolicy:"network-only",skip:!(y!=null&&y.customer),variables:{where:{customer:y==null?void 0:y.customer}}}),ee=_e.data,ie=(N==null?void 0:N.result)||[],le=(ee==null?void 0:ee.result)||[],de=(c==null?void 0:c.result.edges.map(function(n){return n.node}))||[],ne=(0,d.Z)(R.an,{onDeleted:function(){te()},dialog:{title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",content:function(r,f){var M;if(f.batch){var V=r;M="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(V.length," \u4E2A\u8BBE\u5907\u5417\uFF1F")}else M=(0,t.jsxs)(t.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,t.jsx)("strong",{children:r.name})]});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{className:"tip-confirm",children:M}),(0,t.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]})}}}),me=ne.delete,ce=ne.deleteMany,fe=(0,_.useCallback)(function(n){return P()(v()().mark(function r(){return v()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:ce(n);case 1:case"end":return M.stop()}},r)}))},[]);return(0,t.jsx)(o.vs,{header:{title:"\u8BBE\u5907\u5217\u8868"},children:(0,t.jsxs)(a.Card,{className:"mb-5 mb-xl-10",children:[(0,t.jsxs)(a.Card.Header,{className:"pt-8",children:[(0,t.jsx)(a.Card.Title,{className:"flex-column",children:(0,t.jsx)(a.Input.Search,{solid:!0,value:A.keywords,className:"w-250px",placeholder:"\u641C\u7D22\u8BBE\u5907",onSearch:oe})}),(0,t.jsxs)(a.Card.Toolbar,{children:[(0,t.jsx)("div",{className:"me-4 my-1",children:(0,t.jsx)(a.Select2,{solid:!0,size:"sm",className:"w-150px",onChange:function(r){return ue(r)},matcher:function(r,f){return!r.term||r.term===""||f.text.includes(r.term)?f:null},placeholder:"\u521B\u5EFA\u4EBA",value:y==null?void 0:y.createdBy,options:de.map(function(n){return{label:n.name,value:n.id}})})}),(0,t.jsx)("div",{className:"me-4 my-1",children:(0,t.jsx)(a.Select2,{solid:!0,size:"sm",className:"w-150px",onChange:function(r){return ae(r)},matcher:function(r,f){return!r.term||r.term===""||f.text.includes(r.term)?f:null},placeholder:"\u5168\u90E8\u5BA2\u6237",value:y==null?void 0:y.customer,options:ie.map(function(n){return{label:n.name,value:n.id}})})}),(0,t.jsx)("div",{className:"me-4 my-1",children:(0,t.jsx)(a.Select2,{solid:!0,size:"sm",className:"w-250px",placeholder:"\u5168\u90E8\u95E8\u5E97",value:y==null?void 0:y.customerStore,onChange:function(r){return se(r)},options:le.map(function(n){return{label:n.name,value:n.id}})})}),(0,t.jsx)(a.Button,{className:"me-4 my-1",children:"\u5BFC\u51FA\u6570\u636E"})]})]}),(0,t.jsx)(a.Card.Body,{children:(0,t.jsx)(a.BlockUI,{overlayClassName:"bg-white bg-opacity-25",loading:W,children:(0,t.jsx)(a.Table,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(r){return(0,t.jsxs)(t.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,t.jsx)("span",{className:"mx-2",children:r}),"\u4E2A\u8BBE\u5907"]})},toolbar:function(r){return(0,t.jsx)("div",{children:(0,t.jsx)(a.Button,{color:"success",onClick:fe(r),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},noRowsRenderer:function(){return(0,t.jsx)(a.Empty,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:[{key:"sn",title:"\u8D44\u4EA7\u7F16\u53F7",sorter:!0,sortOrder:(0,L.PE)(l,"no"),width:260,render:function(r,f){return(0,t.jsx)(h.rU,{to:"/pim/devices/".concat(f==null?void 0:f.id),className:"text-gray-700",children:r})}},{key:"name",title:"\u8BBE\u5907\u540D\u79F0",sorter:!0,sortOrder:(0,L.PE)(l,"name"),render:function(r,f){var M;return(0,t.jsxs)("div",{className:"text-gray-700",children:[f==null||(M=f.brand)===null||M===void 0?void 0:M.name," | ",r]})}},{key:"warrantyStatus",title:"\u4FDD\u4FEE\u72B6\u6001",width:80,render:function(r){var f={INACTIVE:"\u672A\u6FC0\u6D3B",ACTIVE:"\u6FC0\u6D3B",EXPIRED:"\u5DF2\u8FC7\u671F",CANCELED:"\u5DF2\u4F5C\u5E9F"};return(0,t.jsx)("div",{className:"text-gray-700",children:f[r]})}},{key:"owner.customer.name",title:"\u6240\u5C5E\u5BA2\u6237",width:120,render:function(r){return(0,t.jsx)("div",{className:"text-gray-700",children:r})}},{key:"owner.name",title:"\u6240\u5C5E\u95E8\u5E97",width:120,render:function(r){return(0,t.jsx)("div",{className:"text-gray-700",children:r})}},{key:"createdAt",title:"\u521B\u5EFA\u65F6\u95F4",width:120,sorter:!0,sortOrder:(0,L.PE)(l,"createdAt")},{title:"\u64CD\u4F5C",key:"action",width:140,render:function(r,f){return(0,t.jsx)(z,{data:f,delete:me})}}],pagination:re,onChange:Y,dataSource:J})})})]})})}S.default=F},74167:function(H,S,e){e.d(S,{TS:function(){return G},bT:function(){return F},kD:function(){return w},ny:function(){return I},s6:function(){return D},xY:function(){return L}});var O=e(97857),v=e.n(O),Q=e(68400),P=e.n(Q),U=e(75063),g=e(37887),K=e(50319),x=e(73359),_,E,h,i,p,d,u,o={},a=(0,U.Ps)(_||(_=P()([`
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
    `]))),C=(0,U.Ps)(E||(E=P()([`
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
    `,""])),a);function L(c){var s=v()(v()({},o),c);return g.a(C,s)}function R(c){var s=_objectSpread(_objectSpread({},o),c);return Apollo.useLazyQuery(C,s)}function t(c){var s=_objectSpread(_objectSpread({},o),c);return Apollo.useSuspenseQuery(C,s)}var z=(0,U.Ps)(h||(h=P()([`
    query user($id: ID!) {
  result: user(id: $id) {
    ...UserFragment
  }
}
    `,""])),a);function F(c){var s=v()(v()({},o),c);return g.a(z,s)}function B(c){var s=_objectSpread(_objectSpread({},o),c);return Apollo.useLazyQuery(z,s)}function m(c){var s=_objectSpread(_objectSpread({},o),c);return Apollo.useSuspenseQuery(z,s)}var b=(0,U.Ps)(i||(i=P()([`
    mutation createUser($input: UserCreateInput!) {
  result: createUser(input: $input) {
    ...UserFragment
  }
}
    `,""])),a);function I(c){var s=v()(v()({},o),c);return K.D(b,s)}var l=(0,U.Ps)(p||(p=P()([`
    mutation updateUser($id: ID!, $input: UserUpdateInput!) {
  result: updateUser(id: $id, input: $input, merge: true) {
    ...UserFragment
  }
}
    `,""])),a);function w(c){var s=v()(v()({},o),c);return K.D(l,s)}var A=(0,U.Ps)(d||(d=P()([`
    query findUserByUsername($username: String) {
  result: users(where: {username: $username}, first: 1) {
    id
    name
  }
}
    `])));function j(c){var s=_objectSpread(_objectSpread({},o),c);return Apollo.useQuery(A,s)}function D(c){var s=v()(v()({},o),c);return x.t(A,s)}function y(c){var s=_objectSpread(_objectSpread({},o),c);return Apollo.useSuspenseQuery(A,s)}var T=(0,U.Ps)(u||(u=P()([`
    mutation deleteManyUsers($where: UserWhereInput!) {
  result: deleteManyUsers(where: $where) {
    count
  }
}
    `])));function G(c){var s=v()(v()({},o),c);return K.D(T,s)}},82144:function(H,S,e){e.d(S,{bT:function(){return O.bT},kD:function(){return O.kD},ny:function(){return O.ny},s6:function(){return O.s6},xY:function(){return O.xY}});var O=e(74167)}}]);
