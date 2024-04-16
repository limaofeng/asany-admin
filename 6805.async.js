"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6805],{14336:function(ae,H,a){var Y=a(15009),u=a.n(Y),q=a(97857),h=a.n(q),b=a(99289),O=a.n(b),_=a(62435),P=a(10811),J=a(12708);function A(M,L){return M.replace(/{(\w+)}/g,function(n,R){return L[R]!==void 0?L[R]:n})}function p(M,L){var n=(0,_.useRef)(!1),R=(0,_.useCallback)(function(){var w=O()(u()().mark(function e(l){var Q,o,s,$;return u()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return Q=M.width,o=M.title,s=M.content,l&&(typeof o=="string"&&(o=A(o,l)),typeof s=="string"&&(s=A(s,l)),typeof o=="function"&&(o=o(l)),typeof s=="function"&&(s=s(l))),E.next=5,P.Modal.confirm(h()(h()({},M),{},{title:o,content:s,width:Q,okText:"\u5220 \u9664",okClassName:"btn-danger",allowOutsideClick:function(){return!n.current},preConfirm:function(){var ee=O()(u()().mark(function Z(){var f,S,B;return u()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return n.current=!0,m.prev=1,f=document.querySelector(".swal2-confirm"),f.textContent="\u5220\u9664\u4E2D...",S=document.createElement("span"),S.classList.add("spinner-border-sm","ms-2","spinner-border","align-middle"),f.appendChild(S),m.next=9,(0,J.gw)(L(l),350);case 9:B=m.sent,console.log(B);case 11:return m.prev=11,n.current=!1,m.finish(11);case 14:case"end":return m.stop()}},Z,null,[[1,,11,14]])}));function X(){return ee.apply(this,arguments)}return X}()}));case 5:if($=E.sent,$.isConfirmed){E.next=8;break}return E.abrupt("return",!1);case 8:return P.Toast.success("\u5220\u9664\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),E.abrupt("return",!0);case 10:case"end":return E.stop()}},e)}));return function(e){return w.apply(this,arguments)}}(),[L,M]);return[R]}H.Z=p},42755:function(ae,H,a){a.d(H,{Se:function(){return i},WP:function(){return c},vz:function(){return m},V7:function(){return re},St:function(){return E},gk:function(){return f},e7:function(){return se},uw:function(){return T},eU:function(){return C},nT:function(){return W},Qu:function(){return le},Mq:function(){return te}});var Y=a(97857),u=a.n(Y),q=a(68400),h=a.n(q),b=a(75063),O=a(37887),_=a(50319),P,J,A,p,M,L,n,R,w,e,l,Q,o,s={},$=(0,b.Ps)(P||(P=h()([`
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
    `]))),K=(0,b.Ps)(J||(J=h()([`
    query articleStoreTemplates {
  articleStoreTemplates {
    id
    name
  }
}
    `])));function E(t){var r=u()(u()({},s),t);return O.a(K,r)}function ee(t){var r=_objectSpread(_objectSpread({},s),t);return Apollo.useLazyQuery(K,r)}function X(t){var r=_objectSpread(_objectSpread({},s),t);return Apollo.useSuspenseQuery(K,r)}var Z=(0,b.Ps)(A||(A=h()([`
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
    `])));function f(t){var r=u()(u()({},s),t);return O.a(Z,r)}function S(t){var r=_objectSpread(_objectSpread({},s),t);return Apollo.useLazyQuery(Z,r)}function B(t){var r=_objectSpread(_objectSpread({},s),t);return Apollo.useSuspenseQuery(Z,r)}var y=(0,b.Ps)(p||(p=h()([`
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
    `])));function m(t){var r=u()(u()({},s),t);return O.a(y,r)}function g(t){var r=_objectSpread(_objectSpread({},s),t);return Apollo.useLazyQuery(y,r)}function D(t){var r=_objectSpread(_objectSpread({},s),t);return Apollo.useSuspenseQuery(y,r)}var x=(0,b.Ps)(M||(M=h()([`
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
    `])));function i(t){var r=u()(u()({},s),t);return O.a(x,r)}function j(t){var r=_objectSpread(_objectSpread({},s),t);return Apollo.useLazyQuery(x,r)}function z(t){var r=_objectSpread(_objectSpread({},s),t);return Apollo.useSuspenseQuery(x,r)}var F=(0,b.Ps)(L||(L=h()([`
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
    `])));function c(t){var r=u()(u()({},s),t);return O.a(F,r)}function V(t){var r=_objectSpread(_objectSpread({},s),t);return Apollo.useLazyQuery(F,r)}function N(t){var r=_objectSpread(_objectSpread({},s),t);return Apollo.useSuspenseQuery(F,r)}var ne=(0,b.Ps)(n||(n=h()([`
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
    `,""])),$);function T(t){var r=u()(u()({},s),t);return _.D(ne,r)}var U=(0,b.Ps)(R||(R=h()([`
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
    `,""])),$);function te(t){var r=u()(u()({},s),t);return _.D(U,r)}var I=(0,b.Ps)(w||(w=h()([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function C(t){var r=u()(u()({},s),t);return _.D(I,r)}var d=(0,b.Ps)(e||(e=h()([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function W(t){var r=u()(u()({},s),t);return _.D(d,r)}var v=(0,b.Ps)(l||(l=h()([`
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
    `,""])),$);function re(t){var r=u()(u()({},s),t);return O.a(v,r)}function oe(t){var r=_objectSpread(_objectSpread({},s),t);return Apollo.useLazyQuery(v,r)}function ce(t){var r=_objectSpread(_objectSpread({},s),t);return Apollo.useSuspenseQuery(v,r)}var ue=(0,b.Ps)(Q||(Q=h()([`
    mutation createArticleCategory($input: ArticleCategoryCreateInput!) {
  createArticleCategory(input: $input) {
    id
  }
}
    `])));function se(t){var r=u()(u()({},s),t);return _.D(ue,r)}var ie=(0,b.Ps)(o||(o=h()([`
    mutation updateArticleCategory($id: ID!, $input: ArticleCategoryUpdateInput!) {
  updateArticleCategory(id: $id, input: $input) {
    id
  }
}
    `])));function le(t){var r=u()(u()({},s),t);return _.D(ie,r)}},97294:function(ae,H,a){var Y=a(97857),u=a.n(Y),q=a(5574),h=a.n(q),b=a(52677),O=a.n(b),_=a(62435),P=a(59197),J=a(93967),A=a.n(J),p=a(10811),M=a(8606),L=a(12708),n=a(86074),R=function(l){return l!=null&&l.url?l.url:O()(l==null?void 0:l.image)==="object"?"https://api.asany.cn"+"/preview/".concat(l.image.id):typeof(l==null?void 0:l.image)=="string"?"https://api.asany.cn"+"/preview/".concat(l.image):""};function w(e){var l=e.value,Q=e.onChange,o=(0,_.useRef)({value:[],visible:!1}),s=(0,_.useReducer)(function(i){return i+1},0),$=h()(s,2),K=$[1];(0,L.KW)(function(){console.log("value",l),o.current.value=(l||[]).map(function(i){return{id:i.id,title:i.title,description:i.description,image:i.image,url:i.url,data_state:"edit"}}),K()},[l]);var E=(0,_.useCallback)(function(i){console.log("handleChange",i),Q&&Q(i)},[]),ee=(0,_.useCallback)(function(i){o.current.value=i.map(function(j){return{id:j.id,title:j.title,description:j.description,image:j.image,url:j.url,data_state:j.data_state}}),E(o.current.value)},[]),X=(0,_.useCallback)(function(i){o.current.visible=i,K()},[]),Z=(0,_.useCallback)(function(i){i.preventDefault(),i.stopPropagation(),X(!0)},[]),f=(0,_.useCallback)(function(i){o.current.value.push({id:(0,M.uuid)(),title:"",description:"",data_state:"new",image:i}),E(o.current.value)},[l]),S=(0,_.useCallback)(function(i){o.current.externalLink=i.target.value,K()},[]),B=(0,_.useCallback)(function(){o.current.value.push({id:(0,M.uuid)(),title:"",description:"",data_state:"new",image:void 0,url:o.current.externalLink}),E(o.current.value),X(!1)},[l]),y=(0,_.useCallback)(function(){X(!1)},[]),m=(0,_.useCallback)(function(i){return function(){o.current.value=o.current.value.filter(function(j){return j.id!==i}),E(o.current.value)}},[]),g=o.current.visible,D=o.current.value,x=o.current.externalLink;return(0,n.jsxs)("div",{className:"article-content-image",children:[(0,n.jsx)(p.Modal,{centered:!0,visible:g,dialogClassName:"modal-dialog-small w-500px",onCancel:y,onOk:B,title:"\u8BBE\u7F6E\u94FE\u63A5\u5F15\u7528",closable:!1,headerClassName:"border-bottom-0",bodyClassName:"py-2",footerClassName:"border-top-0",children:(0,n.jsx)(p.Input.TextArea,{value:x,autoSize:{minRows:3,maxRows:5},onChange:S})}),(0,n.jsx)("div",{className:"fv-row mb-6",children:(0,n.jsx)(p.SignleUpload,{accept:{"image/*":[".png",".jpg",".jpeg",".gif",".svg"]},title:(0,n.jsxs)(n.Fragment,{children:["\u5C06\u6587\u4EF6\u62D6\u62FD\u81F3\u6B64\u5904\u3001\u70B9\u51FB\u4E0A\u4F20\uFF0C\u6216",(0,n.jsx)("a",{onClick:Z,className:"",children:"\u8BBE\u7F6E"}),"\u94FE\u63A5\u5F15\u7528\u3002"]}),description:"\u652F\u6301\u7684\u683C\u5F0F\uFF1Apng, jpg, jpeg, gif, svg",onChange:f})}),(0,n.jsx)(P.ZP,{direction:"horizontal",layout:"grid",onChange:ee,tag:"div",className:"ps-0",draggable:!0,items:D,rerender:!1,itemRender:function(j,z){var F=j,c=F.data,V=F.drag,N=F.style;return(0,n.jsx)(p.Symbol.Image,{ref:V(z),labelClassName:"fs-2",size:150,style:u()({width:150,height:150},N),src:R(c),className:A()("shadow shadow-sm p-2 mb-6 me-6",{}),badge:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(p.Button,{as:"label",type:"circle",variant:!1,onClick:m(c.id),"data-kt-image-input-action":"change",className:"symbol-badge start-100 btn-icon btn-active-color-primary w-25px h-25px bg-body shadow",children:(0,n.jsx)("i",{className:"bi bi-x fs-2"})})})},c.id)},preview:{render:(0,P.HG)(function(i){var j=i,z=j.data;return(0,n.jsx)(p.Symbol.Image,{style:{width:150,height:150},labelClassName:"fs-2",size:150,src:R(z),className:A()("shadow shadow-sm p-2",{})})},{})}})]})}H.Z=w},96805:function(ae,H,a){a.r(H),a.d(H,{default:function(){return Z}});var Y=a(15009),u=a.n(Y),q=a(52677),h=a.n(q),b=a(97857),O=a.n(b),_=a(99289),P=a.n(_),J=a(5574),A=a.n(J),p=a(62435),M=a(96974),L=a(73588),n=a(10811),R=a(42755),w=a(91726),e=a(86074),l={"product-maintenance-video":"videos","product-maintenance-manual":"tutorials","product-manual":"notebook","product-knowledge-base":"knowledgebase"};function Q(f){var S=f.articles,B=S===void 0?[]:S,y=f.categoryId,m=f.productId,g=f.refetch,D=(0,w.LF)(),x=A()(D,1),i=x[0],j=(0,w.hb)(),z=A()(j,1),F=z[0],c=(0,R.vz)({fetchPolicy:"network-only",variables:{offset:0,limit:100,where:{category:{id:y}}}}),V=c.data,N=(V==null?void 0:V.articles)||[],ne=(0,p.useCallback)(function(C){return B.some(function(d){return d.id===C})},[B]),T=(0,p.useCallback)(function(C){return P()(u()().mark(function d(){return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,i({variables:{articleIds:[C],linkageType:l[y],productId:m}});case 2:n.Toast.success("\u5173\u8054\u6210\u529F",2e3,{placement:"bottom-left",progressBar:!0}),g();case 4:case"end":return v.stop()}},d)}))},[m,y,g]),U=(0,p.useCallback)(function(C){return P()(u()().mark(function d(){return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,F({variables:{articleIds:[C],linkageType:l[y],productId:m}});case 2:n.Toast.success("\u53D6\u6D88\u5173\u8054\u6210\u529F",2e3,{placement:"bottom-left",progressBar:!0}),g();case 4:case"end":return v.stop()}},d)}))},[m,y,g]),te=(0,p.useCallback)(function(C){return P()(u()().mark(function d(){return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,i({variables:{articleIds:C,linkageType:l[y],productId:m}});case 2:n.Toast.success("\u5173\u8054\u6210\u529F",2e3,{placement:"bottom-left",progressBar:!0}),g();case 4:case"end":return v.stop()}},d)}))},[y,m,g]),I=(0,p.useCallback)(function(C){return P()(u()().mark(function d(){return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,F({variables:{articleIds:C,linkageType:l[y],productId:m}});case 2:n.Toast.success("\u53D6\u6D88\u5173\u8054\u6210\u529F",2e3,{placement:"bottom-left",progressBar:!0}),g();case 4:case"end":return v.stop()}},d)}))},[y,m,g]);return(0,e.jsx)("div",{children:(0,e.jsx)(n.Table,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(d){return(0,e.jsxs)(e.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,e.jsx)("span",{className:"mx-2",children:d}),"\u4E2A\u4EA7\u54C1\u6587\u7AE0"]})},toolbar:function(d){return(0,e.jsxs)("div",{children:[(0,e.jsx)(n.Button,{color:"success",onClick:te(d),variant:!1,children:"\u6279\u91CF\u5173\u8054"}),(0,e.jsx)(n.Button,{onClick:I(d),color:"danger",variant:!1,children:"\u6279\u91CF\u53D6\u6D88\u5173\u8054"})]})}},noRowsRenderer:function(){return(0,e.jsx)(n.Empty,{description:"\u6587\u7AE0\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:[{key:"title",title:"\u6807\u9898"},{key:"createdAt",title:"\u521B\u5EFA\u65F6\u95F4",width:180},{title:"\u64CD\u4F5C",key:"action",width:140,render:function(d,W){return(0,e.jsx)("div",{children:ne(W.id)?(0,e.jsx)("a",{href:"",onClick:U(W.id),children:"\u53D6\u6D88\u5173\u8054"}):(0,e.jsx)("a",{href:"",onClick:T(W.id),children:"\u5173\u8054"})})}}],dataSource:N})})}var o=Q,s=a(97294),$=a(46027),K=a(14336);function E(f){var S=f.productId,B=f.warrantyPolicies,y=B===void 0?[]:B,m=f.refetch,g=n.Form.useForm(),D=(0,p.useRef)({mode:"create",visible:!1,submitting:!1}),x=(0,p.useReducer)(function(t){return t+1},0),i=A()(x,2),j=i[1],z=(0,w.xL)(),F=A()(z,1),c=F[0],V=(0,w.bR)(),N=A()(V,1),ne=N[0],T=(0,w.U1)(),U=A()(T,1),te=U[0],I=(0,p.useCallback)(function(t){D.current.visible=t,j()},[]),C=(0,p.useCallback)(function(){D.current.mode="create",g.resetFields(),I(!0)},[]),d=(0,p.useCallback)(function(t){D.current.mode="update",g.setFieldsValue({name:t.name,duration:t.duration}),I(!0)},[]),W=(0,K.Z)({title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",content:function(r){return(0,e.jsxs)(e.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,e.jsx)("strong",{children:r.name}),"\u201D\u3002\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u9006\u8F6C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u60A8\u786E\u5B9A\u5220\u9664\u5417\uFF1F"]})}},function(){var t=P()(u()().mark(function r(G){return u()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,te({variables:{where:{id_in:G==null?void 0:G.ids}}});case 2:m();case 3:case"end":return k.stop()}},r)}));return function(r){return t.apply(this,arguments)}}()),v=A()(W,1),re=v[0],oe=(0,p.useCallback)(function(t){return function(r){r.key==="edit"?d(t):r.key==="delete"&&re({name:t.name,ids:[t.id]})}},[re]),ce=(0,p.useCallback)(function(t){return function(){re({name:"\u9009\u4E2D\u7684\u62A5\u4FEE\u7B56\u7565",ids:t})}},[]),ue=(0,p.useCallback)(P()(u()().mark(function t(){var r,G;return u()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,g.validateFields();case 2:if(r=k.sent,D.current.mode!=="create"){k.next=11;break}return k.next=6,c({variables:{input:O()({productId:S},r)}});case 6:n.Toast.success("\u65B0\u5EFA\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),m(),I(!1),k.next=16;break;case 11:return k.next=13,ne({variables:{id:(G=D.current.data)===null||G===void 0?void 0:G.id,input:r}});case 13:n.Toast.success("\u7F16\u8F91\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),m(),I(!1);case 16:case"end":return k.stop()}},t)})),[m]),se=D.current.submitting,ie=D.current.visible,le=D.current.mode;return(0,e.jsxs)("div",{children:[(0,e.jsxs)(n.Modal,{width:640,centered:!0,onOk:ue,confirmLoading:se,okText:"\u4FDD\u5B58",visible:ie,onCancel:function(){return I(!1)},children:[(0,e.jsx)(n.Modal.Header,{closable:!0,className:"ms-5 border-0",children:(0,e.jsx)("h1",{className:"modal-title pt-6 pb-4",children:le?"\u65B0\u5EFA\u62A5\u4FEE\u7B56\u7565":"\u7F16\u8F91\u62A5\u4FEE\u7B56\u7565"})}),(0,e.jsx)(n.Modal.Body,{children:(0,e.jsxs)(n.Form,{form:g,children:[(0,e.jsx)(n.Form.Item,{className:"d-flex flex-column mb-7",name:"name",label:"\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0"}],children:(0,e.jsx)(n.Input,{solid:!0})}),(0,e.jsx)(n.Form.Item,{className:"d-flex flex-column mb-7",name:"duration",label:"\u4FDD\u4FEE\u65F6\u957F",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4FDD\u4FEE\u65F6\u957F"},{pattern:/^[1-9]\d*$/,message:"\u8BF7\u8F93\u5165\u6B63\u6574\u6570"}],help:"\u4FDD\u4FEE\u65F6\u957F\u5355\u4F4D\u4E3A\u6708",children:(0,e.jsx)(n.Input,{solid:!0})})]})})]}),(0,e.jsxs)("div",{className:"mt-5 card-header",children:[(0,e.jsx)("div",{className:"card-title flex-column"}),(0,e.jsx)("div",{className:"card-toolbar",children:(0,e.jsx)("div",{className:"d-flex justify-content-end",children:(0,e.jsx)(n.Button,{variant:"primary",className:"me-3",icon:(0,e.jsx)($.ZP,{className:"svg-icon-2",name:"Duotune/arr075"}),onClick:C,children:"\u65B0\u5EFA\u62A5\u4FEE\u7B56\u7565"})})})]}),(0,e.jsx)(n.Table,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(r){return(0,e.jsxs)(e.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,e.jsx)("span",{className:"mx-2",children:r}),"\u4E2A\u4EA7\u54C1"]})},toolbar:function(r){return(0,e.jsx)("div",{children:(0,e.jsx)(n.Button,{color:"success",onClick:ce(r),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},noRowsRenderer:function(){return(0,e.jsx)(n.Empty,{description:"\u62A5\u4FEE\u7B56\u7565\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:[{key:"name",title:"\u4FDD\u4FEE\u7B56\u7565\u540D\u79F0"},{key:"duration",title:"\u4FDD\u4FEE\u65F6\u957F",width:180,render:function(r){return"".concat(r,"\u6708")}},{key:"createdAt",title:"\u521B\u5EFA\u65F6\u95F4",width:180},{title:"\u64CD\u4F5C",key:"action",width:140,render:function(r,G){return(0,e.jsx)("div",{children:(0,e.jsx)(n.Dropdown,{overlay:(0,e.jsxs)(n.Menu,{onClick:oe(G),className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,e.jsx)(n.Menu.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,e.jsx)(n.Menu.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",children:(0,e.jsxs)(n.Button,{variant:"light",activeColor:"light-primary",children:["\u64CD \u4F5C",(0,e.jsx)($.ZP,{className:"ms-2 svg-icon-5 m-0",name:"Duotune/arr072"})]})})})}}],dataSource:y})]})}var ee=E;function X(){var f=(0,M.UO)(),S=n.Form.useForm(),B=(0,w.ac)({variables:{pageSize:1e3},fetchPolicy:"network-only"}),y=B.data,m=(0,w.FA)({variables:{id:f.id}}),g=m.loading,D=m.data,x=m.refetch,i=(0,w.wE)(),j=A()(i,1),z=j[0],F=y==null?void 0:y.result.edges.map(function(T){return T.node}),c=D==null?void 0:D.result,V=c==null?void 0:c.warrantyPolicies,N={knowledgebase:c==null?void 0:c.knowledgebase,videos:c==null?void 0:c.videos,tutorials:c==null?void 0:c.tutorials,notebook:c==null?void 0:c.notebook};(0,p.useEffect)(function(){var T;c&&S.setFieldsValue({brandId:c==null||(T=c.brand)===null||T===void 0?void 0:T.id,name:c.name,images:c.images})},[c]);var ne=(0,p.useCallback)(P()(u()().mark(function T(){var U;return u()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,S.validateFields();case 2:return U=I.sent,console.log("values",U),U.images=U.images.map(function(C){var d=O()({},C);return d.hasOwnProperty("__typename")&&delete d.__typename,d.data_state==="new"&&delete d.id,delete d.data_state,d.hasOwnProperty("image")&&d.image&&(h()(d.image)==="object"&&(d.image=d.image.id),delete d.url),d}),I.next=7,z({variables:{id:f.id,input:U}});case 7:n.Toast.success("\u4FDD\u5B58\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),x();case 9:case"end":return I.stop()}},T)})),[c,x]);return(0,e.jsx)(L.vs,{loading:g,header:{title:"\u7F16\u8F91\u4EA7\u54C1"},children:(0,e.jsxs)(n.Card,{className:"mb-5 mb-xl-10",children:[(0,e.jsx)(n.Card.Header,{title:"\u4EA7\u54C1\u4FE1\u606F"}),(0,e.jsx)(n.Card.Body,{children:(0,e.jsx)(n.BlockUI,{overlayClassName:"bg-white bg-opacity-25",loading:g,children:(0,e.jsxs)(n.Tabs,{type:"line-tabs",defaultActiveKey:"general",contentContainer:!1,className:"border-0 fs-4 fw-bold mb-n2 nav-line-tabs-2x",children:[(0,e.jsx)(n.Tabs.TabPane,{tab:"\u57FA\u672C\u4FE1\u606F",forceRender:!0,children:(0,e.jsx)("div",{className:"py-4",children:(0,e.jsxs)(n.Form,{form:S,className:"form d-flex flex-column",children:[(0,e.jsxs)(n.Row,{className:"mt-5",children:[(0,e.jsxs)(n.Col,{span:6,children:[(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"brandId",label:"\u54C1\u724C",rules:[{required:!0,message:"\u54C1\u724C\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(n.Select,{className:"w-400px",options:(F==null?void 0:F.map(function(T){return{label:T.name,value:T.id}}))||[]})}),(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"name",label:"\u540D\u79F0",rules:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(n.Input,{solid:!0,className:"w-400px"})})]}),(0,e.jsx)(n.Col,{span:6,children:(0,e.jsx)(n.Form.Item,{className:"mb-5",name:"images",label:"\u4EA7\u54C1\u56FE\u7247",noStyle:!0,children:(0,e.jsx)(s.Z,{})})})]}),(0,e.jsx)(n.Button,{className:"w-100px",onClick:ne,children:"\u4FDD\u5B58"})]})})},"general"),(0,e.jsx)(n.Tabs.TabPane,{tab:"\u4FDD\u4FEE\u7B56\u7565",children:(0,e.jsx)("div",{className:"py-4",children:(0,e.jsx)(ee,{productId:f.id,warrantyPolicies:V,refetch:x})})},"bx"),(0,e.jsx)(n.Tabs.TabPane,{tab:"\u7EF4\u62A4\u89C6\u9891",children:(0,e.jsx)("div",{className:"py-4",children:(0,e.jsx)(o,{productId:f.id,refetch:x,categoryId:"product-maintenance-video",articles:N.videos})})},"product-maintenance-video"),(0,e.jsx)(n.Tabs.TabPane,{tab:"\u77E5\u8BC6\u5E93",children:(0,e.jsx)("div",{className:"py-4",children:(0,e.jsx)(o,{productId:f.id,refetch:x,categoryId:"product-knowledge-base",articles:N.knowledgebase})})},"product-knowledge-base"),(0,e.jsx)(n.Tabs.TabPane,{tab:"\u4EA7\u54C1\u624B\u518C",children:(0,e.jsx)("div",{className:"py-4",children:(0,e.jsx)(o,{productId:f.id,refetch:x,categoryId:"product-manual",articles:N.notebook})})},"product-manual"),(0,e.jsx)(n.Tabs.TabPane,{tab:"\u7EF4\u62A4\u624B\u518C",children:(0,e.jsx)("div",{className:"py-4",children:(0,e.jsx)(o,{productId:f.id,refetch:x,categoryId:"product-maintenance-manual",articles:N.tutorials})})},"product-maintenance-manual")]})})})]})})}var Z=X}}]);
