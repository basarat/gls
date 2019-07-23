(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/demos/index.tsx":function(e,t,l){"use strict";l.r(t),l.d(t,"BlueDiv",function(){return c}),l.d(t,"PinkDiv",function(){return a}),l.d(t,"Label",function(){return d}),l.d(t,"Input",function(){return p}),l.d(t,"buttonClass",function(){return u}),l.d(t,"Button",function(){return g});var i=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=l("./node_modules/react/index.js"),o=l.n(n),r=l("./node_modules/typestyle/lib.es2015/index.js"),c=function(e){return o.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:e.children})};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos/index.tsx"}});var a=function(e){return o.a.createElement("div",{style:{backgroundColor:"lightpink"},children:e.children})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos/index.tsx"}});var s=r.style({}),d=function(e){return o.a.createElement("label",{className:s,children:e.children})};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/demos/index.tsx"}});var b=r.style({width:"calc(100% - 5px)",fontSize:"20px"}),p=function(e){return o.a.createElement("input",{className:b})};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Input",filename:"src/demos/index.tsx"}});var u=r.style({fontFamily:"helvetica",cursor:"pointer",height:"auto",padding:"12px 30px 11px",border:"1px solid #333",borderRadius:"3px",color:"white",backgroundColor:"#333",fontSize:"15px",textDecoration:"none",lineHeight:"1em",outline:"none",transition:"color .2s, background-color .2s",display:"inline-block",$nest:{"&:hover":{backgroundColor:"#666"},"&:active":{backgroundColor:"#666"},"&:focus":{outline:"thin dotted",outlineColor:"#333"}}});"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"buttonClass",filename:"src/demos/index.tsx"}});var g=function(e){e.className;var t=Object(i.a)(e,["className"]);return o.a.createElement("button",Object.assign({},t,{type:"button",className:r.classes(u,e.className)}))};"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/demos/index.tsx"}})},"./src/docs/components/vertical.mdx":function(e,t,l){"use strict";l.r(t),l.d(t,"default",function(){return d});var i=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=(l("./node_modules/react/index.js"),l("./node_modules/@mdx-js/react/dist/index.es.js")),o=l("./node_modules/docz/dist/index.esm.js"),r=l("./src/index.tsx"),c=l("./src/demos/index.tsx"),a={},s="wrapper";function d(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(n.b)(s,Object.assign({},a,l,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"vertical"},"Vertical"),Object(n.b)("p",null,"Lays out children in a vertically spaced layout."),Object(n.b)(o.c,{__position:0,__code:"<Vertical>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n</Vertical>",__scope:{props:this?this.props:l,Playground:o.c,Vertical:r.h,demos:c},mdxType:"Playground"},Object(n.b)(r.h,{mdxType:"Vertical"},Object(n.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(n.b)("div",{style:{backgroundColor:"lightpink"}},"World"))),Object(n.b)("p",null,"Since ",Object(n.b)("inlineCode",{parentName:"p"},"Vertical")," follows the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"../principle-spacing/"}),"spacing principle")," you can compose / nest ",Object(n.b)("inlineCode",{parentName:"p"},"Vertical"),"s easily. The following example has three ",Object(n.b)("inlineCode",{parentName:"p"},"Verticals")," in a ",Object(n.b)("inlineCode",{parentName:"p"},"Vertical(Vertical(blue,pink),Vertical(blue,pink))")," heirarchy but to the user it looks seemless (like a single ",Object(n.b)("inlineCode",{parentName:"p"},"Vertical(blue,pink,blue,pink)"),"). This ability to nest allows you to easily create and reuse components without having to worry about how they will get used."),Object(n.b)(o.c,{__position:1,__code:"<Vertical>\n  <Vertical>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n    <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  </Vertical>\n  <Vertical>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Second Hello</div>\n    <div style={{ backgroundColor: 'lightpink' }}>Second World</div>\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:l,Playground:o.c,Vertical:r.h,demos:c},mdxType:"Playground"},Object(n.b)(r.h,{mdxType:"Vertical"},Object(n.b)(r.h,{mdxType:"Vertical"},Object(n.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(n.b)("div",{style:{backgroundColor:"lightpink"}},"World")),Object(n.b)(r.h,{mdxType:"Vertical"},Object(n.b)("div",{style:{backgroundColor:"lightskyblue"}},"Second Hello"),Object(n.b)("div",{style:{backgroundColor:"lightpink"}},"Second World")))),Object(n.b)("h2",{id:"alignment"},"Alignment"),Object(n.b)("p",null,"By default ",Object(n.b)("inlineCode",{parentName:"p"},"verticalAlign:top")," and ",Object(n.b)("inlineCode",{parentName:"p"},"horizontalAlign:stretch"),". It helps you write simple vertical layouts that start vertically at the top and fill the horizontal space completely: "),Object(n.b)(o.c,{__position:2,__code:"<Vertical>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  <div style={{ backgroundColor: 'gold' }}>\ud83c\udf39</div>\n</Vertical>",__scope:{props:this?this.props:l,Playground:o.c,Vertical:r.h,demos:c},mdxType:"Playground"},Object(n.b)(r.h,{mdxType:"Vertical"},Object(n.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(n.b)("div",{style:{backgroundColor:"lightpink"}},"World"),Object(n.b)("div",{style:{backgroundColor:"gold"}},"\ud83c\udf39"))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"verticalAlign?: 'top' /** default */ | 'center' | 'bottom'")," Controls vertical alignment of children. e.g. ",Object(n.b)("inlineCode",{parentName:"li"},"verticalAlign='bottom'")," gives us:")),Object(n.b)(o.c,{__position:3,__code:"<Vertical verticalAlign=\"bottom\" style={{ height: '150px' }} spacing={10}>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  <div style={{ backgroundColor: 'gold' }}>\ud83c\udf39</div>\n</Vertical>",__scope:{props:this?this.props:l,Playground:o.c,Vertical:r.h,demos:c},mdxType:"Playground"},Object(n.b)(r.h,{verticalAlign:"bottom",style:{height:"150px"},spacing:10,mdxType:"Vertical"},Object(n.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(n.b)("div",{style:{backgroundColor:"lightpink"}},"World"),Object(n.b)("div",{style:{backgroundColor:"gold"}},"\ud83c\udf39"))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"horizontalAlign?: 'stretch' /** default */ | 'left' | 'center' | 'right'")," Controls horizontal alignment of children. e.g. ",Object(n.b)("inlineCode",{parentName:"li"},"horizontalAlign='right'")," gives us:")),Object(n.b)(o.c,{__position:4,__code:"<Vertical horizontalAlign=\"right\">\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  <div style={{ backgroundColor: 'gold' }}>\ud83c\udf39</div>\n</Vertical>",__scope:{props:this?this.props:l,Playground:o.c,Vertical:r.h,demos:c},mdxType:"Playground"},Object(n.b)(r.h,{horizontalAlign:"right",mdxType:"Vertical"},Object(n.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(n.b)("div",{style:{backgroundColor:"lightpink"}},"World"),Object(n.b)("div",{style:{backgroundColor:"gold"}},"\ud83c\udf39"))),Object(n.b)("h2",{id:"spacing"},"Spacing"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Vertical")," ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports ",Object(n.b)("inlineCode",{parentName:"a"},"spacing")),"."),Object(n.b)("h2",{id:"baseprops"},"BaseProps"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Vertical")," ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports all ",Object(n.b)("inlineCode",{parentName:"a"},"BaseProps")),"."),Object(n.b)("h2",{id:"sizingprop"},"SizingProp"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Vertical")," supports the ",Object(n.b)("inlineCode",{parentName:"p"},"sizing")," prop as explained in the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle"),"."))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/vertical.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-vertical.ccf79955177cfda6a28a.js.map