(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/index.tsx":function(e,t,n){"use strict";var i=n("./node_modules/react/index.js"),r=n.n(i),l=r.a.createContext(24),a=l.Provider,s=l.Consumer;"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalSpacingConsumer",filename:"src/common.tsx"}}),"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalSpacingProvider",filename:"src/common.tsx"}});var c=r.a.createContext(24),o=c.Provider,b=c.Consumer;"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalSpacingConsumer",filename:"src/common.tsx"}}),"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalSpacingProvider",filename:"src/common.tsx"}}),"undefined"!==typeof BoxUnit&&BoxUnit&&BoxUnit===Object(BoxUnit)&&Object.isExtensible(BoxUnit)&&Object.defineProperty(BoxUnit,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxUnit",filename:"src/common.tsx"}}),"undefined"!==typeof BoxFunction&&BoxFunction&&BoxFunction===Object(BoxFunction)&&Object.isExtensible(BoxFunction)&&Object.defineProperty(BoxFunction,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxFunction",filename:"src/common.tsx"}}),"undefined"!==typeof GLSProps&&GLSProps&&GLSProps===Object(GLSProps)&&Object.isExtensible(GLSProps)&&Object.defineProperty(GLSProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSProps",filename:"src/common.tsx"}});var m=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),f=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),u=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),d=n("./node_modules/typestyle/lib.es2015/index.js"),p={"-webkit-overflow-scrolling":"touch",overflow:"auto"};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollBoth",filename:"src/styles/scroll.ts"}});var j={"-webkit-overflow-scrolling":"touch",overflowX:"auto"};"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollHorizontal",filename:"src/styles/scroll.ts"}});var O={"-webkit-overflow-scrolling":"touch",overflowY:"auto"};"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollVertical",filename:"src/styles/scroll.ts"}});var x={overflow:"hidden"};function v(e){return"number"===typeof e?e.toString()+"px":e}function y(e){e.scroll;var t=e.styles,n=void 0===t?[]:t,i=Object(u.a)(e,["scroll","styles"]);return Object(f.a)({},i,{className:d.classes(e.className,d.style.apply(d,[null!=e.scroll&&("disabled"==e.scroll?x:"horizontal"==e.scroll?j:"vertical"==e.scroll?O:p)].concat(Object(m.a)(n))))})}function g(e){return function(t,n,i,r){return void 0===n&&void 0===i&&void 0===r?n=i=r=t:void 0===i&&void 0===r&&(i=t,r=n),e(v(t),v(n),v(i),v(r))}}"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollDisabled",filename:"src/styles/scroll.ts"}}),v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"boxUnitToString",filename:"src/internal/utils.ts"}}),y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"processGLSProps",filename:"src/internal/utils.ts"}});var _=g(function(e,t,n,i){return{paddingTop:e,paddingRight:t,paddingBottom:n,paddingLeft:i}});"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"padding",filename:"src/styles/box.ts"}});var P=g(function(e,t,n,i){return{borderTop:e,borderRight:t,borderBottom:n,borderLeft:i}});"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"border",filename:"src/styles/box.ts"}});var E=function(e){return{width:v(e)}};E&&E===Object(E)&&Object.isExtensible(E)&&Object.defineProperty(E,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"width",filename:"src/styles/box.ts"}});var h=function(e){return{height:v(e)}};h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"height",filename:"src/styles/box.ts"}});var w=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=v(e),i=v(t);return d.style({marginTop:"-"+n,marginLeft:"-"+i,$nest:{"&>*":{marginTop:n,marginLeft:i}}})}k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),k&&k===Object(k)&&Object.isExtensible(k)&&Object.defineProperty(k,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),"undefined"!==typeof GridProps&&GridProps&&GridProps===Object(GridProps)&&Object.isExtensible(GridProps)&&Object.defineProperty(GridProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GridProps",filename:"src/components/grid.tsx"}});var z=function(e){var t,n,r=y(e),l=r.className,a=Object(u.a)(r,["className"]);if(null!=e.spacing){if(delete a.spacing,"number"==typeof e.spacing||"string"==typeof e.spacing)n=t=e.spacing;else{var c=Object(w.a)(e.spacing,2);n=c[0],t=c[1]}var o=Object(d.classes)(l,k(n,t));return i.createElement("div",Object.assign({},a,{className:o,"data-comment":"Grid"}))}return i.createElement(s,null,function(e){return i.createElement(b,null,function(t){var n=Object(d.classes)(l,k(e,t));return i.createElement("div",Object.assign({},a,{className:n,"data-comment":"Grid"}))})})};z&&z===Object(z)&&Object.isExtensible(z)&&Object.defineProperty(z,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/components/grid.tsx"}}),z.displayName="Grid";var B={display:["-ms-flexbox","-webkit-flex","flex"]};"undefined"!==typeof B&&B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"flexRoot",filename:"src/styles/flex.ts"}});var N=Object(d.extend)(B,{"-ms-flex-direction":"row","-webkit-flex-direction":"row",flexDirection:"row"});"undefined"!==typeof N&&N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"horizontal",filename:"src/styles/flex.ts"}});var S=Object(d.extend)(B,{"-ms-flex-direction":"column","-webkit-flex-direction":"column",flexDirection:"column"});"undefined"!==typeof S&&S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"vertical",filename:"src/styles/flex.ts"}});var G={"-ms-flex-negative":0,"-webkit-flex-shrink":0,flexShrink:0,flexBasis:"auto"};"undefined"!==typeof G&&G&&G===Object(G)&&Object.isExtensible(G)&&Object.defineProperty(G,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"content",filename:"src/styles/flex.ts"}});var V={"-ms-flex-align":"start","-webkit-align-items":"flex-start",alignItems:"flex-start"};"undefined"!==typeof V&&V&&V===Object(V)&&Object.isExtensible(V)&&Object.defineProperty(V,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"start",filename:"src/styles/flex.ts"}});var C={"-ms-flex-align":"center","-webkit-align-items":"center",alignItems:"center"};"undefined"!==typeof C&&C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"center",filename:"src/styles/flex.ts"}});var H={"-ms-flex-align":"end","-webkit-align-items":"flex-end",alignItems:"flex-end"};"undefined"!==typeof H&&H&&H===Object(H)&&Object.isExtensible(H)&&Object.defineProperty(H,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"end",filename:"src/styles/flex.ts"}});var L={"-ms-flex-pack":"start","-webkit-justify-content":"flex-start",justifyContent:"flex-start"};"undefined"!==typeof L&&L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"startJustified",filename:"src/styles/flex.ts"}});var D={"-ms-flex-pack":"center","-webkit-justify-content":"center",justifyContent:"center"};"undefined"!==typeof D&&D&&D===Object(D)&&Object.isExtensible(D)&&Object.defineProperty(D,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"centerJustified",filename:"src/styles/flex.ts"}});var A={"-ms-flex-pack":"end","-webkit-justify-content":"flex-end",justifyContent:"flex-end"};"undefined"!==typeof A&&A&&A===Object(A)&&Object.isExtensible(A)&&Object.defineProperty(A,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"endJustified",filename:"src/styles/flex.ts"}});var F=function(e){return{"&>*":{marginBottom:v(e)+" !important"},"&>*:last-child":{marginBottom:"0px !important"}}};F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"verticallySpaced",filename:"src/components/vertical.tsx"}}),"undefined"!==typeof VerticalProps&&VerticalProps&&VerticalProps===Object(VerticalProps)&&Object.isExtensible(VerticalProps)&&Object.defineProperty(VerticalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalProps",filename:"src/components/vertical.tsx"}});var T=function(e){var t=y(e),n=t.className,r=t.horizontalAlign,l=t.verticalAlign,a=Object(u.a)(t,["className","horizontalAlign","verticalAlign"]);return i.createElement(s,null,function(t){var s=d.classes(n,d.style(G,S,F(null==e.spacing?t:e.spacing),"center"==l&&D,"bottom"==l&&A,"right"==r&&H,"center"==r&&C));return i.createElement("div",Object.assign({},a,{className:s,"data-comment":"Vertical"}))})};T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Vertical",filename:"src/components/vertical.tsx"}}),T.displayName="Vertical";var U=n("./node_modules/csstips/lib/index.js");"undefined"!==typeof HorizontalProps&&HorizontalProps&&HorizontalProps===Object(HorizontalProps)&&Object.isExtensible(HorizontalProps)&&Object.defineProperty(HorizontalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalProps",filename:"src/components/horizontal.tsx"}});var J=function(e){var t=y(e),n=t.className,r=t.horizontalAlign,l=t.verticalAlign,a=Object(u.a)(t,["className","horizontalAlign","verticalAlign"]);return i.createElement(b,null,function(t){var s=d.classes(n,d.style(U.content,U.horizontal,U.horizontallySpaced(null==e.spacing?t:e.spacing),"right"==r&&U.endJustified,"center"==r&&U.centerJustified,"center"==l&&U.center,"bottom"==l&&U.end));return i.createElement("div",Object.assign({},a,{className:s,"data-comment":"Horizontal"}))})};J&&J===Object(J)&&Object.isExtensible(J)&&Object.defineProperty(J,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Horizontal",filename:"src/components/horizontal.tsx"}}),J.displayName="Horizontal";var W=function(e){var t=y(e),n=t.className,r=Object(u.a)(t,["className"]),l=d.classes(n,d.style(U.flex));return i.createElement("div",Object.assign({},r,{className:l,"data-comment":"Flex"}))};W&&W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Flex",filename:"src/components/containers.tsx"}}),W.displayName="Flex";var X=function(e){var t=y(e),n=t.className,r=Object(u.a)(t,["className"]),l=d.classes(n,d.style(U.content));return i.createElement("div",Object.assign({},r,{className:l,"data-comment":"Content"}))};X&&X===Object(X)&&Object.isExtensible(X)&&Object.defineProperty(X,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Content",filename:"src/components/containers.tsx"}}),X.displayName="Content",n.d(t,"c",function(){return T}),n.d(t,"b",function(){return J}),n.d(t,"a",function(){return W})},"./src/vertical.mdx":function(e,t,n){"use strict";n.r(t);var i={};n.r(i),n.d(i,"BlueDiv",function(){return b}),n.d(i,"PinkDiv",function(){return m});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/react/index.js"),a=n.n(l),s=n("./node_modules/@mdx-js/react/dist/index.es.js"),c=n("./node_modules/docz/dist/index.esm.js"),o=n("./src/index.tsx"),b=function(e){return a.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:e.children})};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos/index.tsx"}});var m=function(e){return a.a.createElement("div",{style:{backgroundColor:"lightpink"},children:e.children})};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos/index.tsx"}}),n.d(t,"default",function(){return d});var f={},u="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)(u,Object.assign({},f,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"vertical"},"Vertical"),Object(s.b)("p",null,"Lays out children in a vertically spaced layout."),Object(s.b)(c.c,{__position:0,__code:"<Vertical>\n  <demos.BlueDiv>Hello</demos.BlueDiv>\n  <div>World</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:c.c,Props:c.d,Vertical:o.c,demos:i},mdxType:"Playground"},Object(s.b)(o.c,{mdxType:"Vertical"},Object(s.b)(b,null,"Hello"),Object(s.b)("div",null,"World"))))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/vertical.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=src-vertical.3f11b877e01819ccda2e.js.map