"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3498],{77521:function(L,$,n){n.d($,{Cz:function(){return b.Cz},Qn:function(){return b.Qn},YG:function(){return b.YG},dy:function(){return b.dy},k1:function(){return b.k1},rq:function(){return b.rq},sB:function(){return b.sB}});var b=n(24127)},23498:function(L,$,n){n.r($),n.d($,{default:function(){return ne}});var b=n(97857),l=n.n(b),P=n(15009),U=n.n(P),G=n(99289),w=n.n(G),V=n(5574),S=n.n(V),h=n(62435),Y=n(96974),N=n(35908),Z=n(73588),a=n(2721),H=n(30773),K=n(82144),e=n(86074);function W(t){var s=(0,N.ot)(),i=s.data,m=t.form,F=(0,K.s6)(),B=S()(F,1),v=B[0],C=(0,H.RO)(function(){var u=w()(U()().mark(function o(d,j,y){var p,f;return U()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,v({variables:{tenantId:i==null?void 0:i.tenantId,username:j},fetchPolicy:"network-only",context:{fetchOptions:{signal:y}}});case 2:return p=g.sent,f=p.data,g.abrupt("return",!(f!=null&&f.result.length));case 5:case"end":return g.stop()}},o)}));return function(o,d,j){return u.apply(this,arguments)}}());return(0,h.useEffect)(function(){var u,o,d=t.data;m.resetFields(),m.setFieldsValue(l()(l()({},d),{},{phone:((u=d.phone)===null||u===void 0?void 0:u.number)||"",email:((o=d.email)===null||o===void 0?void 0:o.address)||""}))},[m,t.data]),(0,e.jsxs)(a.Form,{form:m,className:"form d-flex flex-column",children:[(0,e.jsxs)(a.Row,{className:"mt-5",children:[(0,e.jsxs)(a.Col,{span:6,children:[(0,e.jsx)(a.Form.Item,{className:"mb-5",name:"nickname",label:"\u7528\u6237",rules:[{required:!0,message:"\u7528\u6237\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(a.Input,{solid:!0})}),(0,e.jsx)(a.Form.Item,{className:"mb-5",name:"phone",label:"\u7535\u8BDD",rules:[{required:!0,message:"\u7535\u8BDD\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(a.Input,{solid:!0})}),(0,e.jsx)(a.Form.Item,{className:"mb-5",name:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u90AE\u7BB1\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(a.Input,{solid:!0})})]}),(0,e.jsx)(a.Col,{span:6,children:(0,e.jsx)(a.Form.Item,{className:"mb-5",name:"avatar",label:"\u7528\u6237\u5934\u50CF",help:"\u5141\u8BB8\u7684\u6587\u4EF6\u7C7B\u578B:png, jpg, jpeg\u3002",children:(0,e.jsx)(a.Upload.Image,{width:125,height:125,space:"7VE4SSrk",crop:{height:300,zoomable:!1,aspectRatio:1},background:"/assets/media/svg/avatars/blank.svg"})})})]}),(0,e.jsx)("h3",{className:"mt-6 mb-4",children:"\u8D26\u6237\u4FE1\u606F"}),(0,e.jsx)(a.Separator,{}),(0,e.jsxs)(a.Row,{className:"mt-5",children:[(0,e.jsx)(a.Col,{span:6,children:(0,e.jsx)(a.Form.Item,{name:"username",label:"\u8D26\u6237",rules:[{required:!0,message:"\u8D26\u6237\u4E0D\u80FD\u4E3A\u7A7A"},{validator:C,message:"\u8D26\u6237\u91CD\u590D"}],children:(0,e.jsx)(a.Input,{solid:!0})})}),(0,e.jsx)(a.Col,{span:6,children:(0,e.jsx)(a.Form.Item,{name:"password",label:"\u5BC6\u7801",rules:[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"}],children:(0,e.jsx)(a.Input,{solid:!0})})})]})]})}var J=W,X=n(58544),z=n(12708),Q=n(74167);function q(t,s){var i=a.Form.useForm(),m=(0,h.useState)(!1),F=S()(m,2),B=F[0],v=F[1],C=s||{},u=C.messages,o=C.onSubmitted,d=o===void 0?function(){}:o,j=C.transform,y=j===void 0?function(x){return x}:j,p=(0,Q.ny)({fetchPolicy:"no-cache",refetchQueries:s==null?void 0:s.refetchQueries}),f=S()(p,1),E=f[0],g=(0,Q.kD)({fetchPolicy:"no-cache",refetchQueries:s==null?void 0:s.refetchQueries}),T=S()(g,1),R=T[0],M=(0,h.useMemo)(function(){return t!=null&&t.id?w()(U()().mark(function x(){var D,I,k;return U()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return v(!0),r.prev=1,r.t0=y,r.next=5,i.validateFields();case 5:return r.t1=r.sent,D=(0,r.t0)(r.t1),r.next=9,a.Toast.promise((0,z.gw)(R({variables:{id:t.id,input:l()({},D)}}),350),{pending:(u==null?void 0:u.pending)||"\u4FDD\u5B58\u4E2D...",success:{render:function(){return(0,e.jsxs)(e.Fragment,{children:["\u8DEF\u7531 ",(0,e.jsx)("strong",{children:D.name})," \u4FDD\u5B58\u6210\u529F"]})}},error:(u==null?void 0:u.error)||"\u4FDD\u5B58\u51FA\u9519"},{duration:2e3,placement:"top-center"});case 9:I=r.sent,k=I.data,d(k.result),v(!1),r.next=18;break;case 15:r.prev=15,r.t2=r.catch(1),v(!1);case 18:case"end":return r.stop()}},x,null,[[1,15]])})):w()(U()().mark(function x(){var D,I,k;return U()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return v(!0),r.prev=1,r.t0=y,r.next=5,i.validateFields();case 5:return r.t1=r.sent,D=(0,r.t0)(r.t1),r.next=9,a.Toast.promise((0,z.gw)(E({variables:{input:l()({},D)}}),350),{pending:(u==null?void 0:u.pending)||"\u63D0\u4EA4\u4E2D...",success:{render:(u==null?void 0:u.pending)||"\u63D0\u4EA4\u6210\u529F"},error:(u==null?void 0:u.error)||"\u63D0\u4EA4\u51FA\u9519"},{duration:2e3,placement:"top-center"});case 9:I=r.sent,k=I.data,d(k.result),v(!1),r.next=18;break;case 15:r.prev=15,r.t2=r.catch(1),v(!1);case 18:case"end":return r.stop()}},x,null,[[1,15]])}))},[E,t==null?void 0:t.id,i,d,R]);return[M,{form:i,submitting:B}]}var _=q;function ee(t){var s=t.data,i=t.visible,m=t.onClose,F=t.onSuccess,B=t.onDeleteSuccess,v=t.defaultRole,C=t.defaultOrg,u=_(s,{transform:function(R){return l()({organization:{id:C,role:v},userType:"USER"},R)},onSubmitted:F}),o=S()(u,2),d=o[0],j=o[1],y=j.form,p=j.submitting,f=(0,h.useMemo)(function(){return s?l()({},s):{}},[s]),E=(0,X.Z)(function(){return B(s)}),g=E.delete;return(0,e.jsx)(a.Drawer,{title:s!=null&&s.id?"\u7F16\u8F91":"\u65B0\u589E",placement:"right",width:640,mask:!0,closable:!0,onClose:m,visible:i,footer:(0,e.jsxs)(a.Row,{children:[(0,e.jsx)(a.Col,{span:6,children:(0,e.jsx)(a.Button,{style:{letterSpacing:"1rem"},className:"w-100",loading:p,onClick:d,children:"\u4FDD\u5B58"})}),(0,e.jsx)(a.Col,{span:6,children:(s==null?void 0:s.id)&&(0,e.jsx)(a.Button,{style:{letterSpacing:"1rem"},className:"w-100",variant:"light-danger",onClick:function(){return g(s)},children:"\u5220\u9664"})})]}),children:s&&(0,e.jsx)(J,{submitting:p,data:f,form:y,submit:d,onDeleteSuccess:B})})}var re=ee,ae=n(58918),A=n(77521);function ue(){var t=(0,Y.UO)(),s=(0,N.ot)(),i=s.data,m=t.id,F=(0,h.useRef)(null),B=(0,h.useState)({visible:!1}),v=S()(B,2),C=v[0],u=v[1],o=(0,A.dy)({variables:{code:"c_"+m},fetchPolicy:"network-only"}),d=o.data,j=o.loading,y=o.refetch,p=(0,A.k1)({variables:{id:m},fetchPolicy:"network-only"}),f=p.data,E=(0,A.Cz)(),g=S()(E,1),T=g[0],R=(0,h.useCallback)(w()(U()().mark(function c(){var r;return U()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.next=2,T({variables:{input:{code:"c_"+m,name:"\u5BA2\u6237:"+(f==null||(r=f.result)===null||r===void 0?void 0:r.name),type:"CUSTOMER"}}});case 2:return a.Toast.success("\u5F00\u542F\u767B\u5F55\u529F\u80FD\u6210\u529F",2e3,{placement:"top-center"}),O.next=5,y();case 5:case"end":return O.stop()}},c)})),[f]),M=(0,h.useCallback)(function(){u(function(c){return l()(l()({},c),{},{visible:!1})})},[]),x=(0,h.useCallback)(function(c){u(function(r){return l()(l()({},r),{},{data:c})}),F.current.refetch()},[u]),D=(0,h.useCallback)(function(){u(function(c){return c.visible?l()(l()({},c),{},{visible:!1,data:void 0}):c}),F.current.refetch()},[u]),I=(0,h.useCallback)(function(){u(function(c){return l()(l()({},c),{},{data:l()(l()({},c.data),{},{tenantId:i==null?void 0:i.tenantId,organization:{id:"c_"+m}}),visible:!0})})},[]),k=(0,h.useCallback)(function(c){u(function(r){return l()(l()({},r),{},{data:c,visible:!0})})},[]);return(0,e.jsx)(a.BlockUI,{zIndex:10,overlayClassName:"bg-black bg-opacity-25",loading:!j&&!(d!=null&&d.organization),indicator:!1,message:(0,e.jsxs)(a.Card,{className:"w-450px",children:[(0,e.jsx)(a.Card.Header,{children:(0,e.jsx)(a.Card.Title,{children:"\u8BE5\u5BA2\u6237\u8FD8\u672A\u5F00\u542F\u767B\u5F55\u529F\u80FD"})}),(0,e.jsx)(a.Card.Body,{children:(0,e.jsx)("p",{children:"\u5F00\u542F\u767B\u5F55\u529F\u80FD\u540E\uFF0C\u5BA2\u6237\u53EF\u4EE5\u901A\u8FC7\u767B\u5F55\u7CFB\u7EDF\u67E5\u770B\u81EA\u5DF1\u7684\u4FE1\u606F\uFF0C\u5982\u8BBE\u5907\uFF0C\u670D\u52A1\u8BF7\u6C42\u7B49\u3002"})}),(0,e.jsx)(a.Card.Footer,{children:(0,e.jsx)(a.Button,{onClick:R,children:"\u4E3A\u6539\u5BA2\u6237\u5F00\u542F\u767B\u5F55\u529F\u80FD"})})]}),children:(0,e.jsxs)(Z.vs,{header:{title:"\u7528\u6237\u5217\u8868"},children:[(0,e.jsx)(re,{data:C.data,defaultOrg:"c_".concat(m),defaultRole:"CUSTOMER",onClose:M,onSuccess:x,onDeleteSuccess:D,visible:C.visible}),(0,e.jsx)(ae.Z,{ref:F,where:{tenantId:i==null?void 0:i.tenantId,organization:{id:"c_"+m}},onEdit:k,onAdd:I})]})})}var ne=ue}}]);