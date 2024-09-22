"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6186],{14336:function(X,T,e){var B=e(15009),_=e.n(B),N=e(99289),b=e.n(N),I=e(97857),x=e.n(I),M=e(5574),V=e.n(M),p=e(62435),l=e(79817),h=e(12708);function i(c,o){return c.replace(/{(\w+)}/g,function(s,a){return o[a]!==void 0?o[a]:s})}function f(c,o){var s=c(x()({fetchPolicy:"network-only"},(o==null?void 0:o.mutation)||{})),a=V()(s,1),C=a[0],w=(0,p.useRef)(!1),k=(0,p.useCallback)(function(){var A=b()(_()().mark(function R(E,U){var F,m,L,S,P,D,y,$,W;return _()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return F=(U==null?void 0:U.dialog)||(o==null?void 0:o.dialog)||{},m=(U==null?void 0:U.mutation)||(o==null?void 0:o.mutation)||{},L=(U==null?void 0:U.onDeleted)||(o==null?void 0:o.onDeleted),S=F.width,P=F.title,D=F.content,y=!1,Array.isArray(E)?(y=!0,typeof P=="function"&&(P=P(E,{batch:!0})),typeof D=="function"&&(D=D(E,{batch:!0}))):E&&(typeof P=="string"&&(P=i(P,E)),typeof D=="string"&&(D=i(D,E)),typeof P=="function"&&(P=P(E,{batch:!1})),typeof D=="function"&&(D=D(E,{batch:!1}))),$=function(){var g=b()(_()().mark(function Q(){return _()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,C(x()(x()({fetchPolicy:"network-only"},m),{},{variables:{where:{id_in:y?E:[E==null?void 0:E.id]}}}));case 2:case"end":return O.stop()}},Q)}));return function(){return g.apply(this,arguments)}}(),u.next=10,l.Modal.confirm(x()(x()({},F),{},{title:P,content:D,width:S,okText:"\u5220 \u9664",okClassName:"btn-danger",allowOutsideClick:function(){return!w.current},preConfirm:function(){var g=b()(_()().mark(function J(){var O,H,Z;return _()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return w.current=!0,K.prev=1,O=document.querySelector(".swal2-confirm"),O.textContent="\u5220\u9664\u4E2D...",H=document.createElement("span"),H.classList.add("spinner-border-sm","ms-2","spinner-border","align-middle"),O.appendChild(H),K.next=9,(0,h.gw)($(),350);case 9:Z=K.sent,L&&L(Z);case 11:return K.prev=11,w.current=!1,K.finish(11);case 14:case"end":return K.stop()}},J,null,[[1,,11,14]])}));function Q(){return g.apply(this,arguments)}return Q}()}));case 10:if(W=u.sent,W.isConfirmed){u.next=13;break}return u.abrupt("return",!1);case 13:return l.Toast.success("\u5220\u9664\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),u.abrupt("return",!0);case 15:case"end":return u.stop()}},R)}));return function(R,E){return A.apply(this,arguments)}}(),[]),r=(0,p.useCallback)(function(){var A=b()(_()().mark(function R(E,U){return _()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",k(E,U));case 1:case"end":return m.stop()}},R)}));return function(R,E){return A.apply(this,arguments)}}(),[o,C]),G=(0,p.useCallback)(function(A,R){return k(A,R)},[]);return{delete:r,deleteMany:G}}T.Z=f},58301:function(X,T,e){e.d(T,{Oh:function(){return M},bp:function(){return V}});var B=e(97857),_=e.n(B),N=e(62435);function b(p,l){var h,i,f=p(_()({fetchPolicy:"network-only"},l)),c=f.data,o=f.loading,s=f.previousData,a=f.refetch,C=f.error,w=(0,N.useMemo)(function(){return o?s==null?void 0:s.result.pageInfo:c==null?void 0:c.result.pageInfo},[c==null||(h=c.result)===null||h===void 0?void 0:h.pageInfo.total,o,s==null||(i=s.result)===null||i===void 0?void 0:i.pageInfo.total]),k=(c==null?void 0:c.result.edges.map(function(r){return r.node}))||[];return[k,{loading:o,pageInfo:w,error:C,variables:{},refetch:a}]}function I(p,l){return l.split(".").reduce(function(h,i){return h&&h[i]!==void 0?h[i]:void 0},p)}function x(p,l,h){for(var i=l.split("."),f=p;i.length>1;){var c=i.shift();f[c]||(f[c]={}),f=f[c]}f[i[0]]=h}function M(p,l){var h=l.map(function(i){var f=i.source,c=i.target,o=i.transform,s=i.skip,a=I(p,f);if(a==null||s&&s(a))return"";var C=o?o(a):String(a);return"".concat(encodeURIComponent(c||f),"=").concat(encodeURIComponent(C))});return h.filter(function(i){return i}).join("&")}function V(p,l){var h={};return l.forEach(function(i){var f=i.source,c=i.target,o=i.transform,s=i.skip,a=p.get(f);if(!(!a||a.trim()==="")){var C=o?o(a):a;s&&s(C)||(c?x(h,c,C):h[f]=C)}}),h}T.ZP=b},76186:function(X,T,e){e.r(T),e.d(T,{default:function(){return F}});var B=e(73588),_=e(15009),N=e.n(_),b=e(99289),I=e.n(b),x=e(97857),M=e.n(x),V=e(5574),p=e.n(V),l=e(62435),h=e(96974),i=e(39711),f=e(46027),c=e(35908),o=e(14336),s=e(58301),a=e(79817),C=e(82144),w=e(12708),k=e(60551),r=e(86074);function G(m){var L=m.data,S=m.delete,P=(0,l.useState)(!1),D=p()(P,2),y=D[0],$=D[1],W=(0,h.s0)(),d=(0,l.useCallback)(function(u){var g=u.key;g==="edit"?W("/pim/devices/".concat(L.id)):g==="delete"&&S({name:L.name,id:L.id})},[]);return(0,r.jsx)(a.Dropdown,{overlay:(0,r.jsxs)(a.Menu,{onClick:d,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,r.jsx)(a.Menu.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,r.jsx)(a.Menu.Item,{className:"px-3",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",onVisibleChange:$,visible:y,children:(0,r.jsxs)(a.Button,{variant:"light",activeColor:"light-primary",children:["\u64CD \u4F5C",(0,r.jsx)(f.ZP,{className:"ms-2 svg-icon-5 m-0",name:"Duotune/arr072"})]})})}var A=function(m){return m[m.sn=0]="sn",m[m.name=1]="name",m[m.warrantyStatus=2]="warrantyStatus",m[m.customer=3]="customer",m[m.customerStore=4]="customerStore",m[m.createdAt=5]="createdAt",m}({});function R(m){var L=(0,c.ot)(),S=L.data,P=(0,i.lr)(),D=p()(P,1),y=D[0],$=(0,h.s0)(),W=(0,l.useMemo)(function(){return(0,s.bp)(y,[{source:"q",target:"keywords"}])},[y.get("q")]),d=(0,l.useState)({}),u=p()(d,2),g=u[0],Q=u[1];(0,l.useEffect)(function(){Q(function(n){return y.get("name_contains")&&(n.name_contains=y.get("name_contains")),y.get("customer")&&(n.customer=y.get("customer")),y.get("customerStore")&&(n.customerStore=y.get("customerStore")),y.get("createdBy")&&(n.createdBy=y.get("createdBy")),n})},[y]);var J=(0,C.xY)({variables:{where:{tenantId:S==null?void 0:S.tenantId},pageSize:100},fetchPolicy:"network-only",skip:!(S!=null&&S.tenantId)}),O=J.data,H=(0,k.rq)({fetchPolicy:"network-only"}),Z=H.data,ne=(0,l.useCallback)(function(n,t,v){var j=(0,s.Oh)({searchForm:W,pagination:n,filters:t,sorter:v},[{source:"searchForm.keywords",target:"q",skip:function(z){return!z}},{source:"pagination.current",target:"page",skip:function(z){return z===1}},{source:"pagination.pageSize",target:"per_page",skip:function(z){return z===15}},{source:"sorter.field",target:"sort",transform:function(z){return"".concat(z,":").concat(v.order==="ascend"?"asc":"desc")}}]);$(location.pathname+"?"+j,{replace:!0})},[W]),K=(0,l.useMemo)(function(){return(0,s.bp)(y,[{source:"q",target:"where.name_contains"},{source:"sex",target:"where.sex"},{source:"page",transform:function(t){return parseInt(t)}},{source:"per_page",transform:function(t){return parseInt(t)}},{source:"sort",target:"orderBy",transform:function(t){var v=t.split(":"),j=p()(v,2),Y=j[0],z=j[1];return"".concat(Y,"_").concat(z)}}])},[y.toString()]),ae=(0,s.ZP)(k.Ew,{variables:K,fetchPolicy:"network-only"}),re=p()(ae,2),ue=re[0],q=re[1],se=q.loading,oe=q.pageInfo,ie=q.refetch,le=(0,l.useCallback)(function(n){Q(function(t){return M()(M()({},t),{},{customerStore:void 0,customer:n})})},[]),de=(0,l.useCallback)(function(n){Q(function(t){return M()(M()({},t),{},{createdBy:n||void 0})})},[]),ce=(0,l.useCallback)(function(n){Q(function(t){return M()(M()({},t),{},{customerStore:n})})},[]),me=(0,l.useCallback)(function(n){$(location.pathname+(n?"?q="+n:""),{replace:!0})},[]),_e=(0,k.YG)({fetchPolicy:"network-only",skip:!(g!=null&&g.customer),variables:{where:{customer:g==null?void 0:g.customer}}}),ee=_e.data,ve=(Z==null?void 0:Z.result)||[],fe=(ee==null?void 0:ee.result)||[],pe=(O==null?void 0:O.result.edges.map(function(n){return n.node}))||[],te=(0,o.Z)(k.an,{onDeleted:function(){ie()},dialog:{title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",content:function(t,v){var j;if(v.batch){var Y=t;j="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(Y.length," \u4E2A\u8BBE\u5907\u5417\uFF1F")}else j=(0,r.jsxs)(r.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,r.jsx)("strong",{children:t.name})]});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"tip-confirm",children:j}),(0,r.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]})}}}),he=te.delete,ye=te.deleteMany,ge=(0,l.useCallback)(function(n){return I()(N()().mark(function t(){return N()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:ye(n);case 1:case"end":return j.stop()}},t)}))},[]);return(0,r.jsxs)(a.Card,{className:"mb-5 mb-xl-10",children:[(0,r.jsxs)(a.Card.Header,{className:"pt-8",children:[(0,r.jsxs)(a.Card.Title,{className:"flex-row",children:[(0,r.jsx)(a.Input.Search,{solid:!0,value:W.keywords,className:"w-250px",placeholder:"\u641C\u7D22\u8BBE\u5907",onSearch:me}),(0,r.jsx)(a.Button,{variant:!1,children:"\u66F4\u591A\u7B5B\u9009\u6761\u4EF6"})]}),(0,r.jsxs)(a.Card.Toolbar,{children:[(0,r.jsx)("div",{className:"me-4 my-1",children:(0,r.jsx)(a.Select2,{solid:!0,size:"sm",className:"w-150px",onChange:function(t){return de(t)},matcher:function(t,v){return!t.term||t.term===""||v.text.includes(t.term)?v:null},placeholder:"\u521B\u5EFA\u4EBA",value:g==null?void 0:g.createdBy,options:pe.map(function(n){return{label:n.name,value:n.id}})})}),(0,r.jsx)("div",{className:"me-4 my-1",children:(0,r.jsx)(a.Select2,{solid:!0,size:"sm",className:"w-150px",onChange:function(t){return le(t)},matcher:function(t,v){return!t.term||t.term===""||v.text.includes(t.term)?v:null},placeholder:"\u5168\u90E8\u5BA2\u6237",value:g==null?void 0:g.customer,options:ve.map(function(n){return{label:n.name,value:n.id}})})}),(0,r.jsx)("div",{className:"me-4 my-1",children:(0,r.jsx)(a.Select2,{solid:!0,size:"sm",className:"w-250px",placeholder:"\u5168\u90E8\u95E8\u5E97",value:g==null?void 0:g.customerStore,onChange:function(t){return ce(t)},options:fe.map(function(n){return{label:n.name,value:n.id}})})}),(0,r.jsx)(a.Button,{className:"me-4 my-1",children:"\u5BFC\u51FA\u6570\u636E"})]})]}),(0,r.jsx)(a.Card.Body,{children:(0,r.jsx)(a.BlockUI,{overlayClassName:"bg-white bg-opacity-25",loading:se,children:(0,r.jsx)(a.Table,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(t){return(0,r.jsxs)(r.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,r.jsx)("span",{className:"mx-2",children:t}),"\u4E2A\u8BBE\u5907"]})},toolbar:function(t){return(0,r.jsx)("div",{children:(0,r.jsx)(a.Button,{color:"success",onClick:ge(t),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},noRowsRenderer:function(){return(0,r.jsx)(a.Empty,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:[{key:"sn",title:"\u5E8F\u5217\u53F7",sorter:!0,sortOrder:(0,w.PE)(y,"sn"),width:260,render:function(t,v){return(0,r.jsx)("span",{onClick:function(){$("/pim/devices/".concat(v.id))},children:t})}},{key:"name",title:"\u8BBE\u5907\u540D\u79F0",sorter:!0,sortOrder:(0,w.PE)(y,"name"),render:function(t,v){var j;return(0,r.jsxs)("div",{children:[v==null||(j=v.brand)===null||j===void 0?void 0:j.name," | ",t]})}},{key:"warrantyStatus",title:"\u4FDD\u4FEE\u72B6\u6001",width:80,render:function(t){var v={INACTIVE:"\u672A\u6FC0\u6D3B",ACTIVE:"\u6FC0\u6D3B",EXPIRED:"\u5DF2\u8FC7\u671F",CANCELED:"\u5DF2\u4F5C\u5E9F"};return(0,r.jsx)("div",{children:v[t]})}},{key:"owner.customer.name",title:"\u6240\u5C5E\u5BA2\u6237",width:120,render:function(t){return(0,r.jsx)("div",{children:t})}},{key:"owner.name",title:"\u6240\u5C5E\u95E8\u5E97",width:120,render:function(t){return(0,r.jsx)("div",{children:t})}},{key:"createdAt",title:"\u521B\u5EFA\u65F6\u95F4",width:120,sorter:!0,sortOrder:(0,w.PE)(y,"createdAt")},{title:"\u64CD\u4F5C",key:"action",width:140,render:function(t,v){return(0,r.jsx)(G,{data:v,delete:he})}}],pagination:oe,onChange:ne,dataSource:ue})})})]})}var E=R;function U(){return(0,r.jsx)(B.vs,{header:{title:"\u8BBE\u5907\u5217\u8868"},children:(0,r.jsx)(E,{columns:[A.sn,A.name,A.customerStore,A.warrantyStatus]})})}var F=U},74167:function(X,T,e){e.d(T,{TS:function(){return W},bT:function(){return A},kD:function(){return L},ny:function(){return F},s6:function(){return D},xY:function(){return w}});var B=e(97857),_=e.n(B),N=e(68400),b=e.n(N),I=e(75063),x=e(37887),M=e(50319),V=e(73359),p,l,h,i,f,c,o,s={},a=(0,I.Ps)(p||(p=b()([`
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
    `]))),C=(0,I.Ps)(l||(l=b()([`
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
    `,""])),a);function w(d){var u=_()(_()({},s),d);return x.a(C,u)}function k(d){var u=_objectSpread(_objectSpread({},s),d);return Apollo.useLazyQuery(C,u)}function r(d){var u=_objectSpread(_objectSpread({},s),d);return Apollo.useSuspenseQuery(C,u)}var G=(0,I.Ps)(h||(h=b()([`
    query user($id: ID!) {
  result: user(id: $id) {
    ...UserFragment
  }
}
    `,""])),a);function A(d){var u=_()(_()({},s),d);return x.a(G,u)}function R(d){var u=_objectSpread(_objectSpread({},s),d);return Apollo.useLazyQuery(G,u)}function E(d){var u=_objectSpread(_objectSpread({},s),d);return Apollo.useSuspenseQuery(G,u)}var U=(0,I.Ps)(i||(i=b()([`
    mutation createUser($input: UserCreateInput!) {
  result: createUser(input: $input) {
    ...UserFragment
  }
}
    `,""])),a);function F(d){var u=_()(_()({},s),d);return M.D(U,u)}var m=(0,I.Ps)(f||(f=b()([`
    mutation updateUser($id: ID!, $input: UserUpdateInput!) {
  result: updateUser(id: $id, input: $input, merge: true) {
    ...UserFragment
  }
}
    `,""])),a);function L(d){var u=_()(_()({},s),d);return M.D(m,u)}var S=(0,I.Ps)(c||(c=b()([`
    query findUserByUsername($tenantId: ID, $username: String) {
  result: users(where: {tenantId: $tenantId, username: $username}, first: 1) {
    id
    name
  }
}
    `])));function P(d){var u=_objectSpread(_objectSpread({},s),d);return Apollo.useQuery(S,u)}function D(d){var u=_()(_()({},s),d);return V.t(S,u)}function y(d){var u=_objectSpread(_objectSpread({},s),d);return Apollo.useSuspenseQuery(S,u)}var $=(0,I.Ps)(o||(o=b()([`
    mutation deleteManyUsers($where: UserWhereInput!) {
  result: deleteManyUsers(where: $where) {
    count
  }
}
    `])));function W(d){var u=_()(_()({},s),d);return M.D($,u)}},82144:function(X,T,e){e.d(T,{bT:function(){return B.bT},kD:function(){return B.kD},ny:function(){return B.ny},s6:function(){return B.s6},xY:function(){return B.xY}});var B=e(74167)}}]);
