!(function(){var z=Object.defineProperty;var _=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var A=(l,h,o)=>h in l?z(l,h,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[h]=o,E=(l,h)=>{for(var o in h||(h={}))J.call(h,o)&&A(l,o,h[o]);if(_)for(var o of _(h))q.call(h,o)&&A(l,o,h[o]);return l};(self.webpackChunk=self.webpackChunk||[]).push([[6011],{14926:function(l,h,o){var O=Object.create,u=Object.defineProperty,R=Object.getOwnPropertyDescriptor,I=Object.getOwnPropertyNames,w=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty,M=(s,e,t)=>e in s?u(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,k=(s,e)=>{for(var t in e)u(s,t,{get:e[t],enumerable:!0})},S=(s,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of I(e))!D.call(s,a)&&a!==t&&u(s,a,{get:()=>e[a],enumerable:!(r=R(e,a))||r.enumerable});return s},U=(s,e,t)=>(t=s!=null?O(w(s)):{},S(e||!s||!s.__esModule?u(t,"default",{value:s,enumerable:!0}):t,s)),H=s=>S(u({},"__esModule",{value:!0}),s),i=(s,e,t)=>(M(s,typeof e!="symbol"?e+"":e,t),t),g={};k(g,{default:()=>m}),l.exports=H(g);var f=U(o(62435)),p=o(38045),v=o(71776);const y=typeof navigator!="undefined",N=y&&navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,b=y&&(/iPad|iPhone|iPod/.test(navigator.userAgent)||N)&&!window.MSStream,V=y&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!window.MSStream,T="https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js",C="Hls",j="https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js",B="dashjs",F="https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js",x="flvjs",K=/www\.dropbox\.com\/.+/,P=/https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/,G="https://videodelivery.net/{id}/manifest/video.m3u8";class m extends f.Component{constructor(){super(...arguments),i(this,"onReady",(...e)=>this.props.onReady(...e)),i(this,"onPlay",(...e)=>this.props.onPlay(...e)),i(this,"onBuffer",(...e)=>this.props.onBuffer(...e)),i(this,"onBufferEnd",(...e)=>this.props.onBufferEnd(...e)),i(this,"onPause",(...e)=>this.props.onPause(...e)),i(this,"onEnded",(...e)=>this.props.onEnded(...e)),i(this,"onError",(...e)=>this.props.onError(...e)),i(this,"onPlayBackRateChange",e=>this.props.onPlaybackRateChange(e.target.playbackRate)),i(this,"onEnablePIP",(...e)=>this.props.onEnablePIP(...e)),i(this,"onDisablePIP",e=>{const{onDisablePIP:t,playing:r}=this.props;t(e),r&&this.play()}),i(this,"onPresentationModeChange",e=>{if(this.player&&(0,p.supportsWebKitPresentationMode)(this.player)){const{webkitPresentationMode:t}=this.player;t==="picture-in-picture"?this.onEnablePIP(e):t==="inline"&&this.onDisablePIP(e)}}),i(this,"onSeek",e=>{this.props.onSeek(e.target.currentTime)}),i(this,"mute",()=>{this.player.muted=!0}),i(this,"unmute",()=>{this.player.muted=!1}),i(this,"renderSourceElement",(e,t)=>typeof e=="string"?f.default.createElement("source",{key:t,src:e}):f.default.createElement("source",E({key:t},e))),i(this,"renderTrack",(e,t)=>f.default.createElement("track",E({key:t},e))),i(this,"ref",e=>{this.player&&(this.prevPlayer=this.player),this.player=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this),this.addListeners(this.player);const e=this.getSource(this.props.url);e&&(this.player.src=e),(b||this.props.config.forceDisableHls)&&this.player.load()}componentDidUpdate(e){this.shouldUseAudio(this.props)!==this.shouldUseAudio(e)&&(this.removeListeners(this.prevPlayer,e.url),this.addListeners(this.player)),this.props.url!==e.url&&!(0,p.isMediaStream)(this.props.url)&&!(this.props.url instanceof Array)&&(this.player.srcObject=null)}componentWillUnmount(){this.player.removeAttribute("src"),this.removeListeners(this.player),this.hls&&this.hls.destroy()}addListeners(e){const{url:t,playsinline:r}=this.props;e.addEventListener("play",this.onPlay),e.addEventListener("waiting",this.onBuffer),e.addEventListener("playing",this.onBufferEnd),e.addEventListener("pause",this.onPause),e.addEventListener("seeked",this.onSeek),e.addEventListener("ended",this.onEnded),e.addEventListener("error",this.onError),e.addEventListener("ratechange",this.onPlayBackRateChange),e.addEventListener("enterpictureinpicture",this.onEnablePIP),e.addEventListener("leavepictureinpicture",this.onDisablePIP),e.addEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.addEventListener("canplay",this.onReady),r&&(e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.setAttribute("x5-playsinline",""))}removeListeners(e,t){e.removeEventListener("canplay",this.onReady),e.removeEventListener("play",this.onPlay),e.removeEventListener("waiting",this.onBuffer),e.removeEventListener("playing",this.onBufferEnd),e.removeEventListener("pause",this.onPause),e.removeEventListener("seeked",this.onSeek),e.removeEventListener("ended",this.onEnded),e.removeEventListener("error",this.onError),e.removeEventListener("ratechange",this.onPlayBackRateChange),e.removeEventListener("enterpictureinpicture",this.onEnablePIP),e.removeEventListener("leavepictureinpicture",this.onDisablePIP),e.removeEventListener("webkitpresentationmodechanged",this.onPresentationModeChange),this.shouldUseHLS(t)||e.removeEventListener("canplay",this.onReady)}shouldUseAudio(e){return e.config.forceVideo||e.config.attributes.poster?!1:v.AUDIO_EXTENSIONS.test(e.url)||e.config.forceAudio}shouldUseHLS(e){return V&&this.props.config.forceSafariHLS||this.props.config.forceHLS?!0:b||this.props.config.forceDisableHls?!1:v.HLS_EXTENSIONS.test(e)||P.test(e)}shouldUseDASH(e){return v.DASH_EXTENSIONS.test(e)||this.props.config.forceDASH}shouldUseFLV(e){return v.FLV_EXTENSIONS.test(e)||this.props.config.forceFLV}load(e){const{hlsVersion:t,hlsOptions:r,dashVersion:a,flvVersion:L}=this.props.config;if(this.hls&&this.hls.destroy(),this.dash&&this.dash.reset(),this.shouldUseHLS(e)&&(0,p.getSDK)(T.replace("VERSION",t),C).then(n=>{if(this.hls=new n(r),this.hls.on(n.Events.MANIFEST_PARSED,()=>{this.props.onReady()}),this.hls.on(n.Events.ERROR,(d,c)=>{this.props.onError(d,c,this.hls,n)}),P.test(e)){const d=e.match(P)[1];this.hls.loadSource(G.replace("{id}",d))}else this.hls.loadSource(e);this.hls.attachMedia(this.player),this.props.onLoaded()}),this.shouldUseDASH(e)&&(0,p.getSDK)(j.replace("VERSION",a),B).then(n=>{this.dash=n.MediaPlayer().create(),this.dash.initialize(this.player,e,this.props.playing),this.dash.on("error",this.props.onError),parseInt(a)<3?this.dash.getDebug().setLogToBrowserConsole(!1):this.dash.updateSettings({debug:{logLevel:n.Debug.LOG_LEVEL_NONE}}),this.props.onLoaded()}),this.shouldUseFLV(e)&&(0,p.getSDK)(F.replace("VERSION",L),x).then(n=>{this.flv=n.createPlayer({type:"flv",url:e}),this.flv.attachMediaElement(this.player),this.flv.on(n.Events.ERROR,(d,c)=>{this.props.onError(d,c,this.flv,n)}),this.flv.load(),this.props.onLoaded()}),e instanceof Array)this.player.load();else if((0,p.isMediaStream)(e))try{this.player.srcObject=e}catch(n){this.player.src=window.URL.createObjectURL(e)}}play(){const e=this.player.play();e&&e.catch(this.props.onError)}pause(){this.player.pause()}stop(){this.player.removeAttribute("src"),this.dash&&this.dash.reset()}seekTo(e,t=!0){this.player.currentTime=e,t||this.pause()}setVolume(e){this.player.volume=e}enablePIP(){this.player.requestPictureInPicture&&document.pictureInPictureElement!==this.player?this.player.requestPictureInPicture():(0,p.supportsWebKitPresentationMode)(this.player)&&this.player.webkitPresentationMode!=="picture-in-picture"&&this.player.webkitSetPresentationMode("picture-in-picture")}disablePIP(){document.exitPictureInPicture&&document.pictureInPictureElement===this.player?document.exitPictureInPicture():(0,p.supportsWebKitPresentationMode)(this.player)&&this.player.webkitPresentationMode!=="inline"&&this.player.webkitSetPresentationMode("inline")}setPlaybackRate(e){try{this.player.playbackRate=e}catch(t){this.props.onError(t)}}getDuration(){if(!this.player)return null;const{duration:e,seekable:t}=this.player;return e===1/0&&t.length>0?t.end(t.length-1):e}getCurrentTime(){return this.player?this.player.currentTime:null}getSecondsLoaded(){if(!this.player)return null;const{buffered:e}=this.player;if(e.length===0)return 0;const t=e.end(e.length-1),r=this.getDuration();return t>r?r:t}getSource(e){const t=this.shouldUseHLS(e),r=this.shouldUseDASH(e),a=this.shouldUseFLV(e);if(!(e instanceof Array||(0,p.isMediaStream)(e)||t||r||a))return K.test(e)?e.replace("www.dropbox.com","dl.dropboxusercontent.com"):e}render(){const{url:e,playing:t,loop:r,controls:a,muted:L,config:n,width:d,height:c}=this.props,X=this.shouldUseAudio(this.props)?"audio":"video",W={width:d==="auto"?d:"100%",height:c==="auto"?c:"100%"};return f.default.createElement(X,E({ref:this.ref,src:this.getSource(e),style:W,preload:"auto",autoPlay:t||void 0,controls:a,muted:L,loop:r},n.attributes),e instanceof Array&&e.map(this.renderSourceElement),n.tracks.map(this.renderTrack))}}i(m,"displayName","FilePlayer"),i(m,"canPlay",v.canPlay.file)}}]);
}());