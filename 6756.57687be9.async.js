(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[6756],{15459:function(ge,w,t){"use strict";t.d(w,{N2:function(){return N},jV:function(){return j},yk:function(){return q},gW:function(){return ce},KK:function(){return A}});var R=t(3182),S=t(2824),g=t(11849),O=t(94043),i=t.n(O),d=t(67294),re=t(17187),se=t.n(re),z=t(19228),M={totalCount:0,pageSize:0,totalPage:0,currentPage:0};function ce(a){var s=(0,d.useRef)(new(se())),n=(0,d.useRef)({page:1,token:a,loading:!1,contacts:[],pagination:(0,g.Z)({},M)}),ie=(0,d.useReducer)(function(p){return p+1},0),_=(0,S.Z)(ie,2),k=_[1],ee=A({fetchPolicy:"cache-and-network"}),T=(0,S.Z)(ee,2),E=T[0],ne=T[1],v=ne.data,te=ne.loading,ve=ne.refetch;n.current.loading=te;var fe=(0,d.useCallback)(function(p){p.edges.map(function(u){return u.node}).forEach(function(u,l){var m=p.pageSize*(p.currentPage-1)+l;n.current.contacts[m]=u}),s.current.emit("updates")},[]),le=(0,d.useCallback)(function(){var p=(0,R.Z)(i().mark(function u(l){return i().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!(n.current.loading&&n.current.page==l)){c.next=2;break}return c.abrupt("return");case 2:if(!n.current.loading){c.next=7;break}return c.next=5,(0,z._v)(120);case 5:c.next=2;break;case 7:n.current.page=l;debugger;ve({filter:{token:n.current.token},page:n.current.page});case 10:case"end":return c.stop()}},u)}));return function(u){return p.apply(this,arguments)}}(),[ve]),he=(0,d.useCallback)(function(){var p=(0,R.Z)(i().mark(function u(l){var m,c;return i().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:m=n.current.pagination.pageSize,n.current.pagination.totalCount%n.current.pagination.pageSize==1&&n.current.pagination.totalPage--,n.current.pagination.totalCount--,n.current.contacts.splice(l,1),c=Math.ceil((l+1)/m),le(c);case 6:case"end":return I.stop()}},u)}));return function(u){return p.apply(this,arguments)}}(),[le]),de=(0,d.useCallback)(function(){var p=(0,R.Z)(i().mark(function u(l){return i().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!n.current.loading){c.next=5;break}return c.next=3,(0,z._v)(120);case 3:c.next=0;break;case 5:if(!(n.current.page==l||l>n.current.pagination.totalPage)){c.next=7;break}return c.abrupt("return");case 7:n.current.page=l,E({variables:{filter:{token:n.current.token},page:n.current.page}});case 9:case"end":return c.stop()}},u)}));return function(u){return p.apply(this,arguments)}}(),[E]),ye=(0,d.useCallback)(function(){var p=(0,R.Z)(i().mark(function u(l){var m;return i().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(m=n.current.contacts[l],m){o.next=12;break}case 2:if(m=n.current.contacts[l],m){o.next=8;break}return o.next=6,de(Math.ceil((l+1)/n.current.pagination.pageSize));case 6:return o.next=8,(0,z._v)(30);case 8:if(!(l>=n.current.contacts.length)){o.next=11;break}return console.log("\u7D22\u5F15\u8D85\u51FA\u6700\u5927\u957F\u5EA6 [".concat(l,"/").concat(n.current.contacts.length,"]")),o.abrupt("return",n.current.contacts[l-1]);case 11:if(!m){o.next=2;break}case 12:return o.abrupt("return",m);case 13:case"end":return o.stop()}},u)}));return function(u){return p.apply(this,arguments)}}(),[de]);(0,d.useEffect)(function(){s.current.setMaxListeners(1e3)},[]),(0,d.useEffect)(function(){if(n.current.token!=a&&(n.current.token=a,n.current.pagination=(0,g.Z)({},M),n.current.contacts.length=0,n.current.page=1),!a)return k();E({variables:{filter:{token:a},page:n.current.page}})},[E,a]),(0,d.useEffect)(function(){te||!(v!=null&&v.contacts)||(n.current.pagination=(0,g.Z)({},v.contacts)||n.current.pagination,fe(v.contacts),k())},[fe,v==null?void 0:v.contacts,te]);var Ce=function(u){var l=(0,d.useReducer)(function(Q){return Q+1},0),m=(0,S.Z)(l,2),c=m[1],o=(0,d.useRef)({index:u});o.current.index=u,o.current.contact=n.current.contacts[u],(0,d.useEffect)(function(){if(u!=-1){var Q=u+1,ae,me=function(){var xe=(0,R.Z)(i().mark(function pe(){return i().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:if(!n.current.loading){B.next=5;break}return B.next=3,(0,z._v)(300);case 3:B.next=0;break;case 5:if(!o.current.contact){B.next=8;break}return o.current.timer&&clearTimeout(o.current.timer),B.abrupt("return");case 8:de(Math.ceil(Q/n.current.pagination.pageSize)),ae=setTimeout(me,300);case 10:case"end":return B.stop()}},pe)}));return function(){return xe.apply(this,arguments)}}();return ae=setTimeout(me,300),function(){ae&&clearTimeout(ae)}}},[u]);var I=(0,d.useCallback)(function(){var Q=n.current.contacts[o.current.index];Q!=o.current.contact&&(o.current.contact=Q,c())},[]);return(0,d.useEffect)(function(){return s.current.addListener("updates",I),function(){s.current.removeListener("updates",I)}},[I]),o.current.contact};return[n.current.pagination,te,Ce,{loadContact:ye,refetch:le,refetchWithRemove:he}]}var y=t(20310),f=t(49704),e=t(93633),ue=t(38460),U,W,G,H,K,V,J,X,r={},C=(0,f.Ps)(U||(U=(0,y.Z)([`
    fragment PhoneParts on Phone {
  status
  number
}
    `]))),x=(0,f.Ps)(W||(W=(0,y.Z)([`
    fragment EmailParts on Email {
  status
  address
}
    `]))),h=(0,f.Ps)(G||(G=(0,y.Z)([`
    fragment AddressParts on Address {
  country
  province
  city
  district
  street
  postalCode
}
    `]))),b=(0,f.Ps)(H||(H=(0,y.Z)([`
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
`,""])),C,x,h),P=(0,f.Ps)(K||(K=(0,y.Z)([`
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
    `])));function j(a){var s=(0,g.Z)((0,g.Z)({},r),a);return e.a(P,s)}function Z(a){var s=_objectSpread(_objectSpread({},r),a);return Apollo.useLazyQuery(P,s)}var D=(0,f.Ps)(V||(V=(0,y.Z)([`
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
    `])));function N(a){var s=(0,g.Z)((0,g.Z)({},r),a);return e.a(D,s)}function Y(a){var s=_objectSpread(_objectSpread({},r),a);return Apollo.useLazyQuery(D,s)}var L=(0,f.Ps)(J||(J=(0,y.Z)([`
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
`,""])),x,C);function F(a){var s=_objectSpread(_objectSpread({},r),a);return Apollo.useQuery(L,s)}function A(a){var s=(0,g.Z)((0,g.Z)({},r),a);return ue.t(L,s)}var $=(0,f.Ps)(X||(X=(0,y.Z)([`
    query contact($id: ID!) {
  contact(id: $id) {
    id
    ...ContactParts
  }
}
    `,""])),b);function q(a){var s=(0,g.Z)((0,g.Z)({},r),a);return e.a($,s)}function oe(a){var s=_objectSpread(_objectSpread({},r),a);return Apollo.useLazyQuery($,s)}},26756:function(ge,w,t){"use strict";t.r(w),t.d(w,{default:function(){return X}});var R=t(3182),S=t(2824),g=t(94043),O=t.n(g),i=t(67294),d=t(1861),re=t(95551),se=t(51615),z=t(28865),M=t(94184),ce=t.n(M),y=t(24561),f=t(69851),e=t(85893);function ue(r){var C=r.index,x=r.useContact,h=r.style,b=r.active,P=r.onClick,j=x(C),Z=(0,i.useCallback)(function(){P(C)},[P,C]);return(0,e.jsx)("div",{onClick:Z,style:h,className:ce()("contact-item d-flex flex-stack py-4",{active:b}),children:j?(0,e.jsxs)("div",{className:"d-flex align-items-center",children:[(0,e.jsx)(f.mN.Avatar,{alt:j.name,src:"assets/media/avatars/300-6.jpg",size:40,labelClassName:"fs-2",shape:"circle"}),(0,e.jsxs)("div",{className:"ms-4",children:[(0,e.jsx)("a",{className:"fs-6 fw-bolder text-gray-900 text-hover-primary mb-2",children:j.name}),(0,e.jsx)("div",{className:"fw-bold fs-7 text-muted",children:"smith@kpmg.com"})]})]}):(0,e.jsxs)(y.ZP,{speed:2,width:240,height:40,viewBox:"0 0 240 40",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,e.jsx)("rect",{x:"52",y:"8",rx:"3",ry:"3",width:"52",height:"8"}),(0,e.jsx)("rect",{x:"52",y:"26",rx:"3",ry:"3",width:"88",height:"8"}),(0,e.jsx)("circle",{cx:"20",cy:"20",r:"20"})]})})}function U(r){var C=r.pagination,x=r.useContact,h=r.loading,b=r.onItemClick,P=r.activeIndex,j=r.onScrollToIndex,Z=(0,i.useCallback)(function(N){var Y=N.key,L=N.style,F=N.index,A=N.isActive;return(0,e.jsx)(ue,{style:L,index:F,onClick:b,useContact:x,active:!!A},Y)},[b,x]),D=(0,i.useCallback)(function(){return(0,e.jsxs)("div",{className:"infinite-scroll-no-rows",children:[(0,e.jsx)("img",{src:"/assets/media/illustrations/dozzy-1/4.png"}),(0,e.jsx)("span",{className:"empty-title",children:h?"\u52A0\u8F7D\u4E2D...":"\u6B64\u5206\u7EC4\u4E3A\u7A7A"}),(0,e.jsx)("span",{className:"empty-subtitle",children:h?"\u7A0D\u7B49\u4E00\u4F1A,\u6B63\u5728\u83B7\u53D6\u6570\u636E":"\u8BF7\u67E5\u770B\u5176\u4ED6\u5206\u7EC4"})]})},[h]);return(0,e.jsxs)(f.Zb,{className:"kt_contacts_list",flush:!0,children:[(0,e.jsx)(f.Zb.Header,{className:"pt-7",children:(0,e.jsxs)("form",{className:"d-flex align-items-center position-relative w-100",autoComplete:"off",children:[(0,e.jsx)(z.ZP,{name:"Duotune/gen021",className:"svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y"}),(0,e.jsx)(f.II,{solid:!0,className:"px-15",size:"sm",placeholder:"\u641C\u7D22\u8054\u7CFB\u4EBA\u2026"})]})}),(0,e.jsx)(f.Zb.Body,{className:"pt-5",children:(0,e.jsx)(f.v_,{rowCount:C.totalCount,rowHeight:66,scrollToIndex:P,onScrollToIndex:j,rowRenderer:Z,noRowsRenderer:D,className:"contact-list-body"})})]})}var W=U;function G(){return(0,e.jsx)(f.Zb,{flush:!0,children:(0,e.jsxs)(f.Zb.Body,{className:"p-0",children:[(0,e.jsxs)("div",{className:"card-px text-center py-20 my-10",children:[(0,e.jsx)("h2",{className:"fs-2x fw-bolder mb-10",children:"\u6B22\u8FCE\u4F7F\u7528\u8054\u7CFB\u4EBA\u5E94\u7528\u7A0B\u5E8F"}),(0,e.jsxs)("p",{className:"text-gray-400 fs-4 fw-bold mb-10",children:["\u662F\u65F6\u5019\u6269\u5927\u6211\u4EEC\u7684\u8054\u7CFB\u4E86\u3002",(0,e.jsx)("br",{}),"\u901A\u8FC7\u6DFB\u52A0\u60A8\u7684\u4E0B\u4E00\u4E2A\u8054\u7CFB\u4EBA\uFF0C\u6765\u542F\u52A8\u60A8\u7684\u8054\u7CFB\u4EBA\u3002"]}),(0,e.jsx)("a",{className:"btn btn-primary",children:"\u6DFB\u52A0\u65B0\u8054\u7CFB\u4EBA"})]}),(0,e.jsx)("div",{className:"text-center px-4",children:(0,e.jsx)("img",{className:"mw-100 mh-300px",alt:"",src:"/assets/media/illustrations/sigma-1/5.png"})})]})})}var H=G,K=t(15459),V=t(75468);function J(r){var C=r.children,x=r.history,h=(0,re.tT)("contacts",function(k){return k.state.book}),b=(0,se.$B)({path:"/contacts/:id",strict:!0,sensitive:!0}),P=(b==null?void 0:b.params)||{},j=P.id,Z=(0,i.useRef)({activeIndex:-1}),D=(0,i.useReducer)(function(k){return k+1},0),N=(0,S.Z)(D,2),Y=N[1],L=(0,K.gW)(h),F=(0,S.Z)(L,4),A=F[0],$=F[1],q=F[2],oe=F[3].loadContact,a=(0,i.useMemo)(function(){return h},[h]),s=(0,i.useCallback)(function(){var k=(0,R.Z)(O().mark(function ee(T){var E;return O().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(Z.current.activeIndex!=T.index){v.next=2;break}return v.abrupt("return");case 2:return v.next=4,oe(T.index);case 4:if(E=v.sent,Z.current.activeIndex=T.index,a!=E.id){v.next=9;break}return Y(),v.abrupt("return");case 9:x.push("/contacts/".concat(E.id));case 10:case"end":return v.stop()}},ee)}));return function(ee){return k.apply(this,arguments)}}(),[x,oe,a]),n=(0,i.useCallback)(function(k){s({index:k})},[s]),ie=q(Z.current.activeIndex);console.log("MainContacts book",h,j),console.log(A,$);var _=Z.current.activeIndex;return(0,e.jsx)(V.v,{className:"app-contacts-main",footer:!1,header:!1,children:(0,e.jsxs)("div",{className:"content-body row g-7",children:[(0,e.jsx)("div",{className:"col-lg-6 col-xl-3",children:(0,e.jsx)(W,{loading:$,useContact:q,pagination:A,activeIndex:_,onItemClick:n,onScrollToIndex:s})}),(0,e.jsx)(d.E,{className:"col-xl-9 content-view-details custom-scrollbar",options:{scrollbars:{autoHide:"scroll"}},children:j?i.cloneElement(C,{pagination:A,activeIndex:_,contact:ie}):(0,e.jsx)(H,{})})]})})}var X=J}}]);
