"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4923],{18203:function(j,s,_){_.r(s);var m=_(97857),d=_.n(m),v=_(5574),E=_.n(v),o=_(62435),f=_(12845),D=_(73588),M=_(88896),c=_(82471),l=_(86074);function O(){var r=(0,f.useModel)("cloud-drive.index",function(y){var C=y.state;return C.driveId}),P=(0,c.f4)(),u=E()(P,2),i=u[0],n=u[1].data;(0,o.useEffect)(function(){r&&i({variables:{id:r}})},[r,i]);var e=(0,o.useMemo)(function(){return n==null?void 0:n.cloudDrive},[n==null?void 0:n.cloudDrive]),a=(0,o.useMemo)(function(){return e==null?void 0:e.recycleBin},[e==null?void 0:e.recycleBin]),h=(0,o.useMemo)(function(){return{folder:{id:a}}},[a]),t=(0,o.useMemo)(function(){if(e)return d()(d()({},e),{},{id:e.recycleBin,isRootFolder:!1,name:"\u56DE\u6536\u7AD9"})},[e]);return(0,l.jsx)(D.vs,{className:"app-drive-main pages-trash",header:!1,footer:!1,children:t&&(0,l.jsx)(M.Z,{toolbar:"trash",folder:a,where:h,rootFolder:t},"list-files")})}s.default=O}}]);