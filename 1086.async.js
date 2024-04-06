"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1086],{80923:function(T,b,s){s.d(b,{$h:function(){return v},tl:function(){return u},O_:function(){return w},x0:function(){return c},TG:function(){return t}});var A=s(97857),o=s.n(A),M=s(68400),d=s.n(M),p=s(75063),P=s(37887),h=s(50319),x,C,g,n,O,y,e={},F=(0,p.Ps)(x||(x=d()([`
    fragment UserProfile on User {
  id
  name
  avatar(format: id)
  email {
    address
  }
  phone {
    number
  }
  sex
  birthday
  bio
  company
  location
}
    `]))),B=(0,p.Ps)(C||(C=d()([`
    query profile {
  profile: user {
    ...UserProfile
  }
}
    `,""])),F);function w(a){var r=o()(o()({},e),a);return P.a(B,r)}function S(a){var r=_objectSpread(_objectSpread({},e),a);return Apollo.useLazyQuery(B,r)}function l(a){var r=_objectSpread(_objectSpread({},e),a);return Apollo.useSuspenseQuery(B,r)}var i=(0,p.Ps)(g||(g=d()([`
    mutation updateProfile($id: ID!, $input: UserUpdateInput!) {
  profile: updateUser(id: $id, input: $input) {
    ...UserProfile
  }
}
    `,""])),F);function t(a){var r=o()(o()({},e),a);return h.D(i,r)}var m=(0,p.Ps)(n||(n=d()([`
    mutation changePassword($oldPassword: String!, $newPassword: String!) {
  changePassword(oldPassword: $oldPassword, newPassword: $newPassword)
}
    `])));function v(a){var r=o()(o()({},e),a);return h.D(m,r)}var _=(0,p.Ps)(O||(O=d()([`
    query sessions {
  sessions {
    id
    ip
    lastIp
    location
    lastLocation
    loginTime
    lastUsedTime
    device {
      type
      browser
      operatingSystem
    }
  }
}
    `])));function c(a){var r=o()(o()({},e),a);return P.a(_,r)}function f(a){var r=_objectSpread(_objectSpread({},e),a);return Apollo.useLazyQuery(_,r)}function E(a){var r=_objectSpread(_objectSpread({},e),a);return Apollo.useSuspenseQuery(_,r)}var j=(0,p.Ps)(y||(y=d()([`
    query organizations {
  organizations {
    id
    code
    name
    logo
    role {
      id
      name
    }
  }
}
    `])));function u(a){var r=o()(o()({},e),a);return P.a(j,r)}function U(a){var r=_objectSpread(_objectSpread({},e),a);return Apollo.useLazyQuery(j,r)}function D(a){var r=_objectSpread(_objectSpread({},e),a);return Apollo.useSuspenseQuery(j,r)}},1086:function(T,b,s){s.r(b);var A=s(15009),o=s.n(A),M=s(99289),d=s.n(M),p=s(5574),P=s.n(p),h=s(62435),x=s(46027),C=s(12845),g=s(73588),n=s(13757),O=s(12708),y=s(80923),e=s(86074);function F(l){var i,t=l.data,m=(0,h.useMemo)(function(){var v,_,c;return((v=t.device)===null||v===void 0?void 0:v.type)==="COMPUTER"?"laptop":((_=t.device)===null||_===void 0?void 0:_.type)==="MOBILE"?"phone":((c=t.device)===null||c===void 0?void 0:c.type)==="TABLET"?"tablet":"laptop"},[(i=t.device)===null||i===void 0?void 0:i.type]);return(0,e.jsxs)("li",{className:"session-item p-5 border-bottom border-secondary d-flex flex-row",children:[(0,e.jsxs)("div",{className:"flex-column-fluid d-flex flex-column",children:[(0,e.jsxs)("div",{className:"d-flex flex-row",children:[(0,e.jsx)("span",{className:"session-state-indicator mt-3 rounded recent"}),(0,e.jsx)("div",{className:"device-icon-container",children:(0,e.jsx)(x.ZP,{className:"svg-icon-2hx",name:"Bootstrap/".concat(m)})}),(0,e.jsxs)("div",{className:"session-info",children:[(0,e.jsxs)("strong",{children:[t.location||"\u5730\u533A \u672A\u77E5",(0,e.jsx)("span",{className:"ms-4",children:t.ip||"IP \u672A\u77E5"})]}),(0,e.jsx)("div",{className:"text-small text-gray-800",children:"\u60A8\u5F53\u524D\u7684\u4F1A\u8BDD1212 / \u6700\u540E\u8BBF\u95EE\u65F6\u95F4 2022\u5E74 3\u6708 15\u65E5"})]})]}),(0,e.jsx)("div",{className:"seen-in text-gray-800",children:"\u8BBF\u95EE\u4F4D\u7F6E\u4F4D\u4E8E \u4E2D\u56FD"})]}),(0,e.jsx)("div",{children:(0,e.jsx)(n.Button,{as:C.Link,to:"/settings/sessions/833633957",className:"btn-session-details",type:"solid",children:"\u67E5\u770B\u8BE6\u60C5"})})]})}function B(){var l=(0,y.x0)(),i=l.data,t=(i==null?void 0:i.sessions)||[];return(0,e.jsxs)(n.Card,{className:"user-session-list mb-5 mb-xl-10",children:[(0,e.jsx)(n.Card.Header,{children:(0,e.jsx)(n.Card.Title,{children:"\u4F1A\u8BDD"})}),(0,e.jsxs)(n.Card.Body,{children:[(0,e.jsx)("p",{className:"mb-4",children:"\u8FD9\u662F\u5DF2\u767B\u5F55\u60A8\u5E10\u6237\u7684\u8BBE\u5907\u5217\u8868\u3002\u60A8\u53EF\u4EE5\u64A4\u9500\u60A8\u4E0D\u8BA4\u53EF\u7684\u4EFB\u4F55\u4F1A\u8BDD\u3002"}),(0,e.jsx)("ul",{className:"w-800px rounded border border-secondary",children:t.map(function(m){return(0,e.jsx)(F,{data:m},m.id)})})]})]})}function w(){var l=n.Form.useForm(),i=(0,y.$h)(),t=P()(i,2),m=t[0],v=t[1].loading,_=(0,h.useCallback)(d()(o()().mark(function c(){var f,E;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,l.validateFields();case 2:return f=u.sent,delete f.password_confirmation,u.prev=4,u.next=7,m({variables:f});case 7:n.Toast.success("\u5BC6\u7801\u4FEE\u6539\u6210\u529F",3e3,{placement:"bottom-left",progressBar:!0}),l.resetFields(),u.next=15;break;case 11:u.prev=11,u.t0=u.catch(4),E=(0,O.nU)(u.t0),n.Toast.error(E.message,3e3,{placement:"top-center"});case 15:case"end":return u.stop()}},c,null,[[4,11]])})),[m,l]);return(0,e.jsxs)(n.Card,{className:"mb-5 mb-xl-10",children:[(0,e.jsx)(n.Card.Header,{children:(0,e.jsx)(n.Card.Title,{children:"\u66F4\u6539\u5BC6\u7801"})}),(0,e.jsxs)(n.Card.Body,{children:[(0,e.jsxs)(n.Form,{form:l,className:"col-12 col-md-8",children:[(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"oldPassword",label:"\u539F\u5BC6\u7801",rules:[{required:!0,message:"\u539F\u5BC6\u7801\u5FC5\u586B"}],children:(0,e.jsx)(n.Input.Password,{solid:!0,className:"w-400px"})}),(0,e.jsx)(n.Form.Item,{className:"my-5 w-400px",name:"newPassword",label:"\u65B0\u5BC6\u7801",rules:[{required:!0,message:"\u5BC6\u7801\u5FC5\u586B"},{min:8,message:"\u5BC6\u7801\u81F3\u5C11\u5305\u542B 8 \u4E2A\u5B57\u7B26"}],children:(0,e.jsx)(n.Input.Password,{meter:!0,solid:!0})}),(0,e.jsx)(n.Form.Item,{className:"my-5",name:"password_confirmation",label:"\u786E\u8BA4\u65B0\u5BC6\u7801",rules:[{validator:function(){var c=d()(o()().mark(function E(j,u){return o()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:if(l.getFieldValue("newPassword")===u){D.next=2;break}throw new Error("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4");case 2:case"end":return D.stop()}},E)}));function f(E,j){return c.apply(this,arguments)}return f}()}],children:(0,e.jsx)(n.Input.Password,{solid:!0,className:"w-400px"})})]}),(0,e.jsx)("p",{className:"text-small mt-2 mb-1",children:"\u786E\u4FDD\u5BC6\u7801\u81F3\u5C11\u5305\u542B 15 \u4E2A\u5B57\u7B26\u6216\u81F3\u5C11 8 \u4E2A\u5B57\u7B26\uFF0C\u5305\u62EC\u6570\u5B57 \u548C\u5C0F\u5199\u5B57\u6BCD\u3002"}),(0,e.jsx)(n.Button,{loading:v,className:"me-4",onClick:_,children:"\u66F4\u65B0\u5BC6\u7801"}),(0,e.jsx)(n.Button,{type:"link",variant:!1,children:"\u6211\u5FD8\u8BB0\u4E86\u81EA\u5DF1\u7684\u5BC6\u7801"})]})]})}function S(){return(0,e.jsxs)(g.vs,{className:"page-settings-security",header:{title:"\u5BC6\u7801\u4E0E\u5B89\u5168\u8BBE\u7F6E"},footer:!1,children:[(0,e.jsx)(w,{}),(0,e.jsx)(B,{})]})}b.default=S}}]);
