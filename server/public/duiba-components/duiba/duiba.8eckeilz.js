/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='duiba']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(t,n,e,o){"use strict";function i(t,n,e,o,i,c,r){let f=e.t+(o||W),l=e[f];if(l||(l=e[f=e.t+W]),l){let o=n.n;if(n.e)if(1===e.encapsulation)o=i.shadowRoot;else for(;i=n.o(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=t.i.get(o)||{};if(!c[f]){r=l.content.cloneNode(!0);const e=o.querySelectorAll("[data-styles]");n.c(o,r,e.length&&e[e.length-1].nextSibling||o.r),c[f]=!0,t.i.set(o,c)}}}function c(t){return{f:t[0],l:t[1],u:!!t[2],s:!!t[3],a:!!t[4]}}function r(t,n){if(E(n)){if(t===Boolean||3===t)return"false"!==n&&(""===n||!!n);if(t===Number||4===t)return parseFloat(n)}return n}function f(t,n,e,o){const i=t.p.get(n);i&&((o=i["s-ld"]||i.$activeLoading)&&((e=o.indexOf(n))>-1&&o.splice(e,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.p.delete(n))}function l(t,n,e){let o,i=null,c=!1,r=!1;for(var f=arguments.length;f-- >2;)A.push(arguments[f]);for(;A.length>0;)if((e=A.pop())&&void 0!==e.pop)for(f=e.length;f--;)A.push(e[f]);else"boolean"==typeof e&&(e=null),(r="function"!=typeof t)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(r=!1)),r&&c?i[i.length-1].d+=e:null===i?i=[r?{d:e}:e]:i.push(r?{d:e}:e),c=r;if(null!=n){if(n.className&&(n.class=n.className),"object"==typeof n.class){for(f in n.class)n.class[f]&&A.push(f);n.class=A.join(" "),A.length=0}null!=n.v&&(o=n.v)}return"function"==typeof t?t(Object.assign({},n,{children:i})):{m:t,y:i,d:void 0,b:n,w:o,M:void 0,g:!1}}function u(t,n){t.k.has(n)||(t.k.set(n,!0),t.C?t.queue.write(()=>s(t,n)):t.queue.tick(()=>s(t,n)))}function s(t,n,e,o,i,c){if(t.k.delete(n),!t.W.has(n)){if(o=t.j.get(n),e=!o){if((i=t.p.get(n))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{s(t,n)}),void(i.$onRender=i["s-rc"]);o=function r(t,n,e,o,i,c,f){try{(function l(t,n,e,o,i,c,r){for(r in t.x.set(o,e),t.O.has(e)||t.O.set(e,{}),(c=Object.assign({color:{type:String}},n.properties)).mode={type:String},c)p(t,c[r],e,o,r,i)})(t,i=t.S(n).N,n,o=new i,e)}catch(e){o={},t.A(e,7,n,!0)}return t.j.set(n,o),o}(t,n,t.T.get(n))}c&&c.then?c.then(()=>a(t,n,o,e)):a(t,n,o,e)}}function a(t,n,e,o){(function i(t,n,e,o,c){try{const i=n.N.host;let r;if(o.render||o.hostData||i||r){t.L=!0;const i=o.render&&o.render();let r;t.L=!1;const f=t.q.get(e)||{};f.M=e;const u=l(null,r,i);t.q.set(e,t.render(f,u,c,n.N.encapsulation))}t.R(t,t.B,n,o.mode,e),e["s-rn"]=!0,e.$onRender&&(e["s-rc"]=e.$onRender),e["s-rc"]&&(e["s-rc"].forEach(t=>t()),e["s-rc"]=null)}catch(n){t.L=!1,t.A(n,8,e,!0)}})(t,t.S(n),n,e,!o);try{o?n["s-init"]():b(t.q.get(n))}catch(e){t.A(e,6,n,!0)}}function p(t,n,e,o,i,c,f,l){if(n.type||n.state){const u=t.O.get(e);n.state||(!n.attr||void 0!==u[i]&&""!==u[i]||(f=c&&c.D)&&E(l=f[n.attr])&&(u[i]=r(n.type,l)),e.hasOwnProperty(i)&&(void 0===u[i]&&(u[i]=e[i]),delete e[i])),o.hasOwnProperty(i)&&void 0===u[i]&&(u[i]=o[i]),n.watchCallbacks&&(u[T+i]=n.watchCallbacks.slice()),v(o,i,function u(n){return(n=t.O.get(t.x.get(this)))&&n[i]},function s(e,o){(o=t.x.get(this))&&(n.state||n.mutable)&&d(t,o,i,e)})}}function d(t,n,e,o,i,c,r){(i=t.O.get(n))||t.O.set(n,i={}),o!==i[e]&&(i[e]=o,t.j.get(n)&&(i[T+e],!t.L&&n["s-rn"]&&u(t,n)))}function v(t,n,e,o){Object.defineProperty(t,n,{configurable:!0,get:e,set:o})}function m(t,n,e,o,i,c,r,f,l){if("class"!==e||c)if("style"===e){for(f in o=o||j,i=i||j,o)i[f]||(n.style[f]="");for(f in i)i[f]!==o[f]&&(n.style[f]=i[f])}else if("o"!==e[0]||"n"!==e[1]||!/[A-Z]/.test(e[2])||e in n)if("list"!==e&&"type"!==e&&!c&&(e in n||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=t.S(n);o&&o.P&&o.P[e]?h(n,e,i):"ref"!==e&&(h(n,e,null==i?"":i),null!=i&&!1!==i||n.removeAttribute(e))}else null!=i?function u(t,n,e){const o=n!==(n=n.replace(/^xlink\:?/,"")),i=L[n];!i||e&&"false"!==e?"function"!=typeof e&&(i&&(e=""),o?t.setAttributeNS(q,N(n),e):t.setAttribute(n,e)):o?t.removeAttributeNS(q,N(n)):t.removeAttribute(n)}(n,e,i):!c||null!=i&&!1!==i||n.removeAttribute(e);else e=N(e)in n?N(e.substring(2)):N(e[2])+e.substring(3),i?i!==o&&t.B.F(n,e,i):t.B.H(n,e);else if(o!==i){const t=null==o||""===o?x:o.trim().split(/\s+/),e=null==i||""===i?x:i.trim().split(/\s+/);let c=null==n.className||""===n.className?x:n.className.trim().split(/\s+/);for(f=0,l=t.length;f<l;f++)-1===e.indexOf(t[f])&&(c=c.filter(n=>n!==t[f]));for(f=0,l=e.length;f<l;f++)-1===t.indexOf(e[f])&&(c=[...c,e[f]]);n.className=c.join(" ")}}function h(t,n,e){try{t[n]=e}catch(t){}}function y(t,n,e,o,i){const c=11===e.M.nodeType&&e.M.host?e.M.host:e.M,r=n&&n.b||j,f=e.b||j;for(i in r)f&&null!=f[i]||null==r[i]||m(t,c,i,r[i],void 0,o,e.g);for(i in f)i in r&&f[i]===("value"===i||"checked"===i?c[i]:r[i])||m(t,c,i,r[i],f[i],o,e.g)}function b(t,n){t&&(t.b&&t.b.ref&&t.b.ref(n?null:t.M),t.y&&t.y.forEach(t=>{b(t,n)}))}function w(t,n,e,o,i){const c=t.I(n);let r,f,l,u;if(i&&1===c){(f=t.U(n,C))&&(l=f.split("."))[0]===o&&((u={}).m=t.z(u.M=n),e.y||(e.y=[]),e.y[l[1]]=u,e=u,i=""!==l[2]);for(let c=0;c<n.childNodes.length;c++)w(t,n.childNodes[c],e,o,i)}else 3===c&&(r=n.previousSibling)&&8===t.I(r)&&"s"===(l=t.Q(r).split("."))[0]&&l[1]===o&&((u={d:t.Q(n)}).M=n,e.y||(e.y=[]),e.y[l[2]]=u)}function M(t,n,e,o,i){return e["s-cr"]||t.U(e,k)||function c(t,n){return t&&1===n.encapsulation}(t.e,n)||t.c(e,e["s-cr"]=t.Z(""),t.G(e)[0]),t.e||1!==n.encapsulation||(e.shadowRoot=e),o={J:e["s-id"],D:{}},n.P&&Object.keys(n.P).forEach(c=>{(i=n.P[c].K)&&(o.D[i]=t.U(e,i))}),o}function $(t,n,e,o){e.connectedCallback=function(){(function e(t,n,o){t.W.delete(o),t.V.has(o)||(t.V.set(o,!0),o["s-id"]||(o["s-id"]=t.X()),function i(t,n,e){for(e=n;e=t.B.Y(e);)if(t._(e)){t.tt.has(n)||(t.p.set(n,e),e.$activeLoading&&(e["s-ld"]=e.$activeLoading),(e["s-ld"]=e["s-ld"]||[]).push(n));break}}(t,o),t.queue.tick(()=>t.nt(n,o,M(t.B,n,o))))})(t,n,this)},e.attributeChangedCallback=function(t,e,o){(function i(t,n,e,o,c,f,l){if(t&&o!==c)for(f in t)if((l=t[f]).K&&N(l.K)===N(e)){n[f]=r(l.et,c);break}})(n.P,this,t,e,o)},e.disconnectedCallback=function(){(function n(t,e,o){!t.ot&&function i(t,n){for(;n;){if(!t.o(n))return 9!==t.I(n);n=t.o(n)}}(t.B,e)&&(t.W.set(e,!0),f(t,e),b(t.q.get(e),!0),t.B.H(e),t.it.delete(e),[t.p,t.ct,t.T].forEach(t=>t.delete(e)))})(t,this)},e["s-init"]=function(){(function n(t,e,o,i,c){if(!t.tt.has(e)&&t.j.get(e)&&!t.W.has(e)&&(!e["s-ld"]||!e["s-ld"].length)){delete e["s-ld"],t.tt.set(e,!0);try{b(t.q.get(e)),(c=t.ct.get(e))&&(c.forEach(t=>t(e)),t.ct.delete(e))}catch(n){t.A(n,4,e)}e.classList.add(o),f(t,e)}})(t,this,o)},e.forceUpdate=function(){u(t,this)},function i(t,n,e){n&&Object.keys(n).forEach(o=>{const i=n[o].rt;1===i||2===i?v(e,o,function n(){return(t.O.get(this)||{})[o]},function n(e){d(t,this,o,e)}):6===i&&function c(t,n,e){Object.defineProperty(t,n,{configurable:!0,value:e})}(e,o,S)})}(t,n.P,e)}function g(t,n,e,o){return function(){const i=arguments;return function c(t,n,e){return new Promise(o=>{let i=n[e];i||(i=t.ft.querySelector(e)),i||(i=n[e]=t.lt(e),t.ut(t.ft,i)),i.componentOnReady(o)})}(t,n,e).then(t=>t[o].apply(t,i))}}const k="data-ssrv",C="data-ssrc",W="$",j={},x=[],O={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},E=t=>null!=t,N=t=>t.toLowerCase(),S=()=>{},A=[],T="wc-",L={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},q="http://www.w3.org/1999/xlink";let R=!1;(function B(t,n,e,o,r,f){const s={html:{}},a={},p=e[t]=e[t]||{},d=function v(t,n,e){t.st||(t.st=((t,n,e,o)=>t.addEventListener(n,e,o)),t.at=((t,n,e,o)=>t.removeEventListener(n,e,o)));const o=new WeakMap,i={pt:e.documentElement,n:e.head,ft:e.body,dt:!1,I:t=>t.nodeType,lt:t=>e.createElement(t),vt:(t,n)=>e.createElementNS(t,n),mt:t=>e.createTextNode(t),Z:t=>e.createComment(t),c:(t,n,e)=>t.insertBefore(n,e),ht:t=>t.remove(),ut:(t,n)=>t.appendChild(n),G:t=>t.childNodes,o:t=>t.parentNode,yt:t=>t.nextSibling,z:t=>N(t.tagName),Q:t=>t.textContent,bt:(t,n)=>t.textContent=n,U:(t,n)=>t.getAttribute(n),wt:(t,n,e)=>t.setAttribute(n,e),Mt:(t,n,e,o)=>t.setAttributeNS(n,e,o),$t:(t,n)=>t.removeAttribute(n),gt:(t,o)=>{return"child"===o?t.firstElementChild:"parent"===o?i.Y(t):"body"===o?i.ft:"document"===o?e:"window"===o?n:t},F:(n,e,c,r,f,l,u,s)=>{const a=e;let p=n,d=o.get(n);if(d&&d[a]&&d[a](),"string"==typeof l?p=i.gt(n,l):"object"==typeof l?p=l:(s=e.split(":")).length>1&&(p=i.gt(n,s[0]),e=s[1]),!p)return;let v=c;(s=e.split(".")).length>1&&(e=s[0],v=(t=>{t.keyCode===O[s[1]]&&c(t)})),u=i.dt?{capture:!!r,passive:!!f}:!!r,t.st(p,e,v,u),d||o.set(n,d={}),d[a]=(()=>{p&&t.at(p,e,v,u),d[a]=null})},H:(t,n)=>{const e=o.get(t);e&&(n?e[n]&&e[n]():Object.keys(e).forEach(t=>{e[t]&&e[t]()}))},kt:(t,n)=>t.attachShadow(n)};return i.e=!!i.pt.attachShadow,i.Ct=((t,e,o)=>t&&t.dispatchEvent(new n.CustomEvent(e,o))),i.Y=((t,n)=>{return(n=i.o(t))&&11===i.I(n)?n.host:n}),i}(p,e,o);n.isServer=n.isPrerender=!(n.isClient=!0),n.window=e,n.location=e.location,n.document=o,n.resourcesUrl=n.publicPath=r,p.h=l,p.Context=n;const m=e.$definedCmps=e.$definedCmps||{};let h=0;const b={B:d,Wt:function C(t,n){if(!m[t.t]){m[t.t]=!0,$(b,t,n.prototype,f);{const e=[];for(const n in t.P)t.P[n].K&&e.push(t.P[n].K);n.observedAttributes=e}e.customElements.define(t.t,n)}},jt:n.emit,S:t=>s[d.z(t)],xt:t=>n[t],isClient:!0,_:t=>!(!m[d.z(t)]&&!b.S(t)),X:()=>t+h++,A:(t,n,e)=>void 0,Ot:t=>(function n(t,e,o){return{create:g(t,e,o,"create"),componentOnReady:g(t,e,o,"componentOnReady")}})(d,a,t),queue:n.queue=function j(t,n){function e(t){for(let n=0;n<t.length;n++)try{t[n]()}catch(t){}t.length=0}function o(t,n){let e=0;for(;e<t.length&&c()<n;)try{t[e++]()}catch(t){}e===t.length?t.length=0:0!==e&&t.splice(0,e)}function i(){a++,e(l);const n=c()+7*Math.ceil(a*(1/22));o(u,n),o(s,n),u.length>0&&(s.push(...u),u.length=0),(p=l.length+u.length+s.length>0)?t.raf(i):a=0}const c=()=>n.performance.now(),r=Promise.resolve(),f=[],l=[],u=[],s=[];let a=0,p=!1;return t.raf||(t.raf=n.requestAnimationFrame.bind(n)),{tick(t){f.push(t),1===f.length&&r.then(()=>e(f))},read(n){l.push(n),p||(p=!0,t.raf(i))},write(n){u.push(n),p||(p=!0,t.raf(i))}}}(p,e),nt:function x(t,e){if(e.mode||(e.mode=d.U(e,"mode")||n.mode),M(b.B,t,e),t.N)u(b,e);else{const n="string"==typeof t.Et?t.Et:t.Et[e.mode],o=r+n+(function o(t,n){return 2===n.encapsulation||1===n.encapsulation&&!t}(d.e,t)?".sc":"")+".js";import(o).then(n=>{try{t.N=n[(t=>N(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,n,e){const o=e.style;if(o){const i=e.is+(e.styleMode||W);if(!n[i]){const e=t.lt("template");n[i]=e,e.innerHTML=`<style>${o}</style>`,t.ut(t.n,e)}}}(d,t,t.N)}catch(n){t.N=class{}}u(b,e)}).catch(t=>void 0)}},p:new WeakMap,i:new WeakMap,V:new WeakMap,it:new WeakMap,tt:new WeakMap,x:new WeakMap,T:new WeakMap,j:new WeakMap,W:new WeakMap,k:new WeakMap,ct:new WeakMap,Nt:new WeakMap,q:new WeakMap,O:new WeakMap};b.render=function S(t,n){function e(o,i,r,f,l,p,d,v,m){if(!s&&"slot"===o.m){if(Object.keys(u).length&&(a&&n.wt(i,a+"-slot",""),v=E(d=o.b&&o.b.name)?u[d]:u.St,E(v))){for(t.ot=!0,f=0;f<v.length;f++)p=v[f],n.ht(p),n.ut(i,p),8!==p.nodeType&&(m=!0);!m&&o.y&&c(i,[],o.y),t.ot=!1}return null}if(E(o.d))o.M=n.mt(o.d);else{l=o.M=R||"svg"===o.m?n.vt("http://www.w3.org/2000/svg",o.m):n.lt(o.m),R="svg"===o.m||"foreignObject"!==o.m&&R,y(t,null,o,R),E(a)&&l.At!==a&&n.wt(l,l.At=a,"");const i=o.y;if(i)for(f=0;f<i.length;++f)(p=e(i[f],l))&&n.ut(l,p);"svg"===o.m&&(R=!1)}return o.M}function o(t,o,i,c,r,f,l,u){const s=t["s-cr"]||t.$defaultHolder;for(f=s&&n.o(s)||t;c<=r;++c)(u=i[c])&&(l=E(u.d)?n.mt(u.d):e(u,t))&&(u.M=l,n.c(f,l,o))}function i(t,e,o){for(;e<=o;++e)E(t[e])&&n.ht(t[e].M)}function c(t,c,u){let s,a,p,d,v=0,m=0,h=c.length-1,y=c[0],b=c[h],w=u.length-1,M=u[0],$=u[w];for(;v<=h&&m<=w;)null==y?y=c[++v]:null==b?b=c[--h]:null==M?M=u[++m]:null==$?$=u[--w]:r(y,M)?(l(y,M),y=c[++v],M=u[++m]):r(b,$)?(l(b,$),b=c[--h],$=u[--w]):r(y,$)?(l(y,$),n.c(t,y.M,n.yt(b.M)),y=c[++v],$=u[--w]):r(b,M)?(l(b,M),n.c(t,b.M,y.M),b=c[--h],M=u[++m]):(E(s)||(s=f(c,v,h)),a=s[M.w],E(a)?((p=c[a]).m!==M.m?d=e(M,t):(l(p,M),c[a]=void 0,d=p.M),M=u[++m]):(d=e(M,t),M=u[++m]),d&&n.c(y.M&&y.M.parentNode||t,d,y.M));v>h?o(t,null==u[w+1]?null:u[w+1].M,u,m,w):m>w&&i(c,v,h)}function r(t,n){return t.m===n.m&&t.w===n.w}function f(t,n,e){const o={};let i,c,r;for(i=n;i<=e;++i)null!=(r=t[i])&&void 0!==(c=r.w)&&(o.Tt=i);return o}function l(e,r,f){const l=r.M=e.M,u=e.y,s=r.y;R=r.M&&E(n.Y(r.M))&&void 0!==r.M.ownerSVGElement,R="svg"===r.m||"foreignObject"!==r.m&&R,E(r.d)?(f=l["s-cr"]||l.$defaultHolder)?n.bt(n.o(f),r.d):e.d!==r.d&&n.bt(l,r.d):("slot"!==r.m&&y(t,e,r,R),E(u)&&E(s)?c(l,u,s):E(s)?(E(e.d)&&n.bt(l,""),o(l,null,s,0,s.length-1)):E(u)&&i(u,0,u.length-1)),R&&"svg"===r.m&&(R=!1)}let u,s,a;return function t(e,o,i,c,r){return function f(t,n,e,o,i,c,r){if(o=n&&t.o(n))for(i=t.G(o),c=0;c<i.length;c++)o=i[c],1===t.I(o)&&E(r=t.U(o,"slot"))?e[r]?e[r].push(o):e[r]=[o]:e.St?e.St.push(o):e.St=[o]}(n,e.M["s-cr"],u={}),a="scoped"===c||"shadow"===c&&!n.e?"data-"+n.z(e.M):null,s="shadow"===c&&n.e,i||(s?e.M=n.kt(e.M,{mode:"open"}):a&&n.wt(e.M,a+"-host","")),l(e,o),o}}(b,d);const A=d.pt;A["s-ld"]=[],A["s-rn"]=!0,A["s-init"]=(()=>{b.tt.set(A,p.loaded=b.C=!0),d.Ct(e,"appload",{detail:{namespace:t}})}),function T(t,n,e){const o=e.querySelectorAll(`[${k}]`),i=o.length;let c,r,f,l,u,s;if(i>0)for(t.tt.set(e,!0),l=0;l<i;l++)for(c=o[l],r=n.U(c,k),(f={}).m=n.z(f.M=c),t.q.set(c,f),u=0,s=c.childNodes.length;u<s;u++)w(n,c.childNodes[u],f,r,!0)}(b,d,A),b.R=i,(p.components||[]).map(t=>(function n(t,e,o,i){const r={t:t[0],P:{color:{K:"color"}}};r.Et=t[1];const f=t[3];if(f)for(o=0;o<f.length;o++)i=f[o],r.P[i[0]]={rt:i[1],Lt:!!i[2],K:"string"==typeof i[3]?i[3]:i[3]?i[0]:0,et:i[4]};return r.encapsulation=t[4],t[5]&&(r.qt=t[5].map(c)),e[r.t]=r})(t,s)).forEach(t=>b.Wt(t,class extends HTMLElement{})),function L(t,n){n.componentOnReady=((n,e)=>{if(t.S(n)&&!t.tt.has(n)){const o=t.ct.get(n)||[];o.push(e),t.ct.set(n,o)}else e(n)}),n.$r&&n.$r.forEach(t=>n.componentOnReady(t[0],t[1])),n.$r=null}(b,p),p.initialized=!0})(o,e,t,n,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"duiba","hydrated");