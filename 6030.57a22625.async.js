var Ne=Object.prototype.hasOwnProperty;var he=Object.getOwnPropertySymbols,be=Object.prototype.propertyIsEnumerable;var X=Object.assign;var je=(Z,z)=>{var n={};for(var t in Z)Ne.call(Z,t)&&z.indexOf(t)<0&&(n[t]=Z[t]);if(Z!=null&&he)for(var t of he(Z))z.indexOf(t)<0&&be.call(Z,t)&&(n[t]=Z[t]);return n};(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[6030,3975],{33201:function(){},30098:function(Z,z,n){"use strict";n.d(z,{G:function(){return F.Z}});var t=n(80064),F=n(48655),i=n(39981)},86328:function(Z,z,n){"use strict";n.r(z),n.d(z,{default:function(){return le}});var t=n(91220),F=n(86582),i=n(67294),p=n(95551),C=n(51615),I=n(1861),c=n(28865),w=n(14928),Q=n(3182),K=n(2824),k=n(94043),A=n.n(k),H=n(94184),M=n.n(H),r=n(69851),R=n(54108),e=n(85893);function $(v){return["zip"].includes(v.extension)?(0,e.jsx)(c.ZP,{name:"Bootstrap/file-zip-fill",className:"svg-icon-2x"}):v.mimeType.startsWith("image/")?(0,e.jsx)(c.ZP,{name:"Bootstrap/file-image-fill",className:"svg-icon-2x"}):v.mimeType.startsWith("video/")?(0,e.jsx)(c.ZP,{name:"Bootstrap/file-play-fill",className:"svg-icon-2x"}):(0,e.jsx)(c.ZP,{name:"Bootstrap/file-post-fill",className:"svg-icon-2x"})}function x(v){var a=v.file,u=(0,C.k6)(),h=(0,p.tT)("cloud-drive.index",function(f){return f.api.base}),m=(0,p.tT)("cloud-drive.index",function(f){return f.api.upload}),b=(0,i.useCallback)(function(){m.cancel(a.id)},[m,a.id]),o=(0,i.useCallback)(function(){h.closeTransfers(),u.push("/drive/folders/".concat(a.result.parentFolder.id))},[h,a.result,u]),N=(0,i.useCallback)(function(){m.start(a.id)},[m,a.id]),T=(0,i.useCallback)(function(){m.restore(a.id)},[m,a.id]),j=(0,i.useCallback)(function(){m.pause(a.id)},[m,a.id]),S=(0,i.useCallback)(function(){m.delete(a.id)},[m,a.id]);return(0,e.jsxs)("li",{className:M()("file-item",{"file-item-uploaded":["completed","error"].includes(a.state)}),children:[(0,e.jsx)("div",{className:"file-icon",children:$(a)}),(0,e.jsxs)("div",{className:"file-details",children:[(0,e.jsx)("div",{className:"file-title",children:a.name}),(0,e.jsx)("div",{className:M()("file-transfer-progress progress",{"opacity-0":a.state=="completed"}),children:(0,e.jsx)(r.Ex,{color:"success",percent:a.progress})}),(0,e.jsxs)("div",{className:"file-status",children:[(0,e.jsx)("div",{className:"file-size",children:(0,R.jb)(a.size)}),a.state=="error"&&(0,e.jsx)("div",{className:"upload-error text-danger",children:"\u4E0A\u4F20\u51FA\u73B0\u9519\u8BEF!"}),!["completed","error"].includes(a.state)&&(0,e.jsx)("div",{className:"file-transfer-rate",children:a.progress==100?"\u7B49\u5F85\u5B8C\u6210...":!!a.uploadSpeed&&a.uploadSpeed+"/s"})]})]}),(0,e.jsxs)("div",{className:"file-actions",children:[a.state=="waiting"&&(0,e.jsx)(r.zx,{icon:(0,e.jsx)(c.ZP,{name:"Bootstrap/clock",className:"svg-icon-4"})}),a.state=="uploading"&&(0,e.jsx)(r.zx,{onClick:j,icon:(0,e.jsx)(c.ZP,{name:"Bootstrap/pause",className:"svg-icon-4"})}),a.state=="paused"&&(0,e.jsx)(r.zx,{onClick:N,icon:(0,e.jsx)(c.ZP,{name:"Bootstrap/arrow-up-short",className:"svg-icon-4"})}),["canceled","error"].includes(a.state)&&(0,e.jsx)(r.zx,{onClick:T,icon:(0,e.jsx)(c.ZP,{name:"Bootstrap/arrow-counterclockwise",className:"svg-icon-4"})}),a.state=="completed"&&(0,e.jsx)(r.zx,{onClick:o,icon:(0,e.jsx)(c.ZP,{name:"Bootstrap/folder2",className:"svg-icon-6"})}),!["completed","canceled","error"].includes(a.state)&&(0,e.jsx)(r.zx,{onClick:b,icon:(0,e.jsx)(c.ZP,{name:"Bootstrap/x",className:"svg-icon-4"})}),["completed","canceled","error"].includes(a.state)&&(0,e.jsx)(r.zx,{onClick:S,icon:(0,e.jsx)(c.ZP,{name:"Bootstrap/eraser",className:"svg-icon-6"})})]})]},a.id)}function W(){var v=(0,p.tT)("cloud-drive.index",function(a){var u=a.state;return u.uploadFiles});return(0,e.jsx)(I.E,{className:M()("custom-scrollbar"),options:{scrollbars:{autoHide:"scroll"}},children:v.length?(0,e.jsx)("ul",{className:"transfer-file-list",children:v.map(function(a){return(0,e.jsx)(x,{file:a},a.id)})}):(0,e.jsxs)("div",{className:"transfer-list-empty",children:[(0,e.jsx)("img",{src:"/assets/media/illustrations/dozzy-1/4.png"}),(0,e.jsx)("span",{className:"empty-title",children:"\u6CA1\u6709\u4E0A\u4F20\u4EFB\u52A1"})]})})}function Y(v){var a=v.file,u=(0,p.tT)("cloud-drive.index",function(j){return j.api.download}),h=(0,i.useCallback)(function(){u.cancel(a.id)},[u,a.id]),m=(0,i.useCallback)(function(){u.save(a.id),console.log("\u672C\u5730\u4E0B\u8F7D")},[u,a.id]),b=(0,i.useCallback)(function(){u.start(a.id)},[u,a.id]),o=(0,i.useCallback)(function(){u.restore(a.id)},[u,a.id]),N=(0,i.useCallback)(function(){u.pause(a.id)},[u,a.id]),T=(0,i.useCallback)(function(){u.delete(a.id)},[u,a.id]);return(0,e.jsxs)("li",{className:M()("file-item",{"file-item-download":["completed","error"].includes(a.state)}),children:[(0,e.jsx)("div",{className:"file-icon",children:$(a)}),(0,e.jsxs)("div",{className:"file-details",children:[(0,e.jsx)("div",{className:"file-title",children:a.name}),(0,e.jsx)("div",{className:M()("file-transfer-progress progress",{"opacity-0":a.state=="completed"}),children:(0,e.jsx)(r.Ex,{color:"primary",percent:a.progress})}),(0,e.jsxs)("div",{className:"file-status",children:[(0,e.jsx)("div",{className:"file-size",children:!!a.size&&(0,R.jb)(a.size)}),a.state=="error"&&(0,e.jsx)("div",{className:"upload-error text-danger",children:"\u4E0B\u8F7D\u51FA\u73B0\u9519\u8BEF!"}),!["completed","error"].includes(a.state)&&(0,e.jsx)("div",{className:"file-transfer-rate",children:a.progress==0||!a.size?"\u7B49\u5F85\u8D44\u6E90...":!!a.downloadSpeed&&a.downloadSpeed+"/s"})]})]}),(0,e.jsxs)("div",{className:"file-actions",children:[a.state=="waiting"&&(0,e.jsx)(r.zx,{icon:(0,e.jsx)(c.ZP,{name:"Bootstrap/clock",className:"svg-icon-4"})}),a.state=="downloading"&&(0,e.jsx)(r.zx,{onClick:N,icon:(0,e.jsx)(c.ZP,{name:"Bootstrap/pause",className:"svg-icon-4"})}),a.state=="paused"&&(0,e.jsx)(r.zx,{onClick:b,icon:(0,e.jsx)(c.ZP,{name:"Bootstrap/arrow-down-short",className:"svg-icon-4"})}),["canceled","error"].includes(a.state)&&(0,e.jsx)(r.zx,{onClick:o,icon:(0,e.jsx)(c.ZP,{name:"Bootstrap/arrow-counterclockwise",className:"svg-icon-4"})}),a.state=="completed"&&(0,e.jsx)(r.zx,{onClick:m,icon:(0,e.jsx)(c.ZP,{name:"Bootstrap/download",className:"svg-icon-6"})}),!["completed","canceled","error"].includes(a.state)&&(0,e.jsx)(r.zx,{onClick:h,icon:(0,e.jsx)(c.ZP,{name:"Bootstrap/x",className:"svg-icon-4"})}),["completed","canceled","error"].includes(a.state)&&(0,e.jsx)(r.zx,{onClick:T,icon:(0,e.jsx)(c.ZP,{name:"Bootstrap/eraser",className:"svg-icon-6"})})]})]},a.id)}function ee(){var v=(0,p.tT)("cloud-drive.index",function(a){var u=a.state;return u.downloadFiles});return(0,e.jsx)(I.E,{className:M()("custom-scrollbar"),options:{scrollbars:{autoHide:"scroll"}},children:v.length?(0,e.jsx)("ul",{className:"transfer-file-list",children:v.map(function(a){return(0,e.jsx)(Y,{file:a},a.id)})}):(0,e.jsxs)("div",{className:"transfer-list-empty",children:[(0,e.jsx)("img",{src:"/assets/media/illustrations/dozzy-1/4.png"}),(0,e.jsx)("span",{className:"empty-title",children:"\u6CA1\u6709\u4E0B\u8F7D\u4EFB\u52A1"})]})})}function ae(){var v=(0,i.useState)("upload"),a=(0,K.Z)(v,2),u=a[0],h=a[1],m=(0,i.useCallback)(function(f){h(f)},[]),b=(0,p.tT)("cloud-drive.index",function(f){return{deleteUploadFile:f.api.upload.delete,deleteDownloadFile:f.api.download.delete}}),o=(0,p.tT)("cloud-drive.index",function(f){var y=f.state;return y.uploadFiles.filter(function(P){return P.state=="completed"})}),N=(0,p.tT)("cloud-drive.index",function(f){var y=f.state;return y.downloadFiles.filter(function(P){return P.state=="completed"})}),T=(0,i.useCallback)((0,Q.Z)(A().mark(function f(){var y,P,E;return A().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:y=(0,t.Z)(o),s.prev=1,y.s();case 3:if((P=y.n()).done){s.next=9;break}return E=P.value,s.next=7,b.deleteUploadFile(E.id);case 7:s.next=3;break;case 9:s.next=14;break;case 11:s.prev=11,s.t0=s.catch(1),y.e(s.t0);case 14:return s.prev=14,y.f(),s.finish(14);case 17:case"end":return s.stop()}},f,null,[[1,11,14,17]])})),[b,o]),j=(0,i.useCallback)((0,Q.Z)(A().mark(function f(){var y,P,E;return A().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:y=(0,t.Z)(N),s.prev=1,y.s();case 3:if((P=y.n()).done){s.next=9;break}return E=P.value,s.next=7,b.deleteDownloadFile(E.id);case 7:s.next=3;break;case 9:s.next=14;break;case 11:s.prev=11,s.t0=s.catch(1),y.e(s.t0);case 14:return s.prev=14,y.f(),s.finish(14);case 17:case"end":return s.stop()}},f,null,[[1,11,14,17]])})),[b,N]),S=(0,i.useMemo)(function(){return!!o.length&&u=="upload"||!!N.length&&u=="download"},[u,o.length,N.length]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"popover-header",children:[(0,e.jsx)("span",{className:"popover-title",children:"\u4F20\u8F93\u5217\u8868"}),(0,e.jsx)("div",{className:"popover-toolbar",children:S&&(0,e.jsx)("a",{className:"cursor-pointer",onClick:u=="upload"?T:j,children:"\u6E05\u7A7A\u5DF2\u5B8C\u6210"})})]}),(0,e.jsxs)(r.mQ,{activeKey:u,onChange:m,tabPosition:"left",children:[(0,e.jsx)(r.mQ.TabPane,{tab:"\u6587\u4EF6\u4E0A\u4F20",children:(0,e.jsx)(W,{})},"upload"),(0,e.jsx)(r.mQ.TabPane,{tab:"\u6587\u4EF6\u4E0B\u8F7D",children:(0,e.jsx)(ee,{})},"download")]})]})}var se=ae,ne=n(30098);function te(v){var a=v.drives,u=v.onAction,h=(0,p.tT)("cloud-drive.index",function(o){var N=o.state;return N.driveId}),m=(0,i.useCallback)(function(o){if(o.startsWith("drive-"))console.log(o);else return u(o),!1;return!0},[u]),b=(0,i.useMemo)(function(){return[].concat((0,F.Z)(a.map(function(o){return{value:"drive-".concat(o.id),label:o.name}})),[{type:"separator"},{value:"preferences",label:"\u504F\u597D\u8BBE\u7F6E"}])},[a]);return(0,e.jsx)("div",{className:"app-sidebar-footer",children:(0,e.jsx)(r.Ph,{onChange:m,placement:"topCenter",value:h?"drive-".concat(h):void 0,options:b})})}function re(){var v=(0,p.tT)("cloud-drive.index",function(s){var D=s.state;return D.driveId}),a=(0,p.tT)("cloud-drive.index",function(s){var D=s.state;return D.visibleTransfers}),u=(0,p.tT)("cloud-drive.index",function(s){return s.api.base}),h=(0,C.$B)({path:"/drive/:type/:value",strict:!0,sensitive:!0}),m=(0,C.$B)({path:"/drive/:type",strict:!0,sensitive:!0}),b=(0,w.dH)({fetchPolicy:"cache-and-network"}),o=b.data,N=(0,p.tT)("cloud-drive.index",function(s){var D=s.state;return D.driveId}),T=(0,p.tT)("cloud-drive.index",function(s){return s.setCloudDrive});(0,i.useEffect)(function(){if(!!(o!=null&&o.cloudDrives)){var s=o==null?void 0:o.cloudDrives;s.some(function(D){return D.id==N})||T(s[0])}},[o==null?void 0:o.cloudDrives,T,N]);var j=(0,i.useMemo)(function(){if(!(!(o!=null&&o.cloudDrives)||!v))return o.cloudDrives.find(function(s){return s.id==v})},[o==null?void 0:o.cloudDrives,v]),S=(0,i.useMemo)(function(){return(h==null?void 0:h.params.type)||(m==null?void 0:m.params.type)},[h,m]),f=(0,i.useMemo)(function(){return h==null?void 0:h.params.value},[h]),y=(0,i.useCallback)(function(s){s?u.openTransfers():u.closeTransfers()},[u]),P=(0,i.useMemo)(function(){return f?S=="folders"?["my-drive"]:S=="mime-types"?[f]:[S]:[S]},[S,f]),E=(0,p.tT)("cloud-drive.index",function(s){var D=s.state,V=0,U=0,B=(0,t.Z)(D.uploadFiles),O;try{for(B.s();!(O=B.n()).done;){var L=O.value;V+=L.size,U+=L.size*(L.progress/100)}}catch(J){B.e(J)}finally{B.f()}return Math.max(U/V*100<<0,D.uploadFiles.length?1:0)}),G=(0,p.tT)("cloud-drive.index",function(s){var D=s.state,V=0,U=0,B=(0,t.Z)(D.downloadFiles),O;try{for(B.s();!(O=B.n()).done;){var L=O.value;V+=L.size,U+=L.size*(L.progress/100)}}catch(J){B.e(J)}finally{B.f()}return Math.max(U/V*100<<0,D.downloadFiles.length?1:0)});return(0,e.jsxs)(ne.G,{width:280,className:"app-sidebar app-drive-sidebar",children:[(0,e.jsxs)("div",{className:"relative mt-5 px-5 pt-5 d-flex",children:[(0,e.jsx)("h1",{className:"text-gray-800 flex-row-fluid fw-bold mb-6 mx-5",children:"\u4E91\u76D8"}),(0,e.jsx)(r.J2,{visible:a,onVisibleChange:y,overlayClassName:"dialog-transfers",content:(0,e.jsx)(se,{}),children:(0,e.jsxs)("div",{className:"file-transfer-icon",children:[(0,e.jsx)(r.mZ,{className:"download-all-progress position-absolute top-50 start-50 translate-middle",width:34,percent:G,strokeWidth:6,success:{strokeColor:"#04c8c8"}}),(0,e.jsx)(r.mZ,{className:"upload-all-progress position-absolute top-50 start-50 translate-middle",width:26,percent:E,strokeWidth:7.5,success:{strokeColor:"#009ef7"}}),(0,e.jsx)(r.GM,{size:"sm",pause:!G&&!E,children:(0,e.jsx)(c.ZP,{className:"svg-icon-6",name:"Duotune/arr032"})})]})})]}),(0,e.jsxs)(I.E,{className:"app-sidebar-body flex-column-fluid d-flex flex-column px-8 custom-scrollbar",options:{scrollbars:{autoHide:"scroll"}},children:[(0,e.jsxs)(r.v2,{className:"menu-title-gray-600 menu-icon-gray-400 menu-state-bg menu-state-primary menu-state-icon-primary menu-state-bullet-primary",accordion:!1,rounded:!0,selectable:"AllMenu",openKeys:["my-drive"],selectedKeys:P,children:[(0,e.jsxs)(r.v2.SubMenu,{url:"/drive/my-drive",titleClassName:"fw-bolder",icon:(0,e.jsx)(c.ZP,{className:"svg-icon-2 me-3",name:"Duotune/abs040"}),title:"\u6211\u7684\u6587\u4EF6",children:[(0,e.jsx)(r.v2.Item,{className:"mb-2 mt-2",url:"/drive/mime-types/image",titleClassName:"fw-bolder",icon:(0,e.jsx)(c.ZP,{className:"svg-icon-2 me-3",name:"Duotune/gen006"}),children:"\u56FE\u7247"},"image"),(0,e.jsx)(r.v2.Item,{className:"mb-2",url:"/drive/mime-types/document",titleClassName:"fw-bolder",icon:(0,e.jsx)(c.ZP,{className:"svg-icon-2 me-3",name:"Duotune/fil003"}),children:"\u6587\u6863"},"document"),(0,e.jsx)(r.v2.Item,{className:"mb-2",url:"/drive/mime-types/video",titleClassName:"fw-bolder",icon:(0,e.jsx)(c.ZP,{className:"svg-icon-2 me-3",name:"Duotune/arr027"}),children:"\u89C6\u9891"},"video"),(0,e.jsx)(r.v2.Item,{className:"mb-2",url:"/drive/mime-types/audio",titleClassName:"fw-bolder",icon:(0,e.jsx)(c.ZP,{className:"svg-icon-2 me-3",name:"Duotune/elc008"}),children:"\u97F3\u9891"},"audio"),(0,e.jsx)(r.v2.Item,{url:"/drive/mime-types/other",titleClassName:"fw-bolder",icon:(0,e.jsx)(c.ZP,{className:"svg-icon-2 me-3",name:"Duotune/gen052"}),children:"\u5176\u4ED6"},"other")]},"my-drive"),(0,e.jsx)(r.v2.Separator,{}),(0,e.jsx)(r.v2.Item,{className:"mb-2",url:"/drive/starred",titleClassName:"fw-bolder",icon:(0,e.jsx)(c.ZP,{className:"svg-icon-2 me-3",name:"Duotune/abs024"}),children:"\u6536\u85CF\u5939"},"starred"),(0,e.jsx)(r.v2.Item,{url:"/drive/trash",titleClassName:"fw-bolder",icon:(0,e.jsx)(c.ZP,{className:"svg-icon-2 me-3",name:"Duotune/gen027"}),children:"\u56DE\u6536\u7AD9"},"trash"),(0,e.jsx)(r.v2.Separator,{}),(0,e.jsx)(r.v2.Item,{url:"/drive/quota",titleClassName:"fw-bolder",icon:(0,e.jsx)(c.ZP,{className:"svg-icon-2 me-3",name:"Duotune/fil020"}),children:"\u5B58\u50A8\u7A7A\u95F4"},"quota")]}),(0,e.jsxs)("div",{className:"drive-quota d-flex align-items-center flex-column mb-10",children:[(0,e.jsx)("div",{className:"h-5px mx-3 w-100 bg-light mb-2",children:(0,e.jsx)("div",{className:"bg-success rounded h-5px",role:"progressbar",style:{width:"".concat((j==null?void 0:j.quota.usage)/(j==null?void 0:j.quota.size)*100,"%")}})}),(0,e.jsxs)("div",{className:"d-flex justify-content-between w-100 mt-auto mb-2",children:[(0,e.jsxs)("span",{className:"fw-bold fs-7 text-gray-400",children:["\u5DF2\u4F7F\u7528\xA0",j==null?void 0:j.quota.usageStr,", \xA0\u5171\xA0",j==null?void 0:j.quota.sizeStr]}),(0,e.jsx)("a",{className:"fw-bolder fs-7 text-success",children:"\u6269\u5BB9"})]})]})]}),(0,e.jsx)(te,{drives:(o==null?void 0:o.cloudDrives)||[],onAction:function(){}})]})}var le=re},14928:function(Z,z,n){"use strict";n.d(z,{tz:function(){return te},HD:function(){return h},f4:function(){return ee},dH:function(){return j},we:function(){return se},lK:function(){return y},rn:function(){return G},Eo:function(){return ye},_D:function(){return a},Ep:function(){return N},fX:function(){return b}});var t=n(11849),F=n(20310),i=n(49704),p=n(38460),C=n(21919),I=n(93633),c,w,Q,K,k,A,H,M,r,R,e,$,x={},W=(0,i.Ps)(c||(c=(0,F.Z)([`
    query cloudDrive($id: ID!) {
  cloudDrive(id: $id) {
    id
    name
    type
    space
    rootFolder
    recycleBin
  }
}
    `])));function Y(d){var l=_objectSpread(_objectSpread({},x),d);return Apollo.useQuery(W,l)}function ee(d){var l=(0,t.Z)((0,t.Z)({},x),d);return p.t(W,l)}var ae=(0,i.Ps)(w||(w=(0,F.Z)([`
    mutation createFolder($name: String!, $parentFolder: ID!) {
  folder: createFolder(name: $name, parentFolder: $parentFolder) {
    id
    name
  }
}
    `])));function se(d){var l=(0,t.Z)((0,t.Z)({},x),d);return C.D(ae,l)}var ne=(0,i.Ps)(Q||(Q=(0,F.Z)([`
    mutation addStarForFiles($ids: [ID!]!, $mode: UpdateMode) {
  files: addStarForFiles(ids: $ids, mode: $mode) {
    id
    starred
  }
}
    `])));function te(d){var l=(0,t.Z)((0,t.Z)({},x),d);return C.D(ne,l)}var re=(0,i.Ps)(K||(K=(0,F.Z)([`
    mutation deleteFiles($ids: [ID!]!) {
  files: deleteFiles(ids: $ids) {
    id
  }
}
    `])));function le(d){var l=_objectSpread(_objectSpread({},x),d);return Apollo.useMutation(re,l)}var v=(0,i.Ps)(k||(k=(0,F.Z)([`
    mutation moveFilesToTrash($ids: [ID!]!) {
  files: moveFilesToTrash(ids: $ids) {
    id
  }
}
    `])));function a(d){var l=(0,t.Z)((0,t.Z)({},x),d);return C.D(v,l)}var u=(0,i.Ps)(A||(A=(0,F.Z)([`
    mutation clearFilesInTrash($folder: ID!) {
  clearFilesInTrash(folder: $folder)
}
    `])));function h(d){var l=(0,t.Z)((0,t.Z)({},x),d);return C.D(u,l)}var m=(0,i.Ps)(H||(H=(0,F.Z)([`
    mutation restoreFiles($ids: [ID!]!) {
  files: restoreFiles(ids: $ids) {
    id
    path
  }
}
    `])));function b(d){var l=(0,t.Z)((0,t.Z)({},x),d);return C.D(m,l)}var o=(0,i.Ps)(M||(M=(0,F.Z)([`
    mutation renameFile($id: ID!, $name: String!) {
  file: renameFile(id: $id, name: $name) {
    id
    name
    lastModified(format: "yyyy-MM-dd HH:mm")
  }
}
    `])));function N(d){var l=(0,t.Z)((0,t.Z)({},x),d);return C.D(o,l)}var T=(0,i.Ps)(r||(r=(0,F.Z)([`
    query cloudDrives {
  cloudDrives {
    id
    name
    type
    space
    quota {
      id
      count
      usage
      size
      usageStr: usage(format: true)
      sizeStr: size(format: true)
    }
    rootFolder
  }
}
    `])));function j(d){var l=(0,t.Z)((0,t.Z)({},x),d);return I.a(T,l)}function S(d){var l=_objectSpread(_objectSpread({},x),d);return Apollo.useLazyQuery(T,l)}var f=(0,i.Ps)(R||(R=(0,F.Z)([`
    query file($id: ID!) {
  file(id: $id) {
    id
    name
    path
    starred
    size
    sizeFormat: size(format: true)
    mimeType
    extension
    isDirectory
    isRootFolder
    lastModified(format: "yyyy-MM-dd HH:mm")
    createdAt(format: "yyyy-MM-dd HH:mm")
    description
    parents {
      id
      isDirectory
      isRootFolder
      name
      path
    }
  }
}
    `])));function y(d){var l=(0,t.Z)((0,t.Z)({},x),d);return I.a(f,l)}function P(d){var l=_objectSpread(_objectSpread({},x),d);return Apollo.useLazyQuery(f,l)}var E=(0,i.Ps)(e||(e=(0,F.Z)([`
    query folder($folder: ID!) {
  currentFolder: file(id: $folder) {
    id
    name
    path
    isDirectory
    isRootFolder
    parents {
      id
      isDirectory
      isRootFolder
      name
      path
    }
  }
}
    `])));function G(d){var l=(0,t.Z)((0,t.Z)({},x),d);return I.a(E,l)}function s(d){var l=_objectSpread(_objectSpread({},x),d);return Apollo.useLazyQuery(E,l)}var D=(0,i.Ps)($||($=(0,F.Z)([`
    query listFiles($rootFolder: ID!, $filter: FileFilter, $page: Int = 1, $pageSize: Int = 30, $orderBy: OrderBy) {
  listFiles(
    rootFolder: $rootFolder
    filter: $filter
    page: $page
    pageSize: $pageSize
    orderBy: $orderBy
  ) {
    pageSize
    currentPage
    totalPage
    totalCount
    edges {
      node {
        id
        name
        path
        size
        starred
        mimeType
        extension
        isDirectory
        lastModified(format: "yyyy-MM-dd HH:mm")
      }
    }
  }
}
    `])));function V(d){var l=_objectSpread(_objectSpread({},x),d);return Apollo.useQuery(D,l)}function U(d){var l=(0,t.Z)((0,t.Z)({},x),d);return p.t(D,l)}var B=n(2824),O=n(67294),L=n(71447),J=function(){var l=U({fetchPolicy:"cache-and-network"}),q=(0,B.Z)(l,2),de=q[0],ie=q[1],g=ie.data,ue=ie.loading,ce=ie.refetch,ve=(g==null?void 0:g.listFiles.pageSize)||0,me=(g==null?void 0:g.listFiles.currentPage)||0,fe=(g==null?void 0:g.listFiles.totalCount)||0,pe=(g==null?void 0:g.listFiles.totalPage)||0,xe=(0,O.useMemo)(function(){return{totalCount:fe,currentPage:me,pageSize:ve,totalPage:pe}},[me,ve,fe,pe]),Fe=(0,O.useMemo)(function(){return function(_,oe){de({variables:(0,t.Z)((0,t.Z)({},_),{},{page:oe})})}},[de]),ge=(0,O.useMemo)(function(){return{pagination:xe,items:(g==null?void 0:g.listFiles.edges.map(function(_){return _.node}))||[],loading:ue,refetch:function(oe,De){return ce((0,t.Z)((0,t.Z)({},oe),{},{page:De}))}}},[ue,xe,g==null?void 0:g.listFiles.edges,ce]);return[Fe,ge]};function ye(d,l,q){return(0,L.RM)(J,{rootFolder:d,filter:l,orderBy:q})}},77104:function(Z,z,n){"use strict";var t=n(94184),F=n.n(t),i=n(67294),p=n(70861),C=n(76792),I=n(85893);const c={variant:"primary",active:!1,disabled:!1},w=i.forwardRef((e,R)=>{var{as:Q,bsPrefix:K,variant:k,size:A,active:H,className:M}=e,r=je(e,["as","bsPrefix","variant","size","active","className"]);const $=(0,C.vE)(K,"btn"),[x,{tagName:W}]=(0,p.FT)(X({tagName:Q},r)),Y=W;return(0,I.jsx)(Y,X(X(X({},x),r),{ref:R,className:F()(M,$,H&&"active",k&&`${$}-${k}`,A&&`${$}-${A}`,r.href&&r.disabled&&"disabled")}))});w.displayName="Button",w.defaultProps=c,z.Z=w}}]);
