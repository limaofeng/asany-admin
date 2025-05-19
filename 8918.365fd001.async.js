"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8918],{14336:function(V,I,n){var D=n(15009),l=n.n(D),E=n(99289),v=n.n(E),c=n(97857),g=n.n(c),R=n(5574),S=n.n(R),d=n(67294),t=n(89717),f=n(12708);function a(e,u){return e.replace(/{(\w+)}/g,function(r,p){return u[p]!==void 0?u[p]:r})}function s(e,u){var r=e(g()({fetchPolicy:"network-only"},(u==null?void 0:u.mutation)||{})),p=S()(r,1),y=p[0],C=(0,d.useRef)(!1),W=(0,d.useRef)(null),j=(0,d.useCallback)(function(){var F=v()(l()().mark(function w(h,U){var x,N,A,z,b,P,$,Z,_;return l()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return x=(U==null?void 0:U.dialog)||(u==null?void 0:u.dialog)||{},N=(U==null?void 0:U.mutation)||(u==null?void 0:u.mutation)||{},A=(U==null?void 0:U.onDeleted)||(u==null?void 0:u.onDeleted),z=x.width,b=x.title,P=x.content,$=!1,Array.isArray(h)?($=!0,typeof b=="function"&&(b=b(h,{batch:!0})),typeof P=="function"&&(P=P(h,{batch:!0}))):h&&(typeof b=="string"&&(b=a(b,h)),typeof P=="string"&&(P=a(P,h)),typeof b=="function"&&(b=b(h,{batch:!1})),typeof P=="function"&&(P=P(h,{batch:!1}))),Z=function(){var m=v()(l()().mark(function o(){return l()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,y(g()(g()({fetchPolicy:"network-only"},N),{},{variables:{where:{id_in:$?h:[h==null?void 0:h.id]}}}));case 2:case"end":return T.stop()}},o)}));return function(){return m.apply(this,arguments)}}(),B.next=10,t.Modal.confirm(g()(g()({},x),{},{title:b,content:P,width:z,okText:"\u5220 \u9664",okClassName:"btn-danger",allowOutsideClick:function(){return!C.current},preConfirm:function(){var m=v()(l()().mark(function M(){var T,k,L;return l()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return C.current=!0,W.current=null,O.prev=2,T=document.querySelector(".swal2-confirm"),T.textContent="\u5220\u9664\u4E2D...",k=document.createElement("span"),k.classList.add("spinner-border-sm","ms-2","spinner-border","align-middle"),T.appendChild(k),O.next=10,(0,f.gw)(Z(),350);case 10:L=O.sent,A&&A(h,L),O.next=17;break;case 14:O.prev=14,O.t0=O.catch(2),W.current=O.t0;case 17:return O.prev=17,C.current=!1,O.finish(17);case 20:case"end":return O.stop()}},M,null,[[2,14,17,20]])}));function o(){return m.apply(this,arguments)}return o}()}));case 10:if(_=B.sent,!W.current){B.next=14;break}return t.Toast.error("\u5220\u9664\u5931\u8D25:"+W.current.message,2e3,{placement:"top-center",progressBar:!0}),B.abrupt("return",!1);case 14:if(_.isConfirmed){B.next=16;break}return B.abrupt("return",!1);case 16:return t.Toast.success("\u5220\u9664\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),B.abrupt("return",!0);case 18:case"end":return B.stop()}},w)}));return function(w,h){return F.apply(this,arguments)}}(),[]),K=(0,d.useCallback)(function(F,w){return j(F,w)},[u,y]),Q=(0,d.useCallback)(function(F,w){return j(F,w)},[]);return{delete:K,deleteMany:Q}}I.Z=s},58301:function(V,I,n){n.d(I,{Oh:function(){return R},bp:function(){return S}});var D=n(97857),l=n.n(D),E=n(67294);function v(d,t){var f,a,s=d(l()({fetchPolicy:"network-only"},t)),e=s.data,u=s.loading,r=s.previousData,p=s.refetch,y=s.error,C=(0,E.useMemo)(function(){return u?r==null?void 0:r.result.pageInfo:e==null?void 0:e.result.pageInfo},[e==null||(f=e.result)===null||f===void 0?void 0:f.pageInfo.total,u,r==null||(a=r.result)===null||a===void 0?void 0:a.pageInfo.total]),W=(0,E.useMemo)(function(){return e!=null&&e.result?e.result.edges.map(function(j){return j.node}):u&&r!==null&&r!==void 0&&r.result?r.result.edges.map(function(j){return j.node}):[]},[u,e==null?void 0:e.result,r==null?void 0:r.result]);return[W,{loading:u,pageInfo:C,error:y,variables:{},refetch:p}]}function c(d,t){return t.split(".").reduce(function(f,a){return f&&f[a]!==void 0?f[a]:void 0},d)}function g(d,t,f){for(var a=t.split("."),s=d;a.length>1;){var e=a.shift();s[e]||(s[e]={}),s=s[e]}s[a[0]]=f}function R(d,t){var f=t.map(function(a){var s=a.source,e=a.target,u=a.transform,r=a.skip,p=c(d,s);if(p==null||r&&r(p))return"";var y=u?u(p):String(p);return"".concat(encodeURIComponent(e||s),"=").concat(encodeURIComponent(y))});return f.filter(function(a){return a}).join("&")}function S(d,t){var f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=f;return t.forEach(function(s){var e=s.source,u=s.target,r=s.transform,p=s.skip,y=d.get(e);if(!(!y||y.trim()==="")){var C=r?r(y):y;p&&p(C)||(u?g(a,u,C):a[e]=C)}}),a}I.ZP=v},58918:function(V,I,n){var D=n(97857),l=n.n(D),E=n(5574),v=n.n(E),c=n(67294),g=n(96974),R=n(39711),S=n(46027),d=n(58301),t=n(89717),f=n(82144),a=n(58544),s=n(12708),e=n(85893);function u(r,p){var y=(0,g.s0)(),C=(0,R.lr)(),W=v()(C,1),j=W[0],K=r.onEdit||function(){},Q=(0,c.useMemo)(function(){return(0,d.bp)(j,[{source:"q",target:"keywords"}])},[j.get("q")]),F=(0,c.useMemo)(function(){var m=(0,d.bp)(j,[{source:"q",target:"where.name_contains"},{source:"sex",target:"where.sex"},{source:"page",transform:function(M){return parseInt(M)}},{source:"per_page",transform:function(M){return parseInt(M)}},{source:"sort",target:"orderBy",transform:function(M){var T=M.split(":"),k=v()(T,2),L=k[0],Y=k[1];return"".concat(L,"_").concat(Y)}}],{where:l()({},r.where)});return m},[j.toString(),r.where]),w=(0,d.ZP)(f.xY,{variables:F}),h=v()(w,2),U=h[0],x=h[1],N=x.loading,A=x.pageInfo,z=x.refetch;(0,c.useImperativeHandle)(p,function(){return{refetch:function(){z()}}});var b=(0,c.useCallback)(function(m,o,M){var T=(0,d.Oh)({searchForm:Q,pagination:m,filters:o,sorter:M},[{source:"searchForm.keywords",target:"q",skip:function(L){return!L}},{source:"pagination.current",target:"page",skip:function(L){return L===1}},{source:"pagination.pageSize",target:"per_page",skip:function(L){return L===15}},{source:"sorter.field",target:"sort",transform:function(L){return"".concat(L,":").concat(M.order==="ascend"?"asc":"desc")}}]);y(location.pathname+"?"+T,{replace:!0})},[Q]),P=(0,a.Z)(z),$=P.delete,Z=P.deleteMany,_=(0,c.useCallback)(function(m){return function(){Z(m)}},[]),i=(0,c.useCallback)(function(m){return function(o){o.key==="edit"?K(m):o.key==="delete"&&$(m)}},[$,K]),B=(0,c.useCallback)(function(m){y(location.pathname+(m?"?q="+m:""),{replace:!0})},[]);return(0,e.jsxs)(t.Card,{className:"mb-5 mb-xl-10",children:[(0,e.jsxs)(t.Card.Header,{className:"pt-8",children:[(0,e.jsx)(t.Card.Title,{className:"flex-column",children:(0,e.jsx)(t.Input.Search,{solid:!0,className:"w-250px",placeholder:"\u641C\u7D22\u7528\u6237",onSearch:B})}),(0,e.jsx)(t.Card.Toolbar,{children:(0,e.jsx)("div",{className:"d-flex justify-content-end",children:(0,e.jsx)(t.Button,{variant:"primary",className:"me-3",icon:(0,e.jsx)(S.ZP,{className:"svg-icon-2",name:"Duotune/arr075"}),onClick:r.onAdd,children:"\u65B0\u5EFA\u7528\u6237"})})})]}),(0,e.jsx)(t.Card.Body,{children:!(A!=null&&A.total)&&!N?(0,e.jsx)(t.Card,{className:"mb-5 mb-xl-10",children:(0,e.jsx)(t.Empty,{title:"\u8FD8\u6CA1\u6709\u7528\u6237",description:"\u9A6C\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u7528\u6237\u5427\uFF01",image:"/assets/media/illustrations/sigma-1/4.png",children:(0,e.jsx)(t.Button,{variant:"primary",onClick:r.onAdd,children:"\u6DFB\u52A0\u7528\u6237"})})}):(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(t.BlockUI,{overlayClassName:"bg-white bg-opacity-25",loading:N,children:(0,e.jsx)(t.Table,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(o){return(0,e.jsxs)(e.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,e.jsx)("span",{className:"mx-2",children:o}),"\u4E2A\u7528\u6237"]})},toolbar:function(o){return(0,e.jsx)("div",{children:(0,e.jsx)(t.Button,{color:"danger",onClick:_(o),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},noRowsRenderer:function(){return(0,e.jsx)(t.Empty,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:[{key:"name",title:"\u540D\u79F0",sortOrder:(0,s.PE)(j,"name"),render:function(o,M){return(0,e.jsxs)("div",{className:"d-flex py-2 align-items-center",children:[(0,e.jsx)(t.Symbol.Avatar,{src:M.avatar}),(0,e.jsx)("span",{className:"ms-2 text-muted",children:o})]})}},{key:"username",title:"\u8D26\u6237",sorter:!0,width:120,sortOrder:(0,s.PE)(j,"username")},{key:"email",title:"\u90AE\u7BB1",width:180,render:function(o){return(0,e.jsx)("span",{className:"text-muted",children:o==null?void 0:o.address})}},{key:"phone",title:"\u7535\u8BDD",width:180,render:function(o){return(0,e.jsx)("span",{className:"text-muted",children:o==null?void 0:o.number})}},{key:"createdAt",title:"\u521B\u5EFA\u65F6\u95F4",width:120},{title:"\u64CD\u4F5C",key:"action",width:140,render:function(o,M){return(0,e.jsx)("div",{children:(0,e.jsx)(t.Dropdown,{overlay:(0,e.jsxs)(t.Menu,{onClick:i(M),className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-2",children:[(0,e.jsx)(t.Menu.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,e.jsx)(t.Menu.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",children:(0,e.jsxs)(t.Button,{variant:"clean",activeColor:"light-primary",children:["\u64CD \u4F5C",(0,e.jsx)(S.ZP,{className:"ms-2 svg-icon-5 m-0",name:"Duotune/arr072"})]})})})}}],pagination:A,onChange:b,dataSource:U})})})})]})}I.Z=(0,c.forwardRef)(u)},74167:function(V,I,n){n.d(I,{TS:function(){return Z},bT:function(){return Q},kD:function(){return N},ny:function(){return U},s6:function(){return b},xY:function(){return C}});var D=n(97857),l=n.n(D),E=n(68400),v=n.n(E),c=n(75063),g=n(37887),R=n(50319),S=n(73359),d,t,f,a,s,e,u,r={},p=(0,c.Ps)(d||(d=v()([`
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
    `]))),y=(0,c.Ps)(t||(t=v()([`
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
    `,""])),p);function C(_){var i=l()(l()({},r),_);return g.a(y,i)}function W(_){var i=_objectSpread(_objectSpread({},r),_);return Apollo.useLazyQuery(y,i)}function j(_){var i=_objectSpread(_objectSpread({},r),_);return Apollo.useSuspenseQuery(y,i)}var K=(0,c.Ps)(f||(f=v()([`
    query user($id: ID!) {
  result: user(id: $id) {
    ...UserFragment
  }
}
    `,""])),p);function Q(_){var i=l()(l()({},r),_);return g.a(K,i)}function F(_){var i=_objectSpread(_objectSpread({},r),_);return Apollo.useLazyQuery(K,i)}function w(_){var i=_objectSpread(_objectSpread({},r),_);return Apollo.useSuspenseQuery(K,i)}var h=(0,c.Ps)(a||(a=v()([`
    mutation createUser($input: UserCreateInput!) {
  result: createUser(input: $input) {
    ...UserFragment
  }
}
    `,""])),p);function U(_){var i=l()(l()({},r),_);return R.D(h,i)}var x=(0,c.Ps)(s||(s=v()([`
    mutation updateUser($id: ID!, $input: UserUpdateInput!) {
  result: updateUser(id: $id, input: $input, merge: true) {
    ...UserFragment
  }
}
    `,""])),p);function N(_){var i=l()(l()({},r),_);return R.D(x,i)}var A=(0,c.Ps)(e||(e=v()([`
    query findUserByUsername($tenantId: ID, $username: String) {
  result: users(where: {tenantId: $tenantId, username: $username}, first: 1) {
    id
    name
  }
}
    `])));function z(_){var i=_objectSpread(_objectSpread({},r),_);return Apollo.useQuery(A,i)}function b(_){var i=l()(l()({},r),_);return S.t(A,i)}function P(_){var i=_objectSpread(_objectSpread({},r),_);return Apollo.useSuspenseQuery(A,i)}var $=(0,c.Ps)(u||(u=v()([`
    mutation deleteManyUsers($where: UserWhereInput!) {
  result: deleteManyUsers(where: $where) {
    count
  }
}
    `])));function Z(_){var i=l()(l()({},r),_);return R.D($,i)}},82144:function(V,I,n){n.d(I,{bT:function(){return D.bT},kD:function(){return D.kD},ny:function(){return D.ny},s6:function(){return D.s6},xY:function(){return D.xY}});var D=n(74167)},58544:function(V,I,n){var D=n(14336),l=n(74167),E=n(85893);function v(c){var g=(0,D.Z)(l.TS,{onDeleted:function(){c&&c()},dialog:{title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",content:function(t,f){var a;if(f.batch){var s=t;a="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(s.length," \u4E2A\u7528\u6237\u5417\uFF1F")}else a=(0,E.jsxs)(E.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,E.jsx)("strong",{children:t.name})]});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)("p",{className:"tip-confirm",children:a}),(0,E.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]})}}}),R=g.delete,S=g.deleteMany;return{delete:R,deleteMany:S}}I.Z=v}}]);
