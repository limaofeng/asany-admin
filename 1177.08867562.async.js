(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[1177],{10792:function(J,k,r){"use strict";r.d(k,{DW:function(){return B},V1:function(){return w},ZE:function(){return W},AC:function(){return K},lu:function(){return y}});var l=r(11849),g=r(20310),u=r(49704),n=r(93633),h=r(21919),p,P,$,C,s,e={},M=(0,u.Ps)(p||(p=(0,g.Z)([`
    query iconLibraries {
  libraries: iconLibraries {
    id
    name
    total
    description
  }
}
    `])));function B(a){var t=(0,l.Z)((0,l.Z)({},e),a);return n.a(M,t)}function f(a){var t=_objectSpread(_objectSpread({},e),a);return Apollo.useLazyQuery(M,t)}var Q=(0,u.Ps)(P||(P=(0,g.Z)([`
    mutation createIconLibrary($name: String!) {
  library: createLibrary(input: {name: $name, type: ICONS}) {
    id
    name
  }
}
    `])));function w(a){var t=(0,l.Z)((0,l.Z)({},e),a);return h.D(Q,t)}var O=(0,u.Ps)($||($=(0,g.Z)([`
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
    `])));function W(a){var t=(0,l.Z)((0,l.Z)({},e),a);return n.a(O,t)}function H(a){var t=_objectSpread(_objectSpread({},e),a);return Apollo.useLazyQuery(O,t)}var z=(0,u.Ps)(C||(C=(0,g.Z)([`
    mutation deleteIconLibrary($id: ID!) {
  deleteLibrary(id: $id)
}
    `])));function K(a){var t=(0,l.Z)((0,l.Z)({},e),a);return h.D(z,t)}var V=(0,u.Ps)(s||(s=(0,g.Z)([`
    mutation updateIconLibrary($id: ID!, $input: LibraryUpdateInput!) {
  library: updateLibrary(id: $id, input: $input) {
    id
    name
  }
}
    `])));function y(a){var t=(0,l.Z)((0,l.Z)({},e),a);return h.D(V,t)}},61177:function(J,k,r){"use strict";r.r(k),r.d(k,{default:function(){return V}});var l=r(3182),g=r(94043),u=r.n(g),n=r(67294),h=r(10792),p=r(2824),P=r(94184),$=r.n(P),C=r(28865),s=r(11974),e=r(85893);function M(y){var a=(0,n.useRef)(null),t=(0,n.useState)(),Z=(0,p.Z)(t,2),o=Z[0],I=Z[1],D=(0,n.useState)(),L=(0,p.Z)(D,2),d=L[0],j=L[1],m=(0,n.useState)(!1),E=(0,p.Z)(m,2),A=E[0],x=E[1],_=(0,h.V1)(),F=(0,p.Z)(_,1),R=F[0],S=(0,n.useCallback)(function(b){I(b.target.value)},[]),G=(0,n.useCallback)(function(){j(!0)},[]),T=(0,n.useCallback)(function(b){j(!!b.target.value)},[]),U=(0,n.useCallback)(function(){var b;(b=a.current)===null||b===void 0||b.blur(),I(""),j(!1),x(!1)},[]),N=(0,n.useCallback)((0,l.Z)(u().mark(function b(){return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(o){i.next=2;break}return i.abrupt("return");case 2:return i.prev=2,x(!0),i.next=6,R({variables:{name:o}});case 6:return i.next=8,y.onCreated();case 8:return i.prev=8,U(),i.finish(8);case 11:case"end":return i.stop()}},b,null,[[2,,8,11]])})),[o]);return console.log("name",o),(0,e.jsx)(s.Zb,{className:"library-container library-create",children:(0,e.jsxs)("div",{className:$()("library-create-form",{active:d}),children:[(0,e.jsx)(s.II,{ref:a,value:o,onChange:S,className:"library-name-input input-rimless",onFocus:G,onBlur:T,onPressEnter:N,placeholder:"\u8F93\u5165\u56FE\u6807\u5E93\u540D\u79F0"}),(0,e.jsx)(s.yC,{spinning:A,size:"small",children:(0,e.jsxs)("div",{className:"library-action-buttons",children:[(0,e.jsx)("a",{className:"name-editing-cancel",onClick:U,children:(0,e.jsx)(C.ZP,{name:"Duotune/arr088",className:"svg-icon-2x"})}),(0,e.jsx)("a",{className:"name-editing-ok",onClick:d?N:void 0,children:(0,e.jsx)(C.ZP,{name:"Duotune/arr085",className:"svg-icon-2x"})})]})})]})})}var B=M,f=r(11849),Q=r(73727),w=r(51615);function O(y){var a=y.library,t=y.onStatusChange,Z=(0,n.useRef)(null),o=(0,n.useRef)(null),I=(0,n.useState)({rename:!1,updating:!1,deleting:!1}),D=(0,p.Z)(I,2),L=D[0],d=D[1],j=(0,w.k6)(),m=(0,h.AC)(),E=(0,p.Z)(m,2),A=E[0],x=E[1].loading,_=(0,h.lu)(),F=(0,p.Z)(_,2),R=F[0],S=F[1].loading,G=(0,n.useCallback)(function(){j.push("/icon-libraries/"+a.id)},[j,a.id]);(0,n.useEffect)(function(){!x||d(function(v){return(0,f.Z)((0,f.Z)({},v),{},{deleting:x})})},[x]),(0,n.useEffect)(function(){!S||d(function(v){return(0,f.Z)((0,f.Z)({},v),{},{updating:S})})},[S]);var T=(0,n.useCallback)((0,l.Z)(u().mark(function v(){var i;return u().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,s.u_.confirm({title:"\u5220\u9664\u56FE\u6807\u5E93 ".concat(a.name),content:'<p>\u4F60\u786E\u5B9A\u4F60\u8981\u5220\u9664 "'.concat(a.name,'" \u5417?</p>'),width:320,okText:"\u5220 \u9664",cancelClassName:"btn btn-secondary btn-sm",okClassName:"btn btn-danger btn-sm"});case 2:if(i=c.sent,!i.isConfirmed){c.next=10;break}return c.next=6,A({variables:{id:a.id}});case 6:if(c.t0=t,!c.t0){c.next=10;break}return c.next=10,t("delete",a);case 10:case"end":return c.stop()}},v)})),[A,a,t]),U=(0,n.useCallback)(function(v){v.key=="delete"?T():v.key=="rename"&&(setTimeout(function(){var i;(i=o.current)===null||i===void 0||i.focus()},100),d(function(i){return(0,f.Z)((0,f.Z)({},i),{},{rename:!0})}))},[T]),N=(0,n.useCallback)(function(){d(function(v){return(0,f.Z)((0,f.Z)({},v),{},{rename:!1,updating:!1})})},[]),b=(0,n.useCallback)((0,l.Z)(u().mark(function v(){var i;return u().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,R({variables:{id:a.id,input:{name:(i=o.current)===null||i===void 0?void 0:i.value,description:a.description}}});case 2:N();case 3:case"end":return c.stop()}},v)})),[N,a.description,a.id,R]);return(0,e.jsxs)(s.Zb,{shadow:"sm",className:"library-container",children:[(0,e.jsx)(s.Zb.Body,{children:(0,e.jsx)(s.yC,{spinning:L.deleting,children:(0,e.jsx)("div",{onClick:G,className:"library-image-wrapper empty-library"})})}),(0,e.jsxs)(s.Zb.Footer,{children:[(0,e.jsxs)("div",{className:"lib-description",children:[(0,e.jsx)("h1",{className:"library-name-header",children:L.rename?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(s.II,{ref:o,className:"input-rimless",defaultValue:a.name}),(0,e.jsxs)(s.yC,{spinning:L.updating,size:"small",children:[(0,e.jsx)("a",{className:"name-editing-cancel",onClick:N,children:(0,e.jsx)(C.ZP,{name:"Duotune/arr088",className:"svg-icon-2x"})}),(0,e.jsx)("a",{className:"name-editing-ok",onClick:b,children:(0,e.jsx)(C.ZP,{name:"Duotune/arr085",className:"svg-icon-2x"})})]})]}):(0,e.jsx)(Q.Link,{to:"/libraries/".concat(a.id),children:a.name})}),(0,e.jsxs)("p",{className:"library-item-count-label",children:[a.total," \u4E2A\u56FE\u6807"]})]}),(0,e.jsx)("div",{ref:Z,className:"lib-actions-menu",children:(0,e.jsx)(s.Lt,{placement:"bottomRight",overlay:(0,e.jsxs)(s.v2,{className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",onClick:U,children:[(0,e.jsx)(s.v2.Item,{className:"px-3",children:"\u91CD\u547D\u540D"},"rename"),(0,e.jsx)(s.v2.Item,{className:"px-3 actions-delete",children:"\u5220\u9664\u56FE\u6807\u5E93"},"delete")]}),children:(0,e.jsx)("a",{className:"dropdown-link",children:(0,e.jsx)(C.ZP,{name:"Duotune/gen053"})})})})]})]})}var W=O,H=r(75468);function z(){var y=(0,h.DW)(),a=y.data,t=a===void 0?{libraries:[]}:a,Z=y.loading,o=y.refetch,I=(0,n.useCallback)((0,l.Z)(u().mark(function d(){return u().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,o();case 2:case"end":return m.stop()}},d)})),[o]),D=(0,n.useCallback)((0,l.Z)(u().mark(function d(){return u().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,o();case 2:case"end":return m.stop()}},d)})),[o]),L=t.libraries;return(0,e.jsx)(H.v,{header:{title:"\u56FE\u6807\u5E93"},children:(0,e.jsx)("div",{className:"ie-libraries",children:(0,e.jsx)(s.yC,{spinning:Z,children:(0,e.jsxs)("div",{className:"library-list-wrapper",children:[(0,e.jsx)(B,{onCreated:I}),L.map(function(d){return(0,e.jsx)(W,{library:d,onStatusChange:D},d.id)})]})})})})}var K=n.memo(z),V=K}}]);
