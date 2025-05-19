"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6030],{31033:function(q,P,a){a.d(P,{AC:function(){return V},DW:function(){return g},V1:function(){return z},ZE:function(){return Z},lu:function(){return h}});var B=a(97857),s=a.n(B),W=a(68400),v=a.n(W),r=a(75063),O=a(37887),u=a(50319),k,b,A,y,$,p={},j=(0,r.Ps)(k||(k=v()([`
    query iconLibraries {
  libraries: iconLibraries {
    id
    name
    total
    description
  }
}
    `])));function g(n){var t=s()(s()({},p),n);return O.a(j,t)}function e(n){var t=_objectSpread(_objectSpread({},p),n);return Apollo.useLazyQuery(j,t)}function X(n){var t=_objectSpread(_objectSpread({},p),n);return Apollo.useSuspenseQuery(j,t)}var K=(0,r.Ps)(b||(b=v()([`
    mutation createIconLibrary($name: String!) {
  library: createLibrary(input: {name: $name, type: ICONS}) {
    id
    name
  }
}
    `])));function z(n){var t=s()(s()({},p),n);return u.D(K,t)}var _=(0,r.Ps)(A||(A=v()([`
    query iconLibrary($id: ID!) {
  library: iconLibrary(id: $id) {
    id
    name
    description
    total
    icons {
      id
      name
      description
      unicode
      content
    }
  }
}
    `])));function Z(n){var t=s()(s()({},p),n);return O.a(_,t)}function Y(n){var t=_objectSpread(_objectSpread({},p),n);return Apollo.useLazyQuery(_,t)}function ee(n){var t=_objectSpread(_objectSpread({},p),n);return Apollo.useSuspenseQuery(_,t)}var w=(0,r.Ps)(y||(y=v()([`
    mutation deleteIconLibrary($id: ID!) {
  deleteLibrary(id: $id)
}
    `])));function V(n){var t=s()(s()({},p),n);return u.D(w,t)}var G=(0,r.Ps)($||($=v()([`
    mutation updateIconLibrary($id: ID!, $input: LibraryUpdateInput!) {
  library: updateLibrary(id: $id, input: $input) {
    id
    name
  }
}
    `])));function h(n){var t=s()(s()({},p),n);return u.D(G,t)}},66030:function(q,P,a){a.r(P),a.d(P,{default:function(){return G}});var B=a(15009),s=a.n(B),W=a(99289),v=a.n(W),r=a(67294),O=a(73588),u=a(89717),k=a(97857),b=a.n(k),A=a(5574),y=a.n(A),$=a(96974),p=a(39711),j=a(46027),g=a(31033),e=a(85893);function X(h){var n=h.library,t=h.onStatusChange,D=(0,r.useRef)(null),o=(0,r.useRef)(null),I=(0,r.useState)({rename:!1,updating:!1,deleting:!1}),S=y()(I,2),C=S[0],c=S[1],L=(0,$.s0)(),d=(0,g.AC)(),N=y()(d,2),T=N[0],E=N[1].loading,H=(0,g.lu)(),R=y()(H,2),U=R[0],M=R[1].loading,J=(0,r.useCallback)(function(){L("/icon-libraries/"+n.id)},[history,n.id]);(0,r.useEffect)(function(){E&&c(function(m){return b()(b()({},m),{},{deleting:E})})},[E]),(0,r.useEffect)(function(){M&&c(function(m){return b()(b()({},m),{},{updating:M})})},[M]);var F=(0,r.useCallback)(v()(s()().mark(function m(){var i;return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,u.Modal.confirm({title:"\u5220\u9664\u56FE\u6807\u5E93 ".concat(n.name),content:'<p>\u4F60\u786E\u5B9A\u4F60\u8981\u5220\u9664 "'.concat(n.name,'" \u5417?</p>'),width:320,okText:"\u5220 \u9664",cancelClassName:"btn btn-secondary btn-sm",okClassName:"btn btn-danger btn-sm"});case 2:if(i=l.sent,!i.isConfirmed){l.next=10;break}return l.next=6,T({variables:{id:n.id}});case 6:if(l.t0=t,!l.t0){l.next=10;break}return l.next=10,t("delete",n);case 10:case"end":return l.stop()}},m)})),[T,n,t]),Q=(0,r.useCallback)(function(m){m.key==="delete"?F():m.key==="rename"&&(setTimeout(function(){var i;(i=o.current)===null||i===void 0||i.focus()},100),c(function(i){return b()(b()({},i),{},{rename:!0})}))},[F]),x=(0,r.useCallback)(function(){c(function(m){return b()(b()({},m),{},{rename:!1,updating:!1})})},[]),f=(0,r.useCallback)(v()(s()().mark(function m(){var i;return s()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,U({variables:{id:n.id,input:{name:(i=o.current)===null||i===void 0?void 0:i.value,description:n.description}}});case 2:x();case 3:case"end":return l.stop()}},m)})),[x,n.description,n.id,U]);return(0,e.jsxs)(u.Card,{shadow:"sm",className:"library-container",children:[(0,e.jsx)(u.Card.Body,{children:(0,e.jsx)(u.Spin,{spinning:C.deleting,children:(0,e.jsx)("div",{onClick:J,className:"library-image-wrapper empty-library"})})}),(0,e.jsxs)(u.Card.Footer,{children:[(0,e.jsxs)("div",{className:"lib-description",children:[(0,e.jsx)("h1",{className:"library-name-header",children:C.rename?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(u.Input,{ref:o,className:"input-rimless",defaultValue:n.name}),(0,e.jsxs)(u.Spin,{spinning:C.updating,size:"small",children:[(0,e.jsx)("a",{className:"name-editing-cancel",onClick:x,children:(0,e.jsx)(j.ZP,{name:"Duotune/arr088",className:"svg-icon-2x"})}),(0,e.jsx)("a",{className:"name-editing-ok",onClick:f,children:(0,e.jsx)(j.ZP,{name:"Duotune/arr085",className:"svg-icon-2x"})})]})]}):(0,e.jsx)(p.rU,{to:"/libraries/".concat(n.id),children:n.name})}),(0,e.jsxs)("p",{className:"library-item-count-label",children:[n.total," \u4E2A\u56FE\u6807"]})]}),(0,e.jsx)("div",{ref:D,className:"lib-actions-menu",children:(0,e.jsx)(u.Dropdown,{placement:"bottomRight",overlay:(0,e.jsxs)(u.Menu,{className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",onClick:Q,children:[(0,e.jsx)(u.Menu.Item,{className:"px-3",children:"\u91CD\u547D\u540D"},"rename"),(0,e.jsx)(u.Menu.Item,{className:"px-3 actions-delete",children:"\u5220\u9664\u56FE\u6807\u5E93"},"delete")]}),children:(0,e.jsx)("a",{className:"dropdown-link",children:(0,e.jsx)(j.ZP,{name:"Duotune/gen053"})})})})]})]})}var K=X,z=a(93967),_=a.n(z);function Z(h){var n=(0,r.useRef)(null),t=(0,r.useState)(),D=y()(t,2),o=D[0],I=D[1],S=(0,r.useState)(),C=y()(S,2),c=C[0],L=C[1],d=(0,r.useState)(!1),N=y()(d,2),T=N[0],E=N[1],H=(0,g.V1)(),R=y()(H,1),U=R[0],M=(0,r.useCallback)(function(f){I(f.target.value)},[]),J=(0,r.useCallback)(function(){L(!0)},[]),F=(0,r.useCallback)(function(f){L(!!f.target.value)},[]),Q=(0,r.useCallback)(function(){var f;(f=n.current)===null||f===void 0||f.blur(),I(""),L(!1),E(!1)},[]),x=(0,r.useCallback)(v()(s()().mark(function f(){return s()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(o){i.next=2;break}return i.abrupt("return");case 2:return i.prev=2,E(!0),i.next=6,U({variables:{name:o}});case 6:return i.next=8,h.onCreated();case 8:return i.prev=8,Q(),i.finish(8);case 11:case"end":return i.stop()}},f,null,[[2,,8,11]])})),[o]);return console.log("name",o),(0,e.jsx)(u.Card,{className:"library-container library-create",children:(0,e.jsxs)("div",{className:_()("library-create-form",{active:c}),children:[(0,e.jsx)(u.Input,{ref:n,value:o,onChange:M,className:"library-name-input input-rimless",onFocus:J,onBlur:F,onPressEnter:x,placeholder:"\u8F93\u5165\u56FE\u6807\u5E93\u540D\u79F0"}),(0,e.jsx)(u.Spin,{spinning:T,size:"small",children:(0,e.jsxs)("div",{className:"library-action-buttons",children:[(0,e.jsx)("a",{className:"name-editing-cancel",onClick:Q,children:(0,e.jsx)(j.ZP,{name:"Duotune/arr088",className:"svg-icon-2x"})}),(0,e.jsx)("a",{className:"name-editing-ok",onClick:c?x:void 0,children:(0,e.jsx)(j.ZP,{name:"Duotune/arr085",className:"svg-icon-2x"})})]})})]})})}var Y=Z,ee=a(36113);function w(){var h=(0,g.DW)(),n=h.data,t=n===void 0?{libraries:[]}:n,D=h.loading,o=h.refetch,I=(0,r.useCallback)(v()(s()().mark(function c(){return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,o();case 2:case"end":return d.stop()}},c)})),[o]),S=(0,r.useCallback)(v()(s()().mark(function c(){return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,o();case 2:case"end":return d.stop()}},c)})),[o]),C=t.libraries;return(0,e.jsx)(O.vs,{header:{title:"\u56FE\u6807\u5E93"},children:(0,e.jsx)("div",{className:"ie-libraries",children:(0,e.jsx)(u.Spin,{spinning:D,children:(0,e.jsxs)("div",{className:"library-list-wrapper",children:[(0,e.jsx)(Y,{onCreated:I}),C.map(function(c){return(0,e.jsx)(K,{library:c,onStatusChange:S},c.id)})]})})})})}var V=r.memo(w),G=V},36113:function(){}}]);
