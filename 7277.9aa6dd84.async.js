"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7277],{58795:function(w,F,n){n.d(F,{RE:function(){return J},Tk:function(){return Y},ry:function(){return h},x:function(){return O}});var P=n(97857),l=n.n(P),_=n(68400),Q=n.n(_),v=n(75063),N=n(37887),L=n(50319),S,k,B,t,H,E={},a=(0,v.Ps)(S||(S=Q()([`
    fragment OrganizationProfile on Organization {
  id
  code
  name
  logo
  description
  email
  url
  location {
    province
    city
    district
    street
  }
}
    `]))),h=(0,v.Ps)(k||(k=Q()([`
    query organization($id: ID!) {
  organization(id: $id) {
    ...OrganizationProfile
  }
}
    `,""])),a);function Y(i){var s=l()(l()({},E),i);return N.a(h,s)}function Z(i){var s=_objectSpread(_objectSpread({},E),i);return Apollo.useLazyQuery(h,s)}function e(i){var s=_objectSpread(_objectSpread({},E),i);return Apollo.useSuspenseQuery(h,s)}var R=(0,v.Ps)(B||(B=Q()([`
    mutation updateOrganizationProfile($id: ID!, $input: UpdateOrganizationProfileUpdateInput!) {
  updateOrganizationProfile(id: $id, input: $input) {
    ...OrganizationProfile
  }
}
    `,""])),a);function J(i){var s=l()(l()({},E),i);return L.D(R,s)}var z=(0,v.Ps)(t||(t=Q()([`
    mutation renameOrganizationCode($id: ID!, $code: String!) {
  renameOrganizationCode(id: $id, code: $code) {
    ...OrganizationProfile
  }
}
    `,""])),a);function O(i){var s=l()(l()({},E),i);return L.D(z,s)}var j=(0,v.Ps)(H||(H=Q()([`
    query permissionsConnection($where: PermissionWhereInput, $page: Int, $pageSize: Int, $orderBy: OrderBy = "createdAt_desc") {
  total: permissionsConnection(pageSize: 1) {
    totalCount
  }
  connection: permissionsConnection(
    where: $where
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    totalPage
    pageSize
    current: currentPage
    total: totalCount
    edges {
      node {
        id
      }
    }
  }
}
    `])));function $(i){var s=_objectSpread(_objectSpread({},E),i);return Apollo.useQuery(j,s)}function W(i){var s=_objectSpread(_objectSpread({},E),i);return Apollo.useLazyQuery(j,s)}function U(i){var s=_objectSpread(_objectSpread({},E),i);return Apollo.useSuspenseQuery(j,s)}},47277:function(w,F,n){n.r(F),n.d(F,{default:function(){return i}});var P=n(15009),l=n.n(P),_=n(97857),Q=n.n(_),v=n(49677),N=n.n(v),L=n(99289),S=n.n(L),k=n(5574),B=n.n(k),t=n(62435),H=n(96974),E=n(73588),a=n(2721),h="data:image/png;base64,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",Y=n(93967),Z=n.n(Y),e=n(86074);function R(s){var u=s.data,C=s.visible,o=s.onCancel,y=(0,t.useState)(!0),g=B()(y,2),c=g[0],d=g[1],D=(0,t.useCallback)(function(p,I){d(I.code!==(u==null?void 0:u.code))},[u]),r=(0,t.useCallback)(function(){},[]);return(0,e.jsxs)(a.Modal,{dialogClassName:Z()("delete-organization-modal w-450px"),visible:C,onCancel:o,title:"\u786E\u5B9A\u5220\u9664\u7EC4\u7EC7\u5417\uFF1F",footer:!1,children:[(0,e.jsx)(a.Alert,{type:"danger",message:"\u8BF7\u4ED4\u7EC6\u9605\u8BFB\u4EE5\u4E0B\u4E8B\u9879"}),(0,e.jsxs)("div",{className:"inner-body",children:[(0,e.jsxs)("p",{children:["\u60A8\u5373\u5C06\u6C38\u4E45\u5220\u9664\u7EC4\u7EC7: ",(0,e.jsx)("b",{children:u==null?void 0:u.code}),"\uFF0C\u4EE5\u53CA\u4E0E\u7EC4\u7EC7\u5173\u8054\u7684\u6240\u6709\u5185\u5BB9\u3002\u4E00\u65E6\u786E\u8BA4 \u5220\u9664\uFF0C\u6B64\u64CD\u4F5C\u4FBF\u65E0\u6CD5\u64A4\u9500\u548C\u6062\u590D\u3002"]}),(0,e.jsx)(a.Separator,{className:"my-5"}),(0,e.jsxs)(a.Form,{onFinish:r,onValuesChange:D,children:[(0,e.jsx)(a.Form.Item,{className:"mb-5",name:"code",label:"\u8F93\u5165\u7EC4\u7EC7\u4EE3\u7801\u4EE5\u786E\u8BA4\u5220\u9664",children:(0,e.jsx)(a.Input,{solid:!0})}),(0,e.jsx)(a.Button,{htmlType:"submit",className:"confirm-delete-account",disabled:c,variant:"light-danger",children:"\u5220\u9664\u7EC4\u7EC7"})]})]})]})}var J=R,z=n(12708),O=n(58795);function j(s){var u=s.data,C=s.visible,o=s.onCancel,y=(0,t.useState)(1),g=B()(y,2),c=g[0],d=g[1],D=(0,O.x)(),r=B()(D,2),p=r[0],I=r[1].loading,A=(0,t.useCallback)(function(){var m=S()(l()().mark(function T(f){return l()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,p({variables:{id:u.id,code:f.code}});case 2:return a.Toast.success("\u7EC4\u7EC7\u4EE3\u7801\u4FEE\u6539\u6210\u529F",3e3,{placement:"top-center",progressBar:!0}),b.next=5,(0,z._v)(300);case 5:d(1),o();case 7:case"end":return b.stop()}},T)}));return function(T){return m.apply(this,arguments)}}(),[u,o,p]),x=(0,t.useCallback)(S()(l()().mark(function m(){return l()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,z._v)(300);case 2:d(2);case 3:case"end":return f.stop()}},m)})),[]),M=(0,t.useCallback)(function(){d(1),o()},[o]);return(0,e.jsx)(a.Modal,{dialogClassName:Z()("rename-organization-modal w-450px",{"waiting-to-continue":c===1}),visible:C,onCancel:M,title:c===1?"\u786E\u5B9A\u4FEE\u6539\u7EC4\u7EC7\u4EE3\u7801\u5417\uFF1F":"\u8F93\u5165\u65B0\u7684\u7EC4\u7EC7\u4EE3\u7801",footer:!1,children:c===1?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(a.Alert,{type:"danger",message:"\u8BF7\u4ED4\u7EC6\u9605\u8BFB\u4EE5\u4E0B\u6CE8\u610F\u4E8B\u9879, \u4E86\u89E3\u53EF\u80FD\u9020\u6210\u7684\u526F\u4F5C\u7528"}),(0,e.jsxs)("div",{className:"inner-body",children:[(0,e.jsx)("ul",{className:"mb-6 ms-6",children:(0,e.jsx)("li",{children:"\u4FEE\u6539\u7EC4\u7EC7\u4EE3\u7801\u53EF\u80FD\u9700\u8981\u51E0\u5206\u949F\u624D\u80FD\u5B8C\u6210\u3002"})}),(0,e.jsx)(a.Button,{onClick:x,className:"confirm-to-continue",variant:"light-danger",children:"\u6211\u660E\u767D\u4E86\uFF0C\u7EE7\u7EED\u4FEE\u6539"})]})]}):(0,e.jsxs)(a.Form,{onFinish:A,initialValues:u,children:[(0,e.jsxs)("div",{className:"mb-5",children:[(0,e.jsx)(a.Form.Item,{name:"code",rules:[{required:!0,message:"\u7EC4\u7EC7\u4EE3\u7801\u4E0D\u80FD\u4E3A\u7A7A"},{min:6,message:"\u81F3\u5C11\u5F97\u5305\u542B6\u4E2A\u5B57\u7B26"},{pattern:/^[a-zA-Z]\w{5,19}$/,message:"\u7EC4\u7EC7\u4EE3\u7801\u53EA\u80FD\u4E3A\u5B57\u6BCD\u6216\u8005\u6570\u5B57\uFF0C\u800C\u4E14\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5F00\u5934"}],help:"\u7EC4\u7EC7\u4EE3\u7801\u53EA\u80FD\u4E3A\u5B57\u6BCD\u6216\u8005\u6570\u5B57\uFF0C\u800C\u4E14\u5FC5\u987B\u4EE5\u5B57\u6BCD\u5F00\u5934",children:(0,e.jsx)(a.Input,{})}),(0,e.jsx)("p",{className:"text-small mt-2",children:"\u8F93\u5165\u4E00\u4E2A\u65B0\u7684\u7EC4\u7EC7\u4EE3\u7801"})]}),(0,e.jsx)(a.Button,{htmlType:"submit",loading:I,className:"change-name-save",children:"\u4FEE\u6539\u7EC4\u7EC7\u4EE3\u7801"})]})})}var $=j;function W(s){var u=s.data,C=(0,t.useState)(!1),o=B()(C,2),y=o[0],g=o[1],c=(0,t.useState)(!1),d=B()(c,2),D=d[0],r=d[1],p=(0,t.useCallback)(function(){g(!0)},[]),I=(0,t.useCallback)(function(){g(!1)},[]),A=(0,t.useCallback)(function(){r(!0)},[]),x=(0,t.useCallback)(function(){r(!1)},[]);return(0,e.jsxs)(a.Card,{className:"mb-5 mb-xl-10",children:[(0,e.jsx)(a.Card.Header,{children:(0,e.jsx)(a.Card.Title,{className:"text-danger",children:"\u5371\u9669\u533A\u57DF"})}),(0,e.jsx)(a.Card.Body,{children:(0,e.jsxs)("div",{className:"w-800px danger-zone rounded border border-danger",children:[(0,e.jsxs)("div",{className:"p-5 border-bottom border-secondary d-flex align-items-center",children:[(0,e.jsxs)("div",{className:"flex-row-fluid",children:[(0,e.jsx)("div",{className:"fw-bolder",children:"\u4FEE\u6539\u7EC4\u7EC7\u4EE3\u7801"}),(0,e.jsx)("span",{className:"text-small",children:"\u4FEE\u6539\u7EC4\u7EC7\u4EE3\u7801\u53EF\u80FD\u4F1A\u4EA7\u751F\u610F\u60F3\u4E0D\u5230\u7684\u526F\u4F5C\u7528"})]}),(0,e.jsx)(a.Button,{onClick:p,type:"solid",variant:"danger",children:"\u4FEE\u6539\u7EC4\u7EC7\u4EE3\u7801"}),(0,e.jsx)($,{data:u,visible:y,onCancel:I})]}),(0,e.jsxs)("div",{className:"p-5 border-bottom border-secondary d-flex align-items-center",children:[(0,e.jsxs)("div",{className:"flex-row-fluid",children:[(0,e.jsx)("div",{className:"fw-bolder",children:"\u5220\u9664\u7EC4\u7EC7"}),(0,e.jsx)("span",{className:"text-small",children:"\u5E10\u6237\u5220\u9664\u540E\uFF0C\u5C06\u65E0\u6CD5\u6062\u590D\u3002\u8BF7\u8C28\u614E\u64CD\u4F5C"})]}),(0,e.jsx)(a.Button,{onClick:A,type:"solid",variant:"danger",children:"\u5220\u9664\u7EC4\u7EC7"}),(0,e.jsx)(J,{data:u,visible:D,onCancel:x})]})]})})]})}function U(){var s=(0,H.UO)(),u=a.Form.useForm(),C=(0,O.Tk)({variables:{id:s.id}}),o=C.data,y=C.loading,g=(0,O.RE)({refetchQueries:[{query:O.ry,variables:{id:s.id}}]}),c=B()(g,2),d=c[0],D=c[1].loading,r=o==null?void 0:o.organization;(0,t.useEffect)(function(){r&&u.setFieldsValue(r)},[r,u]);var p=(0,t.useCallback)(S()(l()().mark(function I(){var A,x;return l()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,u.getFieldsValue();case 2:return A=m.sent,x=Object.assign({},(N()(A),A)),m.next=6,d({variables:{id:r==null?void 0:r.id,input:Q()({},x)}});case 6:a.Toast.success("\u8D44\u6599\u66F4\u65B0\u6210\u529F",3e3,{placement:"bottom-left",progressBar:!0});case 7:case"end":return m.stop()}},I)})),[u,r,d]);return(0,e.jsxs)(E.vs,{className:"page-organization-settings-profile",header:{title:"\u901A\u7528\u8BBE\u7F6E"},footer:!1,children:[(0,e.jsxs)(a.Card,{className:"mb-5 mb-xl-10",children:[(0,e.jsx)(a.Card.Header,{children:(0,e.jsx)(a.Card.Title,{children:"\u901A\u7528\u8BBE\u7F6E"})}),(0,e.jsx)(a.Card.Body,{children:(0,e.jsxs)(a.BlockUI,{overlayClassName:"bg-white bg-opacity-25",loading:y,children:[(0,e.jsxs)(a.Form,{form:u,className:"mw-800px row d-flex flex-shrink-0 flex-column-reverse flex-md-row",children:[(0,e.jsx)("div",{className:"mw-500px col-12 col-md-8",children:(0,e.jsxs)("div",{className:"mw-400px",children:[(0,e.jsx)(a.Form.Item,{className:"mb-5",name:"name",label:"\u663E\u793A\u540D\u79F0",children:(0,e.jsx)(a.Input,{solid:!0})}),(0,e.jsx)(a.Form.Item,{className:"my-5",name:"email",label:"\u90AE\u7BB1",help:"\u7EC4\u7EC7\u8054\u7CFB\u90AE\u7BB1",children:(0,e.jsx)(a.Input,{solid:!0})}),(0,e.jsx)(a.Form.Item,{className:"my-5",name:"description",label:"\u63CF\u8FF0",help:"\u8BF7\u7528\u5C11\u4E8E250\u5B57\u7B26\u63CF\u8FF0\u7EC4\u7EC7\u4FE1\u606F",children:(0,e.jsx)(a.Input.TextArea,{solid:!0,autoSize:{minRows:4,maxRows:8},showCount:!0,maxLength:250})}),(0,e.jsx)(a.Form.Item,{className:"my-5",name:"url",label:"URL",help:"\u7EC4\u7EC7\u7F51\u5740",children:(0,e.jsx)(a.Input,{solid:!0})}),(0,e.jsx)(a.Form.Item,{className:"my-5",name:"location",label:"\u6240\u5728\u5730\u533A",children:(0,e.jsx)(a.RegionPicker,{ends:function(A){var x=A.path.split("/").filter(function(M){return!!M}).length;return A.type==="city"||x===2},resultType:"object",solid:!0,placeholder:"\u9009\u62E9\u7EC4\u7EC7\u6240\u5728\u7684\u5730\u533A"})})]})}),(0,e.jsx)("div",{className:"col-12 col-md-4",children:(0,e.jsx)("div",{className:"row",children:(0,e.jsx)(a.Form.Item,{className:"mb-5",name:"logo",label:"\u7EC4\u7EC7\u6807\u5FD7",help:"\u5141\u8BB8\u7684\u6587\u4EF6\u7C7B\u578B:png, jpg, jpeg",children:(0,e.jsx)(a.Upload.Image,{width:125,height:125,space:"7VE4SSrk",crop:{height:300,zoomable:!1,aspectRatio:1},background:h})})})})]}),(0,e.jsx)(a.Button,{loading:D,onClick:p,children:"\u66F4\u65B0\u8D44\u6599"})]})})]}),(0,e.jsx)(W,{data:r})]})}var i=U}}]);