(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/index.tsx":function(e,t,n){"use strict";var i=n("./node_modules/typestyle/lib.es2015/index.js"),r=function(){return i.style({"-webkit-overflow-scrolling":"touch",overflow:"auto"})};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scroll",filename:"src/classes/scroll.ts"}});var l=function(){return i.style({"-webkit-overflow-scrolling":"touch",overflowX:"auto"})};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollHorizontal",filename:"src/classes/scroll.ts"}});var a=function(){return i.style({"-webkit-overflow-scrolling":"touch",overflowY:"auto"})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"scrollVertical",filename:"src/classes/scroll.ts"}});var o=function(){return i.style({overflow:"hidden"})};o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"someChildWillScroll",filename:"src/classes/scroll.ts"}});var c={vertical:24,horizontal:24,grid:{vertical:24,horizontal:24}};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/common.ts"}}),"undefined"!==typeof BoxUnit&&BoxUnit&&BoxUnit===Object(BoxUnit)&&Object.isExtensible(BoxUnit)&&Object.defineProperty(BoxUnit,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxUnit",filename:"src/common.ts"}}),"undefined"!==typeof BoxFunction&&BoxFunction&&BoxFunction===Object(BoxFunction)&&Object.isExtensible(BoxFunction)&&Object.defineProperty(BoxFunction,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxFunction",filename:"src/common.ts"}}),"undefined"!==typeof Box&&Box&&Box===Object(Box)&&Object.isExtensible(Box)&&Object.defineProperty(Box,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/common.ts"}}),"undefined"!==typeof GLSProps&&GLSProps&&GLSProps===Object(GLSProps)&&Object.isExtensible(GLSProps)&&Object.defineProperty(GLSProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GLSProps",filename:"src/common.ts"}});var s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),b=n("./node_modules/react/index.js");function m(e){return"number"===typeof e?e.toString()+"px":e}function u(e){e.scroll,e.padding;var t=Object(s.a)(e,["scroll","padding"]);return{klass:i.classes(null!=e.scroll&&("horizontal"==e.scroll?l():"vertical"==e.scroll?a():r()),null!=e.padding&&i.style()),otherProps:t}}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=m(e),r=m(t);return i.style({marginTop:"-"+n,marginLeft:"-"+r,"&>*":{marginTop:n,marginLeft:r}})}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"boxUnitToString",filename:"src/internal/utils.ts"}}),u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"processCommonProps",filename:"src/internal/utils.ts"}}),d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"gridSpaced",filename:"src/components/grid.tsx"}}),"undefined"!==typeof GridProps&&GridProps&&GridProps===Object(GridProps)&&Object.isExtensible(GridProps)&&Object.defineProperty(GridProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GridProps",filename:"src/components/grid.tsx"}});var f=function(e){var t,n,r=e.className,l=Object(s.a)(e,["className"]);"spacing"in e&&null!=e.spacing&&(delete l.spacing,"number"==typeof e.spacing||"string"==typeof e.spacing?n=t=e.spacing:(t=e.spacing.horizontal,n=e.spacing.vertical));var a=Object(i.classes)(r,d(n,t));return b.createElement("div",Object.assign({},l,{className:a,"data-comment":"Grid"}))};f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/components/grid.tsx"}}),f.displayName="Grid";var p=n("./node_modules/csstips/lib/index.js");"undefined"!==typeof VerticalProps&&VerticalProps&&VerticalProps===Object(VerticalProps)&&Object.isExtensible(VerticalProps)&&Object.defineProperty(VerticalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalProps",filename:"src/components/vertical.tsx"}});var j=function(e){var t=e.className,n=e.horizontalAlign,r=e.verticalAlign,l=Object(s.a)(e,["className","horizontalAlign","verticalAlign"]),a=i.classes(t,i.style(p.content,p.vertical,p.verticallySpaced(null==e.spacing?c.vertical:e.spacing),"center"==r&&p.centerJustified,"bottom"==r&&p.endJustified,"right"==n&&p.end,"center"==n&&p.center));return b.createElement("div",Object.assign({},l,{className:a,"data-comment":"Vertical"}))};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Vertical",filename:"src/components/vertical.tsx"}}),j.displayName="Vertical","undefined"!==typeof HorizontalProps&&HorizontalProps&&HorizontalProps===Object(HorizontalProps)&&Object.isExtensible(HorizontalProps)&&Object.defineProperty(HorizontalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalProps",filename:"src/components/horizontal.tsx"}});var O=function(e){var t=e.className,n=e.horizontalAlign,r=e.verticalAlign,l=Object(s.a)(e,["className","horizontalAlign","verticalAlign"]),a=i.classes(t,i.style(p.content,p.horizontal,p.horizontallySpaced(null==e.spacing?c.horizontal:e.spacing),"right"==n&&p.endJustified,"center"==n&&p.centerJustified,"center"==r&&p.center,"bottom"==r&&p.end));return b.createElement("div",Object.assign({},l,{className:a,"data-comment":"Horizontal"}))};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Horizontal",filename:"src/components/horizontal.tsx"}}),O.displayName="Horizontal";var v=function(e){var t=e.className,n=Object(s.a)(e,["className"]),r=i.classes(t,i.style(p.flex));return b.createElement("div",Object.assign({},n,{className:r,"data-comment":"Flex"}))};v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Flex",filename:"src/components/containers.tsx"}}),v.displayName="Flex";var g=function(e){var t=e.className,n=Object(s.a)(e,["className"]),r=i.classes(t,i.style(p.content));return b.createElement("div",Object.assign({},n,{className:r,"data-comment":"Content"}))};g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Content",filename:"src/components/containers.tsx"}}),g.displayName="Content",n.d(t,"c",function(){return j}),n.d(t,"b",function(){return O}),n.d(t,"a",function(){return v})},"./src/vertical.mdx":function(e,t,n){"use strict";n.r(t);var i={};n.r(i),n.d(i,"BlueDiv",function(){return b}),n.d(i,"PinkDiv",function(){return m});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/react/index.js"),a=n.n(l),o=n("./node_modules/@mdx-js/react/dist/index.es.js"),c=n("./node_modules/docz/dist/index.esm.js"),s=n("./src/index.tsx"),b=function(e){return a.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:e.children})};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos.tsx"}});var m=function(e){return a.a.createElement("div",{style:{backgroundColor:"lightpink"},children:e.children})};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos.tsx"}}),n.d(t,"default",function(){return f});var u={},d="wrapper";function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(d,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"vertical"},"Vertical"),Object(o.b)("p",null,"Lays out children in a vertically spaced layout."),Object(o.b)(c.c,{__position:0,__code:"<Vertical>\n  <demos.BlueDiv>Hello</demos.BlueDiv>\n  <div>World</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:c.c,Props:c.d,Vertical:s.c,demos:i},mdxType:"Playground"},Object(o.b)(s.c,{mdxType:"Vertical"},Object(o.b)(b,null,"Hello"),Object(o.b)("div",null,"World"))))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/vertical.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=src-vertical.e65cba88d7645db73ff2.js.map