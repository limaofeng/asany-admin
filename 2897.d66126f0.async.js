"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2897],{2897:function(H,y,a){a.r(y);var F=a(15009),d=a.n(F),A=a(97857),i=a.n(A),T=a(5574),v=a.n(T),U=a(99289),P=a.n(U),R=a(52677),B=a.n(R),s=a(62435),I=a(12845),k=a(80983),m=a(2721),l=a(86074),O=function(e){return e!=null&&e.url?e.url:typeof(e==null?void 0:e.document)=="string"?I.APP_CONFIG.STORAGE_URL+"/preview/".concat(e.document):B()(e==null?void 0:e.document)==="object"?URL.createObjectURL(e.document.id):""};function K(r){return b.apply(this,arguments)}function b(){return b=P()(d()().mark(function r(e){var n,o,c;return d()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.prev=0,_.next=3,fetch(e,{method:"HEAD"});case 3:return n=_.sent,o=n.headers.get("Content-Type"),c=n.headers.get("Content-Length"),_.abrupt("return",{contentType:o,contentLength:c});case 9:return _.prev=9,_.t0=_.catch(0),console.error("Error fetching URL:",_.t0),_.abrupt("return",null);case 13:case"end":return _.stop()}},r,null,[[0,9]])})),b.apply(this,arguments)}function W(r){var e,n=r.value,o=r.onChange,c=(0,s.useState)(!1),p=v()(c,2),_=p[0],f=p[1],S=(0,s.useState)(O(r.value)),j=v()(S,2),M=j[0],w=j[1],N=(0,s.useState)(((e=r.value)===null||e===void 0?void 0:e.url)||""),L=v()(N,2),E=L[0],C=L[1];(0,s.useEffect)(function(){var u;w(O(r.value)),C(((u=r.value)===null||u===void 0?void 0:u.url)||"")},[r.value]);var x=(0,s.useCallback)(function(u){u.preventDefault(),u.stopPropagation(),f(!0)},[]),g=(0,s.useCallback)(function(u){o&&o(u)},[o]),G=(0,s.useCallback)(P()(d()().mark(function u(){var h,D;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return f(!1),t.next=3,K(E);case 3:if(h=t.sent,h){t.next=6;break}return t.abrupt("return");case 6:if(D=k.extension(h.contentType).toUpperCase(),["PDF"].includes(D)){t.next=10;break}return console.error("\u53EA\u652F\u6301PDF\u6587\u4EF6"),t.abrupt("return");case 10:g(i()(i()({},n),{},{type:D,size:h.contentLength,document:void 0,url:E}));case 11:case"end":return t.stop()}},u)})),[n,E]),$=(0,s.useCallback)(function(){f(!1),C((n==null?void 0:n.url)||"")},[n==null?void 0:n.url]),z=(0,s.useCallback)(function(u){g(i()(i()({},n),{},{type:"PDF",document:u,url:void 0}))},[n]),V=(0,s.useCallback)(function(u){C(u.target.value)},[]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(m.Modal,{centered:!0,visible:_,dialogClassName:"modal-dialog-small w-500px",onCancel:$,onOk:G,title:"\u8BBE\u7F6E\u94FE\u63A5\u5F15\u7528",closable:!1,headerClassName:"border-bottom-0",bodyClassName:"py-2",footerClassName:"border-top-0",children:(0,l.jsx)(m.Input.TextArea,{autoSize:{minRows:3,maxRows:5},onChange:V,value:E})}),(0,l.jsx)("div",{className:"fv-row mb-2",children:(0,l.jsx)(m.SignleUpload,{value:n==null?void 0:n.document,accept:{"application/pdf":[".pdf"]},title:(0,l.jsxs)(l.Fragment,{children:["\u5C06\u6587\u4EF6\u62D6\u62FD\u81F3\u6B64\u5904\u3001\u70B9\u51FB\u4E0A\u4F20\uFF0C\u6216",(0,l.jsx)("a",{onClick:x,className:"",children:"\u8BBE\u7F6E"}),"\u94FE\u63A5\u5F15\u7528\u3002"]}),description:"\u652F\u6301\u7684\u6587\u6863\u683C\u5F0F\uFF1Apdf",onChange:z})}),!!M&&(0,l.jsx)(m.DocumentViewer,{url:M})]})}y.default=W}}]);