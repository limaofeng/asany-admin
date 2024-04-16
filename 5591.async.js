"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5591],{58163:function(N,D,r){r.d(D,{ny:function(){return b},TS:function(){return d},s6:function(){return l},kD:function(){return c},bT:function(){return S},xY:function(){return C}});var x=r(97857),t=r.n(x),I=r(68400),o=r.n(I),_=r(75063),y=r(37887),h=r(50319),E=r(73359),g,B,P,e,M,j,n,u={},p=(0,_.Ps)(g||(g=o()([`
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
    `]))),U=(0,_.Ps)(B||(B=o()([`
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
    `,""])),p);function C(s){var a=t()(t()({},u),s);return y.a(U,a)}function T(s){var a=_objectSpread(_objectSpread({},u),s);return Apollo.useLazyQuery(U,a)}function A(s){var a=_objectSpread(_objectSpread({},u),s);return Apollo.useSuspenseQuery(U,a)}var v=(0,_.Ps)(P||(P=o()([`
    query user($id: ID!) {
  result: user(id: $id) {
    ...UserFragment
  }
}
    `,""])),p);function S(s){var a=t()(t()({},u),s);return y.a(v,a)}function $(s){var a=_objectSpread(_objectSpread({},u),s);return Apollo.useLazyQuery(v,a)}function L(s){var a=_objectSpread(_objectSpread({},u),s);return Apollo.useSuspenseQuery(v,a)}var F=(0,_.Ps)(e||(e=o()([`
    mutation createUser($input: UserCreateInput!) {
  result: createUser(input: $input) {
    ...UserFragment
  }
}
    `,""])),p);function b(s){var a=t()(t()({},u),s);return h.D(F,a)}var i=(0,_.Ps)(M||(M=o()([`
    mutation updateUser($id: ID!, $input: UserUpdateInput!) {
  result: updateUser(id: $id, input: $input, merge: true) {
    ...UserFragment
  }
}
    `,""])),p);function c(s){var a=t()(t()({},u),s);return h.D(i,a)}var m=(0,_.Ps)(j||(j=o()([`
    query findUserByUsername($username: String) {
  result: users(where: {username: $username}, first: 1) {
    id
    name
  }
}
    `])));function O(s){var a=_objectSpread(_objectSpread({},u),s);return Apollo.useQuery(m,a)}function l(s){var a=t()(t()({},u),s);return E.t(m,a)}function f(s){var a=_objectSpread(_objectSpread({},u),s);return Apollo.useSuspenseQuery(m,a)}var R=(0,_.Ps)(n||(n=o()([`
    mutation deleteManyUsers($where: UserWhereInput!) {
  result: deleteManyUsers(where: $where) {
    count
  }
}
    `])));function d(s){var a=t()(t()({},u),s);return h.D(R,a)}},45591:function(N,D,r){r.r(D);var x=r(97857),t=r.n(x),I=r(15009),o=r.n(I),_=r(99289),y=r.n(_),h=r(5574),E=r.n(h),g=r(62435),B=r(96974),P=r(73588),e=r(10811),M=r(30773),j=r(58163),n=r(86074);function u(){var p=(0,B.s0)(),U=e.Form.useForm(),C=(0,j.s6)(),T=E()(C,1),A=T[0],v=(0,j.ny)(),S=E()(v,1),$=S[0],L=(0,M.RO)(function(){var b=y()(o()().mark(function i(c,m,O){var l,f;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return console.log("usernameUniqueValidator",c,m,O),d.next=3,A({variables:{username:m},fetchPolicy:"network-only",context:{fetchOptions:{signal:O}}});case 3:return l=d.sent,f=l.data,d.abrupt("return",!(f!=null&&f.result.length));case 6:case"end":return d.stop()}},i)}));return function(i,c,m){return b.apply(this,arguments)}}()),F=(0,g.useCallback)(y()(o()().mark(function b(){var i,c,m;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,U.validateFields();case 2:return i=l.sent,l.next=5,$({variables:{input:t()(t()({},i),{},{tenantId:"1691832353955123200"})}});case 5:c=l.sent,m=c.data,e.Toast.success("\u4FDD\u5B58\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),p("/system/users/"+m.result.id,{replace:!0});case 9:case"end":return l.stop()}},b)})),[]);return(0,n.jsx)(P.vs,{header:{title:"\u65B0\u5EFA\u7528\u6237"},children:(0,n.jsxs)(e.Card,{children:[(0,n.jsx)(e.Card.Header,{children:(0,n.jsx)(e.Card.Title,{children:"\u65B0\u5EFA\u7528\u6237"})}),(0,n.jsx)(e.Card.Body,{children:(0,n.jsxs)(e.Form,{form:U,className:"form d-flex flex-column",children:[(0,n.jsxs)(e.Row,{className:"mt-5",children:[(0,n.jsxs)(e.Col,{span:6,children:[(0,n.jsx)(e.Form.Item,{className:"mb-5",name:"userType",label:"\u7528\u6237\u7C7B\u578B",rules:[{required:!0,message:"\u7528\u6237\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(e.Select,{className:"w-400px",options:[{label:"\u666E\u901A\u7528\u6237",value:"USER"},{label:"\u7BA1\u7406\u5458",value:"ADMIN"}]})}),(0,n.jsx)(e.Form.Item,{className:"mb-5",name:"nickname",label:"\u7528\u6237",rules:[{required:!0,message:"\u7528\u6237\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(e.Input,{solid:!0,className:"w-400px"})}),(0,n.jsx)(e.Form.Item,{className:"mb-5",name:"phone",label:"\u7535\u8BDD",rules:[{required:!0,message:"\u7535\u8BDD\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(e.Input,{solid:!0,className:"w-400px"})}),(0,n.jsx)(e.Form.Item,{className:"mb-5",name:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(e.Input,{solid:!0,className:"w-400px"})})]}),(0,n.jsx)(e.Col,{span:6,children:(0,n.jsx)(e.Form.Item,{className:"mb-5",name:"avatar",label:"\u7528\u6237\u5934\u50CF",help:"\u5141\u8BB8\u7684\u6587\u4EF6\u7C7B\u578B:png, jpg, jpeg\u3002",children:(0,n.jsx)(e.Upload.Image,{width:125,height:125,space:"7VE4SSrk",crop:{height:300,zoomable:!1,aspectRatio:1},background:"/assets/media/svg/avatars/blank.svg"})})})]}),(0,n.jsx)("h3",{className:"mt-6 mb-4",children:"\u8D26\u6237\u4FE1\u606F"}),(0,n.jsx)(e.Separator,{}),(0,n.jsxs)(e.Row,{className:"mt-5",children:[(0,n.jsx)(e.Col,{span:6,children:(0,n.jsx)(e.Form.Item,{name:"username",label:"\u8D26\u6237",rules:[{required:!0,message:"\u8D26\u6237\u4E0D\u80FD\u4E3A\u7A7A"},{validator:L,message:"\u8D26\u6237\u91CD\u590D"}],children:(0,n.jsx)(e.Input,{solid:!0,className:"w-400px"})})}),(0,n.jsx)(e.Col,{span:6,children:(0,n.jsx)(e.Form.Item,{name:"password",label:"\u5BC6\u7801",rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(e.Input,{solid:!0,className:"w-400px"})})})]})]})}),(0,n.jsx)(e.Card.Footer,{children:(0,n.jsx)(e.Button,{className:"w-100px",onClick:F,children:"\u4FDD\u5B58"})})]})})}D.default=u}}]);
