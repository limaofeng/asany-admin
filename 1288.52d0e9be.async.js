(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[1288],{8305:function(M,f,u){"use strict";u.d(f,{HC:function(){return T},zR:function(){return t},Bo:function(){return a},mp:function(){return B},a$:function(){return L},rq:function(){return K}});var l=u(11849),i=u(20310),m=u(49704),D=u(64718),A=u(21919),b,d,h,R,j,O,_,n,C,S,c={},y=(0,m.Ps)(b||(b=(0,i.Z)([`
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
    `]))),P=(0,m.Ps)(d||(d=(0,i.Z)([`
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
    `]))),x=(0,m.Ps)(h||(h=(0,i.Z)([`
    query myApps {
  apps: applications {
    id
    name
    title
    description
  }
}
    `])));function T(s){var p=(0,l.Z)((0,l.Z)({},c),s);return D.a(x,p)}function I(s){var p=_objectSpread(_objectSpread({},c),s);return Apollo.useLazyQuery(x,p)}var e=(0,m.Ps)(R||(R=(0,i.Z)([`
    query app($id: ID!) {
  app: application(id: $id) {
    id
    name
    title
    description
  }
}
    `])));function t(s){var p=(0,l.Z)((0,l.Z)({},c),s);return D.a(e,p)}function r(s){var p=_objectSpread(_objectSpread({},c),s);return Apollo.useLazyQuery(e,p)}var o=(0,m.Ps)(j||(j=(0,i.Z)([`
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
    `])));function a(s){var p=(0,l.Z)((0,l.Z)({},c),s);return D.a(o,p)}function v(s){var p=_objectSpread(_objectSpread({},c),s);return Apollo.useLazyQuery(o,p)}var E=(0,m.Ps)(O||(O=(0,i.Z)([`
    query loadRoutes($id: ID!) {
  app: application(id: $id) {
    id
    routes {
      ...RouteParts
    }
  }
}
    `,""])),P);function B(s){var p=(0,l.Z)((0,l.Z)({},c),s);return D.a(E,p)}function g(s){var p=_objectSpread(_objectSpread({},c),s);return Apollo.useLazyQuery(E,p)}var w=(0,m.Ps)(_||(_=(0,i.Z)([`
    query loadMenus($id: ID!) {
  app: application(id: $id) {
    id
    menus {
      ...MenuParts
    }
  }
}
    `,""])),y);function L(s){var p=(0,l.Z)((0,l.Z)({},c),s);return D.a(w,p)}function W(s){var p=_objectSpread(_objectSpread({},c),s);return Apollo.useLazyQuery(w,p)}var Z=(0,m.Ps)(n||(n=(0,i.Z)([`
    mutation createMenu($input: MenuCreateInput!) {
  createMenu(input: $input) {
    ...MenuParts
  }
}
    `,""])),y);function U(s){var p=_objectSpread(_objectSpread({},c),s);return Apollo.useMutation(Z,p)}var F=(0,m.Ps)(C||(C=(0,i.Z)([`
    mutation updateMenu($id: ID!, $input: MenuUpdateInput!) {
  updateMenu(id: $id, input: $input) {
    ...MenuParts
  }
}
    `,""])),y);function $(s){var p=_objectSpread(_objectSpread({},c),s);return Apollo.useMutation(F,p)}var N=(0,m.Ps)(S||(S=(0,i.Z)([`
    mutation deleteMenu($id: ID!) {
  deleteMenu(id: $id)
}
    `])));function K(s){var p=(0,l.Z)((0,l.Z)({},c),s);return A.D(N,p)}},61288:function(M,f,u){"use strict";u.r(f);var l=u(2824),i=u(67294),m=u(28865),D=u(94184),A=u.n(D),b=u(30381),d=u.n(b),h=u(74855),R=u.n(h),j=u(8305),O=u(75468),_=u(53704),n=u(85893);function C(c){var y=c.data;return(0,n.jsxs)("li",{className:"client-secret-item p-5 border-bottom border-secondary d-flex flex-row",children:[(0,n.jsxs)("div",{className:"d-flex flex-column w-90px flex-stack",children:[(0,n.jsx)(m.JO,{style:{transform:"rotate(45deg)"},className:"svg-icon-2hx",name:"Bootstrap/key"}),(0,n.jsx)("span",{className:"text-small fw-bold border border-1 text-muted px-3 rounded-pill text-gray-600",children:"\u5BA2\u6237\u7AEF\u5BC6\u94A5"})]}),(0,n.jsxs)("div",{className:"d-flex flex-column ps-4",children:[(0,n.jsx)("span",{className:"text-small text-dark",children:y.secret}),(0,n.jsxs)("span",{children:["\u7531 ",(0,n.jsx)("strong",{children:y.createdBy||"\u7CFB\u7EDF"})," ",d()(y.createdAt).fromNow()," \u6DFB\u52A0"]}),(0,n.jsx)("div",{className:"text-small text-muted",children:y.lastUseTime?(0,n.jsxs)(n.Fragment,{children:[d()(y.lastUseTime).fromNow()," \u4F7F\u7528\u8FC7"]}):"\u4ECE\u672A\u4F7F\u7528\u8FC7"})]})]})}function S(c){var y=c.location.state.app.id,P=(0,i.useRef)(),x=(0,i.useState)(!1),T=(0,l.Z)(x,2),I=T[0],e=T[1],t=(0,j.Bo)({variables:{id:y}}),r=t.data,o=t.loading,a=(0,i.useMemo)(function(){return r==null?void 0:r.app},[r]),v=_.l0.useForm();console.log("data",r,v);var E=(0,i.useCallback)(function(){_.FN.info("\u5BA2\u6237\u7AEFID \u5DF2\u7ECF\u590D\u5236",3e3,{placement:"top-center"}),P.current&&clearTimeout(P.current),e(!0),P.current=setTimeout(function(){e(!1),P.current=null},3e3)},[]);(0,i.useEffect)(function(){return function(){P.current&&clearTimeout(P.current)}},[]);var B=(0,i.useMemo)(function(){return(a==null?void 0:a.clientSecrets)||[]},[a]);return(0,n.jsx)(O.v,{loading:o,children:a&&(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(_.Zb,{className:"mb-5 mb-xl-10",children:[(0,n.jsx)(_.Zb.Header,{children:(0,n.jsx)(_.Zb.Title,{children:"\u5F00\u53D1\u4FE1\u606F"})}),(0,n.jsxs)(_.Zb.Body,{children:[(0,n.jsx)("h3",{className:"fw-bolder mb-5",children:"\u5BA2\u6237\u7AEFID"}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"d-flex align-items-center",children:[a.clientId,(0,n.jsx)(h.CopyToClipboard,{text:a.clientId,onCopy:E,children:(0,n.jsx)(_.u,{title:"\u70B9\u51FB\u590D\u5236\u5BA2\u6237\u7AEFID",children:(0,n.jsx)(m.JO,{className:A()("ms-2 svg-icon-4 cursor-pointer",{"text-success":!I,"text-primary":I}),name:"Bootstrap/clipboard".concat(I?"-check":"")})})})]}),(0,n.jsx)("div",{className:"text-muted fs-7",children:"\u5F53\u524D\u4E5F\u53EF\u4F5C\u4E3A AppId \u4F7F\u7528"})]}),(0,n.jsxs)("div",{className:"py-10",children:[(0,n.jsx)("h3",{className:"fw-bolder mb-5",children:"\u5BA2\u6237\u7AEF\u5BC6\u94A5"}),(0,n.jsx)("ul",{className:"w-800px rounded border border-secondary",children:B.map(function(g){return(0,n.jsx)(C,{data:g},g.id)})})]})]})]})})})}f.default=S},20640:function(M,f,u){"use strict";var l=u(11742),i={"text/plain":"Text","text/html":"Url",default:"Text"},m="Copy to clipboard: #{key}, Enter";function D(b){var d=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return b.replace(/#{\s*key\s*}/g,d)}function A(b,d){var h,R,j,O,_,n,C=!1;d||(d={}),h=d.debug||!1;try{j=l(),O=document.createRange(),_=document.getSelection(),n=document.createElement("span"),n.textContent=b,n.style.all="unset",n.style.position="fixed",n.style.top=0,n.style.clip="rect(0, 0, 0, 0)",n.style.whiteSpace="pre",n.style.webkitUserSelect="text",n.style.MozUserSelect="text",n.style.msUserSelect="text",n.style.userSelect="text",n.addEventListener("copy",function(c){if(c.stopPropagation(),d.format)if(c.preventDefault(),typeof c.clipboardData=="undefined"){h&&console.warn("unable to use e.clipboardData"),h&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var y=i[d.format]||i.default;window.clipboardData.setData(y,b)}else c.clipboardData.clearData(),c.clipboardData.setData(d.format,b);d.onCopy&&(c.preventDefault(),d.onCopy(c.clipboardData))}),document.body.appendChild(n),O.selectNodeContents(n),_.addRange(O);var S=document.execCommand("copy");if(!S)throw new Error("copy command was unsuccessful");C=!0}catch(c){h&&console.error("unable to copy using execCommand: ",c),h&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(d.format||"text",b),d.onCopy&&d.onCopy(window.clipboardData),C=!0}catch(y){h&&console.error("unable to copy using clipboardData: ",y),h&&console.error("falling back to prompt"),R=D("message"in d?d.message:m),window.prompt(R,b)}}finally{_&&(typeof _.removeRange=="function"?_.removeRange(O):_.removeAllRanges()),n&&document.body.removeChild(n),j()}return C}M.exports=A},74300:function(M,f,u){"use strict";function l(e){return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(e)}Object.defineProperty(f,"__esModule",{value:!0}),f.CopyToClipboard=void 0;var i=A(u(67294)),m=A(u(20640)),D=["text","onCopy","options","children"];function A(e){return e&&e.__esModule?e:{default:e}}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(o){T(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function h(e,t){if(e==null)return{};var r=R(e,t),o,a;if(Object.getOwnPropertySymbols){var v=Object.getOwnPropertySymbols(e);for(a=0;a<v.length;a++)o=v[a],!(t.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,o)||(r[o]=e[o]))}return r}function R(e,t){if(e==null)return{};var r={},o=Object.keys(e),a,v;for(v=0;v<o.length;v++)a=o[v],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _(e,t,r){return t&&O(e.prototype,t),r&&O(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}function C(e,t){return C=Object.setPrototypeOf||function(o,a){return o.__proto__=a,o},C(e,t)}function S(e){var t=P();return function(){var o=x(e),a;if(t){var v=x(this).constructor;a=Reflect.construct(o,arguments,v)}else a=o.apply(this,arguments);return c(this,a)}}function c(e,t){if(t&&(l(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},x(e)}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var I=function(e){n(r,e);var t=S(r);function r(){var o;j(this,r);for(var a=arguments.length,v=new Array(a),E=0;E<a;E++)v[E]=arguments[E];return o=t.call.apply(t,[this].concat(v)),T(y(o),"onClick",function(B){var g=o.props,w=g.text,L=g.onCopy,W=g.children,Z=g.options,U=i.default.Children.only(W),F=(0,m.default)(w,Z);L&&L(w,F),U&&U.props&&typeof U.props.onClick=="function"&&U.props.onClick(B)}),o}return _(r,[{key:"render",value:function(){var a=this.props,v=a.text,E=a.onCopy,B=a.options,g=a.children,w=h(a,D),L=i.default.Children.only(g);return i.default.cloneElement(L,d(d({},w),{},{onClick:this.onClick}))}}]),r}(i.default.PureComponent);f.CopyToClipboard=I,T(I,"defaultProps",{onCopy:void 0,options:void 0})},74855:function(M,f,u){"use strict";var l=u(74300),i=l.CopyToClipboard;i.CopyToClipboard=i,M.exports=i},11742:function(M){M.exports=function(){var f=document.getSelection();if(!f.rangeCount)return function(){};for(var u=document.activeElement,l=[],i=0;i<f.rangeCount;i++)l.push(f.getRangeAt(i));switch(u.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":u.blur();break;default:u=null;break}return f.removeAllRanges(),function(){f.type==="Caret"&&f.removeAllRanges(),f.rangeCount||l.forEach(function(m){f.addRange(m)}),u&&u.focus()}}}}]);
