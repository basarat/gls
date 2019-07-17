!function(e){function n(n){for(var t,o,c=n[0],a=n[1],s=n[2],i=n[3]||[],d=0,l=[];d<c.length;d++)o=c[d],S[o]&&l.push(S[o][0]),S[o]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);for(T&&T(n),I.push.apply(I,i);l.length;)l.shift()();return H.push.apply(H,s||[]),r()}function r(){for(var e,n=0;n<H.length;n++){for(var r=H[n],t=!0,o=1;o<r.length;o++){var c=r[o];0!==S[c]&&(t=!1)}t&&(H.splice(n--,1),e=M(M.s=r[0]))}return 0===H.length&&(I.forEach(function(e){if(void 0===S[e]){S[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",M.nc&&n.setAttribute("nonce",M.nc),n.rel="prefetch",n.as="script",n.href=A(e),document.head.appendChild(n)}}),I.length=0),e}var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!O[e]||!w[e])return;for(var r in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(v[r]=n[r]);0===--y&&0===x&&P()}(e,n),t&&t(e,n)};var o,c=!0,a="c4ae55145461c8834c4d",s=1e4,i={},d=[],l=[];function p(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:_,apply:D,status:function(e){if(!e)return f;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var n=u.indexOf(e);n>=0&&u.splice(n,1)},data:i[e]};return o=void 0,n}var u=[],f="idle";function h(e){f=e;for(var n=0;n<u.length;n++)u[n].call(null,e)}var m,v,g,y=0,x=0,b={},w={},O={};function j(e){return+e+""===e?+e:e}function _(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return c=e,h("check"),(n=s,n=n||1e4,new Promise(function(e,r){if("undefined"===typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,o=M.p+""+a+".hot-update.json";t.open("GET",o,!0),t.timeout=n,t.send(null)}catch(c){return r(c)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+o+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+o+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(c){return void r(c)}e(n)}}})).then(function(e){if(!e)return h("idle"),null;w={},b={},O=e.c,g=e.h,h("prepare");var n=new Promise(function(e,n){m={resolve:e,reject:n}});for(var r in v={},S)E(r);return"prepare"===f&&0===x&&0===y&&P(),n});var n}function E(e){O[e]?(w[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=M.p+""+e+"."+a+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):b[e]=!0}function P(){h("ready");var e=m;if(m=null,e)if(c)Promise.resolve().then(function(){return D(c)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&n.push(j(r));e.resolve(n)}}function D(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,t,o,c,s;function l(e){for(var n=[e],r={},t=n.map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),a=o.id,s=o.chain;if((c=k[a])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:a};if(c.hot._main)return{type:"unaccepted",chain:s,moduleId:a};for(var i=0;i<c.parents.length;i++){var d=c.parents[i],l=k[d];if(l){if(l.hot._declinedDependencies[a])return{type:"declined",chain:s.concat([d]),moduleId:a,parentId:d};-1===n.indexOf(d)&&(l.hot._acceptedDependencies[a]?(r[d]||(r[d]=[]),p(r[d],[a])):(delete r[d],n.push(d),t.push({chain:s.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function p(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var u={},m=[],y={},x=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var b in v)if(Object.prototype.hasOwnProperty.call(v,b)){var w;s=j(b);var _=!1,E=!1,P=!1,D="";switch((w=v[b]?l(s):{type:"disposed",moduleId:b}).chain&&(D="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":n.onDeclined&&n.onDeclined(w),n.ignoreDeclined||(_=new Error("Aborted because of self decline: "+w.moduleId+D));break;case"declined":n.onDeclined&&n.onDeclined(w),n.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+D));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(w),n.ignoreUnaccepted||(_=new Error("Aborted because "+s+" is not accepted"+D));break;case"accepted":n.onAccepted&&n.onAccepted(w),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(w),P=!0;break;default:throw new Error("Unexception type "+w.type)}if(_)return h("abort"),Promise.reject(_);if(E)for(s in y[s]=v[s],p(m,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,s)&&(u[s]||(u[s]=[]),p(u[s],w.outdatedDependencies[s]));P&&(p(m,[w.moduleId]),y[s]=x)}var H,I=[];for(t=0;t<m.length;t++)s=m[t],k[s]&&k[s].hot._selfAccepted&&y[s]!==x&&I.push({module:s,errorHandler:k[s].hot._selfAccepted});h("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete S[e]}(e)});for(var A,L,q=m.slice();q.length>0;)if(s=q.pop(),c=k[s]){var C={},T=c.hot._disposeHandlers;for(o=0;o<T.length;o++)(r=T[o])(C);for(i[s]=C,c.hot.active=!1,delete k[s],delete u[s],o=0;o<c.children.length;o++){var U=k[c.children[o]];U&&((H=U.parents.indexOf(s))>=0&&U.parents.splice(H,1))}}for(s in u)if(Object.prototype.hasOwnProperty.call(u,s)&&(c=k[s]))for(L=u[s],o=0;o<L.length;o++)A=L[o],(H=c.children.indexOf(A))>=0&&c.children.splice(H,1);for(s in h("apply"),a=g,y)Object.prototype.hasOwnProperty.call(y,s)&&(e[s]=y[s]);var z=null;for(s in u)if(Object.prototype.hasOwnProperty.call(u,s)&&(c=k[s])){L=u[s];var G=[];for(t=0;t<L.length;t++)if(A=L[t],r=c.hot._acceptedDependencies[A]){if(-1!==G.indexOf(r))continue;G.push(r)}for(t=0;t<G.length;t++){r=G[t];try{r(L)}catch(J){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:L[t],error:J}),n.ignoreErrored||z||(z=J)}}}for(t=0;t<I.length;t++){var R=I[t];s=R.module,d=[s];try{M(s)}catch(J){if("function"===typeof R.errorHandler)try{R.errorHandler(J)}catch(F){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:F,originalError:J}),n.ignoreErrored||z||(z=F),z||(z=J)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:J}),n.ignoreErrored||z||(z=J)}}return z?(h("fail"),Promise.reject(z)):(h("idle"),new Promise(function(e){e(m)}))}var k={},S={1:0},H=[],I=[];function A(e){return M.p+"static/js/"+({2:"src-docs-concepts-flex",3:"src-docs-concepts-space",4:"src-docs-index",5:"src-docs-vertical"}[e]||e)+"."+{2:"1e888aa5",3:"7f19bca2",4:"76c8eecc",5:"ea2082f9"}[e]+".js"}function M(n){if(k[n])return k[n].exports;var r=k[n]={i:n,l:!1,exports:{},hot:p(n),parents:(l=d,d=[],l),children:[]};return e[n].call(r.exports,r,r.exports,function(e){var n=k[e];if(!n)return M;var r=function(r){return n.hot.active?(k[r]?-1===k[r].parents.indexOf(e)&&k[r].parents.push(e):(d=[e],o=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),d=[]),M(r)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return M[e]},set:function(n){M[e]=n}}};for(var c in M)Object.prototype.hasOwnProperty.call(M,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(r,c,t(c));return r.e=function(e){return"ready"===f&&h("prepare"),x++,M.e(e).then(n,function(e){throw n(),e});function n(){x--,"prepare"===f&&(b[e]||E(e),0===x&&0===y&&P())}},r.t=function(e,n){return 1&n&&(e=r(e)),M.t(e,-2&n)},r}(n)),r.l=!0,r.exports}M.e=function(e){var n=[],r=S[e];if(0!==r)if(r)n.push(r[2]);else{var t=new Promise(function(n,t){r=S[e]=[n,t]});n.push(r[2]=t);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,M.nc&&c.setAttribute("nonce",M.nc),c.src=A(e),0!==c.src.indexOf(window.location.origin+"/")&&(c.crossOrigin="anonymous");var a=new Error;o=function(n){c.onerror=c.onload=null,clearTimeout(s);var r=S[e];if(0!==r){if(r){var t=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+t+": "+o+")",a.name="ChunkLoadError",a.type=t,a.request=o,r[1](a)}S[e]=void 0}};var s=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(n)},M.m=e,M.c=k,M.d=function(e,n,r){M.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},M.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},M.t=function(e,n){if(1&n&&(e=M(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(M.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)M.d(r,t,function(n){return e[n]}.bind(null,t));return r},M.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return M.d(n,"a",n),n},M.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},M.p="/gls/",M.oe=function(e){throw console.error(e),e},M.h=function(){return a};var L=window.webpackJsonp=window.webpackJsonp||[],q=L.push.bind(L);L.push=n,L=L.slice();for(var C=0;C<L.length;C++)n(L[C]);var T=q,U=(H.push([0,0]),r());n([[],{},0,[0,2,3,4,5]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"General Layout System","description":"General Layout System for React","menu":["General Layout System","Space","Flex"],"version":"0.0.2","repository":"https://github.com/basarat/gls","native":false,"codeSandbox":false,"themeConfig":{"footerText":"white","styles":{"playground":"\\n        padding: 0px;\\n        border: 8px solid #eeee;\\n      "}},"separator":"-","base":"/gls/","typescript":true,"indexHtml":"public/index.html"},"props":[],"entries":[{"key":"src/docs/index.mdx","value":{"name":"General Layout System","route":"/gls/","id":"13a8a147f67d34248cdc424d524520a5","filepath":"src/docs/index.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/index.mdx","slug":"src-docs-index","menu":"","headings":[{"slug":"general-layout-system","depth":1,"value":"General Layout System"},{"slug":"css-concepts","depth":1,"value":"CSS concepts"},{"slug":"external-airspace","depth":2,"value":"External Airspace"},{"slug":"internal-airspace","depth":2,"value":"Internal Airspace"},{"slug":"flexible-expansion","depth":2,"value":"Flexible expansion"},{"slug":"components","depth":1,"value":"Components"}]}},{"key":"src/docs/vertical.mdx","value":{"name":"Vertical","route":"/gls/vertical/","id":"0faec0cc606d516c98aa853e17005b28","filepath":"src/docs/vertical.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/vertical.mdx","slug":"src-docs-vertical","menu":"","headings":[{"slug":"vertical","depth":1,"value":"Vertical"}]}},{"key":"src/docs/concepts/flex.mdx","value":{"name":"Flex","route":"/gls/flex/","id":"d225870474536d5e5de76931686fa2d0","filepath":"src/docs/concepts/flex.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/concepts/flex.mdx","slug":"src-docs-concepts-flex","menu":"","headings":[]}},{"key":"src/docs/concepts/space.mdx","value":{"name":"Space","route":"/gls/space/","id":"d73a1eb0230194e952efe8da2b4e8bfd","filepath":"src/docs/concepts/space.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/concepts/space.mdx","slug":"src-docs-concepts-space","menu":"","headings":[{"slug":"space","depth":1,"value":"Space"},{"slug":"external-space","depth":2,"value":"External space"},{"slug":"issues-with-external-margins","depth":3,"value":"Issues with external margins"},{"slug":"how-to-do-space-correctly","depth":2,"value":"How to do space correctly"},{"slug":"space-among-children-spacing-prop","depth":3,"value":"Space among children:  spacing  prop"},{"slug":"space-at-the-border-padding-prop","depth":3,"value":"Space at the border:  padding  prop"}]}}]}')},"./.docz/app/index.jsx":function(e,n,r){"use strict";r.r(n);var t=r("./node_modules/react/index.js"),o=r.n(t),c=r("./node_modules/react-dom/index.js"),a=r.n(c),s=r("./node_modules/docz/dist/index.esm.js"),i=r("./node_modules/docz-theme-default/dist/index.esm.js"),d={"src/docs/index.mdx":function(){return Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"./src/docs/index.mdx"))},"src/docs/vertical.mdx":function(){return Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"./src/docs/vertical.mdx"))},"src/docs/concepts/flex.mdx":function(){return Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"./src/docs/concepts/flex.mdx"))},"src/docs/concepts/space.mdx":function(){return Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"./src/docs/concepts/space.mdx"))}},l=r("./.docz/app/db.json"),p=function(){return o.a.createElement(i.a,{linkComponent:s.b,db:l},o.a.createElement(s.e,{imports:d}))},u=[],f=[],h=function(){return u.forEach(function(e){return e&&e()})},m=function(){return f.forEach(function(e){return e&&e()})},v=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;h(),a.a.render(o.a.createElement(e,null),v,m)}(p)},0:function(e,n,r){e.exports=r("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.c4ae55145461c8834c4d.js.map