(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[6518],{50480:function(W,N,e){"use strict";var d=e(28865),h=e(51248),l=e(85893);function D(b){var m=b.layout,z=b.children,g=b.onLayout;return(0,l.jsxs)("div",{className:"d-flex flex-wrap my-1",children:[m&&(0,l.jsxs)("ul",{className:"nav nav-pills me-6 mb-2 mb-sm-0",children:[(0,l.jsx)("li",{className:"nav-item m-0 me-3",children:(0,l.jsx)(h.Z,{variant:"light",color:"muted",active:m=="card",activeColor:"primary",onClick:g==null?void 0:g.bind(null,"card"),icon:(0,l.jsx)(d.ZP,{name:"Duotune/gen024",className:"svg-icon-1"})})}),(0,l.jsx)("li",{className:"nav-item m-0",children:(0,l.jsx)(h.Z,{variant:"light",color:"muted",active:m=="table",onClick:g==null?void 0:g.bind(null,"table"),activeColor:"primary",className:"me-3",icon:(0,l.jsx)(d.ZP,{name:"Duotune/abs015",className:"svg-icon-1"})})})]}),z]})}N.Z=D},93471:function(W,N,e){"use strict";e.d(N,{ZX:function(){return d.Z},o8:function(){return D}});var d=e(50480),h=e(85893);function l(n){var E=n.title,_=n.subtitle,S=n.controls;return(0,h.jsxs)("div",{className:"d-flex flex-wrap flex-stack my-5",children:[(0,h.jsxs)("h2",{className:"fs-2 fw-bold my-2",children:[E,_&&(0,h.jsx)("span",{className:"fs-6 text-gray-400 ms-1",children:_})]}),S]})}var D=l,b=e(67294),m=e(28865),z=e(94184),g=e(25496);function B(n,E){var _=useRef(null),S=n.onClose,Z=n.title,L=n.children,$=n.extras,v=$===void 0?[]:$,R=n.content,M=n.style,A=n.className,c=n.footer,r=useRef({next:!1,nextIndex:-1,panels:v}),K=useReducer(function(o){return o+1},0),I=_slicedToArray(K,2),O=I[1],G=function(u){return function(){r.current.nextIndex=u,O()}},j=function(){var o=_asyncToGenerator(_regeneratorRuntime().mark(function u(){return _regeneratorRuntime().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(r.current.nextIndex!=-1){f.next=2;break}return f.abrupt("return");case 2:return r.current.nextIndex--,O(),f.next=6,sleep(250);case 6:r.current.panels.pop(),O();case 8:case"end":return f.stop()}},u)}));return function(){return o.apply(this,arguments)}}();useImperativeHandle(E,function(){return{back:function(){var o=_asyncToGenerator(_regeneratorRuntime().mark(function x(){return _regeneratorRuntime().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,j();case 2:case"end":return p.stop()}},x)}));function u(){return o.apply(this,arguments)}return u}(),next:function(){var o=_asyncToGenerator(_regeneratorRuntime().mark(function x(f,p){return _regeneratorRuntime().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return r.current.panels.push({title:f,content:p}),O(),i.next=4,sleep(50);case 4:r.current.nextIndex++,O();case 6:case"end":return i.stop()}},x)}));function u(x,f){return o.apply(this,arguments)}return u}(),get width(){var o;return((o=_.current)===null||o===void 0?void 0:o.getBoundingClientRect().width)||0}}},[]);var U=r.current,t=U.nextIndex,s=U.panels,k=t!=-1;return _jsxs("div",{ref:_,className:classnames("settings-menu-container",A),style:M,children:[_jsxs("div",{id:"entry-controls",children:[_jsxs("div",{className:classnames("settings-menu settings-menu-pane",{"settings-menu-pane-in":!k,"settings-menu-pane-out-left":k}),children:[_jsxs("div",{className:"settings-menu-header",children:[_jsx("h4",{children:Z}),_jsx("button",{type:"button",className:"close",onClick:S,children:_jsx(Icon,{name:"CloseOutlined"})})]}),_jsxs("div",{className:"settings-menu-content relative w-100 vh-100 overflow-x-hidden hover-scroll-overlay-y px-5 z-0",children:[R||L,!!v.length&&_jsx("ul",{className:"nav-list-block",children:v.map(function(o,u){var x=o.title,f=o.summary,p=[_jsxs("li",{className:"nav-list-item",onClick:G(u),role:"none",children:[_jsxs("button",{type:"button",children:[_jsx("b",{children:x}),_jsx("span",{children:f})]}),_jsx(Icon,{name:"CloseOutlined"})]},String("".concat(u,"-").concat(Z)))];return u!==v.length-1&&p.push(_jsx("li",{className:"divider"},String("".concat(u,"-").concat(Z,"-divider")))),p})})]})]}),s.map(function(o,u){var x=o.title,f=o.content;return _jsx("div",{className:classnames("settings-menu settings-menu-pane",{"settings-menu-pane-in":u===t,"settings-menu-pane-out-right":u>t,"settings-menu-pane-out-left":u<t}),children:_jsxs("div",{className:"ember-view active",children:[_jsxs("div",{className:"settings-menu-header subview",children:[_jsx("button",{className:"back settings-menu-header-action",onClick:j,children:_jsx(Icon,{name:"CloseOutlined"})}),_jsx("h4",{children:x}),_jsx("div",{})]}),_jsx("div",{className:"settings-menu-content",children:f})]})},x)})]}),c]})}var F=null,a=null},92957:function(W,N,e){"use strict";e.d(N,{ry:function(){return E},Tk:function(){return _},RE:function(){return L},x:function(){return v},Bg:function(){return M}});var d=e(11849),h=e(20310),l=e(49704),D=e(64718),b=e(21919),m,z,g,B,F,a={},n=(0,l.Ps)(m||(m=(0,h.Z)([`
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
    `]))),E=(0,l.Ps)(z||(z=(0,h.Z)([`
    query organization($id: ID!) {
  organization(id: $id) {
    ...OrganizationProfile
  }
}
    `,""])),n);function _(c){var r=(0,d.Z)((0,d.Z)({},a),c);return D.a(E,r)}function S(c){var r=_objectSpread(_objectSpread({},a),c);return Apollo.useLazyQuery(E,r)}var Z=(0,l.Ps)(g||(g=(0,h.Z)([`
    mutation updateOrganizationProfile($id: ID!, $input: UpdateOrganizationProfileUpdateInput!) {
  updateOrganizationProfile(id: $id, input: $input) {
    ...OrganizationProfile
  }
}
    `,""])),n);function L(c){var r=(0,d.Z)((0,d.Z)({},a),c);return b.D(Z,r)}var $=(0,l.Ps)(B||(B=(0,h.Z)([`
    mutation renameOrganizationCode($id: ID!, $code: String!) {
  renameOrganizationCode(id: $id, code: $code) {
    ...OrganizationProfile
  }
}
    `,""])),n);function v(c){var r=(0,d.Z)((0,d.Z)({},a),c);return b.D($,r)}var R=(0,l.Ps)(F||(F=(0,h.Z)([`
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
    `])));function M(c){var r=(0,d.Z)((0,d.Z)({},a),c);return D.a(R,r)}function A(c){var r=_objectSpread(_objectSpread({},a),c);return Apollo.useLazyQuery(R,r)}},46518:function(W,N,e){"use strict";e.r(N),e.d(N,{default:function(){return $}});var d=e(11849),h=e(92957),l=e(39428),D=e(3182),b=e(93224),m=e(67294),z=e(73727),g=e(80129),B=e.n(g),F=e(93471),a=e(51186),n=e(85893),E=["q"];function _(v){var R,M,A=v.history,c=v.location,r=v.hooks,K=v.columns,I=(0,m.useMemo)(function(){var i=v.location.query,y=i.q,P=(0,b.Z)(i,E);return y&&(P.filter={name_contains:y}),P},[v.location]),O=r.query({fetchPolicy:"cache-and-network",variables:I}),G=O.data,j=O.loading,U=O.previousData,t=G,s=U,k=(0,m.useMemo)(function(){return j?(s==null?void 0:s.total.totalCount)||0:(t==null?void 0:t.total.totalCount)||0},[t==null?void 0:t.total.totalCount,j,s==null?void 0:s.total]),o=(0,m.useMemo)(function(){return j?(s==null?void 0:s.connection)||{total:0,current:1}:(t==null?void 0:t.connection)||{total:0,current:1}},[t==null?void 0:t.connection,j,s==null?void 0:s.connection]),u=(0,m.useMemo)(function(){if(j){var i;return((s==null||(i=s.connection)===null||i===void 0?void 0:i.edges)||[]).map(function(y){return y.node})}return((t==null?void 0:t.connection.edges)||[]).map(function(y){return y.node})},[t==null?void 0:t.connection,j,s==null?void 0:s.connection]),x=(0,m.useCallback)(function(i){A.replace(c.pathname+"?"+B().stringify({q:i}))},[A,c.pathname]),f=(0,m.useCallback)(function(i,y,P){var T,w={};if((T=I.filter)!==null&&T!==void 0&&T.name_contains){var C;w.q=(C=I.filter)===null||C===void 0?void 0:C.name_contains}P&&(w.orderBy=P.field+"_"+(P.order=="ascend"?"asc":"desc")),w.page=i.current,A.replace(c.pathname+"?"+B().stringify(w))},[A,c.pathname,(R=I.filter)===null||R===void 0?void 0:R.name_contains]),p=(0,m.useCallback)(function(i){return(0,D.Z)((0,l.Z)().mark(function y(){var P,T;return(0,l.Z)().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return P="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(i.length," \u4E2A\u95E8\u5E97\u5417\uFF1F"),C.next=3,a.u_.confirm({title:"\u786E\u5B9A\u5220\u9664",content:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:"tip-confirm",children:P}),(0,n.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]}),okClassName:"btn-danger",okText:"\u5220\u9664"});case 3:if(T=C.sent,T.isConfirmed){C.next=6;break}return C.abrupt("return");case 6:a.FN.success("\u95E8\u5E97\u6279\u91CF\u5220\u9664\u6210\u529F",2e3,{placement:"bottom-start",progressBar:!0});case 7:case"end":return C.stop()}},y)}))},[]),Q=(0,m.useMemo)(function(){return function(i){return(0,n.jsx)("div",{children:(0,n.jsx)(a.zx,{color:"success",onClick:p(i),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},[p]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"d-flex flex-wrap flex-stack pb-7",children:[(0,n.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[(0,n.jsxs)("h3",{className:"fw-bolder me-5",children:["\u95E8\u5E97 (",k,")"]}),(0,n.jsx)(a.II.Search,{onSearch:x,defaultValue:(M=I.filter)===null||M===void 0?void 0:M.name_contains,placeholder:"\u641C\u7D22",className:"border-body bg-body w-250px"})]}),(0,n.jsx)(F.ZX,{children:(0,n.jsx)("div",{className:"d-flex my-0",children:(0,n.jsx)(a.zx,{as:z.Link,to:"/website/landing/stores/new",children:"\u65B0\u589E\u95E8\u5E97"})})})]}),!k&&!j?(0,n.jsx)(a.Zb,{className:"mb-5 mb-xl-10",children:(0,n.jsx)(a.HY,{title:"\u8FD8\u6CA1\u6709\u95E8\u5E97",description:"\u9A6C\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u95E8\u5E97\u8BD5\u8BD5",image:"/assets/media/illustrations/sigma-1/4.png",children:(0,n.jsx)(a.zx,{as:z.Link,variant:"primary",to:"/website/landing/stores/new",children:"\u65B0\u589E\u95E8\u5E97"})})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.Zb,{className:"mb-5 mb-xl-10",children:(0,n.jsx)(a.Zb.Body,{children:(0,n.jsx)(a.bH,{overlayClassName:"bg-white bg-opacity-25",loading:j,children:(0,n.jsx)(a.iA,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(y){return(0,n.jsxs)(n.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,n.jsx)("span",{className:"mx-2",children:y}),"\u4E2A\u95E8\u5E97"]})},toolbar:Q},noRowsRenderer:function(){return(0,n.jsx)(a.HY,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:K,pagination:o,onChange:f,dataSource:u})})})})})]})}var S=_,Z=e(18071);function L(v){return console.log(v),(0,n.jsx)(Z.v,{className:"page-organization-settings-permissions",footer:!1,children:(0,n.jsx)(S,(0,d.Z)((0,d.Z)({},v),{},{hooks:{query:h.Bg},columns:[{key:"id",title:"\u7F16\u7801",sorter:!0,width:"20%"},{key:"name",title:"\u540D\u79F0",sorter:!0,width:"30%"},{key:"description",title:"\u63CF\u8FF0"}]}))})}var $=L}}]);
