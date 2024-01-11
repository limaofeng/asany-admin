(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[543],{12041:function(Z,y,n){"use strict";n.d(y,{$h:function(){return t},tl:function(){return p},O_:function(){return C},x0:function(){return v},TG:function(){return i}});var o=n(11849),_=n(20310),m=n(76058),E=n(64718),h=n(21919),x,B,P,D,s,b,e={},g=(0,m.Ps)(x||(x=(0,_.Z)([`
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
    `]))),F=(0,m.Ps)(B||(B=(0,_.Z)([`
    query profile {
  profile: user {
    ...UserProfile
  }
}
    `,""])),g);function C(a){var r=(0,o.Z)((0,o.Z)({},e),a);return E.a(F,r)}function w(a){var r=_objectSpread(_objectSpread({},e),a);return Apollo.useLazyQuery(F,r)}var O=(0,m.Ps)(P||(P=(0,_.Z)([`
    mutation updateProfile($id: ID!, $input: UserUpdateInput!) {
  profile: updateUser(id: $id, input: $input) {
    ...UserProfile
  }
}
    `,""])),g);function i(a){var r=(0,o.Z)((0,o.Z)({},e),a);return h.D(O,r)}var l=(0,m.Ps)(D||(D=(0,_.Z)([`
    mutation changePassword($oldPassword: String!, $newPassword: String!) {
  changePassword(oldPassword: $oldPassword, newPassword: $newPassword)
}
    `])));function t(a){var r=(0,o.Z)((0,o.Z)({},e),a);return h.D(l,r)}var d=(0,m.Ps)(s||(s=(0,_.Z)([`
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
    `])));function v(a){var r=(0,o.Z)((0,o.Z)({},e),a);return E.a(d,r)}function f(a){var r=_objectSpread(_objectSpread({},e),a);return Apollo.useLazyQuery(d,r)}var c=(0,m.Ps)(b||(b=(0,_.Z)([`
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
    `])));function p(a){var r=(0,o.Z)((0,o.Z)({},e),a);return E.a(c,r)}function j(a){var r=_objectSpread(_objectSpread({},e),a);return Apollo.useLazyQuery(c,r)}},543:function(Z,y,n){"use strict";n.r(y);var o=n(39428),_=n(93224),m=n(3182),E=n(2824),h=n(67294),x=n(28865),B=n(73727),P=n(12041),D=n(18071),s=n(74200),b=n(25496),e=n(85893),g=["password_confirmation"];function F(i){var l,t=i.data,d=(0,h.useMemo)(function(){var v,f,c;return((v=t.device)===null||v===void 0?void 0:v.type)=="COMPUTER"?"laptop":((f=t.device)===null||f===void 0?void 0:f.type)=="MOBILE"?"phone":((c=t.device)===null||c===void 0?void 0:c.type)=="TABLET"?"tablet":"laptop"},[(l=t.device)===null||l===void 0?void 0:l.type]);return(0,e.jsxs)("li",{className:"session-item p-5 border-bottom border-secondary d-flex flex-row",children:[(0,e.jsxs)("div",{className:"flex-column-fluid d-flex flex-column",children:[(0,e.jsxs)("div",{className:"d-flex flex-row",children:[(0,e.jsx)("span",{className:"session-state-indicator mt-3 rounded recent"}),(0,e.jsx)("div",{className:"device-icon-container",children:(0,e.jsx)(x.ZP,{className:"svg-icon-2hx",name:"Bootstrap/".concat(d)})}),(0,e.jsxs)("div",{className:"session-info",children:[(0,e.jsxs)("strong",{children:[t.location||"\u5730\u533A \u672A\u77E5",(0,e.jsx)("span",{className:"ms-4",children:t.ip||"IP \u672A\u77E5"})]}),(0,e.jsx)("div",{className:"text-small text-gray-800",children:"\u60A8\u5F53\u524D\u7684\u4F1A\u8BDD1212 / \u6700\u540E\u8BBF\u95EE\u65F6\u95F4 2022\u5E74 3\u6708 15\u65E5"})]})]}),(0,e.jsx)("div",{className:"seen-in text-gray-800",children:"\u8BBF\u95EE\u4F4D\u7F6E\u4F4D\u4E8E \u4E2D\u56FD"})]}),(0,e.jsx)("div",{children:(0,e.jsx)(s.zx,{as:B.Link,to:"/settings/sessions/833633957",className:"btn-session-details",type:"solid",children:"\u67E5\u770B\u8BE6\u60C5"})})]})}function C(){var i=(0,P.x0)(),l=i.data,t=(l==null?void 0:l.sessions)||[];return(0,e.jsxs)(s.Zb,{className:"user-session-list mb-5 mb-xl-10",children:[(0,e.jsx)(s.Zb.Header,{children:(0,e.jsx)(s.Zb.Title,{children:"\u4F1A\u8BDD"})}),(0,e.jsxs)(s.Zb.Body,{children:[(0,e.jsx)("p",{className:"mb-4",children:"\u8FD9\u662F\u5DF2\u767B\u5F55\u60A8\u5E10\u6237\u7684\u8BBE\u5907\u5217\u8868\u3002\u60A8\u53EF\u4EE5\u64A4\u9500\u60A8\u4E0D\u8BA4\u53EF\u7684\u4EFB\u4F55\u4F1A\u8BDD\u3002"}),(0,e.jsx)("ul",{className:"w-800px rounded border border-secondary",children:t.map(function(d){return(0,e.jsx)(F,{data:d},d.id)})})]})]})}function w(){var i=s.l0.useForm(),l=(0,P.$h)(),t=(0,E.Z)(l,2),d=t[0],v=t[1].loading,f=(0,h.useCallback)((0,m.Z)((0,o.Z)().mark(function c(){var p,j,a,r;return(0,o.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,i.validateFields();case 2:return p=u.sent,j=p.password_confirmation,a=(0,_.Z)(p,g),u.prev=5,u.next=8,d({variables:a});case 8:s.FN.success("\u5BC6\u7801\u4FEE\u6539\u6210\u529F",3e3,{placement:"bottom-start",progressBar:!0}),i.resetFields(),u.next=16;break;case 12:u.prev=12,u.t0=u.catch(5),r=(0,b.nU)(u.t0),s.FN.error(r.message,3e3,{placement:"top-center"});case 16:case"end":return u.stop()}},c,null,[[5,12]])})),[d,i]);return(0,e.jsxs)(s.Zb,{className:"mb-5 mb-xl-10",children:[(0,e.jsx)(s.Zb.Header,{children:(0,e.jsx)(s.Zb.Title,{children:"\u66F4\u6539\u5BC6\u7801"})}),(0,e.jsxs)(s.Zb.Body,{children:[(0,e.jsxs)(s.l0,{form:i,className:"col-12 col-md-8",children:[(0,e.jsx)(s.l0.Item,{className:"mb-5",name:"oldPassword",label:"\u539F\u5BC6\u7801",rules:[{required:!0,message:"\u539F\u5BC6\u7801\u5FC5\u586B"}],children:(0,e.jsx)(s.II.Password,{solid:!0,className:"w-400px"})}),(0,e.jsx)(s.l0.Item,{className:"my-5 w-400px",name:"newPassword",label:"\u65B0\u5BC6\u7801",rules:[{required:!0,message:"\u5BC6\u7801\u5FC5\u586B"},{min:8,message:"\u5BC6\u7801\u81F3\u5C11\u5305\u542B 8 \u4E2A\u5B57\u7B26"}],children:(0,e.jsx)(s.II.Password,{meter:!0,solid:!0})}),(0,e.jsx)(s.l0.Item,{className:"my-5",name:"password_confirmation",label:"\u786E\u8BA4\u65B0\u5BC6\u7801",rules:[{validator:function(){var c=(0,m.Z)((0,o.Z)().mark(function j(a,r){return(0,o.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(i.getFieldValue("newPassword")===r){u.next=2;break}throw new Error("\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u81F4");case 2:case"end":return u.stop()}},j)}));function p(j,a){return c.apply(this,arguments)}return p}()}],children:(0,e.jsx)(s.II.Password,{solid:!0,className:"w-400px"})})]}),(0,e.jsx)("p",{className:"text-small mt-2 mb-1",children:"\u786E\u4FDD\u5BC6\u7801\u81F3\u5C11\u5305\u542B 15 \u4E2A\u5B57\u7B26\u6216\u81F3\u5C11 8 \u4E2A\u5B57\u7B26\uFF0C\u5305\u62EC\u6570\u5B57 \u548C\u5C0F\u5199\u5B57\u6BCD\u3002"}),(0,e.jsx)(s.zx,{loading:v,className:"me-4",onClick:f,children:"\u66F4\u65B0\u5BC6\u7801"}),(0,e.jsx)(s.zx,{type:"link",variant:!1,children:"\u6211\u5FD8\u8BB0\u4E86\u81EA\u5DF1\u7684\u5BC6\u7801"})]})]})}function O(){return(0,e.jsxs)(D.vs,{className:"page-settings-security",header:{title:"\u5BC6\u7801\u4E0E\u5B89\u5168\u8BBE\u7F6E"},footer:!1,children:[(0,e.jsx)(w,{}),(0,e.jsx)(C,{})]})}y.default=O}}]);
