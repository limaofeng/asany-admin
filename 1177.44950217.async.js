(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[1177],{10792:function(H,S,n){"use strict";n.d(S,{DW:function(){return U},V1:function(){return w},ZE:function(){return Q},AC:function(){return W},lu:function(){return r}});var t=n(11849),b=n(20310),a=n(49704),p=n(64718),y=n(21919),C,k,P,L,u,e={},$=(0,a.Ps)(C||(C=(0,b.Z)([`
    query iconLibraries {
  libraries: iconLibraries {
    id
    name
    total
    description
  }
}
    `])));function U(s){var l=(0,t.Z)((0,t.Z)({},e),s);return p.a($,l)}function V(s){var l=_objectSpread(_objectSpread({},e),s);return Apollo.useLazyQuery($,l)}var B=(0,a.Ps)(k||(k=(0,b.Z)([`
    mutation createIconLibrary($name: String!) {
  library: createLibrary(input: {name: $name, type: ICONS}) {
    id
    name
  }
}
    `])));function w(s){var l=(0,t.Z)((0,t.Z)({},e),s);return y.D(B,l)}var M=(0,a.Ps)(P||(P=(0,b.Z)([`
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
    `])));function Q(s){var l=(0,t.Z)((0,t.Z)({},e),s);return p.a(M,l)}function G(s){var l=_objectSpread(_objectSpread({},e),s);return Apollo.useLazyQuery(M,l)}var _=(0,a.Ps)(L||(L=(0,b.Z)([`
    mutation deleteIconLibrary($id: ID!) {
  deleteLibrary(id: $id)
}
    `])));function W(s){var l=(0,t.Z)((0,t.Z)({},e),s);return y.D(_,l)}var h=(0,a.Ps)(u||(u=(0,b.Z)([`
    mutation updateIconLibrary($id: ID!, $input: LibraryUpdateInput!) {
  library: updateLibrary(id: $id, input: $input) {
    id
    name
  }
}
    `])));function r(s){var l=(0,t.Z)((0,t.Z)({},e),s);return y.D(h,l)}},61177:function(H,S,n){"use strict";n.r(S),n.d(S,{default:function(){return W}});var t=n(39428),b=n(3182),a=n(67294),p=n(11849),y=n(2824),C=n(28865),k=n(73727),P=n(51615),L=n(10792),u=n(38671),e=n(85893);function $(h){var r=h.library,s=h.onStatusChange,l=(0,a.useRef)(null),o=(0,a.useRef)(null),g=(0,a.useState)({rename:!1,updating:!1,deleting:!1}),I=(0,y.Z)(g,2),Z=I[0],d=I[1],j=(0,P.k6)(),m=(0,L.AC)(),N=(0,y.Z)(m,2),O=N[0],D=N[1].loading,z=(0,L.lu)(),A=(0,y.Z)(z,2),F=A[0],E=A[1].loading,K=(0,a.useCallback)(function(){j.push("/icon-libraries/"+r.id)},[j,r.id]);(0,a.useEffect)(function(){!D||d(function(v){return(0,p.Z)((0,p.Z)({},v),{},{deleting:D})})},[D]),(0,a.useEffect)(function(){!E||d(function(v){return(0,p.Z)((0,p.Z)({},v),{},{updating:E})})},[E]);var R=(0,a.useCallback)((0,b.Z)((0,t.Z)().mark(function v(){var i;return(0,t.Z)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,u.u_.confirm({title:"\u5220\u9664\u56FE\u6807\u5E93 ".concat(r.name),content:'<p>\u4F60\u786E\u5B9A\u4F60\u8981\u5220\u9664 "'.concat(r.name,'" \u5417?</p>'),width:320,okText:"\u5220 \u9664",cancelClassName:"btn btn-secondary btn-sm",okClassName:"btn btn-danger btn-sm"});case 2:if(i=c.sent,!i.isConfirmed){c.next=10;break}return c.next=6,O({variables:{id:r.id}});case 6:if(c.t0=s,!c.t0){c.next=10;break}return c.next=10,s("delete",r);case 10:case"end":return c.stop()}},v)})),[O,r,s]),T=(0,a.useCallback)(function(v){v.key=="delete"?R():v.key=="rename"&&(setTimeout(function(){var i;(i=o.current)===null||i===void 0||i.focus()},100),d(function(i){return(0,p.Z)((0,p.Z)({},i),{},{rename:!0})}))},[R]),x=(0,a.useCallback)(function(){d(function(v){return(0,p.Z)((0,p.Z)({},v),{},{rename:!1,updating:!1})})},[]),f=(0,a.useCallback)((0,b.Z)((0,t.Z)().mark(function v(){var i;return(0,t.Z)().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,F({variables:{id:r.id,input:{name:(i=o.current)===null||i===void 0?void 0:i.value,description:r.description}}});case 2:x();case 3:case"end":return c.stop()}},v)})),[x,r.description,r.id,F]);return(0,e.jsxs)(u.Zb,{shadow:"sm",className:"library-container",children:[(0,e.jsx)(u.Zb.Body,{children:(0,e.jsx)(u.yC,{spinning:Z.deleting,children:(0,e.jsx)("div",{onClick:K,className:"library-image-wrapper empty-library"})})}),(0,e.jsxs)(u.Zb.Footer,{children:[(0,e.jsxs)("div",{className:"lib-description",children:[(0,e.jsx)("h1",{className:"library-name-header",children:Z.rename?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(u.II,{ref:o,className:"input-rimless",defaultValue:r.name}),(0,e.jsxs)(u.yC,{spinning:Z.updating,size:"small",children:[(0,e.jsx)("a",{className:"name-editing-cancel",onClick:x,children:(0,e.jsx)(C.ZP,{name:"Duotune/arr088",className:"svg-icon-2x"})}),(0,e.jsx)("a",{className:"name-editing-ok",onClick:f,children:(0,e.jsx)(C.ZP,{name:"Duotune/arr085",className:"svg-icon-2x"})})]})]}):(0,e.jsx)(k.Link,{to:"/libraries/".concat(r.id),children:r.name})}),(0,e.jsxs)("p",{className:"library-item-count-label",children:[r.total," \u4E2A\u56FE\u6807"]})]}),(0,e.jsx)("div",{ref:l,className:"lib-actions-menu",children:(0,e.jsx)(u.Lt,{placement:"bottomRight",overlay:(0,e.jsxs)(u.v2,{className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-4",onClick:T,children:[(0,e.jsx)(u.v2.Item,{className:"px-3",children:"\u91CD\u547D\u540D"},"rename"),(0,e.jsx)(u.v2.Item,{className:"px-3 actions-delete",children:"\u5220\u9664\u56FE\u6807\u5E93"},"delete")]}),children:(0,e.jsx)("a",{className:"dropdown-link",children:(0,e.jsx)(C.ZP,{name:"Duotune/gen053"})})})})]})]})}var U=$,V=n(94184),B=n.n(V);function w(h){var r=(0,a.useRef)(null),s=(0,a.useState)(),l=(0,y.Z)(s,2),o=l[0],g=l[1],I=(0,a.useState)(),Z=(0,y.Z)(I,2),d=Z[0],j=Z[1],m=(0,a.useState)(!1),N=(0,y.Z)(m,2),O=N[0],D=N[1],z=(0,L.V1)(),A=(0,y.Z)(z,1),F=A[0],E=(0,a.useCallback)(function(f){g(f.target.value)},[]),K=(0,a.useCallback)(function(){j(!0)},[]),R=(0,a.useCallback)(function(f){j(!!f.target.value)},[]),T=(0,a.useCallback)(function(){var f;(f=r.current)===null||f===void 0||f.blur(),g(""),j(!1),D(!1)},[]),x=(0,a.useCallback)((0,b.Z)((0,t.Z)().mark(function f(){return(0,t.Z)().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(o){i.next=2;break}return i.abrupt("return");case 2:return i.prev=2,D(!0),i.next=6,F({variables:{name:o}});case 6:return i.next=8,h.onCreated();case 8:return i.prev=8,T(),i.finish(8);case 11:case"end":return i.stop()}},f,null,[[2,,8,11]])})),[o]);return console.log("name",o),(0,e.jsx)(u.Zb,{className:"library-container library-create",children:(0,e.jsxs)("div",{className:B()("library-create-form",{active:d}),children:[(0,e.jsx)(u.II,{ref:r,value:o,onChange:E,className:"library-name-input input-rimless",onFocus:K,onBlur:R,onPressEnter:x,placeholder:"\u8F93\u5165\u56FE\u6807\u5E93\u540D\u79F0"}),(0,e.jsx)(u.yC,{spinning:O,size:"small",children:(0,e.jsxs)("div",{className:"library-action-buttons",children:[(0,e.jsx)("a",{className:"name-editing-cancel",onClick:T,children:(0,e.jsx)(C.ZP,{name:"Duotune/arr088",className:"svg-icon-2x"})}),(0,e.jsx)("a",{className:"name-editing-ok",onClick:d?x:void 0,children:(0,e.jsx)(C.ZP,{name:"Duotune/arr085",className:"svg-icon-2x"})})]})})]})})}var M=w,Q=n(18071);function G(){var h=(0,L.DW)(),r=h.data,s=r===void 0?{libraries:[]}:r,l=h.loading,o=h.refetch,g=(0,a.useCallback)((0,b.Z)((0,t.Z)().mark(function d(){return(0,t.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,o();case 2:case"end":return m.stop()}},d)})),[o]),I=(0,a.useCallback)((0,b.Z)((0,t.Z)().mark(function d(){return(0,t.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,o();case 2:case"end":return m.stop()}},d)})),[o]),Z=s.libraries;return(0,e.jsx)(Q.vs,{header:{title:"\u56FE\u6807\u5E93"},children:(0,e.jsx)("div",{className:"ie-libraries",children:(0,e.jsx)(u.yC,{spinning:l,children:(0,e.jsxs)("div",{className:"library-list-wrapper",children:[(0,e.jsx)(M,{onCreated:g}),Z.map(function(d){return(0,e.jsx)(U,{library:d,onStatusChange:I},d.id)})]})})})})}var _=a.memo(G),W=_}}]);
