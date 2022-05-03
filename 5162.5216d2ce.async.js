var G=Object.prototype.hasOwnProperty;var z=Object.getOwnPropertySymbols,H=Object.prototype.propertyIsEnumerable;var W=Object.assign;var Q=(f,E)=>{var e={};for(var t in f)G.call(f,t)&&E.indexOf(t)<0&&(e[t]=f[t]);if(f!=null&&z)for(var t of z(f))E.indexOf(t)<0&&H.call(f,t)&&(e[t]=f[t]);return e};(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[5162,3975],{33201:function(){},30098:function(f,E,e){"use strict";e.d(E,{G:function(){return _.Z}});var t=e(80064),_=e(48655),u=e(39981)},47594:function(f,E,e){"use strict";e.d(E,{e:function(){return j}});var t=e(3182),_=e(2824),u=e(86582),p=e(94043),A=e.n(p),y=e(67294),M=e(64458),n=e(69851),b=e(19228),i=e(85893),a=n.gq.UploadAvatar;function P(o){var l=o.form,c=(0,M.$C)(),C=c.data,v=C===void 0?{channels:[]}:C,D=c.loading,d=v.channels;return console.log(d,D),(0,i.jsxs)(n.l0,{form:l,children:[(0,i.jsxs)("div",{className:"row mb-10",children:[(0,i.jsxs)("div",{className:"col-md-8",children:[(0,i.jsx)(n.l0.Item,{name:"parent",className:"d-flex flex-column mb-7",label:"\u6240\u5C5E\u680F\u76EE",children:(0,i.jsx)(n.ub,{solid:!0,options:[{value:"root",label:"\u6839\u680F\u76EE"}].concat((0,u.Z)(d.map(function(O){return{value:O.id,label:O.fullName}})))})}),(0,i.jsx)(n.l0.Item,{name:"name",className:"d-flex flex-column mb-7",label:"\u540D\u79F0",rules:[{required:!0,message:"\b\b\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,i.jsx)(n.II,{solid:!0})}),(0,i.jsx)(n.l0.Item,{name:"slug",className:"d-flex flex-column mb-7",label:"\u7F16\u7801",children:(0,i.jsx)(n.II,{solid:!0})})]}),(0,i.jsx)("div",{className:"col-md-4",children:(0,i.jsx)(n.l0.Item,{name:"cover",className:"d-flex flex-column mb-7",label:"\u680F\u76EE\u5C01\u9762",children:(0,i.jsx)(a,{width:180,height:180})})})]}),(0,i.jsx)(n.l0.Item,{name:"description",className:"d-flex flex-column mb-7",label:"\u63CF\u8FF0",required:!0,children:(0,i.jsx)(n.II.TextArea,{solid:!0})})]})}var j=function(l){var c=l.data,C=l.visible,v=l.onCancel,D=l.onSuccess,d=n.l0.useForm(),O=(0,y.useState)(!1),I=(0,_.Z)(O,2),x=I[0],L=I[1],K=(0,M.OX)({fetchPolicy:"no-cache"}),T=(0,_.Z)(K,1),B=T[0],S=(0,y.useCallback)((0,t.Z)(A().mark(function U(){var g;return A().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return L(!0),m.prev=1,m.next=4,d.validateFields();case 4:return g=m.sent,m.next=7,(0,b.gw)(B({variables:{input:g}}),350);case 7:L(!1),v&&v(new Event("look",{bubbles:!0,cancelable:!1})),n.u_.success({title:"\u4FDD\u5B58\u6210\u529F",content:"\u680F\u76EE <strong>".concat(g.name,"</strong> \u4FDD\u5B58\u6210\u529F"),timer:3e3,timerProgressBar:!0}),D&&D(),m.next=16;break;case 13:m.prev=13,m.t0=m.catch(1),L(!1);case 16:case"end":return m.stop()}},U,null,[[1,13]])})),[B,D,v,d]);return(0,y.useEffect)(function(){!c||d.setFieldsValue(c)},[c,d]),(0,i.jsx)(n.u_,{centered:!0,maskClosable:!1,visible:C,onCancel:v,onOk:S,confirmLoading:x,dialogClassName:"mw-650px",title:"\u521B\u5EFA\u680F\u76EE",children:(0,i.jsx)(P,{form:d})})}},85918:function(f,E,e){"use strict";e.r(E);var t=e(11849),_=e(2824),u=e(67294),p=e(28865),A=e(1861),y=e(64458),M=e(47594),n=e(69851),b=e(19228),i=e(30098),a=e(85893);function P(o){return o.children&&o.children.length?(0,a.jsx)(n.v2.SubMenu,{url:"/cms/channels/".concat(o.id),bullet:!0,icon:o.icon,title:o.name,children:(o.children||[]).map(P)},o.id):(0,a.jsx)(n.v2.Item,{url:"/cms/channels/".concat(o.id),bullet:!0,icon:o.icon,children:o.name},o.id)}function j(){var o=(0,y.$C)({fetchPolicy:"cache-and-network"}),l=o.data,c=l===void 0?{channels:[]}:l,C=o.refetch,v=o.loading,D=(0,u.useState)("draft"),d=(0,_.Z)(D,2),O=d[0],I=d[1],x=(0,u.useMemo)(function(){return!c.channels||!c.channels.length?[]:(0,b.G_)(c.channels.map(function(h){return(0,t.Z)({},h)}),{idKey:"id",childrenKey:"children",pidKey:"parent.id",sort:function($,r){return $.index-r.index}})},[c.channels]),L=(0,u.useState)(x.map(function(h){return h.id})),K=(0,_.Z)(L,2),T=K[0],B=K[1],S=(0,u.useCallback)(function(h){I(h.key)},[]),U=(0,u.useCallback)(function(h){B(h)},[]),g=(0,u.useState)(!1),Z=(0,_.Z)(g,2),m=Z[0],R=Z[1],N=(0,u.useCallback)(function(){R(!0)},[]),F=(0,u.useCallback)(function(){R(!1)},[]);return(0,u.useEffect)(function(){B(x.map(function(h){return h.id}))},[x.map(function(h){return h.id}).join(",")]),(0,a.jsxs)(i.G,{children:[(0,a.jsx)("div",{className:"mt-5 px-5 pt-5",children:(0,a.jsx)("h1",{className:"text-gray-800 fw-bold mb-6 mx-5",children:"\u5185\u5BB9\u7BA1\u7406"})}),(0,a.jsx)(A.E,{className:"custom-scrollbar flex-column-fluid px-10 mb-5",options:{scrollbars:{autoHide:"scroll"}},children:(0,a.jsxs)(n.v2,{className:"cms-menu-sider menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0",onSelect:S,openKeys:T,selectedKeys:O?[O]:[],onOpenChange:U,accordion:!1,selectable:"AllMenu",fit:!0,children:[(0,a.jsx)(n.v2.Section,{children:"\u6211\u7684"}),(0,a.jsx)(n.v2.Item,{url:"/cms/my/drafts",icon:"Duotune/art008",children:"\u8349\u7A3F\u7BB1"},"draft"),(0,a.jsx)(n.v2.Item,{url:"/cms/my/published",icon:"Duotune/art006",children:"\u5DF2\u53D1\u5E03"},"published"),(0,a.jsxs)(n.v2.Section,{className:"d-flex align-items-center",children:[(0,a.jsxs)("span",{className:"menu-section text-muted text-uppercase fs-8 ls-1 flex-row-fluid",children:["\u4FE1\u606F\u680F\u76EE ",v&&" - loading..."]}),(0,a.jsx)(n.zx,{icon:(0,a.jsx)(p.ZP,{style:{marginRight:".2rem"},name:"Duotune/arr087",className:""}),size:"sm",variant:"white",className:"py-1 px-3 me-n4",onClick:N,children:"\u65B0\u589E"})]}),x.map(P),(0,a.jsx)(n.v2.Section,{children:"\u5176\u4ED6"}),(0,a.jsx)(n.v2.Item,{icon:"Duotune/elc001",children:"\u5927\u56FE\u7BA1\u7406"},"banner"),(0,a.jsx)(n.v2.Item,{url:"/cms/authors",icon:"Duotune/cod002",children:"\u4F5C\u8005"},"authors"),(0,a.jsx)(n.v2.Item,{icon:"Duotune/art002",children:"\u6807\u7B7E"},"tags"),(0,a.jsx)(n.v2.Section,{children:"\u5168\u5C40\u8BBE\u7F6E"}),(0,a.jsx)(n.v2.Item,{icon:"Duotune/abs008",children:"\u8BBE\u7F6E"},"settings")]})}),(0,a.jsx)(M.e,{onSuccess:C,visible:m,onCancel:F})]})}E.default=j},64458:function(f,E,e){"use strict";e.d(E,{gk:function(){return C},$C:function(){return d},vO:function(){return x},uw:function(){return T},Mq:function(){return S},eU:function(){return g},nT:function(){return m},V7:function(){return N},OX:function(){return $}});var t=e(11849),_=e(20310),u=e(49704),p=e(93633),A=e(21919),y,M,n,b,i,a,P,j,o,l={},c=(0,u.Ps)(y||(y=(0,_.Z)([`
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
    `])));function C(r){var s=(0,t.Z)((0,t.Z)({},l),r);return p.a(c,s)}function v(r){var s=_objectSpread(_objectSpread({},l),r);return Apollo.useLazyQuery(c,s)}var D=(0,u.Ps)(M||(M=(0,_.Z)([`
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
    `])));function d(r){var s=(0,t.Z)((0,t.Z)({},l),r);return p.a(D,s)}function O(r){var s=_objectSpread(_objectSpread({},l),r);return Apollo.useLazyQuery(D,s)}var I=(0,u.Ps)(n||(n=(0,_.Z)([`
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
    `])));function x(r){var s=(0,t.Z)((0,t.Z)({},l),r);return p.a(I,s)}function L(r){var s=_objectSpread(_objectSpread({},l),r);return Apollo.useLazyQuery(I,s)}var K=(0,u.Ps)(b||(b=(0,_.Z)([`
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
    `])));function T(r){var s=(0,t.Z)((0,t.Z)({},l),r);return A.D(K,s)}var B=(0,u.Ps)(i||(i=(0,_.Z)([`
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
    `])));function S(r){var s=(0,t.Z)((0,t.Z)({},l),r);return A.D(B,s)}var U=(0,u.Ps)(a||(a=(0,_.Z)([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function g(r){var s=(0,t.Z)((0,t.Z)({},l),r);return A.D(U,s)}var Z=(0,u.Ps)(P||(P=(0,_.Z)([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function m(r){var s=(0,t.Z)((0,t.Z)({},l),r);return A.D(Z,s)}var R=(0,u.Ps)(j||(j=(0,_.Z)([`
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
    `])));function N(r){var s=(0,t.Z)((0,t.Z)({},l),r);return p.a(R,s)}function F(r){var s=_objectSpread(_objectSpread({},l),r);return Apollo.useLazyQuery(R,s)}var h=(0,u.Ps)(o||(o=(0,_.Z)([`
    mutation createArticleChannel($input: ArticleChannelCreateInput!) {
  createArticleChannel(input: $input) {
    id
  }
}
    `])));function $(r){var s=(0,t.Z)((0,t.Z)({},l),r);return A.D(h,s)}},77104:function(f,E,e){"use strict";var t=e(94184),_=e.n(t),u=e(67294),p=e(70861),A=e(76792),y=e(85893);const M={variant:"primary",active:!1,disabled:!1},n=u.forwardRef((C,c)=>{var{as:b,bsPrefix:i,variant:a,size:P,active:j,className:o}=C,l=Q(C,["as","bsPrefix","variant","size","active","className"]);const v=(0,A.vE)(i,"btn"),[D,{tagName:d}]=(0,p.FT)(W({tagName:b},l)),O=d;return(0,y.jsx)(O,W(W(W({},D),l),{ref:c,className:_()(o,v,j&&"active",a&&`${v}-${a}`,P&&`${v}-${P}`,l.href&&l.disabled&&"disabled")}))});n.displayName="Button",n.defaultProps=M,E.Z=n}}]);
