(self.webpackChunkasany_admin=self.webpackChunkasany_admin||[]).push([[2275,3190],{48775:function(R,D,a){"use strict";a.d(D,{GP:function(){return A.Z},Hk:function(){return g}});var A=a(48655),c=a(39981),v=a(67294),Z=a(94184),E=a.n(Z),p=a(12788),o=a(11849),I=a(28865),T=a(37334),C=a(2824),k=a(96486),M=a(85893),O={aside:{minimize:!1,width:280}},y=v.createContext({state:O,dispatch:function(){}}),i;(function(r){r.AsideToggle="ASIDE_TOGGLE",r.AsideWidth="ASIDE_WIDTH"})(i||(i={}));function d(r,f){switch(f.type){case"ASIDE_TOGGLE":return r.aside.minimize=!r.aside.minimize,(0,o.Z)({},r);case"ASIDE_WIDTH":return r.aside.width=f.payload,(0,o.Z)({},r);default:throw new Error}}var l=function(f){var j=(0,v.useReducer)(d,(0,k.cloneDeep)(O)),b=(0,C.Z)(j,2),x=b[0],P=b[1];return(0,M.jsx)(y.Provider,{value:{state:x,dispatch:P},children:f.children})},s=function(){return(0,v.useContext)(y)},_=a(17818),L=a(8265);function m(r){var f=r.className,j=r.header,b=r.children,x=r.collapsible,P=x===void 0?!0:x,N=r.width,z=N===void 0?280:N,B=(0,L.$Y)(),U=s(),$=U.dispatch;return(0,v.useEffect)(function(){B.aside.width(z+100),$({type:i.AsideWidth,payload:z})},[B.aside,$,z]),(0,M.jsxs)("div",{className:E()("app-aside aside",f),children:[(0,M.jsx)(T.Z,{children:(0,M.jsx)(A.Z,{header:j,resizeable:!0,className:"app-sidebar",children:b})}),P&&(0,M.jsx)(e,{className:"start-100 end-0"})]})}function e(r){var f=s(),j=f.dispatch,b=f.state.aside.minimize,x=(0,v.useCallback)(function(){j({type:i.AsideToggle})},[j]);return(0,M.jsx)(_.zx,{style:(0,o.Z)({marginBottom:"1.35rem",zIndex:105},r.style),onClick:x,activeColor:"primary",className:E()("micro-app-aside-toggle","btn-icon bg-body btn-color-gray-700 rounded-2 position-absolute translate-middle bottom-0 shadow-sm d-none d-lg-flex",r.className,{active:b}),children:(0,M.jsx)(I.JO,{name:"Duotune/arr063",className:"svg-icon-2 rotate-180"})})}m.Toggle=e;var n=m,t=p.ZP.div.withConfig({displayName:"MicroApp__MicroAppContainer",componentId:"sc-1dngjf6-0"})(["--root-aside-width:",";--met-aside-width:",";"],function(r){return r.minimize?"100px":"".concat(r.width,"px")},function(r){return r.minimize?"100px":"".concat(r.width,"px")});function u(r){var f=r.children,j=r.className,b=s(),x=b.state.aside,P=x.minimize,N=x.width,z=(0,v.useCallback)(function(B){B.preventDefault()},[]);return(0,M.jsx)(t,{minimize:P,width:N,className:E()("micro-app-container page-full-content",j,{"aside-minimize":P}),onContextMenu:z,children:f})}function h(r){var f=r.children,j=r.className;return(0,M.jsx)(l,{children:(0,M.jsx)(u,{className:j,children:f})})}h.Sidebar=n;var g=h,S=a(53851)},8265:function(R,D,a){"use strict";a.d(D,{$Y:function(){return C},BK:function(){return k},aM:function(){return y}});var A=a(2824),c=a(11849),v=a(67294),Z=a(85893),E=v.createContext({getState:function(){return{routes:[]}},subscribe:function(){},dispatch:function(){}}),p=function(d,l){return l?l.type==="ASIDE_MINIMIZE"?(0,c.Z)((0,c.Z)({},d),{},{aside:(0,c.Z)((0,c.Z)({},d.aside),{},{minimize:!!l.payload})}):l.type==="ASIDE_WIDTH"?(0,c.Z)((0,c.Z)({},d),{},{aside:(0,c.Z)((0,c.Z)({},d.aside),{},{width:l.payload})}):l.type==="ASIDE_COLLAPSIBLE"?(0,c.Z)((0,c.Z)({},d),{},{aside:(0,c.Z)((0,c.Z)({},d.aside),{},{collapsible:l.payload})}):d:d},o=function(d){return(0,c.Z)({},d)};function I(i){var d=(0,v.useReducer)(p,i,o),l=(0,A.Z)(d,2),s=l[0],_=l[1],L=(0,v.useState)([]),m=(0,A.Z)(L,1),e=m[0],n=function(j){return function(){var b=e.indexOf(j);b>-1&&e.splice(b,1)}},t=(0,v.useCallback)(function(f){return e.unshift(f),n(f)},[e]),u=(0,v.useCallback)(function(){e.forEach(function(f){return f()})},[e]),h={getState:function(){return s},dispatch:_,subscribe:t},g=(0,v.useState)(h),S=(0,A.Z)(g,1),r=S[0];return(0,v.useEffect)(function(){r.getState=function(){return s},u()},[s]),r}var T=function(d,l){return d===l};function C(){var i=(0,v.useContext)(E),d=(0,v.useRef)({aside:{get state(){return i.getState().aside},width:function(s){i.dispatch({type:"ASIDE_WIDTH",payload:s})},minimize:function(s){i.dispatch({type:"ASIDE_MINIMIZE",payload:s})},collapsible:function(s){i.dispatch({type:"ASIDE_COLLAPSIBLE",payload:s})}}});return d.current}function k(i){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T;return M(i,d)}function M(i){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T,l=(0,v.useContext)(E),s=(0,v.useReducer)(function(t){return t+1},0),_=(0,A.Z)(s,2),L=_[1],m=(0,v.useRef)(),e=i(l.getState());function n(){var t=i(l.getState());d(t,m.current)||(m.current=t,L())}return(0,v.useEffect)(function(){return l.subscribe(n)},[]),e}function O(){var i=useContext(E);return i.dispatch}function y(i){var d=i.children,l=i.state,s=I(l);return(0,v.useMemo)(function(){return(0,Z.jsx)(E.Provider,{value:s,children:d})},[d,s])}},95901:function(R,D,a){"use strict";a.d(D,{dI:function(){return L},rB:function(){return _}});var A=a(2824),c=a(67294);function v(m){return m!=null&&m!==""}function Z(m,e){var n=useState(m),t=_slicedToArray(n,2),u=t[0],h=t[1];return useEffect(function(){var g=setTimeout(function(){h(m)},e);return function(){clearTimeout(g)}},[m,e]),u}var E={USERS_LIST:"users-list"},p=a(54941),o=a(69610),I=a(36321),T=(0,p.Z)(function m(){var e=this;(0,o.Z)(this,m),this.menu=null,this.element=null,this.getParamName=function(n){var t=document.body.hasAttribute("data-kt-name"),u=t?t+"_":"";return"kt_"+u+"theme_mode_"+n},this.getMode=function(){var n,t=e.getParamName("value"),u=e.getMenuMode(),h="light";if(!localStorage)return h;var g=localStorage.getItem(t);if(g)return g;var S=(n=e.element)===null||n===void 0?void 0:n.getAttribute("data-theme");return S||(u?u==="system"?e.getSystemMode():u:h)},this.setMode=function(n,t){var u,h,g,S=n,r=t;if(!(S!=="light"&&S!=="dark")){var f=e.getParamName("value"),j=e.getParamName("menu");r==="system"&&e.getSystemMode()!==S&&(S=e.getSystemMode()),r||(r=S);var b=((u=e.menu)===null||u===void 0?void 0:u.querySelector('[data-kt-element="mode"][data-kt-value="'+r+'"]'))||null;(h=e.element)===null||h===void 0||h.setAttribute("data-kt-theme-mode-switching","true"),(g=e.element)===null||g===void 0||g.setAttribute("data-theme",S);var x=e;setTimeout(function(){var P;(P=x.element)===null||P===void 0||P.removeAttribute("data-kt-theme-mode-switching")},300),localStorage&&localStorage.setItem(f,S),b&&localStorage&&(localStorage.setItem(j,r),e.setActiveMenuItem(b)),e.flipImages()}},this.getMenuMode=function(){var n,t=e.getParamName("menu"),u=(n=e.menu)===null||n===void 0?void 0:n.querySelector('.active[data-kt-element="mode"]'),h=u==null?void 0:u.getAttribute("data-kt-value");if(h)return h;if(!t)return"";var g=localStorage?localStorage.getItem(t):null;return g||""},this.getSystemMode=function(){return window.matchMedia("(prefers-color-scheme: dark)")?"dark":"light"},this.initMode=function(){e.setMode(e.getMode(),e.getMenuMode()),e.element&&I.EventHandlerUtil.trigger(e.element,"kt.thememode.init")},this.setActiveMenuItem=function(n){var t,u=e.getParamName("menu"),h=n.getAttribute("data-kt-value"),g=(t=e.menu)===null||t===void 0?void 0:t.querySelector('.active[data-kt-element="mode"]');g&&g.classList.remove("active"),n.classList.add("active"),localStorage&&h&&u&&localStorage.setItem(u,h)},this.handleMenu=function(){var n,t;(n=e.menu)===null||n===void 0||(t=n.querySelectorAll('[data-kt-element="mode"]'))===null||t===void 0||t.forEach(function(u){u.addEventListener("click",function(h){h.preventDefault();var g=u.getAttribute("data-kt-value"),S=g==="system"?e.getSystemMode():g;S&&e.setMode(S,g)})})},this.flipImages=function(){var n;(n=document.querySelectorAll("[data-kt-img-dark]"))===null||n===void 0||n.forEach(function(t){t.tagName==="IMG"?e.getMode()==="dark"&&t.hasAttribute("data-kt-img-dark")?(t.setAttribute("data-kt-img-light",t.getAttribute("src")||""),t.setAttribute("src",t.getAttribute("data-kt-img-dark")||"")):e.getMode()==="light"&&t.hasAttribute("data-kt-img-light")&&(t.setAttribute("data-kt-img-dark",t.getAttribute("src")||""),t.setAttribute("src",t.getAttribute("data-kt-img-light")||"")):e.getMode()==="dark"&&t.hasAttribute("data-kt-img-dark")?(t.setAttribute("data-kt-img-light",t.getAttribute("src")||""),t.style.backgroundImage="url('"+t.getAttribute("data-kt-img-dark")+"')"):e.getMode()==="light"&&t.hasAttribute("data-kt-img-light")&&(t.setAttribute("data-kt-img-dark",t.getAttribute("src")||""),t.style.backgroundImage="url('"+t.getAttribute("data-kt-img-light")+"')")})},this.on=function(n,t){if(e.element)return I.EventHandlerUtil.on(e.element,n,t)},this.off=function(n,t){if(e.element)return I.EventHandlerUtil.off(e.element,n,t)},this.init=function(){e.menu=document.querySelector('[data-kt-element="theme-mode-menu"]'),e.element=document.documentElement,e.initMode(),e.menu&&e.handleMenu()}}),C=new T,k=a(85893),M=C.getSystemMode(),O=function(e){var n=e!=="system"?e:M,t="/media/patterns/header-bg"+(n==="light"?".jpg":"-dark.png");document.body.style.backgroundImage='url("'.concat(toAbsoluteUrl(t),'")')},y="kt_theme_mode_value",i="kt_theme_mode_menu",d=function(e){if(!localStorage)return"light";var n=localStorage.getItem(e);return!n||n==="light"?"light":n==="dark"?"dark":"system"},l={mode:d(y),menuMode:d(i),updateMode:function(e){},updateMenuMode:function(e){}},s=(0,c.createContext)({mode:l.mode,menuMode:l.menuMode,updateMode:function(e){},updateMenuMode:function(e){}}),_=function(){return(0,c.useContext)(s)},L=function(e){var n=e.children,t=(0,c.useState)(l.mode),u=(0,A.Z)(t,2),h=u[0],g=u[1],S=(0,c.useState)(l.menuMode),r=(0,A.Z)(S,2),f=r[0],j=r[1],b=function(N){var z=N==="system"?M:N;g(z),localStorage&&localStorage.setItem(y,z),document.documentElement.setAttribute("data-theme",z),C.init()},x=function(N){j(N),localStorage&&localStorage.setItem(i,N)};return(0,c.useEffect)(function(){b(h),x(f)},[]),(0,k.jsx)(s.Provider,{value:{mode:h,menuMode:f,updateMode:b,updateMenuMode:x},children:n})}},67837:function(R,D,a){"use strict";a.d(D,{Sy:function(){return T},n5:function(){return M}});var A=a(11849),c=a(20310),v=a(49704),Z=a(64718),E,p,o={},I=(0,v.Ps)(E||(E=(0,c.Z)([`
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
    `])));function T(y){var i=(0,A.Z)((0,A.Z)({},o),y);return Z.a(I,i)}function C(y){var i=_objectSpread(_objectSpread({},o),y);return Apollo.useLazyQuery(I,i)}var k=(0,v.Ps)(p||(p=(0,c.Z)([`
    query project($id: ID!) {
  project(id: $id) {
    id
    logo
    name
    description
  }
}
    `])));function M(y){var i=(0,A.Z)((0,A.Z)({},o),y);return Z.a(k,i)}function O(y){var i=_objectSpread(_objectSpread({},o),y);return Apollo.useLazyQuery(k,i)}},95097:function(R,D,a){"use strict";a.r(D),a.d(D,{default:function(){return T}});var A=a(2824),c=a(67294),v=a(51615),Z=a(67837),E=a(48775),p=a(17818),o=a(85893);function I(C){var k=C.children,M=C.location,O=C.match.params.id,y=(0,Z.n5)({variables:{id:O}}),i=y.data,d=i===void 0?{}:i,l=y.loading,s=d.project,_=(0,c.useMemo)(function(){var u=(0,v.LX)(M.pathname,{path:"/project/:id/:key",exact:!1,strict:!0});return console.log("channelMatch",u),u?"category_".concat(u.params.cid):"my-drive"},[M.pathname]),L=(0,c.useState)(_),m=(0,A.Z)(L,2),e=m[0],n=m[1];(0,c.useEffect)(function(){!_||n(_)},[_]);var t=(0,c.useCallback)(function(u){console.log("selectedKey",u.key),n(u.key)},[]);return(0,o.jsx)(E.Hk,{loading:l,children:s&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(E.Hk.Sidebar,{children:(0,o.jsxs)(p.bH,{zIndex:10,className:"my-5 p-5",overlayClassName:"bg-white bg-opacity-25",loading:!1,children:[(0,o.jsx)("div",{className:"mx-5",children:(0,o.jsxs)("div",{className:"d-flex align-items-center",children:[(0,o.jsx)(p.mN.Avatar,{alt:"\u5565\u5730\u65B9",className:"me-5"}),(0,o.jsxs)("div",{className:"flex-grow-1",children:[(0,o.jsx)("a",{className:"text-dark fw-bolder text-hover-primary fs-6",children:s.name}),(0,o.jsx)("span",{className:"text-muted d-block fw-bold",children:s.description})]})]})}),(0,o.jsxs)(p.v2,{fit:!0,accordion:!1,selectable:"AllMenu",className:"pt-6 menu-title-gray-600 menu-icon-gray-400 menu-state-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold fs-6 px-6 my-5 my-lg-0",selectedKeys:e?[e]:[],onSelect:t,children:[(0,o.jsx)(p.v2.Item,{bullet:!0,icon:"Bootstrap/speedometer2",title:"\u4EEA\u8868\u76D8",url:"/projects/".concat(s.id)}),(0,o.jsx)(p.v2.Section,{contentClassName:"pt-6 pb-0",children:"\u57FA\u7840\u529F\u80FD"}),(0,o.jsx)(p.v2.Item,{bullet:!0,title:"\u76EE\u6807",url:"/projects/".concat(s.id,"/targets")}),(0,o.jsx)(p.v2.Item,{bullet:!0,title:"\u4EFB\u52A1",url:"/projects/".concat(s.id,"/tasks")}),(0,o.jsx)(p.v2.Item,{bullet:!0,title:"\u9884\u7B97",url:"/projects/".concat(s.id,"/budget")}),(0,o.jsx)(p.v2.Item,{bullet:!0,title:"\u6210\u5458",url:"/projects/".concat(s.id,"/users")}),(0,o.jsx)(p.v2.Item,{bullet:!0,title:"\u6587\u6863",url:"/projects/".concat(s.id,"/files")}),(0,o.jsx)(p.v2.Item,{bullet:!0,title:"\u6D3B\u52A8",url:"/projects/".concat(s.id,"/activity")}),(0,o.jsx)(p.v2.Section,{contentClassName:"pt-6 pb-0",children:"\u8BBE\u7F6E"}),(0,o.jsx)(p.v2.Item,{bullet:!0,title:"\u57FA\u7840\u4FE1\u606F",url:"/projects/".concat(s.id,"/settings")})]})]})}),c.Children.map(k,function(u){return u.props.location.state={project:s,baseUrl:"/projects/"+O},u})]})})}var T=I}}]);