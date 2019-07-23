(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/demos/index.tsx":function(e,t,n){"use strict";n.r(t),n.d(t,"BlueDiv",function(){return a}),n.d(t,"PinkDiv",function(){return c}),n.d(t,"Label",function(){return b}),n.d(t,"Input",function(){return p}),n.d(t,"buttonClass",function(){return u}),n.d(t,"Button",function(){return m});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("./node_modules/react/index.js"),i=n.n(l),r=n("./node_modules/typestyle/lib.es2015/index.js"),a=function(e){return i.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:e.children})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos/index.tsx"}});var c=function(e){return i.a.createElement("div",{style:{backgroundColor:"lightpink"},children:e.children})};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos/index.tsx"}});var s=r.style({}),b=function(e){return i.a.createElement("label",{className:s,children:e.children})};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/demos/index.tsx"}});var d=r.style({width:"calc(100% - 5px)",fontSize:"20px"}),p=function(e){return i.a.createElement("input",{className:d})};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Input",filename:"src/demos/index.tsx"}});var u=r.style({fontFamily:"helvetica",cursor:"pointer",height:"auto",padding:"12px 30px 11px",border:"1px solid #333",borderRadius:"3px",color:"white",backgroundColor:"#333",fontSize:"15px",textDecoration:"none",lineHeight:"1em",outline:"none",transition:"color .2s, background-color .2s",display:"inline-block",$nest:{"&:hover":{backgroundColor:"#666"},"&:active":{backgroundColor:"#666"},"&:focus":{outline:"thin dotted",outlineColor:"#333"}}});"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"buttonClass",filename:"src/demos/index.tsx"}});var m=function(e){e.className;var t=Object(o.a)(e,["className"]);return i.a.createElement("button",Object.assign({},t,{type:"button",className:r.classes(u,e.className)}))};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/demos/index.tsx"}})},"./src/docs/components/horizontal.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i=n("./node_modules/docz/dist/index.esm.js"),r=n("./src/index.tsx"),a=n("./src/demos/index.tsx"),c={},s="wrapper";function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)(s,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"horizontal"},"Horizontal"),Object(l.b)("p",null,"Lays out children in a horiztonally spaced layout."),Object(l.b)(i.c,{__position:0,__code:"<Horizontal>\n  <Flex style={{ backgroundColor: 'lightskyblue' }}>Hello</Flex>\n  <Flex style={{ backgroundColor: 'lightpink' }}>World</Flex>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:i.c,Horizontal:r.e,Vertical:r.h,Flex:r.b,Content:r.a,demos:a},mdxType:"Playground"},Object(l.b)(r.e,{mdxType:"Horizontal"},Object(l.b)(r.b,{style:{backgroundColor:"lightskyblue"},mdxType:"Flex"},"Hello"),Object(l.b)(r.b,{style:{backgroundColor:"lightpink"},mdxType:"Flex"},"World"))),Object(l.b)("p",null,"Since ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," follows the ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../principle-spacing/"}),"spacing principle")," you can compose / nest ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal"),"s easily. The following example has two ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal"),"s in a ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal(Horizontal(blue,pink),Horizontal(blue,pink)")," heirarchy but to the user it looks seemless (like a single ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal(blue,pink,blue,pink)"),"). This ability to nest allows you to easily create and reuse components without having to worry about how they will get used."),Object(l.b)(i.c,{__position:1,__code:"<Horizontal>\n  <Horizontal sizing=\"flex\">\n    <Flex style={{ backgroundColor: 'lightskyblue' }}>Hello</Flex>\n    <Flex style={{ backgroundColor: 'lightpink' }}>World</Flex>\n  </Horizontal>\n  <Horizontal sizing=\"flex\">\n    <Flex style={{ backgroundColor: 'lightskyblue' }}>Hello</Flex>\n    <Flex style={{ backgroundColor: 'lightpink' }}>World</Flex>\n  </Horizontal>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:i.c,Horizontal:r.e,Vertical:r.h,Flex:r.b,Content:r.a,demos:a},mdxType:"Playground"},Object(l.b)(r.e,{mdxType:"Horizontal"},Object(l.b)(r.e,{sizing:"flex",mdxType:"Horizontal"},Object(l.b)(r.b,{style:{backgroundColor:"lightskyblue"},mdxType:"Flex"},"Hello"),Object(l.b)(r.b,{style:{backgroundColor:"lightpink"},mdxType:"Flex"},"World")),Object(l.b)(r.e,{sizing:"flex",mdxType:"Horizontal"},Object(l.b)(r.b,{style:{backgroundColor:"lightskyblue"},mdxType:"Flex"},"Hello"),Object(l.b)(r.b,{style:{backgroundColor:"lightpink"},mdxType:"Flex"},"World")))),Object(l.b)("h2",{id:"alignment"},"Alignment"),Object(l.b)("p",null,"By default ",Object(l.b)("inlineCode",{parentName:"p"},"horizontalAlign:left")," and ",Object(l.b)("inlineCode",{parentName:"p"},"verticalAlign:stretch"),". It helps you write simple horizontal layouts that start horizontally at left and fill the vertical space completely: "),Object(l.b)(i.c,{__position:2,__code:"<Horizontal height={60}>\n  <Content verticalAlign=\"center\" style={{ backgroundColor: 'lightskyblue' }}>\n    Hello\n  </Content>\n  <Content verticalAlign=\"center\" style={{ backgroundColor: 'lightpink' }}>\n    World\n  </Content>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:i.c,Horizontal:r.e,Vertical:r.h,Flex:r.b,Content:r.a,demos:a},mdxType:"Playground"},Object(l.b)(r.e,{height:60,mdxType:"Horizontal"},Object(l.b)(r.a,{verticalAlign:"center",style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Hello"),Object(l.b)(r.a,{verticalAlign:"center",style:{backgroundColor:"lightpink"},mdxType:"Content"},"World"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"verticalAlign?: 'stretch' /** default */ | 'top' | 'center' | 'bottom'")," Controls vertical alignment of children. e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"verticalAlign='bottom'")," gives us:")),Object(l.b)(i.c,{__position:3,__code:"<Horizontal verticalAlign=\"bottom\" height={60}>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n</Horizontal>",__scope:{props:this?this.props:n,Playground:i.c,Horizontal:r.e,Vertical:r.h,Flex:r.b,Content:r.a,demos:a},mdxType:"Playground"},Object(l.b)(r.e,{verticalAlign:"bottom",height:60,mdxType:"Horizontal"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"World"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"horizontalAlign?: 'left' /** default */ | 'center' | 'right'")," Controls horizontal alignment of children. e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"horizontalAlign='right'")," gives us:")),Object(l.b)(i.c,{__position:4,__code:'<Horizontal horizontalAlign="right" height={60}>\n  <Content verticalAlign="center" style={{ backgroundColor: \'lightskyblue\' }}>\n    Hello\n  </Content>\n  <Content verticalAlign="center" style={{ backgroundColor: \'lightpink\' }}>\n    World\n  </Content>\n</Horizontal>',__scope:{props:this?this.props:n,Playground:i.c,Horizontal:r.e,Vertical:r.h,Flex:r.b,Content:r.a,demos:a},mdxType:"Playground"},Object(l.b)(r.e,{horizontalAlign:"right",height:60,mdxType:"Horizontal"},Object(l.b)(r.a,{verticalAlign:"center",style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Hello"),Object(l.b)(r.a,{verticalAlign:"center",style:{backgroundColor:"lightpink"},mdxType:"Content"},"World"))),Object(l.b)("h2",{id:"spacing"},"Spacing"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports ",Object(l.b)("inlineCode",{parentName:"a"},"spacing")),"."),Object(l.b)("h2",{id:"baseprops"},"BaseProps"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports all ",Object(l.b)("inlineCode",{parentName:"a"},"BaseProps")),"."),Object(l.b)("h2",{id:"sizingprop"},"SizingProp"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," supports the ",Object(l.b)("inlineCode",{parentName:"p"},"sizing")," prop as explained in the ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle"),"."))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/horizontal.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-horizontal.7cec9b67aa534afbfd7a.js.map