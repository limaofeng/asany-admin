(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[4715],{250:function(q,W,n){"use strict";var i=n(20310),f=n(49704),F,v,S,m,_={},D=(0,f.Ps)(F||(F=(0,i.Z)([`
    query websites {
  websites {
    id
    name
    description
  }
}
    `])));function Q(l){var t=_objectSpread(_objectSpread({},_),l);return Apollo.useQuery(D,t)}function a(l){var t=_objectSpread(_objectSpread({},_),l);return Apollo.useLazyQuery(D,t)}var B=(0,f.Ps)(v||(v=(0,i.Z)([`
    query website($id: ID!) {
  website(id: $id) {
    id
    name
    description
    channel {
      id
    }
    application {
      id
    }
  }
}
    `])));function e(l){var t=_objectSpread(_objectSpread({},_),l);return Apollo.useQuery(B,t)}function R(l){var t=_objectSpread(_objectSpread({},_),l);return Apollo.useLazyQuery(B,t)}var L=(0,f.Ps)(S||(S=(0,i.Z)([`
    mutation createWebsite($input: WebsiteCreateInput!) {
  createWebsite(input: $input) {
    id
    name
  }
}
    `])));function O(l){var t=_objectSpread(_objectSpread({},_),l);return Apollo.useMutation(L,t)}var g=(0,f.Ps)(m||(m=(0,i.Z)([`
    query websiteArticleCategories($id: ID!) {
  categories: articleCategories(filter: {parent: {id: $id, subColumns: true}}) {
    id
    icon
    name
    fullName
    path
    index
    level
    image
    storeTemplate {
      id
    }
    parent {
      id
    }
  }
}
    `])));function y(l){var t=_objectSpread(_objectSpread({},_),l);return Apollo.useQuery(g,t)}function z(l){var t=_objectSpread(_objectSpread({},_),l);return Apollo.useLazyQuery(g,t)}},44715:function(q,W,n){"use strict";n.r(W);var i=n(11849),f=n(93224),F=n(3182),v=n(2824),S=n(94043),m=n.n(S),_=n(67294),D=n(250),Q=n(75468),a=n(53704),B=n(71447),e=n(85893);function R(L){var O,g=L.match,y=L.history,z=(0,B.GR)(),l=(0,v.Z)(z,2),t=l[1].loadRegion,ee=(0,D.useLandingStoreLazyQuery)({fetchPolicy:"cache-and-network"}),$=(0,v.Z)(ee,2),U=$[0],G=$[1],N=G.data,K=G.loading,ae=(0,D.useGeocodeLazyQuery)({fetchPolicy:"cache-and-network"}),V=(0,v.Z)(ae,2),M=V[0],k=V[1].loading,se=(0,D.useCreateStoreMutation)({}),H=(0,v.Z)(se,2),X=H[0],re=H[1].loading,ne=(0,D.useUpdateStoreMutation)({}),J=(0,v.Z)(ne,2),Y=J[0],te=J[1].loading,j=g.params.id=="new",c=a.l0.useForm(),ue=(0,_.useCallback)((0,F.Z)(m().mark(function A(){var u,p,b,d;return m().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,c.validateFields();case 2:if(u=s.sent,p=u.detailedAddress,b=u.address,d=(0,f.Z)(u,["detailedAddress","address"]),!j){s.next=11;break}return s.next=9,X({variables:{input:(0,i.Z)((0,i.Z)({},d),{},{address:(0,i.Z)((0,i.Z)({},b),{},{detailedAddress:p})})}});case 9:s.next=13;break;case 11:return s.next=13,Y({variables:{id:g.params.id,input:(0,i.Z)((0,i.Z)({},d),{},{address:(0,i.Z)((0,i.Z)({},b),{},{detailedAddress:p})})}});case 13:a.FN.success("\u95E8\u5E97 \u201C".concat(d.name,"\u201D ").concat(j?"\u65B0\u589E":"\u4FEE\u6539","\u6210\u529F"),2e3,{placement:"bottom-start",progressBar:!0}),y.length?y.goBack():y.replace("/website/landing/stores");case 15:case"end":return s.stop()}},A)})),[X,g.params.id,c,y,j,Y]);(0,_.useEffect)(function(){if(g.params.id!="new"){var A=new AbortController;return U({variables:{id:g.params.id},context:{fetchOptions:{signal:A.signal}}}).then(function(){var u=(0,F.Z)(m().mark(function p(b){var d,r,s,E,C,o,x,Z,w,P;return m().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:if(r=b.data,console.log("loadStore",r==null?void 0:r.store),s=r==null?void 0:r.store,s){I.next=8;break}return I.next=6,a.u_.error({content:"\u95E8\u5E97\u4E0D\u5B58\u5728,\u53EF\u80FD\u5DF2\u7ECF\u88AB\u5220\u9664\u4E86",timer:3e3,timerProgressBar:!0});case 6:return!y.length||j?y.replace("/website/landing/stores"):y.goBack(),I.abrupt("return");case 8:E=s.location||{},C=E.__typename,o=(0,f.Z)(E,["__typename"]),x=s.address||{},Z=x.__typename,w=x.detailedAddress,P=(0,f.Z)(x,["__typename","detailedAddress"]),c.setFieldsValue((0,i.Z)((0,i.Z)({},s),{},{address:P,location:o,detailedAddress:w,qrCode:(d=s.qrCode)===null||d===void 0?void 0:d.id}));case 11:case"end":return I.stop()}},p)}));return function(p){return u.apply(this,arguments)}}()),function(){A.abort()}}},[c,U,y,g.params.id,j]);var ie=(0,_.useCallback)(function(){var A=(0,F.Z)(m().mark(function u(p){var b,d,r,s,E,C,o,x,Z,w,P,T;return m().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(b=c.getFieldValue("address"),d=c.getFieldValue("location"),!b){h.next=4;break}return h.abrupt("return");case 4:if(r=p.clipboardData.getData("text/plain"),["\u7701","\u5E02","\u533A","\u53BF"].some(function(de){return r.includes(de)})){h.next=7;break}return h.abrupt("return");case 7:return h.next=9,M({variables:{address:r}});case 9:return s=h.sent,E=s.data,C=E.amapOpenAPI.geocodes[0],h.next=14,t(C.adcode);case 14:o=h.sent,x=r.indexOf(C.district),x!=-1&&(r=r.substring(x+C.district.length)),d==null?(Z=C.location.split(","),w=(0,v.Z)(Z,2),P=w[0],T=w[1],c.setFieldsValue({address:o,detailedAddress:r,location:{longitude:P,latitude:T}})):c.setFieldsValue({address:o,detailedAddress:r});case 18:case"end":return h.stop()}},u)}));return function(u){return A.apply(this,arguments)}}(),[c,t,M]),le=(0,_.useCallback)((0,F.Z)(m().mark(function A(){var u,p,b,d,r,s,E;return m().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(u=c.getFieldsValue(),!(!u.address||!u.detailedAddress)){o.next=4;break}return a.u_.warning({content:"\u8BF7\u786E\u4FDD\u5730\u533A\u4E0E\u8BE6\u7EC6\u5730\u5740\u5DF2\u7ECF\u5F55\u5165",timer:3e3,timerProgressBar:!0}),o.abrupt("return");case 4:return o.next=6,M({variables:{city:u.address[u.address.length-1],address:u.detailedAddress}});case 6:p=o.sent,b=p.data,d=b.amapOpenAPI.geocodes[0].location.split(","),r=(0,v.Z)(d,2),s=r[0],E=r[1],c.setFieldsValue({location:{longitude:s,latitude:E}});case 10:case"end":return o.stop()}},A)})),[c,M]);return(0,e.jsx)(Q.v,{header:j?{title:"\u65B0\u589E\u95E8\u5E97"}:void 0,footer:!1,children:(0,e.jsxs)(a.Zb,{className:"mb-5 mb-xl-10",children:[(0,e.jsx)(a.Zb.Header,{children:(0,e.jsx)(a.Zb.Title,{children:j?"\u65B0\u589E\u95E8\u5E97":N==null||(O=N.store)===null||O===void 0?void 0:O.name})}),(0,e.jsxs)(a.Zb.Body,{children:[(0,e.jsx)(a.bH,{overlayClassName:"bg-white bg-opacity-25",loading:K,children:(0,e.jsxs)(a.l0,{form:c,className:"w-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row",children:[(0,e.jsxs)("div",{className:"col-12 col-md-8",children:[(0,e.jsx)(a.l0.Item,{className:"mb-5",name:"code",label:"\u5E97\u53F7",rules:[{required:!0,message:"\u5E97\u53F7\u4E0D\u80FD\u4E3A\u7A7A"}],help:"\u8BF7\u5C3D\u91CF\u4FDD\u8BC1\u5E97\u94FA\u7F16\u53F7\u7684\u552F\u4E00\u6027",children:(0,e.jsx)(a.II,{solid:!0,className:"w-400px"})}),(0,e.jsx)(a.l0.Item,{className:"mb-5",name:"name",label:"\u540D\u79F0",rules:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(a.II,{solid:!0,className:"w-400px"})}),(0,e.jsx)(a.l0.Item,{className:"my-5",name:"address",label:"\u6240\u5728\u5730\u533A",children:(0,e.jsx)(a.H6,{solid:!0,resultType:"object",className:"w-400px",ends:"district",placeholder:"--\u8BF7\u9009\u62E9--"})}),(0,e.jsx)(a.l0.Item,{className:"my-5",name:"detailedAddress",label:"\u8BE6\u7EC6\u5730\u5740",help:"\u76F4\u63A5\u7C98\u8D34\u5B8C\u6574\u5730\u5740,\u4F1A\u81EA\u52A8\u8BC6\u522B\u6240\u5728\u5730\u533A\u4E0E\u5730\u7406\u4F4D\u7F6E",children:(0,e.jsx)(a.II.TextArea,{solid:!0,className:"w-400px",onPaste:ie})}),(0,e.jsx)(a.l0.Item,{className:"my-5",labelClassName:"d-inline-flex align-items-center",label:(0,e.jsxs)(e.Fragment,{children:["\u5730\u7406\u4F4D\u7F6E",(0,e.jsx)("a",{onClick:k?void 0:le,className:"ps-2 cursor-pointer",children:k?"\u8BC6\u522B\u4E2D,\u8BF7\u7A0D\u7B49...":"\u901A\u8FC7\u5730\u5740\u8BC6\u522B"}),(0,e.jsx)(a.yC,{className:"text-primary d-inline-flex align-items-center ms-2",size:"small",spinning:k})]}),help:"\u9AD8\u5FB7\u5750\u6807\u7CFB\u7ECF\u7EAC\u5EA6\uFF0C\u4E14\u4E0D\u8D85\u8FC76\u4F4D\u5C0F\u6570\uFF0C\u5747\u4E0D\u586B\u5219\u81EA\u52A8\u8BC6\u522B",children:(0,e.jsxs)(a.II.Group,{solid:!0,className:"w-400px",children:[(0,e.jsx)(a.II.Group.Text,{children:"\u7ECF\u5EA6"}),(0,e.jsx)(a.l0.Item,{noStyle:!0,name:["location","longitude"],children:(0,e.jsx)(a.II,{})}),(0,e.jsx)(a.II.Group.Text,{children:"\u7EAC\u5EA6"}),(0,e.jsx)(a.l0.Item,{noStyle:!0,name:["location","latitude"],children:(0,e.jsx)(a.II,{})})]})}),(0,e.jsx)(a.l0.Item,{className:"my-5",name:"leader",label:"\u8D1F\u8D23\u4EBA",children:(0,e.jsx)(a.II,{solid:!0,className:"w-400px"})}),(0,e.jsx)(a.l0.Item,{className:"my-5",name:"description",label:"\u63CF\u8FF0",help:"\u8BF7\u7528\u5C11\u4E8E250\u5B57\u7B26\u63CF\u8FF0",children:(0,e.jsx)(a.II.TextArea,{solid:!0,autoSize:{minRows:4,maxRows:8},showCount:!0,maxLength:250,className:"w-400px"})})]}),(0,e.jsx)("div",{className:"col-12 col-md-4",children:(0,e.jsx)(a.l0.Item,{className:"mb-5",name:"qrCode",label:"\u95E8\u5E97\u4E8C\u7EF4\u7801",children:(0,e.jsx)(a.gq.Image,{width:250,height:250,space:"orX8kLOV",crop:{height:450,zoomable:!1,aspectRatio:1},backgroundImage:"/assets/media/background/qrcode_icon.png"})})})]})}),(0,e.jsx)(a.zx,{loading:K||re||te,onClick:ue,children:j?(0,e.jsx)(e.Fragment,{children:"\u6DFB\u52A0\u95E8\u5E97"}):(0,e.jsx)(e.Fragment,{children:"\u4FEE\u6539\u95E8\u5E97\u4FE1\u606F"})})]})]})})}W.default=R}}]);
