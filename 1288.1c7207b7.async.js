(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[1288],{8305:function(I,m,c){"use strict";c.d(m,{HC:function(){return r},zR:function(){return b},Bo:function(){return g},dP:function(){return B},mp:function(){return U},pM:function(){return Z},a$:function(){return $},hT:function(){return N},A6:function(){return z},rq:function(){return k},X4:function(){return J},LV:function(){return V},WE:function(){return Y},rz:function(){return ee}});var a=c(11849),u=c(20310),f=c(49704),M=c(64718),O=c(21919),h,p,D,A,x,P,_,t,C,T,y,v,E,R,d={},j=(0,f.Ps)(h||(h=(0,u.Z)([`
    fragment MenuParts on Menu {
  id
  icon
  name
  path
  type
  index
  component {
    id
    template
  }
  parent {
    id
    path
  }
}
    `]))),e=(0,f.Ps)(p||(p=(0,u.Z)([`
    fragment RouteParts on Route {
  id
  name
  path
  type
  access
  authorized
  hideInBreadcrumb
  redirect
  component {
    id
    template
  }
  breadcrumb {
    id
    template
  }
  icon
  index
  layout {
    pure
  }
  enabled
  parent {
    id
    path
  }
}
    `]))),n=(0,f.Ps)(D||(D=(0,u.Z)([`
    query myApps {
  apps: applications {
    id
    name
    title
    description
  }
}
    `])));function r(s){var l=(0,a.Z)((0,a.Z)({},d),s);return M.a(n,l)}function o(s){var l=_objectSpread(_objectSpread({},d),s);return Apollo.useLazyQuery(n,l)}var i=(0,f.Ps)(A||(A=(0,u.Z)([`
    query app($id: ID!) {
  app: application(id: $id) {
    id
    name
    title
    description
    dependencies {
      id
      name
      value
    }
  }
}
    `])));function b(s){var l=(0,a.Z)((0,a.Z)({},d),s);return M.a(i,l)}function S(s){var l=_objectSpread(_objectSpread({},d),s);return Apollo.useLazyQuery(i,l)}var w=(0,f.Ps)(x||(x=(0,u.Z)([`
    query appWithClientSecret($id: ID!) {
  app: application(id: $id) {
    id
    name
    title
    description
    clientId
    clientSecrets {
      id
      secret
      createdAt
      createdBy
      lastUseTime
    }
  }
}
    `])));function g(s){var l=(0,a.Z)((0,a.Z)({},d),s);return M.a(w,l)}function L(s){var l=_objectSpread(_objectSpread({},d),s);return Apollo.useLazyQuery(w,l)}var B=(0,f.Ps)(P||(P=(0,u.Z)([`
    query loadRoutes($id: ID!) {
  app: application(id: $id) {
    id
    routes {
      ...RouteParts
      application {
        id
      }
    }
  }
}
    `,""])),e);function U(s){var l=(0,a.Z)((0,a.Z)({},d),s);return M.a(B,l)}function W(s){var l=_objectSpread(_objectSpread({},d),s);return Apollo.useLazyQuery(B,l)}var Z=(0,f.Ps)(_||(_=(0,u.Z)([`
    query loadMenus($id: ID!) {
  app: application(id: $id) {
    id
    menus {
      ...MenuParts
      hideInBreadcrumb
      hideChildrenInMenu
      hideInMenu
      authority
    }
  }
}
    `,""])),j);function $(s){var l=(0,a.Z)((0,a.Z)({},d),s);return M.a(Z,l)}function ne(s){var l=_objectSpread(_objectSpread({},d),s);return Apollo.useLazyQuery(Z,l)}var F=(0,f.Ps)(t||(t=(0,u.Z)([`
    mutation createMenu($input: MenuCreateInput!) {
  createMenu(input: $input) {
    ...MenuParts
    hideInBreadcrumb
    hideChildrenInMenu
    hideInMenu
    authority
    application {
      id
    }
    component {
      id
    }
  }
}
    `,""])),j);function N(s){var l=(0,a.Z)((0,a.Z)({},d),s);return O.D(F,l)}var K=(0,f.Ps)(C||(C=(0,u.Z)([`
    mutation updateMenu($id: ID!, $input: MenuUpdateInput!) {
  updateMenu(id: $id, input: $input) {
    ...MenuParts
    hideInBreadcrumb
    hideChildrenInMenu
    hideInMenu
    authority
    application {
      id
    }
    component {
      id
    }
  }
}
    `,""])),j);function z(s){var l=(0,a.Z)((0,a.Z)({},d),s);return O.D(K,l)}var Q=(0,f.Ps)(T||(T=(0,u.Z)([`
    mutation deleteMenu($id: ID!) {
  deleteMenu(id: $id)
}
    `])));function k(s){var l=(0,a.Z)((0,a.Z)({},d),s);return O.D(Q,l)}var H=(0,f.Ps)(y||(y=(0,u.Z)([`
    mutation createRoute($input: RouteCreateInput!) {
  createRoute(input: $input) {
    ...RouteParts
    hideInBreadcrumb
    access
    application {
      id
    }
    component {
      id
    }
  }
}
    `,""])),e);function J(s){var l=(0,a.Z)((0,a.Z)({},d),s);return O.D(H,l)}var X=(0,f.Ps)(v||(v=(0,u.Z)([`
    mutation updateRoute($id: ID!, $input: RouteUpdateInput!) {
  updateRoute(id: $id, input: $input) {
    ...RouteParts
    hideInBreadcrumb
    access
    application {
      id
    }
    component {
      id
    }
  }
}
    `,""])),e);function V(s){var l=(0,a.Z)((0,a.Z)({},d),s);return O.D(X,l)}var G=(0,f.Ps)(E||(E=(0,u.Z)([`
    mutation moveRoute($id: ID!, $parentRoute: ID, $location: Int!) {
  moveRoute(id: $id, parentRoute: $parentRoute, location: $location) {
    ...RouteParts
    hideInBreadcrumb
    access
    application {
      id
    }
    component {
      id
    }
  }
}
    `,""])),e);function Y(s){var l=(0,a.Z)((0,a.Z)({},d),s);return O.D(G,l)}var q=(0,f.Ps)(R||(R=(0,u.Z)([`
    mutation deleteRoute($id: ID!) {
  deleteRoute(id: $id)
}
    `])));function ee(s){var l=(0,a.Z)((0,a.Z)({},d),s);return O.D(q,l)}},61288:function(I,m,c){"use strict";c.r(m);var a=c(2824),u=c(67294),f=c(28865),M=c(94184),O=c.n(M),h=c(30381),p=c.n(h),D=c(74855),A=c.n(D),x=c(8305),P=c(75468),_=c(53704),t=c(85893);function C(y){var v=y.data;return(0,t.jsxs)("li",{className:"client-secret-item p-5 border-bottom border-secondary d-flex flex-row",children:[(0,t.jsxs)("div",{className:"d-flex flex-column w-90px flex-stack",children:[(0,t.jsx)(f.JO,{style:{transform:"rotate(45deg)"},className:"svg-icon-2hx",name:"Bootstrap/key"}),(0,t.jsx)("span",{className:"text-small fw-bold border border-1 text-muted px-3 rounded-pill text-gray-600",children:"\u5BA2\u6237\u7AEF\u5BC6\u94A5"})]}),(0,t.jsxs)("div",{className:"d-flex flex-column ps-4",children:[(0,t.jsx)("span",{className:"text-small text-dark",children:v.secret}),(0,t.jsxs)("span",{children:["\u7531 ",(0,t.jsx)("strong",{children:v.createdBy||"\u7CFB\u7EDF"})," ",p()(v.createdAt).fromNow()," \u6DFB\u52A0"]}),(0,t.jsx)("div",{className:"text-small text-muted",children:v.lastUseTime?(0,t.jsxs)(t.Fragment,{children:[p()(v.lastUseTime).fromNow()," \u4F7F\u7528\u8FC7"]}):"\u4ECE\u672A\u4F7F\u7528\u8FC7"})]})]})}function T(y){var v=y.location.state.app.id,E=(0,u.useRef)(),R=(0,u.useState)(!1),d=(0,a.Z)(R,2),j=d[0],e=d[1],n=(0,x.Bo)({variables:{id:v}}),r=n.data,o=n.loading,i=(0,u.useMemo)(function(){return r==null?void 0:r.app},[r]),b=_.l0.useForm();console.log("data",r,b);var S=(0,u.useCallback)(function(){_.FN.info("\u5BA2\u6237\u7AEFID \u5DF2\u7ECF\u590D\u5236",3e3,{placement:"top-center"}),E.current&&clearTimeout(E.current),e(!0),E.current=setTimeout(function(){e(!1),E.current=null},3e3)},[]);(0,u.useEffect)(function(){return function(){E.current&&clearTimeout(E.current)}},[]);var w=(0,u.useMemo)(function(){return(i==null?void 0:i.clientSecrets)||[]},[i]);return(0,t.jsx)(P.v,{loading:o,children:i&&(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(_.Zb,{className:"mb-5 mb-xl-10",children:[(0,t.jsx)(_.Zb.Header,{children:(0,t.jsx)(_.Zb.Title,{children:"\u5F00\u53D1\u4FE1\u606F"})}),(0,t.jsxs)(_.Zb.Body,{children:[(0,t.jsx)("h3",{className:"fw-bolder mb-5",children:"\u5BA2\u6237\u7AEFID"}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"d-flex align-items-center",children:[i.clientId,(0,t.jsx)(D.CopyToClipboard,{text:i.clientId,onCopy:S,children:(0,t.jsx)(_.u,{title:"\u70B9\u51FB\u590D\u5236\u5BA2\u6237\u7AEFID",children:(0,t.jsx)(f.JO,{className:O()("ms-2 svg-icon-4 cursor-pointer",{"text-success":!j,"text-primary":j}),name:"Bootstrap/clipboard".concat(j?"-check":"")})})})]}),(0,t.jsx)("div",{className:"text-muted fs-7",children:"\u5F53\u524D\u4E5F\u53EF\u4F5C\u4E3A AppId \u4F7F\u7528"})]}),(0,t.jsxs)("div",{className:"py-10",children:[(0,t.jsx)("h3",{className:"fw-bolder mb-5",children:"\u5BA2\u6237\u7AEF\u5BC6\u94A5"}),(0,t.jsx)("ul",{className:"w-800px rounded border border-secondary",children:w.map(function(g){return(0,t.jsx)(C,{data:g},g.id)})})]})]})]})})})}m.default=T},20640:function(I,m,c){"use strict";var a=c(11742),u={"text/plain":"Text","text/html":"Url",default:"Text"},f="Copy to clipboard: #{key}, Enter";function M(h){var p=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return h.replace(/#{\s*key\s*}/g,p)}function O(h,p){var D,A,x,P,_,t,C=!1;p||(p={}),D=p.debug||!1;try{x=a(),P=document.createRange(),_=document.getSelection(),t=document.createElement("span"),t.textContent=h,t.style.all="unset",t.style.position="fixed",t.style.top=0,t.style.clip="rect(0, 0, 0, 0)",t.style.whiteSpace="pre",t.style.webkitUserSelect="text",t.style.MozUserSelect="text",t.style.msUserSelect="text",t.style.userSelect="text",t.addEventListener("copy",function(y){if(y.stopPropagation(),p.format)if(y.preventDefault(),typeof y.clipboardData=="undefined"){D&&console.warn("unable to use e.clipboardData"),D&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var v=u[p.format]||u.default;window.clipboardData.setData(v,h)}else y.clipboardData.clearData(),y.clipboardData.setData(p.format,h);p.onCopy&&(y.preventDefault(),p.onCopy(y.clipboardData))}),document.body.appendChild(t),P.selectNodeContents(t),_.addRange(P);var T=document.execCommand("copy");if(!T)throw new Error("copy command was unsuccessful");C=!0}catch(y){D&&console.error("unable to copy using execCommand: ",y),D&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(p.format||"text",h),p.onCopy&&p.onCopy(window.clipboardData),C=!0}catch(v){D&&console.error("unable to copy using clipboardData: ",v),D&&console.error("falling back to prompt"),A=M("message"in p?p.message:f),window.prompt(A,h)}}finally{_&&(typeof _.removeRange=="function"?_.removeRange(P):_.removeAllRanges()),t&&document.body.removeChild(t),x()}return C}I.exports=O},74300:function(I,m,c){"use strict";function a(e){return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},a(e)}Object.defineProperty(m,"__esModule",{value:!0}),m.CopyToClipboard=void 0;var u=O(c(67294)),f=O(c(20640)),M=["text","onCopy","options","children"];function O(e){return e&&e.__esModule?e:{default:e}}function h(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,o)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?h(Object(r),!0).forEach(function(o){d(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function D(e,n){if(e==null)return{};var r=A(e,n),o,i;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(i=0;i<b.length;i++)o=b[i],!(n.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,o)||(r[o]=e[o]))}return r}function A(e,n){if(e==null)return{};var r={},o=Object.keys(e),i,b;for(b=0;b<o.length;b++)i=o[b],!(n.indexOf(i)>=0)&&(r[i]=e[i]);return r}function x(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function P(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(e,n,r){return n&&P(e.prototype,n),r&&P(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function t(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&C(e,n)}function C(e,n){return C=Object.setPrototypeOf||function(o,i){return o.__proto__=i,o},C(e,n)}function T(e){var n=E();return function(){var o=R(e),i;if(n){var b=R(this).constructor;i=Reflect.construct(o,arguments,b)}else i=o.apply(this,arguments);return y(this,i)}}function y(e,n){if(n&&(a(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},R(e)}function d(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var j=function(e){t(r,e);var n=T(r);function r(){var o;x(this,r);for(var i=arguments.length,b=new Array(i),S=0;S<i;S++)b[S]=arguments[S];return o=n.call.apply(n,[this].concat(b)),d(v(o),"onClick",function(w){var g=o.props,L=g.text,B=g.onCopy,U=g.children,W=g.options,Z=u.default.Children.only(U),$=(0,f.default)(L,W);B&&B(L,$),Z&&Z.props&&typeof Z.props.onClick=="function"&&Z.props.onClick(w)}),o}return _(r,[{key:"render",value:function(){var i=this.props,b=i.text,S=i.onCopy,w=i.options,g=i.children,L=D(i,M),B=u.default.Children.only(g);return u.default.cloneElement(B,p(p({},L),{},{onClick:this.onClick}))}}]),r}(u.default.PureComponent);m.CopyToClipboard=j,d(j,"defaultProps",{onCopy:void 0,options:void 0})},74855:function(I,m,c){"use strict";var a=c(74300),u=a.CopyToClipboard;u.CopyToClipboard=u,I.exports=u},11742:function(I){I.exports=function(){var m=document.getSelection();if(!m.rangeCount)return function(){};for(var c=document.activeElement,a=[],u=0;u<m.rangeCount;u++)a.push(m.getRangeAt(u));switch(c.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":c.blur();break;default:c=null;break}return m.removeAllRanges(),function(){m.type==="Caret"&&m.removeAllRanges(),m.rangeCount||a.forEach(function(f){m.addRange(f)}),c&&c.focus()}}}}]);
