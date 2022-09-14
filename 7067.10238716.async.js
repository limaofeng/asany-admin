var C=Object.prototype.hasOwnProperty;var A=Object.getOwnPropertySymbols,L=Object.prototype.propertyIsEnumerable;var h=Object.assign;var B=(l,u)=>{var e={};for(var n in l)C.call(l,n)&&u.indexOf(n)<0&&(e[n]=l[n]);if(l!=null&&A)for(var n of A(l))u.indexOf(n)<0&&L.call(l,n)&&(e[n]=l[n]);return e};(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[7067,3975],{33201:function(){},34106:function(l,u,e){"use strict";e.d(u,{GP:function(){return n.Z},Hk:function(){return d.ZP}});var n=e(48655),c=e(39981),d=e(21428),v=e(53851)},67837:function(l,u,e){"use strict";e.d(u,{Sy:function(){return y},n5:function(){return p}});var n=e(11849),c=e(20310),d=e(49704),v=e(64718),j,a,t={},m=(0,d.Ps)(j||(j=(0,c.Z)([`
    query projects {
  projects {
    total: totalCount
    current: currentPage
    pageSize
    edges {
      node {
        id
        logo
        name
        description
      }
    }
  }
}
    `])));function y(o){var r=(0,n.Z)((0,n.Z)({},t),o);return v.a(m,r)}function E(o){var r=_objectSpread(_objectSpread({},t),o);return Apollo.useLazyQuery(m,r)}var _=(0,d.Ps)(a||(a=(0,c.Z)([`
    query project($id: ID!) {
  project(id: $id) {
    id
    logo
    name
    description
  }
}
    `])));function p(o){var r=(0,n.Z)((0,n.Z)({},t),o);return v.a(_,r)}function P(o){var r=_objectSpread(_objectSpread({},t),o);return Apollo.useLazyQuery(_,r)}},95097:function(l,u,e){"use strict";e.r(u),e.d(u,{default:function(){return y}});var n=e(2824),c=e(67294),d=e(51615),v=e(67837),j=e(34106),a=e(51186),t=e(85893);function m(E){var _=E.children,p=E.location,P=E.match.params.id,o=(0,v.n5)({variables:{id:P}}),r=o.data,M=r===void 0?{}:r,D=o.loading,s=M.project,f=(0,c.useMemo)(function(){var i=(0,d.LX)(p.pathname,{path:"/project/:id/:key",exact:!1,strict:!0});return console.log("channelMatch",i),i?"category_".concat(i.params.cid):"my-drive"},[p.pathname]),g=(0,c.useState)(f),x=(0,n.Z)(g,2),O=x[0],b=x[1];(0,c.useEffect)(function(){!f||b(f)},[f]);var I=(0,c.useCallback)(function(i){console.log("selectedKey",i.key),b(i.key)},[]);return console.log("children",_),(0,t.jsx)(j.Hk,{loading:D,children:s&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j.Hk.Sidebar,{children:(0,t.jsxs)(a.bH,{zIndex:10,className:"my-5 p-5",overlayClassName:"bg-white bg-opacity-25",loading:!1,children:[(0,t.jsx)("div",{className:"mx-5",children:(0,t.jsxs)("div",{className:"d-flex align-items-center",children:[(0,t.jsx)(a.mN.Avatar,{alt:"\u5565\u5730\u65B9",className:"me-5"}),(0,t.jsxs)("div",{className:"flex-grow-1",children:[(0,t.jsx)("a",{className:"text-dark fw-bolder text-hover-primary fs-6",children:s.name}),(0,t.jsx)("span",{className:"text-muted d-block fw-bold",children:s.description})]})]})}),(0,t.jsxs)(a.v2,{fit:!0,accordion:!1,selectable:"AllMenu",className:"pt-6 menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0",selectedKeys:O?[O]:[],onSelect:I,children:[(0,t.jsx)(a.v2.Item,{bullet:!0,icon:"Bootstrap/speedometer2",title:"\u4EEA\u8868\u76D8",url:"/projects/".concat(s.id)}),(0,t.jsx)(a.v2.Section,{contentClassName:"pt-6 pb-0",children:"\u57FA\u7840\u529F\u80FD"}),(0,t.jsx)(a.v2.Item,{bullet:!0,title:"\u76EE\u6807",url:"/projects/".concat(s.id,"/targets")}),(0,t.jsx)(a.v2.Item,{bullet:!0,title:"\u4EFB\u52A1",url:"/projects/".concat(s.id,"/tasks")}),(0,t.jsx)(a.v2.Item,{bullet:!0,title:"\u9884\u7B97",url:"/projects/".concat(s.id,"/budget")}),(0,t.jsx)(a.v2.Item,{bullet:!0,title:"\u6210\u5458",url:"/projects/".concat(s.id,"/users")}),(0,t.jsx)(a.v2.Item,{bullet:!0,title:"\u6587\u6863",url:"/projects/".concat(s.id,"/files")}),(0,t.jsx)(a.v2.Item,{bullet:!0,title:"\u6D3B\u52A8",url:"/projects/".concat(s.id,"/activity")}),(0,t.jsx)(a.v2.Section,{contentClassName:"pt-6 pb-0",children:"\u8BBE\u7F6E"}),(0,t.jsx)(a.v2.Item,{bullet:!0,title:"\u57FA\u7840\u4FE1\u606F",url:"/projects/".concat(s.id,"/settings")})]})]})}),c.Children.map(_,function(i){return i.props.location.state={project:s,baseUrl:"/projects/"+P},i})]})})}var y=m},77104:function(l,u,e){"use strict";var n=e(94184),c=e.n(n),d=e(67294),v=e(70861),j=e(76792),a=e(85893);const t={variant:"primary",active:!1,disabled:!1},m=d.forwardRef((D,M)=>{var{as:y,bsPrefix:E,variant:_,size:p,active:P,className:o}=D,r=B(D,["as","bsPrefix","variant","size","active","className"]);const s=(0,j.vE)(E,"btn"),[f,{tagName:g}]=(0,v.FT)(h({tagName:y},r)),x=g;return(0,a.jsx)(x,h(h(h({},f),r),{ref:M,className:c()(o,s,P&&"active",_&&`${s}-${_}`,p&&`${s}-${p}`,r.href&&r.disabled&&"disabled")}))});m.displayName="Button",m.defaultProps=t,u.Z=m}}]);
