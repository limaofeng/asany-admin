"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5591],{58163:function(W,E,s){s.d(E,{ny:function(){return T},TS:function(){return o},s6:function(){return d},kD:function(){return L},bT:function(){return S},xY:function(){return _}});var I=s(97857),t=s.n(I),C=s(68400),u=s.n(C),l=s(75063),U=s(37887),y=s(50319),f=s(73359),g,B,P,M,n,O,h,e={},c=(0,l.Ps)(g||(g=u()([`
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
    `]))),j=(0,l.Ps)(B||(B=u()([`
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
    `,""])),c);function _(r){var a=t()(t()({},e),r);return U.a(j,a)}function $(r){var a=_objectSpread(_objectSpread({},e),r);return Apollo.useLazyQuery(j,a)}function x(r){var a=_objectSpread(_objectSpread({},e),r);return Apollo.useSuspenseQuery(j,a)}var b=(0,l.Ps)(P||(P=u()([`
    query user($id: ID!) {
  result: user(id: $id) {
    ...UserFragment
  }
}
    `,""])),c);function S(r){var a=t()(t()({},e),r);return U.a(b,a)}function R(r){var a=_objectSpread(_objectSpread({},e),r);return Apollo.useLazyQuery(b,a)}function N(r){var a=_objectSpread(_objectSpread({},e),r);return Apollo.useSuspenseQuery(b,a)}var F=(0,l.Ps)(M||(M=u()([`
    mutation createUser($input: UserCreateInput!) {
  result: createUser(input: $input) {
    ...UserFragment
  }
}
    `,""])),c);function T(r){var a=t()(t()({},e),r);return y.D(F,a)}var A=(0,l.Ps)(n||(n=u()([`
    mutation updateUser($id: ID!, $input: UserUpdateInput!) {
  result: updateUser(id: $id, input: $input, merge: true) {
    ...UserFragment
  }
}
    `,""])),c);function L(r){var a=t()(t()({},e),r);return y.D(A,a)}var m=(0,l.Ps)(O||(O=u()([`
    query findUserByUsername($username: String) {
  result: users(where: {username: $username}, first: 1) {
    id
    name
  }
}
    `])));function p(r){var a=_objectSpread(_objectSpread({},e),r);return Apollo.useQuery(m,a)}function d(r){var a=t()(t()({},e),r);return f.t(m,a)}function i(r){var a=_objectSpread(_objectSpread({},e),r);return Apollo.useSuspenseQuery(m,a)}var D=(0,l.Ps)(h||(h=u()([`
    mutation deleteManyUsers($where: UserWhereInput!) {
  result: deleteManyUsers(where: $where) {
    count
  }
}
    `])));function o(r){var a=t()(t()({},e),r);return y.D(D,a)}},45591:function(W,E,s){s.r(E);var I=s(97857),t=s.n(I),C=s(15009),u=s.n(C),l=s(99289),U=s.n(l),y=s(5574),f=s.n(y),g=s(62435),B=s(96974),P=s(77786),M=s(73588),n=s(79817),O=s(30773),h=s(58163),e=s(86074);function c(){var j=(0,P.ot)(),_=j.data,$=(0,B.s0)(),x=n.Form.useForm(),b=(0,h.s6)(),S=f()(b,1),R=S[0],N=(0,h.ny)(),F=f()(N,1),T=F[0],A=(0,O.RO)(function(){var m=U()(u()().mark(function p(d,i,D){var o,r;return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return console.log("usernameUniqueValidator",d,i,D),v.next=3,R({variables:{username:i},fetchPolicy:"network-only",context:{fetchOptions:{signal:D}}});case 3:return o=v.sent,r=o.data,v.abrupt("return",!(r!=null&&r.result.length));case 6:case"end":return v.stop()}},p)}));return function(p,d,i){return m.apply(this,arguments)}}()),L=(0,g.useCallback)(U()(u()().mark(function m(){var p,d,i;return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,x.validateFields();case 2:return p=o.sent,o.next=5,T({variables:{input:t()(t()({},p),{},{tenantId:_==null?void 0:_.tenantId})}});case 5:d=o.sent,i=d.data,n.Toast.success("\u4FDD\u5B58\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),$("/system/users/"+i.result.id,{replace:!0});case 9:case"end":return o.stop()}},m)})),[_==null?void 0:_.tenantId]);return(0,e.jsx)(M.vs,{header:{title:"\u65B0\u5EFA\u7528\u6237"},children:(0,e.jsxs)(n.Card,{children:[(0,e.jsx)(n.Card.Header,{children:(0,e.jsx)(n.Card.Title,{children:"\u65B0\u5EFA\u7528\u6237"})}),(0,e.jsx)(n.Card.Body,{children:(0,e.jsxs)(n.Form,{form:x,className:"form d-flex flex-column",children:[(0,e.jsxs)(n.Row,{className:"mt-5",children:[(0,e.jsxs)(n.Col,{span:6,children:[(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"userType",label:"\u7528\u6237\u7C7B\u578B",rules:[{required:!0,message:"\u7528\u6237\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(n.Select,{className:"w-400px",options:[{label:"\u666E\u901A\u7528\u6237",value:"USER"},{label:"\u7BA1\u7406\u5458",value:"ADMIN"}]})}),(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"nickname",label:"\u7528\u6237",rules:[{required:!0,message:"\u7528\u6237\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(n.Input,{solid:!0,className:"w-400px"})}),(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"phone",label:"\u7535\u8BDD",rules:[{required:!0,message:"\u7535\u8BDD\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(n.Input,{solid:!0,className:"w-400px"})}),(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(n.Input,{solid:!0,className:"w-400px"})})]}),(0,e.jsx)(n.Col,{span:6,children:(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"avatar",label:"\u7528\u6237\u5934\u50CF",help:"\u5141\u8BB8\u7684\u6587\u4EF6\u7C7B\u578B:png, jpg, jpeg\u3002",children:(0,e.jsx)(n.Upload.Image,{width:125,height:125,space:"7VE4SSrk",crop:{height:300,zoomable:!1,aspectRatio:1},background:"/assets/media/svg/avatars/blank.svg"})})})]}),(0,e.jsx)("h3",{className:"mt-6 mb-4",children:"\u8D26\u6237\u4FE1\u606F"}),(0,e.jsx)(n.Separator,{}),(0,e.jsxs)(n.Row,{className:"mt-5",children:[(0,e.jsx)(n.Col,{span:6,children:(0,e.jsx)(n.Form.Item,{name:"username",label:"\u8D26\u6237",rules:[{required:!0,message:"\u8D26\u6237\u4E0D\u80FD\u4E3A\u7A7A"},{validator:A,message:"\u8D26\u6237\u91CD\u590D"}],children:(0,e.jsx)(n.Input,{solid:!0,className:"w-400px"})})}),(0,e.jsx)(n.Col,{span:6,children:(0,e.jsx)(n.Form.Item,{name:"password",label:"\u5BC6\u7801",rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(n.Input,{solid:!0,className:"w-400px"})})})]})]})}),(0,e.jsx)(n.Card.Footer,{children:(0,e.jsx)(n.Button,{className:"w-100px",onClick:L,children:"\u4FDD\u5B58"})})]})})}E.default=c}}]);
