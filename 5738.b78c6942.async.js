!(function(){var at=Object.defineProperty,ut=Object.defineProperties;var lt=Object.getOwnPropertyDescriptors;var $e=Object.getOwnPropertySymbols;var Qe=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable;var Xe=(W,K,_)=>K in W?at(W,K,{enumerable:!0,configurable:!0,writable:!0,value:_}):W[K]=_,Fe=(W,K)=>{for(var _ in K||(K={}))Qe.call(K,_)&&Xe(W,_,K[_]);if($e)for(var _ of $e(K))Je.call(K,_)&&Xe(W,_,K[_]);return W},Ze=(W,K)=>ut(W,lt(K));var qe=(W,K)=>{var _={};for(var H in W)Qe.call(W,H)&&K.indexOf(H)<0&&(_[H]=W[H]);if(W!=null&&$e)for(var H of $e(W))K.indexOf(H)<0&&Je.call(W,H)&&(_[H]=W[H]);return _};(self.webpackChunk=self.webpackChunk||[]).push([[5738],{11290:function(){"use strict"},46810:function(W,K,_){"use strict";_.d(K,{nG:function(){return Ae}});var H=_(47930);function X(n){"@babel/helpers - typeof";return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},X(n)}var fe=null;function _e(n,r){return pe(n)||Ee(n,r)||j(n,r)||ae()}function ae(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ee(n,r){var o=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(o!=null){var l=[],s=!0,b=!1,v,w;try{for(o=o.call(n);!(s=(v=o.next()).done)&&(l.push(v.value),!(r&&l.length===r));s=!0);}catch(R){b=!0,w=R}finally{try{!s&&o.return!=null&&o.return()}finally{if(b)throw w}}return l}}function pe(n){if(Array.isArray(n))return n}function se(n,r){var o=typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(!o){if(Array.isArray(n)||(o=j(n))||r&&n&&typeof n.length=="number"){o&&(n=o);var l=0,s=function(){};return{s,n:function(){return l>=n.length?{done:!0}:{done:!1,value:n[l++]}},e:function(D){throw D},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var b=!0,v=!1,w;return{s:function(){o=o.call(n)},n:function(){var D=o.next();return b=D.done,D},e:function(D){v=!0,w=D},f:function(){try{!b&&o.return!=null&&o.return()}finally{if(v)throw w}}}}function ue(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function J(n,r){for(var o=0;o<r.length;o++){var l=r[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}function ve(n,r,o){return r&&J(n.prototype,r),o&&J(n,o),Object.defineProperty(n,"prototype",{writable:!1}),n}function U(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),r&&E(n,r)}function S(n){var r=O();return function(){var l=P(n),s;if(r){var b=P(this).constructor;s=Reflect.construct(l,arguments,b)}else s=l.apply(this,arguments);return M(this,s)}}function M(n,r){if(r&&(X(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(n)}function p(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function g(n){var r=typeof Map=="function"?new Map:void 0;return g=function(l){if(l===null||!$(l))return l;if(typeof l!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r!="undefined"){if(r.has(l))return r.get(l);r.set(l,s)}function s(){return c(l,arguments,P(this).constructor)}return s.prototype=Object.create(l.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),E(s,l)},g(n)}function c(n,r,o){return O()?c=Reflect.construct.bind():c=function(s,b,v){var w=[null];w.push.apply(w,b);var R=Function.bind.apply(s,w),D=new R;return v&&E(D,v.prototype),D},c.apply(null,arguments)}function O(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(n){return!1}}function $(n){return Function.toString.call(n).indexOf("[native code]")!==-1}function E(n,r){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,s){return l.__proto__=s,l},E(n,r)}function P(n){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},P(n)}function T(n){return C(n)||I(n)||j(n)||L()}function L(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(n,r){if(n){if(typeof n=="string")return V(n,r);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return V(n,r)}}function I(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function C(n){if(Array.isArray(n))return V(n)}function V(n,r){(r==null||r>n.length)&&(r=n.length);for(var o=0,l=new Array(r);o<r;o++)l[o]=n[o];return l}function A(n,r){if(n==null)return{};var o=G(n,r),l,s;if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(n);for(s=0;s<b.length;s++)l=b[s],!(r.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(n,l)&&(o[l]=n[l])}return o}function G(n,r){if(n==null)return{};var o={},l=Object.keys(n),s,b;for(b=0;b<l.length;b++)s=l[b],!(r.indexOf(s)>=0)&&(o[s]=n[s]);return o}function Z(n,r){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);r&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),o.push.apply(o,l)}return o}function y(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?Z(Object(o),!0).forEach(function(l){q(n,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Z(Object(o)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(o,l))})}return n}function q(n,r,o){return r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n}var F="routes";function z(n){return n.split("?")[0].split("#")[0]}var ie=function(r){if(!r.startsWith("http"))return!1;try{var o=new URL(r);return!!o}catch(l){return!1}},me=function(r){var o=r.path;if(!o||o==="/")try{return"/".concat(sha265(JSON.stringify(r)))}catch(l){}return o&&z(o)},he=function(r,o){var l=r.name,s=r.locale;return"locale"in r&&s===!1||!l?!1:r.locale||"".concat(o,".").concat(l)},ee=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"/";return r.endsWith("/*")?r.replace("/*","/"):(r||o).startsWith("/")||ie(r)?r:"/".concat(o,"/").concat(r).replace(/\/\//g,"/").replace(/\/\//g,"/")},ge=function(r,o){var l=r.menu,s=l===void 0?{}:l,b=r.indexRoute,v=r.path,w=v===void 0?"":v,R=r.children||[],D=s.name,ne=D===void 0?r.name:D,ce=s.icon,te=ce===void 0?r.icon:ce,Me=s.hideChildren,De=Me===void 0?r.hideChildren:Me,xe=s.flatMenu,Ce=xe===void 0?r.flatMenu:xe,Re=b&&Object.keys(b).join(",")!=="redirect"?[y({path:w,menu:s},b)].concat(R||[]):R,be=y({},r);if(ne&&(be.name=ne),te&&(be.icon=te),Re&&Re.length){if(De)return delete be.children,be;var e=Oe(y(y({},o),{},{data:Re}),r);if(Ce)return e;delete be[F]}return be},le=function(r){return Array.isArray(r)&&r.length>0};function Oe(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{path:"/"},o=n.data,l=n.formatMessage,s=n.parentName,b=n.locale;return!o||!Array.isArray(o)?[]:o.filter(function(v){return v?le(v.children)||v.path||v.originPath||v.layout?!0:(v.redirect||v.unaccessible,!1):!1}).filter(function(v){var w,R;return!(v==null||(w=v.menu)===null||w===void 0)&&w.name||v!=null&&v.flatMenu||!(v==null||(R=v.menu)===null||R===void 0)&&R.flatMenu?!0:v.menu!==!1}).map(function(v){var w=y(y({},v),{},{path:v.path||v.originPath});return!w.children&&w[F]&&(w.children=w[F],delete w[F]),w.unaccessible&&delete w.name,w.path==="*"&&(w.path="."),w.path==="/*"&&(w.path="."),!w.path&&w.originPath&&(w.path=w.originPath),w}).map(function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{path:"/"},w=v.children||v[F]||[],R=ee(v.path,r?r.path:"/"),D=v.name,ne=he(v,s||"menu"),ce=ne!==!1&&b!==!1&&l&&ne?l({id:ne,defaultMessage:D}):D,te=r.pro_layout_parentKeys,Me=te===void 0?[]:te,De=r.children,xe=r.icon,Ce=r.flatMenu,Re=r.indexRoute,be=r.routes,e=A(r,fe),t=new Set([].concat(T(Me),T(v.parentKeys||[])));r.key&&t.add(r.key);var i=y(y(y({},e),{},{menu:void 0},v),{},{path:R,locale:ne,key:v.key||me(y(y({},v),{},{path:R})),pro_layout_parentKeys:Array.from(t).filter(function(u){return u&&u!=="/"})});if(ce?i.name=ce:delete i.name,i.menu===void 0&&delete i.menu,le(w)){var a=Oe(y(y({},n),{},{data:w,parentName:ne||""}),i);le(a)&&(i.children=a)}return ge(i,n)}).flat(1)}var Ne=function n(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return r.filter(function(o){return o&&(o.name||le(o.children))&&!o.hideInMenu&&!o.redirect}).map(function(o){var l=y({},o),s=l.children||o[F]||[];if(delete l[F],le(s)&&!l.hideChildrenInMenu&&s.some(function(v){return v&&!!v.name})){var b=n(s);if(b.length)return y(y({},l),{},{children:b})}return y({},o)}).filter(function(o){return o})},We=null,Se=function(r){var o=new We,l=function s(b,v){b.forEach(function(w){var R=w.children||w[F]||[];le(R)&&s(R,w);var D=ee(w.path,v?v.path:"/");o.set(z(D),w)})};return l(r),o},Be=function n(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return r.map(function(o){var l=o.children||o[F];if(le(l)){var s=n(l);if(s.length)return y({},o)}var b=y({},o);return delete b[F],delete b.children,b}).filter(function(o){return o})},ke=function(r,o,l,s){var b=Oe({data:r,formatMessage:l,locale:o}),v=s?Be(b):Ne(b),w=Se(b);return{breadcrumb:w,menuData:v}},Ge=null;function Ie(n,r){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);r&&(l=l.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),o.push.apply(o,l)}return o}function ye(n){for(var r=1;r<arguments.length;r++){var o=arguments[r]!=null?arguments[r]:{};r%2?Ie(Object(o),!0).forEach(function(l){Te(n,l,o[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):Ie(Object(o)).forEach(function(l){Object.defineProperty(n,l,Object.getOwnPropertyDescriptor(o,l))})}return n}function Te(n,r,o){return r in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,n}var Le=function n(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o={};return r.forEach(function(l){var s=ye({},l);if(!(!s||!s.key)){!s.children&&s[F]&&(s.children=s[F],delete s[F]);var b=s.children||[];o[z(s.path||s.key||"/")]=ye({},s),o[s.key||s.path||"/"]=ye({},s),b&&(o=ye(ye({},o),n(b)))}}),o},He=Le,je=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0,l=arguments.length>2?arguments[2]:void 0;return r.filter(function(s){if(s==="/"&&o==="/")return!0;if(s!=="/"&&s!=="/*"&&s&&!ie(s)){var b=z(s);try{if(l&&(0,H.Bo)("".concat(b)).test(o)||(0,H.Bo)("".concat(b),[]).test(o)||(0,H.Bo)("".concat(b,"/(.*)")).test(o))return!0}catch(v){}}return!1}).sort(function(s,b){return s===o?10:b===o?-10:s.substr(1).split("/").length-b.substr(1).split("/").length})},Ue=function(r,o,l,s){var b=He(o),v=Object.keys(b),w=je(v,r||"/",s);return!w||w.length<1?[]:(l||(w=[w[w.length-1]]),w.map(function(R){var D=b[R]||{pro_layout_parentKeys:"",key:""},ne=new Map,ce=(D.pro_layout_parentKeys||[]).map(function(te){return ne.has(te)?null:(ne.set(te,!0),b[te])}).filter(function(te){return te});return D.key&&ce.push(D),ce}).flat(1))},Ae=Ue},47930:function(W,K){var _;function H(p){"@babel/helpers - typeof";return H=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},H(p)}_={value:!0},K.Bo=_=_=_=_=_=_=void 0;function X(p){for(var g=[],c=0;c<p.length;){var O=p[c];if(O==="*"||O==="+"||O==="?"){g.push({type:"MODIFIER",index:c,value:p[c++]});continue}if(O==="\\"){g.push({type:"ESCAPED_CHAR",index:c++,value:p[c++]});continue}if(O==="{"){g.push({type:"OPEN",index:c,value:p[c++]});continue}if(O==="}"){g.push({type:"CLOSE",index:c,value:p[c++]});continue}if(O===":"){for(var $="",E=c+1;E<p.length;){var P=p.charCodeAt(E);if(P>=48&&P<=57||P>=65&&P<=90||P>=97&&P<=122||P===95){$+=p[E++];continue}break}if(!$)throw new TypeError("Missing parameter name at "+c);g.push({type:"NAME",index:c,value:$}),c=E;continue}if(O==="("){var T=1,L="",E=c+1;if(p[E]==="?")throw new TypeError('Pattern cannot start with "?" at '+E);for(;E<p.length;){if(p[E]==="\\"){L+=p[E++]+p[E++];continue}if(p[E]===")"){if(T--,T===0){E++;break}}else if(p[E]==="("&&(T++,p[E+1]!=="?"))throw new TypeError("Capturing groups are not allowed at "+E);L+=p[E++]}if(T)throw new TypeError("Unbalanced pattern at "+c);if(!L)throw new TypeError("Missing pattern at "+c);g.push({type:"PATTERN",index:c,value:L}),c=E;continue}g.push({type:"CHAR",index:c,value:p[c++]})}return g.push({type:"END",index:c,value:""}),g}function fe(p,g){g===void 0&&(g={});for(var c=X(p),O=g.prefixes,$=O===void 0?"./":O,E="[^"+se(g.delimiter||"/#?")+"]+?",P=[],T=0,L=0,j="",I=function(ee){if(L<c.length&&c[L].type===ee)return c[L++].value},C=function(ee){var ge=I(ee);if(ge!==void 0)return ge;var le=c[L],Oe=le.type,Ne=le.index;throw new TypeError("Unexpected "+Oe+" at "+Ne+", expected "+ee)},V=function(){for(var ee="",ge;ge=I("CHAR")||I("ESCAPED_CHAR");)ee+=ge;return ee};L<c.length;){var A=I("CHAR"),G=I("NAME"),Z=I("PATTERN");if(G||Z){var y=A||"";$.indexOf(y)===-1&&(j+=y,y=""),j&&(P.push(j),j=""),P.push({name:G||T++,prefix:y,suffix:"",pattern:Z||E,modifier:I("MODIFIER")||""});continue}var q=A||I("ESCAPED_CHAR");if(q){j+=q;continue}j&&(P.push(j),j="");var F=I("OPEN");if(F){var y=V(),z=I("NAME")||"",ie=I("PATTERN")||"",me=V();C("CLOSE"),P.push({name:z||(ie?T++:""),pattern:z&&!ie?E:ie,prefix:y,suffix:me,modifier:I("MODIFIER")||""});continue}C("END")}return P}_=fe;function _e(p,g){return ae(fe(p,g),g)}_=_e;function ae(p,g){g===void 0&&(g={});var c=ue(g),O=g.encode,$=O===void 0?function(L){return L}:O,E=g.validate,P=E===void 0?!0:E,T=p.map(function(L){if(H(L)==="object")return new RegExp("^(?:"+L.pattern+")$",c)});return function(L){for(var j="",I=0;I<p.length;I++){var C=p[I];if(typeof C=="string"){j+=C;continue}var V=L?L[C.name]:void 0,A=C.modifier==="?"||C.modifier==="*",G=C.modifier==="*"||C.modifier==="+";if(Array.isArray(V)){if(!G)throw new TypeError('Expected "'+C.name+'" to not repeat, but got an array');if(V.length===0){if(A)continue;throw new TypeError('Expected "'+C.name+'" to not be empty')}for(var Z=0;Z<V.length;Z++){var y=$(V[Z],C);if(P&&!T[I].test(y))throw new TypeError('Expected all "'+C.name+'" to match "'+C.pattern+'", but got "'+y+'"');j+=C.prefix+y+C.suffix}continue}if(typeof V=="string"||typeof V=="number"){var y=$(String(V),C);if(P&&!T[I].test(y))throw new TypeError('Expected "'+C.name+'" to match "'+C.pattern+'", but got "'+y+'"');j+=C.prefix+y+C.suffix;continue}if(!A){var q=G?"an array":"a string";throw new TypeError('Expected "'+C.name+'" to be '+q)}}return j}}_=ae;function Ee(p,g){var c=[],O=M(p,c,g);return pe(O,c,g)}_=Ee;function pe(p,g,c){c===void 0&&(c={});var O=c.decode,$=O===void 0?function(E){return E}:O;return function(E){var P=p.exec(E);if(!P)return!1;for(var T=P[0],L=P.index,j=Object.create(null),I=function(A){if(P[A]===void 0)return"continue";var G=g[A-1];G.modifier==="*"||G.modifier==="+"?j[G.name]=P[A].split(G.prefix+G.suffix).map(function(Z){return $(Z,G)}):j[G.name]=$(P[A],G)},C=1;C<P.length;C++)I(C);return{path:T,index:L,params:j}}}_=pe;function se(p){return p.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ue(p){return p&&p.sensitive?"":"i"}function J(p,g){if(!g)return p;var c=p.source.match(/\((?!\?)/g);if(c)for(var O=0;O<c.length;O++)g.push({name:O,prefix:"",suffix:"",modifier:"",pattern:""});return p}function ve(p,g,c){var O=p.map(function($){return M($,g,c).source});return new RegExp("(?:"+O.join("|")+")",ue(c))}function U(p,g,c){return S(fe(p,c),g,c)}function S(p,g,c){c===void 0&&(c={});for(var O=c.strict,$=O===void 0?!1:O,E=c.start,P=E===void 0?!0:E,T=c.end,L=T===void 0?!0:T,j=c.encode,I=j===void 0?function(he){return he}:j,C="["+se(c.endsWith||"")+"]|$",V="["+se(c.delimiter||"/#?")+"]",A=P?"^":"",G=0,Z=p;G<Z.length;G++){var y=Z[G];if(typeof y=="string")A+=se(I(y));else{var q=se(I(y.prefix)),F=se(I(y.suffix));if(y.pattern)if(g&&g.push(y),q||F)if(y.modifier==="+"||y.modifier==="*"){var z=y.modifier==="*"?"?":"";A+="(?:"+q+"((?:"+y.pattern+")(?:"+F+q+"(?:"+y.pattern+"))*)"+F+")"+z}else A+="(?:"+q+"("+y.pattern+")"+F+")"+y.modifier;else A+="("+y.pattern+")"+y.modifier;else A+="(?:"+q+F+")"+y.modifier}}if(L)$||(A+=V+"?"),A+=c.endsWith?"(?="+C+")":"$";else{var ie=p[p.length-1],me=typeof ie=="string"?V.indexOf(ie[ie.length-1])>-1:ie===void 0;$||(A+="(?:"+V+"(?="+C+"))?"),me||(A+="(?="+V+"|"+C+")")}return new RegExp(A,ue(c))}_=S;function M(p,g,c){return p instanceof RegExp?J(p,g):Array.isArray(p)?ve(p,g,c):U(p,g,c)}K.Bo=M},35005:function(W,K,_){"use strict";var H=_(93967),X=_.n(H),fe=_(62435),_e=_(70861),ae=_(76792),Ee=_(86074);const pe=fe.forwardRef((c,g)=>{var O=c,{as:se,bsPrefix:ue,variant:J="primary",size:ve,active:U=!1,disabled:S=!1,className:M}=O,p=qe(O,["as","bsPrefix","variant","size","active","disabled","className"]);const $=(0,ae.vE)(ue,"btn"),[E,{tagName:P}]=(0,_e.FT)(Fe({tagName:se,disabled:S},p)),T=P;return(0,Ee.jsx)(T,Ze(Fe(Fe({},E),p),{ref:g,disabled:S,className:X()(M,$,U&&"active",J&&`${$}-${J}`,ve&&`${$}-${ve}`,p.href&&S&&"disabled")}))});pe.displayName="Button",K.Z=pe},8330:function(W,K,_){"use strict";_.d(K,{l:function(){return be}});var H=_(86074),X=_(62435);const fe=typeof navigator!="undefined"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function _e(e,t,i,a){e.addEventListener?e.addEventListener(t,i,a):e.attachEvent&&e.attachEvent("on".concat(t),i)}function ae(e,t,i,a){e.removeEventListener?e.removeEventListener(t,i,a):e.detachEvent&&e.detachEvent("on".concat(t),i)}function Ee(e,t){const i=t.slice(0,t.length-1);for(let a=0;a<i.length;a++)i[a]=e[i[a].toLowerCase()];return i}function pe(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let i=t.lastIndexOf("");for(;i>=0;)t[i-1]+=",",t.splice(i,1),i=t.lastIndexOf("");return t}function se(e,t){const i=e.length>=t.length?e:t,a=e.length>=t.length?t:e;let u=!0;for(let f=0;f<i.length;f++)a.indexOf(i[f])===-1&&(u=!1);return u}const ue={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":fe?173:189,"=":fe?61:187,";":fe?59:186,"'":222,"[":219,"]":221,"\\":220},J={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},ve={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},U={16:!1,18:!1,17:!1,91:!1},S={};for(let e=1;e<20;e++)ue["f".concat(e)]=111+e;let M=[],p=null,g="all";const c=new Map,O=e=>ue[e.toLowerCase()]||J[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),$=e=>Object.keys(ue).find(t=>ue[t]===e),E=e=>Object.keys(J).find(t=>J[t]===e);function P(e){g=e||"all"}function T(){return g||"all"}function L(){return M.slice(0)}function j(){return M.map(e=>$(e)||E(e)||String.fromCharCode(e))}function I(){const e=[];return Object.keys(S).forEach(t=>{S[t].forEach(i=>{let{key:a,scope:u,mods:f,shortcut:d}=i;e.push({scope:u,shortcut:d,mods:f,keys:a.split("+").map(m=>O(m))})})}),e}function C(e){const t=e.target||e.srcElement,{tagName:i}=t;let a=!0;const u=i==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(u||i==="TEXTAREA"||i==="SELECT")&&!t.readOnly)&&(a=!1),a}function V(e){return typeof e=="string"&&(e=O(e)),M.indexOf(e)!==-1}function A(e,t){let i,a;e||(e=T());for(const u in S)if(Object.prototype.hasOwnProperty.call(S,u))for(i=S[u],a=0;a<i.length;)i[a].scope===e?i.splice(a,1).forEach(d=>{let{element:m}=d;return me(m)}):a++;T()===e&&P(t||"all")}function G(e){let t=e.keyCode||e.which||e.charCode;const i=M.indexOf(t);if(i>=0&&M.splice(i,1),e.key&&e.key.toLowerCase()==="meta"&&M.splice(0,M.length),(t===93||t===224)&&(t=91),t in U){U[t]=!1;for(const a in J)J[a]===t&&(z[a]=!1)}}function Z(e){if(typeof e=="undefined")Object.keys(S).forEach(u=>{Array.isArray(S[u])&&S[u].forEach(f=>y(f)),delete S[u]}),me(null);else if(Array.isArray(e))e.forEach(u=>{u.key&&y(u)});else if(typeof e=="object")e.key&&y(e);else if(typeof e=="string"){for(var t=arguments.length,i=new Array(t>1?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];let[u,f]=i;typeof u=="function"&&(f=u,u=""),y({key:e,scope:u,method:f,splitKey:"+"})}}const y=e=>{let{key:t,scope:i,method:a,splitKey:u="+"}=e;pe(t).forEach(d=>{const m=d.split(u),x=m.length,B=m[x-1],h=B==="*"?"*":O(B);if(!S[h])return;i||(i=T());const N=x>1?Ee(J,m):[],Y=[];S[h]=S[h].filter(k=>{const we=(a?k.method===a:!0)&&k.scope===i&&se(k.mods,N);return we&&Y.push(k.element),!we}),Y.forEach(k=>me(k))})};function q(e,t,i,a){if(t.element!==a)return;let u;if(t.scope===i||t.scope==="all"){u=t.mods.length>0;for(const f in U)Object.prototype.hasOwnProperty.call(U,f)&&(!U[f]&&t.mods.indexOf(+f)>-1||U[f]&&t.mods.indexOf(+f)===-1)&&(u=!1);(t.mods.length===0&&!U[16]&&!U[18]&&!U[17]&&!U[91]||u||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(M),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function F(e,t){const i=S["*"];let a=e.keyCode||e.which||e.charCode;if(!z.filter.call(this,e))return;if((a===93||a===224)&&(a=91),M.indexOf(a)===-1&&a!==229&&M.push(a),["ctrlKey","altKey","shiftKey","metaKey"].forEach(m=>{const x=ve[m];e[m]&&M.indexOf(x)===-1?M.push(x):!e[m]&&M.indexOf(x)>-1?M.splice(M.indexOf(x),1):m==="metaKey"&&e[m]&&M.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(M=M.slice(M.indexOf(x))))}),a in U){U[a]=!0;for(const m in J)J[m]===a&&(z[m]=!0);if(!i)return}for(const m in U)Object.prototype.hasOwnProperty.call(U,m)&&(U[m]=e[ve[m]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(M.indexOf(17)===-1&&M.push(17),M.indexOf(18)===-1&&M.push(18),U[17]=!0,U[18]=!0);const u=T();if(i)for(let m=0;m<i.length;m++)i[m].scope===u&&(e.type==="keydown"&&i[m].keydown||e.type==="keyup"&&i[m].keyup)&&q(e,i[m],u,t);if(!(a in S))return;const f=S[a],d=f.length;for(let m=0;m<d;m++)if((e.type==="keydown"&&f[m].keydown||e.type==="keyup"&&f[m].keyup)&&f[m].key){const x=f[m],{splitKey:B}=x,h=x.key.split(B),N=[];for(let Y=0;Y<h.length;Y++)N.push(O(h[Y]));N.sort().join("")===M.sort().join("")&&q(e,x,u,t)}}function z(e,t,i){M=[];const a=pe(e);let u=[],f="all",d=document,m=0,x=!1,B=!0,h="+",N=!1,Y=!1;for(i===void 0&&typeof t=="function"&&(i=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(f=t.scope),t.element&&(d=t.element),t.keyup&&(x=t.keyup),t.keydown!==void 0&&(B=t.keydown),t.capture!==void 0&&(N=t.capture),typeof t.splitKey=="string"&&(h=t.splitKey),t.single===!0&&(Y=!0)),typeof t=="string"&&(f=t),Y&&Z(e,f);m<a.length;m++)e=a[m].split(h),u=[],e.length>1&&(u=Ee(J,e)),e=e[e.length-1],e=e==="*"?"*":O(e),e in S||(S[e]=[]),S[e].push({keyup:x,keydown:B,scope:f,mods:u,shortcut:a[m],method:i,key:a[m],splitKey:h,element:d});if(typeof d!="undefined"&&window){if(!c.has(d)){const k=function(){let we=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.event;return F(we,d)},Pe=function(){let we=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.event;F(we,d),G(we)};c.set(d,{keydownListener:k,keyupListenr:Pe,capture:N}),_e(d,"keydown",k,N),_e(d,"keyup",Pe,N)}if(!p){const k=()=>{M=[]};p={listener:k,capture:N},_e(window,"focus",k,N)}}}function ie(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(S).forEach(i=>{S[i].filter(u=>u.scope===t&&u.shortcut===e).forEach(u=>{u&&u.method&&u.method()})})}function me(e){const t=Object.values(S).flat();if(t.findIndex(a=>{let{element:u}=a;return u===e})<0){const{keydownListener:a,keyupListenr:u,capture:f}=c.get(e)||{};a&&u&&(ae(e,"keyup",u,f),ae(e,"keydown",a,f),c.delete(e))}if((t.length<=0||c.size<=0)&&(Object.keys(c).forEach(u=>{const{keydownListener:f,keyupListenr:d,capture:m}=c.get(u)||{};f&&d&&(ae(u,"keyup",d,m),ae(u,"keydown",f,m),c.delete(u))}),c.clear(),Object.keys(S).forEach(u=>delete S[u]),p)){const{listener:u,capture:f}=p;ae(window,"focus",u,f),p=null}}const he={getPressedKeyString:j,setScope:P,getScope:T,deleteScope:A,getPressedKeyCodes:L,getAllKeyCodes:I,isPressed:V,filter:C,trigger:ie,unbind:Z,keyMap:ue,modifier:J,modifierMap:ve};for(const e in he)Object.prototype.hasOwnProperty.call(he,e)&&(z[e]=he[e]);if(typeof window!="undefined"){const e=window.hotkeys;z.noConflict=t=>(t&&window.hotkeys===z&&(window.hotkeys=e),z),window.hotkeys=z}let ee=new Set;function ge(e){function t(){i(window)}function i(h){h&&typeof h.addEventListener=="function"&&(h.addEventListener("click",f,!0),h.addEventListener("mousedown",d,!0),h.addEventListener("mouseover",d,!0),h.addEventListener("mouseup",d,!0),h.addEventListener("pointerdown",m,!0),h.addEventListener("pointerover",x,!0),h.addEventListener("pointerup",B,!0))}function a(){u(window),ee.forEach(h=>{try{u(h.contentWindow)}catch(N){}}),ee=new Set}function u(h){h&&typeof h.removeEventListener=="function"&&(h.removeEventListener("click",f,!0),h.removeEventListener("mousedown",d,!0),h.removeEventListener("mouseover",d,!0),h.removeEventListener("mouseup",d,!0),h.removeEventListener("pointerdown",m,!0),h.removeEventListener("pointerover",x,!0),h.removeEventListener("pointerup",B,!0))}function f(h){var N;h.preventDefault(),h.stopPropagation(),a(),(N=e.onClick)===null||N===void 0||N.call(e,h.target)}function d(h){h.preventDefault(),h.stopPropagation()}function m(h){h.preventDefault(),h.stopPropagation()}function x(h){var N;h.preventDefault(),h.stopPropagation();const Y=h.target;if(Y.tagName==="IFRAME"){const k=Y;try{if(!ee.has(k)){const Pe=k.contentWindow;i(Pe),ee.add(k)}}catch(Pe){}}(N=e.onPointerOver)===null||N===void 0||N.call(e,h.target)}function B(h){h.preventDefault(),h.stopPropagation()}return t(),a}const le=e=>typeof(e==null?void 0:e.type)=="string",Oe=e=>{var t;return typeof((t=e==null?void 0:e.type)===null||t===void 0?void 0:t.$$typeof)=="symbol"},Ne=e=>{var t;return((t=e==null?void 0:e.type)===null||t===void 0?void 0:t.$$typeof)===Symbol.for("react.forward_ref")},We=e=>{const t=Object.keys(e).find(i=>i.startsWith("__reactInternalInstance$")||i.startsWith("__reactFiber$"));if(t)return e[t]},Se=e=>{if(!e)return;const t=We(e);return t||Se(e.parentElement)},Be=e=>{let t=e.return;for(;t;){if(!Oe(t))return t;t=t.return}return null},ke=e=>{const t=e==null?void 0:e.type;if(!t)return;const{displayName:i,name:a}=t;if(typeof i=="string")return i;if(typeof a=="string")return a},Ge=e=>{var t,i;if(!e)return;const a=(t=e._debugSource)!==null&&t!==void 0?t:(i=e._debugOwner)===null||i===void 0?void 0:i._debugSource;if(!a)return;const{fileName:u,lineNumber:f,columnNumber:d}=a;if(u&&f)return{lineNumber:String(f),columnNumber:String(d!=null?d:1),absolutePath:u.match(/^<.*>$/)?u.replace(/^<|>$/g,""):u}},Ie=e=>{if(!(e!=null&&e.pendingProps))return;const{"data-inspector-line":t,"data-inspector-column":i,"data-inspector-relative-path":a}=e.pendingProps;if(t&&i&&a)return{lineNumber:t,columnNumber:i,relativePath:a}},ye=e=>{const t=[Ge(e),Ie(e)].filter(Boolean);if(t.length)return Object.assign({},...t)},Te=e=>{if(!e)return;const t=Be(e);if(!t)return;const i=le(t),a=!t.child.sibling;let u=!i&&a?t:e;const f=u;for(;u;){if(ye(u))return u;u=u.return}return f},Le=e=>{const t=Se(e),i=Te(t);return ye(i)},He=e=>{var t,i;let a=e,u;for(;a;){let f=(t=a.return)!==null&&t!==void 0?t:void 0,d;for(;Oe(f);)Ne(f)&&(d=f),f=(i=f==null?void 0:f.return)!==null&&i!==void 0?i:void 0;if(d&&(a=d),ke(a)&&(u||(u=a),ye(a)))return a;a=f}return u},je=e=>{const t=Se(e),i=Te(t),a=He(i),u=ke(a),f=e.nodeName.toLowerCase(),d=u?`${f} in <${u}>`:f;return{fiber:i,name:u,title:d}};var Ue=_(86318),Ae=_.n(Ue);const n=e=>"codeInfo"in e?e.codeInfo:e,r=e=>{if(!e)return;const t=n(e),{lineNumber:i,columnNumber:a,relativePath:u,absolutePath:f}=t,d=!!u,m=d?u:f;if(!m){console.error("[react-dev-inspector] Cannot open editor without source fileName",t);return}const x={fileName:m,lineNumber:i,colNumber:a},B=d?`${Ae()}/relative`:Ae();fetch(`${B}?${new URLSearchParams(x)}`)},o=(e,t)=>{const i=n(e);if(!i.absolutePath){console.error("[react-dev-inspector] Cannot open editor without source fileName",i);return}const{absolutePath:a,lineNumber:u,columnNumber:f}=i,d=t!=null&&t.insiders?"vscode-insiders":"vscode";window.open(`${d}://file/${a}:${u}:${f}`)},l=e=>o(e,{insiders:!0}),s=e=>{const t=n(e);if(!t.absolutePath){console.error("[react-dev-inspector] Cannot open editor without source fileName",t);return}const{absolutePath:i,lineNumber:a,columnNumber:u}=t;window.open(`webstorm://open?file=${i}&line=${a}&column=${u}`)};var b;const v=typeof window!="undefined"&&(!((b=window==null?void 0:window.document)===null||b===void 0)&&b.createElement)?X.useLayoutEffect:X.useEffect,w=({disable:e})=>{const t=(0,X.useRef)({x:0,y:0}),i=a=>{t.current.x=a.clientX,t.current.y=a.clientY};return(0,X.useEffect)(()=>(e||document.addEventListener("mousemove",i,!0),()=>{document.removeEventListener("mousemove",i,!0)}),[e]),t},R=e=>{const t=(0,X.useRef)(e);t.current=(0,X.useMemo)(()=>e,[e]);const i=(0,X.useRef)();return i.current||(i.current=function(...a){var u;return(u=t.current)===null||u===void 0?void 0:u.apply(this,a)}),i.current};function D(e){return e.getBoundingClientRect()}function ne(e){const t=window.getComputedStyle(e);return{borderLeft:Number.parseInt(t.borderLeftWidth,10),borderRight:Number.parseInt(t.borderRightWidth,10),borderTop:Number.parseInt(t.borderTopWidth,10),borderBottom:Number.parseInt(t.borderBottomWidth,10),marginLeft:Number.parseInt(t.marginLeft,10),marginRight:Number.parseInt(t.marginRight,10),marginTop:Number.parseInt(t.marginTop,10),marginBottom:Number.parseInt(t.marginBottom,10),paddingLeft:Number.parseInt(t.paddingLeft,10),paddingRight:Number.parseInt(t.paddingRight,10),paddingTop:Number.parseInt(t.paddingTop,10),paddingBottom:Number.parseInt(t.paddingBottom,10)}}class ce{constructor(t,i){Object.defineProperty(this,"node",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"border",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"padding",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"content",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.node=t.createElement("div"),this.border=t.createElement("div"),this.padding=t.createElement("div"),this.content=t.createElement("div"),this.border.style.borderColor=Ce.border,this.padding.style.borderColor=Ce.padding,this.content.style.backgroundColor=Ce.background,Object.assign(this.node.style,{borderColor:Ce.margin,pointerEvents:"none",position:"fixed"}),this.node.style.zIndex="10000000",this.node.appendChild(this.border),this.border.appendChild(this.padding),this.padding.appendChild(this.content),i.prepend(this.node)}remove(){this.node.parentNode&&this.node.parentNode.removeChild(this.node)}update(t,i){xe(i,"margin",this.node),xe(i,"border",this.border),xe(i,"padding",this.padding),Object.assign(this.content.style,{height:`${t.height-i.borderTop-i.borderBottom-i.paddingTop-i.paddingBottom}px`,width:`${t.width-i.borderLeft-i.borderRight-i.paddingLeft-i.paddingRight}px`}),Object.assign(this.node.style,{top:`${t.top-i.marginTop}px`,left:`${t.left-i.marginLeft}px`})}}class te{constructor(t,i){Object.defineProperty(this,"tip",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"nameSpan",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"titleDiv",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"infoDiv",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"dimSpan",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.tip=t.createElement("div"),Object.assign(this.tip.style,{display:"flex",flexFlow:"row nowrap",alignItems:"center",backgroundColor:"#333740",borderRadius:"2px",fontFamily:'"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',fontWeight:"bold",padding:"6px 8px",pointerEvents:"none",position:"fixed",fontSize:"12px",whiteSpace:"nowrap"}),this.nameSpan=t.createElement("span"),this.tip.appendChild(this.nameSpan),Object.assign(this.nameSpan.style,{display:"flex",flexDirection:"column",borderRight:"1px solid #aaaaaa",paddingRight:"0.8rem",marginRight:"0.8rem"}),this.titleDiv=t.createElement("div"),this.nameSpan.appendChild(this.titleDiv),Object.assign(this.titleDiv.style,{color:"#ee78e6",fontSize:"16px"}),this.infoDiv=t.createElement("div"),this.nameSpan.appendChild(this.infoDiv),Object.assign(this.infoDiv.style,{color:"#ee78e6",fontSize:"14px"}),this.dimSpan=t.createElement("span"),this.tip.appendChild(this.dimSpan),Object.assign(this.dimSpan.style,{color:"#d7d7d7"}),this.tip.style.zIndex="10000000",i.appendChild(this.tip)}remove(){this.tip.parentNode&&this.tip.parentNode.removeChild(this.tip)}updateText(t,i,a,u){this.titleDiv.textContent=t,this.infoDiv.textContent=i!=null?i:"",this.dimSpan.textContent=`${Math.round(a)}px \xD7 ${Math.round(u)}px`}updatePosition(t,i){const a=this.tip.getBoundingClientRect(),u=De(t,i,{width:a.width,height:a.height});Object.assign(this.tip.style,u.style)}}class Me{constructor(){Object.defineProperty(this,"window",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"tipBoundsWindow",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"container",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"tip",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rects",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"removeCallback",{enumerable:!0,configurable:!0,writable:!0,value:void 0});const t=window.__REACT_DEVTOOLS_TARGET_WINDOW__||window;this.window=t;const i=window.__REACT_DEVTOOLS_TARGET_WINDOW__||window;this.tipBoundsWindow=i;const a=t.document;this.container=a.createElement("div"),this.container.style.zIndex="10000000",this.tip=new te(a,this.container),this.rects=[],this.removeCallback=()=>{},a.body.appendChild(this.container)}remove(){this.tip.remove(),this.rects.forEach(t=>{t.remove()}),this.rects.length=0,this.container.parentNode&&this.container.parentNode.removeChild(this.container),this.removeCallback()}setRemoveCallback(t){this.removeCallback=t.bind(this)}inspect(t,i,a){var u;const f=t.filter(x=>x.nodeType===Node.ELEMENT_NODE);for(;this.rects.length>f.length;){const x=this.rects.pop();x==null||x.remove()}if(f.length===0)return;for(;this.rects.length<f.length;)this.rects.push(new ce(this.window.document,this.container));const d={top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,left:Number.POSITIVE_INFINITY};if(f.forEach((x,B)=>{const h=D(x,this.window),N=ne(x);d.top=Math.min(d.top,h.top-N.marginTop),d.right=Math.max(d.right,h.left+h.width+N.marginRight),d.bottom=Math.max(d.bottom,h.top+h.height+N.marginBottom),d.left=Math.min(d.left,h.left-N.marginLeft),this.rects[B].update(h,N)}),!i){i=f[0].nodeName.toLowerCase();const x=f[0],B=(u=x.ownerDocument.defaultView)===null||u===void 0?void 0:u.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(B!=null&&B.rendererInterfaces){let h=null;for(const N of B.rendererInterfaces.values()){const Y=N.getFiberIDForNative(x,!0);if(Y!==null){h=N.getDisplayNameForFiberID(Y,!0);break}}h&&(i+=` (in ${h})`)}}this.tip.updateText(i,a,d.right-d.left,d.bottom-d.top);const m=D(this.tipBoundsWindow.document.documentElement,this.window);this.tip.updatePosition({top:d.top,left:d.left,height:d.bottom-d.top,width:d.right-d.left},{top:m.top+this.tipBoundsWindow.scrollY,left:m.left+this.tipBoundsWindow.scrollX,height:this.tipBoundsWindow.innerHeight,width:this.tipBoundsWindow.innerWidth})}}function De(e,t,i){const a=Math.max(i.height,20),u=Math.max(i.width,60),f=5;let d;e.top+e.height+a<=t.top+t.height?e.top+e.height<t.top+0?d=t.top+f:d=e.top+e.height+f:e.top-a<=t.top+t.height?e.top-a-f<t.top+f?d=t.top+f:d=e.top-a-f:d=t.top+t.height-a-f;let m=e.left+f;return e.left<t.left&&(m=t.left+f),e.left+u>t.left+t.width&&(m=t.left+t.width-u-f),{style:{top:`${d}px`,left:`${m}px`}}}function xe(e,t,i){Object.assign(i.style,{borderTopWidth:`${e[`${t}Top`]}px`,borderLeftWidth:`${e[`${t}Left`]}px`,borderRightWidth:`${e[`${t}Right`]}px`,borderBottomWidth:`${e[`${t}Bottom`]}px`,borderStyle:"solid"})}const Ce={background:"rgba(120, 170, 210, 0.7)",padding:"rgba(77, 200, 0, 0.3)",margin:"rgba(255, 155, 0, 0.3)",border:"rgba(255, 200, 50, 0.3)"},Re=()=>{var e;return!((e=navigator.platform)===null||e===void 0)&&e.startsWith("Mac")?["Ctrl","Shift","Command","C"]:["Ctrl","Shift","Alt","C"]},be=e=>{const{keys:t,onHoverElement:i,onClickElement:a,onInspectElement:u,active:f,onActiveChange:d,disableLaunchEditor:m,disable:x=!0,children:B}=e,[h,N]=(0,X.useState)(f!=null?f:!1);v(()=>{f!==void 0&&N(f)},[f]),(0,X.useEffect)(()=>(h?et():ze(),ze),[h]);const Y=t===null?null:(t!=null?t:[]).join("+"),k=(0,X.useRef)(),Pe=w({disable:x}),we=R(()=>{d==null||d(!0),f===void 0&&N(!0)}),Ke=R(()=>{d==null||d(!1),f===void 0&&N(!1)}),et=R(()=>{if(k.current||x)return;const Q=new Me;k.current=Q,z("esc",Ke);const re=ge({onPointerOver:Ye,onClick:tt});Q.setRemoveCallback(re);const de=Pe.current,oe=document.elementFromPoint(de.x,de.y);oe&&Ye(oe)}),ze=R(()=>{var Q;(Q=k.current)===null||Q===void 0||Q.remove(),k.current=void 0,z.unbind("esc",Ke)}),Ye=R(Q=>{var re;const de=k.current,oe=Le(Q),Ve=oe==null?void 0:oe.relativePath,nt=oe==null?void 0:oe.absolutePath,{fiber:rt,name:it,title:ot}=je(Q);(re=de==null?void 0:de.inspect)===null||re===void 0||re.call(de,[Q],ot,Ve!=null?Ve:nt),i==null||i({element:Q,fiber:rt,codeInfo:oe,name:it})}),tt=R(Q=>{Ke();const re=Le(Q),{fiber:de,name:oe}=je(Q);a==null||a({element:Q,fiber:de,codeInfo:re,name:oe}),de&&re&&(u==null||u({element:Q,fiber:de,codeInfo:re,name:oe}),!u&&!m&&r(re))});return(0,X.useEffect)(()=>{const Q=()=>{k.current?Ke():we()},re=Y===null||x?null:Y||Re().join("+");if(re)return z(re,Q),()=>{z.unbind(re,Q)}},[Y,x]),(0,H.jsx)(H.Fragment,{children:B!=null?B:null})}},86318:function(W){"use strict";W.exports="/__open-stack-frame-in-editor"}}]);
}());