(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[3619],{250:function(U,D,u){"use strict";var o=u(20310),p=u(49704),g,f,b,m,i={},E=(0,p.Ps)(g||(g=(0,o.Z)([`
    query websites {
  websites {
    id
    name
    description
  }
}
    `])));function a(n){var s=_objectSpread(_objectSpread({},i),n);return Apollo.useQuery(E,s)}function e(n){var s=_objectSpread(_objectSpread({},i),n);return Apollo.useLazyQuery(E,s)}var F=(0,p.Ps)(f||(f=(0,o.Z)([`
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
    `])));function I(n){var s=_objectSpread(_objectSpread({},i),n);return Apollo.useQuery(F,s)}function P(n){var s=_objectSpread(_objectSpread({},i),n);return Apollo.useLazyQuery(F,s)}var c=(0,p.Ps)(b||(b=(0,o.Z)([`
    mutation createWebsite($input: WebsiteCreateInput!) {
  createWebsite(input: $input) {
    id
    name
  }
}
    `])));function d(n){var s=_objectSpread(_objectSpread({},i),n);return Apollo.useMutation(c,s)}var w=(0,p.Ps)(m||(m=(0,o.Z)([`
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
    `])));function j(n){var s=_objectSpread(_objectSpread({},i),n);return Apollo.useQuery(w,s)}function O(n){var s=_objectSpread(_objectSpread({},i),n);return Apollo.useLazyQuery(w,s)}},43619:function(U,D,u){"use strict";u.r(D);var o=u(11849),p=u(3182),g=u(2824),f=u(94043),b=u.n(f),m=u(67294),i=u(250),E=u(75468),a=u(53704),e=u(85893);function F(I){var P,c=I.match,d=I.history,w=(0,i.useLandingStoresQuery)({fetchPolicy:"cache-and-network",variables:{pageSize:1e3}}),j=w.data,O=(0,i.useLandingPostersQuery)({fetchPolicy:"cache-and-network",variables:{pageSize:1e3}}),n=O.data,s=(0,i.useLandingPageLazyQuery)({fetchPolicy:"cache-and-network"}),W=(0,g.Z)(s,2),Q=W[0],k=W[1],L=k.data,T=k.loading,K=(0,i.useCreatePageMutation)({}),Z=(0,g.Z)(K,2),z=Z[0],V=Z[1].loading,H=(0,i.useUpdatePageMutation)({}),R=(0,g.Z)(H,2),$=R[0],X=R[1].loading,h=c.params.id=="new",_=a.l0.useForm(),G=(0,m.useCallback)((0,p.Z)(b().mark(function l(){var t;return b().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,_.validateFields();case 2:if(t=r.sent,!h){r.next=8;break}return r.next=6,z({variables:{input:t}});case 6:r.next=10;break;case 8:return r.next=10,$({variables:{id:c.params.id,input:t}});case 10:a.FN.success("\u6D3B\u52A8 \u201C".concat(t.name,"\u201D ").concat(h?"\u65B0\u589E":"\u4FEE\u6539","\u6210\u529F"),2e3,{placement:"bottom-start",progressBar:!0}),!d.length||h?d.replace("/website/landing/pages"):d.go(-2);case 12:case"end":return r.stop()}},l)})),[z,c.params.id,_,d,h,$]);(0,m.useEffect)(function(){if(c.params.id!="new"){var l=new AbortController;return Q({variables:{id:c.params.id},context:{fetchOptions:{signal:l.signal}}}).then(function(){var t=(0,p.Z)(b().mark(function y(r){var M,B,N,S,C,v;return b().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:if(C=r.data,v=C==null?void 0:C.page,v){x.next=7;break}return x.next=5,a.u_.error({content:"\u6D3B\u52A8\u4E0D\u5B58\u5728,\u53EF\u80FD\u5DF2\u7ECF\u88AB\u5220\u9664\u4E86",timer:3e3,timerProgressBar:!0});case 5:return d.length?d.goBack():d.replace("/website/landing/pages"),x.abrupt("return");case 7:_.setFieldsValue((0,o.Z)((0,o.Z)({},v),{},{metadata:(0,o.Z)((0,o.Z)({},v.metadata),{},{thumb:(M=v.metadata)===null||M===void 0||(B=M.thumb)===null||B===void 0?void 0:B.id}),poster:(N=v.poster)===null||N===void 0?void 0:N.id,stores:(S=v.stores)===null||S===void 0?void 0:S.map(function(q){return q.id})}));case 8:case"end":return x.stop()}},y)}));return function(y){return t.apply(this,arguments)}}()),function(){l.abort()}}},[_,Q,d,c.params.id]);var A=(0,m.useMemo)(function(){return j==null?void 0:j.landingStores.edges.map(function(l){var t=l.node;return{value:t.id,label:t.name}})},[j]),J=(0,m.useMemo)(function(){return n==null?void 0:n.landingPosters.edges.map(function(l){var t=l.node;return{value:t.id,label:t.name}})},[n]),Y=(0,m.useCallback)(function(){!A||_.setFieldsValue({stores:A.map(function(l){return l.value})})},[_,A]);return(0,e.jsx)(E.v,{header:h?{title:"\u65B0\u589E\u6D3B\u52A8"}:void 0,footer:!1,children:(0,e.jsxs)(a.Zb,{className:"mb-5 mb-xl-10",children:[(0,e.jsx)(a.Zb.Header,{children:(0,e.jsx)(a.Zb.Title,{children:h?"\u65B0\u589E\u6D3B\u52A8":L==null||(P=L.page)===null||P===void 0?void 0:P.name})}),(0,e.jsxs)(a.Zb.Body,{children:[(0,e.jsx)(a.bH,{zIndex:10,overlayClassName:"bg-white bg-opacity-25",loading:T,children:(0,e.jsxs)(a.l0,{form:_,children:[(0,e.jsxs)("div",{className:"mw-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row",children:[(0,e.jsxs)("div",{className:"col-12 col-md-8",children:[(0,e.jsx)(a.l0.Item,{className:"mb-5",name:"name",label:"\u540D\u79F0",rules:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(a.II,{solid:!0,className:"w-400px"})}),(0,e.jsx)(a.l0.Item,{className:"my-5",name:"poster",label:"\u6D77\u62A5",children:(0,e.jsx)(a.ub,{solid:!0,className:"w-400px",options:J})}),(0,e.jsx)(a.l0.Item,{className:"my-5",name:"stores",label:(0,e.jsxs)(e.Fragment,{children:["\u53C2\u52A0\u6D3B\u52A8\u7684\u95E8\u5E97",(0,e.jsx)("a",{onClick:Y,className:"ps-2 cursor-pointer",children:"\u6DFB\u52A0\u5168\u90E8\u95E8\u5E97"})]}),children:(0,e.jsx)(a.ub,{solid:!0,multiple:!0,className:"w-400px",options:A})}),(0,e.jsx)(a.l0.Item,{className:"my-5",name:"start",label:"\u5F00\u59CB\u65F6\u95F4",children:(0,e.jsx)(a.Mt,{solid:!0,className:"w-400px"})}),(0,e.jsx)(a.l0.Item,{dependencies:["start"],noStyle:!0,children:function(){return(0,e.jsx)(a.l0.Item,{className:"my-5",name:"end",label:"\u622A\u6B62\u65F6\u95F4",children:(0,e.jsx)(a.Mt,{solid:!0,minDate:_.getFieldValue("start"),className:"w-400px"})})}}),(0,e.jsx)(a.l0.Item,{className:"my-5",name:"description",label:"\u63CF\u8FF0",help:"\u8BF7\u7528\u5C11\u4E8E250\u5B57\u7B26\u63CF\u8FF0",children:(0,e.jsx)(a.II.TextArea,{solid:!0,autoSize:{minRows:4,maxRows:8},showCount:!0,maxLength:250,className:"w-400px"})})]}),(0,e.jsx)("div",{className:"col-12 col-md-4",children:(0,e.jsx)(a.AS.iPhoneX,{children:(0,e.jsx)(a.l0.Item,{dependencies:["poster","stores"],noStyle:!0,children:function(t){var y=t.getFieldValue("poster"),r=t.getFieldValue("stores");return(0,e.jsx)("iframe",{src:"//47.103.119.188:8002"+"/lps/0?&poster=".concat(y,"&stores=").concat(r==null?void 0:r.join(",")),style:{width:"100%",height:"100%"}})}})})})]}),(0,e.jsxs)("div",{className:"row",children:[(0,e.jsx)("h4",{className:"mt-10",children:"HTML \u9875\u9762\u5143\u6570\u636E"}),(0,e.jsx)(a.Z0,{className:"mt-4 mb-8"}),(0,e.jsxs)("div",{className:"mw-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row",children:[(0,e.jsxs)("div",{className:"col-12 col-md-8",children:[(0,e.jsx)(a.l0.Item,{className:"my-5 w-400px",name:["metadata","title"],label:"\u6807\u9898",help:"\u53EF\u4F5C\u4E3A\u5FAE\u4FE1\u5206\u4EAB\u65F6,\u7684\u6807\u9898",children:(0,e.jsx)(a.II,{solid:!0,className:""})}),(0,e.jsx)(a.l0.Item,{className:"my-5 w-400px",name:["metadata","description"],label:"\u63CF\u8FF0",help:"\u8BF7\u7528\u5C11\u4E8E250\u5B57\u7B26\u63CF\u8FF0,\u53EF\u4F5C\u4E3A\u5FAE\u4FE1\u5206\u4EAB\u65F6\u7684\u526F\u6807\u9898",children:(0,e.jsx)(a.II.TextArea,{solid:!0,autoSize:{minRows:4,maxRows:8},showCount:!0,maxLength:250})})]}),(0,e.jsx)("div",{className:"col-12 col-md-4",children:(0,e.jsx)(a.l0.Item,{className:"mb-5",name:["metadata","thumb"],label:"\u7F29\u7565\u56FE",help:"\u53EF\u4F5C\u4E3A\u5FAE\u4FE1\u5206\u4EAB\u65F6\u7684\u56FE\u7247",children:(0,e.jsx)(a.gq.Image,{width:250,height:250,space:"orX8kLOV",crop:{height:300,zoomable:!1,aspectRatio:1}})})})]})]})]})}),(0,e.jsx)(a.zx,{loading:T||V||X,onClick:G,children:h?(0,e.jsx)(e.Fragment,{children:"\u6DFB\u52A0\u6D3B\u52A8"}):(0,e.jsx)(e.Fragment,{children:"\u4FEE\u6539\u6D3B\u52A8"})})]})]})})}D.default=F}}]);
