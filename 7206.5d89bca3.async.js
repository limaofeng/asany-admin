(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[7206],{17206:function(A,c,u){"use strict";u.r(c);var e=u(2824),d=u(67294),i=u(51615),_=u(64043),$=u(52620),r=u(85893);function E(s){var p,P=s.isLast,I=s.route,j=s.url,m=s.params,M=(0,i.TH)(),b=(0,_.WF)({variables:{id:m.id}}),v=(0,e.Z)(b,2),y=v[0],D=v[1],l=D.data,o=D.loading,a=(0,d.useMemo)(function(){var Z,f;if(((Z=M.state)===null||Z===void 0||(f=Z.module)===null||f===void 0?void 0:f.id)==m.id){var O;return(O=M.state)===null||O===void 0?void 0:O.module}return l==null?void 0:l.module},[l==null?void 0:l.module,(p=M.state)===null||p===void 0?void 0:p.module,m.id]),F=(0,d.useMemo)(function(){return a?!1:o},[a,o]);return(0,d.useEffect)(function(){a||y({variables:{id:m.id}})},[y,a,m.id]),(0,r.jsx)($.Z,{className:s.className,href:P?void 0:j,children:F?(0,r.jsx)(r.Fragment,{children:"\u52A0\u8F7D\u4E2D..."}):(0,r.jsx)(r.Fragment,{children:a==null?void 0:a.name})},I.id)}c.default=E},23798:function(A,c,u){"use strict";u.d(c,{k$:function(){return F},WF:function(){return Z},au:function(){return O},ot:function(){return h},aA:function(){return W},AQ:function(){return K},G$:function(){return R},wp:function(){return g},ZO:function(){return L},c9:function(){return N},_c:function(){return x},Pw:function(){return X},KX:function(){return Y},Nq:function(){return J}});var e=u(11849),d=u(20310),i=u(49704),_=u(64718),$=u(38460),r=u(21919),E,s,p,P,I,j,m,M,b,v,y,D,l,o={},a=(0,i.Ps)(E||(E=(0,d.Z)([`
    query module($id: ID!) {
  module(id: $id) {
    id
    code
    name
    picture
    description
  }
}
    `])));function F(n){var t=(0,e.Z)((0,e.Z)({},o),n);return _.a(a,t)}function Z(n){var t=(0,e.Z)((0,e.Z)({},o),n);return $.t(a,t)}var f=(0,i.Ps)(s||(s=(0,d.Z)([`
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
    `])));function O(n){var t=(0,e.Z)((0,e.Z)({},o),n);return _.a(f,t)}function h(n){var t=(0,e.Z)((0,e.Z)({},o),n);return $.t(f,t)}var U=(0,i.Ps)(p||(p=(0,d.Z)([`
    mutation createModule($input: ModuleCreateInput!) {
  createModule(input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function W(n){var t=(0,e.Z)((0,e.Z)({},o),n);return r.D(U,t)}var B=(0,i.Ps)(P||(P=(0,d.Z)([`
    mutation updateModule($id: ID!, $input: ModuleUpdateInput!) {
  updateModule(id: $id, input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function K(n){var t=(0,e.Z)((0,e.Z)({},o),n);return r.D(B,t)}var S=(0,i.Ps)(I||(I=(0,d.Z)([`
    mutation deleteModule($id: ID!) {
  deleteModule(id: $id)
}
    `])));function R(n){var t=(0,e.Z)((0,e.Z)({},o),n);return r.D(S,t)}var z=(0,i.Ps)(j||(j=(0,d.Z)([`
    mutation deleteManyModules($ids: [ID!]!) {
  deleteManyModules(ids: $ids)
}
    `])));function V(n){var t=_objectSpread(_objectSpread({},o),n);return Apollo.useMutation(z,t)}var T=(0,i.Ps)(m||(m=(0,d.Z)([`
    query schema($module: ID!) {
  models(module: $module, filter: {type: ENTITY}) {
    id
    code
    name
    description
  }
}
    `])));function g(n){var t=(0,e.Z)((0,e.Z)({},o),n);return _.a(T,t)}function k(n){var t=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(T,t)}var L=(0,i.Ps)(M||(M=(0,d.Z)([`
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
    `])));function N(n){var t=(0,e.Z)((0,e.Z)({},o),n);return _.a(L,t)}function q(n){var t=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(L,t)}var Q=(0,i.Ps)(b||(b=(0,d.Z)([`
    query modelFiledTypes {
  filedTypes: modelFiledTypes {
    id
    name
    description
    family
  }
}
    `])));function x(n){var t=(0,e.Z)((0,e.Z)({},o),n);return _.a(Q,t)}function ee(n){var t=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(Q,t)}var C=(0,i.Ps)(v||(v=(0,d.Z)([`
    query modelFields($model: ID!, $filter: ModelFieldFilter, $limit: Int) {
  listFields: modelFields(model: $model, filter: $filter, limit: $limit) {
    id
    name
    description
  }
}
    `])));function ne(n){var t=_objectSpread(_objectSpread({},o),n);return Apollo.useQuery(C,t)}function te(n){var t=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(C,t)}var G=(0,i.Ps)(y||(y=(0,d.Z)([`
    mutation createModel($input: ModelCreateInput!) {
  createModel(input: $input) {
    id
    name
  }
}
    `])));function X(n){var t=(0,e.Z)((0,e.Z)({},o),n);return r.D(G,t)}var H=(0,i.Ps)(D||(D=(0,d.Z)([`
    mutation addModelField($modelId: ID!, $input: ModelFieldInput!) {
  addModelField(modelId: $modelId, input: $input) {
    id
    name
  }
}
    `])));function Y(n){var t=(0,e.Z)((0,e.Z)({},o),n);return r.D(H,t)}var w=(0,i.Ps)(l||(l=(0,d.Z)([`
    mutation removeModelField($modelId: ID!, $fieldId: ID!) {
  removeModelField(modelId: $modelId, fieldId: $fieldId)
}
    `])));function J(n){var t=(0,e.Z)((0,e.Z)({},o),n);return r.D(w,t)}},64043:function(A,c,u){"use strict";u.d(c,{ZO:function(){return e.ZO},KX:function(){return e.KX},Pw:function(){return e.Pw},aA:function(){return e.aA},G$:function(){return e.G$},_c:function(){return e._c},c9:function(){return e.c9},WF:function(){return e.WF},ot:function(){return e.ot},au:function(){return e.au},Nq:function(){return e.Nq},wp:function(){return e.wp},AQ:function(){return e.AQ}});var e=u(23798)}}]);
