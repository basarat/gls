(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/demos/index.tsx":function(e,t,n){"use strict";n.r(t),n.d(t,"BlueDiv",function(){return a}),n.d(t,"PinkDiv",function(){return d}),n.d(t,"Label",function(){return c}),n.d(t,"Input",function(){return u}),n.d(t,"buttonClass",function(){return p}),n.d(t,"Button",function(){return m});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),i=n.n(r),l=n("./node_modules/typestyle/lib.es2015/index.js"),a=function(e){return i.a.createElement("div",{style:{backgroundColor:"lightskyblue"},children:e.children})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BlueDiv",filename:"src/demos/index.tsx"}});var d=function(e){return i.a.createElement("div",{style:{backgroundColor:"lightpink"},children:e.children})};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PinkDiv",filename:"src/demos/index.tsx"}});var s=l.style({}),c=function(e){return i.a.createElement("label",{className:s,children:e.children})};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/demos/index.tsx"}});var b=l.style({width:"calc(100% - 5px)",fontSize:"20px"}),u=function(e){return i.a.createElement("input",{className:b})};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Input",filename:"src/demos/index.tsx"}});var p=l.style({fontFamily:"helvetica",cursor:"pointer",height:"auto",padding:"12px 30px 11px",border:"1px solid #333",borderRadius:"3px",color:"white",backgroundColor:"#333",fontSize:"15px",textDecoration:"none",lineHeight:"1em",outline:"none",transition:"color .2s, background-color .2s",display:"inline-block",$nest:{"&:hover":{backgroundColor:"#666"},"&:active":{backgroundColor:"#666"},"&:focus":{outline:"thin dotted",outlineColor:"#333"}}});"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"buttonClass",filename:"src/demos/index.tsx"}});var m=function(e){e.className;var t=Object(o.a)(e,["className"]);return i.a.createElement("button",Object.assign({},t,{type:"button",className:l.classes(p,e.className)}))};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/demos/index.tsx"}})},"./src/docs/components/examples.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i=n("./node_modules/docz/dist/index.esm.js"),l=n("./src/index.tsx"),a=n("./src/demos/index.tsx"),d={},s="wrapper";function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(s,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"examples"},"Examples"),Object(r.b)("p",null,"We've already presented quite a few examples in the individual component demos. Still we'd like to cover more by providing a few examples below for you to play around with."),Object(r.b)("h2",{id:"header-body-footer"},"Header Body Footer"),Object(r.b)("p",null,"A simple ",Object(r.b)("inlineCode",{parentName:"p"},"Vertical(Content,Flex,Content)")," takes care of this common layout: "),Object(r.b)(i.c,{__position:0,__code:"<Vertical height={'100%'} spacing={0}>\n  <Content style={{ backgroundColor: 'lightskyblue' }}>Header</Content>\n\n  <Flex style={{ backgroundColor: 'darkorange' }}>Body</Flex>\n\n  <Content style={{ backgroundColor: 'lightpink' }}>Footer</Content>\n</Vertical>",__scope:{props:this?this.props:n,Playground:i.c,Content:l.a,Vertical:l.h,Horizontal:l.e,Flex:l.b,demos:a},style:{height:"200px"},mdxType:"Playground"},Object(r.b)(l.h,{height:"100%",spacing:0,mdxType:"Vertical"},Object(r.b)(l.a,{style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Header"),Object(r.b)(l.b,{style:{backgroundColor:"darkorange"},mdxType:"Flex"},"Body"),Object(r.b)(l.a,{style:{backgroundColor:"lightpink"},mdxType:"Content"},"Footer"))),Object(r.b)("h2",{id:"header-sidebar-body-sidebar-footer"},"Header Sidebar Body Sidebar Footer"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Vertical(Content-Header,Horizontal(Content-Sidebar, Flex-Body, Content-Sidebar),Content-Footer)")," takes care of this common layout: "),Object(r.b)(i.c,{__position:1,__code:"<Vertical height={'100%'} spacing={0}>\n  <Content style={{ backgroundColor: 'lightskyblue' }}>Header</Content>\n\n  <Horizontal sizing=\"flex\" spacing={0}>\n    <Content padding={[0, 10]} style={{ backgroundColor: 'limegreen' }}>\n      Sidebar 1\n    </Content>\n    <Flex style={{ backgroundColor: 'darkorange' }}>Body</Flex>\n    <Content padding={[0, 10]} style={{ backgroundColor: 'gold' }}>\n      Sidebar 2\n    </Content>\n  </Horizontal>\n\n  <Content style={{ backgroundColor: 'lightpink' }}>Footer</Content>\n</Vertical>",__scope:{props:this?this.props:n,Playground:i.c,Content:l.a,Vertical:l.h,Horizontal:l.e,Flex:l.b,demos:a},style:{height:"200px"},mdxType:"Playground"},Object(r.b)(l.h,{height:"100%",spacing:0,mdxType:"Vertical"},Object(r.b)(l.a,{style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Header"),Object(r.b)(l.e,{sizing:"flex",spacing:0,mdxType:"Horizontal"},Object(r.b)(l.a,{padding:[0,10],style:{backgroundColor:"limegreen"},mdxType:"Content"},"Sidebar 1"),Object(r.b)(l.b,{style:{backgroundColor:"darkorange"},mdxType:"Flex"},"Body"),Object(r.b)(l.a,{padding:[0,10],style:{backgroundColor:"gold"},mdxType:"Content"},"Sidebar 2")),Object(r.b)(l.a,{style:{backgroundColor:"lightpink"},mdxType:"Content"},"Footer"))))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/examples.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-examples.cf84aef4e989fefc0104.js.map