"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6417],{38018:function(x,F,v){var P=v(5574).default,z=v(64599).default,U=v(52677).default,b=v(19632).default,R=v(62072),I=v(44020),O=v(13615),T=v(92806),L=function(s){return s==null};function D(i){switch(i.arrayFormat){case"index":return function(s){return function(f,c){var w=f.length;return c===void 0||i.skipNull&&c===null||i.skipEmptyString&&c===""?f:c===null?[].concat(b(f),[[S(s,i),"[",w,"]"].join("")]):[].concat(b(f),[[S(s,i),"[",S(w,i),"]=",S(c,i)].join("")])}};case"bracket":return function(s){return function(f,c){return c===void 0||i.skipNull&&c===null||i.skipEmptyString&&c===""?f:c===null?[].concat(b(f),[[S(s,i),"[]"].join("")]):[].concat(b(f),[[S(s,i),"[]=",S(c,i)].join("")])}};case"comma":case"separator":return function(s){return function(f,c){return c==null||c.length===0?f:f.length===0?[[S(s,i),"=",S(c,i)].join("")]:[[f,S(c,i)].join(i.arrayFormatSeparator)]}};default:return function(s){return function(f,c){return c===void 0||i.skipNull&&c===null||i.skipEmptyString&&c===""?f:c===null?[].concat(b(f),[S(s,i)]):[].concat(b(f),[[S(s,i),"=",S(c,i)].join("")])}}}}function H(i){var s;switch(i.arrayFormat){case"index":return function(f,c,w){if(s=/\[(\d*)\]$/.exec(f),f=f.replace(/\[\d*\]$/,""),!s){w[f]=c;return}w[f]===void 0&&(w[f]={}),w[f][s[1]]=c};case"bracket":return function(f,c,w){if(s=/(\[\])$/.exec(f),f=f.replace(/\[\]$/,""),!s){w[f]=c;return}if(w[f]===void 0){w[f]=[c];return}w[f]=[].concat(w[f],c)};case"comma":case"separator":return function(f,c,w){var u=typeof c=="string"&&c.includes(i.arrayFormatSeparator),a=typeof c=="string"&&!u&&Q(c,i).includes(i.arrayFormatSeparator);c=a?Q(c,i):c;var g=u||a?c.split(i.arrayFormatSeparator).map(function(l){return Q(l,i)}):c===null?c:Q(c,i);w[f]=g};default:return function(f,c,w){if(w[f]===void 0){w[f]=c;return}w[f]=[].concat(w[f],c)}}}function Y(i){if(typeof i!="string"||i.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function S(i,s){return s.encode?s.strict?R(i):encodeURIComponent(i):i}function Q(i,s){return s.decode?I(i):i}function G(i){return Array.isArray(i)?i.sort():U(i)==="object"?G(Object.keys(i)).sort(function(s,f){return Number(s)-Number(f)}).map(function(s){return i[s]}):i}function X(i){var s=i.indexOf("#");return s!==-1&&(i=i.slice(0,s)),i}function V(i){var s="",f=i.indexOf("#");return f!==-1&&(s=i.slice(f)),s}function J(i){i=X(i);var s=i.indexOf("?");return s===-1?"":i.slice(s+1)}function K(i,s){return s.parseNumbers&&!Number.isNaN(Number(i))&&typeof i=="string"&&i.trim()!==""?i=Number(i):s.parseBooleans&&i!==null&&(i.toLowerCase()==="true"||i.toLowerCase()==="false")&&(i=i.toLowerCase()==="true"),i}function W(i,s){s=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},s),Y(s.arrayFormatSeparator);var f=H(s),c=Object.create(null);if(typeof i!="string"||(i=i.trim().replace(/^[?#&]/,""),!i))return c;var w=z(i.split("&")),u;try{for(w.s();!(u=w.n()).done;){var a=u.value;if(a!==""){var g=O(s.decode?a.replace(/\+/g," "):a,"="),l=P(g,2),E=l[0],m=l[1];m=m===void 0?null:["comma","separator"].includes(s.arrayFormat)?m:Q(m,s),f(Q(E,s),m,c)}}}catch(d){w.e(d)}finally{w.f()}for(var C=0,N=Object.keys(c);C<N.length;C++){var e=N[C],t=c[e];if(U(t)==="object"&&t!==null)for(var r=0,n=Object.keys(t);r<n.length;r++){var o=n[r];t[o]=K(t[o],s)}else c[e]=K(t,s)}return s.sort===!1?c:(s.sort===!0?Object.keys(c).sort():Object.keys(c).sort(s.sort)).reduce(function(d,h){var M=c[h];return M&&U(M)==="object"&&!Array.isArray(M)?d[h]=G(M):d[h]=M,d},Object.create(null))}F.extract=J,F.parse=W,F.stringify=function(i,s){if(!i)return"";s=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},s),Y(s.arrayFormatSeparator);for(var f=function(m){return s.skipNull&&L(i[m])||s.skipEmptyString&&i[m]===""},c=D(s),w={},u=0,a=Object.keys(i);u<a.length;u++){var g=a[u];f(g)||(w[g]=i[g])}var l=Object.keys(w);return s.sort!==!1&&l.sort(s.sort),l.map(function(E){var m=i[E];return m===void 0?"":m===null?S(E,s):Array.isArray(m)?m.reduce(c(E),[]).join("&"):S(E,s)+"="+S(m,s)}).filter(function(E){return E.length>0}).join("&")},F.parseUrl=function(i,s){s=Object.assign({decode:!0},s);var f=O(i,"#"),c=P(f,2),w=c[0],u=c[1];return Object.assign({url:w.split("?")[0]||"",query:W(J(i),s)},s&&s.parseFragmentIdentifier&&u?{fragmentIdentifier:Q(u,s)}:{})},F.stringifyUrl=function(i,s){s=Object.assign({encode:!0,strict:!0},s);var f=X(i.url).split("?")[0]||"",c=F.extract(i.url),w=F.parse(c,{sort:!1}),u=Object.assign(w,i.query),a=F.stringify(u,s);a&&(a="?".concat(a));var g=V(i.url);return i.fragmentIdentifier&&(g="#".concat(S(i.fragmentIdentifier,s))),"".concat(f).concat(a).concat(g)},F.pick=function(i,s,f){f=Object.assign({parseFragmentIdentifier:!0},f);var c=F.parseUrl(i,f),w=c.url,u=c.query,a=c.fragmentIdentifier;return F.stringifyUrl({url:w,query:T(u,s),fragmentIdentifier:a},f)},F.exclude=function(i,s,f){var c=Array.isArray(s)?function(w){return!s.includes(w)}:function(w,u){return!s(w,u)};return F.pick(i,c,f)}},13615:function(x){x.exports=function(F,v){if(!(typeof F=="string"&&typeof v=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(v==="")return[F];var P=F.indexOf(v);return P===-1?[F]:[F.slice(0,P),F.slice(P+v.length)]}},62072:function(x){x.exports=function(F){return encodeURIComponent(F).replace(/[!'()*]/g,function(v){return"%".concat(v.charCodeAt(0).toString(16).toUpperCase())})}},44020:function(x){var F="%[a-f0-9]{2}",v=new RegExp("("+F+")|([^%]+?)","gi"),P=new RegExp("("+F+")+","gi");function z(R,I){try{return[decodeURIComponent(R.join(""))]}catch(L){}if(R.length===1)return R;I=I||1;var O=R.slice(0,I),T=R.slice(I);return Array.prototype.concat.call([],z(O),z(T))}function U(R){try{return decodeURIComponent(R)}catch(T){for(var I=R.match(v)||[],O=1;O<I.length;O++)R=z(I,O).join(""),I=R.match(v)||[];return R}}function b(R){for(var I={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},O=P.exec(R);O;){try{I[O[0]]=decodeURIComponent(O[0])}catch(Y){var T=U(O[0]);T!==O[0]&&(I[O[0]]=T)}O=P.exec(R)}I["%C2"]="\uFFFD";for(var L=Object.keys(I),D=0;D<L.length;D++){var H=L[D];R=R.replace(new RegExp(H,"g"),I[H])}return R}x.exports=function(R){if(typeof R!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof R+"`");try{return R=R.replace(/\+/g," "),decodeURIComponent(R)}catch(I){return b(R)}}},92806:function(x){x.exports=function(F,v){for(var P={},z=Object.keys(F),U=Array.isArray(v),b=0;b<z.length;b++){var R=z[b],I=F[R];(U?v.indexOf(R)!==-1:v(R,I,F))&&(P[R]=I)}return P}},84059:function(x,F,v){v.d(F,{Qd:function(){return f}});var P=v(62435),z=Object.defineProperty,U=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,I=(u,a,g)=>a in u?z(u,a,{enumerable:!0,configurable:!0,writable:!0,value:g}):u[a]=g,O=(u,a)=>{for(var g in a||(a={}))b.call(a,g)&&I(u,g,a[g]);if(U)for(var g of U(a))R.call(a,g)&&I(u,g,a[g]);return u},T=(u,a)=>{var g={};for(var l in u)b.call(u,l)&&a.indexOf(l)<0&&(g[l]=u[l]);if(u!=null&&U)for(var l of U(u))a.indexOf(l)<0&&R.call(u,l)&&(g[l]=u[l]);return g};var L;(u=>{const a=class{constructor(e,t,r,n){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<a.MIN_VERSION||e>a.MAX_VERSION)throw new RangeError("Version value out of range");if(n<-1||n>7)throw new RangeError("Mask value out of range");this.size=e*4+17;let o=[];for(let h=0;h<this.size;h++)o.push(!1);for(let h=0;h<this.size;h++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();const d=this.addEccAndInterleave(r);if(this.drawCodewords(d),n==-1){let h=1e9;for(let M=0;M<8;M++){this.applyMask(M),this.drawFormatBits(M);const A=this.getPenaltyScore();A<h&&(n=M,h=A),this.applyMask(M)}}m(0<=n&&n<=7),this.mask=n,this.applyMask(n),this.drawFormatBits(n),this.isFunction=[]}static encodeText(e,t){const r=u.QrSegment.makeSegments(e);return a.encodeSegments(r,t)}static encodeBinary(e,t){const r=u.QrSegment.makeBytes(e);return a.encodeSegments([r],t)}static encodeSegments(e,t,r=1,n=40,o=-1,d=!0){if(!(a.MIN_VERSION<=r&&r<=n&&n<=a.MAX_VERSION)||o<-1||o>7)throw new RangeError("Invalid value");let h,M;for(h=r;;h++){const y=a.getNumDataCodewords(h,t)*8,p=N.getTotalBits(e,h);if(p<=y){M=p;break}if(h>=n)throw new RangeError("Data too long")}for(const y of[a.Ecc.MEDIUM,a.Ecc.QUARTILE,a.Ecc.HIGH])d&&M<=a.getNumDataCodewords(h,y)*8&&(t=y);let A=[];for(const y of e){l(y.mode.modeBits,4,A),l(y.numChars,y.mode.numCharCountBits(h),A);for(const p of y.getData())A.push(p)}m(A.length==M);const j=a.getNumDataCodewords(h,t)*8;m(A.length<=j),l(0,Math.min(4,j-A.length),A),l(0,(8-A.length%8)%8,A),m(A.length%8==0);for(let y=236;A.length<j;y^=253)l(y,8,A);let B=[];for(;B.length*8<A.length;)B.push(0);return A.forEach((y,p)=>B[p>>>3]|=y<<7-(p&7)),new a(h,t,B,o)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let r=0;r<this.size;r++)this.setFunctionModule(6,r,r%2==0),this.setFunctionModule(r,6,r%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const e=this.getAlignmentPatternPositions(),t=e.length;for(let r=0;r<t;r++)for(let n=0;n<t;n++)r==0&&n==0||r==0&&n==t-1||r==t-1&&n==0||this.drawAlignmentPattern(e[r],e[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){const t=this.errorCorrectionLevel.formatBits<<3|e;let r=t;for(let o=0;o<10;o++)r=r<<1^(r>>>9)*1335;const n=(t<<10|r)^21522;m(n>>>15==0);for(let o=0;o<=5;o++)this.setFunctionModule(8,o,E(n,o));this.setFunctionModule(8,7,E(n,6)),this.setFunctionModule(8,8,E(n,7)),this.setFunctionModule(7,8,E(n,8));for(let o=9;o<15;o++)this.setFunctionModule(14-o,8,E(n,o));for(let o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,E(n,o));for(let o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,E(n,o));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let r=0;r<12;r++)e=e<<1^(e>>>11)*7973;const t=this.version<<12|e;m(t>>>18==0);for(let r=0;r<18;r++){const n=E(t,r),o=this.size-11+r%3,d=Math.floor(r/3);this.setFunctionModule(o,d,n),this.setFunctionModule(d,o,n)}}drawFinderPattern(e,t){for(let r=-4;r<=4;r++)for(let n=-4;n<=4;n++){const o=Math.max(Math.abs(n),Math.abs(r)),d=e+n,h=t+r;0<=d&&d<this.size&&0<=h&&h<this.size&&this.setFunctionModule(d,h,o!=2&&o!=4)}}drawAlignmentPattern(e,t){for(let r=-2;r<=2;r++)for(let n=-2;n<=2;n++)this.setFunctionModule(e+n,t+r,Math.max(Math.abs(n),Math.abs(r))!=1)}setFunctionModule(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}addEccAndInterleave(e){const t=this.version,r=this.errorCorrectionLevel;if(e.length!=a.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");const n=a.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],o=a.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],d=Math.floor(a.getNumRawDataModules(t)/8),h=n-d%n,M=Math.floor(d/n);let A=[];const j=a.reedSolomonComputeDivisor(o);for(let y=0,p=0;y<n;y++){let _=e.slice(p,p+M-o+(y<h?0:1));p+=_.length;const k=a.reedSolomonComputeRemainder(_,j);y<h&&_.push(0),A.push(_.concat(k))}let B=[];for(let y=0;y<A[0].length;y++)A.forEach((p,_)=>{(y!=M-o||_>=h)&&B.push(p[y])});return m(B.length==d),B}drawCodewords(e){if(e.length!=Math.floor(a.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let t=0;for(let r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(let n=0;n<this.size;n++)for(let o=0;o<2;o++){const d=r-o,M=(r+1&2)==0?this.size-1-n:n;!this.isFunction[M][d]&&t<e.length*8&&(this.modules[M][d]=E(e[t>>>3],7-(t&7)),t++)}}m(t==e.length*8)}applyMask(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++){let n;switch(e){case 0:n=(r+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+t)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:n=r*t%2+r*t%3==0;break;case 6:n=(r*t%2+r*t%3)%2==0;break;case 7:n=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&n&&(this.modules[t][r]=!this.modules[t][r])}}getPenaltyScore(){let e=0;for(let o=0;o<this.size;o++){let d=!1,h=0,M=[0,0,0,0,0,0,0];for(let A=0;A<this.size;A++)this.modules[o][A]==d?(h++,h==5?e+=a.PENALTY_N1:h>5&&e++):(this.finderPenaltyAddHistory(h,M),d||(e+=this.finderPenaltyCountPatterns(M)*a.PENALTY_N3),d=this.modules[o][A],h=1);e+=this.finderPenaltyTerminateAndCount(d,h,M)*a.PENALTY_N3}for(let o=0;o<this.size;o++){let d=!1,h=0,M=[0,0,0,0,0,0,0];for(let A=0;A<this.size;A++)this.modules[A][o]==d?(h++,h==5?e+=a.PENALTY_N1:h>5&&e++):(this.finderPenaltyAddHistory(h,M),d||(e+=this.finderPenaltyCountPatterns(M)*a.PENALTY_N3),d=this.modules[A][o],h=1);e+=this.finderPenaltyTerminateAndCount(d,h,M)*a.PENALTY_N3}for(let o=0;o<this.size-1;o++)for(let d=0;d<this.size-1;d++){const h=this.modules[o][d];h==this.modules[o][d+1]&&h==this.modules[o+1][d]&&h==this.modules[o+1][d+1]&&(e+=a.PENALTY_N2)}let t=0;for(const o of this.modules)t=o.reduce((d,h)=>d+(h?1:0),t);const r=this.size*this.size,n=Math.ceil(Math.abs(t*20-r*10)/r)-1;return m(0<=n&&n<=9),e+=n*a.PENALTY_N4,m(0<=e&&e<=2568888),e}getAlignmentPatternPositions(){if(this.version==1)return[];{const e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2;let r=[6];for(let n=this.size-7;r.length<e;n-=t)r.splice(1,0,n);return r}}static getNumRawDataModules(e){if(e<a.MIN_VERSION||e>a.MAX_VERSION)throw new RangeError("Version number out of range");let t=(16*e+128)*e+64;if(e>=2){const r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return m(208<=t&&t<=29648),t}static getNumDataCodewords(e,t){return Math.floor(a.getNumRawDataModules(e)/8)-a.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*a.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw new RangeError("Degree out of range");let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let r=1;for(let n=0;n<e;n++){for(let o=0;o<t.length;o++)t[o]=a.reedSolomonMultiply(t[o],r),o+1<t.length&&(t[o]^=t[o+1]);r=a.reedSolomonMultiply(r,2)}return t}static reedSolomonComputeRemainder(e,t){let r=t.map(n=>0);for(const n of e){const o=n^r.shift();r.push(0),t.forEach((d,h)=>r[h]^=a.reedSolomonMultiply(d,o))}return r}static reedSolomonMultiply(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");let r=0;for(let n=7;n>=0;n--)r=r<<1^(r>>>7)*285,r^=(t>>>n&1)*e;return m(r>>>8==0),r}finderPenaltyCountPatterns(e){const t=e[1];m(t<=this.size*3);const r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)}};let g=a;g.MIN_VERSION=1,g.MAX_VERSION=40,g.PENALTY_N1=3,g.PENALTY_N2=3,g.PENALTY_N3=40,g.PENALTY_N4=10,g.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],g.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],u.QrCode=g;function l(e,t,r){if(t<0||t>31||e>>>t)throw new RangeError("Value out of range");for(let n=t-1;n>=0;n--)r.push(e>>>n&1)}function E(e,t){return(e>>>t&1)!=0}function m(e){if(!e)throw new Error("Assertion error")}const C=class{constructor(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(e){let t=[];for(const r of e)l(r,8,t);return new C(C.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!C.isNumeric(e))throw new RangeError("String contains non-numeric characters");let t=[];for(let r=0;r<e.length;){const n=Math.min(e.length-r,3);l(parseInt(e.substr(r,n),10),n*3+1,t),r+=n}return new C(C.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){if(!C.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");let t=[],r;for(r=0;r+2<=e.length;r+=2){let n=C.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;n+=C.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),l(n,11,t)}return r<e.length&&l(C.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new C(C.Mode.ALPHANUMERIC,e.length,t)}static makeSegments(e){return e==""?[]:C.isNumeric(e)?[C.makeNumeric(e)]:C.isAlphanumeric(e)?[C.makeAlphanumeric(e)]:[C.makeBytes(C.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)l(e,8,t);else if(e<16384)l(2,2,t),l(e,14,t);else if(e<1e6)l(6,3,t),l(e,21,t);else throw new RangeError("ECI assignment value out of range");return new C(C.Mode.ECI,0,t)}static isNumeric(e){return C.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return C.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let r=0;for(const n of e){const o=n.mode.numCharCountBits(t);if(n.numChars>=1<<o)return 1/0;r+=4+o+n.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substr(r+1,2),16)),r+=2);return t}};let N=C;N.NUMERIC_REGEX=/^[0-9]*$/,N.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,N.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",u.QrSegment=N})(L||(L={})),(u=>{let a;(g=>{const l=class{constructor(m,C){this.ordinal=m,this.formatBits=C}};let E=l;E.LOW=new l(0,1),E.MEDIUM=new l(1,0),E.QUARTILE=new l(2,3),E.HIGH=new l(3,2),g.Ecc=E})(a=u.QrCode||(u.QrCode={}))})(L||(L={})),(u=>{let a;(g=>{const l=class{constructor(m,C){this.modeBits=m,this.numBitsCharCount=C}numCharCountBits(m){return this.numBitsCharCount[Math.floor((m+7)/17)]}};let E=l;E.NUMERIC=new l(1,[10,12,14]),E.ALPHANUMERIC=new l(2,[9,11,13]),E.BYTE=new l(4,[8,16,16]),E.KANJI=new l(8,[8,10,12]),E.ECI=new l(7,[0,0,0]),g.Mode=E})(a=u.QrSegment||(u.QrSegment={}))})(L||(L={}));var D=L;var H={L:D.QrCode.Ecc.LOW,M:D.QrCode.Ecc.MEDIUM,Q:D.QrCode.Ecc.QUARTILE,H:D.QrCode.Ecc.HIGH},Y=128,S="L",Q="#FFFFFF",G="#000000",X=!1,V=4,J=.1;function K(u,a=0){const g=[];return u.forEach(function(l,E){let m=null;l.forEach(function(C,N){if(!C&&m!==null){g.push(`M${m+a} ${E+a}h${N-m}v1H${m+a}z`),m=null;return}if(N===l.length-1){if(!C)return;m===null?g.push(`M${N+a},${E+a} h1v1H${N+a}z`):g.push(`M${m+a},${E+a} h${N+1-m}v1H${m+a}z`);return}C&&m===null&&(m=N)})}),g.join("")}function W(u,a){return u.slice().map((g,l)=>l<a.y||l>=a.y+a.h?g:g.map((E,m)=>m<a.x||m>=a.x+a.w?E:!1))}function i(u,a,g,l){if(l==null)return null;const E=g?V:0,m=u.length+E*2,C=Math.floor(a*J),N=m/a,e=(l.width||C)*N,t=(l.height||C)*N,r=l.x==null?u.length/2-e/2:l.x*N,n=l.y==null?u.length/2-t/2:l.y*N;let o=null;if(l.excavate){let d=Math.floor(r),h=Math.floor(n),M=Math.ceil(e+r-d),A=Math.ceil(t+n-h);o={x:d,y:h,w:M,h:A}}return{x:r,y:n,h:t,w:e,excavation:o}}var s=function(){try{new Path2D().addPath(new Path2D)}catch(u){return!1}return!0}();function f(u){const a=u,{value:g,size:l=Y,level:E=S,bgColor:m=Q,fgColor:C=G,includeMargin:N=X,style:e,imageSettings:t}=a,r=T(a,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),n=t==null?void 0:t.src,o=(0,P.useRef)(null),d=(0,P.useRef)(null),[h,M]=(0,P.useState)(!1);(0,P.useEffect)(()=>{if(o.current!=null){const B=o.current,y=B.getContext("2d");if(!y)return;let p=D.QrCode.encodeText(g,H[E]).getModules();const _=N?V:0,k=p.length+_*2,$=i(p,l,N,t),Z=d.current,q=$!=null&&Z!==null&&Z.complete&&Z.naturalHeight!==0&&Z.naturalWidth!==0;q&&$.excavation!=null&&(p=W(p,$.excavation));const ee=window.devicePixelRatio||1;B.height=B.width=l*ee;const te=l/k*ee;y.scale(te,te),y.fillStyle=m,y.fillRect(0,0,k,k),y.fillStyle=C,s?y.fill(new Path2D(K(p,_))):p.forEach(function(re,ne){re.forEach(function(ie,ae){ie&&y.fillRect(ae+_,ne+_,1,1)})}),q&&y.drawImage(Z,$.x+_,$.y+_,$.w,$.h)}}),(0,P.useEffect)(()=>{M(!1)},[n]);const A=O({height:l,width:l},e);let j=null;return n!=null&&(j=P.createElement("img",{src:n,key:n,style:{display:"none"},onLoad:()=>{M(!0)},ref:d})),P.createElement(P.Fragment,null,P.createElement("canvas",O({style:A,height:l,width:l,ref:o},r)),j)}function c(u){const a=u,{value:g,size:l=Y,level:E=S,bgColor:m=Q,fgColor:C=G,includeMargin:N=X,imageSettings:e}=a,t=T(a,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let r=D.QrCode.encodeText(g,H[E]).getModules();const n=N?V:0,o=r.length+n*2,d=i(r,l,N,e);let h=null;e!=null&&d!=null&&(d.excavation!=null&&(r=W(r,d.excavation)),h=React.createElement("image",{xlinkHref:e.src,height:d.h,width:d.w,x:d.x+n,y:d.y+n,preserveAspectRatio:"none"}));const M=K(r,n);return React.createElement("svg",O({height:l,width:l,viewBox:`0 0 ${o} ${o}`},t),React.createElement("path",{fill:m,d:`M0,0 h${o}v${o}H0z`,shapeRendering:"crispEdges"}),React.createElement("path",{fill:C,d:M,shapeRendering:"crispEdges"}),h)}var w=u=>{const a=u,{renderAs:g}=a,l=T(a,["renderAs"]);return g==="svg"?React.createElement(c,O({},l)):React.createElement(f,O({},l))}}}]);