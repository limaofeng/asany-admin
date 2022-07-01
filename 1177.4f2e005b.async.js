(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[1177],{10792:function(J,k,r){"use strict";r.d(k,{DW:function(){return U},V1:function(){return Q},ZE:function(){return w},AC:function(){return z},lu:function(){return f}});var l=r(11849),j=r(20310),u=r(49704),n=r(64718),b=r(21919),y,h,P,$,g,i={},e=(0,u.Ps)(y||(y=(0,j.Z)([`
    query iconLibraries {
  libraries: iconLibraries {
    id
    name
    total
    description
  }
}
    `])));function U(a){var s=(0,l.Z)((0,l.Z)({},i),a);return n.a(e,s)}function G(a){var s=_objectSpread(_objectSpread({},i),a);return Apollo.useLazyQuery(e,s)}var B=(0,u.Ps)(h||(h=(0,j.Z)([`
    mutation createIconLibrary($name: String!) {
  library: createLibrary(input: {name: $name, type: ICONS}) {
    id
    name
  }
}
    `])));function Q(a){var s=(0,l.Z)((0,l.Z)({},i),a);return b.D(B,s)}var M=(0,u.Ps)(P||(P=(0,j.Z)([`
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
    `])));function w(a){var s=(0,l.Z)((0,l.Z)({},i),a);return n.a(M,s)}function H(a){var s=_objectSpread(_objectSpread({},i),a);return Apollo.useLazyQuery(M,s)}var W=(0,u.Ps)($||($=(0,j.Z)([`
    mutation deleteIconLibrary($id: ID!) {
  deleteLibrary(id: $id)
}
    `])));function z(a){var s=(0,l.Z)((0,l.Z)({},i),a);return b.D(W,s)}var K=(0,u.Ps)(g||(g=(0,j.Z)([`
    mutation updateIconLibrary($id: ID!, $input: LibraryUpdateInput!) {
  library: updateLibrary(id: $id, input: $input) {
    id
    name
  }
}
    `])));function f(a){var s=(0,l.Z)((0,l.Z)({},i),a);return b.D(K,s)}},61177:function(J,k,r){"use strict";r.r(k),r.d(k,{default:function(){return K}});var l=r(3182),j=r(94043),u=r.n(j),n=r(67294),b=r(11849),y=r(2824),h=r(28865),P=r(73727),$=r(51615),g=r(10792),i=r(53704),e=r(85893);function U(f){var a=f.library,s=f.onStatusChange,Z=(0,n.useRef)(null),o=(0,n.useRef)(null),I=(0,n.useState)({rename:!1,updating:!1,deleting:!1}),D=(0,y.Z)(I,2),C=D[0],d=D[1],L=(0,$.k6)(),m=(0,g.AC)(),E=(0,y.Z)(m,2),O=E[0],x=E[1].loading,V=(0,g.lu)(),A=(0,y.Z)(V,2),F=A[0],S=A[1].loading,_=(0,n.useCallback)(function(){L.push("/icon-libraries/"+a.id)},[L,a.id]);(0,n.useEffect)(function(){!x||d(function(v){return(0,b.Z)((0,b.Z)({},v),{},{deleting:x})})},[x]),(0,n.useEffect)(function(){!S||d(function(v){return(0,b.Z)((0,b.Z)({},v),{},{updating:S})})},[S]);var R=(0,n.useCallback)((0,l.Z)(u().mark(function v(){var t;return u().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,i.u_.confirm({title:"\u5220\u9664\u56FE\u6807\u5E93 ".concat(a.name),content:'<p>\u4F60\u786E\u5B9A\u4F60\u8981\u5220\u9664 "'.concat(a.name,'" \u5417?</p>'),width:320,okText:"\u5220 \u9664",cancelClassName:"btn btn-secondary btn-sm",okClassName:"btn btn-danger btn-sm"});case 2:if(t=c.sent,!t.isConfirmed){c.next=10;break}return c.next=6,O({variables:{id:a.id}});case 6:if(c.t0=s,!c.t0){c.next=10;break}return c.next=10,s("delete",a);case 10:case"end":return c.stop()}},v)})),[O,a,s]),T=(0,n.useCallback)(function(v){v.key=="delete"?R():v.key=="rename"&&(setTimeout(function(){var t;(t=o.current)===null||t===void 0||t.focus()},100),d(function(t){return(0,b.Z)((0,b.Z)({},t),{},{rename:!0})}))},[R]),N=(0,n.useCallback)(function(){d(function(v){return(0,b.Z)((0,b.Z)({},v),{},{rename:!1,updating:!1})})},[]),p=(0,n.useCallback)((0,l.Z)(u().mark(function v(){var t;return u().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,F({variables:{id:a.id,input:{name:(t=o.current)===null||t===void 0?void 0:t.value,description:a.description}}});case 2:N();case 3:case"end":return c.stop()}},v)})),[N,a.description,a.id,F]);return(0,e.jsxs)(i.Zb,{shadow:"sm",className:"library-container",children:[(0,e.jsx)(i.Zb.Body,{children:(0,e.jsx)(i.yC,{spinning:C.deleting,children:(0,e.jsx)("div",{onClick:_,className:"library-image-wrapper empty-library"})})}),(0,e.jsxs)(i.Zb.Footer,{children:[(0,e.jsxs)("div",{className:"lib-description",children:[(0,e.jsx)("h1",{className:"library-name-header",children:C.rename?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.II,{ref:o,className:"input-rimless",defaultValue:a.name}),(0,e.jsxs)(i.yC,{spinning:C.updating,size:"small",children:[(0,e.jsx)("a",{className:"name-editing-cancel",onClick:N,children:(0,e.jsx)(h.ZP,{name:"Duotune/arr088",className:"svg-icon-2x"})}),(0,e.jsx)("a",{className:"name-editing-ok",onClick:p,children:(0,e.jsx)(h.ZP,{name:"Duotune/arr085",className:"svg-icon-2x"})})]})]}):(0,e.jsx)(P.Link,{to:"/libraries/".concat(a.id),children:a.name})}),(0,e.jsxs)("p",{className:"library-item-count-label",children:[a.total," \u4E2A\u56FE\u6807"]})]}),(0,e.jsx)("div",{ref:Z,className:"lib-actions-menu",children:(0,e.jsx)(i.Lt,{placement:"bottomRight",overlay:(0,e.jsxs)(i.v2,{className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",onClick:T,children:[(0,e.jsx)(i.v2.Item,{className:"px-3",children:"\u91CD\u547D\u540D"},"rename"),(0,e.jsx)(i.v2.Item,{className:"px-3 actions-delete",children:"\u5220\u9664\u56FE\u6807\u5E93"},"delete")]}),children:(0,e.jsx)("a",{className:"dropdown-link",children:(0,e.jsx)(h.ZP,{name:"Duotune/gen053"})})})})]})]})}var G=U,B=r(94184),Q=r.n(B);function M(f){var a=(0,n.useRef)(null),s=(0,n.useState)(),Z=(0,y.Z)(s,2),o=Z[0],I=Z[1],D=(0,n.useState)(),C=(0,y.Z)(D,2),d=C[0],L=C[1],m=(0,n.useState)(!1),E=(0,y.Z)(m,2),O=E[0],x=E[1],V=(0,g.V1)(),A=(0,y.Z)(V,1),F=A[0],S=(0,n.useCallback)(function(p){I(p.target.value)},[]),_=(0,n.useCallback)(function(){L(!0)},[]),R=(0,n.useCallback)(function(p){L(!!p.target.value)},[]),T=(0,n.useCallback)(function(){var p;(p=a.current)===null||p===void 0||p.blur(),I(""),L(!1),x(!1)},[]),N=(0,n.useCallback)((0,l.Z)(u().mark(function p(){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,x(!0),t.next=6,F({variables:{name:o}});case 6:return t.next=8,f.onCreated();case 8:return t.prev=8,T(),t.finish(8);case 11:case"end":return t.stop()}},p,null,[[2,,8,11]])})),[o]);return console.log("name",o),(0,e.jsx)(i.Zb,{className:"library-container library-create",children:(0,e.jsxs)("div",{className:Q()("library-create-form",{active:d}),children:[(0,e.jsx)(i.II,{ref:a,value:o,onChange:S,className:"library-name-input input-rimless",onFocus:_,onBlur:R,onPressEnter:N,placeholder:"\u8F93\u5165\u56FE\u6807\u5E93\u540D\u79F0"}),(0,e.jsx)(i.yC,{spinning:O,size:"small",children:(0,e.jsxs)("div",{className:"library-action-buttons",children:[(0,e.jsx)("a",{className:"name-editing-cancel",onClick:T,children:(0,e.jsx)(h.ZP,{name:"Duotune/arr088",className:"svg-icon-2x"})}),(0,e.jsx)("a",{className:"name-editing-ok",onClick:d?N:void 0,children:(0,e.jsx)(h.ZP,{name:"Duotune/arr085",className:"svg-icon-2x"})})]})})]})})}var w=M,H=r(75468);function W(){var f=(0,g.DW)(),a=f.data,s=a===void 0?{libraries:[]}:a,Z=f.loading,o=f.refetch,I=(0,n.useCallback)((0,l.Z)(u().mark(function d(){return u().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,o();case 2:case"end":return m.stop()}},d)})),[o]),D=(0,n.useCallback)((0,l.Z)(u().mark(function d(){return u().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,o();case 2:case"end":return m.stop()}},d)})),[o]),C=s.libraries;return(0,e.jsx)(H.v,{header:{title:"\u56FE\u6807\u5E93"},children:(0,e.jsx)("div",{className:"ie-libraries",children:(0,e.jsx)(i.yC,{spinning:Z,children:(0,e.jsxs)("div",{className:"library-list-wrapper",children:[(0,e.jsx)(w,{onCreated:I}),C.map(function(d){return(0,e.jsx)(G,{library:d,onStatusChange:D},d.id)})]})})})})}var z=n.memo(W),K=z}}]);
