(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[3798],{23798:function(_e,w,r){"use strict";r.d(w,{I1:function(){return R},P6:function(){return K},k$:function(){return N},WF:function(){return W},au:function(){return B},ot:function(){return V},aA:function(){return k},AQ:function(){return Y},G$:function(){return X},Yw:function(){return s},wp:function(){return H},oM:function(){return J},ZO:function(){return m},c9:function(){return ee},_c:function(){return ne},Pw:function(){return oe},ko:function(){return de},Af:function(){return re},KX:function(){return le},w4:function(){return me},Nq:function(){return ce}});var t=r(11849),u=r(20310),d=r(49704),a=r(64718),l=r(38460),i=r(21919),p,c,_,M,y,f,D,v,$,Z,I,b,j,O,P,F,Q,L,S,o={},T=(0,d.Ps)(p||(p=(0,u.Z)([`
    query content($module: ID!) {
  models(module: $module, filter: {type: ENTITY}) {
    id
    code
    name
    description
    defaultView {
      id
      name
    }
  }
}
    `])));function R(e){var n=(0,t.Z)((0,t.Z)({},o),e);return a.a(T,n)}function Me(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(T,n)}var A=(0,d.Ps)(c||(c=(0,u.Z)([`
    query modelView($id: ID!) {
  view: modelView(id: $id) {
    id
    name
    component {
      id
      template
      blocks {
        key
        props
      }
    }
  }
}
    `])));function K(e){var n=(0,t.Z)((0,t.Z)({},o),e);return a.a(A,n)}function ye(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(A,n)}var C=(0,d.Ps)(_||(_=(0,u.Z)([`
    query module($id: ID!) {
  module(id: $id) {
    id
    code
    name
    picture
    description
  }
}
    `])));function N(e){var n=(0,t.Z)((0,t.Z)({},o),e);return a.a(C,n)}function W(e){var n=(0,t.Z)((0,t.Z)({},o),e);return l.t(C,n)}var E=(0,d.Ps)(M||(M=(0,u.Z)([`
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
    `])));function B(e){var n=(0,t.Z)((0,t.Z)({},o),e);return a.a(E,n)}function V(e){var n=(0,t.Z)((0,t.Z)({},o),e);return l.t(E,n)}var g=(0,d.Ps)(y||(y=(0,u.Z)([`
    mutation createModule($input: ModuleCreateInput!) {
  createModule(input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function k(e){var n=(0,t.Z)((0,t.Z)({},o),e);return i.D(g,n)}var q=(0,d.Ps)(f||(f=(0,u.Z)([`
    mutation updateModule($id: ID!, $input: ModuleUpdateInput!) {
  updateModule(id: $id, input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function Y(e){var n=(0,t.Z)((0,t.Z)({},o),e);return i.D(q,n)}var G=(0,d.Ps)(D||(D=(0,u.Z)([`
    mutation deleteModule($id: ID!) {
  deleteModule(id: $id)
}
    `])));function X(e){var n=(0,t.Z)((0,t.Z)({},o),e);return i.D(G,n)}var x=(0,d.Ps)(v||(v=(0,u.Z)([`
    mutation deleteManyModules($ids: [ID!]!) {
  deleteManyModules(ids: $ids)
}
    `])));function fe(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useMutation(x,n)}var s=(0,d.Ps)($||($=(0,u.Z)([`
    query schema($module: ID!) {
  models(module: $module, filter: {type: ENTITY}) {
    id
    code
    name
    description
  }
}
    `])));function H(e){var n=(0,t.Z)((0,t.Z)({},o),e);return a.a(s,n)}function De(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(s,n)}var z=(0,d.Ps)(Z||(Z=(0,u.Z)([`
    query models($moduleId: ID!, $filter: ModelFilter, $limit: Int) {
  models(module: $moduleId, filter: $filter, limit: $limit) {
    id
  }
}
    `])));function ve(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useQuery(z,n)}function J(e){var n=(0,t.Z)((0,t.Z)({},o),e);return l.t(z,n)}var m=(0,d.Ps)(I||(I=(0,u.Z)([`
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
      required
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
    metadata {
      databaseTableName
    }
  }
}
    `])));function ee(e){var n=(0,t.Z)((0,t.Z)({},o),e);return a.a(m,n)}function $e(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(m,n)}var U=(0,d.Ps)(b||(b=(0,u.Z)([`
    query modelFiledTypes {
  filedTypes: modelFiledTypes {
    id
    name
    description
    family
  }
}
    `])));function ne(e){var n=(0,t.Z)((0,t.Z)({},o),e);return a.a(U,n)}function Ze(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(U,n)}var h=(0,d.Ps)(j||(j=(0,u.Z)([`
    query modelFields($model: ID!, $filter: ModelFieldFilter, $limit: Int) {
  listFields: modelFields(model: $model, filter: $filter, limit: $limit) {
    id
    name
    description
  }
}
    `])));function Ie(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useQuery(h,n)}function be(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(h,n)}var te=(0,d.Ps)(O||(O=(0,u.Z)([`
    mutation createModel($input: ModelCreateInput!) {
  createModel(input: $input) {
    id
    name
  }
}
    `])));function oe(e){var n=(0,t.Z)((0,t.Z)({},o),e);return i.D(te,n)}var ue=(0,d.Ps)(P||(P=(0,u.Z)([`
    mutation updateModel($id: ID!, $input: ModelUpdateInput!) {
  updateModel(id: $id, input: $input) {
    id
    name
  }
}
    `])));function de(e){var n=(0,t.Z)((0,t.Z)({},o),e);return i.D(ue,n)}var ie=(0,d.Ps)(F||(F=(0,u.Z)([`
    mutation deleteModel($id: ID!) {
  deleteModel(id: $id)
}
    `])));function re(e){var n=(0,t.Z)((0,t.Z)({},o),e);return i.D(ie,n)}var ae=(0,d.Ps)(Q||(Q=(0,u.Z)([`
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
    `])));function le(e){var n=(0,t.Z)((0,t.Z)({},o),e);return i.D(ae,n)}var se=(0,d.Ps)(L||(L=(0,u.Z)([`
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
    `])));function me(e){var n=(0,t.Z)((0,t.Z)({},o),e);return i.D(se,n)}var pe=(0,d.Ps)(S||(S=(0,u.Z)([`
    mutation removeModelField($modelId: ID!, $fieldId: ID!) {
  removeModelField(modelId: $modelId, fieldId: $fieldId)
}
    `])));function ce(e){var n=(0,t.Z)((0,t.Z)({},o),e);return i.D(pe,n)}}}]);
