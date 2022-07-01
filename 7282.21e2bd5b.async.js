(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[7282],{250:function(Z,w,s){"use strict";var u=s(20310),d=s(49704),c,y,_,v,t={},f=(0,d.Ps)(c||(c=(0,u.Z)([`
    query websites {
  websites {
    id
    name
    description
  }
}
    `])));function a(r){var n=_objectSpread(_objectSpread({},t),r);return Apollo.useQuery(f,n)}function e(r){var n=_objectSpread(_objectSpread({},t),r);return Apollo.useLazyQuery(f,n)}var j=(0,d.Ps)(y||(y=(0,u.Z)([`
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
    `])));function x(r){var n=_objectSpread(_objectSpread({},t),r);return Apollo.useQuery(j,n)}function P(r){var n=_objectSpread(_objectSpread({},t),r);return Apollo.useLazyQuery(j,n)}var l=(0,d.Ps)(_||(_=(0,u.Z)([`
    mutation createWebsite($input: WebsiteCreateInput!) {
  createWebsite(input: $input) {
    id
    name
  }
}
    `])));function o(r){var n=_objectSpread(_objectSpread({},t),r);return Apollo.useMutation(l,n)}var E=(0,d.Ps)(v||(v=(0,u.Z)([`
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
    `])));function A(r){var n=_objectSpread(_objectSpread({},t),r);return Apollo.useQuery(E,n)}function L(r){var n=_objectSpread(_objectSpread({},t),r);return Apollo.useLazyQuery(E,n)}},27282:function(Z,w,s){"use strict";s.r(w);var u=s(11849),d=s(3182),c=s(2824),y=s(94043),_=s.n(y),v=s(67294),t=s(250),f=s(75468),a=s(53704),e=s(85893);function j(x){var P,l=x.match,o=x.history,E=(0,t.useLandingPosterLazyQuery)({fetchPolicy:"cache-and-network"}),A=(0,c.Z)(E,2),L=A[0],r=A[1],n=r.data,F=r.loading,T=(0,t.useCreatePosterMutation)({}),I=(0,c.Z)(T,2),k=I[0],N=I[1].loading,Q=(0,t.useUpdatePosterMutation)({}),B=(0,c.Z)(Q,2),S=B[0],U=B[1].loading,m=l.params.id=="new",h=a.l0.useForm(),z=(0,v.useCallback)((0,d.Z)(_().mark(function C(){var p;return _().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,h.validateFields();case 2:if(p=i.sent,!m){i.next=8;break}return i.next=6,k({variables:{input:(0,u.Z)({},p)}});case 6:i.next=10;break;case 8:return i.next=10,S({variables:{id:l.params.id,input:(0,u.Z)({},p)}});case 10:a.FN.success("\u6D77\u62A5 \u201C".concat(p.name,"\u201D ").concat(m?"\u65B0\u589E":"\u4FEE\u6539","\u6210\u529F"),2e3,{placement:"bottom-start",progressBar:!0}),!o.length||m?o.replace("/website/landing/posters"):o.goBack();case 12:case"end":return i.stop()}},C)})),[k,l.params.id,h,o,m,S]);return(0,v.useEffect)(function(){if(l.params.id!="new"){var C=new AbortController;return L({variables:{id:l.params.id},context:{fetchOptions:{signal:C.signal}}}).then(function(){var p=(0,d.Z)(_().mark(function M(i){var O,W,D,g;return _().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(D=i.data,g=D==null?void 0:D.poster,g){b.next=7;break}return b.next=5,a.u_.error({content:"\u6D77\u62A5\u4E0D\u5B58\u5728,\u53EF\u80FD\u5DF2\u7ECF\u88AB\u5220\u9664\u4E86",timer:3e3,timerProgressBar:!0});case 5:return o.length?o.goBack():o.replace("/website/landing/posters"),b.abrupt("return");case 7:h.setFieldsValue((0,u.Z)((0,u.Z)({},g),{},{music:(O=g.music)===null||O===void 0?void 0:O.id,background:(W=g.background)===null||W===void 0?void 0:W.id}));case 8:case"end":return b.stop()}},M)}));return function(M){return p.apply(this,arguments)}}()),function(){C.abort()}}},[h,L,o,l.params.id]),(0,e.jsx)(f.v,{header:m?{title:"\u65B0\u589E\u6D77\u62A5"}:void 0,footer:!1,children:(0,e.jsxs)(a.Zb,{className:"mb-5 mb-xl-10",children:[(0,e.jsx)(a.Zb.Header,{children:(0,e.jsx)(a.Zb.Title,{children:m?"\u65B0\u589E\u6D77\u62A5":n==null||(P=n.poster)===null||P===void 0?void 0:P.name})}),(0,e.jsxs)(a.Zb.Body,{children:[(0,e.jsx)(a.bH,{overlayClassName:"bg-white bg-opacity-25",loading:F,children:(0,e.jsxs)(a.l0,{form:h,className:"w-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row",children:[(0,e.jsxs)("div",{className:"col-12 col-md-8",children:[(0,e.jsx)(a.l0.Item,{className:"mb-5",name:"name",label:"\u540D\u79F0",rules:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(a.II,{solid:!0,className:"w-400px"})}),(0,e.jsx)(a.l0.Item,{className:"my-5",name:"music",label:"\u80CC\u666F\u97F3\u4E50",children:(0,e.jsx)(a.gq,{solid:!0,accept:".aif, .cda, .mid, .mp3, .mpa, .ogg, .wav, .wma, .wpl",space:"orX8kLOV",className:"w-400px"})}),(0,e.jsx)(a.l0.Item,{className:"my-5",name:"description",label:"\u63CF\u8FF0",help:"\u8BF7\u7528\u5C11\u4E8E250\u5B57\u7B26\u63CF\u8FF0",children:(0,e.jsx)(a.II.TextArea,{solid:!0,autoSize:{minRows:4,maxRows:8},showCount:!0,maxLength:250,className:"w-400px"})})]}),(0,e.jsx)("div",{className:"col-12 col-md-4",children:(0,e.jsx)(a.l0.Item,{className:"mb-5",name:"background",label:"\u6D77\u62A5\u56FE\u7247",children:(0,e.jsx)(a.gq.Image,{width:375,height:812,space:"orX8kLOV",crop:!1})})})]})}),(0,e.jsx)(a.zx,{loading:F||N||U,onClick:z,children:m?(0,e.jsx)(e.Fragment,{children:"\u6DFB\u52A0\u6D77\u62A5"}):(0,e.jsx)(e.Fragment,{children:"\u4FEE\u6539\u6D77\u62A5\u4FE1\u606F"})})]})]})})}w.default=j}}]);
