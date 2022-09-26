(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[1602],{23798:function(R,I,a){"use strict";a.d(I,{k$:function(){return P},WF:function(){return h},au:function(){return x},ot:function(){return A},aA:function(){return f},AQ:function(){return _},G$:function(){return v},wp:function(){return d},ZO:function(){return m},c9:function(){return k},_c:function(){return X},Pw:function(){return J},KX:function(){return V},w4:function(){return q},Nq:function(){return ne}});var e=a(11849),r=a(20310),i=a(49704),b=a(64718),g=a(38460),c=a(21919),O,E,$,l,n,Q,S,w,B,T,M,D,F,y,o={},p=(0,i.Ps)(O||(O=(0,r.Z)([`
    query module($id: ID!) {
  module(id: $id) {
    id
    code
    name
    picture
    description
  }
}
    `])));function P(t){var u=(0,e.Z)((0,e.Z)({},o),t);return b.a(p,u)}function h(t){var u=(0,e.Z)((0,e.Z)({},o),t);return g.t(p,u)}var Z=(0,i.Ps)(E||(E=(0,r.Z)([`
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
    `])));function x(t){var u=(0,e.Z)((0,e.Z)({},o),t);return b.a(Z,u)}function A(t){var u=(0,e.Z)((0,e.Z)({},o),t);return g.t(Z,u)}var C=(0,i.Ps)($||($=(0,r.Z)([`
    mutation createModule($input: ModuleCreateInput!) {
  createModule(input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function f(t){var u=(0,e.Z)((0,e.Z)({},o),t);return c.D(C,u)}var s=(0,i.Ps)(l||(l=(0,r.Z)([`
    mutation updateModule($id: ID!, $input: ModuleUpdateInput!) {
  updateModule(id: $id, input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function _(t){var u=(0,e.Z)((0,e.Z)({},o),t);return c.D(s,u)}var z=(0,i.Ps)(n||(n=(0,r.Z)([`
    mutation deleteModule($id: ID!) {
  deleteModule(id: $id)
}
    `])));function v(t){var u=(0,e.Z)((0,e.Z)({},o),t);return c.D(z,u)}var j=(0,i.Ps)(Q||(Q=(0,r.Z)([`
    mutation deleteManyModules($ids: [ID!]!) {
  deleteManyModules(ids: $ids)
}
    `])));function L(t){var u=_objectSpread(_objectSpread({},o),t);return Apollo.useMutation(j,u)}var N=(0,i.Ps)(S||(S=(0,r.Z)([`
    query schema($module: ID!) {
  models(module: $module, filter: {type: ENTITY}) {
    id
    code
    name
    description
  }
}
    `])));function d(t){var u=(0,e.Z)((0,e.Z)({},o),t);return b.a(N,u)}function W(t){var u=_objectSpread(_objectSpread({},o),t);return Apollo.useLazyQuery(N,u)}var m=(0,i.Ps)(w||(w=(0,r.Z)([`
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
    `])));function k(t){var u=(0,e.Z)((0,e.Z)({},o),t);return b.a(m,u)}function te(t){var u=_objectSpread(_objectSpread({},o),t);return Apollo.useLazyQuery(m,u)}var U=(0,i.Ps)(B||(B=(0,r.Z)([`
    query modelFiledTypes {
  filedTypes: modelFiledTypes {
    id
    name
    description
    family
  }
}
    `])));function X(t){var u=(0,e.Z)((0,e.Z)({},o),t);return b.a(U,u)}function ue(t){var u=_objectSpread(_objectSpread({},o),t);return Apollo.useLazyQuery(U,u)}var K=(0,i.Ps)(T||(T=(0,r.Z)([`
    query modelFields($model: ID!, $filter: ModelFieldFilter, $limit: Int) {
  listFields: modelFields(model: $model, filter: $filter, limit: $limit) {
    id
    name
    description
  }
}
    `])));function oe(t){var u=_objectSpread(_objectSpread({},o),t);return Apollo.useQuery(K,u)}function ae(t){var u=_objectSpread(_objectSpread({},o),t);return Apollo.useLazyQuery(K,u)}var G=(0,i.Ps)(M||(M=(0,r.Z)([`
    mutation createModel($input: ModelCreateInput!) {
  createModel(input: $input) {
    id
    name
  }
}
    `])));function J(t){var u=(0,e.Z)((0,e.Z)({},o),t);return c.D(G,u)}var H=(0,i.Ps)(D||(D=(0,r.Z)([`
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
    `])));function V(t){var u=(0,e.Z)((0,e.Z)({},o),t);return c.D(H,u)}var Y=(0,i.Ps)(F||(F=(0,r.Z)([`
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
    `])));function q(t){var u=(0,e.Z)((0,e.Z)({},o),t);return c.D(Y,u)}var ee=(0,i.Ps)(y||(y=(0,r.Z)([`
    mutation removeModelField($modelId: ID!, $fieldId: ID!) {
  removeModelField(modelId: $modelId, fieldId: $fieldId)
}
    `])));function ne(t){var u=(0,e.Z)((0,e.Z)({},o),t);return c.D(ee,u)}},64043:function(R,I,a){"use strict";a.d(I,{ZO:function(){return e.ZO},KX:function(){return e.KX},Pw:function(){return e.Pw},aA:function(){return e.aA},G$:function(){return e.G$},_c:function(){return e._c},c9:function(){return e.c9},WF:function(){return e.WF},ot:function(){return e.ot},au:function(){return e.au},Nq:function(){return e.Nq},wp:function(){return e.wp},w4:function(){return e.w4},AQ:function(){return e.AQ}});var e=a(23798)},51602:function(R,I,a){"use strict";a.r(I),a.d(I,{default:function(){return T}});var e=a(2824),r=a(67294),i=a(7020),b=a(73727),g=a(28865),c=a(39428),O=a(11849),E=a(3182),$=a(64043),l=a(17818),n=a(85893);function Q(M){var D=M.visible,F=M.onClose,y=M.onSuccess,o=l.l0.useForm(),p=(0,$.ot)(),P=(0,e.Z)(p,1),h=P[0],Z=(0,$.aA)(),x=(0,e.Z)(Z,2),A=x[0],C=x[1].loading,f=(0,r.useRef)(new AbortController),s="cn.asany",_=(0,r.useCallback)((0,E.Z)((0,c.Z)().mark(function z(){var v,j,L;return(0,c.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,o.validateFields();case 2:return v=d.sent,d.next=5,A({variables:{input:(0,O.Z)((0,O.Z)({},v),{},{code:s+"."+v.code})}});case 5:j=d.sent,L=j.data,l.FN.success("\u6A21\u5757 \u201C".concat(v.name,"\u201D \u65B0\u589E\u6210\u529F"),2e3,{placement:"bottom-end",progressBar:!0}),y(L.createModule);case 9:case"end":return d.stop()}},z)})),[A,o,y]);return(0,n.jsxs)(l.u_,{confirmLoading:C,maskClosable:!C,width:592,centered:!0,visible:D,closable:!1,onCancel:F,onOk:_,children:[(0,n.jsx)(l.u_.Header,{children:(0,n.jsx)("h4",{children:"\u65B0\u6A21\u5757"})}),(0,n.jsx)(l.u_.Body,{children:(0,n.jsxs)(l.l0,{form:o,children:[(0,n.jsx)(l.l0.Item,{required:!1,className:"mb-5",name:"name",label:"\u540D\u79F0",rules:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,n.jsx)(l.II,{solid:!0})}),(0,n.jsx)(l.l0.Item,{required:!1,className:"mb-5",name:"code",label:"\u7F16\u7801",hasFeedback:!0,help:"\u8BF7\u53C2\u8003\u7F16\u7A0B\u4E2D\u547D\u540D\u7A7A\u95F4\u7684\u5199\u6CD5",rules:[{required:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"},{validator:function(v,j){return(0,E.Z)((0,c.Z)().mark(function L(){var N,d;return(0,c.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(j){m.next=2;break}return m.abrupt("return");case 2:return f.current&&f.current.abort(),f.current=new AbortController,m.next=6,h({variables:{filter:{code:s+"."+j},limit:1},fetchPolicy:"network-only",context:{fetchOptions:{signal:f.current.signal}}});case 6:if(N=m.sent,d=N.data,console.log("validator",v,j,d==null?void 0:d.modules),!(d!=null&&d.modules.length)){m.next=11;break}throw new Error(v.message);case 11:case"end":return m.stop()}},L)}))()},message:"\u7F16\u7801\u4E0D\u80FD\u91CD\u590D"}],children:(0,n.jsx)(l.II,{solid:!0,addonBefore:s+".",placeholder:"\u4F8B\u5982: module.text"})}),(0,n.jsx)(l.l0.Item,{className:"mt-5",name:"description",label:"\u63CF\u8FF0",requiredMark:"optional",children:(0,n.jsx)(l.II.TextArea,{solid:!0,autoSize:{maxRows:4,minRows:2}})})]})})]})}var S=Q,w=a(18071);function B(){var M=(0,r.useState)(!1),D=(0,e.Z)(M,2),F=D[0],y=D[1],o=(0,$.au)({fetchPolicy:"cache-and-network"}),p=o.data,P=o.loading,h=o.previousData,Z=o.refetch,x=(0,r.useCallback)(function(){y(!1)},[]),A=(0,r.useCallback)(function(){y(!0)},[]),C=(0,r.useCallback)(function(s){Z(),i.m8.push("/modules/".concat(s.id))},[Z]),f=(0,r.useMemo)(function(){return(p==null?void 0:p.modules)||(h==null?void 0:h.modules)||[]},[p==null?void 0:p.modules,h]);return(0,n.jsxs)(w.JH,{loading:P,className:"module-list",children:[(0,n.jsxs)("div",{className:"my-modules",children:[(0,n.jsxs)("h1",{className:"anchor fw-bold mb-5",children:["\u6211\u7684\u6A21\u5757(",f.length,")"]}),(0,n.jsx)(l.X2,{className:"py-2",cols:{md:2,xl:5},gutter:{default:5,xl:9},children:f.map(function(s){var _;return(0,n.jsx)(l.JX,{md:4,children:(0,n.jsxs)(l.Zb,{as:b.Link,to:"/modules/".concat(s.id),className:"module-card card-p-0",children:[(0,n.jsx)(l.Zb.Body,{children:(0,n.jsx)(l.mN,{autoColor:!1,labelClassName:"bg-dark text-inverse-info fs-5tx",src:(_=s.picture)===null||_===void 0?void 0:_.url,alt:s.name})}),(0,n.jsx)(l.Zb.Footer,{className:"p-4",children:(0,n.jsxs)("div",{className:"d-flex flex-column",children:[(0,n.jsx)("h3",{children:s.name}),(0,n.jsx)("span",{className:"tw-text-ellipsis overflow-hidden",children:s.description})]})})]})},s.id)})})]}),(0,n.jsxs)("div",{className:"create-new-module",children:[(0,n.jsxs)("div",{className:"d-flex flex-column",children:[(0,n.jsx)("h1",{className:"anchor fw-bold mb-5",children:"\u521B\u5EFA\u4E00\u4E2A\u65B0\u6A21\u5757"}),(0,n.jsx)("span",{className:"tw-text-ellipsis overflow-hidden",children:"\u521B\u5EFA\u4E00\u4E2A\u7A7A\u767D\u6A21\u5757\u6216\u4ECE\u6A21\u677F\u5F00\u59CB\u3002"})]}),(0,n.jsx)(l.X2,{className:"module-templates",cols:{md:2,xl:4},gutter:{default:5,xl:9},children:(0,n.jsx)(l.JX,{md:4,children:(0,n.jsx)(l.Zb,{as:"a",onClick:A,className:"module-card create-module-card card-p-0",children:(0,n.jsx)(l.Zb.Body,{children:(0,n.jsxs)("div",{className:"create-module-card-inner",children:[(0,n.jsx)("div",{className:"create-module-card__blank_icon",children:(0,n.jsx)(g.JO,{name:"Bootstrap/plus"})}),(0,n.jsx)("span",{className:"create-module-card__blank_name text-gray-700",children:"\u7A7A\u767D"})]})})})})}),(0,n.jsx)(S,{visible:F,onSuccess:C,onClose:x})]})]})}var T=B}}]);
