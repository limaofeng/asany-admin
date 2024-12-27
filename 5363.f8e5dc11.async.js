"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5363,267],{51253:function(R,D,e){e.d(D,{GP:function(){return v.Z},Hk:function(){return J},xx:function(){return l.x}});var K=e(74958),v=e(5166),l=e(19260),f=e(68400),C=e.n(f),b=e(67294),O=e(93967),S=e.n(O),N=e(94589),c=e(97857),W=e.n(c),t=e(46027),M=e(35908),B=e(42687),G=e(2721),P=e(5574),w=e.n(P),$=e(96486),n=e(85893),o={aside:{minimize:!1,width:280}},m=b.createContext({state:o,dispatch:function(){}}),y=function(a){return a.AsideToggle="ASIDE_TOGGLE",a.AsideWidth="ASIDE_WIDTH",a}({});function p(a,d){switch(d.type){case"ASIDE_TOGGLE":return a.aside.minimize=!a.aside.minimize,W()({},a);case"ASIDE_WIDTH":return a.aside.width=d.payload,W()({},a);default:throw new Error}}var I=function(d){var i=(0,b.useReducer)(p,(0,$.cloneDeep)(o)),x=w()(i,2),A=x[0],L=x[1];return(0,n.jsx)(m.Provider,{value:{state:A,dispatch:L},children:d.children})},u=function(){return(0,b.useContext)(m)},g=e(65495);function r(a){var d=u(),i=d.dispatch,x=d.state.aside.minimize,A=(0,b.useCallback)(function(){i({type:y.AsideToggle})},[i]);return(0,n.jsx)(G.Button,{style:W()({marginBottom:"1.35rem",zIndex:105},a.style),onClick:A,activeColor:"primary",className:S()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",a.className,{active:x}),children:(0,n.jsx)(t.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}var s={"drawer drawer-start":{maxWidth:992}};function j(a){var d=a.className,i=a.header,x=a.children,A=a.collapsible,L=A===void 0?!0:A,H=a.width,F=H===void 0?280:H,U=(0,B.$Y)(),X=u(),Z=X.dispatch;(0,b.useEffect)(function(){U.aside.width(F+100),Z({type:y.AsideWidth,payload:F})},[U.aside,Z,F]);var Y=(0,M.CN)(s),V=(0,B.BK)(function(k){return k.aside.drawer});return(0,n.jsxs)("div",{className:S()("app-aside aside",d,Y,{"drawer-on":V}),children:[(0,n.jsx)(g.Z,{children:(0,n.jsx)(v.Z,{header:i,resizeable:!0,className:"app-sidebar",children:x})}),L&&(0,n.jsx)(r,{className:"start-100 end-0"})]})}j.Toggle=r;var z=j,T,h=N.ZP.div(T||(T=C()([`
  --root-aside-width: `,`;
  --met-aside-width: `,`;
`])),function(a){return a.minimize?"100px":"".concat(a.width,"px")},function(a){return a.minimize?"100px":"".concat(a.width,"px")});function Q(a){var d=a.children,i=a.className,x=u(),A=x.state.aside,L=A.minimize,H=A.width,F=(0,b.useCallback)(function(U){U.preventDefault()},[]);return(0,n.jsx)(h,{minimize:L,width:H,className:S()("micro-app-container page-full-content",i,{"aside-minimize":L}),onContextMenu:F,children:d})}function E(a){var d=a.children,i=a.className;return(0,n.jsx)(I,{children:(0,n.jsx)(Q,{className:i,children:d})})}E.Sidebar=z;var J=E},52680:function(R,D,e){e.d(D,{v7:function(){return u},_$:function(){return $},F6:function(){return B}});var K=e(97857),v=e.n(K),l=e(68400),f=e.n(l),C=e(75063),b=e(37887),O=e(73359),S,N,c,W,t={},M=(0,C.Ps)(S||(S=f()([`
    query websites {
  websites {
    id
    name
    description
  }
}
    `])));function B(r){var s=v()(v()({},t),r);return b.a(M,s)}function G(r){var s=_objectSpread(_objectSpread({},t),r);return Apollo.useLazyQuery(M,s)}function P(r){var s=_objectSpread(_objectSpread({},t),r);return Apollo.useSuspenseQuery(M,s)}var w=(0,C.Ps)(N||(N=f()([`
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
    `])));function $(r){var s=v()(v()({},t),r);return b.a(w,s)}function n(r){var s=_objectSpread(_objectSpread({},t),r);return Apollo.useLazyQuery(w,s)}function o(r){var s=_objectSpread(_objectSpread({},t),r);return Apollo.useSuspenseQuery(w,s)}var m=(0,C.Ps)(c||(c=f()([`
    mutation createWebsite($input: WebsiteCreateInput!) {
  createWebsite(input: $input) {
    id
    name
  }
}
    `])));function y(r){var s=_objectSpread(_objectSpread({},t),r);return Apollo.useMutation(m,s)}var p=(0,C.Ps)(W||(W=f()([`
    query websiteArticleCategories($id: ID!) {
  categories: articleCategories(where: {parent: {id: $id, subColumns: true}}) {
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
    `])));function I(r){var s=_objectSpread(_objectSpread({},t),r);return Apollo.useQuery(p,s)}function u(r){var s=v()(v()({},t),r);return O.t(p,s)}function g(r){var s=_objectSpread(_objectSpread({},t),r);return Apollo.useSuspenseQuery(p,s)}},22294:function(R,D,e){e.r(D),e.d(D,{default:function(){return $}});var K=e(5574),v=e.n(K),l=e(67294),f=e(96974),C=e(51253),b=e(97857),O=e.n(b),S=e(39711),N=e(46027),c=e(2721),W=e(12708),t=e(85893);function M(n,o){return n.children&&n.children.length?(0,t.jsx)(c.Menu.SubMenu,{url:"/websites/".concat(o,"/cms/categories/").concat(n.id,"/articles"),bullet:!0,icon:n.icon,title:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"flex-row-fluid",children:n.name}),(0,t.jsx)(c.Tooltip,{title:"\u680F\u76EE\u8BBE\u7F6E",children:(0,t.jsx)("div",{children:(0,t.jsx)(S.rU,{onClick:function(y){return y.stopPropagation()},className:"category-setting me-2 text-primary",to:"/websites/".concat(o,"/cms/categories/").concat(n.id),children:(0,t.jsx)(N.JO,{name:"Bootstrap/gear",className:"svg-icon-primary"})})})})]}),children:(n.children||[]).map(function(m){return M(m,o)})},"category_".concat(n.id)):(0,t.jsx)(c.Menu.Item,{url:"/websites/".concat(o,"/cms/categories/").concat(n.id,"/articles"),bullet:!0,icon:n.icon,title:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"flex-row-fluid",children:n.name}),(0,t.jsx)(c.Tooltip,{title:"\u680F\u76EE\u8BBE\u7F6E",children:(0,t.jsx)(S.rU,{onClick:function(y){return y.stopPropagation()},className:"category-setting me-4 text-primary",to:"/websites/".concat(o,"/cms/categories/").concat(n.id),children:(0,t.jsx)(N.JO,{name:"Bootstrap/gear",className:"svg-icon-primary"})})})]})},"category_".concat(n.id))}function B(n){var o=n.id,m=n.location,y=n.loading,p=n.website,I=(0,f.s0)(),u=(0,l.useMemo)(function(){return(0,W.G_)(n.categories.map(function(i){return O()({},i)}),{idKey:"id",childrenKey:"children",pidKey:"parent.id",sort:function(x,A){return x.index-A.index}})},[n.categories]),g=(0,l.useMemo)(function(){var i=(0,f.LX)("/websites/:sid/cms/categories/:cid",m.pathname);if(i)return"category_".concat(i.params.cid);var x=(0,f.LX)("/websites/:sid/files",m.pathname);return x?"files":"my-drive"},[m.pathname]),r=(0,l.useState)(g),s=v()(r,2),j=s[0],z=s[1],T=(0,l.useState)(u.map(function(i){return i.id})),h=v()(T,2),Q=h[0],E=h[1];(0,l.useEffect)(function(){g&&z(g)},[g]);var J=(0,l.useCallback)(function(i){console.log("selectedKey",i.key),z(i.key)},[]),a=(0,l.useCallback)(function(){var i;j.startsWith("category_")&&(i=j.split("_")[1]),I("/websites/".concat(o,"/cms/categories/new")+(i?"?parent_category_id=".concat(i):""))},[history,o,j]),d=(0,l.useCallback)(function(i){E(i)},[]);return(0,l.useEffect)(function(){E(u.map(function(i){return"category_".concat(i.id)}))},[u.map(function(i){return i.id}).join(",")]),(0,t.jsxs)(c.BlockUI,{zIndex:10,className:"my-5 p-5",overlayClassName:"bg-white bg-opacity-25",loading:!1,children:[(0,t.jsx)("div",{children:(0,t.jsx)("h1",{className:"text-gray-800 fw-bold mx-5",children:(p==null?void 0:p.name)||" "})}),(0,t.jsxs)(c.Menu,{fit:!0,accordion:!1,selectable:"AllMenu",className:"menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0",selectedKeys:j?[j]:[],onSelect:J,openKeys:Q,onOpenChange:d,children:[(0,t.jsxs)(c.Menu.Section,{className:"pt-8 pb-0 flex-row-fluid align-items-center",contentClassName:"d-flex flex-row-fluid",sectionClassName:"d-flex flex-row-fluid",children:[(0,t.jsxs)("span",{className:"text-muted text-uppercase fs-8 ls-1 align-items-center d-flex flex-row-fluid",children:["\u680F\u76EE ",y&&" - loading..."]}),(0,t.jsx)(c.Button,{icon:(0,t.jsx)(N.JO,{style:{marginRight:".2rem"},name:"Duotune/arr087",className:""}),size:"sm",variant:"white",className:"py-1 px-3 me-n4",onClick:a,children:"\u65B0\u589E"})]}),u.map(function(i){return M(i,o)}),(0,t.jsx)(c.Menu.Section,{children:"\u8BBE\u7F6E"}),(0,t.jsx)(c.Menu.Item,{bullet:!0,icon:"",title:"\u901A\u7528\u8BBE\u7F6E",url:"/websites/".concat(o,"/settings/general")},"settings_general"),(0,t.jsx)(c.Menu.Item,{bullet:!0,icon:"",title:"\u6587\u4EF6\u7BA1\u7406",url:"/websites/".concat(o,"/files")},"files"),(0,t.jsx)(c.Menu.Item,{bullet:!0,icon:"",title:"\u5BFC\u822A\u83DC\u5355",url:"/websites/".concat(o,"/settings/navigation")},"settings_navigation")]})]})}var G=B,P=e(52680);function w(){var n=(0,f.UO)(),o=n.sid,m=(0,f.TH)(),y=(0,P._$)({fetchPolicy:"cache-and-network",variables:{id:o}}),p=y.data,I=y.loading,u=p==null?void 0:p.website,g=u==null?void 0:u.channel.id,r=(0,P.v7)({fetchPolicy:"cache-and-network"}),s=v()(r,2),j=s[0],z=s[1],T=z.data,h=T===void 0?{categories:[]}:T,Q=z.loading,E=(0,l.useMemo)(function(){return!(h!=null&&h.categories)||!h.categories.length?[]:h.categories},[h==null?void 0:h.categories]);return(0,l.useEffect)(function(){g&&j({variables:{id:g}})},[j,g]),(0,t.jsxs)(C.Hk,{className:"micro-app-website",children:[(0,t.jsx)(C.Hk.Sidebar,{children:(0,t.jsx)(G,{website:u,categories:E,location:m,id:o,loading:I||Q})}),g&&!Q&&(0,t.jsx)(f.j3,{context:{rootCategoryId:g,categories:E,baseUrl:"/websites/"+o}})]})}var $=w}}]);
