(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[7618],{77618:function(K,h,r){"use strict";r.r(h),r.d(h,{default:function(){return B}});var t=r(11849),v=r(86582),M=r(2824),s=r(67294),x=r(51615),z=r(7020),C=r(2015),E=r(14928),$=["7z","arj","deb","pkg","rar","rpm","tar.gz","z","zip"],I=["fnt","fon","otf","ttf"],y=["ods","xls","xlsm","xlsx"],n={video:["3g2","3gp","avi","flv","h264","m4v","mkv","mov","mp4","mpg","mpeg","rm","swf","vob","wmv"],audio:["aif","cda","mid","mp3","mpa","ogg","wav","wma","wpl"],image:["ai","bmp","gif","jpeg","jpg","png","ps","psd","svg","tif","tiff"],document:["doc","docx","odt","pdf","rtf","tex","txt","wpd"].concat(y),spreadsheet:y,compressed:$,font:I},b=r(18071),Z=r(85893);function A(g){var f,m,c,a=g.location,F=g.match.params.id,p=(0,z.tT)("cloud-drive.index",function(e){var u=e.state;return u.driveId}),Q=(0,E.f4)(),D=(0,M.Z)(Q,2),j=D[0],l=D[1].data;(0,s.useEffect)(function(){!p||j({variables:{id:p}})},[p,j]);var o=(0,s.useMemo)(function(){var e;return(l==null?void 0:l.cloudDrive)||((e=a.state)===null||e===void 0?void 0:e.cloudDrive)},[l==null?void 0:l.cloudDrive,(f=a.state)===null||f===void 0?void 0:f.cloudDrive]),d=(0,s.useMemo)(function(){return a.pathname.startsWith("/drive/mime-types")?o==null?void 0:o.rootFolder:F||(o==null?void 0:o.rootFolder)},[F,o==null?void 0:o.rootFolder,a.pathname]),i=(0,s.useMemo)(function(){var e=(0,x.LX)(a.pathname,{path:"/drive/:type/:value",exact:!0,strict:!0}),u=(0,x.LX)(a.pathname,{path:"/drive/:type",exact:!0,strict:!0}),T=(e==null?void 0:e.params.type)||(u==null?void 0:u.params.type),X=e==null?void 0:e.params.value;return T=="mime-types"?X:"my-drive"},[a.pathname]),R=(0,s.useMemo)(function(){return i=="image"?{isDirectory:!1,folder:{subfolders:!0,id:d},extension_in:n.image}:i=="document"?{isDirectory:!1,folder:{subfolders:!0,id:d},extension_in:n.document}:i=="video"?{isDirectory:!1,folder:{subfolders:!0,id:d},extension_in:n.video}:i=="audio"?{isDirectory:!1,folder:{subfolders:!0,id:d},extension_in:n.audio}:i=="other"?{isDirectory:!1,folder:{subfolders:!0,id:d},extension_notIn:[].concat((0,v.Z)(n.image),(0,v.Z)(n.audio),(0,v.Z)(n.video),(0,v.Z)(n.document))}:{folder:{id:d}}},[i,d]),L=(0,s.useMemo)(function(){if(!!o){var e=(0,t.Z)((0,t.Z)({},o),{},{id:o.rootFolder,isRootFolder:!1});return i=="image"?(0,t.Z)((0,t.Z)({},e),{},{name:"\u5168\u90E8\u56FE\u7247"}):i=="document"?(0,t.Z)((0,t.Z)({},e),{},{name:"\u5168\u90E8\u6587\u6863"}):i=="video"?(0,t.Z)((0,t.Z)({},e),{},{name:"\u5168\u90E8\u89C6\u9891"}):i=="audio"?(0,t.Z)((0,t.Z)({},e),{},{name:"\u5168\u90E8\u97F3\u9891"}):i=="other"?(0,t.Z)((0,t.Z)({},e),{},{name:"\u5176\u4ED6\u6587\u4EF6"}):(0,t.Z)((0,t.Z)({},e),{},{isRootFolder:!0,name:"\u5168\u90E8\u6587\u4EF6"})}},[o,i]);return(0,Z.jsx)(b.vs,{className:"app-drive-main",header:!1,footer:!1,children:L&&(0,Z.jsx)(C.Z,{folder:d,filter:R,orderBy:(m=a.state)===null||m===void 0?void 0:m.orderBy,rootFolder:L,currentFolder:(c=a.state)===null||c===void 0?void 0:c.currentFolder},"list-files")})}var B=A}}]);