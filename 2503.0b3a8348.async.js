var yn=Object.prototype.hasOwnProperty;var fn=Object.getOwnPropertySymbols,Cn=Object.prototype.propertyIsEnumerable;var z=Object.assign;var mn=(k,D)=>{var n={};for(var i in k)yn.call(k,i)&&D.indexOf(i)<0&&(n[i]=k[i]);if(k!=null&&fn)for(var i of fn(k))D.indexOf(i)<0&&Cn.call(k,i)&&(n[i]=k[i]);return n};(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[2503,3975],{33201:function(){},30098:function(k,D,n){"use strict";n.d(D,{G:function(){return O.Z}});var i=n(80064),O=n(48655),v=n(39981)},11014:function(k,D,n){"use strict";n.r(D);var i=n(2824),O=n(93224),v=n(11849),Q=n(86582),l=n(67294),d=n(34912),$=n(1861),M=n(95551),A=n(15459),j=n(69851),K=n(19228),E=n(30098),r=n(85893),Z=j.mQ.TabPane;function R(b){var e=b.books,_=(0,M.tT)("contacts",function(a){var y=a.state;return y.book}),h=(0,l.useCallback)(function(a){if(a.startsWith("contacts-"))console.log(a);else return!1;return!0},[]),p=(0,l.useMemo)(function(){return[].concat((0,Q.Z)(e.map(function(a){return{value:"contacts-".concat(a.id),label:a.name}})),[{type:"separator"},{value:"manage-contacts",label:"\u504F\u597D\u8BBE\u7F6E"}])},[e]);return(0,r.jsx)("div",{className:"app-sidebar-footer",children:(0,r.jsx)(j.Ph,{onChange:h,placement:"topCenter",value:_?"contacts-".concat(_):void 0,options:p})})}function W(b){var e,_=b.book,h=b.namespace,p=(0,A.N2)({fetchPolicy:"cache-and-network",variables:{id:_.id,namespace:h}}),a=p.data,y=(0,l.useMemo)(function(){var C,N=a==null||(C=a.book)===null||C===void 0?void 0:C.groups;if(!N)return[];var F=K.G_(N.map(function(G){return(0,v.Z)({},G)}),{idKey:"id",pidKey:"parentId",converter:function(w){var V=w.id,H=(0,O.Z)(w,["id"]);return(0,v.Z)((0,v.Z)({},H),{},{key:V,title:H.name})}});return F},[a==null||(e=a.book)===null||e===void 0?void 0:e.groups]);return(0,r.jsx)(d.Z,{treeData:y})}function S(b){var e=b.book,_=(0,l.useState)(e.namespaces[0].id),h=(0,i.Z)(_,2),p=h[0],a=h[1],y=(0,l.useCallback)(function(C){console.log("activeKey",C),a(C)},[]);return(0,r.jsx)(j.mQ,{activeKey:p,onChange:y,className:"nav-line-tabs-2x mx-5 mb-5 fs-6",children:e.namespaces.map(function(C){return(0,r.jsx)(Z,{tab:C.name,children:(0,r.jsx)($.E,{className:"custom-scrollbar",options:{scrollbars:{autoHide:"scroll"}},children:(0,r.jsx)(W,{book:e,namespace:C.id})})},C.id)})})}function T(b){var e=b.book;return console.log(e.namespaces),e.type=="ENTERPRISE"?(0,r.jsx)(S,{book:e}):(0,r.jsx)("div",{children:"xxx"})}function U(){var b=(0,A.jV)({fetchPolicy:"cache-and-network"}),e=b.data,_=(0,M.tT)("contacts",function(a){var y=a.state;return y.book}),h=(0,M.tT)("contacts",function(a){return a.setBook});(0,l.useEffect)(function(){if(!!(e!=null&&e.books)){var a=e==null?void 0:e.books;a.some(function(y){return y.id==_})||h(a[0].id)}},[e==null?void 0:e.books,_,h]);var p=(0,l.useMemo)(function(){if(!(!(e!=null&&e.books)||!_))return e.books.find(function(a){return a.id==_})},[e==null?void 0:e.books,_]);return console.log("books",e==null?void 0:e.books,p,_),(0,r.jsxs)(E.G,{width:280,className:"app-sidebar app-contacts-sidebar",children:[(0,r.jsx)("div",{className:"mt-5 px-5 pt-5",children:(0,r.jsx)("h1",{className:"text-gray-800 fw-bold mb-6 mx-5",children:"\u901A\u8BAF\u5F55"})}),(0,r.jsx)("div",{className:"app-sidebar-body flex-column-fluid d-flex flex-column",children:p&&(0,r.jsx)(T,{book:p})}),(0,r.jsx)(R,{books:(e==null?void 0:e.books)||[],onAction:function(){}})]})}D.default=U},15459:function(k,D,n){"use strict";n.d(D,{N2:function(){return H},jV:function(){return G},yk:function(){return vn},gW:function(){return K},KK:function(){return an}});var i=n(3182),O=n(2824),v=n(11849),Q=n(94043),l=n.n(Q),d=n(67294),$=n(17187),M=n.n($),A=n(19228),j={totalCount:0,pageSize:0,totalPage:0,currentPage:0};function K(s){var f=(0,d.useRef)(new(M())),t=(0,d.useRef)({page:1,token:s,loading:!1,contacts:[],pagination:(0,v.Z)({},j)}),pn=(0,d.useReducer)(function(g){return g+1},0),_n=(0,O.Z)(pn,2),on=_n[1],bn=an({fetchPolicy:"cache-and-network"}),sn=(0,O.Z)(bn,2),J=sn[0],q=sn[1],B=q.data,X=q.loading,un=q.refetch;t.current.loading=X;var cn=(0,d.useCallback)(function(g){g.edges.map(function(u){return u.node}).forEach(function(u,m){var P=g.pageSize*(g.currentPage-1)+m;t.current.contacts[P]=u}),f.current.emit("updates")},[]),nn=(0,d.useCallback)(function(){var g=(0,i.Z)(l().mark(function u(m){return l().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!(t.current.loading&&t.current.page==m)){o.next=2;break}return o.abrupt("return");case 2:if(!t.current.loading){o.next=7;break}return o.next=5,(0,A._v)(120);case 5:o.next=2;break;case 7:t.current.page=m;debugger;un({filter:{token:t.current.token},page:t.current.page});case 10:case"end":return o.stop()}},u)}));return function(u){return g.apply(this,arguments)}}(),[un]),Pn=(0,d.useCallback)(function(){var g=(0,i.Z)(l().mark(function u(m){var P,o;return l().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:P=t.current.pagination.pageSize,t.current.pagination.totalCount%t.current.pagination.pageSize==1&&t.current.pagination.totalPage--,t.current.pagination.totalCount--,t.current.contacts.splice(m,1),o=Math.ceil((m+1)/P),nn(o);case 6:case"end":return I.stop()}},u)}));return function(u){return g.apply(this,arguments)}}(),[nn]),en=(0,d.useCallback)(function(){var g=(0,i.Z)(l().mark(function u(m){return l().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!t.current.loading){o.next=5;break}return o.next=3,(0,A._v)(120);case 3:o.next=0;break;case 5:if(!(t.current.page==m||m>t.current.pagination.totalPage)){o.next=7;break}return o.abrupt("return");case 7:t.current.page=m,J({variables:{filter:{token:t.current.token},page:t.current.page}});case 9:case"end":return o.stop()}},u)}));return function(u){return g.apply(this,arguments)}}(),[J]),gn=(0,d.useCallback)(function(){var g=(0,i.Z)(l().mark(function u(m){var P;return l().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(P=t.current.contacts[m],P){c.next=12;break}case 2:if(P=t.current.contacts[m],P){c.next=8;break}return c.next=6,en(Math.ceil((m+1)/t.current.pagination.pageSize));case 6:return c.next=8,(0,A._v)(30);case 8:if(!(m>=t.current.contacts.length)){c.next=11;break}return console.log("\u7D22\u5F15\u8D85\u51FA\u6700\u5927\u957F\u5EA6 [".concat(m,"/").concat(t.current.contacts.length,"]")),c.abrupt("return",t.current.contacts[m-1]);case 11:if(!P){c.next=2;break}case 12:return c.abrupt("return",P);case 13:case"end":return c.stop()}},u)}));return function(u){return g.apply(this,arguments)}}(),[en]);(0,d.useEffect)(function(){f.current.setMaxListeners(1e3)},[]),(0,d.useEffect)(function(){if(t.current.token!=s&&(t.current.token=s,t.current.pagination=(0,v.Z)({},j),t.current.contacts.length=0,t.current.page=1),!s)return on();J({variables:{filter:{token:s},page:t.current.page}})},[J,s]),(0,d.useEffect)(function(){X||!(B!=null&&B.contacts)||(t.current.pagination=(0,v.Z)({},B.contacts)||t.current.pagination,cn(B.contacts),on())},[cn,B==null?void 0:B.contacts,X]);var En=function(u){var m=(0,d.useReducer)(function(x){return x+1},0),P=(0,O.Z)(m,2),o=P[1],c=(0,d.useRef)({index:u});c.current.index=u,c.current.contact=t.current.contacts[u],(0,d.useEffect)(function(){if(u!=-1){var x=u+1,Y,ln=function(){var hn=(0,i.Z)(l().mark(function dn(){return l().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:if(!t.current.loading){L.next=5;break}return L.next=3,(0,A._v)(300);case 3:L.next=0;break;case 5:if(!c.current.contact){L.next=8;break}return c.current.timer&&clearTimeout(c.current.timer),L.abrupt("return");case 8:en(Math.ceil(x/t.current.pagination.pageSize)),Y=setTimeout(ln,300);case 10:case"end":return L.stop()}},dn)}));return function(){return hn.apply(this,arguments)}}();return Y=setTimeout(ln,300),function(){Y&&clearTimeout(Y)}}},[u]);var I=(0,d.useCallback)(function(){var x=t.current.contacts[c.current.index];x!=c.current.contact&&(c.current.contact=x,o())},[]);return(0,d.useEffect)(function(){return f.current.addListener("updates",I),function(){f.current.removeListener("updates",I)}},[I]),c.current.contact};return[t.current.pagination,X,En,{loadContact:gn,refetch:nn,refetchWithRemove:Pn}]}var E=n(20310),r=n(49704),Z=n(93633),R=n(38460),W,S,T,U,b,e,_,h,p={},a=(0,r.Ps)(W||(W=(0,E.Z)([`
    fragment PhoneParts on Phone {
  status
  number
}
    `]))),y=(0,r.Ps)(S||(S=(0,E.Z)([`
    fragment EmailParts on Email {
  status
  address
}
    `]))),C=(0,r.Ps)(T||(T=(0,E.Z)([`
    fragment AddressParts on Address {
  country
  province
  city
  district
  street
  postalCode
}
    `]))),N=(0,r.Ps)(U||(U=(0,E.Z)([`
    fragment ContactParts on Contact {
  name
  title
  sex
  avatar
  phone {
    ...PhoneParts
  }
  email {
    ...EmailParts
  }
  address {
    ...AddressParts
  }
  phones {
    id
    primary
    label
    phone {
      ...PhoneParts
    }
  }
  emails {
    id
    primary
    label
    email {
      ...EmailParts
    }
  }
  addresses {
    id
    primary
    label
    address {
      ...AddressParts
    }
  }
}
    `,`
`,`
`,""])),a,y,C),F=(0,r.Ps)(b||(b=(0,E.Z)([`
    query books {
  books: contactBooks {
    id
    name
    type
    namespaces {
      id
      name
    }
  }
}
    `])));function G(s){var f=(0,v.Z)((0,v.Z)({},p),s);return Z.a(F,f)}function w(s){var f=_objectSpread(_objectSpread({},p),s);return Apollo.useLazyQuery(F,f)}var V=(0,r.Ps)(e||(e=(0,E.Z)([`
    query book($id: ID!, $namespace: String) {
  book: contactBook(id: $id) {
    id
    name
    type
    namespaces {
      id
      name
    }
    groups(namespace: $namespace) {
      id
      name
      namespace
      path
      index
      parentId
    }
  }
}
    `])));function H(s){var f=(0,v.Z)((0,v.Z)({},p),s);return Z.a(V,f)}function kn(s){var f=_objectSpread(_objectSpread({},p),s);return Apollo.useLazyQuery(V,f)}var tn=(0,r.Ps)(_||(_=(0,E.Z)([`
    query contacts($filter: ContactFilter, $page: Int = 1) {
  contacts(filter: $filter, page: $page) {
    currentPage
    pageSize
    totalPage
    totalCount
    edges {
      cursor
      node {
        id
        name
        title
        sex
        avatar
        email {
          ...EmailParts
        }
        phone {
          ...PhoneParts
        }
      }
    }
  }
}
    `,`
`,""])),y,a);function Dn(s){var f=_objectSpread(_objectSpread({},p),s);return Apollo.useQuery(tn,f)}function an(s){var f=(0,v.Z)((0,v.Z)({},p),s);return R.t(tn,f)}var rn=(0,r.Ps)(h||(h=(0,E.Z)([`
    query contact($id: ID!) {
  contact(id: $id) {
    id
    ...ContactParts
  }
}
    `,""])),N);function vn(s){var f=(0,v.Z)((0,v.Z)({},p),s);return Z.a(rn,f)}function On(s){var f=_objectSpread(_objectSpread({},p),s);return Apollo.useLazyQuery(rn,f)}},77104:function(k,D,n){"use strict";var i=n(94184),O=n.n(i),v=n(67294),Q=n(70861),l=n(76792),d=n(85893);const $={variant:"primary",active:!1,disabled:!1},M=v.forwardRef((S,W)=>{var{as:A,bsPrefix:j,variant:K,size:E,active:r,className:Z}=S,R=mn(S,["as","bsPrefix","variant","size","active","className"]);const T=(0,l.vE)(j,"btn"),[U,{tagName:b}]=(0,Q.FT)(z({tagName:A},R)),e=b;return(0,d.jsx)(e,z(z(z({},U),R),{ref:W,className:O()(Z,T,r&&"active",K&&`${T}-${K}`,E&&`${T}-${E}`,R.href&&R.disabled&&"disabled")}))});M.displayName="Button",M.defaultProps=$,D.Z=M}}]);
