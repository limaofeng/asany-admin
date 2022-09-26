(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[7206],{17206:function(A,c,u){"use strict";u.r(c);var e=u(2824),d=u(67294),i=u(51615),m=u(64043),Z=u(52620),r=u(85893);function O(l){var _,P=l.isLast,E=l.route,b=l.url,s=l.params,p=(0,i.TH)(),j=(0,m.WF)({variables:{id:s.id}}),f=(0,e.Z)(j,2),v=f[0],y=f[1],a=y.data,D=y.loading,o=(0,d.useMemo)(function(){var I,$;if(((I=p.state)===null||I===void 0||($=I.module)===null||$===void 0?void 0:$.id)==s.id){var M;return(M=p.state)===null||M===void 0?void 0:M.module}return a==null?void 0:a.module},[a==null?void 0:a.module,(_=p.state)===null||_===void 0?void 0:_.module,s.id]),F=(0,d.useMemo)(function(){return o?!1:D},[o,D]);return(0,d.useEffect)(function(){o||v({variables:{id:s.id}})},[v,o,s.id]),(0,r.jsx)(Z.Z,{className:l.className,href:P?void 0:b,children:F?(0,r.jsx)(r.Fragment,{children:"\u52A0\u8F7D\u4E2D..."}):(0,r.jsx)(r.Fragment,{children:o==null?void 0:o.name})},E.id)}c.default=O},23798:function(A,c,u){"use strict";u.d(c,{k$:function(){return I},WF:function(){return $},au:function(){return h},ot:function(){return U},aA:function(){return B},AQ:function(){return S},G$:function(){return z},wp:function(){return N},ZO:function(){return L},c9:function(){return x},_c:function(){return w},Pw:function(){return X},KX:function(){return Y},w4:function(){return V},Nq:function(){return q}});var e=u(11849),d=u(20310),i=u(49704),m=u(64718),Z=u(38460),r=u(21919),O,l,_,P,E,b,s,p,j,f,v,y,a,D,o={},F=(0,i.Ps)(O||(O=(0,d.Z)([`
    query module($id: ID!) {
  module(id: $id) {
    id
    code
    name
    picture
    description
  }
}
    `])));function I(n){var t=(0,e.Z)((0,e.Z)({},o),n);return m.a(F,t)}function $(n){var t=(0,e.Z)((0,e.Z)({},o),n);return Z.t(F,t)}var M=(0,i.Ps)(l||(l=(0,d.Z)([`
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
    `])));function h(n){var t=(0,e.Z)((0,e.Z)({},o),n);return m.a(M,t)}function U(n){var t=(0,e.Z)((0,e.Z)({},o),n);return Z.t(M,t)}var W=(0,i.Ps)(_||(_=(0,d.Z)([`
    mutation createModule($input: ModuleCreateInput!) {
  createModule(input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function B(n){var t=(0,e.Z)((0,e.Z)({},o),n);return r.D(W,t)}var K=(0,i.Ps)(P||(P=(0,d.Z)([`
    mutation updateModule($id: ID!, $input: ModuleUpdateInput!) {
  updateModule(id: $id, input: $input) {
    id
    code
    name
    picture
    description
  }
}
    `])));function S(n){var t=(0,e.Z)((0,e.Z)({},o),n);return r.D(K,t)}var R=(0,i.Ps)(E||(E=(0,d.Z)([`
    mutation deleteModule($id: ID!) {
  deleteModule(id: $id)
}
    `])));function z(n){var t=(0,e.Z)((0,e.Z)({},o),n);return r.D(R,t)}var g=(0,i.Ps)(b||(b=(0,d.Z)([`
    mutation deleteManyModules($ids: [ID!]!) {
  deleteManyModules(ids: $ids)
}
    `])));function ee(n){var t=_objectSpread(_objectSpread({},o),n);return Apollo.useMutation(g,t)}var T=(0,i.Ps)(s||(s=(0,d.Z)([`
    query schema($module: ID!) {
  models(module: $module, filter: {type: ENTITY}) {
    id
    code
    name
    description
  }
}
    `])));function N(n){var t=(0,e.Z)((0,e.Z)({},o),n);return m.a(T,t)}function ne(n){var t=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(T,t)}var L=(0,i.Ps)(p||(p=(0,d.Z)([`
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
    `])));function x(n){var t=(0,e.Z)((0,e.Z)({},o),n);return m.a(L,t)}function te(n){var t=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(L,t)}var Q=(0,i.Ps)(j||(j=(0,d.Z)([`
    query modelFiledTypes {
  filedTypes: modelFiledTypes {
    id
    name
    description
    family
  }
}
    `])));function w(n){var t=(0,e.Z)((0,e.Z)({},o),n);return m.a(Q,t)}function oe(n){var t=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(Q,t)}var C=(0,i.Ps)(f||(f=(0,d.Z)([`
    query modelFields($model: ID!, $filter: ModelFieldFilter, $limit: Int) {
  listFields: modelFields(model: $model, filter: $filter, limit: $limit) {
    id
    name
    description
  }
}
    `])));function ue(n){var t=_objectSpread(_objectSpread({},o),n);return Apollo.useQuery(C,t)}function de(n){var t=_objectSpread(_objectSpread({},o),n);return Apollo.useLazyQuery(C,t)}var G=(0,i.Ps)(v||(v=(0,d.Z)([`
    mutation createModel($input: ModelCreateInput!) {
  createModel(input: $input) {
    id
    name
  }
}
    `])));function X(n){var t=(0,e.Z)((0,e.Z)({},o),n);return r.D(G,t)}var H=(0,i.Ps)(y||(y=(0,d.Z)([`
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
    `])));function Y(n){var t=(0,e.Z)((0,e.Z)({},o),n);return r.D(H,t)}var J=(0,i.Ps)(a||(a=(0,d.Z)([`
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
    `])));function V(n){var t=(0,e.Z)((0,e.Z)({},o),n);return r.D(J,t)}var k=(0,i.Ps)(D||(D=(0,d.Z)([`
    mutation removeModelField($modelId: ID!, $fieldId: ID!) {
  removeModelField(modelId: $modelId, fieldId: $fieldId)
}
    `])));function q(n){var t=(0,e.Z)((0,e.Z)({},o),n);return r.D(k,t)}},64043:function(A,c,u){"use strict";u.d(c,{ZO:function(){return e.ZO},KX:function(){return e.KX},Pw:function(){return e.Pw},aA:function(){return e.aA},G$:function(){return e.G$},_c:function(){return e._c},c9:function(){return e.c9},WF:function(){return e.WF},ot:function(){return e.ot},au:function(){return e.au},Nq:function(){return e.Nq},wp:function(){return e.wp},w4:function(){return e.w4},AQ:function(){return e.AQ}});var e=u(23798)}}]);
