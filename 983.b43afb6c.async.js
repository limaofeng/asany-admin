(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[983],{10983:function(fe,_,c){"use strict";c.r(_),c.d(_,{default:function(){return Ae}});var i=c(39428),x=c(3182),I=c(2824),F=c(11849),r=c(67294),G=c(17187),ve=c.n(G),ge=c(54406),U=c(28865),he=c(94184),re=c.n(he),xe=c(96486),ne=c(51615),pe=c(30381),le=c.n(pe),be=c(24561),T=c(32669),k=c(88403),E=c(17818),Me=c(54108),a=c(85893);function ke(t){return t.mimeType=="text/html"?(0,Me.Kv)(t.body||""):t.body}function ye(t){var g=le()(t.date),e=le()().diff(g,"days");return e==0?g.format("A HH:mm"):e==1?g.fromNow():g.format("YYYY-MM-DD")}function Ce(t){return t.mailboxName==k.LJ.INBOX.id?t.from.map(k.ss).join("\u3001"):(t.mailboxName==k.LJ.Sent.id,t.to.map(k.ss).join("\u3001"))}function Ze(t){var g=t.index,e=t.data,y=t.refresh,A=t.forwardNextMessage,h=(0,T.Rh)({refetchQueries:[T.f_,T.Nd]}),$=(0,I.Z)(h,1),s=$[0],L=(0,T.aB)({refetchQueries:[T.f_]}),v=(0,I.Z)(L,1),p=v[0],S=(0,T.k0)({refetchQueries:[T.Nd]}),H=(0,I.Z)(S,1),J=H[0],W=(0,r.useCallback)((0,x.Z)((0,i.Z)().mark(function w(){return(0,i.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,p({variables:{id:e.id,flags:["seen"],mode:e.seen?"REMOVE":"ADD"}});case 2:y({type:"updateFlags",key:e.id,index:g});case 3:case"end":return u.stop()}},w)})),[e.id,e.seen,g,y,p]),P=(0,r.useCallback)((0,x.Z)((0,i.Z)().mark(function w(){return(0,i.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,s({variables:{id:e.id,mailbox:"archive"}});case 2:A(),y({type:"toFolder",key:e.id,index:g});case 4:case"end":return u.stop()}},w)})),[e.id,A,y,s,g]),z=(0,r.useCallback)((0,x.Z)((0,i.Z)().mark(function w(){var j;return(0,i.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e.mailboxName==k.LJ.Drafts.id||e.mailboxName==k.LJ.Trash.id)){n.next=11;break}return n.next=3,E.u_.confirm({title:"\u8B66\u544A",content:e.mailboxName==k.LJ.Trash.id?"\u786E\u5B9A\u6C38\u4E45\u5220\u9664\u4FE1\u606F\uFF1F":"\u786E\u5B9A\u6C38\u4E45\u5220\u9664\u8349\u7A3F\uFF1F"});case 3:if(j=n.sent,j.isConfirmed){n.next=6;break}return n.abrupt("return");case 6:return n.next=8,J({variables:{id:e.id}});case 8:y({type:"delete",key:e.id,index:g}),n.next=14;break;case 11:return n.next=13,s({variables:{id:e.id,mailbox:"trash"}});case 13:y({type:"toFolder",key:e.id,index:g});case 14:A();case 15:case"end":return n.stop()}},w)})),[e.mailboxName,e.id,A,J,y,g,s]);return(0,a.jsxs)("div",{className:re()("d-flex flex-column email-message-actions",{"message-unread":!e.seen}),onClick:function(j){return j.stopPropagation()},children:[(0,a.jsx)("a",{onClick:W,className:"flags-read",children:(0,a.jsx)(U.JO,{className:"svg-icon-7 svg-icon-success",name:e.seen?"Duotune/abs009":"Duotune/abs050"})}),![k.LJ.Archive.id,k.LJ.Drafts.id,k.LJ.Trash.id].includes(e.mailboxName)&&(0,a.jsx)("a",{onClick:P,children:(0,a.jsx)(U.JO,{className:"svg-icon-6",name:k.LJ.Archive.icon})}),(0,a.jsx)("a",{onClick:z,children:(0,a.jsx)(U.JO,{className:"svg-icon-5",name:"Duotune/gen027"})})]})}function we(t){var g=t.useMessage,e=t.style,y=t.forwardNextMessage,A=t.active,h=t.index,$=t.onClick,s=t.refresh,L=(0,ne.k6)(),v=g(h),p=(0,r.useCallback)(function(){$((0,F.Z)((0,F.Z)({},v),{},{index:h}))},[v,h,$]),S=(0,r.useCallback)(function(){v.mailboxName==k.LJ.Drafts.id&&L.push("/mail/compose/".concat(v.id),{message:v})},[v,L]);return(0,a.jsx)("div",{style:e,onClick:v&&p,onDoubleClick:v&&S,className:re()("email-message d-flex flex-row",{active:A}),children:v?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Ze,{forwardNextMessage:y,index:h,refresh:s,data:v}),(0,a.jsxs)("div",{className:"email-message-body d-flex flex-column",children:[(0,a.jsxs)("div",{className:"email-message-attrs",children:[(0,a.jsx)(U.JO,{className:"svg-icon-4 smart-type",name:"Duotune/abs018"}),(0,a.jsx)("span",{className:"email-user",children:Ce(v)||"(\u65E0\u6536\u4EF6\u4EBA)"}),(0,a.jsx)("span",{className:"inbox-time",children:ye(v)})]}),(0,a.jsx)("div",{className:"email-message-title",children:v.subject||"(\u65E0\u4E3B\u9898)"}),(0,a.jsx)("div",{className:"email-message-summary",children:ke(v)||"\u6B64\u90AE\u4EF6\u4E2D\u6CA1\u6709\u6587\u672C\u5185\u5BB9\u3002"})]})]}):(0,a.jsx)("div",{className:"email-message-loading",children:(0,a.jsxs)(be.ZP,{speed:2,width:500,height:69,viewBox:"0 0 500 69",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,a.jsx)("rect",{x:"24",y:"3",rx:"0",ry:"0",width:"476",height:"18"}),(0,a.jsx)("rect",{x:"0",y:"50",rx:"0",ry:"0",width:"500",height:"16"}),(0,a.jsx)("rect",{x:"0",y:"3",rx:"2",ry:"2",width:"18",height:"18"}),(0,a.jsx)("rect",{x:"0",y:"27",rx:"0",ry:"0",width:"500",height:"16"})]})})})}var Ne=we,je=c(18071),K=c(25496),se=320,oe=500,ee={totalCount:0,pageSize:0,totalPage:0,currentPage:0},De=80;function Re(t){var g=(0,r.useRef)(new(ve())),e=(0,r.useRef)({page:1,mailbox:t,loading:!1,messages:[],pagination:(0,F.Z)({},ee)}),y=(0,r.useReducer)(function(u){return u+1},0),A=(0,I.Z)(y,2),h=A[1],$=(0,T.YD)({fetchPolicy:"cache-and-network"}),s=(0,I.Z)($,2),L=s[0],v=s[1],p=v.data,S=v.loading,H=v.refetch;e.current.loading=S;var J=(0,r.useCallback)(function(u){u.edges.map(function(n){return n.node}).forEach(function(n,d){var b=u.pageSize*(u.currentPage-1)+d;e.current.messages[b]=n}),g.current.emit("messages")},[]),W=(0,r.useCallback)(function(){var u=(0,x.Z)((0,i.Z)().mark(function n(d){return(0,i.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!(e.current.loading&&e.current.page==d)){o.next=2;break}return o.abrupt("return");case 2:if(!e.current.loading){o.next=7;break}return o.next=5,(0,K._v)(120);case 5:o.next=2;break;case 7:e.current.page=d,H({filter:{mailbox:e.current.mailbox},page:e.current.page});case 9:case"end":return o.stop()}},n)}));return function(n){return u.apply(this,arguments)}}(),[H]),P=(0,r.useCallback)(function(){var u=(0,x.Z)((0,i.Z)().mark(function n(d){var b,o;return(0,i.Z)().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:b=e.current.pagination.pageSize,e.current.pagination.totalCount%e.current.pagination.pageSize==1&&e.current.pagination.totalPage--,e.current.pagination.totalCount--,e.current.messages.splice(d,1),o=Math.ceil((d+1)/b),W(o);case 6:case"end":return O.stop()}},n)}));return function(n){return u.apply(this,arguments)}}(),[W]),z=(0,r.useCallback)(function(){var u=(0,x.Z)((0,i.Z)().mark(function n(d){return(0,i.Z)().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!e.current.loading){o.next=5;break}return o.next=3,(0,K._v)(120);case 3:o.next=0;break;case 5:if(!(e.current.page==d||d>e.current.pagination.totalPage)){o.next=7;break}return o.abrupt("return");case 7:e.current.page=d,L({variables:{filter:{mailbox:e.current.mailbox},page:e.current.page}});case 9:case"end":return o.stop()}},n)}));return function(n){return u.apply(this,arguments)}}(),[L]),w=(0,r.useCallback)(function(){var u=(0,x.Z)((0,i.Z)().mark(function n(d){var b;return(0,i.Z)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(b=e.current.messages[d],b){m.next=12;break}case 2:if(b=e.current.messages[d],b){m.next=8;break}return m.next=6,z(Math.ceil((d+1)/e.current.pagination.pageSize));case 6:return m.next=8,(0,K._v)(30);case 8:if(!(d>=e.current.messages.length)){m.next=11;break}return console.log("\u7D22\u5F15\u8D85\u51FA\u6700\u5927\u957F\u5EA6 [".concat(d,"/").concat(e.current.messages.length,"]")),m.abrupt("return",e.current.messages[d-1]);case 11:if(!b){m.next=2;break}case 12:return m.abrupt("return",b);case 13:case"end":return m.stop()}},n)}));return function(n){return u.apply(this,arguments)}}(),[z]);(0,r.useEffect)(function(){g.current.setMaxListeners(1e3)},[]),(0,r.useEffect)(function(){e.current.mailbox!=t&&(e.current.mailbox=t,e.current.pagination=(0,F.Z)({},ee),e.current.messages.length=0,e.current.page=1),L({variables:{filter:{mailbox:t},page:e.current.page}})},[L,t]),(0,r.useEffect)(function(){S||!(p!=null&&p.mailboxMessages)||(e.current.pagination=(0,F.Z)({},p.mailboxMessages)||e.current.pagination,J(p.mailboxMessages),h())},[J,p==null?void 0:p.mailboxMessages,S]);var j=function(n){var d=(0,r.useReducer)(function(B){return B+1},0),b=(0,I.Z)(d,2),o=b[1],m=(0,r.useRef)({index:n});m.current.index=n,m.current.message=e.current.messages[n],(0,r.useEffect)(function(){if(n!=-1){var B=n+1,X,ae=function(){var te=(0,x.Z)((0,i.Z)().mark(function Q(){return(0,i.Z)().wrap(function(N){for(;;)switch(N.prev=N.next){case 0:if(!e.current.loading){N.next=5;break}return N.next=3,(0,K._v)(300);case 3:N.next=0;break;case 5:if(!m.current.message){N.next=8;break}return m.current.timer&&clearTimeout(m.current.timer),N.abrupt("return");case 8:z(Math.ceil(B/e.current.pagination.pageSize)),X=setTimeout(ae,300);case 10:case"end":return N.stop()}},Q)}));return function(){return te.apply(this,arguments)}}();return X=setTimeout(ae,300),function(){X&&clearTimeout(X)}}},[n]);var O=(0,r.useCallback)(function(){var B=e.current.messages[m.current.index];B!=m.current.message&&(m.current.message=B,o())},[]);return(0,r.useEffect)(function(){return g.current.addListener("messages",O),function(){g.current.removeListener("messages",O)}},[O]),m.current.message};return[e.current.pagination,S,j,{loadMessage:w,refetch:W,refetchWithRemove:P}]}function Ie(t){var g=t.children,e=t.match.params.folder,y=(0,ne.$B)({path:"/mail/:folder/:id",strict:!0,sensitive:!0}),A=y==null?void 0:y.params.id,h=(0,ne.k6)(),$=(0,r.useRef)(null),s=(0,r.useRef)({width:se,folder:e,activeIndex:-1,loading:!1,pagination:ee}),L=(0,r.useReducer)(function(f){return f+1},0),v=(0,I.Z)(L,2),p=v[1];s.current.folder=e,s.current.activeId=A;var S=(0,T.nE)({refetchQueries:[T.Nd]}),H=(0,I.Z)(S,1),J=H[0],W=Re(e),P=(0,I.Z)(W,4),z=P[0],w=P[1],j=P[2],u=P[3],n=u.loadMessage,d=u.refetch,b=u.refetchWithRemove;s.current.loading=w,s.current.pagination=z;var o=(0,r.useMemo)(function(){return(0,xe.debounce)(function(){p()},10)},[]),m=(0,r.useCallback)(function(f){s.current.activeIndex=f.index,h.push("/mail/".concat(f.mailboxName.toLowerCase(),"/").concat(f.id))},[h]);s.current.message=j(s.current.activeIndex);var O=(0,r.useCallback)(function(){var f=(0,x.Z)((0,i.Z)().mark(function M(C){var Z;return(0,i.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(s.current.activeIndex!=C.index){l.next=2;break}return l.abrupt("return");case 2:return l.next=4,n(C.index);case 4:if(Z=l.sent,s.current.activeIndex=C.index,s.current.activeId!=Z.id){l.next=9;break}return p(),l.abrupt("return");case 9:h.push("/mail/".concat(Z.mailboxName.toLowerCase(),"/").concat(Z.id));case 10:case"end":return l.stop()}},M)}));return function(M){return f.apply(this,arguments)}}(),[h,n]),B=(0,r.useCallback)(function(f){s.current.width+=f,o()},[o]),X=(0,r.useCallback)(function(){s.current.width=Math.min(oe,Math.max(se,s.current.width))},[]),ae=Math.min(oe,Math.max(se,s.current.width));(0,r.useMemo)(function(){s.current.pagination=(0,F.Z)({},ee),s.current.activeIndex=-1,s.current.folder=e},[e]);var te=(0,r.useCallback)(function(){var f=(0,x.Z)((0,i.Z)().mark(function M(C){var Z;return(0,i.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n(C);case 2:Z=l.sent,s.current.activeIndex=C,h.push("/mail/".concat(Z.mailboxName.toLowerCase(),"/").concat(Z.id));case 5:case"end":return l.stop()}},M)}));return function(M){return f.apply(this,arguments)}}(),[h,n]),Q=(0,r.useCallback)(function(){var f=(0,x.Z)((0,i.Z)().mark(function M(C){var Z;return(0,i.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(Z=Math.ceil((C.index+1)/s.current.pagination.pageSize),!["toFolder","delete"].includes(C.type)){l.next=6;break}return l.next=4,b(C.index);case 4:l.next=8;break;case 6:return l.next=8,d(Z);case 8:case"end":return l.stop()}},M)}));return function(M){return f.apply(this,arguments)}}(),[d,b]),de=(0,r.useCallback)((0,x.Z)((0,i.Z)().mark(function f(){var M,C;return(0,i.Z)().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return M=0,D.next=3,E.u_.confirm({title:"\u6E05\u7A7A&nbsp;&nbsp;\u56DE\u6536\u7AD9",content:"\u786E\u5B9A\u6C38\u4E45\u5220\u9664 \u56DE\u6536\u7AD9 \u6587\u4EF6\u5939\u5185\u7684\u5168\u90E8\u90AE\u4EF6\uFF1F",preConfirm:function(){var l=(0,x.Z)((0,i.Z)().mark(function ue(){var V,Y,ce;return(0,i.Z)().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return V=document.querySelector(".swal2-confirm"),V.textContent="\u6E05\u7406\u4E2D...",Y=document.createElement("span"),Y.classList.add("spinner-border-sm","ms-2","spinner-border","align-middle"),V.appendChild(Y),q.next=7,(0,K.gw)(J(),350);case 7:ce=q.sent,M=ce.data.clearMailboxMessagesInTrashMailbox;case 9:case"end":return q.stop()}},ue)}));function ie(){return l.apply(this,arguments)}return ie}()});case 3:if(C=D.sent,C.isConfirmed){D.next=6;break}return D.abrupt("return");case 6:s.current.activeIndex=-1,p(),d(1),h.push("/mail/".concat(s.current.folder)),E.u_.success({title:"\u64CD\u4F5C\u6210\u529F",content:"\u56DE\u6536\u7AD9\u5DF2\u88AB\u6E05\u7A7A, \u5171\u5220\u9664 ".concat(M," \u5C01\u90AE\u4EF6"),timer:3e3});case 11:case"end":return D.stop()}},f)})),[J,h,d]),N=(0,r.useMemo)(function(){var f=k.GG.find(function(M){return M.id.toLowerCase()==e});return f||{id:e,name:e,icon:void 0}},[e]),Le=(0,r.useCallback)(function(){},[]),Te=(0,r.useCallback)(function(){return(0,a.jsxs)("div",{className:"mailbox-is-empty",style:{height:"100%"},children:[(0,a.jsx)("img",{src:"/assets/media/illustrations/dozzy-1/4.png"}),(0,a.jsx)("span",{className:"empty-title",children:w?"\u52A0\u8F7D\u4E2D...":"\u6B64\u6587\u4EF6\u5939\u4E3A\u7A7A"}),(0,a.jsx)("span",{className:"empty-subtitle",children:w?"\u7A0D\u7B49\u4E00\u4F1A,\u6B63\u5728\u83B7\u53D6\u6570\u636E":"\u8BF7\u67E5\u770B\u5176\u4ED6\u6587\u4EF6\u5939"})]})},[w]),Ee=(0,r.useCallback)(function(f){var M=f.key,C=f.style,Z=f.index,D=f.isActive,l=s.current,ie=l.folder,ue=l.pagination;return(0,a.jsx)(Ne,{index:Z,style:(0,F.Z)({},C),onClick:m,useMessage:j,refresh:Q,forwardNextMessage:(0,x.Z)((0,i.Z)().mark(function V(){var Y;return(0,i.Z)().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:if(s.current.activeIndex!=-1){R.next=2;break}return R.abrupt("return");case 2:if(ue.totalCount!=0){R.next=6;break}h.push("/mail/".concat(s.current.folder)),R.next=15;break;case 6:if(!(Z<s.current.activeIndex)){R.next=11;break}s.current.activeIndex-=1,p(),R.next=15;break;case 11:return R.next=13,n(s.current.activeIndex);case 13:Y=R.sent,h.push("/mail/".concat(s.current.folder,"/").concat(Y.id));case 15:case"end":return R.stop()}},V)})),mailbox:ie,active:!!D},M)},[m,h,n,Q,j]),me=s.current,Se=me.activeIndex,ze=me.message;return(0,a.jsxs)(je.vs,{className:"apps-email-mailbox",header:!1,footer:!1,children:[(0,a.jsxs)(ge.w_,{className:re()("mailbox-resizer d-flex flex-column flex-lg-row"),style:{width:ae},onResize:B,onResizeEnd:X,children:[(0,a.jsx)("div",{className:"flex-column flex-lg-row-auto w-100 mb-10 mb-lg-0",children:(0,a.jsxs)(E.Zb,{flush:!0,className:"mailbox-card",children:[(0,a.jsx)(E.Zb.Header,{children:(0,a.jsxs)("form",{className:"d-flex align-items-center position-relative w-100",autoComplete:"off",children:[(0,a.jsx)(U.ZP,{name:"Duotune/gen021",className:"svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y"}),(0,a.jsx)(E.II,{solid:!0,className:"px-15",placeholder:"\u641C\u7D22\u90AE\u4EF6\u2026"})]})}),(0,a.jsxs)(E.Zb.Body,{children:[(0,a.jsxs)("div",{className:"mailbox-list-header",children:[N.icon&&(0,a.jsx)(U.ZP,{className:"svg-icon-5 svg-icon-success",name:N.icon}),(0,a.jsx)("span",{className:"box-name",children:N.name}),N.id==k.LJ.Trash.id&&!!z.totalCount&&(0,a.jsx)("div",{className:"box-actions",children:(0,a.jsx)(E.zx,{className:"trash-clear",variant:"light-danger",size:"sm",activeColor:"light-danger",onClick:de,children:"\u6E05\u7A7A\xA0\xA0\u56DE\u6536\u7AD9"})})]}),(0,a.jsxs)("div",{className:"infinite-scroll-container",children:[(0,a.jsx)(E.AP,{isAnimating:!!w,position:"top"}),(0,a.jsx)(E.v_,{ref:$,rowCount:z.totalCount,rowHeight:De,scrollToIndex:s.current.activeIndex,onScrollToIndex:O,onScroll:Le,rowRenderer:Ee,noRowsRenderer:Te,className:"mailbox-list"})]})]})]})}),(0,a.jsx)("div",{className:"flex-lg-row-fluid ms-lg-7 ms-xl-10"})]}),A?r.cloneElement(g,{pagination:z,activeIndex:Se,goto:te,refresh:Q,message:ze}):(0,a.jsx)("div",{className:"mail-message-details mailbox-message-is-empty",children:(0,a.jsx)("img",{src:"/assets/media/illustrations/sketchy-1/16.png"})})]})}var Ae=Ie},88403:function(fe,_,c){"use strict";c.d(_,{LJ:function(){return x},GG:function(){return I},ss:function(){return F}});var i=c(5618),x={INBOX:{id:"INBOX",name:"\u6536\u4EF6\u7BB1",icon:"Duotune/com010",badge:"success"},Sent:{id:"Sent",name:"\u5DF2\u53D1\u9001",icon:"Duotune/gen016"},Drafts:{id:"Drafts",name:"\u8349\u7A3F",icon:"Duotune/gen009",badge:"primary"},Archive:{id:"Archive",name:"\u5F52\u6863",icon:"Duotune/lay010"},Spam:{id:"Spam",name:"\u5783\u573E\u90AE\u4EF6",icon:"Duotune/gen044"},Trash:{id:"Trash",name:"\u56DE\u6536\u7AD9",icon:"Duotune/gen027",badge:"warning"},Outbox:{id:"Outbox",name:"\u53D1\u4EF6\u7BB1",icon:"Duotune/gen027"}},I=Object.keys(x).map(function(r){return x[r]});function F(r){var G=(0,i.N8)(r);return G.name||G.address&&G.address.substring(0,G.address.indexOf("@"))}}}]);