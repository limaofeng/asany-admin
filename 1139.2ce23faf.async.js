"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1139],{17190:function(D,o,a){a.r(o),a.d(o,{default:function(){return K}});var j=a(97857),C=a.n(j),B=a(15009),x=a.n(B),c=a(99289),d=a.n(c),g=a(13769),p=a.n(g),E=a(62435),O=a(12845),U=a(38018),P=a(10185),s=a(2721),u=a(86074),$=["q"];function Q(r){var e,t,n=r.hooks,i=r.columns,l=(0,O.useLocation)(),m=(0,O.useNavigate)(),F=(0,E.useMemo)(function(){var y=l.query,N=y.q,w=p()(y,$);return N&&(w.filter={name_contains:N}),w},[l]),b=n.query({fetchPolicy:"cache-and-network",variables:F}),A=b.data,f=b.loading,G=b.previousData,v=A,h=G,I=(0,E.useMemo)(function(){return f?(h==null?void 0:h.total.totalCount)||0:(v==null?void 0:v.total.totalCount)||0},[v==null?void 0:v.total.totalCount,f,h==null?void 0:h.total]),H=(0,E.useMemo)(function(){return f?(h==null?void 0:h.connection)||{total:0,current:1}:(v==null?void 0:v.connection)||{total:0,current:1}},[v==null?void 0:v.connection,f,h==null?void 0:h.connection]),X=(0,E.useMemo)(function(){if(f){var y;return((h==null||(y=h.connection)===null||y===void 0?void 0:y.edges)||[]).map(function(N){return N.node})}return((v==null?void 0:v.connection.edges)||[]).map(function(N){return N.node})},[v==null?void 0:v.connection,f,h==null?void 0:h.connection]),Z=(0,E.useCallback)(function(y){m(l.pathname+"?"+U.stringify({q:y}),{replace:!0})},[m,l.pathname]),R=(0,E.useCallback)(function(y,N,w){var M,V={};if((M=F.filter)!==null&&M!==void 0&&M.name_contains){var S;V.q=(S=F.filter)===null||S===void 0?void 0:S.name_contains}w&&(V.orderBy=w.field+"_"+(w.order==="ascend"?"asc":"desc")),V.page=y==null?void 0:y.current,m(l.pathname+"?"+U.stringify(V),{replace:!0})},[m,l.pathname,(e=F.filter)===null||e===void 0?void 0:e.name_contains]),L=(0,E.useCallback)(function(y){return d()(x()().mark(function N(){var w,M;return x()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return w="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(y.length," \u4E2A\u95E8\u5E97\u5417\uFF1F"),S.next=3,s.Modal.confirm({title:"\u786E\u5B9A\u5220\u9664",content:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{className:"tip-confirm",children:w}),(0,u.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]}),okClassName:"btn-danger",okText:"\u5220\u9664"});case 3:if(M=S.sent,M.isConfirmed){S.next=6;break}return S.abrupt("return");case 6:s.Toast.success("\u95E8\u5E97\u6279\u91CF\u5220\u9664\u6210\u529F",2e3,{placement:"bottom-left",progressBar:!0});case 7:case"end":return S.stop()}},N)}))},[]),T=(0,E.useMemo)(function(){return function(y){return(0,u.jsx)("div",{children:(0,u.jsx)(s.Button,{color:"success",onClick:L(y),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},[L]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"d-flex flex-wrap flex-stack pb-7",children:[(0,u.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[(0,u.jsxs)("h3",{className:"fw-bolder me-5",children:["\u95E8\u5E97 (",I,")"]}),(0,u.jsx)(s.Input.Search,{onSearch:Z,defaultValue:(t=F.filter)===null||t===void 0?void 0:t.name_contains,placeholder:"\u641C\u7D22",className:"border-body bg-body w-250px"})]}),(0,u.jsx)(P.ZX,{children:(0,u.jsx)("div",{className:"d-flex my-0",children:(0,u.jsx)(s.Button,{as:O.Link,to:"/website/landing/stores/new",children:"\u65B0\u589E\u95E8\u5E97"})})})]}),!I&&!f?(0,u.jsx)(s.Card,{className:"mb-5 mb-xl-10",children:(0,u.jsx)(s.Empty,{title:"\u8FD8\u6CA1\u6709\u95E8\u5E97",description:"\u9A6C\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u95E8\u5E97\u8BD5\u8BD5",image:"/assets/media/illustrations/sigma-1/4.png",children:(0,u.jsx)(s.Button,{as:O.Link,variant:"primary",to:"/website/landing/stores/new",children:"\u65B0\u589E\u95E8\u5E97"})})}):(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(s.Card,{className:"mb-5 mb-xl-10",children:(0,u.jsx)(s.Card.Body,{children:(0,u.jsx)(s.BlockUI,{overlayClassName:"bg-white bg-opacity-25",loading:f,children:(0,u.jsx)(s.Table,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(N){return(0,u.jsxs)(u.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,u.jsx)("span",{className:"mx-2",children:N}),"\u4E2A\u95E8\u5E97"]})},toolbar:T},noRowsRenderer:function(){return(0,u.jsx)(s.Empty,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:i,pagination:H,onChange:R,dataSource:X})})})})})]})}var J=Q,W=a(73588);function z(r){return console.log(r),(0,u.jsx)(W.vs,{className:"page-organization-settings-permissions",footer:!1,children:(0,u.jsx)(J,C()(C()({},r),{},{hooks:{query:usePermissionsConnectionQuery},columns:[{key:"id",title:"\u7F16\u7801",sorter:!0,width:"20%"},{key:"name",title:"\u540D\u79F0",sorter:!0,width:"30%"},{key:"description",title:"\u63CF\u8FF0"}]}))})}var K=z},38018:function(D,o,a){var j=a(5574).default,C=a(64599).default,B=a(52677).default,x=a(19632).default,c=a(62072),d=a(44020),g=a(13615),p=a(92806),E=function(e){return e==null};function O(r){switch(r.arrayFormat){case"index":return function(e){return function(t,n){var i=t.length;return n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[].concat(x(t),[[s(e,r),"[",i,"]"].join("")]):[].concat(x(t),[[s(e,r),"[",s(i,r),"]=",s(n,r)].join("")])}};case"bracket":return function(e){return function(t,n){return n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[].concat(x(t),[[s(e,r),"[]"].join("")]):[].concat(x(t),[[s(e,r),"[]=",s(n,r)].join("")])}};case"comma":case"separator":return function(e){return function(t,n){return n==null||n.length===0?t:t.length===0?[[s(e,r),"=",s(n,r)].join("")]:[[t,s(n,r)].join(r.arrayFormatSeparator)]}};default:return function(e){return function(t,n){return n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[].concat(x(t),[s(e,r)]):[].concat(x(t),[[s(e,r),"=",s(n,r)].join("")])}}}}function U(r){var e;switch(r.arrayFormat){case"index":return function(t,n,i){if(e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!e){i[t]=n;return}i[t]===void 0&&(i[t]={}),i[t][e[1]]=n};case"bracket":return function(t,n,i){if(e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),!e){i[t]=n;return}if(i[t]===void 0){i[t]=[n];return}i[t]=[].concat(i[t],n)};case"comma":case"separator":return function(t,n,i){var l=typeof n=="string"&&n.includes(r.arrayFormatSeparator),m=typeof n=="string"&&!l&&u(n,r).includes(r.arrayFormatSeparator);n=m?u(n,r):n;var F=l||m?n.split(r.arrayFormatSeparator).map(function(b){return u(b,r)}):n===null?n:u(n,r);i[t]=F};default:return function(t,n,i){if(i[t]===void 0){i[t]=n;return}i[t]=[].concat(i[t],n)}}}function P(r){if(typeof r!="string"||r.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function s(r,e){return e.encode?e.strict?c(r):encodeURIComponent(r):r}function u(r,e){return e.decode?d(r):r}function $(r){return Array.isArray(r)?r.sort():B(r)==="object"?$(Object.keys(r)).sort(function(e,t){return Number(e)-Number(t)}).map(function(e){return r[e]}):r}function Q(r){var e=r.indexOf("#");return e!==-1&&(r=r.slice(0,e)),r}function J(r){var e="",t=r.indexOf("#");return t!==-1&&(e=r.slice(t)),e}function W(r){r=Q(r);var e=r.indexOf("?");return e===-1?"":r.slice(e+1)}function z(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&typeof r=="string"&&r.trim()!==""?r=Number(r):e.parseBooleans&&r!==null&&(r.toLowerCase()==="true"||r.toLowerCase()==="false")&&(r=r.toLowerCase()==="true"),r}function K(r,e){e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e),P(e.arrayFormatSeparator);var t=U(e),n=Object.create(null);if(typeof r!="string"||(r=r.trim().replace(/^[?#&]/,""),!r))return n;var i=C(r.split("&")),l;try{for(i.s();!(l=i.n()).done;){var m=l.value;if(m!==""){var F=g(e.decode?m.replace(/\+/g," "):m,"="),b=j(F,2),A=b[0],f=b[1];f=f===void 0?null:["comma","separator"].includes(e.arrayFormat)?f:u(f,e),t(u(A,e),f,n)}}}catch(R){i.e(R)}finally{i.f()}for(var G=0,v=Object.keys(n);G<v.length;G++){var h=v[G],I=n[h];if(B(I)==="object"&&I!==null)for(var H=0,X=Object.keys(I);H<X.length;H++){var Z=X[H];I[Z]=z(I[Z],e)}else n[h]=z(I,e)}return e.sort===!1?n:(e.sort===!0?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce(function(R,L){var T=n[L];return T&&B(T)==="object"&&!Array.isArray(T)?R[L]=$(T):R[L]=T,R},Object.create(null))}o.extract=W,o.parse=K,o.stringify=function(r,e){if(!r)return"";e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e),P(e.arrayFormatSeparator);for(var t=function(f){return e.skipNull&&E(r[f])||e.skipEmptyString&&r[f]===""},n=O(e),i={},l=0,m=Object.keys(r);l<m.length;l++){var F=m[l];t(F)||(i[F]=r[F])}var b=Object.keys(i);return e.sort!==!1&&b.sort(e.sort),b.map(function(A){var f=r[A];return f===void 0?"":f===null?s(A,e):Array.isArray(f)?f.reduce(n(A),[]).join("&"):s(A,e)+"="+s(f,e)}).filter(function(A){return A.length>0}).join("&")},o.parseUrl=function(r,e){e=Object.assign({decode:!0},e);var t=g(r,"#"),n=j(t,2),i=n[0],l=n[1];return Object.assign({url:i.split("?")[0]||"",query:K(W(r),e)},e&&e.parseFragmentIdentifier&&l?{fragmentIdentifier:u(l,e)}:{})},o.stringifyUrl=function(r,e){e=Object.assign({encode:!0,strict:!0},e);var t=Q(r.url).split("?")[0]||"",n=o.extract(r.url),i=o.parse(n,{sort:!1}),l=Object.assign(i,r.query),m=o.stringify(l,e);m&&(m="?".concat(m));var F=J(r.url);return r.fragmentIdentifier&&(F="#".concat(s(r.fragmentIdentifier,e))),"".concat(t).concat(m).concat(F)},o.pick=function(r,e,t){t=Object.assign({parseFragmentIdentifier:!0},t);var n=o.parseUrl(r,t),i=n.url,l=n.query,m=n.fragmentIdentifier;return o.stringifyUrl({url:i,query:p(l,e),fragmentIdentifier:m},t)},o.exclude=function(r,e,t){var n=Array.isArray(e)?function(i){return!e.includes(i)}:function(i,l){return!e(i,l)};return o.pick(r,n,t)}},13615:function(D){D.exports=function(o,a){if(!(typeof o=="string"&&typeof a=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(a==="")return[o];var j=o.indexOf(a);return j===-1?[o]:[o.slice(0,j),o.slice(j+a.length)]}},62072:function(D){D.exports=function(o){return encodeURIComponent(o).replace(/[!'()*]/g,function(a){return"%".concat(a.charCodeAt(0).toString(16).toUpperCase())})}},44020:function(D){var o="%[a-f0-9]{2}",a=new RegExp("("+o+")|([^%]+?)","gi"),j=new RegExp("("+o+")+","gi");function C(c,d){try{return[decodeURIComponent(c.join(""))]}catch(E){}if(c.length===1)return c;d=d||1;var g=c.slice(0,d),p=c.slice(d);return Array.prototype.concat.call([],C(g),C(p))}function B(c){try{return decodeURIComponent(c)}catch(p){for(var d=c.match(a)||[],g=1;g<d.length;g++)c=C(d,g).join(""),d=c.match(a)||[];return c}}function x(c){for(var d={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},g=j.exec(c);g;){try{d[g[0]]=decodeURIComponent(g[0])}catch(P){var p=B(g[0]);p!==g[0]&&(d[g[0]]=p)}g=j.exec(c)}d["%C2"]="\uFFFD";for(var E=Object.keys(d),O=0;O<E.length;O++){var U=E[O];c=c.replace(new RegExp(U,"g"),d[U])}return c}D.exports=function(c){if(typeof c!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof c+"`");try{return c=c.replace(/\+/g," "),decodeURIComponent(c)}catch(d){return x(c)}}},92806:function(D){D.exports=function(o,a){for(var j={},C=Object.keys(o),B=Array.isArray(a),x=0;x<C.length;x++){var c=C[x],d=o[c];(B?a.indexOf(c)!==-1:a(c,d,o))&&(j[c]=d)}return j}}}]);