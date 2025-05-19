"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1292],{80923:function(L,h,n){n.d(h,{$h:function(){return t},tl:function(){return S},O_:function(){return O},x0:function(){return g},TG:function(){return y}});var C=n(97857),r=n.n(C),B=n(68400),o=n.n(B),l=n(75063),d=n(37887),f=n(50319),j,b,v,m,F,P,e={},c=(0,l.Ps)(j||(j=o()([`
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
    `]))),u=(0,l.Ps)(b||(b=o()([`
    query profile {
  profile: user {
    ...UserProfile
  }
}
    `,""])),c);function O(a){var s=r()(r()({},e),a);return d.a(u,s)}function U(a){var s=_objectSpread(_objectSpread({},e),a);return Apollo.useLazyQuery(u,s)}function _(a){var s=_objectSpread(_objectSpread({},e),a);return Apollo.useSuspenseQuery(u,s)}var x=(0,l.Ps)(v||(v=o()([`
    mutation updateProfile($id: ID!, $input: UserUpdateInput!) {
  profile: updateUser(id: $id, input: $input) {
    ...UserProfile
  }
}
    `,""])),c);function y(a){var s=r()(r()({},e),a);return f.D(x,s)}var A=(0,l.Ps)(m||(m=o()([`
    mutation changePassword($oldPassword: String!, $newPassword: String!) {
  changePassword(oldPassword: $oldPassword, newPassword: $newPassword)
}
    `])));function t(a){var s=r()(r()({},e),a);return f.D(A,s)}var p=(0,l.Ps)(F||(F=o()([`
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
    `])));function g(a){var s=r()(r()({},e),a);return d.a(p,s)}function M(a){var s=_objectSpread(_objectSpread({},e),a);return Apollo.useLazyQuery(p,s)}function I(a){var s=_objectSpread(_objectSpread({},e),a);return Apollo.useSuspenseQuery(p,s)}var E=(0,l.Ps)(P||(P=o()([`
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
    `])));function S(a){var s=r()(r()({},e),a);return d.a(E,s)}function T(a){var s=_objectSpread(_objectSpread({},e),a);return Apollo.useLazyQuery(E,s)}function D(a){var s=_objectSpread(_objectSpread({},e),a);return Apollo.useSuspenseQuery(E,s)}},41292:function(L,h,n){n.r(h);var C=n(15009),r=n.n(C),B=n(97857),o=n.n(B),l=n(13769),d=n.n(l),f=n(99289),j=n.n(f),b=n(5574),v=n.n(b),m=n(67294),F=n(12845),P=n(73588),e=n(89717),c=n(80923),u=n(85893),O=["email"];function U(){var _=e.Form.useForm(),x=(0,F.useModel)("@@initialState"),y=x.refresh,A=(0,c.O_)({fetchPolicy:"cache-and-network"}),t=A.data,p=A.loading,g=(0,c.TG)(),M=v()(g,2),I=M[0],E=M[1].loading,S=(0,m.useCallback)(j()(r()().mark(function T(){var D,a,s;return r()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,_.getFieldsValue();case 2:return D=i.sent,a=D.email,s=d()(D,O),i.next=7,I({variables:{input:o()(o()({},s),{},{email:a==null?void 0:a.address})}});case 7:e.Toast.success("\u4E2A\u4EBA\u8D44\u6599\u66F4\u65B0\u6210\u529F",3e3,{placement:"bottom-start",progressBar:!0}),y();case 9:case"end":return i.stop()}},T)})),[_,y,I]);return(0,m.useEffect)(function(){t!=null&&t.profile&&_.setFieldsValue(t.profile)},[t==null?void 0:t.profile,_]),(0,u.jsx)(P.vs,{header:{title:"\u7F16\u8F91\u4E2A\u4EBA\u8D44\u6599"},loading:p,footer:!1,children:(0,u.jsxs)(e.Card,{className:"mb-5 mb-xl-10",children:[(0,u.jsx)(e.Card.Header,{children:(0,u.jsx)(e.Card.Title,{children:"\u4E2A\u4EBA\u8D44\u6599"})}),(0,u.jsxs)(e.Card.Body,{children:[(0,u.jsxs)(e.Form,{form:_,className:"mw-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row",children:[(0,u.jsx)("div",{className:"mw-500px col-12 col-md-8",children:(0,u.jsxs)("div",{className:"mw-400px",children:[(0,u.jsx)(e.Form.Item,{className:"mb-5",name:"name",label:"\u6635\u79F0",help:"\u4F60\u7684\u6635\u79F0\u53EF\u80FD\u4F1A\u51FA\u73B0\u5728\u4F60\u8BC4\u8BBA\u8FC7\u7684\u6587\u7AE0\u6216\u88AB\u5176\u4ED6\u516C\u5F00\u7684\u4FE1\u606F\u4E2D",children:(0,u.jsx)(e.Input,{solid:!0})}),(0,u.jsx)(e.Form.Item,{className:"my-5",name:["email","address"],label:"\u90AE\u7BB1",help:"\u6B64\u90AE\u7BB1\u5C06\u663E\u793A\u5728\u60A8\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D",children:(0,u.jsx)(e.Input,{solid:!0,className:"w-250px"})}),(0,u.jsx)(e.Form.Item,{className:"my-5",name:"sex",label:"\u6027\u522B",help:"\u60A8\u7684\u6027\u522B\u4FE1\u606F\u4E0D\u4F1A\u5728\u4EFB\u4F55\u516C\u5F00\u4F4D\u7F6E\u663E\u793A\uFF0C\u4F46\u4F1A\u4F5C\u4E3A\u9ED8\u8BA4\u5934\u50CF\u89C4\u5219",children:(0,u.jsx)(e.Radio.Group,{solid:!0,options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}],className:"d-flex align-items-center ms-3"})}),(0,u.jsx)(e.Form.Item,{className:"my-5",name:"birthday",label:"\u751F\u65E5",help:"\u751F\u65E5\u4FE1\u606F\u4E0D\u4F1A\u5728\u4EFB\u4F55\u516C\u5F00\u4F4D\u7F6E\u663E\u793A\uFF0C\u4F46\u4F1A\u4F5C\u4E3A\u9ED8\u8BA4\u5934\u50CF\u89C4\u5219\u4E2D\u7684\u4E00\u4E2A\u56E0\u7D20",children:(0,u.jsx)(e.DatePicker,{solid:!0,className:"w-150px"})}),(0,u.jsx)(e.Form.Item,{className:"my-5",name:"company",label:"\u516C\u53F8",help:"\u60A8\u53EF\u4EE5\u4F7F\u7528 \u201C@\u201D \u94FE\u63A5\u5230\u60A8\u4EE5\u52A0\u5165\u7684\u7EC4\u7EC7\u3002",children:(0,u.jsx)(e.Input,{solid:!0})}),(0,u.jsx)(e.Form.Item,{className:"my-5",name:"location",label:"\u6240\u5728\u5730\u533A",children:(0,u.jsx)(e.Input,{solid:!0})}),(0,u.jsx)(e.Form.Item,{className:"my-5",name:"bio",label:"\u81EA\u6211\u4ECB\u7ECD",help:"\u8BF7\u7528\u5C11\u4E8E250\u5B57\u7B26\u63CF\u8FF0\u60A8\u81EA\u5DF1",children:(0,u.jsx)(e.Input.TextArea,{solid:!0,autoSize:{minRows:4,maxRows:8},showCount:!0,maxLength:250})})]})}),(0,u.jsx)("div",{className:"col-12 col-md-4",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)(e.Form.Item,{className:"mb-5",name:"avatar",label:"\u7528\u6237\u5934\u50CF",help:"\u5141\u8BB8\u7684\u6587\u4EF6\u7C7B\u578B:png, jpg, jpeg\u3002",children:(0,u.jsx)(e.Upload.Image,{width:125,height:125,space:"7VE4SSrk",crop:{height:300,zoomable:!1,aspectRatio:1},background:"/assets/media/svg/avatars/blank.svg"})})})})]}),(0,u.jsx)(e.Button,{loading:E,onClick:S,children:"\u66F4\u65B0\u4E2A\u4EBA\u8D44\u6599"})]})]})})}h.default=U}}]);
