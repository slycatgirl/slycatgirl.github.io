(function(){"use strict";var e={1276:function(e,t,n){var r=n(9242),o=n(3396);function i(e,t,n,r,i,u){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}var u=(0,o.aZ)({}),a=n(89);const c=(0,a.Z)(u,[["render",i]]);var f=c,l=n(678);const s=[{path:"/",name:"home",component:()=>n.e(787).then(n.bind(n,787)),meta:{title:"HOME"}},{path:"/live",name:"live",component:()=>n.e(353).then(n.bind(n,3790)),meta:{title:"LIVE"}},{path:"/about",name:"about",component:()=>n.e(242).then(n.bind(n,6242)),meta:{title:"ABOUT"}},{path:"/music",name:"music",component:()=>n.e(677).then(n.bind(n,7677)),meta:{title:"MUSIC"}}],d=(0,l.p7)({history:(0,l.PO)("/"),routes:s});d.afterEach((e=>{document.title=e.meta.title?"sly cat girl | "+e.meta.title:"sly cat girl"}));var p=d,h=n(8125),m=n(8321),v=n(2274),g=n(2234),b=n(7139);const y=["viewBox"],w=["d"];function O(e,t,n,r,i,u){return(0,o.wg)(),(0,o.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",class:(0,b.C_)(e.$props.class),viewBox:`0 0 ${e.width} ${e.height}`},[(0,o._)("path",{fill:"currentColor",d:e.svgPath},null,8,w)],10,y)}var C=(0,o.aZ)({name:"FontAwesome",props:{icon:{type:String,required:!0},type:{type:String,default:"far",required:!1},class:String},setup(e){const t=(0,o.Fl)((()=>(0,h.N)({prefix:e.type,iconName:e.icon}))),n=(0,o.Fl)((()=>t.value.icon[0])),r=(0,o.Fl)((()=>t.value.icon[1])),i=(0,o.Fl)((()=>t.value.icon[4]));return{width:n,height:r,svgPath:i}}});const k=(0,a.Z)(C,[["render",O]]);var E=k;h.vI.add(m.mRB,v.NCV,g.vnX),(0,r.ri)(f).use(p).component("fa",E).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var f=o();void 0!==f&&(t=f)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{242:"2f3394ff",353:"47cc3de6",677:"8470caa5",787:"5224906d"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{242:"7493c658",353:"595499e3",677:"c4e9a3de",787:"7493c658"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="home:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+i){a=s;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={242:1,353:1,677:1,787:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var l=c(n)}for(t&&t(r);f<u.length;f++)i=u[f],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkhome"]=self["webpackChunkhome"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1276)}));r=n.O(r)})();
//# sourceMappingURL=app.04cc2ec3.js.map