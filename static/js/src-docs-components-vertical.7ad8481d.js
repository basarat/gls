(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/demos/index.tsx":function(e,t,n){"use strict";n.r(t),n.d(t,"BlueDiv",function(){return a}),n.d(t,"PinkDiv",function(){return c}),n.d(t,"Label",function(){return b}),n.d(t,"Input",function(){return p}),n.d(t,"buttonClass",function(){return u}),n.d(t,"Button",function(){return m});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/react/index.js"),o=n.n(l),r=n("./node_modules/typestyle/lib.es2015/index.js"),a=function(e){return o.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:e.children})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos/index.tsx"}});var c=function(e){return o.a.createElement("div",{style:{backgroundColor:"lightpink"},children:e.children})};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos/index.tsx"}});var s=r.style({}),b=function(e){return o.a.createElement("label",{className:s,children:e.children})};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/demos/index.tsx"}});var d=r.style({width:"calc(100% - 5px)",fontSize:"20px"}),p=function(e){return o.a.createElement("input",{className:d})};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Input",filename:"src/demos/index.tsx"}});var u=r.style({fontFamily:"helvetica",cursor:"pointer",height:"auto",padding:"12px 30px 11px",border:"1px solid #333",borderRadius:"3px",color:"white",backgroundColor:"#333",fontSize:"15px",textDecoration:"none",lineHeight:"1em",outline:"none",transition:"color .2s, background-color .2s",display:"inline-block",$nest:{"&:hover":{backgroundColor:"#666"},"&:active":{backgroundColor:"#666"},"&:focus":{outline:"thin dotted",outlineColor:"#333"}}});"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"buttonClass",filename:"src/demos/index.tsx"}});var m=function(e){e.className;var t=Object(i.a)(e,["className"]);return o.a.createElement("button",Object.assign({},t,{type:"button",className:r.classes(u,e.className)}))};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/demos/index.tsx"}})},"./src/docs/components/vertical.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),o=n("./node_modules/docz/dist/index.esm.js"),r=n("./src/index.tsx"),a=n("./src/demos/index.tsx"),c={},s="wrapper";function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)(s,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"vertical"},"Vertical"),Object(l.b)("p",null,"Lays out children in a vertically spaced layout."),Object(l.b)(o.c,{__position:0,__code:"<Vertical>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n</Vertical>",__scope:{props:this?this.props:n,Playground:o.c,Vertical:r.h,demos:a},mdxType:"Playground"},Object(l.b)(r.h,{mdxType:"Vertical"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"World"))),Object(l.b)("p",null,"Since ",Object(l.b)("inlineCode",{parentName:"p"},"Vertical")," follows the ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../principle-spacing/"}),"spacing principle")," you can compose / nest ",Object(l.b)("inlineCode",{parentName:"p"},"Vertical"),"s easily. The following example has three ",Object(l.b)("inlineCode",{parentName:"p"},"Verticals")," in a ",Object(l.b)("inlineCode",{parentName:"p"},"Vertical(Vertical(blue,pink),Vertical(blue,pink))")," heirarchy but to the user it looks seemless (like a single ",Object(l.b)("inlineCode",{parentName:"p"},"Vertical(blue,pink,blue,pink)"),"). This ability to nest allows you to easily create and reuse components without having to worry about how they will get used."),Object(l.b)(o.c,{__position:1,__code:"<Vertical>\n  <Vertical>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n    <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  </Vertical>\n  <Vertical>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Second Hello</div>\n    <div style={{ backgroundColor: 'lightpink' }}>Second World</div>\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:n,Playground:o.c,Vertical:r.h,demos:a},mdxType:"Playground"},Object(l.b)(r.h,{mdxType:"Vertical"},Object(l.b)(r.h,{mdxType:"Vertical"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"World")),Object(l.b)(r.h,{mdxType:"Vertical"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Second Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"Second World")))),Object(l.b)("h2",{id:"childplacementprops"},"ChildPlacementProps"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Vertical")," ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports all ",Object(l.b)("inlineCode",{parentName:"a"},"ChildPlacementProps")),"."),Object(l.b)("h2",{id:"glsprops"},"GLSProps"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Vertical")," ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports all ",Object(l.b)("inlineCode",{parentName:"a"},"GLSProps")),"."),Object(l.b)("h2",{id:"sizingprop"},"SizingProp"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Vertical")," supports the ",Object(l.b)("inlineCode",{parentName:"p"},"sizing")," prop as explained in the ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle"),"."))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/vertical.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-vertical.2cbdebfc0b3e0a7c60ba.js.map