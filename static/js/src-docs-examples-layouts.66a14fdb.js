(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/docs/examples/layouts.mdx":function(e,o,t){"use strict";t.r(o),t.d(o,"default",function(){return b});var n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),a=t("./node_modules/docz/dist/index.esm.js"),l=t("./src/index.tsx"),d=t("./src/demos/index.tsx"),i={},s="wrapper";function b(e){var o=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)(s,Object.assign({},i,t,{components:o,mdxType:"MDXLayout"}),Object(r.b)(d.Star,null),Object(r.b)("h1",{id:"examples"},"Examples"),Object(r.b)("p",null,"We've already presented quite a few examples in the individual component demos. Here are a few layout examples for you to play around with."),Object(r.b)("h2",{id:"header-body-footer"},"Header Body Footer"),Object(r.b)("p",null,"A simple ",Object(r.b)("inlineCode",{parentName:"p"},"Vertical(Content,Flex,Content)")," takes care of this common layout: "),Object(r.b)(a.c,{__position:1,__code:"<Vertical height={'100%'} spacing={0}>\n  <Content style={{ backgroundColor: 'lightskyblue' }}>Header</Content>\n\n  <Flex style={{ backgroundColor: 'darkorange' }}>Body</Flex>\n\n  <Content style={{ backgroundColor: 'lightpink' }}>Footer</Content>\n</Vertical>",__scope:{props:this?this.props:t,Playground:a.c,Content:l.a,Vertical:l.i,Horizontal:l.f,Flex:l.b,demos:d},style:{height:"200px"},mdxType:"Playground"},Object(r.b)(l.i,{height:"100%",spacing:0,mdxType:"Vertical"},Object(r.b)(l.a,{style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Header"),Object(r.b)(l.b,{style:{backgroundColor:"darkorange"},mdxType:"Flex"},"Body"),Object(r.b)(l.a,{style:{backgroundColor:"lightpink"},mdxType:"Content"},"Footer"))),Object(r.b)("h2",{id:"header-sidebar-body-sidebar-footer"},"Header Sidebar Body Sidebar Footer"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Vertical(Content-Header,Horizontal(Content-Sidebar, Flex-Body, Content-Sidebar),Content-Footer)")," takes care of this common layout: "),Object(r.b)(a.c,{__position:2,__code:"<Vertical height={'100%'} spacing={0}>\n  <Content style={{ backgroundColor: 'lightskyblue' }}>Header</Content>\n\n  <Horizontal sizing=\"flex\" spacing={0}>\n    <Content padding={[0, 10]} style={{ backgroundColor: 'limegreen' }}>\n      Sidebar 1\n    </Content>\n    <Flex style={{ backgroundColor: 'darkorange' }}>Body</Flex>\n    <Content padding={[0, 10]} style={{ backgroundColor: 'gold' }}>\n      Sidebar 2\n    </Content>\n  </Horizontal>\n\n  <Content style={{ backgroundColor: 'lightpink' }}>Footer</Content>\n</Vertical>",__scope:{props:this?this.props:t,Playground:a.c,Content:l.a,Vertical:l.i,Horizontal:l.f,Flex:l.b,demos:d},style:{height:"200px"},mdxType:"Playground"},Object(r.b)(l.i,{height:"100%",spacing:0,mdxType:"Vertical"},Object(r.b)(l.a,{style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Header"),Object(r.b)(l.f,{sizing:"flex",spacing:0,mdxType:"Horizontal"},Object(r.b)(l.a,{padding:[0,10],style:{backgroundColor:"limegreen"},mdxType:"Content"},"Sidebar 1"),Object(r.b)(l.b,{style:{backgroundColor:"darkorange"},mdxType:"Flex"},"Body"),Object(r.b)(l.a,{padding:[0,10],style:{backgroundColor:"gold"},mdxType:"Content"},"Sidebar 2")),Object(r.b)(l.a,{style:{backgroundColor:"lightpink"},mdxType:"Content"},"Footer"))))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/examples/layouts.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-examples-layouts.b71f778647a4c89d4d5c.js.map