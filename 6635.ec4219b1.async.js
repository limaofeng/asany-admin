(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[6635],{12041:function(x,v,s){"use strict";s.d(v,{$h:function(){return b},tl:function(){return Z},O_:function(){return z},x0:function(){return D},TG:function(){return h}});var t=s(11849),d=s(20310),u=s(49704),r=s(64718),f=s(21919),e,p,g,m,i,l,n={},c=(0,u.Ps)(e||(e=(0,d.Z)([`
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
    `]))),P=(0,u.Ps)(p||(p=(0,d.Z)([`
    query profile {
  profile: user {
    ...UserProfile
  }
}
    `,""])),c);function z(a){var o=(0,t.Z)((0,t.Z)({},n),a);return r.a(P,o)}function U(a){var o=_objectSpread(_objectSpread({},n),a);return Apollo.useLazyQuery(P,o)}var O=(0,u.Ps)(g||(g=(0,d.Z)([`
    mutation updateProfile($input: UserUpdateInput!) {
  profile: updateUser(input: $input) {
    ...UserProfile
  }
}
    `,""])),c);function h(a){var o=(0,t.Z)((0,t.Z)({},n),a);return f.D(O,o)}var E=(0,u.Ps)(m||(m=(0,d.Z)([`
    mutation changePassword($oldPassword: String!, $newPassword: String!) {
  changePassword(oldPassword: $oldPassword, newPassword: $newPassword)
}
    `])));function b(a){var o=(0,t.Z)((0,t.Z)({},n),a);return f.D(E,o)}var y=(0,u.Ps)(i||(i=(0,d.Z)([`
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
    `])));function D(a){var o=(0,t.Z)((0,t.Z)({},n),a);return r.a(y,o)}function L(a){var o=_objectSpread(_objectSpread({},n),a);return Apollo.useLazyQuery(y,o)}var j=(0,u.Ps)(l||(l=(0,d.Z)([`
    query organizations {
  organizations {
    id
    code
    name
    logo
    role {
      id
      code
      name
    }
  }
}
    `])));function Z(a){var o=(0,t.Z)((0,t.Z)({},n),a);return r.a(j,o)}function M(a){var o=_objectSpread(_objectSpread({},n),a);return Apollo.useLazyQuery(j,o)}},96635:function(x,v,s){"use strict";s.r(v);var t=s(73727),d=s(12041),u=s(18071),r=s(17818),f=s(25496),e=s(85893);function p(m){var i,l,n=m.data,c=((i=n.role)===null||i===void 0?void 0:i.code)=="OWNER";return(0,e.jsxs)("div",{className:"organization-item d-flex align-items-center p-5 border-bottom border-secondary",children:[(0,e.jsxs)("div",{className:"flex-row-fluid d-flex align-items-center",children:[(0,e.jsx)(r.mN.Avatar,{size:40,className:"me-2",src:(0,f.Fz)(n==null||(l=n.logo)===null||l===void 0?void 0:l.id,{size:"300x300"}),alt:n.name}),(0,e.jsx)(t.Link,{to:"/organizations/".concat(n.code),className:"fw-bolder text-primary ms-2",children:n.name}),(0,e.jsx)("span",{className:"ms-2 text-small text-gray-700",children:c?"\u6240\u6709\u8005":"\u6210\u5458"})]}),(0,e.jsxs)("div",{className:"organization-item-actions",children:[c&&(0,e.jsx)(r.zx,{to:"/organizations/".concat(n.code,"/settings/profile"),as:t.Link,size:"sm",className:"ms-2",type:"solid",children:"\u8BBE\u7F6E"}),(0,e.jsx)(r.zx,{size:"sm",className:"ms-2",type:"solid",children:"\u79BB\u5F00\u7EC4\u7EC7"})]})]})}function g(){var m=(0,d.tl)({fetchPolicy:"cache-and-network"}),i=m.data,l=m.loading,n=(i==null?void 0:i.organizations)||[];return(0,e.jsx)(u.vs,{className:"page-settings-organizations",footer:!1,children:(0,e.jsxs)(r.Zb,{className:"mb-5 mb-xl-10",children:[(0,e.jsx)(r.Zb.Header,{children:(0,e.jsx)(r.Zb.Title,{children:"\u7EC4\u7EC7"})}),(0,e.jsx)(r.Zb.Body,{children:(0,e.jsxs)("div",{className:"rounded border border-secondary w-800px",children:[!n.length&&(0,e.jsx)(r.HY,{title:l?"\u52A0\u8F7D\u4E2D...":"\u60A8\u6CA1\u6709\u52A0\u5165\u4EFB\u4F55\u7EC4\u7EC7",description:l?"\u7A0D\u7B49\u4E00\u4F1A,\u6B63\u5728\u83B7\u53D6\u6570\u636E":void 0}),n.map(function(c){return(0,e.jsx)(p,{data:c},c.id)})]})})]})})}v.default=g}}]);
