!(function(){var S=Object.defineProperty;var R=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var x=(o,s,r)=>s in o?S(o,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[s]=r,O=(o,s)=>{for(var r in s||(s={}))T.call(s,r)&&x(o,r,s[r]);if(R)for(var r of R(s))U.call(s,r)&&x(o,r,s[r]);return o};var w=(o,s,r)=>new Promise((v,h)=>{var y=a=>{try{l(r.next(a))}catch(c){h(c)}},P=a=>{try{l(r.throw(a))}catch(c){h(c)}},l=a=>a.done?v(a.value):Promise.resolve(a.value).then(y,P);l((r=r.apply(o,s)).next())});(self.webpackChunk=self.webpackChunk||[]).push([[4258],{58376:function(o,s,r){var v=Object.create,h=Object.defineProperty,y=Object.getOwnPropertyDescriptor,P=Object.getOwnPropertyNames,l=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,c=(n,e,t)=>e in n?h(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,M=(n,e)=>{for(var t in e)h(n,t,{get:e[t],enumerable:!0})},b=(n,e,t,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let p of P(e))!a.call(n,p)&&p!==t&&h(n,p,{get:()=>e[p],enumerable:!(u=y(e,p))||u.enumerable});return n},C=(n,e,t)=>(t=n!=null?v(l(n)):{},b(e||!n||!n.__esModule?h(t,"default",{value:n,enumerable:!0}):t,n)),B=n=>b(h({},"__esModule",{value:!0}),n),i=(n,e,t)=>(c(n,typeof e!="symbol"?e+"":e,t),t),g={};M(g,{default:()=>m}),o.exports=B(g);var _=C(r(62435)),f=r(71776);const D="https://cdn.jsdelivr.net/npm/@mux/mux-player@VERSION/dist/mux-player.mjs";class m extends _.Component{constructor(){super(...arguments),i(this,"onReady",(...e)=>this.props.onReady(...e)),i(this,"onPlay",(...e)=>this.props.onPlay(...e)),i(this,"onBuffer",(...e)=>this.props.onBuffer(...e)),i(this,"onBufferEnd",(...e)=>this.props.onBufferEnd(...e)),i(this,"onPause",(...e)=>this.props.onPause(...e)),i(this,"onEnded",(...e)=>this.props.onEnded(...e)),i(this,"onError",(...e)=>this.props.onError(...e)),i(this,"onPlayBackRateChange",e=>this.props.onPlaybackRateChange(e.target.playbackRate)),i(this,"onEnablePIP",(...e)=>this.props.onEnablePIP(...e)),i(this,"onSeek",e=>{this.props.onSeek(e.target.currentTime)}),i(this,"onDurationChange",()=>{const e=this.getDuration();this.props.onDuration(e)}),i(this,"mute",()=>{this.player.muted=!0}),i(this,"unmute",()=>{this.player.muted=!1}),i(this,"ref",e=>{this.player=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);const e=this.getPlaybackId(this.props.url);e&&(this.player.playbackId=e)}componentWillUnmount(){this.player.playbackId=null,this.removeListeners(this.player)}addListeners(e){const{playsinline:t}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),e.addEventListener("canplay",this.onReady),t&&e.setAttribute("playsinline","")}removeListeners(e){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("canplay",this.onReady)}load(e){return w(this,null,function*(){var t;const{onError:u,config:p}=this.props;if(!((t=globalThis.customElements)!=null&&t.get("mux-player")))try{yield import(`${D.replace("VERSION",p.version)}`),this.props.onLoaded()}catch(d){u(d)}const[,E]=e.match(f.MATCH_URL_MUX);this.player.playbackId=E})}play(){const e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.playbackId=null}seekTo(e,t=!0){this.player.currentTime=e,t||this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player&&this.player.requestPictureInPicture()}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player&&document.exitPictureInPicture()}setPlaybackRate(e){try{this.player.playbackRate=e}catch(t){this.props.onError(t)}}getDuration(){if(!this.player)return null;const{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;const{buffered:e}=this.player;if(e.length===0)return 0;const t=e.end(e.length-1),u=this.getDuration();return t>u?u:t}getPlaybackId(e){const[,t]=e.match(f.MATCH_URL_MUX);return t}render(){const{url:e,playing:t,loop:u,controls:p,muted:E,config:d,width:L,height:k}=this.props,I={width:L==="auto"?L:"100%",height:k==="auto"?k:"100%"};return p===!1&&(I["--controls"]="none"),_.default.createElement("mux-player",O({ref:this.ref,"playback-id":this.getPlaybackId(e),style:I,preload:"auto",autoPlay:t||void 0,muted:E?"":void 0,loop:u?"":void 0},d.attributes))}}i(m,"displayName","Mux"),i(m,"canPlay",f.canPlay.mux)}}]);
}());