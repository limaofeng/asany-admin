(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[9323],{99323:function(xe,L,i){"use strict";i.r(L),i.d(L,{ArticleEdit:function(){return le},ArticleNew:function(){return V},default:function(){return ve}});var m=i(3182),r=i(11849),f=i(2824),I=i(94043),y=i.n(I),l=i(67294),Z=i(28865),W=i(94184),$=i.n(W),z=i(62313),Q=i(82949),U=i.n(Q),P=i(64458),H=i(72757),C=i(35145),e=i(85893),Y=l.forwardRef(function(o,n){var t=o.onWordCount,x=o.container,h=o.value,N=o.onChange,b=o.editor,S=b===void 0?"BalloonBlock":b,R=(0,l.useRef)(h);R.current=h;var ie=(0,l.useMemo)(function(){if(S=="BalloonBlockEditor")return C.BalloonBlockEditor;if(S=="ClassicEditor")return C.ClassicEditor},[S]),D=(0,l.useCallback)(function(j){if(!!(j!=null&&j.ui)){var F=j.plugins.get("WordCount");t&&t(F);var E=j.ui.view.body._bodyCollectionContainer;j.ui.view.element=x.current,E.remove(),j.ui.view.element.appendChild(E),typeof n=="function"?n(j):n.hasOwnProperty("current")&&(n.current=j)}},[]),g=(0,l.useCallback)(function(j,F){var E=F.getData();if(E!=R.current&&!(!R.current&&!E)){var se=F.plugins.get("WordCount");t&&t(se),N&&N(E)}},[]);return(0,e.jsx)(H.CKEditor,{editor:ie,data:h,config:{language:"zh-cn"},onReady:D,onChange:g})});function ce(u,o){var n=u.editor,t=n===void 0?"BalloonBlockEditor":n,x=(0,l.useState)(!1),h=(0,f.Z)(x,2),N=h[0],b=h[1];return(0,l.useEffect)(function(){b(!0);var S=setTimeout(function(){b(!1)},250);return function(){clearTimeout(S)}},[t]),N?(0,e.jsx)("div",{children:"switching..."}):t=="BalloonBlockEditor"||t=="ClassicEditor"?(0,e.jsx)(Y,(0,r.Z)((0,r.Z)({},u),{},{ref:o})):(0,e.jsxs)("div",{children:["\u672A\u5B9E\u73B0\u7F16\u8F91\u5668: ",t]})}var K=l.forwardRef(ce),q=K,a=i(69851);function _(u){var o=u.onConfirm,n=u.onCancel;return(0,e.jsxs)(a.u_,{centered:!0,visible:!0,onCancel:n,cancelText:"\u7559 \u4E0B",onOk:o,footer:null,okText:"\u79BB \u5F00",dialogClassName:"mw-550px",bodyClassName:"mx-5 pt-0 pb-15",children:[(0,e.jsx)("div",{className:"mb-6",children:(0,e.jsx)("h1",{className:"mb-3",children:"\u4F60\u786E\u5B9A\u8981\u79BB\u5F00\u5F53\u524D\u9875\u9762\u5417?"})}),(0,e.jsx)("div",{className:"mb-6",children:(0,e.jsxs)("div",{className:"mh-375px scroll-y me-n7 pe-7 fs-6 text-muted",children:[(0,e.jsx)("p",{children:" \u60A8\u6709\u6B63\u5728\u7F16\u8F91\u7684\u5185\u5BB9, \u4F46\u672A\u4FDD\u5B58."}),(0,e.jsx)("p",{children:"\u5728\u79BB\u5F00\u524D, \u5148\u4FDD\u5B58\u60A8\u7684\u4FEE\u6539"})]})}),(0,e.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,e.jsx)("div",{className:"fw-bold"}),(0,e.jsxs)("div",{children:[(0,e.jsx)(a.zx,{variant:"light",className:"me-3",onClick:n,children:"\u7559\u5728\u5F53\u524D\u9875\u9762"}),(0,e.jsx)(a.zx,{variant:"danger",onClick:o,children:"\u79BB \u5F00"})]})]})]})}var ee=_,de=i(4096),k=i(19228),ne=i(4387),te=a.l0.useForm,G={DRAFT:"Draft",PUBLISHED:"Published"};function ae(u){var o=u.isNew,n=u.onChange,t=(0,l.useCallback)(function(x,h){n(h)},[n]);return(0,e.jsxs)("div",{className:"article-settings",children:[(0,e.jsxs)(a.l0,{onValuesChange:t,component:!1,children:[(0,e.jsx)(a.l0.Item,{dependencies:["slug"],className:"mb-10",label:"\u94FE\u63A5\u5730\u5740",children:function(h){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.l0.Item,{name:"slug",noStyle:!0,children:(0,e.jsx)(a.II,{size:"sm"})}),(0,e.jsxs)("p",{className:"mt-1 text-gray-600",children:["localhost:2368/",h.getFieldValue("slug"),"/"]})]})}}),(0,e.jsx)(a.l0.Item,{className:"mb-10",name:"publishedAt",label:"\u53D1\u5E03\u65F6\u95F4",children:(0,e.jsx)(a.Mt,{size:"sm"})}),(0,e.jsx)(a.l0.Item,{className:"mb-10",name:"tags",label:"\u6807\u7B7E",children:(0,e.jsx)(a.ub,{size:"sm"})}),(0,e.jsx)(a.l0.Item,{className:"mb-10",name:"access",label:"\u8BBF\u95EE\u6743\u9650",children:(0,e.jsx)(a.ub,{size:"sm",options:[{value:"public",label:"\u5B8C\u5168\u516C\u5F00"}]})}),(0,e.jsx)(a.l0.Item,{className:"mb-10",name:"summary",label:"\u6458\u8981",children:(0,e.jsx)(a.II.TextArea,{autoSize:{minRows:3}})}),(0,e.jsx)(a.l0.Item,{className:"mb-10",name:"author",label:"\u4F5C\u8005",children:(0,e.jsx)(a.II,{size:"sm"})})]}),!o&&(0,e.jsx)(a.zx,{icon:(0,e.jsx)(Z.ZP,{name:"Duotune/arr015",className:"svg-icon-2"}),activeColor:"danger",variantStyle:"light",variant:"danger",className:"mb-10",children:"\u5220\u9664\u6587\u7AE0"})]})}function re(u){var o=u.value,n=u.saved,t="\u8349\u7A3F - \u5DF2\u4FDD\u5B58";return n==="Saving"?t="\u4FDD\u5B58\u4E2D...":(o==="New"&&(t="\u65B0\u7684"),o==="Draft"&&(t="\u8349\u7A3F"+(n!="NotSaved"?" - \u5DF2\u4FDD\u5B58":""))),(0,e.jsx)("span",{className:"text-gray-600 ls-2",children:t})}function O(u,o){var n=u.model.document._getDefaultRange(),t=o.createSelection(n);return o.setSelection(t),t}function T(u){var o=u.history,n=u.loading,t=n===void 0?!1:n,x=te(),h=(0,l.useRef)(null),N=(0,l.useRef)(null),b=(0,l.useRef)(null),S=(0,l.useRef)(null),R=(0,l.useReducer)(function(v){return v+1},0),ie=(0,f.Z)(R,2),D=ie[1],g=(0,l.useRef)({status:"New",saved:"Saved"}),j=(0,l.useState)(!0),F=(0,f.Z)(j,2),E=F[0],se=F[1],ge=(0,l.useState)("BalloonBlockEditor"),me=(0,f.Z)(ge,2),je=me[0],fe=me[1],Ae=(0,l.useState)(0),he=(0,f.Z)(Ae,2),ye=he[0],Ee=he[1],Ne=(0,P.$C)(),X=Ne.data;X=X===void 0?{}:X;var pe=X.channels,Ze=(0,l.useCallback)(function(v){Ee(v.characters)},[]),be=(0,l.useMemo)(function(){return(pe||[]).map(function(v){return{label:v.fullName,value:v.id}})},[pe]);(0,l.useEffect)(function(){var v;if(!!u.data){var c=g.current;c.data=(0,r.Z)((0,r.Z)({},u.data),{},{channels:u.data.channels.map(function(B){return B.id})}),c.temp={},c.status=G[c.data.status],D();var s=(0,r.Z)((0,r.Z)({},c.data),{},{content:(v=c.data.content)===null||v===void 0?void 0:v.text});for(var d in s)s[d]==null&&(s[d]=void 0);x.setFieldsValue(s)}},[u.data]);var Se=(0,P.uw)({fetchPolicy:"network-only"}),De=(0,f.Z)(Se,1),Be=De[0],Pe=(0,P.Mq)({fetchPolicy:"network-only"}),Fe=(0,f.Z)(Pe,1),Me=Fe[0],Ie=(0,ne.Qk)(function(){var v=(0,m.Z)(y().mark(function c(s){var d,B,A,M,w,ue;return y().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(d=g.current,B=s.content?{type:"HTML",text:s.content}:void 0,p.prev=2,d.status!="New"){p.next=17;break}if(s.title){p.next=8;break}return d.saved="NotSaved",D(),p.abrupt("return");case 8:return p.next=10,(0,k.gw)(Be({variables:{input:(0,r.Z)((0,r.Z)((0,r.Z)({},d.temp),s),{},{category:"news",content:B})}}),350);case 10:A=p.sent,M=A.data,d.data=(0,r.Z)((0,r.Z)({},M.article),{},{channels:M.article.channels.map(function(oe){return oe.id})}),d.temp={},d.status=G[M.article.status],p.next=22;break;case 17:return p.next=19,(0,k.gw)(Me({variables:{id:d.data.id,input:(0,r.Z)((0,r.Z)((0,r.Z)({},d.temp),s),{},{content:B})}}),350);case 19:w=p.sent,ue=w.data,d.data=(0,r.Z)((0,r.Z)({},ue.article),{},{channels:ue.article.channels.map(function(oe){return oe.id})});case 22:p.next=28;break;case 24:p.prev=24,p.t0=p.catch(2),d.temp=s,console.error(p.t0);case 28:d.saved="Saved",D();case 30:case"end":return p.stop()}},c,null,[[2,24]])}));return function(c){return v.apply(this,arguments)}}(),{}),Ce=(0,f.Z)(Ie,2),J=Ce[0],we=Ce[1],$e=(0,l.useCallback)(function(){if(o.length)return o.goBack();o.push("/cms/channels")},[o]),ze=(0,l.useCallback)(function(){var v=(0,m.Z)(y().mark(function c(s){var d;return y().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(d=g.current,d.status!="New"){A.next=11;break}return d.saved="Saving",D(),A.next=6,(0,k.gw)(Promise.resolve((0,r.Z)((0,r.Z)({},d.temp),s)),350);case 6:d.temp=A.sent,d.saved="NotSaved",D(),A.next=12;break;case 11:J(s);case 12:case"end":return A.stop()}},c)}));return function(c){return v.apply(this,arguments)}}(),[J]),ke=(0,l.useCallback)(function(){se(function(v){return!v})},[]),Oe=(0,l.useCallback)(function(v){v.preventDefault(),v.stopPropagation();var c=h.current;c&&c.model.change(function(s){if(c.focus(),c.getData().startsWith("<p>&nbsp;</p>"))return O(c,s);var d=O(c,s),B=s.createElement("paragraph"),A=s.createElement("paragraph"),M=s.createElement("p"),w=s.createDocumentFragment();s.append(B,w),s.append(M,w),s.append(A,M),c.model.insertContent(w,d),O(c,s)})},[]),Te=(0,l.useCallback)(function(v,c){var s=g.current;s.saved="NotSaved",D(),J(c)},[J]),Re=(0,z.Z)(b),Le=(0,z.Z)(S),We=Re||Le;return(0,e.jsx)(a.yC,{spinning:t,children:(0,e.jsxs)("div",{className:"tw-flex tw-flex-row modal-fullscreen art-main",children:[(0,e.jsx)(U(),{disableNative:!0,when:g.current.saved=="NotSaved",children:function(c){var s=c.onConfirm,d=c.onCancel;return(0,e.jsx)(ee,{onConfirm:s,onCancel:d})}}),(0,e.jsxs)("div",{className:"art-editor",children:[(0,e.jsxs)("div",{className:"art-editor-header",children:[(0,e.jsxs)("div",{className:"tw-flex tw-items-center pe-auto",children:[(0,e.jsx)(a.zx,{icon:(0,e.jsx)(Z.ZP,{name:"Duotune/arr074",className:"svg-icon-2"}),variant:"white",onClick:$e,children:"\u6587\u7AE0"}),(0,e.jsx)("div",{className:"art-editor-status px-6",children:(0,e.jsx)(re,{value:g.current.status,saved:we?"Saving":g.current.saved})})]}),(0,e.jsxs)("div",{className:"tw-flex",children:[g.current.status!=="New"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.zx,{variant:"white",color:"primary",activeTextColor:"primary",className:"me-3",children:"\u9884\u89C8"}),(0,e.jsx)(a.zx,{variant:"white",className:$()({"me-3":E}),children:"\u53D1\u5E03"})]}),E&&(0,e.jsx)("div",{className:"settings-menu-toggle-spacer"})]})]}),(0,e.jsx)("div",{ref:N,className:"art-editor-body relative w-100 vh-100 overflow-x-hidden hover-scroll-overlay-y px-5",children:(0,e.jsxs)(a.l0,{form:x,initialValues:g.current.data||{},onValuesChange:Te,component:!1,children:[(0,e.jsx)("div",{ref:b,className:"art-editor-feature-image-container",children:(0,e.jsx)("div",{className:$()("tw-flex flex-row tw-items-center",{invisible:!We}),children:(0,e.jsx)(a.zx,{icon:(0,e.jsx)(Z.ZP,{name:"Duotune/arr087",className:"svg-icon-2"}),type:"link",variant:!1,color:"muted",activeTextColor:"gray-700",flushed:!0,children:"\u6DFB\u52A0\u5C01\u9762\u56FE"})})}),(0,e.jsx)("div",{className:"art-editor-title",ref:S,children:(0,e.jsx)(a.l0.Item,{name:"title",noStyle:!0,children:(0,e.jsx)(a.II.TextArea,{autoSize:!0,bordered:!1,onPressEnter:Oe,placeholder:"\u6587\u7AE0\u6807\u9898"})})}),(0,e.jsx)("div",{className:"art-editor-channel",children:(0,e.jsx)(a.l0.Item,{name:"channels",noStyle:!0,children:(0,e.jsx)(a.ub,{size:"sm",multiple:!0,placeholder:"\u9009\u62E9\u680F\u76EE",width:"auto",options:be})})}),(0,e.jsx)("div",{className:"art-editor-content",children:(0,e.jsx)(a.l0.Item,{name:"content",noStyle:!0,children:(0,e.jsx)(q,{onWordCount:Ze,editor:je,container:N,ref:h})})})]})}),(0,e.jsxs)("div",{className:"art-editor-switch-editor text-gray-500",children:[(0,e.jsx)("a",{onClick:function(){return fe("ClassicEditor")},children:"\u7ECF\u5178"}),(0,e.jsx)("a",{onClick:function(){return fe("BalloonBlockEditor")},children:"\u7B80\u6D01"})]}),(0,e.jsxs)("div",{className:"art-editor-wordcount-container",children:[(0,e.jsxs)("div",{id:"word-count",className:"art-editor-wordcount text-gray-500",children:[ye," \u4E2A\u5B57\u7B26"]}),(0,e.jsx)(Z.ZP,{name:"Duotune/art008",className:"svg-icon-4 px-2 py-2"})]})]}),!E&&(0,e.jsx)(de.Z,{title:"\u6587\u7AE0\u8BBE\u7F6E",content:(0,e.jsx)(ae,{isNew:g.current.status==="New",onChange:ze})}),(0,e.jsx)(a.zx,{className:"settings-menu-toggle",variant:"white",icon:(0,e.jsx)(Z.ZP,{name:"Duotune/lay004",className:"svg-icon-2"}),onClick:ke})]})})}function V(u){return(0,e.jsx)(T,(0,r.Z)({},u))}function le(u){var o=u.match.params.id,n=(0,l.useRef)(0),t=(0,P.V7)({variables:{id:o},fetchPolicy:"cache-and-network"}),x=t.data,h=t.loading,N=(0,l.useMemo)(function(){if(h){if(n.current==1)return!1;n.current++}return h},[h]);return(0,e.jsx)(T,(0,r.Z)((0,r.Z)({},u),{},{loading:N,data:x==null?void 0:x.article}))}var ve=T},64458:function(xe,L,i){"use strict";i.d(L,{gk:function(){return Y},$C:function(){return q},vO:function(){return ee},uw:function(){return ne},Mq:function(){return G},eU:function(){return re},nT:function(){return T},V7:function(){return le},OX:function(){return o}});var m=i(11849),r=i(20310),f=i(49704),I=i(93633),y=i(21919),l,Z,W,$,z,Q,U,P,H,C={},e=(0,f.Ps)(l||(l=(0,r.Z)([`
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
        summary
        authors {
          id
          name
        }
        channels {
          id
          fullName
        }
        createdBy
        createdAt
        publishedAt
        status
      }
    }
  }
}
    `])));function Y(n){var t=(0,m.Z)((0,m.Z)({},C),n);return I.a(e,t)}function ce(n){var t=_objectSpread(_objectSpread({},C),n);return Apollo.useLazyQuery(e,t)}var K=(0,f.Ps)(Z||(Z=(0,r.Z)([`
    query articleChannelAll {
  channels: articleChannels {
    id
    icon
    name
    fullName
    path
    index
    level
    cover
    parent {
      id
    }
  }
}
    `])));function q(n){var t=(0,m.Z)((0,m.Z)({},C),n);return I.a(K,t)}function a(n){var t=_objectSpread(_objectSpread({},C),n);return Apollo.useLazyQuery(K,t)}var _=(0,f.Ps)(W||(W=(0,r.Z)([`
    query articleChannel($id: ID!) {
  channel: articleChannel(id: $id) {
    id
    icon
    name
    description
    cover
    path
    index
    level
    parent {
      id
    }
  }
}
    `])));function ee(n){var t=(0,m.Z)((0,m.Z)({},C),n);return I.a(_,t)}function de(n){var t=_objectSpread(_objectSpread({},C),n);return Apollo.useLazyQuery(_,t)}var k=(0,f.Ps)($||($=(0,r.Z)([`
    mutation createArticle($input: ArticleCreateInput!) {
  article: createArticle(input: $input) {
    id
    title
    status
    channels {
      id
    }
    content {
      id
      __typename
      ... on HtmlContent {
        text
      }
    }
  }
}
    `])));function ne(n){var t=(0,m.Z)((0,m.Z)({},C),n);return y.D(k,t)}var te=(0,f.Ps)(z||(z=(0,r.Z)([`
    mutation updateArticle($id: ID!, $input: ArticleUpdateInput!) {
  article: updateArticle(id: $id, input: $input) {
    id
    title
    status
    channels {
      id
    }
    content {
      id
      __typename
      ... on HtmlContent {
        text
      }
    }
  }
}
    `])));function G(n){var t=(0,m.Z)((0,m.Z)({},C),n);return y.D(te,t)}var ae=(0,f.Ps)(Q||(Q=(0,r.Z)([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function re(n){var t=(0,m.Z)((0,m.Z)({},C),n);return y.D(ae,t)}var O=(0,f.Ps)(U||(U=(0,r.Z)([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function T(n){var t=(0,m.Z)((0,m.Z)({},C),n);return y.D(O,t)}var V=(0,f.Ps)(P||(P=(0,r.Z)([`
    query article($id: ID!) {
  article(id: $id) {
    id
    title
    channels {
      id
    }
    content {
      id
      __typename
      ... on HtmlContent {
        text
      }
    }
  }
}
    `])));function le(n){var t=(0,m.Z)((0,m.Z)({},C),n);return I.a(V,t)}function ve(n){var t=_objectSpread(_objectSpread({},C),n);return Apollo.useLazyQuery(V,t)}var u=(0,f.Ps)(H||(H=(0,r.Z)([`
    mutation createArticleChannel($input: ArticleChannelCreateInput!) {
  createArticleChannel(input: $input) {
    id
  }
}
    `])));function o(n){var t=(0,m.Z)((0,m.Z)({},C),n);return y.D(u,t)}}}]);
