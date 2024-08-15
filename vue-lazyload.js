/*!
 * Vue-Lazyload.js v3.1.2
 * (c) 2024 Pablo
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VueLazyload={},e.vue)}(this,(function(e,t){"use strict";function r(e,t){return e(t={exports:{}},t.exports),t.exports}var i=r((function(e){const t=Object.prototype.toString,r=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols;e.exports=(e,...o)=>{if("function"!=typeof(s=e)&&"[object Object]"!==t.call(s)&&!Array.isArray(s))throw new TypeError("expected the first argument to be an object");var s;if(0===o.length||"function"!=typeof Symbol||"function"!=typeof i)return e;for(let t of o){let o=i(t);for(let i of o)r.call(t,i)&&(e[i]=t[i])}return e}})),o=Object.freeze({__proto__:null,default:i,__moduleExports:i}),s=o&&i||o,n=r((function(e){const t=Object.prototype.toString,r=e=>"__proto__"!==e&&"constructor"!==e&&"prototype"!==e,i=e.exports=(e,...t)=>{let n=0;var a;for(("object"==typeof(a=e)?null===a:"function"!=typeof a)&&(e=t[n++]),e||(e={});n<t.length;n++)if(o(t[n])){for(const s of Object.keys(t[n]))r(s)&&(o(e[s])&&o(t[n][s])?i(e[s],t[n][s]):e[s]=t[n][s]);s(e,t[n])}return e};function o(e){return"function"==typeof e||"[object Object]"===t.call(e)}}));const a="undefined"!=typeof window&&null!==window,l=function(){if(a&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)return"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0;return!1}();const d="event",h="observer";function c(e,t){if(!e.length)return;const r=e.indexOf(t);return r>-1?e.splice(r,1):void 0}function u(e,t){if("IMG"!==e.tagName||!e.getAttribute("data-srcset"))return"";let r=e.getAttribute("data-srcset").trim().split(",");const i=[],o=e.parentNode.offsetWidth*t;let s,n,a;r.forEach((e=>{e=e.trim(),s=e.lastIndexOf(" "),-1===s?(n=e,a=99999):(n=e.substr(0,s),a=parseInt(e.substr(s+1,e.length-s-2),10)),i.push([a,n])})),i.sort(((e,t)=>{if(e[0]<t[0])return 1;if(e[0]>t[0])return-1;if(e[0]===t[0]){if(-1!==t[1].indexOf(".webp",t[1].length-5))return 1;if(-1!==e[1].indexOf(".webp",e[1].length-5))return-1}return 0}));let l,d="";for(let e=0;e<i.length;e++){l=i[e],d=l[1];const t=i[e+1];if(t&&t[0]<o){d=l[1];break}if(!t){d=l[1];break}}return d}const p=(e=1)=>a&&window.devicePixelRatio||e;function A(){if(!a)return!1;let e=!0;function t(e,t){const r=new Image;r.onload=function(){const e=r.width>0&&r.height>0;t(e)},r.onerror=function(){t(!1)},r.src="data:image/webp;base64,"+{lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}[e]}return t("lossy",(t=>{e=t})),t("lossless",(t=>{e=t})),t("alpha",(t=>{e=t})),t("animation",(t=>{e=t})),e}const g=function(){if(!a)return!1;let e=!1;try{const t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",y,t)}catch(e){}return e}(),f={on(e,t,r,i=!1){g?e.addEventListener(t,r,{capture:i,passive:!0}):e.addEventListener(t,r,i)},off(e,t,r,i=!1){e.removeEventListener(t,r,i)}},v=(e,t,r)=>{let i=new Image;if(!e||!e.src){const e=new Error("image src is required");return r(e)}e.cors&&(i.crossOrigin=e.cors),i.src=e.src,i.onload=function(){t({naturalHeight:i.naturalHeight,naturalWidth:i.naturalWidth,src:i.src}),i=null},i.onerror=function(e){r(e)}},b=(e,t)=>"undefined"!=typeof getComputedStyle?getComputedStyle(e,null).getPropertyValue(t):e.style[t],m=e=>b(e,"overflow")+b(e,"overflowY")+b(e,"overflowX");function y(){}class w{constructor(e){this.max=e||100,this._caches=[]}has(e){return this._caches.indexOf(e)>-1}add(e){this.has(e)||(this._caches.push(e),this._caches.length>this.max&&this.free())}free(){this._caches.shift()}}class _{constructor(e,t,r,i,o,s,n,a,l,d){this.el=e,this.src=t,this.error=r,this.loading=i,this.bindType=o,this.attempt=0,this.cors=a,this.naturalHeight=0,this.naturalWidth=0,this.options=n,this.rect={},this.$parent=s,this.elRenderer=l,this._imageCache=d,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}initState(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}record(e){this.performanceData[e]=Date.now()}update(e){const t=this.src;this.src=e.src,this.loading=e.loading,this.error=e.error,this.filter(),t!==this.src&&(this.attempt=0,this.initState())}getRect(){this.rect=this.el.getBoundingClientRect()}checkInView(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}filter(){for(const e in this.options.filter)this.options.filter[e](this,this.options)}renderLoading(e){this.state.loading=!0,v({src:this.loading,cors:this.cors},(()=>{this.render("loading",!1),this.state.loading=!1,e()}),(()=>{e(),this.state.loading=!1,this.options.silent||console.warn(`VueLazyload log: load failed with loading image(${this.loading})`)}))}load(e=y){return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log(`VueLazyload log: ${this.src} tried too more than ${this.options.attempt} times`),void e()):this.state.rendered&&this.state.loaded?void 0:this._imageCache.has(this.src)?(this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,e()):void this.renderLoading((()=>{this.attempt++,this.options.adapter.beforeLoad&&this.options.adapter.beforeLoad(this,this.options),this.record("loadStart"),v({src:this.src,cors:this.cors},(t=>{this.naturalHeight=t.naturalHeight,this.naturalWidth=t.naturalWidth,this.state.loaded=!0,this.state.error=!1,this.record("loadEnd"),this.render("loaded",!1),this.state.rendered=!0,this._imageCache.add(this.src),e()}),(e=>{!this.options.silent&&console.error(e),this.state.error=!0,this.state.loaded=!1,this.render("error",!1)}))}))}render(e,t){this.elRenderer(this,e,t)}performance(){let e="loading",t=0;return this.state.loaded&&(e="loaded",t=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(e="error"),{src:this.src,state:e,time:t}}$destroy(){this.el=null,this.src="",this.error=null,this.loading="",this.bindType=null,this.attempt=0}}const L="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",E=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],z={rootMargin:"0px",threshold:0};class Q{constructor({preLoad:e,error:t,throttleWait:r,preLoadTop:i,dispatchEvent:o,loading:s,attempt:n,silent:a=!0,scale:l,listenEvents:c,filter:u,adapter:g,observer:f,observerOptions:v}){this.version='"3.1.2"',this.lazyContainerMananger=null,this.mode=d,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:a,dispatchEvent:!!o,throttleWait:r||200,preLoad:e||1.3,preLoadTop:i||0,error:t||L,loading:s||L,attempt:n||3,scale:l||p(l),listenEvents:c||E,supportWebp:A(),filter:u||{},adapter:g||{},observer:!!f,observerOptions:v||z},this._initEvent(),this._imageCache=new w(200),this.lazyLoadHandler=function(e,t){let r=null,i=0;return function(){if(r)return;const o=Date.now()-i,s=this,n=arguments,a=function(){i=Date.now(),r=!1,e.apply(s,n)};o>=t?a():r=setTimeout(a,t)}}(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?h:d)}getSSRProps(){return{}}performance(){const e=[];return this.ListenerQueue.map((t=>e.push(t.performance()))),e}addLazyBox(e){this.ListenerQueue.push(e),a&&(this._addListenerTarget(window),this._observer&&this._observer.observe(e.el),e.$el&&e.$el.parentNode&&this._addListenerTarget(e.$el.parentNode))}add(e,r,i){if(this.ListenerQueue.some((t=>t.el===e)))return this.update(e,r),t.nextTick(this.lazyLoadHandler);let{src:o,loading:s,error:n,cors:l}=this._valueFormatter(r.value);t.nextTick((()=>{o=u(e,this.options.scale)||o,this._observer&&this._observer.observe(e);const i=Object.keys(r.modifiers)[0];let d;i&&(d=r.instance.$refs[i],d=d?d.el||d:document.getElementById(i)),d||(d=(e=>{if(!a)return;if(!(e instanceof Element))return window;let t=e;for(;t&&t!==document.body&&t!==document.documentElement&&t.parentNode;){if(/(scroll|auto)/.test(m(t)))return t;t=t.parentNode}return window})(e));const h=new _(e,o,n,s,r.arg,d,this.options,l,this._elRenderer.bind(this),this._imageCache);this.ListenerQueue.push(h),a&&(this._addListenerTarget(window),this._addListenerTarget(d)),t.nextTick(this.lazyLoadHandler)}))}update(e,r,i){let{src:o,loading:s,error:n}=this._valueFormatter(r.value);o=u(e,this.options.scale)||o;const a=this.ListenerQueue.find((t=>t.el===e));a?a.update({src:o,loading:s,error:n}):"loaded"===e.getAttribute("lazy")&&e.dataset.src===o||this.add(e,r,i),this._observer&&(this._observer.unobserve(e),this._observer.observe(e)),t.nextTick(this.lazyLoadHandler)}remove(e){if(!e)return;this._observer&&this._observer.unobserve(e);const t=this.ListenerQueue.find((t=>t.el===e));t&&(this._removeListenerTarget(t.$parent),this._removeListenerTarget(window),c(this.ListenerQueue,t),t.$destroy&&t.$destroy())}removeComponent(e){e&&(c(this.ListenerQueue,e),this._observer&&this._observer.unobserve(e.el),e.$parent&&e.$el.parentNode&&this._removeListenerTarget(e.$el.parentNode),this._removeListenerTarget(window))}setMode(e){l||e!==h||(e=d),this.mode=e,e===d?(this._observer&&(this.ListenerQueue.forEach((e=>{this._observer.unobserve(e.el)})),this._observer=null),this.TargetQueue.forEach((e=>{this._initListen(e.el,!0)}))):(this.TargetQueue.forEach((e=>{this._initListen(e.el,!1)})),this._initIntersectionObserver())}_addListenerTarget(e){if(!e)return;let t=this.TargetQueue.find((t=>t.el===e));return t?t.childrenCount++:(t={el:e,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===d&&this._initListen(t.el,!0),this.TargetQueue.push(t)),this.TargetIndex}_removeListenerTarget(e){this.TargetQueue.forEach(((t,r)=>{t.el===e&&(t.childrenCount--,t.childrenCount||(this._initListen(t.el,!1),this.TargetQueue.splice(r,1),t=null))}))}_initListen(e,t){this.options.listenEvents.forEach((r=>f[t?"on":"off"](e,r,this.lazyLoadHandler)))}_initEvent(){this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=(e,t)=>{this.Event.listeners[e]||(this.Event.listeners[e]=[]),this.Event.listeners[e].push(t)},this.$once=(e,t)=>{const r=this;this.$on(e,(function i(){r.$off(e,i),t.apply(r,arguments)}))},this.$off=(e,t)=>{if(t)c(this.Event.listeners[e],t);else{if(!this.Event.listeners[e])return;this.Event.listeners[e].length=0}},this.$emit=(e,t,r)=>{this.Event.listeners[e]&&this.Event.listeners[e].forEach((e=>e(t,r)))}}_lazyLoadHandler(){const e=[];this.ListenerQueue.forEach(((t,r)=>{t.el&&t.el.parentNode&&!t.state.loaded||e.push(t);t.checkInView()&&(t.state.loaded||t.load())})),e.forEach((e=>{c(this.ListenerQueue,e),e.$destroy&&e.$destroy()}))}_initIntersectionObserver(){l&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach((e=>{this._observer.observe(e.el)})))}_observerHandler(e){e.forEach((e=>{e.isIntersecting&&this.ListenerQueue.forEach((t=>{if(t.el===e.target){if(t.state.loaded)return this._observer.unobserve(t.el);t.load()}}))}))}_elRenderer(e,t,r){if(!e.el)return;const{el:i,bindType:o}=e;let s;switch(t){case"loading":s=e.loading;break;case"error":s=e.error;break;default:s=e.src}if(o?i.style[o]='url("'+s+'")':i.getAttribute("src")!==s&&i.setAttribute("src",s),i.setAttribute("lazy",t),this.$emit(t,e,r),this.options.adapter[t]&&this.options.adapter[t](e,this.options),this.options.dispatchEvent){const r=new CustomEvent(t,{detail:e});i.dispatchEvent(r)}}_valueFormatter(e){return"object"==typeof e&&(null!==(t=e)&&"object"==typeof t)?(e.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+e),{src:e.src,loading:e.loading||this.options.loading,error:e.error||this.options.error,cors:this.options.cors}):{src:e,loading:this.options.loading,error:this.options.error,cors:this.options.cors};var t}}const I=(e,r)=>{let i=t.reactive({});return{rect:i,checkInView:()=>(i=e.value.getBoundingClientRect(),a&&i.top<window.innerHeight*r&&i.bottom>0&&i.left<window.innerWidth*r&&i.right>0)}};class T{constructor(e){this.lazy=e,e.lazyContainerMananger=this,this._queue=[]}bind(e,t,r){const i=new O(e,t,r,this.lazy);this._queue.push(i)}update(e,t,r){const i=this._queue.find((t=>t.el===e));i&&i.update(e,t)}unbind(e,t,r){const i=this._queue.find((t=>t.el===e));i&&(i.clear(),c(this._queue,i))}}const x={selector:"img",error:"",loading:""};class O{constructor(e,t,r,i){this.el=e,this.vnode=r,this.binding=t,this.options={},this.lazy=i,this._queue=[],this.update(e,t)}getSSRProps(){return{}}update(e,t){this.el=e,this.options=n({},x,t.value);this.getImgs().forEach((e=>{this.lazy.add(e,n({},this.binding,{value:{src:e.getAttribute("data-src")||e.dataset.src,error:e.getAttribute("data-error")||e.dataset.error||this.options.error,loading:e.getAttribute("data-loading")||e.dataset.loading||this.options.loading}}),this.vnode)}))}getImgs(){return Array.from(this.el.querySelectorAll(this.options.selector))}clear(){this.getImgs().forEach((e=>this.lazy.remove(e))),this.vnode=null,this.binding=null,this.lazy=null}}var R=e=>t.defineComponent({setup(r,{slots:i}){const o=t.ref(),s=t.reactive({src:"",error:"",loading:"",attempt:e.options.attempt}),n=t.reactive({loaded:!1,error:!1,attempt:0}),{rect:a,checkInView:l}=I(o,e.options.preLoad),d=t.ref(""),h=(t=y)=>{if(n.attempt>s.attempt-1&&n.error)return e.options.silent||console.log(`VueLazyload log: ${s.src} tried too more than ${s.attempt} times`),t();const r=s.src;v({src:r},(({src:e})=>{d.value=e,n.loaded=!0}),(()=>{n.attempt++,d.value=s.error,n.error=!0}))},c=t.computed((()=>({el:o.value,rect:a,checkInView:l,load:h,state:n})));t.onMounted((()=>{e.addLazyBox(c.value),e.lazyLoadHandler()})),t.onUnmounted((()=>{e.removeComponent(c.value)}));return t.watch((()=>r.src),(()=>{(()=>{const{src:t,loading:i,error:o}=e._valueFormatter(r.src);n.loaded=!1,s.src=t,s.error=o,s.loading=i,d.value=s.loading})(),e.addLazyBox(c.value),e.lazyLoadHandler()}),{immediate:!0}),()=>{var e;return t.createVNode(r.tag||"img",{src:d.value,ref:o},[null===(e=i.default)||void 0===e?void 0:e.call(i)])}},getSSRProps:()=>({})}),$={install(e,r={}){const i=new Q(r),o=new T(i);if(Number(e.version.split(".")[0])<3)return new Error("Vue version at least 3.0");r.debug&&console.log("will install vue-lazyload"),e.config.globalProperties.$Lazyload=i,r.debug&&console.log("added $Lazyload to globalProperties"),e.provide("Lazyload",i),r.debug&&console.log('Vue.provide("Lazyload", lazy) set'),r.lazyComponent&&(e.component("lazy-component",(e=>t.defineComponent({props:{tag:{type:String,default:"div"}},emits:["show"],setup(r,{emit:i,slots:o}){const s=t.ref(),n=t.reactive({loaded:!1,error:!1,attempt:0}),a=t.ref(!1),{rect:l,checkInView:d}=I(s,e.options.preLoad),h=()=>{a.value=!0,n.loaded=!0,i("show",a.value)},c=t.computed((()=>({el:s.value,rect:l,checkInView:d,load:h,state:n})));return t.onMounted((()=>{e.addLazyBox(c.value),e.lazyLoadHandler()})),t.onUnmounted((()=>{e.removeComponent(c.value)})),()=>{var e;return t.createVNode(r.tag,{ref:s},[a.value&&(null===(e=o.default)||void 0===e?void 0:e.call(o))])}}}))(i)),r.debug&&console.log("Did install lazy-component component")),r.lazyImage&&(e.component("lazy-image",R(i)),r.debug&&console.log("Did install lazy-image component")),r.debug&&console.log("Will add lazy directive"),e.directive("lazy",{beforeMount:i.add.bind(i),beforeUpdate:i.update.bind(i),updated:i.lazyLoadHandler.bind(i),unmounted:i.remove.bind(i),getSSRProps:(e,t)=>({})}),r.debug&&console.log("did install lazy directive"),r.debug&&console.log("will install lazy-container directive"),e.directive("lazy-container",{beforeMount:o.bind.bind(o),updated:o.update.bind(o),unmounted:o.unbind.bind(o),getSSRProps:(e,t)=>({})}),r.debug&&console.log("did install lazy-container directive")}};e.default=$,Object.defineProperty(e,"__esModule",{value:!0})}));
