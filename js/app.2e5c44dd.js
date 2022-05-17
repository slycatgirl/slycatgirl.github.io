(function(){"use strict";var t={9613:function(t,e,n){var r=n(9242),o=n(3396),i=n(7139);const u=(0,o.Uk)("HOME"),a=(0,o.Uk)(" | "),c=(0,o.Uk)("LIVE"),l=(0,o.Uk)(" | "),f=(0,o.Uk)("ABOUT"),s=(0,o.Uk)(" | "),m=(0,o.Uk)("MUSIC"),d=(0,o._)("img",{class:"w-7/12 max-w-2xl mx-auto my-3",alt:"Artist Photo",src:"/img/artist_photo.jpg"},null,-1),p={class:"copyright"};function v(t,e,n,r,v,h){const b=(0,o.up)("router-link"),g=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(b,{to:"/"},{default:(0,o.w5)((()=>[u])),_:1}),a,(0,o.Wm)(b,{to:"/live"},{default:(0,o.w5)((()=>[c])),_:1}),l,(0,o.Wm)(b,{to:"/about"},{default:(0,o.w5)((()=>[f])),_:1}),s,(0,o.Wm)(b,{to:"/music"},{default:(0,o.w5)((()=>[m])),_:1})]),(0,o.Wm)(g),d,(0,o._)("footer",null,[(0,o._)("p",p,"© sly cat girl "+(0,i.zw)(t.year),1)])],64)}var h=(0,o.aZ)({setup(){const t=2022,e=(new Date).getFullYear();return{year:e===t?`${t}`:`${t}-${e}`}}}),b=n(89);const g=(0,b.Z)(h,[["render",v]]);var y=g,w=n(678);const k=[{path:"/",name:"home",component:()=>n.e(90).then(n.bind(n,1090)),meta:{title:"HOME"}},{path:"/live",name:"live",component:()=>n.e(724).then(n.bind(n,3724)),meta:{title:"LIVE"}},{path:"/about",name:"about",component:()=>n.e(211).then(n.bind(n,2211)),meta:{title:"ABOUT"}},{path:"/music",name:"music",component:()=>n.e(138).then(n.bind(n,4138)),meta:{title:"MUSIC"}}],O=(0,w.p7)({history:(0,w.PO)("/"),routes:k});O.afterEach((t=>{document.title=t.meta.title?"sly cat girl | "+t.meta.title:"sly cat girl"}));var j=O;(0,r.ri)(y).use(j).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var u=1/0;for(f=0;f<t.length;f++){r=t[f][0],o=t[f][1],i=t[f][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){t.splice(f--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{90:"85a4e961",138:"e487bbc5",211:"13cbc3fa",724:"1865b990"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="home:";n.l=function(r,o,i,u){if(t[r])t[r].push(o);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==e+i){a=s;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+i),a.src=r),t[r]=[o];var m=function(e,n){a.onerror=a.onload=null,clearTimeout(d);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=m.bind(null,a.onerror),a.onload=m.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(e),a=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,u=r[0],a=r[1],c=r[2],l=0;if(u.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var f=c(n)}for(e&&e(r);l<u.length;l++)i=u[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(f)},r=self["webpackChunkhome"]=self["webpackChunkhome"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9613)}));r=n.O(r)})();
//# sourceMappingURL=app.2e5c44dd.js.map