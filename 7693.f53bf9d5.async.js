(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[7693],{50480:function(w,B,n){"use strict";var p=n(28865),h=n(51248),_=n(85893);function y(E){var t=E.layout,A=E.children,M=E.onLayout;return(0,_.jsxs)("div",{className:"d-flex flex-wrap my-1",children:[t&&(0,_.jsxs)("ul",{className:"nav nav-pills me-6 mb-2 mb-sm-0",children:[(0,_.jsx)("li",{className:"nav-item m-0 me-3",children:(0,_.jsx)(h.Z,{variant:"light",color:"muted",active:t=="card",activeColor:"primary",onClick:M==null?void 0:M.bind(null,"card"),icon:(0,_.jsx)(p.ZP,{name:"Duotune/gen024",className:"svg-icon-1"})})}),(0,_.jsx)("li",{className:"nav-item m-0",children:(0,_.jsx)(h.Z,{variant:"light",color:"muted",active:t=="table",onClick:M==null?void 0:M.bind(null,"table"),activeColor:"primary",className:"me-3",icon:(0,_.jsx)(p.ZP,{name:"Duotune/abs015",className:"svg-icon-1"})})})]}),A]})}B.Z=y},88447:function(w,B,n){"use strict";n.d(B,{f1:function(){return L},Nk:function(){return D},sW:function(){return S},SP:function(){return a}});var p=n(11849),h=n(20310),_=n(76058),y=n(64718),E=n(21919),t,A,M,Z,F,P={},I=(0,_.Ps)(t||(t=(0,h.Z)([`
    fragment ProcessModelPart on ProcessModel {
  id
  key
  name
  description
  version
  createdBy
  created
  lastUpdated
  lastUpdatedBy
}
    `]))),L=(0,_.Ps)(A||(A=(0,h.Z)([`
    query processModels($where: ProcessModelWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy) {
  total: processModels(pageSize: 1, where: {user: "self"}) {
    totalCount
  }
  processModels(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    totalPage
    pageSize
    current: currentPage
    total: totalCount
    edges {
      node {
        ...ProcessModelPart
      }
    }
  }
}
    `,""])),I);function a(l){var d=(0,p.Z)((0,p.Z)({},P),l);return y.a(L,d)}function e(l){var d=_objectSpread(_objectSpread({},P),l);return Apollo.useLazyQuery(L,d)}var U=(0,_.Ps)(M||(M=(0,h.Z)([`
    query processModel($id: ID!) {
  processModel(id: $id) {
    ...ProcessModelPart
    editorJson
  }
}
    `,""])),I);function S(l){var d=(0,p.Z)((0,p.Z)({},P),l);return y.a(U,d)}function K(l){var d=_objectSpread(_objectSpread({},P),l);return Apollo.useLazyQuery(U,d)}var f=(0,_.Ps)(Z||(Z=(0,h.Z)([`
    mutation importProcessModel($file: Upload!) {
  importProcessModel(file: $file) {
    ...ProcessModelPart
  }
}
    `,""])),I);function g(l){var d=_objectSpread(_objectSpread({},P),l);return Apollo.useMutation(f,d)}var j=(0,_.Ps)(F||(F=(0,h.Z)([`
    mutation deleteProcessModel($id: ID!) {
  deleteProcessModel(id: $id)
}
    `])));function D(l){var d=(0,p.Z)((0,p.Z)({},P),l);return E.D(j,d)}},87693:function(w,B,n){"use strict";n.r(B);var p=n(86582),h=n(2824),_=n(93224),y=n(39428),E=n(3182),t=n(67294),A=n(28865),M=n(80129),Z=n.n(M),F=n(73727),P=n(88447),I=n(50480),L=n(18071),a=n(74200),e=n(85893),U=["q"];function S(f){var g=f.data,j=f.history,D=f.onDelete,l=f.onDesign,d=f.baseUrl,R=(0,t.useCallback)(function(){var C=(0,E.Z)((0,y.Z)().mark(function $(k){var T,O;return(0,y.Z)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return T="\u786E\u5B9A\u5220\u9664\u6D3B\u52A8 \u201C".concat(k.name,"\u201D \u5417\uFF1F"),c.next=3,a.u_.confirm({title:"\u786E\u5B9A\u5220\u9664",content:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"tip-confirm",children:T}),(0,e.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]}),okClassName:"btn-danger",okText:"\u5220\u9664"});case 3:if(O=c.sent,O.isConfirmed){c.next=6;break}return c.abrupt("return");case 6:return c.next=8,D(k.id);case 8:a.FN.success("\u6D3B\u52A8 \u201C".concat(k.name,"\u201D \u5220\u9664\u6210\u529F"),2e3,{placement:"bottom-start",progressBar:!0});case 9:case"end":return c.stop()}},$)}));return function($){return C.apply(this,arguments)}}(),[D]),b=(0,t.useCallback)(function(C){C.key=="view"?j.push("".concat(d,"/").concat(g.id)):C.key=="delete"?R(g):C.key=="design"&&l(g.id)},[d,g,R,j,l]);return(0,e.jsx)(a.Lt,{overlay:(0,e.jsxs)(a.v2,{onClick:b,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold fs-8 w-125px py-4",children:[(0,e.jsx)(a.v2.Item,{className:"px-3",children:"\u7F16\u8F91"},"view"),(0,e.jsx)(a.v2.Separator,{className:"my-1"}),(0,e.jsx)(a.v2.Item,{className:"px-3",children:"\u8BBE\u8BA1"},"design"),(0,e.jsx)(a.v2.Separator,{className:"my-1"}),(0,e.jsx)(a.v2.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",children:(0,e.jsxs)(a.zx,{className:"fs-8",variant:"light",activeColor:"light-primary",children:["\u64CD\u4F5C",(0,e.jsx)(A.JO,{className:"svg-icon-5 ms-2 me-n1",name:"Duotune/arr072"})]})})}function K(f){var g,j,D=f.history,l=f.location,d=l.pathname,R=(0,t.useCallback)(function(r){D.push("/workflow/models/".concat(r,"/design"))},[D]),b=(0,t.useMemo)(function(){var r=f.location.query,o=r.q,s=(0,_.Z)(r,U);return o&&(s.filter={user:"self",name_contains:o}),s},[f.location]),C=(0,t.useMemo)(function(){if(!b.orderBy)return{order:"descend",field:"createdAt"};var r=b.orderBy.split("_"),o=(0,h.Z)(r,2),s=o[0],v=o[1];return{order:v=="desc"?"descend":"ascend",field:s}},[b.orderBy]),$=(0,P.Nk)({refetchQueries:[{query:P.f1,variables:{filter:{user:"self"}}}]}),k=(0,h.Z)($,1),T=k[0],O=(0,P.SP)({fetchPolicy:"cache-and-network",variables:b}),u=O.data,c=O.loading,i=O.previousData,z=(0,t.useMemo)(function(){return c?(i==null?void 0:i.total.totalCount)||0:(u==null?void 0:u.total.totalCount)||0},[u==null?void 0:u.total.totalCount,c,i==null?void 0:i.total]),J=(0,t.useMemo)(function(){return c?(i==null?void 0:i.processModels)||{total:0,current:1}:(u==null?void 0:u.processModels)||{total:0,current:1}},[u==null?void 0:u.processModels,c,i==null?void 0:i.processModels]),Y=(0,t.useMemo)(function(){var r;if(c){var o;return((i==null||(o=i.processModels)===null||o===void 0?void 0:o.edges)||[]).map(function(s){return s.node})}return((u==null||(r=u.processModels)===null||r===void 0?void 0:r.edges)||[]).map(function(s){return s.node})},[u==null?void 0:u.processModels,c,i==null?void 0:i.processModels]),G=(0,t.useCallback)(function(r){D.replace(l.pathname+"?"+Z().stringify({q:r}))},[D,l.pathname]),V=(0,t.useCallback)(function(r,o,s){var v,x={};if((v=b.filter)!==null&&v!==void 0&&v.name_contains){var m;x.q=(m=b.filter)===null||m===void 0?void 0:m.name_contains}s&&(x.orderBy=s.field+"_"+(s.order=="ascend"?"asc":"desc")),x.page=r.current,D.replace(l.pathname+"?"+Z().stringify(x))},[D,l.pathname,(g=b.filter)===null||g===void 0?void 0:g.name_contains]),W=(0,t.useCallback)((0,E.Z)((0,y.Z)().mark(function r(){var o,s,v,x,m,H=arguments;return(0,y.Z)().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:for(o=H.length,s=new Array(o),v=0;v<o;v++)s[v]=H[v];return N.next=3,T({variables:{ids:s}});case 3:return x=N.sent,m=x.data,N.abrupt("return",(m==null?void 0:m.deleteProcessModel)||!1);case 6:case"end":return N.stop()}},r)})),[T]),Q=(0,t.useCallback)(function(r){return(0,E.Z)((0,y.Z)().mark(function o(){var s,v;return(0,y.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return s="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(r.length," \u4E2A\u6D3B\u52A8\u5417\uFF1F"),m.next=3,a.u_.confirm({title:"\u786E\u5B9A\u5220\u9664",content:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"tip-confirm",children:s}),(0,e.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]}),okClassName:"btn-danger",okText:"\u5220\u9664"});case 3:if(v=m.sent,v.isConfirmed){m.next=6;break}return m.abrupt("return");case 6:return m.next=8,W.apply(void 0,(0,p.Z)(r));case 8:a.FN.success("\u6D3B\u52A8\u6279\u91CF\u5220\u9664\u6210\u529F",2e3,{placement:"bottom-start",progressBar:!0});case 9:case"end":return m.stop()}},o)}))},[W]),X=(0,t.useMemo)(function(){return function(r){return(0,e.jsx)("div",{children:(0,e.jsx)(a.zx,{color:"success",onClick:Q(r),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},[Q]);return(0,e.jsxs)(L.vs,{loading:c,footer:!1,children:[(0,e.jsxs)("div",{className:"d-flex flex-wrap flex-stack pb-7",children:[(0,e.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[(0,e.jsxs)("h3",{className:"fw-bolder me-5",children:["\u6D41\u7A0B\u6A21\u578B (",z,")"]}),(0,e.jsx)(a.II.Search,{onSearch:G,defaultValue:(j=b.filter)===null||j===void 0?void 0:j.name_contains,placeholder:"\u641C\u7D22",className:"border-body bg-body w-250px"})]}),(0,e.jsx)(I.Z,{children:(0,e.jsx)("div",{className:"d-flex my-0"})})]}),!z&&!c?(0,e.jsx)(a.Zb,{className:"mb-5 mb-xl-10",children:(0,e.jsx)(a.HY,{title:"\u8FD8\u6CA1\u6709\u6D3B\u52A8",description:"\u9A6C\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u6D3B\u52A8\u8BD5\u8BD5",image:"/assets/media/illustrations/sigma-1/4.png",children:(0,e.jsx)(a.zx,{as:F.Link,variant:"primary",to:"${baseUrl}/new",children:"\u65B0\u5EFA\u6D41\u7A0B\u6A21\u578B"})})}):(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(a.Zb,{className:"mb-5 mb-xl-10",children:(0,e.jsx)(a.Zb.Body,{children:(0,e.jsx)(a.iA,{hover:!0,rowKey:"id",noRowsRenderer:function(){return(0,e.jsx)(a.HY,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},rowSelection:{type:"checkbox",renderTitle:function(o){return(0,e.jsxs)(e.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,e.jsx)("span",{className:"mx-2",children:o}),"\u4E2A\u6D3B\u52A8"]})},toolbar:X},columns:[{key:"name",title:"\u540D\u79F0",sorter:!0,sortOrder:C.field=="name"?C.order:void 0,render:function(o,s){return(0,e.jsx)("div",{className:"ps-2",children:(0,e.jsx)(F.Link,{className:"text-gray-700",to:"".concat(d,"/").concat(s.id),children:o})})}},{key:"actions",title:"\u64CD\u4F5C",width:100,render:function(o,s){return(0,e.jsx)(S,{baseUrl:d,onDelete:W,onDesign:R,history:f.history,data:s})}}],pagination:J,onChange:V,dataSource:Y})})})})]})}B.default=K}}]);
