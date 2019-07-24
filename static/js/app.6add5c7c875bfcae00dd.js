!function(e){function n(n){for(var o,r,t=n[0],c=n[1],i=n[2],a=n[3]||[],d=0,l=[];d<t.length;d++)r=t[d],_[r]&&l.push(_[r][0]),_[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(L&&L(n),H.push.apply(H,a);l.length;)l.shift()();return D.push.apply(D,i||[]),s()}function s(){for(var e,n=0;n<D.length;n++){for(var s=D[n],o=!0,r=1;r<s.length;r++){var t=s[r];0!==_[t]&&(o=!1)}o&&(D.splice(n--,1),e=I(I.s=s[0]))}return 0===D.length&&(H.forEach(function(e){if(void 0===_[e]){_[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",I.nc&&n.setAttribute("nonce",I.nc),n.rel="prefetch",n.as="script",n.href=C(e),document.head.appendChild(n)}}),H.length=0),e}var o=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!z[e]||!P[e])return;for(var s in P[e]=!1,n)Object.prototype.hasOwnProperty.call(n,s)&&(g[s]=n[s]);0===--b&&0===y&&O()}(e,n),o&&o(e,n)};var r,t=!0,c="6add5c7c875bfcae00dd",i=1e4,a={},d=[],l=[];function p(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,s){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var o=0;o<e.length;o++)n._acceptedDependencies[e[o]]=s||function(){};else n._acceptedDependencies[e]=s||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var s=0;s<e.length;s++)n._declinedDependencies[e[s]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var s=n._disposeHandlers.indexOf(e);s>=0&&n._disposeHandlers.splice(s,1)},check:w,apply:j,status:function(e){if(!e)return m;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var n=u.indexOf(e);n>=0&&u.splice(n,1)},data:a[e]};return r=void 0,n}var u=[],m="idle";function f(e){m=e;for(var n=0;n<u.length;n++)u[n].call(null,e)}var h,g,v,b=0,y=0,x={},P={},z={};function S(e){return+e+""===e?+e:e}function w(e){if("idle"!==m)throw new Error("check() is only allowed in idle status");return t=e,f("check"),(n=i,n=n||1e4,new Promise(function(e,s){if("undefined"===typeof XMLHttpRequest)return s(new Error("No browser support"));try{var o=new XMLHttpRequest,r=I.p+""+c+".hot-update.json";o.open("GET",r,!0),o.timeout=n,o.send(null)}catch(t){return s(t)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)s(new Error("Manifest request to "+r+" timed out."));else if(404===o.status)e();else if(200!==o.status&&304!==o.status)s(new Error("Manifest request to "+r+" failed."));else{try{var n=JSON.parse(o.responseText)}catch(t){return void s(t)}e(n)}}})).then(function(e){if(!e)return f("idle"),null;P={},x={},z=e.c,v=e.h,f("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});for(var s in g={},_)k(s);return"prepare"===m&&0===y&&0===b&&O(),n});var n}function k(e){z[e]?(P[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=I.p+""+e+"."+c+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):x[e]=!0}function O(){f("ready");var e=h;if(h=null,e)if(t)Promise.resolve().then(function(){return j(t)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var s in g)Object.prototype.hasOwnProperty.call(g,s)&&n.push(S(s));e.resolve(n)}}function j(n){if("ready"!==m)throw new Error("apply() is only allowed in ready status");var s,o,r,t,i;function l(e){for(var n=[e],s={},o=n.map(function(e){return{chain:[e],id:e}});o.length>0;){var r=o.pop(),c=r.id,i=r.chain;if((t=E[c])&&!t.hot._selfAccepted){if(t.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(t.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var a=0;a<t.parents.length;a++){var d=t.parents[a],l=E[d];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([d]),moduleId:c,parentId:d};-1===n.indexOf(d)&&(l.hot._acceptedDependencies[c]?(s[d]||(s[d]=[]),p(s[d],[c])):(delete s[d],n.push(d),o.push({chain:i.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:s}}function p(e,n){for(var s=0;s<n.length;s++){var o=n[s];-1===e.indexOf(o)&&e.push(o)}}n=n||{};var u={},h=[],b={},y=function(){console.warn("[HMR] unexpected require("+P.moduleId+") to disposed module")};for(var x in g)if(Object.prototype.hasOwnProperty.call(g,x)){var P;i=S(x);var w=!1,k=!1,O=!1,j="";switch((P=g[x]?l(i):{type:"disposed",moduleId:x}).chain&&(j="\nUpdate propagation: "+P.chain.join(" -> ")),P.type){case"self-declined":n.onDeclined&&n.onDeclined(P),n.ignoreDeclined||(w=new Error("Aborted because of self decline: "+P.moduleId+j));break;case"declined":n.onDeclined&&n.onDeclined(P),n.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+P.moduleId+" in "+P.parentId+j));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(P),n.ignoreUnaccepted||(w=new Error("Aborted because "+i+" is not accepted"+j));break;case"accepted":n.onAccepted&&n.onAccepted(P),k=!0;break;case"disposed":n.onDisposed&&n.onDisposed(P),O=!0;break;default:throw new Error("Unexception type "+P.type)}if(w)return f("abort"),Promise.reject(w);if(k)for(i in b[i]=g[i],p(h,P.outdatedModules),P.outdatedDependencies)Object.prototype.hasOwnProperty.call(P.outdatedDependencies,i)&&(u[i]||(u[i]=[]),p(u[i],P.outdatedDependencies[i]));O&&(p(h,[P.moduleId]),b[i]=y)}var D,H=[];for(o=0;o<h.length;o++)i=h[o],E[i]&&E[i].hot._selfAccepted&&b[i]!==y&&H.push({module:i,errorHandler:E[i].hot._selfAccepted});f("dispose"),Object.keys(z).forEach(function(e){!1===z[e]&&function(e){delete _[e]}(e)});for(var C,T,A=h.slice();A.length>0;)if(i=A.pop(),t=E[i]){var M={},L=t.hot._disposeHandlers;for(r=0;r<L.length;r++)(s=L[r])(M);for(a[i]=M,t.hot.active=!1,delete E[i],delete u[i],r=0;r<t.children.length;r++){var B=E[t.children[r]];B&&((D=B.parents.indexOf(i))>=0&&B.parents.splice(D,1))}}for(i in u)if(Object.prototype.hasOwnProperty.call(u,i)&&(t=E[i]))for(T=u[i],r=0;r<T.length;r++)C=T[r],(D=t.children.indexOf(C))>=0&&t.children.splice(D,1);for(i in f("apply"),c=v,b)Object.prototype.hasOwnProperty.call(b,i)&&(e[i]=b[i]);var G=null;for(i in u)if(Object.prototype.hasOwnProperty.call(u,i)&&(t=E[i])){T=u[i];var q=[];for(o=0;o<T.length;o++)if(C=T[o],s=t.hot._acceptedDependencies[C]){if(-1!==q.indexOf(s))continue;q.push(s)}for(o=0;o<q.length;o++){s=q[o];try{s(T)}catch(U){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:i,dependencyId:T[o],error:U}),n.ignoreErrored||G||(G=U)}}}for(o=0;o<H.length;o++){var R=H[o];i=R.module,d=[i];try{I(i)}catch(U){if("function"===typeof R.errorHandler)try{R.errorHandler(U)}catch(F){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:F,originalError:U}),n.ignoreErrored||G||(G=F),G||(G=U)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:i,error:U}),n.ignoreErrored||G||(G=U)}}return G?(f("fail"),Promise.reject(G)):(f("idle"),new Promise(function(e){e(h)}))}var E={},_={2:0},D=[],H=[];function C(e){return I.p+"static/js/"+({1:"src-docs-common-common-types~src-docs-common-defaults~src-docs-components-containers~src-docs-compon~ba99315c",3:"src-docs-common-common-types",4:"src-docs-common-defaults",5:"src-docs-components-containers",6:"src-docs-components-grid",7:"src-docs-components-horizontal",8:"src-docs-components-responsive",9:"src-docs-components-spacers",10:"src-docs-components-vertical",11:"src-docs-examples-layouts",12:"src-docs-index",13:"src-docs-principles-scrolling",14:"src-docs-principles-sizing",15:"src-docs-principles-spacing"}[e]||e)+"."+{1:"4c6e42fb",3:"87d5bffa",4:"4f3e5314",5:"d75aa74d",6:"60f5d69d",7:"48bf1a28",8:"6a0d4644",9:"68d50eef",10:"522fb9ce",11:"66a14fdb",12:"67ba2647",13:"7384d0cd",14:"a13a7450",15:"7dfadccb"}[e]+".js"}function I(n){if(E[n])return E[n].exports;var s=E[n]={i:n,l:!1,exports:{},hot:p(n),parents:(l=d,d=[],l),children:[]};return e[n].call(s.exports,s,s.exports,function(e){var n=E[e];if(!n)return I;var s=function(s){return n.hot.active?(E[s]?-1===E[s].parents.indexOf(e)&&E[s].parents.push(e):(d=[e],r=s),-1===n.children.indexOf(s)&&n.children.push(s)):(console.warn("[HMR] unexpected require("+s+") from disposed module "+e),d=[]),I(s)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(n){I[e]=n}}};for(var t in I)Object.prototype.hasOwnProperty.call(I,t)&&"e"!==t&&"t"!==t&&Object.defineProperty(s,t,o(t));return s.e=function(e){return"ready"===m&&f("prepare"),y++,I.e(e).then(n,function(e){throw n(),e});function n(){y--,"prepare"===m&&(x[e]||k(e),0===y&&0===b&&O())}},s.t=function(e,n){return 1&n&&(e=s(e)),I.t(e,-2&n)},s}(n)),s.l=!0,s.exports}I.e=function(e){var n=[],s=_[e];if(0!==s)if(s)n.push(s[2]);else{var o=new Promise(function(n,o){s=_[e]=[n,o]});n.push(s[2]=o);var r,t=document.createElement("script");t.charset="utf-8",t.timeout=120,I.nc&&t.setAttribute("nonce",I.nc),t.src=C(e),0!==t.src.indexOf(window.location.origin+"/")&&(t.crossOrigin="anonymous");var c=new Error;r=function(n){t.onerror=t.onload=null,clearTimeout(i);var s=_[e];if(0!==s){if(s){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",c.name="ChunkLoadError",c.type=o,c.request=r,s[1](c)}_[e]=void 0}};var i=setTimeout(function(){r({type:"timeout",target:t})},12e4);t.onerror=t.onload=r,document.head.appendChild(t)}return Promise.all(n)},I.m=e,I.c=E,I.d=function(e,n,s){I.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},I.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},I.t=function(e,n){if(1&n&&(e=I(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(I.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)I.d(s,o,function(n){return e[n]}.bind(null,o));return s},I.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(n,"a",n),n},I.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},I.p="/gls/",I.oe=function(e){throw console.error(e),e},I.h=function(){return c};var T=window.webpackJsonp=window.webpackJsonp||[],A=T.push.bind(T);T.push=n,T=T.slice();for(var M=0;M<T.length;M++)n(T[M]);var L=A,B=(D.push([0,0]),s());n([[],{},0,[0,1,3,4,5,6,7,8,9,10,11,13,14,15,12]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"General Layout System","description":"General Layout System for React","menu":["General Layout System","Spacing principle","Sizing principle","Scrolling principle","Common Types and Props","Defaults","Vertical","Horizontal","Responsive","Grid","Spacers","Containers","Example Layouts"],"version":"0.0.2","repository":"https://github.com/basarat/gls","native":false,"codeSandbox":false,"themeConfig":{"footerText":"white","styles":{"playground":"\\n        padding: 0px;\\n        border: 8px solid #eeee;\\n      "}},"separator":"-","base":"/gls/","typescript":true,"indexHtml":"public/index.html"},"props":[],"entries":[{"key":"src/docs/index.mdx","value":{"name":"General Layout System","route":"/gls/","id":"13a8a147f67d34248cdc424d524520a5","filepath":"src/docs/index.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/index.mdx","slug":"src-docs-index","menu":"","headings":[{"slug":"general-layout-system","depth":1,"value":"General Layout System"},{"slug":"installation","depth":1,"value":"Installation"},{"slug":"css-principles","depth":1,"value":"CSS principles"},{"slug":"components","depth":1,"value":"Components"}]}},{"key":"src/docs/common/commonTypes.mdx","value":{"name":"Common Types and Props","route":"/gls/common-types/","id":"13c18a8ec82ad14b369dfe2eee912845","filepath":"src/docs/common/commonTypes.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/common/commonTypes.mdx","slug":"src-docs-common-common-types","menu":"","headings":[{"slug":"common-types","depth":1,"value":"Common Types"},{"slug":"csslength","depth":2,"value":"CSSLength"},{"slug":"cssbox","depth":2,"value":"CSSBox"},{"slug":"common-props","depth":1,"value":"Common Props"},{"slug":"spacingprop","depth":2,"value":"SpacingProp"},{"slug":"sizeprops","depth":2,"value":"SizeProps"},{"slug":"sizingprop","depth":2,"value":"SizingProp"},{"slug":"paddingprop","depth":2,"value":"PaddingProp"},{"slug":"scrollprop","depth":2,"value":"ScrollProp"},{"slug":"stylesprop","depth":2,"value":"StylesProp"},{"slug":"styleprop","depth":2,"value":"StyleProp"},{"slug":"classnameprop","depth":2,"value":"ClassNameProp"},{"slug":"tagprops","depth":2,"value":"TagProps"},{"slug":"baseprops","depth":2,"value":"BaseProps"}]}},{"key":"src/docs/common/defaults.mdx","value":{"name":"Defaults","route":"/gls/defaults/","id":"661311e45d9c8e8d71d5df22c4a556f2","filepath":"src/docs/common/defaults.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/common/defaults.mdx","slug":"src-docs-common-defaults","menu":"","headings":[{"slug":"defaults","depth":1,"value":"Defaults"},{"slug":"usage-by-components","depth":2,"value":"Usage by components"},{"slug":"configuring","depth":2,"value":"Configuring"}]}},{"key":"src/docs/components/containers.mdx","value":{"name":"Containers","route":"/gls/containers/","id":"cfada1e7aee4c5c18406af6fb3d83cd8","filepath":"src/docs/components/containers.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/components/containers.mdx","slug":"src-docs-components-containers","menu":"","headings":[{"slug":"containers","depth":1,"value":"Containers"},{"slug":"flex","depth":2,"value":"Flex"},{"slug":"content","depth":2,"value":"Content"},{"slug":"baseprops","depth":2,"value":"BaseProps"},{"slug":"alignment","depth":2,"value":"Alignment"},{"slug":"example-use-case-table","depth":2,"value":"Example use case: Table"}]}},{"key":"src/docs/components/grid.mdx","value":{"name":"Grid","route":"/gls/grid/","id":"455acc7f6e05ca693413235cbf25c4a8","filepath":"src/docs/components/grid.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/components/grid.mdx","slug":"src-docs-components-grid","menu":"","headings":[{"slug":"grid","depth":1,"value":"Grid"},{"slug":"spacing","depth":2,"value":"Spacing"},{"slug":"justify","depth":2,"value":"Justify"},{"slug":"baseprops","depth":2,"value":"BaseProps"},{"slug":"sizingprop","depth":2,"value":"SizingProp"}]}},{"key":"src/docs/components/horizontal.mdx","value":{"name":"Horizontal","route":"/gls/horizontal/","id":"4acb417cffd79e9701536009e458f0c1","filepath":"src/docs/components/horizontal.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/components/horizontal.mdx","slug":"src-docs-components-horizontal","menu":"","headings":[{"slug":"horizontal","depth":1,"value":"Horizontal"},{"slug":"alignment","depth":2,"value":"Alignment"},{"slug":"spacing","depth":2,"value":"Spacing"},{"slug":"baseprops","depth":2,"value":"BaseProps"},{"slug":"sizingprop","depth":2,"value":"SizingProp"}]}},{"key":"src/docs/components/responsive.mdx","value":{"name":"Responsive","route":"/gls/responsive/","id":"4f8cf3675c9d2b25af6da2385c6744d6","filepath":"src/docs/components/responsive.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/components/responsive.mdx","slug":"src-docs-components-responsive","menu":"","headings":[{"slug":"responsive","depth":1,"value":"Responsive"},{"slug":"baseprops","depth":2,"value":"BaseProps"},{"slug":"sizingprop","depth":2,"value":"SizingProp"}]}},{"key":"src/docs/components/spacers.mdx","value":{"name":"Spacers","route":"/gls/spacers/","id":"4901eed8f8911371ffa601d78cb393ec","filepath":"src/docs/components/spacers.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/components/spacers.mdx","slug":"src-docs-components-spacers","menu":"","headings":[{"slug":"spacer","depth":1,"value":"Spacer"},{"slug":"horizontalspacer","depth":1,"value":"HorizontalSpacer"},{"slug":"verticalspacer","depth":1,"value":"VerticalSpacer"},{"slug":"flexspacer","depth":1,"value":"FlexSpacer"}]}},{"key":"src/docs/components/vertical.mdx","value":{"name":"Vertical","route":"/gls/vertical/","id":"f8ac6a2f79769c9f700ddb843b273512","filepath":"src/docs/components/vertical.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/components/vertical.mdx","slug":"src-docs-components-vertical","menu":"","headings":[{"slug":"vertical","depth":1,"value":"Vertical"},{"slug":"alignment","depth":2,"value":"Alignment"},{"slug":"spacing","depth":2,"value":"Spacing"},{"slug":"baseprops","depth":2,"value":"BaseProps"},{"slug":"sizingprop","depth":2,"value":"SizingProp"}]}},{"key":"src/docs/examples/layouts.mdx","value":{"name":"Example Layouts","route":"/gls/example-layouts/","id":"306e0d968dc49e34c6606a3f5d5fc44d","filepath":"src/docs/examples/layouts.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/examples/layouts.mdx","slug":"src-docs-examples-layouts","menu":"","headings":[{"slug":"examples","depth":1,"value":"Examples"},{"slug":"header-body-footer","depth":2,"value":"Header Body Footer"},{"slug":"header-sidebar-body-sidebar-footer","depth":2,"value":"Header Sidebar Body Sidebar Footer"}]}},{"key":"src/docs/principles/scrolling.mdx","value":{"name":"Scrolling principle","route":"/gls/principle-scrolling/","id":"dcf73b7a1869ce15a640bf339e55086f","filepath":"src/docs/principles/scrolling.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/principles/scrolling.mdx","slug":"src-docs-principles-scrolling","menu":"","headings":[{"slug":"scrolling","depth":1,"value":"Scrolling"},{"slug":"overflow","depth":2,"value":"overflow"},{"slug":"both--vertical--horizontal","depth":2,"value":"both | vertical | horizontal"},{"slug":"hidden","depth":2,"value":"hidden"}]}},{"key":"src/docs/principles/sizing.mdx","value":{"name":"Sizing principle","route":"/gls/principle-sizing/","id":"44683086165ea8b7be7bd66ef69d85ae","filepath":"src/docs/principles/sizing.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/principles/sizing.mdx","slug":"src-docs-principles-sizing","menu":"","headings":[{"slug":"sizing","depth":1,"value":"Sizing"},{"slug":"sizeprops-explicit-size","depth":2,"value":"SizeProps (Explicit size)"},{"slug":"sizingprop-implicit-sizing","depth":2,"value":"SizingProp (Implicit sizing)"},{"slug":"content-sized","depth":3,"value":"Content sized"},{"slug":"flex-sized","depth":3,"value":"Flex sized"},{"slug":"flex-sized-ratios","depth":3,"value":"Flex sized ratios"},{"slug":"mixing","depth":2,"value":"Mixing"}]}},{"key":"src/docs/principles/spacing.mdx","value":{"name":"Spacing principle","route":"/gls/principle-spacing/","id":"9e1baa55deec4b22a603033aa5639ab6","filepath":"src/docs/principles/spacing.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/principles/spacing.mdx","slug":"src-docs-principles-spacing","menu":"","headings":[{"slug":"space","depth":1,"value":"Space"},{"slug":"spacing-principle","depth":2,"value":"Spacing principle"},{"slug":"issues-with-external-margins","depth":3,"value":"Issues with external margins"},{"slug":"how-to-do-space-correctly","depth":2,"value":"How to do space correctly"},{"slug":"space-among-children-the-spacing-prop","depth":3,"value":"Space among children: the  spacing  prop"},{"slug":"space-at-the-border-the-padding-prop","depth":3,"value":"Space at the border: the  padding  prop"}]}}]}')},"./.docz/app/index.jsx":function(e,n,s){"use strict";s.r(n);var o=s("./node_modules/react/index.js"),r=s.n(o),t=s("./node_modules/react-dom/index.js"),c=s.n(t),i=s("./node_modules/docz/dist/index.esm.js"),a=s("./node_modules/docz-theme-default/dist/index.esm.js"),d={"src/docs/index.mdx":function(){return Promise.all([s.e(0),s.e(12)]).then(s.bind(null,"./src/docs/index.mdx"))},"src/docs/common/commonTypes.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(3)]).then(s.bind(null,"./src/docs/common/commonTypes.mdx"))},"src/docs/common/defaults.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(4)]).then(s.bind(null,"./src/docs/common/defaults.mdx"))},"src/docs/components/containers.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(5)]).then(s.bind(null,"./src/docs/components/containers.mdx"))},"src/docs/components/grid.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(6)]).then(s.bind(null,"./src/docs/components/grid.mdx"))},"src/docs/components/horizontal.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(7)]).then(s.bind(null,"./src/docs/components/horizontal.mdx"))},"src/docs/components/responsive.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(8)]).then(s.bind(null,"./src/docs/components/responsive.mdx"))},"src/docs/components/spacers.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(9)]).then(s.bind(null,"./src/docs/components/spacers.mdx"))},"src/docs/components/vertical.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(10)]).then(s.bind(null,"./src/docs/components/vertical.mdx"))},"src/docs/examples/layouts.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(11)]).then(s.bind(null,"./src/docs/examples/layouts.mdx"))},"src/docs/principles/scrolling.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(13)]).then(s.bind(null,"./src/docs/principles/scrolling.mdx"))},"src/docs/principles/sizing.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(14)]).then(s.bind(null,"./src/docs/principles/sizing.mdx"))},"src/docs/principles/spacing.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(15)]).then(s.bind(null,"./src/docs/principles/spacing.mdx"))}},l=s("./.docz/app/db.json"),p=function(){return r.a.createElement(a.a,{linkComponent:i.b,db:l},r.a.createElement(i.d,{imports:d}))},u=[],m=[],f=function(){return u.forEach(function(e){return e&&e()})},h=function(){return m.forEach(function(e){return e&&e()})},g=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;f(),c.a.render(r.a.createElement(e,null),g,h)}(p)},0:function(e,n,s){e.exports=s("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.6add5c7c875bfcae00dd.js.map