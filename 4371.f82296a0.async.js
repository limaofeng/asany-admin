"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4371],{74167:function(T,c,r){r.d(c,{TS:function(){return R},bT:function(){return C},kD:function(){return i},ny:function(){return I},s6:function(){return S},xY:function(){return B}});var o=r(97857),t=r.n(o),g=r(68400),l=r.n(g),m=r(75063),E=r(37887),v=r(50319),D=r(73359),O,e,h,n,P,U,f,u={},y=(0,m.Ps)(O||(O=l()([`
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
    `]))),b=(0,m.Ps)(e||(e=l()([`
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
    `,""])),y);function B(a){var s=t()(t()({},u),a);return E.a(b,s)}function A(a){var s=_objectSpread(_objectSpread({},u),a);return Apollo.useLazyQuery(b,s)}function M(a){var s=_objectSpread(_objectSpread({},u),a);return Apollo.useSuspenseQuery(b,s)}var _=(0,m.Ps)(h||(h=l()([`
    query user($id: ID!) {
  result: user(id: $id) {
    ...UserFragment
  }
}
    `,""])),y);function C(a){var s=t()(t()({},u),a);return E.a(_,s)}function j(a){var s=_objectSpread(_objectSpread({},u),a);return Apollo.useLazyQuery(_,s)}function d(a){var s=_objectSpread(_objectSpread({},u),a);return Apollo.useSuspenseQuery(_,s)}var p=(0,m.Ps)(n||(n=l()([`
    mutation createUser($input: UserCreateInput!) {
  result: createUser(input: $input) {
    ...UserFragment
  }
}
    `,""])),y);function I(a){var s=t()(t()({},u),a);return v.D(p,s)}var F=(0,m.Ps)(P||(P=l()([`
    mutation updateUser($id: ID!, $input: UserUpdateInput!) {
  result: updateUser(id: $id, input: $input, merge: true) {
    ...UserFragment
  }
}
    `,""])),y);function i(a){var s=t()(t()({},u),a);return v.D(F,s)}var x=(0,m.Ps)(U||(U=l()([`
    query findUserByUsername($username: String) {
  result: users(where: {username: $username}, first: 1) {
    id
    name
  }
}
    `])));function $(a){var s=_objectSpread(_objectSpread({},u),a);return Apollo.useQuery(x,s)}function S(a){var s=t()(t()({},u),a);return D.t(x,s)}function W(a){var s=_objectSpread(_objectSpread({},u),a);return Apollo.useSuspenseQuery(x,s)}var L=(0,m.Ps)(f||(f=l()([`
    mutation deleteManyUsers($where: UserWhereInput!) {
  result: deleteManyUsers(where: $where) {
    count
  }
}
    `])));function R(a){var s=t()(t()({},u),a);return v.D(L,s)}},82144:function(T,c,r){r.d(c,{bT:function(){return o.bT},kD:function(){return o.kD},ny:function(){return o.ny},s6:function(){return o.s6},xY:function(){return o.xY}});var o=r(74167)},54371:function(T,c,r){r.r(c);var o=r(15009),t=r.n(o),g=r(99289),l=r.n(g),m=r(5574),E=r.n(m),v=r(62435),D=r(96974),O=r(73588),e=r(79817),h=r(82144),n=r(86074);function P(){var U=(0,D.UO)(),f=(0,D.s0)(),u=e.Form.useForm(),y=(0,h.kD)(),b=E()(y,1),B=b[0],A=(0,h.bT)({variables:{id:U.id},skip:!U.id}),M=A.data,_=M==null?void 0:M.result;(0,v.useEffect)(function(){var j,d,p;_&&u.setFieldsValue({userType:_.userType,nickname:_.nickname,phone:(j=_.phone)===null||j===void 0?void 0:j.number,email:(d=_.email)===null||d===void 0?void 0:d.address,avatar:(p=_.avatar)===null||p===void 0?void 0:p.id,username:_.username})},[_]);var C=(0,v.useCallback)(l()(t()().mark(function j(){var d,p,I;return t()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,u.validateFields();case 2:return d=i.sent,delete d.username,delete d.userType,i.next=7,B({variables:{id:U.id,input:d}});case 7:p=i.sent,I=p.data,e.Toast.success("\u4FDD\u5B58\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),f("/system/users/"+I.result.id,{replace:!0});case 11:case"end":return i.stop()}},j)})),[]);return(0,n.jsx)(O.vs,{header:{title:"\u7F16\u8F91\u7528\u6237"},children:(0,n.jsxs)(e.Card,{children:[(0,n.jsx)(e.Card.Header,{children:(0,n.jsx)(e.Card.Title,{children:"\u7F16\u8F91\u7528\u6237"})}),(0,n.jsx)(e.Card.Body,{children:(0,n.jsxs)(e.Form,{form:u,className:"form d-flex flex-column",children:[(0,n.jsxs)(e.Row,{className:"mt-5",children:[(0,n.jsxs)(e.Col,{span:6,children:[(0,n.jsx)(e.Form.Item,{className:"mb-5",name:"userType",label:"\u7528\u6237\u7C7B\u578B",rules:[{required:!0,message:"\u7528\u6237\u7C7B\u578B\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(e.Select,{className:"w-400px",readOnly:!0,options:[{label:"\u666E\u901A\u7528\u6237",value:"USER"},{label:"\u7BA1\u7406\u5458",value:"ADMIN"}]})}),(0,n.jsx)(e.Form.Item,{className:"mb-5",name:"nickname",label:"\u7528\u6237",rules:[{required:!0,message:"\u7528\u6237\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(e.Input,{solid:!0,className:"w-400px"})}),(0,n.jsx)(e.Form.Item,{className:"mb-5",name:"phone",label:"\u7535\u8BDD",rules:[{required:!0,message:"\u7535\u8BDD\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(e.Input,{solid:!0,className:"w-400px"})}),(0,n.jsx)(e.Form.Item,{className:"mb-5",name:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(e.Input,{solid:!0,className:"w-400px"})})]}),(0,n.jsx)(e.Col,{span:6,children:(0,n.jsx)(e.Form.Item,{className:"mb-5",name:"avatar",label:"\u7528\u6237\u5934\u50CF",help:"\u5141\u8BB8\u7684\u6587\u4EF6\u7C7B\u578B:png, jpg, jpeg\u3002",children:(0,n.jsx)(e.Upload.Image,{width:125,height:125,space:"XXTIeJCp",crop:{height:300,zoomable:!1,aspectRatio:1},background:"/assets/media/svg/avatars/blank.svg"})})})]}),(0,n.jsx)("h3",{className:"mt-6 mb-4",children:"\u8D26\u6237\u4FE1\u606F"}),(0,n.jsx)(e.Separator,{}),(0,n.jsxs)(e.Row,{className:"mt-5",children:[(0,n.jsx)(e.Col,{span:6,children:(0,n.jsx)(e.Form.Item,{name:"username",label:"\u8D26\u6237",rules:[{required:!0,message:"\u8D26\u6237\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(e.Input,{readOnly:!0,solid:!0,className:"w-400px"})})}),(0,n.jsx)(e.Col,{span:6,children:(0,n.jsx)(e.Form.Item,{name:"password",label:"\u5BC6\u7801",children:(0,n.jsx)(e.Input,{solid:!0,className:"w-400px"})})})]})]})}),(0,n.jsx)(e.Card.Footer,{children:(0,n.jsx)(e.Button,{className:"w-100px",onClick:C,children:"\u4FDD\u5B58"})})]})})}c.default=P}}]);
