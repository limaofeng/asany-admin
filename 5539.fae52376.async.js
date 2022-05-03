(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[5539],{5539:function(W,F,a){"use strict";a.r(F);var r=a(32059),u=a(2824),_=a(11849),g=a(3182),M=a(94043),x=a.n(M),E=a(67294),B=a(19755),N=a.n(B),A=a(28865),O=a(73727),L=a(51615),S=a(94184),T=a.n(S),c=a(30381),w=a.n(c),I=a(64458),l=a(69851),e=a(85893);function R(s,i){var b=(0,E.useCallback)((0,g.Z)(x().mark(function p(){var v,y,D;return x().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return v=s.width,y=v===void 0?550:v,o.next=3,l.u_.confirm((0,_.Z)((0,_.Z)({},s),{},{width:y,okText:"\u5220 \u9664",cancelClassName:"btn btn-secondary btn-sm",okClassName:"btn btn-danger btn-sm"}));case 3:if(D=o.sent,!D.isConfirmed){o.next=7;break}return o.next=7,i();case 7:case"end":return o.stop()}},p)})),[s.title,s.content]);return[b]}window._MoreshowOrhide=function(s){return N()(s).parent().siblings().show(),N()(s).parent().remove(),!1};function K(s){var i=s.selectedRows,b=s.refetch,p=(0,I.nT)(),v=(0,u.Z)(p,1),y=v[0],D=R({title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8FD9".concat(i.length>1?"\u201C<strong>".concat(i.length,"</strong>\u201C"):"","\u7BC7\u6587\u7AE0\u5417\uFF1F"),content:i.length>1?'\u60A8\u5373\u5C06\u5220\u9664\u4EE5\u4E0B\u6587\u7AE0:<ul className="py-2">'.concat(i.map(function(C,P){return"<li ".concat(P>=4?'style="display: none !important;"':"",' className="d-flex align-items-center text-gray-800 mb-1 fs-6"><span className="bullet bullet-dot me-2"></span><strong>').concat(C.title,"</strong></li>")}).join(""),`
              <li `).concat(i.length<=4?'style="display: none !important;"':"",' className="d-flex align-items-center text-gray-800 fs-6"><a href="javascript:void(0)" onClick="_MoreshowOrhide(this)">\u66F4\u591A</a></li></ul> '):"\u60A8\u5373\u5C06\u5220\u9664\u201C<strong>".concat(i[0].title,"</strong>\u201D\u3002")+"\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u9006\u8F6C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u60A8\u786E\u5B9A\u5220\u9664\u5417\uFF1F"},(0,g.Z)(x().mark(function C(){return x().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,y({variables:{ids:i.map(function(j){return j.id})}});case 2:return f.next=4,b();case 4:case"end":return f.stop()}},C)}))),h=(0,u.Z)(D,1),o=h[0];return(0,e.jsx)(l.zx,{onClick:o,size:"sm",className:"px-4 py-2",variant:"danger",children:"\u6279\u91CF\u5220\u9664"})}function U(s){var i=s.data,b=s.refetch,p=(0,L.k6)(),v=(0,E.useState)(!1),y=(0,u.Z)(v,2),D=y[0],h=y[1],o=(0,I.eU)(),C=(0,u.Z)(o,1),P=C[0],f=R({title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u7BC7\u6587\u7AE0\u5417\uFF1F",content:"\u60A8\u5373\u5C06\u5220\u9664\u201C<strong>".concat(i.title,"</strong>\u201D\u3002\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u9006\u8F6C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u60A8\u786E\u5B9A\u5220\u9664\u5417\uFF1F")},(0,g.Z)(x().mark(function n(){return x().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,P({variables:{id:i.id}});case 2:return m.next=4,b();case 4:case"end":return m.stop()}},n)}))),j=(0,u.Z)(f,1),Z=j[0],t=(0,E.useCallback)(function(n){var d=n.key;d=="edit"?p.push("/cms/articles/".concat(i.id,"/edit")):d=="delete"&&(h(!1),Z())},[]);return(0,e.jsx)(l.Lt,{overlay:(0,e.jsxs)(l.v2,{onClick:t,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,e.jsx)(l.v2.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,e.jsx)(l.v2.Item,{className:"px-3",children:"\u53D1\u5E03"},"publish"),(0,e.jsx)(l.v2.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",onVisibleChange:h,visible:D,children:(0,e.jsxs)(l.zx,{variant:"light",activeColor:"light-primary",size:"sm",children:["\u64CD \u4F5C",(0,e.jsx)(A.ZP,{className:"ms-2 svg-icon-5 m-0",name:"Duotune/arr072"})]})})}function $(s){var i=s.query,b=s.style,p=b===void 0?"normal":b,v=(0,I.gk)({variables:(0,_.Z)({},i),fetchPolicy:"cache-and-network"}),y=v.data,D=v.refetch,h=(y||{}).articles||{edges:[],current:0,total:0},o=(0,E.useMemo)(function(){return h.edges.map(function(n){return n.node})},[h.edges]),C=(0,E.useCallback)(function(n){console.log(n)},[]),P=(0,E.useState)([]),f=(0,u.Z)(P,2),j=f[0],Z=f[1],t=(0,E.useCallback)(function(n,d){Z(d)},[Z]);return(0,e.jsxs)("div",{className:"tab-content",children:[p=="small"&&(0,e.jsxs)("div",{className:"d-flex flex-wrap flex-stack pb-7",children:[(0,e.jsxs)("div",{className:"d-flex flex-wrap align-items-center my-1",children:[(0,e.jsxs)("h3",{className:"fw-bolder me-5 my-1",children:["\u6587\u7AE0 (",h.total,")"]}),(0,e.jsx)(l.II.Search,{size:"sm",placeholder:"\u641C\u7D22",boxClassName:"my-1",className:"form-control-white  w-150px ps-9"})]}),(0,e.jsxs)("div",{className:"d-flex flex-wrap my-1",children:[(0,e.jsxs)("ul",{style:{display:"none"},className:"nav nav-pills me-6 mb-2 mb-sm-0",children:[(0,e.jsx)("li",{className:"nav-item m-0",children:(0,e.jsx)("a",{className:"btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary me-3",href:"#kt_project_users_card_pane",children:(0,e.jsx)(A.ZP,{name:"Duotune/gen024",className:"svg-icon-2"})})}),(0,e.jsx)("li",{className:"nav-item m-0",children:(0,e.jsx)("a",{className:"btn btn-sm btn-icon btn-light btn-color-muted btn-active-primary active",href:"#kt_project_users_table_pane",children:(0,e.jsx)(A.ZP,{name:"Duotune/abs015",className:"svg-icon-2"})})})]}),(0,e.jsxs)("div",{className:"d-flex my-0",children:[(0,e.jsx)(l.ub,{size:"sm",className:"form-select-white w-125px me-5",placeholder:"\u53D1\u5E03\u65F6\u95F4",options:[{label:"\u5168\u90E8\u65F6\u95F4",value:"all"},{label:"\u4ECA\u5E74",value:"thisyear"},{label:"\u8FD9\u4E2A\u6708",value:"thismonth"},{label:"\u6700\u8FD1\u4E00\u4E2A\u6708",value:"lastmonth"},{label:"\u6700\u8FD190\u5929",value:"last90days"}]}),(0,e.jsx)(l.ub,{size:"sm",className:"form-select-white w-125px",placeholder:"\u72B6\u6001",options:[{label:"\u5168\u90E8\u72B6\u6001",value:"all"},{label:"\u8349\u7A3F",value:"DRAFT"},{label:"\u5DF2\u53D1\u5E03",value:"PUBLISHED"},{label:"\u7B49\u5F85\u53D1\u5E03",value:"SCHEDULED"}]})]})]})]}),(0,e.jsxs)(l.Zb,{flush:!0,className:T()((0,r.Z)({},"mt-6 mt-xl-9",p==="normal")),headerClassName:"mt-5",children:[p==="normal"&&(0,e.jsxs)(l.Zb.Header,{className:"pt-8",children:[(0,e.jsx)(l.Zb.Title,{className:"flex-column",children:(0,e.jsx)(l.II.Search,{solid:!0,className:"w-250px",placeholder:"\u641C\u7D22\u6587\u7AE0",onSearch:C})}),(0,e.jsx)(l.Zb.Toolbar,{children:(0,e.jsxs)("div",{className:"d-flex justify-content-end",children:[!!j.length&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.zx,{variant:"primary",icon:(0,e.jsx)(A.ZP,{className:"svg-icon-2",name:"Duotune/gen016"}),className:"me-3",children:"\u6279\u91CF\u53D1\u5E03"}),(0,e.jsx)(l.zx,{variant:"danger",icon:(0,e.jsx)(A.ZP,{className:"svg-icon-2",name:"Duotune/gen027"}),children:"\u6279\u91CF\u5220\u9664"})]}),!j.length&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.zx,{variant:"primary",className:"me-3",icon:(0,e.jsx)(A.ZP,{className:"svg-icon-2",name:"Duotune/gen031"}),children:"\u8FC7\u6EE4\u7B5B\u9009"}),(0,e.jsx)(l.zx,{as:O.Link,variant:"primary",icon:(0,e.jsx)(A.ZP,{className:"svg-icon-2",name:"Duotune/arr075"}),to:"/cms/articles/new",children:"\u65B0\u5EFA\u6587\u7AE0"})]})]})})]}),(0,e.jsx)(l.Zb.Body,{className:"pt-0",children:h.total?(0,e.jsx)(l.iA,{rowKey:"id",rowSelection:{type:"checkbox",onChange:t,selectedRowKeys:(j||[]).map(function(n){return n.id}),renderTitle:function(d){return(0,e.jsxs)(e.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,e.jsx)("span",{className:"mx-2",children:d}),"\u7BC7\u6587\u7AE0"]})},toolbar:p=="small"&&function(n,d){return(0,e.jsx)(K,{selectedRows:d,refetch:D})}},pagination:h,dataSource:o,columns:[{title:"\u6807\u9898",dataIndex:"title",key:"title",render:function(d,m){return(0,e.jsxs)("div",{className:"d-flex flex-column",children:[(0,e.jsx)(O.Link,{to:"/cms/articles/".concat(m.id,"/edit"),className:"text-gray-800 text-hover-primary mb-1",children:d}),(0,e.jsxs)("span",{className:"text-gray-500",children:[m.channels.map(function(z){return(0,e.jsx)(l.Ct,{className:"me-2",children:z.fullName},z.id)}),w()(m.createdAt).fromNow()]})]})}},{title:"\u72B6\u6001",dataIndex:"status",width:120,render:function(d){var m={DRAFT:{title:"\u8349\u7A3F",lightStyle:"danger"},PUBLISHED:{title:"\u5DF2\u53D1\u5E03"},SCHEDULED:{title:"\u8BA1\u5212",lightStyle:"primary"}};return(0,e.jsx)(l.Ct,{lightStyle:m[d].lightStyle,children:m[d].title})}},{title:"\u64CD\u4F5C",key:"action",width:140,render:function(d,m){return(0,e.jsx)(U,{data:m,refetch:D})}}]}):(0,e.jsx)(l.HY,{title:"\u65B0\u589E\u6587\u7AE0",description:"\u8BE5\u680F\u76EE\u8FD8\u662F\u7A7A\u7684\uFF0C\u6CA1\u6709\u4EFB\u4F55\u6587\u7AE0",image:"/assets/media/illustrations/sigma-1/4.png",children:(0,e.jsx)(l.zx,{as:O.Link,variant:"primary",to:"/cms/articles/new",children:"\u65B0\u5EFA\u6587\u7AE0"})})})]})]})}F.default=$},64458:function(W,F,a){"use strict";a.d(F,{gk:function(){return I},$C:function(){return R},vO:function(){return $},uw:function(){return b},Mq:function(){return v},eU:function(){return D},nT:function(){return o},V7:function(){return P},OX:function(){return Z}});var r=a(11849),u=a(20310),_=a(49704),g=a(93633),M=a(21919),x,E,B,N,A,O,L,S,T,c={},w=(0,_.Ps)(x||(x=(0,u.Z)([`
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
    `])));function I(t){var n=(0,r.Z)((0,r.Z)({},c),t);return g.a(w,n)}function l(t){var n=_objectSpread(_objectSpread({},c),t);return Apollo.useLazyQuery(w,n)}var e=(0,_.Ps)(E||(E=(0,u.Z)([`
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
    `])));function R(t){var n=(0,r.Z)((0,r.Z)({},c),t);return g.a(e,n)}function K(t){var n=_objectSpread(_objectSpread({},c),t);return Apollo.useLazyQuery(e,n)}var U=(0,_.Ps)(B||(B=(0,u.Z)([`
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
    `])));function $(t){var n=(0,r.Z)((0,r.Z)({},c),t);return g.a(U,n)}function s(t){var n=_objectSpread(_objectSpread({},c),t);return Apollo.useLazyQuery(U,n)}var i=(0,_.Ps)(N||(N=(0,u.Z)([`
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
    `])));function b(t){var n=(0,r.Z)((0,r.Z)({},c),t);return M.D(i,n)}var p=(0,_.Ps)(A||(A=(0,u.Z)([`
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
    `])));function v(t){var n=(0,r.Z)((0,r.Z)({},c),t);return M.D(p,n)}var y=(0,_.Ps)(O||(O=(0,u.Z)([`
    mutation deleteArticle($id: ID!) {
  deleteArticle(id: $id)
}
    `])));function D(t){var n=(0,r.Z)((0,r.Z)({},c),t);return M.D(y,n)}var h=(0,_.Ps)(L||(L=(0,u.Z)([`
    mutation deleteManyArticles($ids: [ID]!) {
  deleteManyArticles(ids: $ids)
}
    `])));function o(t){var n=(0,r.Z)((0,r.Z)({},c),t);return M.D(h,n)}var C=(0,_.Ps)(S||(S=(0,u.Z)([`
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
    `])));function P(t){var n=(0,r.Z)((0,r.Z)({},c),t);return g.a(C,n)}function f(t){var n=_objectSpread(_objectSpread({},c),t);return Apollo.useLazyQuery(C,n)}var j=(0,_.Ps)(T||(T=(0,u.Z)([`
    mutation createArticleChannel($input: ArticleChannelCreateInput!) {
  createArticleChannel(input: $input) {
    id
  }
}
    `])));function Z(t){var n=(0,r.Z)((0,r.Z)({},c),t);return M.D(j,n)}}}]);
