(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./src/docs/components/horizontal.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return s});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),i=o("./node_modules/docz/dist/index.esm.js"),r=o("./src/index.tsx"),a=o("./src/demos/index.tsx"),b={},c="wrapper";function s(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(l.b)(c,Object.assign({},b,o,{components:t,mdxType:"MDXLayout"}),Object(l.b)(a.Star,null),Object(l.b)("h1",{id:"horizontal"},"Horizontal"),Object(l.b)("p",null,"Lays out children in a horiztonally spaced layout (",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../defaults/"}),"default spacing is 24px"),")."),Object(l.b)(i.c,{__position:1,__code:"<Horizontal>\n  <Flex style={{ backgroundColor: 'lightskyblue' }}>Hello</Flex>\n  <Flex style={{ backgroundColor: 'lightpink' }}>World</Flex>\n</Horizontal>",__scope:{props:this?this.props:o,Playground:i.c,Horizontal:r.f,Vertical:r.i,Flex:r.b,Content:r.a,demos:a},mdxType:"Playground"},Object(l.b)(r.f,{mdxType:"Horizontal"},Object(l.b)(r.b,{style:{backgroundColor:"lightskyblue"},mdxType:"Flex"},"Hello"),Object(l.b)(r.b,{style:{backgroundColor:"lightpink"},mdxType:"Flex"},"World"))),Object(l.b)("p",null,"Since ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," follows the ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../principle-spacing/"}),"spacing principle")," you can compose / nest ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal"),"s easily. The following example has two ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal"),"s in a ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal(Horizontal(blue,pink),Horizontal(blue,pink))")," heirarchy but to the user it looks seemless (like a single ",Object(l.b)("inlineCode",{parentName:"p"},"Horizontal(blue,pink,blue,pink)"),"). This ability to nest allows you to easily create and reuse components without having to worry about how they will get used."),Object(l.b)(i.c,{__position:2,__code:"<Horizontal>\n  <Horizontal sizing=\"flex\">\n    <Flex style={{ backgroundColor: 'lightskyblue' }}>Hello</Flex>\n    <Flex style={{ backgroundColor: 'lightpink' }}>World</Flex>\n  </Horizontal>\n  <Horizontal sizing=\"flex\">\n    <Flex style={{ backgroundColor: 'lightskyblue' }}>Hello</Flex>\n    <Flex style={{ backgroundColor: 'lightpink' }}>World</Flex>\n  </Horizontal>\n</Horizontal>",__scope:{props:this?this.props:o,Playground:i.c,Horizontal:r.f,Vertical:r.i,Flex:r.b,Content:r.a,demos:a},mdxType:"Playground"},Object(l.b)(r.f,{mdxType:"Horizontal"},Object(l.b)(r.f,{sizing:"flex",mdxType:"Horizontal"},Object(l.b)(r.b,{style:{backgroundColor:"lightskyblue"},mdxType:"Flex"},"Hello"),Object(l.b)(r.b,{style:{backgroundColor:"lightpink"},mdxType:"Flex"},"World")),Object(l.b)(r.f,{sizing:"flex",mdxType:"Horizontal"},Object(l.b)(r.b,{style:{backgroundColor:"lightskyblue"},mdxType:"Flex"},"Hello"),Object(l.b)(r.b,{style:{backgroundColor:"lightpink"},mdxType:"Flex"},"World")))),Object(l.b)("h2",{id:"alignment"},"Alignment"),Object(l.b)("p",null,"By default ",Object(l.b)("inlineCode",{parentName:"p"},"horizontalAlign:left")," and ",Object(l.b)("inlineCode",{parentName:"p"},"verticalAlign:stretch"),". It helps you write simple horizontal layouts that start horizontally at left and fill the vertical space completely: "),Object(l.b)(i.c,{__position:3,__code:"<Horizontal height={60}>\n  <Content verticalAlign=\"center\" style={{ backgroundColor: 'lightskyblue' }}>\n    Hello\n  </Content>\n  <Content verticalAlign=\"center\" style={{ backgroundColor: 'lightpink' }}>\n    World\n  </Content>\n</Horizontal>",__scope:{props:this?this.props:o,Playground:i.c,Horizontal:r.f,Vertical:r.i,Flex:r.b,Content:r.a,demos:a},mdxType:"Playground"},Object(l.b)(r.f,{height:60,mdxType:"Horizontal"},Object(l.b)(r.a,{verticalAlign:"center",style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Hello"),Object(l.b)(r.a,{verticalAlign:"center",style:{backgroundColor:"lightpink"},mdxType:"Content"},"World"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"verticalAlign?: 'stretch' /** default */ | 'top' | 'center' | 'bottom'")," Controls vertical alignment of children. e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"verticalAlign='top'")," gives us:")),Object(l.b)(i.c,{__position:4,__code:"<Horizontal verticalAlign=\"top\" height={60}>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n</Horizontal>",__scope:{props:this?this.props:o,Playground:i.c,Horizontal:r.f,Vertical:r.i,Flex:r.b,Content:r.a,demos:a},mdxType:"Playground"},Object(l.b)(r.f,{verticalAlign:"top",height:60,mdxType:"Horizontal"},Object(l.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(l.b)("div",{style:{backgroundColor:"lightpink"}},"World"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"horizontalAlign?: 'left' /** default */ | 'center' | 'right'")," Controls horizontal alignment of children. e.g. ",Object(l.b)("inlineCode",{parentName:"li"},"horizontalAlign='right'")," gives us:")),Object(l.b)(i.c,{__position:5,__code:'<Horizontal horizontalAlign="right" height={60}>\n  <Content verticalAlign="center" style={{ backgroundColor: \'lightskyblue\' }}>\n    Hello\n  </Content>\n  <Content verticalAlign="center" style={{ backgroundColor: \'lightpink\' }}>\n    World\n  </Content>\n</Horizontal>',__scope:{props:this?this.props:o,Playground:i.c,Horizontal:r.f,Vertical:r.i,Flex:r.b,Content:r.a,demos:a},mdxType:"Playground"},Object(l.b)(r.f,{horizontalAlign:"right",height:60,mdxType:"Horizontal"},Object(l.b)(r.a,{verticalAlign:"center",style:{backgroundColor:"lightskyblue"},mdxType:"Content"},"Hello"),Object(l.b)(r.a,{verticalAlign:"center",style:{backgroundColor:"lightpink"},mdxType:"Content"},"World"))),Object(l.b)("h2",{id:"spacing"},"Spacing"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports ",Object(l.b)("inlineCode",{parentName:"a"},"spacing")),"."),Object(l.b)("h2",{id:"baseprops"},"BaseProps"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports all ",Object(l.b)("inlineCode",{parentName:"a"},"BaseProps")),"."),Object(l.b)("h2",{id:"sizingprop"},"SizingProp"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Horizontal")," supports the ",Object(l.b)("inlineCode",{parentName:"p"},"sizing")," prop as explained in the ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle"),"."))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/horizontal.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-horizontal.d3c412799ea385ccdf7e.js.map