(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[7700,3190],{48775:function(z,P,u){"use strict";u.d(P,{GP:function(){return l.Z},Hk:function(){return S}});var l=u(48655),p=u(39981),g=u(67294),D=u(94184),I=u.n(D),d=u(12788),n=u(11849),T=u(28865),B=u(37334),k=u(2824),R=u(96486),E=u(85893),L={aside:{minimize:!1,width:280}},c=g.createContext({state:L,dispatch:function(){}}),r;(function(s){s.AsideToggle="ASIDE_TOGGLE",s.AsideWidth="ASIDE_WIDTH"})(r||(r={}));function o(s,y){switch(y.type){case"ASIDE_TOGGLE":return s.aside.minimize=!s.aside.minimize,(0,n.Z)({},s);case"ASIDE_WIDTH":return s.aside.width=y.payload,(0,n.Z)({},s);default:throw new Error}}var i=function(y){var C=(0,g.useReducer)(o,(0,R.cloneDeep)(L)),b=(0,k.Z)(C,2),j=b[0],F=b[1];return(0,E.jsx)(c.Provider,{value:{state:j,dispatch:F},children:y.children})},m=function(){return(0,g.useContext)(c)},A=u(17818),N=u(8265);function f(s){var y=s.className,C=s.header,b=s.children,j=s.collapsible,F=j===void 0?!0:j,Z=s.width,h=Z===void 0?280:Z,$=(0,N.$Y)(),U=m(),w=U.dispatch;return(0,g.useEffect)(function(){$.aside.width(h+100),w({type:r.AsideWidth,payload:h})},[$.aside,w,h]),(0,E.jsxs)("div",{className:I()("app-aside aside",y),children:[(0,E.jsx)(B.Z,{children:(0,E.jsx)(l.Z,{header:C,resizeable:!0,className:"app-sidebar",children:b})}),F&&(0,E.jsx)(e,{className:"start-100 end-0"})]})}function e(s){var y=m(),C=y.dispatch,b=y.state.aside.minimize,j=(0,g.useCallback)(function(){C({type:r.AsideToggle})},[C]);return(0,E.jsx)(A.zx,{style:(0,n.Z)({marginBottom:"1.35rem",zIndex:105},s.style),onClick:j,activeColor:"primary",className:I()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",s.className,{active:b}),children:(0,E.jsx)(T.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}f.Toggle=e;var a=f,t=d.ZP.div.withConfig({displayName:"MicroApp__MicroAppContainer",componentId:"sc-1dngjf6-0"})(["--root-aside-width:",";--met-aside-width:",";"],function(s){return s.minimize?"100px":"".concat(s.width,"px")},function(s){return s.minimize?"100px":"".concat(s.width,"px")});function v(s){var y=s.children,C=s.className,b=m(),j=b.state.aside,F=j.minimize,Z=j.width,h=(0,g.useCallback)(function($){$.preventDefault()},[]);return(0,E.jsx)(t,{minimize:F,width:Z,className:I()("micro-app-container page-full-content",C,{"aside-minimize":F}),onContextMenu:h,children:y})}function M(s){var y=s.children,C=s.className;return(0,E.jsx)(i,{children:(0,E.jsx)(v,{className:C,children:y})})}M.Sidebar=a;var S=M,x=u(53851)},8265:function(z,P,u){"use strict";u.d(P,{$Y:function(){return k},BK:function(){return R},aM:function(){return c}});var l=u(2824),p=u(11849),g=u(67294),D=u(85893),I=g.createContext({getState:function(){return{routes:[]}},subscribe:function(){},dispatch:function(){}}),d=function(o,i){return i?i.type==="ASIDE_MINIMIZE"?(0,p.Z)((0,p.Z)({},o),{},{aside:(0,p.Z)((0,p.Z)({},o.aside),{},{minimize:!!i.payload})}):i.type==="ASIDE_WIDTH"?(0,p.Z)((0,p.Z)({},o),{},{aside:(0,p.Z)((0,p.Z)({},o.aside),{},{width:i.payload})}):i.type==="ASIDE_COLLAPSIBLE"?(0,p.Z)((0,p.Z)({},o),{},{aside:(0,p.Z)((0,p.Z)({},o.aside),{},{collapsible:i.payload})}):o:o},n=function(o){return(0,p.Z)({},o)};function T(r){var o=(0,g.useReducer)(d,r,n),i=(0,l.Z)(o,2),m=i[0],A=i[1],N=(0,g.useState)([]),f=(0,l.Z)(N,1),e=f[0],a=function(C){return function(){var b=e.indexOf(C);b>-1&&e.splice(b,1)}},t=(0,g.useCallback)(function(y){return e.unshift(y),a(y)},[e]),v=(0,g.useCallback)(function(){e.forEach(function(y){return y()})},[e]),M={getState:function(){return m},dispatch:A,subscribe:t},S=(0,g.useState)(M),x=(0,l.Z)(S,1),s=x[0];return(0,g.useEffect)(function(){s.getState=function(){return m},v()},[m]),s}var B=function(o,i){return o===i};function k(){var r=(0,g.useContext)(I),o=(0,g.useRef)({aside:{get state(){return r.getState().aside},width:function(m){r.dispatch({type:"ASIDE_WIDTH",payload:m})},minimize:function(m){r.dispatch({type:"ASIDE_MINIMIZE",payload:m})},collapsible:function(m){r.dispatch({type:"ASIDE_COLLAPSIBLE",payload:m})}}});return o.current}function R(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B;return E(r,o)}function E(r){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:B,i=(0,g.useContext)(I),m=(0,g.useReducer)(function(t){return t+1},0),A=(0,l.Z)(m,2),N=A[1],f=(0,g.useRef)(),e=r(i.getState());function a(){var t=r(i.getState());o(t,f.current)||(f.current=t,N())}return(0,g.useEffect)(function(){return i.subscribe(a)},[]),e}function L(){var r=useContext(I);return r.dispatch}function c(r){var o=r.children,i=r.state,m=T(i);return(0,g.useMemo)(function(){return(0,D.jsx)(I.Provider,{value:m,children:o})},[o,m])}},95901:function(z,P,u){"use strict";u.d(P,{dI:function(){return N},rB:function(){return A}});var l=u(2824),p=u(67294);function g(f){return f!=null&&f!==""}function D(f,e){var a=useState(f),t=_slicedToArray(a,2),v=t[0],M=t[1];return useEffect(function(){var S=setTimeout(function(){M(f)},e);return function(){clearTimeout(S)}},[f,e]),v}var I={USERS_LIST:"users-list"},d=u(54941),n=u(69610),T=u(36321),B=(0,d.Z)(function f(){var e=this;(0,n.Z)(this,f),this.menu=null,this.element=null,this.getParamName=function(a){var t=document.body.hasAttribute("data-kt-name"),v=t?t+"_":"";return"kt_"+v+"theme_mode_"+a},this.getMode=function(){var a,t=e.getParamName("value"),v=e.getMenuMode(),M="light";if(!localStorage)return M;var S=localStorage.getItem(t);if(S)return S;var x=(a=e.element)===null||a===void 0?void 0:a.getAttribute("data-theme");return x||(v?v==="system"?e.getSystemMode():v:M)},this.setMode=function(a,t){var v,M,S,x=a,s=t;if(!(x!=="light"&&x!=="dark")){var y=e.getParamName("value"),C=e.getParamName("menu");s==="system"&&e.getSystemMode()!==x&&(x=e.getSystemMode()),s||(s=x);var b=((v=e.menu)===null||v===void 0?void 0:v.querySelector('[data-kt-element="mode"][data-kt-value="'+s+'"]'))||null;(M=e.element)===null||M===void 0||M.setAttribute("data-kt-theme-mode-switching","true"),(S=e.element)===null||S===void 0||S.setAttribute("data-theme",x);var j=e;setTimeout(function(){var F;(F=j.element)===null||F===void 0||F.removeAttribute("data-kt-theme-mode-switching")},300),localStorage&&localStorage.setItem(y,x),b&&localStorage&&(localStorage.setItem(C,s),e.setActiveMenuItem(b)),e.flipImages()}},this.getMenuMode=function(){var a,t=e.getParamName("menu"),v=(a=e.menu)===null||a===void 0?void 0:a.querySelector('.active[data-kt-element="mode"]'),M=v==null?void 0:v.getAttribute("data-kt-value");if(M)return M;if(!t)return"";var S=localStorage?localStorage.getItem(t):null;return S||""},this.getSystemMode=function(){return window.matchMedia("(prefers-color-scheme: dark)")?"dark":"light"},this.initMode=function(){e.setMode(e.getMode(),e.getMenuMode()),e.element&&T.EventHandlerUtil.trigger(e.element,"kt.thememode.init")},this.setActiveMenuItem=function(a){var t,v=e.getParamName("menu"),M=a.getAttribute("data-kt-value"),S=(t=e.menu)===null||t===void 0?void 0:t.querySelector('.active[data-kt-element="mode"]');S&&S.classList.remove("active"),a.classList.add("active"),localStorage&&M&&v&&localStorage.setItem(v,M)},this.handleMenu=function(){var a,t;(a=e.menu)===null||a===void 0||(t=a.querySelectorAll('[data-kt-element="mode"]'))===null||t===void 0||t.forEach(function(v){v.addEventListener("click",function(M){M.preventDefault();var S=v.getAttribute("data-kt-value"),x=S==="system"?e.getSystemMode():S;x&&e.setMode(x,S)})})},this.flipImages=function(){var a;(a=document.querySelectorAll("[data-kt-img-dark]"))===null||a===void 0||a.forEach(function(t){t.tagName==="IMG"?e.getMode()==="dark"&&t.hasAttribute("data-kt-img-dark")?(t.setAttribute("data-kt-img-light",t.getAttribute("src")||""),t.setAttribute("src",t.getAttribute("data-kt-img-dark")||"")):e.getMode()==="light"&&t.hasAttribute("data-kt-img-light")&&(t.setAttribute("data-kt-img-dark",t.getAttribute("src")||""),t.setAttribute("src",t.getAttribute("data-kt-img-light")||"")):e.getMode()==="dark"&&t.hasAttribute("data-kt-img-dark")?(t.setAttribute("data-kt-img-light",t.getAttribute("src")||""),t.style.backgroundImage="url('"+t.getAttribute("data-kt-img-dark")+"')"):e.getMode()==="light"&&t.hasAttribute("data-kt-img-light")&&(t.setAttribute("data-kt-img-dark",t.getAttribute("src")||""),t.style.backgroundImage="url('"+t.getAttribute("data-kt-img-light")+"')")})},this.on=function(a,t){if(e.element)return T.EventHandlerUtil.on(e.element,a,t)},this.off=function(a,t){if(e.element)return T.EventHandlerUtil.off(e.element,a,t)},this.init=function(){e.menu=document.querySelector('[data-kt-element="theme-mode-menu"]'),e.element=document.documentElement,e.initMode(),e.menu&&e.handleMenu()}}),k=new B,R=u(85893),E=k.getSystemMode(),L=function(e){var a=e!=="system"?e:E,t="/media/patterns/header-bg"+(a==="light"?".jpg":"-dark.png");document.body.style.backgroundImage='url("'.concat(toAbsoluteUrl(t),'")')},c="kt_theme_mode_value",r="kt_theme_mode_menu",o=function(e){if(!localStorage)return"light";var a=localStorage.getItem(e);return!a||a==="light"?"light":a==="dark"?"dark":"system"},i={mode:o(c),menuMode:o(r),updateMode:function(e){},updateMenuMode:function(e){}},m=(0,p.createContext)({mode:i.mode,menuMode:i.menuMode,updateMode:function(e){},updateMenuMode:function(e){}}),A=function(){return(0,p.useContext)(m)},N=function(e){var a=e.children,t=(0,p.useState)(i.mode),v=(0,l.Z)(t,2),M=v[0],S=v[1],x=(0,p.useState)(i.menuMode),s=(0,l.Z)(x,2),y=s[0],C=s[1],b=function(Z){var h=Z==="system"?E:Z;S(h),localStorage&&localStorage.setItem(c,h),document.documentElement.setAttribute("data-theme",h),k.init()},j=function(Z){C(Z),localStorage&&localStorage.setItem(r,Z)};return(0,p.useEffect)(function(){b(M),j(y)},[]),(0,R.jsx)(m.Provider,{value:{mode:M,menuMode:y,updateMode:b,updateMenuMode:j},children:a})}},14843:function(z,P,u){"use strict";u.d(P,{u7:function(){return l.u7},pM:function(){return l.pM},dP:function(){return l.dP},zR:function(){return l.zR},bo:function(){return l.bo},CF:function(){return l.CF},hT:function(){return l.hT},X4:function(){return l.X4},rq:function(){return l.rq},qb:function(){return l.qb},a$:function(){return l.a$},mp:function(){return l.mp},WE:function(){return l.WE},HC:function(){return l.HC},cT:function(){return B},Hr:function(){return L},r3:function(){return l.r3},bI:function(){return l.bI},A6:function(){return l.A6},LV:function(){return l.LV}});var l=u(8305),p=u(39428),g=u(3182),D=u(2824),I=u(67294),d=u(17818),n=u(85893);function T(c,r){var o,i=(0,l.rz)({variables:{id:c==null?void 0:c.id},refetchQueries:[{query:l.dP,variables:{id:c==null||(o=c.application)===null||o===void 0?void 0:o.id}}]}),m=(0,D.Z)(i,1),A=m[0],N=(0,I.useCallback)((0,g.Z)((0,p.Z)().mark(function f(){var e;return(0,p.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.u_.confirm({title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8BE5\u8DEF\u7531\u5417\uFF1F",content:(0,n.jsxs)(n.Fragment,{children:["\u60A8\u5373\u5C06\u5220\u9664\u201C",(0,n.jsx)("strong",{children:c.name}),"\u201D\u3002\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u9006\u8F6C\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF0C\u60A8\u786E\u5B9A\u5220\u9664\u5417\uFF1F"]}),okText:"\u5220 \u9664",okClassName:"btn-danger"});case 2:if(e=t.sent,!e.isConfirmed){t.next=8;break}return t.next=6,A();case 6:d.FN.success("\u5220\u9664\u6210\u529F"),r(c);case 8:case"end":return t.stop()}},f)})),[A,c,r]);return[N]}var B=T,k=u(11849),R=u(25496);function E(c,r){var o,i,m,A=d.l0.useForm(),N=(0,I.useState)(!1),f=(0,D.Z)(N,2),e=f[0],a=f[1],t=(0,l.X4)({fetchPolicy:"no-cache",refetchQueries:[{query:l.dP,variables:{id:c==null||(o=c.application)===null||o===void 0?void 0:o.id}}]}),v=(0,D.Z)(t,1),M=v[0],S=(0,l.LV)({fetchPolicy:"no-cache",refetchQueries:[{query:l.dP,variables:{id:c==null||(i=c.application)===null||i===void 0?void 0:i.id}}]}),x=(0,D.Z)(S,1),s=x[0],y=(0,I.useMemo)(function(){return c!=null&&c.id?(0,g.Z)((0,p.Z)().mark(function C(){var b,j,F;return(0,p.Z)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return a(!0),h.prev=1,h.next=4,A.validateFields();case 4:return b=h.sent,h.next=7,d.FN.promise((0,R.gw)(s({variables:{id:c.id,input:(0,k.Z)({},b)}}),350),{pending:"\u63D0\u4EA4\u4E2D...",success:{render:function(){return(0,n.jsxs)(n.Fragment,{children:["\u8DEF\u7531 ",(0,n.jsx)("strong",{children:b.name})," \u4FDD\u5B58\u6210\u529F"]})}},error:"\u63D0\u4EA4\u51FA\u9519"},{duration:2e3,placement:"top-center"});case 7:j=h.sent,F=j.data,r(F.updateRoute),a(!1),h.next=16;break;case 13:h.prev=13,h.t0=h.catch(1),a(!1);case 16:case"end":return h.stop()}},C,null,[[1,13]])})):(0,g.Z)((0,p.Z)().mark(function C(){var b,j,F;return(0,p.Z)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return a(!0),h.prev=1,h.next=4,A.validateFields();case 4:return b=h.sent,h.next=7,d.FN.promise((0,R.gw)(M({variables:{input:(0,k.Z)((0,k.Z)({},b),{},{application:c.application.id})}}),350),{pending:"\u63D0\u4EA4\u4E2D...",success:{render:function(){return(0,n.jsxs)(n.Fragment,{children:["\u8DEF\u7531 ",(0,n.jsx)("strong",{children:b.name})," \u65B0\u589E\u6210\u529F"]})}},error:"\u63D0\u4EA4\u51FA\u9519"},{duration:2e3,placement:"top-center"});case 7:j=h.sent,F=j.data,r(F.createRoute),a(!1),h.next=16;break;case 13:h.prev=13,h.t0=h.catch(1),a(!1);case 16:case"end":return h.stop()}},C,null,[[1,13]])}))},[M,c==null||(m=c.application)===null||m===void 0?void 0:m.id,c==null?void 0:c.id,A,r,s]);return[y,{form:A,submitting:e}]}var L=E},16686:function(z,P,u){"use strict";u.r(P),u.d(P,{default:function(){return c}});var l=u(67294),p=u(2824),g=u(28865),D=u(51615),I=u(73727),d=u(17818),n=u(85893);function T(r,o){return r.children&&r.children.length?(0,n.jsx)(d.v2.SubMenu,{url:"/websites/".concat(o,"/cms/categories/").concat(r.id,"/articles"),bullet:!0,icon:r.icon,title:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"flex-row-fluid",children:r.name}),(0,n.jsx)(d.u,{title:"\u680F\u76EE\u8BBE\u7F6E",children:(0,n.jsx)("div",{children:(0,n.jsx)(I.Link,{onClick:function(m){return m.stopPropagation()},className:"category-setting me-2 text-primary",to:"/websites/".concat(o,"/cms/categories/").concat(r.id),children:(0,n.jsx)(g.JO,{name:"Bootstrap/gear",className:"svg-icon-primary"})})})})]})},"category_".concat(r.id)):(0,n.jsx)(d.v2.Item,{url:"/websites/".concat(o,"/cms/categories/").concat(r.id,"/articles"),bullet:!0,icon:r.icon,title:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"flex-row-fluid",children:r.name}),(0,n.jsx)(d.u,{title:"\u680F\u76EE\u8BBE\u7F6E",children:(0,n.jsx)(I.Link,{onClick:function(m){return m.stopPropagation()},className:"category-setting me-4 text-primary",to:"/websites/".concat(o,"/cms/categories/").concat(r.id),children:(0,n.jsx)(g.JO,{name:"Bootstrap/gear",className:"svg-icon-primary"})})})]})},"category_".concat(r.id))}console.log("renderChannel",T);function B(r){var o=r.location,i=r.app,m=(0,D.k6)();console.log("history",m);var A=(0,l.useMemo)(function(){var v=(0,D.LX)(o.pathname,{path:"/websites/:sid/cms/categories/:cid",exact:!1,strict:!0});return v?"category_".concat(v.params.cid):"my-drive"},[o.pathname]),N=(0,l.useState)(A),f=(0,p.Z)(N,2),e=f[0],a=f[1];(0,l.useEffect)(function(){!A||a(A)},[A]);var t=(0,l.useCallback)(function(v){console.log("selectedKey",v.key),a(v.key)},[]);return console.log("app 21",i),(0,n.jsxs)(d.bH,{zIndex:10,className:"my-5 p-5",overlayClassName:"bg-white bg-opacity-25",loading:!1,children:[(0,n.jsx)("div",{className:"mx-5",children:(0,n.jsxs)("div",{className:"d-flex align-items-center",children:[(0,n.jsx)(d.mN.Avatar,{alt:"\u5565\u5730\u65B9",className:"me-5"}),(0,n.jsxs)("div",{className:"flex-grow-1",children:[(0,n.jsx)("a",{className:"text-dark fw-bolder text-hover-primary fs-6",children:i.title}),(0,n.jsx)("span",{className:"text-muted d-block fw-bold",children:i.description})]})]})}),(0,n.jsxs)(d.v2,{fit:!0,accordion:!1,selectable:"AllMenu",className:"menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0",selectedKeys:e?[e]:[],onSelect:t,children:[(0,n.jsx)(d.v2.Section,{contentClassName:"pt-6 pb-0",children:"\u901A\u7528"}),(0,n.jsx)(d.v2.Item,{bullet:!0,icon:"",title:"\u57FA\u672C\u4FE1\u606F",url:"/apps/".concat(i.id,"/profile")}),(0,n.jsx)(d.v2.Item,{bullet:!0,icon:"",title:"\u7EC4\u7EC7\u673A\u6784",url:""}),(0,n.jsx)(d.v2.Section,{contentClassName:"pt-6 pb-0",children:"\u5916\u89C2"}),(0,n.jsx)(d.v2.Item,{bullet:!0,icon:"",title:"\u767B\u5F55\u8BBE\u7F6E",url:""}),(0,n.jsx)(d.v2.Item,{bullet:!0,icon:"",title:"\u5E03\u5C40",url:""}),(0,n.jsx)(d.v2.Item,{bullet:!0,icon:"",title:"\u95E8\u6237",url:""}),(0,n.jsx)(d.v2.Section,{contentClassName:"pt-6 pb-0",children:"\u529F\u80FD\u96C6\u6210"}),(0,n.jsx)(d.v2.Item,{bullet:!0,icon:"",title:"\u4FE1\u606F",url:""}),(0,n.jsx)(d.v2.Item,{bullet:!0,icon:"",title:"\u90AE\u4EF6",url:""}),(0,n.jsx)(d.v2.Item,{bullet:!0,icon:"",title:"\u65E5\u7A0B",url:""}),(0,n.jsx)(d.v2.Section,{contentClassName:"pt-6 pb-0",children:"\u7B2C\u4E09\u65B9\u96C6\u6210"}),(0,n.jsx)(d.v2.Item,{bullet:!0,icon:"",title:"\u9489\u9489",url:""}),(0,n.jsx)(d.v2.Item,{bullet:!0,icon:"",title:"\u5FAE\u4FE1",url:""}),(0,n.jsx)(d.v2.Item,{bullet:!0,icon:"",title:"\u4F01\u4E1A\u5FAE\u4FE1",url:""}),(0,n.jsx)(d.v2.Section,{contentClassName:"pt-6 pb-0",children:"\u5F00\u53D1\u8005\u8BBE\u7F6E"}),(0,n.jsx)(d.v2.Item,{bullet:!0,icon:"",title:"\u5F00\u53D1\u4FE1\u606F",url:"/apps/".concat(i.id,"/api_keys")}),(0,n.jsx)(d.v2.Item,{bullet:!0,icon:"",title:"\u4F1A\u8BDD\u7BA1\u7406",url:"/apps/".concat(i.id,"/sessions")}),(0,n.jsx)(d.v2.Item,{bullet:!0,icon:"",title:"\u83DC\u5355\u8BBE\u7F6E",url:"/apps/".concat(i.id,"/menus")}),(0,n.jsx)(d.v2.Item,{bullet:!0,icon:"",title:"\u8DEF\u7531\u8BBE\u7F6E",url:"/apps/".concat(i.id,"/routes")}),(0,n.jsx)(d.v2.Item,{bullet:!0,icon:"",title:"\u7EC4\u4EF6\u7BA1\u7406",url:"/apps/".concat(i.id,"/components")})]})]})}var k=B,R=u(14843),E=u(48775);function L(r){var o=r.children,i=r.location,m=r.match.params.id,A=(0,R.zR)({variables:{id:m}}),N=A.data,f=N===void 0?{}:N,e=A.loading,a=f.app;return console.log("app 1",a),(0,n.jsx)(E.Hk,{loading:e,className:"micro-app-website",children:a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(E.Hk.Sidebar,{children:(0,n.jsx)(k,{app:a,location:i})}),l.Children.map(o,function(t){return t.props.location.state={app:a,baseUrl:"/apps/"+m},t})]})})}var c=L}}]);