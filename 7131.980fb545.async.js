(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[7131],{19273:function(S,b,l){"use strict";l.d(b,{Z:function(){return e}});function e(r){if(r==null)throw new TypeError("Cannot destructure undefined")}},23798:function(S,b,l){"use strict";l.d(b,{k$:function(){return g},WF:function(){return $},au:function(){return j},ot:function(){return T},aA:function(){return O},AQ:function(){return K},G$:function(){return k},wp:function(){return M},ZO:function(){return B},c9:function(){return v},_c:function(){return G},Pw:function(){return X},KX:function(){return Y},w4:function(){return ee},Nq:function(){return ue}});var e=l(11849),r=l(20310),i=l(49704),E=l(64718),D=l(38460),s=l(21919),L,N,w,a,x,n,U,Q,y,p,m,d,F,Z,o={},P=(0,i.Ps)(L||(L=(0,r.Z)([`
    query module($id: ID!) {
  module(id: $id) {
    id
    code
    name
    picture
    description
  }
}
    `])));function g(u){var t=(0,e.Z)((0,e.Z)({},o),u);return E.a(P,t)}function $(u){var t=(0,e.Z)((0,e.Z)({},o),u);return D.t(P,t)}var f=(0,i.Ps)(N||(N=(0,r.Z)([`
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
    `])));function j(u){var t=(0,e.Z)((0,e.Z)({},o),u);return E.a(f,t)}function T(u){var t=(0,e.Z)((0,e.Z)({},o),u);return D.t(f,t)}var I=(0,i.Ps)(w||(w=(0,r.Z)([`
    mutation createModule($input: ModuleCreateInput!) {
  createModule(input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function O(u){var t=(0,e.Z)((0,e.Z)({},o),u);return s.D(I,t)}var C=(0,i.Ps)(a||(a=(0,r.Z)([`
    mutation updateModule($id: ID!, $input: ModuleUpdateInput!) {
  updateModule(id: $id, input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function K(u){var t=(0,e.Z)((0,e.Z)({},o),u);return s.D(C,t)}var W=(0,i.Ps)(x||(x=(0,r.Z)([`
    mutation deleteModule($id: ID!) {
  deleteModule(id: $id)
}
    `])));function k(u){var t=(0,e.Z)((0,e.Z)({},o),u);return s.D(W,t)}var h=(0,i.Ps)(n||(n=(0,r.Z)([`
    mutation deleteManyModules($ids: [ID!]!) {
  deleteManyModules(ids: $ids)
}
    `])));function _(u){var t=_objectSpread(_objectSpread({},o),u);return Apollo.useMutation(h,t)}var A=(0,i.Ps)(U||(U=(0,r.Z)([`
    query schema($module: ID!) {
  models(module: $module, filter: {type: ENTITY}) {
    id
    code
    name
    description
  }
}
    `])));function M(u){var t=(0,e.Z)((0,e.Z)({},o),u);return E.a(A,t)}function R(u){var t=_objectSpread(_objectSpread({},o),u);return Apollo.useLazyQuery(A,t)}var B=(0,i.Ps)(Q||(Q=(0,r.Z)([`
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
    `])));function v(u){var t=(0,e.Z)((0,e.Z)({},o),u);return E.a(B,t)}function V(u){var t=_objectSpread(_objectSpread({},o),u);return Apollo.useLazyQuery(B,t)}var c=(0,i.Ps)(y||(y=(0,r.Z)([`
    query modelFiledTypes {
  filedTypes: modelFiledTypes {
    id
    name
    description
    family
  }
}
    `])));function G(u){var t=(0,e.Z)((0,e.Z)({},o),u);return E.a(c,t)}function te(u){var t=_objectSpread(_objectSpread({},o),u);return Apollo.useLazyQuery(c,t)}var z=(0,i.Ps)(p||(p=(0,r.Z)([`
    query modelFields($model: ID!, $filter: ModelFieldFilter, $limit: Int) {
  listFields: modelFields(model: $model, filter: $filter, limit: $limit) {
    id
    name
    description
  }
}
    `])));function ae(u){var t=_objectSpread(_objectSpread({},o),u);return Apollo.useQuery(z,t)}function le(u){var t=_objectSpread(_objectSpread({},o),u);return Apollo.useLazyQuery(z,t)}var H=(0,i.Ps)(m||(m=(0,r.Z)([`
    mutation createModel($input: ModelCreateInput!) {
  createModel(input: $input) {
    id
    name
  }
}
    `])));function X(u){var t=(0,e.Z)((0,e.Z)({},o),u);return s.D(H,t)}var J=(0,i.Ps)(d||(d=(0,r.Z)([`
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
    `])));function Y(u){var t=(0,e.Z)((0,e.Z)({},o),u);return s.D(J,t)}var q=(0,i.Ps)(F||(F=(0,r.Z)([`
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
    `])));function ee(u){var t=(0,e.Z)((0,e.Z)({},o),u);return s.D(q,t)}var ne=(0,i.Ps)(Z||(Z=(0,r.Z)([`
    mutation removeModelField($modelId: ID!, $fieldId: ID!) {
  removeModelField(modelId: $modelId, fieldId: $fieldId)
}
    `])));function ue(u){var t=(0,e.Z)((0,e.Z)({},o),u);return s.D(ne,t)}},64043:function(S,b,l){"use strict";l.d(b,{ZO:function(){return e.ZO},KX:function(){return e.KX},Pw:function(){return e.Pw},aA:function(){return e.aA},G$:function(){return e.G$},_c:function(){return e._c},c9:function(){return e.c9},WF:function(){return e.WF},ot:function(){return e.ot},au:function(){return e.au},Nq:function(){return e.Nq},wp:function(){return e.wp},w4:function(){return e.w4},AQ:function(){return e.AQ}});var e=l(23798)},87131:function(S,b,l){"use strict";l.r(b);var e=l(11849),r=l(39428),i=l(3182),E=l(19273),D=l(2824),s=l(67294),L=l(94184),N=l.n(L),w=l(18071),a=l(17818),x=l(64043),n=l(85893);function U(y){var p=y.visible,m=y.onCancel,d=y.data,F=(0,s.useState)(!0),Z=(0,D.Z)(F,2),o=Z[0],P=Z[1],g=(0,x.G$)(),$=(0,D.Z)(g,2),f=$[0];(0,E.Z)($[1]);var j=(0,s.useCallback)(function(I,O){P(O.verify!=(d==null?void 0:d.name))},[d==null?void 0:d.name]),T=(0,s.useCallback)((0,i.Z)((0,r.Z)().mark(function I(){return(0,r.Z)().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,f({variables:{id:d.id}});case 2:a.FN.success("\u6A21\u5757 \u201C".concat(d.name,"\u201D \u5220\u9664\u6210\u529F"),2e3,{placement:"bottom-end",progressBar:!0});case 3:case"end":return C.stop()}},I)})),[d.id,d.name,f]);return(0,n.jsxs)(a.u_,{dialogClassName:N()("asany-confirm-modal w-450px"),visible:p,onCancel:m,title:"\u786E\u5B9A\u5220\u9664\u6A21\u5757\u5417\uFF1F",footer:!1,bodyClassName:"p-0",children:[(0,n.jsx)(a.bZ,{type:"danger",message:"\u8BF7\u4ED4\u7EC6\u9605\u8BFB\u4EE5\u4E0B\u4E8B\u9879"}),(0,n.jsxs)("div",{className:"inner-body p-7",children:[(0,n.jsxs)("p",{className:"fs-7",children:["\u60A8\u5373\u5C06\u5220\u9664 ",(0,n.jsx)("b",{children:d==null?void 0:d.name}),"\uFF0C\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u548C\u6062\u590D\u3002"]}),(0,n.jsx)(a.Z0,{className:"my-5"}),(0,n.jsx)(a.l0,{onValuesChange:j,children:(0,n.jsx)(a.l0.Item,{className:"mb-5",name:"verify",label:(0,n.jsxs)(n.Fragment,{children:["\u8F93\u5165\u201C",(0,n.jsx)("i",{children:d==null?void 0:d.name}),"\u201D\uFF0C\u5DF2\u5B8C\u6210\u9A8C\u8BC1"]}),children:(0,n.jsx)(a.II,{solid:!0})})}),(0,n.jsx)(a.zx,{onClick:T,className:"asany-confirm-modal-button",disabled:o,variant:"light-danger",children:"\u5220\u9664\u6B64\u6A21\u5757"})]})]})}function Q(y){var p=a.l0.useForm(),m=y.location.state.module,d=(0,s.useState)(!1),F=(0,D.Z)(d,2),Z=F[0],o=F[1],P=(0,x.ot)(),g=(0,D.Z)(P,1),$=g[0],f=(0,s.useRef)(new AbortController),j="cn.asany",T=(0,x.AQ)(),I=(0,D.Z)(T,2),O=I[0],C=I[1].loading,K=(0,s.useCallback)((0,i.Z)((0,r.Z)().mark(function h(){var _;return(0,r.Z)().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.next=2,p.validateFields();case 2:return _=M.sent,M.next=5,O({variables:{id:m.id,input:(0,e.Z)((0,e.Z)({},_),{},{code:j+"."+_.code})}});case 5:a.FN.success("\u6A21\u5757 \u201C".concat(_.name,"\u201D \u66F4\u65B0\u6210\u529F"),2e3,{placement:"bottom-end",progressBar:!0});case 6:case"end":return M.stop()}},h)})),[p,m.id,O]),W=(0,s.useCallback)(function(){o(!1)},[]),k=(0,s.useCallback)(function(){o(!0)},[]);return(0,s.useEffect)(function(){var h,_;p.setFieldsValue((0,e.Z)((0,e.Z)({},m),{},{code:(h=m.code)===null||h===void 0?void 0:h.replaceAll(j+".",""),picture:(_=m.picture)===null||_===void 0?void 0:_.id}))},[p,m]),(0,n.jsxs)(w.JH,{children:[(0,n.jsxs)(a.Zb,{className:"mb-5 mb-xl-10",children:[(0,n.jsx)(a.Zb.Header,{children:(0,n.jsx)(a.Zb.Title,{children:"\u6A21\u5757\u4FE1\u606F"})}),(0,n.jsxs)(a.Zb.Body,{children:[(0,n.jsxs)(a.l0,{form:p,className:"mw-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row",children:[(0,n.jsx)("div",{className:"mw-500px col-12 col-md-8",children:(0,n.jsxs)("div",{className:"mw-400px",children:[(0,n.jsx)(a.l0.Item,{required:!1,className:"mb-5",name:"name",label:"\u540D\u79F0",rules:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(a.II,{solid:!0})}),(0,n.jsx)(a.l0.Item,{required:!1,className:"my-5",name:"code",label:"\u7F16\u7801",hasFeedback:!0,help:"\u8BF7\u53C2\u8003\u7F16\u7A0B\u4E2D\u547D\u540D\u7A7A\u95F4\u7684\u5199\u6CD5",rules:[{required:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"},{validator:function(_,A){return(0,i.Z)((0,r.Z)().mark(function M(){var R,B,v;return(0,r.Z)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(A){c.next=2;break}return c.abrupt("return");case 2:if(R=j+"."+A,f.current&&f.current.abort(),R!=m.code){c.next=6;break}return c.abrupt("return");case 6:return f.current=new AbortController,c.next=9,$({variables:{filter:{code:R},limit:1},fetchPolicy:"network-only",context:{fetchOptions:{signal:f.current.signal}}});case 9:if(B=c.sent,v=B.data,console.log("validator",_,A,v==null?void 0:v.modules),!(v!=null&&v.modules.length)){c.next=14;break}throw new Error(_.message);case 14:case"end":return c.stop()}},M)}))()},message:"\u7F16\u7801\u4E0D\u80FD\u91CD\u590D"}],children:(0,n.jsx)(a.II,{solid:!0,addonBefore:j+".",placeholder:"\u4F8B\u5982: module.text"})}),(0,n.jsx)(a.l0.Item,{className:"my-5",name:"description",label:"\u63CF\u8FF0",requiredMark:"optional",children:(0,n.jsx)(a.II.TextArea,{solid:!0,autoSize:{maxRows:4,minRows:2}})})]})}),(0,n.jsx)("div",{className:"col-12 col-md-4",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)(a.l0.Item,{className:"mb-5",name:"picture",label:"\u6A21\u5757\u56FE\u7247",help:"\u5141\u8BB8\u7684\u6587\u4EF6\u7C7B\u578B:png, jpg, jpeg\u3002",children:(0,n.jsx)(a.gq.Image,{width:148,height:148,space:"7VE4SSrk",crop:{height:300,zoomable:!1,aspectRatio:1},accept:".png, .jpg, .jpeg",background:(0,n.jsx)(a.mN,{autoColor:!1,labelClassName:"bg-dark text-inverse-info fs-3tx",alt:m.name})})})})})]}),(0,n.jsx)(a.zx,{loading:C,onClick:K,children:"\u66F4\u65B0\u6A21\u5757\u4FE1\u606F"})]})]}),(0,n.jsxs)(a.Zb,{className:"mb-5 mb-xl-10",children:[(0,n.jsx)(a.Zb.Header,{children:(0,n.jsx)(a.Zb.Title,{className:"text-danger",children:"\u5220\u9664\u6A21\u5757"})}),(0,n.jsxs)(a.Zb.Body,{children:[(0,n.jsxs)("div",{className:"fs-7 gap-2 d-flex flex-column mb-3",children:[(0,n.jsx)("p",{className:"mb-0",children:"\u5220\u9664\u64CD\u4F5C\u5C06\u4F1A\u6E05\u9664\u6389\u6A21\u5757\u4E2D\u7684\u6240\u6709\u5185\u5BB9\uFF0C\u5305\u62EC\uFF1A\u6A21\u578B/\u6570\u636E\u7B49"}),(0,n.jsx)("p",{className:"mb-0",children:"\u5E10\u6237\u5220\u9664\u540E\uFF0C\u5C06\u65E0\u6CD5\u6062\u590D\u3002\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002"})]}),(0,n.jsx)(a.zx,{variant:"danger",onClick:k,children:"\u5220\u9664\u6A21\u5757"}),(0,n.jsx)(U,{data:m,visible:Z,onCancel:W})]})]})]})}b.default=Q}}]);
