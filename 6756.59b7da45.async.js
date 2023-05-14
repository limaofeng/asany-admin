(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[6756],{15459:function(pe,w,t){"use strict";t.d(w,{N2:function(){return d},jV:function(){return ce},yk:function(){return P},gW:function(){return Y},KK:function(){return b}});var v=t(11849),j=t(20310),y=t(49704),g=t(64718),ae=t(38460),O,M,C,n,U,W,G,H,k={},K=(0,y.Ps)(O||(O=(0,j.Z)([`
    fragment PhoneParts on Phone {
  status
  number
}
    `]))),V=(0,y.Ps)(M||(M=(0,j.Z)([`
    fragment EmailParts on Email {
  status
  address
}
    `]))),re=(0,y.Ps)(C||(C=(0,j.Z)([`
    fragment AddressParts on Address {
  country
  province
  city
  district
  street
  postalCode
}
    `]))),se=(0,y.Ps)(n||(n=(0,j.Z)([`
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
`,""])),K,V,re),J=(0,y.Ps)(U||(U=(0,j.Z)([`
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
    `])));function ce(a){var r=(0,v.Z)((0,v.Z)({},k),a);return g.a(J,r)}function le(a){var r=_objectSpread(_objectSpread({},k),a);return Apollo.useLazyQuery(J,r)}var X=(0,y.Ps)(W||(W=(0,j.Z)([`
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
    `])));function d(a){var r=(0,v.Z)((0,v.Z)({},k),a);return g.a(X,r)}function R(a){var r=_objectSpread(_objectSpread({},k),a);return Apollo.useLazyQuery(X,r)}var Z=(0,y.Ps)(G||(G=(0,j.Z)([`
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
`,""])),V,K);function x(a){var r=_objectSpread(_objectSpread({},k),a);return Apollo.useQuery(Z,r)}function b(a){var r=(0,v.Z)((0,v.Z)({},k),a);return ae.t(Z,r)}var A=(0,y.Ps)(H||(H=(0,j.Z)([`
    query contact($id: ID!) {
  contact(id: $id) {
    id
    ...ContactParts
  }
}
    `,""])),se);function P(a){var r=(0,v.Z)((0,v.Z)({},k),a);return g.a(A,r)}function E(a){var r=_objectSpread(_objectSpread({},k),a);return Apollo.useLazyQuery(A,r)}var f=t(39428),h=t(3182),S=t(2824),o=t(67294),B=t(17187),z=t.n(B),D=t(25496),$={totalCount:0,pageSize:0,totalPage:0,currentPage:0};function Y(a){var r=(0,o.useRef)(new(z())),e=(0,o.useRef)({page:1,token:a,loading:!1,contacts:[],pagination:(0,v.Z)({},$)}),ue=(0,o.useReducer)(function(p){return p+1},0),q=(0,S.Z)(ue,2),N=q[1],_=b({fetchPolicy:"cache-and-network"}),T=(0,S.Z)(_,2),F=T[0],ee=T[1],l=ee.data,ne=ee.loading,de=ee.refetch;e.current.loading=ne;var me=(0,o.useCallback)(function(p){p.edges.map(function(c){return c.node}).forEach(function(c,i){var m=p.pageSize*(p.currentPage-1)+i;e.current.contacts[m]=c}),r.current.emit("updates")},[]),oe=(0,o.useCallback)(function(){var p=(0,h.Z)((0,f.Z)().mark(function c(i){return(0,f.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!(e.current.loading&&e.current.page==i)){s.next=2;break}return s.abrupt("return");case 2:if(!e.current.loading){s.next=7;break}return s.next=5,(0,D._v)(120);case 5:s.next=2;break;case 7:e.current.page=i;debugger;de({filter:{token:e.current.token},page:e.current.page});case 10:case"end":return s.stop()}},c)}));return function(c){return p.apply(this,arguments)}}(),[de]),ge=(0,o.useCallback)(function(){var p=(0,h.Z)((0,f.Z)().mark(function c(i){var m,s;return(0,f.Z)().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:m=e.current.pagination.pageSize,e.current.pagination.totalCount%e.current.pagination.pageSize==1&&e.current.pagination.totalPage--,e.current.pagination.totalCount--,e.current.contacts.splice(i,1),s=Math.ceil((i+1)/m),oe(s);case 6:case"end":return L.stop()}},c)}));return function(c){return p.apply(this,arguments)}}(),[oe]),ie=(0,o.useCallback)(function(){var p=(0,h.Z)((0,f.Z)().mark(function c(i){return(0,f.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!e.current.loading){s.next=5;break}return s.next=3,(0,D._v)(120);case 3:s.next=0;break;case 5:if(!(e.current.page==i||i>e.current.pagination.totalPage)){s.next=7;break}return s.abrupt("return");case 7:e.current.page=i,F({variables:{filter:{token:e.current.token},page:e.current.page}});case 9:case"end":return s.stop()}},c)}));return function(c){return p.apply(this,arguments)}}(),[F]),he=(0,o.useCallback)(function(){var p=(0,h.Z)((0,f.Z)().mark(function c(i){var m;return(0,f.Z)().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(m=e.current.contacts[i],m){u.next=12;break}case 2:if(m=e.current.contacts[i],m){u.next=8;break}return u.next=6,ie(Math.ceil((i+1)/e.current.pagination.pageSize));case 6:return u.next=8,(0,D._v)(30);case 8:if(!(i>=e.current.contacts.length)){u.next=11;break}return console.log("\u7D22\u5F15\u8D85\u51FA\u6700\u5927\u957F\u5EA6 [".concat(i,"/").concat(e.current.contacts.length,"]")),u.abrupt("return",e.current.contacts[i-1]);case 11:if(!m){u.next=2;break}case 12:return u.abrupt("return",m);case 13:case"end":return u.stop()}},c)}));return function(c){return p.apply(this,arguments)}}(),[ie]);(0,o.useEffect)(function(){r.current.setMaxListeners(1e3)},[]),(0,o.useEffect)(function(){if(e.current.token!=a&&(e.current.token=a,e.current.pagination=(0,v.Z)({},$),e.current.contacts.length=0,e.current.page=1),!a)return N();F({variables:{filter:{token:a},page:e.current.page}})},[F,a]),(0,o.useEffect)(function(){ne||!(l!=null&&l.contacts)||(e.current.pagination=(0,v.Z)({},l.contacts)||e.current.pagination,me(l.contacts),N())},[me,l==null?void 0:l.contacts,ne]);var ye=function(c){var i=(0,o.useReducer)(function(Q){return Q+1},0),m=(0,S.Z)(i,2),s=m[1],u=(0,o.useRef)({index:c});u.current.index=c,u.current.contact=e.current.contacts[c],(0,o.useEffect)(function(){if(c!=-1){var Q=c+1,te,ve=function(){var Ce=(0,h.Z)((0,f.Z)().mark(function fe(){return(0,f.Z)().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:if(!e.current.loading){I.next=5;break}return I.next=3,(0,D._v)(300);case 3:I.next=0;break;case 5:if(!u.current.contact){I.next=8;break}return u.current.timer&&clearTimeout(u.current.timer),I.abrupt("return");case 8:ie(Math.ceil(Q/e.current.pagination.pageSize)),te=setTimeout(ve,300);case 10:case"end":return I.stop()}},fe)}));return function(){return Ce.apply(this,arguments)}}();return te=setTimeout(ve,300),function(){te&&clearTimeout(te)}}},[c]);var L=(0,o.useCallback)(function(){var Q=e.current.contacts[u.current.index];Q!=u.current.contact&&(u.current.contact=Q,s())},[]);return(0,o.useEffect)(function(){return r.current.addListener("updates",L),function(){r.current.removeListener("updates",L)}},[L]),u.current.contact};return[e.current.pagination,ne,ye,{loadContact:he,refetch:oe,refetchWithRemove:ge}]}},26756:function(pe,w,t){"use strict";t.r(w),t.d(w,{default:function(){return X}});var v=t(39428),j=t(3182),y=t(2824),g=t(67294),ae=t(1861),O=t(7020),M=t(51615),C=t(38671),n=t(85893);function U(){return(0,n.jsx)(C.Zb,{flush:!0,children:(0,n.jsxs)(C.Zb.Body,{className:"p-0",children:[(0,n.jsxs)("div",{className:"card-px text-center py-20 my-10",children:[(0,n.jsx)("h2",{className:"fs-2x fw-bolder mb-10",children:"\u6B22\u8FCE\u4F7F\u7528\u8054\u7CFB\u4EBA\u5E94\u7528\u7A0B\u5E8F"}),(0,n.jsxs)("p",{className:"text-gray-400 fs-4 fw-bold mb-10",children:["\u662F\u65F6\u5019\u6269\u5927\u6211\u4EEC\u7684\u8054\u7CFB\u4E86\u3002",(0,n.jsx)("br",{}),"\u901A\u8FC7\u6DFB\u52A0\u60A8\u7684\u4E0B\u4E00\u4E2A\u8054\u7CFB\u4EBA\uFF0C\u6765\u542F\u52A8\u60A8\u7684\u8054\u7CFB\u4EBA\u3002"]}),(0,n.jsx)("a",{className:"btn btn-primary",children:"\u6DFB\u52A0\u65B0\u8054\u7CFB\u4EBA"})]}),(0,n.jsx)("div",{className:"text-center px-4",children:(0,n.jsx)("img",{className:"mw-100 mh-300px",alt:"",src:"/assets/media/illustrations/sigma-1/5.png"})})]})})}var W=U,G=t(28865),H=t(94184),k=t.n(H),K=t(24561);function V(d){var R=d.index,Z=d.useContact,x=d.style,b=d.active,A=d.onClick,P=Z(R),E=(0,g.useCallback)(function(){A(R)},[A,R]);return(0,n.jsx)("div",{onClick:E,style:x,className:k()("contact-item d-flex flex-stack py-4 mb-1",{active:b}),children:P?(0,n.jsxs)("div",{className:"d-flex align-items-center",children:[(0,n.jsx)(C.mN.Avatar,{alt:P.name,src:"assets/media/avatars/300-6.jpg",size:40,labelClassName:"fs-2",shape:"circle"}),(0,n.jsxs)("div",{className:"ms-4",children:[(0,n.jsx)("a",{className:"fs-6 fw-bolder text-gray-900 text-hover-primary mb-2",children:P.name}),(0,n.jsx)("div",{className:"fw-bold fs-7 text-muted",children:"smith@kpmg.com"})]})]}):(0,n.jsxs)(K.ZP,{speed:2,width:240,height:40,viewBox:"0 0 240 40",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,n.jsx)("rect",{x:"52",y:"8",rx:"3",ry:"3",width:"52",height:"8"}),(0,n.jsx)("rect",{x:"52",y:"26",rx:"3",ry:"3",width:"88",height:"8"}),(0,n.jsx)("circle",{cx:"20",cy:"20",r:"20"})]})})}function re(d){var R=d.pagination,Z=d.useContact,x=d.loading,b=d.onItemClick,A=d.activeIndex,P=d.onScrollToIndex,E=(0,g.useCallback)(function(h){var S=h.key,o=h.style,B=h.index,z=h.isActive;return(0,n.jsx)(V,{style:o,index:B,onClick:b,useContact:Z,active:!!z},S)},[b,Z]),f=(0,g.useCallback)(function(){return(0,n.jsxs)("div",{className:"infinite-scroll-no-rows",children:[(0,n.jsx)("img",{src:"/assets/media/illustrations/dozzy-1/4.png"}),(0,n.jsx)("span",{className:"empty-title",children:x?"\u52A0\u8F7D\u4E2D...":"\u6B64\u5206\u7EC4\u4E3A\u7A7A"}),(0,n.jsx)("span",{className:"empty-subtitle",children:x?"\u7A0D\u7B49\u4E00\u4F1A,\u6B63\u5728\u83B7\u53D6\u6570\u636E":"\u8BF7\u67E5\u770B\u5176\u4ED6\u5206\u7EC4"})]})},[x]);return(0,n.jsxs)(C.Zb,{className:"kt_contacts_list",flush:!0,children:[(0,n.jsx)(C.Zb.Header,{className:"pt-7",children:(0,n.jsxs)("form",{className:"d-flex align-items-center position-relative w-100",autoComplete:"off",children:[(0,n.jsx)(G.ZP,{name:"Duotune/gen021",className:"svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y"}),(0,n.jsx)(C.II,{solid:!0,className:"px-15",size:"sm",placeholder:"\u641C\u7D22\u8054\u7CFB\u4EBA\u2026"})]})}),(0,n.jsx)(C.Zb.Body,{className:"pt-5",children:(0,n.jsx)(C.v_,{rowCount:R.totalCount,rowHeight:66,scrollToIndex:A,onScrollToIndex:P,rowRenderer:E,noRowsRenderer:f,className:"contact-list-body"})})]})}var se=re,J=t(15459),ce=t(18071);function le(d){var R=d.children,Z=d.history,x=(0,O.tT)("contacts",function(N){return N.state.book}),b=(0,M.$B)({path:"/contacts/:id",strict:!0,sensitive:!0}),A=(b==null?void 0:b.params)||{},P=A.id,E=(0,g.useRef)({activeIndex:-1}),f=(0,g.useReducer)(function(N){return N+1},0),h=(0,y.Z)(f,2),S=h[1],o=(0,J.gW)(x),B=(0,y.Z)(o,4),z=B[0],D=B[1],$=B[2],Y=B[3].loadContact,a=(0,g.useMemo)(function(){return x},[x]),r=(0,g.useCallback)(function(){var N=(0,j.Z)((0,v.Z)().mark(function _(T){var F;return(0,v.Z)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:if(E.current.activeIndex!=T.index){l.next=2;break}return l.abrupt("return");case 2:return l.next=4,Y(T.index);case 4:if(F=l.sent,E.current.activeIndex=T.index,a!=F.id){l.next=9;break}return S(),l.abrupt("return");case 9:Z.push("/contacts/".concat(F.id));case 10:case"end":return l.stop()}},_)}));return function(_){return N.apply(this,arguments)}}(),[Z,Y,a]),e=(0,g.useCallback)(function(N){r({index:N})},[r]),ue=$(E.current.activeIndex);console.log("MainContacts book",x,P),console.log(z,D);var q=E.current.activeIndex;return(0,n.jsx)(ce.vs,{className:"app-contacts-main",footer:!1,header:!1,children:(0,n.jsxs)("div",{className:"content-body row g-7",children:[(0,n.jsx)("div",{className:"col-lg-6 col-xl-3",children:(0,n.jsx)(se,{loading:D,useContact:$,pagination:z,activeIndex:q,onItemClick:e,onScrollToIndex:r})}),(0,n.jsx)(ae.E,{className:"col-xl-9 content-view-details custom-scrollbar",options:{scrollbars:{autoHide:"scroll"}},children:P?g.cloneElement(R,{pagination:z,activeIndex:q,contact:ue}):(0,n.jsx)(W,{})})]})})}var X=le}}]);
