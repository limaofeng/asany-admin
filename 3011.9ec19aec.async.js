(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[3011],{50480:function(Q,F,n){"use strict";var S=n(28865),N=n(51248),g=n(85893);function b(B){var d=B.layout,Z=B.children,M=B.onLayout;return(0,g.jsxs)("div",{className:"d-flex flex-wrap my-1",children:[d&&(0,g.jsxs)("ul",{className:"nav nav-pills me-6 mb-2 mb-sm-0",children:[(0,g.jsx)("li",{className:"nav-item m-0 me-3",children:(0,g.jsx)(N.Z,{variant:"light",color:"muted",active:d=="card",activeColor:"primary",onClick:M==null?void 0:M.bind(null,"card"),icon:(0,g.jsx)(S.ZP,{name:"Duotune/gen024",className:"svg-icon-1"})})}),(0,g.jsx)("li",{className:"nav-item m-0",children:(0,g.jsx)(N.Z,{variant:"light",color:"muted",active:d=="table",onClick:M==null?void 0:M.bind(null,"table"),activeColor:"primary",className:"me-3",icon:(0,g.jsx)(S.ZP,{name:"Duotune/abs015",className:"svg-icon-1"})})})]}),Z]})}F.Z=b},93471:function(Q,F,n){"use strict";n.d(F,{ZX:function(){return S.Z},o8:function(){return b}});var S=n(50480),N=n(85893);function g(f){var U=f.title,a=f.subtitle,e=f.controls;return(0,N.jsxs)("div",{className:"d-flex flex-wrap flex-stack my-5",children:[(0,N.jsxs)("h2",{className:"fs-2 fw-bold my-2",children:[U,a&&(0,N.jsx)("span",{className:"fs-6 text-gray-400 ms-1",children:a})]}),e]})}var b=g,B=n(67294),d=n(28865),Z=n(94184),M=n(25496);function H(f,U){var a=useRef(null),e=f.onClose,W=f.title,J=f.children,z=f.extras,v=z===void 0?[]:z,O=f.content,R=f.style,A=f.className,C=f.footer,h=useRef({next:!1,nextIndex:-1,panels:v}),E=useReducer(function(u){return u+1},0),p=_slicedToArray(E,2),D=p[1],I=function(c){return function(){h.current.nextIndex=c,D()}},w=function(){var u=_asyncToGenerator(_regeneratorRuntime().mark(function c(){return _regeneratorRuntime().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:if(h.current.nextIndex!=-1){_.next=2;break}return _.abrupt("return");case 2:return h.current.nextIndex--,D(),_.next=6,sleep(250);case 6:h.current.panels.pop(),D();case 8:case"end":return _.stop()}},c)}));return function(){return u.apply(this,arguments)}}();useImperativeHandle(U,function(){return{back:function(){var u=_asyncToGenerator(_regeneratorRuntime().mark(function y(){return _regeneratorRuntime().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,w();case 2:case"end":return j.stop()}},y)}));function c(){return u.apply(this,arguments)}return c}(),next:function(){var u=_asyncToGenerator(_regeneratorRuntime().mark(function y(_,j){return _regeneratorRuntime().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return h.current.panels.push({title:_,content:j}),D(),T.next=4,sleep(50);case 4:h.current.nextIndex++,D();case 6:case"end":return T.stop()}},y)}));function c(y,_){return u.apply(this,arguments)}return c}(),get width(){var u;return((u=a.current)===null||u===void 0?void 0:u.getBoundingClientRect().width)||0}}},[]);var P=h.current,r=P.nextIndex,o=P.panels,i=r!=-1;return _jsxs("div",{ref:a,className:classnames("settings-menu-container",A),style:R,children:[_jsxs("div",{id:"entry-controls",children:[_jsxs("div",{className:classnames("settings-menu settings-menu-pane",{"settings-menu-pane-in":!i,"settings-menu-pane-out-left":i}),children:[_jsxs("div",{className:"settings-menu-header",children:[_jsx("h4",{children:W}),_jsx("button",{type:"button",className:"close",onClick:e,children:_jsx(Icon,{name:"CloseOutlined"})})]}),_jsxs("div",{className:"settings-menu-content relative w-100 vh-100 overflow-x-hidden hover-scroll-overlay-y px-5 z-0",children:[O||J,!!v.length&&_jsx("ul",{className:"nav-list-block",children:v.map(function(u,c){var y=u.title,_=u.summary,j=[_jsxs("li",{className:"nav-list-item",onClick:I(c),role:"none",children:[_jsxs("button",{type:"button",children:[_jsx("b",{children:y}),_jsx("span",{children:_})]}),_jsx(Icon,{name:"CloseOutlined"})]},String("".concat(c,"-").concat(W)))];return c!==v.length-1&&j.push(_jsx("li",{className:"divider"},String("".concat(c,"-").concat(W,"-divider")))),j})})]})]}),o.map(function(u,c){var y=u.title,_=u.content;return _jsx("div",{className:classnames("settings-menu settings-menu-pane",{"settings-menu-pane-in":c===r,"settings-menu-pane-out-right":c>r,"settings-menu-pane-out-left":c<r}),children:_jsxs("div",{className:"ember-view active",children:[_jsxs("div",{className:"settings-menu-header subview",children:[_jsx("button",{className:"back settings-menu-header-action",onClick:w,children:_jsx(Icon,{name:"CloseOutlined"})}),_jsx("h4",{children:y}),_jsx("div",{})]}),_jsx("div",{className:"settings-menu-content",children:_})]})},y)})]}),C]})}var K=null,$=null},13011:function(Q,F,n){"use strict";n.r(F);var S=n(86582),N=n(2824),g=n(93224),b=n(39428),B=n(3182),d=n(67294),Z=n(28865),M=n(80129),H=n.n(M),K=n(73727),$=n(250),f=n(93471),U=n(18071),a=n(17818),e=n(85893),W=["q"];function J(v){var O=v.data,R=v.history,A=v.baseUrl,C=v.onDelete,h=(0,d.useCallback)(function(){var p=(0,B.Z)((0,b.Z)().mark(function D(I){var w,P;return(0,b.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return w="\u786E\u5B9A\u5220\u9664\u95E8\u5E97 \u201C".concat(I.name,"\u201D \u5417\uFF1F"),o.next=3,a.u_.confirm({title:"\u786E\u5B9A\u5220\u9664",content:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"tip-confirm",children:w}),(0,e.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]}),okClassName:"btn-danger",okText:"\u5220\u9664"});case 3:if(P=o.sent,P.isConfirmed){o.next=6;break}return o.abrupt("return");case 6:return o.next=8,C(I.id);case 8:a.FN.success("\u95E8\u5E97 \u201C".concat(I.name,"\u201D \u5220\u9664\u6210\u529F"),2e3,{placement:"bottom-start",progressBar:!0});case 9:case"end":return o.stop()}},D)}));return function(D){return p.apply(this,arguments)}}(),[C]),E=(0,d.useCallback)(function(p){p.key=="view"?R.push("".concat(A,"/").concat(O.id)):p.key=="delete"&&h(O)},[A,O,h,R]);return(0,e.jsx)(a.Lt,{overlay:(0,e.jsxs)(a.v2,{onClick:E,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold fs-8 w-125px py-4",children:[(0,e.jsx)(a.v2.Item,{className:"px-3",children:"\u7F16\u8F91"},"view"),(0,e.jsx)(a.v2.Item,{className:"px-3 actions-delete",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",children:(0,e.jsxs)(a.zx,{className:"fs-8",variant:"light",activeColor:"light-primary",children:["\u64CD\u4F5C",(0,e.jsx)(Z.JO,{className:"svg-icon-5 ms-2 me-n1",name:"Duotune/arr072"})]})})}function z(v){var O,R,A=v.history,C=v.location,h=C.pathname,E=(0,d.useMemo)(function(){var t=v.location.query,s=t.q,l=(0,g.Z)(t,W);return s&&(l.filter={name_contains:s}),l},[v.location]),p=(0,d.useMemo)(function(){if(!E.orderBy)return{order:"descend",field:"createdAt"};var t=E.orderBy.split("_"),s=(0,N.Z)(t,2),l=s[0],x=s[1];return{order:x=="desc"?"descend":"ascend",field:l}},[E.orderBy]),D=(0,$.OE)({refetchQueries:[$.b_]}),I=(0,N.Z)(D,1),w=I[0],P=(0,$.ZL)({fetchPolicy:"cache-and-network",variables:E}),r=P.data,o=P.loading,i=P.previousData,u=(0,d.useMemo)(function(){return o?(i==null?void 0:i.total.totalCount)||0:(r==null?void 0:r.total.totalCount)||0},[r==null?void 0:r.total.totalCount,o,i==null?void 0:i.total]),c=(0,d.useMemo)(function(){return o?(i==null?void 0:i.landingStores)||{total:0,current:1}:(r==null?void 0:r.landingStores)||{total:0,current:1}},[r==null?void 0:r.landingStores,o,i==null?void 0:i.landingStores]),y=(0,d.useMemo)(function(){var t;if(o){var s;return((i==null||(s=i.landingStores)===null||s===void 0?void 0:s.edges)||[]).map(function(l){return l.node})}return((r==null||(t=r.landingStores)===null||t===void 0?void 0:t.edges)||[]).map(function(l){return l.node})},[r==null?void 0:r.landingStores,o,i==null?void 0:i.landingStores]),_=(0,d.useCallback)(function(t){A.replace(C.pathname+"?"+H().stringify({q:t}))},[A,C.pathname]),j=(0,d.useCallback)(function(t,s,l){var x,k={};if((x=E.filter)!==null&&x!==void 0&&x.name_contains){var m;k.q=(m=E.filter)===null||m===void 0?void 0:m.name_contains}l&&(k.orderBy=l.field+"_"+(l.order=="ascend"?"asc":"desc")),k.page=t.current,A.replace(C.pathname+"?"+H().stringify(k))},[A,C.pathname,(O=E.filter)===null||O===void 0?void 0:O.name_contains]),G=(0,d.useCallback)((0,B.Z)((0,b.Z)().mark(function t(){var s,l,x,k,m,X=arguments;return(0,b.Z)().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:for(s=X.length,l=new Array(s),x=0;x<s;x++)l[x]=X[x];return L.next=3,w({variables:{ids:l}});case 3:return k=L.sent,m=k.data,L.abrupt("return",(m==null?void 0:m.deleteLandingStore)||0);case 6:case"end":return L.stop()}},t)})),[w]),T=(0,d.useCallback)(function(t){return(0,B.Z)((0,b.Z)().mark(function s(){var l,x;return(0,b.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return l="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(t.length," \u4E2A\u95E8\u5E97\u5417\uFF1F"),m.next=3,a.u_.confirm({title:"\u786E\u5B9A\u5220\u9664",content:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"tip-confirm",children:l}),(0,e.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]}),okClassName:"btn-danger",okText:"\u5220\u9664"});case 3:if(x=m.sent,x.isConfirmed){m.next=6;break}return m.abrupt("return");case 6:return m.next=8,G.apply(void 0,(0,S.Z)(t));case 8:a.FN.success("\u95E8\u5E97\u6279\u91CF\u5220\u9664\u6210\u529F",2e3,{placement:"bottom-start",progressBar:!0});case 9:case"end":return m.stop()}},s)}))},[G]),Y=(0,d.useMemo)(function(){return function(t){return(0,e.jsx)("div",{children:(0,e.jsx)(a.zx,{color:"success",onClick:T(t),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},[T]);return(0,e.jsxs)(U.vs,{footer:!1,children:[(0,e.jsxs)("div",{className:"d-flex flex-wrap flex-stack pb-7",children:[(0,e.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[(0,e.jsxs)("h3",{className:"fw-bolder me-5",children:["\u95E8\u5E97 (",u,")"]}),(0,e.jsx)(a.II.Search,{onSearch:_,defaultValue:(R=E.filter)===null||R===void 0?void 0:R.name_contains,placeholder:"\u641C\u7D22",className:"border-body bg-body w-250px"})]}),(0,e.jsx)(f.ZX,{children:(0,e.jsx)("div",{className:"d-flex my-0",children:(0,e.jsx)(a.zx,{as:K.Link,to:"".concat(h,"/new"),children:"\u65B0\u589E\u95E8\u5E97"})})})]}),!u&&!o?(0,e.jsx)(a.Zb,{className:"mb-5 mb-xl-10",children:(0,e.jsx)(a.HY,{title:"\u8FD8\u6CA1\u6709\u95E8\u5E97",description:"\u9A6C\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u95E8\u5E97\u8BD5\u8BD5",image:"/assets/media/illustrations/sigma-1/4.png",children:(0,e.jsx)(a.zx,{as:K.Link,variant:"primary",to:"".concat(h,"/new"),children:"\u65B0\u589E\u95E8\u5E97"})})}):(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(a.Zb,{className:"mb-5 mb-xl-10",children:(0,e.jsx)(a.Zb.Body,{children:(0,e.jsx)(a.bH,{overlayClassName:"bg-white bg-opacity-25",loading:o,children:(0,e.jsx)(a.iA,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(s){return(0,e.jsxs)(e.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,e.jsx)("span",{className:"mx-2",children:s}),"\u4E2A\u95E8\u5E97"]})},toolbar:Y},noRowsRenderer:function(){return(0,e.jsx)(a.HY,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:[{key:"code",title:"\u5E97\u53F7",sorter:!0,sortOrder:p.field=="code"?p.order:void 0,width:80},{key:"name",title:"\u540D\u79F0",sorter:!0,sortOrder:p.field=="name"?p.order:void 0,render:function(s,l){return(0,e.jsx)("div",{children:(0,e.jsx)(K.Link,{className:"text-gray-700",to:"".concat(h,"/").concat(l.id),children:s})})}},{key:"qrCode",title:"\u4E8C\u7EF4\u7801",width:60,render:function(s){return s?(0,e.jsx)("img",{src:"https://api.asany.cn"+"/preview/".concat(s.id),className:"h-30px w-30px"}):(0,e.jsx)(Z.JO,{className:"svg-icon-2qx text-muted",name:"Bootstrap/qr-code"})}},{key:"actions",title:"\u64CD\u4F5C",width:100,render:function(s,l){return(0,e.jsx)(J,{baseUrl:h,onDelete:G,history:v.history,data:l})}}],pagination:c,onChange:j,dataSource:y})})})})})]})}F.default=z}}]);