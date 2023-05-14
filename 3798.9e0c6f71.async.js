(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[3798],{23798:function(fe,N,a){"use strict";a.d(N,{I1:function(){return R},jS:function(){return g},P6:function(){return q},k$:function(){return K},WF:function(){return B},au:function(){return V},ot:function(){return k},aA:function(){return x},AQ:function(){return X},G$:function(){return J},Yw:function(){return s},wp:function(){return ne},oM:function(){return te},ZO:function(){return p},c9:function(){return oe},_c:function(){return de},Pw:function(){return ue},ko:function(){return re},Af:function(){return se},KX:function(){return me},w4:function(){return _e},Nq:function(){return ye}});var t=a(11849),d=a(20310),i=a(49704),r=a(64718),l=a(38460),u=a(21919),m,c,_,M,y,f,D,v,$,Z,b,I,j,O,P,Q,F,L,S,E,o={},T=(0,i.Ps)(m||(m=(0,d.Z)([`
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
    `])));function R(e){var n=(0,t.Z)((0,t.Z)({},o),e);return r.a(T,n)}function De(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(T,n)}var A=(0,i.Ps)(c||(c=(0,d.Z)([`
    query modelWithEndpoints($id: ID) {
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
      index
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
    endpoints {
      id
      code
      name
      type
      arguments {
        id
        name
        type
      }
    }
    metadata {
      databaseTableName
    }
  }
}
    `])));function ve(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useQuery(A,n)}function g(e){var n=(0,t.Z)((0,t.Z)({},o),e);return l.t(A,n)}var C=(0,i.Ps)(_||(_=(0,d.Z)([`
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
    `])));function q(e){var n=(0,t.Z)((0,t.Z)({},o),e);return r.a(C,n)}function $e(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(C,n)}var h=(0,i.Ps)(M||(M=(0,d.Z)([`
    query module($id: ID!) {
  module(id: $id) {
    id
    code
    name
    picture
    description
  }
}
    `])));function K(e){var n=(0,t.Z)((0,t.Z)({},o),e);return r.a(h,n)}function B(e){var n=(0,t.Z)((0,t.Z)({},o),e);return l.t(h,n)}var z=(0,i.Ps)(y||(y=(0,d.Z)([`
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
    `])));function V(e){var n=(0,t.Z)((0,t.Z)({},o),e);return r.a(z,n)}function k(e){var n=(0,t.Z)((0,t.Z)({},o),e);return l.t(z,n)}var Y=(0,i.Ps)(f||(f=(0,d.Z)([`
    mutation createModule($input: ModuleCreateInput!) {
  createModule(input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function x(e){var n=(0,t.Z)((0,t.Z)({},o),e);return u.D(Y,n)}var G=(0,i.Ps)(D||(D=(0,d.Z)([`
    mutation updateModule($id: ID!, $input: ModuleUpdateInput!) {
  updateModule(id: $id, input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function X(e){var n=(0,t.Z)((0,t.Z)({},o),e);return u.D(G,n)}var H=(0,i.Ps)(v||(v=(0,d.Z)([`
    mutation deleteModule($id: ID!) {
  deleteModule(id: $id)
}
    `])));function J(e){var n=(0,t.Z)((0,t.Z)({},o),e);return u.D(H,n)}var ee=(0,i.Ps)($||($=(0,d.Z)([`
    mutation deleteManyModules($ids: [ID!]!) {
  deleteManyModules(ids: $ids)
}
    `])));function Ze(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useMutation(ee,n)}var s=(0,i.Ps)(Z||(Z=(0,d.Z)([`
    query schema($module: ID!) {
  models(module: $module, filter: {type: ENTITY}) {
    id
    code
    name
    description
  }
}
    `])));function ne(e){var n=(0,t.Z)((0,t.Z)({},o),e);return r.a(s,n)}function be(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(s,n)}var U=(0,i.Ps)(b||(b=(0,d.Z)([`
    query models($moduleId: ID!, $filter: ModelFilter, $limit: Int) {
  models(module: $moduleId, filter: $filter, limit: $limit) {
    id
  }
}
    `])));function Ie(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useQuery(U,n)}function te(e){var n=(0,t.Z)((0,t.Z)({},o),e);return l.t(U,n)}var p=(0,i.Ps)(I||(I=(0,d.Z)([`
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
      index
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
    `])));function oe(e){var n=(0,t.Z)((0,t.Z)({},o),e);return r.a(p,n)}function je(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(p,n)}var W=(0,i.Ps)(j||(j=(0,d.Z)([`
    query modelFiledTypes {
  filedTypes: modelFiledTypes {
    id
    name
    description
    family
  }
}
    `])));function de(e){var n=(0,t.Z)((0,t.Z)({},o),e);return r.a(W,n)}function Oe(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(W,n)}var w=(0,i.Ps)(O||(O=(0,d.Z)([`
    query modelFields($model: ID!, $filter: ModelFieldFilter, $limit: Int) {
  listFields: modelFields(model: $model, filter: $filter, limit: $limit) {
    id
    name
    description
  }
}
    `])));function Pe(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useQuery(w,n)}function Qe(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(w,n)}var ie=(0,i.Ps)(P||(P=(0,d.Z)([`
    mutation createModel($input: ModelCreateInput!) {
  createModel(input: $input) {
    id
    name
  }
}
    `])));function ue(e){var n=(0,t.Z)((0,t.Z)({},o),e);return u.D(ie,n)}var ae=(0,i.Ps)(Q||(Q=(0,d.Z)([`
    mutation updateModel($id: ID!, $input: ModelUpdateInput!) {
  updateModel(id: $id, input: $input) {
    id
    name
  }
}
    `])));function re(e){var n=(0,t.Z)((0,t.Z)({},o),e);return u.D(ae,n)}var le=(0,i.Ps)(F||(F=(0,d.Z)([`
    mutation deleteModel($id: ID!) {
  deleteModel(id: $id)
}
    `])));function se(e){var n=(0,t.Z)((0,t.Z)({},o),e);return u.D(le,n)}var pe=(0,i.Ps)(L||(L=(0,d.Z)([`
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
    `])));function me(e){var n=(0,t.Z)((0,t.Z)({},o),e);return u.D(pe,n)}var ce=(0,i.Ps)(S||(S=(0,d.Z)([`
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
    `])));function _e(e){var n=(0,t.Z)((0,t.Z)({},o),e);return u.D(ce,n)}var Me=(0,i.Ps)(E||(E=(0,d.Z)([`
    mutation removeModelField($modelId: ID!, $fieldId: ID!) {
  removeModelField(modelId: $modelId, fieldId: $fieldId)
}
    `])));function ye(e){var n=(0,t.Z)((0,t.Z)({},o),e);return u.D(Me,n)}}}]);
