(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[3430],{12041:function(I,h,a){"use strict";a.d(h,{$h:function(){return B},tl:function(){return g},O_:function(){return D},x0:function(){return b},TG:function(){return t}});var r=a(11849),o=a(20310),i=a(76058),_=a(64718),f=a(21919),c,v,E,F,u,e,l={},j=(0,i.Ps)(c||(c=(0,o.Z)([`
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
    `]))),m=(0,i.Ps)(v||(v=(0,o.Z)([`
    query profile {
  profile: user {
    ...UserProfile
  }
}
    `,""])),j);function D(n){var s=(0,r.Z)((0,r.Z)({},l),n);return _.a(m,s)}function x(n){var s=_objectSpread(_objectSpread({},l),n);return Apollo.useLazyQuery(m,s)}var P=(0,i.Ps)(E||(E=(0,o.Z)([`
    mutation updateProfile($id: ID!, $input: UserUpdateInput!) {
  profile: updateUser(id: $id, input: $input) {
    ...UserProfile
  }
}
    `,""])),j);function t(n){var s=(0,r.Z)((0,r.Z)({},l),n);return f.D(P,s)}var C=(0,i.Ps)(F||(F=(0,o.Z)([`
    mutation changePassword($oldPassword: String!, $newPassword: String!) {
  changePassword(oldPassword: $oldPassword, newPassword: $newPassword)
}
    `])));function B(n){var s=(0,r.Z)((0,r.Z)({},l),n);return f.D(C,s)}var p=(0,i.Ps)(u||(u=(0,o.Z)([`
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
    `])));function b(n){var s=(0,r.Z)((0,r.Z)({},l),n);return _.a(p,s)}function O(n){var s=_objectSpread(_objectSpread({},l),n);return Apollo.useLazyQuery(p,s)}var A=(0,i.Ps)(e||(e=(0,o.Z)([`
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
    `])));function g(n){var s=(0,r.Z)((0,r.Z)({},l),n);return _.a(A,s)}function y(n){var s=_objectSpread(_objectSpread({},l),n);return Apollo.useLazyQuery(A,s)}},53430:function(I,h,a){"use strict";a.r(h);var r=a(39428),o=a(11849),i=a(93224),_=a(3182),f=a(2824),c=a(67294),v=a(7020),E=a(12041),F=a(18071),u=a(74200),e=a(85893),l=["email"];function j(){var m=u.l0.useForm(),D=(0,v.tT)("@@initialState"),x=D.refresh,P=(0,E.O_)({fetchPolicy:"cache-and-network"}),t=P.data,C=P.loading,B=(0,E.TG)(),p=(0,f.Z)(B,2),b=p[0],O=p[1].loading,A=(0,c.useCallback)((0,_.Z)((0,r.Z)().mark(function g(){var y,n,s;return(0,r.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,m.getFieldsValue();case 2:return y=d.sent,n=y.email,s=(0,i.Z)(y,l),d.next=7,b({variables:{input:(0,o.Z)((0,o.Z)({},s),{},{email:n==null?void 0:n.address})}});case 7:u.FN.success("\u4E2A\u4EBA\u8D44\u6599\u66F4\u65B0\u6210\u529F",3e3,{placement:"bottom-start",progressBar:!0}),x();case 9:case"end":return d.stop()}},g)})),[m,x,b]);return(0,c.useEffect)(function(){!(t!=null&&t.profile)||m.setFieldsValue(t.profile)},[t==null?void 0:t.profile,m]),(0,e.jsx)(F.vs,{header:{title:"\u7F16\u8F91\u4E2A\u4EBA\u8D44\u6599"},loading:C,footer:!1,children:(0,e.jsxs)(u.Zb,{className:"mb-5 mb-xl-10",children:[(0,e.jsx)(u.Zb.Header,{children:(0,e.jsx)(u.Zb.Title,{children:"\u4E2A\u4EBA\u8D44\u6599"})}),(0,e.jsxs)(u.Zb.Body,{children:[(0,e.jsxs)(u.l0,{form:m,className:"mw-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row",children:[(0,e.jsx)("div",{className:"mw-500px col-12 col-md-8",children:(0,e.jsxs)("div",{className:"mw-400px",children:[(0,e.jsx)(u.l0.Item,{className:"mb-5",name:"name",label:"\u6635\u79F0",help:"\u4F60\u7684\u6635\u79F0\u53EF\u80FD\u4F1A\u51FA\u73B0\u5728\u4F60\u8BC4\u8BBA\u8FC7\u7684\u6587\u7AE0\u6216\u88AB\u5176\u4ED6\u516C\u5F00\u7684\u4FE1\u606F\u4E2D",children:(0,e.jsx)(u.II,{solid:!0})}),(0,e.jsx)(u.l0.Item,{className:"my-5",name:["email","address"],label:"\u90AE\u7BB1",help:"\u6B64\u90AE\u7BB1\u5C06\u663E\u793A\u5728\u60A8\u7684\u4E2A\u4EBA\u8D44\u6599\u4E2D",children:(0,e.jsx)(u.II,{solid:!0,className:"w-250px"})}),(0,e.jsx)(u.l0.Item,{className:"my-5",name:"sex",label:"\u6027\u522B",help:"\u60A8\u7684\u6027\u522B\u4FE1\u606F\u4E0D\u4F1A\u5728\u4EFB\u4F55\u516C\u5F00\u4F4D\u7F6E\u663E\u793A\uFF0C\u4F46\u4F1A\u4F5C\u4E3A\u9ED8\u8BA4\u5934\u50CF\u89C4\u5219",children:(0,e.jsx)(u.Y8.Group,{solid:!0,options:[{label:"\u7537",value:"male"},{label:"\u5973",value:"female"}],className:"d-flex align-items-center ms-3"})}),(0,e.jsx)(u.l0.Item,{className:"my-5",name:"birthday",label:"\u751F\u65E5",help:"\u751F\u65E5\u4FE1\u606F\u4E0D\u4F1A\u5728\u4EFB\u4F55\u516C\u5F00\u4F4D\u7F6E\u663E\u793A\uFF0C\u4F46\u4F1A\u4F5C\u4E3A\u9ED8\u8BA4\u5934\u50CF\u89C4\u5219\u4E2D\u7684\u4E00\u4E2A\u56E0\u7D20",children:(0,e.jsx)(u.Mt,{solid:!0,className:"w-150px"})}),(0,e.jsx)(u.l0.Item,{className:"my-5",name:"company",label:"\u516C\u53F8",help:"\u60A8\u53EF\u4EE5\u4F7F\u7528 \u201C@\u201D \u94FE\u63A5\u5230\u60A8\u4EE5\u52A0\u5165\u7684\u7EC4\u7EC7\u3002",children:(0,e.jsx)(u.II,{solid:!0})}),(0,e.jsx)(u.l0.Item,{className:"my-5",name:"location",label:"\u6240\u5728\u5730\u533A",children:(0,e.jsx)(u.II,{solid:!0})}),(0,e.jsx)(u.l0.Item,{className:"my-5",name:"bio",label:"\u81EA\u6211\u4ECB\u7ECD",help:"\u8BF7\u7528\u5C11\u4E8E250\u5B57\u7B26\u63CF\u8FF0\u60A8\u81EA\u5DF1",children:(0,e.jsx)(u.II.TextArea,{solid:!0,autoSize:{minRows:4,maxRows:8},showCount:!0,maxLength:250})})]})}),(0,e.jsx)("div",{className:"col-12 col-md-4",children:(0,e.jsx)("div",{className:"row",children:(0,e.jsx)(u.l0.Item,{className:"mb-5",name:"avatar",label:"\u7528\u6237\u5934\u50CF",help:"\u5141\u8BB8\u7684\u6587\u4EF6\u7C7B\u578B:png, jpg, jpeg\u3002",children:(0,e.jsx)(u.gq.Image,{width:125,height:125,space:"7VE4SSrk",crop:{height:300,zoomable:!1,aspectRatio:1},background:"/assets/media/svg/avatars/blank.svg"})})})})]}),(0,e.jsx)(u.zx,{loading:O,onClick:A,children:"\u66F4\u65B0\u4E2A\u4EBA\u8D44\u6599"})]})]})})}h.default=j}}]);
