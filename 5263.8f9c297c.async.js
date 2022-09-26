(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[5263],{8845:function(ee,k,n){"use strict";n.d(k,{Se:function(){return q},WP:function(){return x},V7:function(){return E},St:function(){return G},gk:function(){return V},e7:function(){return B},uw:function(){return N},eU:function(){return Z},nT:function(){return M},Qu:function(){return D},Mq:function(){return f}});var s=n(11849),u=n(20310),o=n(49704),v=n(64718),c=n(21919),O,z,L,T,F,Q,H,S,U,j,g,l={},R=(0,o.Ps)(O||(O=(0,u.Z)([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function G(t){var a=(0,s.Z)((0,s.Z)({},l),t);return v.a(R,a)}function r(t){var a=_objectSpread(_objectSpread({},l),t);return Apollo.useLazyQuery(R,a)}var e=(0,o.Ps)(z||(z=(0,u.Z)([`
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
    `])));function V(t){var a=(0,s.Z)((0,s.Z)({},l),t);return v.a(e,a)}function X(t){var a=_objectSpread(_objectSpread({},l),t);return Apollo.useLazyQuery(e,a)}var A=(0,o.Ps)(L||(L=(0,u.Z)([`
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
    `])));function q(t){var a=(0,s.Z)((0,s.Z)({},l),t);return v.a(A,a)}function h(t){var a=_objectSpread(_objectSpread({},l),t);return Apollo.useLazyQuery(A,a)}var m=(0,o.Ps)(T||(T=(0,u.Z)([`
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
    `])));function x(t){var a=(0,s.Z)((0,s.Z)({},l),t);return v.a(m,a)}function C(t){var a=_objectSpread(_objectSpread({},l),t);return Apollo.useLazyQuery(m,a)}var I=(0,o.Ps)(F||(F=(0,u.Z)([`
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
    `])));function N(t){var a=(0,s.Z)((0,s.Z)({},l),t);return c.D(I,a)}var $=(0,o.Ps)(Q||(Q=(0,u.Z)([`
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
    `])));function f(t){var a=(0,s.Z)((0,s.Z)({},l),t);return c.D($,a)}var b=(0,o.Ps)(H||(H=(0,u.Z)([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function Z(t){var a=(0,s.Z)((0,s.Z)({},l),t);return c.D(b,a)}var p=(0,o.Ps)(S||(S=(0,u.Z)([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function M(t){var a=(0,s.Z)((0,s.Z)({},l),t);return c.D(p,a)}var d=(0,o.Ps)(U||(U=(0,u.Z)([`
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
    `])));function E(t){var a=(0,s.Z)((0,s.Z)({},l),t);return v.a(d,a)}function W(t){var a=_objectSpread(_objectSpread({},l),t);return Apollo.useLazyQuery(d,a)}var Y=(0,o.Ps)(j||(j=(0,u.Z)([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function B(t){var a=(0,s.Z)((0,s.Z)({},l),t);return c.D(Y,a)}var w=(0,o.Ps)(g||(g=(0,u.Z)([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function D(t){var a=(0,s.Z)((0,s.Z)({},l),t);return c.D(w,a)}},33442:function(ee,k,n){"use strict";var s=n(39428),u=n(11849),o=n(3182),v=n(67294),c=n(17818),O=n(25496);function z(L,T){var F=(0,v.useRef)(!1),Q=(0,v.useCallback)((0,o.Z)((0,s.Z)().mark(function H(){var S,U;return(0,s.Z)().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return S=L.width,g.next=3,c.u_.confirm((0,u.Z)((0,u.Z)({},L),{},{width:S,okText:"\u5220 \u9664",okClassName:"btn-danger",allowOutsideClick:function(){return!F.current},preConfirm:function(){var l=(0,o.Z)((0,s.Z)().mark(function G(){var r,e,V;return(0,s.Z)().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return F.current=!0,A.prev=1,r=document.querySelector(".swal2-confirm"),r.textContent="\u5220\u9664\u4E2D...",e=document.createElement("span"),e.classList.add("spinner-border-sm","ms-2","spinner-border","align-middle"),r.appendChild(e),A.next=9,(0,O.gw)(T(),350);case 9:V=A.sent,console.log(V);case 11:return A.prev=11,F.current=!1,A.finish(11);case 14:case"end":return A.stop()}},G,null,[[1,,11,14]])}));function R(){return l.apply(this,arguments)}return R}()}));case 3:if(U=g.sent,U.isConfirmed){g.next=6;break}return g.abrupt("return",!1);case 6:return c.FN.success("\u5220\u9664\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),g.abrupt("return",!0);case 8:case"end":return g.stop()}},H)})),[T,L]);return[Q]}k.Z=z},45263:function(ee,k,n){"use strict";n.r(k);var s=n(93224),u=n(39428),o=n(3182),v=n(2824),c=n(67294),O=n(28865),z=n(94184),L=n.n(z),T=n(19755),F=n.n(T),Q=n(30381),H=n.n(Q),S=n(80129),U=n.n(S),j=n(73727),g=n(7020),l=n(8845),R=n(33442),G=n(18071),r=n(17818),e=n(85893),V=["q"];window._MoreshowOrhide=function(h){return F()(h).parent().siblings().show(),F()(h).parent().remove(),!1};function X(h){var m=h.selectedRows,x=h.refetch,C=(0,l.nT)(),I=(0,v.Z)(C,1),N=I[0],$=(0,R.Z)({title:(0,e.jsxs)(e.Fragment,{children:["\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8FD9",m.length>1&&(0,e.jsxs)(e.Fragment,{children:["\u201C",(0,e.jsx)("strong",{children:m.length}),"\u201C`"]}),"\u7BC7\u6587\u7AE0\u5417\uFF1F"]}),content:m.length>1?'\u60A8\u5373\u5C06\u5220\u9664\u4EE5\u4E0B\u6587\u7AE0:<ul className="py-2">'.concat(m.map(function(p,M){return"<li ".concat(M>=4?'style="display: none !important;"':"",' className="d-flex align-items-center text-gray-800 mb-1 fs-6"><span className="bullet bullet-dot me-2"></span><strong>').concat(p.title,"</strong></li>")}).join(""),`
              <li `).concat(m.length<=4?'style="display: none !important;"':"",' className="d-flex align-items-center text-gray-800 fs-6"><a href="javascript:void(0)" onClick="_MoreshowOrhide(this)">\u66F4\u591A</a></li></ul> '):(0,e.jsxs)(e.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,e.jsx)("strong",{children:m[0].title}),"\u201D\u3002",(0,e.jsx)("br",{}),"\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u9006\u8F6C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u60A8\u786E\u5B9A\u5220\u9664\u5417\uFF1F"]})},(0,o.Z)((0,u.Z)().mark(function p(){return(0,u.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,N({variables:{ids:m.map(function(E){return E.id})}});case 2:case"end":return d.stop()}},p)}))),f=(0,v.Z)($,1),b=f[0],Z=(0,c.useCallback)((0,o.Z)((0,u.Z)().mark(function p(){return(0,u.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,b();case 2:return d.next=4,x();case 4:case"end":return d.stop()}},p)})),[b,x]);return(0,e.jsx)(r.zx,{color:"danger",onClick:Z,variant:!1,size:"sm",className:"px-4 py-2",children:"\u6279\u91CF\u5220\u9664"})}function A(h){var m=h.data,x=h.refetch,C=h.baseUrl,I=(0,c.useState)(!1),N=(0,v.Z)(I,2),$=N[0],f=N[1],b=(0,l.eU)(),Z=(0,v.Z)(b,1),p=Z[0],M=(0,R.Z)({title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u7BC7\u6587\u7AE0\u5417\uFF1F",content:(0,e.jsxs)(e.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,e.jsx)("strong",{children:m.title}),"\u201D\u3002\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u9006\u8F6C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u60A8\u786E\u5B9A\u5220\u9664\u5417\uFF1F"]})},(0,o.Z)((0,u.Z)().mark(function B(){return(0,u.Z)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,p({variables:{id:m.id}});case 2:case"end":return D.stop()}},B)}))),d=(0,v.Z)(M,1),E=d[0],W=(0,c.useCallback)((0,o.Z)((0,u.Z)().mark(function B(){return(0,u.Z)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,E();case 2:return D.next=4,x();case 4:case"end":return D.stop()}},B)})),[E,x]),Y=(0,c.useCallback)(function(B){var w=B.key;w=="edit"?g.m8.push("".concat(C,"/articles/").concat(m.id)):w=="delete"&&(f(!1),W())},[]);return(0,e.jsx)(r.Lt,{overlay:(0,e.jsxs)(r.v2,{onClick:Y,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,e.jsx)(r.v2.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,e.jsx)(r.v2.Item,{className:"px-3",children:"\u53D1\u5E03"},"publish"),(0,e.jsx)(r.v2.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",onVisibleChange:f,visible:$,children:(0,e.jsxs)(r.zx,{variant:"light",activeColor:"light-primary",children:["\u64CD \u4F5C",(0,e.jsx)(O.ZP,{className:"ms-2 svg-icon-5 m-0",name:"Duotune/arr072"})]})})}function q(h){var m,x,C=h.match.params.cid,I=h.location.state,N=I.rootCategoryId,$=I.categories,f=I.baseUrl,b=(0,c.useMemo)(function(){var _=h.location.query,y=_.q,i=(0,s.Z)(_,V);return i.filter||(i.filter={}),y&&(i.filter={name_contains:y}),i.filter.category={id:C,subColumns:!0},i},[h.location,C]),Z=(0,l.gk)({variables:b,fetchPolicy:"cache-and-network"}),p=Z.data,M=Z.refetch,d=Z.loading,E=Z.previousData,W=(0,c.useMemo)(function(){return d?(E==null?void 0:E.articles)||{edges:[],total:0,current:1}:(p==null?void 0:p.articles)||{edges:[],total:0,current:1}},[p==null?void 0:p.articles,d,E==null?void 0:E.articles]),Y=(0,c.useMemo)(function(){return W.edges.map(function(_){return _.node})},[W.edges]),B=(0,c.useCallback)(function(_){console.log(_)},[]),w=(0,c.useCallback)(function(_,y,i){var K,P={};if((K=b.filter)!==null&&K!==void 0&&K.name_contains){var J;P.q=(J=b.filter)===null||J===void 0?void 0:J.name_contains}i&&(P.orderBy=i.field+"_"+(i.order=="ascend"?"asc":"desc")),P.page=_.current,g.m8.replace(location.pathname+"?"+U().stringify(P))},[(m=b.filter)===null||m===void 0?void 0:m.name_contains]),D=(0,c.useState)([]),t=(0,v.Z)(D,2),a=t[0],ne=t[1],te=(0,c.useCallback)(function(_,y){ne(y)},[ne]),ae=(0,c.useMemo)(function(){return function(_,y){return(0,e.jsx)(X,{selectedRows:y,refetch:M})}},[M]);return(0,e.jsx)(G.vs,{loading:d,header:{title:(x=$.find(function(_){return _.id==C}))===null||x===void 0?void 0:x.name},children:(0,e.jsx)("div",{className:"tab-content",children:(0,e.jsxs)(r.Zb,{flush:!0,headerClassName:"mt-5",children:[(0,e.jsxs)(r.Zb.Header,{className:"pt-8",children:[(0,e.jsx)(r.Zb.Title,{className:"flex-column",children:(0,e.jsx)(r.II.Search,{solid:!0,className:"w-250px",placeholder:"\u641C\u7D22\u6587\u7AE0",onSearch:B})}),(0,e.jsx)(r.Zb.Toolbar,{children:(0,e.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,e.jsx)(r.Lt,{overlay:(0,e.jsxs)(r.v2,{className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,e.jsx)(r.v2.Item,{className:"px-3",children:"\u6700\u65B0"},"edit"),(0,e.jsx)(r.v2.Item,{className:"px-3",children:"\u6700\u665A"},"publish"),(0,e.jsx)(r.v2.Item,{className:"px-3 actions-delete",children:"\u6700\u8FD1\u66F4\u65B0\u7684"},"delete"),(0,e.jsx)(r.v2.Item,{className:"px-3 actions-delete",children:"\u70B9\u51FB\u91CF"},"delete")]}),placement:"bottomLeft",children:(0,e.jsx)(r.zx,{variant:"white",className:"me-3",children:"\u6392\u5E8F: \u6700\u65B0"})}),(0,e.jsx)(r.zx,{as:j.Link,variant:"primary",className:"me-3",icon:(0,e.jsx)(O.ZP,{className:"svg-icon-2",name:"Duotune/arr075"}),to:"".concat(f,"/cms/categories/").concat(C,"/articles/new"),children:"\u65B0\u5EFA\u6587\u7AE0"})]})})]}),(0,e.jsx)(r.Zb.Body,{className:"pt-0",children:W.total?(0,e.jsx)(r.iA,{rowKey:"id",rowSelection:{type:"checkbox",onChange:te,selectedRowKeys:(a||[]).map(function(_){return _.id}),renderTitle:function(y){return(0,e.jsxs)(e.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,e.jsx)("span",{className:"mx-2",children:y}),"\u7BC7\u6587\u7AE0"]})},toolbar:ae},pagination:W,dataSource:Y,onChange:w,rowHeight:136,columns:[{title:"\u6807\u9898",dataIndex:"title",key:"title",render:function(y,i){var K;return(0,e.jsxs)("div",{className:"d-flex flex-row tw-truncate overflow-hidden",children:[(0,e.jsxs)("div",{className:"d-flex flex-column align-items-start tw-truncate overflow-hidden",children:[(0,e.jsxs)("div",{className:"meta-container no-selecto-drag",children:[(0,e.jsx)(j.Link,{to:"/xx/12",className:"user-message",children:"\u6797\u66AE\u6625"}),(0,e.jsx)("span",{className:"created-at",children:H()(i.createdAt).fromNow()}),(0,e.jsx)("div",{className:"category_list",children:i.categories.filter(function(P){return P.id!==N}).map(function(P){return(0,e.jsx)(j.Link,{to:"".concat(f,"/cms/categories/").concat(P.id,"/articles"),className:"tag",children:P.name},P.id)})})]}),(0,e.jsx)(j.Link,{onClick:function(J){return J.stopPropagation()},to:"".concat(f,"/cms/categories/").concat(C,"/articles/").concat(i.id),className:"mt-2 mb-2 text-gray-800 no-selecto-drag fs-4 text-hover-primary mb-1",children:y}),(0,e.jsx)("div",{className:L()("summary mb-2 w-100 tw-text-ellipsis tw-truncate w-100",{"pe-8":!i.image}),children:(0,e.jsx)("span",{className:"text-muted fs-base no-selecto-drag",children:i.summary||"\u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9..."})}),(0,e.jsxs)("div",{className:"fs-base",children:[(0,e.jsxs)(j.Link,{className:"text-muted no-selecto-drag text-hover-primary me-8",to:"".concat(f,"/cms/categories/").concat(C,"/articles/").concat(i.id),children:[(0,e.jsx)(O.ZP,{className:"svg-icon-4 me-2",name:"Bootstrap/eye"}),"41W"]}),(0,e.jsxs)(j.Link,{className:"text-muted no-selecto-drag text-hover-primary me-8",to:"".concat(f,"/cms/categories/").concat(C,"/articles/").concat(i.id,"#comments"),children:[(0,e.jsx)(O.ZP,{className:"svg-icon-6 me-2",name:"Bootstrap/chat"}),"41W"]})]})]}),i.image&&(0,e.jsx)("div",{className:"px-8 d-flex align-items-end",children:(0,e.jsx)(r.mN,{className:"article-image",src:"https://api.asany.cn"+"/preview/".concat((K=i.image)===null||K===void 0?void 0:K.id)})})]})}},{title:"\u72B6\u6001",dataIndex:"status",width:120,render:function(y){var i={DRAFT:{title:"\u8349\u7A3F",lightStyle:"danger"},PUBLISHED:{title:"\u5DF2\u53D1\u5E03"},SCHEDULED:{title:"\u8BA1\u5212",lightStyle:"primary"}};return(0,e.jsx)(r.Ct,{lightStyle:i[y].lightStyle,children:i[y].title})}},{title:"\u64CD\u4F5C",key:"action",width:140,render:function(y,i){return(0,e.jsx)(A,{baseUrl:"".concat(f,"/cms/categories/").concat(C),data:i,refetch:M})}}]}):(0,e.jsxs)(r.HY,{title:"\u65B0\u589E\u6587\u7AE0",description:"\u8BE5\u680F\u76EE\u8FD8\u662F\u7A7A\u7684\uFF0C\u6CA1\u6709\u4EFB\u4F55\u6587\u7AE0",image:"/assets/media/illustrations/sigma-1/4.png",children:[(0,e.jsx)(r.zx,{as:j.Link,className:"me-2",variant:"light",to:"".concat(f,"/settings"),children:"\u67E5\u770B\u680F\u76EE\u4FE1\u606F"}),(0,e.jsx)(r.zx,{as:j.Link,variant:"primary",to:"".concat(f,"/cms/categories/").concat(C,"/articles/new"),children:"\u65B0\u5EFA\u6587\u7AE0"})]})})]})})})}k.default=q}}]);
