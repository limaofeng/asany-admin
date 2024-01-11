(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[545],{40545:function(j,l,t){"use strict";t.r(l);var r=t(81303),u=t(52620),a=t(85893);function b(s){var o,m=s.isLast,v=s.route,p=s.url,i=s.params,d=(0,r._$)({variables:{id:i.sid}}),c=d.data,y=d.loading;return(0,a.jsx)(u.Z,{className:s.className,href:m?void 0:p,children:y?(0,a.jsx)(a.Fragment,{children:"\u52A0\u8F7D\u4E2D..."}):(0,a.jsx)(a.Fragment,{children:c==null||(o=c.website)===null||o===void 0?void 0:o.name})},v.id)}l.default=b},81303:function(j,l,t){"use strict";t.d(l,{v7:function(){return g},_$:function(){return C},F6:function(){return c}});var r=t(11849),u=t(20310),a=t(76058),b=t(64718),s=t(38460),o,m,v,p,i={},d=(0,a.Ps)(o||(o=(0,u.Z)([`
    query websites {
  websites {
    id
    name
    description
  }
}
    `])));function c(e){var n=(0,r.Z)((0,r.Z)({},i),e);return b.a(d,n)}function y(e){var n=_objectSpread(_objectSpread({},i),e);return Apollo.useLazyQuery(d,n)}var f=(0,a.Ps)(m||(m=(0,u.Z)([`
    query website($id: ID!) {
  website(id: $id) {
    id
    name
    description
    channel {
      id
    }
    application {
      id
    }
  }
}
    `])));function C(e){var n=(0,r.Z)((0,r.Z)({},i),e);return b.a(f,n)}function A(e){var n=_objectSpread(_objectSpread({},i),e);return Apollo.useLazyQuery(f,n)}var D=(0,a.Ps)(v||(v=(0,u.Z)([`
    mutation createWebsite($input: WebsiteCreateInput!) {
  createWebsite(input: $input) {
    id
    name
  }
}
    `])));function L(e){var n=_objectSpread(_objectSpread({},i),e);return Apollo.useMutation(D,n)}var W=(0,a.Ps)(p||(p=(0,u.Z)([`
    query websiteArticleCategories($id: ID!) {
  categories: articleCategories(where: {parent: {id: $id, subColumns: true}}) {
    id
    icon
    name
    fullName
    path
    index
    level
    image
    storeTemplate {
      id
    }
    parent {
      id
    }
  }
}
    `])));function Q(e){var n=_objectSpread(_objectSpread({},i),e);return Apollo.useQuery(W,n)}function g(e){var n=(0,r.Z)((0,r.Z)({},i),e);return s.t(W,n)}}}]);
