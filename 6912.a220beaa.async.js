"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6912],{16912:function(I,v,n){n.r(v);var j=n(97857),s=n.n(j),M=n(5574),i=n.n(M),D=n(52677),A=n.n(D),u=n(62435),E=n(12845),d=n(2721),l=n(86074),C=function(e){return e!=null&&e.url?e.url:typeof(e==null?void 0:e.video)=="string"?E.APP_CONFIG.STORAGE_URL+"/preview/".concat(e.video):A()(e==null?void 0:e.video)==="object"?E.APP_CONFIG.STORAGE_URL+"/preview/".concat(e.video.id):""};function F(o){var e,_=o.value,b=o.onChange,g=(0,u.useState)(!1),c=i()(g,2),p=c[0],r=c[1],y=(0,u.useState)(C(o.value)),h=i()(y,2),f=h[0],B=h[1],U=(0,u.useState)(((e=o.value)===null||e===void 0?void 0:e.url)||""),O=i()(U,2),t=O[0],m=O[1];(0,u.useEffect)(function(){var a;B(C(o.value)),m(((a=o.value)===null||a===void 0?void 0:a.url)||"")},[o.value]);var x=(0,u.useCallback)(function(a){a.preventDefault(),a.stopPropagation(),r(!0)},[]),P=(0,u.useCallback)(function(a){b&&b(a)},[]),L=(0,u.useCallback)(function(){r(!1),P(s()(s()({},_),{},{video:void 0,url:t}))},[_,t]),R=(0,u.useCallback)(function(){r(!1),m((_==null?void 0:_.url)||"")},[_==null?void 0:_.url]),S=(0,u.useCallback)(function(a){P(s()(s()({},_),{},{video:a,url:void 0}))},[_]),T=(0,u.useCallback)(function(a){m(a.target.value)},[]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(d.Modal,{centered:!0,visible:p,dialogClassName:"modal-dialog-small w-500px",onCancel:R,onOk:L,title:"\u8BBE\u7F6E\u94FE\u63A5\u5F15\u7528",closable:!1,headerClassName:"border-bottom-0",bodyClassName:"py-2",footerClassName:"border-top-0",children:(0,l.jsx)(d.Input.TextArea,{autoSize:{minRows:3,maxRows:5},onChange:T,value:t})}),(0,l.jsx)("div",{className:"fv-row mb-2",children:(0,l.jsx)(d.SignleUpload,{value:_==null?void 0:_.video,accept:{"video/mp4":[".mp4"],"video/webm":[".webm"],"video/ogg":[".ogg",".ogv"],"video/x-msvideo":[".avi"],"video/mpeg":[".mpeg"]},title:(0,l.jsxs)(l.Fragment,{children:["\u5C06\u6587\u4EF6\u62D6\u62FD\u81F3\u6B64\u5904\u3001\u70B9\u51FB\u4E0A\u4F20\uFF0C\u6216",(0,l.jsx)("a",{onClick:x,className:"",children:"\u8BBE\u7F6E"}),"\u94FE\u63A5\u5F15\u7528\u3002"]}),description:"\u652F\u6301\u7684\u89C6\u9891\u683C\u5F0F\uFF1AMP4, AVI, MOV, WEBM",onChange:S})}),!!f&&(0,l.jsx)(d.VideoPlayer,{url:f,width:"100%"})]})}v.default=F}}]);