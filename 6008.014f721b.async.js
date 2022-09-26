(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[6008],{80590:function(W,E,r){"use strict";r.d(E,{Z:function(){return l}});var e=r(2824),i=r(67294),s=r(96486),I=r(94184),O=r.n(I),y=r(54406),c=r(85893),L=260,R=768;function P(p){var n=p.minWidth,f=n===void 0?L:n,T=p.maxWidth,C=T===void 0?R:T,B=p.collapsible,g=B===void 0?!0:B,b=p.children,j=p.className,u=p.onWidthChange,o=(0,i.useRef)({minimized:!1,width:p.width}),A=(0,i.useReducer)(function(d){return d+1},0),v=(0,e.Z)(A,2),Z=v[1],M=(0,i.useMemo)(function(){return(0,s.debounce)(function(){Z()},10)},[]),x=(0,i.useCallback)(function(d){return g&&f-d>f/2||d<=30},[g,f]),F=(0,i.useCallback)(function(){o.current.minimized&&o.current.width>0&&(o.current.width=0)},[]),N=(0,i.useCallback)(function(d){o.current.width+=d,x(o.current.width)?o.current.minimized=!0:o.current.minimized=!1,M()},[M,x]),S=(0,i.useCallback)(function(){o.current.width=x(o.current.width)?0:Math.min(C,Math.max(f,o.current.width))},[x,C,f]),_=(0,i.useCallback)(function(){o.current.minimized=!o.current.minimized,o.current.width||(o.current.width=f),M()},[M,f]),$=o.current,m=$.minimized,h=$.width,z=(0,i.useMemo)(function(){return Math.min(C,Math.max(f,h))},[C,f,h]);return(0,i.useEffect)(function(){u&&u(m?0:z)},[u,m,z]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"secondary_sidebar-resizer__mirror",style:{width:m?void 0:z}}),(0,c.jsxs)(y.w_,{className:O()("secondary_sidebar-resizer d-flex flex-column flex-lg-row",j,{"secondary_sidebar-resizer-minimized":m}),style:{width:m?void 0:z},onResizeStart:F,onResize:N,onResizeEnd:S,children:[g&&(0,c.jsxs)("button",{onClick:_,className:O()("secondary_sidebar-resize-button",{collapsed:m,expanded:!m}),type:"button",children:[(0,c.jsx)("div",{className:"invisible-area"}),(0,c.jsx)("span",{className:"homemade-button",role:"presentation",children:(0,c.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",focusable:"false",role:"presentation",children:(0,c.jsx)("path",{d:"M10.294 9.698a.988.988 0 0 1 0-1.407 1.01 1.01 0 0 1 1.419 0l2.965 2.94a1.09 1.09 0 0 1 0 1.548l-2.955 2.93a1.01 1.01 0 0 1-1.42 0 .988.988 0 0 1 0-1.407l2.318-2.297-2.327-2.307z",fill:"currentColor",fillRule:"evenodd"})})})]}),(0,c.jsx)("div",{className:"secondary_sidebar-inner flex-column flex-lg-row-auto w-100 mb-10 mb-lg-0",children:b})]})]})}var l=P},23798:function(W,E,r){"use strict";r.d(E,{k$:function(){return A},WF:function(){return v},au:function(){return M},ot:function(){return x},aA:function(){return N},AQ:function(){return _},G$:function(){return m},wp:function(){return Q},ZO:function(){return w},c9:function(){return D},_c:function(){return k},Pw:function(){return H},KX:function(){return V},w4:function(){return q},Nq:function(){return ne}});var e=r(11849),i=r(20310),s=r(49704),I=r(64718),O=r(38460),y=r(21919),c,L,R,P,l,p,n,f,T,C,B,g,b,j,u={},o=(0,s.Ps)(c||(c=(0,i.Z)([`
    query module($id: ID!) {
  module(id: $id) {
    id
    code
    name
    picture
    description
  }
}
    `])));function A(t){var a=(0,e.Z)((0,e.Z)({},u),t);return I.a(o,a)}function v(t){var a=(0,e.Z)((0,e.Z)({},u),t);return O.t(o,a)}var Z=(0,s.Ps)(L||(L=(0,i.Z)([`
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
    `])));function M(t){var a=(0,e.Z)((0,e.Z)({},u),t);return I.a(Z,a)}function x(t){var a=(0,e.Z)((0,e.Z)({},u),t);return O.t(Z,a)}var F=(0,s.Ps)(R||(R=(0,i.Z)([`
    mutation createModule($input: ModuleCreateInput!) {
  createModule(input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function N(t){var a=(0,e.Z)((0,e.Z)({},u),t);return y.D(F,a)}var S=(0,s.Ps)(P||(P=(0,i.Z)([`
    mutation updateModule($id: ID!, $input: ModuleUpdateInput!) {
  updateModule(id: $id, input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function _(t){var a=(0,e.Z)((0,e.Z)({},u),t);return y.D(S,a)}var $=(0,s.Ps)(l||(l=(0,i.Z)([`
    mutation deleteModule($id: ID!) {
  deleteModule(id: $id)
}
    `])));function m(t){var a=(0,e.Z)((0,e.Z)({},u),t);return y.D($,a)}var h=(0,s.Ps)(p||(p=(0,i.Z)([`
    mutation deleteManyModules($ids: [ID!]!) {
  deleteManyModules(ids: $ids)
}
    `])));function z(t){var a=_objectSpread(_objectSpread({},u),t);return Apollo.useMutation(h,a)}var d=(0,s.Ps)(n||(n=(0,i.Z)([`
    query schema($module: ID!) {
  models(module: $module, filter: {type: ENTITY}) {
    id
    code
    name
    description
  }
}
    `])));function Q(t){var a=(0,e.Z)((0,e.Z)({},u),t);return I.a(d,a)}function U(t){var a=_objectSpread(_objectSpread({},u),t);return Apollo.useLazyQuery(d,a)}var w=(0,s.Ps)(f||(f=(0,i.Z)([`
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
    `])));function D(t){var a=(0,e.Z)((0,e.Z)({},u),t);return I.a(w,a)}function te(t){var a=_objectSpread(_objectSpread({},u),t);return Apollo.useLazyQuery(w,a)}var K=(0,s.Ps)(T||(T=(0,i.Z)([`
    query modelFiledTypes {
  filedTypes: modelFiledTypes {
    id
    name
    description
    family
  }
}
    `])));function k(t){var a=(0,e.Z)((0,e.Z)({},u),t);return I.a(K,a)}function ae(t){var a=_objectSpread(_objectSpread({},u),t);return Apollo.useLazyQuery(K,a)}var X=(0,s.Ps)(C||(C=(0,i.Z)([`
    query modelFields($model: ID!, $filter: ModelFieldFilter, $limit: Int) {
  listFields: modelFields(model: $model, filter: $filter, limit: $limit) {
    id
    name
    description
  }
}
    `])));function re(t){var a=_objectSpread(_objectSpread({},u),t);return Apollo.useQuery(X,a)}function ie(t){var a=_objectSpread(_objectSpread({},u),t);return Apollo.useLazyQuery(X,a)}var G=(0,s.Ps)(B||(B=(0,i.Z)([`
    mutation createModel($input: ModelCreateInput!) {
  createModel(input: $input) {
    id
    name
  }
}
    `])));function H(t){var a=(0,e.Z)((0,e.Z)({},u),t);return y.D(G,a)}var J=(0,s.Ps)(g||(g=(0,i.Z)([`
    mutation addModelField($modelId: ID!, $input: ModelFieldInput!) {
  addModelField(modelId: $modelId, input: $input) {
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
    `])));function V(t){var a=(0,e.Z)((0,e.Z)({},u),t);return y.D(J,a)}var Y=(0,s.Ps)(b||(b=(0,i.Z)([`
    mutation updateModelField($modelId: ID!, $fieldId: ID!, $input: ModelFieldInput!) {
  updateModelField(modelId: $modelId, fieldId: $fieldId, input: $input) {
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
    `])));function q(t){var a=(0,e.Z)((0,e.Z)({},u),t);return y.D(Y,a)}var ee=(0,s.Ps)(j||(j=(0,i.Z)([`
    mutation removeModelField($modelId: ID!, $fieldId: ID!) {
  removeModelField(modelId: $modelId, fieldId: $fieldId)
}
    `])));function ne(t){var a=(0,e.Z)((0,e.Z)({},u),t);return y.D(ee,a)}},64043:function(W,E,r){"use strict";r.d(E,{ZO:function(){return e.ZO},KX:function(){return e.KX},Pw:function(){return e.Pw},aA:function(){return e.aA},G$:function(){return e.G$},_c:function(){return e._c},c9:function(){return e.c9},WF:function(){return e.WF},ot:function(){return e.ot},au:function(){return e.au},Nq:function(){return e.Nq},wp:function(){return e.wp},w4:function(){return e.w4},AQ:function(){return e.AQ}});var e=r(23798)},26008:function(W,E,r){"use strict";r.r(E),r.d(E,{default:function(){return g}});var e=r(2824),i=r(67294),s=r(28865),I=r(1861),O=r(51615),y=r(39428),c=r(11849),L=r(3182),R=r(94184),P=r.n(R),l=r(17818),p=r(64043),n=r(85893);function f(b){var j=b.visible,u=b.onClose,o=(0,i.useState)("settings"),A=(0,e.Z)(o,2),v=A[0],Z=A[1],M=l.l0.useForm(),x=(0,p.Pw)(),F=(0,e.Z)(x,2),N=F[0],S=F[1].loading,_=(0,i.useCallback)(function(m){return function(){Z(m)}},[]),$=(0,i.useCallback)((0,L.Z)((0,y.Z)().mark(function m(){var h;return(0,y.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,M.validateFields();case 2:return h=d.sent,h.metadata.databaseTableName||(h.metadata.databaseTableName=h.code),d.next=6,N({variables:{input:(0,c.Z)((0,c.Z)({},h),{},{features:["master","system-fields"]})}});case 6:l.FN.success("\u6A21\u578B \u201C".concat(h.name,"\u201D \u65B0\u589E\u6210\u529F"),2e3,{placement:"bottom-start",progressBar:!0});case 7:case"end":return d.stop()}},m)})),[N,M]);return(0,n.jsxs)(l.u_,{confirmLoading:S,maskClosable:!S,width:592,centered:!0,visible:j,closable:!1,onCancel:u,onOk:$,children:[(0,n.jsx)(l.u_.Header,{children:(0,n.jsx)("h4",{children:"\u521B\u5EFA\u6A21\u578B"})}),(0,n.jsx)(l.u_.Body,{children:(0,n.jsxs)(l.l0,{form:M,children:[(0,n.jsxs)("div",{className:"mb-5",children:[(0,n.jsx)(l.zx,{color:v!="settings"&&"gray-700",variant:v=="settings"?"light-primary":!1,activeColor:v=="settings"?"light-primary":"secondary",className:"me-4 px-5",onClick:_("settings"),children:"\u8BBE\u7F6E"}),(0,n.jsx)(l.zx,{color:v!="advanced"&&"gray-700",variant:v=="advanced"?"light-primary":!1,activeColor:v=="advanced"?"light-primary":"secondary",className:"me-4 px-5",onClick:_("advanced"),children:"\u9AD8\u7EA7"})]}),(0,n.jsxs)("div",{className:P()("modal-tabpane",{"d-none":v!="settings"}),children:[(0,n.jsx)(l.l0.Item,{required:!1,className:"mb-5",name:"name",label:"\u663E\u793A\u540D\u79F0",help:"\u914D\u7F6E\u6A21\u578B\u65F6\u663E\u793A\u7684\u540D\u79F0, \u901A\u5E38\u4E3A\u4E2D\u6587",rules:[{required:!0,message:"\u663E\u793A\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(l.II,{solid:!0})}),(0,n.jsx)(l.l0.Item,{required:!1,className:"my-5",name:"code",label:"\u7F16\u7801",help:"\u7528\u4E8E\u901A\u8FC7 API \u8BBF\u95EE\u6B64\u6A21\u578B\u7684 ID, \u4E0D\u80FD\u4E3A\u4E2D\u6587",rules:[{required:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(l.II,{solid:!0})}),(0,n.jsx)(l.l0.Item,{className:"mt-5",name:"description",label:"\u63CF\u8FF0",help:"\u4E3A\u5185\u5BB9\u7F16\u8F91\u8005\u548C API \u7528\u6237\u663E\u793A\u63D0\u793A",requiredMark:"optional",children:(0,n.jsx)(l.II.TextArea,{solid:!0,autoSize:{maxRows:4,minRows:2}})})]}),(0,n.jsx)("div",{className:P()("modal-tabpane",{"d-none":v!="advanced"}),children:(0,n.jsx)(l.l0.Item,{className:"mb-5",name:["metadata","databaseTableName"],label:"\u8868\u540D",help:"\u6620\u5C04\u5230\u6570\u636E\u5E93\u4E2D\u7684\u8868\u540D",children:(0,n.jsx)(l.II,{solid:!0})})})]})})]})}var T=f,C=r(80590);function B(b){var j=b.location,u=b.history,o=b.children,A=j.state.module,v=(0,i.useState)(!1),Z=(0,e.Z)(v,2),M=Z[0],x=Z[1],F=(0,p.wp)({variables:{module:A.id},fetchPolicy:"cache-and-network"}),N=F.data,S=F.loading,_=N||{},$=_.models,m=$===void 0?[]:$,h=(0,i.useCallback)(function(){x(!0)},[]),z=(0,i.useCallback)(function(){x(!1)},[]),d=j.state.baseUrl,Q=d===void 0?"":d,U=(0,i.useCallback)(function(D){return function(){u.push("".concat(Q,"/schema/models/").concat(D.id))}},[Q,u]),w=(0,i.useMemo)(function(){var D=(0,O.LX)(j.pathname,{path:"".concat(Q,"/schema/models/:mid"),exact:!0,strict:!0});return D?"model_"+D.params.mid:""},[Q,j.pathname]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C.Z,{className:"module_secondary_sidebar",width:260,children:(0,n.jsxs)("div",{className:"h-100",children:[(0,n.jsx)("div",{className:"mx-2 p-5 mt-5",children:(0,n.jsx)("h3",{className:"fw-bold text-dark mx-0 mb-0",children:"\u67B6\u6784"})}),(0,n.jsx)(I.E,{className:"d-flex h-100 flex-column custom-scrollbar",options:{scrollbars:{autoHide:"scroll"}},children:(0,n.jsxs)(l.v2,{className:"px-7 menu-state-bg menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 my-5 my-lg-0",selectedKeys:w?[w]:[],accordion:!1,selectable:"AllMenu",fit:!0,children:[(0,n.jsxs)(l.v2.Section,{className:"menu-section-container",sectionClassName:"d-flex align-items-center",children:[(0,n.jsxs)("span",{className:"menu-section text-muted text-uppercase fs-8 ls-1 flex-row-fluid",children:["\u6A21\u578B ",S&&" - \u52A0\u8F7D\u4E2D..."]}),(0,n.jsx)(l.zx,{icon:(0,n.jsx)(s.JO,{style:{marginRight:".2rem"},name:"Duotune/arr087",className:""}),size:"sm",variant:"white",activeColor:"light",className:"px-3 me-n4",onClick:h,children:"\u65B0\u589E"})]}),m.map(function(D){return(0,n.jsx)(l.v2.Item,{onClick:U(D),children:D.name},"model_".concat(D.id))}),(0,n.jsx)(l.v2.Item,{children:"xxxx3"})]})})]})}),(0,n.jsx)(T,{visible:M,onClose:z}),o]})}var g=B}}]);
