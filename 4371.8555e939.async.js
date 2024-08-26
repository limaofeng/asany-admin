"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4371],{58163:function(T,h,r){r.d(h,{ny:function(){return I},TS:function(){return L},s6:function(){return $},kD:function(){return m},bT:function(){return P},xY:function(){return M}});var O=r(97857),u=r.n(O),B=r(68400),l=r.n(B),d=r(75063),b=r(37887),p=r(50319),D=r(73359),f,e,U,n,g,c,E,t={},v=(0,d.Ps)(f||(f=l()([`
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
    `]))),j=(0,d.Ps)(e||(e=l()([`
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
    `,""])),v);function M(a){var s=u()(u()({},t),a);return b.a(j,s)}function F(a){var s=_objectSpread(_objectSpread({},t),a);return Apollo.useLazyQuery(j,s)}function x(a){var s=_objectSpread(_objectSpread({},t),a);return Apollo.useSuspenseQuery(j,s)}var o=(0,d.Ps)(U||(U=l()([`
    query user($id: ID!) {
  result: user(id: $id) {
    ...UserFragment
  }
}
    `,""])),v);function P(a){var s=u()(u()({},t),a);return b.a(o,s)}function y(a){var s=_objectSpread(_objectSpread({},t),a);return Apollo.useLazyQuery(o,s)}function i(a){var s=_objectSpread(_objectSpread({},t),a);return Apollo.useSuspenseQuery(o,s)}var _=(0,d.Ps)(n||(n=l()([`
    mutation createUser($input: UserCreateInput!) {
  result: createUser(input: $input) {
    ...UserFragment
  }
}
    `,""])),v);function I(a){var s=u()(u()({},t),a);return p.D(_,s)}var S=(0,d.Ps)(g||(g=l()([`
    mutation updateUser($id: ID!, $input: UserUpdateInput!) {
  result: updateUser(id: $id, input: $input, merge: true) {
    ...UserFragment
  }
}
    `,""])),v);function m(a){var s=u()(u()({},t),a);return p.D(S,s)}var C=(0,d.Ps)(c||(c=l()([`
    query findUserByUsername($username: String) {
  result: users(where: {username: $username}, first: 1) {
    id
    name
  }
}
    `])));function N(a){var s=_objectSpread(_objectSpread({},t),a);return Apollo.useQuery(C,s)}function $(a){var s=u()(u()({},t),a);return D.t(C,s)}function Q(a){var s=_objectSpread(_objectSpread({},t),a);return Apollo.useSuspenseQuery(C,s)}var A=(0,d.Ps)(E||(E=l()([`
    mutation deleteManyUsers($where: UserWhereInput!) {
  result: deleteManyUsers(where: $where) {
    count
  }
}
    `])));function L(a){var s=u()(u()({},t),a);return p.D(A,s)}},54371:function(T,h,r){r.r(h);var O=r(15009),u=r.n(O),B=r(99289),l=r.n(B),d=r(5574),b=r.n(d),p=r(62435),D=r(96974),f=r(73588),e=r(79817),U=r(58163),n=r(86074);function g(){var c=(0,D.UO)(),E=(0,D.s0)(),t=e.Form.useForm(),v=(0,U.kD)(),j=b()(v,1),M=j[0],F=(0,U.bT)({variables:{id:c.id},skip:!c.id}),x=F.data,o=x==null?void 0:x.result;(0,p.useEffect)(function(){var y,i,_;o&&t.setFieldsValue({userType:o.userType,nickname:o.nickname,phone:(y=o.phone)===null||y===void 0?void 0:y.number,email:(i=o.email)===null||i===void 0?void 0:i.address,avatar:(_=o.avatar)===null||_===void 0?void 0:_.id,username:o.username})},[o]);var P=(0,p.useCallback)(l()(u()().mark(function y(){var i,_,I;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,t.validateFields();case 2:return i=m.sent,delete i.username,delete i.userType,m.next=7,M({variables:{id:c.id,input:i}});case 7:_=m.sent,I=_.data,e.Toast.success("\u4FDD\u5B58\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),E("/system/users/"+I.result.id,{replace:!0});case 11:case"end":return m.stop()}},y)})),[]);return(0,n.jsx)(f.vs,{header:{title:"\u7F16\u8F91\u7528\u6237"},children:(0,n.jsxs)(e.Card,{children:[(0,n.jsx)(e.Card.Header,{children:(0,n.jsx)(e.Card.Title,{children:"\u7F16\u8F91\u7528\u6237"})}),(0,n.jsx)(e.Card.Body,{children:(0,n.jsxs)(e.Form,{form:t,className:"form d-flex flex-column",children:[(0,n.jsxs)(e.Row,{className:"mt-5",children:[(0,n.jsxs)(e.Col,{span:6,children:[(0,n.jsx)(e.Form.Item,{className:"mb-5",name:"userType",label:"\u7528\u6237\u7C7B\u578B",rules:[{required:!0,message:"\u7528\u6237\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(e.Select,{className:"w-400px",readOnly:!0,options:[{label:"\u666E\u901A\u7528\u6237",value:"USER"},{label:"\u7BA1\u7406\u5458",value:"ADMIN"}]})}),(0,n.jsx)(e.Form.Item,{className:"mb-5",name:"nickname",label:"\u7528\u6237",rules:[{required:!0,message:"\u7528\u6237\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(e.Input,{solid:!0,className:"w-400px"})}),(0,n.jsx)(e.Form.Item,{className:"mb-5",name:"phone",label:"\u7535\u8BDD",rules:[{required:!0,message:"\u7535\u8BDD\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(e.Input,{solid:!0,className:"w-400px"})}),(0,n.jsx)(e.Form.Item,{className:"mb-5",name:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(e.Input,{solid:!0,className:"w-400px"})})]}),(0,n.jsx)(e.Col,{span:6,children:(0,n.jsx)(e.Form.Item,{className:"mb-5",name:"avatar",label:"\u7528\u6237\u5934\u50CF",help:"\u5141\u8BB8\u7684\u6587\u4EF6\u7C7B\u578B:png, jpg, jpeg\u3002",children:(0,n.jsx)(e.Upload.Image,{width:125,height:125,space:"XXTIeJCp",crop:{height:300,zoomable:!1,aspectRatio:1},background:"/assets/media/svg/avatars/blank.svg"})})})]}),(0,n.jsx)("h3",{className:"mt-6 mb-4",children:"\u8D26\u6237\u4FE1\u606F"}),(0,n.jsx)(e.Separator,{}),(0,n.jsxs)(e.Row,{className:"mt-5",children:[(0,n.jsx)(e.Col,{span:6,children:(0,n.jsx)(e.Form.Item,{name:"username",label:"\u8D26\u6237",rules:[{required:!0,message:"\u8D26\u6237\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(e.Input,{readOnly:!0,solid:!0,className:"w-400px"})})}),(0,n.jsx)(e.Col,{span:6,children:(0,n.jsx)(e.Form.Item,{name:"password",label:"\u5BC6\u7801",children:(0,n.jsx)(e.Input,{solid:!0,className:"w-400px"})})})]})]})}),(0,n.jsx)(e.Card.Footer,{children:(0,n.jsx)(e.Button,{className:"w-100px",onClick:P,children:"\u4FDD\u5B58"})})]})})}h.default=g}}]);
