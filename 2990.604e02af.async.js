"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2990],{42755:function(ge,re,r){r.d(re,{Se:function(){return f},WP:function(){return d},vz:function(){return pe},V7:function(){return D},St:function(){return g},gk:function(){return C},e7:function(){return w},uw:function(){return Q},eU:function(){return B},nT:function(){return m},Qu:function(){return ce},Mq:function(){return S}});var c=r(97857),u=r.n(c),ue=r(68400),h=r.n(ue),y=r(75063),R=r(37887),T=r(50319),oe,X,$,I,k,le,ie,U,J,a,Y,e,P,l={},q=(0,y.Ps)(oe||(oe=h()([`
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
    `]))),i=(0,y.Ps)(X||(X=h()([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function g(n){var t=u()(u()({},l),n);return R.a(i,t)}function x(n){var t=_objectSpread(_objectSpread({},l),n);return Apollo.useLazyQuery(i,t)}function Z(n){var t=_objectSpread(_objectSpread({},l),n);return Apollo.useSuspenseQuery(i,t)}var E=(0,y.Ps)($||($=h()([`
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
    `])));function C(n){var t=u()(u()({},l),n);return R.a(E,t)}function V(n){var t=_objectSpread(_objectSpread({},l),n);return Apollo.useLazyQuery(E,t)}function ve(n){var t=_objectSpread(_objectSpread({},l),n);return Apollo.useSuspenseQuery(E,t)}var _=(0,y.Ps)(I||(I=h()([`
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
    `])));function pe(n){var t=u()(u()({},l),n);return R.a(_,t)}function W(n){var t=_objectSpread(_objectSpread({},l),n);return Apollo.useLazyQuery(_,t)}function F(n){var t=_objectSpread(_objectSpread({},l),n);return Apollo.useSuspenseQuery(_,t)}var p=(0,y.Ps)(k||(k=h()([`
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
    `])));function f(n){var t=u()(u()({},l),n);return R.a(p,t)}function b(n){var t=_objectSpread(_objectSpread({},l),n);return Apollo.useLazyQuery(p,t)}function G(n){var t=_objectSpread(_objectSpread({},l),n);return Apollo.useSuspenseQuery(p,t)}var j=(0,y.Ps)(le||(le=h()([`
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
    `])));function d(n){var t=u()(u()({},l),n);return R.a(j,t)}function ee(n){var t=_objectSpread(_objectSpread({},l),n);return Apollo.useLazyQuery(j,t)}function se(n){var t=_objectSpread(_objectSpread({},l),n);return Apollo.useSuspenseQuery(j,t)}var te=(0,y.Ps)(ie||(ie=h()([`
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
    `,""])),q);function Q(n){var t=u()(u()({},l),n);return T.D(te,t)}var M=(0,y.Ps)(U||(U=h()([`
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
    `,""])),q);function S(n){var t=u()(u()({},l),n);return T.D(M,t)}var H=(0,y.Ps)(J||(J=h()([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function B(n){var t=u()(u()({},l),n);return T.D(H,t)}var K=(0,y.Ps)(a||(a=h()([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function m(n){var t=u()(u()({},l),n);return T.D(K,t)}var A=(0,y.Ps)(Y||(Y=h()([`
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
    `,""])),q);function D(n){var t=u()(u()({},l),n);return R.a(A,t)}function z(n){var t=_objectSpread(_objectSpread({},l),n);return Apollo.useLazyQuery(A,t)}function L(n){var t=_objectSpread(_objectSpread({},l),n);return Apollo.useSuspenseQuery(A,t)}var O=(0,y.Ps)(e||(e=h()([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function w(n){var t=u()(u()({},l),n);return T.D(O,t)}var ne=(0,y.Ps)(P||(P=h()([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function ce(n){var t=u()(u()({},l),n);return T.D(ne,t)}},92990:function(ge,re,r){r.r(re),r.d(re,{default:function(){return W}});var c=r(15009),u=r.n(c),ue=r(13769),h=r.n(ue),y=r(99289),R=r.n(y),T=r(5574),oe=r.n(T),X=r(97857),$=r.n(X),I=r(62435),k=r(96974),le=r(64218),ie=r(93967),U=r.n(ie),J=r(73588),a=r(79817),Y=r(12708),e=r(86074);function P(F){var p,f,b=(0,I.useCallback)(function(){var d;window.open("//localhost:8001/designer?id="+((d=F.category)===null||d===void 0||(d=d.page)===null||d===void 0||(d=d.component)===null||d===void 0?void 0:d.id),"_blank")},[(p=F.category)===null||p===void 0||(p=p.page)===null||p===void 0||(p=p.component)===null||p===void 0?void 0:p.id]),G=(0,I.useCallback)(function(d){console.log(d.target.checked)},[]),j=(f=F.category)===null||f===void 0||(f=f.page)===null||f===void 0||(f=f.component)===null||f===void 0?void 0:f.template;return(0,e.jsxs)("div",{className:"d-flex flex-column gap-7 gap-lg-10",children:[(0,e.jsxs)(a.Card,{flush:!0,className:"py-4",title:"\u66F4\u591A\u529F\u80FD",bodyClassName:"pt-0",children:[(0,e.jsx)(a.Form.Item,{valuePropName:"checked",className:"mb-8",name:"xx",children:(0,e.jsx)(a.Checkbox,{value:"1",solid:!0,label:"\u542F\u7528\u8BC4\u8BBA"})}),(0,e.jsx)(a.Form.Item,{valuePropName:"checked",className:"mb-8",name:"x2",children:(0,e.jsx)(a.Checkbox,{value:"1",solid:!0,label:"\u5141\u8BB8\u6536\u85CF"})}),(0,e.jsx)(a.Form.Item,{valuePropName:"checked",className:"mb-8",name:["page","enabled"],children:(0,e.jsx)(a.Checkbox,{onChange:G,value:"1",solid:!0,className:"align-items-start",inputClassName:"mt-1",children:(0,e.jsxs)("div",{className:"d-flex flex-column",children:[(0,e.jsx)("div",{children:"\u81EA\u5B9A\u4E49\u680F\u76EE\u9875"}),(0,e.jsx)("div",{className:"form-item-help",children:"\u914D\u7F6E\u5355\u72EC\u7684\u5C55\u793A\u9875\u9762"})]})})})]}),(0,e.jsx)(a.Form.Item,{dependencies:[["page","enabled"]],noStyle:!0,children:function(ee){var se=ee.getFieldValue(["page","enabled"]);return se?(0,e.jsxs)(a.Card,{flush:!0,className:"py-4",title:"\u81EA\u5B9A\u4E49\u680F\u76EE\u9875",bodyClassName:"pt-0",children:[(0,e.jsx)(a.Form.Item,{className:"mb-6 mw-400px",name:["page","route","path"],label:"\u8BBF\u95EE\u5730\u5740",children:(0,e.jsx)(a.Input,{})}),(0,e.jsx)(a.Form.Item,{className:"mb-6",name:["page","component","template"],label:"\u9875\u9762\u6A21\u7248",children:(0,e.jsx)(a.Select2,{width:400,options:[{value:"cn.asany.ui.theme.canvas.Page",label:"\u666E\u901A\u680F\u76EE\u9875"},{value:"cn.asany.ui.theme.canvas.Page1",label:"\u5B9A\u5236\u6A21\u7248"}]})}),(0,e.jsx)(a.Form.Item,{dependencies:[["page","component","template"]],noStyle:!0,children:function(){var Q=ee.getFieldValue(["page","component","template"]),M=!Q||j!==Q;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.Button,{onClick:b,disabled:M,children:"\u53BB\u914D\u7F6E\u9875\u9762"}),M&&(0,e.jsx)("div",{className:"form-item-help",children:"\u5207\u6362\u6A21\u7248\u540E\uFF0C\u9700\u8981\u5148\u4FDD\u5B58"})]})}})]}):(0,e.jsx)(e.Fragment,{})}})]})}var l=P;function q(){return(0,e.jsx)("div",{className:"d-flex flex-column gap-7 gap-lg-10",children:(0,e.jsxs)(a.Card,{flush:!0,className:"py-4",title:"\u901A\u7528",bodyClassName:"pt-0",children:[(0,e.jsx)(a.Form.Item,{className:"mb-8",name:"name",label:"\u540D\u79F0",required:!0,help:"\u540D\u79F0\u662F\u5FC5\u9700\u7684\uFF0C\u5EFA\u8BAE\u662F\u552F\u4E00\u7684",rules:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(a.Input,{placeholder:"\u680F\u76EE\u540D\u79F0",className:"mw-400px"})}),(0,e.jsx)(a.Form.Item,{name:"description",label:"\u63CF\u8FF0",help:"\u4E3A\u680F\u76EE\u8BBE\u7F6E\u63CF\u8FF0\u4EE5\u83B7\u5F97\u66F4\u597D\u7684\u53EF\u89C1\u6027\u3002",children:(0,e.jsx)(a.QuillEditor,{className:"h-300px"})})]})})}var i=q,g=r(5618);function x(){return(0,e.jsx)("div",{className:"d-flex flex-column gap-7 gap-lg-10",children:(0,e.jsxs)(a.Card,{flush:!0,className:"py-4",title:"SEO",bodyClassName:"pt-0",children:[(0,e.jsx)(a.Form.Item,{name:["meta","seo","title"],className:"mb-8",label:"\u6807\u9898",help:"\u8BBE\u7F6E\u5143\u6570\u636E\u6807\u9898, \u5EFA\u8BAE\u5173\u952E\u8BCD\u8981\u7B80\u5355, \u51C6\u786E",children:(0,e.jsx)(a.Input,{className:"mw-400px"})}),(0,e.jsx)(a.Form.Item,{name:["meta","seo","description"],className:"mb-8",label:"\u63CF\u8FF0",help:"\u8BBE\u7F6E\u5143\u6570\u636E\u63CF\u8FF0, \u4EE5\u63D0\u9AD8\u6392\u540D",children:(0,e.jsx)(a.QuillEditor,{className:"h-300px"})}),(0,e.jsx)(a.Form.Item,{name:["meta","seo","keywords"],label:"\u5173\u952E\u5B57",help:(0,e.jsxs)(e.Fragment,{children:["\u8BBE\u7F6E\u680F\u76EE\u76F8\u5173\u7684\u5173\u952E\u5B57\u5217\u8868\u3002\u901A\u8FC7\u5728\u6BCF\u4E2A\u5173\u952E\u5B57\u4E4B\u95F4\u6DFB\u52A0",(0,e.jsx)("code",{children:","}),"\u6765\u5206\u9694\u5173\u952E\u5B57"]}),children:(0,e.jsx)(g.ZP,{className:"form-control"})})]})})}var Z=x,E=r(69366),C=r(42755);function V(F){var p=F.categoryTreeData,f=(0,C.St)(),b=f.data,G=(b==null?void 0:b.articleStoreTemplates)||[];return(0,e.jsxs)("div",{className:"d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10",children:[(0,e.jsxs)(a.Card,{flush:!0,className:"py-4",title:"\u7F29\u7565\u56FE",bodyClassName:"text-center pt-0",children:[(0,e.jsx)(a.Form.Item,{name:"image",children:(0,e.jsx)(a.Upload.Image,{width:150,height:150,className:"mb-3",space:"orX8kLOV",accept:".png, .jpg, .jpeg",crop:{height:300,zoomable:!1,aspectRatio:1},background:"/assets/media/svg/files/blank-image.svg"})}),(0,e.jsx)("div",{className:"text-muted fs-7",children:"\u8BBE\u7F6E\u680F\u76EE\u7F29\u7565\u56FE\u3002\u4EC5\u63A5\u53D7 *.png\u3001*.jpg \u548C *.jpeg \u683C\u5F0F\u7684\u56FE\u7247"})]}),(0,e.jsx)(a.Card,{flush:!0,className:"py-4",title:"\u4E0A\u7EA7\u680F\u76EE",children:(0,e.jsxs)(a.Card.Body,{className:"pt-0",children:[(0,e.jsx)(a.Form.Item,{className:"mb-3",name:"parent",children:(0,e.jsx)(E.Z,{style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:p,placeholder:"\u9009\u62E9\u4E0A\u7EA7\u680F\u76EE, \u9ED8\u8BA4\u6839\u680F\u76EE",treeDefaultExpandAll:!0,allowClear:!0,transitionName:""})}),(0,e.jsx)("div",{className:"text-muted fs-7",children:"\u9009\u62E9\u4E0A\u7EA7\u680F\u76EE,\u672A\u9009\u62E9\u5C06\u6DFB\u52A0\u5230\u6839\u76EE\u5F55"})]})}),(0,e.jsxs)(a.Card,{flush:!0,className:"py-4",title:"\u5B58\u50A8\u6A21\u677F",bodyClassName:"pt-0",children:[(0,e.jsx)(a.Form.Item,{className:"mb-3",name:"storeTemplate",label:"\u9009\u62E9\u5B58\u50A8\u6A21\u677F",children:(0,e.jsx)(a.Select2,{options:G.map(function(j){return{value:j.id,label:j.name}})})}),(0,e.jsx)("div",{className:"text-muted fs-7",children:"\u4ECE\u60A8\u5F53\u524D\u7684\u4E3B\u9898\u4E2D\u5206\u914D\u4E00\u4E2A\u6A21\u677F\u6765\u5B9A\u4E49\u680F\u76EE\u6587\u7AE0\u7684\u663E\u793A\u65B9\u5F0F"})]})]})}var ve=V,_=["meta","page"];function pe(){var F=(0,k.bx)(),p=F.rootCategoryId,f=F.categories,b=(0,k.UO)();console.log("rootCategoryId",p);var G=(0,C.WP)({fetchPolicy:"cache-and-network",variables:{id:b.id}}),j=G.data,d=G.loading,ee=(0,I.useMemo)(function(){return!f||!f.length?[]:(0,Y.G_)(f.map(function(m){return $()($()({},m),{},{value:m.id,title:m.name})}),{idKey:"id",childrenKey:"children",pidKey:"parent.id",sort:function(A,D){return A.index-D.index}})},[f]),se=(0,C.Qu)(),te=oe()(se,2),Q=te[0],M=te[1].loading,S=a.Form.useForm(),H=(0,I.useCallback)(R()(u()().mark(function m(){var A,D,z,L,O,w,ne,ce,n,t,fe,ae,de,v,s,o;return u()().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return N.next=2,S.validateFields();case 2:for(L=N.sent,O=L.meta,w=L.page,ne=h()(L,_),ce={seo_title:"single_line_text_field",seo_description:"multi_line_text_field",seo_keywords:"list.single_line_text_field"},n=[],t=0,fe=Object.keys(O);t<fe.length;t++)for(ae=fe[t],de=0,v=Object.keys(O[ae]);de<v.length;de++)s=v[de],n.push({namespace:ae,key:s,value:O[ae][s],type:ce[ae+"_"+s]});return o=$()($()({},ne),{},{page:{enabled:w.enabled,path:(A=w.route)===null||A===void 0?void 0:A.path,template:(D=w.component)===null||D===void 0?void 0:D.template,blocks:(z=w.component)===null||z===void 0?void 0:z.blocks},metafields:n}),N.next=12,Q({variables:{id:b.id,input:o}});case 12:a.Toast.success("\u680F\u76EE \u201C".concat(ne.name,"\u201D \u4FEE\u6539\u6210\u529F"),2e3,{placement:"bottom-left",progressBar:!0});case 13:case"end":return N.stop()}},m)})),[S,b.id,Q]),B=j==null?void 0:j.category;(0,I.useEffect)(function(){var m,A,D,z;B&&S.setFieldsValue($()($()({},B),{},{storeTemplate:(m=B.storeTemplate)===null||m===void 0?void 0:m.id,image:(A=B.image)===null||A===void 0?void 0:A.id,parent:((D=B.parent)===null||D===void 0?void 0:D.id)===p?null:(z=B.parent)===null||z===void 0?void 0:z.id}))},[B,S,p]);var K=(0,I.useCallback)(function(){history.back()},[]);return(0,e.jsx)(J.vs,{loading:d,header:{title:"\u7F16\u8F91\u680F\u76EE"},children:(0,e.jsxs)(a.Form,{form:S,className:"form d-flex flex-column flex-lg-row",children:[(0,e.jsx)(ve,{categoryTreeData:ee}),(0,e.jsxs)("div",{className:"d-flex flex-column flex-row-fluid gap-7 gap-lg-10",children:[(0,e.jsxs)(a.Tabs,{defaultActiveKey:"general",contentContainer:!1,type:"line-tabs",className:"border-0 fs-4 fw-bold mb-n2 nav-line-tabs-2x",children:[(0,e.jsx)(a.Tabs.TabPane,{tab:"\u57FA\u672C\u4FE1\u606F",forceRender:!0,children:(0,e.jsx)(i,{})},"general"),(0,e.jsx)(a.Tabs.TabPane,{tab:"\u9AD8\u7EA7\u8BBE\u7F6E",forceRender:!0,children:(0,e.jsx)(l,{category:B})},"advanced"),(0,e.jsx)(a.Tabs.TabPane,{tab:"\u5143\u6570\u636E",forceRender:!0,children:(0,e.jsx)(Z,{})},"metadata")]}),(0,e.jsx)(le.Z,{style:{zIndex:9},offsetBottom:16,children:(0,e.jsxs)("div",{className:U()("d-flex bg-body-color p-5 mx-4 tw-rounded-2xl justify-content-end"),children:[(0,e.jsx)(a.Button,{onClick:K,variant:"light",className:"me-5",children:"\u53D6\u6D88"}),(0,e.jsx)(a.Button,{onClick:H,loading:M,children:"\u4FDD\u5B58\u66F4\u6539"})]})})]})]})})}var W=pe},64218:function(ge,re,r){r.d(re,{Z:function(){return q}});var c=r(62435),u=r(93967),ue=r.n(u),h=r(48555),y=r(98423),R=r(74902),T=r(75164);function oe(i){let g;const x=E=>()=>{g=null,i.apply(void 0,(0,R.Z)(E))},Z=function(){if(g==null){for(var E=arguments.length,C=new Array(E),V=0;V<E;V++)C[V]=arguments[V];g=(0,T.Z)(x(C))}};return Z.cancel=()=>{T.Z.cancel(g),g=null},Z}var X=oe,$=r(53124),I=r(92030);const k=i=>{const{componentCls:g}=i;return{[g]:{position:"fixed",zIndex:i.zIndexPopup}}},le=i=>({zIndexPopup:i.zIndexBase+10});var ie=(0,I.I$)("Affix",k,le);function U(i){return i!==window?i.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function J(i,g,x){if(x!==void 0&&Math.round(g.top)>Math.round(i.top)-x)return x+g.top}function a(i,g,x){if(x!==void 0&&Math.round(g.bottom)<Math.round(i.bottom)+x){const Z=window.innerHeight-g.bottom;return x+Z}}const Y=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function e(){return typeof window!="undefined"?window:null}var P;(function(i){i[i.None=0]="None",i[i.Prepare=1]="Prepare"})(P||(P={}));var q=c.forwardRef((i,g)=>{var x;const{style:Z,offsetTop:E,offsetBottom:C,prefixCls:V,className:ve,rootClassName:_,children:pe,target:W,onChange:F}=i,{getPrefixCls:p,getTargetContainer:f}=c.useContext($.E_),b=p("affix",V),[G,j]=c.useState(!1),[d,ee]=c.useState(),[se,te]=c.useState(),Q=c.useRef(P.None),M=c.useRef(null),S=c.useRef(),H=c.useRef(null),B=c.useRef(null),K=c.useRef(null),m=(x=W!=null?W:f)!==null&&x!==void 0?x:e,A=C===void 0&&E===void 0?0:E,D=()=>{if(Q.current!==P.Prepare||!B.current||!H.current||!m)return;const v=m();if(v){const s={status:P.None},o=U(H.current);if(o.top===0&&o.left===0&&o.width===0&&o.height===0)return;const me=U(v),N=J(o,me,A),he=a(o,me,C);N!==void 0?(s.affixStyle={position:"fixed",top:N,width:o.width,height:o.height},s.placeholderStyle={width:o.width,height:o.height}):he!==void 0&&(s.affixStyle={position:"fixed",bottom:he,width:o.width,height:o.height},s.placeholderStyle={width:o.width,height:o.height}),s.lastAffix=!!s.affixStyle,G!==s.lastAffix&&(F==null||F(s.lastAffix)),Q.current=s.status,ee(s.affixStyle),te(s.placeholderStyle),j(s.lastAffix)}},z=()=>{var v;Q.current=P.Prepare,D()},L=X(()=>{z()}),O=X(()=>{if(m&&d){const v=m();if(v&&H.current){const s=U(v),o=U(H.current),me=J(o,s,A),N=a(o,s,C);if(me!==void 0&&d.top===me||N!==void 0&&d.bottom===N)return}}z()}),w=()=>{const v=m==null?void 0:m();v&&(Y.forEach(s=>{var o;S.current&&((o=M.current)===null||o===void 0||o.removeEventListener(s,S.current)),v==null||v.addEventListener(s,O)}),M.current=v,S.current=O)},ne=()=>{K.current&&(clearTimeout(K.current),K.current=null);const v=m==null?void 0:m();Y.forEach(s=>{var o;v==null||v.removeEventListener(s,O),S.current&&((o=M.current)===null||o===void 0||o.removeEventListener(s,S.current))}),L.cancel(),O.cancel()};c.useImperativeHandle(g,()=>({updatePosition:L})),c.useEffect(()=>(K.current=setTimeout(w),()=>ne()),[]),c.useEffect(()=>{w()},[W,d]),c.useEffect(()=>{L()},[W,E,C]);const[ce,n,t]=ie(b),fe=ue()(_,n,b,t),ae=ue()({[fe]:d});let de=(0,y.Z)(i,["prefixCls","offsetTop","offsetBottom","target","onChange","rootClassName"]);return ce(c.createElement(h.Z,{onResize:L},c.createElement("div",Object.assign({style:Z,className:ve,ref:H},de),d&&c.createElement("div",{style:se,"aria-hidden":"true"}),c.createElement("div",{className:ae,ref:B,style:d},c.createElement(h.Z,{onResize:L},pe)))))})}}]);
