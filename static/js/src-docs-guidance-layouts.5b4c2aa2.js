(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/docs/guidance/layouts.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return b});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),a=o("./node_modules/docz/dist/index.esm.js"),l=o("./src/index.tsx"),d=o("./src/demos/index.tsx"),i={},c="wrapper";function b(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.b)(c,Object.assign({},i,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)(d.Star,null),Object(r.b)("h1",{id:"layout-examples"},"Layout Examples"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This section is in a ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"../guidance/"}),"series of sections that provide further guidance for success"),".")),Object(r.b)("p",null,"Here are a few layout examples for you to play around with."),Object(r.b)("h2",{id:"header-body-footer"},"Header Body Footer"),Object(r.b)("p",null,"A simple ",Object(r.b)("inlineCode",{parentName:"p"},"Vertical(Content,Flex,Content)")," takes care of this common layout: "),Object(r.b)(a.c,{__position:1,__code:"<Vertical height={'100%'} spacing={0}>\n  <Content style={{ backgroundColor: 'lightskyblue' }}>Header</Content>\n\n  <Flex style={{ backgroundColor: 'darkorange' }}>Body</Flex>\n\n  <Content style={{ backgroundColor: 'lightpink' }}>Footer</Content>\n</Vertical>",__scope:{props:this?this.props:o,Playground:a.c,Content:l.b,Vertical:l.j,Horizontal:l.g,Flex:l.c,demos:d},style:{height:"200px"},mdxType:"Playground"},Object(r.b)(l.j,{height:"100%",spacing:0,mdxType:"Vertical"},Object(r.b)(l.b,{style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Header"),Object(r.b)(l.c,{style:{backgroundColor:"darkorange"},mdxType:"Flex"},"Body"),Object(r.b)(l.b,{style:{backgroundColor:"lightpink"},mdxType:"Content"},"Footer"))),Object(r.b)("h2",{id:"header-sidebar-body-sidebar-footer"},"Header Sidebar Body Sidebar Footer"),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{}),"Vertical\n  Content-Header\n  Horizontal[sizing=flex] \n    Content-Sidebar, Flex-Body, Content-Sidebar \n  Content-Footer\n")),Object(r.b)("p",null,"takes care of this common layout: "),Object(r.b)(a.c,{__position:2,__code:"<Vertical height={'100%'} spacing={0}>\n  <Content style={{ backgroundColor: 'lightskyblue' }}>Header</Content>\n\n  <Horizontal sizing=\"flex\" spacing={0}>\n    <Content padding={[0, 10]} style={{ backgroundColor: 'limegreen' }}>\n      Sidebar 1\n    </Content>\n    <Flex style={{ backgroundColor: 'darkorange' }}>Body</Flex>\n    <Content padding={[0, 10]} style={{ backgroundColor: 'gold' }}>\n      Sidebar 2\n    </Content>\n  </Horizontal>\n\n  <Content style={{ backgroundColor: 'lightpink' }}>Footer</Content>\n</Vertical>",__scope:{props:this?this.props:o,Playground:a.c,Content:l.b,Vertical:l.j,Horizontal:l.g,Flex:l.c,demos:d},style:{height:"200px"},mdxType:"Playground"},Object(r.b)(l.j,{height:"100%",spacing:0,mdxType:"Vertical"},Object(r.b)(l.b,{style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Header"),Object(r.b)(l.g,{sizing:"flex",spacing:0,mdxType:"Horizontal"},Object(r.b)(l.b,{padding:[0,10],style:{backgroundColor:"limegreen"},mdxType:"Content"},"Sidebar 1"),Object(r.b)(l.c,{style:{backgroundColor:"darkorange"},mdxType:"Flex"},"Body"),Object(r.b)(l.b,{padding:[0,10],style:{backgroundColor:"gold"},mdxType:"Content"},"Sidebar 2")),Object(r.b)(l.b,{style:{backgroundColor:"lightpink"},mdxType:"Content"},"Footer"))))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/guidance/layouts.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-guidance-layouts.55bd0f23728a347f8314.js.map