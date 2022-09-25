(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[5190],{8845:function(de,z,u){"use strict";u.d(z,{Se:function(){return ee},WP:function(){return te},V7:function(){return P},St:function(){return _},gk:function(){return I},e7:function(){return E},uw:function(){return d},eU:function(){return m},nT:function(){return S},Qu:function(){return N},Mq:function(){return o}});var r=u(11849),s=u(20310),i=u(49704),D=u(64718),F=u(21919),O,h,x,M,k,t,e,L,U,w,G,l={},R=(0,i.Ps)(O||(O=(0,s.Z)([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function _(n){var a=(0,r.Z)((0,r.Z)({},l),n);return D.a(R,a)}function me(n){var a=_objectSpread(_objectSpread({},l),n);return Apollo.useLazyQuery(R,a)}var V=(0,i.Ps)(h||(h=(0,s.Z)([`
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
    `])));function I(n){var a=(0,r.Z)((0,r.Z)({},l),n);return D.a(V,a)}function le(n){var a=_objectSpread(_objectSpread({},l),n);return Apollo.useLazyQuery(V,a)}var K=(0,i.Ps)(x||(x=(0,s.Z)([`
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
    `])));function ee(n){var a=(0,r.Z)((0,r.Z)({},l),n);return D.a(K,a)}function ie(n){var a=_objectSpread(_objectSpread({},l),n);return Apollo.useLazyQuery(K,a)}var X=(0,i.Ps)(M||(M=(0,s.Z)([`
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
    `])));function te(n){var a=(0,r.Z)((0,r.Z)({},l),n);return D.a(X,a)}function se(n){var a=_objectSpread(_objectSpread({},l),n);return Apollo.useLazyQuery(X,a)}var g=(0,i.Ps)(k||(k=(0,s.Z)([`
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
    `])));function d(n){var a=(0,r.Z)((0,r.Z)({},l),n);return F.D(g,a)}var v=(0,i.Ps)(t||(t=(0,s.Z)([`
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
    `])));function o(n){var a=(0,r.Z)((0,r.Z)({},l),n);return F.D(v,a)}var c=(0,i.Ps)(e||(e=(0,s.Z)([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function m(n){var a=(0,r.Z)((0,r.Z)({},l),n);return F.D(c,a)}var A=(0,i.Ps)(L||(L=(0,s.Z)([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function S(n){var a=(0,r.Z)((0,r.Z)({},l),n);return F.D(A,a)}var $=(0,i.Ps)(U||(U=(0,s.Z)([`
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
    `])));function P(n){var a=(0,r.Z)((0,r.Z)({},l),n);return D.a($,a)}function y(n){var a=_objectSpread(_objectSpread({},l),n);return Apollo.useLazyQuery($,a)}var p=(0,i.Ps)(w||(w=(0,s.Z)([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function E(n){var a=(0,r.Z)((0,r.Z)({},l),n);return F.D(p,a)}var C=(0,i.Ps)(G||(G=(0,s.Z)([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function N(n){var a=(0,r.Z)((0,r.Z)({},l),n);return F.D(C,a)}},15190:function(de,z,u){"use strict";u.r(z),u.d(z,{default:function(){return se}});var r=u(3515),s=u(86288),i=u(39428),D=u(93224),F=u(3182),O=u(2824),h=u(11849),x=u(67294),M=u(94184),k=u.n(M),t=u(17818),e=u(85893);function L(g){var d,v,o,c,m,A,S=(0,x.useCallback)(function(){var y,p,E;window.open("http://www.asany.cn/designer?id="+((y=g.category)===null||y===void 0||(p=y.page)===null||p===void 0||(E=p.component)===null||E===void 0?void 0:E.id),"_blank")},[(d=g.category)===null||d===void 0||(v=d.page)===null||v===void 0||(o=v.component)===null||o===void 0?void 0:o.id]),$=(0,x.useCallback)(function(y){console.log(y.target.checked)},[]),P=(c=g.category)===null||c===void 0||(m=c.page)===null||m===void 0||(A=m.component)===null||A===void 0?void 0:A.template;return(0,e.jsxs)("div",{className:"d-flex flex-column gap-7 gap-lg-10",children:[(0,e.jsxs)(t.Zb,{flush:!0,className:"py-4",title:"\u66F4\u591A\u529F\u80FD",bodyClassName:"pt-0",children:[(0,e.jsx)(t.l0.Item,{valuePropName:"checked",className:"mb-8",name:"xx",children:(0,e.jsx)(t.XZ,{value:"1",solid:!0,label:"\u542F\u7528\u8BC4\u8BBA"})}),(0,e.jsx)(t.l0.Item,{valuePropName:"checked",className:"mb-8",name:"x2",children:(0,e.jsx)(t.XZ,{value:"1",solid:!0,label:"\u5141\u8BB8\u6536\u85CF"})}),(0,e.jsx)(t.l0.Item,{valuePropName:"checked",className:"mb-8",name:["page","enabled"],children:(0,e.jsx)(t.XZ,{onChange:$,value:"1",solid:!0,className:"align-items-start",inputClassName:"mt-1",children:(0,e.jsxs)("div",{className:"d-flex flex-column",children:[(0,e.jsx)("div",{children:"\u81EA\u5B9A\u4E49\u680F\u76EE\u9875"}),(0,e.jsx)("div",{className:"form-item-help",children:"\u914D\u7F6E\u5355\u72EC\u7684\u5C55\u793A\u9875\u9762"})]})})})]}),(0,e.jsx)(t.l0.Item,{dependencies:[["page","enabled"]],noStyle:!0,children:function(p){var E=p.getFieldValue(["page","enabled"]);return E?(0,e.jsxs)(t.Zb,{flush:!0,className:"py-4",title:"\u81EA\u5B9A\u4E49\u680F\u76EE\u9875",bodyClassName:"pt-0",children:[(0,e.jsx)(t.l0.Item,{className:"mb-6 mw-400px",name:["page","route","path"],label:"\u8BBF\u95EE\u5730\u5740",children:(0,e.jsx)(t.II,{})}),(0,e.jsx)(t.l0.Item,{className:"mb-6",name:["page","component","template"],label:"\u9875\u9762\u6A21\u7248",children:(0,e.jsx)(t.ub,{width:400,options:[{value:"cn.asany.ui.theme.canvas.Page",label:"\u666E\u901A\u680F\u76EE\u9875"},{value:"cn.asany.ui.theme.canvas.Page1",label:"\u5B9A\u5236\u6A21\u7248"}]})}),(0,e.jsx)(t.l0.Item,{dependencies:[["page","component","template"]],noStyle:!0,children:function(){var N=p.getFieldValue(["page","component","template"]),n=!N||P!=N;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.zx,{onClick:S,disabled:n,children:"\u53BB\u914D\u7F6E\u9875\u9762"}),n&&(0,e.jsx)("div",{className:"form-item-help",children:"\u5207\u6362\u6A21\u7248\u540E\uFF0C\u9700\u8981\u5148\u4FDD\u5B58"})]})}})]}):(0,e.jsx)(e.Fragment,{})}})]})}var U=L;function w(){return(0,e.jsx)("div",{className:"d-flex flex-column gap-7 gap-lg-10",children:(0,e.jsxs)(t.Zb,{flush:!0,className:"py-4",title:"\u901A\u7528",bodyClassName:"pt-0",children:[(0,e.jsx)(t.l0.Item,{className:"mb-8",name:"name",label:"\u540D\u79F0",required:!0,help:"\u540D\u79F0\u662F\u5FC5\u9700\u7684\uFF0C\u5EFA\u8BAE\u662F\u552F\u4E00\u7684",rules:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(t.II,{placeholder:"\u680F\u76EE\u540D\u79F0",className:"mw-400px"})}),(0,e.jsx)(t.l0.Item,{name:"description",label:"\u63CF\u8FF0",help:"\u4E3A\u680F\u76EE\u8BBE\u7F6E\u63CF\u8FF0\u4EE5\u83B7\u5F97\u66F4\u597D\u7684\u53EF\u89C1\u6027\u3002",children:(0,e.jsx)(t.Bn,{className:"h-300px"})})]})})}var G=w,l=u(5618);function R(){return(0,e.jsx)("div",{className:"d-flex flex-column gap-7 gap-lg-10",children:(0,e.jsxs)(t.Zb,{flush:!0,className:"py-4",title:"SEO",bodyClassName:"pt-0",children:[(0,e.jsx)(t.l0.Item,{name:["meta","seo","title"],className:"mb-8",label:"\u6807\u9898",help:"\u8BBE\u7F6E\u5143\u6570\u636E\u6807\u9898, \u5EFA\u8BAE\u5173\u952E\u8BCD\u8981\u7B80\u5355, \u51C6\u786E",children:(0,e.jsx)(t.II,{className:"mw-400px"})}),(0,e.jsx)(t.l0.Item,{name:["meta","seo","description"],className:"mb-8",label:"\u63CF\u8FF0",help:"\u8BBE\u7F6E\u5143\u6570\u636E\u63CF\u8FF0, \u4EE5\u63D0\u9AD8\u6392\u540D",children:(0,e.jsx)(t.Bn,{className:"h-300px"})}),(0,e.jsx)(t.l0.Item,{name:["meta","seo","keywords"],label:"\u5173\u952E\u5B57",help:(0,e.jsxs)(e.Fragment,{children:["\u8BBE\u7F6E\u680F\u76EE\u76F8\u5173\u7684\u5173\u952E\u5B57\u5217\u8868\u3002\u901A\u8FC7\u5728\u6BCF\u4E2A\u5173\u952E\u5B57\u4E4B\u95F4\u6DFB\u52A0",(0,e.jsx)("code",{children:","}),"\u6765\u5206\u9694\u5173\u952E\u5B57"]}),children:(0,e.jsx)(l.ZP,{className:"form-control"})})]})})}var _=R,me=u(64219),V=u(16477),I=u(8845);function le(g){var d=g.categoryTreeData,v=(0,I.St)(),o=v.data,c=(o==null?void 0:o.articleStoreTemplates)||[];return(0,e.jsxs)("div",{className:"d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10",children:[(0,e.jsxs)(t.Zb,{flush:!0,className:"py-4",title:"\u7F29\u7565\u56FE",bodyClassName:"text-center pt-0",children:[(0,e.jsx)(t.l0.Item,{name:"image",children:(0,e.jsx)(t.gq.Image,{width:150,height:150,className:"mb-3",space:"orX8kLOV",accept:".png, .jpg, .jpeg",crop:{height:300,zoomable:!1,aspectRatio:1},background:"/assets/media/svg/files/blank-image.svg"})}),(0,e.jsx)("div",{className:"text-muted fs-7",children:"\u8BBE\u7F6E\u680F\u76EE\u7F29\u7565\u56FE\u3002\u4EC5\u63A5\u53D7 *.png\u3001*.jpg \u548C *.jpeg \u683C\u5F0F\u7684\u56FE\u7247"})]}),(0,e.jsx)(t.Zb,{flush:!0,className:"py-4",title:"\u4E0A\u7EA7\u680F\u76EE",children:(0,e.jsxs)(t.Zb.Body,{className:"pt-0",children:[(0,e.jsx)(t.l0.Item,{className:"mb-3",name:"parent",children:(0,e.jsx)(V.Z,{style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:d,placeholder:"\u9009\u62E9\u4E0A\u7EA7\u680F\u76EE, \u9ED8\u8BA4\u6839\u680F\u76EE",treeDefaultExpandAll:!0,allowClear:!0,transitionName:""})}),(0,e.jsx)("div",{className:"text-muted fs-7",children:"\u9009\u62E9\u4E0A\u7EA7\u680F\u76EE,\u672A\u9009\u62E9\u5C06\u6DFB\u52A0\u5230\u6839\u76EE\u5F55"})]})}),(0,e.jsxs)(t.Zb,{flush:!0,className:"py-4",title:"\u5B58\u50A8\u6A21\u677F",bodyClassName:"pt-0",children:[(0,e.jsx)(t.l0.Item,{className:"mb-3",name:"storeTemplate",label:"\u9009\u62E9\u5B58\u50A8\u6A21\u677F",children:(0,e.jsx)(t.ub,{options:c.map(function(m){return{value:m.id,label:m.name}})})}),(0,e.jsx)("div",{className:"text-muted fs-7",children:"\u4ECE\u60A8\u5F53\u524D\u7684\u4E3B\u9898\u4E2D\u5206\u914D\u4E00\u4E2A\u6A21\u677F\u6765\u5B9A\u4E49\u680F\u76EE\u6587\u7AE0\u7684\u663E\u793A\u65B9\u5F0F"})]})]})}var K=le,ee=u(18071),ie=u(25496),X=["meta","page"];function te(g){var d=g.match,v=g.location.state,o=v.rootCategoryId,c=v.categories;console.log("rootCategoryId",o);var m=(0,I.WP)({fetchPolicy:"cache-and-network",variables:{id:d.params.id}}),A=m.data,S=m.loading,$=(0,x.useMemo)(function(){return!c||!c.length?[]:(0,ie.G_)(c.map(function(f){return(0,h.Z)((0,h.Z)({},f),{},{value:f.id,title:f.name})}),{idKey:"id",childrenKey:"children",pidKey:"parent.id",sort:function(j,b){return j.index-b.index}})},[c]),P=(0,I.Qu)(),y=(0,O.Z)(P,2),p=y[0],E=y[1].loading,C=t.l0.useForm(),N=(0,x.useCallback)((0,F.Z)((0,i.Z)().mark(function f(){var j,b,Z,W,H,T,ne,oe,ae,J,ue,Q,Y,re,q,ce;return(0,i.Z)().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return B.next=2,C.validateFields();case 2:for(W=B.sent,H=W.meta,T=W.page,ne=(0,D.Z)(W,X),oe={seo_title:"single_line_text_field",seo_description:"multi_line_text_field",seo_keywords:"list.single_line_text_field"},ae=[],J=0,ue=Object.keys(H);J<ue.length;J++)for(Q=ue[J],Y=0,re=Object.keys(H[Q]);Y<re.length;Y++)q=re[Y],ae.push({namespace:Q,key:q,value:H[Q][q],type:oe[Q+"_"+q]});return ce=(0,h.Z)((0,h.Z)({},ne),{},{page:{enabled:T.enabled,path:(j=T.route)===null||j===void 0?void 0:j.path,template:(b=T.component)===null||b===void 0?void 0:b.template,blocks:(Z=T.component)===null||Z===void 0?void 0:Z.blocks},metafields:ae}),B.next=12,p({variables:{id:d.params.id,input:ce}});case 12:t.FN.success("\u680F\u76EE \u201C".concat(ne.name,"\u201D \u4FEE\u6539\u6210\u529F"),2e3,{placement:"bottom-start",progressBar:!0});case 13:case"end":return B.stop()}},f)})),[C,d.params.id,p]),n=A==null?void 0:A.category;(0,x.useEffect)(function(){var f,j,b,Z;!n||C.setFieldsValue((0,h.Z)((0,h.Z)({},n),{},{storeTemplate:(f=n.storeTemplate)===null||f===void 0?void 0:f.id,image:(j=n.image)===null||j===void 0?void 0:j.id,parent:((b=n.parent)===null||b===void 0?void 0:b.id)==o?null:(Z=n.parent)===null||Z===void 0?void 0:Z.id}))},[n,C,o]);var a=(0,x.useCallback)(function(){history.back()},[]);return(0,e.jsx)(ee.vs,{loading:S,header:{title:"\u7F16\u8F91\u680F\u76EE"},children:(0,e.jsxs)(t.l0,{form:C,className:"form d-flex flex-column flex-lg-row",children:[(0,e.jsx)(K,{categoryTreeData:$}),(0,e.jsxs)("div",{className:"d-flex flex-column flex-row-fluid gap-7 gap-lg-10",children:[(0,e.jsxs)(t.mQ,{defaultActiveKey:"general",renderContainer:!1,className:"border-0 fs-4 fw-bold mb-n2 nav-line-tabs-2x",children:[(0,e.jsx)(t.mQ.TabPane,{tab:"\u57FA\u672C\u4FE1\u606F",forceRender:!0,children:(0,e.jsx)(G,{})},"general"),(0,e.jsx)(t.mQ.TabPane,{tab:"\u9AD8\u7EA7\u8BBE\u7F6E",forceRender:!0,children:(0,e.jsx)(U,{category:n})},"advanced"),(0,e.jsx)(t.mQ.TabPane,{tab:"\u5143\u6570\u636E",forceRender:!0,children:(0,e.jsx)(_,{})},"metadata")]}),(0,e.jsx)(s.Z,{style:{zIndex:9},offsetBottom:16,children:(0,e.jsxs)("div",{className:k()("d-flex bg-body-color p-5 mx-4 tw-rounded-2xl justify-content-end"),children:[(0,e.jsx)(t.zx,{onClick:a,variant:"light",className:"me-5",children:"\u53D6\u6D88"}),(0,e.jsx)(t.zx,{onClick:N,loading:E,children:"\u4FDD\u5B58\u66F4\u6539"})]})})]})]})})}var se=te}}]);
