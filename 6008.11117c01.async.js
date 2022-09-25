(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[6008],{80590:function(U,A,r){"use strict";r.d(A,{Z:function(){return l}});var e=r(2824),u=r(67294),d=r(96486),C=r(94184),O=r.n(C),M=r(54406),c=r(85893),R=260,L=768;function P(h){var n=h.minWidth,f=n===void 0?R:n,T=h.maxWidth,I=T===void 0?L:T,B=h.collapsible,$=B===void 0?!0:B,b=h.children,i=h.className,x=h.onWidthChange,o=(0,u.useRef)({minimized:!1,width:h.width}),g=(0,u.useReducer)(function(s){return s+1},0),m=(0,e.Z)(g,2),N=m[1],p=(0,u.useMemo)(function(){return(0,d.debounce)(function(){N()},10)},[]),j=(0,u.useCallback)(function(s){return $&&f-s>f/2||s<=30},[$,f]),Z=(0,u.useCallback)(function(){o.current.minimized&&o.current.width>0&&(o.current.width=0)},[]),S=(0,u.useCallback)(function(s){o.current.width+=s,j(o.current.width)?o.current.minimized=!0:o.current.minimized=!1,p()},[p,j]),z=(0,u.useCallback)(function(){o.current.width=j(o.current.width)?0:Math.min(I,Math.max(f,o.current.width))},[j,I,f]),_=(0,u.useCallback)(function(){o.current.minimized=!o.current.minimized,o.current.width||(o.current.width=f),p()},[p,f]),E=o.current,v=E.minimized,y=E.width,D=(0,u.useMemo)(function(){return Math.min(I,Math.max(f,y))},[I,f,y]);return(0,u.useEffect)(function(){x&&x(v?0:D)},[x,v,D]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"secondary_sidebar-resizer__mirror",style:{width:v?void 0:D}}),(0,c.jsxs)(M.w_,{className:O()("secondary_sidebar-resizer d-flex flex-column flex-lg-row",i,{"secondary_sidebar-resizer-minimized":v}),style:{width:v?void 0:D},onResizeStart:Z,onResize:S,onResizeEnd:z,children:[$&&(0,c.jsxs)("button",{onClick:_,className:O()("secondary_sidebar-resize-button",{collapsed:v,expanded:!v}),type:"button",children:[(0,c.jsx)("div",{className:"invisible-area"}),(0,c.jsx)("span",{className:"homemade-button",role:"presentation",children:(0,c.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",focusable:"false",role:"presentation",children:(0,c.jsx)("path",{d:"M10.294 9.698a.988.988 0 0 1 0-1.407 1.01 1.01 0 0 1 1.419 0l2.965 2.94a1.09 1.09 0 0 1 0 1.548l-2.955 2.93a1.01 1.01 0 0 1-1.42 0 .988.988 0 0 1 0-1.407l2.318-2.297-2.327-2.307z",fill:"currentColor",fillRule:"evenodd"})})})]}),(0,c.jsx)("div",{className:"secondary_sidebar-inner flex-column flex-lg-row-auto w-100 mb-10 mb-lg-0",children:b})]})]})}var l=P},23798:function(U,A,r){"use strict";r.d(A,{k$:function(){return o},WF:function(){return g},au:function(){return N},ot:function(){return p},aA:function(){return Z},AQ:function(){return z},G$:function(){return E},wp:function(){return s},ZO:function(){return W},c9:function(){return w},_c:function(){return k},Pw:function(){return H},KX:function(){return V},Nq:function(){return q}});var e=r(11849),u=r(20310),d=r(49704),C=r(64718),O=r(38460),M=r(21919),c,R,L,P,l,h,n,f,T,I,B,$,b,i={},x=(0,d.Ps)(c||(c=(0,u.Z)([`
    query module($id: ID!) {
  module(id: $id) {
    id
    code
    name
    picture
    description
  }
}
    `])));function o(t){var a=(0,e.Z)((0,e.Z)({},i),t);return C.a(x,a)}function g(t){var a=(0,e.Z)((0,e.Z)({},i),t);return O.t(x,a)}var m=(0,d.Ps)(R||(R=(0,u.Z)([`
    query modules($filter: ModuleFilter, $limit: Int) {
  modules(filter: $filter, limit: $limit) {
    id
    name
    code
    picture
    pictureUrl: picture(format: url)
    description
  }
}
    `])));function N(t){var a=(0,e.Z)((0,e.Z)({},i),t);return C.a(m,a)}function p(t){var a=(0,e.Z)((0,e.Z)({},i),t);return O.t(m,a)}var j=(0,d.Ps)(L||(L=(0,u.Z)([`
    mutation createModule($input: ModuleCreateInput!) {
  createModule(input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function Z(t){var a=(0,e.Z)((0,e.Z)({},i),t);return M.D(j,a)}var S=(0,d.Ps)(P||(P=(0,u.Z)([`
    mutation updateModule($id: ID!, $input: ModuleUpdateInput!) {
  updateModule(id: $id, input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function z(t){var a=(0,e.Z)((0,e.Z)({},i),t);return M.D(S,a)}var _=(0,d.Ps)(l||(l=(0,u.Z)([`
    mutation deleteModule($id: ID!) {
  deleteModule(id: $id)
}
    `])));function E(t){var a=(0,e.Z)((0,e.Z)({},i),t);return M.D(_,a)}var v=(0,d.Ps)(h||(h=(0,u.Z)([`
    mutation deleteManyModules($ids: [ID!]!) {
  deleteManyModules(ids: $ids)
}
    `])));function y(t){var a=_objectSpread(_objectSpread({},i),t);return Apollo.useMutation(v,a)}var D=(0,d.Ps)(n||(n=(0,u.Z)([`
    query schema($module: ID!) {
  models(module: $module, filter: {type: ENTITY}) {
    id
    code
    name
    description
  }
}
    `])));function s(t){var a=(0,e.Z)((0,e.Z)({},i),t);return C.a(D,a)}function Q(t){var a=_objectSpread(_objectSpread({},i),t);return Apollo.useLazyQuery(D,a)}var W=(0,d.Ps)(f||(f=(0,u.Z)([`
    query model($id: ID) {
  model(id: $id) {
    id
    code
    name
    description
    fields {
      id
      code
      system
      type {
        id
        name
        family
        description
        graphQLType
      }
      name
      description
      metadata {
        databaseColumnName
      }
    }
  }
}
    `])));function w(t){var a=(0,e.Z)((0,e.Z)({},i),t);return C.a(W,a)}function F(t){var a=_objectSpread(_objectSpread({},i),t);return Apollo.useLazyQuery(W,a)}var K=(0,d.Ps)(T||(T=(0,u.Z)([`
    query modelFiledTypes {
  filedTypes: modelFiledTypes {
    id
    name
    description
    family
  }
}
    `])));function k(t){var a=(0,e.Z)((0,e.Z)({},i),t);return C.a(K,a)}function ee(t){var a=_objectSpread(_objectSpread({},i),t);return Apollo.useLazyQuery(K,a)}var X=(0,d.Ps)(I||(I=(0,u.Z)([`
    query modelFields($model: ID!, $filter: ModelFieldFilter, $limit: Int) {
  listFields: modelFields(model: $model, filter: $filter, limit: $limit) {
    id
    name
    description
  }
}
    `])));function ne(t){var a=_objectSpread(_objectSpread({},i),t);return Apollo.useQuery(X,a)}function te(t){var a=_objectSpread(_objectSpread({},i),t);return Apollo.useLazyQuery(X,a)}var G=(0,d.Ps)(B||(B=(0,u.Z)([`
    mutation createModel($input: ModelCreateInput!) {
  createModel(input: $input) {
    id
    name
  }
}
    `])));function H(t){var a=(0,e.Z)((0,e.Z)({},i),t);return M.D(G,a)}var J=(0,d.Ps)($||($=(0,u.Z)([`
    mutation addModelField($modelId: ID!, $input: ModelFieldInput!) {
  addModelField(modelId: $modelId, input: $input) {
    id
    name
  }
}
    `])));function V(t){var a=(0,e.Z)((0,e.Z)({},i),t);return M.D(J,a)}var Y=(0,d.Ps)(b||(b=(0,u.Z)([`
    mutation removeModelField($modelId: ID!, $fieldId: ID!) {
  removeModelField(modelId: $modelId, fieldId: $fieldId)
}
    `])));function q(t){var a=(0,e.Z)((0,e.Z)({},i),t);return M.D(Y,a)}},64043:function(U,A,r){"use strict";r.d(A,{ZO:function(){return e.ZO},KX:function(){return e.KX},Pw:function(){return e.Pw},aA:function(){return e.aA},G$:function(){return e.G$},_c:function(){return e._c},c9:function(){return e.c9},WF:function(){return e.WF},ot:function(){return e.ot},au:function(){return e.au},Nq:function(){return e.Nq},wp:function(){return e.wp},AQ:function(){return e.AQ}});var e=r(23798)},26008:function(U,A,r){"use strict";r.r(A),r.d(A,{default:function(){return $}});var e=r(2824),u=r(67294),d=r(28865),C=r(1861),O=r(51615),M=r(39428),c=r(11849),R=r(3182),L=r(94184),P=r.n(L),l=r(17818),h=r(64043),n=r(85893);function f(b){var i=b.visible,x=b.onClose,o=(0,u.useState)("settings"),g=(0,e.Z)(o,2),m=g[0],N=g[1],p=l.l0.useForm(),j=(0,h.Pw)(),Z=(0,e.Z)(j,2),S=Z[0],z=Z[1].loading,_=(0,u.useCallback)(function(v){return function(){N(v)}},[]),E=(0,u.useCallback)((0,R.Z)((0,M.Z)().mark(function v(){var y;return(0,M.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,p.validateFields();case 2:return y=s.sent,y.metadata.databaseTableName||(y.metadata.databaseTableName=y.code),s.next=6,S({variables:{input:(0,c.Z)((0,c.Z)({},y),{},{features:["master","system-fields"]})}});case 6:l.FN.success("\u6A21\u578B \u201C".concat(y.name,"\u201D \u65B0\u589E\u6210\u529F"),2e3,{placement:"bottom-start",progressBar:!0});case 7:case"end":return s.stop()}},v)})),[S,p]);return(0,n.jsxs)(l.u_,{confirmLoading:z,maskClosable:!z,width:592,centered:!0,visible:i,closable:!1,onCancel:x,onOk:E,children:[(0,n.jsx)(l.u_.Header,{children:(0,n.jsx)("h4",{children:"\u521B\u5EFA\u6A21\u578B"})}),(0,n.jsx)(l.u_.Body,{children:(0,n.jsxs)(l.l0,{form:p,children:[(0,n.jsxs)("div",{className:"mb-5",children:[(0,n.jsx)(l.zx,{color:m!="settings"&&"gray-700",variant:m=="settings"?"light-primary":!1,activeColor:m=="settings"?"light-primary":"secondary",className:"me-4 px-5",onClick:_("settings"),children:"\u8BBE\u7F6E"}),(0,n.jsx)(l.zx,{color:m!="advanced"&&"gray-700",variant:m=="advanced"?"light-primary":!1,activeColor:m=="advanced"?"light-primary":"secondary",className:"me-4 px-5",onClick:_("advanced"),children:"\u9AD8\u7EA7"})]}),(0,n.jsxs)("div",{className:P()("modal-tabpane",{"d-none":m!="settings"}),children:[(0,n.jsx)(l.l0.Item,{required:!1,className:"mb-5",name:"name",label:"\u663E\u793A\u540D\u79F0",help:"\u914D\u7F6E\u6A21\u578B\u65F6\u663E\u793A\u7684\u540D\u79F0, \u901A\u5E38\u4E3A\u4E2D\u6587",rules:[{required:!0,message:"\u663E\u793A\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(l.II,{solid:!0})}),(0,n.jsx)(l.l0.Item,{required:!1,className:"my-5",name:"code",label:"\u7F16\u7801",help:"\u7528\u4E8E\u901A\u8FC7 API \u8BBF\u95EE\u6B64\u6A21\u578B\u7684 ID, \u4E0D\u80FD\u4E3A\u4E2D\u6587",rules:[{required:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(l.II,{solid:!0})}),(0,n.jsx)(l.l0.Item,{className:"mt-5",name:"description",label:"\u63CF\u8FF0",help:"\u4E3A\u5185\u5BB9\u7F16\u8F91\u8005\u548C API \u7528\u6237\u663E\u793A\u63D0\u793A",requiredMark:"optional",children:(0,n.jsx)(l.II.TextArea,{solid:!0,autoSize:{maxRows:4,minRows:2}})})]}),(0,n.jsx)("div",{className:P()("modal-tabpane",{"d-none":m!="advanced"}),children:(0,n.jsx)(l.l0.Item,{className:"mb-5",name:["metadata","databaseTableName"],label:"\u8868\u540D",help:"\u6620\u5C04\u5230\u6570\u636E\u5E93\u4E2D\u7684\u8868\u540D",children:(0,n.jsx)(l.II,{solid:!0})})})]})})]})}var T=f,I=r(80590);function B(b){var i=b.location,x=b.history,o=b.children,g=i.state.module,m=(0,u.useState)(!1),N=(0,e.Z)(m,2),p=N[0],j=N[1],Z=(0,h.wp)({variables:{module:g.id},fetchPolicy:"cache-and-network"}),S=Z.data,z=Z.loading,_=S||{},E=_.models,v=E===void 0?[]:E,y=(0,u.useCallback)(function(){j(!0)},[]),D=(0,u.useCallback)(function(){j(!1)},[]),s=i.state.baseUrl,Q=s===void 0?"":s,W=(0,u.useCallback)(function(F){return function(){x.push("".concat(Q,"/schema/models/").concat(F.id))}},[Q,x]),w=(0,u.useMemo)(function(){var F=(0,O.LX)(i.pathname,{path:"".concat(Q,"/schema/models/:mid"),exact:!0,strict:!0});return F?"model_"+F.params.mid:""},[Q,i.pathname]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(I.Z,{className:"module_secondary_sidebar",width:260,children:(0,n.jsxs)("div",{className:"h-100",children:[(0,n.jsx)("div",{className:"mx-2 p-5 mt-5",children:(0,n.jsx)("h3",{className:"fw-bold text-dark mx-0 mb-0",children:"\u67B6\u6784"})}),(0,n.jsx)(C.E,{className:"d-flex h-100 flex-column custom-scrollbar",options:{scrollbars:{autoHide:"scroll"}},children:(0,n.jsxs)(l.v2,{className:"px-7 menu-state-bg menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0",selectedKeys:w?[w]:[],accordion:!1,selectable:"AllMenu",fit:!0,children:[(0,n.jsxs)(l.v2.Section,{className:"menu-section-container",sectionClassName:"d-flex align-items-center",children:[(0,n.jsxs)("span",{className:"menu-section text-muted text-uppercase fs-8 ls-1 flex-row-fluid",children:["\u6A21\u578B ",z&&" - \u52A0\u8F7D\u4E2D..."]}),(0,n.jsx)(l.zx,{icon:(0,n.jsx)(d.JO,{style:{marginRight:".2rem"},name:"Duotune/arr087",className:""}),size:"sm",variant:"white",activeColor:"light",className:"px-3 me-n4",onClick:y,children:"\u65B0\u589E"})]}),v.map(function(F){return(0,n.jsx)(l.v2.Item,{onClick:W(F),children:F.name},"model_".concat(F.id))}),(0,n.jsx)(l.v2.Item,{children:"xxxx3"})]})})]})}),(0,n.jsx)(T,{visible:p,onClose:D}),o]})}var $=B}}]);
