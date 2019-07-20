(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/demos/index.tsx":function(e,n,t){"use strict";t.r(n),t.d(n,"BlueDiv",function(){return a}),t.d(n,"PinkDiv",function(){return s}),t.d(n,"Label",function(){return b}),t.d(n,"Input",function(){return p}),t.d(n,"buttonClass",function(){return u}),t.d(n,"Button",function(){return m});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=t("./node_modules/react/index.js"),i=t.n(l),r=t("./node_modules/typestyle/lib.es2015/index.js"),a=function(e){return i.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:e.children})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos/index.tsx"}});var s=function(e){return i.a.createElement("div",{style:{backgroundColor:"lightpink"},children:e.children})};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos/index.tsx"}});var c=r.style({}),b=function(e){return i.a.createElement("label",{className:c,children:e.children})};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/demos/index.tsx"}});var d=r.style({width:"calc(100% - 5px)",fontSize:"20px"}),p=function(e){return i.a.createElement("input",{className:d})};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Input",filename:"src/demos/index.tsx"}});var u=r.style({fontFamily:"helvetica",cursor:"pointer",height:"auto",padding:"12px 30px 11px",border:"1px solid #333",borderRadius:"3px",color:"white",backgroundColor:"#333",fontSize:"15px",textDecoration:"none",lineHeight:"1em",outline:"none",transition:"color .2s, background-color .2s",display:"inline-block",$nest:{"&:hover":{backgroundColor:"#666"},"&:active":{backgroundColor:"#666"},"&:focus":{outline:"thin dotted",outlineColor:"#333"}}});"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"buttonClass",filename:"src/demos/index.tsx"}});var m=function(e){e.className;var n=Object(o.a)(e,["className"]);return i.a.createElement("button",Object.assign({},n,{type:"button",className:r.classes(u,e.className)}))};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/demos/index.tsx"}})},"./src/docs/components/horizontal.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return b});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),i=t("./node_modules/docz/dist/index.esm.js"),r=t("./src/index.tsx"),a=t("./src/demos/index.tsx"),s={},c="wrapper";function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(l.b)(c,Object.assign({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"horizontal"},"Horizontal"),Object(l.b)("p",null,"Lays out children in a horiztonally spaced layout."),Object(l.b)(i.c,{__position:0,__code:"<Horizontal>\n  <Flex style={{ backgroundColor: 'lightskyblue' }}>Hello</Flex>\n  <Flex style={{ backgroundColor: 'lightpink' }}>World</Flex>\n</Horizontal>",__scope:{props:this?this.props:t,Playground:i.c,Horizontal:r.d,Vertical:r.g,Flex:r.b,demos:a},mdxType:"Playground"},Object(l.b)(r.d,{mdxType:"Horizontal"},Object(l.b)(r.b,{style:{backgroundColor:"lightskyblue"},mdxType:"Flex"},"Hello"),Object(l.b)(r.b,{style:{backgroundColor:"lightpink"},mdxType:"Flex"},"World"))),Object(l.b)("p",null,"Since ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," follows the ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../principle-spacing/"}),"spacing principle")," you can compose / nest ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal"),"s easily. The following example has two ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal"),"s in a ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal(Horizontal(blue,pink),Horizontal(blue,pink)")," heirarchy but to the user it looks seemless (like a single ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal(blue,pink,blue,pink)"),"). This ability to nest allows you to easily create and reuse components without having to worry about how they will get used."),Object(l.b)(i.c,{__position:1,__code:"<Horizontal>\n  <Horizontal sizing=\"flex\">\n    <Flex style={{ backgroundColor: 'lightskyblue' }}>Hello</Flex>\n    <Flex style={{ backgroundColor: 'lightpink' }}>World</Flex>\n  </Horizontal>\n  <Horizontal sizing=\"flex\">\n    <Flex style={{ backgroundColor: 'lightskyblue' }}>Hello</Flex>\n    <Flex style={{ backgroundColor: 'lightpink' }}>World</Flex>\n  </Horizontal>\n</Horizontal>",__scope:{props:this?this.props:t,Playground:i.c,Horizontal:r.d,Vertical:r.g,Flex:r.b,demos:a},mdxType:"Playground"},Object(l.b)(r.d,{mdxType:"Horizontal"},Object(l.b)(r.d,{sizing:"flex",mdxType:"Horizontal"},Object(l.b)(r.b,{style:{backgroundColor:"lightskyblue"},mdxType:"Flex"},"Hello"),Object(l.b)(r.b,{style:{backgroundColor:"lightpink"},mdxType:"Flex"},"World")),Object(l.b)(r.d,{sizing:"flex",mdxType:"Horizontal"},Object(l.b)(r.b,{style:{backgroundColor:"lightskyblue"},mdxType:"Flex"},"Hello"),Object(l.b)(r.b,{style:{backgroundColor:"lightpink"},mdxType:"Flex"},"World")))),Object(l.b)("h2",{id:"childplacementprops"},"ChildPlacementProps"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports all ",Object(l.b)("inlineCode",{parentName:"a"},"ChildPlacementProps")),"."),Object(l.b)("h2",{id:"glsprops"},"GLSProps"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports all ",Object(l.b)("inlineCode",{parentName:"a"},"GLSProps")),"."),Object(l.b)("h2",{id:"sizingprop"},"SizingProp"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," supports the ",Object(l.b)("inlineCode",{parentName:"p"},"sizing")," prop as explained in the ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle"),"."))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/horizontal.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-horizontal.6b9f0128ebf049135db8.js.map