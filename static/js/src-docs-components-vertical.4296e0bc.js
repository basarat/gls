(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/docs/components/vertical.mdx":function(e,t,l){"use strict";l.r(t),l.d(t,"default",function(){return d});var i=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=(l("./node_modules/react/index.js"),l("./node_modules/@mdx-js/react/dist/index.es.js")),n=l("./node_modules/docz/dist/index.esm.js"),r=l("./src/index.tsx"),c=l("./src/demos/index.tsx"),a={},b="wrapper";function d(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(o.b)(b,Object.assign({},a,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c.Star,null),Object(o.b)("h1",{id:"vertical"},"Vertical"),Object(o.b)("p",null,"Lays out children in a vertically spaced layout (",Object(o.b)("a",Object.assign({parentName:"p"},{href:"../defaults/"}),"default spacing is 24px"),")."),Object(o.b)(n.c,{__position:1,__code:"<Vertical>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n</Vertical>",__scope:{props:this?this.props:l,Playground:n.c,Vertical:r.i,demos:c},mdxType:"Playground"},Object(o.b)(r.i,{mdxType:"Vertical"},Object(o.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(o.b)("div",{style:{backgroundColor:"lightpink"}},"World"))),Object(o.b)("p",null,"Since ",Object(o.b)("inlineCode",{parentName:"p"},"Vertical")," follows the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"../principle-spacing/"}),"spacing principle")," you can compose / nest ",Object(o.b)("inlineCode",{parentName:"p"},"Vertical"),"s easily. The following example has three ",Object(o.b)("inlineCode",{parentName:"p"},"Verticals")," in a ",Object(o.b)("inlineCode",{parentName:"p"},"Vertical(Vertical(blue,pink),Vertical(blue,pink))")," heirarchy but to the user it looks seemless (like a single ",Object(o.b)("inlineCode",{parentName:"p"},"Vertical(blue,pink,blue,pink)"),"). This ability to nest allows you to easily create and reuse components without having to worry about how they will get used."),Object(o.b)(n.c,{__position:2,__code:"<Vertical>\n  <Vertical>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n    <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  </Vertical>\n  <Vertical>\n    <div style={{ backgroundColor: 'lightskyblue' }}>Second Hello</div>\n    <div style={{ backgroundColor: 'lightpink' }}>Second World</div>\n  </Vertical>\n</Vertical>",__scope:{props:this?this.props:l,Playground:n.c,Vertical:r.i,demos:c},mdxType:"Playground"},Object(o.b)(r.i,{mdxType:"Vertical"},Object(o.b)(r.i,{mdxType:"Vertical"},Object(o.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(o.b)("div",{style:{backgroundColor:"lightpink"}},"World")),Object(o.b)(r.i,{mdxType:"Vertical"},Object(o.b)("div",{style:{backgroundColor:"lightskyblue"}},"Second Hello"),Object(o.b)("div",{style:{backgroundColor:"lightpink"}},"Second World")))),Object(o.b)("h2",{id:"alignment"},"Alignment"),Object(o.b)("p",null,"By default ",Object(o.b)("inlineCode",{parentName:"p"},"verticalAlign:top")," and ",Object(o.b)("inlineCode",{parentName:"p"},"horizontalAlign:stretch"),". It helps you write simple vertical layouts that start vertically at the top and fill the horizontal space completely: "),Object(o.b)(n.c,{__position:3,__code:"<Vertical>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  <div style={{ backgroundColor: 'gold' }}>\ud83c\udf39</div>\n</Vertical>",__scope:{props:this?this.props:l,Playground:n.c,Vertical:r.i,demos:c},mdxType:"Playground"},Object(o.b)(r.i,{mdxType:"Vertical"},Object(o.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(o.b)("div",{style:{backgroundColor:"lightpink"}},"World"),Object(o.b)("div",{style:{backgroundColor:"gold"}},"\ud83c\udf39"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"verticalAlign?: 'top' /** default */ | 'center' | 'bottom'")," Controls vertical alignment of children. e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"verticalAlign='bottom'")," gives us:")),Object(o.b)(n.c,{__position:4,__code:"<Vertical verticalAlign=\"bottom\" style={{ height: '150px' }} spacing={10}>\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  <div style={{ backgroundColor: 'gold' }}>\ud83c\udf39</div>\n</Vertical>",__scope:{props:this?this.props:l,Playground:n.c,Vertical:r.i,demos:c},mdxType:"Playground"},Object(o.b)(r.i,{verticalAlign:"bottom",style:{height:"150px"},spacing:10,mdxType:"Vertical"},Object(o.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(o.b)("div",{style:{backgroundColor:"lightpink"}},"World"),Object(o.b)("div",{style:{backgroundColor:"gold"}},"\ud83c\udf39"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"horizontalAlign?: 'stretch' /** default */ | 'left' | 'center' | 'right'")," Controls horizontal alignment of children. e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"horizontalAlign='left'")," gives us:")),Object(o.b)(n.c,{__position:5,__code:"<Vertical horizontalAlign=\"left\">\n  <div style={{ backgroundColor: 'lightskyblue' }}>Hello</div>\n  <div style={{ backgroundColor: 'lightpink' }}>World</div>\n  <div style={{ backgroundColor: 'gold' }}>\ud83c\udf39</div>\n</Vertical>",__scope:{props:this?this.props:l,Playground:n.c,Vertical:r.i,demos:c},mdxType:"Playground"},Object(o.b)(r.i,{horizontalAlign:"left",mdxType:"Vertical"},Object(o.b)("div",{style:{backgroundColor:"lightskyblue"}},"Hello"),Object(o.b)("div",{style:{backgroundColor:"lightpink"}},"World"),Object(o.b)("div",{style:{backgroundColor:"gold"}},"\ud83c\udf39"))),Object(o.b)("h2",{id:"spacing"},"Spacing"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Vertical")," ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports ",Object(o.b)("inlineCode",{parentName:"a"},"spacing")),"."),Object(o.b)("h2",{id:"baseprops"},"BaseProps"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Vertical")," ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"../common-types/"}),"supports all ",Object(o.b)("inlineCode",{parentName:"a"},"BaseProps")),"."),Object(o.b)("h2",{id:"sizingprop"},"SizingProp"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Vertical")," supports the ",Object(o.b)("inlineCode",{parentName:"p"},"sizing")," prop as explained in the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"../principle-sizing/"}),"sizing principle"),"."))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/components/vertical.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=src-docs-components-vertical.9082e16e1e291f525576.js.map