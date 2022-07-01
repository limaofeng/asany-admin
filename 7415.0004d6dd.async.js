var W=Object.prototype.hasOwnProperty;var R=Object.getOwnPropertySymbols,H=Object.prototype.propertyIsEnumerable;var F=Object.assign;var z=(y,f)=>{var n={};for(var t in y)W.call(y,t)&&f.indexOf(t)<0&&(n[t]=y[t]);if(y!=null&&R)for(var t of R(y))f.indexOf(t)<0&&H.call(y,t)&&(n[t]=y[t]);return n};(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[7415,3975],{33201:function(){},48775:function(y,f,n){"use strict";n.d(f,{GP:function(){return t.Z},Hk:function(){return x}});var t=n(48655),m=n(39981),l=n(67294),j=n(94184),A=n.n(j),a=n(28865),e=n(37334),b=n(2824),B=n(11849),O=n(96486),d=n(85893),h={aside:{minimize:!1}},C=l.createContext({state:h,dispatch:function(){}}),M;(function(i){i.AsideToggle="ASIDE_TOGGLE"})(M||(M={}));function r(i,E){switch(E.type){case"ASIDE_TOGGLE":return i.aside.minimize=!i.aside.minimize,(0,B.Z)({},i);default:throw new Error}}var s=function(E){var S=(0,l.useReducer)(r,(0,O.cloneDeep)(h)),P=(0,b.Z)(S,2),N=P[0],L=P[1];return(0,d.jsx)(C.Provider,{value:{state:N,dispatch:L},children:E.children})},c=function(){return(0,l.useContext)(C)},p=n(53704);function v(i){var E=i.children,S=c(),P=S.dispatch,N=S.state.aside.minimize,L=(0,l.useCallback)(function(){P({type:M.AsideToggle})},[P]);return(0,d.jsxs)("div",{className:A()("app-aside aside"),children:[(0,d.jsx)(e.Z,{children:(0,d.jsx)(t.Z,{resizeable:!0,className:"app-sidebar",children:E})}),(0,d.jsx)(p.zx,{style:{marginBottom:"1.35rem",zIndex:10},onClick:L,activeColor:"primary",className:A()("btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex",{active:N}),children:(0,d.jsx)(a.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})]})}var g=v;function I(i){var E=i.children,S=i.className,P=c(),N=P.state.aside.minimize;return(0,d.jsx)("div",{className:A()("micro-app-container page-full-content",S,{"aside-minimize":N}),children:E})}function D(i){var E=i.children,S=i.className;return(0,d.jsx)(s,{children:(0,d.jsx)(I,{className:S,children:E})})}D.Sidebar=g;var x=D,_=n(61997)},8305:function(y,f,n){"use strict";n.d(f,{HC:function(){return g},zR:function(){return x},Bo:function(){return E},mp:function(){return N},a$:function(){return $},rq:function(){return U}});var t=n(11849),m=n(20310),l=n(49704),j=n(64718),A=n(21919),a,e,b,B,O,d,h,C,M,r,s={},c=(0,l.Ps)(a||(a=(0,m.Z)([`
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
    `]))),p=(0,l.Ps)(e||(e=(0,m.Z)([`
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
    `]))),v=(0,l.Ps)(b||(b=(0,m.Z)([`
    query myApps {
  apps: applications {
    id
    name
    title
    description
  }
}
    `])));function g(u){var o=(0,t.Z)((0,t.Z)({},s),u);return j.a(v,o)}function I(u){var o=_objectSpread(_objectSpread({},s),u);return Apollo.useLazyQuery(v,o)}var D=(0,l.Ps)(B||(B=(0,m.Z)([`
    query app($id: ID!) {
  app: application(id: $id) {
    id
    name
    title
    description
  }
}
    `])));function x(u){var o=(0,t.Z)((0,t.Z)({},s),u);return j.a(D,o)}function _(u){var o=_objectSpread(_objectSpread({},s),u);return Apollo.useLazyQuery(D,o)}var i=(0,l.Ps)(O||(O=(0,m.Z)([`
    query appWithClientSecret($id: ID!) {
  app: application(id: $id) {
    id
    name
    title
    description
    clientId
    clientSecrets {
      id
      secret
      createdAt
      createdBy
      lastUseTime
    }
  }
}
    `])));function E(u){var o=(0,t.Z)((0,t.Z)({},s),u);return j.a(i,o)}function S(u){var o=_objectSpread(_objectSpread({},s),u);return Apollo.useLazyQuery(i,o)}var P=(0,l.Ps)(d||(d=(0,m.Z)([`
    query loadRoutes($id: ID!) {
  app: application(id: $id) {
    id
    routes {
      ...RouteParts
    }
  }
}
    `,""])),p);function N(u){var o=(0,t.Z)((0,t.Z)({},s),u);return j.a(P,o)}function L(u){var o=_objectSpread(_objectSpread({},s),u);return Apollo.useLazyQuery(P,o)}var Z=(0,l.Ps)(h||(h=(0,m.Z)([`
    query loadMenus($id: ID!) {
  app: application(id: $id) {
    id
    menus {
      ...MenuParts
    }
  }
}
    `,""])),c);function $(u){var o=(0,t.Z)((0,t.Z)({},s),u);return j.a(Z,o)}function G(u){var o=_objectSpread(_objectSpread({},s),u);return Apollo.useLazyQuery(Z,o)}var T=(0,l.Ps)(C||(C=(0,m.Z)([`
    mutation createMenu($input: MenuCreateInput!) {
  createMenu(input: $input) {
    ...MenuParts
  }
}
    `,""])),c);function J(u){var o=_objectSpread(_objectSpread({},s),u);return Apollo.useMutation(T,o)}var K=(0,l.Ps)(M||(M=(0,m.Z)([`
    mutation updateMenu($id: ID!, $input: MenuUpdateInput!) {
  updateMenu(id: $id, input: $input) {
    ...MenuParts
  }
}
    `,""])),c);function V(u){var o=_objectSpread(_objectSpread({},s),u);return Apollo.useMutation(K,o)}var Q=(0,l.Ps)(r||(r=(0,m.Z)([`
    mutation deleteMenu($id: ID!) {
  deleteMenu(id: $id)
}
    `])));function U(u){var o=(0,t.Z)((0,t.Z)({},s),u);return A.D(Q,o)}},69736:function(y,f,n){"use strict";n.d(f,{zR:function(){return t.zR},rq:function(){return t.rq},a$:function(){return t.a$},mp:function(){return t.mp},HC:function(){return t.HC}});var t=n(8305)},16686:function(y,f,n){"use strict";n.r(f),n.d(f,{default:function(){return M}});var t=n(67294),m=n(2824),l=n(28865),j=n(51615),A=n(73727),a=n(53704),e=n(85893);function b(r,s){return r.children&&r.children.length?(0,e.jsx)(a.v2.SubMenu,{url:"/websites/".concat(s,"/cms/categories/").concat(r.id,"/articles"),bullet:!0,icon:r.icon,title:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{className:"flex-row-fluid",children:r.name}),(0,e.jsx)(a.u,{title:"\u680F\u76EE\u8BBE\u7F6E",children:(0,e.jsx)("div",{children:(0,e.jsx)(A.Link,{onClick:function(p){return p.stopPropagation()},className:"category-setting me-2 text-primary",to:"/websites/".concat(s,"/cms/categories/").concat(r.id),children:(0,e.jsx)(l.JO,{name:"Bootstrap/gear",className:"svg-icon-primary"})})})})]})},"category_".concat(r.id)):(0,e.jsx)(a.v2.Item,{url:"/websites/".concat(s,"/cms/categories/").concat(r.id,"/articles"),bullet:!0,icon:r.icon,title:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("span",{className:"flex-row-fluid",children:r.name}),(0,e.jsx)(a.u,{title:"\u680F\u76EE\u8BBE\u7F6E",children:(0,e.jsx)(A.Link,{onClick:function(p){return p.stopPropagation()},className:"category-setting me-4 text-primary",to:"/websites/".concat(s,"/cms/categories/").concat(r.id),children:(0,e.jsx)(l.JO,{name:"Bootstrap/gear",className:"svg-icon-primary"})})})]})},"category_".concat(r.id))}console.log("renderChannel",b);function B(r){var s=r.location,c=r.app,p=(0,j.k6)();console.log("history",p);var v=(0,t.useMemo)(function(){var i=(0,j.LX)(s.pathname,{path:"/websites/:sid/cms/categories/:cid",exact:!1,strict:!0});return console.log("channelMatch",i),i?"category_".concat(i.params.cid):"my-drive"},[s.pathname]),g=(0,t.useState)(v),I=(0,m.Z)(g,2),D=I[0],x=I[1];(0,t.useEffect)(function(){!v||x(v)},[v]);var _=(0,t.useCallback)(function(i){console.log("selectedKey",i.key),x(i.key)},[]);return console.log("app 21",c),(0,e.jsxs)(a.bH,{zIndex:10,className:"my-5 p-5",overlayClassName:"bg-white bg-opacity-25",loading:!1,children:[(0,e.jsx)("div",{className:"mx-5",children:(0,e.jsxs)("div",{className:"d-flex align-items-center",children:[(0,e.jsx)(a.mN.Avatar,{alt:"\u5565\u5730\u65B9",className:"me-5"}),(0,e.jsxs)("div",{className:"flex-grow-1",children:[(0,e.jsx)("a",{className:"text-dark fw-bolder text-hover-primary fs-6",children:c.title}),(0,e.jsx)("span",{className:"text-muted d-block fw-bold",children:c.description})]})]})}),(0,e.jsxs)(a.v2,{fit:!0,accordion:!1,selectable:"AllMenu",className:"menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0",selectedKeys:D?[D]:[],onSelect:_,children:[(0,e.jsx)(a.v2.Section,{className:"pt-8 pb-2",title:"\u901A\u7528"}),(0,e.jsx)(a.v2.Item,{bullet:!0,icon:"",title:"\u57FA\u672C\u4FE1\u606F",url:"/apps/".concat(c.id,"/profile")}),(0,e.jsx)(a.v2.Item,{bullet:!0,icon:"",title:"\u7EC4\u7EC7\u673A\u6784",url:""}),(0,e.jsx)(a.v2.Section,{className:"pt-8 pb-2",title:"\u5916\u89C2"}),(0,e.jsx)(a.v2.Item,{bullet:!0,icon:"",title:"\u767B\u5F55\u8BBE\u7F6E",url:""}),(0,e.jsx)(a.v2.Item,{bullet:!0,icon:"",title:"\u5E03\u5C40",url:""}),(0,e.jsx)(a.v2.Item,{bullet:!0,icon:"",title:"\u95E8\u6237",url:""}),(0,e.jsx)(a.v2.Section,{className:"pt-8 pb-2",title:"\u529F\u80FD\u96C6\u6210"}),(0,e.jsx)(a.v2.Item,{bullet:!0,icon:"",title:"\u4FE1\u606F",url:""}),(0,e.jsx)(a.v2.Item,{bullet:!0,icon:"",title:"\u90AE\u4EF6",url:""}),(0,e.jsx)(a.v2.Item,{bullet:!0,icon:"",title:"\u65E5\u7A0B",url:""}),(0,e.jsx)(a.v2.Section,{className:"pt-8 pb-2",title:"\u7B2C\u4E09\u65B9\u96C6\u6210"}),(0,e.jsx)(a.v2.Item,{bullet:!0,icon:"",title:"\u9489\u9489",url:""}),(0,e.jsx)(a.v2.Item,{bullet:!0,icon:"",title:"\u5FAE\u4FE1",url:""}),(0,e.jsx)(a.v2.Item,{bullet:!0,icon:"",title:"\u4F01\u4E1A\u5FAE\u4FE1",url:""}),(0,e.jsx)(a.v2.Section,{className:"pt-8 pb-2",title:"\u5F00\u53D1\u8005\u8BBE\u7F6E"}),(0,e.jsx)(a.v2.Item,{bullet:!0,icon:"",title:"\u5F00\u53D1\u4FE1\u606F",url:"/apps/".concat(c.id,"/api_keys")}),(0,e.jsx)(a.v2.Item,{bullet:!0,icon:"",title:"\u4F1A\u8BDD\u7BA1\u7406",url:"/apps/".concat(c.id,"/sessions")}),(0,e.jsx)(a.v2.Item,{bullet:!0,icon:"",title:"\u83DC\u5355\u8BBE\u7F6E",url:"/apps/".concat(c.id,"/menus")}),(0,e.jsx)(a.v2.Item,{bullet:!0,icon:"",title:"\u8DEF\u7531\u8BBE\u7F6E",url:"/apps/".concat(c.id,"/routes")})]})]})}var O=B,d=n(69736),h=n(48775);function C(r){var s=r.children,c=r.location,p=r.match.params.id,v=(0,d.zR)({variables:{id:p}}),g=v.data,I=g===void 0?{}:g,D=v.loading,x=I.app;return console.log("app 1",x),(0,e.jsx)(h.Hk,{loading:D,className:"micro-app-website",children:x&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(h.Hk.Sidebar,{children:(0,e.jsx)(O,{app:x,location:c})}),t.Children.map(s,function(_){return _.props.location.state={app:x,baseUrl:"/apps/"+p},_})]})})}var M=C},77104:function(y,f,n){"use strict";var t=n(94184),m=n.n(t),l=n(67294),j=n(70861),A=n(76792),a=n(85893);const e={variant:"primary",active:!1,disabled:!1},b=l.forwardRef((c,s)=>{var{as:B,bsPrefix:O,variant:d,size:h,active:C,className:M}=c,r=z(c,["as","bsPrefix","variant","size","active","className"]);const p=(0,A.vE)(O,"btn"),[v,{tagName:g}]=(0,j.FT)(F({tagName:B},r)),I=g;return(0,a.jsx)(I,F(F(F({},v),r),{ref:s,className:m()(M,p,C&&"active",d&&`${p}-${d}`,h&&`${p}-${h}`,r.href&&r.disabled&&"disabled")}))});b.displayName="Button",b.defaultProps=e,f.Z=b}}]);
