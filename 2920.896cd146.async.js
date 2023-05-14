(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[2920],{92957:function(R,z,e){"use strict";e.d(z,{ry:function(){return C},Tk:function(){return F},RE:function(){return M},x:function(){return d},Bg:function(){return x}});var s=e(11849),p=e(20310),f=e(49704),D=e(64718),Z=e(21919),l,E,B,j,A,t={},n=(0,f.Ps)(l||(l=(0,p.Z)([`
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
    `]))),C=(0,f.Ps)(E||(E=(0,p.Z)([`
    query organization($id: ID!) {
  organization(id: $id) {
    ...OrganizationProfile
  }
}
    `,""])),n);function F(r){var u=(0,s.Z)((0,s.Z)({},t),r);return D.a(C,u)}function _(r){var u=_objectSpread(_objectSpread({},t),r);return Apollo.useLazyQuery(C,u)}var $=(0,f.Ps)(B||(B=(0,p.Z)([`
    mutation updateOrganizationProfile($id: ID!, $input: UpdateOrganizationProfileUpdateInput!) {
  updateOrganizationProfile(id: $id, input: $input) {
    ...OrganizationProfile
  }
}
    `,""])),n);function M(r){var u=(0,s.Z)((0,s.Z)({},t),r);return Z.D($,u)}var S=(0,f.Ps)(j||(j=(0,p.Z)([`
    mutation renameOrganizationCode($id: ID!, $code: String!) {
  renameOrganizationCode(id: $id, code: $code) {
    ...OrganizationProfile
  }
}
    `,""])),n);function d(r){var u=(0,s.Z)((0,s.Z)({},t),r);return Z.D(S,u)}var h=(0,f.Ps)(A||(A=(0,p.Z)([`
    query permissionsConnection($filter: PermissionFilter, $page: Int, $pageSize: Int, $orderBy: OrderBy = "createdAt_desc") {
  total: permissionsConnection(pageSize: 1) {
    totalCount
  }
  connection: permissionsConnection(
    filter: $filter
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
        id
        name
        description
      }
    }
  }
}
    `])));function x(r){var u=(0,s.Z)((0,s.Z)({},t),r);return D.a(h,u)}function b(r){var u=_objectSpread(_objectSpread({},t),r);return Apollo.useLazyQuery(h,u)}},46518:function(R,z,e){"use strict";e.r(z),e.d(z,{default:function(){return S}});var s=e(11849),p=e(92957),f=e(39428),D=e(3182),Z=e(93224),l=e(67294),E=e(73727),B=e(80129),j=e.n(B),A=e(76830),t=e(38671),n=e(85893),C=["q"];function F(d){var h,x,b=d.history,r=d.location,u=d.hooks,T=d.columns,O=(0,l.useMemo)(function(){var i=d.location.query,c=i.q,v=(0,Z.Z)(i,C);return c&&(v.filter={name_contains:c}),v},[d.location]),L=u.query({fetchPolicy:"cache-and-network",variables:O}),k=L.data,g=L.loading,U=L.previousData,a=k,o=U,I=(0,l.useMemo)(function(){return g?(o==null?void 0:o.total.totalCount)||0:(a==null?void 0:a.total.totalCount)||0},[a==null?void 0:a.total.totalCount,g,o==null?void 0:o.total]),K=(0,l.useMemo)(function(){return g?(o==null?void 0:o.connection)||{total:0,current:1}:(a==null?void 0:a.connection)||{total:0,current:1}},[a==null?void 0:a.connection,g,o==null?void 0:o.connection]),Q=(0,l.useMemo)(function(){if(g){var i;return((o==null||(i=o.connection)===null||i===void 0?void 0:i.edges)||[]).map(function(c){return c.node})}return((a==null?void 0:a.connection.edges)||[]).map(function(c){return c.node})},[a==null?void 0:a.connection,g,o==null?void 0:o.connection]),W=(0,l.useCallback)(function(i){b.replace(r.pathname+"?"+j().stringify({q:i}))},[b,r.pathname]),w=(0,l.useCallback)(function(i,c,v){var y,P={};if((y=O.filter)!==null&&y!==void 0&&y.name_contains){var m;P.q=(m=O.filter)===null||m===void 0?void 0:m.name_contains}v&&(P.orderBy=v.field+"_"+(v.order=="ascend"?"asc":"desc")),P.page=i==null?void 0:i.current,b.replace(r.pathname+"?"+j().stringify(P))},[b,r.pathname,(h=O.filter)===null||h===void 0?void 0:h.name_contains]),N=(0,l.useCallback)(function(i){return(0,D.Z)((0,f.Z)().mark(function c(){var v,y;return(0,f.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return v="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(i.length," \u4E2A\u95E8\u5E97\u5417\uFF1F"),m.next=3,t.u_.confirm({title:"\u786E\u5B9A\u5220\u9664",content:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:"tip-confirm",children:v}),(0,n.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]}),okClassName:"btn-danger",okText:"\u5220\u9664"});case 3:if(y=m.sent,y.isConfirmed){m.next=6;break}return m.abrupt("return");case 6:t.FN.success("\u95E8\u5E97\u6279\u91CF\u5220\u9664\u6210\u529F",2e3,{placement:"bottom-start",progressBar:!0});case 7:case"end":return m.stop()}},c)}))},[]),G=(0,l.useMemo)(function(){return function(i){return(0,n.jsx)("div",{children:(0,n.jsx)(t.zx,{color:"success",onClick:N(i),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},[N]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"d-flex flex-wrap flex-stack pb-7",children:[(0,n.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[(0,n.jsxs)("h3",{className:"fw-bolder me-5",children:["\u95E8\u5E97 (",I,")"]}),(0,n.jsx)(t.II.Search,{onSearch:W,defaultValue:(x=O.filter)===null||x===void 0?void 0:x.name_contains,placeholder:"\u641C\u7D22",className:"border-body bg-body w-250px"})]}),(0,n.jsx)(A.ZX,{children:(0,n.jsx)("div",{className:"d-flex my-0",children:(0,n.jsx)(t.zx,{as:E.Link,to:"/website/landing/stores/new",children:"\u65B0\u589E\u95E8\u5E97"})})})]}),!I&&!g?(0,n.jsx)(t.Zb,{className:"mb-5 mb-xl-10",children:(0,n.jsx)(t.HY,{title:"\u8FD8\u6CA1\u6709\u95E8\u5E97",description:"\u9A6C\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u95E8\u5E97\u8BD5\u8BD5",image:"/assets/media/illustrations/sigma-1/4.png",children:(0,n.jsx)(t.zx,{as:E.Link,variant:"primary",to:"/website/landing/stores/new",children:"\u65B0\u589E\u95E8\u5E97"})})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.Zb,{className:"mb-5 mb-xl-10",children:(0,n.jsx)(t.Zb.Body,{children:(0,n.jsx)(t.bH,{overlayClassName:"bg-white bg-opacity-25",loading:g,children:(0,n.jsx)(t.iA,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(c){return(0,n.jsxs)(n.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,n.jsx)("span",{className:"mx-2",children:c}),"\u4E2A\u95E8\u5E97"]})},toolbar:G},noRowsRenderer:function(){return(0,n.jsx)(t.HY,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:T,pagination:K,onChange:w,dataSource:Q})})})})})]})}var _=F,$=e(18071);function M(d){return console.log(d),(0,n.jsx)($.vs,{className:"page-organization-settings-permissions",footer:!1,children:(0,n.jsx)(_,(0,s.Z)((0,s.Z)({},d),{},{hooks:{query:p.Bg},columns:[{key:"id",title:"\u7F16\u7801",sorter:!0,width:"20%"},{key:"name",title:"\u540D\u79F0",sorter:!0,width:"30%"},{key:"description",title:"\u63CF\u8FF0"}]}))})}var S=M}}]);
