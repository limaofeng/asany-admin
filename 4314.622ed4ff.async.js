(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[4314],{91896:function(K,A,t){"use strict";t.d(A,{Z:function(){return u}});function u(){return u=Object.assign?Object.assign.bind():function(c){for(var i=1;i<arguments.length;i++){var C=arguments[i];for(var p in C)Object.prototype.hasOwnProperty.call(C,p)&&(c[p]=C[p])}return c},u.apply(this,arguments)}},50480:function(K,A,t){"use strict";var u=t(28865),c=t(51248),i=t(85893);function C(p){var j=p.layout,b=p.children,N=p.onLayout;return(0,i.jsxs)("div",{className:"d-flex flex-wrap my-1",children:[j&&(0,i.jsxs)("ul",{className:"nav nav-pills me-6 mb-2 mb-sm-0",children:[(0,i.jsx)("li",{className:"nav-item m-0 me-3",children:(0,i.jsx)(c.Z,{variant:"light",color:"muted",active:j=="card",activeColor:"primary",onClick:N==null?void 0:N.bind(null,"card"),icon:(0,i.jsx)(u.ZP,{name:"Duotune/gen024",className:"svg-icon-1"})})}),(0,i.jsx)("li",{className:"nav-item m-0",children:(0,i.jsx)(c.Z,{variant:"light",color:"muted",active:j=="table",onClick:N==null?void 0:N.bind(null,"table"),activeColor:"primary",className:"me-3",icon:(0,i.jsx)(u.ZP,{name:"Duotune/abs015",className:"svg-icon-1"})})})]}),b]})}A.Z=C},14843:function(K,A,t){"use strict";t.d(A,{u7:function(){return u.u7},pM:function(){return u.pM},dP:function(){return u.dP},zR:function(){return u.zR},bo:function(){return u.bo},CF:function(){return u.CF},hT:function(){return u.hT},X4:function(){return u.X4},rq:function(){return u.rq},qb:function(){return u.qb},a$:function(){return u.a$},mp:function(){return u.mp},WE:function(){return u.WE},HC:function(){return u.HC},cT:function(){return G},Hr:function(){return L},r3:function(){return u.r3},bI:function(){return u.bI},A6:function(){return u.A6},LV:function(){return u.LV}});var u=t(8305),c=t(39428),i=t(3182),C=t(2824),p=t(67294),j=t(17818),b=t(85893);function N(n,I){var e,P=(0,u.rz)({variables:{id:n==null?void 0:n.id},refetchQueries:[{query:u.dP,variables:{id:n==null||(e=n.application)===null||e===void 0?void 0:e.id}}]}),T=(0,C.Z)(P,1),S=T[0],J=(0,p.useCallback)((0,i.Z)((0,c.Z)().mark(function H(){var O;return(0,c.Z)().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,j.u_.confirm({title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u8DEF\u7531\u5417\uFF1F",content:(0,b.jsxs)(b.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,b.jsx)("strong",{children:n.name}),"\u201D\u3002\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u9006\u8F6C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u60A8\u786E\u5B9A\u5220\u9664\u5417\uFF1F"]}),okText:"\u5220 \u9664",okClassName:"btn-danger"});case 2:if(O=F.sent,!O.isConfirmed){F.next=8;break}return F.next=6,S();case 6:j.FN.success("\u5220\u9664\u6210\u529F"),I(n);case 8:case"end":return F.stop()}},H)})),[S,n,I]);return[J]}var G=N,W=t(11849),x=t(25496);function Q(n,I){var e,P,T,S=j.l0.useForm(),J=(0,p.useState)(!1),H=(0,C.Z)(J,2),O=H[0],B=H[1],F=(0,u.X4)({fetchPolicy:"no-cache",refetchQueries:[{query:u.dP,variables:{id:n==null||(e=n.application)===null||e===void 0?void 0:e.id}}]}),q=(0,C.Z)(F,1),V=q[0],_=(0,u.LV)({fetchPolicy:"no-cache",refetchQueries:[{query:u.dP,variables:{id:n==null||(P=n.application)===null||P===void 0?void 0:P.id}}]}),ee=(0,C.Z)(_,1),Y=ee[0],ne=(0,p.useMemo)(function(){return n!=null&&n.id?(0,i.Z)((0,c.Z)().mark(function a(){var r,o,m;return(0,c.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return B(!0),s.prev=1,s.next=4,S.validateFields();case 4:return r=s.sent,s.next=7,j.FN.promise((0,x.gw)(Y({variables:{id:n.id,input:(0,W.Z)({},r)}}),350),{pending:"\u63D0\u4EA4\u4E2D...",success:{render:function(){return(0,b.jsxs)(b.Fragment,{children:["\u8DEF\u7531 ",(0,b.jsx)("strong",{children:r.name})," \u4FDD\u5B58\u6210\u529F"]})}},error:"\u63D0\u4EA4\u51FA\u9519"},{duration:2e3,placement:"top-center"});case 7:o=s.sent,m=o.data,I(m.updateRoute),B(!1),s.next=16;break;case 13:s.prev=13,s.t0=s.catch(1),B(!1);case 16:case"end":return s.stop()}},a,null,[[1,13]])})):(0,i.Z)((0,c.Z)().mark(function a(){var r,o,m;return(0,c.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return B(!0),s.prev=1,s.next=4,S.validateFields();case 4:return r=s.sent,s.next=7,j.FN.promise((0,x.gw)(V({variables:{input:(0,W.Z)((0,W.Z)({},r),{},{application:n.application.id})}}),350),{pending:"\u63D0\u4EA4\u4E2D...",success:{render:function(){return(0,b.jsxs)(b.Fragment,{children:["\u8DEF\u7531 ",(0,b.jsx)("strong",{children:r.name})," \u65B0\u589E\u6210\u529F"]})}},error:"\u63D0\u4EA4\u51FA\u9519"},{duration:2e3,placement:"top-center"});case 7:o=s.sent,m=o.data,I(m.createRoute),B(!1),s.next=16;break;case 13:s.prev=13,s.t0=s.catch(1),B(!1);case 16:case"end":return s.stop()}},a,null,[[1,13]])}))},[V,n==null||(T=n.application)===null||T===void 0?void 0:T.id,n==null?void 0:n.id,S,I,Y]);return[ne,{form:S,submitting:O}]}var L=Q},94314:function(K,A,t){"use strict";t.r(A),t.d(A,{default:function(){return ne}});var u=t(11849),c=t(2824),i=t(67294),C=t(28865),p=t(30381),j=t.n(p),b=t(7020),N=t(91896),G=t(54406),W=t(5618),x=t(39428),Q=t(3182),L=t(14843),n=t(17818),I=t(25496),e=t(85893);function P(a,r){var o=n.l0.useForm(),m=(0,i.useState)(!1),d=(0,c.Z)(m,2),s=d[0],f=d[1],k=(0,L.CF)({fetchPolicy:"no-cache",refetchQueries:[{query:L.u7,variables:{id:a==null?void 0:a.libraryId}}]}),M=(0,c.Z)(k,1),y=M[0],w=(0,L.bI)({fetchPolicy:"no-cache",refetchQueries:[{query:L.u7,variables:{id:a==null?void 0:a.libraryId}}]}),$=(0,c.Z)(w,1),v=$[0],z=(0,i.useMemo)(function(){return a!=null&&a.id?(0,Q.Z)((0,x.Z)().mark(function R(){var Z,g,E;return(0,x.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f(!0),l.prev=1,l.next=4,o.validateFields();case 4:return Z=l.sent,l.next=7,n.FN.promise((0,I.gw)(v({variables:{id:a.id,input:(0,u.Z)((0,u.Z)({},Z),{},{libraryId:a.libraryId})}}),350),{pending:"\u63D0\u4EA4\u4E2D...",success:{render:function(){return(0,e.jsxs)(e.Fragment,{children:["\u7EC4\u4EF6 ",(0,e.jsx)("strong",{children:Z.title})," \u4FDD\u5B58\u6210\u529F"]})}},error:"\u63D0\u4EA4\u51FA\u9519"},{duration:2e3,placement:"top-center"});case 7:g=l.sent,E=g.data,r(E.updateComponent),f(!1),l.next=16;break;case 13:l.prev=13,l.t0=l.catch(1),f(!1);case 16:case"end":return l.stop()}},R,null,[[1,13]])})):(0,Q.Z)((0,x.Z)().mark(function R(){var Z,g,E;return(0,x.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f(!0),l.prev=1,l.next=4,o.validateFields();case 4:return Z=l.sent,l.next=7,n.FN.promise((0,I.gw)(y({variables:{input:(0,u.Z)((0,u.Z)({},Z),{},{libraryId:a.libraryId})}}),350),{pending:"\u63D0\u4EA4\u4E2D...",success:{render:function(){return(0,e.jsxs)(e.Fragment,{children:["\u7EC4\u4EF6 ",(0,e.jsx)("strong",{children:Z.name})," \u65B0\u589E\u6210\u529F"]})}},error:"\u63D0\u4EA4\u51FA\u9519"},{duration:2e3,placement:"top-center"});case 7:g=l.sent,E=g.data,r(E.createComponent),f(!1),l.next=16;break;case 13:l.prev=13,l.t0=l.catch(1),f(!1);case 16:case"end":return l.stop()}},R,null,[[1,13]])}))},[y,a==null?void 0:a.libraryId,a==null?void 0:a.id,o,r,v]);return console.log("data",a),[z,{form:o,submitting:s}]}var T=P;function S(a){var r=a.form;return(0,i.useEffect)(function(){var o=(0,N.Z)({},a.data);a.data.id||r.resetFields(),r.setFieldsValue((0,u.Z)({},o))},[r,a.data]),(0,e.jsx)(n.l0,{form:r,children:(0,e.jsxs)(n.X2,{children:[(0,e.jsxs)(n.JX,{span:8,children:[(0,e.jsx)(n.l0.Item,{rules:[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}],className:"d-flex flex-column mb-7",name:"title",label:"\u540D\u79F0",children:(0,e.jsx)(n.II,{solid:!0})}),(0,e.jsx)(n.l0.Item,{className:"d-flex flex-column mb-7",name:"description",label:"\u63CF\u8FF0",children:(0,e.jsx)(n.II.TextArea,{solid:!0})}),(0,e.jsx)(n.l0.Item,{className:"d-flex flex-column mb-7",name:"tags",label:"\u6807\u7B7E",children:(0,e.jsx)(W.ZP,{})}),(0,e.jsx)(n.l0.Item,{rules:[{required:!0,message:"\u7EC4\u4EF6\u6A21\u7248"}],className:"d-flex flex-column mb-7",name:"template",label:"\u6A21\u7248",children:(0,e.jsx)(G.zm,{placeholder:"\u9009\u62E9\u7EC4\u4EF6\u6A21\u7248"})})]}),(0,e.jsx)(n.JX,{span:4,children:(0,e.jsx)(n.l0.Item,{className:"mb-5",name:"image",label:"\u5C01\u9762\u56FE",help:"\u5141\u8BB8\u7684\u6587\u4EF6\u7C7B\u578B:png, jpg, jpeg\u3002",children:(0,e.jsx)(n.gq.Image,{width:125,height:125,space:"Ohc2OaZ4",crop:{height:300,zoomable:!1,aspectRatio:1},background:"/assets/media/svg/avatars/blank.svg"})})})]})})}function J(a){var r=a.component,o=a.visible,m=a.onClose,d=a.onSuccess,s=a.onDeleteSuccess,f=T(r,d),k=(0,c.Z)(f,2),M=k[0],y=k[1],w=y.form,$=y.submitting,v=(0,i.useMemo)(function(){return r?(0,u.Z)((0,u.Z)({},r),{},{template:r==null?void 0:r.template}):{type:"URL",index:0}},[r]);return(0,e.jsxs)(n.u_,{width:640,centered:!0,onOk:M,confirmLoading:$,okText:"\u4FDD\u5B58",visible:o,onCancel:m,children:[(0,e.jsx)(n.u_.Header,{closable:!0,children:r!=null&&r.id?(0,e.jsx)(e.Fragment,{children:"\u7F16\u8F91\u7EC4\u4EF6"}):(0,e.jsx)(e.Fragment,{children:"\u65B0\u589E\u7EC4\u4EF6"})}),(0,e.jsx)(n.u_.Body,{children:r&&(0,e.jsx)(S,{submitting:$,data:v,libraryId:r==null?void 0:r.libraryId,form:w,submit:M,onDeleteSuccess:s})})]})}var H=J,O=t(8305);function B(a,r){var o=(0,i.useRef)(!1),m=(0,O._5)({refetchQueries:[{query:O.u7,variables:{id:a}}]}),d=(0,c.Z)(m,1),s=d[0],f=(0,i.useCallback)(function(){var k=(0,Q.Z)((0,x.Z)().mark(function M(y){var w;return(0,x.Z)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,n.u_.confirm({title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8BE5 \u7EC4\u4EF6\u5417\uFF1F",content:(0,e.jsxs)(e.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,e.jsx)("strong",{children:y.title}),"\u201D\u3002\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u9006\u8F6C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u60A8\u786E\u5B9A\u5220\u9664\u5417\uFF1F"]}),okText:"\u5220 \u9664",okClassName:"btn-danger",allowOutsideClick:function(){return!o.current},preConfirm:function(){var z=(0,Q.Z)((0,x.Z)().mark(function Z(){var g,E,U;return(0,x.Z)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return o.current=!0,h.prev=1,g=document.querySelector(".swal2-confirm"),g.textContent="\u5220\u9664\u4E2D...",E=document.createElement("span"),E.classList.add("spinner-border-sm","ms-2","spinner-border","align-middle"),g.appendChild(E),h.next=9,(0,I.gw)(s({variables:{id:y.id,libraryId:a}}),350);case 9:U=h.sent,n.FN.success("\u5220\u9664\u6210\u529F"),console.log(U),h.next=17;break;case 14:h.prev=14,h.t0=h.catch(1),n.FN.error("\u4FDD\u5B58\u5931\u8D25");case 17:return h.prev=17,o.current=!1,h.finish(17);case 20:case"end":return h.stop()}},Z,null,[[1,14,17,20]])}));function R(){return z.apply(this,arguments)}return R}()});case 2:w=v.sent,w.isConfirmed&&r(y);case 4:case"end":return v.stop()}},M)}));return function(M){return k.apply(this,arguments)}}(),[s,a,r]);return[f]}var F=B,q=t(50480),V=t(18071);function _(a){var r=a.data,o=a.onEdit,m=a.onDelete,d=(0,i.useCallback)(function(){o(r)},[r,o]),s=(0,i.useCallback)(function(){m(r)},[r,m]),f=(0,i.useCallback)(function(){b.m8.push("/designs/".concat(r.id))},[r]);return(0,e.jsx)(n.JX,{md:3,children:(0,e.jsx)(n.Zb,{flush:!0,className:"h-md-100",children:(0,e.jsxs)(n.Zb.Body,{children:[(0,e.jsxs)("div",{className:"d-flex flex-stack mb-3",children:[(0,e.jsxs)(n.Ct,{color:"light",children:[(0,e.jsx)(e.Fragment,{children:r.tags&&r.tags.length?r.tags[0]+"/":null}),(0,e.jsx)(e.Fragment,{children:r.title+"("+r.id+")"})]}),(0,e.jsx)("div",{children:(0,e.jsx)(n.Lt,{overlay:(0,e.jsxs)(n.v2,{className:"menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fs-7 fw-bold w-200px py-3",children:[(0,e.jsx)(n.v2.Item,{onClick:d,className:"px-3",children:"\u7F16\u8F91"}),(0,e.jsx)(n.v2.Item,{onClick:f,className:"px-3",children:"\u8BBE\u8BA1"}),(0,e.jsx)(n.v2.Item,{onClick:s,className:"px-3",children:"\u5220\u9664"})]}),placement:"bottomRight",children:(0,e.jsx)(n.zx,{variant:!1,color:"light-dark",activeColor:"light-primary",icon:(0,e.jsx)(C.JO,{className:"svg-icon-2",name:"Duotune/gen024"})})})})]}),(0,e.jsx)("div",{className:"mb-3",children:(0,e.jsx)("a",{onClick:d,children:(0,e.jsxs)("div",{className:"position-relative",children:[(0,e.jsxs)("div",{className:"overlay overlay-show",children:[(0,e.jsx)("div",{className:"bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-200px",style:{backgroundImage:"url('/assets/media/background/mage_icon.png')"}}),(0,e.jsx)("div",{className:"overlay-layer rounded",style:{opacity:.4}})]}),(0,e.jsxs)("div",{className:"position-absolute text-white mb-4 ms-4 bottom-0",children:[(0,e.jsx)("span",{className:"text-white fs-4 fw-bolder mb-1",children:r.title}),(0,e.jsx)("div",{className:"fs-6 fw-bold mb-5",children:r.description})]})]})})}),(0,e.jsxs)("div",{className:"d-flex flex-stack flex-wrapr",children:[(0,e.jsx)(n.mN.Avatar,{shape:"circle",size:35,alt:"\u6D4B"}),(0,e.jsx)("div",{className:"d-flex my-1",children:(0,e.jsx)("div",{className:"py-2 px-3 ms-3",children:(0,e.jsx)("span",{className:"ms-1 fs-7 fw-bolder text-gray-600",children:r.createdAt&&j()(r.createdAt).format("YYYY-MM-DD HH:mm")})})})]})]})})})}function ee(a){var r=a.layout,o=a.components,m=a.onEdit,d=a.onDelete;return r=="table"?(0,e.jsx)(n.Zb,{children:(0,e.jsx)(n.Zb.Body,{children:(0,e.jsx)(n.iA,{columns:[{key:"name",title:"\u540D\u79F0",width:"auto"},{key:"createAt",title:"\u521B\u5EFA\u4EBA",width:200},{key:"actions",title:"\u64CD\u4F5C",width:200}],dataSource:o})})}):(0,e.jsx)(n.X2,{gutter:{default:5,xl:9},cols:{default:1,md:3,xl:4},children:o.map(function(s){return(0,e.jsx)(_,{data:s,onDelete:d,onEdit:m},s.id)})})}function Y(a){var r,o=a.location,m=o.state.app,d=m.dependencies.find(function(D){return D.name=="component.library"}).value,s=(0,i.useState)("card"),f=(0,c.Z)(s,2),k=f[0],M=f[1],y=(0,i.useState)({visible:!1}),w=(0,c.Z)(y,2),$=w[0],v=w[1],z=(0,L.qb)({variables:{id:d},fetchPolicy:"cache-and-network"}),R=z.data,Z=z.loading,g=(R==null||(r=R.library)===null||r===void 0?void 0:r.components)||[],E=(0,i.useCallback)(function(D){v(function(X){return(0,u.Z)((0,u.Z)({},X),{},{visible:!1,component:D})})},[v]),U=(0,i.useCallback)(function(D){v(function(X){var re;return((re=X.component)===null||re===void 0?void 0:re.id)!=D.id?X:(0,u.Z)((0,u.Z)({},X),{},{visible:!1,component:void 0})})},[v]),l=F(d,U),h=(0,c.Z)(l,1),ue=h[0],ae=(0,i.useCallback)(function(){v(function(D){return(0,u.Z)((0,u.Z)({},D),{},{visible:!1})})},[]),se=(0,i.useCallback)(function(){v(function(D){return(0,u.Z)((0,u.Z)({},D),{},{visible:!0,component:{libraryId:d}})})},[d]),te=(0,i.useCallback)(function(D){v(function(X){return(0,u.Z)((0,u.Z)({},X),{},{visible:!0,component:(0,u.Z)((0,u.Z)({},D),{},{libraryId:d})})})},[d]);return(0,e.jsxs)(V.vs,{header:{title:"\u7EC4\u4EF6\u8BBE\u7F6E"},loading:Z,children:[(0,e.jsxs)("div",{className:"d-flex flex-wrap flex-stack pb-7",children:[(0,e.jsxs)("div",{className:"d-flex flex-wrap align-items-center",children:[(0,e.jsxs)("h3",{className:"fw-bolder me-5",children:["\u7EC4\u4EF6 (",g.length,")"]}),(0,e.jsx)(n.II.Search,{placeholder:"\u641C\u7D22",className:"border-body bg-body w-250px"})]}),(0,e.jsx)(q.Z,{layout:k,onLayout:M,children:(0,e.jsx)("div",{className:"d-flex my-0",children:(0,e.jsx)(n.zx,{onClick:se,children:"\u65B0\u589E\u7EC4\u4EF6"})})})]}),(0,e.jsx)(ee,{layout:k,onEdit:te,onDelete:ue,components:g}),(0,e.jsx)(H,{component:$.component,onClose:ae,onSuccess:E,onDeleteSuccess:U,visible:$.visible})]})}var ne=Y}}]);