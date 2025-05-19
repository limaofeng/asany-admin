"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5591],{74167:function(F,c,r){r.d(c,{TS:function(){return u},bT:function(){return T},kD:function(){return R},ny:function(){return S},s6:function(){return i},xY:function(){return o}});var l=r(97857),_=r.n(l),C=r(68400),t=r.n(C),m=r(75063),E=r(37887),j=r(50319),O=r(73359),M,f,I,B,n,g,v,e={},U=(0,m.Ps)(M||(M=t()([`
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
    `]))),b=(0,m.Ps)(f||(f=t()([`
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
    `,""])),U);function o(s){var a=_()(_()({},e),s);return E.a(b,a)}function W(s){var a=_objectSpread(_objectSpread({},e),s);return Apollo.useLazyQuery(b,a)}function x(s){var a=_objectSpread(_objectSpread({},e),s);return Apollo.useSuspenseQuery(b,a)}var D=(0,m.Ps)(I||(I=t()([`
    query user($id: ID!) {
  result: user(id: $id) {
    ...UserFragment
  }
}
    `,""])),U);function T(s){var a=_()(_()({},e),s);return E.a(D,a)}function $(s){var a=_objectSpread(_objectSpread({},e),s);return Apollo.useLazyQuery(D,a)}function K(s){var a=_objectSpread(_objectSpread({},e),s);return Apollo.useSuspenseQuery(D,a)}var A=(0,m.Ps)(B||(B=t()([`
    mutation createUser($input: UserCreateInput!) {
  result: createUser(input: $input) {
    ...UserFragment
  }
}
    `,""])),U);function S(s){var a=_()(_()({},e),s);return j.D(A,a)}var L=(0,m.Ps)(n||(n=t()([`
    mutation updateUser($id: ID!, $input: UserUpdateInput!) {
  result: updateUser(id: $id, input: $input, merge: true) {
    ...UserFragment
  }
}
    `,""])),U);function R(s){var a=_()(_()({},e),s);return j.D(L,a)}var d=(0,m.Ps)(g||(g=t()([`
    query findUserByUsername($tenantId: ID, $username: String) {
  result: users(where: {tenantId: $tenantId, username: $username}, first: 1) {
    id
    name
  }
}
    `])));function h(s){var a=_objectSpread(_objectSpread({},e),s);return Apollo.useQuery(d,a)}function i(s){var a=_()(_()({},e),s);return O.t(d,a)}function p(s){var a=_objectSpread(_objectSpread({},e),s);return Apollo.useSuspenseQuery(d,a)}var P=(0,m.Ps)(v||(v=t()([`
    mutation deleteManyUsers($where: UserWhereInput!) {
  result: deleteManyUsers(where: $where) {
    count
  }
}
    `])));function u(s){var a=_()(_()({},e),s);return j.D(P,a)}},82144:function(F,c,r){r.d(c,{bT:function(){return l.bT},kD:function(){return l.kD},ny:function(){return l.ny},s6:function(){return l.s6},xY:function(){return l.xY}});var l=r(74167)},45591:function(F,c,r){r.r(c);var l=r(97857),_=r.n(l),C=r(15009),t=r.n(C),m=r(99289),E=r.n(m),j=r(5574),O=r.n(j),M=r(67294),f=r(96974),I=r(35908),B=r(73588),n=r(89717),g=r(30773),v=r(82144),e=r(85893);function U(){var b=(0,I.ot)(),o=b.data,W=(0,f.s0)(),x=n.Form.useForm(),D=(0,v.s6)(),T=O()(D,1),$=T[0],K=(0,v.ny)(),A=O()(K,1),S=A[0],L=(0,g.RO)(function(){var d=E()(t()().mark(function h(i,p,P){var u,s;return t()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return console.log("usernameUniqueValidator",i,p,P),y.next=3,$({variables:{tenantId:o==null?void 0:o.tenantId,username:p},fetchPolicy:"network-only",context:{fetchOptions:{signal:P}}});case 3:return u=y.sent,s=u.data,y.abrupt("return",!(s!=null&&s.result.length));case 6:case"end":return y.stop()}},h)}));return function(h,i,p){return d.apply(this,arguments)}}()),R=(0,M.useCallback)(E()(t()().mark(function d(){var h,i,p;return t()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,x.validateFields();case 2:return h=u.sent,u.next=5,S({variables:{input:_()(_()({},h),{},{tenantId:o==null?void 0:o.tenantId})}});case 5:i=u.sent,p=i.data,n.Toast.success("\u4FDD\u5B58\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),W("/system/users/"+p.result.id,{replace:!0});case 9:case"end":return u.stop()}},d)})),[o==null?void 0:o.tenantId]);return(0,e.jsx)(B.vs,{header:{title:"\u65B0\u5EFA\u7528\u6237"},children:(0,e.jsxs)(n.Card,{children:[(0,e.jsx)(n.Card.Header,{children:(0,e.jsx)(n.Card.Title,{children:"\u65B0\u5EFA\u7528\u6237"})}),(0,e.jsx)(n.Card.Body,{children:(0,e.jsxs)(n.Form,{form:x,className:"form d-flex flex-column",children:[(0,e.jsxs)(n.Row,{className:"mt-5",children:[(0,e.jsxs)(n.Col,{span:6,children:[(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"userType",label:"\u7528\u6237\u7C7B\u578B",rules:[{required:!0,message:"\u7528\u6237\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(n.Select,{className:"w-400px",options:[{label:"\u666E\u901A\u7528\u6237",value:"USER"},{label:"\u7BA1\u7406\u5458",value:"ADMIN"}]})}),(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"nickname",label:"\u7528\u6237",rules:[{required:!0,message:"\u7528\u6237\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(n.Input,{solid:!0,className:"w-400px"})}),(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"phone",label:"\u7535\u8BDD",rules:[{required:!0,message:"\u7535\u8BDD\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(n.Input,{solid:!0,className:"w-400px"})}),(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(n.Input,{solid:!0,className:"w-400px"})})]}),(0,e.jsx)(n.Col,{span:6,children:(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"avatar",label:"\u7528\u6237\u5934\u50CF",help:"\u5141\u8BB8\u7684\u6587\u4EF6\u7C7B\u578B:png, jpg, jpeg\u3002",children:(0,e.jsx)(n.Upload.Image,{width:125,height:125,space:"7VE4SSrk",crop:{height:300,zoomable:!1,aspectRatio:1},background:"/assets/media/svg/avatars/blank.svg"})})})]}),(0,e.jsx)("h3",{className:"mt-6 mb-4",children:"\u8D26\u6237\u4FE1\u606F"}),(0,e.jsx)(n.Separator,{}),(0,e.jsxs)(n.Row,{className:"mt-5",children:[(0,e.jsx)(n.Col,{span:6,children:(0,e.jsx)(n.Form.Item,{name:"username",label:"\u8D26\u6237",rules:[{required:!0,message:"\u8D26\u6237\u4E0D\u80FD\u4E3A\u7A7A"},{validator:L,message:"\u8D26\u6237\u91CD\u590D"}],children:(0,e.jsx)(n.Input,{solid:!0,className:"w-400px"})})}),(0,e.jsx)(n.Col,{span:6,children:(0,e.jsx)(n.Form.Item,{name:"password",label:"\u5BC6\u7801",rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(n.Input,{solid:!0,className:"w-400px"})})})]})]})}),(0,e.jsx)(n.Card.Footer,{children:(0,e.jsx)(n.Button,{className:"w-100px",onClick:R,children:"\u4FDD\u5B58"})})]})})}c.default=U}}]);
