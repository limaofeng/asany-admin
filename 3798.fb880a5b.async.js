(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[3798],{23798:function(te,T,i){"use strict";i.d(T,{k$:function(){return A},WF:function(){return C},au:function(){return h},ot:function(){return U},aA:function(){return R},AQ:function(){return W},G$:function(){return g},Yw:function(){return s},wp:function(){return w},oM:function(){return k},ZO:function(){return m},c9:function(){return q},_c:function(){return Y},Pw:function(){return X},KX:function(){return H},w4:function(){return V},Nq:function(){return ne}});var t=i(11849),d=i(20310),u=i(49704),r=i(64718),a=i(38460),l=i(21919),p,c,_,M,y,f,D,$,v,Z,I,b,j,F,O,o={},P=(0,u.Ps)(p||(p=(0,d.Z)([`
    query module($id: ID!) {
  module(id: $id) {
    id
    code
    name
    picture
    description
  }
}
    `])));function A(e){var n=(0,t.Z)((0,t.Z)({},o),e);return r.a(P,n)}function C(e){var n=(0,t.Z)((0,t.Z)({},o),e);return a.t(P,n)}var Q=(0,u.Ps)(c||(c=(0,d.Z)([`
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
    `])));function h(e){var n=(0,t.Z)((0,t.Z)({},o),e);return r.a(Q,n)}function U(e){var n=(0,t.Z)((0,t.Z)({},o),e);return a.t(Q,n)}var z=(0,u.Ps)(_||(_=(0,d.Z)([`
    mutation createModule($input: ModuleCreateInput!) {
  createModule(input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function R(e){var n=(0,t.Z)((0,t.Z)({},o),e);return l.D(z,n)}var K=(0,u.Ps)(M||(M=(0,d.Z)([`
    mutation updateModule($id: ID!, $input: ModuleUpdateInput!) {
  updateModule(id: $id, input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function W(e){var n=(0,t.Z)((0,t.Z)({},o),e);return l.D(K,n)}var B=(0,u.Ps)(y||(y=(0,d.Z)([`
    mutation deleteModule($id: ID!) {
  deleteModule(id: $id)
}
    `])));function g(e){var n=(0,t.Z)((0,t.Z)({},o),e);return l.D(B,n)}var N=(0,u.Ps)(f||(f=(0,d.Z)([`
    mutation deleteManyModules($ids: [ID!]!) {
  deleteManyModules(ids: $ids)
}
    `])));function oe(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useMutation(N,n)}var s=(0,u.Ps)(D||(D=(0,d.Z)([`
    query schema($module: ID!) {
  models(module: $module, filter: {type: ENTITY}) {
    id
    code
    name
    description
  }
}
    `])));function w(e){var n=(0,t.Z)((0,t.Z)({},o),e);return r.a(s,n)}function de(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(s,n)}var L=(0,u.Ps)($||($=(0,d.Z)([`
    query models($moduleId: ID!, $filter: ModelFilter, $limit: Int) {
  models(module: $moduleId, filter: $filter, limit: $limit) {
    id
  }
}
    `])));function ue(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useQuery(L,n)}function k(e){var n=(0,t.Z)((0,t.Z)({},o),e);return a.t(L,n)}var m=(0,u.Ps)(v||(v=(0,d.Z)([`
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
    `])));function q(e){var n=(0,t.Z)((0,t.Z)({},o),e);return r.a(m,n)}function ie(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(m,n)}var E=(0,u.Ps)(Z||(Z=(0,d.Z)([`
    query modelFiledTypes {
  filedTypes: modelFiledTypes {
    id
    name
    description
    family
  }
}
    `])));function Y(e){var n=(0,t.Z)((0,t.Z)({},o),e);return r.a(E,n)}function le(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(E,n)}var S=(0,u.Ps)(I||(I=(0,d.Z)([`
    query modelFields($model: ID!, $filter: ModelFieldFilter, $limit: Int) {
  listFields: modelFields(model: $model, filter: $filter, limit: $limit) {
    id
    name
    description
  }
}
    `])));function re(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useQuery(S,n)}function ae(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(S,n)}var G=(0,u.Ps)(b||(b=(0,d.Z)([`
    mutation createModel($input: ModelCreateInput!) {
  createModel(input: $input) {
    id
    name
  }
}
    `])));function X(e){var n=(0,t.Z)((0,t.Z)({},o),e);return l.D(G,n)}var x=(0,u.Ps)(j||(j=(0,d.Z)([`
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
    `])));function H(e){var n=(0,t.Z)((0,t.Z)({},o),e);return l.D(x,n)}var J=(0,u.Ps)(F||(F=(0,d.Z)([`
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
    `])));function V(e){var n=(0,t.Z)((0,t.Z)({},o),e);return l.D(J,n)}var ee=(0,u.Ps)(O||(O=(0,d.Z)([`
    mutation removeModelField($modelId: ID!, $fieldId: ID!) {
  removeModelField(modelId: $modelId, fieldId: $fieldId)
}
    `])));function ne(e){var n=(0,t.Z)((0,t.Z)({},o),e);return l.D(ee,n)}}}]);
