(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/index.tsx":function(e,t,n){"use strict";var a={vertical:24,horizontal:24,grid:{vertical:24,horizontal:24}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/common.ts"}});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/typestyle/lib.es2015/index.js"),l=n("./node_modules/react/index.js"),s=n("./node_modules/csstips/lib/index.js");"undefined"!==typeof GridProps&&GridProps&&GridProps===Object(GridProps)&&Object.isExtensible(GridProps)&&Object.defineProperty(GridProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GridProps",filename:"src/components/grid.tsx"}});var c=function(e){var t=e.className,n=Object(i.a)(e,["className"]),c=Object(r.classes)(t,r.style(s.gridSpaced(null==e.spacing?a.grid.vertical:e.spacing)));return l.createElement("div",Object.assign({},n,{className:c,"data-comment":"Grid"}))};c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Grid",filename:"src/components/grid.tsx"}}),c.displayName="Grid","undefined"!==typeof VerticalProps&&VerticalProps&&VerticalProps===Object(VerticalProps)&&Object.isExtensible(VerticalProps)&&Object.defineProperty(VerticalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VerticalProps",filename:"src/components/vertical.tsx"}});var o=function(e){var t=e.className,n=e.horizontalAlign,c=e.verticalAlign,o=Object(i.a)(e,["className","horizontalAlign","verticalAlign"]),d=r.classes(t,r.style(s.content,s.vertical,s.verticallySpaced(null==e.spacing?a.vertical:e.spacing),"center"==c&&s.centerJustified,"bottom"==c&&s.endJustified,"right"==n&&s.end,"center"==n&&s.center));return l.createElement("div",Object.assign({},o,{className:d,"data-comment":"Vertical"}))};o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Vertical",filename:"src/components/vertical.tsx"}}),o.displayName="Vertical","undefined"!==typeof HorizontalProps&&HorizontalProps&&HorizontalProps===Object(HorizontalProps)&&Object.isExtensible(HorizontalProps)&&Object.defineProperty(HorizontalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HorizontalProps",filename:"src/components/horizontal.tsx"}});var d=function(e){var t=e.className,n=e.horizontalAlign,c=e.verticalAlign,o=Object(i.a)(e,["className","horizontalAlign","verticalAlign"]),d=r.classes(t,r.style(s.content,s.horizontal,s.horizontallySpaced(null==e.spacing?a.horizontal:e.spacing),"right"==n&&s.endJustified,"center"==n&&s.centerJustified,"center"==c&&s.center,"bottom"==c&&s.end));return l.createElement("div",Object.assign({},o,{className:d,"data-comment":"Horizontal"}))};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Horizontal",filename:"src/components/horizontal.tsx"}}),d.displayName="Horizontal";var m=function(e){var t=e.className,n=Object(i.a)(e,["className"]),a=r.classes(t,r.style(s.flex));return l.createElement("div",Object.assign({},n,{className:a,"data-comment":"FlexContainer"}))};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FlexContainer",filename:"src/components/containers.tsx"}}),m.displayName="FlexContainer";var b=function(e){var t=e.className,n=Object(i.a)(e,["className"]),a=r.classes(t,r.style(s.content));return l.createElement("div",Object.assign({},n,{className:a,"data-comment":"ContentContainer"}))};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContentContainer",filename:"src/components/containers.tsx"}}),b.displayName="ContentContainer",n.d(t,"b",function(){return o}),n.d(t,"a",function(){return d})},"./src/vertical.mdx":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"BlueDiv",function(){return d}),n.d(a,"PinkDiv",function(){return m});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),l=n.n(r),s=n("./node_modules/@mdx-js/react/dist/index.es.js"),c=n("./node_modules/docz/dist/index.esm.js"),o=n("./src/index.tsx"),d=function(e){return l.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:e.children})};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos.tsx"}});var m=function(e){return l.a.createElement("div",{style:{backgroundColor:"lightpink"},children:e.children})};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos.tsx"}}),n.d(t,"default",function(){return p});var b={},u="wrapper";function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)(u,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"vertical"},"Vertical"),Object(s.b)("p",null,"Lays out children in a vertically spaced layout."),Object(s.b)(c.c,{__position:0,__code:"<Vertical>\n  <demos.BlueDiv>Hello</demos.BlueDiv>\n  <div>World</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:c.c,Props:c.d,Vertical:o.b,demos:a},mdxType:"Playground"},Object(s.b)(o.b,{mdxType:"Vertical"},Object(s.b)(d,null,"Hello"),Object(s.b)("div",null,"World"))))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/vertical.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=src-vertical.03a202cc41f9f97d4b0f.js.map