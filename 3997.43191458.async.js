(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[3997],{8845:function(S,g,u){"use strict";u.d(g,{Se:function(){return P},WP:function(){return o},V7:function(){return R},St:function(){return m},gk:function(){return N},e7:function(){return w},uw:function(){return O},eU:function(){return z},nT:function(){return Q},Qu:function(){return G},Mq:function(){return $}});var l=u(11849),s=u(20310),i=u(49704),d=u(64718),c=u(21919),E,A,v,j,f,C,y,D,t,b,e,r={},_=(0,i.Ps)(E||(E=(0,s.Z)([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function m(n){var a=(0,l.Z)((0,l.Z)({},r),n);return d.a(_,a)}function Z(n){var a=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(_,a)}var p=(0,i.Ps)(A||(A=(0,s.Z)([`
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
    `])));function N(n){var a=(0,l.Z)((0,l.Z)({},r),n);return d.a(p,a)}function M(n){var a=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(p,a)}var F=(0,i.Ps)(v||(v=(0,s.Z)([`
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
    `])));function P(n){var a=(0,l.Z)((0,l.Z)({},r),n);return d.a(F,a)}function I(n){var a=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(F,a)}var B=(0,i.Ps)(j||(j=(0,s.Z)([`
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
    `])));function o(n){var a=(0,l.Z)((0,l.Z)({},r),n);return d.a(B,a)}function x(n){var a=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(B,a)}var h=(0,i.Ps)(f||(f=(0,s.Z)([`
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
    `])));function O(n){var a=(0,l.Z)((0,l.Z)({},r),n);return c.D(h,a)}var L=(0,i.Ps)(C||(C=(0,s.Z)([`
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
    `])));function $(n){var a=(0,l.Z)((0,l.Z)({},r),n);return c.D(L,a)}var U=(0,i.Ps)(y||(y=(0,s.Z)([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function z(n){var a=(0,l.Z)((0,l.Z)({},r),n);return c.D(U,a)}var K=(0,i.Ps)(D||(D=(0,s.Z)([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function Q(n){var a=(0,l.Z)((0,l.Z)({},r),n);return c.D(K,a)}var T=(0,i.Ps)(t||(t=(0,s.Z)([`
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
    `])));function R(n){var a=(0,l.Z)((0,l.Z)({},r),n);return d.a(T,a)}function V(n){var a=_objectSpread(_objectSpread({},r),n);return Apollo.useLazyQuery(T,a)}var W=(0,i.Ps)(b||(b=(0,s.Z)([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function w(n){var a=(0,l.Z)((0,l.Z)({},r),n);return c.D(W,a)}var Y=(0,i.Ps)(e||(e=(0,s.Z)([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function G(n){var a=(0,l.Z)((0,l.Z)({},r),n);return c.D(Y,a)}},53997:function(S,g,u){"use strict";u.r(g);var l=u(3515),s=u(86288),i=u(64219),d=u(16477),c=u(2824),E=u(11849),A=u(67294),v=u(28865),j=u(5618),f=u(94184),C=u.n(f),y=u(8845),D=u(18071),t=u(17818),b=u(25496),e=u(85893);function r(_){var m=_.location.state.categories,Z=(0,y.St)(),p=Z.data,N=(p==null?void 0:p.articleStoreTemplates)||[],M=(0,A.useMemo)(function(){return!m||!m.length?[]:(0,b.G_)(m.map(function(o){return(0,E.Z)((0,E.Z)({},o),{},{value:o.id,title:o.name})}),{idKey:"id",childrenKey:"children",pidKey:"parent.id",sort:function(x,h){return x.index-h.index}})},[m]),F=(0,y.e7)(),P=(0,c.Z)(F,1),I=P[0],B=(0,A.useCallback)(function(o){console.log("finish",o,I)},[I]);return console.log("ArticleChannelNew -> ",m),(0,e.jsx)(D.vs,{header:{title:"\u65B0\u589E\u680F\u76EE"},children:(0,e.jsxs)(t.l0,{onFinish:B,initialValues:{storeTemplate:"1",parent:_.location.query.parent_category_id},className:"form d-flex flex-column flex-lg-row",children:[(0,e.jsxs)("div",{className:"d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10",children:[(0,e.jsxs)(t.Zb,{flush:!0,className:"py-4",title:"\u7F29\u7565\u56FE",bodyClassName:"text-center pt-0",children:[(0,e.jsx)(t.l0.Item,{name:"cover",children:(0,e.jsx)(t.gq.Image,{width:150,height:150,className:"mb-3",space:"orX8kLOV",accept:".png, .jpg, .jpeg",crop:{height:300,zoomable:!1,aspectRatio:1},background:"/assets/media/svg/files/blank-image.svg"})}),(0,e.jsx)("div",{className:"text-muted fs-7",children:"\u8BBE\u7F6E\u680F\u76EE\u7F29\u7565\u56FE\u3002\u4EC5\u63A5\u53D7 *.png\u3001*.jpg \u548C *.jpeg \u683C\u5F0F\u7684\u56FE\u7247"})]}),(0,e.jsx)(t.Zb,{flush:!0,className:"py-4",title:"\u4E0A\u7EA7\u680F\u76EE",children:(0,e.jsxs)(t.Zb.Body,{className:"pt-0",children:[(0,e.jsx)(t.l0.Item,{className:"mb-3",name:"parent",children:(0,e.jsx)(d.Z,{style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:M,placeholder:"\u9009\u62E9\u4E0A\u7EA7\u680F\u76EE",treeDefaultExpandAll:!0,allowClear:!0,transitionName:""})}),(0,e.jsx)("div",{className:"text-muted fs-7",children:"\u9009\u62E9\u4E0A\u7EA7\u680F\u76EE,\u672A\u9009\u62E9\u5C06\u6DFB\u52A0\u5230\u6839\u76EE\u5F55"})]})}),(0,e.jsxs)(t.Zb,{flush:!0,className:"py-4",title:"\u5B58\u50A8\u6A21\u677F",bodyClassName:"pt-0",children:[(0,e.jsx)(t.l0.Item,{className:"mb-3",name:"storeTemplate",label:"\u9009\u62E9\u5B58\u50A8\u6A21\u677F",children:(0,e.jsx)(t.ub,{options:N.map(function(o){return{value:o.id,label:o.name}})})}),(0,e.jsx)("div",{className:"text-muted fs-7",children:"\u4ECE\u60A8\u5F53\u524D\u7684\u4E3B\u9898\u4E2D\u5206\u914D\u4E00\u4E2A\u6A21\u677F\u6765\u5B9A\u4E49\u680F\u76EE\u6587\u7AE0\u7684\u663E\u793A\u65B9\u5F0F"})]})]}),(0,e.jsxs)("div",{className:"d-flex flex-column flex-row-fluid gap-7 gap-lg-10",children:[(0,e.jsxs)(t.mQ,{defaultActiveKey:"general",renderContainer:!1,className:"border-0 fs-4 fw-bold mb-n2 nav-line-tabs-2x",children:[(0,e.jsx)(t.mQ.TabPane,{tab:"\u57FA\u672C\u4FE1\u606F",forceRender:!0,children:(0,e.jsxs)("div",{className:"d-flex flex-column gap-7 gap-lg-10",children:[(0,e.jsxs)(t.Zb,{flush:!0,className:"py-4",title:"\u901A\u7528",bodyClassName:"pt-0",children:[(0,e.jsx)(t.l0.Item,{className:"mb-8",name:"name",label:"\u540D\u79F0",required:!0,help:"\u540D\u79F0\u662F\u5FC5\u9700\u7684\uFF0C\u5EFA\u8BAE\u662F\u552F\u4E00\u7684",rules:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(t.II,{placeholder:"\u680F\u76EE\u540D\u79F0",className:"mw-400px"})}),(0,e.jsx)(t.l0.Item,{name:"description",label:"\u63CF\u8FF0",help:"\u4E3A\u680F\u76EE\u8BBE\u7F6E\u63CF\u8FF0\u4EE5\u83B7\u5F97\u66F4\u597D\u7684\u53EF\u89C1\u6027\u3002",children:(0,e.jsx)(t.Bn,{className:"h-300px"})})]}),(0,e.jsxs)(t.Zb,{flush:!0,className:"py-4",title:"\u81EA\u52A8\u5316",bodyClassName:"pt-0",children:[(0,e.jsx)(t.l0.Item,{name:"assignmentMethod",labelClassName:"mb-5",label:"\u6587\u7AE0\u5206\u914D\u65B9\u6CD5",children:(0,e.jsxs)(t.Y8.Group,{children:[(0,e.jsxs)(t.Y8,{solid:!0,inputClassName:"me-3",value:"manual",children:[(0,e.jsx)("div",{className:"fw-bolder text-gray-800",children:"\u624B\u52A8\u63A7\u5236"}),(0,e.jsx)("div",{className:"form-item-help",children:"\u5728\u6587\u7AE0\u521B\u5EFA\u6216\u66F4\u65B0\u671F\u95F4\u624B\u52A8\u9009\u62E9\u6B64\u680F\u76EE\uFF0C\u5C06\u6587\u7AE0\u9010\u4E2A\u6DFB\u52A0\u5230\u6B64\u680F\u76EE\u3002"})]}),(0,e.jsx)(t.Z0,{style:"dashed",className:"my-4"}),(0,e.jsxs)(t.Y8,{solid:!0,inputClassName:"me-3",value:"manual",children:[(0,e.jsx)("div",{className:"fw-bolder text-gray-800",children:"\u81EA\u52A8"}),(0,e.jsx)("div",{className:"form-item-help",children:"\u7B26\u5408\u4EE5\u4E0B\u6761\u4EF6\u7684\u6587\u7AE0\u5C06\u81EA\u52A8\u5206\u914D\u5230\u8BE5\u680F\u76EE\u3002"})]})]})}),(0,e.jsxs)("div",{className:"mt-8","data-kt-ecommerce-catalog-add-category":"auto-options",children:[(0,e.jsx)("label",{className:"form-label",children:"\u6761\u4EF6"}),(0,e.jsxs)("div",{className:"d-flex flex-wrap align-items-center text-gray-600 gap-5 mb-4",children:[(0,e.jsx)("span",{children:"\u6587\u7AE0\u5FC5\u987B\u5339\u914D:"}),(0,e.jsx)(t.Y8.Group,{className:"d-flex",solid:!0,options:[{value:"all_conditions",label:"\u6240\u6709\u6761\u4EF6"},{value:"any_conditions",label:"\u4EFB\u4F55\u6761\u4EF6"}]})]}),(0,e.jsx)(t.l0.Repeater,{children:function(x){var h=x.remove,O=x.size;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"w-100 w-md-200px",children:(0,e.jsx)(t.l0.Item,{name:"type",noStyle:!0,children:(0,e.jsx)(t.ub,{options:[{value:"title",label:"\u6807\u9898"},{value:"tag",label:"\u6807\u7B7E"}]})})}),(0,e.jsx)("div",{className:"w-100 w-md-200px",children:(0,e.jsx)(t.l0.Item,{name:"equals",noStyle:!0,children:(0,e.jsx)(t.ub,{options:[{value:"equal",label:"\u7B49\u4E8E"},{value:"notequal",label:"\u4E0D\u7B49\u4E8E"},{value:"greater",label:"\u5927\u4E8E"},{value:"less",label:"\u5C0F\u4E8E"},{value:"starts",label:"\u4EE5\u5F00\u59CB"},{value:"ends",label:"\u7ED3\u675F\u4EE5"}]})})}),(0,e.jsx)(t.l0.Item,{name:"value",noStyle:!0,children:(0,e.jsx)(t.II,{className:"mw-100 w-200px"})}),O>1&&(0,e.jsx)(t.zx,{size:"sm",variant:"light-danger",onClick:h,icon:(0,e.jsx)(v.JO,{className:"svg-icon-2",name:"Duotune/arr088"})})]})}})]})]})]})},"general"),(0,e.jsx)(t.mQ.TabPane,{tab:"SEO",forceRender:!0,children:(0,e.jsxs)(t.Zb,{flush:!0,className:"py-4",title:"\u5143\u6570\u636E",bodyClassName:"pt-0",children:[(0,e.jsx)(t.l0.Item,{name:["meta","title"],className:"mb-8",label:"\u6807\u9898",help:"\u8BBE\u7F6E\u5143\u6570\u636E\u6807\u9898, \u5EFA\u8BAE\u5173\u952E\u8BCD\u8981\u7B80\u5355, \u51C6\u786E",children:(0,e.jsx)(t.II,{className:"mw-400px"})}),(0,e.jsx)(t.l0.Item,{name:["meta","description"],className:"mb-8",label:"\u63CF\u8FF0",help:"\u8BBE\u7F6E\u5143\u6570\u636E\u63CF\u8FF0, \u4EE5\u63D0\u9AD8\u6392\u540D",children:(0,e.jsx)(t.Bn,{className:"h-300px"})}),(0,e.jsx)(t.l0.Item,{name:["meta","keywords"],label:"\u5173\u952E\u5B57",help:(0,e.jsxs)(e.Fragment,{children:["\u8BBE\u7F6E\u680F\u76EE\u76F8\u5173\u7684\u5173\u952E\u5B57\u5217\u8868\u3002\u901A\u8FC7\u5728\u6BCF\u4E2A\u5173\u952E\u5B57\u4E4B\u95F4\u6DFB\u52A0",(0,e.jsx)("code",{children:","}),"\u6765\u5206\u9694\u5173\u952E\u5B57"]}),children:(0,e.jsx)(j.ZP,{className:"form-control"})})]})},"seo")]}),(0,e.jsx)(s.Z,{offsetBottom:16,children:(0,e.jsxs)("div",{className:C()("d-flex bg-body-color p-5 mx-4 tw-rounded-2xl justify-content-end"),children:[(0,e.jsx)(t.zx,{variant:"light",className:"me-5",children:"\u53D6\u6D88"}),(0,e.jsx)(t.zx,{as:"button",htmlType:"submit",loading:!1,children:"\u4FDD\u5B58\u66F4\u6539"})]})})]})]})})}g.default=r}}]);
