(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[745],{250:function(z,N,s){"use strict";var E=s(20310),h=s(49704),w,C,F,p,u={},M=(0,h.Ps)(w||(w=(0,E.Z)([`
    query websites {
  websites {
    id
    name
    description
  }
}
    `])));function S(_){var a=_objectSpread(_objectSpread({},u),_);return Apollo.useQuery(M,a)}function T(_){var a=_objectSpread(_objectSpread({},u),_);return Apollo.useLazyQuery(M,a)}var j=(0,h.Ps)(C||(C=(0,E.Z)([`
    query website($id: ID!) {
  website(id: $id) {
    id
    name
    description
    channel {
      id
    }
    application {
      id
    }
  }
}
    `])));function L(_){var a=_objectSpread(_objectSpread({},u),_);return Apollo.useQuery(j,a)}function U(_){var a=_objectSpread(_objectSpread({},u),_);return Apollo.useLazyQuery(j,a)}var I=(0,h.Ps)(F||(F=(0,E.Z)([`
    mutation createWebsite($input: WebsiteCreateInput!) {
  createWebsite(input: $input) {
    id
    name
  }
}
    `])));function i(_){var a=_objectSpread(_objectSpread({},u),_);return Apollo.useMutation(I,a)}var W=(0,h.Ps)(p||(p=(0,E.Z)([`
    query websiteArticleCategories($id: ID!) {
  categories: articleCategories(filter: {parent: {id: $id, subColumns: true}}) {
    id
    icon
    name
    fullName
    path
    index
    level
    image
    storeTemplate {
      id
    }
    parent {
      id
    }
  }
}
    `])));function e(_){var a=_objectSpread(_objectSpread({},u),_);return Apollo.useQuery(W,a)}function K(_){var a=_objectSpread(_objectSpread({},u),_);return Apollo.useLazyQuery(W,a)}},80745:function(z,N,s){"use strict";s.r(N);var E=s(86582),h=s(2824),w=s(93224),C=s(3182),F=s(94043),p=s.n(F),u=s(67294),M=s(28865),S=s(80129),T=s.n(S),j=s(73727),L=s(250),U=s(50480),I=s(75468),i=s(53704),W=s(88097),e=s(85893);function K(a){var f=a.data,x=a.history,y=a.onDelete,D=(0,u.useCallback)(function(){var g=(0,C.Z)(p().mark(function k(O){var B,P;return p().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return B="\u786E\u5B9A\u5220\u9664\u6D77\u62A5 \u201C".concat(O.name,"\u201D \u5417\uFF1F"),d.next=3,i.u_.confirm({title:"\u786E\u5B9A\u5220\u9664",content:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"tip-confirm",children:B}),(0,e.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]}),okClassName:"btn-danger",okText:"\u5220\u9664"});case 3:if(P=d.sent,P.isConfirmed){d.next=6;break}return d.abrupt("return");case 6:return d.next=8,y(O.id);case 8:i.FN.success("\u6D77\u62A5 \u201C".concat(O.name,"\u201D \u5220\u9664\u6210\u529F"),2e3,{placement:"bottom-start",progressBar:!0});case 9:case"end":return d.stop()}},k)}));return function(k){return g.apply(this,arguments)}}(),[y]),v=(0,u.useCallback)(function(g){g.key=="view"?x.push("/website/landing/posters/".concat(f.id)):g.key=="delete"&&D(f)},[f,D,x]);return(0,e.jsx)(i.Lt,{overlay:(0,e.jsxs)(i.v2,{onClick:v,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold fs-8 w-125px py-4",children:[(0,e.jsx)(i.v2.Item,{className:"px-3",children:"\u7F16\u8F91"},"view"),(0,e.jsx)(i.v2.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",children:(0,e.jsxs)(i.zx,{className:"fs-8",variant:"light",activeColor:"light-primary",children:["\u64CD\u4F5C",(0,e.jsx)(M.JO,{className:"svg-icon-5 ms-2 me-n1",name:"Duotune/arr072"})]})})}function _(a){var f,x,y=a.history,D=a.location,v=(0,u.useMemo)(function(){var r=a.location.query,n=r.q,t=(0,w.Z)(r,["q"]);return n&&(t.filter={name_contains:n}),t},[a.location]),g=(0,u.useMemo)(function(){if(!v.orderBy)return{order:"descend",field:"createdAt"};var r=v.orderBy.split("_"),n=(0,h.Z)(r,2),t=n[0],m=n[1];return{order:m=="desc"?"descend":"ascend",field:t}},[v.orderBy]),k=(0,L.useDeletePosterMutation)({refetchQueries:[L.LandingPostersDocument]}),O=(0,h.Z)(k,1),B=O[0],P=(0,L.useLandingPostersQuery)({fetchPolicy:"cache-and-network",variables:v}),o=P.data,d=P.loading,l=P.previousData,Q=(0,u.useMemo)(function(){return d?(l==null?void 0:l.total.totalCount)||0:(o==null?void 0:o.total.totalCount)||0},[o==null?void 0:o.total.totalCount,d,l==null?void 0:l.total]),H=(0,u.useMemo)(function(){return d?(l==null?void 0:l.landingPosters)||{total:0,current:1}:(o==null?void 0:o.landingPosters)||{total:0,current:1}},[o==null?void 0:o.landingPosters,d,l==null?void 0:l.landingPosters]),J=(0,u.useMemo)(function(){var r;if(d){var n;return((l==null||(n=l.landingPosters)===null||n===void 0?void 0:n.edges)||[]).map(function(t){return t.node})}return((o==null||(r=o.landingPosters)===null||r===void 0?void 0:r.edges)||[]).map(function(t){return t.node})},[o==null?void 0:o.landingPosters,d,l==null?void 0:l.landingPosters]),Y=(0,u.useCallback)(function(r){y.replace(D.pathname+"?"+T().stringify({q:r}))},[y,D.pathname]),G=(0,u.useCallback)(function(r,n,t){var m,b={};if((m=v.filter)!==null&&m!==void 0&&m.name_contains){var c;b.q=(c=v.filter)===null||c===void 0?void 0:c.name_contains}t&&(b.orderBy=t.field+"_"+(t.order=="ascend"?"asc":"desc")),b.page=r.current,y.replace(D.pathname+"?"+T().stringify(b))},[y,D.pathname,(f=v.filter)===null||f===void 0?void 0:f.name_contains]),R=(0,u.useCallback)((0,C.Z)(p().mark(function r(){var n,t,m,b,c,$=arguments;return p().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:for(n=$.length,t=new Array(n),m=0;m<n;m++)t[m]=$[m];return A.next=3,B({variables:{ids:t}});case 3:return b=A.sent,c=b.data,A.abrupt("return",(c==null?void 0:c.deleteLandingPoster)||0);case 6:case"end":return A.stop()}},r)})),[B]),Z=(0,u.useCallback)(function(r){return(0,C.Z)(p().mark(function n(){var t,m;return p().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(r.length," \u4E2A\u6D77\u62A5\u5417\uFF1F"),c.next=3,i.u_.confirm({title:"\u786E\u5B9A\u5220\u9664",content:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"tip-confirm",children:t}),(0,e.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]}),okClassName:"btn-danger",okText:"\u5220\u9664"});case 3:if(m=c.sent,m.isConfirmed){c.next=6;break}return c.abrupt("return");case 6:return c.next=8,R.apply(void 0,(0,E.Z)(r));case 8:i.FN.success("\u6D77\u62A5\u6279\u91CF\u5220\u9664\u6210\u529F",2e3,{placement:"bottom-start",progressBar:!0});case 9:case"end":return c.stop()}},n)}))},[R]),V=(0,u.useMemo)(function(){return function(r){return(0,e.jsx)("div",{children:(0,e.jsx)(i.zx,{color:"success",onClick:Z(r),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},[Z]);return(0,e.jsxs)(I.v,{footer:!1,children:[(0,e.jsxs)("div",{className:"d-flex flex-wrap flex-stack pb-7",children:[(0,e.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[(0,e.jsxs)("h3",{className:"fw-bolder me-5",children:["\u6D77\u62A5 (",Q,")"]}),(0,e.jsx)(i.II.Search,{placeholder:"\u641C\u7D22",onSearch:Y,defaultValue:(x=v.filter)===null||x===void 0?void 0:x.name_contains,className:"border-body bg-body w-250px"})]}),(0,e.jsx)(U.Z,{children:(0,e.jsx)("div",{className:"d-flex my-0",children:(0,e.jsx)(i.zx,{as:j.Link,to:"/website/landing/posters/new",children:"\u65B0\u5EFA\u6D77\u62A5"})})})]}),!Q&&!d?(0,e.jsx)(i.Zb,{className:"mb-5 mb-xl-10",children:(0,e.jsx)(i.HY,{title:"\u8FD8\u6CA1\u6709\u6D77\u62A5",description:"\u9A6C\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u6D77\u62A5\u8BD5\u8BD5",image:"/assets/media/illustrations/sigma-1/4.png",children:(0,e.jsx)(i.zx,{as:j.Link,variant:"primary",to:"/website/landing/posters/new",children:"\u65B0\u5EFA\u6D77\u62A5"})})}):(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(i.Zb,{className:"mb-5 mb-xl-10",children:(0,e.jsx)(i.Zb.Body,{children:(0,e.jsx)(i.bH,{overlayClassName:"bg-white bg-opacity-25",loading:d,children:(0,e.jsx)(i.iA,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(n){return(0,e.jsxs)(e.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,e.jsx)("span",{className:"mx-2",children:n}),"\u4E2A\u6D77\u62A5"]})},toolbar:V},noRowsRenderer:function(){return(0,e.jsx)(i.HY,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:[{key:"name",title:"\u540D\u79F0",sorter:!0,sortOrder:g.field=="name"?g.order:void 0,render:function(n,t){return(0,e.jsx)("div",{className:"ps-2",children:(0,e.jsx)(j.Link,{className:"text-gray-700",to:"/website/landing/posters/".concat(t.id),children:n})})}},{key:"background",title:"\u80CC\u666F\u56FE",width:100,render:function(n){return n?(0,e.jsx)("div",{className:"d-flex w-30px justify-content-center",children:(0,e.jsx)("img",{src:"//47.103.119.188:8000"+"/preview/".concat(n.id),className:"h-30px w-20px"})}):(0,e.jsx)(M.JO,{className:"svg-icon-2qx text-muted",name:"Bootstrap/file-image"})}},{key:"music",title:"\u80CC\u666F\u97F3\u4E50",width:"20%",render:function(n){return(0,e.jsx)("div",{className:"d-flex list-music-preview",children:n?(0,e.jsx)(W.B,{uploadFile:n,status:"completed"}):"\u65E0"})}},{key:"actions",title:"\u64CD\u4F5C",width:100,render:function(n,t){return(0,e.jsx)(K,{onDelete:R,history:a.history,data:t})}}],pagination:H,onChange:G,dataSource:J})})})})})]})}N.default=_}}]);
