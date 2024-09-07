"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7958],{14336:function(H,S,e){var O=e(15009),f=e.n(O),Q=e(99289),C=e.n(Q),U=e(97857),g=e.n(U),K=e(5574),L=e.n(K),_=e(62435),E=e(79817),h=e(12708);function i(c,u){return c.replace(/{(\w+)}/g,function(o,a){return u[a]!==void 0?u[a]:o})}function p(c,u){var o=c(g()({fetchPolicy:"network-only"},(u==null?void 0:u.mutation)||{})),a=L()(o,1),j=a[0],R=(0,_.useRef)(!1),w=(0,_.useCallback)(function(){var F=C()(f()().mark(function B(d,b){var I,l,x,A,M,D,y,T,G;return f()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return I=(b==null?void 0:b.dialog)||(u==null?void 0:u.dialog)||{},l=(b==null?void 0:b.mutation)||(u==null?void 0:u.mutation)||{},x=(b==null?void 0:b.onDeleted)||(u==null?void 0:u.onDeleted),A=I.width,M=I.title,D=I.content,y=!1,Array.isArray(d)?(y=!0,typeof M=="function"&&(M=M(d,{batch:!0})),typeof D=="function"&&(D=D(d,{batch:!0}))):d&&(typeof M=="string"&&(M=i(M,d)),typeof D=="string"&&(D=i(D,d)),typeof M=="function"&&(M=M(d,{batch:!1})),typeof D=="function"&&(D=D(d,{batch:!1}))),T=function(){var N=C()(f()().mark(function Y(){return f()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,j(g()(g()({fetchPolicy:"network-only"},l),{},{variables:{where:{id_in:y?d:[d==null?void 0:d.id]}}}));case 2:case"end":return k.stop()}},Y)}));return function(){return N.apply(this,arguments)}}(),s.next=10,E.Modal.confirm(g()(g()({},I),{},{title:M,content:D,width:A,okText:"\u5220 \u9664",okClassName:"btn-danger",allowOutsideClick:function(){return!R.current},preConfirm:function(){var N=C()(f()().mark(function X(){var k,Z,J;return f()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return R.current=!0,W.prev=1,k=document.querySelector(".swal2-confirm"),k.textContent="\u5220\u9664\u4E2D...",Z=document.createElement("span"),Z.classList.add("spinner-border-sm","ms-2","spinner-border","align-middle"),k.appendChild(Z),W.next=9,(0,h.gw)(T(),350);case 9:J=W.sent,x&&x(J);case 11:return W.prev=11,R.current=!1,W.finish(11);case 14:case"end":return W.stop()}},X,null,[[1,,11,14]])}));function Y(){return N.apply(this,arguments)}return Y}()}));case 10:if(G=s.sent,G.isConfirmed){s.next=13;break}return s.abrupt("return",!1);case 13:return E.Toast.success("\u5220\u9664\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),s.abrupt("return",!0);case 15:case"end":return s.stop()}},B)}));return function(B,d){return F.apply(this,arguments)}}(),[]),r=(0,_.useCallback)(function(){var F=C()(f()().mark(function B(d,b){return f()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",w(d,b));case 1:case"end":return l.stop()}},B)}));return function(B,d){return F.apply(this,arguments)}}(),[u,j]),z=(0,_.useCallback)(function(F,B){return w(F,B)},[]);return{delete:r,deleteMany:z}}S.Z=p},58301:function(H,S,e){e.d(S,{Oh:function(){return K},bp:function(){return L}});var O=e(97857),f=e.n(O),Q=e(62435);function C(_,E){var h,i,p=_(f()({fetchPolicy:"network-only"},E)),c=p.data,u=p.loading,o=p.previousData,a=p.refetch,j=p.error,R=(0,Q.useMemo)(function(){return u?o==null?void 0:o.result.pageInfo:c==null?void 0:c.result.pageInfo},[c==null||(h=c.result)===null||h===void 0?void 0:h.pageInfo.total,u,o==null||(i=o.result)===null||i===void 0?void 0:i.pageInfo.total]),w=(c==null?void 0:c.result.edges.map(function(r){return r.node}))||[];return[w,{loading:u,pageInfo:R,error:j,variables:{},refetch:a}]}function U(_,E){return E.split(".").reduce(function(h,i){return h&&h[i]!==void 0?h[i]:void 0},_)}function g(_,E,h){for(var i=E.split("."),p=_;i.length>1;){var c=i.shift();p[c]||(p[c]={}),p=p[c]}p[i[0]]=h}function K(_,E){var h=E.map(function(i){var p=i.source,c=i.target,u=i.transform,o=i.skip,a=U(_,p);if(a==null||o&&o(a))return"";var j=u?u(a):String(a);return"".concat(encodeURIComponent(c||p),"=").concat(encodeURIComponent(j))});return h.filter(function(i){return i}).join("&")}function L(_,E){var h={};return E.forEach(function(i){var p=i.source,c=i.target,u=i.transform,o=i.skip,a=_.get(p);if(!(!a||a.trim()==="")){var j=u?u(a):a;o&&o(j)||(c?g(h,c,j):h[p]=j)}}),h}S.ZP=C},17958:function(H,S,e){e.r(S);var O=e(15009),f=e.n(O),Q=e(99289),C=e.n(Q),U=e(97857),g=e.n(U),K=e(5574),L=e.n(K),_=e(62435),E=e(96974),h=e(39711),i=e(46027),p=e(35908),c=e(14336),u=e(58301),o=e(73588),a=e(79817),j=e(82144),R=e(12708),w=e(60551),r=e(86074);function z(B){var d=B.data,b=B.delete,I=(0,_.useState)(!1),l=L()(I,2),x=l[0],A=l[1],M=(0,E.s0)(),D=(0,_.useCallback)(function(y){var T=y.key;T==="edit"?M("/pim/devices/".concat(d.id)):T==="delete"&&b({name:d.name,id:d.id})},[]);return(0,r.jsx)(a.Dropdown,{overlay:(0,r.jsxs)(a.Menu,{onClick:D,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,r.jsx)(a.Menu.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,r.jsx)(a.Menu.Item,{className:"px-3",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",onVisibleChange:A,visible:x,children:(0,r.jsxs)(a.Button,{variant:"light",activeColor:"light-primary",children:["\u64CD \u4F5C",(0,r.jsx)(i.ZP,{className:"ms-2 svg-icon-5 m-0",name:"Duotune/arr072"})]})})}function F(){var B=(0,p.ot)(),d=B.data,b=(0,h.lr)(),I=L()(b,1),l=I[0],x=(0,E.s0)(),A=(0,_.useMemo)(function(){return(0,u.bp)(l,[{source:"q",target:"keywords"}])},[l.get("q")]),M=(0,_.useState)({}),D=L()(M,2),y=D[0],T=D[1];(0,_.useEffect)(function(){T(function(n){return l.get("name_contains")&&(n.name_contains=l.get("name_contains")),l.get("customer")&&(n.customer=l.get("customer")),l.get("customerStore")&&(n.customerStore=l.get("customerStore")),l.get("createdBy")&&(n.createdBy=l.get("createdBy")),n})},[l]);var G=(0,j.xY)({variables:{where:{tenantId:d==null?void 0:d.tenantId},pageSize:100},fetchPolicy:"network-only",skip:!(d!=null&&d.tenantId)}),m=G.data,s=(0,w.rq)({fetchPolicy:"network-only"}),N=s.data,Y=(0,_.useCallback)(function(n,t,v){var P=(0,u.Oh)({searchForm:A,pagination:n,filters:t,sorter:v},[{source:"searchForm.keywords",target:"q",skip:function($){return!$}},{source:"pagination.current",target:"page",skip:function($){return $===1}},{source:"pagination.pageSize",target:"per_page",skip:function($){return $===15}},{source:"sorter.field",target:"sort",transform:function($){return"".concat($,":").concat(v.order==="ascend"?"asc":"desc")}}]);x(location.pathname+"?"+P,{replace:!0})},[A]),X=(0,_.useMemo)(function(){return(0,u.bp)(l,[{source:"q",target:"where.name_contains"},{source:"sex",target:"where.sex"},{source:"page",transform:function(t){return parseInt(t)}},{source:"per_page",transform:function(t){return parseInt(t)}},{source:"sort",target:"orderBy",transform:function(t){var v=t.split(":"),P=L()(v,2),V=P[0],$=P[1];return"".concat(V,"_").concat($)}}])},[l.toString()]),k=(0,u.ZP)(w.Ew,{variables:X,fetchPolicy:"network-only"}),Z=L()(k,2),J=Z[0],q=Z[1],W=q.loading,re=q.pageInfo,te=q.refetch,ae=(0,_.useCallback)(function(n){T(function(t){return g()(g()({},t),{},{customerStore:void 0,customer:n})})},[]),ue=(0,_.useCallback)(function(n){T(function(t){return g()(g()({},t),{},{createdBy:n||void 0})})},[]),se=(0,_.useCallback)(function(n){T(function(t){return g()(g()({},t),{},{customerStore:n})})},[]),oe=(0,_.useCallback)(function(n){x(location.pathname+(n?"?q="+n:""),{replace:!0})},[]),_e=(0,w.YG)({fetchPolicy:"network-only",skip:!(y!=null&&y.customer),variables:{where:{customer:y==null?void 0:y.customer}}}),ee=_e.data,ie=(N==null?void 0:N.result)||[],le=(ee==null?void 0:ee.result)||[],de=(m==null?void 0:m.result.edges.map(function(n){return n.node}))||[],ne=(0,c.Z)(w.an,{onDeleted:function(){te()},dialog:{title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",content:function(t,v){var P;if(v.batch){var V=t;P="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(V.length," \u4E2A\u8BBE\u5907\u5417\uFF1F")}else P=(0,r.jsxs)(r.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,r.jsx)("strong",{children:t.name})]});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"tip-confirm",children:P}),(0,r.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]})}}}),me=ne.delete,ce=ne.deleteMany,fe=(0,_.useCallback)(function(n){return C()(f()().mark(function t(){return f()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:ce(n);case 1:case"end":return P.stop()}},t)}))},[]);return(0,r.jsx)(o.vs,{header:{title:"\u8BBE\u5907\u5217\u8868"},children:(0,r.jsxs)(a.Card,{className:"mb-5 mb-xl-10",children:[(0,r.jsxs)(a.Card.Header,{className:"pt-8",children:[(0,r.jsxs)(a.Card.Title,{className:"flex-row",children:[(0,r.jsx)(a.Input.Search,{solid:!0,value:A.keywords,className:"w-250px",placeholder:"\u641C\u7D22\u8BBE\u5907",onSearch:oe}),(0,r.jsx)(a.Button,{variant:!1,children:"\u66F4\u591A\u7B5B\u9009\u6761\u4EF6"})]}),(0,r.jsxs)(a.Card.Toolbar,{children:[(0,r.jsx)("div",{className:"me-4 my-1",children:(0,r.jsx)(a.Select2,{solid:!0,size:"sm",className:"w-150px",onChange:function(t){return ue(t)},matcher:function(t,v){return!t.term||t.term===""||v.text.includes(t.term)?v:null},placeholder:"\u521B\u5EFA\u4EBA",value:y==null?void 0:y.createdBy,options:de.map(function(n){return{label:n.name,value:n.id}})})}),(0,r.jsx)("div",{className:"me-4 my-1",children:(0,r.jsx)(a.Select2,{solid:!0,size:"sm",className:"w-150px",onChange:function(t){return ae(t)},matcher:function(t,v){return!t.term||t.term===""||v.text.includes(t.term)?v:null},placeholder:"\u5168\u90E8\u5BA2\u6237",value:y==null?void 0:y.customer,options:ie.map(function(n){return{label:n.name,value:n.id}})})}),(0,r.jsx)("div",{className:"me-4 my-1",children:(0,r.jsx)(a.Select2,{solid:!0,size:"sm",className:"w-250px",placeholder:"\u5168\u90E8\u95E8\u5E97",value:y==null?void 0:y.customerStore,onChange:function(t){return se(t)},options:le.map(function(n){return{label:n.name,value:n.id}})})}),(0,r.jsx)(a.Button,{className:"me-4 my-1",children:"\u5BFC\u51FA\u6570\u636E"})]})]}),(0,r.jsx)(a.Card.Body,{children:(0,r.jsx)(a.BlockUI,{overlayClassName:"bg-white bg-opacity-25",loading:W,children:(0,r.jsx)(a.Table,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(t){return(0,r.jsxs)(r.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,r.jsx)("span",{className:"mx-2",children:t}),"\u4E2A\u8BBE\u5907"]})},toolbar:function(t){return(0,r.jsx)("div",{children:(0,r.jsx)(a.Button,{color:"success",onClick:fe(t),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},noRowsRenderer:function(){return(0,r.jsx)(a.Empty,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:[{key:"sn",title:"\u5E8F\u5217\u53F7",sorter:!0,sortOrder:(0,R.PE)(l,"sn"),width:260,render:function(t,v){return(0,r.jsx)("span",{onClick:function(){x("/pim/devices/".concat(v.id))},children:t})}},{key:"name",title:"\u8BBE\u5907\u540D\u79F0",sorter:!0,sortOrder:(0,R.PE)(l,"name"),render:function(t,v){var P;return(0,r.jsxs)("div",{children:[v==null||(P=v.brand)===null||P===void 0?void 0:P.name," | ",t]})}},{key:"warrantyStatus",title:"\u4FDD\u4FEE\u72B6\u6001",width:80,render:function(t){var v={INACTIVE:"\u672A\u6FC0\u6D3B",ACTIVE:"\u6FC0\u6D3B",EXPIRED:"\u5DF2\u8FC7\u671F",CANCELED:"\u5DF2\u4F5C\u5E9F"};return(0,r.jsx)("div",{children:v[t]})}},{key:"owner.customer.name",title:"\u6240\u5C5E\u5BA2\u6237",width:120,render:function(t){return(0,r.jsx)("div",{children:t})}},{key:"owner.name",title:"\u6240\u5C5E\u95E8\u5E97",width:120,render:function(t){return(0,r.jsx)("div",{children:t})}},{key:"createdAt",title:"\u521B\u5EFA\u65F6\u95F4",width:120,sorter:!0,sortOrder:(0,R.PE)(l,"createdAt")},{title:"\u64CD\u4F5C",key:"action",width:140,render:function(t,v){return(0,r.jsx)(z,{data:v,delete:me})}}],pagination:re,onChange:Y,dataSource:J})})})]})})}S.default=F},74167:function(H,S,e){e.d(S,{TS:function(){return G},bT:function(){return F},kD:function(){return x},ny:function(){return I},s6:function(){return D},xY:function(){return R}});var O=e(97857),f=e.n(O),Q=e(68400),C=e.n(Q),U=e(75063),g=e(37887),K=e(50319),L=e(73359),_,E,h,i,p,c,u,o={},a=(0,U.Ps)(_||(_=C()([`
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
    `]))),j=(0,U.Ps)(E||(E=C()([`
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
    `,""])),a);function R(m){var s=f()(f()({},o),m);return g.a(j,s)}function w(m){var s=_objectSpread(_objectSpread({},o),m);return Apollo.useLazyQuery(j,s)}function r(m){var s=_objectSpread(_objectSpread({},o),m);return Apollo.useSuspenseQuery(j,s)}var z=(0,U.Ps)(h||(h=C()([`
    query user($id: ID!) {
  result: user(id: $id) {
    ...UserFragment
  }
}
    `,""])),a);function F(m){var s=f()(f()({},o),m);return g.a(z,s)}function B(m){var s=_objectSpread(_objectSpread({},o),m);return Apollo.useLazyQuery(z,s)}function d(m){var s=_objectSpread(_objectSpread({},o),m);return Apollo.useSuspenseQuery(z,s)}var b=(0,U.Ps)(i||(i=C()([`
    mutation createUser($input: UserCreateInput!) {
  result: createUser(input: $input) {
    ...UserFragment
  }
}
    `,""])),a);function I(m){var s=f()(f()({},o),m);return K.D(b,s)}var l=(0,U.Ps)(p||(p=C()([`
    mutation updateUser($id: ID!, $input: UserUpdateInput!) {
  result: updateUser(id: $id, input: $input, merge: true) {
    ...UserFragment
  }
}
    `,""])),a);function x(m){var s=f()(f()({},o),m);return K.D(l,s)}var A=(0,U.Ps)(c||(c=C()([`
    query findUserByUsername($username: String) {
  result: users(where: {username: $username}, first: 1) {
    id
    name
  }
}
    `])));function M(m){var s=_objectSpread(_objectSpread({},o),m);return Apollo.useQuery(A,s)}function D(m){var s=f()(f()({},o),m);return L.t(A,s)}function y(m){var s=_objectSpread(_objectSpread({},o),m);return Apollo.useSuspenseQuery(A,s)}var T=(0,U.Ps)(u||(u=C()([`
    mutation deleteManyUsers($where: UserWhereInput!) {
  result: deleteManyUsers(where: $where) {
    count
  }
}
    `])));function G(m){var s=f()(f()({},o),m);return K.D(T,s)}},82144:function(H,S,e){e.d(S,{bT:function(){return O.bT},kD:function(){return O.kD},ny:function(){return O.ny},s6:function(){return O.s6},xY:function(){return O.xY}});var O=e(74167)}}]);
