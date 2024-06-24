"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8842],{42755:function(z,v,r){r.d(v,{Se:function(){return K},WP:function(){return W},vz:function(){return o},V7:function(){return k},St:function(){return I},gk:function(){return P},e7:function(){return ee},uw:function(){return H},eU:function(){return J},nT:function(){return Y},Qu:function(){return ne},Mq:function(){return G}});var M=r(97857),s=r.n(M),N=r(68400),i=r.n(N),l=r(75063),c=r(37887),d=r(50319),j,g,f,x,C,b,F,u,D,p,e,B,S,a={},E=(0,l.Ps)(j||(j=i()([`
    fragment ArticleParts on Article {
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
  contentType
  content {
    id
    ... on TextContent {
      textType: type
      text
    }
    ... on DocumentContent {
      url
      document
      documentType: type
      size
      title
      description
    }
    ... on ImageContent {
      images {
        id
        url
        title
        image
        description
      }
    }
    ... on VideoContent {
      id
      url
      title
      video
      description
    }
  }
}
    `]))),m=(0,l.Ps)(g||(g=i()([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function I(t){var n=s()(s()({},a),t);return c.a(m,n)}function Q(t){var n=_objectSpread(_objectSpread({},a),t);return Apollo.useLazyQuery(m,n)}function R(t){var n=_objectSpread(_objectSpread({},a),t);return Apollo.useSuspenseQuery(m,n)}var A=(0,l.Ps)(f||(f=i()([`
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
    `])));function P(t){var n=s()(s()({},a),t);return c.a(A,n)}function U(t){var n=_objectSpread(_objectSpread({},a),t);return Apollo.useLazyQuery(A,n)}function T(t){var n=_objectSpread(_objectSpread({},a),t);return Apollo.useSuspenseQuery(A,n)}var _=(0,l.Ps)(x||(x=i()([`
    query articleList($where: ArticleWhereInput, $offset: Int, $limit: Int, $orderBy: OrderBy) {
  articles: articles(
    where: $where
    offset: $offset
    limit: $limit
    orderBy: $orderBy
  ) {
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
    createdAt(format: "yyyy-MM-dd HH:mm")
    publishedAt
    status
  }
}
    `])));function o(t){var n=s()(s()({},a),t);return c.a(_,n)}function y(t){var n=_objectSpread(_objectSpread({},a),t);return Apollo.useLazyQuery(_,n)}function O(t){var n=_objectSpread(_objectSpread({},a),t);return Apollo.useSuspenseQuery(_,n)}var h=(0,l.Ps)(C||(C=i()([`
    query articleCategories($id: ID!) {
  categories: articleCategories(where: {parent: {id: $id, subColumns: true}}) {
    id
    icon
    name
    fullName
    slug
    path
    index
    level
    image
    parent {
      id
    }
    storeTemplate {
      id
      name
      contentType
    }
  }
}
    `])));function K(t){var n=s()(s()({},a),t);return c.a(h,n)}function ue(t){var n=_objectSpread(_objectSpread({},a),t);return Apollo.useLazyQuery(h,n)}function ae(t){var n=_objectSpread(_objectSpread({},a),t);return Apollo.useSuspenseQuery(h,n)}var L=(0,l.Ps)(b||(b=i()([`
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
      name
      contentType
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
    `])));function W(t){var n=s()(s()({},a),t);return c.a(L,n)}function re(t){var n=_objectSpread(_objectSpread({},a),t);return Apollo.useLazyQuery(L,n)}function se(t){var n=_objectSpread(_objectSpread({},a),t);return Apollo.useSuspenseQuery(L,n)}var w=(0,l.Ps)(F||(F=i()([`
    mutation createArticle($input: ArticleCreateInput!) {
  article: createArticle(input: $input) {
    id
    title
    status
    image
    summary
    publishedAt
    ...ArticleParts
  }
}
    `,""])),E);function H(t){var n=s()(s()({},a),t);return d.D(w,n)}var V=(0,l.Ps)(u||(u=i()([`
    mutation updateArticle($id: ID!, $input: ArticleUpdateInput!) {
  article: updateArticle(id: $id, input: $input) {
    id
    title
    status
    image
    summary
    publishedAt
    ...ArticleParts
  }
}
    `,""])),E);function G(t){var n=s()(s()({},a),t);return d.D(V,n)}var Z=(0,l.Ps)(D||(D=i()([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function J(t){var n=s()(s()({},a),t);return d.D(Z,n)}var X=(0,l.Ps)(p||(p=i()([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function Y(t){var n=s()(s()({},a),t);return d.D(X,n)}var $=(0,l.Ps)(e||(e=i()([`
    query article($id: ID!) {
  article(id: $id) {
    id
    title
    status
    image
    summary
    publishedAt
    ...ArticleParts
  }
}
    `,""])),E);function k(t){var n=s()(s()({},a),t);return c.a($,n)}function le(t){var n=_objectSpread(_objectSpread({},a),t);return Apollo.useLazyQuery($,n)}function ie(t){var n=_objectSpread(_objectSpread({},a),t);return Apollo.useSuspenseQuery($,n)}var q=(0,l.Ps)(B||(B=i()([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function ee(t){var n=s()(s()({},a),t);return d.D(q,n)}var te=(0,l.Ps)(S||(S=i()([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function ne(t){var n=s()(s()({},a),t);return d.D(te,n)}},88842:function(z,v,r){r.r(v);var M=r(5574),s=r.n(M),N=r(97857),i=r.n(N),l=r(62435),c=r(96974),d=r(46027),j=r(5618),g=r(69366),f=r(64218),x=r(93967),C=r.n(x),b=r(38018),F=r(73588),u=r(79817),D=r(12708),p=r(42755),e=r(86074);function B(){var S=(0,c.bx)(),a=S.categories,E=(0,p.St)(),m=E.data,I=(m==null?void 0:m.articleStoreTemplates)||[],Q=(0,l.useMemo)(function(){return!a||!a.length?[]:(0,D.G_)(a.map(function(o){return i()(i()({},o),{},{value:o.id,title:o.name})}),{idKey:"id",childrenKey:"children",pidKey:"parent.id",sort:function(y,O){return y.index-O.index}})},[a]),R=(0,p.e7)(),A=s()(R,1),P=A[0],U=(0,l.useCallback)(function(o){console.log("finish",o,P)},[P]);console.log("ArticleChannelNew -> ",a);var T=(0,c.TH)(),_=(0,l.useMemo)(function(){return b.parse(T.search)},[T.search]);return(0,e.jsx)(F.vs,{header:{title:"\u65B0\u589E\u680F\u76EE"},children:(0,e.jsxs)(u.Form,{onFinish:U,initialValues:{storeTemplate:"1",parent:_.parent_category_id},className:"form d-flex flex-column flex-lg-row",children:[(0,e.jsxs)("div",{className:"d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10",children:[(0,e.jsxs)(u.Card,{flush:!0,className:"py-4",title:"\u7F29\u7565\u56FE",bodyClassName:"text-center pt-0",children:[(0,e.jsx)(u.Form.Item,{name:"cover",children:(0,e.jsx)(u.Upload.Image,{width:150,height:150,className:"mb-3",space:"orX8kLOV",accept:".png, .jpg, .jpeg",crop:{height:300,zoomable:!1,aspectRatio:1},background:"/assets/media/svg/files/blank-image.svg"})}),(0,e.jsx)("div",{className:"text-muted fs-7",children:"\u8BBE\u7F6E\u680F\u76EE\u7F29\u7565\u56FE\u3002\u4EC5\u63A5\u53D7 *.png\u3001*.jpg \u548C *.jpeg \u683C\u5F0F\u7684\u56FE\u7247"})]}),(0,e.jsx)(u.Card,{flush:!0,className:"py-4",title:"\u4E0A\u7EA7\u680F\u76EE",children:(0,e.jsxs)(u.Card.Body,{className:"pt-0",children:[(0,e.jsx)(u.Form.Item,{className:"mb-3",name:"parent",children:(0,e.jsx)(g.Z,{style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:Q,placeholder:"\u9009\u62E9\u4E0A\u7EA7\u680F\u76EE",treeDefaultExpandAll:!0,allowClear:!0,transitionName:""})}),(0,e.jsx)("div",{className:"text-muted fs-7",children:"\u9009\u62E9\u4E0A\u7EA7\u680F\u76EE,\u672A\u9009\u62E9\u5C06\u6DFB\u52A0\u5230\u6839\u76EE\u5F55"})]})}),(0,e.jsxs)(u.Card,{flush:!0,className:"py-4",title:"\u5B58\u50A8\u6A21\u677F",bodyClassName:"pt-0",children:[(0,e.jsx)(u.Form.Item,{className:"mb-3",name:"storeTemplate",label:"\u9009\u62E9\u5B58\u50A8\u6A21\u677F",children:(0,e.jsx)(u.Select2,{options:I.map(function(o){return{value:o.id,label:o.name}})})}),(0,e.jsx)("div",{className:"text-muted fs-7",children:"\u4ECE\u60A8\u5F53\u524D\u7684\u4E3B\u9898\u4E2D\u5206\u914D\u4E00\u4E2A\u6A21\u677F\u6765\u5B9A\u4E49\u680F\u76EE\u6587\u7AE0\u7684\u663E\u793A\u65B9\u5F0F"})]})]}),(0,e.jsxs)("div",{className:"d-flex flex-column flex-row-fluid gap-7 gap-lg-10",children:[(0,e.jsxs)(u.Tabs,{defaultActiveKey:"general",contentContainer:!1,className:"border-0 fs-4 fw-bold mb-n2 nav-line-tabs-2x",children:[(0,e.jsx)(u.Tabs.TabPane,{tab:"\u57FA\u672C\u4FE1\u606F",forceRender:!0,children:(0,e.jsxs)("div",{className:"d-flex flex-column gap-7 gap-lg-10",children:[(0,e.jsxs)(u.Card,{flush:!0,className:"py-4",title:"\u901A\u7528",bodyClassName:"pt-0",children:[(0,e.jsx)(u.Form.Item,{className:"mb-8",name:"name",label:"\u540D\u79F0",required:!0,help:"\u540D\u79F0\u662F\u5FC5\u9700\u7684\uFF0C\u5EFA\u8BAE\u662F\u552F\u4E00\u7684",rules:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(u.Input,{placeholder:"\u680F\u76EE\u540D\u79F0",className:"mw-400px"})}),(0,e.jsx)(u.Form.Item,{name:"description",label:"\u63CF\u8FF0",help:"\u4E3A\u680F\u76EE\u8BBE\u7F6E\u63CF\u8FF0\u4EE5\u83B7\u5F97\u66F4\u597D\u7684\u53EF\u89C1\u6027\u3002",children:(0,e.jsx)(u.QuillEditor,{className:"h-300px"})})]}),(0,e.jsxs)(u.Card,{flush:!0,className:"py-4",title:"\u81EA\u52A8\u5316",bodyClassName:"pt-0",children:[(0,e.jsx)(u.Form.Item,{name:"assignmentMethod",labelClassName:"mb-5",label:"\u6587\u7AE0\u5206\u914D\u65B9\u6CD5",children:(0,e.jsxs)(u.Radio.Group,{children:[(0,e.jsxs)(u.Radio,{solid:!0,inputClassName:"me-3",value:"manual",children:[(0,e.jsx)("div",{className:"fw-bolder text-gray-800",children:"\u624B\u52A8\u63A7\u5236"}),(0,e.jsx)("div",{className:"form-item-help",children:"\u5728\u6587\u7AE0\u521B\u5EFA\u6216\u66F4\u65B0\u671F\u95F4\u624B\u52A8\u9009\u62E9\u6B64\u680F\u76EE\uFF0C\u5C06\u6587\u7AE0\u9010\u4E2A\u6DFB\u52A0\u5230\u6B64\u680F\u76EE\u3002"})]}),(0,e.jsx)(u.Separator,{style:"dashed",className:"my-4"}),(0,e.jsxs)(u.Radio,{solid:!0,inputClassName:"me-3",value:"manual",children:[(0,e.jsx)("div",{className:"fw-bolder text-gray-800",children:"\u81EA\u52A8"}),(0,e.jsx)("div",{className:"form-item-help",children:"\u7B26\u5408\u4EE5\u4E0B\u6761\u4EF6\u7684\u6587\u7AE0\u5C06\u81EA\u52A8\u5206\u914D\u5230\u8BE5\u680F\u76EE\u3002"})]})]})}),(0,e.jsxs)("div",{className:"mt-8","data-kt-ecommerce-catalog-add-category":"auto-options",children:[(0,e.jsx)("label",{className:"form-label",children:"\u6761\u4EF6"}),(0,e.jsxs)("div",{className:"d-flex flex-wrap align-items-center text-gray-600 gap-5 mb-4",children:[(0,e.jsx)("span",{children:"\u6587\u7AE0\u5FC5\u987B\u5339\u914D:"}),(0,e.jsx)(u.Radio.Group,{className:"d-flex",solid:!0,options:[{value:"all_conditions",label:"\u6240\u6709\u6761\u4EF6"},{value:"any_conditions",label:"\u4EFB\u4F55\u6761\u4EF6"}]})]}),(0,e.jsx)(u.Form.Repeater,{children:function(y){var O=y.remove,h=y.size;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"w-100 w-md-200px",children:(0,e.jsx)(u.Form.Item,{name:"type",noStyle:!0,children:(0,e.jsx)(u.Select2,{options:[{value:"title",label:"\u6807\u9898"},{value:"tag",label:"\u6807\u7B7E"}]})})}),(0,e.jsx)("div",{className:"w-100 w-md-200px",children:(0,e.jsx)(u.Form.Item,{name:"equals",noStyle:!0,children:(0,e.jsx)(u.Select2,{options:[{value:"equal",label:"\u7B49\u4E8E"},{value:"notequal",label:"\u4E0D\u7B49\u4E8E"},{value:"greater",label:"\u5927\u4E8E"},{value:"less",label:"\u5C0F\u4E8E"},{value:"starts",label:"\u4EE5\u5F00\u59CB"},{value:"ends",label:"\u7ED3\u675F\u4EE5"}]})})}),(0,e.jsx)(u.Form.Item,{name:"value",noStyle:!0,children:(0,e.jsx)(u.Input,{className:"mw-100 w-200px"})}),h>1&&(0,e.jsx)(u.Button,{size:"sm",variant:"light-danger",onClick:O,icon:(0,e.jsx)(d.JO,{className:"svg-icon-2",name:"Duotune/arr088"})})]})}})]})]})]})},"general"),(0,e.jsx)(u.Tabs.TabPane,{tab:"SEO",forceRender:!0,children:(0,e.jsxs)(u.Card,{flush:!0,className:"py-4",title:"\u5143\u6570\u636E",bodyClassName:"pt-0",children:[(0,e.jsx)(u.Form.Item,{name:["meta","title"],className:"mb-8",label:"\u6807\u9898",help:"\u8BBE\u7F6E\u5143\u6570\u636E\u6807\u9898, \u5EFA\u8BAE\u5173\u952E\u8BCD\u8981\u7B80\u5355, \u51C6\u786E",children:(0,e.jsx)(u.Input,{className:"mw-400px"})}),(0,e.jsx)(u.Form.Item,{name:["meta","description"],className:"mb-8",label:"\u63CF\u8FF0",help:"\u8BBE\u7F6E\u5143\u6570\u636E\u63CF\u8FF0, \u4EE5\u63D0\u9AD8\u6392\u540D",children:(0,e.jsx)(u.QuillEditor,{className:"h-300px"})}),(0,e.jsx)(u.Form.Item,{name:["meta","keywords"],label:"\u5173\u952E\u5B57",help:(0,e.jsxs)(e.Fragment,{children:["\u8BBE\u7F6E\u680F\u76EE\u76F8\u5173\u7684\u5173\u952E\u5B57\u5217\u8868\u3002\u901A\u8FC7\u5728\u6BCF\u4E2A\u5173\u952E\u5B57\u4E4B\u95F4\u6DFB\u52A0",(0,e.jsx)("code",{children:","}),"\u6765\u5206\u9694\u5173\u952E\u5B57"]}),children:(0,e.jsx)(j.ZP,{className:"form-control"})})]})},"seo")]}),(0,e.jsx)(f.Z,{offsetBottom:16,children:(0,e.jsxs)("div",{className:C()("d-flex bg-body-color p-5 mx-4 tw-rounded-2xl justify-content-end"),children:[(0,e.jsx)(u.Button,{variant:"light",className:"me-5",children:"\u53D6\u6D88"}),(0,e.jsx)(u.Button,{as:"button",htmlType:"submit",loading:!1,children:"\u4FDD\u5B58\u66F4\u6539"})]})})]})]})})}v.default=B}}]);
