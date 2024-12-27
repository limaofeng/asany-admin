"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9456],{79456:function(S,c,r){r.r(c);var v=r(49817),s=r(52680),u=r(85893);function i(a){var o,y=a.isLast,b=a.route,p=a.url,m=a.params,d=(0,s._$)({variables:{id:m.sid}}),n=d.data,l=d.loading;return(0,u.jsx)(v.Z,{className:a.className,href:y?void 0:p,children:l?(0,u.jsx)(u.Fragment,{children:"\u52A0\u8F7D\u4E2D..."}):(0,u.jsx)(u.Fragment,{children:n==null||(o=n.website)===null||o===void 0?void 0:o.name})},b.id)}c.default=i},52680:function(S,c,r){r.d(c,{v7:function(){return A},_$:function(){return Q},F6:function(){return W}});var v=r(97857),s=r.n(v),u=r(68400),i=r.n(u),a=r(75063),o=r(37887),y=r(73359),b,p,m,d,n={},l=(0,a.Ps)(b||(b=i()([`
    query websites {
  websites {
    id
    name
    description
  }
}
    `])));function W(e){var t=s()(s()({},n),e);return o.a(l,t)}function C(e){var t=_objectSpread(_objectSpread({},n),e);return Apollo.useLazyQuery(l,t)}function D(e){var t=_objectSpread(_objectSpread({},n),e);return Apollo.useSuspenseQuery(l,t)}var f=(0,a.Ps)(p||(p=i()([`
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
    `])));function Q(e){var t=s()(s()({},n),e);return o.a(f,t)}function L(e){var t=_objectSpread(_objectSpread({},n),e);return Apollo.useLazyQuery(f,t)}function h(e){var t=_objectSpread(_objectSpread({},n),e);return Apollo.useSuspenseQuery(f,t)}var g=(0,a.Ps)(m||(m=i()([`
    mutation createWebsite($input: WebsiteCreateInput!) {
  createWebsite(input: $input) {
    id
    name
  }
}
    `])));function O(e){var t=_objectSpread(_objectSpread({},n),e);return Apollo.useMutation(g,t)}var j=(0,a.Ps)(d||(d=i()([`
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
    `])));function E(e){var t=_objectSpread(_objectSpread({},n),e);return Apollo.useQuery(j,t)}function A(e){var t=s()(s()({},n),e);return y.t(j,t)}function P(e){var t=_objectSpread(_objectSpread({},n),e);return Apollo.useSuspenseQuery(j,t)}}}]);
