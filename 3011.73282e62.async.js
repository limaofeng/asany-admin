(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[3011],{250:function($,W,i){"use strict";var g=i(20310),f=i(49704),S,C,B,p,o={},M=(0,f.Ps)(S||(S=(0,g.Z)([`
    query websites {
  websites {
    id
    name
    description
  }
}
    `])));function I(a){var u=_objectSpread(_objectSpread({},o),a);return Apollo.useQuery(M,u)}function F(a){var u=_objectSpread(_objectSpread({},o),a);return Apollo.useLazyQuery(M,u)}var D=(0,f.Ps)(C||(C=(0,g.Z)([`
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
    `])));function w(a){var u=_objectSpread(_objectSpread({},o),a);return Apollo.useQuery(D,u)}function N(a){var u=_objectSpread(_objectSpread({},o),a);return Apollo.useLazyQuery(D,u)}var k=(0,f.Ps)(B||(B=(0,g.Z)([`
    mutation createWebsite($input: WebsiteCreateInput!) {
  createWebsite(input: $input) {
    id
    name
  }
}
    `])));function s(a){var u=_objectSpread(_objectSpread({},o),a);return Apollo.useMutation(k,u)}var e=(0,f.Ps)(p||(p=(0,g.Z)([`
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
    `])));function R(a){var u=_objectSpread(_objectSpread({},o),a);return Apollo.useQuery(e,u)}function K(a){var u=_objectSpread(_objectSpread({},o),a);return Apollo.useLazyQuery(e,u)}},13011:function($,W,i){"use strict";i.r(W);var g=i(86582),f=i(2824),S=i(93224),C=i(3182),B=i(94043),p=i.n(B),o=i(67294),M=i(28865),I=i(80129),F=i.n(I),D=i(73727),w=i(250),N=i(13893),k=i(75468),s=i(53704),e=i(85893);function R(a){var u=a.data,j=a.history,E=a.onDelete,y=(0,o.useCallback)(function(){var b=(0,C.Z)(p().mark(function L(O){var P,x;return p().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return P="\u786E\u5B9A\u5220\u9664\u95E8\u5E97 \u201C".concat(O.name,"\u201D \u5417\uFF1F"),c.next=3,s.u_.confirm({title:"\u786E\u5B9A\u5220\u9664",content:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"tip-confirm",children:P}),(0,e.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]}),okClassName:"btn-danger",okText:"\u5220\u9664"});case 3:if(x=c.sent,x.isConfirmed){c.next=6;break}return c.abrupt("return");case 6:return c.next=8,E(O.id);case 8:s.FN.success("\u95E8\u5E97 \u201C".concat(O.name,"\u201D \u5220\u9664\u6210\u529F"),2e3,{placement:"bottom-start",progressBar:!0});case 9:case"end":return c.stop()}},L)}));return function(L){return b.apply(this,arguments)}}(),[E]),v=(0,o.useCallback)(function(b){b.key=="view"?j.push("/website/landing/stores/".concat(u.id)):b.key=="delete"&&y(u)},[u,y,j]);return(0,e.jsx)(s.Lt,{overlay:(0,e.jsxs)(s.v2,{onClick:v,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold fs-8 w-125px py-4",children:[(0,e.jsx)(s.v2.Item,{className:"px-3",children:"\u7F16\u8F91"},"view"),(0,e.jsx)(s.v2.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",children:(0,e.jsxs)(s.zx,{className:"fs-8",variant:"light",activeColor:"light-primary",children:["\u64CD\u4F5C",(0,e.jsx)(M.JO,{className:"svg-icon-5 ms-2 me-n1",name:"Duotune/arr072"})]})})}function K(a){var u,j,E=a.history,y=a.location,v=(0,o.useMemo)(function(){var n=a.location.query,r=n.q,t=(0,S.Z)(n,["q"]);return r&&(t.filter={name_contains:r}),t},[a.location]),b=(0,o.useMemo)(function(){if(!v.orderBy)return{order:"descend",field:"createdAt"};var n=v.orderBy.split("_"),r=(0,f.Z)(n,2),t=r[0],m=r[1];return{order:m=="desc"?"descend":"ascend",field:t}},[v.orderBy]),L=(0,w.useDeleteStoreMutation)({refetchQueries:[w.LandingStoresDocument]}),O=(0,f.Z)(L,1),P=O[0],x=(0,w.useLandingStoresQuery)({fetchPolicy:"cache-and-network",variables:v}),l=x.data,c=x.loading,d=x.previousData,U=(0,o.useMemo)(function(){return c?(d==null?void 0:d.total.totalCount)||0:(l==null?void 0:l.total.totalCount)||0},[l==null?void 0:l.total.totalCount,c,d==null?void 0:d.total]),z=(0,o.useMemo)(function(){return c?(d==null?void 0:d.landingStores)||{total:0,current:1}:(l==null?void 0:l.landingStores)||{total:0,current:1}},[l==null?void 0:l.landingStores,c,d==null?void 0:d.landingStores]),H=(0,o.useMemo)(function(){var n;if(c){var r;return((d==null||(r=d.landingStores)===null||r===void 0?void 0:r.edges)||[]).map(function(t){return t.node})}return((l==null||(n=l.landingStores)===null||n===void 0?void 0:n.edges)||[]).map(function(t){return t.node})},[l==null?void 0:l.landingStores,c,d==null?void 0:d.landingStores]),J=(0,o.useCallback)(function(n){E.replace(y.pathname+"?"+F().stringify({q:n}))},[E,y.pathname]),Y=(0,o.useCallback)(function(n,r,t){var m,h={};if((m=v.filter)!==null&&m!==void 0&&m.name_contains){var _;h.q=(_=v.filter)===null||_===void 0?void 0:_.name_contains}t&&(h.orderBy=t.field+"_"+(t.order=="ascend"?"asc":"desc")),h.page=n.current,E.replace(y.pathname+"?"+F().stringify(h))},[E,y.pathname,(u=v.filter)===null||u===void 0?void 0:u.name_contains]),T=(0,o.useCallback)((0,C.Z)(p().mark(function n(){var r,t,m,h,_,Z=arguments;return p().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:for(r=Z.length,t=new Array(r),m=0;m<r;m++)t[m]=Z[m];return A.next=3,P({variables:{ids:t}});case 3:return h=A.sent,_=h.data,A.abrupt("return",(_==null?void 0:_.deleteLandingStore)||0);case 6:case"end":return A.stop()}},n)})),[P]),Q=(0,o.useCallback)(function(n){return(0,C.Z)(p().mark(function r(){var t,m;return p().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return t="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(n.length," \u4E2A\u95E8\u5E97\u5417\uFF1F"),_.next=3,s.u_.confirm({title:"\u786E\u5B9A\u5220\u9664",content:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"tip-confirm",children:t}),(0,e.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]}),okClassName:"btn-danger",okText:"\u5220\u9664"});case 3:if(m=_.sent,m.isConfirmed){_.next=6;break}return _.abrupt("return");case 6:return _.next=8,T.apply(void 0,(0,g.Z)(n));case 8:s.FN.success("\u95E8\u5E97\u6279\u91CF\u5220\u9664\u6210\u529F",2e3,{placement:"bottom-start",progressBar:!0});case 9:case"end":return _.stop()}},r)}))},[T]),G=(0,o.useMemo)(function(){return function(n){return(0,e.jsx)("div",{children:(0,e.jsx)(s.zx,{color:"success",onClick:Q(n),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},[Q]);return(0,e.jsxs)(k.v,{footer:!1,children:[(0,e.jsxs)("div",{className:"d-flex flex-wrap flex-stack pb-7",children:[(0,e.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[(0,e.jsxs)("h3",{className:"fw-bolder me-5",children:["\u95E8\u5E97 (",U,")"]}),(0,e.jsx)(s.II.Search,{onSearch:J,defaultValue:(j=v.filter)===null||j===void 0?void 0:j.name_contains,placeholder:"\u641C\u7D22",className:"border-body bg-body w-250px"})]}),(0,e.jsx)(N.Z,{children:(0,e.jsx)("div",{className:"d-flex my-0",children:(0,e.jsx)(s.zx,{as:D.Link,to:"/website/landing/stores/new",children:"\u65B0\u589E\u95E8\u5E97"})})})]}),!U&&!c?(0,e.jsx)(s.Zb,{className:"mb-5 mb-xl-10",children:(0,e.jsx)(s.HY,{title:"\u8FD8\u6CA1\u6709\u95E8\u5E97",description:"\u9A6C\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u95E8\u5E97\u8BD5\u8BD5",image:"/assets/media/illustrations/sigma-1/4.png",children:(0,e.jsx)(s.zx,{as:D.Link,variant:"primary",to:"/website/landing/stores/new",children:"\u65B0\u589E\u95E8\u5E97"})})}):(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(s.Zb,{className:"mb-5 mb-xl-10",children:(0,e.jsx)(s.Zb.Body,{children:(0,e.jsx)(s.bH,{overlayClassName:"bg-white bg-opacity-25",loading:c,children:(0,e.jsx)(s.iA,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(r){return(0,e.jsxs)(e.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,e.jsx)("span",{className:"mx-2",children:r}),"\u4E2A\u95E8\u5E97"]})},toolbar:G},noRowsRenderer:function(){return(0,e.jsx)(s.HY,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:[{key:"code",title:"\u5E97\u53F7",sorter:!0,sortOrder:b.field=="code"?b.order:void 0,width:80},{key:"name",title:"\u540D\u79F0",sorter:!0,sortOrder:b.field=="name"?b.order:void 0,render:function(r,t){return(0,e.jsx)("div",{children:(0,e.jsx)(D.Link,{className:"text-gray-700",to:"/website/landing/stores/".concat(t.id),children:r})})}},{key:"qrCode",title:"\u4E8C\u7EF4\u7801",width:60,render:function(r){return r?(0,e.jsx)("img",{src:"//47.103.119.188:8000"+"/preview/".concat(r.id),className:"h-30px w-30px"}):(0,e.jsx)(M.JO,{className:"svg-icon-2qx text-muted",name:"Bootstrap/qr-code"})}},{key:"actions",title:"\u64CD\u4F5C",width:100,render:function(r,t){return(0,e.jsx)(R,{onDelete:T,history:a.history,data:t})}}],pagination:z,onChange:Y,dataSource:H})})})})})]})}W.default=K}}]);
