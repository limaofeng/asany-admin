"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9369],{80923:function(S,f,o){o.d(f,{$h:function(){return D},tl:function(){return L},O_:function(){return h},x0:function(){return C},TG:function(){return E}});var v=o(97857),s=o.n(v),i=o(68400),l=o.n(i),c=o(75063),a=o(37887),g=o(50319),y,p,u,d,t,m,r={},x=(0,c.Ps)(y||(y=l()([`
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
    `]))),P=(0,c.Ps)(p||(p=l()([`
    query profile {
  profile: user {
    ...UserProfile
  }
}
    `,""])),x);function h(n){var e=s()(s()({},r),n);return a.a(P,e)}function Q(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(P,e)}function U(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(P,e)}var z=(0,c.Ps)(u||(u=l()([`
    mutation updateProfile($id: ID!, $input: UserUpdateInput!) {
  profile: updateUser(id: $id, input: $input) {
    ...UserProfile
  }
}
    `,""])),x);function E(n){var e=s()(s()({},r),n);return g.D(z,e)}var b=(0,c.Ps)(d||(d=l()([`
    mutation changePassword($oldPassword: String!, $newPassword: String!) {
  changePassword(oldPassword: $oldPassword, newPassword: $newPassword)
}
    `])));function D(n){var e=s()(s()({},r),n);return g.D(b,e)}var j=(0,c.Ps)(t||(t=l()([`
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
    `])));function C(n){var e=s()(s()({},r),n);return a.a(j,e)}function M(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(j,e)}function A(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(j,e)}var O=(0,c.Ps)(m||(m=l()([`
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
    `])));function L(n){var e=s()(s()({},r),n);return a.a(O,e)}function B(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(O,e)}function _(n){var e=_objectSpread(_objectSpread({},r),n);return Apollo.useSuspenseQuery(O,e)}},39369:function(S,f,o){o.r(f);var v=o(12845),s=o(73588),i=o(10811),l=o(12708),c=o(80923),a=o(86074);function g(p){var u,d,t=p.data,m=((u=t.role)===null||u===void 0?void 0:u.code)==="OWNER";return(0,a.jsxs)("div",{className:"organization-item d-flex align-items-center p-5 border-bottom border-secondary",children:[(0,a.jsxs)("div",{className:"flex-row-fluid d-flex align-items-center",children:[(0,a.jsx)(i.Symbol.Avatar,{size:40,className:"me-2",src:(0,l.Fz)(t==null||(d=t.logo)===null||d===void 0?void 0:d.id,{size:"300x300"}),alt:t.name}),(0,a.jsx)(v.Link,{to:"/organizations/".concat(t.code),className:"fw-bolder text-primary ms-2",children:t.name}),(0,a.jsx)("span",{className:"ms-2 text-small text-gray-700",children:m?"\u6240\u6709\u8005":"\u6210\u5458"})]}),(0,a.jsxs)("div",{className:"organization-item-actions",children:[m&&(0,a.jsx)(i.Button,{to:"/organizations/".concat(t.code,"/settings/profile"),as:v.Link,size:"sm",className:"ms-2",type:"solid",children:"\u8BBE\u7F6E"}),(0,a.jsx)(i.Button,{size:"sm",className:"ms-2",type:"solid",children:"\u79BB\u5F00\u7EC4\u7EC7"})]})]})}function y(){var p=(0,c.tl)({fetchPolicy:"cache-and-network"}),u=p.data,d=p.loading,t=(u==null?void 0:u.organizations)||[];return(0,a.jsx)(s.vs,{className:"page-settings-organizations",footer:!1,children:(0,a.jsxs)(i.Card,{className:"mb-5 mb-xl-10",children:[(0,a.jsx)(i.Card.Header,{children:(0,a.jsx)(i.Card.Title,{children:"\u7EC4\u7EC7"})}),(0,a.jsx)(i.Card.Body,{children:(0,a.jsxs)("div",{className:"rounded border border-secondary w-800px",children:[!t.length&&(0,a.jsx)(i.Empty,{title:d?"\u52A0\u8F7D\u4E2D...":"\u60A8\u6CA1\u6709\u52A0\u5165\u4EFB\u4F55\u7EC4\u7EC7",description:d?"\u7A0D\u7B49\u4E00\u4F1A,\u6B63\u5728\u83B7\u53D6\u6570\u636E":void 0}),t.map(function(m){return(0,a.jsx)(g,{data:m},m.id)})]})})]})})}f.default=y}}]);
