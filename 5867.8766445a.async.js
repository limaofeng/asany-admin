(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[5867],{89887:function(Q,I,n){"use strict";var l=n(64219),t=n(16477),e=n(39428),f=n(3182),_=n(2824),o=n(67294),C=n(28865),g=n(94184),P=n.n(g),j=n(30381),D=n.n(j),B=n(7020),N=n(8845),c=n(33442),M=n(23183),d=n(17818),a=n(85893);function O(s){var u=s.article,y=s.categoryTreeData,E=s.onChangeCategory,h=s.baseUrl,T=(0,o.useState)(),S=(0,_.Z)(T,2),p=S[0],F=S[1],L=(0,o.useCallback)(function(x){F(x)},[]),U=(0,o.useCallback)(function(x){return x.isAfter(D()())},[]),H=(0,o.useCallback)(function(x){return{disabledHours:function(){if(!(p||x).isSame(D()(),"days"))return[];for(var v=[],w=D()().hours()+1;w<24;w++)v.push(w);return v},disabledMinutes:function(v){if(!(p||x).isSame(D()(),"days"))return[];if(!x.set("hours",v).isSame(D()(),"hours"))return[];for(var w=[],z=D()().minutes()+1;z<60;z++)w.push(z);return w}}},[p]),A=(0,N.eU)(),R=(0,_.Z)(A,1),b=R[0],$=(0,c.Z)({title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u7BC7\u6587\u7AE0\u5417\uFF1F",content:(0,a.jsxs)(a.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,a.jsx)("strong",{children:u==null?void 0:u.title}),"\u201D\u3002\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u9006\u8F6C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u60A8\u786E\u5B9A\u5220\u9664\u5417\uFF1F"]})},(0,f.Z)((0,e.Z)().mark(function x(){return(0,e.Z)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,b({variables:{id:u.id}});case 2:case"end":return v.stop()}},x)}))),W=(0,_.Z)($,1),Z=W[0],K=(0,o.useCallback)((0,f.Z)((0,e.Z)().mark(function x(){return(0,e.Z)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,Z();case 2:if(!v.sent){v.next=4;break}B.m8.replace("".concat(h,"/cms/categories/").concat(u.category.id,"/articles"));case 4:case"end":return v.stop()}},x)})),[Z,h,u]);return(0,a.jsxs)("div",{className:"d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7",children:[(0,a.jsxs)(d.Zb,{flush:!0,children:[(0,a.jsxs)(d.Zb.Header,{className:"ribbon ribbon-top ribbon-vertical",children:[!!(u!=null&&u.status)&&(u==null?void 0:u.status)!=="DRAFT"&&(0,a.jsx)("div",{className:P()("ribbon-label",{"bg-primary":(u==null?void 0:u.status)=="PUBLISHED","bg-success":(u==null?void 0:u.status)=="SCHEDULED","bg-danger":(u==null?void 0:u.status)=="INACTIVE"}),children:m(u.status)}),(0,a.jsx)(d.Zb.Title,{children:"\u6587\u7AE0\u8BBE\u7F6E"})]}),(0,a.jsxs)(d.Zb.Body,{className:" pt-0",children:[(0,a.jsx)(d.l0.Item,{name:"image",className:"text-center",children:(0,a.jsx)(d.gq.Image,{width:240,height:150,className:"mb-3",space:"Ohc2OaZ4",accept:".png, .jpg, .jpeg",background:"/assets/media/svg/files/blank-image.svg"})}),(0,a.jsx)("div",{className:"text-muted fs-7 mb-6",children:"\u8BBE\u7F6E\u6587\u7AE0\u5C01\u9762\u56FE\u3002\u4EC5\u63A5\u53D7 *.png\u3001*.jpg \u548C *.jpeg \u683C\u5F0F\u7684\u56FE\u7247"}),(0,a.jsx)(d.l0.Item,{className:"mb-3",label:"\u6240\u5C5E\u680F\u76EE",name:["category","id"],rules:[{required:!0,message:"\u6240\u5C5E\u680F\u76EE\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,a.jsx)(t.Z,{onChange:E,style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:y,placeholder:"\u9009\u62E9\u680F\u76EE",treeDefaultExpandAll:!0,transitionName:""})}),(0,a.jsx)("div",{className:"text-muted fs-7 mb-6",children:"\u60A8\u7684\u6587\u7AE0\u5FC5\u987B\u53D1\u5E03\u5728\u4E00\u4E2A\u680F\u76EE\u4E2D"}),(0,a.jsx)(d.l0.Item,{name:"publishedAt",label:"\u53D1\u5E03\u65F6\u95F4",className:"mb-6",children:(0,a.jsx)(M.Z,{onChange:L,disabled:(u==null?void 0:u.status)=="SCHEDULED",disabledDate:U,disabledTime:H})}),(0,a.jsx)(d.l0.Item,{name:"summary",label:"\u6458\u8981",className:"mb-6",children:(0,a.jsx)(d.II.TextArea,{autoSize:{minRows:6}})}),(0,a.jsx)(d.l0.Item,{name:"authors",label:"\u4F5C\u8005",children:(0,a.jsx)(d.II,{})})]})]}),u&&(0,a.jsx)(d.Zb,{flush:!0,className:"py-4",children:(0,a.jsxs)(d.Zb.Body,{children:[(0,a.jsx)(d.zx,{onClick:K,className:"mb-3",variant:"light-danger",icon:(0,a.jsx)(C.JO,{className:"svg-icon-2",name:"Bootstrap/trash"}),children:"\u5220\u9664"}),(0,a.jsx)("div",{className:"text-muted fs-7 mb-6",children:"\u6587\u7AE0\u5220\u9664\u540E\uFF0C\u4E0D\u53EF\u6062\u590D"})]})})]})}function m(s){return s=="PUBLISHED"?"\u5DF2\u53D1\u5E03":s=="SCHEDULED"?"\u8BA1\u5212\u4E2D":"\u5DF2\u5931\u6548"}I.Z=O},23183:function(Q,I,n){"use strict";var l=n(39002),t=n(68351),e=n(53400),f=n(41505),_=n(85893);function o(C){var g=C.value,P=C.onChange,j=C.disabled,D=C.disabledDate,B=C.disabledTime;return(0,_.jsxs)("div",{children:[(0,_.jsx)(f.Z,{getPopupContainer:function(c){return c.parentNode},transitionName:"",allowClear:!1,dropdownClassName:"article-publish-dropdown-published-at",placement:"topLeft",value:g,disabled:j,onChange:P,disabledDate:D,style:{width:136}}),(0,_.jsx)(t.Z,{className:"ms-3",style:{width:88},allowClear:!1,getPopupContainer:function(c){return c.parentNode},transitionName:"",placeholder:"",value:g,disabled:j,onChange:P,disabledTime:B,format:"HH:mm",placement:"topLeft"})]})}I.Z=o},33043:function(Q,I,n){"use strict";n.d(I,{aE:function(){return _},LQ:function(){return P},SF:function(){return D},H5:function(){return O}});var l=n(5618),t=n(17818),e=n(85893);function f(){return(0,e.jsxs)("div",{className:"d-flex flex-column gap-7 gap-lg-10",children:[(0,e.jsxs)(t.Zb,{flush:!0,className:"py-4",children:[(0,e.jsx)(t.l0.Item,{name:"subtitle",className:"mb-8 mw-400px",label:"\u526F\u6807\u9898",children:(0,e.jsx)(t.II,{})}),(0,e.jsx)(t.l0.Item,{className:"mb-3",label:"\u6807\u7B7E",name:"tags",children:(0,e.jsx)(l.ZP,{})}),(0,e.jsx)(t.l0.Item,{name:"source",className:"mb-8 mw-400px",label:"\u6765\u6E90",children:(0,e.jsx)(t.II,{})})]}),(0,e.jsxs)(t.Zb,{flush:!0,className:"py-4",title:"\u66F4\u591A\u529F\u80FD",bodyClassName:"pt-0",children:[(0,e.jsx)(t.l0.Item,{className:"mb-8",name:"xx",children:(0,e.jsx)(t.XZ,{value:"1",solid:!0,label:"\u542F\u7528\u8BC4\u8BBA"})}),(0,e.jsx)(t.l0.Item,{className:"mb-8",name:"x2",children:(0,e.jsx)(t.XZ,{value:"1",solid:!0,label:"\u5141\u8BB8\u6536\u85CF"})})]}),(0,e.jsx)(t.Zb,{flush:!0,className:"py-4",title:"\u5143\u6570\u636E",bodyClassName:"pt-0",children:"123145"})]})}var _=f,o=n(67294),C=n(28865);function g(m){var s=m.queueUpload,u=(0,o.useCallback)(function(y){var E;(E=s.current)===null||E===void 0||E.browse(y)},[s]);return(0,e.jsxs)("div",{className:"d-flex flex-column gap-7 gap-lg-10",children:[(0,e.jsxs)(t.Zb,{flush:!0,className:"py-4",children:[(0,e.jsx)(t.l0.Item,{className:"mb-8",name:"title",label:"\u6807\u9898",required:!0,help:"\u6807\u9898\u662F\u5FC5\u9700\u7684",rules:[{required:!0,message:"\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(t.II,{placeholder:"\u6587\u7AE0\u6807\u9898",className:"mw-400px"})}),(0,e.jsx)(t.l0.Item,{name:["body","text"],label:"\u6B63\u6587",help:"\u60A8\u53EF\u4EE5\u9009\u62E9\u9002\u5408\u81EA\u5DF1\u7684\uFF0C\u7F16\u8F91\u65B9\u5F0F",children:(0,e.jsx)(t.Bn,{className:"h-300px"})})]}),(0,e.jsxs)(t.Zb,{flush:!0,className:"py-4",title:"\u9644\u4EF6",bodyClassName:"pt-0",children:[(0,e.jsx)(t.l0.Item,{name:"attachments",noStyle:!0,children:(0,e.jsx)(t.gq.Queue,{ref:s,namespace:"email"})}),(0,e.jsx)(t.zx,{variant:"light-primary",className:"me-3 mt-4",onClick:u,icon:(0,e.jsx)(C.JO,{className:"svg-icon-2",name:"Duotune/com008"}),children:"\u6DFB\u52A0\u9644\u4EF6"})]})]})}var P=g;function j(){return(0,e.jsx)("div",{className:"d-flex flex-column gap-7 gap-lg-10",children:(0,e.jsxs)(t.Zb,{flush:!0,className:"py-4",title:"SEO",bodyClassName:"pt-0",children:[(0,e.jsx)(t.l0.Item,{name:["meta","seo","title"],className:"mb-8",label:"\u6807\u9898",help:"\u8BBE\u7F6E\u5143\u6570\u636E\u6807\u9898, \u5EFA\u8BAE\u5173\u952E\u8BCD\u8981\u7B80\u5355, \u51C6\u786E",children:(0,e.jsx)(t.II,{className:"mw-400px"})}),(0,e.jsx)(t.l0.Item,{name:["meta","seo","description"],className:"mb-8",label:"\u63CF\u8FF0",help:"\u8BBE\u7F6E\u5143\u6570\u636E\u63CF\u8FF0, \u4EE5\u63D0\u9AD8\u6392\u540D",children:(0,e.jsx)(t.Bn,{className:"h-300px"})}),(0,e.jsx)(t.l0.Item,{name:["meta","seo","keywords"],label:"\u5173\u952E\u5B57",help:(0,e.jsxs)(e.Fragment,{children:["\u8BBE\u7F6E\u680F\u76EE\u76F8\u5173\u7684\u5173\u952E\u5B57\u5217\u8868\u3002\u901A\u8FC7\u5728\u6BCF\u4E2A\u5173\u952E\u5B57\u4E4B\u95F4\u6DFB\u52A0",(0,e.jsx)("code",{children:","}),"\u6765\u5206\u9694\u5173\u952E\u5B57"]}),children:(0,e.jsx)(l.ZP,{className:"form-control"})})]})})}var D=j,B=n(2824),N=n(30381),c=n.n(N),M=n(23183);function d(m){var s=m.status,u=m.submitting,y=m.onPublish,E=m.publishedAt,h=m.setPublishedAt,T=(0,o.useState)("publish"),S=(0,B.Z)(T,2),p=S[0],F=S[1],L=(0,o.useCallback)(function(b){F(function($){return $==b.target.value?$:(["schedule","reschedule"].includes(b.target.value)&&E.isBefore(c()())&&h(c()()),b.target.value)})},[E,h]),U=(0,o.useCallback)(function(b){h(b)},[h]),H=(0,o.useCallback)(function(){y(p)},[y,p]);(0,o.useEffect)(function(){s=="DRAFT"?F("publish"):s=="PUBLISHED"?F("update"):s=="SCHEDULED"&&F("reschedule")},[s]);var A=(0,o.useCallback)(function(b){return b.isBefore(c()())&&!b.isSame(c()(),"days")},[]),R=(0,o.useCallback)(function(b){return{disabledHours:function(){if(!E.isSame(c()(),"days"))return[];for(var W=[],Z=0;Z<c()().hours();Z++)W.push(Z);return W},disabledMinutes:function(W){if(!E.isSame(c()(),"days"))return[];if(!b.set("hours",W).isSame(c()(),"hours"))return[];for(var Z=[],K=0;K<c()().minutes();K++)Z.push(K);return Z}}},[E]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"publish-popover-content",children:(0,e.jsxs)(t.Y8.Group,{value:p,onChange:L,children:[s=="PUBLISHED"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(t.Y8,{className:"align-items-start",solid:!0,inputClassName:"me-3",value:"unpublish",children:[(0,e.jsx)("div",{className:"fw-bolder text-gray-800",children:"\u53D6\u6D88\u53D1\u5E03"}),(0,e.jsx)("div",{className:"form-item-help",children:"\u5C06\u6587\u7AE0\u8BBE\u7F6E\u4E3A\u8349\u7A3F\u72B6\u6001"})]}),(0,e.jsx)("div",{className:"my-4"}),(0,e.jsxs)(t.Y8,{className:"align-items-start",solid:!0,inputClassName:"me-3",value:"update",children:[(0,e.jsx)("div",{className:"fw-bolder text-gray-800",children:"\u5DF2\u53D1\u5E03"}),(0,e.jsx)("div",{className:"form-item-help",children:"\u516C\u5F00\u663E\u793A\u8FD9\u7BC7\u6587\u7AE0"})]})]}),s=="SCHEDULED"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(t.Y8,{className:"align-items-start",solid:!0,inputClassName:"me-3",value:"revert_to_draft",children:[(0,e.jsx)("div",{className:"fw-bolder text-gray-800",children:"\u6062\u590D\u4E3A\u8349\u7A3F"}),(0,e.jsx)("div",{className:"form-item-help",children:"\u4E0D\u518D\u53D1\u5E03"})]}),(0,e.jsx)("div",{className:"my-4"}),(0,e.jsxs)(t.Y8,{solid:!0,className:"align-items-start",inputClassName:"me-3",value:"reschedule",children:[(0,e.jsx)("div",{className:"fw-bolder text-gray-800",children:"\u5B9A\u65F6\u53D1\u5E03"}),(0,e.jsx)("div",{className:"my-2",children:(0,e.jsx)(M.Z,{disabledDate:A,disabledTime:R,value:E,onChange:U})}),(0,e.jsx)("div",{className:"form-item-help",children:"\u8BBE\u7F6E\u4E00\u4E2A\u65F6\u95F4, \u5C06\u5728\u672A\u6765\u81EA\u52A8\u53D1\u5E03\u3002"})]})]}),s=="DRAFT"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(t.Y8,{className:"align-items-start",solid:!0,inputClassName:"me-3",value:"publish",children:[(0,e.jsx)("div",{className:"fw-bolder text-gray-800",children:"\u7ACB\u5373\u53D1\u5E03"}),(0,e.jsx)("div",{className:"form-item-help",children:"\u7ACB\u5373\u53D1\u5E03\u6B64\u6587\u7AE0"})]}),(0,e.jsx)("div",{className:"my-4"}),(0,e.jsxs)(t.Y8,{solid:!0,className:"align-items-start",inputClassName:"me-3",value:"schedule",children:[(0,e.jsx)("div",{className:"fw-bolder text-gray-800",children:"\u5B9A\u65F6\u53D1\u5E03"}),(0,e.jsx)("div",{className:"my-2",children:(0,e.jsx)(M.Z,{disabledDate:A,disabledTime:R,value:E,onChange:U})}),(0,e.jsx)("div",{className:"form-item-help",children:"\u8BBE\u7F6E\u4E00\u4E2A\u65F6\u95F4, \u5C06\u5728\u672A\u6765\u81EA\u52A8\u53D1\u5E03\u3002"})]})]})]})}),(0,e.jsx)(t.Z0,{style:"solid"}),(0,e.jsxs)("div",{className:"publish-popover-footer d-flex justify-content-end",children:[(0,e.jsx)(t.zx,{onClick:m.onClose,disabled:u,className:"me-2",variant:"light",children:"\u53D6\u6D88"}),(0,e.jsxs)(t.zx,{loading:u,onClick:H,children:[p=="publish"&&(u?"\u53D1\u5E03\u4E2D...":"\u53D1\u5E03"),p=="schedule"&&(u?"\u5B9A\u65F6\u53D1\u5E03\u4E2D...":"\u5B9A\u65F6\u53D1\u5E03"),p=="update"&&(u?"\u66F4\u65B0\u4E2D...":"\u66F4\u65B0"),p=="unpublish"&&(u?"\u53D6\u6D88\u53D1\u5E03\u4E2D...":"\u53D6\u6D88\u53D1\u5E03"),p=="reschedule"&&(u?"\u66F4\u65B0\u4E2D...":"\u91CD\u8BBE\u53D1\u5E03\u65F6\u95F4"),p=="revert_to_draft"&&(u?"\u53D6\u6D88\u4E2D...":"\u53D6\u6D88\u81EA\u52A8\u53D1\u5E03")]})]})]})}function a(m){var s=m.article,u=m.submitting,y=m.onPublish,E=m.publishedAt,h=m.setPublishedAt,T=m.onCancel,S=(0,o.useState)(!1),p=(0,B.Z)(S,2),F=p[0],L=p[1],U=(0,o.useCallback)(function(){L(!1)},[L]),H=(0,o.useCallback)(function(b){u||L(b)},[u]),A=(s==null?void 0:s.status)||"DRAFT",R=(0,o.useMemo)(function(){return A==="DRAFT"?"\u53D1\u5E03\u8FD9\u7BC7\u6587\u7AE0\u5417\uFF1F":A==="PUBLISHED"?"\u66F4\u65B0\u6587\u7AE0\u72B6\u6001":A==="SCHEDULED"?"\u9884\u8BA1\u5C06\u5728"+c()(s==null?void 0:s.publishedAt).fromNow()+"\u53D1\u5E03":"\u91CD\u65B0\u53D1\u5E03"},[s==null?void 0:s.publishedAt,A]);return(0,o.useEffect)(function(){!F&&T()},[T,F]),(0,e.jsx)(t.J2,{stopPropagation:!0,visible:F,overlayClassName:"overlay-no-arrow article-publish-dropdown-content",title:R,content:(0,e.jsx)(d,{status:A,submitting:u,onClose:U,onPublish:y,publishedAt:E,setPublishedAt:h}),placement:"top-end",onVisibleChange:H,children:(0,e.jsxs)(t.zx,{className:"pe-2",children:[A==="DRAFT"&&"\u53D1\u5E03",A==="PUBLISHED"&&"\u66F4\u65B0",A==="SCHEDULED"&&"\u66F4\u65B0",(0,e.jsx)(C.JO,{name:"Bootstrap/chevron-down",className:"ms-2 svg-icon-6"})]})})}var O=a},8845:function(Q,I,n){"use strict";n.d(I,{Se:function(){return T},WP:function(){return F},V7:function(){return x},St:function(){return m},gk:function(){return y},e7:function(){return w},uw:function(){return H},eU:function(){return $},nT:function(){return Z},Qu:function(){return Y},Mq:function(){return R}});var l=n(11849),t=n(20310),e=n(49704),f=n(64718),_=n(21919),o,C,g,P,j,D,B,N,c,M,d,a={},O=(0,e.Ps)(o||(o=(0,t.Z)([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function m(r){var i=(0,l.Z)((0,l.Z)({},a),r);return f.a(O,i)}function s(r){var i=_objectSpread(_objectSpread({},a),r);return Apollo.useLazyQuery(O,i)}var u=(0,e.Ps)(C||(C=(0,t.Z)([`
    query articles($filter: ArticleFilter, $page: Int, $pageSize: Int) {
  articles(filter: $filter, page: $page, pageSize: $pageSize) {
    total: totalCount
    current: currentPage
    totalPage
    pageSize
    edges {
      node {
        id
        title
        image
        summary
        authors {
          id
          name
        }
        categories {
          id
          name
        }
        createdBy
        createdAt
        publishedAt
        status
      }
    }
  }
}
    `])));function y(r){var i=(0,l.Z)((0,l.Z)({},a),r);return f.a(u,i)}function E(r){var i=_objectSpread(_objectSpread({},a),r);return Apollo.useLazyQuery(u,i)}var h=(0,e.Ps)(g||(g=(0,t.Z)([`
    query articleCategories($id: ID!) {
  categories: articleCategories(filter: {parent: {id: $id, subColumns: true}}) {
    id
    icon
    name
    fullName
    path
    index
    level
    image
    parent {
      id
    }
  }
}
    `])));function T(r){var i=(0,l.Z)((0,l.Z)({},a),r);return f.a(h,i)}function S(r){var i=_objectSpread(_objectSpread({},a),r);return Apollo.useLazyQuery(h,i)}var p=(0,e.Ps)(P||(P=(0,t.Z)([`
    query articleCategory($id: ID!) {
  category: articleCategory(id: $id) {
    id
    icon
    name
    description
    image
    path
    index
    level
    parent {
      id
    }
    storeTemplate {
      id
    }
    page {
      enabled
      route {
        path
      }
      component {
        id
        template
      }
    }
  }
}
    `])));function F(r){var i=(0,l.Z)((0,l.Z)({},a),r);return f.a(p,i)}function L(r){var i=_objectSpread(_objectSpread({},a),r);return Apollo.useLazyQuery(p,i)}var U=(0,e.Ps)(j||(j=(0,t.Z)([`
    mutation createArticle($input: ArticleCreateInput!) {
  article: createArticle(input: $input) {
    id
    title
    status
    category {
      id
      name
      __typename
    }
    categories {
      id
      name
    }
    body {
      id
      __typename
      ... on ArticleContent {
        text
      }
    }
  }
}
    `])));function H(r){var i=(0,l.Z)((0,l.Z)({},a),r);return _.D(U,i)}var A=(0,e.Ps)(D||(D=(0,t.Z)([`
    mutation updateArticle($id: ID!, $input: ArticleUpdateInput!) {
  article: updateArticle(id: $id, input: $input) {
    id
    title
    status
    image
    summary
    publishedAt
    category {
      id
      name
      __typename
    }
    categories {
      id
      name
    }
    body {
      id
      __typename
      ... on ArticleContent {
        type
        text
      }
    }
  }
}
    `])));function R(r){var i=(0,l.Z)((0,l.Z)({},a),r);return _.D(A,i)}var b=(0,e.Ps)(B||(B=(0,t.Z)([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function $(r){var i=(0,l.Z)((0,l.Z)({},a),r);return _.D(b,i)}var W=(0,e.Ps)(N||(N=(0,t.Z)([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function Z(r){var i=(0,l.Z)((0,l.Z)({},a),r);return _.D(W,i)}var K=(0,e.Ps)(c||(c=(0,t.Z)([`
    query article($id: ID!) {
  article(id: $id) {
    id
    title
    status
    image
    summary
    publishedAt
    category {
      id
      name
    }
    categories {
      id
      name
    }
    metafields {
      id
      key
      namespace
      value
    }
    body {
      id
      __typename
      ... on ArticleContent {
        type
        text
      }
    }
  }
}
    `])));function x(r){var i=(0,l.Z)((0,l.Z)({},a),r);return f.a(K,i)}function k(r){var i=_objectSpread(_objectSpread({},a),r);return Apollo.useLazyQuery(K,i)}var v=(0,e.Ps)(M||(M=(0,t.Z)([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function w(r){var i=(0,l.Z)((0,l.Z)({},a),r);return _.D(v,i)}var z=(0,e.Ps)(d||(d=(0,t.Z)([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function Y(r){var i=(0,l.Z)((0,l.Z)({},a),r);return _.D(z,i)}},33442:function(Q,I,n){"use strict";var l=n(39428),t=n(11849),e=n(3182),f=n(67294),_=n(17818),o=n(25496);function C(g,P){var j=(0,f.useRef)(!1),D=(0,f.useCallback)((0,e.Z)((0,l.Z)().mark(function B(){var N,c;return(0,l.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return N=g.width,d.next=3,_.u_.confirm((0,t.Z)((0,t.Z)({},g),{},{width:N,okText:"\u5220 \u9664",okClassName:"btn-danger",allowOutsideClick:function(){return!j.current},preConfirm:function(){var a=(0,e.Z)((0,l.Z)().mark(function m(){var s,u,y;return(0,l.Z)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return j.current=!0,h.prev=1,s=document.querySelector(".swal2-confirm"),s.textContent="\u5220\u9664\u4E2D...",u=document.createElement("span"),u.classList.add("spinner-border-sm","ms-2","spinner-border","align-middle"),s.appendChild(u),h.next=9,(0,o.gw)(P(),350);case 9:y=h.sent,console.log(y);case 11:return h.prev=11,j.current=!1,h.finish(11);case 14:case"end":return h.stop()}},m,null,[[1,,11,14]])}));function O(){return a.apply(this,arguments)}return O}()}));case 3:if(c=d.sent,c.isConfirmed){d.next=6;break}return d.abrupt("return",!1);case 6:return _.FN.success("\u5220\u9664\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),d.abrupt("return",!0);case 8:case"end":return d.stop()}},B)})),[P,g]);return[D]}I.Z=C}}]);
