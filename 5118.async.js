"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5118],{75466:function(je,G,t){t.d(G,{N2:function(){return S},jV:function(){return oe},yk:function(){return A},gW:function(){return U},KK:function(){return g}});var re=t(97857),v=t.n(re),se=t(68400),j=t.n(se),b=t(75063),L=t(37887),C=t(73359),w,W,H,x,n,K,Z,V,m={},J=(0,b.Ps)(w||(w=j()([`
    fragment PhoneParts on Phone {
  status
  number
}
    `]))),X=(0,b.Ps)(W||(W=j()([`
    fragment EmailParts on Email {
  status
  address
}
    `]))),ce=(0,b.Ps)(H||(H=j()([`
    fragment AddressParts on Address {
  country
  province
  city
  district
  street
  postalCode
}
    `]))),ue=(0,b.Ps)(x||(x=j()([`
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
`,""])),J,X,ce),M=(0,b.Ps)(n||(n=j()([`
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
    `])));function oe(a){var r=v()(v()({},m),a);return L.a(M,r)}function ve(a){var r=_objectSpread(_objectSpread({},m),a);return Apollo.useLazyQuery(M,r)}function me(a){var r=_objectSpread(_objectSpread({},m),a);return Apollo.useSuspenseQuery(M,r)}var i=(0,b.Ps)(K||(K=j()([`
    query book($id: ID!) {
  book: contactBook(id: $id) {
    id
    name
    type
    namespaces {
      id
      name
    }
  }
}
    `])));function S(a){var r=v()(v()({},m),a);return L.a(i,r)}function E(a){var r=_objectSpread(_objectSpread({},m),a);return Apollo.useLazyQuery(i,r)}function h(a){var r=_objectSpread(_objectSpread({},m),a);return Apollo.useSuspenseQuery(i,r)}var k=(0,b.Ps)(Z||(Z=j()([`
    query contacts($where: ContactWhereInput, $page: Int = 1) {
  contacts(where: $where, page: $page) {
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
`,""])),X,J);function P(a){var r=_objectSpread(_objectSpread({},m),a);return Apollo.useQuery(k,r)}function g(a){var r=v()(v()({},m),a);return C.t(k,r)}function D(a){var r=_objectSpread(_objectSpread({},m),a);return Apollo.useSuspenseQuery(k,r)}var I=(0,b.Ps)(V||(V=j()([`
    query contact($id: ID!) {
  contact(id: $id) {
    id
    ...ContactParts
  }
}
    `,""])),ue);function A(a){var r=v()(v()({},m),a);return L.a(I,r)}function Y(a){var r=_objectSpread(_objectSpread({},m),a);return Apollo.useLazyQuery(I,r)}function F(a){var r=_objectSpread(_objectSpread({},m),a);return Apollo.useSuspenseQuery(I,r)}var Q=t(15009),d=t.n(Q),q=t(99289),R=t.n(q),_=t(5574),z=t.n(_),l=t(62435),ie=t(17187),ee=t.n(ie),y=t(12708),O={totalCount:0,pageSize:0,totalPage:0,currentPage:0};function U(a){var r=(0,l.useRef)(new(ee())),e=(0,l.useRef)({page:1,token:a,loading:!1,contacts:[],pagination:v()({},O)}),be=(0,l.useReducer)(function(p){return p+1},0),ke=z()(be,2),pe=ke[1],Se=g({fetchPolicy:"cache-and-network"}),ge=z()(Se,2),ne=ge[0],le=ge[1],N=le.data,te=le.loading,he=le.refetch;e.current.loading=te;var ye=(0,l.useCallback)(function(p){p.edges.map(function(c){return c.node}).forEach(function(c,o){var f=p.pageSize*(p.currentPage-1)+o;e.current.contacts[f]=c}),r.current.emit("updates")},[]),de=(0,l.useCallback)(function(){var p=R()(d()().mark(function c(o){return d()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!(e.current.loading&&e.current.page===o)){s.next=2;break}return s.abrupt("return");case 2:if(!e.current.loading){s.next=7;break}return s.next=5,(0,y._v)(120);case 5:s.next=2;break;case 7:e.current.page=o,he({filter:{token:e.current.token},page:e.current.page});case 9:case"end":return s.stop()}},c)}));return function(c){return p.apply(this,arguments)}}(),[he]),Pe=(0,l.useCallback)(function(){var p=R()(d()().mark(function c(o){var f,s;return d()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:f=e.current.pagination.pageSize,e.current.pagination.totalCount%e.current.pagination.pageSize===1&&e.current.pagination.totalPage--,e.current.pagination.totalCount--,e.current.contacts.splice(o,1),s=Math.ceil((o+1)/f),de(s);case 6:case"end":return T.stop()}},c)}));return function(c){return p.apply(this,arguments)}}(),[de]),fe=(0,l.useCallback)(function(){var p=R()(d()().mark(function c(o){return d()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(!e.current.loading){s.next=5;break}return s.next=3,(0,y._v)(120);case 3:s.next=0;break;case 5:if(!(e.current.page===o||o>e.current.pagination.totalPage)){s.next=7;break}return s.abrupt("return");case 7:e.current.page=o,ne({variables:{filter:{token:e.current.token},page:e.current.page}});case 9:case"end":return s.stop()}},c)}));return function(c){return p.apply(this,arguments)}}(),[ne]),Ae=(0,l.useCallback)(function(){var p=R()(d()().mark(function c(o){var f;return d()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:if(f=e.current.contacts[o],f){u.next=12;break}case 2:if(f=e.current.contacts[o],f){u.next=8;break}return u.next=6,fe(Math.ceil((o+1)/e.current.pagination.pageSize));case 6:return u.next=8,(0,y._v)(30);case 8:if(!(o>=e.current.contacts.length)){u.next=11;break}return console.log("\u7D22\u5F15\u8D85\u51FA\u6700\u5927\u957F\u5EA6 [".concat(o,"/").concat(e.current.contacts.length,"]")),u.abrupt("return",e.current.contacts[o-1]);case 11:if(!f){u.next=2;break}case 12:return u.abrupt("return",f);case 13:case"end":return u.stop()}},c)}));return function(c){return p.apply(this,arguments)}}(),[fe]);(0,l.useEffect)(function(){r.current.setMaxListeners(1e3)},[]),(0,l.useEffect)(function(){if(e.current.token!==a&&(e.current.token=a,e.current.pagination=v()({},O),e.current.contacts.length=0,e.current.page=1),!a)return pe();ne({variables:{filter:{token:a},page:e.current.page}})},[ne,a]),(0,l.useEffect)(function(){te||!(N!=null&&N.contacts)||(e.current.pagination=v()({},N.contacts)||e.current.pagination,ye(N.contacts),pe())},[ye,N==null?void 0:N.contacts,te]);var Re=function(c){var o=(0,l.useReducer)(function($){return $+1},0),f=z()(o,2),s=f[1],u=(0,l.useRef)({index:c});u.current.index=c,u.current.contact=e.current.contacts[c],(0,l.useEffect)(function(){if(c!==-1){var $=c+1,ae,Ce=function(){var Ne=R()(d()().mark(function xe(){return d()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:if(!e.current.loading){B.next=5;break}return B.next=3,(0,y._v)(300);case 3:B.next=0;break;case 5:if(!u.current.contact){B.next=8;break}return u.current.timer&&clearTimeout(u.current.timer),B.abrupt("return");case 8:fe(Math.ceil($/e.current.pagination.pageSize)),ae=setTimeout(Ce,300);case 10:case"end":return B.stop()}},xe)}));return function(){return Ne.apply(this,arguments)}}();return ae=setTimeout(Ce,300),function(){ae&&clearTimeout(ae)}}},[c]);var T=(0,l.useCallback)(function(){var $=e.current.contacts[u.current.index];$!==u.current.contact&&(u.current.contact=$,s())},[]);return(0,l.useEffect)(function(){return r.current.addListener("updates",T),function(){r.current.removeListener("updates",T)}},[T]),u.current.contact};return[e.current.pagination,te,Re,{loadContact:Ae,refetch:de,refetchWithRemove:Pe}]}},55118:function(je,G,t){t.r(G),t.d(G,{default:function(){return me}});var re=t(15009),v=t.n(re),se=t(99289),j=t.n(se),b=t(5574),L=t.n(b),C=t(62435),w=t(12845),W=t(1861),H=t(73588),x=t(10811),n=t(86074);function K(){return(0,n.jsx)(x.Card,{flush:!0,children:(0,n.jsxs)(x.Card.Body,{className:"p-0",children:[(0,n.jsxs)("div",{className:"card-px text-center py-20 my-10",children:[(0,n.jsx)("h2",{className:"fs-2x fw-bolder mb-10",children:"\u6B22\u8FCE\u4F7F\u7528\u8054\u7CFB\u4EBA\u5E94\u7528\u7A0B\u5E8F"}),(0,n.jsxs)("p",{className:"text-gray-400 fs-4 fw-bold mb-10",children:["\u662F\u65F6\u5019\u6269\u5927\u6211\u4EEC\u7684\u8054\u7CFB\u4E86\u3002",(0,n.jsx)("br",{}),"\u901A\u8FC7\u6DFB\u52A0\u60A8\u7684\u4E0B\u4E00\u4E2A\u8054\u7CFB\u4EBA\uFF0C\u6765\u542F\u52A8\u60A8\u7684\u8054\u7CFB\u4EBA\u3002"]}),(0,n.jsx)("a",{className:"btn btn-primary",children:"\u6DFB\u52A0\u65B0\u8054\u7CFB\u4EBA"})]}),(0,n.jsx)("div",{className:"text-center px-4",children:(0,n.jsx)("img",{className:"mw-100 mh-300px",alt:"",src:"/assets/media/illustrations/sigma-1/5.png"})})]})})}var Z=K,V=t(24561),m=t(46027),J=t(93967),X=t.n(J);function ce(i){var S=i.index,E=i.useContact,h=i.style,k=i.active,P=i.onClick,g=E(S),D=(0,C.useCallback)(function(){P(S)},[P,S]);return(0,n.jsx)("div",{onClick:D,style:h,className:X()("contact-item d-flex flex-stack py-4 mb-1",{active:k}),children:g?(0,n.jsxs)("div",{className:"d-flex align-items-center",children:[(0,n.jsx)(x.Symbol.Avatar,{alt:g.name,src:"assets/media/avatars/300-6.jpg",size:40,labelClassName:"fs-2",shape:"circle"}),(0,n.jsxs)("div",{className:"ms-4",children:[(0,n.jsx)("a",{className:"fs-6 fw-bolder text-gray-900 text-hover-primary mb-2",children:g.name}),(0,n.jsx)("div",{className:"fw-bold fs-7 text-muted",children:"smith@kpmg.com"})]})]}):(0,n.jsxs)(V.ZP,{speed:2,width:240,height:40,viewBox:"0 0 240 40",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[(0,n.jsx)("rect",{x:"52",y:"8",rx:"3",ry:"3",width:"52",height:"8"}),(0,n.jsx)("rect",{x:"52",y:"26",rx:"3",ry:"3",width:"88",height:"8"}),(0,n.jsx)("circle",{cx:"20",cy:"20",r:"20"})]})})}function ue(i){var S=i.pagination,E=i.useContact,h=i.loading,k=i.onItemClick,P=i.activeIndex,g=i.onScrollToIndex,D=(0,C.useCallback)(function(A){var Y=A.key,F=A.style,Q=A.index,d=A.isActive;return(0,n.jsx)(ce,{style:F,index:Q,onClick:k,useContact:E,active:!!d},Y)},[k,E]),I=(0,C.useCallback)(function(){return(0,n.jsxs)("div",{className:"infinite-scroll-no-rows",children:[(0,n.jsx)("img",{src:"/assets/media/illustrations/dozzy-1/4.png"}),(0,n.jsx)("span",{className:"empty-title",children:h?"\u52A0\u8F7D\u4E2D...":"\u6B64\u5206\u7EC4\u4E3A\u7A7A"}),(0,n.jsx)("span",{className:"empty-subtitle",children:h?"\u7A0D\u7B49\u4E00\u4F1A,\u6B63\u5728\u83B7\u53D6\u6570\u636E":"\u8BF7\u67E5\u770B\u5176\u4ED6\u5206\u7EC4"})]})},[h]);return(0,n.jsxs)(x.Card,{className:"kt_contacts_list",flush:!0,children:[(0,n.jsx)(x.Card.Header,{className:"pt-7",children:(0,n.jsxs)("form",{className:"d-flex align-items-center position-relative w-100",autoComplete:"off",children:[(0,n.jsx)(m.ZP,{name:"Duotune/gen021",className:"svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y"}),(0,n.jsx)(x.Input,{solid:!0,className:"px-15",size:"sm",placeholder:"\u641C\u7D22\u8054\u7CFB\u4EBA\u2026"})]})}),(0,n.jsx)(x.Card.Body,{className:"pt-5",children:(0,n.jsx)(x.InfiniteScroll,{rowCount:S.totalCount,rowHeight:66,scrollToIndex:P,onScrollToIndex:g,rowRenderer:D,noRowsRenderer:I,className:"contact-list-body"})})]})}var M=ue,oe=t(75466);function ve(i){var S=i.children,E=i.history,h=(0,w.useModel)("contacts",function(y){return y.state.book}),k=(0,w.useParams)(),P=k.id;console.log("MainContacts book",h,P);var g=(0,C.useRef)({activeIndex:-1}),D=(0,C.useReducer)(function(y){return y+1},0),I=L()(D,2),A=I[1],Y=(0,oe.gW)(h),F=L()(Y,4),Q=F[0],d=F[1],q=F[2],R=F[3].loadContact,_=(0,C.useMemo)(function(){return h},[h]),z=(0,C.useCallback)(function(){var y=j()(v()().mark(function O(U){var a;return v()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(g.current.activeIndex!==U.index){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,R(U.index);case 4:if(a=e.sent,g.current.activeIndex=U.index,_!==a.id){e.next=9;break}return A(),e.abrupt("return");case 9:navigate("/contacts/".concat(a.id));case 10:case"end":return e.stop()}},O)}));return function(O){return y.apply(this,arguments)}}(),[E,R,_]),l=(0,C.useCallback)(function(y){z({index:y})},[z]),ie=q(g.current.activeIndex);console.log("MainContacts book",h,P),console.log(Q,d);var ee=g.current.activeIndex;return(0,n.jsx)(H.vs,{className:"app-contacts-main",footer:!1,header:!1,children:(0,n.jsxs)("div",{className:"content-body row g-7",children:[(0,n.jsx)("div",{className:"col-lg-6 col-xl-3",children:(0,n.jsx)(M,{loading:d,useContact:q,pagination:Q,activeIndex:ee,onItemClick:l,onScrollToIndex:z})}),(0,n.jsx)(W.E,{className:"col-xl-9 content-view-details custom-scrollbar",options:{scrollbars:{autoHide:"scroll"}},children:P?C.cloneElement(S,{pagination:Q,activeIndex:ee,contact:ie}):(0,n.jsx)(Z,{})})]})})}var me=ve}}]);
