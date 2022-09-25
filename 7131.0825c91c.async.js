(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[7131],{19273:function(Q,v,l){"use strict";l.d(v,{Z:function(){return e}});function e(r){if(r==null)throw new TypeError("Cannot destructure undefined")}},23798:function(Q,v,l){"use strict";l.d(v,{k$:function(){return $},WF:function(){return g},au:function(){return f},ot:function(){return y},aA:function(){return I},AQ:function(){return j},G$:function(){return W},wp:function(){return B},ZO:function(){return x},c9:function(){return U},_c:function(){return _},Pw:function(){return H},KX:function(){return J},Nq:function(){return q}});var e=l(11849),r=l(20310),s=l(49704),h=l(64718),b=l(38460),i=l(21919),L,N,w,a,P,n,R,S,D,p,c,d,E,o={},Z=(0,s.Ps)(L||(L=(0,r.Z)([`
    query module($id: ID!) {
  module(id: $id) {
    id
    code
    name
    picture
    description
  }
}
    `])));function $(u){var t=(0,e.Z)((0,e.Z)({},o),u);return h.a(Z,t)}function g(u){var t=(0,e.Z)((0,e.Z)({},o),u);return b.t(Z,t)}var F=(0,s.Ps)(N||(N=(0,r.Z)([`
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
    `])));function f(u){var t=(0,e.Z)((0,e.Z)({},o),u);return h.a(F,t)}function y(u){var t=(0,e.Z)((0,e.Z)({},o),u);return b.t(F,t)}var T=(0,s.Ps)(w||(w=(0,r.Z)([`
    mutation createModule($input: ModuleCreateInput!) {
  createModule(input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function I(u){var t=(0,e.Z)((0,e.Z)({},o),u);return i.D(T,t)}var A=(0,s.Ps)(a||(a=(0,r.Z)([`
    mutation updateModule($id: ID!, $input: ModuleUpdateInput!) {
  updateModule(id: $id, input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function j(u){var t=(0,e.Z)((0,e.Z)({},o),u);return i.D(A,t)}var K=(0,s.Ps)(P||(P=(0,r.Z)([`
    mutation deleteModule($id: ID!) {
  deleteModule(id: $id)
}
    `])));function W(u){var t=(0,e.Z)((0,e.Z)({},o),u);return i.D(K,t)}var k=(0,s.Ps)(n||(n=(0,r.Z)([`
    mutation deleteManyModules($ids: [ID!]!) {
  deleteManyModules(ids: $ids)
}
    `])));function O(u){var t=_objectSpread(_objectSpread({},o),u);return Apollo.useMutation(k,t)}var m=(0,s.Ps)(R||(R=(0,r.Z)([`
    query schema($module: ID!) {
  models(module: $module, filter: {type: ENTITY}) {
    id
    code
    name
    description
  }
}
    `])));function B(u){var t=(0,e.Z)((0,e.Z)({},o),u);return h.a(m,t)}function M(u){var t=_objectSpread(_objectSpread({},o),u);return Apollo.useLazyQuery(m,t)}var x=(0,s.Ps)(S||(S=(0,r.Z)([`
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
    `])));function U(u){var t=(0,e.Z)((0,e.Z)({},o),u);return h.a(x,t)}function C(u){var t=_objectSpread(_objectSpread({},o),u);return Apollo.useLazyQuery(x,t)}var z=(0,s.Ps)(D||(D=(0,r.Z)([`
    query modelFiledTypes {
  filedTypes: modelFiledTypes {
    id
    name
    description
    family
  }
}
    `])));function _(u){var t=(0,e.Z)((0,e.Z)({},o),u);return h.a(z,t)}function ee(u){var t=_objectSpread(_objectSpread({},o),u);return Apollo.useLazyQuery(z,t)}var V=(0,s.Ps)(p||(p=(0,r.Z)([`
    query modelFields($model: ID!, $filter: ModelFieldFilter, $limit: Int) {
  listFields: modelFields(model: $model, filter: $filter, limit: $limit) {
    id
    name
    description
  }
}
    `])));function ne(u){var t=_objectSpread(_objectSpread({},o),u);return Apollo.useQuery(V,t)}function ue(u){var t=_objectSpread(_objectSpread({},o),u);return Apollo.useLazyQuery(V,t)}var G=(0,s.Ps)(c||(c=(0,r.Z)([`
    mutation createModel($input: ModelCreateInput!) {
  createModel(input: $input) {
    id
    name
  }
}
    `])));function H(u){var t=(0,e.Z)((0,e.Z)({},o),u);return i.D(G,t)}var X=(0,s.Ps)(d||(d=(0,r.Z)([`
    mutation addModelField($modelId: ID!, $input: ModelFieldInput!) {
  addModelField(modelId: $modelId, input: $input) {
    id
    name
  }
}
    `])));function J(u){var t=(0,e.Z)((0,e.Z)({},o),u);return i.D(X,t)}var Y=(0,s.Ps)(E||(E=(0,r.Z)([`
    mutation removeModelField($modelId: ID!, $fieldId: ID!) {
  removeModelField(modelId: $modelId, fieldId: $fieldId)
}
    `])));function q(u){var t=(0,e.Z)((0,e.Z)({},o),u);return i.D(Y,t)}},64043:function(Q,v,l){"use strict";l.d(v,{ZO:function(){return e.ZO},KX:function(){return e.KX},Pw:function(){return e.Pw},aA:function(){return e.aA},G$:function(){return e.G$},_c:function(){return e._c},c9:function(){return e.c9},WF:function(){return e.WF},ot:function(){return e.ot},au:function(){return e.au},Nq:function(){return e.Nq},wp:function(){return e.wp},AQ:function(){return e.AQ}});var e=l(23798)},87131:function(Q,v,l){"use strict";l.r(v);var e=l(11849),r=l(39428),s=l(3182),h=l(19273),b=l(2824),i=l(67294),L=l(94184),N=l.n(L),w=l(18071),a=l(17818),P=l(64043),n=l(85893);function R(D){var p=D.visible,c=D.onCancel,d=D.data,E=(0,i.useState)(!0),o=(0,b.Z)(E,2),Z=o[0],$=o[1],g=(0,P.G$)(),F=(0,b.Z)(g,2),f=F[0];(0,h.Z)(F[1]);var y=(0,i.useCallback)(function(I,A){$(A.verify!=(d==null?void 0:d.name))},[d==null?void 0:d.name]),T=(0,i.useCallback)((0,s.Z)((0,r.Z)().mark(function I(){return(0,r.Z)().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,f({variables:{id:d.id}});case 2:a.FN.success("\u6A21\u5757 \u201C".concat(d.name,"\u201D \u5220\u9664\u6210\u529F"),2e3,{placement:"bottom-end",progressBar:!0});case 3:case"end":return j.stop()}},I)})),[d.id,d.name,f]);return(0,n.jsxs)(a.u_,{dialogClassName:N()("asany-confirm-modal w-450px"),visible:p,onCancel:c,title:"\u786E\u5B9A\u5220\u9664\u6A21\u5757\u5417\uFF1F",footer:!1,bodyClassName:"p-0",children:[(0,n.jsx)(a.bZ,{type:"danger",message:"\u8BF7\u4ED4\u7EC6\u9605\u8BFB\u4EE5\u4E0B\u4E8B\u9879"}),(0,n.jsxs)("div",{className:"inner-body p-7",children:[(0,n.jsxs)("p",{className:"fs-7",children:["\u60A8\u5373\u5C06\u5220\u9664 ",(0,n.jsx)("b",{children:d==null?void 0:d.name}),"\uFF0C\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u548C\u6062\u590D\u3002"]}),(0,n.jsx)(a.Z0,{className:"my-5"}),(0,n.jsx)(a.l0,{onValuesChange:y,children:(0,n.jsx)(a.l0.Item,{className:"mb-5",name:"verify",label:(0,n.jsxs)(n.Fragment,{children:["\u8F93\u5165\u201C",(0,n.jsx)("i",{children:d==null?void 0:d.name}),"\u201D\uFF0C\u5DF2\u5B8C\u6210\u9A8C\u8BC1"]}),children:(0,n.jsx)(a.II,{solid:!0})})}),(0,n.jsx)(a.zx,{onClick:T,className:"asany-confirm-modal-button",disabled:Z,variant:"light-danger",children:"\u5220\u9664\u6B64\u6A21\u5757"})]})]})}function S(D){var p=a.l0.useForm(),c=D.location.state.module,d=(0,i.useState)(!1),E=(0,b.Z)(d,2),o=E[0],Z=E[1],$=(0,P.ot)(),g=(0,b.Z)($,1),F=g[0],f=(0,i.useRef)(new AbortController),y="cn.asany",T=(0,P.AQ)(),I=(0,b.Z)(T,2),A=I[0],j=I[1].loading,K=(0,i.useCallback)((0,s.Z)((0,r.Z)().mark(function O(){var m;return(0,r.Z)().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,p.validateFields();case 2:return m=M.sent,M.next=5,A({variables:{id:c.id,input:(0,e.Z)((0,e.Z)({},m),{},{code:y+"."+m.code})}});case 5:a.FN.success("\u6A21\u5757 \u201C".concat(m.name,"\u201D \u66F4\u65B0\u6210\u529F"),2e3,{placement:"bottom-end",progressBar:!0});case 6:case"end":return M.stop()}},O)})),[p,c.id,A]),W=(0,i.useCallback)(function(){Z(!1)},[]),k=(0,i.useCallback)(function(){Z(!0)},[]);return(0,i.useEffect)(function(){var O,m;p.setFieldsValue((0,e.Z)((0,e.Z)({},c),{},{code:(O=c.code)===null||O===void 0?void 0:O.replaceAll(y+".",""),picture:(m=c.picture)===null||m===void 0?void 0:m.id}))},[p,c]),(0,n.jsxs)(w.JH,{children:[(0,n.jsxs)(a.Zb,{className:"mb-5 mb-xl-10",children:[(0,n.jsx)(a.Zb.Header,{children:(0,n.jsx)(a.Zb.Title,{children:"\u6A21\u5757\u4FE1\u606F"})}),(0,n.jsxs)(a.Zb.Body,{children:[(0,n.jsxs)(a.l0,{form:p,className:"mw-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row",children:[(0,n.jsx)("div",{className:"mw-500px col-12 col-md-8",children:(0,n.jsxs)("div",{className:"mw-400px",children:[(0,n.jsx)(a.l0.Item,{required:!1,className:"mb-5",name:"name",label:"\u540D\u79F0",rules:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(a.II,{solid:!0})}),(0,n.jsx)(a.l0.Item,{required:!1,className:"my-5",name:"code",label:"\u7F16\u7801",hasFeedback:!0,help:"\u8BF7\u53C2\u8003\u7F16\u7A0B\u4E2D\u547D\u540D\u7A7A\u95F4\u7684\u5199\u6CD5",rules:[{required:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"},{validator:function(m,B){return(0,s.Z)((0,r.Z)().mark(function M(){var x,U,C;return(0,r.Z)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(B){_.next=2;break}return _.abrupt("return");case 2:if(x=y+"."+B,f.current&&f.current.abort(),x!=c.code){_.next=6;break}return _.abrupt("return");case 6:return f.current=new AbortController,_.next=9,F({variables:{filter:{code:x},limit:1},fetchPolicy:"network-only",context:{fetchOptions:{signal:f.current.signal}}});case 9:if(U=_.sent,C=U.data,console.log("validator",m,B,C==null?void 0:C.modules),!(C!=null&&C.modules.length)){_.next=14;break}throw new Error(m.message);case 14:case"end":return _.stop()}},M)}))()},message:"\u7F16\u7801\u4E0D\u80FD\u91CD\u590D"}],children:(0,n.jsx)(a.II,{solid:!0,addonBefore:y+".",placeholder:"\u4F8B\u5982: module.text"})}),(0,n.jsx)(a.l0.Item,{className:"my-5",name:"description",label:"\u63CF\u8FF0",requiredMark:"optional",children:(0,n.jsx)(a.II.TextArea,{solid:!0,autoSize:{maxRows:4,minRows:2}})})]})}),(0,n.jsx)("div",{className:"col-12 col-md-4",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)(a.l0.Item,{className:"mb-5",name:"picture",label:"\u6A21\u5757\u56FE\u7247",help:"\u5141\u8BB8\u7684\u6587\u4EF6\u7C7B\u578B:png, jpg, jpeg\u3002",children:(0,n.jsx)(a.gq.Image,{width:148,height:148,space:"7VE4SSrk",crop:{height:300,zoomable:!1,aspectRatio:1},accept:".png, .jpg, .jpeg",background:(0,n.jsx)(a.mN,{autoColor:!1,labelClassName:"bg-dark text-inverse-info fs-3tx",alt:c.name})})})})})]}),(0,n.jsx)(a.zx,{loading:j,onClick:K,children:"\u66F4\u65B0\u6A21\u5757\u4FE1\u606F"})]})]}),(0,n.jsxs)(a.Zb,{className:"mb-5 mb-xl-10",children:[(0,n.jsx)(a.Zb.Header,{children:(0,n.jsx)(a.Zb.Title,{className:"text-danger",children:"\u5220\u9664\u6A21\u5757"})}),(0,n.jsxs)(a.Zb.Body,{children:[(0,n.jsxs)("div",{className:"fs-7 gap-2 d-flex flex-column mb-3",children:[(0,n.jsx)("p",{className:"mb-0",children:"\u5220\u9664\u64CD\u4F5C\u5C06\u4F1A\u6E05\u9664\u6389\u6A21\u5757\u4E2D\u7684\u6240\u6709\u5185\u5BB9\uFF0C\u5305\u62EC\uFF1A\u6A21\u578B/\u6570\u636E\u7B49"}),(0,n.jsx)("p",{className:"mb-0",children:"\u5E10\u6237\u5220\u9664\u540E\uFF0C\u5C06\u65E0\u6CD5\u6062\u590D\u3002\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002"})]}),(0,n.jsx)(a.zx,{variant:"danger",onClick:k,children:"\u5220\u9664\u6A21\u5757"}),(0,n.jsx)(R,{data:c,visible:o,onCancel:W})]})]})]})}v.default=S}}]);
