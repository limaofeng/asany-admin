(self.webpackChunk=self.webpackChunk||[]).push([[7530],{14336:function(Ce,Y,r){"use strict";var A=r(15009),t=r.n(A),oe=r(99289),h=r.n(oe),T=r(97857),z=r.n(T),H=r(5574),N=r.n(H),B=r(62435),b=r(79817),a=r(12708);function y(E,m){return E.replace(/{(\w+)}/g,function(d,j){return m[j]!==void 0?m[j]:d})}function M(E,m){var d=E(z()({fetchPolicy:"network-only"},(m==null?void 0:m.mutation)||{})),j=N()(d,1),P=j[0],V=(0,B.useRef)(!1),n=(0,B.useCallback)(function(){var F=h()(t()().mark(function e(f,c){var R,W,J,Z,k,O,L,X,re;return t()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return R=(c==null?void 0:c.dialog)||(m==null?void 0:m.dialog)||{},W=(c==null?void 0:c.mutation)||(m==null?void 0:m.mutation)||{},J=(c==null?void 0:c.onDeleted)||(m==null?void 0:m.onDeleted),Z=R.width,k=R.title,O=R.content,L=!1,Array.isArray(f)?(L=!0,typeof k=="function"&&(k=k(f,{batch:!0})),typeof O=="function"&&(O=O(f,{batch:!0}))):f&&(typeof k=="string"&&(k=y(k,f)),typeof O=="string"&&(O=y(O,f)),typeof k=="function"&&(k=k(f,{batch:!1})),typeof O=="function"&&(O=O(f,{batch:!1}))),X=function(){var s=h()(t()().mark(function S(){return t()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.next=2,P(z()(z()({fetchPolicy:"network-only"},W),{},{variables:{where:{id_in:L?f:[f==null?void 0:f.id]}}}));case 2:case"end":return x.stop()}},S)}));return function(){return s.apply(this,arguments)}}(),o.next=10,b.Modal.confirm(z()(z()({},R),{},{title:k,content:O,width:Z,okText:"\u5220 \u9664",okClassName:"btn-danger",allowOutsideClick:function(){return!V.current},preConfirm:function(){var s=h()(t()().mark(function I(){var x,w,U;return t()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return V.current=!0,v.prev=1,x=document.querySelector(".swal2-confirm"),x.textContent="\u5220\u9664\u4E2D...",w=document.createElement("span"),w.classList.add("spinner-border-sm","ms-2","spinner-border","align-middle"),x.appendChild(w),v.next=9,(0,a.gw)(X(),350);case 9:U=v.sent,J&&J(U);case 11:return v.prev=11,V.current=!1,v.finish(11);case 14:case"end":return v.stop()}},I,null,[[1,,11,14]])}));function S(){return s.apply(this,arguments)}return S}()}));case 10:if(re=o.sent,re.isConfirmed){o.next=13;break}return o.abrupt("return",!1);case 13:return b.Toast.success("\u5220\u9664\u6210\u529F",2e3,{placement:"top-center",progressBar:!0}),o.abrupt("return",!0);case 15:case"end":return o.stop()}},e)}));return function(e,f){return F.apply(this,arguments)}}(),[]),_=(0,B.useCallback)(function(){var F=h()(t()().mark(function e(f,c){return t()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.abrupt("return",n(f,c));case 1:case"end":return W.stop()}},e)}));return function(e,f){return F.apply(this,arguments)}}(),[m,P]),$=(0,B.useCallback)(function(F,e){return n(F,e)},[]);return{delete:_,deleteMany:$}}Y.Z=M},55811:function(Ce,Y,r){"use strict";var A=r(97857),t=r.n(A),oe=r(52677),h=r.n(oe),T=r(61227),z=r.n(T),H=r(62435),N=r(32512),B=r(93162),b=r.n(B),a=r(84105),y=function(d){var j=d.split(`
`);return j.map(function(P){return P.split(",")})},M=function(d,j){var P=z()(d),V=P[0],n=P.slice(1);return n.map(function(_){for(var $={},F=0,e=Object.keys(j.fields);F<e.length;F++){var f=e[F],c=j.fields[f];typeof c=="number"?$[f]=_[c]:typeof c=="string"?$[f]=_[V.indexOf(c)]:h()(c)==="object"&&($[f]=typeof c.index=="string"?_[V.indexOf(c.index)]:_[c.index],c.formatter&&($[f]=c.formatter($[f])))}return $})};function E(m,d){var j=(0,H.useCallback)(function(f){var c=f[0];if(c){var R=new FileReader;R.onload=function(W){var J=c.name.split(".").pop().toLowerCase();if(J==="csv"){var Z=W.target.result,k=y(Z);console.log("Parsed CSV Data:",k)}else if(J==="xls"||J==="xlsx"){var O=W.target.result,L=a.ij(O,{type:"binary"}),X=L.SheetNames[0],re=L.Sheets[X],ie=a.P6.sheet_to_json(re,{header:d.header||1,raw:!1,dateNF:"yyyy-mm-dd hh:mm:ss"}),o=M(ie,d);console.log("Formatted JSON Data:",o),m(o)}else console.error("Unsupported file type")},c.type==="text/csv"||c.name.endsWith(".csv")?R.readAsText(c):R.readAsBinaryString(c)}},[m]),P=(0,N.uI)({onDrop:j,accept:{"text/csv":[".csv"],"application/vnd.ms-excel":[".xls"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"]},maxFiles:1}),V=P.getRootProps,n=P.getInputProps,_=V(),$=_.onClick,F=(0,H.useCallback)(function(f){console.log("handleImportExcel"),$&&$(f)},[$]),e=(0,H.useCallback)(function(){var f,c,R=Object.keys(d.fields).map(function(S){var I=d.fields[S];return h()(I)==="object"&&I.name||S}),W=Object.keys(d.fields).map(function(S){var I=d.fields[S];return h()(I)==="object"&&I.example||""}),J=[R,W],Z=a.P6.aoa_to_sheet(J);(f=d.template)!==null&&f!==void 0&&f.cols&&(Z["!cols"]=d.template.cols);for(var k=0,O=1;O<k;O++)for(var L=0;L<R.length;L++){var X=a.P6.encode_cell({r:O,c:L});Z[X]||(Z[X]={v:null});var re=d.fields[R[L]];if(h()(re)==="object"){switch(re.type){case"date":Z[X].t="d";break}re.format&&(Z[X].z=re.format)}}var ie=a.P6.book_new();a.P6.book_append_sheet(ie,Z,"Sheet1");var o=a.cW(ie,{bookType:"xlsx",type:"array"}),s=new Blob([o],{type:"application/octet-stream"});b()(s,((c=d.template)===null||c===void 0?void 0:c.filename)||"template.xlsx")},[d]);return[(0,H.createElement)("input",t()(t()({},n()),{},{key:"file-input",value:""})),F,e,{data:{},error:"",handleImportExcel:F}]}Y.Z=E},58301:function(Ce,Y,r){"use strict";r.d(Y,{Oh:function(){return H},bp:function(){return N}});var A=r(97857),t=r.n(A),oe=r(62435);function h(B,b){var a,y,M=B(t()({fetchPolicy:"network-only"},b)),E=M.data,m=M.loading,d=M.previousData,j=M.refetch,P=M.error,V=(0,oe.useMemo)(function(){return m?d==null?void 0:d.result.pageInfo:E==null?void 0:E.result.pageInfo},[E==null||(a=E.result)===null||a===void 0?void 0:a.pageInfo.total,m,d==null||(y=d.result)===null||y===void 0?void 0:y.pageInfo.total]),n=(E==null?void 0:E.result.edges.map(function(_){return _.node}))||[];return[n,{loading:m,pageInfo:V,error:P,variables:{},refetch:j}]}function T(B,b){return b.split(".").reduce(function(a,y){return a&&a[y]!==void 0?a[y]:void 0},B)}function z(B,b,a){for(var y=b.split("."),M=B;y.length>1;){var E=y.shift();M[E]||(M[E]={}),M=M[E]}M[y[0]]=a}function H(B,b){var a=b.map(function(y){var M=y.source,E=y.target,m=y.transform,d=y.skip,j=T(B,M);if(j==null||d&&d(j))return"";var P=m?m(j):String(j);return"".concat(encodeURIComponent(E||M),"=").concat(encodeURIComponent(P))});return a.filter(function(y){return y}).join("&")}function N(B,b){var a={};return b.forEach(function(y){var M=y.source,E=y.target,m=y.transform,d=y.skip,j=B.get(M);if(!(!j||j.trim()==="")){var P=m?m(j):j;d&&d(P)||(E?z(a,E,P):a[M]=P)}}),a}Y.ZP=h},24127:function(Ce,Y,r){"use strict";r.d(Y,{Ao:function(){return x},Nv:function(){return R},Qn:function(){return X},RG:function(){return S},YG:function(){return L},k1:function(){return ce},oZ:function(){return J},ow:function(){return k},ps:function(){return e},rq:function(){return F},tu:function(){return o}});var A=r(97857),t=r.n(A),oe=r(68400),h=r.n(oe),T=r(75063),z=r(37887),H=r(73359),N=r(50319),B,b,a,y,M,E,m,d,j,P,V,n,_={},$=(0,T.Ps)(B||(B=h()([`
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
    `])));function F(i){var u=t()(t()({},_),i);return z.a($,u)}function e(i){var u=t()(t()({},_),i);return H.t($,u)}function f(i){var u=_objectSpread(_objectSpread({},_),i);return Apollo.useSuspenseQuery($,u)}var c=(0,T.Ps)(b||(b=h()([`
    mutation createCustomer($input: CustomerCreateInput!) {
  result: createCustomer(input: $input) {
    id
    name
  }
}
    `])));function R(i){var u=t()(t()({},_),i);return N.D(c,u)}var W=(0,T.Ps)(a||(a=h()([`
    mutation updateCustomer($id: ID!, $input: CustomerUpdateInput!) {
  result: updateCustomer(id: $id, input: $input) {
    id
    name
  }
}
    `])));function J(i){var u=t()(t()({},_),i);return N.D(W,u)}var Z=(0,T.Ps)(y||(y=h()([`
    mutation deleteManyCustomers($where: CustomerWhereInput!) {
  result: deleteManyCustomers(where: $where) {
    count
  }
}
    `])));function k(i){var u=t()(t()({},_),i);return N.D(Z,u)}var O=(0,T.Ps)(M||(M=h()([`
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
    `])));function L(i){var u=t()(t()({},_),i);return z.a(O,u)}function X(i){var u=t()(t()({},_),i);return H.t(O,u)}function re(i){var u=_objectSpread(_objectSpread({},_),i);return Apollo.useSuspenseQuery(O,u)}var ie=(0,T.Ps)(E||(E=h()([`
    mutation createCustomerStore($input: CustomerStoreCreateInput!) {
  result: createCustomerStore(input: $input) {
    id
    name
  }
}
    `])));function o(i){var u=t()(t()({},_),i);return N.D(ie,u)}var s=(0,T.Ps)(m||(m=h()([`
    mutation updateCustomerStore($id: ID!, $input: CustomerStoreUpdateInput!) {
  result: updateCustomerStore(id: $id, input: $input) {
    id
    name
  }
}
    `])));function S(i){var u=t()(t()({},_),i);return N.D(s,u)}var I=(0,T.Ps)(d||(d=h()([`
    mutation deleteManyCustomerStores($where: CustomerStoreWhereInput!) {
  result: deleteManyCustomerStores(where: $where) {
    count
  }
}
    `])));function x(i){var u=t()(t()({},_),i);return N.D(I,u)}var w=(0,T.Ps)(j||(j=h()([`
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
    `])));function U(i){var u=_objectSpread(_objectSpread({},_),i);return Apollo.useQuery(w,u)}function K(i){var u=_objectSpread(_objectSpread({},_),i);return Apollo.useLazyQuery(w,u)}function v(i){var u=_objectSpread(_objectSpread({},_),i);return Apollo.useSuspenseQuery(w,u)}var ne=(0,T.Ps)(P||(P=h()([`
    mutation createTicket($input: TicketCreateInput!) {
  result: createTicket(input: $input) {
    id
  }
}
    `])));function ue(i){var u=_objectSpread(_objectSpread({},_),i);return Apollo.useMutation(ne,u)}var te=(0,T.Ps)(V||(V=h()([`
    mutation updateTicket($id: ID!, $input: TicketUpdateInput!) {
  result: updateTicket(id: $id, input: $input) {
    id
  }
}
    `])));function se(i){var u=_objectSpread(_objectSpread({},_),i);return Apollo.useMutation(te,u)}var le=(0,T.Ps)(n||(n=h()([`
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
    `])));function ce(i){var u=t()(t()({},_),i);return z.a(le,u)}function me(i){var u=_objectSpread(_objectSpread({},_),i);return Apollo.useLazyQuery(le,u)}function _e(i){var u=_objectSpread(_objectSpread({},_),i);return Apollo.useSuspenseQuery(le,u)}},77521:function(Ce,Y,r){"use strict";r.d(Y,{Nv:function(){return A.Nv},Qn:function(){return A.Qn},RG:function(){return A.RG},YG:function(){return A.YG},k1:function(){return A.k1},oZ:function(){return A.oZ},ps:function(){return A.ps},rq:function(){return A.rq},tu:function(){return A.tu}});var A=r(24127)},22116:function(Ce,Y,r){"use strict";r.r(Y),r.d(Y,{default:function(){return ie}});var A=r(97857),t=r.n(A),oe=r(15009),h=r.n(oe),T=r(64599),z=r.n(T),H=r(99289),N=r.n(H),B=r(5574),b=r.n(B),a=r(62435),y=r(96974),M=r(39711),E=r(46027),m=r(30381),d=r.n(m),j=r(55811),P=r(58301),V=r(73588),n=r(79817),_=r(12708),$=r(14336),F=r(24127),e=r(86074);function f(o){var s=(0,$.Z)(F.ow,{onDeleted:function(){o&&o()},dialog:{title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",content:function(w,U){var K;if(U.batch){var v=w;K="\u786E\u5B9A\u5220\u9664\u9009\u4E2D\u7684, \u5171 ".concat(v.length," \u4E2A\u5BA2\u6237\u5417\uFF1F")}else K=(0,e.jsxs)(e.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,e.jsx)("strong",{children:w.name})]});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{className:"tip-confirm",children:K}),(0,e.jsx)("p",{children:"\u5220\u9664\u7684\u64CD\u4F5C\u4E0D\u53EF\u9006,\u8BF7\u8C28\u614E\u64CD\u4F5C"})]})}}}),S=s.delete,I=s.deleteMany;return{delete:S,deleteMany:I}}var c=f;function R(o,s){var S=n.Form.useForm(),I=(0,a.useState)(!1),x=b()(I,2),w=x[0],U=x[1],K=s||{},v=K.messages,ne=K.onSubmitted,ue=ne===void 0?function(){}:ne,te=K.transform,se=te===void 0?function(pe){return pe}:te,le=(0,F.Nv)({fetchPolicy:"no-cache",refetchQueries:s==null?void 0:s.refetchQueries}),ce=b()(le,1),me=ce[0],_e=(0,F.oZ)({fetchPolicy:"no-cache",refetchQueries:s==null?void 0:s.refetchQueries}),i=b()(_e,1),u=i[0],Ee=(0,a.useMemo)(function(){return o!=null&&o.id?N()(h()().mark(function pe(){var q,fe,ve;return h()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return U(!0),p.prev=1,p.t0=se,p.next=5,S.validateFields();case 5:return p.t1=p.sent,q=(0,p.t0)(p.t1),p.next=9,n.Toast.promise((0,_.gw)(u({variables:{id:o.id,input:t()({},q)}}),350),{pending:(v==null?void 0:v.pending)||"\u4FDD\u5B58\u4E2D...",success:{render:function(){return(0,e.jsxs)(e.Fragment,{children:["\u8DEF\u7531 ",(0,e.jsx)("strong",{children:q.name})," \u4FDD\u5B58\u6210\u529F"]})}},error:(v==null?void 0:v.error)||"\u4FDD\u5B58\u51FA\u9519"},{duration:2e3,placement:"top-center"});case 9:fe=p.sent,ve=fe.data,ue(ve.updateCustomer),U(!1),p.next=18;break;case 15:p.prev=15,p.t2=p.catch(1),U(!1);case 18:case"end":return p.stop()}},pe,null,[[1,15]])})):N()(h()().mark(function pe(){var q,fe,ve;return h()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return U(!0),p.prev=1,p.t0=se,p.next=5,S.validateFields();case 5:return p.t1=p.sent,q=(0,p.t0)(p.t1),p.next=9,n.Toast.promise((0,_.gw)(me({variables:{input:t()({},q)}}),350),{pending:(v==null?void 0:v.pending)||"\u63D0\u4EA4\u4E2D...",success:{render:(v==null?void 0:v.pending)||"\u63D0\u4EA4\u6210\u529F"},error:(v==null?void 0:v.error)||"\u63D0\u4EA4\u51FA\u9519"},{duration:2e3,placement:"top-center"});case 9:fe=p.sent,ve=fe.data,ue(ve.createCustomer),U(!1),p.next=18;break;case 15:p.prev=15,p.t2=p.catch(1),U(!1);case 18:case"end":return p.stop()}},pe,null,[[1,15]])}))},[me,o==null?void 0:o.id,S,ue,u]);return[Ee,{form:S,submitting:w}]}var W=R,J=[{label:"\u4E0D\u5904\u7406",value:"NONE"},{label:"\u81EA\u52A8\u5206\u914D",value:"AUTO"},{label:"\u5BA2\u6237\u5206\u914D",value:"ASSIGN"}];function Z(o){var s=o.form;return(0,a.useEffect)(function(){var S=o.data;S.id||s.resetFields(),s.setFieldsValue(t()({},S))},[s,o.data]),(0,e.jsxs)(n.Form,{form:s,children:[(0,e.jsx)(n.Row,{children:(0,e.jsx)(n.Col,{span:6,children:(0,e.jsx)(n.Form.Item,{name:"title",className:"d-flex flex-column mb-7",required:!0,label:"\u5BA2\u6237\u540D\u79F0",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BA2\u6237\u540D\u79F0"}],children:(0,e.jsx)(n.Input,{solid:!0})})})}),(0,e.jsx)(n.Row,{children:(0,e.jsx)(n.Col,{span:6,children:(0,e.jsx)(n.Form.Item,{name:"tags",className:"d-flex flex-column mb-7",required:!0,label:"\u670D\u52A1\u5355\u5904\u7406\u7B56\u7565",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u670D\u52A1\u5355\u5904\u7406\u7B56\u7565"}],children:(0,e.jsx)(n.Select2,{solid:!0,className:"w-100",options:J})})})}),(0,e.jsx)(n.Row,{children:(0,e.jsx)(n.Col,{span:6,children:(0,e.jsx)(n.Form.Item,{name:"scheduledAt",className:"d-flex flex-column mb-7",label:"\u5F00\u542F\u7BA1\u7406\u7AEF\u529F\u80FD",valuePropName:"checked",children:(0,e.jsx)(n.Switch,{})})})})]})}function k(o){var s=o.data,S=o.visible,I=o.onClose,x=o.onSuccess,w=o.onDeleteSuccess,U=W(s,{transform:function(_e){return t()({},_e)},onSubmitted:x}),K=b()(U,2),v=K[0],ne=K[1],ue=ne.form,te=ne.submitting,se=(0,a.useMemo)(function(){return s?t()({},s):{}},[s]),le=c(function(){return w(s)}),ce=le.delete;return(0,e.jsx)(n.Drawer,{title:s!=null&&s.id?"\u7F16\u8F91":"\u65B0\u589E",placement:"right",width:640,mask:!0,closable:!0,onClose:I,visible:S,footer:(0,e.jsxs)(n.Row,{children:[(0,e.jsx)(n.Col,{span:6,children:(0,e.jsx)(n.Button,{style:{letterSpacing:"1rem"},className:"w-100",loading:te,onClick:v,children:"\u4FDD\u5B58"})}),(0,e.jsx)(n.Col,{span:6,children:(s==null?void 0:s.id)&&(0,e.jsx)(n.Button,{style:{letterSpacing:"1rem"},className:"w-100",variant:"light-danger",onClick:function(){return ce(s)},children:"\u5220\u9664"})})]}),children:s&&(0,e.jsx)(Z,{submitting:te,data:se,form:ue,submit:v,onDeleteSuccess:w})})}var O=k,L=r(77521);function X(o){var s=o.data,S=o.onEdit,I=o.refetch,x=(0,a.useState)(!1),w=b()(x,2),U=w[0],K=w[1],v=c(I),ne=v.delete,ue=(0,a.useCallback)(function(te){var se=te.key;se==="edit"?S(s):se==="delete"&&ne({name:s.name,id:s.id})},[]);return(0,e.jsx)(n.Dropdown,{overlay:(0,e.jsxs)(n.Menu,{onClick:ue,className:"menu-sub menu-sub-dropdown menu-gray-600 menu-state-bg-light-primary fw-bold w-125px py-2",children:[(0,e.jsx)(n.Menu.Item,{url:"/crm/customers/".concat(s.id,"/information"),className:"px-3",children:"\u7BA1\u7406"},"manage"),(0,e.jsx)(n.Menu.Item,{className:"px-3",children:"\u7F16\u8F91"},"edit"),(0,e.jsx)(n.Menu.Item,{className:"actions-delete px-3",children:"\u5220\u9664"},"delete")]}),placement:"bottomRight",onVisibleChange:K,visible:U,children:(0,e.jsxs)(n.Button,{variant:"clean",activeColor:"light-primary",children:["\u64CD \u4F5C",(0,e.jsx)(E.ZP,{className:"ms-2 svg-icon-5 m-0",name:"Duotune/arr072"})]})})}function re(){var o=(0,y.s0)(),s=(0,M.lr)(),S=b()(s,1),I=S[0],x=(0,a.useMemo)(function(){return(0,P.bp)(I,[{source:"q",target:"keywords"}])},[I.get("q")]);(0,a.useState)({keywords:I.get("q")||""});var w=(0,a.useMemo)(function(){return(0,P.bp)(I,[{source:"q",target:"where.name_contains"},{source:"sex",target:"where.sex"},{source:"page",transform:function(l){return parseInt(l)}},{source:"per_page",transform:function(l){return parseInt(l)}},{source:"sort",target:"orderBy",transform:function(l){var Q=l.split(":"),C=b()(Q,2),ae=C[0],G=C[1];return"".concat(ae,"_").concat(G)}}])},[I.toString()]),U=(0,L.ps)({fetchPolicy:"network-only"}),K=b()(U,1),v=K[0],ne=(0,L.Nv)(),ue=b()(ne,1),te=ue[0],se=(0,L.oZ)(),le=b()(se,1),ce=le[0],me=(0,P.ZP)(L.rq,{variables:w}),_e=b()(me,2),i=_e[0],u=_e[1],Ee=u.loading,pe=u.pageInfo,q=u.refetch,fe=(0,a.useCallback)(function(g,l,Q){var C=(0,P.Oh)({searchForm:x,pagination:g,filters:l,sorter:Q},[{source:"searchForm.keywords",target:"q",skip:function(G){return!G}},{source:"pagination.current",target:"page",skip:function(G){return G===1}},{source:"pagination.pageSize",target:"per_page",skip:function(G){return G===15}},{source:"sorter.field",target:"sort",transform:function(G){return"".concat(G,":").concat(Q.order==="ascend"?"asc":"desc")}}]);o(location.pathname+"?"+C,{replace:!0})},[x]),ve=c(q),De=ve.deleteMany,p=(0,a.useCallback)(function(g){o(location.pathname+(g?"?q="+g:""),{replace:!0})},[]),Ie=(0,a.useCallback)(function(){var g=N()(h()().mark(function l(Q){var C,ae,G,ye,Be,ee,Se,Me,Te,de,Pe,we,ge,Ae,be;return h()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:C={totalRecords:0,insertCount:0,updateCount:0,failureCount:0,failedRecords:[],startTime:null,endTime:null},C.totalRecords=Q.length,ae=n.Toast.loading("\u5F00\u59CB\u5BFC\u5165\u5BA2\u6237",{placement:"top-center"}),C.startTime=new Date,G=0,ye=z()(Q),D.prev=6,ye.s();case 8:if((Be=ye.n()).done){D.next=49;break}return ee=Be.value,G++,D.prev=11,D.next=14,v({variables:{where:{title:ee.title}}});case 14:if(Te=D.sent,de=Te.data,Pe={title:ee.title,summary:ee.summary,tags:ee.tag?[ee.tag]:[],scheduledAt:ee.scheduledAt,expirationAt:ee.expirationAt,category:"conformity",content:{type:"PDF",url:"storage://ZovzE2fU/"+ee.file}},(de==null||(Se=de.result)===null||Se===void 0?void 0:Se.pageInfo.total)!==1){D.next=28;break}return ae.update("\u66F4\u65B0 ".concat(ee.title," - ").concat(G,"/").concat(C.totalRecords),{icon:"loading"}),D.next=21,ce({variables:{id:de.result.edges[0].node.id,input:Pe}});case 21:if(we=D.sent,ge=we.errors,!(ge!=null&&ge.length)){D.next=25;break}throw new Error(ge[0].message);case 25:C.updateCount++,D.next=40;break;case 28:if((de==null||(Me=de.result)===null||Me===void 0?void 0:Me.pageInfo.total)!==0){D.next=39;break}return ae.update("\u65B0\u589E ".concat(ee.title," - ").concat(G,"/").concat(C.totalRecords),{icon:"loading"}),D.next=32,te({variables:{input:Pe}});case 32:if(Ae=D.sent,be=Ae.errors,!(be!=null&&be.length)){D.next=36;break}throw new Error(be[0].message);case 36:C.insertCount++,D.next=40;break;case 39:C.failureCount++;case 40:D.next=47;break;case 42:D.prev=42,D.t0=D.catch(11),ae.update("\u5931\u8D25 ".concat(ee.title," - ").concat(G,"/").concat(C.totalRecords),{icon:"error"}),C.failureCount++,C.failedRecords.push({record:ee,error:D.t0});case 47:D.next=8;break;case 49:D.next=54;break;case 51:D.prev=51,D.t1=D.catch(6),ye.e(D.t1);case 54:return D.prev=54,ye.f(),D.finish(54);case 57:C.endTime=new Date,console.log("Import Summary:",C),ae.close(),q(),n.Modal.success({title:"\u64CD\u4F5C\u6210\u529F",width:600,content:(0,e.jsxs)("div",{children:[(0,e.jsxs)("p",{children:["\u5BFC\u5165\u5B8C\u6210, \u5171 ",C.totalRecords," \u6761\u8BB0\u5F55, \u6210\u529F"," ",C.insertCount," \u6761, \u66F4\u65B0 ",C.updateCount," \u6761, \u5931\u8D25 ",C.failureCount," \u6761"]}),(0,e.jsxs)("p",{children:["\u8017\u65F6:"," ",d()(C.endTime).diff(C.startTime,"seconds")," ","\u79D2"]}),(0,e.jsxs)("p",{children:["\u603B\u8BB0\u5F55\u6570: ",C.totalRecords]}),(0,e.jsxs)("p",{children:["\u63D2\u5165\u6570\u91CF: ",C.insertCount]}),(0,e.jsxs)("p",{children:["\u66F4\u65B0\u6570\u91CF: ",C.updateCount]}),(0,e.jsxs)("p",{children:["\u5931\u8D25\u6570\u91CF: ",C.failureCount]})]}),allowOutsideClick:!1});case 62:case"end":return D.stop()}},l,null,[[6,51,54,57],[11,42]])}));return function(l){return g.apply(this,arguments)}}(),[q]),ke=(0,j.Z)(Ie,{header:1,fields:{title:{index:0,name:"CMMF CODE",example:"W22L1",formatter:function(l){return String(l).trim()}},tag:{index:1,name:"WMF CODE",example:"YS22ED",formatter:function(l){return String(l).trim()}},scheduledAt:{index:2,name:"\u53D1\u5E03\u65F6\u95F4",example:"2024/8/22 0:00",formatter:function(l){return String(l).trim()&&d()(l).format("YYYY-MM-DD HH:mm")}},expirationAt:{index:3,name:"\u7ED3\u675F\u65F6\u95F4",example:"2024/8/31 0:00",formatter:function(l){return String(l).trim()&&d()(l).format("YYYY-MM-DD HH:mm")}},file:{index:4,name:"\u5BA2\u6237\u4F4D\u7F6E",example:"3201000159 1873596030 \u7092\u9505\u94F2.pdf.pdf",formatter:function(l){return String(l).trim()}},summary:{index:5,name:"\u5907\u6CE8",example:"",formatter:function(l){return String(l).trim()}}},template:{filename:"\u7B26\u5408\u6027\u89C4\u8303\u6279\u91CF\u4E0A\u4F20.xlsx",cols:[{wch:20},{wch:20},{wch:20},{wch:20},{wch:50},{wch:30}]}}),je=b()(ke,3),$e=je[0],Fe=je[1],Re=je[2],Le=(0,a.useCallback)(function(g){return N()(h()().mark(function l(){return h()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,De(g);case 2:case"end":return C.stop()}},l)}))},[De]),Ue=(0,a.useState)({visible:!1}),Oe=b()(Ue,2),xe=Oe[0],he=Oe[1],Ne=(0,a.useCallback)(function(){he(function(g){return t()(t()({},g),{},{visible:!1})})},[]),We=(0,a.useCallback)(function(g){he(function(l){return t()(t()({},l),{},{route:g})}),q()},[he]),Ke=(0,a.useCallback)(function(g){he(function(l){var Q;return((Q=l.data)===null||Q===void 0?void 0:Q.id)!==g.id?l:t()(t()({},l),{},{visible:!1,menu:void 0})}),q()},[he]),Qe=(0,a.useCallback)(function(){he(function(g){return t()(t()({},g),{},{visible:!0,data:{}})})},[]),ze=(0,a.useCallback)(function(g){he(function(l){return t()(t()({},l),{},{visible:!0,data:g})})},[]);return(0,e.jsxs)(V.vs,{header:{title:"\u5BA2\u6237\u7BA1\u7406"},children:[(0,e.jsx)(O,{data:xe.data,onClose:Ne,onSuccess:We,onDeleteSuccess:Ke,visible:xe.visible}),(0,e.jsxs)(n.Card,{className:"mb-5 mb-xl-10",children:[(0,e.jsxs)(n.Card.Header,{className:"pt-8",children:[(0,e.jsx)(n.Card.Title,{className:"flex-column",children:(0,e.jsx)(n.Input.Search,{solid:!0,defaultValue:x.keywords,className:"w-250px",placeholder:"\u5173\u952E\u8BCD\u641C\u7D22",onSearch:p})}),(0,e.jsx)(n.Card.Toolbar,{children:(0,e.jsxs)("div",{children:[(0,e.jsx)(n.Button,{onClick:Qe,className:"me-4 my-1",children:"\u65B0\u5EFA"}),$e,(0,e.jsx)(n.Button,{className:"me-4 my-1",onClick:Fe,children:"\u6A21\u677F\u6570\u636E\u5BFC\u5165"}),(0,e.jsx)(n.Button,{variant:"light",className:"me-4 my-1",onClick:Re,children:"\u7B26\u5408\u6027\u58F0\u660E\u6A21\u677F\u4E0B\u8F7D"})]})})]}),(0,e.jsx)(n.Card.Body,{children:(0,e.jsx)(n.BlockUI,{overlayClassName:"bg-white bg-opacity-25",loading:Ee,children:(0,e.jsx)(n.Table,{hover:!0,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(l){return(0,e.jsxs)(e.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,e.jsx)("span",{className:"mx-2",children:l}),"\u4E2A"]})},toolbar:function(l){return(0,e.jsx)("div",{children:(0,e.jsx)(n.Button,{color:"danger",onClick:Le(l),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},noRowsRenderer:function(){return(0,e.jsx)(n.Empty,{description:"\u5217\u8868\u6570\u636E\u4E3A\u7A7A",image:"/assets/media/illustrations/sigma-1/5.png"})},columns:[{key:"name",title:"\u540D\u79F0",sorter:!0,sortOrder:(0,_.PE)(I,"name")},{key:"ticketStrategy",title:"\u5DE5\u5355\u7B56\u7565",width:130,render:function(l){var Q={NONE:"\u4E0D\u5904\u7406",AUTO:"\u81EA\u52A8\u5206\u914D",ASSIGN:"\u5BA2\u6237\u5206\u914D"};return Q[l]}},{key:"ticketCount",title:"\u662F\u5426\u542F\u7528\u7BA1\u7406\u529F\u80FD",width:130},{title:"\u64CD\u4F5C",key:"action",width:120,render:function(l,Q){return(0,e.jsx)(X,{data:Q,refetch:q,onEdit:ze})}}],pagination:pe,onChange:fe,dataSource:i})})})]})]})}var ie=re},20067:function(){}}]);
