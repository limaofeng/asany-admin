(self.webpackChunk=self.webpackChunk||[]).push([[6384],{14336:function(ye,J,n){"use strict";var T=n(15009),t=n.n(T),ie=n(99289),v=n.n(ie),w=n(97857),z=n.n(w),X=n(5574),L=n.n(X),I=n(62435),y=n(79817),a=n(12708);function h(g,c){return g.replace(/{(\w+)}/g,function(i,D){return c[D]!==void 0?c[D]:i})}function E(g,c){var i=g(z()({fetchPolicy:"network-only"},(c==null?void 0:c.mutation)||{})),D=L()(i,1),S=D[0],V=(0,I.useRef)(!1),r=(0,I.useCallback)(function(){var N=v()(t()().mark(function W(_,e){var F,k,q,G,$,P,Y,ee,Z;return t()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return F=(e==null?void 0:e.dialog)||(c==null?void 0:c.dialog)||{},k=(e==null?void 0:e.mutation)||(c==null?void 0:c.mutation)||{},q=(e==null?void 0:e.onDeleted)||(c==null?void 0:c.onDeleted),G=F.width,$=F.title,P=F.content,Y=!1,Array.isArray(_)?(Y=!0,typeof $=="function"&&($=$(_,{batch:!0})),typeof P=="function"&&(P=P(_,{batch:!0}))):_&&(typeof $=="string"&&($=h($,_)),typeof P=="string"&&(P=h(P,_)),typeof $=="function"&&($=$(_,{batch:!1})),typeof P=="function"&&(P=P(_,{batch:!1}))),ee=function(){var oe=v()(t()().mark(function l(){return t()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return j.next=2,S(z()(z()({fetchPolicy:"network-only"},k),{},{variables:{where:{id_in:Y?_:[_==null?void 0:_.id]}}}));case 2:case"end":return j.stop()}},l)}));return function(){return oe.apply(this,arguments)}}(),U.next=10,y.Modal.confirm(z()(z()({},F),{},{title:$,content:P,width:G,okText:"\u5220 \u9664",okClassName:"btn-danger",allowOutsideClick:function(){return!V.current},preConfirm:function(){var oe=v()(t()().mark(function u(){var j,B,O;return t()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return V.current=!0,M.prev=1,j=document.querySelector(".swal2-confirm"),j.textContent="\u5220\u9664\u4E2D...",B=document.createElement("span"),B.classList.add("spinner-border-sm","ms-2","spinner-border","align-middle"),j.appendChild(B),M.next=9,(0,a.gw)(ee(),350);case 9:O=M.sent,q&&q(O);case 11:return M.prev=11,V.current=!1,M.finish(11);case 14:case"end":return M.stop()}},u,null,[[1,,11,14]])}));function l(){return oe.apply(this,arguments)}return l}()}));case 10:if(Z=U.sent,Z.isConfirmed){U.next=13;break}return U.abrupt("return",!1);case 13:return y.Toast.success("\u5220\u9664\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),U.abrupt("return",!0);case 15:case"end":return U.stop()}},W)}));return function(W,_){return N.apply(this,arguments)}}(),[]),m=(0,I.useCallback)(function(){var N=v()(t()().mark(function W(_,e){return t()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.abrupt("return",r(_,e));case 1:case"end":return k.stop()}},W)}));return function(W,_){return N.apply(this,arguments)}}(),[c,S]),A=(0,I.useCallback)(function(N,W){return r(N,W)},[]);return{delete:m,deleteMany:A}}J.Z=E},55811:function(ye,J,n){"use strict";var T=n(97857),t=n.n(T),ie=n(52677),v=n.n(ie),w=n(61227),z=n.n(w),X=n(62435),L=n(32512),I=n(93162),y=n.n(I),a=n(84105),h=function(i){var D=i.split(`
`);return D.map(function(S){return S.split(",")})},E=function(i,D){var S=z()(i),V=S[0],r=S.slice(1);return r.map(function(m){for(var A={},N=0,W=Object.keys(D.fields);N<W.length;N++){var _=W[N],e=D.fields[_];typeof e=="number"?A[_]=m[e]:typeof e=="string"?A[_]=m[V.indexOf(e)]:v()(e)==="object"&&(A[_]=typeof e.index=="string"?m[V.indexOf(e.index)]:m[e.index],e.formatter&&(A[_]=e.formatter(A[_])))}return A})};function g(c,i){var D=(0,X.useCallback)(function(_){var e=_[0];if(e){var F=new FileReader;F.onload=function(k){var q=e.name.split(".").pop().toLowerCase();if(q==="csv"){var G=k.target.result,$=h(G);console.log("Parsed CSV Data:",$)}else if(q==="xls"||q==="xlsx"){var P=k.target.result,Y=a.ij(P,{type:"binary"}),ee=Y.SheetNames[0],Z=Y.Sheets[ee],de=a.P6.sheet_to_json(Z,{header:i.header||1,raw:!1,dateNF:"yyyy-mm-dd hh:mm:ss"}),U=E(de,i);console.log("Formatted JSON Data:",U),c(U)}else console.error("Unsupported file type")},e.type==="text/csv"||e.name.endsWith(".csv")?F.readAsText(e):F.readAsBinaryString(e)}},[c]),S=(0,L.uI)({onDrop:D,accept:{"text/csv":[".csv"],"application/vnd.ms-excel":[".xls"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"]},maxFiles:1}),V=S.getRootProps,r=S.getInputProps,m=V(),A=m.onClick,N=(0,X.useCallback)(function(_){console.log("handleImportExcel"),A&&A(_)},[A]),W=(0,X.useCallback)(function(){var _,e,F=Object.keys(i.fields).map(function(l){var u=i.fields[l];return v()(u)==="object"&&u.name||l}),k=Object.keys(i.fields).map(function(l){var u=i.fields[l];return v()(u)==="object"&&u.example||""}),q=[F,k],G=a.P6.aoa_to_sheet(q);(_=i.template)!==null&&_!==void 0&&_.cols&&(G["!cols"]=i.template.cols);for(var $=0,P=1;P<$;P++)for(var Y=0;Y<F.length;Y++){var ee=a.P6.encode_cell({r:P,c:Y});G[ee]||(G[ee]={v:null});var Z=i.fields[F[Y]];if(v()(Z)==="object"){switch(Z.type){case"date":G[ee].t="d";break}Z.format&&(G[ee].z=Z.format)}}var de=a.P6.book_new();a.P6.book_append_sheet(de,G,"Sheet1");var U=a.cW(de,{bookType:"xlsx",type:"array"}),oe=new Blob([U],{type:"application/octet-stream"});y()(oe,((e=i.template)===null||e===void 0?void 0:e.filename)||"template.xlsx")},[i]);return[(0,X.createElement)("input",t()(t()({},r()),{},{key:"file-input",value:""})),N,W,{data:{},error:"",handleImportExcel:N}]}J.Z=g},58301:function(ye,J,n){"use strict";n.d(J,{Oh:function(){return X},bp:function(){return L}});var T=n(97857),t=n.n(T),ie=n(62435);function v(I,y){var a,h,E=I(t()({fetchPolicy:"network-only"},y)),g=E.data,c=E.loading,i=E.previousData,D=E.refetch,S=E.error,V=(0,ie.useMemo)(function(){return c?i==null?void 0:i.result.pageInfo:g==null?void 0:g.result.pageInfo},[g==null||(a=g.result)===null||a===void 0?void 0:a.pageInfo.total,c,i==null||(h=i.result)===null||h===void 0?void 0:h.pageInfo.total]),r=(g==null?void 0:g.result.edges.map(function(m){return m.node}))||[];return[r,{loading:c,pageInfo:V,error:S,variables:{},refetch:D}]}function w(I,y){return y.split(".").reduce(function(a,h){return a&&a[h]!==void 0?a[h]:void 0},I)}function z(I,y,a){for(var h=y.split("."),E=I;h.length>1;){var g=h.shift();E[g]||(E[g]={}),E=E[g]}E[h[0]]=a}function X(I,y){var a=y.map(function(h){var E=h.source,g=h.target,c=h.transform,i=h.skip,D=w(I,E);if(D==null||i&&i(D))return"";var S=c?c(D):String(D);return"".concat(encodeURIComponent(g||E),"=").concat(encodeURIComponent(S))});return a.filter(function(h){return h}).join("&")}function L(I,y){var a={};return y.forEach(function(h){var E=h.source,g=h.target,c=h.transform,i=h.skip,D=I.get(E);if(!(!D||D.trim()==="")){var S=c?c(D):D;i&&i(S)||(g?z(a,g,S):a[E]=S)}}),a}J.ZP=v},24127:function(ye,J,n){"use strict";n.d(J,{Ao:function(){return j},Nv:function(){return F},Qn:function(){return ee},RG:function(){return l},YG:function(){return Y},k1:function(){return se},oZ:function(){return q},ow:function(){return $},ps:function(){return W},rq:function(){return N},tu:function(){return U}});var T=n(97857),t=n.n(T),ie=n(68400),v=n.n(ie),w=n(75063),z=n(37887),X=n(73359),L=n(50319),I,y,a,h,E,g,c,i,D,S,V,r,m={},A=(0,w.Ps)(I||(I=v()([`
    query customers($where: CustomerWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy) {
  result: customersConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    pageInfo {
      total
      totalPages
      current
      pageSize
    }
    edges {
      node {
        id
        name
        ticketStrategy
        contactInfo {
          name
        }
      }
      cursor
    }
  }
}
    `])));function N(s){var o=t()(t()({},m),s);return z.a(A,o)}function W(s){var o=t()(t()({},m),s);return X.t(A,o)}function _(s){var o=_objectSpread(_objectSpread({},m),s);return Apollo.useSuspenseQuery(A,o)}var e=(0,w.Ps)(y||(y=v()([`
    mutation createCustomer($input: CustomerCreateInput!) {
  result: createCustomer(input: $input) {
    id
    name
  }
}
    `])));function F(s){var o=t()(t()({},m),s);return L.D(e,o)}var k=(0,w.Ps)(a||(a=v()([`
    mutation updateCustomer($id: ID!, $input: CustomerUpdateInput!) {
  result: updateCustomer(id: $id, input: $input) {
    id
    name
  }
}
    `])));function q(s){var o=t()(t()({},m),s);return L.D(k,o)}var G=(0,w.Ps)(h||(h=v()([`
    mutation deleteManyCustomers($where: CustomerWhereInput!) {
  result: deleteManyCustomers(where: $where) {
    count
  }
}
    `])));function $(s){var o=t()(t()({},m),s);return L.D(G,o)}var P=(0,w.Ps)(E||(E=v()([`
    query customerStores($where: CustomerStoreWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy) {
  result: customerStoresConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    pageInfo {
      total
      totalPages
      current
      pageSize
    }
    edges {
      node {
        id
        no
        name
        openingDate(format: "yyyy-MM-dd")
        deviceCount
        phone
        contactInfo {
          name
          phone
        }
        address {
          province
          provinceName
          city
          cityName
          district
          districtName
          street
          streetName
          detailedAddress
          fullAddress(excludeDetailed: true)
        }
      }
      cursor
    }
  }
}
    `])));function Y(s){var o=t()(t()({},m),s);return z.a(P,o)}function ee(s){var o=t()(t()({},m),s);return X.t(P,o)}function Z(s){var o=_objectSpread(_objectSpread({},m),s);return Apollo.useSuspenseQuery(P,o)}var de=(0,w.Ps)(g||(g=v()([`
    mutation createCustomerStore($input: CustomerStoreCreateInput!) {
  result: createCustomerStore(input: $input) {
    id
    name
  }
}
    `])));function U(s){var o=t()(t()({},m),s);return L.D(de,o)}var oe=(0,w.Ps)(c||(c=v()([`
    mutation updateCustomerStore($id: ID!, $input: CustomerStoreUpdateInput!) {
  result: updateCustomerStore(id: $id, input: $input) {
    id
    name
  }
}
    `])));function l(s){var o=t()(t()({},m),s);return L.D(oe,o)}var u=(0,w.Ps)(i||(i=v()([`
    mutation deleteManyCustomerStores($where: CustomerStoreWhereInput!) {
  result: deleteManyCustomerStores(where: $where) {
    count
  }
}
    `])));function j(s){var o=t()(t()({},m),s);return L.D(u,o)}var B=(0,w.Ps)(D||(D=v()([`
    query tickets($where: TicketWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy) {
  result: ticketsConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    pageInfo {
      total
      totalPages
      current
      pageSize
    }
    edges {
      node {
        id
      }
      cursor
    }
  }
}
    `])));function O(s){var o=_objectSpread(_objectSpread({},m),s);return Apollo.useQuery(B,o)}function K(s){var o=_objectSpread(_objectSpread({},m),s);return Apollo.useLazyQuery(B,o)}function M(s){var o=_objectSpread(_objectSpread({},m),s);return Apollo.useSuspenseQuery(B,o)}var Q=(0,w.Ps)(S||(S=v()([`
    mutation createTicket($input: TicketCreateInput!) {
  result: createTicket(input: $input) {
    id
  }
}
    `])));function x(s){var o=_objectSpread(_objectSpread({},m),s);return Apollo.useMutation(Q,o)}var ue=(0,w.Ps)(V||(V=v()([`
    mutation updateTicket($id: ID!, $input: TicketUpdateInput!) {
  result: updateTicket(id: $id, input: $input) {
    id
  }
}
    `])));function le(s){var o=_objectSpread(_objectSpread({},m),s);return Apollo.useMutation(ue,o)}var re=(0,w.Ps)(r||(r=v()([`
    query customer($id: ID!) {
  result: customer(id: $id) {
    id
    name
    ticketStrategy
    contactInfo {
      name
    }
  }
}
    `])));function se(s){var o=t()(t()({},m),s);return z.a(re,o)}function he(s){var o=_objectSpread(_objectSpread({},m),s);return Apollo.useLazyQuery(re,o)}function Ce(s){var o=_objectSpread(_objectSpread({},m),s);return Apollo.useSuspenseQuery(re,o)}},77521:function(ye,J,n){"use strict";n.d(J,{Nv:function(){return T.Nv},Qn:function(){return T.Qn},RG:function(){return T.RG},YG:function(){return T.YG},k1:function(){return T.k1},oZ:function(){return T.oZ},ps:function(){return T.ps},rq:function(){return T.rq},tu:function(){return T.tu}});var T=n(24127)},80826:function(ye,J,n){"use strict";n.r(J),n.d(J,{default:function(){return oe}});var T=n(97857),t=n.n(T),ie=n(15009),v=n.n(ie),w=n(64599),z=n.n(w),X=n(99289),L=n.n(X),I=n(5574),y=n.n(I),a=n(62435),h=n(96974),E=n(39711),g=n(46027),c=n(30381),i=n.n(c),D=n(55811),S=n(58301),V=n(73588),r=n(79817),m=n(12708);function A(){return{export:function(){console.log("export")}}}var N=A,W=n(14336),_=n(24127),e=n(86074);function F(l){var u=(0,W.Z)(_.Ao,{onDeleted:function(){l&&l()},dialog:{title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",content:function(K,M){var Q;if(M.batch){var x=K;Q="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(x.length," \u4E2A\u5BA2\u6237\u5417\uFF1F")}else Q=(0,e.jsxs)(e.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,e.jsx)("strong",{children:K.name})]});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"tip-confirm",children:Q}),(0,e.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]})}}}),j=u.delete,B=u.deleteMany;return{delete:j,deleteMany:B}}var k=F;function q(l,u){var j=r.Form.useForm(),B=(0,a.useState)(!1),O=y()(B,2),K=O[0],M=O[1],Q=u||{},x=Q.messages,ue=Q.onSubmitted,le=ue===void 0?function(){}:ue,re=Q.transform,se=re===void 0?function(_e){return _e}:re,he=(0,_.Nv)({fetchPolicy:"no-cache",refetchQueries:u==null?void 0:u.refetchQueries}),Ce=y()(he,1),s=Ce[0],o=(0,_.oZ)({fetchPolicy:"no-cache",refetchQueries:u==null?void 0:u.refetchQueries}),je=y()(o,1),Ee=je[0],be=(0,a.useMemo)(function(){return l!=null&&l.id?L()(v()().mark(function _e(){var ce,te,pe;return v()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return M(!0),p.prev=1,p.t0=se,p.next=5,j.validateFields();case 5:return p.t1=p.sent,ce=(0,p.t0)(p.t1),p.next=9,r.Toast.promise((0,m.gw)(Ee({variables:{id:l.id,input:t()({},ce)}}),350),{pending:(x==null?void 0:x.pending)||"\u4FDD\u5B58\u4E2D...",success:{render:function(){return(0,e.jsxs)(e.Fragment,{children:["\u8DEF\u7531 ",(0,e.jsx)("strong",{children:ce.name})," \u4FDD\u5B58\u6210\u529F"]})}},error:(x==null?void 0:x.error)||"\u4FDD\u5B58\u51FA\u9519"},{duration:2e3,placement:"top-center"});case 9:te=p.sent,pe=te.data,le(pe.updateCustomer),M(!1),p.next=18;break;case 15:p.prev=15,p.t2=p.catch(1),M(!1);case 18:case"end":return p.stop()}},_e,null,[[1,15]])})):L()(v()().mark(function _e(){var ce,te,pe;return v()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return M(!0),p.prev=1,p.t0=se,p.next=5,j.validateFields();case 5:return p.t1=p.sent,ce=(0,p.t0)(p.t1),p.next=9,r.Toast.promise((0,m.gw)(s({variables:{input:t()({},ce)}}),350),{pending:(x==null?void 0:x.pending)||"\u63D0\u4EA4\u4E2D...",success:{render:(x==null?void 0:x.pending)||"\u63D0\u4EA4\u6210\u529F"},error:(x==null?void 0:x.error)||"\u63D0\u4EA4\u51FA\u9519"},{duration:2e3,placement:"top-center"});case 9:te=p.sent,pe=te.data,le(pe.createCustomer),M(!1),p.next=18;break;case 15:p.prev=15,p.t2=p.catch(1),M(!1);case 18:case"end":return p.stop()}},_e,null,[[1,15]])}))},[s,l==null?void 0:l.id,j,le,Ee]);return[be,{form:j,submitting:K}]}var G=q,$=[{label:"\u4E0D\u5904\u7406",value:"NONE"},{label:"\u81EA\u52A8\u5206\u914D",value:"AUTO"},{label:"\u5BA2\u6237\u5206\u914D",value:"ASSIGN"}];function P(l){var u=l.form;return(0,a.useEffect)(function(){var j,B=l.data;B.id||u.resetFields(),u.setFieldsValue(t()(t()({},B),{},{detailedAddress:(j=B.address)===null||j===void 0?void 0:j.detailedAddress}))},[u,l.data]),(0,e.jsxs)(r.Form,{form:u,children:[(0,e.jsxs)(r.Row,{children:[(0,e.jsx)(r.Col,{span:6,children:(0,e.jsx)(r.Form.Item,{name:"no",className:"d-flex flex-column mb-7",required:!0,label:"\u95E8\u5E97\u7F16\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u95E8\u5E97\u7F16\u53F7"}],children:(0,e.jsx)(r.Input,{solid:!0})})}),(0,e.jsx)(r.Col,{span:6,children:(0,e.jsx)(r.Form.Item,{name:"name",className:"d-flex flex-column mb-7",required:!0,label:"\u95E8\u5E97\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u95E8\u5E97\u540D\u79F0"}],children:(0,e.jsx)(r.Input,{solid:!0})})})]}),(0,e.jsxs)(r.Row,{children:[(0,e.jsx)(r.Col,{span:6,children:(0,e.jsx)(r.Form.Item,{name:"openingDate",className:"d-flex flex-column mb-7",required:!0,label:"\u5F00\u4E1A\u65F6\u95F4",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u95E8\u5E97\u5F00\u4E1A\u65F6\u95F4"}],children:(0,e.jsx)(r.DatePicker,{className:"w-100",solid:!0})})}),(0,e.jsx)(r.Col,{span:6,children:(0,e.jsx)(r.Form.Item,{name:"phone",className:"d-flex flex-column mb-7",required:!0,label:"\u95E8\u5E97\u7535\u8BDD",children:(0,e.jsx)(r.Input,{solid:!0})})})]}),(0,e.jsx)(r.Row,{children:(0,e.jsx)(r.Col,{span:6,children:(0,e.jsx)(r.Form.Item,{name:"address",className:"d-flex flex-column mb-7",required:!0,label:"\u95E8\u5E97\u5730\u5740",children:(0,e.jsx)(r.RegionPicker,{solid:!0,resultType:"object",className:"w-400px",ends:"district",placeholder:"--\u8BF7\u9009\u62E9--"})})})}),(0,e.jsx)(r.Row,{children:(0,e.jsx)(r.Col,{span:12,children:(0,e.jsx)(r.Form.Item,{name:"detailedAddress",className:"d-flex flex-column mb-7",required:!0,label:"\u8BE6\u7EC6\u5730\u5740",children:(0,e.jsx)(r.Input.TextArea,{solid:!0,autoSize:{minRows:6}})})})}),(0,e.jsx)(r.Row,{children:(0,e.jsx)(r.Col,{span:6,children:(0,e.jsx)(r.Form.Item,{name:["contactInfo","name"],className:"d-flex flex-column mb-7",required:!0,label:"\u8054\u7CFB\u4EBA",children:(0,e.jsx)(r.Input,{solid:!0})})})}),(0,e.jsxs)(r.Row,{children:[(0,e.jsx)(r.Col,{span:6,children:(0,e.jsx)(r.Form.Item,{name:["contactInfo","phone"],className:"d-flex flex-column mb-7",required:!0,label:"\u8054\u7CFB\u4EBA\u7535\u8BDD",children:(0,e.jsx)(r.Input,{solid:!0})})}),(0,e.jsx)(r.Col,{span:6,children:(0,e.jsx)(r.Form.Item,{name:["contactInfo","email"],className:"d-flex flex-column mb-7",required:!0,label:"\u8054\u7CFB\u4EBA\u90AE\u7BB1",children:(0,e.jsx)(r.Input,{solid:!0})})})]})]})}function Y(l){var u=l.data,j=l.visible,B=l.onClose,O=l.onSuccess,K=l.onDeleteSuccess,M=G(u,{transform:function(o){return t()({},o)},onSubmitted:O}),Q=y()(M,2),x=Q[0],ue=Q[1],le=ue.form,re=ue.submitting,se=(0,a.useMemo)(function(){return u?t()({},u):{}},[u]),he=k(function(){return K(u)}),Ce=he.delete;return(0,e.jsx)(r.Drawer,{title:u!=null&&u.id?"\u7F16\u8F91":"\u65B0\u589E",placement:"right",width:640,mask:!0,closable:!0,onClose:B,visible:j,footer:(0,e.jsxs)(r.Row,{children:[(0,e.jsx)(r.Col,{span:6,children:(0,e.jsx)(r.Button,{style:{letterSpacing:"1rem"},className:"w-100",loading:re,onClick:x,children:"\u4FDD\u5B58"})}),(0,e.jsx)(r.Col,{span:6,children:(u==null?void 0:u.id)&&(0,e.jsx)(r.Button,{style:{letterSpacing:"1rem"},className:"w-100",variant:"light-danger",onClick:function(){return Ce(u)},children:"\u5220\u9664"})})]}),children:u&&(0,e.jsx)(P,{submitting:re,data:se,form:le,submit:x,onDeleteSuccess:K})})}var ee=Y,Z=n(77521);function de(l){var u=l.data,j=l.onEdit,B=l.refetch,O=(0,a.useState)(!1),K=y()(O,2),M=K[0],Q=K[1],x=k(B),ue=x.delete,le=(0,a.useCallback)(function(re){var se=re.key;se==="edit"?j(u):se==="delete"&&ue({name:u.name,id:u.id})},[]);return(0,e.jsx)(r.Dropdown,{overlay:(0,e.jsxs)(r.Menu,{onClick:le,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-2",children:[(0,e.jsx)(r.Menu.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,e.jsx)(r.Menu.Item,{className:"actions-delete px-3",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",onVisibleChange:Q,visible:M,children:(0,e.jsxs)(r.Button,{variant:"clean",activeColor:"light-primary",children:["\u64CD \u4F5C",(0,e.jsx)(g.ZP,{className:"ms-2 svg-icon-5 m-0",name:"Duotune/arr072"})]})})}function U(){var l=(0,h.s0)(),u=(0,h.UO)(),j=(0,E.lr)(),B=y()(j,1),O=B[0],K=(0,a.useMemo)(function(){return(0,S.bp)(O,[{source:"q",target:"keywords"}])},[O.get("q")]);(0,a.useState)({keywords:O.get("q")||""});var M=(0,a.useMemo)(function(){var f=(0,S.bp)(O,[{source:"q",target:"where.name_contains"},{source:"sex",target:"where.sex"},{source:"page",transform:function(R){return parseInt(R)}},{source:"per_page",transform:function(R){return parseInt(R)}},{source:"sort",target:"orderBy",transform:function(R){var C=R.split(":"),ae=y()(C,2),H=ae[0],ve=ae[1];return"".concat(H,"_").concat(ve)}}]);return f.where=f.where||{},f.where.customer=u.id,f},[O.toString(),u.id]),Q=(0,Z.Qn)({fetchPolicy:"network-only"}),x=y()(Q,1),ue=x[0],le=(0,Z.tu)(),re=y()(le,1),se=re[0],he=(0,Z.RG)(),Ce=y()(he,1),s=Ce[0],o=(0,S.ZP)(Z.YG,{variables:M,skip:!u.id}),je=y()(o,2),Ee=je[0],be=je[1],_e=be.loading,ce=be.pageInfo,te=be.refetch,pe=(0,a.useCallback)(function(f,d,R){var C=(0,S.Oh)({searchForm:K,pagination:f,filters:d,sorter:R},[{source:"searchForm.keywords",target:"q",skip:function(H){return!H}},{source:"pagination.current",target:"page",skip:function(H){return H===1}},{source:"pagination.pageSize",target:"per_page",skip:function(H){return H===15}},{source:"sorter.field",target:"sort",transform:function(H){return"".concat(H,":").concat(R.order==="ascend"?"asc":"desc")}}]);l(location.pathname+"?"+C,{replace:!0})},[K]),Se=k(te),p=Se.deleteMany,Be=(0,a.useCallback)(function(f){l(location.pathname+(f?"?q="+f:""),{replace:!0})},[]),$e=(0,a.useCallback)(function(){var f=L()(v()().mark(function d(R){var C,ae,H,ve,Te,ne,Me,Pe,Ae,me,Ie,Fe,ge,ke,De;return v()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:C={totalRecords:0,insertCount:0,updateCount:0,failureCount:0,failedRecords:[],startTime:null,endTime:null},C.totalRecords=R.length,ae=r.Toast.loading("\u5F00\u59CB\u5BFC\u5165\u5BA2\u6237",{placement:"top-center"}),C.startTime=new Date,H=0,ve=z()(R),b.prev=6,ve.s();case 8:if((Te=ve.n()).done){b.next=49;break}return ne=Te.value,H++,b.prev=11,b.next=14,ue({variables:{where:{title:ne.title}}});case 14:if(Ae=b.sent,me=Ae.data,Ie={title:ne.title,summary:ne.summary,tags:ne.tag?[ne.tag]:[],scheduledAt:ne.scheduledAt,expirationAt:ne.expirationAt,category:"conformity",content:{type:"PDF",url:"storage://ZovzE2fU/"+ne.file}},(me==null||(Me=me.result)===null||Me===void 0?void 0:Me.pageInfo.total)!==1){b.next=28;break}return ae.update("\u66F4\u65B0 ".concat(ne.title," - ").concat(H,"/").concat(C.totalRecords),{icon:"loading"}),b.next=21,s({variables:{id:me.result.edges[0].node.id,input:Ie}});case 21:if(Fe=b.sent,ge=Fe.errors,!(ge!=null&&ge.length)){b.next=25;break}throw new Error(ge[0].message);case 25:C.updateCount++,b.next=40;break;case 28:if((me==null||(Pe=me.result)===null||Pe===void 0?void 0:Pe.pageInfo.total)!==0){b.next=39;break}return ae.update("\u65B0\u589E ".concat(ne.title," - ").concat(H,"/").concat(C.totalRecords),{icon:"loading"}),b.next=32,se({variables:{input:Ie}});case 32:if(ke=b.sent,De=ke.errors,!(De!=null&&De.length)){b.next=36;break}throw new Error(De[0].message);case 36:C.insertCount++,b.next=40;break;case 39:C.failureCount++;case 40:b.next=47;break;case 42:b.prev=42,b.t0=b.catch(11),ae.update("\u5931\u8D25 ".concat(ne.title," - ").concat(H,"/").concat(C.totalRecords),{icon:"error"}),C.failureCount++,C.failedRecords.push({record:ne,error:b.t0});case 47:b.next=8;break;case 49:b.next=54;break;case 51:b.prev=51,b.t1=b.catch(6),ve.e(b.t1);case 54:return b.prev=54,ve.f(),b.finish(54);case 57:C.endTime=new Date,console.log("Import Summary:",C),ae.close(),te(),r.Modal.success({title:"\u64CD\u4F5C\u6210\u529F",width:600,content:(0,e.jsxs)("div",{children:[(0,e.jsxs)("p",{children:["\u5BFC\u5165\u5B8C\u6210, \u5171 ",C.totalRecords," \u6761\u8BB0\u5F55, \u6210\u529F"," ",C.insertCount," \u6761, \u66F4\u65B0 ",C.updateCount," \u6761, \u5931\u8D25 ",C.failureCount," \u6761"]}),(0,e.jsxs)("p",{children:["\u8017\u65F6:"," ",i()(C.endTime).diff(C.startTime,"seconds")," ","\u79D2"]}),(0,e.jsxs)("p",{children:["\u603B\u8BB0\u5F55\u6570: ",C.totalRecords]}),(0,e.jsxs)("p",{children:["\u63D2\u5165\u6570\u91CF: ",C.insertCount]}),(0,e.jsxs)("p",{children:["\u66F4\u65B0\u6570\u91CF: ",C.updateCount]}),(0,e.jsxs)("p",{children:["\u5931\u8D25\u6570\u91CF: ",C.failureCount]})]}),allowOutsideClick:!1});case 62:case"end":return b.stop()}},d,null,[[6,51,54,57],[11,42]])}));return function(d){return f.apply(this,arguments)}}(),[te]),Re=(0,D.Z)($e,{header:1,fields:{title:{index:0,name:"CMMF CODE",example:"W22L1",formatter:function(d){return String(d).trim()}},tag:{index:1,name:"WMF CODE",example:"YS22ED",formatter:function(d){return String(d).trim()}},scheduledAt:{index:2,name:"\u53D1\u5E03\u65F6\u95F4",example:"2024/8/22 0:00",formatter:function(d){return String(d).trim()&&i()(d).format("YYYY-MM-DD HH:mm")}},expirationAt:{index:3,name:"\u7ED3\u675F\u65F6\u95F4",example:"2024/8/31 0:00",formatter:function(d){return String(d).trim()&&i()(d).format("YYYY-MM-DD HH:mm")}},file:{index:4,name:"\u5BA2\u6237\u4F4D\u7F6E",example:"3201000159 1873596030 \u7092\u9505\u94F2.pdf.pdf",formatter:function(d){return String(d).trim()}},summary:{index:5,name:"\u5907\u6CE8",example:"",formatter:function(d){return String(d).trim()}}},template:{filename:"\u7B26\u5408\u6027\u89C4\u8303\u6279\u91CF\u4E0A\u4F20.xlsx",cols:[{wch:20},{wch:20},{wch:20},{wch:20},{wch:50},{wch:30}]}}),xe=y()(Re,3),Le=xe[0],Ye=xe[1],Ze=xe[2],Ue=N(),Ne=(0,a.useCallback)(function(f){return L()(v()().mark(function d(){return v()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,p(f);case 2:case"end":return C.stop()}},d)}))},[p]),We=(0,a.useState)({visible:!1}),we=y()(We,2),Oe=we[0],fe=we[1],Ke=(0,a.useCallback)(function(){fe(function(f){return t()(t()({},f),{},{visible:!1})})},[]),Qe=(0,a.useCallback)(function(f){fe(function(d){return t()(t()({},d),{},{route:f})}),te()},[fe]),ze=(0,a.useCallback)(function(f){fe(function(d){var R;return((R=d.data)===null||R===void 0?void 0:R.id)!==f.id?d:t()(t()({},d),{},{visible:!1,menu:void 0})}),te()},[fe]),Ve=(0,a.useCallback)(function(){fe(function(f){return t()(t()({},f),{},{visible:!0,data:{}})})},[]),Ge=(0,a.useCallback)(function(f){fe(function(d){return t()(t()({},d),{},{visible:!0,data:f})})},[]);return(0,e.jsxs)(V.vs,{header:{title:"\u95E8\u5E97\u7BA1\u7406"},children:[(0,e.jsx)(ee,{data:Oe.data,onClose:Ke,onSuccess:Qe,onDeleteSuccess:ze,visible:Oe.visible}),(0,e.jsxs)(r.Card,{className:"mb-5 mb-xl-10",children:[(0,e.jsxs)(r.Card.Header,{className:"pt-8",children:[(0,e.jsx)(r.Card.Title,{className:"flex-column",children:(0,e.jsx)(r.Input.Search,{solid:!0,defaultValue:K.keywords,className:"w-250px",placeholder:"\u5173\u952E\u8BCD\u641C\u7D22",onSearch:Be})}),(0,e.jsx)(r.Card.Toolbar,{children:(0,e.jsxs)("div",{children:[(0,e.jsx)(r.Button,{onClick:Ve,className:"me-4 my-1",children:"\u65B0\u5EFA"}),Le,(0,e.jsx)(r.Button,{className:"me-4 my-1",variant:"light",onClick:function(){return Ue.export()},children:"\u5BFC\u51FA Excel"})]})})]}),(0,e.jsx)(r.Card.Body,{children:(0,e.jsx)(r.BlockUI,{overlayClassName:"bg-white bg-opacity-25",loading:_e,children:(0,e.jsx)(r.Table,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(d){return(0,e.jsxs)(e.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,e.jsx)("span",{className:"mx-2",children:d}),"\u4E2A"]})},toolbar:function(d){return(0,e.jsx)("div",{children:(0,e.jsx)(r.Button,{color:"danger",onClick:Ne(d),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},noRowsRenderer:function(){return(0,e.jsx)(r.Empty,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:[{key:"no",title:"\u7F16\u53F7",width:130,sorter:!0,sortOrder:(0,m.PE)(O,"no")},{key:"name",title:"\u540D\u79F0",width:150,sorter:!0,sortOrder:(0,m.PE)(O,"name")},{key:"address.fullAddress",title:"\u5730\u5740"},{key:"deviceCount",title:"\u8BBE\u5907\u6570",sorter:!0,width:80,render:function(d){return d===0?(0,e.jsx)("span",{className:"badge badge-light",children:"\u65E0\u8BBE\u5907"}):(0,e.jsxs)("span",{className:"badge badge-primary",children:[d," \u53F0"]})}},{title:"\u64CD\u4F5C",key:"action",width:120,render:function(d,R){return(0,e.jsx)(de,{data:R,refetch:te,onEdit:Ge})}}],pagination:ce,onChange:pe,dataSource:Ee})})})]})]})}var oe=U},20067:function(){}}]);
