(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[6092],{87791:function(B,k,d){"use strict";d.d(k,{HC:function(){return l},zR:function(){return C},mp:function(){return v},a$:function(){return p},hT:function(){return E},A6:function(){return I},rq:function(){return c}});var u=d(11849),M=d(20310),f=d(49704),P=d(93633),F=d(21919),b,T,N,O,a,S,e,L,$,j={},A=(0,f.Ps)(b||(b=(0,M.Z)([`
    fragment MenuParts on Menu {
  id
  icon
  name
  path
  type
  index
  component {
    id
    template
  }
  parent {
    id
    path
  }
}
    `]))),R=(0,f.Ps)(T||(T=(0,M.Z)([`
    fragment RouteParts on Route {
  id
  name
  path
  type
  access
  authorized
  hideInBreadcrumb
  redirect
  component {
    id
    template
  }
  icon
  index
  layout {
    pure
  }
  enabled
  parent {
    id
    path
  }
}
    `]))),_=(0,f.Ps)(N||(N=(0,M.Z)([`
    query myApps {
  apps: applications {
    id
    name
    description
  }
}
    `])));function l(n){var s=(0,u.Z)((0,u.Z)({},j),n);return P.a(_,s)}function r(n){var s=_objectSpread(_objectSpread({},j),n);return Apollo.useLazyQuery(_,s)}var x=(0,f.Ps)(O||(O=(0,M.Z)([`
    query app($id: ID!) {
  app: application(id: $id) {
    id
    name
    description
  }
}
    `])));function C(n){var s=(0,u.Z)((0,u.Z)({},j),n);return P.a(x,s)}function y(n){var s=_objectSpread(_objectSpread({},j),n);return Apollo.useLazyQuery(x,s)}var i=(0,f.Ps)(a||(a=(0,M.Z)([`
    query loadRoutes($id: ID!) {
  app: application(id: $id) {
    id
    routes {
      ...RouteParts
    }
  }
}
    `,""])),R);function v(n){var s=(0,u.Z)((0,u.Z)({},j),n);return P.a(i,s)}function Z(n){var s=_objectSpread(_objectSpread({},j),n);return Apollo.useLazyQuery(i,s)}var o=(0,f.Ps)(S||(S=(0,M.Z)([`
    query loadMenus($id: ID!) {
  app: application(id: $id) {
    id
    menus {
      ...MenuParts
    }
  }
}
    `,""])),A);function p(n){var s=(0,u.Z)((0,u.Z)({},j),n);return P.a(o,s)}function h(n){var s=_objectSpread(_objectSpread({},j),n);return Apollo.useLazyQuery(o,s)}var g=(0,f.Ps)(e||(e=(0,M.Z)([`
    mutation createMenu($input: MenuCreateInput!) {
  createMenu(input: $input) {
    ...MenuParts
  }
}
    `,""])),A);function E(n){var s=(0,u.Z)((0,u.Z)({},j),n);return F.D(g,s)}var D=(0,f.Ps)(L||(L=(0,M.Z)([`
    mutation updateMenu($id: ID!, $input: MenuUpdateInput!) {
  updateMenu(id: $id, input: $input) {
    ...MenuParts
  }
}
    `,""])),A);function I(n){var s=(0,u.Z)((0,u.Z)({},j),n);return F.D(D,s)}var m=(0,f.Ps)($||($=(0,M.Z)([`
    mutation deleteMenu($id: ID!) {
  deleteMenu(id: $id)
}
    `])));function c(n){var s=(0,u.Z)((0,u.Z)({},j),n);return F.D(m,s)}},46092:function(B,k,d){"use strict";d.r(k),d.d(k,{default:function(){return _}});var u=d(11849),M=d(3182),f=d(2824),P=d(94043),F=d.n(P),b=d(67294),T=d(28865),N=d(87791),O=d(86582),a=d(11974),S=d(25496),e=d(85893);function L(l){var r,x=l.form,C=l.appId,y=(0,N.a$)({variables:{id:C}}),i=y.data,v=(i==null||(r=i.app)===null||r===void 0?void 0:r.menus)||[],Z=(0,b.useMemo)(function(){return(0,S.$H)((0,S.G_)((v||[]).map(function(o){return(0,u.Z)({},o)}),{pidKey:"parent.id",sort:function(p,h){return p.index-h.index},converter:function(p,h){var g=h.parent;return(0,u.Z)((0,u.Z)({},p),{},{key:p.id,menuType:p.type,title:g?g.title+"/"+p.name:p.name})}}))},[v]);return(0,e.jsxs)(a.l0,{form:x,initialValues:l.data,children:[(0,e.jsx)(a.l0.Item,{name:"parentMenu",className:"d-flex flex-column mb-7",label:"\u6240\u5C5E\u680F\u76EE",children:(0,e.jsx)(a.ub,{solid:!0,options:[{value:"",label:"\u6839\u8282\u70B9"}].concat((0,O.Z)(Z.map(function(o){return{value:o.id,label:o.title}})))})}),(0,e.jsx)(a.l0.Item,{name:"name",className:"d-flex flex-column mb-7",required:!0,label:"\u540D\u79F0",rules:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(a.II,{solid:!0})}),(0,e.jsx)(a.l0.Item,{name:"type",className:"d-flex flex-column mb-7",label:"\u7C7B\u578B",children:(0,e.jsx)(a.Y8.Group,{solid:!0,options:[{value:"MENU",label:"\u83DC\u5355"},{value:"URL",label:"\u94FE\u63A5\u5730\u5740"},{value:"SECTION",label:"\u7AE0\u8282"}]})}),(0,e.jsx)(a.l0.Item,{dependencies:["type"],noStyle:!0,children:function(){return(0,e.jsx)(a.l0.Item,{className:"d-flex flex-column mb-7",name:"path",label:"\u94FE\u63A5",children:(0,e.jsx)(a.II,{solid:!0})})}}),(0,e.jsx)(a.l0.Item,{dependencies:["type","parent"],noStyle:!0,children:function(){return x.getFieldValue("type")!=="MENU"||!!x.getFieldValue("parent")?(0,e.jsx)(e.Fragment,{}):(0,e.jsx)(a.l0.Item,{className:"d-flex flex-column mb-7",name:"path",label:"\u7EC4\u4EF6",children:(0,e.jsx)(a.II,{solid:!0})})}}),(0,e.jsx)(a.l0.Item,{className:"d-flex flex-column mb-7",name:"index",label:"\u6392\u5E8F\u4F4D\u7F6E",children:(0,e.jsx)(a.II,{solid:!0})}),(0,e.jsx)(a.l0.Item,{name:"description",className:"d-flex flex-column mb-7",label:"\u63CF\u8FF0",required:!0,children:(0,e.jsx)(a.II.TextArea,{solid:!0})})]})}function $(l){var r=l.data,x=l.visible,C=l.appId,y=l.onCancel,i=l.onSuccess,v=a.l0.useForm(),Z=(0,b.useState)(!1),o=(0,f.Z)(Z,2),p=o[0],h=o[1],g=(0,N.A6)({fetchPolicy:"no-cache"}),E=(0,f.Z)(g,1),D=E[0],I=(0,b.useCallback)((0,M.Z)(F().mark(function c(){var n;return F().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),t.prev=1,t.next=4,v.validateFields();case 4:return n=t.sent,t.next=7,(0,S.gw)(D({variables:{id:r.id,input:(0,u.Z)({},n)}}),350);case 7:h(!1),y&&y(new Event("look",{bubbles:!0,cancelable:!1})),a.u_.success({title:"\u66F4\u65B0\u6210\u529F",content:"\u83DC\u5355 <strong>".concat(n.name,"</strong> \u4FDD\u5B58\u6210\u529F"),timer:3e3,timerProgressBar:!0}),i&&i(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),h(!1);case 16:case"end":return t.stop()}},c,null,[[1,13]])})),[v,D,r.id,y,i]),m=(0,b.useMemo)(function(){return r?(0,u.Z)((0,u.Z)({},r),{},{parentMenu:r.parentKey,type:r.menuType}):{type:"URL",index:0}},[r]);return console.log("MenuForm",m,r),(0,e.jsx)(a.u_,{centered:!0,maskClosable:!1,visible:x,onCancel:y,onOk:I,confirmLoading:p,dialogClassName:"mw-650px",title:"\u7F16\u8F91\u83DC\u5355",children:(0,e.jsx)(L,{appId:C,data:m,form:v})})}function j(l){var r=l.data,x=l.visible,C=l.appId,y=l.onCancel,i=l.onSuccess,v=a.l0.useForm(),Z=(0,b.useState)(!1),o=(0,f.Z)(Z,2),p=o[0],h=o[1],g=(0,N.hT)({fetchPolicy:"no-cache"}),E=(0,f.Z)(g,1),D=E[0],I=(0,b.useCallback)((0,M.Z)(F().mark(function c(){var n;return F().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),t.prev=1,t.next=4,v.validateFields();case 4:return n=t.sent,t.next=7,(0,S.gw)(D({variables:{input:(0,u.Z)((0,u.Z)({},n),{},{application:C})}}),350);case 7:h(!1),y&&y(new Event("look",{bubbles:!0,cancelable:!1})),a.u_.success({title:"\u4FDD\u5B58\u6210\u529F",content:"\u83DC\u5355 <strong>".concat(n.name,"</strong> \u4FDD\u5B58\u6210\u529F"),timer:3e3,timerProgressBar:!0}),i&&i(),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),h(!1);case 16:case"end":return t.stop()}},c,null,[[1,13]])})),[D,i,y,v,C]),m=(0,b.useMemo)(function(){return r?(0,u.Z)((0,u.Z)({},r),{},{parentMenu:r.parentKey,type:r.menuType}):{type:"URL",index:0}},[r]);return(0,e.jsx)(a.u_,{centered:!0,maskClosable:!1,visible:x,onCancel:y,onOk:I,confirmLoading:p,dialogClassName:"mw-650px",title:"\u521B\u5EFA\u83DC\u5355",children:(0,e.jsx)(L,{data:m,appId:C,form:v})})}function A(l){var r=l.data,x=l.refetch,C=l.onEdit,y=(0,b.useState)(!1),i=(0,f.Z)(y,2),v=i[0],Z=i[1],o=(0,N.rq)({variables:{id:r.id}}),p=(0,f.Z)(o,1),h=p[0],g=(0,b.useCallback)(function(){var E=(0,M.Z)(F().mark(function D(I){var m,c,n;return F().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(m=I.key,c=I.domEvent,c.preventDefault(),c.stopPropagation(),Z(!1),m!=="update"){t.next=8;break}C(r),t.next=17;break;case 8:if(m!=="delete"){t.next=17;break}return t.next=11,a.u_.confirm({title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u83DC\u5355\u5417\uFF1F",content:"\u60A8\u5373\u5C06\u5220\u9664\u201C<strong>".concat(r.name,"</strong>\u201D\u3002\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u9006\u8F6C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u60A8\u786E\u5B9A\u5220\u9664\u5417\uFF1F"),okText:"\u5220 \u9664",cancelClassName:"btn btn-secondary btn-sm",okClassName:"btn btn-danger btn-sm"});case 11:if(n=t.sent,!n.isConfirmed){t.next=17;break}return t.next=15,h();case 15:return t.next=17,x();case 17:case"end":return t.stop()}},D)}));return function(D){return E.apply(this,arguments)}}(),[r]);return(0,e.jsx)("div",{className:"d-flex justify-content-end",children:(0,e.jsx)("div",{className:"ms-2",children:(0,e.jsx)(a.Lt,{overlay:(0,e.jsxs)(a.v2,{onClick:g,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",children:[(0,e.jsx)(a.v2.Item,{className:"px-3",children:"\u7F16\u8F91"},"update"),(0,e.jsx)(a.v2.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",onVisibleChange:Z,visible:v,children:(0,e.jsx)(a.zx,{as:"button",size:"sm",variant:"light",activeColor:"light-primary",className:"me-2",icon:(0,e.jsx)(T.ZP,{className:"svg-icon-5 m-0",name:"Duotune/gen052"})})})})})}function R(l){var r,x=l.match.params.id,C=(0,b.useState)({visible:!1}),y=(0,f.Z)(C,2),i=y[0],v=y[1],Z=(0,N.a$)({variables:{id:x}}),o=Z.data,p=Z.refetch,h=o==null||(r=o.app)===null||r===void 0?void 0:r.menus,g=(0,b.useMemo)(function(){return(0,S.G_)((h||[]).map(function(m){return(0,u.Z)({},m)}),{pidKey:"parent.id",sort:function(c,n){return c.index-n.index},converter:function(c){return(0,u.Z)((0,u.Z)({},c),{},{key:c.id,title:c.name,menuType:c.type,type:"directory"})}})},[h]),E=(0,b.useCallback)(function(){v({visible:!0})},[]),D=(0,b.useCallback)(function(){v({visible:!1})},[]),I=(0,b.useCallback)(function(m){v({visible:!0,data:m})},[]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(a.Zb,{flush:!0,className:"mt-6 mt-xl-9",headerClassName:"mt-5",children:[(0,e.jsxs)(a.Zb.Header,{className:"pt-8",children:[(0,e.jsx)(a.Zb.Title,{}),(0,e.jsx)(a.Zb.Toolbar,{children:(0,e.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,e.jsx)(a.zx,{size:"sm",variant:"danger",className:"me-3",children:"\u5220\u9664"}),(0,e.jsx)(a.zx,{onClick:E,size:"sm",variant:"primary",children:"\u65B0\u5EFA\u83DC\u5355"})]})})]}),(0,e.jsx)(a.Zb.Body,{className:"pt-0",children:(0,e.jsx)(a.N4,{className:"app-treelist",rowKey:"id",draggable:!1,columns:[{key:"title",title:"\u540D\u79F0",render:function(c,n){var s={SECTION:{color:"info"},URL:{color:"primary"},MENU:{color:"success"},SCRIPT:{color:"dark"}};return(0,e.jsxs)("div",{className:"d-flex flex-column py-5",children:[(0,e.jsx)("span",{className:"title text-gray-800 text-hover-primary mb-1 fs-6",children:n.title}),(0,e.jsxs)("div",{className:"d-flex flex-row col-stacked",children:[(0,e.jsx)(a.Ct,{color:s[n.menuType].color,children:n.menuType}),(0,e.jsx)("span",{className:"tw-pl-2",children:n.path})]})]})}},{key:"index",title:"\u6392\u5E8F",className:"w-100px"},{key:"enabled",title:"\u542F\u7528\u72B6\u6001",className:"w-100px",render:function(c){return c?"\u542F\u7528":"\u7981\u7528"}},{key:"component",title:"\u5B50\u9762\u677F\u6E32\u67D3\u7EC4\u4EF6",className:"w-150px",render:function(c,n){return n.component?"\u6709\u7EC4\u4EF6":"\u65E0\u7EC4\u4EF6"}},{key:"actions",title:"\u64CD\u4F5C",className:"min-w-125px",render:function(c,n){return(0,e.jsx)(A,{onEdit:I,data:n,refetch:p})}}],dataSource:g})})]}),i.data?(0,e.jsx)($,{onSuccess:p,data:i.data,appId:x,visible:i.visible,onCancel:D}):(0,e.jsx)(j,{onSuccess:p,appId:x,data:i.data,visible:i.visible,onCancel:D})]})}var _=R}}]);
