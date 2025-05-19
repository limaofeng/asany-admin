"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[694],{70694:function(ve,g,r){r.d(g,{AQ:function(){return J},Af:function(){return ce},G$:function(){return ne},I1:function(){return B},KX:function(){return _e},Nq:function(){return be},P6:function(){return k},Pw:function(){return ae},WF:function(){return Y},Yw:function(){return s},ZO:function(){return p},_c:function(){return re},aA:function(){return Z},au:function(){return x},c9:function(){return de},jS:function(){return V},k$:function(){return q},ko:function(){return se},oM:function(){return ue},ot:function(){return G},w4:function(){return Me},wp:function(){return oe}});var K=r(97857),t=r.n(K),N=r(68400),u=r.n(N),d=r(75063),a=r(37887),l=r(73359),i=r(50319),j,D,S,$,I,Q,h,O,P,A,E,L,F,T,C,w,W,z,U,R,o={},c=(0,d.Ps)(j||(j=u()([`
    query content($module: ID!) {
  models(module: $module, where: {type: ENTITY}) {
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
    `])));function B(e){var n=t()(t()({},o),e);return a.a(c,n)}function je(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(c,n)}function De(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useSuspenseQuery(c,n)}var m=(0,d.Ps)(D||(D=u()([`
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
    `])));function Se(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useQuery(m,n)}function V(e){var n=t()(t()({},o),e);return l.t(m,n)}function $e(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useSuspenseQuery(m,n)}var _=(0,d.Ps)(S||(S=u()([`
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
    `])));function k(e){var n=t()(t()({},o),e);return a.a(_,n)}function Ie(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(_,n)}function Qe(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useSuspenseQuery(_,n)}var y=(0,d.Ps)($||($=u()([`
    query module($id: ID!) {
  module(id: $id) {
    id
    code
    name
    picture
    description
  }
}
    `])));function q(e){var n=t()(t()({},o),e);return a.a(y,n)}function Y(e){var n=t()(t()({},o),e);return l.t(y,n)}function he(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useSuspenseQuery(y,n)}var M=(0,d.Ps)(I||(I=u()([`
    query modules($where: ModuleWhereInput, $limit: Int) {
  modules(where: $where, limit: $limit) {
    id
    name
    code
    picture
    description
  }
}
    `])));function x(e){var n=t()(t()({},o),e);return a.a(M,n)}function G(e){var n=t()(t()({},o),e);return l.t(M,n)}function Oe(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useSuspenseQuery(M,n)}var X=(0,d.Ps)(Q||(Q=u()([`
    mutation createModule($input: ModuleCreateInput!) {
  createModule(input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function Z(e){var n=t()(t()({},o),e);return i.D(X,n)}var H=(0,d.Ps)(h||(h=u()([`
    mutation updateModule($id: ID!, $input: ModuleUpdateInput!) {
  updateModule(id: $id, input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function J(e){var n=t()(t()({},o),e);return i.D(H,n)}var ee=(0,d.Ps)(O||(O=u()([`
    mutation deleteModule($id: ID!) {
  deleteModule(id: $id)
}
    `])));function ne(e){var n=t()(t()({},o),e);return i.D(ee,n)}var te=(0,d.Ps)(P||(P=u()([`
    mutation deleteManyModules($ids: [ID!]!) {
  deleteManyModules(ids: $ids)
}
    `])));function Pe(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useMutation(te,n)}var s=(0,d.Ps)(A||(A=u()([`
    query schema($module: ID!) {
  models(module: $module, where: {type: ENTITY}) {
    id
    code
    name
    description
  }
}
    `])));function oe(e){var n=t()(t()({},o),e);return a.a(s,n)}function Ae(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(s,n)}function Ee(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useSuspenseQuery(s,n)}var f=(0,d.Ps)(E||(E=u()([`
    query models($moduleId: ID!, $where: ModelWhereInput, $limit: Int) {
  models(module: $moduleId, where: $where, limit: $limit) {
    id
  }
}
    `])));function Le(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useQuery(f,n)}function ue(e){var n=t()(t()({},o),e);return l.t(f,n)}function Fe(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useSuspenseQuery(f,n)}var p=(0,d.Ps)(L||(L=u()([`
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
    `])));function de(e){var n=t()(t()({},o),e);return a.a(p,n)}function Te(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(p,n)}function Ce(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useSuspenseQuery(p,n)}var b=(0,d.Ps)(F||(F=u()([`
    query modelFiledTypes {
  filedTypes: modelFiledTypes {
    id
    name
    description
    family
  }
}
    `])));function re(e){var n=t()(t()({},o),e);return a.a(b,n)}function we(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(b,n)}function We(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useSuspenseQuery(b,n)}var v=(0,d.Ps)(T||(T=u()([`
    query modelFields($model: ID!, $where: ModelFieldWhereInput, $limit: Int) {
  listFields: modelFields(model: $model, where: $where, limit: $limit) {
    id
    name
    description
  }
}
    `])));function ze(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useQuery(v,n)}function Ue(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useLazyQuery(v,n)}function Re(e){var n=_objectSpread(_objectSpread({},o),e);return Apollo.useSuspenseQuery(v,n)}var ie=(0,d.Ps)(C||(C=u()([`
    mutation createModel($input: ModelCreateInput!) {
  createModel(input: $input) {
    id
    name
  }
}
    `])));function ae(e){var n=t()(t()({},o),e);return i.D(ie,n)}var le=(0,d.Ps)(w||(w=u()([`
    mutation updateModel($id: ID!, $input: ModelUpdateInput!) {
  updateModel(id: $id, input: $input) {
    id
    name
  }
}
    `])));function se(e){var n=t()(t()({},o),e);return i.D(le,n)}var pe=(0,d.Ps)(W||(W=u()([`
    mutation deleteModel($id: ID!) {
  deleteModel(id: $id)
}
    `])));function ce(e){var n=t()(t()({},o),e);return i.D(pe,n)}var me=(0,d.Ps)(z||(z=u()([`
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
    `])));function _e(e){var n=t()(t()({},o),e);return i.D(me,n)}var ye=(0,d.Ps)(U||(U=u()([`
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
    `])));function Me(e){var n=t()(t()({},o),e);return i.D(ye,n)}var fe=(0,d.Ps)(R||(R=u()([`
    mutation removeModelField($modelId: ID!, $fieldId: ID!) {
  removeModelField(modelId: $modelId, fieldId: $fieldId)
}
    `])));function be(e){var n=t()(t()({},o),e);return i.D(fe,n)}}}]);
