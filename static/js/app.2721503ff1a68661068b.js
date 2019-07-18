!function(e){function n(n){for(var t,o,i=n[0],c=n[1],s=n[2],d=n[3]||[],a=0,l=[];a<i.length;a++)o=i[a],z[o]&&l.push(z[o][0]),z[o]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(L&&L(n),H.push.apply(H,d);l.length;)l.shift()();return D.push.apply(D,s||[]),r()}function r(){for(var e,n=0;n<D.length;n++){for(var r=D[n],t=!0,o=1;o<r.length;o++){var i=r[o];0!==z[i]&&(t=!1)}t&&(D.splice(n--,1),e=T(T.s=r[0]))}return 0===D.length&&(H.forEach(function(e){if(void 0===z[e]){z[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",T.nc&&n.setAttribute("nonce",T.nc),n.rel="prefetch",n.as="script",n.href=I(e),document.head.appendChild(n)}}),H.length=0),e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!O[e]||!w[e])return;for(var r in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(g[r]=n[r]);0===--y&&0===b&&E()}(e,n),t&&t(e,n)};var o,i=!0,c="2721503ff1a68661068b",s=1e4,d={},a=[],l=[];function p(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:_,apply:S,status:function(e){if(!e)return f;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var n=u.indexOf(e);n>=0&&u.splice(n,1)},data:d[e]};return o=void 0,n}var u=[],f="idle";function m(e){f=e;for(var n=0;n<u.length;n++)u[n].call(null,e)}var h,g,v,y=0,b=0,x={},w={},O={};function j(e){return+e+""===e?+e:e}function _(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return i=e,m("check"),(n=s,n=n||1e4,new Promise(function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=T.p+""+c+".hot-update.json";t.open("GET",o,!0),t.timeout=n,t.send(null)}catch(i){return r(i)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(i){return void r(i)}e(n)}}})).then(function(e){if(!e)return m("idle"),null;w={},x={},O=e.c,v=e.h,m("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});for(var r in g={},z)P(r);return"prepare"===f&&0===b&&0===y&&E(),n});var n}function P(e){O[e]?(w[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=T.p+""+e+"."+c+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):x[e]=!0}function E(){m("ready");var e=h;if(h=null,e)if(i)Promise.resolve().then(function(){return S(i)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in g)Object.prototype.hasOwnProperty.call(g,r)&&n.push(j(r));e.resolve(n)}}function S(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,t,o,i,s;function l(e){for(var n=[e],r={},t=n.map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),c=o.id,s=o.chain;if((i=k[c])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:c};if(i.hot._main)return{type:"unaccepted",chain:s,moduleId:c};for(var d=0;d<i.parents.length;d++){var a=i.parents[d],l=k[a];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:s.concat([a]),moduleId:c,parentId:a};-1===n.indexOf(a)&&(l.hot._acceptedDependencies[c]?(r[a]||(r[a]=[]),p(r[a],[c])):(delete r[a],n.push(a),t.push({chain:s.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function p(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var u={},h=[],y={},b=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var x in g)if(Object.prototype.hasOwnProperty.call(g,x)){var w;s=j(x);var _=!1,P=!1,E=!1,S="";switch((w=g[x]?l(s):{type:"disposed",moduleId:x}).chain&&(S="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":n.onDeclined&&n.onDeclined(w),n.ignoreDeclined||(_=new Error("Aborted because of self decline: "+w.moduleId+S));break;case"declined":n.onDeclined&&n.onDeclined(w),n.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+S));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(w),n.ignoreUnaccepted||(_=new Error("Aborted because "+s+" is not accepted"+S));break;case"accepted":n.onAccepted&&n.onAccepted(w),P=!0;break;case"disposed":n.onDisposed&&n.onDisposed(w),E=!0;break;default:throw new Error("Unexception type "+w.type)}if(_)return m("abort"),Promise.reject(_);if(P)for(s in y[s]=g[s],p(h,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,s)&&(u[s]||(u[s]=[]),p(u[s],w.outdatedDependencies[s]));E&&(p(h,[w.moduleId]),y[s]=b)}var D,H=[];for(t=0;t<h.length;t++)s=h[t],k[s]&&k[s].hot._selfAccepted&&y[s]!==b&&H.push({module:s,errorHandler:k[s].hot._selfAccepted});m("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete z[e]}(e)});for(var I,A,C=h.slice();C.length>0;)if(s=C.pop(),i=k[s]){var M={},L=i.hot._disposeHandlers;for(o=0;o<L.length;o++)(r=L[o])(M);for(d[s]=M,i.hot.active=!1,delete k[s],delete u[s],o=0;o<i.children.length;o++){var q=k[i.children[o]];q&&((D=q.parents.indexOf(s))>=0&&q.parents.splice(D,1))}}for(s in u)if(Object.prototype.hasOwnProperty.call(u,s)&&(i=k[s]))for(A=u[s],o=0;o<A.length;o++)I=A[o],(D=i.children.indexOf(I))>=0&&i.children.splice(D,1);for(s in m("apply"),c=v,y)Object.prototype.hasOwnProperty.call(y,s)&&(e[s]=y[s]);var G=null;for(s in u)if(Object.prototype.hasOwnProperty.call(u,s)&&(i=k[s])){A=u[s];var U=[];for(t=0;t<A.length;t++)if(I=A[t],r=i.hot._acceptedDependencies[I]){if(-1!==U.indexOf(r))continue;U.push(r)}for(t=0;t<U.length;t++){r=U[t];try{r(A)}catch(J){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:A[t],error:J}),n.ignoreErrored||G||(G=J)}}}for(t=0;t<H.length;t++){var R=H[t];s=R.module,a=[s];try{T(s)}catch(J){if("function"===typeof R.errorHandler)try{R.errorHandler(J)}catch(N){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:N,originalError:J}),n.ignoreErrored||G||(G=N),G||(G=J)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:J}),n.ignoreErrored||G||(G=J)}}return G?(m("fail"),Promise.reject(G)):(m("idle"),new Promise(function(e){e(h)}))}var k={},z={1:0},D=[],H=[];function I(e){return T.p+"static/js/"+({2:"src-docs-common-common-types",3:"src-docs-components-vertical",4:"src-docs-index",5:"src-docs-principles-sizing",6:"src-docs-principles-spacing"}[e]||e)+"."+{2:"53518810",3:"fb9ce58e",4:"72b6e0ec",5:"ce2dcac6",6:"dea18748"}[e]+".js"}function T(n){if(k[n])return k[n].exports;var r=k[n]={i:n,l:!1,exports:{},hot:p(n),parents:(l=a,a=[],l),children:[]};return e[n].call(r.exports,r,r.exports,function(e){var n=k[e];if(!n)return T;var r=function(r){return n.hot.active?(k[r]?-1===k[r].parents.indexOf(e)&&k[r].parents.push(e):(a=[e],o=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),T(r)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return T[e]},set:function(n){T[e]=n}}};for(var i in T)Object.prototype.hasOwnProperty.call(T,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,t(i));return r.e=function(e){return"ready"===f&&m("prepare"),b++,T.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===f&&(x[e]||P(e),0===b&&0===y&&E())}},r.t=function(e,n){return 1&n&&(e=r(e)),T.t(e,-2&n)},r}(n)),r.l=!0,r.exports}T.e=function(e){var n=[],r=z[e];if(0!==r)if(r)n.push(r[2]);else{var t=new Promise(function(n,t){r=z[e]=[n,t]});n.push(r[2]=t);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,T.nc&&i.setAttribute("nonce",T.nc),i.src=I(e),0!==i.src.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous");var c=new Error;o=function(n){i.onerror=i.onload=null,clearTimeout(s);var r=z[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",c.name="ChunkLoadError",c.type=t,c.request=o,r[1](c)}z[e]=void 0}};var s=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(n)},T.m=e,T.c=k,T.d=function(e,n,r){T.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},T.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},T.t=function(e,n){if(1&n&&(e=T(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(T.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)T.d(r,t,function(n){return e[n]}.bind(null,t));return r},T.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return T.d(n,"a",n),n},T.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},T.p="/gls/",T.oe=function(e){throw console.error(e),e},T.h=function(){return c};var A=window.webpackJsonp=window.webpackJsonp||[],C=A.push.bind(A);A.push=n,A=A.slice();for(var M=0;M<A.length;M++)n(A[M]);var L=C,q=(D.push([0,0]),r());n([[],{},0,[0,2,3,4,5,6]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"General Layout System","description":"General Layout System for React","menu":["General Layout System","Spacing principle","Sizing principle","Common Types and Props","Vertical"],"version":"0.0.2","repository":"https://github.com/basarat/gls","native":false,"codeSandbox":false,"themeConfig":{"footerText":"white","styles":{"playground":"\\n        padding: 0px;\\n        border: 8px solid #eeee;\\n      "}},"separator":"-","base":"/gls/","typescript":true,"indexHtml":"public/index.html"},"props":[],"entries":[{"key":"src/docs/index.mdx","value":{"name":"General Layout System","route":"/gls/","id":"13a8a147f67d34248cdc424d524520a5","filepath":"src/docs/index.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/index.mdx","slug":"src-docs-index","menu":"","headings":[{"slug":"general-layout-system","depth":1,"value":"General Layout System"},{"slug":"css-principles","depth":1,"value":"CSS principles"},{"slug":"components","depth":1,"value":"Components"}]}},{"key":"src/docs/common/commonTypes.mdx","value":{"name":"Common Types and Props","route":"/gls/common-types/","id":"13c18a8ec82ad14b369dfe2eee912845","filepath":"src/docs/common/commonTypes.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/common/commonTypes.mdx","slug":"src-docs-common-common-types","menu":"","headings":[{"slug":"common-types-and-props","depth":1,"value":"Common Types and Props"},{"slug":"boxunit","depth":2,"value":"BoxUnit"},{"slug":"boxset","depth":2,"value":"BoxSet"},{"slug":"glsprops","depth":2,"value":"GLSProps"},{"slug":"sizingprop","depth":2,"value":"SizingProp"}]}},{"key":"src/docs/components/vertical.mdx","value":{"name":"Vertical","route":"/gls/vertical/","id":"f8ac6a2f79769c9f700ddb843b273512","filepath":"src/docs/components/vertical.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/components/vertical.mdx","slug":"src-docs-components-vertical","menu":"","headings":[{"slug":"vertical","depth":1,"value":"Vertical"},{"slug":"props","depth":2,"value":"Props"},{"slug":"glsprops","depth":2,"value":"GLSProps"}]}},{"key":"src/docs/principles/sizing.mdx","value":{"name":"Sizing principle","route":"/gls/principle-sizing/","id":"44683086165ea8b7be7bd66ef69d85ae","filepath":"src/docs/principles/sizing.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/principles/sizing.mdx","slug":"src-docs-principles-sizing","menu":"","headings":[{"slug":"sizing","depth":1,"value":"Sizing"},{"slug":"explicit-sized","depth":2,"value":"Explicit sized"},{"slug":"flex-sized","depth":2,"value":"Flex sized"},{"slug":"content-sized","depth":1,"value":"Content sized"}]}},{"key":"src/docs/principles/spacing.mdx","value":{"name":"Spacing principle","route":"/gls/principle-spacing/","id":"9e1baa55deec4b22a603033aa5639ab6","filepath":"src/docs/principles/spacing.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/principles/spacing.mdx","slug":"src-docs-principles-spacing","menu":"","headings":[{"slug":"space","depth":1,"value":"Space"},{"slug":"spacing-principle","depth":2,"value":"Spacing principle"},{"slug":"issues-with-external-margins","depth":3,"value":"Issues with external margins"},{"slug":"how-to-do-space-correctly","depth":2,"value":"How to do space correctly"},{"slug":"space-among-children-spacing-prop","depth":3,"value":"Space among children:  spacing  prop"},{"slug":"space-at-the-border-padding-prop","depth":3,"value":"Space at the border:  padding  prop"}]}}]}')},"./.docz/app/index.jsx":function(e,n,r){"use strict";r.r(n);var t=r("./node_modules/react/index.js"),o=r.n(t),i=r("./node_modules/react-dom/index.js"),c=r.n(i),s=r("./node_modules/docz/dist/index.esm.js"),d=r("./node_modules/docz-theme-default/dist/index.esm.js"),a={"src/docs/index.mdx":function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"./src/docs/index.mdx"))},"src/docs/common/commonTypes.mdx":function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"./src/docs/common/commonTypes.mdx"))},"src/docs/components/vertical.mdx":function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"./src/docs/components/vertical.mdx"))},"src/docs/principles/sizing.mdx":function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"./src/docs/principles/sizing.mdx"))},"src/docs/principles/spacing.mdx":function(){return Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"./src/docs/principles/spacing.mdx"))}},l=r("./.docz/app/db.json"),p=function(){return o.a.createElement(d.a,{linkComponent:s.b,db:l},o.a.createElement(s.e,{imports:a}))},u=[],f=[],m=function(){return u.forEach(function(e){return e&&e()})},h=function(){return f.forEach(function(e){return e&&e()})},g=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;m(),c.a.render(o.a.createElement(e,null),g,h)}(p)},0:function(e,n,r){e.exports=r("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.2721503ff1a68661068b.js.map