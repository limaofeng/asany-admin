"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4870],{79514:function(L,S,t){t.d(S,{AQ:function(){return r.AQ},Af:function(){return r.Af},G$:function(){return r.G$},I1:function(){return r.I1},KX:function(){return r.KX},Nq:function(){return r.Nq},P6:function(){return r.P6},Pw:function(){return r.Pw},WF:function(){return r.WF},Yw:function(){return r.Yw},ZO:function(){return r.ZO},_c:function(){return r._c},aA:function(){return r.aA},au:function(){return r.au},c9:function(){return r.c9},jS:function(){return r.jS},ko:function(){return r.ko},oM:function(){return r.oM},ot:function(){return r.ot},w4:function(){return r.w4},wp:function(){return r.wp}});var r=t(70694)},96160:function(L,S,t){t.r(S),t.d(S,{default:function(){return q}});var r=t(15009),M=t.n(r),O=t(99289),F=t.n(O),Z=t(5574),N=t.n(Z),z=t(97857),g=t.n(z),l=t(62435),R=t(59197),G=t(35090),K=t(93967),W=t.n(K),b=t(10185),x=t(2721),X=t(79514),J=t(66252),Q=t(75063);function V(u,s){var c=(0,J.x)(),v=(0,l.useState)({loading:!1,error:null}),h=N()(v,2),C=h[0],f=h[1],o=(0,l.useMemo)(function(){return u!=null&&u.endpoints?u.endpoints.find(function(a){return a.type==="CONNECTION"}):null},[u==null?void 0:u.endpoints]);return(0,l.useEffect)(function(){if(!(!s.length||!o)){f(function(i){return g()(g()({},i),{},{loading:!0})});var a=o.arguments.find(function(i){return i.name==="where"}).type,d=o.arguments.find(function(i){return i.name==="orderBy"}).type,j=`query search(
      $where: `.concat(a,`
      $page: Int
      $pageSize: Int
      $orderBy: `).concat(d,`
    ) {
      pagination: `).concat(o.code,`(
        where: $where
        page: $page
        pageSize: $pageSize
        orderBy: $orderBy
      ) {
        totalPage
        currentPage
        pageSize
        totalCount
        edges {
          cursor
          node {
            `).concat(s.map(function(i,y){return y>0?"            "+i.code:i.code}).join(`\r
`),`
          }
        }
      }
    }
    `),k=new AbortController;return c.query({query:(0,Q.ZP)(j),fetchPolicy:"network-only",context:{fetchOptions:{signal:k.signal}}}).then(function(i){var y=i.data,p=i.loading,w=i.error;k.signal.aborted||(f(function(B){return g()(g()({},B),{},{data:y,loading:p,error:w})}),console.log("search data: ",y))}),function(){k.abort()}}},[s,o,c]),["",C]}var Y=V,n=t(86074),D=l.forwardRef(function(u,s){var c=u.drag,v=u.style,h=u.animated,C=u.className,f=u.onCheck,o=u.data.source,a=(0,l.useCallback)(function(){f(o.key,!o.checked)},[o.checked,o.key,f]);return(0,n.jsxs)("div",g()(g()({},h),{},{style:v,ref:s,className:W()("model-column",C),children:[(0,n.jsx)("div",{ref:c,className:"column-item-drag-handle",children:(0,n.jsx)("svg",{viewBox:"0 0.5 9 13",focusable:"false",children:(0,n.jsxs)("g",{fillRule:"evenodd",transform:"translate(0 .5)",children:[(0,n.jsx)("circle",{cx:"1.5",cy:"1.5",r:"1.5"}),(0,n.jsx)("circle",{cx:"7.5",cy:"1.5",r:"1.5"}),(0,n.jsx)("circle",{cx:"1.5",cy:"6.5",r:"1.5"}),(0,n.jsx)("circle",{cx:"7.5",cy:"6.5",r:"1.5"}),(0,n.jsx)("circle",{cx:"1.5",cy:"11.5",r:"1.5"}),(0,n.jsx)("circle",{cx:"7.5",cy:"11.5",r:"1.5"})]})})}),(0,n.jsx)("div",{className:"column-item-content",children:(0,n.jsx)(x.Checkbox,{onChange:a,checked:o.checked,label:o.title})})]}))});function H(u){var s=u.columns,c=u.onChange,v=(0,l.useRef)({columns:s});v.current.columns=s;var h=(0,l.useRef)(null),C=(0,l.useCallback)(function(o){c(o.map(function(a){return v.current.columns.find(function(d){return d.key===a.id})}))},[c]),f=(0,l.useCallback)(function(o,a){c(v.current.columns.map(function(d){return d.key===o?g()(g()({},d),{},{checked:a}):d}))},[c]);return(0,n.jsx)("div",{ref:h,children:(0,n.jsx)(R.ZP,{onChange:C,tag:"ul",className:"configure-columns",accept:["default"],items:s.map(function(o){return{source:o,type:"default",name:o.title,id:o.key}}),itemRender:l.createElement(D,{onCheck:f}),preview:{render:(0,R.HG)(l.createElement(D)),axisLocked:!0,offset:[-4,0],container:document.body}})})}function U(){var u,s=(0,G.rL)({key:"list",icon:"",title:"\u5217\u8868",props:{model:"",title:"Sales This Months",fields:[]},customizer:{fields:[{name:"model",type:"String"},{name:"fields",type:"JSON",label:"\u663E\u793A\u5B57\u6BB5",multiple:!0},{name:"subtitle",type:"String",label:"\u526F\u6807\u9898"},{name:"statistics",type:"String",label:"\u7EDF\u8BA1"}]}}),c=s.props,v=s.Provider,h=s.update,C=(0,X.jS)({fetchPolicy:"cache-and-network"}),f=N()(C,2),o=f[0],a=f[1].data;(0,l.useEffect)(function(){c.model&&o({variables:{id:c.model}})},[c.model,o]);var d=(0,l.useMemo)(function(){return a!=null&&a.model?a.model.fields.map(function(e){var m=c.fields.findIndex(function(I){return I.key===e.id});return{key:e.id,title:e.name,dataIndex:e.code,source:e,index:m!==-1?m:e.index,checked:m!==-1?c.fields[m].checked:!1}}).sort(function(e,m){return e.index-m.index}):[]},[c.fields,a==null?void 0:a.model]),j=(0,l.useMemo)(function(){return d.length?d.filter(function(e){return e.checked}).map(function(e){return e.source}):[]},[d]),k=Y(a==null?void 0:a.model,j),i=N()(k,2),y=i[1],p=y.data,w=y.loading,B=y.error;console.log("loading",w,B);var A=(0,l.useMemo)(function(){return j.length?j.map(function(e){return{key:e.code,title:e.name}}):[]},[j]),T=(0,l.useCallback)(function(e){return F()(M()().mark(function m(){return M()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:console.log("selectedRowKeys",e);case 1:case"end":return E.stop()}},m)}))},[]),_=(0,l.useMemo)(function(){return function(e){return(0,n.jsx)("div",{children:(0,n.jsx)(x.Button,{color:"success",onClick:T(e),variant:!1,children:"\u6279\u91CF\u5220\u9664"})})}},[T]),nn=(0,l.useCallback)(function(e){console.log("columns","change",e),h("fields",e)},[h]),en=(0,l.useState)("table"),$=N()(en,2),tn=$[0],rn=$[1],on=(0,l.useCallback)(function(e){rn(e)},[]),P=a==null?void 0:a.model;return console.log("columns",d,A,p),(0,n.jsxs)(v,{children:[(0,n.jsx)(b.ZJ,{}),(0,n.jsxs)("div",{className:"d-flex flex-wrap pb-7",children:[(0,n.jsxs)("div",{className:"d-flex flex-row-fluid flex-wrap align-items-center",children:[(0,n.jsxs)("h3",{className:"fw-bolder me-5",children:[P==null?void 0:P.name," (",p==null||(u=p.pagination)===null||u===void 0?void 0:u.totalCount,")"]}),(0,n.jsx)(x.Input.Search,{placeholder:"\u641C\u7D22",className:"border-body bg-body w-250px"})]}),(0,n.jsx)(b.ZX,{layout:tn,onLayout:on,children:(0,n.jsxs)("div",{className:"d-flex my-0",children:[(0,n.jsx)(b.wn,{}),(0,n.jsx)(x.Button,{children:"\u65B0\u5EFA\u6D77\u62A5"})]})}),(0,n.jsx)(x.Popover,{offset:[0,0],placement:"bottom-end",content:(0,n.jsx)(H,{columns:d,onChange:nn}),overlayClassName:"overlay-no-arrow configure-columns-popover",children:(0,n.jsx)(x.Button,{variant:!1,children:"\u914D\u7F6E\u5B57\u6BB5"})})]}),(0,n.jsx)(x.Card,{flush:!0,bodyClassName:"pt-3",children:!!A.length&&(0,n.jsx)(x.Table,{columns:A,rowKey:"id",rowSelection:{type:"checkbox",renderTitle:function(m){return(0,n.jsxs)(n.Fragment,{children:["\u5DF2\u9009\u4E2D",(0,n.jsx)("span",{className:"mx-2",children:m}),"\u4E2A\u6D3B\u52A8"]})},toolbar:_},dataSource:[],noRowsRenderer:function(){return(0,n.jsx)("div",{children:"\u6CA1\u6709\u6570\u636E"})}})})]})}var q=U}}]);