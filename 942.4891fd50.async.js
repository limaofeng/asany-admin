"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[942],{30942:function(w,i,s){s.r(i),s.d(i,{default:function(){return u}});var b=s(97857),S=s.n(b),F=s(62435),j=s(35090),c=s(15009),d=s.n(c),g=s(99289),O=s.n(g),T=s(5574),A=s.n(T),L=s(96974),R=s(12845),m=s(38018),C=s(35908),p=s(2721),a=s(86074);function J(){var f=(0,F.useState)(!1),o=A()(f,2),x=o[0],v=o[1],h=(0,R.useModel)("@@initialState"),B=h.refresh,D=p.Form.useForm(),Q=(0,L.TH)(),E=(0,L.s0)(),M=(0,C.f0)(),V=M.loginWithUsername;(0,F.useEffect)(function(){var I=localStorage.getItem("remember");if(!I)return function(){};var U=I.split("###"),N=A()(U,2),W=N[0],P=N[1];D.setFieldsValue({username:W,password:P})},[]);var G=(0,F.useCallback)(function(){var I=O()(d()().mark(function U(N){var W,P;return d()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return v(!0),y.prev=1,y.next=4,V(N.username,N.password);case 4:return y.next=6,p.Modal.success({content:"\u767B\u5F55\u6210\u529F!",okText:"\u77E5\u9053\u4E86",timer:1600,timerProgressBar:!0});case 6:return y.next=8,B();case 8:return W=m.parse(Q.search),y.next=11,(0,j._v)(120);case 11:localStorage.setItem("remember",N.username+"###"+N.password),E(W.redirect||"/",{replace:!0}),y.next=20;break;case 15:return y.prev=15,y.t0=y.catch(1),P=y.t0.graphQLErrors,y.next=20,p.Modal.error({content:"\u51FA\u9519\u4E86: "+P?P[0].message:0,okText:"\u77E5\u9053\u4E86"});case 20:return y.prev=20,v(!1),y.finish(20);case 23:case"end":return y.stop()}},U,null,[[1,15,20,23]])}));return function(U){return I.apply(this,arguments)}}(),[B,V]);return(0,a.jsxs)(p.Form,{className:"w-100",onFinish:G,form:D,autoComplete:"off",children:[(0,a.jsx)("div",{className:"text-center mb-10",children:(0,a.jsx)("h1",{className:"text-dark mb-3",children:"\u767B\u5F55"})}),(0,a.jsx)(p.Form.Item,{name:"username",className:"mb-10",labelClassName:"fs-6 fw-bolder text-dark",label:"\u8D26\u53F7",children:(0,a.jsx)(p.Input,{size:"lg",solid:!0})}),(0,a.jsx)(p.Form.Item,{name:"password",className:"mb-10",labelClassName:"fs-6 fw-bolder text-dark",label:"\u5BC6\u7801",children:(0,a.jsx)(p.Input.Password,{size:"lg",solid:!0})}),(0,a.jsx)("div",{className:"text-center",children:(0,a.jsx)(p.Button,{htmlType:"submit",size:"lg",loading:x,full:!0,className:"w-100 mb-5",children:x?"\u767B\u5F55\u4E2D...":"\u767B\u5F55"})})]})}var $=J;function z(f){var o=f.title,x=f.children,v=f.logo;return(0,F.useEffect)(function(){var h=document.documentElement.getAttribute("data-bs-theme");return h==="dark"?document.body.style.backgroundImage="url('/assets/media/auth/bg4-dark.jpg')":document.body.style.backgroundImage="url('/assets/media/auth/bg4.jpg')",function(){document.body.style.backgroundImage=""}},[]),(0,a.jsx)("div",{className:"d-flex flex-column flex-root",children:(0,a.jsxs)("div",{className:"d-flex flex-column flex-column-fluid flex-lg-row",children:[(0,a.jsx)("div",{className:"d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10",children:(0,a.jsxs)("div",{className:"d-flex flex-center flex-lg-start flex-column",children:[(0,a.jsx)("a",{className:"mb-7",children:(0,a.jsx)("img",{alt:"Logo",src:v})}),(0,a.jsx)("h2",{className:"text-white fw-normal m-0",children:o})]})}),(0,a.jsx)("div",{className:"d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20",children:(0,a.jsxs)("div",{className:"bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20",children:[(0,a.jsx)("div",{className:"d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20",children:x}),(0,a.jsx)("div",{className:"d-flex flex-stack px-lg-10",children:(0,a.jsx)("div",{className:"me-0"})})]})})]})})}var H=z;function r(f){var o=f.title,x=f.children;return(0,F.useEffect)(function(){var v=document.documentElement.getAttribute("data-bs-theme");return v==="dark"?document.body.style.backgroundImage="url('/assets/media/auth/bg10-dark.jpeg')":document.body.style.backgroundImage="url('/assets/media/auth/bg10.jpeg')",function(){document.body.style.backgroundImage=""}},[]),(0,a.jsx)("div",{className:"d-flex flex-column flex-root",children:(0,a.jsxs)("div",{className:"d-flex flex-column flex-lg-row flex-column-fluid",children:[(0,a.jsx)("div",{className:"d-flex flex-lg-row-fluid",children:(0,a.jsxs)("div",{className:"d-flex flex-column flex-center pb-0 pb-lg-10 p-10 w-100",children:[(0,a.jsx)("img",{className:"theme-light-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20",src:"assets/media/auth/agency.png",alt:""}),(0,a.jsx)("img",{className:"theme-dark-show mx-auto mw-100 w-150px w-lg-300px mb-10 mb-lg-20",src:"assets/media/auth/agency-dark.png",alt:""}),(0,a.jsx)("h1",{className:"text-gray-800 fs-2qx fw-bold text-center mb-7",children:o}),(0,a.jsxs)("div",{className:"text-gray-600 fs-base text-center fw-semibold",children:["In this kind of post,",(0,a.jsx)("a",{href:"#",className:"opacity-75-hover text-primary me-1",children:"the blogger"}),"introduces a person they\u2019ve interviewed",(0,a.jsx)("br",{}),"and provides some background information about",(0,a.jsx)("a",{href:"#",className:"opacity-75-hover text-primary me-1",children:"the interviewee"}),"and their",(0,a.jsx)("br",{}),"work following this is a transcript of the interview."]})]})}),(0,a.jsx)("div",{className:"d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12",children:(0,a.jsx)("div",{className:"bg-body d-flex flex-column flex-center rounded-4 w-md-600px p-10",children:(0,a.jsxs)("div",{className:"d-flex flex-center flex-column align-items-stretch h-lg-100 w-md-400px",children:[(0,a.jsx)("div",{className:"d-flex flex-center flex-column flex-column-fluid pb-15 pb-lg-20",children:x}),(0,a.jsx)("div",{className:"d-flex flex-stack"})]})})})]})})}var e=r,n={creative:H,overlay:e},t={layout:"creative",title:"\u6B22\u8FCE\u4F7F\u7528",logo:"/assets/media/logos/custom-3.svg"};function l(){var f=(0,j.rL)({key:"signin",title:"\u767B\u5F55",icon:"",props:t,customizer:{fields:[{name:"layout",label:"\u5E03\u5C40",type:"Enumeration",enumeration:{values:[{value:"creative",name:"\u521B\u610F"},{value:"overlay",name:"\u8986\u76D6"}]}},{name:"title",label:"\u6807\u9898",type:"String"},{name:"logo",label:"Logo",type:"String"}]}}),o=f.props,x=f.Provider;return(0,a.jsx)(x,S()(S()({as:n[o.layout]},o),{},{children:(0,a.jsx)($,{})}))}var u=l},38018:function(w,i,s){var b=s(5574).default,S=s(64599).default,F=s(52677).default,j=s(19632).default,c=s(62072),d=s(44020),g=s(13615),O=s(92806),T=function(e){return e==null};function A(r){switch(r.arrayFormat){case"index":return function(e){return function(n,t){var l=n.length;return t===void 0||r.skipNull&&t===null||r.skipEmptyString&&t===""?n:t===null?[].concat(j(n),[[m(e,r),"[",l,"]"].join("")]):[].concat(j(n),[[m(e,r),"[",m(l,r),"]=",m(t,r)].join("")])}};case"bracket":return function(e){return function(n,t){return t===void 0||r.skipNull&&t===null||r.skipEmptyString&&t===""?n:t===null?[].concat(j(n),[[m(e,r),"[]"].join("")]):[].concat(j(n),[[m(e,r),"[]=",m(t,r)].join("")])}};case"comma":case"separator":return function(e){return function(n,t){return t==null||t.length===0?n:n.length===0?[[m(e,r),"=",m(t,r)].join("")]:[[n,m(t,r)].join(r.arrayFormatSeparator)]}};default:return function(e){return function(n,t){return t===void 0||r.skipNull&&t===null||r.skipEmptyString&&t===""?n:t===null?[].concat(j(n),[m(e,r)]):[].concat(j(n),[[m(e,r),"=",m(t,r)].join("")])}}}}function L(r){var e;switch(r.arrayFormat){case"index":return function(n,t,l){if(e=/\[(\d*)\]$/.exec(n),n=n.replace(/\[\d*\]$/,""),!e){l[n]=t;return}l[n]===void 0&&(l[n]={}),l[n][e[1]]=t};case"bracket":return function(n,t,l){if(e=/(\[\])$/.exec(n),n=n.replace(/\[\]$/,""),!e){l[n]=t;return}if(l[n]===void 0){l[n]=[t];return}l[n]=[].concat(l[n],t)};case"comma":case"separator":return function(n,t,l){var u=typeof t=="string"&&t.includes(r.arrayFormatSeparator),f=typeof t=="string"&&!u&&C(t,r).includes(r.arrayFormatSeparator);t=f?C(t,r):t;var o=u||f?t.split(r.arrayFormatSeparator).map(function(x){return C(x,r)}):t===null?t:C(t,r);l[n]=o};default:return function(n,t,l){if(l[n]===void 0){l[n]=t;return}l[n]=[].concat(l[n],t)}}}function R(r){if(typeof r!="string"||r.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function m(r,e){return e.encode?e.strict?c(r):encodeURIComponent(r):r}function C(r,e){return e.decode?d(r):r}function p(r){return Array.isArray(r)?r.sort():F(r)==="object"?p(Object.keys(r)).sort(function(e,n){return Number(e)-Number(n)}).map(function(e){return r[e]}):r}function a(r){var e=r.indexOf("#");return e!==-1&&(r=r.slice(0,e)),r}function J(r){var e="",n=r.indexOf("#");return n!==-1&&(e=r.slice(n)),e}function $(r){r=a(r);var e=r.indexOf("?");return e===-1?"":r.slice(e+1)}function z(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&typeof r=="string"&&r.trim()!==""?r=Number(r):e.parseBooleans&&r!==null&&(r.toLowerCase()==="true"||r.toLowerCase()==="false")&&(r=r.toLowerCase()==="true"),r}function H(r,e){e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e),R(e.arrayFormatSeparator);var n=L(e),t=Object.create(null);if(typeof r!="string"||(r=r.trim().replace(/^[?#&]/,""),!r))return t;var l=S(r.split("&")),u;try{for(l.s();!(u=l.n()).done;){var f=u.value;if(f!==""){var o=g(e.decode?f.replace(/\+/g," "):f,"="),x=b(o,2),v=x[0],h=x[1];h=h===void 0?null:["comma","separator"].includes(e.arrayFormat)?h:C(h,e),n(C(v,e),h,t)}}}catch(I){l.e(I)}finally{l.f()}for(var B=0,D=Object.keys(t);B<D.length;B++){var Q=D[B],E=t[Q];if(F(E)==="object"&&E!==null)for(var M=0,V=Object.keys(E);M<V.length;M++){var G=V[M];E[G]=z(E[G],e)}else t[Q]=z(E,e)}return e.sort===!1?t:(e.sort===!0?Object.keys(t).sort():Object.keys(t).sort(e.sort)).reduce(function(I,U){var N=t[U];return N&&F(N)==="object"&&!Array.isArray(N)?I[U]=p(N):I[U]=N,I},Object.create(null))}i.extract=$,i.parse=H,i.stringify=function(r,e){if(!r)return"";e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e),R(e.arrayFormatSeparator);for(var n=function(h){return e.skipNull&&T(r[h])||e.skipEmptyString&&r[h]===""},t=A(e),l={},u=0,f=Object.keys(r);u<f.length;u++){var o=f[u];n(o)||(l[o]=r[o])}var x=Object.keys(l);return e.sort!==!1&&x.sort(e.sort),x.map(function(v){var h=r[v];return h===void 0?"":h===null?m(v,e):Array.isArray(h)?h.reduce(t(v),[]).join("&"):m(v,e)+"="+m(h,e)}).filter(function(v){return v.length>0}).join("&")},i.parseUrl=function(r,e){e=Object.assign({decode:!0},e);var n=g(r,"#"),t=b(n,2),l=t[0],u=t[1];return Object.assign({url:l.split("?")[0]||"",query:H($(r),e)},e&&e.parseFragmentIdentifier&&u?{fragmentIdentifier:C(u,e)}:{})},i.stringifyUrl=function(r,e){e=Object.assign({encode:!0,strict:!0},e);var n=a(r.url).split("?")[0]||"",t=i.extract(r.url),l=i.parse(t,{sort:!1}),u=Object.assign(l,r.query),f=i.stringify(u,e);f&&(f="?".concat(f));var o=J(r.url);return r.fragmentIdentifier&&(o="#".concat(m(r.fragmentIdentifier,e))),"".concat(n).concat(f).concat(o)},i.pick=function(r,e,n){n=Object.assign({parseFragmentIdentifier:!0},n);var t=i.parseUrl(r,n),l=t.url,u=t.query,f=t.fragmentIdentifier;return i.stringifyUrl({url:l,query:O(u,e),fragmentIdentifier:f},n)},i.exclude=function(r,e,n){var t=Array.isArray(e)?function(l){return!e.includes(l)}:function(l,u){return!e(l,u)};return i.pick(r,t,n)}},13615:function(w){w.exports=function(i,s){if(!(typeof i=="string"&&typeof s=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(s==="")return[i];var b=i.indexOf(s);return b===-1?[i]:[i.slice(0,b),i.slice(b+s.length)]}},62072:function(w){w.exports=function(i){return encodeURIComponent(i).replace(/[!'()*]/g,function(s){return"%".concat(s.charCodeAt(0).toString(16).toUpperCase())})}},44020:function(w){var i="%[a-f0-9]{2}",s=new RegExp("("+i+")|([^%]+?)","gi"),b=new RegExp("("+i+")+","gi");function S(c,d){try{return[decodeURIComponent(c.join(""))]}catch(T){}if(c.length===1)return c;d=d||1;var g=c.slice(0,d),O=c.slice(d);return Array.prototype.concat.call([],S(g),S(O))}function F(c){try{return decodeURIComponent(c)}catch(O){for(var d=c.match(s)||[],g=1;g<d.length;g++)c=S(d,g).join(""),d=c.match(s)||[];return c}}function j(c){for(var d={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},g=b.exec(c);g;){try{d[g[0]]=decodeURIComponent(g[0])}catch(R){var O=F(g[0]);O!==g[0]&&(d[g[0]]=O)}g=b.exec(c)}d["%C2"]="\uFFFD";for(var T=Object.keys(d),A=0;A<T.length;A++){var L=T[A];c=c.replace(new RegExp(L,"g"),d[L])}return c}w.exports=function(c){if(typeof c!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof c+"`");try{return c=c.replace(/\+/g," "),decodeURIComponent(c)}catch(d){return j(c)}}},92806:function(w){w.exports=function(i,s){for(var b={},S=Object.keys(i),F=Array.isArray(s),j=0;j<S.length;j++){var c=S[j],d=i[c];(F?s.indexOf(c)!==-1:s(c,d,i))&&(b[c]=d)}return b}}}]);