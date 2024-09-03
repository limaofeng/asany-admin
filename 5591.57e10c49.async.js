"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5591],{74167:function(F,c,r){r.d(c,{TS:function(){return t},bT:function(){return T},kD:function(){return R},ny:function(){return S},s6:function(){return i},xY:function(){return m}});var o=r(97857),_=r.n(o),C=r(68400),u=r.n(C),l=r(75063),E=r(37887),j=r(50319),O=r(73359),M,f,B,I,n,g,v,e={},U=(0,l.Ps)(M||(M=u()([`
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
    `]))),b=(0,l.Ps)(f||(f=u()([`
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
    `,""])),U);function m(s){var a=_()(_()({},e),s);return E.a(b,a)}function W(s){var a=_objectSpread(_objectSpread({},e),s);return Apollo.useLazyQuery(b,a)}function x(s){var a=_objectSpread(_objectSpread({},e),s);return Apollo.useSuspenseQuery(b,a)}var D=(0,l.Ps)(B||(B=u()([`
    query user($id: ID!) {
  result: user(id: $id) {
    ...UserFragment
  }
}
    `,""])),U);function T(s){var a=_()(_()({},e),s);return E.a(D,a)}function K(s){var a=_objectSpread(_objectSpread({},e),s);return Apollo.useLazyQuery(D,a)}function $(s){var a=_objectSpread(_objectSpread({},e),s);return Apollo.useSuspenseQuery(D,a)}var A=(0,l.Ps)(I||(I=u()([`
    mutation createUser($input: UserCreateInput!) {
  result: createUser(input: $input) {
    ...UserFragment
  }
}
    `,""])),U);function S(s){var a=_()(_()({},e),s);return j.D(A,a)}var L=(0,l.Ps)(n||(n=u()([`
    mutation updateUser($id: ID!, $input: UserUpdateInput!) {
  result: updateUser(id: $id, input: $input, merge: true) {
    ...UserFragment
  }
}
    `,""])),U);function R(s){var a=_()(_()({},e),s);return j.D(L,a)}var d=(0,l.Ps)(g||(g=u()([`
    query findUserByUsername($username: String) {
  result: users(where: {username: $username}, first: 1) {
    id
    name
  }
}
    `])));function h(s){var a=_objectSpread(_objectSpread({},e),s);return Apollo.useQuery(d,a)}function i(s){var a=_()(_()({},e),s);return O.t(d,a)}function p(s){var a=_objectSpread(_objectSpread({},e),s);return Apollo.useSuspenseQuery(d,a)}var P=(0,l.Ps)(v||(v=u()([`
    mutation deleteManyUsers($where: UserWhereInput!) {
  result: deleteManyUsers(where: $where) {
    count
  }
}
    `])));function t(s){var a=_()(_()({},e),s);return j.D(P,a)}},82144:function(F,c,r){r.d(c,{bT:function(){return o.bT},kD:function(){return o.kD},ny:function(){return o.ny},s6:function(){return o.s6},xY:function(){return o.xY}});var o=r(74167)},45591:function(F,c,r){r.r(c);var o=r(97857),_=r.n(o),C=r(15009),u=r.n(C),l=r(99289),E=r.n(l),j=r(5574),O=r.n(j),M=r(62435),f=r(96974),B=r(35908),I=r(73588),n=r(79817),g=r(30773),v=r(82144),e=r(86074);function U(){var b=(0,B.ot)(),m=b.data,W=(0,f.s0)(),x=n.Form.useForm(),D=(0,v.s6)(),T=O()(D,1),K=T[0],$=(0,v.ny)(),A=O()($,1),S=A[0],L=(0,g.RO)(function(){var d=E()(u()().mark(function h(i,p,P){var t,s;return u()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return console.log("usernameUniqueValidator",i,p,P),y.next=3,K({variables:{username:p},fetchPolicy:"network-only",context:{fetchOptions:{signal:P}}});case 3:return t=y.sent,s=t.data,y.abrupt("return",!(s!=null&&s.result.length));case 6:case"end":return y.stop()}},h)}));return function(h,i,p){return d.apply(this,arguments)}}()),R=(0,M.useCallback)(E()(u()().mark(function d(){var h,i,p;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.validateFields();case 2:return h=t.sent,t.next=5,S({variables:{input:_()(_()({},h),{},{tenantId:m==null?void 0:m.tenantId})}});case 5:i=t.sent,p=i.data,n.Toast.success("\u4FDD\u5B58\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),W("/system/users/"+p.result.id,{replace:!0});case 9:case"end":return t.stop()}},d)})),[m==null?void 0:m.tenantId]);return(0,e.jsx)(I.vs,{header:{title:"\u65B0\u5EFA\u7528\u6237"},children:(0,e.jsxs)(n.Card,{children:[(0,e.jsx)(n.Card.Header,{children:(0,e.jsx)(n.Card.Title,{children:"\u65B0\u5EFA\u7528\u6237"})}),(0,e.jsx)(n.Card.Body,{children:(0,e.jsxs)(n.Form,{form:x,className:"form d-flex flex-column",children:[(0,e.jsxs)(n.Row,{className:"mt-5",children:[(0,e.jsxs)(n.Col,{span:6,children:[(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"userType",label:"\u7528\u6237\u7C7B\u578B",rules:[{required:!0,message:"\u7528\u6237\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(n.Select,{className:"w-400px",options:[{label:"\u666E\u901A\u7528\u6237",value:"USER"},{label:"\u7BA1\u7406\u5458",value:"ADMIN"}]})}),(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"nickname",label:"\u7528\u6237",rules:[{required:!0,message:"\u7528\u6237\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(n.Input,{solid:!0,className:"w-400px"})}),(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"phone",label:"\u7535\u8BDD",rules:[{required:!0,message:"\u7535\u8BDD\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(n.Input,{solid:!0,className:"w-400px"})}),(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(n.Input,{solid:!0,className:"w-400px"})})]}),(0,e.jsx)(n.Col,{span:6,children:(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"avatar",label:"\u7528\u6237\u5934\u50CF",help:"\u5141\u8BB8\u7684\u6587\u4EF6\u7C7B\u578B:png, jpg, jpeg\u3002",children:(0,e.jsx)(n.Upload.Image,{width:125,height:125,space:"7VE4SSrk",crop:{height:300,zoomable:!1,aspectRatio:1},background:"/assets/media/svg/avatars/blank.svg"})})})]}),(0,e.jsx)("h3",{className:"mt-6 mb-4",children:"\u8D26\u6237\u4FE1\u606F"}),(0,e.jsx)(n.Separator,{}),(0,e.jsxs)(n.Row,{className:"mt-5",children:[(0,e.jsx)(n.Col,{span:6,children:(0,e.jsx)(n.Form.Item,{name:"username",label:"\u8D26\u6237",rules:[{required:!0,message:"\u8D26\u6237\u4E0D\u80FD\u4E3A\u7A7A"},{validator:L,message:"\u8D26\u6237\u91CD\u590D"}],children:(0,e.jsx)(n.Input,{solid:!0,className:"w-400px"})})}),(0,e.jsx)(n.Col,{span:6,children:(0,e.jsx)(n.Form.Item,{name:"password",label:"\u5BC6\u7801",rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(n.Input,{solid:!0,className:"w-400px"})})})]})]})}),(0,e.jsx)(n.Card.Footer,{children:(0,e.jsx)(n.Button,{className:"w-100px",onClick:R,children:"\u4FDD\u5B58"})})]})})}c.default=U}}]);
