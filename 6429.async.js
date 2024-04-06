"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6429],{42755:function(ve,z,u){u.d(z,{Se:function(){return _},WP:function(){return ee},V7:function(){return b},St:function(){return Y},gk:function(){return q},e7:function(){return te},uw:function(){return m},eU:function(){return C},nT:function(){return Q},Qu:function(){return p},Mq:function(){return g}});var X=u(97857),r=u.n(X),J=u(68400),i=u.n(J),c=u(75063),F=u(37887),A=u(50319),M,L,y,f,N,U,k,G,R,a,V,e={},B=(0,c.Ps)(M||(M=i()([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function Y(t){var n=r()(r()({},e),t);return F.a(B,n)}function le(t){var n=_objectSpread(_objectSpread({},e),t);return Apollo.useLazyQuery(B,n)}function oe(t){var n=_objectSpread(_objectSpread({},e),t);return Apollo.useSuspenseQuery(B,n)}var $=(0,c.Ps)(L||(L=i()([`
    query articles($where: ArticleWhereInput, $page: Int, $pageSize: Int) {
  articles: articlesConnection(where: $where, page: $page, pageSize: $pageSize) {
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
    `])));function q(t){var n=r()(r()({},e),t);return F.a($,n)}function se(t){var n=_objectSpread(_objectSpread({},e),t);return Apollo.useLazyQuery($,n)}function ie(t){var n=_objectSpread(_objectSpread({},e),t);return Apollo.useSuspenseQuery($,n)}var E=(0,c.Ps)(y||(y=i()([`
    query articleCategories($id: ID!) {
  categories: articleCategories(where: {parent: {id: $id, subColumns: true}}) {
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
    `])));function _(t){var n=r()(r()({},e),t);return F.a(E,n)}function ce(t){var n=_objectSpread(_objectSpread({},e),t);return Apollo.useLazyQuery(E,n)}function de(t){var n=_objectSpread(_objectSpread({},e),t);return Apollo.useSuspenseQuery(E,n)}var T=(0,c.Ps)(f||(f=i()([`
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
    `])));function ee(t){var n=r()(r()({},e),t);return F.a(T,n)}function h(t){var n=_objectSpread(_objectSpread({},e),t);return Apollo.useLazyQuery(T,n)}function o(t){var n=_objectSpread(_objectSpread({},e),t);return Apollo.useSuspenseQuery(T,n)}var l=(0,c.Ps)(N||(N=i()([`
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
    content {
      id
      __typename
      ... on TextContent {
        text
      }
    }
  }
}
    `])));function m(t){var n=r()(r()({},e),t);return A.D(l,n)}var j=(0,c.Ps)(U||(U=i()([`
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
    content {
      id
      __typename
      ... on TextContent {
        type
        text
      }
    }
  }
}
    `])));function g(t){var n=r()(r()({},e),t);return A.D(j,n)}var s=(0,c.Ps)(k||(k=i()([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function C(t){var n=r()(r()({},e),t);return A.D(s,n)}var I=(0,c.Ps)(G||(G=i()([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function Q(t){var n=r()(r()({},e),t);return A.D(I,n)}var x=(0,c.Ps)(R||(R=i()([`
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
    content {
      id
      __typename
      ... on TextContent {
        type
        text
      }
    }
  }
}
    `])));function b(t){var n=r()(r()({},e),t);return F.a(x,n)}function D(t){var n=_objectSpread(_objectSpread({},e),t);return Apollo.useLazyQuery(x,n)}function me(t){var n=_objectSpread(_objectSpread({},e),t);return Apollo.useSuspenseQuery(x,n)}var v=(0,c.Ps)(a||(a=i()([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function te(t){var n=r()(r()({},e),t);return A.D(v,n)}var d=(0,c.Ps)(V||(V=i()([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function p(t){var n=r()(r()({},e),t);return A.D(d,n)}},86429:function(ve,z,u){u.r(z),u.d(z,{default:function(){return ee}});var X=u(15009),r=u.n(X),J=u(13769),i=u.n(J),c=u(99289),F=u.n(c),A=u(5574),M=u.n(A),L=u(97857),y=u.n(L),f=u(62435),N=u(96974),U=u(64218),k=u(93967),G=u.n(k),R=u(73588),a=u(13757),V=u(12708),e=u(86074);function B(h){var o,l,m=(0,f.useCallback)(function(){var s;window.open("//localhost:8001/designer?id="+((s=h.category)===null||s===void 0||(s=s.page)===null||s===void 0||(s=s.component)===null||s===void 0?void 0:s.id),"_blank")},[(o=h.category)===null||o===void 0||(o=o.page)===null||o===void 0||(o=o.component)===null||o===void 0?void 0:o.id]),j=(0,f.useCallback)(function(s){console.log(s.target.checked)},[]),g=(l=h.category)===null||l===void 0||(l=l.page)===null||l===void 0||(l=l.component)===null||l===void 0?void 0:l.template;return(0,e.jsxs)("div",{className:"d-flex flex-column gap-7 gap-lg-10",children:[(0,e.jsxs)(a.Card,{flush:!0,className:"py-4",title:"\u66F4\u591A\u529F\u80FD",bodyClassName:"pt-0",children:[(0,e.jsx)(a.Form.Item,{valuePropName:"checked",className:"mb-8",name:"xx",children:(0,e.jsx)(a.Checkbox,{value:"1",solid:!0,label:"\u542F\u7528\u8BC4\u8BBA"})}),(0,e.jsx)(a.Form.Item,{valuePropName:"checked",className:"mb-8",name:"x2",children:(0,e.jsx)(a.Checkbox,{value:"1",solid:!0,label:"\u5141\u8BB8\u6536\u85CF"})}),(0,e.jsx)(a.Form.Item,{valuePropName:"checked",className:"mb-8",name:["page","enabled"],children:(0,e.jsx)(a.Checkbox,{onChange:j,value:"1",solid:!0,className:"align-items-start",inputClassName:"mt-1",children:(0,e.jsxs)("div",{className:"d-flex flex-column",children:[(0,e.jsx)("div",{children:"\u81EA\u5B9A\u4E49\u680F\u76EE\u9875"}),(0,e.jsx)("div",{className:"form-item-help",children:"\u914D\u7F6E\u5355\u72EC\u7684\u5C55\u793A\u9875\u9762"})]})})})]}),(0,e.jsx)(a.Form.Item,{dependencies:[["page","enabled"]],noStyle:!0,children:function(C){var I=C.getFieldValue(["page","enabled"]);return I?(0,e.jsxs)(a.Card,{flush:!0,className:"py-4",title:"\u81EA\u5B9A\u4E49\u680F\u76EE\u9875",bodyClassName:"pt-0",children:[(0,e.jsx)(a.Form.Item,{className:"mb-6 mw-400px",name:["page","route","path"],label:"\u8BBF\u95EE\u5730\u5740",children:(0,e.jsx)(a.Input,{})}),(0,e.jsx)(a.Form.Item,{className:"mb-6",name:["page","component","template"],label:"\u9875\u9762\u6A21\u7248",children:(0,e.jsx)(a.Select2,{width:400,options:[{value:"cn.asany.ui.theme.canvas.Page",label:"\u666E\u901A\u680F\u76EE\u9875"},{value:"cn.asany.ui.theme.canvas.Page1",label:"\u5B9A\u5236\u6A21\u7248"}]})}),(0,e.jsx)(a.Form.Item,{dependencies:[["page","component","template"]],noStyle:!0,children:function(){var x=C.getFieldValue(["page","component","template"]),b=!x||g!==x;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.Button,{onClick:m,disabled:b,children:"\u53BB\u914D\u7F6E\u9875\u9762"}),b&&(0,e.jsx)("div",{className:"form-item-help",children:"\u5207\u6362\u6A21\u7248\u540E\uFF0C\u9700\u8981\u5148\u4FDD\u5B58"})]})}})]}):(0,e.jsx)(e.Fragment,{})}})]})}var Y=B;function le(){return(0,e.jsx)("div",{className:"d-flex flex-column gap-7 gap-lg-10",children:(0,e.jsxs)(a.Card,{flush:!0,className:"py-4",title:"\u901A\u7528",bodyClassName:"pt-0",children:[(0,e.jsx)(a.Form.Item,{className:"mb-8",name:"name",label:"\u540D\u79F0",required:!0,help:"\u540D\u79F0\u662F\u5FC5\u9700\u7684\uFF0C\u5EFA\u8BAE\u662F\u552F\u4E00\u7684",rules:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(a.Input,{placeholder:"\u680F\u76EE\u540D\u79F0",className:"mw-400px"})}),(0,e.jsx)(a.Form.Item,{name:"description",label:"\u63CF\u8FF0",help:"\u4E3A\u680F\u76EE\u8BBE\u7F6E\u63CF\u8FF0\u4EE5\u83B7\u5F97\u66F4\u597D\u7684\u53EF\u89C1\u6027\u3002",children:(0,e.jsx)(a.QuillEditor,{className:"h-300px"})})]})})}var oe=le,$=u(5618);function q(){return(0,e.jsx)("div",{className:"d-flex flex-column gap-7 gap-lg-10",children:(0,e.jsxs)(a.Card,{flush:!0,className:"py-4",title:"SEO",bodyClassName:"pt-0",children:[(0,e.jsx)(a.Form.Item,{name:["meta","seo","title"],className:"mb-8",label:"\u6807\u9898",help:"\u8BBE\u7F6E\u5143\u6570\u636E\u6807\u9898, \u5EFA\u8BAE\u5173\u952E\u8BCD\u8981\u7B80\u5355, \u51C6\u786E",children:(0,e.jsx)(a.Input,{className:"mw-400px"})}),(0,e.jsx)(a.Form.Item,{name:["meta","seo","description"],className:"mb-8",label:"\u63CF\u8FF0",help:"\u8BBE\u7F6E\u5143\u6570\u636E\u63CF\u8FF0, \u4EE5\u63D0\u9AD8\u6392\u540D",children:(0,e.jsx)(a.QuillEditor,{className:"h-300px"})}),(0,e.jsx)(a.Form.Item,{name:["meta","seo","keywords"],label:"\u5173\u952E\u5B57",help:(0,e.jsxs)(e.Fragment,{children:["\u8BBE\u7F6E\u680F\u76EE\u76F8\u5173\u7684\u5173\u952E\u5B57\u5217\u8868\u3002\u901A\u8FC7\u5728\u6BCF\u4E2A\u5173\u952E\u5B57\u4E4B\u95F4\u6DFB\u52A0",(0,e.jsx)("code",{children:","}),"\u6765\u5206\u9694\u5173\u952E\u5B57"]}),children:(0,e.jsx)($.ZP,{className:"form-control"})})]})})}var se=q,ie=u(69366),E=u(42755);function _(h){var o=h.categoryTreeData,l=(0,E.St)(),m=l.data,j=(m==null?void 0:m.articleStoreTemplates)||[];return(0,e.jsxs)("div",{className:"d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10",children:[(0,e.jsxs)(a.Card,{flush:!0,className:"py-4",title:"\u7F29\u7565\u56FE",bodyClassName:"text-center pt-0",children:[(0,e.jsx)(a.Form.Item,{name:"image",children:(0,e.jsx)(a.Upload.Image,{width:150,height:150,className:"mb-3",space:"orX8kLOV",accept:".png, .jpg, .jpeg",crop:{height:300,zoomable:!1,aspectRatio:1},background:"/assets/media/svg/files/blank-image.svg"})}),(0,e.jsx)("div",{className:"text-muted fs-7",children:"\u8BBE\u7F6E\u680F\u76EE\u7F29\u7565\u56FE\u3002\u4EC5\u63A5\u53D7 *.png\u3001*.jpg \u548C *.jpeg \u683C\u5F0F\u7684\u56FE\u7247"})]}),(0,e.jsx)(a.Card,{flush:!0,className:"py-4",title:"\u4E0A\u7EA7\u680F\u76EE",children:(0,e.jsxs)(a.Card.Body,{className:"pt-0",children:[(0,e.jsx)(a.Form.Item,{className:"mb-3",name:"parent",children:(0,e.jsx)(ie.Z,{style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:o,placeholder:"\u9009\u62E9\u4E0A\u7EA7\u680F\u76EE, \u9ED8\u8BA4\u6839\u680F\u76EE",treeDefaultExpandAll:!0,allowClear:!0,transitionName:""})}),(0,e.jsx)("div",{className:"text-muted fs-7",children:"\u9009\u62E9\u4E0A\u7EA7\u680F\u76EE,\u672A\u9009\u62E9\u5C06\u6DFB\u52A0\u5230\u6839\u76EE\u5F55"})]})}),(0,e.jsxs)(a.Card,{flush:!0,className:"py-4",title:"\u5B58\u50A8\u6A21\u677F",bodyClassName:"pt-0",children:[(0,e.jsx)(a.Form.Item,{className:"mb-3",name:"storeTemplate",label:"\u9009\u62E9\u5B58\u50A8\u6A21\u677F",children:(0,e.jsx)(a.Select2,{options:j.map(function(g){return{value:g.id,label:g.name}})})}),(0,e.jsx)("div",{className:"text-muted fs-7",children:"\u4ECE\u60A8\u5F53\u524D\u7684\u4E3B\u9898\u4E2D\u5206\u914D\u4E00\u4E2A\u6A21\u677F\u6765\u5B9A\u4E49\u680F\u76EE\u6587\u7AE0\u7684\u663E\u793A\u65B9\u5F0F"})]})]})}var ce=_,de=["meta","page"];function T(){var h=(0,N.bx)(),o=h.rootCategoryId,l=h.categories,m=(0,N.UO)();console.log("rootCategoryId",o);var j=(0,E.WP)({fetchPolicy:"cache-and-network",variables:{id:m.id}}),g=j.data,s=j.loading,C=(0,f.useMemo)(function(){return!l||!l.length?[]:(0,V.G_)(l.map(function(d){return y()(y()({},d),{},{value:d.id,title:d.name})}),{idKey:"id",childrenKey:"children",pidKey:"parent.id",sort:function(p,t){return p.index-t.index}})},[l]),I=(0,E.Qu)(),Q=M()(I,2),x=Q[0],b=Q[1].loading,D=a.Form.useForm(),me=(0,f.useCallback)(F()(r()().mark(function d(){var p,t,n,W,K,P,ne,pe,ae,Z,ue,O,w,re,H,ge;return r()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,D.validateFields();case 2:for(W=S.sent,K=W.meta,P=W.page,ne=i()(W,de),pe={seo_title:"single_line_text_field",seo_description:"multi_line_text_field",seo_keywords:"list.single_line_text_field"},ae=[],Z=0,ue=Object.keys(K);Z<ue.length;Z++)for(O=ue[Z],w=0,re=Object.keys(K[O]);w<re.length;w++)H=re[w],ae.push({namespace:O,key:H,value:K[O][H],type:pe[O+"_"+H]});return ge=y()(y()({},ne),{},{page:{enabled:P.enabled,path:(p=P.route)===null||p===void 0?void 0:p.path,template:(t=P.component)===null||t===void 0?void 0:t.template,blocks:(n=P.component)===null||n===void 0?void 0:n.blocks},metafields:ae}),S.next=12,x({variables:{id:m.id,input:ge}});case 12:a.Toast.success("\u680F\u76EE \u201C".concat(ne.name,"\u201D \u4FEE\u6539\u6210\u529F"),2e3,{placement:"bottom-left",progressBar:!0});case 13:case"end":return S.stop()}},d)})),[D,m.id,x]),v=g==null?void 0:g.category;(0,f.useEffect)(function(){var d,p,t,n;v&&D.setFieldsValue(y()(y()({},v),{},{storeTemplate:(d=v.storeTemplate)===null||d===void 0?void 0:d.id,image:(p=v.image)===null||p===void 0?void 0:p.id,parent:((t=v.parent)===null||t===void 0?void 0:t.id)===o?null:(n=v.parent)===null||n===void 0?void 0:n.id}))},[v,D,o]);var te=(0,f.useCallback)(function(){history.back()},[]);return(0,e.jsx)(R.vs,{loading:s,header:{title:"\u7F16\u8F91\u680F\u76EE"},children:(0,e.jsxs)(a.Form,{form:D,className:"form d-flex flex-column flex-lg-row",children:[(0,e.jsx)(ce,{categoryTreeData:C}),(0,e.jsxs)("div",{className:"d-flex flex-column flex-row-fluid gap-7 gap-lg-10",children:[(0,e.jsxs)(a.Tabs,{defaultActiveKey:"general",contentContainer:!1,type:"line-tabs",className:"border-0 fs-4 fw-bold mb-n2 nav-line-tabs-2x",children:[(0,e.jsx)(a.Tabs.TabPane,{tab:"\u57FA\u672C\u4FE1\u606F",forceRender:!0,children:(0,e.jsx)(oe,{})},"general"),(0,e.jsx)(a.Tabs.TabPane,{tab:"\u9AD8\u7EA7\u8BBE\u7F6E",forceRender:!0,children:(0,e.jsx)(Y,{category:v})},"advanced"),(0,e.jsx)(a.Tabs.TabPane,{tab:"\u5143\u6570\u636E",forceRender:!0,children:(0,e.jsx)(se,{})},"metadata")]}),(0,e.jsx)(U.Z,{style:{zIndex:9},offsetBottom:16,children:(0,e.jsxs)("div",{className:G()("d-flex bg-body-color p-5 mx-4 tw-rounded-2xl justify-content-end"),children:[(0,e.jsx)(a.Button,{onClick:te,variant:"light",className:"me-5",children:"\u53D6\u6D88"}),(0,e.jsx)(a.Button,{onClick:me,loading:b,children:"\u4FDD\u5B58\u66F4\u6539"})]})})]})]})})}var ee=T}}]);
