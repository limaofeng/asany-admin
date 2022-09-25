(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[1602],{23798:function(U,x,o){"use strict";o.d(x,{k$:function(){return p},WF:function(){return P},au:function(){return A},ot:function(){return I},aA:function(){return O},AQ:function(){return i},G$:function(){return z},wp:function(){return S},ZO:function(){return R},c9:function(){return f},_c:function(){return k},Pw:function(){return G},KX:function(){return H},Nq:function(){return Y}});var e=o(11849),r=o(20310),s=o(49704),j=o(64718),L=o(38460),c=o(21919),E,N,F,a,n,g,Q,B,w,T,h,b,$,l={},m=(0,s.Ps)(E||(E=(0,r.Z)([`
    query module($id: ID!) {
  module(id: $id) {
    id
    code
    name
    picture
    description
  }
}
    `])));function p(t){var u=(0,e.Z)((0,e.Z)({},l),t);return j.a(m,u)}function P(t){var u=(0,e.Z)((0,e.Z)({},l),t);return L.t(m,u)}var v=(0,s.Ps)(N||(N=(0,r.Z)([`
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
    `])));function A(t){var u=(0,e.Z)((0,e.Z)({},l),t);return j.a(v,u)}function I(t){var u=(0,e.Z)((0,e.Z)({},l),t);return L.t(v,u)}var C=(0,s.Ps)(F||(F=(0,r.Z)([`
    mutation createModule($input: ModuleCreateInput!) {
  createModule(input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function O(t){var u=(0,e.Z)((0,e.Z)({},l),t);return c.D(C,u)}var M=(0,s.Ps)(a||(a=(0,r.Z)([`
    mutation updateModule($id: ID!, $input: ModuleUpdateInput!) {
  updateModule(id: $id, input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function i(t){var u=(0,e.Z)((0,e.Z)({},l),t);return c.D(M,u)}var Z=(0,s.Ps)(n||(n=(0,r.Z)([`
    mutation deleteModule($id: ID!) {
  deleteModule(id: $id)
}
    `])));function z(t){var u=(0,e.Z)((0,e.Z)({},l),t);return c.D(Z,u)}var y=(0,s.Ps)(g||(g=(0,r.Z)([`
    mutation deleteManyModules($ids: [ID!]!) {
  deleteManyModules(ids: $ids)
}
    `])));function D(t){var u=_objectSpread(_objectSpread({},l),t);return Apollo.useMutation(y,u)}var _=(0,s.Ps)(Q||(Q=(0,r.Z)([`
    query schema($module: ID!) {
  models(module: $module, filter: {type: ENTITY}) {
    id
    code
    name
    description
  }
}
    `])));function S(t){var u=(0,e.Z)((0,e.Z)({},l),t);return j.a(_,u)}function d(t){var u=_objectSpread(_objectSpread({},l),t);return Apollo.useLazyQuery(_,u)}var R=(0,s.Ps)(B||(B=(0,r.Z)([`
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
    `])));function f(t){var u=(0,e.Z)((0,e.Z)({},l),t);return j.a(R,u)}function q(t){var u=_objectSpread(_objectSpread({},l),t);return Apollo.useLazyQuery(R,u)}var K=(0,s.Ps)(w||(w=(0,r.Z)([`
    query modelFiledTypes {
  filedTypes: modelFiledTypes {
    id
    name
    description
    family
  }
}
    `])));function k(t){var u=(0,e.Z)((0,e.Z)({},l),t);return j.a(K,u)}function ee(t){var u=_objectSpread(_objectSpread({},l),t);return Apollo.useLazyQuery(K,u)}var W=(0,s.Ps)(T||(T=(0,r.Z)([`
    query modelFields($model: ID!, $filter: ModelFieldFilter, $limit: Int) {
  listFields: modelFields(model: $model, filter: $filter, limit: $limit) {
    id
    name
    description
  }
}
    `])));function ne(t){var u=_objectSpread(_objectSpread({},l),t);return Apollo.useQuery(W,u)}function te(t){var u=_objectSpread(_objectSpread({},l),t);return Apollo.useLazyQuery(W,u)}var X=(0,s.Ps)(h||(h=(0,r.Z)([`
    mutation createModel($input: ModelCreateInput!) {
  createModel(input: $input) {
    id
    name
  }
}
    `])));function G(t){var u=(0,e.Z)((0,e.Z)({},l),t);return c.D(X,u)}var J=(0,s.Ps)(b||(b=(0,r.Z)([`
    mutation addModelField($modelId: ID!, $input: ModelFieldInput!) {
  addModelField(modelId: $modelId, input: $input) {
    id
    name
  }
}
    `])));function H(t){var u=(0,e.Z)((0,e.Z)({},l),t);return c.D(J,u)}var V=(0,s.Ps)($||($=(0,r.Z)([`
    mutation removeModelField($modelId: ID!, $fieldId: ID!) {
  removeModelField(modelId: $modelId, fieldId: $fieldId)
}
    `])));function Y(t){var u=(0,e.Z)((0,e.Z)({},l),t);return c.D(V,u)}},64043:function(U,x,o){"use strict";o.d(x,{ZO:function(){return e.ZO},KX:function(){return e.KX},Pw:function(){return e.Pw},aA:function(){return e.aA},G$:function(){return e.G$},_c:function(){return e._c},c9:function(){return e.c9},WF:function(){return e.WF},ot:function(){return e.ot},au:function(){return e.au},Nq:function(){return e.Nq},wp:function(){return e.wp},AQ:function(){return e.AQ}});var e=o(23798)},51602:function(U,x,o){"use strict";o.r(x),o.d(x,{default:function(){return T}});var e=o(2824),r=o(67294),s=o(7020),j=o(73727),L=o(28865),c=o(39428),E=o(11849),N=o(3182),F=o(64043),a=o(17818),n=o(85893);function g(h){var b=h.visible,$=h.onClose,l=h.onSuccess,m=a.l0.useForm(),p=(0,F.ot)(),P=(0,e.Z)(p,1),v=P[0],A=(0,F.aA)(),I=(0,e.Z)(A,2),C=I[0],O=I[1].loading,M=(0,r.useRef)(new AbortController),i="cn.asany",Z=(0,r.useCallback)((0,N.Z)((0,c.Z)().mark(function z(){var y,D,_;return(0,c.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,m.validateFields();case 2:return y=d.sent,d.next=5,C({variables:{input:(0,E.Z)((0,E.Z)({},y),{},{code:i+"."+y.code})}});case 5:D=d.sent,_=D.data,a.FN.success("\u6A21\u5757 \u201C".concat(y.name,"\u201D \u65B0\u589E\u6210\u529F"),2e3,{placement:"bottom-end",progressBar:!0}),l(_.createModule);case 9:case"end":return d.stop()}},z)})),[C,m,l]);return(0,n.jsxs)(a.u_,{confirmLoading:O,maskClosable:!O,width:592,centered:!0,visible:b,closable:!1,onCancel:$,onOk:Z,children:[(0,n.jsx)(a.u_.Header,{children:(0,n.jsx)("h4",{children:"\u65B0\u6A21\u5757"})}),(0,n.jsx)(a.u_.Body,{children:(0,n.jsxs)(a.l0,{form:m,children:[(0,n.jsx)(a.l0.Item,{required:!1,className:"mb-5",name:"name",label:"\u540D\u79F0",rules:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(a.II,{solid:!0})}),(0,n.jsx)(a.l0.Item,{required:!1,className:"mb-5",name:"code",label:"\u7F16\u7801",hasFeedback:!0,help:"\u8BF7\u53C2\u8003\u7F16\u7A0B\u4E2D\u547D\u540D\u7A7A\u95F4\u7684\u5199\u6CD5",rules:[{required:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"},{validator:function(y,D){return(0,N.Z)((0,c.Z)().mark(function _(){var S,d;return(0,c.Z)().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(D){f.next=2;break}return f.abrupt("return");case 2:return M.current&&M.current.abort(),M.current=new AbortController,f.next=6,v({variables:{filter:{code:i+"."+D},limit:1},fetchPolicy:"network-only",context:{fetchOptions:{signal:M.current.signal}}});case 6:if(S=f.sent,d=S.data,console.log("validator",y,D,d==null?void 0:d.modules),!(d!=null&&d.modules.length)){f.next=11;break}throw new Error(y.message);case 11:case"end":return f.stop()}},_)}))()},message:"\u7F16\u7801\u4E0D\u80FD\u91CD\u590D"}],children:(0,n.jsx)(a.II,{solid:!0,addonBefore:i+".",placeholder:"\u4F8B\u5982: module.text"})}),(0,n.jsx)(a.l0.Item,{className:"mt-5",name:"description",label:"\u63CF\u8FF0",requiredMark:"optional",children:(0,n.jsx)(a.II.TextArea,{solid:!0,autoSize:{maxRows:4,minRows:2}})})]})})]})}var Q=g,B=o(18071);function w(){var h=(0,r.useState)(!1),b=(0,e.Z)(h,2),$=b[0],l=b[1],m=(0,F.au)({fetchPolicy:"cache-and-network"}),p=m.data,P=m.loading,v=m.previousData,A=m.refetch,I=(0,r.useCallback)(function(){l(!1)},[]),C=(0,r.useCallback)(function(){l(!0)},[]),O=(0,r.useCallback)(function(i){A(),s.m8.push("/modules/".concat(i.id))},[A]),M=(0,r.useMemo)(function(){return(p==null?void 0:p.modules)||(v==null?void 0:v.modules)||[]},[p==null?void 0:p.modules,v]);return(0,n.jsxs)(B.JH,{loading:P,className:"module-list",children:[(0,n.jsxs)("div",{className:"my-modules",children:[(0,n.jsxs)("h1",{className:"anchor fw-bold mb-5",children:["\u6211\u7684\u6A21\u5757(",M.length,")"]}),(0,n.jsx)(a.X2,{className:"py-2",cols:{md:2,xl:5},gutter:{default:5,xl:9},children:M.map(function(i){var Z;return(0,n.jsx)(a.JX,{md:4,children:(0,n.jsxs)(a.Zb,{as:j.Link,to:"/modules/".concat(i.id),className:"module-card card-p-0",children:[(0,n.jsx)(a.Zb.Body,{children:(0,n.jsx)(a.mN,{autoColor:!1,labelClassName:"bg-dark text-inverse-info fs-5tx",src:(Z=i.picture)===null||Z===void 0?void 0:Z.url,alt:i.name})}),(0,n.jsx)(a.Zb.Footer,{className:"p-4",children:(0,n.jsxs)("div",{className:"d-flex flex-column",children:[(0,n.jsx)("h3",{children:i.name}),(0,n.jsx)("span",{className:"tw-text-ellipsis overflow-hidden",children:i.description})]})})]})},i.id)})})]}),(0,n.jsxs)("div",{className:"create-new-module",children:[(0,n.jsxs)("div",{className:"d-flex flex-column",children:[(0,n.jsx)("h1",{className:"anchor fw-bold mb-5",children:"\u521B\u5EFA\u4E00\u4E2A\u65B0\u6A21\u5757"}),(0,n.jsx)("span",{className:"tw-text-ellipsis overflow-hidden",children:"\u521B\u5EFA\u4E00\u4E2A\u7A7A\u767D\u6A21\u5757\u6216\u4ECE\u6A21\u677F\u5F00\u59CB\u3002"})]}),(0,n.jsx)(a.X2,{className:"module-templates",cols:{md:2,xl:4},gutter:{default:5,xl:9},children:(0,n.jsx)(a.JX,{md:4,children:(0,n.jsx)(a.Zb,{as:"a",onClick:C,className:"module-card create-module-card card-p-0",children:(0,n.jsx)(a.Zb.Body,{children:(0,n.jsxs)("div",{className:"create-module-card-inner",children:[(0,n.jsx)("div",{className:"create-module-card__blank_icon",children:(0,n.jsx)(L.JO,{name:"Bootstrap/plus"})}),(0,n.jsx)("span",{className:"create-module-card__blank_name text-gray-700",children:"\u7A7A\u767D"})]})})})})}),(0,n.jsx)(Q,{visible:$,onSuccess:O,onClose:I})]})]})}var T=w}}]);
