!function(e){function n(n){for(var o,t,r=n[0],c=n[1],i=n[2],a=n[3]||[],d=0,l=[];d<r.length;d++)t=r[d],_[t]&&l.push(_[t][0]),_[t]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(M&&M(n),C.push.apply(C,a);l.length;)l.shift()();return D.push.apply(D,i||[]),s()}function s(){for(var e,n=0;n<D.length;n++){for(var s=D[n],o=!0,t=1;t<s.length;t++){var r=s[t];0!==_[r]&&(o=!1)}o&&(D.splice(n--,1),e=I(I.s=s[0]))}return 0===D.length&&(C.forEach(function(e){if(void 0===_[e]){_[e]=null;var n=document.createElement("link");n.crossOrigin="anonymous",I.nc&&n.setAttribute("nonce",I.nc),n.rel="prefetch",n.as="script",n.href=H(e),document.head.appendChild(n)}}),C.length=0),e}var o=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!w[e]||!P[e])return;for(var s in P[e]=!1,n)Object.prototype.hasOwnProperty.call(n,s)&&(f[s]=n[s]);0===--b&&0===y&&O()}(e,n),o&&o(e,n)};var t,r=!0,c="30acb5aac309007575ea",i=1e4,a={},d=[],l=[];function p(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,s){if(void 0===e)n._selfAccepted=!0;else if("function"===typeof e)n._selfAccepted=e;else if("object"===typeof e)for(var o=0;o<e.length;o++)n._acceptedDependencies[e[o]]=s||function(){};else n._acceptedDependencies[e]=s||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"===typeof e)for(var s=0;s<e.length;s++)n._declinedDependencies[e[s]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var s=n._disposeHandlers.indexOf(e);s>=0&&n._disposeHandlers.splice(s,1)},check:S,apply:j,status:function(e){if(!e)return m;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var n=u.indexOf(e);n>=0&&u.splice(n,1)},data:a[e]};return t=void 0,n}var u=[],m="idle";function g(e){m=e;for(var n=0;n<u.length;n++)u[n].call(null,e)}var h,f,v,b=0,y=0,x={},P={},w={};function z(e){return+e+""===e?+e:e}function S(e){if("idle"!==m)throw new Error("check() is only allowed in idle status");return r=e,g("check"),(n=i,n=n||1e4,new Promise(function(e,s){if("undefined"===typeof XMLHttpRequest)return s(new Error("No browser support"));try{var o=new XMLHttpRequest,t=I.p+""+c+".hot-update.json";o.open("GET",t,!0),o.timeout=n,o.send(null)}catch(r){return s(r)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)s(new Error("Manifest request to "+t+" timed out."));else if(404===o.status)e();else if(200!==o.status&&304!==o.status)s(new Error("Manifest request to "+t+" failed."));else{try{var n=JSON.parse(o.responseText)}catch(r){return void s(r)}e(n)}}})).then(function(e){if(!e)return g("idle"),null;P={},x={},w=e.c,v=e.h,g("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});for(var s in f={},_)k(s);return"prepare"===m&&0===y&&0===b&&O(),n});var n}function k(e){w[e]?(P[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=I.p+""+e+"."+c+".hot-update.js",n.crossOrigin="anonymous",document.head.appendChild(n)}(e)):x[e]=!0}function O(){g("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then(function(){return j(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var s in f)Object.prototype.hasOwnProperty.call(f,s)&&n.push(z(s));e.resolve(n)}}function j(n){if("ready"!==m)throw new Error("apply() is only allowed in ready status");var s,o,t,r,i;function l(e){for(var n=[e],s={},o=n.map(function(e){return{chain:[e],id:e}});o.length>0;){var t=o.pop(),c=t.id,i=t.chain;if((r=E[c])&&!r.hot._selfAccepted){if(r.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(r.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var a=0;a<r.parents.length;a++){var d=r.parents[a],l=E[d];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([d]),moduleId:c,parentId:d};-1===n.indexOf(d)&&(l.hot._acceptedDependencies[c]?(s[d]||(s[d]=[]),p(s[d],[c])):(delete s[d],n.push(d),o.push({chain:i.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:s}}function p(e,n){for(var s=0;s<n.length;s++){var o=n[s];-1===e.indexOf(o)&&e.push(o)}}n=n||{};var u={},h=[],b={},y=function(){console.warn("[HMR] unexpected require("+P.moduleId+") to disposed module")};for(var x in f)if(Object.prototype.hasOwnProperty.call(f,x)){var P;i=z(x);var S=!1,k=!1,O=!1,j="";switch((P=f[x]?l(i):{type:"disposed",moduleId:x}).chain&&(j="\nUpdate propagation: "+P.chain.join(" -> ")),P.type){case"self-declined":n.onDeclined&&n.onDeclined(P),n.ignoreDeclined||(S=new Error("Aborted because of self decline: "+P.moduleId+j));break;case"declined":n.onDeclined&&n.onDeclined(P),n.ignoreDeclined||(S=new Error("Aborted because of declined dependency: "+P.moduleId+" in "+P.parentId+j));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(P),n.ignoreUnaccepted||(S=new Error("Aborted because "+i+" is not accepted"+j));break;case"accepted":n.onAccepted&&n.onAccepted(P),k=!0;break;case"disposed":n.onDisposed&&n.onDisposed(P),O=!0;break;default:throw new Error("Unexception type "+P.type)}if(S)return g("abort"),Promise.reject(S);if(k)for(i in b[i]=f[i],p(h,P.outdatedModules),P.outdatedDependencies)Object.prototype.hasOwnProperty.call(P.outdatedDependencies,i)&&(u[i]||(u[i]=[]),p(u[i],P.outdatedDependencies[i]));O&&(p(h,[P.moduleId]),b[i]=y)}var D,C=[];for(o=0;o<h.length;o++)i=h[o],E[i]&&E[i].hot._selfAccepted&&b[i]!==y&&C.push({module:i,errorHandler:E[i].hot._selfAccepted});g("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete _[e]}(e)});for(var H,T,A=h.slice();A.length>0;)if(i=A.pop(),r=E[i]){var G={},M=r.hot._disposeHandlers;for(t=0;t<M.length;t++)(s=M[t])(G);for(a[i]=G,r.hot.active=!1,delete E[i],delete u[i],t=0;t<r.children.length;t++){var L=E[r.children[t]];L&&((D=L.parents.indexOf(i))>=0&&L.parents.splice(D,1))}}for(i in u)if(Object.prototype.hasOwnProperty.call(u,i)&&(r=E[i]))for(T=u[i],t=0;t<T.length;t++)H=T[t],(D=r.children.indexOf(H))>=0&&r.children.splice(D,1);for(i in g("apply"),c=v,b)Object.prototype.hasOwnProperty.call(b,i)&&(e[i]=b[i]);var R=null;for(i in u)if(Object.prototype.hasOwnProperty.call(u,i)&&(r=E[i])){T=u[i];var B=[];for(o=0;o<T.length;o++)if(H=T[o],s=r.hot._acceptedDependencies[H]){if(-1!==B.indexOf(s))continue;B.push(s)}for(o=0;o<B.length;o++){s=B[o];try{s(T)}catch(q){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:i,dependencyId:T[o],error:q}),n.ignoreErrored||R||(R=q)}}}for(o=0;o<C.length;o++){var F=C[o];i=F.module,d=[i];try{I(i)}catch(q){if("function"===typeof F.errorHandler)try{F.errorHandler(q)}catch(U){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:U,originalError:q}),n.ignoreErrored||R||(R=U),R||(R=q)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:i,error:q}),n.ignoreErrored||R||(R=q)}}return R?(g("fail"),Promise.reject(R)):(g("idle"),new Promise(function(e){e(h)}))}var E={},_={2:0},D=[],C=[];function H(e){return I.p+"static/js/"+({1:"src-docs-common-common-types~src-docs-common-defaults~src-docs-components-containers~src-docs-compon~217ff528",3:"src-docs-common-common-types",4:"src-docs-common-defaults",5:"src-docs-components-containers",6:"src-docs-components-grid",7:"src-docs-components-horizontal",8:"src-docs-components-responsive",9:"src-docs-components-spacers",10:"src-docs-components-vertical",11:"src-docs-guidance-buttons",12:"src-docs-guidance-components",13:"src-docs-guidance-guidance",14:"src-docs-guidance-layouts",15:"src-docs-index",16:"src-docs-principles-scrolling",17:"src-docs-principles-sizing",18:"src-docs-principles-spacing"}[e]||e)+"."+{1:"3a1c962d",3:"1672e331",4:"aaa72e1d",5:"316d1182",6:"0999eb29",7:"38e0395f",8:"11b91537",9:"55c172f7",10:"4296e0bc",11:"4e6a997a",12:"ff91578e",13:"c3790043",14:"d065e68a",15:"f28ca471",16:"df8d27fb",17:"73465b6c",18:"876bb7bd"}[e]+".js"}function I(n){if(E[n])return E[n].exports;var s=E[n]={i:n,l:!1,exports:{},hot:p(n),parents:(l=d,d=[],l),children:[]};return e[n].call(s.exports,s,s.exports,function(e){var n=E[e];if(!n)return I;var s=function(s){return n.hot.active?(E[s]?-1===E[s].parents.indexOf(e)&&E[s].parents.push(e):(d=[e],t=s),-1===n.children.indexOf(s)&&n.children.push(s)):(console.warn("[HMR] unexpected require("+s+") from disposed module "+e),d=[]),I(s)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(n){I[e]=n}}};for(var r in I)Object.prototype.hasOwnProperty.call(I,r)&&"e"!==r&&"t"!==r&&Object.defineProperty(s,r,o(r));return s.e=function(e){return"ready"===m&&g("prepare"),y++,I.e(e).then(n,function(e){throw n(),e});function n(){y--,"prepare"===m&&(x[e]||k(e),0===y&&0===b&&O())}},s.t=function(e,n){return 1&n&&(e=s(e)),I.t(e,-2&n)},s}(n)),s.l=!0,s.exports}I.e=function(e){var n=[],s=_[e];if(0!==s)if(s)n.push(s[2]);else{var o=new Promise(function(n,o){s=_[e]=[n,o]});n.push(s[2]=o);var t,r=document.createElement("script");r.charset="utf-8",r.timeout=120,I.nc&&r.setAttribute("nonce",I.nc),r.src=H(e),0!==r.src.indexOf(window.location.origin+"/")&&(r.crossOrigin="anonymous");var c=new Error;t=function(n){r.onerror=r.onload=null,clearTimeout(i);var s=_[e];if(0!==s){if(s){var o=n&&("load"===n.type?"missing":n.type),t=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+t+")",c.name="ChunkLoadError",c.type=o,c.request=t,s[1](c)}_[e]=void 0}};var i=setTimeout(function(){t({type:"timeout",target:r})},12e4);r.onerror=r.onload=t,document.head.appendChild(r)}return Promise.all(n)},I.m=e,I.c=E,I.d=function(e,n,s){I.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},I.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},I.t=function(e,n){if(1&n&&(e=I(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(I.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)I.d(s,o,function(n){return e[n]}.bind(null,o));return s},I.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(n,"a",n),n},I.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},I.p="/gls/",I.oe=function(e){throw console.error(e),e},I.h=function(){return c};var T=window.webpackJsonp=window.webpackJsonp||[],A=T.push.bind(T);T.push=n,T=T.slice();for(var G=0;G<T.length;G++)n(T[G]);var M=A,L=(D.push([0,0]),s());n([[],{},0,[0,1,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,15]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"General Layout System","description":"General Layout System for React","menu":["General Layout System","Spacing principle","Sizing principle","Scrolling principle","Common Types and Props","Defaults","Vertical","Horizontal","Responsive","Grid","Spacers","Containers","Further Guidance \ud83c\udf39","Layout Examples","Component Concepts","Button Guidance"],"version":"0.0.2","repository":"https://github.com/basarat/gls","native":false,"codeSandbox":false,"themeConfig":{"footerText":"white","styles":{"playground":"\\n        padding: 0px;\\n        border: 8px solid #eeee;\\n      "}},"separator":"-","base":"/gls/","typescript":true,"indexHtml":"public/index.html"},"props":[],"entries":[{"key":"src/docs/index.mdx","value":{"name":"General Layout System","route":"/gls/","id":"13a8a147f67d34248cdc424d524520a5","filepath":"src/docs/index.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/index.mdx","slug":"src-docs-index","menu":"","headings":[{"slug":"general-layout-system","depth":1,"value":"General Layout System"},{"slug":"installation","depth":1,"value":"Installation"},{"slug":"css-principles","depth":1,"value":"CSS principles"},{"slug":"components","depth":1,"value":"Components"}]}},{"key":"src/docs/common/commonTypes.mdx","value":{"name":"Common Types and Props","route":"/gls/common-types/","id":"13c18a8ec82ad14b369dfe2eee912845","filepath":"src/docs/common/commonTypes.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/common/commonTypes.mdx","slug":"src-docs-common-common-types","menu":"","headings":[{"slug":"common-types","depth":1,"value":"Common Types"},{"slug":"csslength","depth":2,"value":"CSSLength"},{"slug":"cssbox","depth":2,"value":"CSSBox"},{"slug":"common-props","depth":1,"value":"Common Props"},{"slug":"spacingprop","depth":2,"value":"SpacingProp"},{"slug":"sizeprops","depth":2,"value":"SizeProps"},{"slug":"sizingprop","depth":2,"value":"SizingProp"},{"slug":"paddingprop","depth":2,"value":"PaddingProp"},{"slug":"scrollprop","depth":2,"value":"ScrollProp"},{"slug":"stylesprop","depth":2,"value":"StylesProp"},{"slug":"styleprop","depth":2,"value":"StyleProp"},{"slug":"classnameprop","depth":2,"value":"ClassNameProp"},{"slug":"tagprops","depth":2,"value":"TagProps"},{"slug":"baseprops","depth":2,"value":"BaseProps"}]}},{"key":"src/docs/common/defaults.mdx","value":{"name":"Defaults","route":"/gls/defaults/","id":"661311e45d9c8e8d71d5df22c4a556f2","filepath":"src/docs/common/defaults.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/common/defaults.mdx","slug":"src-docs-common-defaults","menu":"","headings":[{"slug":"defaults","depth":1,"value":"Defaults"},{"slug":"usage-by-components","depth":2,"value":"Usage by components"},{"slug":"configuring","depth":2,"value":"Configuring"}]}},{"key":"src/docs/components/containers.mdx","value":{"name":"Containers","route":"/gls/containers/","id":"cfada1e7aee4c5c18406af6fb3d83cd8","filepath":"src/docs/components/containers.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/components/containers.mdx","slug":"src-docs-components-containers","menu":"","headings":[{"slug":"containers","depth":1,"value":"Containers"},{"slug":"flex","depth":2,"value":"Flex"},{"slug":"content","depth":2,"value":"Content"},{"slug":"baseprops","depth":2,"value":"BaseProps"},{"slug":"alignment","depth":2,"value":"Alignment"},{"slug":"example-use-case-table","depth":2,"value":"Example use case: Table"}]}},{"key":"src/docs/components/grid.mdx","value":{"name":"Grid","route":"/gls/grid/","id":"455acc7f6e05ca693413235cbf25c4a8","filepath":"src/docs/components/grid.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/components/grid.mdx","slug":"src-docs-components-grid","menu":"","headings":[{"slug":"grid","depth":1,"value":"Grid"},{"slug":"spacing","depth":2,"value":"Spacing"},{"slug":"justify","depth":2,"value":"Justify"},{"slug":"baseprops","depth":2,"value":"BaseProps"},{"slug":"sizingprop","depth":2,"value":"SizingProp"}]}},{"key":"src/docs/components/horizontal.mdx","value":{"name":"Horizontal","route":"/gls/horizontal/","id":"4acb417cffd79e9701536009e458f0c1","filepath":"src/docs/components/horizontal.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/components/horizontal.mdx","slug":"src-docs-components-horizontal","menu":"","headings":[{"slug":"horizontal","depth":1,"value":"Horizontal"},{"slug":"alignment","depth":2,"value":"Alignment"},{"slug":"spacing","depth":2,"value":"Spacing"},{"slug":"baseprops","depth":2,"value":"BaseProps"},{"slug":"sizingprop","depth":2,"value":"SizingProp"}]}},{"key":"src/docs/components/responsive.mdx","value":{"name":"Responsive","route":"/gls/responsive/","id":"4f8cf3675c9d2b25af6da2385c6744d6","filepath":"src/docs/components/responsive.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/components/responsive.mdx","slug":"src-docs-components-responsive","menu":"","headings":[{"slug":"responsive","depth":1,"value":"Responsive"},{"slug":"props","depth":1,"value":"Props"},{"slug":"responsiverootonlyprops","depth":2,"value":"ResponsiveRootOnlyProps"},{"slug":"responsivemodesprops","depth":2,"value":"ResponsiveModesProps"},{"slug":"responsiveoverridableprops","depth":2,"value":"ResponsiveOverridableProps"}]}},{"key":"src/docs/components/spacers.mdx","value":{"name":"Spacers","route":"/gls/spacers/","id":"4901eed8f8911371ffa601d78cb393ec","filepath":"src/docs/components/spacers.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/components/spacers.mdx","slug":"src-docs-components-spacers","menu":"","headings":[{"slug":"spacer","depth":1,"value":"Spacer"},{"slug":"horizontalspacer","depth":1,"value":"HorizontalSpacer"},{"slug":"verticalspacer","depth":1,"value":"VerticalSpacer"},{"slug":"flexspacer","depth":1,"value":"FlexSpacer"}]}},{"key":"src/docs/components/vertical.mdx","value":{"name":"Vertical","route":"/gls/vertical/","id":"f8ac6a2f79769c9f700ddb843b273512","filepath":"src/docs/components/vertical.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/components/vertical.mdx","slug":"src-docs-components-vertical","menu":"","headings":[{"slug":"vertical","depth":1,"value":"Vertical"},{"slug":"alignment","depth":2,"value":"Alignment"},{"slug":"spacing","depth":2,"value":"Spacing"},{"slug":"baseprops","depth":2,"value":"BaseProps"},{"slug":"sizingprop","depth":2,"value":"SizingProp"}]}},{"key":"src/docs/guidance/buttons.mdx","value":{"name":"Button Guidance","route":"/gls/guidance-buttons/","id":"e725297ecc012ea3840c78cc55ab7b14","filepath":"src/docs/guidance/buttons.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/guidance/buttons.mdx","slug":"src-docs-guidance-buttons","menu":"","headings":[{"slug":"button-guidance","depth":1,"value":"Button Guidance"}]}},{"key":"src/docs/guidance/components.mdx","value":{"name":"Component Concepts","route":"/gls/guidance-components/","id":"36d77adf26d2041e3faaffb94e93ea9a","filepath":"src/docs/guidance/components.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/guidance/components.mdx","slug":"src-docs-guidance-components","menu":"","headings":[{"slug":"component-concepts","depth":1,"value":"Component Concepts"}]}},{"key":"src/docs/guidance/guidance.mdx","value":{"name":"Further Guidance \ud83c\udf39","route":"/gls/guidance/","id":"bd2ec424e7710bde459b8291d2cf5aa2","filepath":"src/docs/guidance/guidance.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/guidance/guidance.mdx","slug":"src-docs-guidance-guidance","menu":"","headings":[{"slug":"further-guidance-and-examples","depth":1,"value":"Further Guidance and Examples"}]}},{"key":"src/docs/guidance/layouts.mdx","value":{"name":"Layout Examples","route":"/gls/guidance-layouts/","id":"bfdf7a24758703f87700416b5e0f2405","filepath":"src/docs/guidance/layouts.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/guidance/layouts.mdx","slug":"src-docs-guidance-layouts","menu":"","headings":[{"slug":"layout-examples","depth":1,"value":"Layout Examples"},{"slug":"header-body-footer","depth":2,"value":"Header Body Footer"},{"slug":"header-sidebar-body-sidebar-footer","depth":2,"value":"Header Sidebar Body Sidebar Footer"}]}},{"key":"src/docs/principles/scrolling.mdx","value":{"name":"Scrolling principle","route":"/gls/principle-scrolling/","id":"dcf73b7a1869ce15a640bf339e55086f","filepath":"src/docs/principles/scrolling.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/principles/scrolling.mdx","slug":"src-docs-principles-scrolling","menu":"","headings":[{"slug":"scrolling","depth":1,"value":"Scrolling"},{"slug":"overflow","depth":2,"value":"overflow"},{"slug":"both--vertical--horizontal","depth":2,"value":"both | vertical | horizontal"},{"slug":"hidden","depth":2,"value":"hidden"}]}},{"key":"src/docs/principles/sizing.mdx","value":{"name":"Sizing principle","route":"/gls/principle-sizing/","id":"44683086165ea8b7be7bd66ef69d85ae","filepath":"src/docs/principles/sizing.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/principles/sizing.mdx","slug":"src-docs-principles-sizing","menu":"","headings":[{"slug":"sizing","depth":1,"value":"Sizing"},{"slug":"sizeprops-explicit-size","depth":2,"value":"SizeProps (Explicit size)"},{"slug":"sizingprop-implicit-sizing","depth":2,"value":"SizingProp (Implicit sizing)"},{"slug":"content-sized","depth":3,"value":"Content sized"},{"slug":"flex-sized","depth":3,"value":"Flex sized"},{"slug":"flex-sized-ratios","depth":3,"value":"Flex sized ratios"},{"slug":"mixing","depth":2,"value":"Mixing"}]}},{"key":"src/docs/principles/spacing.mdx","value":{"name":"Spacing principle","route":"/gls/principle-spacing/","id":"9e1baa55deec4b22a603033aa5639ab6","filepath":"src/docs/principles/spacing.mdx","link":"https://github.com/basarat/gls/edit/master/src/docs/principles/spacing.mdx","slug":"src-docs-principles-spacing","menu":"","headings":[{"slug":"space","depth":1,"value":"Space"},{"slug":"spacing-principle","depth":2,"value":"Spacing principle"},{"slug":"issues-with-external-margins","depth":3,"value":"Issues with external margins"},{"slug":"how-to-do-space-correctly","depth":2,"value":"How to do space correctly"},{"slug":"space-between-children-the-spacing-prop","depth":3,"value":"Space between children: the  spacing  prop"},{"slug":"space-at-the-border-the-padding-prop","depth":3,"value":"Space at the border: the  padding  prop"}]}}]}')},"./.docz/app/index.jsx":function(e,n,s){"use strict";s.r(n);var o=s("./node_modules/react/index.js"),t=s.n(o),r=s("./node_modules/react-dom/index.js"),c=s.n(r),i=s("./node_modules/docz/dist/index.esm.js"),a=s("./node_modules/docz-theme-default/dist/index.esm.js"),d={"src/docs/index.mdx":function(){return Promise.all([s.e(0),s.e(15)]).then(s.bind(null,"./src/docs/index.mdx"))},"src/docs/common/commonTypes.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(3)]).then(s.bind(null,"./src/docs/common/commonTypes.mdx"))},"src/docs/common/defaults.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(4)]).then(s.bind(null,"./src/docs/common/defaults.mdx"))},"src/docs/components/containers.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(5)]).then(s.bind(null,"./src/docs/components/containers.mdx"))},"src/docs/components/grid.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(6)]).then(s.bind(null,"./src/docs/components/grid.mdx"))},"src/docs/components/horizontal.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(7)]).then(s.bind(null,"./src/docs/components/horizontal.mdx"))},"src/docs/components/responsive.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(8)]).then(s.bind(null,"./src/docs/components/responsive.mdx"))},"src/docs/components/spacers.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(9)]).then(s.bind(null,"./src/docs/components/spacers.mdx"))},"src/docs/components/vertical.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(10)]).then(s.bind(null,"./src/docs/components/vertical.mdx"))},"src/docs/guidance/buttons.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(11)]).then(s.bind(null,"./src/docs/guidance/buttons.mdx"))},"src/docs/guidance/components.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(12)]).then(s.bind(null,"./src/docs/guidance/components.mdx"))},"src/docs/guidance/guidance.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(13)]).then(s.bind(null,"./src/docs/guidance/guidance.mdx"))},"src/docs/guidance/layouts.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(14)]).then(s.bind(null,"./src/docs/guidance/layouts.mdx"))},"src/docs/principles/scrolling.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(16)]).then(s.bind(null,"./src/docs/principles/scrolling.mdx"))},"src/docs/principles/sizing.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(17)]).then(s.bind(null,"./src/docs/principles/sizing.mdx"))},"src/docs/principles/spacing.mdx":function(){return Promise.all([s.e(0),s.e(1),s.e(18)]).then(s.bind(null,"./src/docs/principles/spacing.mdx"))}},l=s("./.docz/app/db.json"),p=function(){return t.a.createElement(a.a,{linkComponent:i.b,db:l},t.a.createElement(i.d,{imports:d}))},u=[],m=[],g=function(){return u.forEach(function(e){return e&&e()})},h=function(){return m.forEach(function(e){return e&&e()})},f=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;g(),c.a.render(t.a.createElement(e,null),f,h)}(p)},0:function(e,n,s){e.exports=s("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.30acb5aac309007575ea.js.map