(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[1288],{61288:function(x,l,t){"use strict";t.r(l);var _=t(2824),c=t(67294),d=t(28865),E=t(94184),C=t.n(E),v=t(30381),n=t.n(v),y=t(29044),u=t(8305),m=t(18071),s=t(17818),e=t(85893);function r(p){var a=p.data;return(0,e.jsxs)("li",{className:"client-secret-item p-5 border-bottom border-secondary d-flex flex-row",children:[(0,e.jsxs)("div",{className:"d-flex flex-column w-90px flex-stack",children:[(0,e.jsx)(d.JO,{style:{transform:"rotate(45deg)"},className:"svg-icon-2hx",name:"Bootstrap/key"}),(0,e.jsx)("span",{className:"text-small fw-bold border border-1 text-muted px-3 rounded-pill text-gray-600",children:"\u5BA2\u6237\u7AEF\u5BC6\u94A5"})]}),(0,e.jsxs)("div",{className:"d-flex flex-column ps-4",children:[(0,e.jsx)("span",{className:"text-small text-dark",children:a.secret}),(0,e.jsxs)("span",{children:["\u7531 ",(0,e.jsx)("strong",{children:a.createdBy||"\u7CFB\u7EDF"})," ",n()(a.createdAt).fromNow()," \u6DFB\u52A0"]}),(0,e.jsx)("div",{className:"text-small text-muted",children:a.lastUseTime?(0,e.jsxs)(e.Fragment,{children:[n()(a.lastUseTime).fromNow()," \u4F7F\u7528\u8FC7"]}):"\u4ECE\u672A\u4F7F\u7528\u8FC7"})]})]})}function o(p){var a=p.location.state.app.id,i=(0,c.useRef)(),g=(0,c.useState)(!1),h=(0,_.Z)(g,2),D=h[0],A=h[1],I=(0,u.Bo)({variables:{id:a}}),b=I.data,T=I.loading,f=(0,c.useMemo)(function(){return b==null?void 0:b.app},[b]),O=s.l0.useForm();console.log("data",b,O);var P=(0,y.Z)(),B=(0,_.Z)(P,2),j=B[1],U=(0,c.useCallback)(function(){(f==null?void 0:f.clientId)&&j(f.clientId),s.FN.info("\u5BA2\u6237\u7AEFID \u5DF2\u7ECF\u590D\u5236",3e3,{placement:"top-center"}),i.current&&clearTimeout(i.current),A(!0),i.current=setTimeout(function(){A(!1),i.current=null},3e3)},[f==null?void 0:f.clientId,j]);(0,c.useEffect)(function(){return function(){i.current&&clearTimeout(i.current)}},[]);var R=(0,c.useMemo)(function(){return(f==null?void 0:f.clientSecrets)||[]},[f]);return(0,e.jsx)(m.vs,{loading:T,children:f&&(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(s.Zb,{className:"mb-5 mb-xl-10",children:[(0,e.jsx)(s.Zb.Header,{children:(0,e.jsx)(s.Zb.Title,{children:"\u5F00\u53D1\u4FE1\u606F"})}),(0,e.jsxs)(s.Zb.Body,{children:[(0,e.jsx)("h3",{className:"fw-bolder mb-5",children:"\u5BA2\u6237\u7AEFID"}),(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"d-flex align-items-center",children:[f.clientId,(0,e.jsx)(s.u,{title:"\u70B9\u51FB\u590D\u5236\u5BA2\u6237\u7AEFID",children:(0,e.jsx)(d.JO,{onClick:U,className:C()("ms-2 svg-icon-4 cursor-pointer",{"text-success":!D,"text-primary":D}),name:"Bootstrap/clipboard".concat(D?"-check":"")})})]}),(0,e.jsx)("div",{className:"text-muted fs-7",children:"\u5F53\u524D\u4E5F\u53EF\u4F5C\u4E3A AppId \u4F7F\u7528"})]}),(0,e.jsxs)("div",{className:"py-10",children:[(0,e.jsx)("h3",{className:"fw-bolder mb-5",children:"\u5BA2\u6237\u7AEF\u5BC6\u94A5"}),(0,e.jsx)("ul",{className:"w-800px rounded border border-secondary",children:R.map(function(M){return(0,e.jsx)(r,{data:M},M.id)})})]})]})]})})})}l.default=o},20640:function(x,l,t){"use strict";var _=t(11742),c={"text/plain":"Text","text/html":"Url",default:"Text"},d="Copy to clipboard: #{key}, Enter";function E(v){var n=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return v.replace(/#{\s*key\s*}/g,n)}function C(v,n){var y,u,m,s,e,r,o=!1;n||(n={}),y=n.debug||!1;try{m=_(),s=document.createRange(),e=document.getSelection(),r=document.createElement("span"),r.textContent=v,r.style.all="unset",r.style.position="fixed",r.style.top=0,r.style.clip="rect(0, 0, 0, 0)",r.style.whiteSpace="pre",r.style.webkitUserSelect="text",r.style.MozUserSelect="text",r.style.msUserSelect="text",r.style.userSelect="text",r.addEventListener("copy",function(a){if(a.stopPropagation(),n.format)if(a.preventDefault(),typeof a.clipboardData=="undefined"){y&&console.warn("unable to use e.clipboardData"),y&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=c[n.format]||c.default;window.clipboardData.setData(i,v)}else a.clipboardData.clearData(),a.clipboardData.setData(n.format,v);n.onCopy&&(a.preventDefault(),n.onCopy(a.clipboardData))}),document.body.appendChild(r),s.selectNodeContents(r),e.addRange(s);var p=document.execCommand("copy");if(!p)throw new Error("copy command was unsuccessful");o=!0}catch(a){y&&console.error("unable to copy using execCommand: ",a),y&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",v),n.onCopy&&n.onCopy(window.clipboardData),o=!0}catch(i){y&&console.error("unable to copy using clipboardData: ",i),y&&console.error("falling back to prompt"),u=E("message"in n?n.message:d),window.prompt(u,v)}}finally{e&&(typeof e.removeRange=="function"?e.removeRange(s):e.removeAllRanges()),r&&document.body.removeChild(r),m()}return o}x.exports=C},29044:function(x,l,t){"use strict";t.d(l,{Z:function(){return y}});var _=t(20640),c=t.n(_),d=t(67294);function E(){var u=(0,d.useRef)(!1),m=(0,d.useCallback)(function(){return u.current},[]);return(0,d.useEffect)(function(){return u.current=!0,function(){u.current=!1}},[]),m}var C=function(u){u===void 0&&(u={});var m=(0,d.useState)(u),s=m[0],e=m[1],r=(0,d.useCallback)(function(o){e(function(p){return Object.assign({},p,o instanceof Function?o(p):o)})},[]);return[s,r]},v=C,n=function(){var u=E(),m=v({value:void 0,error:void 0,noUserInteraction:!0}),s=m[0],e=m[1],r=(0,d.useCallback)(function(o){if(!!u()){var p,a;try{if(typeof o!="string"&&typeof o!="number"){var i=new Error("Cannot copy typeof "+typeof o+" to clipboard, must be a string");e({value:o,error:i,noUserInteraction:!0});return}else if(o===""){var i=new Error("Cannot copy empty string to clipboard.");e({value:o,error:i,noUserInteraction:!0});return}a=o.toString(),p=c()(a),e({value:a,error:void 0,noUserInteraction:p})}catch(g){e({value:a,error:g,noUserInteraction:p})}}},[]);return[s,r]},y=n},11742:function(x){x.exports=function(){var l=document.getSelection();if(!l.rangeCount)return function(){};for(var t=document.activeElement,_=[],c=0;c<l.rangeCount;c++)_.push(l.getRangeAt(c));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return l.removeAllRanges(),function(){l.type==="Caret"&&l.removeAllRanges(),l.rangeCount||_.forEach(function(d){l.addRange(d)}),t&&t.focus()}}}}]);