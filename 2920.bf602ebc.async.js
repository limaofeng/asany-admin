(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[2920],{92957:function(S,b,e){"use strict";e.d(b,{ry:function(){return o},Tk:function(){return n},RE:function(){return A},x:function(){return B}});var d=e(11849),f=e(20310),E=e(76058),C=e(64718),O=e(21919),D,u,p,P,g={},y=(0,E.Ps)(D||(D=(0,f.Z)([`
    fragment OrganizationProfile on Organization {
  id
  code
  name
  logo
  description
  email
  url
  location {
    province
    city
    district
    street
  }
}
    `]))),o=(0,E.Ps)(u||(u=(0,f.Z)([`
    query organization($id: ID!) {
  organization(id: $id) {
    ...OrganizationProfile
  }
}
    `,""])),y);function n(c){var r=(0,d.Z)((0,d.Z)({},g),c);return C.a(o,r)}function I(c){var r=_objectSpread(_objectSpread({},g),c);return Apollo.useLazyQuery(o,r)}var F=(0,E.Ps)(p||(p=(0,f.Z)([`
    mutation updateOrganizationProfile($id: ID!, $input: UpdateOrganizationProfileUpdateInput!) {
  updateOrganizationProfile(id: $id, input: $input) {
    ...OrganizationProfile
  }
}
    `,""])),y);function A(c){var r=(0,d.Z)((0,d.Z)({},g),c);return O.D(F,r)}var M=(0,E.Ps)(P||(P=(0,f.Z)([`
    mutation renameOrganizationCode($id: ID!, $code: String!) {
  renameOrganizationCode(id: $id, code: $code) {
    ...OrganizationProfile
  }
}
    `,""])),y);function B(c){var r=(0,d.Z)((0,d.Z)({},g),c);return O.D(M,r)}},46518:function(S,b,e){"use strict";e.r(b),e.d(b,{default:function(){return c}});var d={};e.r(d);var f=e(11849),E=e(92957),C=e(39428),O=e(3182),D=e(93224),u=e(67294),p=e(73727),P=e(80129),g=e.n(P),y=e(76830),o=e(74200),n=e(85893),I=["q"];function F(r){var L,N,z=r.history,Z=r.location,k=r.hooks,U=r.columns,j=(0,u.useMemo)(function(){var i=r.location.query,l=i.q,m=(0,D.Z)(i,I);return l&&(m.filter={name_contains:l}),m},[r.location]),R=k.query({fetchPolicy:"cache-and-network",variables:j}),_=R.data,v=R.loading,K=R.previousData,a=_,t=K,T=(0,u.useMemo)(function(){return v?(t==null?void 0:t.total.totalCount)||0:(a==null?void 0:a.total.totalCount)||0},[a==null?void 0:a.total.totalCount,v,t==null?void 0:t.total]),W=(0,u.useMemo)(function(){return v?(t==null?void 0:t.connection)||{total:0,current:1}:(a==null?void 0:a.connection)||{total:0,current:1}},[a==null?void 0:a.connection,v,t==null?void 0:t.connection]),w=(0,u.useMemo)(function(){if(v){var i;return((t==null||(i=t.connection)===null||i===void 0?void 0:i.edges)||[]).map(function(l){return l.node})}return((a==null?void 0:a.connection.edges)||[]).map(function(l){return l.node})},[a==null?void 0:a.connection,v,t==null?void 0:t.connection]),G=(0,u.useCallback)(function(i){z.replace(Z.pathname+"?"+g().stringify({q:i}))},[z,Z.pathname]),Q=(0,u.useCallback)(function(i,l,m){var h,x={};if((h=j.filter)!==null&&h!==void 0&&h.name_contains){var s;x.q=(s=j.filter)===null||s===void 0?void 0:s.name_contains}m&&(x.orderBy=m.field+"_"+(m.order=="ascend"?"asc":"desc")),x.page=i==null?void 0:i.current,z.replace(Z.pathname+"?"+g().stringify(x))},[z,Z.pathname,(L=j.filter)===null||L===void 0?void 0:L.name_contains]),$=(0,u.useCallback)(function(i){return(0,O.Z)((0,C.Z)().mark(function l(){var m,h;return(0,C.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return m="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(i.length," \u4E2A\u95E8\u5E97\u5417\uFF1F"),s.next=3,o.u_.confirm({title:"\u786E\u5B9A\u5220\u9664",content:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:"tip-confirm",children:m}),(0,n.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]}),okClassName:"btn-danger",okText:"\u5220\u9664"});case 3:if(h=s.sent,h.isConfirmed){s.next=6;break}return s.abrupt("return");case 6:o.FN.success("\u95E8\u5E97\u6279\u91CF\u5220\u9664\u6210\u529F",2e3,{placement:"bottom-start",progressBar:!0});case 7:case"end":return s.stop()}},l)}))},[]),H=(0,u.useMemo)(function(){return function(i){return(0,n.jsx)("div",{children:(0,n.jsx)(o.zx,{color:"success",onClick:$(i),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},[$]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"d-flex flex-wrap flex-stack pb-7",children:[(0,n.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[(0,n.jsxs)("h3",{className:"fw-bolder me-5",children:["\u95E8\u5E97 (",T,")"]}),(0,n.jsx)(o.II.Search,{onSearch:G,defaultValue:(N=j.filter)===null||N===void 0?void 0:N.name_contains,placeholder:"\u641C\u7D22",className:"border-body bg-body w-250px"})]}),(0,n.jsx)(y.ZX,{children:(0,n.jsx)("div",{className:"d-flex my-0",children:(0,n.jsx)(o.zx,{as:p.Link,to:"/website/landing/stores/new",children:"\u65B0\u589E\u95E8\u5E97"})})})]}),!T&&!v?(0,n.jsx)(o.Zb,{className:"mb-5 mb-xl-10",children:(0,n.jsx)(o.HY,{title:"\u8FD8\u6CA1\u6709\u95E8\u5E97",description:"\u9A6C\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u95E8\u5E97\u8BD5\u8BD5",image:"/assets/media/illustrations/sigma-1/4.png",children:(0,n.jsx)(o.zx,{as:p.Link,variant:"primary",to:"/website/landing/stores/new",children:"\u65B0\u589E\u95E8\u5E97"})})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.Zb,{className:"mb-5 mb-xl-10",children:(0,n.jsx)(o.Zb.Body,{children:(0,n.jsx)(o.bH,{overlayClassName:"bg-white bg-opacity-25",loading:v,children:(0,n.jsx)(o.iA,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(l){return(0,n.jsxs)(n.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,n.jsx)("span",{className:"mx-2",children:l}),"\u4E2A\u95E8\u5E97"]})},toolbar:H},noRowsRenderer:function(){return(0,n.jsx)(o.HY,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:U,pagination:W,onChange:Q,dataSource:w})})})})})]})}var A=F,M=e(18071);function B(r){return console.log(r),(0,n.jsx)(M.vs,{className:"page-organization-settings-permissions",footer:!1,children:(0,n.jsx)(A,(0,f.Z)((0,f.Z)({},r),{},{hooks:{query:d.usePermissionsConnectionQuery},columns:[{key:"id",title:"\u7F16\u7801",sorter:!0,width:"20%"},{key:"name",title:"\u540D\u79F0",sorter:!0,width:"30%"},{key:"description",title:"\u63CF\u8FF0"}]}))})}var c=B}}]);
