"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1392],{79514:function(N,j,n){n.d(j,{AQ:function(){return a.AQ},Af:function(){return a.Af},G$:function(){return a.G$},I1:function(){return a.I1},KX:function(){return a.KX},Nq:function(){return a.Nq},P6:function(){return a.P6},Pw:function(){return a.Pw},WF:function(){return a.WF},Yw:function(){return a.Yw},ZO:function(){return a.ZO},_c:function(){return a._c},aA:function(){return a.aA},au:function(){return a.au},c9:function(){return a.c9},jS:function(){return a.jS},ko:function(){return a.ko},oM:function(){return a.oM},ot:function(){return a.ot},w4:function(){return a.w4},wp:function(){return a.wp}});var a=n(70694)},41392:function(N,j,n){n.r(j);var a=n(97857),p=n.n(a),R=n(15009),c=n.n(R),U=n(99289),B=n.n(U),K=n(49677),L=n.n(K),W=n(5574),b=n.n(W),_=n(62435),k=n(96974),S=n(93967),$=n.n(S),V=n(73588),u=n(2721),y=n(79514),e=n(86074);function G(t){var P=t.visible,s=t.onCancel,r=t.data,D=(0,_.useState)(!0),M=b()(D,2),x=M[0],g=M[1],O=(0,y.G$)(),F=b()(O,2),i=F[0];L()(F[1]);var f=(0,_.useCallback)(function(E,v){g(v.verify!==(r==null?void 0:r.name))},[r==null?void 0:r.name]),I=(0,_.useCallback)(B()(c()().mark(function E(){return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,i({variables:{id:r.id}});case 2:u.Toast.success("\u6A21\u5757 \u201C".concat(r.name,"\u201D \u5220\u9664\u6210\u529F"),2e3,{placement:"bottom-right",progressBar:!0});case 3:case"end":return h.stop()}},E)})),[r.id,r.name,i]);return(0,e.jsxs)(u.Modal,{dialogClassName:$()("asany-confirm-modal w-450px"),visible:P,onCancel:s,title:"\u786E\u5B9A\u5220\u9664\u6A21\u5757\u5417\uFF1F",footer:!1,bodyClassName:"p-0",children:[(0,e.jsx)(u.Alert,{type:"danger",message:"\u8BF7\u4ED4\u7EC6\u9605\u8BFB\u4EE5\u4E0B\u4E8B\u9879"}),(0,e.jsxs)("div",{className:"inner-body p-7",children:[(0,e.jsxs)("p",{className:"fs-7",children:["\u60A8\u5373\u5C06\u5220\u9664 ",(0,e.jsx)("b",{children:r==null?void 0:r.name}),"\uFF0C\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u548C\u6062\u590D\u3002"]}),(0,e.jsx)(u.Separator,{className:"my-5"}),(0,e.jsx)(u.Form,{onValuesChange:f,children:(0,e.jsx)(u.Form.Item,{className:"mb-5",name:"verify",label:(0,e.jsxs)(e.Fragment,{children:["\u8F93\u5165\u201C",(0,e.jsx)("i",{children:r==null?void 0:r.name}),"\u201D\uFF0C\u5DF2\u5B8C\u6210\u9A8C\u8BC1"]}),children:(0,e.jsx)(u.Input,{solid:!0})})}),(0,e.jsx)(u.Button,{onClick:I,className:"asany-confirm-modal-button",disabled:x,variant:"light-danger",children:"\u5220\u9664\u6B64\u6A21\u5757"})]})]})}function Q(){var t=u.Form.useForm(),P=(0,k.TH)(),s=P.state.module,r=(0,_.useState)(!1),D=b()(r,2),M=D[0],x=D[1],g=(0,y.ot)(),O=b()(g,1),F=O[0],i=(0,_.useRef)(new AbortController),f="cn.asany",I=(0,y.AQ)(),E=b()(I,2),v=E[0],h=E[1].loading,z=(0,_.useCallback)(B()(c()().mark(function C(){var l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,t.validateFields();case 2:return l=d.sent,d.next=5,v({variables:{id:s.id,input:p()(p()({},l),{},{code:f+"."+l.code})}});case 5:u.Toast.success("\u6A21\u5757 \u201C".concat(l.name,"\u201D \u66F4\u65B0\u6210\u529F"),2e3,{placement:"bottom-right",progressBar:!0});case 6:case"end":return d.stop()}},C)})),[t,s.id,v]),H=(0,_.useCallback)(function(){x(!1)},[]),X=(0,_.useCallback)(function(){x(!0)},[]);return(0,_.useEffect)(function(){var C,l;t.setFieldsValue(p()(p()({},s),{},{code:(C=s.code)===null||C===void 0?void 0:C.replaceAll(f+".",""),picture:(l=s.picture)===null||l===void 0?void 0:l.id}))},[t,s]),(0,e.jsxs)(V.JH,{children:[(0,e.jsxs)(u.Card,{className:"mb-5 mb-xl-10",children:[(0,e.jsx)(u.Card.Header,{children:(0,e.jsx)(u.Card.Title,{children:"\u6A21\u5757\u4FE1\u606F"})}),(0,e.jsxs)(u.Card.Body,{children:[(0,e.jsxs)(u.Form,{form:t,className:"mw-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row",children:[(0,e.jsx)("div",{className:"mw-500px col-12 col-md-8",children:(0,e.jsxs)("div",{className:"mw-400px",children:[(0,e.jsx)(u.Form.Item,{required:!1,className:"mb-5",name:"name",label:"\u540D\u79F0",rules:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(u.Input,{solid:!0})}),(0,e.jsx)(u.Form.Item,{required:!1,className:"my-5",name:"code",label:"\u7F16\u7801",hasFeedback:!0,help:"\u8BF7\u53C2\u8003\u7F16\u7A0B\u4E2D\u547D\u540D\u7A7A\u95F4\u7684\u5199\u6CD5",rules:[{required:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"},{validator:function(l,A){return B()(c()().mark(function d(){var T,w,m;return c()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(A){o.next=2;break}return o.abrupt("return");case 2:if(T=f+"."+A,i.current&&i.current.abort(),T!==s.code){o.next=6;break}return o.abrupt("return");case 6:return i.current=new AbortController,o.next=9,F({variables:{filter:{code:T},limit:1},fetchPolicy:"network-only",context:{fetchOptions:{signal:i.current.signal}}});case 9:if(w=o.sent,m=w.data,console.log("validator",l,A,m==null?void 0:m.modules),!(m!=null&&m.modules.length)){o.next=14;break}throw new Error(l.message);case 14:case"end":return o.stop()}},d)}))()},message:"\u7F16\u7801\u4E0D\u80FD\u91CD\u590D"}],children:(0,e.jsx)(u.Input,{solid:!0,addonBefore:f+".",placeholder:"\u4F8B\u5982: module.text"})}),(0,e.jsx)(u.Form.Item,{className:"my-5",name:"description",label:"\u63CF\u8FF0",requiredMark:"optional",children:(0,e.jsx)(u.Input.TextArea,{solid:!0,autoSize:{maxRows:4,minRows:2}})})]})}),(0,e.jsx)("div",{className:"col-12 col-md-4",children:(0,e.jsx)("div",{className:"row",children:(0,e.jsx)(u.Form.Item,{className:"mb-5",name:"picture",label:"\u6A21\u5757\u56FE\u7247",help:"\u5141\u8BB8\u7684\u6587\u4EF6\u7C7B\u578B:png, jpg, jpeg\u3002",children:(0,e.jsx)(u.Upload.Image,{width:148,height:148,space:"7VE4SSrk",crop:{height:300,zoomable:!1,aspectRatio:1},accept:".png, .jpg, .jpeg",background:(0,e.jsx)(u.Symbol,{autoColor:!1,labelClassName:"bg-dark text-inverse-info fs-3tx",alt:s.name})})})})})]}),(0,e.jsx)(u.Button,{loading:h,onClick:z,children:"\u66F4\u65B0\u6A21\u5757\u4FE1\u606F"})]})]}),(0,e.jsxs)(u.Card,{className:"mb-5 mb-xl-10",children:[(0,e.jsx)(u.Card.Header,{children:(0,e.jsx)(u.Card.Title,{className:"text-danger",children:"\u5220\u9664\u6A21\u5757"})}),(0,e.jsxs)(u.Card.Body,{children:[(0,e.jsxs)("div",{className:"fs-7 gap-2 d-flex flex-column mb-3",children:[(0,e.jsx)("p",{className:"mb-0",children:"\u5220\u9664\u64CD\u4F5C\u5C06\u4F1A\u6E05\u9664\u6389\u6A21\u5757\u4E2D\u7684\u6240\u6709\u5185\u5BB9\uFF0C\u5305\u62EC\uFF1A\u6A21\u578B/\u6570\u636E\u7B49"}),(0,e.jsx)("p",{className:"mb-0",children:"\u5E10\u6237\u5220\u9664\u540E\uFF0C\u5C06\u65E0\u6CD5\u6062\u590D\u3002\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002"})]}),(0,e.jsx)(u.Button,{variant:"danger",onClick:X,children:"\u5220\u9664\u6A21\u5757"}),(0,e.jsx)(G,{data:s,visible:M,onCancel:H})]})]})]})}j.default=Q}}]);