(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[6518],{92957:function(T,D,e){"use strict";e.d(D,{ry:function(){return o},Tk:function(){return n},RE:function(){return M},x:function(){return d},Bg:function(){return b}});var s=e(11849),p=e(20310),h=e(49704),B=e(93633),Z=e(21919),A,j,l,C,F,v={},x=(0,h.Ps)(A||(A=(0,p.Z)([`
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
    `]))),o=(0,h.Ps)(j||(j=(0,p.Z)([`
    query organization($id: ID!) {
  organization(id: $id) {
    ...OrganizationProfile
  }
}
    `,""])),x);function n(i){var u=(0,s.Z)((0,s.Z)({},v),i);return B.a(o,u)}function I(i){var u=_objectSpread(_objectSpread({},v),i);return Apollo.useLazyQuery(o,u)}var $=(0,h.Ps)(l||(l=(0,p.Z)([`
    mutation updateOrganizationProfile($id: ID!, $input: UpdateOrganizationProfileUpdateInput!) {
  updateOrganizationProfile(id: $id, input: $input) {
    ...OrganizationProfile
  }
}
    `,""])),x);function M(i){var u=(0,s.Z)((0,s.Z)({},v),i);return Z.D($,u)}var S=(0,h.Ps)(C||(C=(0,p.Z)([`
    mutation renameOrganizationCode($id: ID!, $code: String!) {
  renameOrganizationCode(id: $id, code: $code) {
    ...OrganizationProfile
  }
}
    `,""])),x);function d(i){var u=(0,s.Z)((0,s.Z)({},v),i);return Z.D(S,u)}var y=(0,h.Ps)(F||(F=(0,p.Z)([`
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
    `])));function b(i){var u=(0,s.Z)((0,s.Z)({},v),i);return B.a(y,u)}function O(i){var u=_objectSpread(_objectSpread({},v),i);return Apollo.useLazyQuery(y,u)}},46518:function(T,D,e){"use strict";e.r(D),e.d(D,{default:function(){return S}});var s=e(11849),p=e(92957),h=e(75468),B=e(3182),Z=e(93224),A=e(94043),j=e.n(A),l=e(67294),C=e(73727),F=e(80129),v=e.n(F),x=e(56902),o=e(11974),n=e(85893);function I(d){var y,b,O=d.history,i=d.location,u=d.hooks,_=d.columns,P=(0,l.useMemo)(function(){var r=d.location.query,c=r.q,f=(0,Z.Z)(r,["q"]);return c&&(f.filter={name_contains:c}),f},[d.location]),L=u.query({fetchPolicy:"cache-and-network",variables:P}),U=L.data,g=L.loading,k=L.previousData,t=U,a=k,N=(0,l.useMemo)(function(){return g?(a==null?void 0:a.total.totalCount)||0:(t==null?void 0:t.total.totalCount)||0},[t==null?void 0:t.total.totalCount,g,a==null?void 0:a.total]),K=(0,l.useMemo)(function(){return g?(a==null?void 0:a.connection)||{total:0,current:1}:(t==null?void 0:t.connection)||{total:0,current:1}},[t==null?void 0:t.connection,g,a==null?void 0:a.connection]),Q=(0,l.useMemo)(function(){if(g){var r;return((a==null||(r=a.connection)===null||r===void 0?void 0:r.edges)||[]).map(function(c){return c.node})}return((t==null?void 0:t.connection.edges)||[]).map(function(c){return c.node})},[t==null?void 0:t.connection,g,a==null?void 0:a.connection]),W=(0,l.useCallback)(function(r){O.replace(i.pathname+"?"+v().stringify({q:r}))},[O,i.pathname]),w=(0,l.useCallback)(function(r,c,f){var E,z={};if((E=P.filter)!==null&&E!==void 0&&E.name_contains){var m;z.q=(m=P.filter)===null||m===void 0?void 0:m.name_contains}f&&(z.orderBy=f.field+"_"+(f.order=="ascend"?"asc":"desc")),z.page=r.current,O.replace(i.pathname+"?"+v().stringify(z))},[O,i.pathname,(y=P.filter)===null||y===void 0?void 0:y.name_contains]),R=(0,l.useCallback)(function(r){return(0,B.Z)(j().mark(function c(){var f,E;return j().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return f="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(r.length," \u4E2A\u95E8\u5E97\u5417\uFF1F"),m.next=3,o.u_.confirm({title:"\u786E\u5B9A\u5220\u9664",content:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:"tip-confirm",children:f}),(0,n.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]}),okClassName:"btn-danger",okText:"\u5220\u9664"});case 3:if(E=m.sent,E.isConfirmed){m.next=6;break}return m.abrupt("return");case 6:o.FN.success("\u95E8\u5E97\u6279\u91CF\u5220\u9664\u6210\u529F",2e3,{placement:"bottom-start",progressBar:!0});case 7:case"end":return m.stop()}},c)}))},[]),G=(0,l.useMemo)(function(){return function(r){return(0,n.jsx)("div",{children:(0,n.jsx)(o.zx,{color:"success",onClick:R(r),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},[R]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"d-flex flex-wrap flex-stack pb-7",children:[(0,n.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[(0,n.jsxs)("h3",{className:"fw-bolder me-5",children:["\u95E8\u5E97 (",N,")"]}),(0,n.jsx)(o.II.Search,{onSearch:W,defaultValue:(b=P.filter)===null||b===void 0?void 0:b.name_contains,placeholder:"\u641C\u7D22",className:"border-body bg-body w-250px"})]}),(0,n.jsx)(x.Z,{children:(0,n.jsx)("div",{className:"d-flex my-0",children:(0,n.jsx)(o.zx,{as:C.Link,to:"/website/landing/stores/new",children:"\u65B0\u589E\u95E8\u5E97"})})})]}),!N&&!g?(0,n.jsx)(o.Zb,{className:"mb-5 mb-xl-10",children:(0,n.jsx)(o.HY,{title:"\u8FD8\u6CA1\u6709\u95E8\u5E97",description:"\u9A6C\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u95E8\u5E97\u8BD5\u8BD5",image:"/assets/media/illustrations/sigma-1/4.png",children:(0,n.jsx)(o.zx,{as:C.Link,variant:"primary",to:"/website/landing/stores/new",children:"\u65B0\u589E\u95E8\u5E97"})})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.Zb,{className:"mb-5 mb-xl-10",children:(0,n.jsx)(o.Zb.Body,{children:(0,n.jsx)(o.bH,{overlayClassName:"bg-white bg-opacity-25",loading:g,children:(0,n.jsx)(o.iA,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(c){return(0,n.jsxs)(n.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,n.jsx)("span",{className:"mx-2",children:c}),"\u4E2A\u95E8\u5E97"]})},toolbar:G},noRowsRenderer:function(){return(0,n.jsx)(o.HY,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:_,pagination:K,onChange:w,dataSource:Q})})})})})]})}var $=I;function M(d){return console.log(d),(0,n.jsx)(h.v,{className:"page-organization-settings-permissions",footer:!1,children:(0,n.jsx)($,(0,s.Z)((0,s.Z)({},d),{},{hooks:{query:p.Bg},columns:[{key:"id",title:"\u7F16\u7801",sorter:!0,width:"20%"},{key:"name",title:"\u540D\u79F0",sorter:!0,width:"30%"},{key:"description",title:"\u63CF\u8FF0"}]}))})}var S=M}}]);
